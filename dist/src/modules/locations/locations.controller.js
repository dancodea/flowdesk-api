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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const current_user_decorator_1 = require("../../common/decorators/current-user.decorator");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
const roles_1 = require("../../common/constants/roles");
const dto_1 = require("./dto");
const locations_service_1 = require("./locations.service");
let LocationsController = class LocationsController {
    locations;
    constructor(locations) {
        this.locations = locations;
    }
    list(user) {
        return this.locations.list(user.organizationId);
    }
    findOne(user, id) {
        return this.locations.findOne(user.organizationId, id);
    }
    create(user, dto) {
        return this.locations.create(user.organizationId, dto);
    }
    update(user, id, dto) {
        return this.locations.update(user.organizationId, id, dto);
    }
    remove(user, id) {
        return this.locations.remove(user.organizationId, id);
    }
};
exports.LocationsController = LocationsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'List office locations' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LocationsController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a location' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], LocationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(...roles_1.ORG_ADMIN_ONLY),
    (0, swagger_1.ApiOperation)({ summary: 'Add an office location' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.CreateLocationDto]),
    __metadata("design:returntype", void 0)
], LocationsController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(...roles_1.ORG_ADMIN_ONLY),
    (0, swagger_1.ApiOperation)({ summary: 'Update a location' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, dto_1.UpdateLocationDto]),
    __metadata("design:returntype", void 0)
], LocationsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(...roles_1.ORG_ADMIN_ONLY),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a location' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], LocationsController.prototype, "remove", null);
exports.LocationsController = LocationsController = __decorate([
    (0, swagger_1.ApiTags)('locations'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('settings/locations'),
    __metadata("design:paramtypes", [locations_service_1.LocationsService])
], LocationsController);
//# sourceMappingURL=locations.controller.js.map