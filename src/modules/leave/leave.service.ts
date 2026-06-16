import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { LeaveStatus, Role } from '../../generated/prisma/enums';
import { PrismaService } from '../../prisma/prisma.service';
import { NotificationsService } from '../notifications/notifications.service';
import { AUDIT_EVENT } from '../audit/audit.types';
import type { AuditEvent } from '../audit/audit.types';
import {
  ApproveLeaveDto,
  CreateHolidayDto,
  CreateLeavePolicyDto,
  CreateLeaveRequestDto,
  CreateLeaveTypeDto,
  ImportHolidaysDto,
  LeaveAdjustmentDto,
  LeaveBalanceQueryDto,
  LeaveCalendarQueryDto,
  LeaveReportQueryDto,
  ListHolidaysDto,
  ListLeaveRequestsDto,
  RejectLeaveDto,
  UpdateLeavePolicyDto,
  UpdateLeaveTypeDto,
} from './dto';

const APPROVER_ROLES: Role[] = [
  Role.ORG_ADMIN,
  Role.HR_MANAGER,
  Role.DEPARTMENT_MANAGER,
  Role.TEAM_LEAD,
];

const HR_ROLES: Role[] = [Role.ORG_ADMIN, Role.HR_MANAGER];

@Injectable()
export class LeaveService {
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

  // ── Leave Types ───────────────────────────────────────────────────────────────

  async createLeaveType(
    organizationId: string | null,
    actorId: string,
    actorName: string,
    actorRole: string,
    dto: CreateLeaveTypeDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    const leaveType = await this.prisma.leaveType.create({
      data: {
        organizationId: orgId,
        name: dto.name,
        color: dto.color ?? '#3B82F6',
        isPaid: dto.isPaid ?? true,
        requiresDocument: dto.requiresDocument ?? false,
        genderRestriction: dto.genderRestriction,
      },
    });
    this.emitAudit({
      organizationId: orgId,
      action: 'leave.type.created',
      resourceType: 'LeaveType',
      resourceId: leaveType.id,
      resourceName: leaveType.name,
      actorId,
      actorName,
      actorRole,
    });
    return leaveType;
  }

  listLeaveTypes(organizationId: string | null) {
    const orgId = this.requireTenant(organizationId);
    return this.prisma.leaveType.findMany({
      where: { organizationId: orgId, isActive: true },
      orderBy: { name: 'asc' },
    });
  }

  async updateLeaveType(
    organizationId: string | null,
    id: string,
    dto: UpdateLeaveTypeDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    await this.findLeaveType(orgId, id);
    return this.prisma.leaveType.update({ where: { id }, data: { ...dto } });
  }

  async removeLeaveType(organizationId: string | null, id: string) {
    const orgId = this.requireTenant(organizationId);
    await this.findLeaveType(orgId, id);
    // Soft-disable rather than hard delete to preserve history.
    await this.prisma.leaveType.update({
      where: { id },
      data: { isActive: false },
    });
    return { deleted: true };
  }

  // ── Leave Policies ────────────────────────────────────────────────────────────

  async createPolicy(
    organizationId: string | null,
    actorId: string,
    actorName: string,
    actorRole: string,
    dto: CreateLeavePolicyDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    await this.findLeaveType(orgId, dto.leaveTypeId);
    const policy = await this.prisma.leavePolicy.create({
      data: {
        organizationId: orgId,
        leaveTypeId: dto.leaveTypeId,
        name: dto.name,
        annualAllowance: dto.annualAllowance,
        accrualType: dto.accrualType,
        carryOverMax: dto.carryOverMax ?? 0,
        advanceNoticeDays: dto.advanceNoticeDays ?? 0,
        maxConsecutiveDays: dto.maxConsecutiveDays,
      },
    });
    this.emitAudit({
      organizationId: orgId,
      action: 'leave.policy.created',
      resourceType: 'LeavePolicy',
      resourceId: policy.id,
      resourceName: policy.name ?? dto.leaveTypeId,
      actorId,
      actorName,
      actorRole,
    });
    return policy;
  }

