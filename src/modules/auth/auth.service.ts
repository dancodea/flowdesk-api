import {
  BadRequestException,
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import * as argon2 from 'argon2';
import { generateSecret, generateURI, verifySync } from 'otplib';
import * as QRCode from 'qrcode';
import slugify from 'slugify';
import { InvitationStatus, Role } from '../../generated/prisma/enums';
import { PrismaService } from '../../prisma/prisma.service';
import { AuthMailService } from './auth-mail.service';
import { AuthUser, JwtPayload } from './auth.types';
import { TokenService } from './token.service';
import { generateOneTimeToken, hashToken } from './token.util';
import {
  AcceptInviteDto,
  ForgotPasswordDto,
  LoginDto,
  RegisterDto,
  ResetPasswordDto,
} from './dto';

interface RequestContext {
  deviceInfo?: string;
  ipAddress?: string;
}

const EMAIL_TOKEN_TTL_MS = 24 * 60 * 60 * 1000; // 24h
const RESET_TOKEN_TTL_MS = 60 * 60 * 1000; // 1h

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly tokens: TokenService,
    private readonly mail: AuthMailService,
  ) {}

  private payloadFor(user: {
    id: string;
    email: string;
    role: Role;
    organizationId: string | null;
  }): JwtPayload {
    return {
      sub: user.id,
      email: user.email,
      role: user.role,
      organizationId: user.organizationId,
    };
  }

  // ───────────────────────────────────────────────────────────────────────────
  // Registration — creates an Organization and its first ORG_ADMIN user.
  // ───────────────────────────────────────────────────────────────────────────
  async register(dto: RegisterDto, ctx: RequestContext = {}) {
    const email = dto.email.toLowerCase().trim();

    const existing = await this.prisma.user.findFirst({ where: { email } });
    if (existing) {
      throw new ConflictException('An account with this email already exists');
    }

    const passwordHash = await argon2.hash(dto.password);
    const slug = await this.uniqueSlug(dto.companyName);

    const user = await this.prisma.$transaction(async (tx) => {
      const org = await tx.organization.create({
        data: { name: dto.companyName, slug },
      });
      return tx.user.create({
        data: {
          organizationId: org.id,
          email,
          passwordHash,
          fullName: dto.fullName,
          role: Role.ORG_ADMIN,
        },
      });
    });

    await this.issueEmailVerification(user.id, email);

    const issued = await this.tokens.issueTokens(this.payloadFor(user), ctx);
    return { user: this.sanitize(user), ...issued };
  }

  // ───────────────────────────────────────────────────────────────────────────
  // Login
  // ───────────────────────────────────────────────────────────────────────────
  async login(dto: LoginDto, ctx: RequestContext = {}) {
    const email = dto.email.toLowerCase().trim();
    const user = await this.prisma.user.findFirst({ where: { email } });

    if (!user || !user.passwordHash) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const valid = await argon2.verify(user.passwordHash, dto.password);
    if (!valid) {
      throw new UnauthorizedException('Invalid email or password');
    }
    if (!user.isActive) {
      throw new UnauthorizedException('This account has been deactivated');
    }

    if (user.twoFaEnabled) {
      if (!dto.totpCode) {
        throw new UnauthorizedException('TWO_FACTOR_REQUIRED');
      }
      if (!this.verifyTotp(dto.totpCode, user.twoFaSecret)) {
        throw new UnauthorizedException('Invalid two-factor code');
      }
    }

    await this.prisma.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() },
    });

    const issued = await this.tokens.issueTokens(this.payloadFor(user), ctx);
    return { user: this.sanitize(user), ...issued };
  }

  // ───────────────────────────────────────────────────────────────────────────
  // Token refresh & logout
  // ───────────────────────────────────────────────────────────────────────────
  async refresh(refreshToken: string, ctx: RequestContext = {}) {
    return this.tokens.rotate(
      refreshToken,
      async (userId) => {
        const user = await this.prisma.user.findUnique({
          where: { id: userId },
        });
        if (!user || !user.isActive) {
          throw new UnauthorizedException('Account is no longer active');
        }
        return this.payloadFor(user);
      },
      ctx,
    );
  }

  async logout(refreshToken: string): Promise<void> {
    await this.tokens.revokeByToken(refreshToken);
  }

  // ───────────────────────────────────────────────────────────────────────────
  // Current user
  // ───────────────────────────────────────────────────────────────────────────
  async me(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: { organization: true },
    });
    if (!user) throw new NotFoundException('User not found');
    return this.sanitize(user);
  }

  // ───────────────────────────────────────────────────────────────────────────
  // Email verification
  // ───────────────────────────────────────────────────────────────────────────
  private async issueEmailVerification(userId: string, email: string) {
    const { raw, hash } = generateOneTimeToken();
    await this.prisma.emailVerificationToken.create({
      data: {
        userId,
        tokenHash: hash,
        expiresAt: new Date(Date.now() + EMAIL_TOKEN_TTL_MS),
      },
    });
    await this.mail.sendEmailVerification(email, raw);
  }

  async verifyEmail(token: string) {
    const record = await this.prisma.emailVerificationToken.findUnique({
      where: { tokenHash: hashToken(token) },
    });
    if (!record || record.usedAt || record.expiresAt < new Date()) {
      throw new BadRequestException('Verification link is invalid or expired');
    }
    await this.prisma.$transaction([
      this.prisma.user.update({
        where: { id: record.userId },
        data: { emailVerified: true },
      }),
      this.prisma.emailVerificationToken.update({
        where: { id: record.id },
        data: { usedAt: new Date() },
      }),
    ]);
    return { verified: true };
  }

  // ───────────────────────────────────────────────────────────────────────────
  // Password reset
  // ───────────────────────────────────────────────────────────────────────────
  async forgotPassword(dto: ForgotPasswordDto) {
    const email = dto.email.toLowerCase().trim();
    const user = await this.prisma.user.findFirst({ where: { email } });

    // Always respond success to avoid leaking which emails are registered.
    if (user) {
      const { raw, hash } = generateOneTimeToken();
      await this.prisma.passwordResetToken.create({
        data: {
          userId: user.id,
          tokenHash: hash,
          expiresAt: new Date(Date.now() + RESET_TOKEN_TTL_MS),
        },
      });
      await this.mail.sendPasswordReset(email, raw);
    }
    return { message: 'If that email exists, a reset link has been sent' };
  }

  async resetPassword(dto: ResetPasswordDto) {
    const record = await this.prisma.passwordResetToken.findUnique({
      where: { tokenHash: hashToken(dto.token) },
    });
    if (!record || record.usedAt || record.expiresAt < new Date()) {
      throw new BadRequestException('Reset link is invalid or expired');
    }

    const passwordHash = await argon2.hash(dto.newPassword);
    await this.prisma.$transaction([
      this.prisma.user.update({
        where: { id: record.userId },
        data: { passwordHash },
      }),
      this.prisma.passwordResetToken.update({
        where: { id: record.id },
        data: { usedAt: new Date() },
      }),
    ]);

    // Invalidate all existing sessions after a password change.
    await this.tokens.revokeAllForUser(record.userId);
    return { message: 'Password updated successfully' };
  }

  // ───────────────────────────────────────────────────────────────────────────
  // Invitation acceptance
  // ───────────────────────────────────────────────────────────────────────────
  async acceptInvite(dto: AcceptInviteDto, ctx: RequestContext = {}) {
    const invitation = await this.prisma.invitation.findUnique({
      where: { tokenHash: hashToken(dto.inviteToken) },
    });
    if (
      !invitation ||
      invitation.status !== InvitationStatus.PENDING ||
      invitation.expiresAt < new Date()
    ) {
      throw new BadRequestException('Invitation is invalid or expired');
    }

    const email = invitation.email.toLowerCase().trim();
    const existing = await this.prisma.user.findFirst({
      where: { organizationId: invitation.organizationId, email },
    });
    if (existing) {
      throw new ConflictException('This invitation has already been used');
    }

    const passwordHash = await argon2.hash(dto.password);
    const user = await this.prisma.$transaction(async (tx) => {
      const created = await tx.user.create({
        data: {
          organizationId: invitation.organizationId,
          email,
          passwordHash,
          fullName: dto.fullName,
          role: invitation.role,
          emailVerified: true, // proven via the invite link
        },
      });
      await tx.invitation.update({
        where: { id: invitation.id },
        data: { status: InvitationStatus.ACCEPTED, acceptedAt: new Date() },
      });
      // Link to the employee record that was created when HR invited this person.
      await tx.employee
        .updateMany({
          where: {
            organizationId: invitation.organizationId,
            workEmail: email,
            userId: null,
          },
          data: { userId: created.id },
        })
        .catch(() => null);
      return created;
    });

    const issued = await this.tokens.issueTokens(this.payloadFor(user), ctx);
    return { user: this.sanitize(user), ...issued };
  }

  // ───────────────────────────────────────────────────────────────────────────
  // Two-factor authentication (TOTP)
  // ───────────────────────────────────────────────────────────────────────────
  async setupTwoFactor(user: AuthUser) {
    const secret = generateSecret();
    await this.prisma.user.update({
      where: { id: user.id },
      data: { twoFaSecret: secret, twoFaEnabled: false },
    });
    const otpauth = generateURI({
      issuer: 'FlowDesk',
      label: user.email,
      secret,
    });
    const qrCode = await QRCode.toDataURL(otpauth);
    return { secret, otpauthUrl: otpauth, qrCode };
  }

  async verifyTwoFactor(userId: string, code: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user?.twoFaSecret) {
      throw new BadRequestException('Two-factor setup has not been started');
    }
    if (!this.verifyTotp(code, user.twoFaSecret)) {
      throw new BadRequestException('Invalid two-factor code');
    }

    await this.prisma.user.update({
      where: { id: userId },
      data: { twoFaEnabled: true },
    });
    return { enabled: true };
  }

  async disableTwoFactor(userId: string, code: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user?.twoFaEnabled || !user.twoFaSecret) {
      throw new BadRequestException('Two-factor is not enabled');
    }
    if (!this.verifyTotp(code, user.twoFaSecret)) {
      throw new BadRequestException('Invalid two-factor code');
    }

    await this.prisma.user.update({
      where: { id: userId },
      data: { twoFaEnabled: false, twoFaSecret: null },
    });
    return { enabled: false };
  }

  // ───────────────────────────────────────────────────────────────────────────
  // Sessions
  // ───────────────────────────────────────────────────────────────────────────
  async listSessions(userId: string) {
    return this.tokens.listSessions(userId);
  }

  async revokeSession(userId: string, sessionId: string) {
    await this.tokens.revokeSession(userId, sessionId);
    return { revoked: true };
  }

  // ───────────────────────────────────────────────────────────────────────────
  // Helpers
  // ───────────────────────────────────────────────────────────────────────────
  private sanitize<
    T extends { passwordHash?: string | null; twoFaSecret?: string | null },
  >(user: T): Omit<T, 'passwordHash' | 'twoFaSecret'> {
    const { passwordHash, twoFaSecret, ...rest } = user;
    void passwordHash;
    void twoFaSecret;
    return rest;
  }

  private verifyTotp(token: string, secret: string | null): boolean {
    if (!secret) return false;
    // epochTolerance (seconds) absorbs ±1 time-step of clock drift.
    return verifySync({ token, secret, epochTolerance: 30 }).valid;
  }

  private async uniqueSlug(companyName: string): Promise<string> {
    const base =
      slugify(companyName, { lower: true, strict: true }) || 'company';
    let candidate = base;
    let suffix = 1;
    while (
      await this.prisma.organization.findUnique({ where: { slug: candidate } })
    ) {
      candidate = `${base}-${suffix++}`;
    }
    return candidate;
  }
}
