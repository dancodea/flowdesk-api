import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InvitationStatus, Role } from '../../generated/prisma/enums';
import { PrismaService } from '../../prisma/prisma.service';
import { AuthMailService } from '../auth/auth-mail.service';
import { generateOneTimeToken } from '../auth/token.util';
import type { AuthUser } from '../auth/auth.types';
import {
  BulkInvitationDto,
  CreateInvitationDto,
  ListInvitationsDto,
} from './dto';

const INVITE_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

// Fields safe to return — never expose the token hash.
const PUBLIC_FIELDS = {
  id: true,
  organizationId: true,
  email: true,
  role: true,
  departmentId: true,
  status: true,
  expiresAt: true,
  acceptedAt: true,
  invitedById: true,
  createdAt: true,
} as const;

@Injectable()
export class InvitationsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mail: AuthMailService,
  ) {}

  private requireTenant(organizationId: string | null): string {
    if (!organizationId) {
      throw new BadRequestException('No organization context on this account');
    }
    return organizationId;
  }

  async create(user: AuthUser, dto: CreateInvitationDto) {
    const orgId = this.requireTenant(user.organizationId);
    const email = dto.email.toLowerCase().trim();

    if (dto.role === Role.SUPER_ADMIN) {
      throw new BadRequestException('Cannot invite a platform super admin');
    }

    const existingUser = await this.prisma.user.findFirst({
      where: { organizationId: orgId, email },
    });
    if (existingUser) {
      throw new ConflictException('A user with this email already exists');
    }

    const existingInvite = await this.prisma.invitation.findFirst({
      where: { organizationId: orgId, email, status: InvitationStatus.PENDING },
    });
    if (existingInvite) {
      throw new ConflictException(
        'A pending invitation already exists for this email',
      );
    }

    const { raw, hash } = generateOneTimeToken();
    const invitation = await this.prisma.invitation.create({
      data: {
        organizationId: orgId,
        email,
        role: dto.role,
        departmentId: dto.departmentId,
        tokenHash: hash,
        status: InvitationStatus.PENDING,
        expiresAt: new Date(Date.now() + INVITE_TTL_MS),
        invitedById: user.id,
      },
      select: PUBLIC_FIELDS,
    });

    await this.mail.sendInvite(email, raw);
    return invitation;
  }

  async createBulk(user: AuthUser, dto: BulkInvitationDto) {
    const results: {
      email: string;
      status: 'invited' | 'skipped';
      reason?: string;
    }[] = [];

    for (const invite of dto.invites) {
      try {
        await this.create(user, invite);
        results.push({ email: invite.email, status: 'invited' });
      } catch (err) {
        results.push({
          email: invite.email,
          status: 'skipped',
          reason: err instanceof Error ? err.message : 'Unknown error',
        });
      }
    }

    return {
      invited: results.filter((r) => r.status === 'invited').length,
      skipped: results.filter((r) => r.status === 'skipped').length,
      results,
    };
  }

  list(organizationId: string | null, dto: ListInvitationsDto) {
    const orgId = this.requireTenant(organizationId);
    return this.prisma.invitation.findMany({
      where: { organizationId: orgId, status: dto.status },
      select: PUBLIC_FIELDS,
      orderBy: { createdAt: 'desc' },
    });
  }

  private async findOwned(organizationId: string | null, invitationId: string) {
    const orgId = this.requireTenant(organizationId);
    const invitation = await this.prisma.invitation.findFirst({
      where: { id: invitationId, organizationId: orgId },
    });
    if (!invitation) throw new NotFoundException('Invitation not found');
    return invitation;
  }

  async revoke(organizationId: string | null, invitationId: string) {
    const invitation = await this.findOwned(organizationId, invitationId);
    if (invitation.status === InvitationStatus.ACCEPTED) {
      throw new ConflictException('Accepted invitations cannot be revoked');
    }
    await this.prisma.invitation.update({
      where: { id: invitation.id },
      data: { status: InvitationStatus.REVOKED },
    });
    return { revoked: true };
  }

  async resend(organizationId: string | null, invitationId: string) {
    const invitation = await this.findOwned(organizationId, invitationId);
    if (invitation.status === InvitationStatus.ACCEPTED) {
      throw new ConflictException('This invitation has already been accepted');
    }

    const { raw, hash } = generateOneTimeToken();
    await this.prisma.invitation.update({
      where: { id: invitation.id },
      data: {
        tokenHash: hash,
        status: InvitationStatus.PENDING,
        expiresAt: new Date(Date.now() + INVITE_TTL_MS),
      },
    });

    await this.mail.sendInvite(invitation.email, raw);
    return { resent: true };
  }
}
