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
exports.InvitationsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const current_user_decorator_1 = require("../../common/decorators/current-user.decorator");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
const roles_1 = require("../../common/constants/roles");
const dto_1 = require("./dto");
const invitations_service_1 = require("./invitations.service");
let InvitationsController = class InvitationsController {
    invitations;
    constructor(invitations) {
        this.invitations = invitations;
    }
    create(user, dto) {
        return this.invitations.create(user, dto);
    }
    createBulk(user, dto) {
        return this.invitations.createBulk(user, dto);
    }
    list(user, dto) {
        return this.invitations.list(user.organizationId, dto);
    }
    revoke(user, id) {
        return this.invitations.revoke(user.organizationId, id);
    }
    resend(user, id) {
        return this.invitations.resend(user.organizationId, id);
    }
};
exports.InvitationsController = InvitationsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Invite a user to the organization' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.CreateInvitationDto]),
    __metadata("design:returntype", void 0)
], InvitationsController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('bulk'),
    (0, swagger_1.ApiOperation)({ summary: 'Invite multiple users at once' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.BulkInvitationDto]),
    __metadata("design:returntype", void 0)
], InvitationsController.prototype, "createBulk", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'List invitations' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.ListInvitationsDto]),
    __metadata("design:returntype", void 0)
], InvitationsController.prototype, "list", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Revoke an invitation' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], InvitationsController.prototype, "revoke", null);
__decorate([
    (0, common_1.Post)(':id/resend'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Resend an invitation email' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], InvitationsController.prototype, "resend", null);
exports.InvitationsController = InvitationsController = __decorate([
    (0, swagger_1.ApiTags)('invitations'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_decorator_1.Roles)(...roles_1.HR_ROLES),
    (0, common_1.Controller)('invitations'),
    __metadata("design:paramtypes", [invitations_service_1.InvitationsService])
], InvitationsController);
//# sourceMappingURL=invitations.controller.js.map