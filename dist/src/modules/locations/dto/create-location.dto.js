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
exports.CreateLocationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateLocationDto {
    name;
    address;
    city;
    country;
    timezone;
    isRemote;
}
exports.CreateLocationDto = CreateLocationDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'HQ — New York' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], CreateLocationDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '5th Avenue 100' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLocationDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'New York' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateLocationDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'US' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(10),
    __metadata("design:type", String)
], CreateLocationDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'America/New_York' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateLocationDto.prototype, "timezone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateLocationDto.prototype, "isRemote", void 0);
//# sourceMappingURL=create-location.dto.js.map