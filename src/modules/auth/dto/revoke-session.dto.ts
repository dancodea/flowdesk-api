import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class RevokeSessionDto {
  @ApiProperty({ description: 'ID of the session (refresh token) to revoke.' })
  @IsUUID()
  sessionId: string;
}
