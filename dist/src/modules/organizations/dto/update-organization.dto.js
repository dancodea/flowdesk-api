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
exports.UpdateOrganizationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateOrganizationDto {
    name;
    logoUrl;
    website;
    industry;
    size;
    country;
    timezone;
    currency;
    fiscalYearStart;
}
exports.UpdateOrganizationDto = UpdateOrganizationDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Acme Inc.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], UpdateOrganizationDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://res.cloudinary.com/.../logo.png' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateOrganizationDto.prototype, "logoUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://acme.com' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], UpdateOrganizationDto.prototype, "website", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Software' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], UpdateOrganizationDto.prototype, "industry", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '11-50' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], UpdateOrganizationDto.prototype, "size", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'US' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(10),
    __metadata("design:type", String)
], UpdateOrganizationDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'America/New_York' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], UpdateOrganizationDto.prototype, "timezone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'USD' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(10),
    __metadata("design:type", String)
], UpdateOrganizationDto.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 1,
        description: 'Fiscal year start month (1-12).',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(12),
    __metadata("design:type", Number)
], UpdateOrganizationDto.prototype, "fiscalYearStart", void 0);
//# sourceMappingURL=update-organization.dto.js.map