import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional } from 'class-validator';
import { InvitationStatus } from '../../../generated/prisma/enums';

export class ListInvitationsDto {
  @ApiPropertyOptional({ enum: InvitationStatus })
  @IsOptional()
  @IsEnum(InvitationStatus)
  status?: InvitationStatus;
}
