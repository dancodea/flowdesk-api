import { IsBoolean, IsInt, IsOptional, Max, Min } from 'class-validator';

export class UpdateSecuritySettingsDto {
  @IsOptional() @IsBoolean() requireTwoFactor?: boolean;
  @IsOptional() @IsInt() @Min(15) @Max(10080) sessionTimeoutMinutes?: number;
}
