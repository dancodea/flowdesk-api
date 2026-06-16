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
exports.OrganizationsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const current_user_decorator_1 = require("../../common/decorators/current-user.decorator");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
const roles_1 = require("../../common/constants/roles");
const dto_1 = require("./dto");
const organizations_service_1 = require("./organizations.service");
let OrganizationsController = class OrganizationsController {
    organizations;
    constructor(organizations) {
        this.organizations = organizations;
    }
    findMine(user) {
        return this.organizations.findMine(user.organizationId);
    }
    stats(user) {
        return this.organizations.stats(user.organizationId);
    }
    update(user, dto) {
        return this.organizations.update(user.organizationId, dto);
    }
    payrollSettings(user, dto) {
        return this.organizations.updatePayrollSettings(user.organizationId, dto);
    }
    workSchedule(user, dto) {
        return this.organizations.updateWorkSchedule(user.organizationId, dto);
    }
    setLogo(user, dto) {
        return this.organizations.setLogo(user.organizationId, dto);
    }
};
exports.OrganizationsController = OrganizationsController;
__decorate([
    (0, common_1.Get)('me'),
    (0, swagger_1.ApiOperation)({ summary: 'Get the current user organization' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "findMine", null);
__decorate([
    (0, common_1.Get)('me/stats'),
    (0, roles_decorator_1.Roles)(...roles_1.HR_ROLES),
    (0, swagger_1.ApiOperation)({ summary: 'Headcount and setup statistics' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "stats", null);
__decorate([
    (0, common_1.Patch)('me'),
    (0, roles_decorator_1.Roles)(...roles_1.ORG_ADMIN_ONLY),
    (0, swagger_1.ApiOperation)({ summary: 'Update organization profile' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.UpdateOrganizationDto]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)('me/payroll-settings'),
    (0, roles_decorator_1.Roles)(...roles_1.ORG_ADMIN_ONLY),
    (0, swagger_1.ApiOperation)({ summary: 'Configure pay schedule (default pay group)' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.PayrollSettingsDto]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "payrollSettings", null);
__decorate([
    (0, common_1.Patch)('me/work-schedule'),
    (0, roles_decorator_1.Roles)(...roles_1.ORG_ADMIN_ONLY),
    (0, swagger_1.ApiOperation)({ summary: 'Configure the default work schedule' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.WorkScheduleSettingsDto]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "workSchedule", null);
__decorate([
    (0, common_1.Post)('me/logo'),
    (0, roles_decorator_1.Roles)(...roles_1.ORG_ADMIN_ONLY),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Persist an uploaded organization logo' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.OrgLogoDto]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "setLogo", null);
exports.OrganizationsController = OrganizationsController = __decorate([
    (0, swagger_1.ApiTags)('organizations'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('organizations'),
    __metadata("design:paramtypes", [organizations_service_1.OrganizationsService])
], OrganizationsController);
//# sourceMappingURL=organizations.controller.js.map