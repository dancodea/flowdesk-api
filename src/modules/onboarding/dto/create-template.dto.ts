import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { OnboardingAssignee } from '../../../generated/prisma/enums';

export class TemplateTaskDto {
  @IsString() title: string;
  @IsOptional() @IsString() description?: string;
  @IsOptional() @IsInt() @Min(0) dueAfterDays?: number;
  @IsOptional() @IsEnum(OnboardingAssignee) assignTo?: OnboardingAssignee;
  @IsOptional() @IsInt() @Min(0) orderIndex?: number;
}

export class CreateTemplateDto {
  @IsString() name: string;
  @IsOptional() @IsString() description?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TemplateTaskDto)
  tasks: TemplateTaskDto[];
}
