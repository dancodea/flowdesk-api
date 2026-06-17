import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { TimesheetStatus, Role } from '../../generated/prisma/enums';
import { PrismaService } from '../../prisma/prisma.service';
import { AUDIT_EVENT } from '../audit/audit.types';
import type { AuditEvent } from '../audit/audit.types';
import { NotificationsService } from '../notifications/notifications.service';
import {
  ApproveTimesheetDto,
  GetOrCreateTimesheetDto,
  ListTimesheetsDto,
  RejectTimesheetDto,
} from './dto';

const MANAGER_ROLES: Role[] = [
  Role.ORG_ADMIN,
  Role.HR_MANAGER,
  Role.DEPARTMENT_MANAGER,
  Role.TEAM_LEAD,
];

@Injectable()
export class TimesheetsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly notifications: NotificationsService,
    private readonly events: EventEmitter2,
  ) {}

  private requireTenant(organizationId: string | null): string {
    if (!organizationId)
      throw new BadRequestException('No organization context on this account');
    return organizationId;
  }

  private emitAudit(event: AuditEvent) {
    this.events.emit(AUDIT_EVENT, event);
  }

  // ── Get or create ──────────────────────────────────────────────────────────────

  async getOrCreate(
    organizationId: string | null,
    userId: string,
    dto: GetOrCreateTimesheetDto,
  ) {
    const orgId = this.requireTenant(organizationId);

    const employee = await this.prisma.employee.findFirst({
      where: { userId, organizationId: orgId, deletedAt: null },
    });
    if (!employee) throw new NotFoundException('Employee record not found');

    const weekStart = new Date(dto.weekStart);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 6);

    let timesheet = await this.prisma.timesheet.upsert({
      where: { employeeId_weekStart: { employeeId: employee.id, weekStart } },
      create: {
        organizationId: orgId,
        employeeId: employee.id,
        weekStart,
        weekEnd,
        status: TimesheetStatus.DRAFT,
      },
      update: {},
      include: {
        employee: { select: { id: true, firstName: true, lastName: true } },
      },
    });

    // Recalculate hours from attendance for the week.
    timesheet = await this.recalcHours(
      timesheet.id,
      employee.id,
      weekStart,
      weekEnd,
      orgId,
    );

    return timesheet;
  }

  // ── Submit ─────────────────────────────────────────────────────────────────────

  async submit(organizationId: string | null, userId: string, id: string) {
    const orgId = this.requireTenant(organizationId);

    const employee = await this.prisma.employee.findFirst({
      where: { userId, organizationId: orgId, deletedAt: null },
    });
    if (!employee) throw new NotFoundException('Employee record not found');

    const timesheet = await this.findOne(orgId, id);
    if (timesheet.employeeId !== employee.id)
      throw new BadRequestException('You can only submit your own timesheets');
    if (timesheet.status !== TimesheetStatus.DRAFT)
      throw new BadRequestException('Only draft timesheets can be submitted');

    const updated = await this.prisma.timesheet.update({
      where: { id },
      data: { status: TimesheetStatus.SUBMITTED, submittedAt: new Date() },
    });

    // Notify manager.
    if (employee.managerId) {
      const manager = await this.prisma.employee.findFirst({
        where: { id: employee.managerId, deletedAt: null },
        select: { userId: true },
      });
      if (manager?.userId) {
        await this.notifications
          .create({
            organizationId: orgId,
            userId: manager.userId,
            type: 'timesheet.submitted',
            title: 'Timesheet submitted for review',
            body: `${employee.firstName} ${employee.lastName} has submitted their timesheet for review.`,
          })
          .catch(() => null);
      }
    }

    return updated;
  }

  // ── Approve ────────────────────────────────────────────────────────────────────

  async approve(
    organizationId: string | null,
    actorId: string,
    actorName: string,
    actorRole: string,
    id: string,
    dto: ApproveTimesheetDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    const timesheet = await this.findOne(orgId, id);

    if (timesheet.status !== TimesheetStatus.SUBMITTED)
      throw new BadRequestException(
        'Only submitted timesheets can be approved',
      );

    await this.prisma.timesheet.update({
      where: { id },
      data: {
        status: TimesheetStatus.APPROVED,
        approvedBy: actorId,
        approvedAt: new Date(),
      },
    });

    this.emitAudit({
      organizationId: orgId,
      action: 'timesheet.approved',
      resourceType: 'Timesheet',
      resourceId: id,
      actorId,
      actorName,
      actorRole,
    });

    await this.notifyEmployee(
      orgId,
      timesheet.employeeId,
      'Your timesheet has been approved',
      dto.comment,
    );

    return { approved: true };
  }

  // ── Reject ─────────────────────────────────────────────────────────────────────

  async reject(
    organizationId: string | null,
    actorId: string,
    actorName: string,
    actorRole: string,
    id: string,
    dto: RejectTimesheetDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    const timesheet = await this.findOne(orgId, id);

    if (timesheet.status !== TimesheetStatus.SUBMITTED)
      throw new BadRequestException(
        'Only submitted timesheets can be rejected',
      );

    await this.prisma.timesheet.update({
      where: { id },
      data: { status: TimesheetStatus.REJECTED, rejectionReason: dto.reason },
    });

    this.emitAudit({
      organizationId: orgId,
      action: 'timesheet.rejected',
      resourceType: 'Timesheet',
      resourceId: id,
      actorId,
      actorName,
      actorRole,
    });

    await this.notifyEmployee(
      orgId,
      timesheet.employeeId,
      'Your timesheet was rejected',
      dto.reason,
    );

    return { rejected: true };
  }

  // ── List ───────────────────────────────────────────────────────────────────────

  async list(
    organizationId: string | null,
    userId: string,
    role: Role,
    dto: ListTimesheetsDto,
  ) {
    const orgId = this.requireTenant(organizationId);

    let employeeId = dto.employeeId;
    if (!MANAGER_ROLES.includes(role)) {
      const emp = await this.prisma.employee.findFirst({
        where: { userId, organizationId: orgId, deletedAt: null },
      });
      if (!emp) throw new NotFoundException('Employee record not found');
      employeeId = emp.id;
    }

    const page = dto.page ?? 1;
    const limit = dto.limit ?? 20;

    const where: any = {
      organizationId: orgId,
      ...(employeeId ? { employeeId } : {}),
      ...(dto.status ? { status: dto.status } : {}),
      ...(dto.from || dto.to
        ? {
            weekStart: {
              ...(dto.from ? { gte: new Date(dto.from) } : {}),
              ...(dto.to ? { lte: new Date(dto.to) } : {}),
            },
          }
        : {}),
      ...(dto.departmentId
        ? { employee: { departmentId: dto.departmentId } }
        : {}),
    };

    const [items, total] = await this.prisma.$transaction([
      this.prisma.timesheet.findMany({
        where,
        include: {
          employee: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              avatarUrl: true,
              department: { select: { id: true, name: true } },
            },
          },
        },
        orderBy: { weekStart: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.timesheet.count({ where }),
    ]);

    return { items, total, page, limit };
  }

  // ── Get one ────────────────────────────────────────────────────────────────────

  getOne(organizationId: string | null, id: string) {
    return this.findOne(this.requireTenant(organizationId), id);
  }

  // ── Private helpers ────────────────────────────────────────────────────────────

  private async findOne(orgId: string, id: string) {
    const ts = await this.prisma.timesheet.findFirst({
      where: { id, organizationId: orgId },
      include: {
        employee: {
          select: { id: true, firstName: true, lastName: true, avatarUrl: true },
        },
      },
    });
    if (!ts) throw new NotFoundException('Timesheet not found');
    return ts;
  }

  private async recalcHours(
    timesheetId: string,
    employeeId: string,
    weekStart: Date,
    weekEnd: Date,
    orgId: string,
  ) {
    const schedule = await this.prisma.workSchedule.findFirst({
      where: { organizationId: orgId, isDefault: true },
    });
    const standardMinsPerDay = schedule ? Number(schedule.dailyHours) * 60 : 480;
    const workDays: number[] = schedule?.workDays ?? [1, 2, 3, 4, 5];

    let expectedDays = 0;
    const cursor = new Date(weekStart);
    while (cursor <= weekEnd) {
      if (workDays.includes(cursor.getDay())) expectedDays++;
      cursor.setDate(cursor.getDate() + 1);
    }

    const entries = await this.prisma.attendanceEntry.findMany({
      where: { employeeId, date: { gte: weekStart, lte: weekEnd } },
      select: { totalMinutes: true },
    });

    const totalMins = entries.reduce((s, e) => s + (e.totalMinutes ?? 0), 0);
    const standardWeekMins = expectedDays * standardMinsPerDay;
    const overtimeMins = Math.max(0, totalMins - standardWeekMins);

    return this.prisma.timesheet.update({
      where: { id: timesheetId },
      data: {
        totalHours: totalMins / 60,
        overtimeHours: overtimeMins / 60,
      },
      include: {
        employee: { select: { id: true, firstName: true, lastName: true } },
      },
    });
  }

  private async notifyEmployee(
    orgId: string,
    employeeId: string,
    title: string,
    body?: string,
  ) {
    const emp = await this.prisma.employee.findFirst({
      where: { id: employeeId, deletedAt: null },
      select: { userId: true },
    });
    if (!emp?.userId) return;

    await this.notifications
      .create({
        organizationId: orgId,
        userId: emp.userId,
        type: 'timesheet.status',
        title,
        body,
      })
      .catch(() => null);
  }
}
