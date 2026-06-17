import {
  IsDateString,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';

export class CreateShiftTemplateDto {
  @IsString() name: string;
  @IsString() startTime: string; // HH:mm
  @IsString() endTime: string;   // HH:mm
  @IsOptional() @IsInt() @Min(0) breakMinutes?: number;
  @IsOptional() @IsString() color?: string;
}

export class UpdateShiftTemplateDto {
  @IsOptional() @IsString() name?: string;
  @IsOptional() @IsString() startTime?: string;
  @IsOptional() @IsString() endTime?: string;
  @IsOptional() @IsInt() @Min(0) breakMinutes?: number;
  @IsOptional() @IsString() color?: string;
}

export class AssignShiftDto {
  @IsUUID() employeeId: string;
  @IsDateString() date: string;
  @IsOptional() @IsUUID() templateId?: string;
  @IsOptional() @IsString() startTime?: string;
  @IsOptional() @IsString() endTime?: string;
  @IsOptional() @IsString() note?: string;
}

export class BulkAssignShiftDto {
  @IsUUID('4', { each: true }) employeeIds: string[];
  @IsDateString() date: string;
  @IsOptional() @IsUUID() templateId?: string;
  @IsOptional() @IsString() startTime?: string;
  @IsOptional() @IsString() endTime?: string;
  @IsOptional() @IsString() note?: string;
}

export class ListSchedulesDto {
  @IsOptional() @IsDateString() from?: string;
  @IsOptional() @IsDateString() to?: string;
  @IsOptional() @IsUUID() employeeId?: string;
  @IsOptional() @IsUUID() departmentId?: string;
}
