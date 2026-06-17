import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { AdjustmentType, PayRunStatus, Role } from '../../generated/prisma/enums';
import { PrismaService } from '../../prisma/prisma.service';
import { AUDIT_EVENT } from '../audit/audit.types';
import type { AuditEvent } from '../audit/audit.types';
import { PAYROLL_QUEUE } from '../../jobs/payroll.processor';
import {
  AddAdjustmentDto,
  ApprovePayRunDto,
  CreateDeductionTypeDto,
  CreatePayGroupDto,
  CreatePayRunDto,
  ExcludeLineDto,
  ListPayRunsDto,
  ListPayslipsDto,
  UpdateDeductionTypeDto,
  UpdatePayGroupDto,
  UpsertTaxSettingsDto,
} from './dto';

const PAYROLL_ROLES: Role[] = [Role.ORG_ADMIN, Role.PAYROLL_MANAGER];
const HR_ROLES: Role[] = [Role.ORG_ADMIN, Role.HR_MANAGER];

const PERIODS_PER_YEAR: Record<string, number> = {
  WEEKLY: 52,
  BIWEEKLY: 26,
  SEMI_MONTHLY: 24,
  MONTHLY: 12,
};

@Injectable()
export class PayrollService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly events: EventEmitter2,
    @InjectQueue(PAYROLL_QUEUE) private readonly payrollQueue: Queue,
  ) {}

  private requireTenant(organizationId: string | null): string {
    if (!organizationId)
      throw new BadRequestException('No organization context on this account');
    return organizationId;
  }

  private emitAudit(event: AuditEvent) {
    this.events.emit(AUDIT_EVENT, event);
  }

  // ── Pay Groups ────────────────────────────────────────────────────────────────

  async createPayGroup(
    organizationId: string | null,
    actorId: string,
    actorName: string,
    actorRole: string,
    dto: CreatePayGroupDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    const group = await this.prisma.payGroup.create({
      data: {
        organizationId: orgId,
        name: dto.name,
        payFrequency: dto.payFrequency,
        firstPayDate: new Date(dto.firstPayDate),
        payPeriodStartDay: dto.payPeriodStartDay ?? 1,
      },
    });
    this.emitAudit({
      organizationId: orgId,
      action: 'payroll.paygroup.created',
      resourceType: 'PayGroup',
      resourceId: group.id,
      resourceName: group.name,
      actorId,
      actorName,
      actorRole,
    });
    return group;
  }

  listPayGroups(organizationId: string | null) {
    const orgId = this.requireTenant(organizationId);
    return this.prisma.payGroup.findMany({
      where: { organizationId: orgId },
      orderBy: { name: 'asc' },
    });
  }

  async updatePayGroup(
    organizationId: string | null,
    id: string,
    dto: UpdatePayGroupDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    await this.findPayGroup(orgId, id);
    return this.prisma.payGroup.update({
      where: { id },
      data: {
        name: dto.name,
        payFrequency: dto.payFrequency,
        firstPayDate: dto.firstPayDate ? new Date(dto.firstPayDate) : undefined,
        payPeriodStartDay: dto.payPeriodStartDay,
      },
    });
  }

  async deletePayGroup(
    organizationId: string | null,
    id: string,
    actorId: string,
    actorName: string,
    actorRole: string,
  ) {
    const orgId = this.requireTenant(organizationId);
    await this.findPayGroup(orgId, id);
    await this.prisma.payGroup.delete({ where: { id } });
    this.emitAudit({
      organizationId: orgId,
      action: 'payroll.paygroup.deleted',
      resourceType: 'PayGroup',
      resourceId: id,
      actorId,
      actorName,
      actorRole,
    });
    return { deleted: true };
  }

  // ── Deduction Types ───────────────────────────────────────────────────────────

  async createDeductionType(
    organizationId: string | null,
    dto: CreateDeductionTypeDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    return this.prisma.deductionType.create({
      data: {
        organizationId: orgId,
        name: dto.name,
        type: dto.type,
        defaultValue: dto.defaultValue,
        isPreTax: dto.isPreTax ?? false,
      },
    });
  }

  listDeductionTypes(organizationId: string | null) {
    const orgId = this.requireTenant(organizationId);
    return this.prisma.deductionType.findMany({
      where: { organizationId: orgId },
      orderBy: { name: 'asc' },
    });
  }

  async updateDeductionType(
    organizationId: string | null,
    id: string,
    dto: UpdateDeductionTypeDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    await this.findDeductionType(orgId, id);
    return this.prisma.deductionType.update({ where: { id }, data: { ...dto } });
  }

  async deleteDeductionType(organizationId: string | null, id: string) {
    const orgId = this.requireTenant(organizationId);
    await this.findDeductionType(orgId, id);
    await this.prisma.deductionType.delete({ where: { id } });
    return { deleted: true };
  }

  // ── Tax Settings ──────────────────────────────────────────────────────────────

  async upsertTaxSettings(organizationId: string | null, dto: UpsertTaxSettingsDto) {
    const orgId = this.requireTenant(organizationId);
    return this.prisma.taxSettings.upsert({
      where: { organizationId: orgId },
      create: {
        organizationId: orgId,
        country: dto.country ?? '',
        pensionRate: dto.pensionRate ?? 0,
        employerPensionRate: dto.employerPensionRate ?? 0,
        nationalInsuranceRate: dto.nationalInsuranceRate ?? 0,
        brackets: dto.brackets ?? [],
      },
      update: {
        country: dto.country,
        pensionRate: dto.pensionRate,
        employerPensionRate: dto.employerPensionRate,
        nationalInsuranceRate: dto.nationalInsuranceRate,
        brackets: dto.brackets,
      },
    });
  }

  getTaxSettings(organizationId: string | null) {
    const orgId = this.requireTenant(organizationId);
    return this.prisma.taxSettings.findUnique({ where: { organizationId: orgId } });
  }

  // ── Pay Runs ──────────────────────────────────────────────────────────────────

  async createPayRun(
    organizationId: string | null,
    actorId: string,
    actorName: string,
    actorRole: string,
    dto: CreatePayRunDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    await this.findPayGroup(orgId, dto.payGroupId);

    const periodStart = new Date(dto.periodStart);
    const periodEnd = new Date(dto.periodEnd);
    if (periodEnd <= periodStart)
      throw new BadRequestException('periodEnd must be after periodStart');

    const run = await this.prisma.payRun.create({
      data: {
        organizationId: orgId,
        payGroupId: dto.payGroupId,
        periodStart,
        periodEnd,
        payDate: new Date(dto.payDate),
        status: PayRunStatus.DRAFT,
        notes: dto.notes,
        createdBy: actorId,
      },
      include: { payGroup: { select: { id: true, name: true, payFrequency: true } } },
    });

    this.emitAudit({
      organizationId: orgId,
      action: 'payroll.run.created',
      resourceType: 'PayRun',
      resourceId: run.id,
      actorId,
      actorName,
      actorRole,
    });

    return run;
  }

  async listPayRuns(organizationId: string | null, dto: ListPayRunsDto) {
    const orgId = this.requireTenant(organizationId);
    const page = dto.page ?? 1;
    const limit = dto.limit ?? 20;

    const where: any = {
      organizationId: orgId,
      ...(dto.payGroupId ? { payGroupId: dto.payGroupId } : {}),
      ...(dto.status ? { status: dto.status } : {}),
      ...(dto.from || dto.to
        ? {
            periodStart: {
              ...(dto.from ? { gte: new Date(dto.from) } : {}),
              ...(dto.to ? { lte: new Date(dto.to) } : {}),
            },
          }
        : {}),
    };

    const [items, total] = await this.prisma.$transaction([
      this.prisma.payRun.findMany({
        where,
        include: { payGroup: { select: { id: true, name: true, payFrequency: true } } },
        orderBy: { periodStart: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.payRun.count({ where }),
    ]);

    return { items, total, page, limit };
  }

  async getPayRun(organizationId: string | null, id: string) {
    const orgId = this.requireTenant(organizationId);
    const run = await this.prisma.payRun.findFirst({
      where: { id, organizationId: orgId },
      include: {
        payGroup: { select: { id: true, name: true, payFrequency: true } },
        lines: {
          include: {
            employee: { select: { id: true, firstName: true, lastName: true } },
          },
        },
        adjustments: {
          include: {
            employee: { select: { id: true, firstName: true, lastName: true } },
          },
        },
      },
    });
    if (!run) throw new NotFoundException('Pay run not found');
    return run;
  }

  async submitPayRun(
    organizationId: string | null,
    id: string,
    actorId: string,
    actorName: string,
    actorRole: string,
  ) {
    const orgId = this.requireTenant(organizationId);
    const run = await this.findPayRun(orgId, id);
    if (run.status !== PayRunStatus.DRAFT)
      throw new BadRequestException('Only draft pay runs can be submitted for approval');

    const updated = await this.prisma.payRun.update({
      where: { id },
      data: { status: PayRunStatus.PENDING_APPROVAL },
    });

    this.emitAudit({
      organizationId: orgId,
      action: 'payroll.run.submitted',
      resourceType: 'PayRun',
      resourceId: id,
      actorId,
      actorName,
      actorRole,
    });

    return updated;
  }

  async approvePayRun(
    organizationId: string | null,
    id: string,
    actorId: string,
    actorName: string,
    actorRole: string,
    dto: ApprovePayRunDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    const run = await this.findPayRun(orgId, id);
    if (run.status !== PayRunStatus.PENDING_APPROVAL)
      throw new BadRequestException('Only pending-approval pay runs can be approved');

    const updated = await this.prisma.payRun.update({
      where: { id },
      data: {
        status: PayRunStatus.APPROVED,
        approvedBy: actorId,
        approvedAt: new Date(),
        notes: dto.notes ?? run.notes,
      },
    });

    this.emitAudit({
      organizationId: orgId,
      action: 'payroll.run.approved',
      resourceType: 'PayRun',
      resourceId: id,
      actorId,
      actorName,
      actorRole,
    });

    return updated;
  }

  async processPayRun(
    organizationId: string | null,
    id: string,
    actorId: string,
    actorName: string,
    actorRole: string,
  ) {
    const orgId = this.requireTenant(organizationId);
    const run = await this.findPayRun(orgId, id);
    if (run.status !== PayRunStatus.APPROVED)
      throw new BadRequestException('Only approved pay runs can be processed');

    await this.prisma.payRun.update({
      where: { id },
      data: { status: PayRunStatus.PROCESSING },
    });

    // Enqueue the heavy calculation work.
    await this.payrollQueue.add('calculate', { payRunId: id, organizationId: orgId });

    this.emitAudit({
      organizationId: orgId,
      action: 'payroll.run.processing',
      resourceType: 'PayRun',
      resourceId: id,
      actorId,
      actorName,
      actorRole,
    });

    return { processing: true };
  }

  async cancelPayRun(
    organizationId: string | null,
    id: string,
    actorId: string,
    actorName: string,
    actorRole: string,
  ) {
    const orgId = this.requireTenant(organizationId);
    const run = await this.findPayRun(orgId, id);

    if (
      run.status === PayRunStatus.COMPLETED ||
      run.status === PayRunStatus.CANCELLED
    )
      throw new BadRequestException('This pay run cannot be cancelled');

    const updated = await this.prisma.payRun.update({
      where: { id },
      data: { status: PayRunStatus.CANCELLED },
    });

    this.emitAudit({
      organizationId: orgId,
      action: 'payroll.run.cancelled',
      resourceType: 'PayRun',
      resourceId: id,
      actorId,
      actorName,
      actorRole,
    });

    return updated;
  }

  // ── Pay Run Lines ─────────────────────────────────────────────────────────────

  async listLines(organizationId: string | null, payRunId: string) {
    const orgId = this.requireTenant(organizationId);
    await this.findPayRun(orgId, payRunId);
    return this.prisma.payRunLine.findMany({
      where: { payRunId },
      include: {
        employee: {
          select: { id: true, firstName: true, lastName: true, avatarUrl: true },
        },
      },
      orderBy: { employee: { lastName: 'asc' } },
    });
  }

  async excludeLine(
    organizationId: string | null,
    payRunId: string,
    lineId: string,
    dto: ExcludeLineDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    const run = await this.findPayRun(orgId, payRunId);
    if (run.status === PayRunStatus.COMPLETED || run.status === PayRunStatus.CANCELLED)
      throw new BadRequestException('Cannot modify lines on a completed or cancelled pay run');

    const line = await this.prisma.payRunLine.findFirst({
      where: { id: lineId, payRunId },
    });
    if (!line) throw new NotFoundException('Pay run line not found');

    return this.prisma.payRunLine.update({
      where: { id: lineId },
      data: { isExcluded: !line.isExcluded, exclusionReason: dto.reason },
    });
  }

  // ── Adjustments ───────────────────────────────────────────────────────────────

  async addAdjustment(
    organizationId: string | null,
    payRunId: string,
    actorId: string,
    dto: AddAdjustmentDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    const run = await this.findPayRun(orgId, payRunId);
    if (
      run.status === PayRunStatus.COMPLETED ||
      run.status === PayRunStatus.CANCELLED ||
      run.status === PayRunStatus.PROCESSING
    )
      throw new BadRequestException('Cannot add adjustments to this pay run');

    const employee = await this.prisma.employee.findFirst({
      where: { id: dto.employeeId, organizationId: orgId, deletedAt: null },
    });
    if (!employee) throw new NotFoundException('Employee not found');

    return this.prisma.payRunAdjustment.create({
      data: {
        payRunId,
        employeeId: dto.employeeId,
        type: dto.type,
        amount: dto.amount,
        description: dto.description,
        addedBy: actorId,
      },
    });
  }

  async listAdjustments(organizationId: string | null, payRunId: string) {
    const orgId = this.requireTenant(organizationId);
    await this.findPayRun(orgId, payRunId);
    return this.prisma.payRunAdjustment.findMany({
      where: { payRunId },
      include: {
        employee: { select: { id: true, firstName: true, lastName: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async removeAdjustment(
    organizationId: string | null,
    payRunId: string,
    adjustmentId: string,
  ) {
    const orgId = this.requireTenant(organizationId);
    const run = await this.findPayRun(orgId, payRunId);
    if (
      run.status === PayRunStatus.COMPLETED ||
      run.status === PayRunStatus.CANCELLED
    )
      throw new BadRequestException('Cannot remove adjustments from a completed or cancelled pay run');

    const adj = await this.prisma.payRunAdjustment.findFirst({
      where: { id: adjustmentId, payRunId },
    });
    if (!adj) throw new NotFoundException('Adjustment not found');

    await this.prisma.payRunAdjustment.delete({ where: { id: adjustmentId } });
    return { deleted: true };
  }

  // ── Payslips ──────────────────────────────────────────────────────────────────

  async listPayslips(
    organizationId: string | null,
    userId: string,
    role: Role,
    dto: ListPayslipsDto,
  ) {
    const orgId = this.requireTenant(organizationId);

    let employeeId = dto.employeeId;
    if (!PAYROLL_ROLES.includes(role) && !HR_ROLES.includes(role)) {
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
      ...(dto.payRunId ? { payRunId: dto.payRunId } : {}),
    };

    const [items, total] = await this.prisma.$transaction([
      this.prisma.payslip.findMany({
        where,
        include: {
          employee: { select: { id: true, firstName: true, lastName: true, avatarUrl: true } },
        },
        orderBy: { payDate: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.payslip.count({ where }),
    ]);

    return { items, total, page, limit };
  }

  async getPayslip(organizationId: string | null, id: string) {
    const orgId = this.requireTenant(organizationId);
    const payslip = await this.prisma.payslip.findFirst({
      where: { id, organizationId: orgId },
      include: {
        employee: {
          select: { id: true, firstName: true, lastName: true, avatarUrl: true },
        },
      },
    });
    if (!payslip) throw new NotFoundException('Payslip not found');
    return payslip;
  }

  async emailPayslip(organizationId: string | null, id: string) {
    const orgId = this.requireTenant(organizationId);
    const payslip = await this.getPayslip(orgId, id);

    // Queue the email job — actual sending handled by EmailProcessor.
    await this.payrollQueue.add('email-payslip', { payslipId: payslip.id, organizationId: orgId });

    await this.prisma.payslip.update({
      where: { id },
      data: { emailedAt: new Date() },
    });

    return { queued: true };
  }

  // ── Private helpers ───────────────────────────────────────────────────────────

  private async findPayGroup(orgId: string, id: string) {
    const group = await this.prisma.payGroup.findFirst({
      where: { id, organizationId: orgId },
    });
    if (!group) throw new NotFoundException('Pay group not found');
    return group;
  }

  private async findDeductionType(orgId: string, id: string) {
    const dt = await this.prisma.deductionType.findFirst({
      where: { id, organizationId: orgId },
    });
    if (!dt) throw new NotFoundException('Deduction type not found');
    return dt;
  }

  private async findPayRun(orgId: string, id: string) {
    const run = await this.prisma.payRun.findFirst({
      where: { id, organizationId: orgId },
    });
    if (!run) throw new NotFoundException('Pay run not found');
    return run;
  }
}
