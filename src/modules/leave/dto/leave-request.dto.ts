import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  Min,
} from 'class-validator';
import { HalfDayPeriod, LeaveStatus } from '../../../generated/prisma/enums';

export class CreateLeaveRequestDto {
  @IsUUID() typeId: string;
  @IsDateString() startDate: string;
  @IsDateString() endDate: string;
  @IsOptional() @IsBoolean() halfDay?: boolean;
  @IsOptional() @IsEnum(HalfDayPeriod) halfDayPeriod?: HalfDayPeriod;
  @IsOptional() @IsString() reason?: string;
  @IsOptional() @IsString() documentPublicId?: string;
}

export class ListLeaveRequestsDto {
  @IsOptional() @IsUUID() employeeId?: string;
  @IsOptional() @IsEnum(LeaveStatus) status?: LeaveStatus;
  @IsOptional() @IsDateString() from?: string;
  @IsOptional() @IsDateString() to?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit: number = 20;
}

export class ApproveLeaveDto {
  @IsOptional() @IsString() comment?: string;
}

export class RejectLeaveDto {
  @IsString() reason: string;
}
