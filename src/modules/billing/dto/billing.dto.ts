import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Plan } from '../../../generated/prisma/enums';

export class CreateCheckoutDto {
  @IsEnum(Plan) plan: Plan;
  @IsOptional() @IsString() successUrl?: string;
  @IsOptional() @IsString() cancelUrl?: string;
}
