import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import type { AuthUser } from '../auth/auth.types';
import { DeleteUploadDto, SignUploadDto } from './dto';
import { UploadsService } from './uploads.service';

@ApiTags('uploads')
@ApiBearerAuth()
@Controller('uploads')
export class UploadsController {
  constructor(private readonly uploads: UploadsService) {}

  @Post('sign')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get signed Cloudinary upload params' })
  sign(@CurrentUser() user: AuthUser, @Body() dto: SignUploadDto) {
    return this.uploads.sign(user.organizationId, dto);
  }

  @Delete()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete an uploaded file from Cloudinary' })
  remove(@Body() dto: DeleteUploadDto) {
    return this.uploads.remove(dto);
  }
}
