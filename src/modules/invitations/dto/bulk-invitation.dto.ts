import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { CreateInvitationDto } from './create-invitation.dto';

export class BulkInvitationDto {
  @ApiProperty({ type: [CreateInvitationDto] })
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(100)
  @ValidateNested({ each: true })
  @Type(() => CreateInvitationDto)
  invites: CreateInvitationDto[];
}
