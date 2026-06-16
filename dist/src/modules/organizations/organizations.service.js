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
exports.OrganizationsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const DEFAULT_PAY_GROUP_NAME = 'Default';
const DEFAULT_WORK_SCHEDULE_NAME = 'Standard';
let OrganizationsService = class OrganizationsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    requireTenant(organizationId) {
        if (!organizationId) {
            throw new common_1.BadRequestException('No organization context on this account');
        }
        return organizationId;
    }
    async findMine(organizationId) {
        const id = this.requireTenant(organizationId);
        const org = await this.prisma.organization.findUnique({ where: { id } });
        if (!org || org.deletedAt) {
            throw new common_1.NotFoundException('Organization not found');
        }
        return org;
    }
    async update(organizationId, dto) {
        const id = this.requireTenant(organizationId);
        await this.findMine(id);
        return this.prisma.organization.update({ where: { id }, data: { ...dto } });
    }
    async setLogo(organizationId, dto) {
        const id = this.requireTenant(organizationId);
        await this.findMine(id);
        return this.prisma.organization.update({
            where: { id },
            data: { logoUrl: dto.secureUrl ?? dto.publicId },
        });
    }
    async updatePayrollSettings(organizationId, dto) {
        const id = this.requireTenant(organizationId);
        await this.findMine(id);
        const data = {
            payFrequency: dto.payFrequency,
            firstPayDate: dto.firstPayDate ? new Date(dto.firstPayDate) : undefined,
            payPeriodStartDay: dto.payPeriodStart,
        };
        const existing = await this.prisma.payGroup.findFirst({
            where: { organizationId: id, name: DEFAULT_PAY_GROUP_NAME },
        });
        return existing
            ? this.prisma.payGroup.update({ where: { id: existing.id }, data })
            : this.prisma.payGroup.create({
                data: { organizationId: id, name: DEFAULT_PAY_GROUP_NAME, ...data },
            });
    }
    async updateWorkSchedule(organizationId, dto) {
        const id = this.requireTenant(organizationId);
        await this.findMine(id);
        const data = {
            workDays: dto.workDays,
            dailyHours: dto.dailyHours,
            overtimeThresholdDaily: dto.overtimeThresholdDaily,
            overtimeThresholdWeekly: dto.overtimeThresholdWeekly,
        };
        const existing = await this.prisma.workSchedule.findFirst({
            where: { organizationId: id, isDefault: true },
        });
        return existing
            ? this.prisma.workSchedule.update({ where: { id: existing.id }, data })
            : this.prisma.workSchedule.create({
                data: {
                    organizationId: id,
                    name: DEFAULT_WORK_SCHEDULE_NAME,
                    isDefault: true,
                    ...data,
                },
            });
    }
    async stats(organizationId) {
        const id = this.requireTenant(organizationId);
        const org = await this.findMine(id);
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        const [totalEmployees, activeEmployees, onboarding, onLeave, departments, locations, newHires30d, pendingInvitations,] = await this.prisma.$transaction([
            this.prisma.employee.count({
                where: { organizationId: id, deletedAt: null },
            }),
            this.prisma.employee.count({
                where: { organizationId: id, deletedAt: null, status: 'ACTIVE' },
            }),
            this.prisma.employee.count({
                where: { organizationId: id, deletedAt: null, status: 'ONBOARDING' },
            }),
            this.prisma.employee.count({
                where: { organizationId: id, deletedAt: null, status: 'ON_LEAVE' },
            }),
            this.prisma.department.count({ where: { organizationId: id } }),
            this.prisma.location.count({ where: { organizationId: id } }),
            this.prisma.employee.count({
                where: {
                    organizationId: id,
                    deletedAt: null,
                    startDate: { gte: thirtyDaysAgo },
                },
            }),
            this.prisma.invitation.count({
                where: { organizationId: id, status: 'PENDING' },
            }),
        ]);
        return {
            totalEmployees,
            activeEmployees,
            onboarding,
            onLeave,
            departments,
            locations,
            newHires30d,
            pendingInvitations,
            seatCount: org.seatCount,
            seatsUsed: totalEmployees,
            seatsRemaining: Math.max(org.seatCount - totalEmployees, 0),
            plan: org.plan,
            subscriptionStatus: org.subscriptionStatus,
        };
    }
};
exports.OrganizationsService = OrganizationsService;
exports.OrganizationsService = OrganizationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrganizationsService);
//# sourceMappingURL=organizations.service.js.map