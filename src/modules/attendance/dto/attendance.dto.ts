import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDateString,
  IsDecimal,
  IsEnum,
  IsInt,
  IsLatitude,
  IsLongitude,
  IsOptional,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';
import { AttendanceStatus } from '../../../generated/prisma/enums';

export class ClockInDto {
  @IsOptional() @IsDecimal() locationLat?: string;
  @IsOptional() @IsDecimal() locationLng?: string;
}

export class ClockOutDto {
  @IsOptional() @IsDecimal() locationLat?: string;
  @IsOptional() @IsDecimal() locationLng?: string;
}

export class ManualEntryDto {
  @IsUUID() employeeId: string;
  @IsDateString() date: string;
  @IsOptional() @IsString() clockIn?: string;
  @IsOptional() @IsString() clockOut?: string;
  @IsString() reason: string;
}

export class UpdateAttendanceDto {
  @IsOptional() @IsString() clockIn?: string;
  @IsOptional() @IsString() clockOut?: string;
  @IsOptional() @IsEnum(AttendanceStatus) status?: AttendanceStatus;
  @IsOptional() @IsString() manualReason?: string;
}

export class ListAttendanceDto {
  @IsOptional() @IsUUID() employeeId?: string;
  @IsOptional() @IsDateString() from?: string;
  @IsOptional() @IsDateString() to?: string;
  @IsOptional() @IsEnum(AttendanceStatus) status?: AttendanceStatus;
  @IsOptional() @IsUUID() departmentId?: string;
  @IsOptional() @Type(() => Number) @IsInt() @Min(1) page?: number = 1;
  @IsOptional() @Type(() => Number) @IsInt() @Min(1) limit?: number = 20;
}

export class AttendanceOverviewDto {
  @IsOptional() @IsDateString() date?: string;
  @IsOptional() @IsUUID() departmentId?: string;
}
