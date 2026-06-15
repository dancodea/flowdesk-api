import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsInt,
  IsOptional,
  IsString,
  IsUrl,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

export class UpdateOrganizationDto {
  @ApiPropertyOptional({ example: 'Acme Inc.' })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  name?: string;

  @ApiPropertyOptional({ example: 'https://res.cloudinary.com/.../logo.png' })
  @IsOptional()
  @IsString()
  logoUrl?: string;

  @ApiPropertyOptional({ example: 'https://acme.com' })
  @IsOptional()
  @IsUrl()
  website?: string;

  @ApiPropertyOptional({ example: 'Software' })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  industry?: string;

  @ApiPropertyOptional({ example: '11-50' })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  size?: string;

  @ApiPropertyOptional({ example: 'US' })
  @IsOptional()
  @IsString()
  @MaxLength(10)
  country?: string;

  @ApiPropertyOptional({ example: 'America/New_York' })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  timezone?: string;

  @ApiPropertyOptional({ example: 'USD' })
  @IsOptional()
  @IsString()
  @MaxLength(10)
  currency?: string;

  @ApiPropertyOptional({
    example: 1,
    description: 'Fiscal year start month (1-12).',
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(12)
  fiscalYearStart?: number;
}
