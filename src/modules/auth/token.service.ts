import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { PrismaService } from '../../prisma/prisma.service';
import { JwtPayload } from './auth.types';

interface RefreshJwtPayload {
  sub: string; // user id
  jti: string; // RefreshToken row id
}

export interface IssuedTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: string;
}

interface SessionContext {
  deviceInfo?: string;
  ipAddress?: string;
}

@Injectable()
export class TokenService {
  constructor(
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
    private readonly prisma: PrismaService,
  ) {}

  private get accessSecret(): string {
    return this.config.get<string>('jwt.secret') ?? process.env.JWT_SECRET!;
  }

  private get refreshSecret(): string {
    return (
      this.config.get<string>('jwt.refreshSecret') ??
      process.env.REFRESH_TOKEN_SECRET!
    );
  }

  private get accessExpiresIn(): JwtSignOptions['expiresIn'] {
    return (this.config.get<string>('jwt.expiresIn') ??
      '15m') as JwtSignOptions['expiresIn'];
  }

  private get refreshExpiresIn(): JwtSignOptions['expiresIn'] {
    return (this.config.get<string>('jwt.refreshExpiresIn') ??
      '7d') as JwtSignOptions['expiresIn'];
  }

  /** Issue a fresh access + refresh token pair and persist the refresh session. */
  async issueTokens(
    payload: JwtPayload,
    ctx: SessionContext = {},
  ): Promise<IssuedTokens> {
    const accessToken = await this.jwt.signAsync(payload, {
      secret: this.accessSecret,
      expiresIn: this.accessExpiresIn,
    });

    const refreshToken = await this.createRefreshToken(payload.sub, ctx);

    const expiresIn = this.config.get<string>('jwt.expiresIn') ?? '15m';
    return { accessToken, refreshToken, expiresIn };
  }

  async signAccessToken(payload: JwtPayload): Promise<string> {
    return this.jwt.signAsync(payload, {
      secret: this.accessSecret,
      expiresIn: this.accessExpiresIn,
    });
  }

  private async createRefreshToken(
    userId: string,
    ctx: SessionContext,
  ): Promise<string> {
    const expiresAt = this.refreshExpiryDate();

    // Create the row first so we can embed its id (jti) into the signed token.
    const record = await this.prisma.refreshToken.create({
      data: {
        userId,
        tokenHash: 'pending',
        deviceInfo: ctx.deviceInfo,
        ipAddress: ctx.ipAddress,
        expiresAt,
      },
    });

    const token = await this.jwt.signAsync(
      { sub: userId, jti: record.id } satisfies RefreshJwtPayload,
      { secret: this.refreshSecret, expiresIn: this.refreshExpiresIn },
    );

    await this.prisma.refreshToken.update({
      where: { id: record.id },
      data: { tokenHash: await argon2.hash(token) },
    });

    return token;
  }

  /**
   * Validate a refresh token (signature, persistence, not revoked/expired) and
   * rotate it: the presented token is revoked and a new pair is issued.
   */
  async rotate(
    refreshToken: string,
    payloadFor: (userId: string) => Promise<JwtPayload>,
    ctx: SessionContext = {},
  ): Promise<IssuedTokens> {
    const record = await this.verifyRefreshToken(refreshToken);

    await this.prisma.refreshToken.update({
      where: { id: record.id },
      data: { revokedAt: new Date() },
    });

    const payload = await payloadFor(record.userId);
    return this.issueTokens(payload, ctx);
  }

  /** Verify a refresh token and return its (active) DB record. */
  async verifyRefreshToken(refreshToken: string) {
    let decoded: RefreshJwtPayload;
    try {
      decoded = await this.jwt.verifyAsync<RefreshJwtPayload>(refreshToken, {
        secret: this.refreshSecret,
      });
    } catch {
      throw new UnauthorizedException('Invalid or expired refresh token');
    }

    const record = await this.prisma.refreshToken.findUnique({
      where: { id: decoded.jti },
    });

    if (
      !record ||
      record.userId !== decoded.sub ||
      record.revokedAt ||
      record.expiresAt < new Date()
    ) {
      throw new UnauthorizedException('Refresh session is no longer valid');
    }

    const matches = await argon2.verify(record.tokenHash, refreshToken);
    if (!matches) {
      throw new UnauthorizedException('Refresh token mismatch');
    }

    return record;
  }

  /** Revoke a single refresh session by presented token (logout). */
  async revokeByToken(refreshToken: string): Promise<void> {
    try {
      const record = await this.verifyRefreshToken(refreshToken);
      await this.prisma.refreshToken.update({
        where: { id: record.id },
        data: { revokedAt: new Date() },
      });
    } catch {
      // Logout is idempotent — an unknown/expired token is already "revoked".
    }
  }

  /** Revoke a specific session by id, scoped to the owning user. */
  async revokeSession(userId: string, sessionId: string): Promise<void> {
    await this.prisma.refreshToken.updateMany({
      where: { id: sessionId, userId, revokedAt: null },
      data: { revokedAt: new Date() },
    });
  }

  /** Revoke every active session for a user (e.g. password reset). */
  async revokeAllForUser(userId: string): Promise<void> {
    await this.prisma.refreshToken.updateMany({
      where: { userId, revokedAt: null },
      data: { revokedAt: new Date() },
    });
  }

  async listSessions(userId: string) {
    return this.prisma.refreshToken.findMany({
      where: { userId, revokedAt: null, expiresAt: { gt: new Date() } },
      select: {
        id: true,
        deviceInfo: true,
        ipAddress: true,
        createdAt: true,
        expiresAt: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  private refreshExpiryDate(): Date {
    const raw = this.config.get<string>('jwt.refreshExpiresIn') ?? '7d';
    const match = /^(\d+)([smhd])$/.exec(raw);
    const now = Date.now();
    if (!match) {
      // Fallback: 7 days.
      return new Date(now + 7 * 24 * 60 * 60 * 1000);
    }
    const value = parseInt(match[1], 10);
    const unit = match[2];
    const multipliers: Record<string, number> = {
      s: 1000,
      m: 60 * 1000,
      h: 60 * 60 * 1000,
      d: 24 * 60 * 60 * 1000,
    };
    return new Date(now + value * multipliers[unit]);
  }
}
