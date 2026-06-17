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
  Put,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { HR_ROLES, PAYROLL_ROLES } from '../../common/constants/roles';
import type { AuthUser } from '../auth/auth.types';
import {
  AddAdjustmentDto,
  ApprovePayRunDto,
  CreateDeductionTypeDto,
  CreatePayGroupDto,
  CreatePayRunDto,
  ExcludeLineDto,
  ListPayRunsDto,
  ListPayslipsDto,
  UpdateDeductionTypeDto,
  UpdatePayGroupDto,
  UpsertTaxSettingsDto,
} from './dto';
import { PayrollService } from './payroll.service';

@ApiTags('payroll')
@ApiBearerAuth()
@Controller('payroll')
export class PayrollController {
  constructor(private readonly payroll: PayrollService) {}

  // ── Pay Groups ────────────────────────────────────────────────────────────────

  @Post('pay-groups')
  @Roles(...PAYROLL_ROLES)
  @ApiOperation({ summary: 'Create a pay group' })
  createPayGroup(@CurrentUser() user: AuthUser, @Body() dto: CreatePayGroupDto) {
    return this.payroll.createPayGroup(user.organizationId, user.id, user.email, user.role, dto);
  }

  @Get('pay-groups')
  @ApiOperation({ summary: 'List pay groups' })
  listPayGroups(@CurrentUser() user: AuthUser) {
    return this.payroll.listPayGroups(user.organizationId);
  }

  @Patch('pay-groups/:id')
  @Roles(...PAYROLL_ROLES)
  @ApiOperation({ summary: 'Update a pay group' })
  updatePayGroup(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: UpdatePayGroupDto,
  ) {
    return this.payroll.updatePayGroup(user.organizationId, id, dto);
  }

  @Delete('pay-groups/:id')
  @Roles(...PAYROLL_ROLES)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete a pay group' })
  deletePayGroup(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.payroll.deletePayGroup(user.organizationId, id, user.id, user.email, user.role);
  }

  // ── Deduction Types ───────────────────────────────────────────────────────────

  @Post('deduction-types')
  @Roles(...PAYROLL_ROLES)
  @ApiOperation({ summary: 'Create a deduction type' })
  createDeductionType(@CurrentUser() user: AuthUser, @Body() dto: CreateDeductionTypeDto) {
    return this.payroll.createDeductionType(user.organizationId, dto);
  }

  @Get('deduction-types')
  @ApiOperation({ summary: 'List deduction types' })
  listDeductionTypes(@CurrentUser() user: AuthUser) {
    return this.payroll.listDeductionTypes(user.organizationId);
  }

  @Patch('deduction-types/:id')
  @Roles(...PAYROLL_ROLES)
  @ApiOperation({ summary: 'Update a deduction type' })
  updateDeductionType(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: UpdateDeductionTypeDto,
  ) {
    return this.payroll.updateDeductionType(user.organizationId, id, dto);
  }

  @Delete('deduction-types/:id')
  @Roles(...PAYROLL_ROLES)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete a deduction type' })
  deleteDeductionType(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.payroll.deleteDeductionType(user.organizationId, id);
  }

  // ── Tax Settings ──────────────────────────────────────────────────────────────

  @Get('tax-settings')
  @ApiOperation({ summary: 'Get tax settings' })
  getTaxSettings(@CurrentUser() user: AuthUser) {
    return this.payroll.getTaxSettings(user.organizationId);
  }

  @Put('tax-settings')
  @Roles(...PAYROLL_ROLES)
  @ApiOperation({ summary: 'Upsert tax settings' })
  upsertTaxSettings(@CurrentUser() user: AuthUser, @Body() dto: UpsertTaxSettingsDto) {
    return this.payroll.upsertTaxSettings(user.organizationId, dto);
  }

  // ── Pay Runs ──────────────────────────────────────────────────────────────────

  @Post('runs')
  @Roles(...PAYROLL_ROLES)
  @ApiOperation({ summary: 'Create a pay run (draft)' })
  createPayRun(@CurrentUser() user: AuthUser, @Body() dto: CreatePayRunDto) {
    return this.payroll.createPayRun(user.organizationId, user.id, user.email, user.role, dto);
  }

