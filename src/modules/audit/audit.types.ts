/** Canonical event name modules emit to record an audit entry. */
export const AUDIT_EVENT = 'audit.log';

/**
 * Payload for an audit entry. Modules either call AuditService.log() directly or
 * fire-and-forget via EventEmitter2: `this.events.emit(AUDIT_EVENT, payload)`.
 */
export interface AuditEvent {
  organizationId: string;
  action: string; // e.g. 'employee.created', 'payroll.run.approved'
  resourceType: string; // e.g. 'Employee', 'PayRun'
  resourceId?: string;
  resourceName?: string;
  actorId?: string;
  actorName?: string;
  actorRole?: string;
  changes?: Record<string, unknown>;
  ipAddress?: string;
  userAgent?: string;
}
