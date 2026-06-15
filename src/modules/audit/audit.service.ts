import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import type { Prisma } from '../../generated/prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { AUDIT_EVENT } from './audit.types';
import type { AuditEvent } from './audit.types';

@Injectable()
export class AuditService {
  private readonly logger = new Logger(AuditService.name);

  constructor(private readonly prisma: PrismaService) {}

  /**
   * Persist an audit entry. Never throws into the caller — audit logging must
   * not break the business operation that triggered it; failures are logged.
   */
  async log(event: AuditEvent) {
    try {
      return await this.prisma.auditLog.create({
        data: {
          organizationId: event.organizationId,
          action: event.action,
          resourceType: event.resourceType,
          resourceId: event.resourceId,
          resourceName: event.resourceName,
          actorId: event.actorId,
          actorName: event.actorName,
          actorRole: event.actorRole,
          changes: event.changes as Prisma.InputJsonValue | undefined,
          ipAddress: event.ipAddress,
          userAgent: event.userAgent,
        },
      });
    } catch (err) {
      this.logger.error(
        `Failed to write audit log for ${event.action}`,
        err instanceof Error ? err.stack : undefined,
      );
      return null;
    }
  }

  /**
   * EventEmitter bridge: modules fire `audit.log` and move on. `async: true` in
   * the decorator runs the handler off the emitting call stack.
   */
  @OnEvent(AUDIT_EVENT, { async: true })
  async handleAuditEvent(event: AuditEvent) {
    await this.log(event);
  }
}
