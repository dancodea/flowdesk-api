import { PrismaService } from '../../prisma/prisma.service';
import type { AuditEvent } from './audit.types';
export declare class AuditService {
    private readonly prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    log(event: AuditEvent): Promise<{
        organizationId: string;
        id: string;
        ipAddress: string | null;
        createdAt: Date;
        actorId: string | null;
        actorName: string | null;
        actorRole: string | null;
        action: string;
        resourceType: string;
        resourceId: string | null;
        resourceName: string | null;
        changes: import("@prisma/client/runtime/client").JsonValue | null;
        userAgent: string | null;
    } | null>;
    handleAuditEvent(event: AuditEvent): Promise<void>;
}
