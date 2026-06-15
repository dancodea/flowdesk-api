import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { HR_ROLES, ORG_ADMIN_ONLY } from '../../common/constants/roles';
import type { AuthUser } from '../auth/auth.types';
import {
  OrgLogoDto,
  PayrollSettingsDto,
  UpdateOrganizationDto,
  WorkScheduleSettingsDto,
} from './dto';
import { OrganizationsService } from './organizations.service';

@ApiTags('organizations')
@ApiBearerAuth()
@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly organizations: OrganizationsService) {}

  @Get('me')
  @ApiOperation({ summary: 'Get the current user organization' })
  findMine(@CurrentUser() user: AuthUser) {
    return this.organizations.findMine(user.organizationId);
  }

  @Get('me/stats')
  @Roles(...HR_ROLES)
  @ApiOperation({ summary: 'Headcount and setup statistics' })
  stats(@CurrentUser() user: AuthUser) {
    return this.organizations.stats(user.organizationId);
  }

  @Patch('me')
  @Roles(...ORG_ADMIN_ONLY)
  @ApiOperation({ summary: 'Update organization profile' })
  update(@CurrentUser() user: AuthUser, @Body() dto: UpdateOrganizationDto) {
    return this.organizations.update(user.organizationId, dto);
  }

  @Patch('me/payroll-settings')
  @Roles(...ORG_ADMIN_ONLY)
  @ApiOperation({ summary: 'Configure pay schedule (default pay group)' })
  payrollSettings(
    @CurrentUser() user: AuthUser,
    @Body() dto: PayrollSettingsDto,
  ) {
    return this.organizations.updatePayrollSettings(user.organizationId, dto);
  }

  @Patch('me/work-schedule')
  @Roles(...ORG_ADMIN_ONLY)
  @ApiOperation({ summary: 'Configure the default work schedule' })
  workSchedule(
    @CurrentUser() user: AuthUser,
    @Body() dto: WorkScheduleSettingsDto,
  ) {
    return this.organizations.updateWorkSchedule(user.organizationId, dto);
  }

  @Post('me/logo')
  @Roles(...ORG_ADMIN_ONLY)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Persist an uploaded organization logo' })
  setLogo(@CurrentUser() user: AuthUser, @Body() dto: OrgLogoDto) {
    return this.organizations.setLogo(user.organizationId, dto);
  }
}
