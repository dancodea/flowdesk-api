import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsOptional, IsUUID } from 'class-validator';
import { Role } from '../../../generated/prisma/enums';

export class CreateInvitationDto {
  @ApiProperty({ example: 'new.hire@acme.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ enum: Role, example: Role.EMPLOYEE })
  @IsEnum(Role)
  role: Role;

  @ApiPropertyOptional({ description: 'Optional department to associate.' })
  @IsOptional()
  @IsUUID()
  departmentId?: string;
}
