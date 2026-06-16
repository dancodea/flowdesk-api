import { InvitationStatus, Role } from '../../generated/prisma/enums';
import { PrismaService } from '../../prisma/prisma.service';
import { AuthMailService } from '../auth/auth-mail.service';
import type { AuthUser } from '../auth/auth.types';
import { BulkInvitationDto, CreateInvitationDto, ListInvitationsDto } from './dto';
export declare class InvitationsService {
    private readonly prisma;
    private readonly mail;
    constructor(prisma: PrismaService, mail: AuthMailService);
    private requireTenant;
    create(user: AuthUser, dto: CreateInvitationDto): Promise<{
        organizationId: string;
        email: string;
        id: string;
        role: Role;
        expiresAt: Date;
        createdAt: Date;
        departmentId: string | null;
        status: InvitationStatus;
        acceptedAt: Date | null;
        invitedById: string | null;
    }>;
    createBulk(user: AuthUser, dto: BulkInvitationDto): Promise<{
        invited: number;
        skipped: number;
        results: {
            email: string;
            status: "invited" | "skipped";
            reason?: string;
        }[];
    }>;
    list(organizationId: string | null, dto: ListInvitationsDto): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        organizationId: string;
        email: string;
        id: string;
        role: Role;
        expiresAt: Date;
        createdAt: Date;
        departmentId: string | null;
        status: InvitationStatus;
        acceptedAt: Date | null;
        invitedById: string | null;
    }[]>;
    private findOwned;
    revoke(organizationId: string | null, invitationId: string): Promise<{
        revoked: boolean;
    }>;
    resend(organizationId: string | null, invitationId: string): Promise<{
        resent: boolean;
    }>;
}
