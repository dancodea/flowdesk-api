import { IsDateString, IsInt, IsNumber, IsOptional, IsString, IsUUID, Min } from 'class-validator';

export class LeaveBalanceQueryDto {
  @IsOptional() @IsUUID() employeeId?: string;
  @IsOptional() @IsInt() @Min(2000) year?: number;
}

export class LeaveCalendarQueryDto {
  @IsOptional() @IsDateString() from?: string;
  @IsOptional() @IsDateString() to?: string;
  @IsOptional() @IsUUID() deptId?: string;
}

export class LeaveAdjustmentDto {
  @IsUUID() employeeId: string;
  @IsUUID() typeId: string;
  @IsNumber() days: number;
  @IsString() reason: string;
}

export class LeaveReportQueryDto {
  @IsOptional() @IsDateString() from?: string;
  @IsOptional() @IsDateString() to?: string;
  @IsOptional() @IsUUID() deptId?: string;
}

export class ListHolidaysDto {
  @IsOptional() @IsInt() @Min(2000) year?: number;
  @IsOptional() @IsString() country?: string;
  @IsOptional() @IsUUID() locationId?: string;
}

export class CreateHolidayDto {
  @IsString() name: string;
  @IsDateString() date: string;
  @IsOptional() @IsUUID() locationId?: string;
}

export class ImportHolidaysDto {
  @IsString() country: string;
  @IsInt() @Min(2000) year: number;
  @IsOptional() @IsUUID() locationId?: string;
}