  listPolicies(organizationId: string | null) {
    const orgId = this.requireTenant(organizationId);
    return this.prisma.leavePolicy.findMany({
      where: { organizationId: orgId },
      include: { leaveType: { select: { id: true, name: true, color: true } } },
      orderBy: { createdAt: 'asc' },
    });
  }

  async updatePolicy(
    organizationId: string | null,
    id: string,
    dto: UpdateLeavePolicyDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    const policy = await this.prisma.leavePolicy.findFirst({
      where: { id, organizationId: orgId },
    });
    if (!policy) throw new NotFoundException('Leave policy not found');
    return this.prisma.leavePolicy.update({ where: { id }, data: { ...dto } });
  }

  // ── Leave Requests ────────────────────────────────────────────────────────────

  async createRequest(
    organizationId: string | null,
    userId: string,
    dto: CreateLeaveRequestDto,
  ) {
    const orgId = this.requireTenant(organizationId);

    const employee = await this.prisma.employee.findFirst({
      where: { userId, organizationId: orgId, deletedAt: null },
    });
    if (!employee) throw new NotFoundException('Employee record not found');

    const leaveType = await this.findLeaveType(orgId, dto.typeId);

    const start = new Date(dto.startDate);
    const end = new Date(dto.endDate);
    if (end < start)
      throw new BadRequestException('End date must be on or after start date');

    // Calculate working duration excluding weekends and public holidays.
    const duration = await this.calcWorkingDays(
      orgId,
      start,
      end,
      dto.halfDay ?? false,
      employee.locationId ?? undefined,
    );

    if (duration <= 0)
      throw new BadRequestException(
        'No working days in the selected date range',
      );

    // Check balance.
    const year = start.getFullYear();
    const balance = await this.getOrCreateBalance(
      orgId,
      employee.id,
      dto.typeId,
      year,
    );
    const available =
      Number(balance.allocated) +
      Number(balance.carriedOver) +
      Number(balance.adjusted) -
      Number(balance.used) -
      Number(balance.pending);

    if (available < duration)
      throw new BadRequestException(
        `Insufficient leave balance. Available: ${available} days, requested: ${duration} days`,
      );

    // Detect overlapping approved/pending requests.
    const overlap = await this.prisma.leaveRequest.findFirst({
      where: {
        employeeId: employee.id,
        status: { in: [LeaveStatus.PENDING, LeaveStatus.APPROVED] },
        startDate: { lte: end },
        endDate: { gte: start },
      },
    });
    if (overlap)
      throw new BadRequestException(
        'You already have an overlapping leave request for this period',
      );

    const [request] = await this.prisma.$transaction([
      this.prisma.leaveRequest.create({
        data: {
          organizationId: orgId,
          employeeId: employee.id,
          leaveTypeId: dto.typeId,
          startDate: start,
          endDate: end,
          halfDay: dto.halfDay ?? false,
          halfDayPeriod: dto.halfDayPeriod,
          durationDays: duration,
          reason: dto.reason,
          documentCloudinaryPublicId: dto.documentPublicId,
          status: LeaveStatus.PENDING,
        },
        include: {
          leaveType: { select: { id: true, name: true, color: true } },
          employee: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              managerId: true,
            },
          },
        },
      }),
      // Reserve balance as pending.
      this.prisma.leaveBalance.update({
        where: { id: balance.id },
        data: { pending: { increment: duration } },
      }),
    ]);

    // Notify manager.
    await this.notifyManager(orgId, employee.managerId, request, 'requested');

    return request;
  }

  async listRequests(organizationId: string | null, userId: string, role: Role, dto: ListLeaveRequestsDto) {
    const orgId = this.requireTenant(organizationId);

    // Non-HR employees only see their own requests.
    let employeeId = dto.employeeId;
    if (!HR_ROLES.includes(role) && !APPROVER_ROLES.includes(role)) {
      const emp = await this.prisma.employee.findFirst({
        where: { userId, organizationId: orgId, deletedAt: null },
      });
      employeeId = emp?.id;
    }

    const where = {
      organizationId: orgId,
      ...(employeeId ? { employeeId } : {}),
      ...(dto.status ? { status: dto.status } : {}),
      ...(dto.from ? { startDate: { gte: new Date(dto.from) } } : {}),
      ...(dto.to ? { endDate: { lte: new Date(dto.to) } } : {}),
    };

    const [items, total] = await this.prisma.$transaction([
      this.prisma.leaveRequest.findMany({
        where,
        include: {
          leaveType: { select: { id: true, name: true, color: true } },
          employee: {
            select: { id: true, firstName: true, lastName: true, avatarUrl: true },
          },
        },
        orderBy: { createdAt: 'desc' },
        skip: (dto.page - 1) * dto.limit,
        take: dto.limit,
      }),
      this.prisma.leaveRequest.count({ where }),
    ]);

    return { items, total, page: dto.page, limit: dto.limit };
  }

  async getRequest(organizationId: string | null, id: string) {
    const orgId = this.requireTenant(organizationId);
    const request = await this.prisma.leaveRequest.findFirst({
      where: { id, organizationId: orgId },
      include: {
        leaveType: true,
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
    });
    if (!request) throw new NotFoundException('Leave request not found');
    return request;
  }

  async approveRequest(
    organizationId: string | null,
    id: string,
    actorId: string,
    actorName: string,
    actorRole: string,
    dto: ApproveLeaveDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    const request = await this.getRequest(orgId, id);

    if (request.status !== LeaveStatus.PENDING)
      throw new BadRequestException('Only pending requests can be approved');

    await this.prisma.$transaction([
      this.prisma.leaveRequest.update({
        where: { id },
        data: {
          status: LeaveStatus.APPROVED,
          approvedBy: actorId,
          approvedAt: new Date(),
        },
      }),
      // Move from pending → used.
      this.prisma.leaveBalance.updateMany({
        where: {
          employeeId: request.employeeId,
          leaveTypeId: request.leaveTypeId,
          year: request.startDate.getFullYear(),
        },
        data: {
          pending: { decrement: Number(request.durationDays) },
          used: { increment: Number(request.durationDays) },
        },
      }),
    ]);

    this.emitAudit({
      organizationId: orgId,
      action: 'leave.request.approved',
      resourceType: 'LeaveRequest',
      resourceId: id,
      actorId,
      actorName,
      actorRole,
    });

    // Notify employee.
    await this.notifyEmployee(
      orgId,
      request.employee.id,
      `Your leave request (${request.leaveType.name}) has been approved`,
      dto.comment,
    );

    return { approved: true };
  }

  async rejectRequest(
    organizationId: string | null,
    id: string,
    actorId: string,
    actorName: string,
    actorRole: string,
    dto: RejectLeaveDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    const request = await this.getRequest(orgId, id);

    if (request.status !== LeaveStatus.PENDING)
      throw new BadRequestException('Only pending requests can be rejected');

    await this.prisma.$transaction([
      this.prisma.leaveRequest.update({
        where: { id },
        data: { status: LeaveStatus.REJECTED, rejectionReason: dto.reason },
      }),
      // Release the pending hold.
      this.prisma.leaveBalance.updateMany({
        where: {
          employeeId: request.employeeId,
          leaveTypeId: request.leaveTypeId,
          year: request.startDate.getFullYear(),
        },
        data: { pending: { decrement: Number(request.durationDays) } },
      }),
    ]);

    this.emitAudit({
      organizationId: orgId,
      action: 'leave.request.rejected',
      resourceType: 'LeaveRequest',
      resourceId: id,
      actorId,
      actorName,
      actorRole,
    });

    await this.notifyEmployee(
      orgId,
      request.employee.id,
      `Your leave request (${request.leaveType.name}) was rejected`,
      dto.reason,
    );

    return { rejected: true };
  }

  async cancelRequest(organizationId: string | null, userId: string, id: string) {
    const orgId = this.requireTenant(organizationId);
    const request = await this.getRequest(orgId, id);

    // Only the employee who owns the request can cancel it.
    const employee = await this.prisma.employee.findFirst({
      where: { userId, organizationId: orgId, deletedAt: null },
    });
    if (!employee || employee.id !== request.employeeId)
      throw new BadRequestException('You can only cancel your own leave requests');

    if (request.status === LeaveStatus.REJECTED || request.status === LeaveStatus.CANCELLED)
      throw new BadRequestException('This request cannot be cancelled');

    const wasApproved = request.status === LeaveStatus.APPROVED;

    await this.prisma.$transaction([
      this.prisma.leaveRequest.update({
        where: { id },
        data: { status: LeaveStatus.CANCELLED },
      }),
      this.prisma.leaveBalance.updateMany({
        where: {
          employeeId: request.employeeId,
          leaveTypeId: request.leaveTypeId,
          year: request.startDate.getFullYear(),
        },
        data: wasApproved
          ? { used: { decrement: Number(request.durationDays) } }
          : { pending: { decrement: Number(request.durationDays) } },
      }),
    ]);

    return { cancelled: true };
  }

  // ── Leave Balances ────────────────────────────────────────────────────────────

  async getBalances(organizationId: string | null, userId: string, role: Role, dto: LeaveBalanceQueryDto) {
    const orgId = this.requireTenant(organizationId);
    const year = dto.year ?? new Date().getFullYear();

    let employeeId = dto.employeeId;
    if (!employeeId || !HR_ROLES.includes(role)) {
      const emp = await this.prisma.employee.findFirst({
        where: { userId, organizationId: orgId, deletedAt: null },
      });
      if (!emp) throw new NotFoundException('Employee record not found');
      employeeId = emp.id;
    }

    return this.prisma.leaveBalance.findMany({
      where: { employeeId, year },
      include: { leaveType: { select: { id: true, name: true, color: true, isPaid: true } } },
    });
  }

  async adjustBalance(
    organizationId: string | null,
    actorId: string,
    actorName: string,
    actorRole: string,
    dto: LeaveAdjustmentDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    const year = new Date().getFullYear();

    const employee = await this.prisma.employee.findFirst({
      where: { id: dto.employeeId, organizationId: orgId, deletedAt: null },
    });
    if (!employee) throw new NotFoundException('Employee not found');

    await this.findLeaveType(orgId, dto.typeId);

    const balance = await this.getOrCreateBalance(orgId, dto.employeeId, dto.typeId, year);

    const updated = await this.prisma.leaveBalance.update({
      where: { id: balance.id },
      data: { adjusted: { increment: dto.days } },
    });

    this.emitAudit({
      organizationId: orgId,
      action: 'leave.balance.adjusted',
      resourceType: 'LeaveBalance',
      resourceId: balance.id,
      actorId,
      actorName,
      actorRole,
      changes: { employeeId: dto.employeeId, typeId: dto.typeId, days: dto.days, reason: dto.reason },
    });

    return updated;
  }

  // ── Calendar ──────────────────────────────────────────────────────────────────

  async getCalendar(organizationId: string | null, dto: LeaveCalendarQueryDto) {
    const orgId = this.requireTenant(organizationId);

    const where = {
      organizationId: orgId,
      status: LeaveStatus.APPROVED,
      ...(dto.from ? { startDate: { gte: new Date(dto.from) } } : {}),
      ...(dto.to ? { endDate: { lte: new Date(dto.to) } } : {}),
      ...(dto.deptId
        ? { employee: { departmentId: dto.deptId } }
        : {}),
    };

    return this.prisma.leaveRequest.findMany({
      where,
      include: {
        leaveType: { select: { id: true, name: true, color: true } },
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
      orderBy: { startDate: 'asc' },
    });
  }

  // ── Report ────────────────────────────────────────────────────────────────────

  async getReport(organizationId: string | null, dto: LeaveReportQueryDto) {
    const orgId = this.requireTenant(organizationId);

    const where = {
      organizationId: orgId,
      ...(dto.from ? { startDate: { gte: new Date(dto.from) } } : {}),
      ...(dto.to ? { endDate: { lte: new Date(dto.to) } } : {}),
      ...(dto.deptId ? { employee: { departmentId: dto.deptId } } : {}),
    };

    const requests = await this.prisma.leaveRequest.findMany({
      where,
      include: {
        leaveType: { select: { id: true, name: true } },
        employee: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            department: { select: { name: true } },
          },
        },
      },
    });

    // Aggregate by leave type.
    const byType: Record<string, { name: string; totalDays: number; count: number }> = {};
    for (const r of requests) {
      const key = r.leaveTypeId;
      if (!byType[key]) byType[key] = { name: r.leaveType.name, totalDays: 0, count: 0 };
      byType[key].totalDays += Number(r.durationDays);
      byType[key].count += 1;
    }

    return {
      totalRequests: requests.length,
      totalDays: requests.reduce((s, r) => s + Number(r.durationDays), 0),
      approved: requests.filter((r) => r.status === LeaveStatus.APPROVED).length,
      rejected: requests.filter((r) => r.status === LeaveStatus.REJECTED).length,
      byType: Object.values(byType),
      requests,
    };
  }

  // ── Public Holidays ───────────────────────────────────────────────────────────

  async listHolidays(organizationId: string | null, dto: ListHolidaysDto) {
    const orgId = this.requireTenant(organizationId);
    const year = dto.year ?? new Date().getFullYear();

    return this.prisma.publicHoliday.findMany({
      where: {
        organizationId: orgId,
        date: {
          gte: new Date(`${year}-01-01`),
          lte: new Date(`${year}-12-31`),
        },
        ...(dto.locationId ? { locationId: dto.locationId } : {}),
      },
      orderBy: { date: 'asc' },
    });
  }

  async createHoliday(
    organizationId: string | null,
    dto: CreateHolidayDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    return this.prisma.publicHoliday.create({
      data: {
        organizationId: orgId,
        name: dto.name,
        date: new Date(dto.date),
        locationId: dto.locationId,
        isCustom: true,
      },
    });
  }

  async removeHoliday(organizationId: string | null, id: string) {
    const orgId = this.requireTenant(organizationId);
    const holiday = await this.prisma.publicHoliday.findFirst({
      where: { id, organizationId: orgId },
    });
    if (!holiday) throw new NotFoundException('Holiday not found');
    await this.prisma.publicHoliday.delete({ where: { id } });
    return { deleted: true };
  }

  async importHolidays(organizationId: string | null, dto: ImportHolidaysDto) {
    const orgId = this.requireTenant(organizationId);

    // Fetch from Nager.Date public API (free, no auth required).
    const url = `https://date.nager.at/api/v3/PublicHolidays/${dto.year}/${dto.country.toUpperCase()}`;
    let holidays: Array<{ date: string; localName: string; name: string }> = [];

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Nager.Date responded with ${res.status}`);
      holidays = (await res.json()) as typeof holidays;
    } catch {
      throw new BadRequestException(
        `Could not fetch holidays for country "${dto.country}" / year ${dto.year}. Check the country code (ISO 3166-1 alpha-2).`,
      );
    }

    // Upsert: skip days already in the DB for this org/year.
    const existing = await this.prisma.publicHoliday.findMany({
      where: {
        organizationId: orgId,
        isCustom: false,
        date: {
          gte: new Date(`${dto.year}-01-01`),
          lte: new Date(`${dto.year}-12-31`),
        },
        ...(dto.locationId ? { locationId: dto.locationId } : { locationId: null }),
      },
      select: { date: true },
    });
    const existingDates = new Set(existing.map((h) => h.date.toISOString().slice(0, 10)));

    const toInsert = holidays.filter((h) => !existingDates.has(h.date));

    if (toInsert.length > 0) {
      await this.prisma.publicHoliday.createMany({
        data: toInsert.map((h) => ({
          organizationId: orgId,
          name: h.localName || h.name,
          date: new Date(h.date),
          locationId: dto.locationId ?? null,
          isCustom: false,
        })),
      });
    }

    return { imported: toInsert.length, skipped: holidays.length - toInsert.length };
  }

  // ── Private helpers ───────────────────────────────────────────────────────────

  private async findLeaveType(orgId: string, id: string) {
    const type = await this.prisma.leaveType.findFirst({
      where: { id, organizationId: orgId },
    });
    if (!type) throw new NotFoundException('Leave type not found');
    return type;
  }

  private async getOrCreateBalance(
    orgId: string,
    employeeId: string,
    leaveTypeId: string,
    year: number,
  ) {
    const existing = await this.prisma.leaveBalance.findUnique({
      where: { employeeId_leaveTypeId_year: { employeeId, leaveTypeId, year } },
    });
    if (existing) return existing;

    // Seed from the policy's annual allowance.
    const policy = await this.prisma.leavePolicy.findFirst({
      where: { organizationId: orgId, leaveTypeId },
    });

    return this.prisma.leaveBalance.create({
      data: {
        organizationId: orgId,
        employeeId,
        leaveTypeId,
        year,
        allocated: policy ? policy.annualAllowance : 0,
      },
    });
  }

  /** Count working days between two dates, excluding weekends and public holidays. */
  private async calcWorkingDays(
    orgId: string,
    start: Date,
    end: Date,
    halfDay: boolean,
    locationId?: string,
  ): Promise<number> {
    // Default work days: Mon(1)–Fri(5). Use org default work schedule if available.
    const schedule = await this.prisma.workSchedule.findFirst({
      where: { organizationId: orgId, isDefault: true },
    });
    const workDays: number[] = schedule?.workDays ?? [1, 2, 3, 4, 5];

    // Fetch public holidays in the range.
    const holidays = await this.prisma.publicHoliday.findMany({
      where: {
        organizationId: orgId,
        date: { gte: start, lte: end },
        OR: [
          { locationId: locationId ?? null },
          { locationId: null },
        ],
      },
      select: { date: true },
    });
    const holidaySet = new Set(holidays.map((h) => h.date.toISOString().slice(0, 10)));

    let count = 0;
    const cursor = new Date(start);
    while (cursor <= end) {
      const dow = cursor.getDay(); // 0=Sun … 6=Sat
      const dateStr = cursor.toISOString().slice(0, 10);
      if (workDays.includes(dow) && !holidaySet.has(dateStr)) {
        count++;
      }
      cursor.setDate(cursor.getDate() + 1);
    }

    return halfDay ? count * 0.5 : count;
  }

  private async notifyManager(
    orgId: string,
    managerId: string | null,
    request: { leaveType: { name: string }; employee: { firstName: string; lastName: string } },
    action: string,
  ) {
    if (!managerId) return;
    const manager = await this.prisma.employee.findFirst({
      where: { id: managerId, deletedAt: null },
      select: { userId: true },
    });
    if (!manager?.userId) return;

    await this.notifications.create({
      organizationId: orgId,
      userId: manager.userId,
      type: 'leave.request.submitted',
      title: 'Leave request submitted',
      body: `${request.employee.firstName} ${request.employee.lastName} has ${action} a ${request.leaveType.name} request.`,
    }).catch(() => null);
  }

  private async notifyEmployee(
    orgId: string,
    employeeId: string,
    message: string,
    detail?: string,
  ) {
    const emp = await this.prisma.employee.findFirst({
      where: { id: employeeId, deletedAt: null },
      select: { userId: true },
    });
    if (!emp?.userId) return;

    await this.notifications.create({
      organizationId: orgId,
      userId: emp.userId,
      type: 'leave.request.status',
      title: message,
      body: detail,
    }).catch(() => null);
  }
}
