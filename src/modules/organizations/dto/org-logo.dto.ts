import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

/**
 * The client uploads the logo straight to Cloudinary using signed params from
 * POST /uploads/sign, then posts the resulting identifiers here to persist them.
 */
export class OrgLogoDto {
  @ApiProperty({ example: 'flowdesk/<org>/org-logo/abc123' })
  @IsString()
  publicId: string;

  @ApiPropertyOptional({ example: 'https://res.cloudinary.com/.../logo.png' })
  @IsOptional()
  @IsString()
  secureUrl?: string;
}
