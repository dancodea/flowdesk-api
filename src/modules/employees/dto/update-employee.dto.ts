import { PartialType } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsString } from 'class-validator';
import { CreateEmployeeDto } from './create-employee.dto';

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {
  @IsOptional() @IsDateString() terminationDate?: string;
  @IsOptional() @IsString() terminationReason?: string;
}
