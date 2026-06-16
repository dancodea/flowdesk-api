import { IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';
import { EmployeeStatus, EmploymentType } from '../../../generated/prisma/enums';
import { PaginationDto } from '../../../common/dto/pagination.dto';

export class ListEmployeesDto extends PaginationDto {
  @IsOptional() @IsUUID() departmentId?: string;
  @IsOptional() @IsUUID() locationId?: string;
  @IsOptional() @IsEnum(EmploymentType) employmentType?: EmploymentType;
  @IsOptional() @IsEnum(EmployeeStatus) status?: EmployeeStatus;
  @IsOptional() @IsString() format?: 'csv' | 'excel';
}
