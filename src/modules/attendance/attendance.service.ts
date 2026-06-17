import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { AttendanceStatus, Role } from '../../generated/prisma/enums';
import { EventsGateway } from '../../gateways/events.gateway';
import { PrismaService } from '../../prisma/prisma.service';
import { AUDIT_EVENT } from '../audit/audit.types';
import type { AuditEvent } from '../audit/audit.types';
import {
  AttendanceOverviewDto,
  ClockInDto,
  ClockOutDto,
  ListAttendanceDto,
  ManualEntryDto,
  UpdateAttendanceDto,
} from './dto';

const HR_ROLES: Role[] = [Role.ORG_ADMIN, Role.HR_MANAGER];
const MANAGER_ROLES: Role[] = [
  Role.ORG_ADMIN,
  Role.HR_MANAGER,
  Role.DEPARTMENT_MANAGER,
  Role.TEAM_LEAD,
];

@Injectable()
export class AttendanceService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly events: EventEmitter2,
    private readonly gateway: EventsGateway,
  ) {}

  private requireTenant(organizationId: string | null): string {
    if (!organizationId)
      throw new BadRequestException('No organization context on this account');
    return organizationId;
  }

  private emitAudit(event: AuditEvent) {
    this.events.emit(AUDIT_EVENT, event);
  }

  private async getEmployeeByUserId(orgId: string, userId: string) {
    const employee = await this.prisma.employee.findFirst({
      where: { userId, organizationId: orgId, deletedAt: null },
    });
    if (!employee) throw new NotFoundException('Employee record not found');
    return employee;
  }

  private todayDate() {
    return new Date(new Date().toISOString().slice(0, 10));
  }

  // ── Clock In ──────────────────────────────────────────────────────────────────

  async clockIn(organizationId: string | null, userId: string, dto: ClockInDto) {
    const orgId = this.requireTenant(organizationId);
    const employee = await this.getEmployeeByUserId(orgId, userId);
    const date = this.todayDate();

    const existing = await this.prisma.attendanceEntry.findFirst({
      where: { employeeId: employee.id, date },
    });
    if (existing) {
      if (existing.clockIn)
        throw new BadRequestException('Already clocked in today');
    }

    const now = new Date();
    let entry: any;
    if (existing) {
      entry = await this.prisma.attendanceEntry.update({
        where: { id: existing.id },
        data: {
          clockIn: now,
          status: AttendanceStatus.PRESENT,
          locationLat: dto.locationLat as any,
          locationLng: dto.locationLng as any,
        },
        include: { breaks: true },
      });
    } else {
      entry = await this.prisma.attendanceEntry.create({
        data: {
          organizationId: orgId,
          employeeId: employee.id,
          date,
          clockIn: now,
          status: AttendanceStatus.PRESENT,
          locationLat: dto.locationLat as any,
          locationLng: dto.locationLng as any,
        },
        include: { breaks: true },
      });
    }

    this.gateway.emitToOrg(orgId, 'attendance:clockIn', {
      employeeId: employee.id,
      entryId: entry.id,
      clockIn: now,
    });

    return entry;
  }

  // ── Clock Out ─────────────────────────────────────────────────────────────────

  async clockOut(organizationId: string | null, userId: string, dto: ClockOutDto) {
    const orgId = this.requireTenant(organizationId);
    const employee = await this.getEmployeeByUserId(orgId, userId);
    const date = this.todayDate();

    const entry = await this.prisma.attendanceEntry.findFirst({
      where: { employeeId: employee.id, date },
      include: { breaks: true },
    });
    if (!entry) throw new BadRequestException('No clock-in found for today');
    if (!entry.clockIn) throw new BadRequestException('Must clock in first');
    if (entry.clockOut) throw new BadRequestException('Already clocked out today');

    // End any open break automatically.
    const openBreak = entry.breaks.find((b) => !b.endTime);
    const now = new Date();

    if (openBreak) {
      const breakMins = Math.round((now.getTime() - openBreak.startTime.getTime()) / 60000);
      await this.prisma.breakEntry.update({
        where: { id: openBreak.id },
        data: { endTime: now, durationMinutes: breakMins },
      });
    }

    const totalBreakMins =
      entry.breaks
        .filter((b) => b.id !== openBreak?.id)
        .reduce((s, b) => s + (b.durationMinutes ?? 0), 0) +
      (openBreak
        ? Math.round((now.getTime() - openBreak.startTime.getTime()) / 60000)
        : 0);

    const workedMins = Math.round((now.getTime() - entry.clockIn!.getTime()) / 60000) - totalBreakMins;

    // Fetch org work schedule to calc standard hours.
    const schedule = await this.prisma.workSchedule.findFirst({
      where: { organizationId: orgId, isDefault: true },
    });
    const standardMins = schedule ? Number(schedule.dailyHours) * 60 : 8 * 60;
    const overtimeMins = Math.max(0, workedMins - standardMins);

    const updated = await this.prisma.attendanceEntry.update({
      where: { id: entry.id },
      data: {
        clockOut: now,
        totalMinutes: workedMins,
        overtimeMinutes: overtimeMins,
        locationLat: dto.locationLat as any ?? entry.locationLat,
        locationLng: dto.locationLng as any ?? entry.locationLng,
      },
      include: { breaks: true },
    });

    this.gateway.emitToOrg(orgId, 'attendance:clockOut', {
      employeeId: employee.id,
      entryId: entry.id,
      clockOut: now,
      totalMinutes: workedMins,
    });

    return updated;
  }

  // ── Breaks ────────────────────────────────────────────────────────────────────

  async startBreak(organizationId: string | null, userId: string) {
    const orgId = this.requireTenant(organizationId);
    const employee = await this.getEmployeeByUserId(orgId, userId);
    const date = this.todayDate();

    const entry = await this.prisma.attendanceEntry.findFirst({
      where: { employeeId: employee.id, date },
      include: { breaks: true },
    });
    if (!entry?.clockIn) throw new BadRequestException('You must be clocked in to start a break');
    if (entry.clockOut) throw new BadRequestException('Cannot start break after clocking out');
    if (entry.breaks.some((b) => !b.endTime))
      throw new BadRequestException('A break is already in progress');

    return this.prisma.breakEntry.create({
      data: { attendanceEntryId: entry.id, startTime: new Date() },
    });
  }

  async endBreak(organizationId: string | null, userId: string) {
    const orgId = this.requireTenant(organizationId);
    const employee = await this.getEmployeeByUserId(orgId, userId);
    const date = this.todayDate();

    const entry = await this.prisma.attendanceEntry.findFirst({
      where: { employeeId: employee.id, date },
      include: { breaks: true },
    });
    if (!entry) throw new BadRequestException('No attendance entry for today');

    const openBreak = entry.breaks.find((b) => !b.endTime);
    if (!openBreak) throw new BadRequestException('No break in progress');

    const now = new Date();
    const durationMinutes = Math.round(
      (now.getTime() - openBreak.startTime.getTime()) / 60000,
    );

    return this.prisma.breakEntry.update({
      where: { id: openBreak.id },
      data: { endTime: now, durationMinutes },
    });
  }

  // ── Today status ──────────────────────────────────────────────────────────────

  async getToday(organizationId: string | null, userId: string) {
    const orgId = this.requireTenant(organizationId);
    const employee = await this.getEmployeeByUserId(orgId, userId);
    const date = this.todayDate();

    const entry = await this.prisma.attendanceEntry.findFirst({
      where: { employeeId: employee.id, date },
      include: { breaks: true },
    });

    return entry ?? null;
  }

  // ── List entries ──────────────────────────────────────────────────────────────

  async listEntries(
    organizationId: string | null,
    userId: string,
    role: Role,
    dto: ListAttendanceDto,
  ) {
    const orgId = this.requireTenant(organizationId);

    let employeeId = dto.employeeId;
    if (!MANAGER_ROLES.includes(role)) {
      const emp = await this.getEmployeeByUserId(orgId, userId);
      employeeId = emp.id;
    }

    const where: any = {
      organizationId: orgId,
      ...(employeeId ? { employeeId } : {}),
      ...(dto.status ? { status: dto.status } : {}),
      ...(dto.from || dto.to
        ? {
            date: {
              ...(dto.from ? { gte: new Date(dto.from) } : {}),
              ...(dto.to ? { lte: new Date(dto.to) } : {}),
            },
          }
        : {}),
      ...(dto.departmentId
        ? { employee: { departmentId: dto.departmentId } }
        : {}),
    };

    const page = dto.page ?? 1;
    const limit = dto.limit ?? 20;

    const [items, total] = await this.prisma.$transaction([
      this.prisma.attendanceEntry.findMany({
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
          breaks: true,
        },
        orderBy: { date: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.attendanceEntry.count({ where }),
    ]);

    return { items, total, page, limit };
  }

  // ── Get single entry ──────────────────────────────────────────────────────────

  async getEntry(organizationId: string | null, id: string) {
    const orgId = this.requireTenant(organizationId);
    const entry = await this.prisma.attendanceEntry.findFirst({
      where: { id, organizationId: orgId },
      include: {
        employee: {
          select: { id: true, firstName: true, lastName: true, avatarUrl: true },
        },
        breaks: true,
      },
    });
    if (!entry) throw new NotFoundException('Attendance entry not found');
    return entry;
  }

  // ── Manual entry (HR) ─────────────────────────────────────────────────────────

  async createManualEntry(
    organizationId: string | null,
    actorId: string,
    actorName: string,
    actorRole: string,
    dto: ManualEntryDto,
  ) {
    const orgId = this.requireTenant(organizationId);

    const employee = await this.prisma.employee.findFirst({
      where: { id: dto.employeeId, organizationId: orgId, deletedAt: null },
    });
    if (!employee) throw new NotFoundException('Employee not found');

    const date = new Date(dto.date);
    const existing = await this.prisma.attendanceEntry.findFirst({
      where: { employeeId: dto.employeeId, date },
    });
    if (existing)
      throw new BadRequestException('An entry for this employee on this date already exists');

    const clockIn = dto.clockIn ? new Date(dto.clockIn) : undefined;
    const clockOut = dto.clockOut ? new Date(dto.clockOut) : undefined;

    let totalMinutes: number | undefined;
    if (clockIn && clockOut) {
      if (clockOut <= clockIn)
        throw new BadRequestException('Clock-out must be after clock-in');
      totalMinutes = Math.round((clockOut.getTime() - clockIn.getTime()) / 60000);
    }

    const entry = await this.prisma.attendanceEntry.create({
      data: {
        organizationId: orgId,
        employeeId: dto.employeeId,
        date,
        clockIn,
        clockOut,
        totalMinutes,
        isManual: true,
        manualReason: dto.reason,
        status: AttendanceStatus.PRESENT,
      },
    });

    this.emitAudit({
      organizationId: orgId,
      action: 'attendance.entry.created',
      resourceType: 'AttendanceEntry',
      resourceId: entry.id,
      actorId,
      actorName,
      actorRole,
      changes: { employeeId: dto.employeeId, date: dto.date, reason: dto.reason },
    });

    return entry;
  }

  // ── Update entry (HR) ─────────────────────────────────────────────────────────

  async updateEntry(
    organizationId: string | null,
    id: string,
    actorId: string,
    actorName: string,
    actorRole: string,
    dto: UpdateAttendanceDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    const entry = await this.getEntry(orgId, id);

    const clockIn = dto.clockIn ? new Date(dto.clockIn) : entry.clockIn;
    const clockOut = dto.clockOut ? new Date(dto.clockOut) : entry.clockOut;

    if (clockIn && clockOut && clockOut <= clockIn)
      throw new BadRequestException('Clock-out must be after clock-in');

    let totalMinutes = entry.totalMinutes;
    if (clockIn && clockOut) {
      totalMinutes = Math.round((clockOut.getTime() - clockIn.getTime()) / 60000);
    }

    const updated = await this.prisma.attendanceEntry.update({
      where: { id },
      data: {
        clockIn: clockIn ?? undefined,
        clockOut: clockOut ?? undefined,
        totalMinutes,
        status: dto.status,
        manualReason: dto.manualReason ?? entry.manualReason,
        isManual: true,
      },
    });

    this.emitAudit({
      organizationId: orgId,
      action: 'attendance.entry.updated',
      resourceType: 'AttendanceEntry',
      resourceId: id,
      actorId,
      actorName,
      actorRole,
    });

    return updated;
  }

  // ── Overview (dashboard) ──────────────────────────────────────────────────────

  async getOverview(organizationId: string | null, dto: AttendanceOverviewDto) {
    const orgId = this.requireTenant(organizationId);
    const date = dto.date ? new Date(dto.date) : this.todayDate();

    const where: any = {
      organizationId: orgId,
      date,
      ...(dto.departmentId
        ? { employee: { departmentId: dto.departmentId } }
        : {}),
    };

    const [entries, totalEmployees] = await this.prisma.$transaction([
      this.prisma.attendanceEntry.findMany({
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
          breaks: true,
        },
      }),
      this.prisma.employee.count({
        where: {
          organizationId: orgId,
          deletedAt: null,
          ...(dto.departmentId ? { departmentId: dto.departmentId } : {}),
        },
      }),
    ]);

    const grouped = {
      present: entries.filter((e) => e.status === AttendanceStatus.PRESENT),
      late: entries.filter((e) => e.status === AttendanceStatus.LATE),
      absent: entries.filter((e) => e.status === AttendanceStatus.ABSENT),
      onLeave: entries.filter((e) => e.status === AttendanceStatus.ON_LEAVE),
    };

    return {
      date,
      totalEmployees,
      present: grouped.present.length,
      late: grouped.late.length,
      absent: grouped.absent.length,
      onLeave: grouped.onLeave.length,
      notRecorded: totalEmployees - entries.length,
      entries,
    };
  }
}
