import { IsDateString, IsNumber, IsOptional, IsString, IsUUID, Min } from 'class-validator';

export class CreateOfferDto {
  @IsNumber() @Min(0) salary: number;
  @IsOptional() @IsString() currency?: string;
  @IsDateString() startDate: string;
  @IsOptional() @IsString() offerLetterCloudinaryPublicId?: string;
  @IsOptional() @IsDateString() expiresAt?: string;
}
