import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { HR_ROLES } from '../../common/constants/roles';
import type { AuthUser } from '../auth/auth.types';
import {
  BulkInvitationDto,
  CreateInvitationDto,
  ListInvitationsDto,
} from './dto';
import { InvitationsService } from './invitations.service';

@ApiTags('invitations')
@ApiBearerAuth()
@Roles(...HR_ROLES)
@Controller('invitations')
export class InvitationsController {
  constructor(private readonly invitations: InvitationsService) {}

  @Post()
  @ApiOperation({ summary: 'Invite a user to the organization' })
  create(@CurrentUser() user: AuthUser, @Body() dto: CreateInvitationDto) {
    return this.invitations.create(user, dto);
  }

  @Post('bulk')
  @ApiOperation({ summary: 'Invite multiple users at once' })
  createBulk(@CurrentUser() user: AuthUser, @Body() dto: BulkInvitationDto) {
    return this.invitations.createBulk(user, dto);
  }

  @Get()
  @ApiOperation({ summary: 'List invitations' })
  list(@CurrentUser() user: AuthUser, @Query() dto: ListInvitationsDto) {
    return this.invitations.list(user.organizationId, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Revoke an invitation' })
  revoke(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.invitations.revoke(user.organizationId, id);
  }

  @Post(':id/resend')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Resend an invitation email' })
  resend(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.invitations.resend(user.organizationId, id);
  }
}
