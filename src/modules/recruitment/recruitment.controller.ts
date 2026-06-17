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
import { Public } from '../../common/decorators/public.decorator';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { HR_ROLES, RECRUITER_ROLES } from '../../common/constants/roles';
import type { AuthUser } from '../auth/auth.types';
import {
  AddNoteDto,
  AddPanelistsDto,
  ConvertToEmployeeDto,
  CreateJobDto,
  CreateOfferDto,
  CreatePipelineStageDto,
  ListApplicationsDto,
  ListJobsDto,
  MoveStageDto,
  PublicApplyDto,
  RejectApplicationDto,
  ScheduleInterviewDto,
  SubmitFeedbackDto,
  UpdateInterviewDto,
  UpdateJobDto,
  UpdatePipelineStageDto,
} from './dto';
import { RecruitmentService } from './recruitment.service';

// ── Public careers (no auth) ──────────────────────────────────────────────────

@ApiTags('careers')
@Controller('careers')
export class CareersController {
  constructor(private readonly recruitment: RecruitmentService) {}

  @Public()
  @Get()
  @ApiOperation({ summary: 'List open public job postings' })
  listJobs(@Query('page') page?: string, @Query('limit') limit?: string) {
    return this.recruitment.listPublicJobs(
      page ? parseInt(page, 10) : 1,
      limit ? parseInt(limit, 10) : 20,
    );
  }

  @Public()
  @Get(':id')
  @ApiOperation({ summary: 'Get a public job posting' })
  getJob(@Param('id') id: string) {
    return this.recruitment.getPublicJob(id);
  }

  @Public()
  @Post(':jobId/apply')
  @ApiOperation({ summary: 'Submit a job application (no auth required)' })
  apply(@Param('jobId') jobId: string, @Body() dto: PublicApplyDto) {
    return this.recruitment.applyPublic(jobId, dto);
  }
}

// ── Authenticated recruitment management ──────────────────────────────────────

@ApiTags('recruitment')
@ApiBearerAuth()
@Controller('recruitment')
export class RecruitmentController {
  constructor(private readonly recruitment: RecruitmentService) {}

  // ── Pipeline Stages ─────────────────────────────────────────────────────────

  @Post('pipeline-stages')
  @Roles(...HR_ROLES)
  @ApiOperation({ summary: 'Create a pipeline stage' })
  createStage(@CurrentUser() user: AuthUser, @Body() dto: CreatePipelineStageDto) {
    return this.recruitment.createStage(user.organizationId, user.id, user.email, user.role, dto);
  }

  @Get('pipeline-stages')
  @ApiOperation({ summary: 'List pipeline stages' })
  listStages(@CurrentUser() user: AuthUser) {
    return this.recruitment.listStages(user.organizationId);
  }

  @Patch('pipeline-stages/:id')
  @Roles(...HR_ROLES)
  @ApiOperation({ summary: 'Update a pipeline stage' })
  updateStage(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: UpdatePipelineStageDto,
  ) {
    return this.recruitment.updateStage(user.organizationId, id, dto);
  }

  @Delete('pipeline-stages/:id')
  @Roles(...HR_ROLES)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete a pipeline stage' })
  deleteStage(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.recruitment.deleteStage(user.organizationId, id);
  }

  // ── Jobs ────────────────────────────────────────────────────────────────────

  @Post('jobs')
  @Roles(...RECRUITER_ROLES)
  @ApiOperation({ summary: 'Create a job posting (draft)' })
  createJob(@CurrentUser() user: AuthUser, @Body() dto: CreateJobDto) {
    return this.recruitment.createJob(user.organizationId, user.id, user.email, user.role, dto);
  }

  @Get('jobs')
  @ApiOperation({ summary: 'List job postings' })
  listJobs(@CurrentUser() user: AuthUser, @Query() dto: ListJobsDto) {
    return this.recruitment.listJobs(user.organizationId, dto);
  }

  @Get('jobs/:id')
  @ApiOperation({ summary: 'Get a job posting' })
  getJob(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.recruitment.getJob(user.organizationId, id);
  }

  @Patch('jobs/:id')
  @Roles(...RECRUITER_ROLES)
  @ApiOperation({ summary: 'Update a job posting' })
  updateJob(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: UpdateJobDto,
  ) {
    return this.recruitment.updateJob(user.organizationId, id, dto);
  }

  @Post('jobs/:id/publish')
  @Roles(...RECRUITER_ROLES)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Publish a job posting' })
  publishJob(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.recruitment.publishJob(user.organizationId, id, user.id, user.email, user.role);
  }

  @Post('jobs/:id/pause')
  @Roles(...RECRUITER_ROLES)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Pause a job posting' })
  pauseJob(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.recruitment.pauseJob(user.organizationId, id);
  }

  @Post('jobs/:id/close')
  @Roles(...RECRUITER_ROLES)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Close a job posting' })
  closeJob(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.recruitment.closeJob(user.organizationId, id);
  }

  @Delete('jobs/:id')
  @Roles(...RECRUITER_ROLES)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete a draft job posting' })
  deleteJob(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.recruitment.deleteJob(user.organizationId, id);
  }

  // ── Applications ────────────────────────────────────────────────────────────

