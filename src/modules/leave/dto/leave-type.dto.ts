import {
  IsBoolean,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';
import { Gender } from '../../../generated/prisma/enums';

export class CreateLeaveTypeDto {
  @IsString() name: string;
  @IsOptional() @IsString() color?: string;
  @IsOptional() @IsBoolean() isPaid?: boolean;
  @IsOptional() @IsBoolean() requiresDocument?: boolean;
  @IsOptional() @IsEnum(Gender) genderRestriction?: Gender;
}

export class UpdateLeaveTypeDto {
  @IsOptional() @IsString() name?: string;
  @IsOptional() @IsString() color?: string;
  @IsOptional() @IsBoolean() isPaid?: boolean;
  @IsOptional() @IsBoolean() requiresDocument?: boolean;
  @IsOptional() @IsEnum(Gender) genderRestriction?: Gender;
  @IsOptional() @IsBoolean() isActive?: boolean;
}
