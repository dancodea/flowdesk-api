import type { AuthUser } from '../auth/auth.types';
import { BulkInvitationDto, CreateInvitationDto, ListInvitationsDto } from './dto';
import { InvitationsService } from './invitations.service';
export declare class InvitationsController {
    private readonly invitations;
    constructor(invitations: InvitationsService);
    create(user: AuthUser, dto: CreateInvitationDto): Promise<{
        organizationId: string;
        email: string;
        id: string;
        role: import("../../generated/prisma/enums").Role;
        expiresAt: Date;
        createdAt: Date;
        departmentId: string | null;
        status: import("../../generated/prisma/enums").InvitationStatus;
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
    list(user: AuthUser, dto: ListInvitationsDto): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        organizationId: string;
        email: string;
        id: string;
        role: import("../../generated/prisma/enums").Role;
        expiresAt: Date;
        createdAt: Date;
        departmentId: string | null;
        status: import("../../generated/prisma/enums").InvitationStatus;
        acceptedAt: Date | null;
        invitedById: string | null;
    }[]>;
    revoke(user: AuthUser, id: string): Promise<{
        revoked: boolean;
    }>;
    resend(user: AuthUser, id: string): Promise<{
        resent: boolean;
    }>;
}
