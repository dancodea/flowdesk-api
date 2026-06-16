import { Type } from 'class-transformer';
import { IsObject, IsOptional, IsString, ValidateNested } from 'class-validator';

class AddressDto {
  @IsOptional() @IsString() street?: string;
  @IsOptional() @IsString() city?: string;
  @IsOptional() @IsString() state?: string;
  @IsOptional() @IsString() country?: string;
  @IsOptional() @IsString() zip?: string;
}

class EmergencyContactDto {
  @IsOptional() @IsString() name?: string;
  @IsOptional() @IsString() relationship?: string;
  @IsOptional() @IsString() phone?: string;
}

export class SelfUpdateDto {
  @IsOptional() @IsString() phone?: string;
  @IsOptional() @IsString() avatarUrl?: string;

  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => AddressDto)
  address?: AddressDto;

  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => EmergencyContactDto)
  emergencyContact?: EmergencyContactDto;
}
