import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class DeleteUploadDto {
  @ApiProperty({ example: 'flowdesk/<org>/document/abc123' })
  @IsString()
  publicId: string;
}
