import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import {
  ApplicationStatus,
  EmployeeStatus,
  JobStatus,
  JobVisibility,
  OfferStatus,
} from '../../generated/prisma/enums';
import { PrismaService } from '../../prisma/prisma.service';
import { AUDIT_EVENT } from '../audit/audit.types';
import type { AuditEvent } from '../audit/audit.types';
import { NotificationsService } from '../notifications/notifications.service';
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

@Injectable()
export class RecruitmentService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly notifications: NotificationsService,
    private readonly events: EventEmitter2,
  ) {}

  private requireTenant(organizationId: string | null): string {
    if (!organizationId)
      throw new BadRequestException('No organization context');
    return organizationId;
  }

  private emitAudit(event: AuditEvent) {
    this.events.emit(AUDIT_EVENT, event);
  }

  // ── Pipeline Stages ───────────────────────────────────────────────────────────

  async createStage(
    organizationId: string | null,
    actorId: string,
    actorName: string,
    actorRole: string,
    dto: CreatePipelineStageDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    const stage = await this.prisma.pipelineStage.create({
      data: {
        organizationId: orgId,
        name: dto.name,
        orderIndex: dto.orderIndex ?? 0,
        color: dto.color,
        isDefault: dto.isDefault ?? false,
        isFinal: dto.isFinal ?? false,
      },
    });
    this.emitAudit({
      organizationId: orgId,
      action: 'recruitment.stage.created',
      resourceType: 'PipelineStage',
      resourceId: stage.id,
      resourceName: stage.name,
      actorId,
      actorName,
      actorRole,
    });
    return stage;
  }

  listStages(organizationId: string | null) {
    const orgId = this.requireTenant(organizationId);
    return this.prisma.pipelineStage.findMany({
      where: { organizationId: orgId },
      orderBy: { orderIndex: 'asc' },
    });
  }

  async updateStage(
    organizationId: string | null,
    id: string,
    dto: UpdatePipelineStageDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    await this.findStage(orgId, id);
    return this.prisma.pipelineStage.update({ where: { id }, data: { ...dto } });
  }

  async deleteStage(organizationId: string | null, id: string) {
    const orgId = this.requireTenant(organizationId);
    await this.findStage(orgId, id);
    await this.prisma.pipelineStage.delete({ where: { id } });
    return { deleted: true };
  }

  // ── Jobs ──────────────────────────────────────────────────────────────────────

  async createJob(
    organizationId: string | null,
    actorId: string,
    actorName: string,
    actorRole: string,
    dto: CreateJobDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    const job = await this.prisma.jobPosting.create({
      data: {
        organizationId: orgId,
        title: dto.title,
        description: dto.description,
        employmentType: dto.employmentType,
        remoteType: dto.remoteType,
        departmentId: dto.departmentId,
        locationId: dto.locationId,
        salaryMin: dto.salaryMin,
        salaryMax: dto.salaryMax,
        currency: dto.currency ?? 'USD',
        visibility: dto.visibility ?? JobVisibility.INTERNAL,
        hiringManagerId: dto.hiringManagerId,
        recruiterId: dto.recruiterId,
        createdBy: actorId,
        status: JobStatus.DRAFT,
      },
    });
    this.emitAudit({
      organizationId: orgId,
      action: 'recruitment.job.created',
      resourceType: 'JobPosting',
      resourceId: job.id,
      resourceName: job.title,
      actorId,
      actorName,
      actorRole,
    });
    return job;
  }

  async listJobs(organizationId: string | null, dto: ListJobsDto) {
    const orgId = this.requireTenant(organizationId);
    const page = dto.page ?? 1;
    const limit = dto.limit ?? 20;
    const where: any = {
      organizationId: orgId,
      ...(dto.status ? { status: dto.status } : {}),
      ...(dto.visibility ? { visibility: dto.visibility } : {}),
      ...(dto.departmentId ? { departmentId: dto.departmentId } : {}),
    };
    const [items, total] = await this.prisma.$transaction([
      this.prisma.jobPosting.findMany({
        where,
        include: {
          department: { select: { id: true, name: true } },
          location: { select: { id: true, name: true } },
          _count: { select: { applications: true } },
        },
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.jobPosting.count({ where }),
    ]);
    return { items, total, page, limit };
  }

  async getJob(organizationId: string | null, id: string) {
    const orgId = this.requireTenant(organizationId);
    const job = await this.prisma.jobPosting.findFirst({
      where: { id, organizationId: orgId },
      include: {
        department: { select: { id: true, name: true } },
        location: { select: { id: true, name: true } },
        _count: { select: { applications: true } },
      },
    });
    if (!job) throw new NotFoundException('Job posting not found');
    return job;
  }

  async updateJob(
    organizationId: string | null,
    id: string,
    dto: UpdateJobDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    await this.findJob(orgId, id);
    return this.prisma.jobPosting.update({ where: { id }, data: { ...dto } });
  }

  async publishJob(
    organizationId: string | null,
    id: string,
    actorId: string,
    actorName: string,
    actorRole: string,
  ) {
    const orgId = this.requireTenant(organizationId);
    const job = await this.findJob(orgId, id);
    if (job.status === JobStatus.CLOSED)
      throw new BadRequestException('Cannot publish a closed job');
    const updated = await this.prisma.jobPosting.update({
      where: { id },
      data: { status: JobStatus.OPEN, publishedAt: job.publishedAt ?? new Date() },
    });
    this.emitAudit({ organizationId: orgId, action: 'recruitment.job.published', resourceType: 'JobPosting', resourceId: id, actorId, actorName, actorRole });
    return updated;
  }

  async pauseJob(organizationId: string | null, id: string) {
    const orgId = this.requireTenant(organizationId);
    const job = await this.findJob(orgId, id);
    if (job.status !== JobStatus.OPEN)
      throw new BadRequestException('Only open jobs can be paused');
    return this.prisma.jobPosting.update({ where: { id }, data: { status: JobStatus.PAUSED } });
  }

  async closeJob(organizationId: string | null, id: string) {
    const orgId = this.requireTenant(organizationId);
    await this.findJob(orgId, id);
    return this.prisma.jobPosting.update({
      where: { id },
      data: { status: JobStatus.CLOSED, closedAt: new Date() },
    });
  }

  async deleteJob(organizationId: string | null, id: string) {
    const orgId = this.requireTenant(organizationId);
    const job = await this.findJob(orgId, id);
    if (job.status !== JobStatus.DRAFT)
      throw new BadRequestException('Only draft jobs can be deleted');
    await this.prisma.jobPosting.delete({ where: { id } });
    return { deleted: true };
  }

  // ── Public careers ────────────────────────────────────────────────────────────

  async listPublicJobs(page = 1, limit = 20) {
    const [items, total] = await this.prisma.$transaction([
      this.prisma.jobPosting.findMany({
        where: { status: JobStatus.OPEN, visibility: JobVisibility.PUBLIC },
        select: {
          id: true,
          title: true,
          employmentType: true,
          remoteType: true,
          salaryMin: true,
          salaryMax: true,
          currency: true,
          publishedAt: true,
          department: { select: { name: true } },
          location: { select: { name: true } },
        },
        orderBy: { publishedAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.jobPosting.count({
        where: { status: JobStatus.OPEN, visibility: JobVisibility.PUBLIC },
      }),
    ]);
    return { items, total, page, limit };
  }

  async getPublicJob(id: string) {
    const job = await this.prisma.jobPosting.findFirst({
      where: { id, status: JobStatus.OPEN, visibility: JobVisibility.PUBLIC },
      select: {
        id: true,
        title: true,
        description: true,
        employmentType: true,
        remoteType: true,
        salaryMin: true,
        salaryMax: true,
        currency: true,
        publishedAt: true,
        organization: { select: { name: true, logoUrl: true } },
        department: { select: { name: true } },
        location: { select: { name: true, city: true, country: true } },
      },
    });
    if (!job) throw new NotFoundException('Job not found');
    return job;
  }

  // ── Applications ──────────────────────────────────────────────────────────────

  async applyPublic(jobId: string, dto: PublicApplyDto) {
    const job = await this.prisma.jobPosting.findFirst({
      where: { id: jobId, status: JobStatus.OPEN },
    });
    if (!job) throw new NotFoundException('Job not found or not accepting applications');

    const defaultStage = await this.prisma.pipelineStage.findFirst({
      where: { organizationId: job.organizationId, isDefault: true },
      orderBy: { orderIndex: 'asc' },
    });

    return this.prisma.application.create({
      data: {
        jobPostingId: jobId,
        stageId: defaultStage?.id,
        candidateName: dto.candidateName,
        candidateEmail: dto.candidateEmail,
        candidatePhone: dto.candidatePhone,
        cvCloudinaryPublicId: dto.cvCloudinaryPublicId,
        coverLetter: dto.coverLetter,
        source: dto.source ?? 'careers_page',
        status: ApplicationStatus.ACTIVE,
      },
    });
  }

  async listApplications(organizationId: string | null, dto: ListApplicationsDto) {
    const orgId = this.requireTenant(organizationId);
    const page = dto.page ?? 1;
    const limit = dto.limit ?? 20;

    const where: any = {
      jobPosting: { organizationId: orgId },
      ...(dto.jobPostingId ? { jobPostingId: dto.jobPostingId } : {}),
      ...(dto.stageId ? { stageId: dto.stageId } : {}),
      ...(dto.status ? { status: dto.status } : {}),
      ...(dto.search
        ? {
            OR: [
              { candidateName: { contains: dto.search, mode: 'insensitive' } },
              { candidateEmail: { contains: dto.search, mode: 'insensitive' } },
            ],
          }
        : {}),
    };

    const [items, total] = await this.prisma.$transaction([
      this.prisma.application.findMany({
        where,
        include: {
          jobPosting: { select: { id: true, title: true } },
          stage: { select: { id: true, name: true, color: true } },
        },
        orderBy: { appliedAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.application.count({ where }),
    ]);

    return { items, total, page, limit };
  }

  async getApplication(organizationId: string | null, id: string) {
    const orgId = this.requireTenant(organizationId);
    const app = await this.prisma.application.findFirst({
      where: { id, jobPosting: { organizationId: orgId } },
      include: {
        jobPosting: { select: { id: true, title: true, organizationId: true, departmentId: true, locationId: true } },
        stage: true,
        notes: { orderBy: { createdAt: 'desc' } },
        interviews: {
          include: {
            panelists: { include: { employee: { select: { id: true, firstName: true, lastName: true } } } },
            feedback: true,
          },
          orderBy: { scheduledAt: 'asc' },
        },
        offers: { orderBy: { createdAt: 'desc' } },
      },
    });
    if (!app) throw new NotFoundException('Application not found');
    return app;
  }

  async moveStage(
    organizationId: string | null,
    id: string,
    dto: MoveStageDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    await this.getApplication(orgId, id);
    await this.findStage(orgId, dto.stageId);
    return this.prisma.application.update({ where: { id }, data: { stageId: dto.stageId } });
  }

  async rejectApplication(
    organizationId: string | null,
    id: string,
    dto: RejectApplicationDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    const app = await this.getApplication(orgId, id);
    if (app.status !== ApplicationStatus.ACTIVE)
      throw new BadRequestException('Application is not active');
    return this.prisma.application.update({
      where: { id },
      data: { status: ApplicationStatus.REJECTED, rejectionReason: dto.reason },
    });
  }

  async withdrawApplication(organizationId: string | null, id: string) {
    const orgId = this.requireTenant(organizationId);
    const app = await this.getApplication(orgId, id);
    if (app.status !== ApplicationStatus.ACTIVE)
      throw new BadRequestException('Application is not active');
    return this.prisma.application.update({
      where: { id },
      data: { status: ApplicationStatus.WITHDRAWN },
    });
  }

  // ── Notes ─────────────────────────────────────────────────────────────────────

  async addNote(
    organizationId: string | null,
    applicationId: string,
    authorId: string,
    dto: AddNoteDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    await this.getApplication(orgId, applicationId);
    return this.prisma.applicationNote.create({
      data: { applicationId, authorId, content: dto.content },
    });
  }

  async listNotes(organizationId: string | null, applicationId: string) {
    const orgId = this.requireTenant(organizationId);
    await this.getApplication(orgId, applicationId);
    return this.prisma.applicationNote.findMany({
      where: { applicationId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async deleteNote(
    organizationId: string | null,
    applicationId: string,
    noteId: string,
    userId: string,
  ) {
    const orgId = this.requireTenant(organizationId);
    await this.getApplication(orgId, applicationId);
    const note = await this.prisma.applicationNote.findFirst({
      where: { id: noteId, applicationId },
    });
    if (!note) throw new NotFoundException('Note not found');
    if (note.authorId !== userId)
      throw new BadRequestException('You can only delete your own notes');
    await this.prisma.applicationNote.delete({ where: { id: noteId } });
    return { deleted: true };
  }

  // ── Interviews ────────────────────────────────────────────────────────────────

  async scheduleInterview(
    organizationId: string | null,
    applicationId: string,
    actorId: string,
    dto: ScheduleInterviewDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    await this.getApplication(orgId, applicationId);

    const interview = await this.prisma.interview.create({
      data: {
        applicationId,
        scheduledAt: new Date(dto.scheduledAt),
        durationMinutes: dto.durationMinutes,
        type: dto.type,
        meetingLink: dto.meetingLink,
        location: dto.location,
        createdBy: actorId,
      },
    });

    if (dto.panelistIds?.length) {
      await this.prisma.interviewPanelist.createMany({
        data: dto.panelistIds.map((employeeId) => ({ interviewId: interview.id, employeeId })),
        skipDuplicates: true,
      });
    }

    return this.prisma.interview.findUnique({
      where: { id: interview.id },
      include: {
        panelists: { include: { employee: { select: { id: true, firstName: true, lastName: true } } } },
      },
    });
  }

  async listInterviews(organizationId: string | null, applicationId: string) {
    const orgId = this.requireTenant(organizationId);
    await this.getApplication(orgId, applicationId);
    return this.prisma.interview.findMany({
      where: { applicationId },
      include: {
        panelists: { include: { employee: { select: { id: true, firstName: true, lastName: true } } } },
        feedback: true,
      },
      orderBy: { scheduledAt: 'asc' },
    });
  }

  async updateInterview(
    organizationId: string | null,
    id: string,
    dto: UpdateInterviewDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    const interview = await this.findInterview(orgId, id);
    return this.prisma.interview.update({
      where: { id },
      data: {
        scheduledAt: dto.scheduledAt ? new Date(dto.scheduledAt) : undefined,
        durationMinutes: dto.durationMinutes,
        type: dto.type,
        meetingLink: dto.meetingLink,
        location: dto.location,
        status: dto.status,
      },
    });
  }

  async addPanelists(
    organizationId: string | null,
    interviewId: string,
    dto: AddPanelistsDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    await this.findInterview(orgId, interviewId);
    await this.prisma.interviewPanelist.createMany({
      data: dto.employeeIds.map((employeeId) => ({ interviewId, employeeId })),
      skipDuplicates: true,
    });
    return this.prisma.interview.findUnique({
      where: { id: interviewId },
      include: {
        panelists: { include: { employee: { select: { id: true, firstName: true, lastName: true } } } },
      },
    });
  }

  async removePanelist(
    organizationId: string | null,
    interviewId: string,
    employeeId: string,
  ) {
    const orgId = this.requireTenant(organizationId);
    await this.findInterview(orgId, interviewId);
    await this.prisma.interviewPanelist.delete({
      where: { interviewId_employeeId: { interviewId, employeeId } },
    });
    return { removed: true };
  }

  async submitFeedback(
    organizationId: string | null,
    interviewId: string,
    interviewerId: string,
    dto: SubmitFeedbackDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    await this.findInterview(orgId, interviewId);

    const existing = await this.prisma.interviewFeedback.findFirst({
      where: { interviewId, interviewerId },
    });

    const payload = {
      rating: dto.rating,
      strengths: dto.strengths,
      weaknesses: dto.weaknesses,
      recommendation: dto.recommendation,
      submittedAt: new Date(),
    };

    if (existing) {
      return this.prisma.interviewFeedback.update({ where: { id: existing.id }, data: payload });
    }
    return this.prisma.interviewFeedback.create({
      data: { interviewId, interviewerId, ...payload },
    });
  }

  async listFeedback(organizationId: string | null, interviewId: string) {
    const orgId = this.requireTenant(organizationId);
    await this.findInterview(orgId, interviewId);
    return this.prisma.interviewFeedback.findMany({
      where: { interviewId },
      orderBy: { submittedAt: 'desc' },
    });
  }

  // ── Offers ────────────────────────────────────────────────────────────────────

  async createOffer(
    organizationId: string | null,
    applicationId: string,
    actorId: string,
    dto: CreateOfferDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    await this.getApplication(orgId, applicationId);
    return this.prisma.offer.create({
      data: {
        applicationId,
        salary: dto.salary,
        currency: dto.currency ?? 'USD',
        startDate: new Date(dto.startDate),
        offerLetterCloudinaryPublicId: dto.offerLetterCloudinaryPublicId,
        expiresAt: dto.expiresAt ? new Date(dto.expiresAt) : undefined,
        status: OfferStatus.DRAFT,
        createdBy: actorId,
      },
    });
  }

  async listOffers(organizationId: string | null, applicationId: string) {
    const orgId = this.requireTenant(organizationId);
    await this.getApplication(orgId, applicationId);
    return this.prisma.offer.findMany({
      where: { applicationId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async sendOffer(organizationId: string | null, offerId: string) {
    const orgId = this.requireTenant(organizationId);
    const offer = await this.findOffer(orgId, offerId);
    if (offer.status !== OfferStatus.DRAFT)
      throw new BadRequestException('Only draft offers can be sent');
    return this.prisma.offer.update({
      where: { id: offerId },
      data: { status: OfferStatus.SENT, sentAt: new Date() },
    });
  }

  async acceptOffer(organizationId: string | null, offerId: string) {
    const orgId = this.requireTenant(organizationId);
    const offer = await this.findOffer(orgId, offerId);
    if (offer.status !== OfferStatus.SENT && offer.status !== OfferStatus.VIEWED)
      throw new BadRequestException('Offer cannot be accepted in its current state');
    return this.prisma.offer.update({
      where: { id: offerId },
      data: { status: OfferStatus.ACCEPTED },
    });
  }

  async declineOffer(organizationId: string | null, offerId: string) {
    const orgId = this.requireTenant(organizationId);
    const offer = await this.findOffer(orgId, offerId);
    if (offer.status !== OfferStatus.SENT && offer.status !== OfferStatus.VIEWED)
      throw new BadRequestException('Offer cannot be declined in its current state');
    return this.prisma.offer.update({
      where: { id: offerId },
      data: { status: OfferStatus.DECLINED },
    });
  }

  async signOffer(organizationId: string | null, offerId: string) {
    const orgId = this.requireTenant(organizationId);
    const offer = await this.findOffer(orgId, offerId);
    if (offer.status !== OfferStatus.ACCEPTED && offer.status !== OfferStatus.SENT)
      throw new BadRequestException('Offer must be accepted before signing');
    return this.prisma.offer.update({
      where: { id: offerId },
      data: { status: OfferStatus.SIGNED, signedAt: new Date() },
    });
  }

  // ── Convert to employee ───────────────────────────────────────────────────────

  async convertToEmployee(
    organizationId: string | null,
    applicationId: string,
    actorId: string,
    actorName: string,
    actorRole: string,
    dto: ConvertToEmployeeDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    const app = await this.getApplication(orgId, applicationId);

    if (app.status === ApplicationStatus.HIRED)
      throw new BadRequestException('Application has already been converted');
    if (app.status !== ApplicationStatus.ACTIVE)
      throw new BadRequestException('Only active applications can be converted');

    const job = app.jobPosting;
    const [firstName, ...rest] = app.candidateName.trim().split(' ');
    const lastName = rest.join(' ') || '-';

    const employee = await this.prisma.employee.create({
      data: {
        organizationId: orgId,
        firstName,
        lastName,
        workEmail: app.candidateEmail,
        phone: app.candidatePhone,
        jobTitle: dto.jobTitle ?? job.title,
        departmentId: dto.departmentId ?? job.departmentId,
        locationId: dto.locationId ?? job.locationId,
        payGroupId: dto.payGroupId,
        startDate: new Date(dto.startDate),
        status: EmployeeStatus.ONBOARDING,
      },
    });

    await this.prisma.application.update({
      where: { id: applicationId },
      data: { status: ApplicationStatus.HIRED },
    });

    this.emitAudit({
      organizationId: orgId,
      action: 'recruitment.application.converted',
      resourceType: 'Employee',
      resourceId: employee.id,
      resourceName: `${firstName} ${lastName}`,
      actorId,
      actorName,
      actorRole,
      changes: { applicationId, jobTitle: employee.jobTitle },
    });

    return employee;
  }

  // ── Private helpers ───────────────────────────────────────────────────────────

  private async findStage(orgId: string, id: string) {
    const stage = await this.prisma.pipelineStage.findFirst({
      where: { id, organizationId: orgId },
    });
    if (!stage) throw new NotFoundException('Pipeline stage not found');
    return stage;
  }

  private async findJob(orgId: string, id: string) {
    const job = await this.prisma.jobPosting.findFirst({
      where: { id, organizationId: orgId },
    });
    if (!job) throw new NotFoundException('Job posting not found');
    return job;
  }

  private async findInterview(orgId: string, id: string) {
    const interview = await this.prisma.interview.findFirst({
      where: { id, application: { jobPosting: { organizationId: orgId } } },
    });
    if (!interview) throw new NotFoundException('Interview not found');
    return interview;
  }

  private async findOffer(orgId: string, id: string) {
    const offer = await this.prisma.offer.findFirst({
      where: { id, application: { jobPosting: { organizationId: orgId } } },
    });
    if (!offer) throw new NotFoundException('Offer not found');
    return offer;
  }
}
