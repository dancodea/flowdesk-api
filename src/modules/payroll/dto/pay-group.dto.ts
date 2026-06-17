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
import { PayFrequency } from '../../../generated/prisma/enums';

export class CreatePayGroupDto {
  @IsString() name: string;
  @IsEnum(PayFrequency) payFrequency: PayFrequency;
  @IsDateString() firstPayDate: string;
  @IsOptional() @Type(() => Number) @IsInt() @Min(1) @Max(31) payPeriodStartDay?: number;
}

export class UpdatePayGroupDto {
  @IsOptional() @IsString() name?: string;
  @IsOptional() @IsEnum(PayFrequency) payFrequency?: PayFrequency;
  @IsOptional() @IsDateString() firstPayDate?: string;
  @IsOptional() @Type(() => Number) @IsInt() @Min(1) @Max(31) payPeriodStartDay?: number;
}
