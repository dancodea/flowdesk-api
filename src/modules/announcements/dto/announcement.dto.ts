import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  Min,
} from 'class-validator';
import { AnnouncementAudience } from '../../../generated/prisma/enums';

export class CreateAnnouncementDto {
  @IsString() title: string;
  @IsString() content: string;
  @IsOptional() @IsEnum(AnnouncementAudience) audience?: AnnouncementAudience;
  @IsOptional() @IsBoolean() isPinned?: boolean;
  @IsOptional() @IsUUID() targetDepartmentId?: string;
}

export class UpdateAnnouncementDto {
  @IsOptional() @IsString() title?: string;
  @IsOptional() @IsString() content?: string;
  @IsOptional() @IsEnum(AnnouncementAudience) audience?: AnnouncementAudience;
  @IsOptional() @IsBoolean() isPinned?: boolean;
}

export class ListAnnouncementsDto {
  @IsOptional() @IsEnum(AnnouncementAudience) audience?: AnnouncementAudience;
  @IsOptional() @Type(() => Number) @IsInt() @Min(1) page?: number = 1;
  @IsOptional() @Type(() => Number) @IsInt() @Min(1) @Max(100) limit?: number = 20;
}
