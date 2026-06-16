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
import { HR_ROLES } from '../../common/constants/roles';
import type { AuthUser } from '../auth/auth.types';
import {
  AssignTaskDto,
  CompleteTaskDto,
  CreateChecklistDto,
  CreateTemplateDto,
  ListChecklistsDto,
} from './dto';
import { OnboardingService } from './onboarding.service';

@ApiTags('onboarding')
@ApiBearerAuth()
@Controller('onboarding')
export class OnboardingController {
  constructor(private readonly onboarding: OnboardingService) {}

  // ── Templates ─────────────────────────────────────────────────────────────────

  @Post('templates')
  @Roles(...HR_ROLES)
  @ApiOperation({ summary: 'Create an onboarding template with tasks' })
  createTemplate(@CurrentUser() user: AuthUser, @Body() dto: CreateTemplateDto) {
    return this.onboarding.createTemplate(
      user.organizationId,
      user.id,
      user.email,
      user.role,
      dto,
    );
  }

  @Get('templates')
  @Roles(...HR_ROLES)
  @ApiOperation({ summary: 'List all onboarding templates' })
  listTemplates(@CurrentUser() user: AuthUser) {
    return this.onboarding.listTemplates(user.organizationId);
  }

  // ── Checklists ────────────────────────────────────────────────────────────────

  // /checklists/me must come before /checklists to avoid route collision.
  @Get('checklists/me')
  @ApiOperation({ summary: 'My active onboarding checklist' })
  getMyChecklist(@CurrentUser() user: AuthUser) {
    return this.onboarding.getMyChecklist(user.id);
  }

  @Post('checklists')
  @Roles(...HR_ROLES)
  @ApiOperation({ summary: 'Assign an onboarding checklist to an employee' })
  assignChecklist(
    @CurrentUser() user: AuthUser,
    @Body() dto: CreateChecklistDto,
  ) {
    return this.onboarding.assignChecklist(user.organizationId, user.id, dto);
  }

  @Get('checklists')
  @Roles(...HR_ROLES)
  @ApiOperation({ summary: 'List all onboarding checklists (HR view)' })
  listChecklists(
    @CurrentUser() user: AuthUser,
    @Query() dto: ListChecklistsDto,
  ) {
    return this.onboarding.listChecklists(user.organizationId, dto);
  }

  // ── Tasks ─────────────────────────────────────────────────────────────────────

  @Patch('tasks/:id/complete')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Mark an onboarding task as complete' })
  completeTask(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: CompleteTaskDto,
  ) {
    return this.onboarding.completeTask(user.id, user.role, id, dto);
  }

  @Patch('tasks/:id/assign')
  @Roles(...HR_ROLES)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Re-assign an onboarding task to another user' })
  assignTask(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: AssignTaskDto,
  ) {
    return this.onboarding.assignTask(user.organizationId, id, user.id, dto);
  }
}
