import { Injectable } from '@nestjs/common';
import { AttendanceStatus, EmployeeStatus, LeaveStatus, PayRunStatus } from '../../generated/prisma/enums';
import { PrismaService } from '../../prisma/prisma.service';
import { DateRangeDto, PayrollCostReportDto } from './dto/reports.dto';

@Injectable()
export class ReportsService {
  constructor(private readonly prisma: PrismaService) {}

  // ── Headcount ─────────────────────────────────────────────────────────────────

  async headcount(organizationId: string, dto: DateRangeDto) {
    const where: any = {
      organizationId,
      deletedAt: null,
      ...(dto.departmentId ? { departmentId: dto.departmentId } : {}),
      ...(dto.from ? { startDate: { gte: new Date(dto.from) } } : {}),
      ...(dto.to ? { startDate: { lte: new Date(dto.to) } } : {}),
    };

    const [total, byStatus, byDepartment, byEmploymentType] = await this.prisma.$transaction([
      this.prisma.employee.count({ where }),
      this.prisma.employee.groupBy({
        by: ['status'],
        where,
        _count: { _all: true },
        orderBy: { _count: { status: 'desc' } },
      }),
      this.prisma.employee.groupBy({
        by: ['departmentId'],
        where,
        _count: { _all: true },
        orderBy: { _count: { departmentId: 'desc' } },
      }),
      this.prisma.employee.groupBy({
        by: ['employmentType'],
        where,
        _count: { _all: true },
        orderBy: { _count: { employmentType: 'desc' } },
      }),
    ]);

    const deptIds = byDepartment.map((d) => d.departmentId).filter(Boolean) as string[];
    const departments = await this.prisma.department.findMany({
      where: { id: { in: deptIds } },
      select: { id: true, name: true },
    });
    const deptMap = Object.fromEntries(departments.map((d) => [d.id, d.name]));

    return {
      total,
      byStatus: byStatus.map((s) => ({ status: s.status, count: (s._count as any)._all ?? 0 })),
      byDepartment: byDepartment.map((d) => ({
        departmentId: d.departmentId,
        departmentName: d.departmentId ? deptMap[d.departmentId] ?? 'Unknown' : 'Unassigned',
        count: (d._count as any)._all ?? 0,
      })),
      byEmploymentType: byEmploymentType.map((e) => ({
        type: e.employmentType,
        count: (e._count as any)._all ?? 0,
      })),
    };
  }

  // ── Turnover ──────────────────────────────────────────────────────────────────

  async turnover(organizationId: string, dto: DateRangeDto) {
    const from = dto.from ? new Date(dto.from) : new Date(new Date().getFullYear(), 0, 1);
    const to = dto.to ? new Date(dto.to) : new Date();

    const [hired, terminated, totalActive] = await this.prisma.$transaction([
      this.prisma.employee.count({
        where: {
          organizationId,
          startDate: { gte: from, lte: to },
          ...(dto.departmentId ? { departmentId: dto.departmentId } : {}),
        },
      }),
      this.prisma.employee.count({
        where: {
          organizationId,
          status: EmployeeStatus.TERMINATED,
          deletedAt: { gte: from, lte: to },
          ...(dto.departmentId ? { departmentId: dto.departmentId } : {}),
        },
      }),
      this.prisma.employee.count({
        where: {
          organizationId,
          deletedAt: null,
          ...(dto.departmentId ? { departmentId: dto.departmentId } : {}),
        },
      }),
    ]);

    const turnoverRate = totalActive > 0 ? ((terminated / totalActive) * 100).toFixed(2) : '0.00';

    return { hired, terminated, totalActive, turnoverRate: `${turnoverRate}%`, period: { from, to } };
  }

  // ── Payroll cost ──────────────────────────────────────────────────────────────

  async payrollCost(organizationId: string, dto: PayrollCostReportDto) {
    const where: any = {
      organizationId,
      status: PayRunStatus.COMPLETED,
      ...(dto.payGroupId ? { payGroupId: dto.payGroupId } : {}),
      ...(dto.from || dto.to
        ? {
            periodStart: {
              ...(dto.from ? { gte: new Date(dto.from) } : {}),
              ...(dto.to ? { lte: new Date(dto.to) } : {}),
            },
          }
        : {}),
    };

    const runs = await this.prisma.payRun.findMany({
      where,
      select: {
        id: true,
        periodStart: true,
        periodEnd: true,
        payDate: true,
        totalGross: true,
        totalDeductions: true,
        totalNet: true,
        employeeCount: true,
        payGroup: { select: { name: true, payFrequency: true } },
      },
      orderBy: { periodStart: 'desc' },
    });

    const totalGross = runs.reduce((s, r) => s + Number(r.totalGross ?? 0), 0);
    const totalNet = runs.reduce((s, r) => s + Number(r.totalNet ?? 0), 0);
    const totalDeductions = runs.reduce((s, r) => s + Number(r.totalDeductions ?? 0), 0);

    return { runs, summary: { totalGross, totalNet, totalDeductions, runCount: runs.length } };
  }

