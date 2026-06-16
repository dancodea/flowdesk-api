import { IsDateString, IsOptional, IsString } from 'class-validator';

export class AddDocumentDto {
  @IsString() name: string;
  @IsOptional() @IsString() type?: string;
  @IsString() publicId: string;
  @IsOptional() @IsString() secureUrl?: string;
  @IsOptional() @IsDateString() expiryDate?: string;
}
