import { Type } from 'class-transformer';
import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsNumber,
  IsObject,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import {
  EmploymentType,
  Gender,
  PaymentMethod,
  SalaryType,
} from '../../../generated/prisma/enums';

class AddressDto {
  @IsOptional() @IsString() street?: string;
  @IsOptional() @IsString() city?: string;
  @IsOptional() @IsString() state?: string;
  @IsOptional() @IsString() country?: string;
  @IsOptional() @IsString() zip?: string;
}

class EmergencyContactDto {
  @IsOptional() @IsString() name?: string;
  @IsOptional() @IsString() relationship?: string;
  @IsOptional() @IsString() phone?: string;
}

export class CreateEmployeeDto {
  // Personal
  @IsString() firstName: string;
  @IsString() lastName: string;
  @IsEmail() workEmail: string;
  @IsOptional() @IsEmail() personalEmail?: string;
  @IsOptional() @IsString() phone?: string;
  @IsOptional() @IsDateString() dateOfBirth?: string;
  @IsOptional() @IsEnum(Gender) gender?: Gender;
  @IsOptional() @IsString() nationality?: string;

  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => AddressDto)
  address?: AddressDto;

  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => EmergencyContactDto)
  emergencyContact?: EmergencyContactDto;

  @IsOptional() @IsString() avatarUrl?: string;

  // Job
  @IsOptional() @IsString() jobTitle?: string;
  @IsOptional() @IsUUID() departmentId?: string;
  @IsOptional() @IsUUID() locationId?: string;
  @IsOptional() @IsUUID() managerId?: string;
  @IsOptional() @IsEnum(EmploymentType) employmentType?: EmploymentType;
  @IsOptional() @IsUUID() workScheduleId?: string;
  @IsDateString() startDate: string;
  @IsOptional() @IsDateString() probationEndDate?: string;

  // Compensation
  @IsOptional() @IsEnum(SalaryType) salaryType?: SalaryType;
  @IsOptional() @IsNumber() @IsPositive() baseSalary?: number;
  @IsOptional() @IsNumber() @IsPositive() hourlyRate?: number;
  @IsOptional() @IsString() currency?: string;
  @IsOptional() @IsUUID() payGroupId?: string;

  // Banking
  @IsOptional() @IsString() bankName?: string;
  @IsOptional() @IsString() bankAccountNumber?: string;
  @IsOptional() @IsString() bankRoutingNumber?: string;
  @IsOptional() @IsEnum(PaymentMethod) paymentMethod?: PaymentMethod;
}
