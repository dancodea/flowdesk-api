import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';

export class CreateDepartmentDto {
  @ApiProperty({ example: 'Engineering' })
  @IsString()
  @MaxLength(200)
  name: string;

  @ApiPropertyOptional({ description: 'Employee id of the department head.' })
  @IsOptional()
  @IsUUID()
  headId?: string;

  @ApiPropertyOptional({ description: 'Parent department id (for hierarchy).' })
  @IsOptional()
  @IsUUID()
  parentDepartmentId?: string;
}
