import {
  Body,
  Controller,
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
import { MANAGER_ROLES } from '../../common/constants/roles';
import type { AuthUser } from '../auth/auth.types';
import {
  ApproveTimesheetDto,
  GetOrCreateTimesheetDto,
  ListTimesheetsDto,
  RejectTimesheetDto,
} from './dto';
import { TimesheetsService } from './timesheets.service';

@ApiTags('timesheets')
@ApiBearerAuth()
@Controller('timesheets')
export class TimesheetsController {
  constructor(private readonly timesheets: TimesheetsService) {}

  @Get('week')
  @ApiOperation({ summary: 'Get or create timesheet for a given week' })
  getOrCreate(
    @CurrentUser() user: AuthUser,
    @Query() dto: GetOrCreateTimesheetDto,
  ) {
    return this.timesheets.getOrCreate(user.organizationId, user.id, dto);
  }

  @Get()
  @ApiOperation({ summary: 'List timesheets (own or team for managers)' })
  list(@CurrentUser() user: AuthUser, @Query() dto: ListTimesheetsDto) {
    return this.timesheets.list(user.organizationId, user.id, user.role, dto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single timesheet' })
  getOne(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.timesheets.getOne(user.organizationId, id);
  }

  @Post(':id/submit')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Submit own draft timesheet for approval' })
  submit(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.timesheets.submit(user.organizationId, user.id, id);
  }

  @Patch(':id/approve')
  @Roles(...MANAGER_ROLES)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Approve a submitted timesheet' })
  approve(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: ApproveTimesheetDto,
  ) {
    return this.timesheets.approve(
      user.organizationId,
      user.id,
      user.email,
      user.role,
      id,
      dto,
    );
  }

  @Patch(':id/reject')
  @Roles(...MANAGER_ROLES)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Reject a submitted timesheet' })
  reject(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: RejectTimesheetDto,
  ) {
    return this.timesheets.reject(
      user.organizationId,
      user.id,
      user.email,
      user.role,
      id,
      dto,
    );
  }
}
