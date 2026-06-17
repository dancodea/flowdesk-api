import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import {
  GoalStatus,
  PerformanceReviewStatus,
  ReviewCycleStatus,
  ReviewType,
  Role,
} from '../../generated/prisma/enums';
import { PrismaService } from '../../prisma/prisma.service';
import { AUDIT_EVENT } from '../audit/audit.types';
import type { AuditEvent } from '../audit/audit.types';
import {
  AddCheckinDto,
  CreateCycleDto,
  CreateGoalDto,
  GiveFeedbackDto,
  ListCyclesDto,
  ListGoalsDto,
  ListReviewsDto,
  ManagerSubmitDto,
  SelfSubmitDto,
  UpdateCycleDto,
  UpdateGoalDto,
} from './dto';

const HR_ROLES: Role[] = [Role.ORG_ADMIN, Role.HR_MANAGER];

@Injectable()
export class PerformanceService {
  constructor(
    private readonly prisma: PrismaService,
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

  // ── Cycles ────────────────────────────────────────────────────────────────────

  async createCycle(
    organizationId: string | null,
    actorId: string,
    actorName: string,
    actorRole: string,
    dto: CreateCycleDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    const cycle = await this.prisma.performanceCycle.create({
      data: {
        organizationId: orgId,
        name: dto.name,
        type: dto.type,
        startDate: new Date(dto.startDate),
        endDate: new Date(dto.endDate),
        reviewType: dto.reviewType,
        ratingScale: dto.ratingScale ?? 5,
        status: ReviewCycleStatus.DRAFT,
        createdBy: actorId,
      },
    });
    this.emitAudit({
      organizationId: orgId,
      action: 'performance.cycle.created',
      resourceType: 'PerformanceCycle',
      resourceId: cycle.id,
      resourceName: cycle.name,
      actorId,
      actorName,
      actorRole,
    });
    return cycle;
  }

  listCycles(organizationId: string | null, dto: ListCyclesDto) {
    const orgId = this.requireTenant(organizationId);
    return this.prisma.performanceCycle.findMany({
      where: {
        organizationId: orgId,
        ...(dto.status ? { status: dto.status } : {}),
      },
      orderBy: { startDate: 'desc' },
    });
  }

  async getCycle(organizationId: string | null, id: string) {
    const orgId = this.requireTenant(organizationId);
    const cycle = await this.prisma.performanceCycle.findFirst({
      where: { id, organizationId: orgId },
      include: { _count: { select: { reviews: true } } },
    });
    if (!cycle) throw new NotFoundException('Performance cycle not found');
    return cycle;
  }

  async updateCycle(
    organizationId: string | null,
    id: string,
    dto: UpdateCycleDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    const cycle = await this.findCycle(orgId, id);
    if (cycle.status !== ReviewCycleStatus.DRAFT)
      throw new BadRequestException('Only draft cycles can be edited');
    return this.prisma.performanceCycle.update({
      where: { id },
      data: {
        name: dto.name,
        startDate: dto.startDate ? new Date(dto.startDate) : undefined,
        endDate: dto.endDate ? new Date(dto.endDate) : undefined,
        ratingScale: dto.ratingScale,
      },
    });
  }

  async launchCycle(
    organizationId: string | null,
    id: string,
    actorId: string,
    actorName: string,
    actorRole: string,
  ) {
    const orgId = this.requireTenant(organizationId);
    const cycle = await this.findCycle(orgId, id);
    if (cycle.status !== ReviewCycleStatus.DRAFT)
      throw new BadRequestException('Only draft cycles can be launched');

    // Create a review for every active employee in the org.
    const employees = await this.prisma.employee.findMany({
      where: { organizationId: orgId, deletedAt: null },
      select: { id: true, managerId: true },
    });

    const initialStatus =
      cycle.reviewType === ReviewType.MANAGER_ONLY
        ? PerformanceReviewStatus.PENDING_MANAGER
        : PerformanceReviewStatus.PENDING_SELF;

    await this.prisma.performanceReview.createMany({
      data: employees.map((e) => ({
        cycleId: id,
        employeeId: e.id,
        managerId: e.managerId,
        status: initialStatus,
      })),
      skipDuplicates: true,
    });

    const updated = await this.prisma.performanceCycle.update({
      where: { id },
      data: { status: ReviewCycleStatus.ACTIVE, launchedAt: new Date() },
    });

    this.emitAudit({
      organizationId: orgId,
      action: 'performance.cycle.launched',
      resourceType: 'PerformanceCycle',
      resourceId: id,
      actorId,
      actorName,
      actorRole,
      changes: { employeeCount: employees.length },
    });

    return updated;
  }

  async closeCycle(
    organizationId: string | null,
    id: string,
    actorId: string,
    actorName: string,
    actorRole: string,
  ) {
    const orgId = this.requireTenant(organizationId);
    const cycle = await this.findCycle(orgId, id);
    if (cycle.status !== ReviewCycleStatus.ACTIVE)
      throw new BadRequestException('Only active cycles can be closed');

    // Archive any incomplete reviews.
    await this.prisma.performanceReview.updateMany({
      where: {
        cycleId: id,
        status: {
          notIn: [
            PerformanceReviewStatus.COMPLETED,
            PerformanceReviewStatus.ARCHIVED,
          ],
        },
      },
      data: { status: PerformanceReviewStatus.ARCHIVED },
    });

    const updated = await this.prisma.performanceCycle.update({
      where: { id },
      data: { status: ReviewCycleStatus.CLOSED, closedAt: new Date() },
    });

    this.emitAudit({
      organizationId: orgId,
      action: 'performance.cycle.closed',
      resourceType: 'PerformanceCycle',
      resourceId: id,
      actorId,
      actorName,
      actorRole,
    });

    return updated;
  }

  // ── Reviews ───────────────────────────────────────────────────────────────────

  async listReviews(
    organizationId: string | null,
    cycleId: string,
    userId: string,
    role: Role,
    dto: ListReviewsDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    await this.findCycle(orgId, cycleId);

    let employeeId = dto.employeeId;
    if (!HR_ROLES.includes(role)) {
      const emp = await this.prisma.employee.findFirst({
        where: { userId, organizationId: orgId, deletedAt: null },
      });
      employeeId = emp?.id;
    }

    return this.prisma.performanceReview.findMany({
      where: {
        cycleId,
        ...(employeeId ? { employeeId } : {}),
      },
      include: {
        employee: { select: { id: true, firstName: true, lastName: true, avatarUrl: true } },
      },
      orderBy: { createdAt: 'asc' },
    });
  }

  async getReview(organizationId: string | null, id: string) {
    const orgId = this.requireTenant(organizationId);
    const review = await this.prisma.performanceReview.findFirst({
      where: { id, cycle: { organizationId: orgId } },
      include: {
        cycle: { select: { id: true, name: true, reviewType: true, ratingScale: true } },
        employee: { select: { id: true, firstName: true, lastName: true } },
      },
    });
    if (!review) throw new NotFoundException('Review not found');
    return review;
  }

  async selfSubmit(
    organizationId: string | null,
    reviewId: string,
    userId: string,
    dto: SelfSubmitDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    const review = await this.getReview(orgId, reviewId);

    if (review.status !== PerformanceReviewStatus.PENDING_SELF)
      throw new BadRequestException('Self-review is not currently required');

    // Verify the current user is the employee on this review.
    const emp = await this.prisma.employee.findFirst({
      where: { userId, organizationId: orgId, deletedAt: null },
    });
    if (!emp || emp.id !== review.employeeId)
      throw new BadRequestException('You can only submit your own self-review');

    return this.prisma.performanceReview.update({
      where: { id: reviewId },
      data: {
        selfReviewData: { responses: dto.responses, comments: dto.comments } as any,
        selfSubmittedAt: new Date(),
        status: PerformanceReviewStatus.PENDING_MANAGER,
      },
    });
  }

  async managerSubmit(
    organizationId: string | null,
    reviewId: string,
    dto: ManagerSubmitDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    const review = await this.getReview(orgId, reviewId);

    if (review.status !== PerformanceReviewStatus.PENDING_MANAGER)
      throw new BadRequestException('Manager review is not currently required');

    return this.prisma.performanceReview.update({
      where: { id: reviewId },
      data: {
        managerReviewData: { responses: dto.responses, comments: dto.comments } as any,
        overallRating: dto.overallRating,
        overallLabel: dto.overallLabel,
        managerSubmittedAt: new Date(),
        status: PerformanceReviewStatus.PENDING_ACKNOWLEDGEMENT,
      },
    });
  }

  async acknowledge(
    organizationId: string | null,
    reviewId: string,
    userId: string,
  ) {
    const orgId = this.requireTenant(organizationId);
    const review = await this.getReview(orgId, reviewId);

    if (review.status !== PerformanceReviewStatus.PENDING_ACKNOWLEDGEMENT)
      throw new BadRequestException('Review is not pending acknowledgement');

    const emp = await this.prisma.employee.findFirst({
      where: { userId, organizationId: orgId, deletedAt: null },
    });
    if (!emp || emp.id !== review.employeeId)
      throw new BadRequestException('You can only acknowledge your own review');

    return this.prisma.performanceReview.update({
      where: { id: reviewId },
      data: {
        acknowledgedAt: new Date(),
        status: PerformanceReviewStatus.COMPLETED,
      },
    });
  }

  // ── Goals ─────────────────────────────────────────────────────────────────────

  async createGoal(
    organizationId: string | null,
    userId: string,
    dto: CreateGoalDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    const emp = await this.prisma.employee.findFirst({
      where: { userId, organizationId: orgId, deletedAt: null },
    });
    if (!emp) throw new NotFoundException('Employee record not found');

    return this.prisma.goal.create({
      data: {
        organizationId: orgId,
        ownerId: emp.id,
        cycleId: dto.cycleId,
        title: dto.title,
        description: dto.description,
        metric: dto.metric,
        target: dto.target,
        dueDate: dto.dueDate ? new Date(dto.dueDate) : undefined,
        status: GoalStatus.ON_TRACK,
      },
    });
  }

  async listGoals(organizationId: string | null, userId: string, role: Role, dto: ListGoalsDto) {
    const orgId = this.requireTenant(organizationId);
    const page = dto.page ?? 1;
    const limit = dto.limit ?? 20;

    let ownerId = dto.ownerId;
    if (!HR_ROLES.includes(role)) {
      const emp = await this.prisma.employee.findFirst({
        where: { userId, organizationId: orgId, deletedAt: null },
      });
      ownerId = emp?.id;
    }

    const where: any = {
      organizationId: orgId,
      ...(ownerId ? { ownerId } : {}),
      ...(dto.cycleId ? { cycleId: dto.cycleId } : {}),
      ...(dto.status ? { status: dto.status } : {}),
    };

    const [items, total] = await this.prisma.$transaction([
      this.prisma.goal.findMany({
        where,
        include: {
          owner: { select: { id: true, firstName: true, lastName: true } },
          _count: { select: { checkins: true } },
        },
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.goal.count({ where }),
    ]);

    return { items, total, page, limit };
  }

  async getGoal(organizationId: string | null, id: string) {
    const orgId = this.requireTenant(organizationId);
    const goal = await this.prisma.goal.findFirst({
      where: { id, organizationId: orgId },
      include: {
        owner: { select: { id: true, firstName: true, lastName: true } },
        checkins: { orderBy: { createdAt: 'desc' } },
      },
    });
    if (!goal) throw new NotFoundException('Goal not found');
    return goal;
  }

  async updateGoal(
    organizationId: string | null,
    id: string,
    userId: string,
    dto: UpdateGoalDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    const goal = await this.getGoal(orgId, id);

    const emp = await this.prisma.employee.findFirst({
      where: { userId, organizationId: orgId, deletedAt: null },
    });
    if (!emp || (goal.ownerId !== emp.id && !HR_ROLES.includes(emp.userId as any)))
      throw new BadRequestException('You can only update your own goals');

    return this.prisma.goal.update({
      where: { id },
      data: {
        title: dto.title,
        description: dto.description,
        metric: dto.metric,
        target: dto.target,
        currentProgress: dto.currentProgress,
        dueDate: dto.dueDate ? new Date(dto.dueDate) : undefined,
        status: dto.status,
      },
    });
  }

  async deleteGoal(organizationId: string | null, id: string, userId: string) {
    const orgId = this.requireTenant(organizationId);
    const goal = await this.getGoal(orgId, id);

    const emp = await this.prisma.employee.findFirst({
      where: { userId, organizationId: orgId, deletedAt: null },
    });
    if (!emp || goal.ownerId !== emp.id)
      throw new BadRequestException('You can only delete your own goals');

    await this.prisma.goal.delete({ where: { id } });
    return { deleted: true };
  }

  async addCheckin(
    organizationId: string | null,
    goalId: string,
    userId: string,
    dto: AddCheckinDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    await this.getGoal(orgId, goalId);

    const emp = await this.prisma.employee.findFirst({
      where: { userId, organizationId: orgId, deletedAt: null },
    });
    if (!emp) throw new NotFoundException('Employee record not found');

    const [checkin] = await this.prisma.$transaction([
      this.prisma.goalCheckin.create({
        data: {
          goalId,
          progress: dto.progress,
          comment: dto.comment,
          checkedInBy: emp.id,
        },
      }),
      // Update goal's current progress.
      this.prisma.goal.update({
        where: { id: goalId },
        data: { currentProgress: dto.progress },
      }),
    ]);

    return checkin;
  }

  listCheckins(organizationId: string | null, goalId: string) {
    const orgId = this.requireTenant(organizationId);
    return this.prisma.goalCheckin.findMany({
      where: { goalId, goal: { organizationId: orgId } },
      orderBy: { createdAt: 'desc' },
    });
  }

  // ── Continuous Feedback ───────────────────────────────────────────────────────

  async giveFeedback(
    organizationId: string | null,
    userId: string,
    dto: GiveFeedbackDto,
  ) {
    const orgId = this.requireTenant(organizationId);

    const fromEmp = await this.prisma.employee.findFirst({
      where: { userId, organizationId: orgId, deletedAt: null },
    });
    if (!fromEmp) throw new NotFoundException('Employee record not found');

    const toEmp = await this.prisma.employee.findFirst({
      where: { id: dto.toEmployeeId, organizationId: orgId, deletedAt: null },
    });
    if (!toEmp) throw new NotFoundException('Recipient employee not found');

    if (fromEmp.id === toEmp.id)
      throw new BadRequestException('You cannot give feedback to yourself');

    return this.prisma.continuousFeedback.create({
      data: {
        organizationId: orgId,
        fromEmployeeId: dto.isAnonymous ? null : fromEmp.id,
        toEmployeeId: toEmp.id,
        message: dto.message,
        isAnonymous: dto.isAnonymous ?? false,
      },
    });
  }

  async receivedFeedback(organizationId: string | null, userId: string) {
    const orgId = this.requireTenant(organizationId);
    const emp = await this.prisma.employee.findFirst({
      where: { userId, organizationId: orgId, deletedAt: null },
    });
    if (!emp) throw new NotFoundException('Employee record not found');

    return this.prisma.continuousFeedback.findMany({
      where: { toEmployeeId: emp.id },
      select: {
        id: true,
        message: true,
        isAnonymous: true,
        createdAt: true,
        fromEmployee: {
          select: { id: true, firstName: true, lastName: true, avatarUrl: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async givenFeedback(organizationId: string | null, userId: string) {
    const orgId = this.requireTenant(organizationId);
    const emp = await this.prisma.employee.findFirst({
      where: { userId, organizationId: orgId, deletedAt: null },
    });
    if (!emp) throw new NotFoundException('Employee record not found');

    return this.prisma.continuousFeedback.findMany({
      where: { fromEmployeeId: emp.id, organizationId: orgId },
      include: {
        toEmployee: { select: { id: true, firstName: true, lastName: true, avatarUrl: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  // ── Private helpers ───────────────────────────────────────────────────────────

  private async findCycle(orgId: string, id: string) {
    const cycle = await this.prisma.performanceCycle.findFirst({
      where: { id, organizationId: orgId },
    });
    if (!cycle) throw new NotFoundException('Performance cycle not found');
    return cycle;
  }
}
