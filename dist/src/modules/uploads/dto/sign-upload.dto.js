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
exports.SignUploadDto = exports.UPLOAD_CONTEXTS = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
exports.UPLOAD_CONTEXTS = [
    'avatar',
    'document',
    'org-logo',
    'asset',
    'recruitment',
];
class SignUploadDto {
    filename;
    contentType;
    context;
}
exports.SignUploadDto = SignUploadDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'passport.pdf' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignUploadDto.prototype, "filename", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'application/pdf' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignUploadDto.prototype, "contentType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: exports.UPLOAD_CONTEXTS, example: 'document' }),
    (0, class_validator_1.IsIn)(exports.UPLOAD_CONTEXTS),
    __metadata("design:type", String)
], SignUploadDto.prototype, "context", void 0);
//# sourceMappingURL=sign-upload.dto.js.map