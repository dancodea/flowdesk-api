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
exports.PayrollSettingsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const enums_1 = require("../../../generated/prisma/enums");
class PayrollSettingsDto {
    payFrequency;
    firstPayDate;
    payPeriodStart;
}
exports.PayrollSettingsDto = PayrollSettingsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enums_1.PayFrequency, example: enums_1.PayFrequency.MONTHLY }),
    (0, class_validator_1.IsEnum)(enums_1.PayFrequency),
    __metadata("design:type", String)
], PayrollSettingsDto.prototype, "payFrequency", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: '2026-01-31',
        description: 'First pay date (ISO).',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], PayrollSettingsDto.prototype, "firstPayDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 1,
        description: 'Day of month the pay period starts (1-31).',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(31),
    __metadata("design:type", Number)
], PayrollSettingsDto.prototype, "payPeriodStart", void 0);
//# sourceMappingURL=payroll-settings.dto.js.map