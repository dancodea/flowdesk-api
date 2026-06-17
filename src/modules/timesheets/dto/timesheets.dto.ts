import { Type } from 'class-transformer';
import {
  IsDateString,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';
import { TimesheetStatus } from '../../../generated/prisma/enums';

export class GetOrCreateTimesheetDto {
  @IsDateString() weekStart: string;
}

export class ApproveTimesheetDto {
  @IsOptional() @IsString() comment?: string;
}

export class RejectTimesheetDto {
  @IsString() reason: string;
}

export class ListTimesheetsDto {
  @IsOptional() @IsUUID() employeeId?: string;
  @IsOptional() @IsDateString() from?: string;
  @IsOptional() @IsDateString() to?: string;
  @IsOptional() @IsEnum(TimesheetStatus) status?: TimesheetStatus;
  @IsOptional() @IsUUID() departmentId?: string;
  @IsOptional() @Type(() => Number) @IsInt() @Min(1) page?: number = 1;
  @IsOptional() @Type(() => Number) @IsInt() @Min(1) limit?: number = 20;
}
