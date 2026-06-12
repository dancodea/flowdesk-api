import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'ada@acme.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'S3cureP@ssw0rd' })
  @IsString()
  @MinLength(1)
  password: string;

  @ApiPropertyOptional({
    example: '123456',
    description: 'TOTP code, required when 2FA is enabled on the account.',
  })
  @IsOptional()
  @IsString()
  totpCode?: string;
}
