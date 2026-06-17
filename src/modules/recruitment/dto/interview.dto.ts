import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  Min,
} from 'class-validator';
import {
  InterviewRecommendation,
  InterviewStatus,
  InterviewType,
} from '../../../generated/prisma/enums';

export class ScheduleInterviewDto {
  @IsString() scheduledAt: string;
  @IsOptional() @Type(() => Number) @IsInt() @Min(15) durationMinutes?: number;
  @IsEnum(InterviewType) type: InterviewType;
  @IsOptional() @IsString() meetingLink?: string;
  @IsOptional() @IsString() location?: string;
  @IsOptional() @IsArray() @IsUUID('4', { each: true }) panelistIds?: string[];
}

export class UpdateInterviewDto {
  @IsOptional() @IsString() scheduledAt?: string;
  @IsOptional() @Type(() => Number) @IsInt() @Min(15) durationMinutes?: number;
  @IsOptional() @IsEnum(InterviewType) type?: InterviewType;
  @IsOptional() @IsString() meetingLink?: string;
  @IsOptional() @IsString() location?: string;
  @IsOptional() @IsEnum(InterviewStatus) status?: InterviewStatus;
}

export class AddPanelistsDto {
  @IsArray() @IsUUID('4', { each: true }) employeeIds: string[];
}

export class SubmitFeedbackDto {
  @IsOptional() @Type(() => Number) @IsInt() @Min(1) @Max(5) rating?: number;
  @IsOptional() @IsString() strengths?: string;
  @IsOptional() @IsString() weaknesses?: string;
  @IsEnum(InterviewRecommendation) recommendation: InterviewRecommendation;
}
