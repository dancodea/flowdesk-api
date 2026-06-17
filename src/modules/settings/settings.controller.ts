import { Body, Controller, Get, Patch } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { ORG_ADMIN_ONLY } from '../../common/constants/roles';
import type { AuthUser } from '../auth/auth.types';
import { UpdateSecuritySettingsDto } from './dto/settings.dto';
import { SettingsService } from './settings.service';

@ApiTags('settings')
@ApiBearerAuth()
@Controller('settings')
export class SettingsController {
  constructor(private readonly settings: SettingsService) {}

  @Get('security')
  @Roles(...ORG_ADMIN_ONLY)
  @ApiOperation({ summary: 'Get org security settings' })
  getSecurity(@CurrentUser() user: AuthUser) {
    return this.settings.getSecuritySettings(user.organizationId);
  }

  @Patch('security')
  @Roles(...ORG_ADMIN_ONLY)
  @ApiOperation({ summary: 'Update org security settings' })
  updateSecurity(@CurrentUser() user: AuthUser, @Body() dto: UpdateSecuritySettingsDto) {
    return this.settings.updateSecuritySettings(user.organizationId, dto);
  }

  @Get('integrations')
  @Roles(...ORG_ADMIN_ONLY)
  @ApiOperation({ summary: 'List configured integrations and their status' })
  getIntegrations(@CurrentUser() user: AuthUser) {
    return this.settings.getIntegrations(user.organizationId);
  }
}
