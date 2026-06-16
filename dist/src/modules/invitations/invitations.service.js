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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvitationsService = void 0;
const common_1 = require("@nestjs/common");
const enums_1 = require("../../generated/prisma/enums");
const prisma_service_1 = require("../../prisma/prisma.service");
const auth_mail_service_1 = require("../auth/auth-mail.service");
const token_util_1 = require("../auth/token.util");
const INVITE_TTL_MS = 7 * 24 * 60 * 60 * 1000;
const PUBLIC_FIELDS = {
    id: true,
    organizationId: true,
    email: true,
    role: true,
    departmentId: true,
    status: true,
    expiresAt: true,
    acceptedAt: true,
    invitedById: true,
    createdAt: true,
};
let InvitationsService = class InvitationsService {
    prisma;
    mail;
    constructor(prisma, mail) {
        this.prisma = prisma;
        this.mail = mail;
    }
    requireTenant(organizationId) {
        if (!organizationId) {
            throw new common_1.BadRequestException('No organization context on this account');
        }
        return organizationId;
    }
    async create(user, dto) {
        const orgId = this.requireTenant(user.organizationId);
        const email = dto.email.toLowerCase().trim();
        if (dto.role === enums_1.Role.SUPER_ADMIN) {
            throw new common_1.BadRequestException('Cannot invite a platform super admin');
        }
        const existingUser = await this.prisma.user.findFirst({
            where: { organizationId: orgId, email },
        });
        if (existingUser) {
            throw new common_1.ConflictException('A user with this email already exists');
        }
        const existingInvite = await this.prisma.invitation.findFirst({
            where: { organizationId: orgId, email, status: enums_1.InvitationStatus.PENDING },
        });
        if (existingInvite) {
            throw new common_1.ConflictException('A pending invitation already exists for this email');
        }
        const { raw, hash } = (0, token_util_1.generateOneTimeToken)();
        const invitation = await this.prisma.invitation.create({
            data: {
                organizationId: orgId,
                email,
                role: dto.role,
                departmentId: dto.departmentId,
                tokenHash: hash,
                status: enums_1.InvitationStatus.PENDING,
                expiresAt: new Date(Date.now() + INVITE_TTL_MS),
                invitedById: user.id,
            },
            select: PUBLIC_FIELDS,
        });
        await this.mail.sendInvite(email, raw);
        return invitation;
    }
    async createBulk(user, dto) {
        const results = [];
        for (const invite of dto.invites) {
            try {
                await this.create(user, invite);
                results.push({ email: invite.email, status: 'invited' });
            }
            catch (err) {
                results.push({
                    email: invite.email,
                    status: 'skipped',
                    reason: err instanceof Error ? err.message : 'Unknown error',
                });
            }
        }
        return {
            invited: results.filter((r) => r.status === 'invited').length,
            skipped: results.filter((r) => r.status === 'skipped').length,
            results,
        };
    }
    list(organizationId, dto) {
        const orgId = this.requireTenant(organizationId);
        return this.prisma.invitation.findMany({
            where: { organizationId: orgId, status: dto.status },
            select: PUBLIC_FIELDS,
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOwned(organizationId, invitationId) {
        const orgId = this.requireTenant(organizationId);
        const invitation = await this.prisma.invitation.findFirst({
            where: { id: invitationId, organizationId: orgId },
        });
        if (!invitation)
            throw new common_1.NotFoundException('Invitation not found');
        return invitation;
    }
    async revoke(organizationId, invitationId) {
        const invitation = await this.findOwned(organizationId, invitationId);
        if (invitation.status === enums_1.InvitationStatus.ACCEPTED) {
            throw new common_1.ConflictException('Accepted invitations cannot be revoked');
        }
        await this.prisma.invitation.update({
            where: { id: invitation.id },
            data: { status: enums_1.InvitationStatus.REVOKED },
        });
        return { revoked: true };
    }
    async resend(organizationId, invitationId) {
        const invitation = await this.findOwned(organizationId, invitationId);
        if (invitation.status === enums_1.InvitationStatus.ACCEPTED) {
            throw new common_1.ConflictException('This invitation has already been accepted');
        }
        const { raw, hash } = (0, token_util_1.generateOneTimeToken)();
        await this.prisma.invitation.update({
            where: { id: invitation.id },
            data: {
                tokenHash: hash,
                status: enums_1.InvitationStatus.PENDING,
                expiresAt: new Date(Date.now() + INVITE_TTL_MS),
            },
        });
        await this.mail.sendInvite(invitation.email, raw);
        return { resent: true };
    }
};
exports.InvitationsService = InvitationsService;
exports.InvitationsService = InvitationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        auth_mail_service_1.AuthMailService])
], InvitationsService);
//# sourceMappingURL=invitations.service.js.map