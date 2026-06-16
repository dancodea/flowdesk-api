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
exports.DepartmentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let DepartmentsService = class DepartmentsService {
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
    async assertParent(orgId, parentId) {
        if (!parentId)
            return;
        const parent = await this.prisma.department.findFirst({
            where: { id: parentId, organizationId: orgId },
        });
        if (!parent)
            throw new common_1.BadRequestException('Parent department not found');
    }
    async assertHead(orgId, headId) {
        if (!headId)
            return;
        const head = await this.prisma.employee.findFirst({
            where: { id: headId, organizationId: orgId, deletedAt: null },
        });
        if (!head)
            throw new common_1.BadRequestException('Department head must be an employee');
    }
    async create(organizationId, dto) {
        const id = this.requireTenant(organizationId);
        await this.assertParent(id, dto.parentDepartmentId);
        await this.assertHead(id, dto.headId);
        return this.prisma.department.create({
            data: { organizationId: id, ...dto },
        });
    }
    async list(organizationId, tree) {
        const id = this.requireTenant(organizationId);
        const departments = await this.prisma.department.findMany({
            where: { organizationId: id },
            orderBy: { name: 'asc' },
        });
        if (!tree)
            return departments;
        return this.buildTree(departments);
    }
    buildTree(departments) {
        const byId = new Map();
        departments.forEach((d) => byId.set(d.id, { ...d, children: [] }));
        const roots = [];
        byId.forEach((node) => {
            const parent = node.parentDepartmentId
                ? byId.get(node.parentDepartmentId)
                : undefined;
            if (parent)
                parent.children.push(node);
            else
                roots.push(node);
        });
        return roots;
    }
    async findOne(organizationId, departmentId) {
        const id = this.requireTenant(organizationId);
        const department = await this.prisma.department.findFirst({
            where: { id: departmentId, organizationId: id },
            include: {
                childDepartments: true,
                employees: {
                    where: { deletedAt: null },
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        jobTitle: true,
                        avatarUrl: true,
                        status: true,
                    },
                    orderBy: { firstName: 'asc' },
                },
            },
        });
        if (!department)
            throw new common_1.NotFoundException('Department not found');
        const head = department.headId
            ? await this.prisma.employee.findUnique({
                where: { id: department.headId },
                select: { id: true, firstName: true, lastName: true, jobTitle: true },
            })
            : null;
        return { ...department, head };
    }
    async update(organizationId, departmentId, dto) {
        const id = this.requireTenant(organizationId);
        await this.findOne(id, departmentId);
        if (dto.parentDepartmentId === departmentId) {
            throw new common_1.BadRequestException('A department cannot be its own parent');
        }
        await this.assertParent(id, dto.parentDepartmentId);
        await this.assertHead(id, dto.headId);
        return this.prisma.department.update({
            where: { id: departmentId },
            data: { ...dto },
        });
    }
    async remove(organizationId, departmentId) {
        const id = this.requireTenant(organizationId);
        await this.findOne(id, departmentId);
        const [employees, children] = await this.prisma.$transaction([
            this.prisma.employee.count({
                where: { departmentId, deletedAt: null },
            }),
            this.prisma.department.count({
                where: { parentDepartmentId: departmentId },
            }),
        ]);
        if (employees > 0) {
            throw new common_1.ConflictException('Department still has employees assigned');
        }
        if (children > 0) {
            throw new common_1.ConflictException('Department still has sub-departments');
        }
        await this.prisma.department.delete({ where: { id: departmentId } });
        return { deleted: true };
    }
};
exports.DepartmentsService = DepartmentsService;
exports.DepartmentsService = DepartmentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DepartmentsService);
//# sourceMappingURL=departments.service.js.map