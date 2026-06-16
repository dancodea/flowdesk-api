import type { Request } from 'express';
import { AuthService } from './auth.service';
import type { AuthUser } from './auth.types';
import { AcceptInviteDto, ForgotPasswordDto, LoginDto, RefreshDto, RegisterDto, ResetPasswordDto, RevokeSessionDto, TwoFactorCodeDto, VerifyEmailDto } from './dto';
export declare class AuthController {
    private readonly auth;
    constructor(auth: AuthService);
    private ctx;
    register(dto: RegisterDto, req: Request): Promise<{
        accessToken: string;
        refreshToken: string;
        expiresIn: string;
        user: Omit<{
            organizationId: string | null;
            email: string;
            id: string;
            role: import("../../generated/prisma/enums").Role;
            createdAt: Date;
            fullName: string;
            passwordHash: string | null;
            emailVerified: boolean;
            avatarUrl: string | null;
            isActive: boolean;
            twoFaEnabled: boolean;
            twoFaSecret: string | null;
            lastLoginAt: Date | null;
            updatedAt: Date;
        }, "passwordHash" | "twoFaSecret">;
    }>;
    login(dto: LoginDto, req: Request): Promise<{
        accessToken: string;
        refreshToken: string;
        expiresIn: string;
        user: Omit<{
            organizationId: string | null;
            email: string;
            id: string;
            role: import("../../generated/prisma/enums").Role;
            createdAt: Date;
            fullName: string;
            passwordHash: string | null;
            emailVerified: boolean;
            avatarUrl: string | null;
            isActive: boolean;
            twoFaEnabled: boolean;
            twoFaSecret: string | null;
            lastLoginAt: Date | null;
            updatedAt: Date;
        }, "passwordHash" | "twoFaSecret">;
    }>;
    refresh(dto: RefreshDto, req: Request): Promise<import("./token.service").IssuedTokens>;
    logout(dto: RefreshDto): Promise<{
        message: string;
    }>;
    verifyEmail(dto: VerifyEmailDto): Promise<{
        verified: boolean;
    }>;
    forgotPassword(dto: ForgotPasswordDto): Promise<{
        message: string;
    }>;
    resetPassword(dto: ResetPasswordDto): Promise<{
        message: string;
    }>;
    acceptInvite(dto: AcceptInviteDto, req: Request): Promise<{
        accessToken: string;
        refreshToken: string;
        expiresIn: string;
        user: Omit<{
            organizationId: string | null;
            email: string;
            id: string;
            role: import("../../generated/prisma/enums").Role;
            createdAt: Date;
            fullName: string;
            passwordHash: string | null;
            emailVerified: boolean;
            avatarUrl: string | null;
            isActive: boolean;
            twoFaEnabled: boolean;
            twoFaSecret: string | null;
            lastLoginAt: Date | null;
            updatedAt: Date;
        }, "passwordHash" | "twoFaSecret">;
    }>;
    me(user: AuthUser): Promise<Omit<{
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
            website: string | null;
            fiscalYearStart: number;
            plan: import("../../generated/prisma/enums").Plan;
            stripeCustomerId: string | null;
            stripeSubscriptionId: string | null;
            subscriptionStatus: import("../../generated/prisma/enums").SubscriptionStatus;
            trialEndsAt: Date | null;
            seatCount: number;
            deletedAt: Date | null;
        } | null;
    } & {
        organizationId: string | null;
        email: string;
        id: string;
        role: import("../../generated/prisma/enums").Role;
        createdAt: Date;
        fullName: string;
        passwordHash: string | null;
        emailVerified: boolean;
        avatarUrl: string | null;
        isActive: boolean;
        twoFaEnabled: boolean;
        twoFaSecret: string | null;
        lastLoginAt: Date | null;
        updatedAt: Date;
    }, "passwordHash" | "twoFaSecret">>;
    setup2fa(user: AuthUser): Promise<{
        secret: string;
        otpauthUrl: string;
        qrCode: string;
    }>;
    verify2fa(user: AuthUser, dto: TwoFactorCodeDto): Promise<{
        enabled: boolean;
    }>;
    disable2fa(user: AuthUser, dto: TwoFactorCodeDto): Promise<{
        enabled: boolean;
    }>;
    sessions(user: AuthUser): Promise<{
        id: string;
        deviceInfo: string | null;
        ipAddress: string | null;
        expiresAt: Date;
        createdAt: Date;
    }[]>;
    revokeSession(user: AuthUser, dto: RevokeSessionDto): Promise<{
        revoked: boolean;
    }>;
}
