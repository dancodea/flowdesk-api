import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength, MaxLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({ example: 'Ada Lovelace' })
  @IsString()
  @MinLength(2)
  @MaxLength(200)
  fullName: string;

  @ApiProperty({ example: 'ada@acme.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'S3cureP@ssw0rd', minLength: 8 })
  @IsString()
  @MinLength(8)
  @MaxLength(128)
  password: string;

  @ApiProperty({ example: 'Acme Inc.' })
  @IsString()
  @MinLength(2)
  @MaxLength(200)
  companyName: string;
}
