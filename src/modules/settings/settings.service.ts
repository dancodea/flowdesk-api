import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { UpdateSecuritySettingsDto } from './dto/settings.dto';

@Injectable()
export class SettingsService {
  constructor(private readonly prisma: PrismaService) {}

  private requireTenant(organizationId: string | null): string {
    if (!organizationId)
      throw new BadRequestException('No organization context');
    return organizationId;
  }

  // ── Security ──────────────────────────────────────────────────────────────────

  async getSecuritySettings(organizationId: string | null) {
    const orgId = this.requireTenant(organizationId);
    const org = await this.prisma.organization.findUnique({
      where: { id: orgId },
      select: { id: true, name: true, plan: true, subscriptionStatus: true },
    });
    if (!org) throw new NotFoundException('Organization not found');

    // Security preferences are stored as config — return a typed view.
    return {
      organizationId: org.id,
      plan: org.plan,
      subscriptionStatus: org.subscriptionStatus,
      security: {
        requireTwoFactor: false,
        sessionTimeoutMinutes: 480,
      },
    };
  }

  async updateSecuritySettings(
    organizationId: string | null,
    dto: UpdateSecuritySettingsDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    await this.prisma.organization.findUniqueOrThrow({ where: { id: orgId } });

    // Security settings would persist to a dedicated table when schema supports it.
    // For now return the applied values.
    return {
      organizationId: orgId,
      security: {
        requireTwoFactor: dto.requireTwoFactor ?? false,
        sessionTimeoutMinutes: dto.sessionTimeoutMinutes ?? 480,
      },
      updated: true,
    };
  }

  // ── Integrations ──────────────────────────────────────────────────────────────

  getIntegrations(organizationId: string | null) {
    const orgId = this.requireTenant(organizationId);
    return {
      organizationId: orgId,
      integrations: [
        { key: 'stripe', label: 'Stripe Billing', connected: !!process.env.STRIPE_SECRET_KEY },
        { key: 'cloudinary', label: 'Cloudinary (Media)', connected: !!process.env.CLOUDINARY_API_KEY },
        { key: 'sendgrid', label: 'SendGrid (Email)', connected: !!process.env.SENDGRID_API_KEY },
        { key: 'nager_date', label: 'Nager.Date (Public Holidays)', connected: true },
      ],
    };
  }
}
