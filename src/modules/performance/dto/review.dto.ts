import { Type } from 'class-transformer';
import {
  IsArray,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  Min,
} from 'class-validator';

export class ListReviewsDto {
  @IsOptional() @IsUUID() employeeId?: string;
}

export class SelfSubmitDto {
  @IsObject() responses: Record<string, unknown>;
  @IsOptional() @IsString() comments?: string;
}

export class ManagerSubmitDto {
  @IsObject() responses: Record<string, unknown>;
  @IsOptional() @IsString() comments?: string;
  @IsOptional() @Type(() => Number) @IsNumber() @Min(0) @Max(10) overallRating?: number;
  @IsOptional() @IsString() overallLabel?: string;
}
