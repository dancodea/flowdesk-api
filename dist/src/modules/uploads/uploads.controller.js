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
exports.UploadsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const current_user_decorator_1 = require("../../common/decorators/current-user.decorator");
const dto_1 = require("./dto");
const uploads_service_1 = require("./uploads.service");
let UploadsController = class UploadsController {
    uploads;
    constructor(uploads) {
        this.uploads = uploads;
    }
    sign(user, dto) {
        return this.uploads.sign(user.organizationId, dto);
    }
    remove(dto) {
        return this.uploads.remove(dto);
    }
};
exports.UploadsController = UploadsController;
__decorate([
    (0, common_1.Post)('sign'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Get signed Cloudinary upload params' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.SignUploadDto]),
    __metadata("design:returntype", void 0)
], UploadsController.prototype, "sign", null);
__decorate([
    (0, common_1.Delete)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Delete an uploaded file from Cloudinary' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.DeleteUploadDto]),
    __metadata("design:returntype", void 0)
], UploadsController.prototype, "remove", null);
exports.UploadsController = UploadsController = __decorate([
    (0, swagger_1.ApiTags)('uploads'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('uploads'),
    __metadata("design:paramtypes", [uploads_service_1.UploadsService])
], UploadsController);
//# sourceMappingURL=uploads.controller.js.map