"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AuditService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditService = void 0;
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const prisma_service_1 = require("../../prisma/prisma.service");
const audit_types_1 = require("./audit.types");
let AuditService = AuditService_1 = class AuditService {
    prisma;
    logger = new common_1.Logger(AuditService_1.name);
    constructor(prisma) {
        this.prisma = prisma;
    }
    async log(event) {
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
                    changes: event.changes,
                    ipAddress: event.ipAddress,
                    userAgent: event.userAgent,
                },
            });
        }
        catch (err) {
            this.logger.error(`Failed to write audit log for ${event.action}`, err instanceof Error ? err.stack : undefined);
            return null;
        }
    }
    async handleAuditEvent(event) {
        await this.log(event);
    }
};
exports.AuditService = AuditService;
__decorate([
    (0, event_emitter_1.OnEvent)(audit_types_1.AUDIT_EVENT, { async: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuditService.prototype, "handleAuditEvent", null);
exports.AuditService = AuditService = AuditService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AuditService);
//# sourceMappingURL=audit.service.js.map