  // ── Attendance ────────────────────────────────────────────────────────────────

  async attendance(organizationId: string, dto: DateRangeDto) {
    const where: any = {
      organizationId,
      ...(dto.from || dto.to
        ? {
            date: {
              ...(dto.from ? { gte: new Date(dto.from) } : {}),
              ...(dto.to ? { lte: new Date(dto.to) } : {}),
            },
          }
        : {}),
      ...(dto.departmentId ? { employee: { departmentId: dto.departmentId } } : {}),
    };

    const byStatus = await this.prisma.attendanceEntry.groupBy({
      by: ['status'],
      where,
      _count: { _all: true },
    });

    const totalEntries = byStatus.reduce((s, g) => s + g._count._all, 0);
    const summary = Object.fromEntries(
      byStatus.map((g) => [g.status, g._count._all]),
    );

    const avgWorkMinutes = await this.prisma.attendanceEntry.aggregate({
      where: { ...where, status: AttendanceStatus.PRESENT },
      _avg: { totalMinutes: true },
    });

    return {
      totalEntries,
      byStatus: summary,
      presentRate:
        totalEntries > 0
          ? `${(((summary[AttendanceStatus.PRESENT] ?? 0) / totalEntries) * 100).toFixed(1)}%`
          : '0.0%',
      avgWorkHours: avgWorkMinutes._avg.totalMinutes
        ? (avgWorkMinutes._avg.totalMinutes / 60).toFixed(1)
        : null,
    };
  }

  // ── Leave ─────────────────────────────────────────────────────────────────────

  async leave(organizationId: string, dto: DateRangeDto) {
    const where: any = {
      organizationId,
      ...(dto.from ? { startDate: { gte: new Date(dto.from) } } : {}),
      ...(dto.to ? { endDate: { lte: new Date(dto.to) } } : {}),
      ...(dto.departmentId ? { employee: { departmentId: dto.departmentId } } : {}),
    };

    const [byStatus, byType] = await this.prisma.$transaction([
      this.prisma.leaveRequest.groupBy({
        by: ['status'],
        where,
        _count: { _all: true },
        _sum: { durationDays: true },
        orderBy: { _count: { status: 'desc' } },
      }),
      this.prisma.leaveRequest.groupBy({
        by: ['leaveTypeId'],
        where: { ...where, status: LeaveStatus.APPROVED },
        _count: { _all: true },
        _sum: { durationDays: true },
        orderBy: { _count: { leaveTypeId: 'desc' } },
      }),
    ]);

    const typeIds = byType.map((b) => b.leaveTypeId);
    const leaveTypes = await this.prisma.leaveType.findMany({
      where: { id: { in: typeIds } },
      select: { id: true, name: true },
    });
    const typeMap = Object.fromEntries(leaveTypes.map((t) => [t.id, t.name]));

    return {
      byStatus: byStatus.map((g) => ({
        status: g.status,
        count: (g._count as any)._all ?? 0,
        totalDays: Number((g._sum as any)?.durationDays ?? 0),
      })),
      byType: byType.map((g) => ({
        leaveTypeId: g.leaveTypeId,
        leaveTypeName: typeMap[g.leaveTypeId] ?? 'Unknown',
        count: (g._count as any)._all ?? 0,
        totalDays: Number((g._sum as any)?.durationDays ?? 0),
      })),
    };
  }

  // ── Performance ───────────────────────────────────────────────────────────────

  async performance(organizationId: string, dto: DateRangeDto) {
    const cycleWhere: any = {
      organizationId,
      ...(dto.from ? { startDate: { gte: new Date(dto.from) } } : {}),
      ...(dto.to ? { endDate: { lte: new Date(dto.to) } } : {}),
    };

    const cycles = await this.prisma.performanceCycle.findMany({
      where: cycleWhere,
      include: {
        reviews: {
          select: { status: true, overallRating: true },
        },
      },
      orderBy: { startDate: 'desc' },
    });

    return cycles.map((c) => {
      const total = c.reviews.length;
      const completed = c.reviews.filter((r) => r.status === 'COMPLETED').length;
      const ratings = c.reviews
        .filter((r) => r.overallRating !== null)
        .map((r) => Number(r.overallRating));
      const avgRating =
        ratings.length > 0
          ? (ratings.reduce((s, r) => s + r, 0) / ratings.length).toFixed(2)
          : null;

      return {
        cycleId: c.id,
        cycleName: c.name,
        type: c.type,
        status: c.status,
        totalReviews: total,
        completedReviews: completed,
        completionRate: total > 0 ? `${((completed / total) * 100).toFixed(1)}%` : '0.0%',
        avgRating,
      };
    });
  }
}
