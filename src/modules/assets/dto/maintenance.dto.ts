import { IsDateString, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class LogMaintenanceDto {
  @IsString() description: string;
  @IsDateString() date: string;
  @IsOptional() @IsNumber() @Min(0) cost?: number;
  @IsOptional() @IsString() performedBy?: string;
}
