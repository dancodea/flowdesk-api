import { IsArray, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class UpsertTaxSettingsDto {
  @IsOptional() @IsString() country?: string;
  @IsOptional() @IsNumber() @Min(0) pensionRate?: number;
  @IsOptional() @IsNumber() @Min(0) employerPensionRate?: number;
  @IsOptional() @IsNumber() @Min(0) nationalInsuranceRate?: number;
  @IsOptional() @IsArray() brackets?: Array<{ from: number; to: number | null; rate: number }>;
}
