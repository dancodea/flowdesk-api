import { IsDateString, IsOptional, IsString, IsUUID } from 'class-validator';

export class DateRangeDto {
  @IsOptional() @IsDateString() from?: string;
  @IsOptional() @IsDateString() to?: string;
  @IsOptional() @IsUUID() departmentId?: string;
}

export class PayrollCostReportDto extends DateRangeDto {
  @IsOptional() @IsUUID() payGroupId?: string;
}
