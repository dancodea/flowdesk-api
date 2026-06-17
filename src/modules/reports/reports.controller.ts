import { Controller, Get, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { HR_ROLES } from '../../common/constants/roles';
import type { AuthUser } from '../auth/auth.types';
import { DateRangeDto, PayrollCostReportDto } from './dto/reports.dto';
import { ReportsService } from './reports.service';

@ApiTags('reports')
@ApiBearerAuth()
@Roles(...HR_ROLES)
@Controller('reports')
export class ReportsController {
  constructor(private readonly reports: ReportsService) {}

  @Get('headcount')
  @ApiOperation({ summary: 'Headcount by department, status and employment type' })
  headcount(@CurrentUser() user: AuthUser, @Query() dto: DateRangeDto) {
    return this.reports.headcount(user.organizationId!, dto);
  }

  @Get('turnover')
  @ApiOperation({ summary: 'Hiring vs termination turnover rate for a period' })
  turnover(@CurrentUser() user: AuthUser, @Query() dto: DateRangeDto) {
    return this.reports.turnover(user.organizationId!, dto);
  }

  @Get('payroll-cost')
  @ApiOperation({ summary: 'Payroll cost summary across completed pay runs' })
  payrollCost(@CurrentUser() user: AuthUser, @Query() dto: PayrollCostReportDto) {
    return this.reports.payrollCost(user.organizationId!, dto);
  }

  @Get('attendance')
  @ApiOperation({ summary: 'Attendance status breakdown for a date range' })
  attendance(@CurrentUser() user: AuthUser, @Query() dto: DateRangeDto) {
    return this.reports.attendance(user.organizationId!, dto);
  }

  @Get('leave')
  @ApiOperation({ summary: 'Leave utilisation by status and type' })
  leave(@CurrentUser() user: AuthUser, @Query() dto: DateRangeDto) {
    return this.reports.leave(user.organizationId!, dto);
  }

  @Get('performance')
  @ApiOperation({ summary: 'Performance cycle completion rates and avg ratings' })
  performance(@CurrentUser() user: AuthUser, @Query() dto: DateRangeDto) {
    return this.reports.performance(user.organizationId!, dto);
  }
}
