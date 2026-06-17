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
import { HR_ROLES, MANAGER_ROLES } from '../../common/constants/roles';
import type { AuthUser } from '../auth/auth.types';
import {
  AttendanceOverviewDto,
  ClockInDto,
  ClockOutDto,
  ListAttendanceDto,
  ManualEntryDto,
  UpdateAttendanceDto,
} from './dto';
import { AttendanceService } from './attendance.service';

@ApiTags('attendance')
@ApiBearerAuth()
@Controller('attendance')
export class AttendanceController {
  constructor(private readonly attendance: AttendanceService) {}

  // ── Self clock-in/out/breaks ──────────────────────────────────────────────────

  @Post('clock-in')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Clock in for today' })
  clockIn(@CurrentUser() user: AuthUser, @Body() dto: ClockInDto) {
    return this.attendance.clockIn(user.organizationId, user.id, dto);
  }

  @Post('clock-out')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Clock out for today' })
  clockOut(@CurrentUser() user: AuthUser, @Body() dto: ClockOutDto) {
    return this.attendance.clockOut(user.organizationId, user.id, dto);
  }

  @Post('break/start')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Start a break' })
  startBreak(@CurrentUser() user: AuthUser) {
    return this.attendance.startBreak(user.organizationId, user.id);
  }

  @Post('break/end')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'End current break' })
  endBreak(@CurrentUser() user: AuthUser) {
    return this.attendance.endBreak(user.organizationId, user.id);
  }

  @Get('today')
  @ApiOperation({ summary: "Get own today's attendance status" })
  getToday(@CurrentUser() user: AuthUser) {
    return this.attendance.getToday(user.organizationId, user.id);
  }

  // ── Entries ───────────────────────────────────────────────────────────────────

  @Get()
  @ApiOperation({ summary: 'List attendance entries (own or team for managers)' })
  list(@CurrentUser() user: AuthUser, @Query() dto: ListAttendanceDto) {
    return this.attendance.listEntries(user.organizationId, user.id, user.role, dto);
  }

  @Get('overview')
  @Roles(...MANAGER_ROLES)
  @ApiOperation({ summary: 'Real-time attendance overview for a date' })
  overview(@CurrentUser() user: AuthUser, @Query() dto: AttendanceOverviewDto) {
    return this.attendance.getOverview(user.organizationId, dto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single attendance entry' })
  getOne(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.attendance.getEntry(user.organizationId, id);
  }

  // ── HR manual management ──────────────────────────────────────────────────────

  @Post('manual')
  @Roles(...HR_ROLES)
  @ApiOperation({ summary: 'Create a manual attendance entry (HR)' })
  createManual(@CurrentUser() user: AuthUser, @Body() dto: ManualEntryDto) {
    return this.attendance.createManualEntry(
      user.organizationId,
      user.id,
      user.email,
      user.role,
      dto,
    );
  }

  @Patch(':id')
  @Roles(...HR_ROLES)
  @ApiOperation({ summary: 'Update an attendance entry (HR)' })
  update(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: UpdateAttendanceDto,
  ) {
    return this.attendance.updateEntry(
      user.organizationId,
      id,
      user.id,
      user.email,
      user.role,
      dto,
    );
  }
}
