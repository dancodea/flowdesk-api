import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsEnum,
  IsInt,
  IsOptional,
  Max,
  Min,
} from 'class-validator';
import { PayFrequency } from '../../../generated/prisma/enums';

/**
 * Onboarding step 2 — pay schedule. Persisted onto the organization's default
 * pay group (created on demand), since pay frequency lives on PayGroup.
 */
export class PayrollSettingsDto {
  @ApiProperty({ enum: PayFrequency, example: PayFrequency.MONTHLY })
  @IsEnum(PayFrequency)
  payFrequency: PayFrequency;

  @ApiPropertyOptional({
    example: '2026-01-31',
    description: 'First pay date (ISO).',
  })
  @IsOptional()
  @IsDateString()
  firstPayDate?: string;

  @ApiPropertyOptional({
    example: 1,
    description: 'Day of month the pay period starts (1-31).',
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(31)
  payPeriodStart?: number;
}
