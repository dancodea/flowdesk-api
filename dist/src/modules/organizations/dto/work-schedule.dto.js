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
exports.WorkScheduleSettingsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class WorkScheduleSettingsDto {
    workDays;
    dailyHours;
    overtimeThresholdDaily;
    overtimeThresholdWeekly;
}
exports.WorkScheduleSettingsDto = WorkScheduleSettingsDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: [1, 2, 3, 4, 5],
        description: 'Working weekdays as ISO numbers (1=Mon … 7=Sun).',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayUnique)(),
    (0, class_validator_1.ArrayMaxSize)(7),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)({ each: true }),
    (0, class_validator_1.Min)(1, { each: true }),
    (0, class_validator_1.Max)(7, { each: true }),
    __metadata("design:type", Array)
], WorkScheduleSettingsDto.prototype, "workDays", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 8,
        description: 'Standard hours per working day.',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(24),
    __metadata("design:type", Number)
], WorkScheduleSettingsDto.prototype, "dailyHours", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 8,
        description: 'Daily hours after which overtime applies.',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(24),
    __metadata("design:type", Number)
], WorkScheduleSettingsDto.prototype, "overtimeThresholdDaily", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 40,
        description: 'Weekly hours after which overtime applies.',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(168),
    __metadata("design:type", Number)
], WorkScheduleSettingsDto.prototype, "overtimeThresholdWeekly", void 0);
//# sourceMappingURL=work-schedule.dto.js.map