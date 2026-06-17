import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { DeductionValueType } from '../../../generated/prisma/enums';

export class CreateDeductionTypeDto {
  @IsString() name: string;
  @IsEnum(DeductionValueType) type: DeductionValueType;
  @IsNumber() @Min(0) defaultValue: number;
  @IsOptional() @IsBoolean() isPreTax?: boolean;
}

export class UpdateDeductionTypeDto {
  @IsOptional() @IsString() name?: string;
  @IsOptional() @IsEnum(DeductionValueType) type?: DeductionValueType;
  @IsOptional() @IsNumber() @Min(0) defaultValue?: number;
  @IsOptional() @IsBoolean() isPreTax?: boolean;
}
