import { Type } from 'class-transformer';
import {
  IsDateString,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  Min,
} from 'class-validator';
import { PayRunStatus } from '../../../generated/prisma/enums';

export class CreatePayRunDto {
  @IsUUID() payGroupId: string;
  @IsDateString() periodStart: string;
  @IsDateString() periodEnd: string;
  @IsDateString() payDate: string;
  @IsOptional() @IsString() notes?: string;
}

export class ListPayRunsDto {
  @IsOptional() @IsUUID() payGroupId?: string;
  @IsOptional() @IsEnum(PayRunStatus) status?: PayRunStatus;
  @IsOptional() @IsDateString() from?: string;
  @IsOptional() @IsDateString() to?: string;
  @IsOptional() @Type(() => Number) @IsInt() @Min(1) page?: number = 1;
  @IsOptional() @Type(() => Number) @IsInt() @Min(1) @Max(100) limit?: number = 20;
}

export class ApprovePayRunDto {
  @IsOptional() @IsString() notes?: string;
}

export class ExcludeLineDto {
  @IsString() reason: string;
}

export class ListPayslipsDto {
  @IsOptional() @IsUUID() payRunId?: string;
  @IsOptional() @IsUUID() employeeId?: string;
  @IsOptional() @Type(() => Number) @IsInt() @Min(1) page?: number = 1;
  @IsOptional() @Type(() => Number) @IsInt() @Min(1) @Max(100) limit?: number = 20;
}
