import { IsEnum, IsOptional, IsUUID } from 'class-validator';
import { ChecklistStatus } from '../../../generated/prisma/enums';

export class ListChecklistsDto {
  @IsOptional() @IsEnum(ChecklistStatus) status?: ChecklistStatus;
  @IsOptional() @IsUUID() employeeId?: string;
}
