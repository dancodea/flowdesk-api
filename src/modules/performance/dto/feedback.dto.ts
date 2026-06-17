import { IsBoolean, IsOptional, IsString, IsUUID } from 'class-validator';

export class GiveFeedbackDto {
  @IsUUID() toEmployeeId: string;
  @IsString() message: string;
  @IsOptional() @IsBoolean() isAnonymous?: boolean;
}