  @Get('applications')
  @ApiOperation({ summary: 'List applications' })
  listApplications(@CurrentUser() user: AuthUser, @Query() dto: ListApplicationsDto) {
    return this.recruitment.listApplications(user.organizationId, dto);
  }

  @Get('applications/:id')
  @ApiOperation({ summary: 'Get an application with full detail' })
  getApplication(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.recruitment.getApplication(user.organizationId, id);
  }

  @Patch('applications/:id/stage')
  @Roles(...RECRUITER_ROLES)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Move application to a pipeline stage' })
  moveStage(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: MoveStageDto,
  ) {
    return this.recruitment.moveStage(user.organizationId, id, dto);
  }

  @Post('applications/:id/reject')
  @Roles(...RECRUITER_ROLES)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Reject an application' })
  reject(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: RejectApplicationDto,
  ) {
    return this.recruitment.rejectApplication(user.organizationId, id, dto);
  }

  @Post('applications/:id/withdraw')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Withdraw an application' })
  withdraw(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.recruitment.withdrawApplication(user.organizationId, id);
  }

  @Post('applications/:id/convert')
  @Roles(...HR_ROLES)
  @ApiOperation({ summary: 'Convert accepted applicant to employee' })
  convert(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: ConvertToEmployeeDto,
  ) {
    return this.recruitment.convertToEmployee(user.organizationId, id, user.id, user.email, user.role, dto);
  }

  // ── Notes ────────────────────────────────────────────────────────────────────

  @Post('applications/:id/notes')
  @ApiOperation({ summary: 'Add a note to an application' })
  addNote(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: AddNoteDto,
  ) {
    return this.recruitment.addNote(user.organizationId, id, user.id, dto);
  }

  @Get('applications/:id/notes')
  @ApiOperation({ summary: 'List notes on an application' })
  listNotes(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.recruitment.listNotes(user.organizationId, id);
  }

  @Delete('applications/:appId/notes/:noteId')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete own note' })
  deleteNote(
    @CurrentUser() user: AuthUser,
    @Param('appId') appId: string,
    @Param('noteId') noteId: string,
  ) {
    return this.recruitment.deleteNote(user.organizationId, appId, noteId, user.id);
  }

  // ── Interviews ───────────────────────────────────────────────────────────────

  @Post('applications/:id/interviews')
  @Roles(...RECRUITER_ROLES)
  @ApiOperation({ summary: 'Schedule an interview' })
  scheduleInterview(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: ScheduleInterviewDto,
  ) {
    return this.recruitment.scheduleInterview(user.organizationId, id, user.id, dto);
  }

  @Get('applications/:id/interviews')
  @ApiOperation({ summary: 'List interviews for an application' })
  listInterviews(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.recruitment.listInterviews(user.organizationId, id);
  }

  @Patch('interviews/:id')
  @Roles(...RECRUITER_ROLES)
  @ApiOperation({ summary: 'Update an interview' })
  updateInterview(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: UpdateInterviewDto,
  ) {
    return this.recruitment.updateInterview(user.organizationId, id, dto);
  }

  @Post('interviews/:id/panelists')
  @Roles(...RECRUITER_ROLES)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Add panelists to an interview' })
  addPanelists(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: AddPanelistsDto,
  ) {
    return this.recruitment.addPanelists(user.organizationId, id, dto);
  }

  @Delete('interviews/:id/panelists/:employeeId')
  @Roles(...RECRUITER_ROLES)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Remove a panelist from an interview' })
  removePanelist(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Param('employeeId') employeeId: string,
  ) {
    return this.recruitment.removePanelist(user.organizationId, id, employeeId);
  }

  @Post('interviews/:id/feedback')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Submit interview feedback (upsert)' })
  submitFeedback(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: SubmitFeedbackDto,
  ) {
    return this.recruitment.submitFeedback(user.organizationId, id, user.id, dto);
  }

  @Get('interviews/:id/feedback')
  @ApiOperation({ summary: 'List feedback for an interview' })
  listFeedback(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.recruitment.listFeedback(user.organizationId, id);
  }

  // ── Offers ───────────────────────────────────────────────────────────────────

  @Post('applications/:id/offers')
  @Roles(...RECRUITER_ROLES)
  @ApiOperation({ summary: 'Create an offer for an application' })
  createOffer(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: CreateOfferDto,
  ) {
    return this.recruitment.createOffer(user.organizationId, id, user.id, dto);
  }

  @Get('applications/:id/offers')
  @ApiOperation({ summary: 'List offers for an application' })
  listOffers(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.recruitment.listOffers(user.organizationId, id);
  }

  @Post('offers/:id/send')
  @Roles(...RECRUITER_ROLES)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Send an offer (DRAFT → SENT)' })
  sendOffer(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.recruitment.sendOffer(user.organizationId, id);
  }

  @Post('offers/:id/accept')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Mark offer as accepted' })
  acceptOffer(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.recruitment.acceptOffer(user.organizationId, id);
  }

  @Post('offers/:id/decline')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Mark offer as declined' })
  declineOffer(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.recruitment.declineOffer(user.organizationId, id);
  }

  @Post('offers/:id/sign')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Mark offer as signed' })
  signOffer(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.recruitment.signOffer(user.organizationId, id);
  }
}
