import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { ORG_ADMIN_ONLY } from '../../common/constants/roles';
import type { AuthUser } from '../auth/auth.types';
import { CreateLocationDto, UpdateLocationDto } from './dto';
import { LocationsService } from './locations.service';

// Documented under /settings/locations in the API spec (section 11.22).
@ApiTags('locations')
@ApiBearerAuth()
@Controller('settings/locations')
export class LocationsController {
  constructor(private readonly locations: LocationsService) {}

  @Get()
  @ApiOperation({ summary: 'List office locations' })
  list(@CurrentUser() user: AuthUser) {
    return this.locations.list(user.organizationId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a location' })
  findOne(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.locations.findOne(user.organizationId, id);
  }

  @Post()
  @Roles(...ORG_ADMIN_ONLY)
  @ApiOperation({ summary: 'Add an office location' })
  create(@CurrentUser() user: AuthUser, @Body() dto: CreateLocationDto) {
    return this.locations.create(user.organizationId, dto);
  }

  @Patch(':id')
  @Roles(...ORG_ADMIN_ONLY)
  @ApiOperation({ summary: 'Update a location' })
  update(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: UpdateLocationDto,
  ) {
    return this.locations.update(user.organizationId, id, dto);
  }

  @Delete(':id')
  @Roles(...ORG_ADMIN_ONLY)
  @ApiOperation({ summary: 'Delete a location' })
  remove(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.locations.remove(user.organizationId, id);
  }
}
