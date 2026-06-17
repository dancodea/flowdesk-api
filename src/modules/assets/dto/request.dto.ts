import { Type } from 'class-transformer';
import {
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  Min,
} from 'class-validator';
import { AssetRequestStatus } from '../../../generated/prisma/enums';

export class CreateAssetRequestDto {
  @IsString() assetType: string;
  @IsOptional() @IsString() reason?: string;
}

export class FulfillRequestDto {
  @IsUUID() assetId: string;
}

export class ListRequestsDto {
  @IsOptional() @IsEnum(AssetRequestStatus) status?: AssetRequestStatus;
  @IsOptional() @Type(() => Number) @IsInt() @Min(1) page?: number = 1;
  @IsOptional() @Type(() => Number) @IsInt() @Min(1) @Max(100) limit?: number = 20;
}
