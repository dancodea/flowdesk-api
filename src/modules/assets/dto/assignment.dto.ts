import { IsDateString, IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';
import { ReturnCondition } from '../../../generated/prisma/enums';

export class AssignAssetDto {
  @IsUUID() employeeId: string;
  @IsDateString() assignedDate: string;
  @IsOptional() @IsDateString() expectedReturnDate?: string;
}

export class ReturnAssetDto {
  @IsEnum(ReturnCondition) condition: ReturnCondition;
  @IsOptional() @IsString() notes?: string;
}
