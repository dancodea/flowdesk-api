import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { HR_ROLES } from '../../common/constants/roles';
import type { AuthUser } from '../auth/auth.types';
import {
  CreateAnnouncementDto,
  ListAnnouncementsDto,
  UpdateAnnouncementDto,
} from './dto/announcement.dto';
import { AnnouncementsService } from './announcements.service';

@ApiTags('announcements')
@ApiBearerAuth()
@Controller('announcements')
export class AnnouncementsController {
  constructor(private readonly announcements: AnnouncementsService) {}

  @Post()
  @Roles(...HR_ROLES)
  @ApiOperation({ summary: 'Create an announcement' })
  create(@CurrentUser() user: AuthUser, @Body() dto: CreateAnnouncementDto) {
    return this.announcements.create(user.organizationId, user.id, dto);
  }

  @Get()
  @ApiOperation({ summary: 'List announcements with read status' })
  list(@CurrentUser() user: AuthUser, @Query() dto: ListAnnouncementsDto) {
    return this.announcements.list(user.organizationId, user.id, dto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single announcement' })
  getOne(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.announcements.getOne(user.organizationId, id, user.id);
  }

  @Patch(':id')
  @Roles(...HR_ROLES)
  @ApiOperation({ summary: 'Update an announcement' })
  update(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: UpdateAnnouncementDto,
  ) {
    return this.announcements.update(user.organizationId, id, dto);
  }

  @Delete(':id')
  @Roles(...HR_ROLES)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete an announcement' })
  remove(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.announcements.remove(user.organizationId, id);
  }

  @Post(':id/read')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Mark announcement as read' })
  markRead(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.announcements.markRead(user.organizationId, id, user.id);
  }
}
