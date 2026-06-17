import { Type } from 'class-transformer';
import {
  IsDateString,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  Min,
} from 'class-validator';
import { GoalStatus } from '../../../generated/prisma/enums';

export class CreateGoalDto {
  @IsString() title: string;
  @IsOptional() @IsString() description?: string;
  @IsOptional() @IsString() metric?: string;
  @IsOptional() @IsNumber() @Min(0) target?: number;
  @IsOptional() @IsDateString() dueDate?: string;
  @IsOptional() @IsUUID() cycleId?: string;
}

export class UpdateGoalDto {
  @IsOptional() @IsString() title?: string;
  @IsOptional() @IsString() description?: string;
  @IsOptional() @IsString() metric?: string;
  @IsOptional() @IsNumber() @Min(0) target?: number;
  @IsOptional() @IsNumber() @Min(0) currentProgress?: number;
  @IsOptional() @IsDateString() dueDate?: string;
  @IsOptional() @IsEnum(GoalStatus) status?: GoalStatus;
}

export class AddCheckinDto {
  @IsNumber() @Min(0) progress: number;
  @IsOptional() @IsString() comment?: string;
}

export class ListGoalsDto {
  @IsOptional() @IsUUID() cycleId?: string;
  @IsOptional() @IsUUID() ownerId?: string;
  @IsOptional() @IsEnum(GoalStatus) status?: GoalStatus;
  @IsOptional() @Type(() => Number) @IsInt() @Min(1) page?: number = 1;
  @IsOptional() @Type(() => Number) @IsInt() @Min(1) @Max(100) limit?: number = 20;
}
