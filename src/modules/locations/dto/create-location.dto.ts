import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateLocationDto {
  @ApiProperty({ example: 'HQ — New York' })
  @IsString()
  @MaxLength(200)
  name: string;

  @ApiPropertyOptional({ example: '5th Avenue 100' })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiPropertyOptional({ example: 'New York' })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  city?: string;

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

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  @IsBoolean()
  isRemote?: boolean;
}
