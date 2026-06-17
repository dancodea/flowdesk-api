import { Type } from 'class-transformer';
import {
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  Min,
} from 'class-validator';
import {
  EmploymentType,
  JobStatus,
  JobVisibility,
  RemoteType,
} from '../../../generated/prisma/enums';

export class CreateJobDto {
  @IsString() title: string;
  @IsString() description: string;
  @IsEnum(EmploymentType) employmentType: EmploymentType;
  @IsOptional() @IsEnum(RemoteType) remoteType?: RemoteType;
  @IsOptional() @IsUUID() departmentId?: string;
  @IsOptional() @IsUUID() locationId?: string;
  @IsOptional() @IsNumber() @Min(0) salaryMin?: number;
  @IsOptional() @IsNumber() @Min(0) salaryMax?: number;
  @IsOptional() @IsString() currency?: string;
  @IsOptional() @IsEnum(JobVisibility) visibility?: JobVisibility;
  @IsOptional() @IsUUID() hiringManagerId?: string;
  @IsOptional() @IsUUID() recruiterId?: string;
}

export class UpdateJobDto {
  @IsOptional() @IsString() title?: string;
  @IsOptional() @IsString() description?: string;
  @IsOptional() @IsEnum(EmploymentType) employmentType?: EmploymentType;
  @IsOptional() @IsEnum(RemoteType) remoteType?: RemoteType;
  @IsOptional() @IsUUID() departmentId?: string;
  @IsOptional() @IsUUID() locationId?: string;
  @IsOptional() @IsNumber() @Min(0) salaryMin?: number;
  @IsOptional() @IsNumber() @Min(0) salaryMax?: number;
  @IsOptional() @IsString() currency?: string;
  @IsOptional() @IsEnum(JobVisibility) visibility?: JobVisibility;
  @IsOptional() @IsUUID() hiringManagerId?: string;
  @IsOptional() @IsUUID() recruiterId?: string;
}

export class ListJobsDto {
  @IsOptional() @IsEnum(JobStatus) status?: JobStatus;
  @IsOptional() @IsEnum(JobVisibility) visibility?: JobVisibility;
  @IsOptional() @IsUUID() departmentId?: string;
  @IsOptional() @Type(() => Number) @IsInt() @Min(1) page?: number = 1;
  @IsOptional() @Type(() => Number) @IsInt() @Min(1) @Max(100) limit?: number = 20;
}
