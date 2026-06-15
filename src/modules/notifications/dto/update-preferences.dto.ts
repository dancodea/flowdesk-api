import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsObject, IsOptional } from 'class-validator';

export class UpdatePreferencesDto {
  @ApiPropertyOptional({
    description: 'Master switch for email notifications.',
  })
  @IsOptional()
  @IsBoolean()
  emailEnabled?: boolean;

  @ApiPropertyOptional({ description: 'Master switch for push notifications.' })
  @IsOptional()
  @IsBoolean()
  pushEnabled?: boolean;

  @ApiPropertyOptional({
    description:
      'Per-type toggles, keyed by notification type, e.g. { "leave.status_changed": false }.',
    example: { 'leave.status_changed': true, 'payslip.ready': false },
  })
  @IsOptional()
  @IsObject()
  types?: Record<string, boolean>;
}
