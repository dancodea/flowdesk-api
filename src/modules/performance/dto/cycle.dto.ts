import { Type } from 'class-transformer';
import {
  IsDateString,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';
import {
  PerformanceCycleType,
  ReviewCycleStatus,
  ReviewType,
} from '../../../generated/prisma/enums';

export class CreateCycleDto {
  @IsString() name: string;
  @IsEnum(PerformanceCycleType) type: PerformanceCycleType;
  @IsDateString() startDate: string;
  @IsDateString() endDate: string;
  @IsEnum(ReviewType) reviewType: ReviewType;
  @IsOptional() @Type(() => Number) @IsInt() @Min(3) @Max(10) ratingScale?: number;
}

export class UpdateCycleDto {
  @IsOptional() @IsString() name?: string;
  @IsOptional() @IsDateString() startDate?: string;
  @IsOptional() @IsDateString() endDate?: string;
  @IsOptional() @Type(() => Number) @IsInt() @Min(3) @Max(10) ratingScale?: number;
}

export class ListCyclesDto {
  @IsOptional() @IsEnum(ReviewCycleStatus) status?: ReviewCycleStatus;
}
