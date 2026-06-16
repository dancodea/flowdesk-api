import { IsOptional, IsUUID } from 'class-validator';

export class CreateChecklistDto {
  @IsUUID() employeeId: string;
  @IsOptional() @IsUUID() templateId?: string;
}
