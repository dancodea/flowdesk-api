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
import { HR_ROLES, MANAGER_ROLES, ORG_ADMIN_ONLY } from '../../common/constants/roles';
import type { AuthUser } from '../auth/auth.types';
import {
  ApproveLeaveDto,
  CreateHolidayDto,
  CreateLeavePolicyDto,
  CreateLeaveRequestDto,
  CreateLeaveTypeDto,
  ImportHolidaysDto,
  LeaveAdjustmentDto,
  LeaveBalanceQueryDto,
  LeaveCalendarQueryDto,
  LeaveReportQueryDto,
  ListHolidaysDto,
  ListLeaveRequestsDto,
  RejectLeaveDto,
  UpdateLeavePolicyDto,
  UpdateLeaveTypeDto,
} from './dto';
import { LeaveService } from './leave.service';

@ApiTags('leave')
@ApiBearerAuth()
@Controller('leave')
export class LeaveController {
  constructor(private readonly leave: LeaveService) {}

  // ── Leave Types ───────────────────────────────────────────────────────────────

  @Post('types')
  @Roles(...HR_ROLES)
  @ApiOperation({ summary: 'Create a leave type' })
  createType(@CurrentUser() user: AuthUser, @Body() dto: CreateLeaveTypeDto) {
    return this.leave.createLeaveType(
      user.organizationId,
      user.id,
      user.email,
      user.role,
      dto,
    );
  }

  @Get('types')
  @ApiOperation({ summary: 'List leave types' })
  listTypes(@CurrentUser() user: AuthUser) {
    return this.leave.listLeaveTypes(user.organizationId);
  }

  @Patch('types/:id')
  @Roles(...HR_ROLES)
  @ApiOperation({ summary: 'Update a leave type' })
  updateType(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: UpdateLeaveTypeDto,
  ) {
    return this.leave.updateLeaveType(user.organizationId, id, dto);
  }

  @Delete('types/:id')
  @Roles(...HR_ROLES)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Deactivate a leave type' })
  removeType(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.leave.removeLeaveType(user.organizationId, id);
  }

  // ── Leave Policies ────────────────────────────────────────────────────────────

  @Post('policies')
  @Roles(...HR_ROLES)
  @ApiOperation({ summary: 'Create a leave policy' })
  createPolicy(
    @CurrentUser() user: AuthUser,
    @Body() dto: CreateLeavePolicyDto,
  ) {
    return this.leave.createPolicy(
      user.organizationId,
      user.id,
      user.email,
      user.role,
      dto,
    );
  }

  @Get('policies')
  @ApiOperation({ summary: 'List leave policies' })
  listPolicies(@CurrentUser() user: AuthUser) {
    return this.leave.listPolicies(user.organizationId);
  }

  @Patch('policies/:id')
  @Roles(...HR_ROLES)
  @ApiOperation({ summary: 'Update a leave policy' })
  updatePolicy(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: UpdateLeavePolicyDto,
  ) {
    return this.leave.updatePolicy(user.organizationId, id, dto);
  }

  // ── Leave Requests ────────────────────────────────────────────────────────────

  @Post('requests')
  @ApiOperation({ summary: 'Submit a leave request' })
  createRequest(
    @CurrentUser() user: AuthUser,
    @Body() dto: CreateLeaveRequestDto,
  ) {
    return this.leave.createRequest(user.organizationId, user.id, dto);
  }

  @Get('requests')
  @ApiOperation({ summary: 'List leave requests' })
  listRequests(
    @CurrentUser() user: AuthUser,
    @Query() dto: ListLeaveRequestsDto,
  ) {
    return this.leave.listRequests(user.organizationId, user.id, user.role, dto);
  }

  @Get('requests/:id')
  @ApiOperation({ summary: 'Get a single leave request' })
  getRequest(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.leave.getRequest(user.organizationId, id);
  }

  @Patch('requests/:id/approve')
  @Roles(...MANAGER_ROLES)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Approve a leave request' })
  approveRequest(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: ApproveLeaveDto,
  ) {
    return this.leave.approveRequest(
      user.organizationId,
      id,
      user.id,
      user.email,
      user.role,
      dto,
    );
  }

  @Patch('requests/:id/reject')
  @Roles(...MANAGER_ROLES)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Reject a leave request' })
  rejectRequest(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: RejectLeaveDto,
  ) {
    return this.leave.rejectRequest(
      user.organizationId,
      id,
      user.id,
      user.email,
      user.role,
      dto,
    );
  }

  @Patch('requests/:id/cancel')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Cancel own leave request' })
  cancelRequest(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.leave.cancelRequest(user.organizationId, user.id, id);
  }

  // ── Balances ──────────────────────────────────────────────────────────────────

  @Get('balances')
  @ApiOperation({ summary: 'Get leave balances for an employee' })
  getBalances(
    @CurrentUser() user: AuthUser,
    @Query() dto: LeaveBalanceQueryDto,
  ) {
    return this.leave.getBalances(user.organizationId, user.id, user.role, dto);
  }

  @Post('adjustments')
  @Roles(...HR_ROLES)
  @ApiOperation({ summary: 'Manually adjust a leave balance' })
  adjustBalance(
    @CurrentUser() user: AuthUser,
    @Body() dto: LeaveAdjustmentDto,
  ) {
    return this.leave.adjustBalance(
      user.organizationId,
      user.id,
      user.email,
      user.role,
      dto,
    );
  }

  // ── Calendar & Reports ────────────────────────────────────────────────────────

  @Get('calendar')
  @ApiOperation({ summary: 'Team leave calendar (approved requests)' })
  getCalendar(
    @CurrentUser() user: AuthUser,
    @Query() dto: LeaveCalendarQueryDto,
  ) {
    return this.leave.getCalendar(user.organizationId, dto);
  }

  @Get('report')
  @Roles(...HR_ROLES)
  @ApiOperation({ summary: 'Leave utilization report' })
  getReport(
    @CurrentUser() user: AuthUser,
    @Query() dto: LeaveReportQueryDto,
  ) {
    return this.leave.getReport(user.organizationId, dto);
  }
}

// ── Holidays controller (mounted at /holidays) ────────────────────────────────

import { Controller as Ctrl } from '@nestjs/common';

@ApiTags('holidays')
@ApiBearerAuth()
@Ctrl('holidays')
export class HolidaysController {
  constructor(private readonly leave: LeaveService) {}

  @Get()
  @ApiOperation({ summary: 'List public holidays' })
  list(@CurrentUser() user: AuthUser, @Query() dto: ListHolidaysDto) {
    return this.leave.listHolidays(user.organizationId, dto);
  }

  @Post()
  @Roles(...HR_ROLES)
  @ApiOperation({ summary: 'Add a custom public holiday' })
  create(@CurrentUser() user: AuthUser, @Body() dto: CreateHolidayDto) {
    return this.leave.createHoliday(user.organizationId, dto);
  }

  @Delete(':id')
  @Roles(...HR_ROLES)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Remove a public holiday' })
  remove(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.leave.removeHoliday(user.organizationId, id);
  }

  @Post('import')
  @Roles(...HR_ROLES)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Auto-import public holidays from Nager.Date API' })
  import(@CurrentUser() user: AuthUser, @Body() dto: ImportHolidaysDto) {
    return this.leave.importHolidays(user.organizationId, dto);
  }
}
