import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength, MaxLength } from 'class-validator';

export class AcceptInviteDto {
  @ApiProperty({ description: 'Invitation token from the invite email.' })
  @IsString()
  @MinLength(1)
  inviteToken: string;

  @ApiProperty({ example: 'Grace Hopper' })
  @IsString()
  @MinLength(2)
  @MaxLength(200)
  fullName: string;

  @ApiProperty({ example: 'S3cureP@ssw0rd', minLength: 8 })
  @IsString()
  @MinLength(8)
  @MaxLength(128)
  password: string;
}
