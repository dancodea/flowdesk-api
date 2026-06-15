import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayUnique,
  IsArray,
  IsInt,
  IsNumber,
  IsOptional,
  Max,
  Min,
} from 'class-validator';

/**
 * Onboarding step 3 — work schedule. Persisted onto the organization's default
 * WorkSchedule (created on demand).
 */
export class WorkScheduleSettingsDto {
  @ApiPropertyOptional({
    example: [1, 2, 3, 4, 5],
    description: 'Working weekdays as ISO numbers (1=Mon … 7=Sun).',
  })
  @IsOptional()
  @IsArray()
  @ArrayUnique()
  @ArrayMaxSize(7)
  @Type(() => Number)
  @IsInt({ each: true })
  @Min(1, { each: true })
  @Max(7, { each: true })
  workDays?: number[];

  @ApiPropertyOptional({
    example: 8,
    description: 'Standard hours per working day.',
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(24)
  dailyHours?: number;

  @ApiPropertyOptional({
    example: 8,
    description: 'Daily hours after which overtime applies.',
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(24)
  overtimeThresholdDaily?: number;

  @ApiPropertyOptional({
    example: 40,
    description: 'Weekly hours after which overtime applies.',
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(168)
  overtimeThresholdWeekly?: number;
}
