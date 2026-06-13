import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../prisma/prisma.service';
import { JwtPayload } from './auth.types';
export interface IssuedTokens {
    accessToken: string;
    refreshToken: string;
    expiresIn: string;
}
interface SessionContext {
    deviceInfo?: string;
    ipAddress?: string;
}
export declare class TokenService {
    private readonly jwt;
    private readonly config;
    private readonly prisma;
    constructor(jwt: JwtService, config: ConfigService, prisma: PrismaService);
    private get accessSecret();
    private get refreshSecret();
    private get accessExpiresIn();
    private get refreshExpiresIn();
    issueTokens(payload: JwtPayload, ctx?: SessionContext): Promise<IssuedTokens>;
    signAccessToken(payload: JwtPayload): Promise<string>;
    private createRefreshToken;
    rotate(refreshToken: string, payloadFor: (userId: string) => Promise<JwtPayload>, ctx?: SessionContext): Promise<IssuedTokens>;
    verifyRefreshToken(refreshToken: string): Promise<{
        id: string;
        tokenHash: string;
        deviceInfo: string | null;
        ipAddress: string | null;
        expiresAt: Date;
        revokedAt: Date | null;
        createdAt: Date;
        userId: string;
    }>;
    revokeByToken(refreshToken: string): Promise<void>;
    revokeSession(userId: string, sessionId: string): Promise<void>;
    revokeAllForUser(userId: string): Promise<void>;
    listSessions(userId: string): Promise<{
        id: string;
        deviceInfo: string | null;
        ipAddress: string | null;
        expiresAt: Date;
        createdAt: Date;
    }[]>;
    private refreshExpiryDate;
}
export {};
