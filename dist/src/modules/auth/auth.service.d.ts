import { Role } from '../../generated/prisma/enums';
import { PrismaService } from '../../prisma/prisma.service';
import { AuthMailService } from './auth-mail.service';
import { AuthUser } from './auth.types';
import { TokenService } from './token.service';
import { AcceptInviteDto, ForgotPasswordDto, LoginDto, RegisterDto, ResetPasswordDto } from './dto';
interface RequestContext {
    deviceInfo?: string;
    ipAddress?: string;
}
export declare class AuthService {
    private readonly prisma;
    private readonly tokens;
    private readonly mail;
    private readonly logger;
    constructor(prisma: PrismaService, tokens: TokenService, mail: AuthMailService);
    private payloadFor;
    register(dto: RegisterDto, ctx?: RequestContext): Promise<{
        accessToken: string;
        refreshToken: string;
        expiresIn: string;
        user: Omit<{
            email: string;
            id: string;
            createdAt: Date;
            fullName: string;
            organizationId: string | null;
            passwordHash: string | null;
            role: Role;
            emailVerified: boolean;
            avatarUrl: string | null;
            isActive: boolean;
            twoFaEnabled: boolean;
            twoFaSecret: string | null;
            lastLoginAt: Date | null;
            updatedAt: Date;
        }, "passwordHash" | "twoFaSecret">;
    }>;
    login(dto: LoginDto, ctx?: RequestContext): Promise<{
        accessToken: string;
        refreshToken: string;
        expiresIn: string;
        user: Omit<{
            email: string;
            id: string;
            createdAt: Date;
            fullName: string;
            organizationId: string | null;
            passwordHash: string | null;
            role: Role;
            emailVerified: boolean;
            avatarUrl: string | null;
            isActive: boolean;
            twoFaEnabled: boolean;
            twoFaSecret: string | null;
            lastLoginAt: Date | null;
            updatedAt: Date;
        }, "passwordHash" | "twoFaSecret">;
    }>;
    refresh(refreshToken: string, ctx?: RequestContext): Promise<import("./token.service").IssuedTokens>;
    logout(refreshToken: string): Promise<void>;
    me(userId: string): Promise<Omit<{
        organization: {
            id: string;
            createdAt: Date;
            name: string;
            updatedAt: Date;
            slug: string;
            industry: string | null;
            size: string | null;
            country: string | null;
            timezone: string | null;
            currency: string | null;
            logoUrl: string | null;
            plan: import("../../generated/prisma/enums").Plan;
            deletedAt: Date | null;
        } | null;
    } & {
        email: string;
        id: string;
        createdAt: Date;
        fullName: string;
        organizationId: string | null;
        passwordHash: string | null;
        role: Role;
        emailVerified: boolean;
        avatarUrl: string | null;
        isActive: boolean;
        twoFaEnabled: boolean;
        twoFaSecret: string | null;
        lastLoginAt: Date | null;
        updatedAt: Date;
    }, "passwordHash" | "twoFaSecret">>;
    private issueEmailVerification;
    verifyEmail(token: string): Promise<{
        verified: boolean;
    }>;
    forgotPassword(dto: ForgotPasswordDto): Promise<{
        message: string;
    }>;
    resetPassword(dto: ResetPasswordDto): Promise<{
        message: string;
    }>;
    acceptInvite(dto: AcceptInviteDto, ctx?: RequestContext): Promise<{
        accessToken: string;
        refreshToken: string;
        expiresIn: string;
        user: Omit<{
            email: string;
            id: string;
            createdAt: Date;
            fullName: string;
            organizationId: string | null;
            passwordHash: string | null;
            role: Role;
            emailVerified: boolean;
            avatarUrl: string | null;
            isActive: boolean;
            twoFaEnabled: boolean;
            twoFaSecret: string | null;
            lastLoginAt: Date | null;
            updatedAt: Date;
        }, "passwordHash" | "twoFaSecret">;
    }>;
    setupTwoFactor(user: AuthUser): Promise<{
        secret: string;
        otpauthUrl: string;
        qrCode: string;
    }>;
    verifyTwoFactor(userId: string, code: string): Promise<{
        enabled: boolean;
    }>;
    disableTwoFactor(userId: string, code: string): Promise<{
        enabled: boolean;
    }>;
    listSessions(userId: string): Promise<{
        id: string;
        deviceInfo: string | null;
        ipAddress: string | null;
        expiresAt: Date;
        createdAt: Date;
    }[]>;
    revokeSession(userId: string, sessionId: string): Promise<{
        revoked: boolean;
    }>;
    private sanitize;
    private verifyTotp;
    private uniqueSlug;
}
export {};
