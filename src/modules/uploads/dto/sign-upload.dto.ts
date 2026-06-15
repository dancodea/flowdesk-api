import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsIn, IsOptional, IsString } from 'class-validator';

export const UPLOAD_CONTEXTS = [
  'avatar',
  'document',
  'org-logo',
  'asset',
  'recruitment',
] as const;

export type UploadContext = (typeof UPLOAD_CONTEXTS)[number];

export class SignUploadDto {
  @ApiProperty({ example: 'passport.pdf' })
  @IsString()
  filename: string;

  @ApiPropertyOptional({ example: 'application/pdf' })
  @IsOptional()
  @IsString()
  contentType?: string;

  @ApiProperty({ enum: UPLOAD_CONTEXTS, example: 'document' })
  @IsIn(UPLOAD_CONTEXTS)
  context: UploadContext;
}
