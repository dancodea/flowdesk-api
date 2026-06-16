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
exports.DepartmentsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const current_user_decorator_1 = require("../../common/decorators/current-user.decorator");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
const roles_1 = require("../../common/constants/roles");
const departments_service_1 = require("./departments.service");
const dto_1 = require("./dto");
let DepartmentsController = class DepartmentsController {
    departments;
    constructor(departments) {
        this.departments = departments;
    }
    list(user, tree) {
        return this.departments.list(user.organizationId, tree ?? false);
    }
    findOne(user, id) {
        return this.departments.findOne(user.organizationId, id);
    }
    create(user, dto) {
        return this.departments.create(user.organizationId, dto);
    }
    update(user, id, dto) {
        return this.departments.update(user.organizationId, id, dto);
    }
    remove(user, id) {
        return this.departments.remove(user.organizationId, id);
    }
};
exports.DepartmentsController = DepartmentsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'List departments (flat or nested tree)' }),
    (0, swagger_1.ApiQuery)({ name: 'tree', required: false, type: Boolean }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)('tree', new common_1.ParseBoolPipe({ optional: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Boolean]),
    __metadata("design:returntype", void 0)
], DepartmentsController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Department detail with members' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], DepartmentsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(...roles_1.HR_ROLES),
    (0, swagger_1.ApiOperation)({ summary: 'Create a department' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.CreateDepartmentDto]),
    __metadata("design:returntype", void 0)
], DepartmentsController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(...roles_1.HR_ROLES),
    (0, swagger_1.ApiOperation)({ summary: 'Update a department' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, dto_1.UpdateDepartmentDto]),
    __metadata("design:returntype", void 0)
], DepartmentsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(...roles_1.ORG_ADMIN_ONLY),
    (0, swagger_1.ApiOperation)({ summary: 'Delete an empty department' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], DepartmentsController.prototype, "remove", null);
exports.DepartmentsController = DepartmentsController = __decorate([
    (0, swagger_1.ApiTags)('departments'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('departments'),
    __metadata("design:paramtypes", [departments_service_1.DepartmentsService])
], DepartmentsController);
//# sourceMappingURL=departments.controller.js.map