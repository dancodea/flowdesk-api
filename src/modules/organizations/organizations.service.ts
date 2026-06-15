import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import {
  OrgLogoDto,
  PayrollSettingsDto,
  UpdateOrganizationDto,
  WorkScheduleSettingsDto,
} from './dto';

const DEFAULT_PAY_GROUP_NAME = 'Default';
const DEFAULT_WORK_SCHEDULE_NAME = 'Standard';

@Injectable()
export class OrganizationsService {
  constructor(private readonly prisma: PrismaService) {}

  private requireTenant(organizationId: string | null): string {
    if (!organizationId) {
      throw new BadRequestException('No organization context on this account');
    }
    return organizationId;
  }

  async findMine(organizationId: string | null) {
    const id = this.requireTenant(organizationId);
    const org = await this.prisma.organization.findUnique({ where: { id } });
    if (!org || org.deletedAt) {
      throw new NotFoundException('Organization not found');
    }
    return org;
  }

  async update(organizationId: string | null, dto: UpdateOrganizationDto) {
    const id = this.requireTenant(organizationId);
    await this.findMine(id);
    return this.prisma.organization.update({ where: { id }, data: { ...dto } });
  }

  async setLogo(organizationId: string | null, dto: OrgLogoDto) {
    const id = this.requireTenant(organizationId);
    await this.findMine(id);
    return this.prisma.organization.update({
      where: { id },
      data: { logoUrl: dto.secureUrl ?? dto.publicId },
    });
  }

  // ── Onboarding step 2: pay schedule → default pay group ──────────────────────
  async updatePayrollSettings(
    organizationId: string | null,
    dto: PayrollSettingsDto,
  ) {
    const id = this.requireTenant(organizationId);
    await this.findMine(id);

    const data = {
      payFrequency: dto.payFrequency,
      firstPayDate: dto.firstPayDate ? new Date(dto.firstPayDate) : undefined,
      payPeriodStartDay: dto.payPeriodStart,
    };

    const existing = await this.prisma.payGroup.findFirst({
      where: { organizationId: id, name: DEFAULT_PAY_GROUP_NAME },
    });

    return existing
      ? this.prisma.payGroup.update({ where: { id: existing.id }, data })
      : this.prisma.payGroup.create({
          data: { organizationId: id, name: DEFAULT_PAY_GROUP_NAME, ...data },
        });
  }

  // ── Onboarding step 3: work schedule → default work schedule ─────────────────
  async updateWorkSchedule(
    organizationId: string | null,
    dto: WorkScheduleSettingsDto,
  ) {
    const id = this.requireTenant(organizationId);
    await this.findMine(id);

    const data = {
      workDays: dto.workDays,
      dailyHours: dto.dailyHours,
      overtimeThresholdDaily: dto.overtimeThresholdDaily,
      overtimeThresholdWeekly: dto.overtimeThresholdWeekly,
    };

    const existing = await this.prisma.workSchedule.findFirst({
      where: { organizationId: id, isDefault: true },
    });

    return existing
      ? this.prisma.workSchedule.update({ where: { id: existing.id }, data })
      : this.prisma.workSchedule.create({
          data: {
            organizationId: id,
            name: DEFAULT_WORK_SCHEDULE_NAME,
            isDefault: true,
            ...data,
          },
        });
  }

  // ── Headcount / setup stats for the dashboard ────────────────────────────────
  async stats(organizationId: string | null) {
    const id = this.requireTenant(organizationId);
    const org = await this.findMine(id);

    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const [
      totalEmployees,
      activeEmployees,
      onboarding,
      onLeave,
      departments,
      locations,
      newHires30d,
      pendingInvitations,
    ] = await this.prisma.$transaction([
      this.prisma.employee.count({
        where: { organizationId: id, deletedAt: null },
      }),
      this.prisma.employee.count({
        where: { organizationId: id, deletedAt: null, status: 'ACTIVE' },
      }),
      this.prisma.employee.count({
        where: { organizationId: id, deletedAt: null, status: 'ONBOARDING' },
      }),
      this.prisma.employee.count({
        where: { organizationId: id, deletedAt: null, status: 'ON_LEAVE' },
      }),
      this.prisma.department.count({ where: { organizationId: id } }),
      this.prisma.location.count({ where: { organizationId: id } }),
      this.prisma.employee.count({
        where: {
          organizationId: id,
          deletedAt: null,
          startDate: { gte: thirtyDaysAgo },
        },
      }),
      this.prisma.invitation.count({
        where: { organizationId: id, status: 'PENDING' },
      }),
    ]);

    return {
      totalEmployees,
      activeEmployees,
      onboarding,
      onLeave,
      departments,
      locations,
      newHires30d,
      pendingInvitations,
      seatCount: org.seatCount,
      seatsUsed: totalEmployees,
      seatsRemaining: Math.max(org.seatCount - totalEmployees, 0),
      plan: org.plan,
      subscriptionStatus: org.subscriptionStatus,
    };
  }
}
