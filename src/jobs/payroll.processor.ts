import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import {
  AdjustmentType,
  DeductionValueType,
  PayRunStatus,
  SalaryType,
} from '../generated/prisma/enums';
import { PrismaService } from '../prisma/prisma.service';

export const PAYROLL_QUEUE = 'payroll';

const PERIODS_PER_YEAR: Record<string, number> = {
  WEEKLY: 52,
  BIWEEKLY: 26,
  SEMI_MONTHLY: 24,
  MONTHLY: 12,
};

@Processor(PAYROLL_QUEUE)
export class PayrollProcessor extends WorkerHost {
  private readonly logger = new Logger(PayrollProcessor.name);

  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async process(job: Job): Promise<void> {
    if (job.name === 'calculate') {
      await this.calculatePayRun(job.data.payRunId, job.data.organizationId);
    }
    if (job.name === 'email-payslip') {
      // Placeholder — wire SendGrid / email provider here.
      this.logger.log(`Email payslip ${job.data.payslipId} queued`);
    }
  }

  private async calculatePayRun(payRunId: string, organizationId: string) {
    this.logger.log(`Calculating pay run ${payRunId}`);

    const run = await this.prisma.payRun.findUnique({
      where: { id: payRunId },
      include: { payGroup: true },
    });

    if (!run || !run.payGroup || run.status !== PayRunStatus.PROCESSING) {
      this.logger.warn(`Pay run ${payRunId} not in PROCESSING state — skipping`);
      return;
    }

    const [deductionTypes, taxSettings, adjustments, employees] =
      await Promise.all([
        this.prisma.deductionType.findMany({ where: { organizationId } }),
        this.prisma.taxSettings.findUnique({ where: { organizationId } }),
        this.prisma.payRunAdjustment.findMany({ where: { payRunId } }),
        this.prisma.employee.findMany({
          where: {
            organizationId,
            payGroupId: run.payGroupId,
            deletedAt: null,
          },
          select: {
            id: true,
            salaryType: true,
            baseSalary: true,
            hourlyRate: true,
          },
        }),
      ]);

    const periodsPerYear = PERIODS_PER_YEAR[run.payGroup.payFrequency] ?? 12;
    const pensionRate = taxSettings ? Number(taxSettings.pensionRate) / 100 : 0;
    const niRate = taxSettings ? Number(taxSettings.nationalInsuranceRate) / 100 : 0;

    let totalGross = 0;
    let totalDeductions = 0;
    let totalNet = 0;
    let employeeCount = 0;

    for (const employee of employees) {
      // ── Gross pay ──────────────────────────────────────────────────────────
      let grossPay = 0;

      if (employee.salaryType === SalaryType.SALARIED && employee.baseSalary) {
        grossPay = Number(employee.baseSalary) / periodsPerYear;
      } else if (employee.salaryType === SalaryType.HOURLY && employee.hourlyRate) {
        const attendanceEntries = await this.prisma.attendanceEntry.findMany({
          where: {
            employeeId: employee.id,
            date: { gte: run.periodStart, lte: run.periodEnd },
          },
          select: { totalMinutes: true, overtimeMinutes: true },
        });
        const workedHours = attendanceEntries.reduce(
          (s, e) => s + (e.totalMinutes ?? 0) / 60,
          0,
        );
        grossPay = workedHours * Number(employee.hourlyRate);
      }

      // Manual bonus / reimbursement adjustments increase gross.
      const empAdjustments = adjustments.filter(
        (a) => a.employeeId === employee.id,
      );
      const bonuses = empAdjustments
        .filter((a) => a.type === AdjustmentType.BONUS || a.type === AdjustmentType.REIMBURSEMENT)
        .reduce((s, a) => s + Number(a.amount), 0);
      grossPay += bonuses;

      // ── Deductions ─────────────────────────────────────────────────────────
      const earningsBreakdown: Record<string, number> = { basePay: grossPay - bonuses, bonuses };
      const deductionsBreakdown: Record<string, number> = {};
      const taxesBreakdown: Record<string, number> = {};

      let deductionsTotal = 0;

      for (const dt of deductionTypes) {
        const value =
          dt.type === DeductionValueType.PERCENTAGE
            ? grossPay * (Number(dt.defaultValue) / 100)
            : Number(dt.defaultValue);
        deductionsBreakdown[dt.name] = value;
        deductionsTotal += value;
      }

      // Statutory taxes.
      const pension = grossPay * pensionRate;
      const ni = grossPay * niRate;
      if (pension > 0) { taxesBreakdown['pension'] = pension; deductionsTotal += pension; }
      if (ni > 0) { taxesBreakdown['nationalInsurance'] = ni; deductionsTotal += ni; }

      // Manual deduction adjustments.
      const manualDeductions = empAdjustments
        .filter((a) => a.type === AdjustmentType.DEDUCTION)
        .reduce((s, a) => s + Number(a.amount), 0);
      if (manualDeductions > 0) {
        deductionsBreakdown['manualDeductions'] = manualDeductions;
        deductionsTotal += manualDeductions;
      }

      const netPay = Math.max(0, grossPay - deductionsTotal);

      // ── Persist line + payslip ─────────────────────────────────────────────
      await this.prisma.$transaction([
        this.prisma.payRunLine.create({
          data: {
            payRunId,
            employeeId: employee.id,
            grossPay,
            netPay,
            totalDeductions: deductionsTotal,
            earnings: earningsBreakdown,
            deductions: deductionsBreakdown,
            taxes: taxesBreakdown,
          },
        }),
        this.prisma.payslip.create({
          data: {
            organizationId,
            payRunId,
            employeeId: employee.id,
            periodStart: run.periodStart,
            periodEnd: run.periodEnd,
            payDate: run.payDate ?? run.periodEnd,
            grossPay,
            totalDeductions: deductionsTotal,
            netPay,
            earnings: earningsBreakdown,
            deductions: deductionsBreakdown,
            taxes: taxesBreakdown,
          },
        }),
      ]);

      totalGross += grossPay;
      totalDeductions += deductionsTotal;
      totalNet += netPay;
      employeeCount++;
    }

    // ── Finalise pay run ───────────────────────────────────────────────────────
    await this.prisma.payRun.update({
      where: { id: payRunId },
      data: {
        status: PayRunStatus.COMPLETED,
        processedAt: new Date(),
        totalGross,
        totalDeductions,
        totalNet,
        employeeCount,
      },
    });

    this.logger.log(
      `Pay run ${payRunId} completed — ${employeeCount} employees, gross ${totalGross.toFixed(2)}`,
    );
  }
}
