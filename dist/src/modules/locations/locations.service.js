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
exports.LocationsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let LocationsService = class LocationsService {
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
    list(organizationId) {
        const id = this.requireTenant(organizationId);
        return this.prisma.location.findMany({
            where: { organizationId: id },
            orderBy: { name: 'asc' },
        });
    }
    async findOne(organizationId, locationId) {
        const id = this.requireTenant(organizationId);
        const location = await this.prisma.location.findFirst({
            where: { id: locationId, organizationId: id },
        });
        if (!location)
            throw new common_1.NotFoundException('Location not found');
        return location;
    }
    create(organizationId, dto) {
        const id = this.requireTenant(organizationId);
        return this.prisma.location.create({
            data: { organizationId: id, ...dto },
        });
    }
    async update(organizationId, locationId, dto) {
        await this.findOne(organizationId, locationId);
        return this.prisma.location.update({
            where: { id: locationId },
            data: { ...dto },
        });
    }
    async remove(organizationId, locationId) {
        await this.findOne(organizationId, locationId);
        await this.prisma.location.delete({ where: { id: locationId } });
        return { deleted: true };
    }
};
exports.LocationsService = LocationsService;
exports.LocationsService = LocationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LocationsService);
//# sourceMappingURL=locations.service.js.map