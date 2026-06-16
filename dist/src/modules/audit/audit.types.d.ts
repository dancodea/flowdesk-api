export declare const AUDIT_EVENT = "audit.log";
export interface AuditEvent {
    organizationId: string;
    action: string;
    resourceType: string;
    resourceId?: string;
    resourceName?: string;
    actorId?: string;
    actorName?: string;
    actorRole?: string;
    changes?: Record<string, unknown>;
    ipAddress?: string;
    userAgent?: string;
}
