import { IsEnum, IsNumber, IsOptional, IsString, IsUUID, Min } from 'class-validator';
import { AdjustmentType } from '../../../generated/prisma/enums';

export class AddAdjustmentDto {
  @IsUUID() employeeId: string;
  @IsEnum(AdjustmentType) type: AdjustmentType;
  @IsNumber() @Min(0) amount: number;
  @IsOptional() @IsString() description?: string;
}
