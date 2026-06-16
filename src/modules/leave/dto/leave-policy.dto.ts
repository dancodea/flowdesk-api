import { IsEnum, IsInt, IsNumber, IsOptional, IsString, IsUUID, Min } from 'class-validator';
import { AccrualType } from '../../../generated/prisma/enums';

export class CreateLeavePolicyDto {
  @IsUUID() leaveTypeId: string;
  @IsOptional() @IsString() name?: string;
  @IsNumber() annualAllowance: number;
  @IsOptional() @IsEnum(AccrualType) accrualType?: AccrualType;
  @IsOptional() @IsNumber() @Min(0) carryOverMax?: number;
  @IsOptional() @IsInt() @Min(0) advanceNoticeDays?: number;
  @IsOptional() @IsInt() @Min(1) maxConsecutiveDays?: number;
}

export class UpdateLeavePolicyDto {
  @IsOptional() @IsString() name?: string;
  @IsOptional() @IsNumber() annualAllowance?: number;
  @IsOptional() @IsEnum(AccrualType) accrualType?: AccrualType;
  @IsOptional() @IsNumber() @Min(0) carryOverMax?: number;
  @IsOptional() @IsInt() @Min(0) advanceNoticeDays?: number;
  @IsOptional() @IsInt() @Min(1) maxConsecutiveDays?: number;
}
