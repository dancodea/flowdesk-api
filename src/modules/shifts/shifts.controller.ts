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
import { HR_ROLES, MANAGER_ROLES } from '../../common/constants/roles';
import type { AuthUser } from '../auth/auth.types';
import {
  AssignShiftDto,
  BulkAssignShiftDto,
  CreateShiftTemplateDto,
  ListSchedulesDto,
  UpdateShiftTemplateDto,
} from './dto';
import { ShiftsService } from './shifts.service';

@ApiTags('shifts')
@ApiBearerAuth()
@Controller('shifts')
export class ShiftsController {
  constructor(private readonly shifts: ShiftsService) {}

  // ── Templates ─────────────────────────────────────────────────────────────────

  @Post('templates')
  @Roles(...HR_ROLES)
  @ApiOperation({ summary: 'Create a shift template' })
  createTemplate(@CurrentUser() user: AuthUser, @Body() dto: CreateShiftTemplateDto) {
    return this.shifts.createTemplate(user.organizationId, user.id, user.email, user.role, dto);
  }

  @Get('templates')
  @ApiOperation({ summary: 'List shift templates' })
  listTemplates(@CurrentUser() user: AuthUser) {
    return this.shifts.listTemplates(user.organizationId);
  }

  @Get('templates/:id')
  @ApiOperation({ summary: 'Get a shift template' })
  getTemplate(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.shifts.getTemplate(user.organizationId, id);
  }

  @Patch('templates/:id')
  @Roles(...HR_ROLES)
  @ApiOperation({ summary: 'Update a shift template' })
  updateTemplate(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: UpdateShiftTemplateDto,
  ) {
    return this.shifts.updateTemplate(user.organizationId, id, user.id, user.email, user.role, dto);
  }

  @Delete('templates/:id')
  @Roles(...HR_ROLES)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete a shift template' })
  deleteTemplate(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.shifts.deleteTemplate(user.organizationId, id, user.id, user.email, user.role);
  }

  // ── Schedules ─────────────────────────────────────────────────────────────────

  @Post('schedules')
  @Roles(...MANAGER_ROLES)
  @ApiOperation({ summary: 'Assign a shift to an employee for a date' })
  assignShift(@CurrentUser() user: AuthUser, @Body() dto: AssignShiftDto) {
    return this.shifts.assignShift(user.organizationId, user.id, user.email, user.role, dto);
  }

  @Post('schedules/bulk')
  @Roles(...MANAGER_ROLES)
  @ApiOperation({ summary: 'Bulk-assign the same shift to multiple employees' })
  bulkAssign(@CurrentUser() user: AuthUser, @Body() dto: BulkAssignShiftDto) {
    return this.shifts.bulkAssignShift(user.organizationId, user.id, user.email, user.role, dto);
  }

  @Get('schedules')
  @ApiOperation({ summary: 'List shift schedules (filterable by week/employee/dept)' })
  listSchedules(@CurrentUser() user: AuthUser, @Query() dto: ListSchedulesDto) {
    return this.shifts.listSchedules(user.organizationId, dto);
  }

  @Delete('schedules/:id')
  @Roles(...MANAGER_ROLES)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Remove a shift schedule entry' })
  deleteSchedule(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.shifts.deleteSchedule(user.organizationId, id, user.id, user.email, user.role);
  }
}
