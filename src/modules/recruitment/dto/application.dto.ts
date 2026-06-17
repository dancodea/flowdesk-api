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
import { ApplicationStatus, EmploymentType, PayFrequency } from '../../../generated/prisma/enums';

export class PublicApplyDto {
  @IsString() candidateName: string;
  @IsString() candidateEmail: string;
  @IsOptional() @IsString() candidatePhone?: string;
  @IsOptional() @IsString() cvCloudinaryPublicId?: string;
  @IsOptional() @IsString() coverLetter?: string;
  @IsOptional() @IsString() source?: string;
}

export class MoveStageDto {
  @IsUUID() stageId: string;
}

export class RejectApplicationDto {
  @IsString() reason: string;
}

export class AddNoteDto {
  @IsString() content: string;
}

export class ListApplicationsDto {
  @IsOptional() @IsUUID() jobPostingId?: string;
  @IsOptional() @IsUUID() stageId?: string;
  @IsOptional() @IsEnum(ApplicationStatus) status?: ApplicationStatus;
  @IsOptional() @IsString() search?: string;
  @IsOptional() @Type(() => Number) @IsInt() @Min(1) page?: number = 1;
  @IsOptional() @Type(() => Number) @IsInt() @Min(1) @Max(100) limit?: number = 20;
}

export class ConvertToEmployeeDto {
  @IsDateString() startDate: string;
  @IsOptional() @IsString() jobTitle?: string;
  @IsOptional() @IsUUID() departmentId?: string;
  @IsOptional() @IsUUID() locationId?: string;
  @IsOptional() @IsUUID() payGroupId?: string;
}