  @Get('runs')
  @ApiOperation({ summary: 'List pay runs' })
  listPayRuns(@CurrentUser() user: AuthUser, @Query() dto: ListPayRunsDto) {
    return this.payroll.listPayRuns(user.organizationId, dto);
  }

  @Get('runs/:id')
  @ApiOperation({ summary: 'Get a pay run with lines and adjustments' })
  getPayRun(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.payroll.getPayRun(user.organizationId, id);
  }

  @Post('runs/:id/submit')
  @Roles(...PAYROLL_ROLES)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Submit pay run for approval' })
  submitPayRun(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.payroll.submitPayRun(user.organizationId, id, user.id, user.email, user.role);
  }

  @Post('runs/:id/approve')
  @Roles(...PAYROLL_ROLES)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Approve a pay run' })
  approvePayRun(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: ApprovePayRunDto,
  ) {
    return this.payroll.approvePayRun(user.organizationId, id, user.id, user.email, user.role, dto);
  }

  @Post('runs/:id/process')
  @Roles(...PAYROLL_ROLES)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Trigger pay run calculation (queues BullMQ job)' })
  processPayRun(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.payroll.processPayRun(user.organizationId, id, user.id, user.email, user.role);
  }

  @Post('runs/:id/cancel')
  @Roles(...PAYROLL_ROLES)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Cancel a pay run' })
  cancelPayRun(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.payroll.cancelPayRun(user.organizationId, id, user.id, user.email, user.role);
  }

  // ── Lines ─────────────────────────────────────────────────────────────────────

  @Get('runs/:id/lines')
  @ApiOperation({ summary: 'List pay run lines' })
  listLines(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.payroll.listLines(user.organizationId, id);
  }

  @Patch('runs/:runId/lines/:lineId/exclude')
  @Roles(...PAYROLL_ROLES)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Toggle exclude/include a pay run line' })
  excludeLine(
    @CurrentUser() user: AuthUser,
    @Param('runId') runId: string,
    @Param('lineId') lineId: string,
    @Body() dto: ExcludeLineDto,
  ) {
    return this.payroll.excludeLine(user.organizationId, runId, lineId, dto);
  }

  // ── Adjustments ───────────────────────────────────────────────────────────────

  @Post('runs/:id/adjustments')
  @Roles(...PAYROLL_ROLES)
  @ApiOperation({ summary: 'Add a manual adjustment to a pay run' })
  addAdjustment(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: AddAdjustmentDto,
  ) {
    return this.payroll.addAdjustment(user.organizationId, id, user.id, dto);
  }

  @Get('runs/:id/adjustments')
  @ApiOperation({ summary: 'List adjustments for a pay run' })
  listAdjustments(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.payroll.listAdjustments(user.organizationId, id);
  }

  @Delete('runs/:runId/adjustments/:adjId')
  @Roles(...PAYROLL_ROLES)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Remove an adjustment from a pay run' })
  removeAdjustment(
    @CurrentUser() user: AuthUser,
    @Param('runId') runId: string,
    @Param('adjId') adjId: string,
  ) {
    return this.payroll.removeAdjustment(user.organizationId, runId, adjId);
  }

  // ── Payslips ──────────────────────────────────────────────────────────────────

  @Get('payslips')
  @ApiOperation({ summary: 'List payslips (own or all for payroll/HR roles)' })
  listPayslips(@CurrentUser() user: AuthUser, @Query() dto: ListPayslipsDto) {
    return this.payroll.listPayslips(user.organizationId, user.id, user.role, dto);
  }

  @Get('payslips/:id')
  @ApiOperation({ summary: 'Get a single payslip' })
  getPayslip(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.payroll.getPayslip(user.organizationId, id);
  }

  @Post('payslips/:id/email')
  @Roles(...PAYROLL_ROLES)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Queue payslip email to employee' })
  emailPayslip(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.payroll.emailPayslip(user.organizationId, id);
  }
}
