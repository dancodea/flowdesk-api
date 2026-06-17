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
import { IT_ROLES } from '../../common/constants/roles';
import type { AuthUser } from '../auth/auth.types';
import {
  AssignAssetDto,
  CreateAssetDto,
  CreateAssetRequestDto,
  FulfillRequestDto,
  ListAssetsDto,
  ListRequestsDto,
  LogMaintenanceDto,
  ReturnAssetDto,
  UpdateAssetDto,
} from './dto';
import { AssetsService } from './assets.service';

@ApiTags('assets')
@ApiBearerAuth()
@Controller('assets')
export class AssetsController {
  constructor(private readonly assets: AssetsService) {}

  // ── Catalog ───────────────────────────────────────────────────────────────────

  @Post()
  @Roles(...IT_ROLES)
  @ApiOperation({ summary: 'Add an asset to the catalog' })
  create(@CurrentUser() user: AuthUser, @Body() dto: CreateAssetDto) {
    return this.assets.createAsset(user.organizationId, user.id, user.email, user.role, dto);
  }

  @Get()
  @ApiOperation({ summary: 'List assets (filterable by type, status, location)' })
  list(@CurrentUser() user: AuthUser, @Query() dto: ListAssetsDto) {
    return this.assets.listAssets(user.organizationId, dto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an asset with assignment history and maintenance log' })
  getOne(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.assets.getAsset(user.organizationId, id);
  }

  @Patch(':id')
  @Roles(...IT_ROLES)
  @ApiOperation({ summary: 'Update asset details' })
  update(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: UpdateAssetDto,
  ) {
    return this.assets.updateAsset(user.organizationId, id, dto);
  }

  @Delete(':id')
  @Roles(...IT_ROLES)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Retire an asset (soft delete)' })
  retire(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.assets.retireAsset(user.organizationId, id, user.id, user.email, user.role);
  }

  // ── QR ────────────────────────────────────────────────────────────────────────

  @Get(':id/qr')
  @ApiOperation({ summary: 'Get (or generate) QR code key for an asset' })
  getQr(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.assets.getQrKey(user.organizationId, id);
  }

  // ── Assignments ───────────────────────────────────────────────────────────────

  @Post(':id/assign')
  @Roles(...IT_ROLES)
  @ApiOperation({ summary: 'Assign asset to an employee' })
  assign(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: AssignAssetDto,
  ) {
    return this.assets.assignAsset(user.organizationId, id, user.id, user.email, user.role, dto);
  }

  @Get(':id/assignments')
  @ApiOperation({ summary: 'Assignment history for an asset' })
  listAssignments(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.assets.listAssignments(user.organizationId, id);
  }

  @Post('assignments/:assignmentId/return')
  @Roles(...IT_ROLES)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Record asset return with condition' })
  returnAsset(
    @CurrentUser() user: AuthUser,
    @Param('assignmentId') assignmentId: string,
    @Body() dto: ReturnAssetDto,
  ) {
    return this.assets.returnAsset(user.organizationId, assignmentId, user.id, user.email, user.role, dto);
  }

  // ── Requests ──────────────────────────────────────────────────────────────────

  @Post('requests')
  @ApiOperation({ summary: 'Submit an asset request' })
  createRequest(@CurrentUser() user: AuthUser, @Body() dto: CreateAssetRequestDto) {
    return this.assets.createRequest(user.organizationId, user.id, dto);
  }

  @Get('requests')
  @ApiOperation({ summary: 'List asset requests (own for employees, all for IT/HR)' })
  listRequests(@CurrentUser() user: AuthUser, @Query() dto: ListRequestsDto) {
    return this.assets.listRequests(user.organizationId, user.id, user.role, dto);
  }

  @Patch('requests/:id/fulfill')
  @Roles(...IT_ROLES)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Fulfill a request by assigning a specific asset' })
  fulfillRequest(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: FulfillRequestDto,
  ) {
    return this.assets.fulfillRequest(user.organizationId, id, user.id, user.email, user.role, dto);
  }

  @Patch('requests/:id/reject')
  @Roles(...IT_ROLES)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Reject an asset request' })
  rejectRequest(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.assets.rejectRequest(user.organizationId, id, user.id, user.email, user.role);
  }

  // ── Maintenance ───────────────────────────────────────────────────────────────

  @Post(':id/maintenance')
  @Roles(...IT_ROLES)
  @ApiOperation({ summary: 'Log a maintenance record for an asset' })
  logMaintenance(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: LogMaintenanceDto,
  ) {
    return this.assets.logMaintenance(user.organizationId, id, user.id, user.email, user.role, dto);
  }

  @Get(':id/maintenance')
  @ApiOperation({ summary: 'Maintenance history for an asset' })
  listMaintenance(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.assets.listMaintenance(user.organizationId, id);
  }
}
