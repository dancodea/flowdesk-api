import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { ChecklistStatus, OnboardingAssignee, Role } from '../../generated/prisma/enums';
import { PrismaService } from '../../prisma/prisma.service';
import { AUDIT_EVENT } from '../audit/audit.types';
import type { AuditEvent } from '../audit/audit.types';
import {
  AssignTaskDto,
  CompleteTaskDto,
  CreateChecklistDto,
  CreateTemplateDto,
  ListChecklistsDto,
} from './dto';

const HR_ROLES: Role[] = [Role.ORG_ADMIN, Role.HR_MANAGER];

@Injectable()
export class OnboardingService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly events: EventEmitter2,
  ) {}

  private requireTenant(organizationId: string | null): string {
    if (!organizationId)
      throw new BadRequestException('No organization context on this account');
    return organizationId;
  }

  private emitAudit(event: AuditEvent) {
    this.events.emit(AUDIT_EVENT, event);
  }

  // ── Templates ─────────────────────────────────────────────────────────────────

  async createTemplate(
    organizationId: string | null,
    actorId: string,
    actorName: string,
    actorRole: string,
    dto: CreateTemplateDto,
  ) {
    const orgId = this.requireTenant(organizationId);

    const template = await this.prisma.onboardingTemplate.create({
      data: {
        organizationId: orgId,
        name: dto.name,
        description: dto.description,
        createdBy: actorId,
        tasks: {
          create: dto.tasks.map((t, idx) => ({
            title: t.title,
            description: t.description,
            dueAfterDays: t.dueAfterDays ?? 1,
            assignTo: t.assignTo ?? OnboardingAssignee.EMPLOYEE,
            orderIndex: t.orderIndex ?? idx,
          })),
        },
      },
      include: { tasks: { orderBy: { orderIndex: 'asc' } } },
    });

    this.emitAudit({
      organizationId: orgId,
      action: 'onboarding.template.created',
      resourceType: 'OnboardingTemplate',
      resourceId: template.id,
      resourceName: template.name,
      actorId,
      actorName,
      actorRole,
    });

    return template;
  }

  async listTemplates(organizationId: string | null) {
    const orgId = this.requireTenant(organizationId);
    return this.prisma.onboardingTemplate.findMany({
      where: { organizationId: orgId },
      include: {
        tasks: { orderBy: { orderIndex: 'asc' } },
        _count: { select: { checklists: true } },
      },
      orderBy: { createdAt: 'asc' },
    });
  }

  // ── Checklists ────────────────────────────────────────────────────────────────

  async assignChecklist(
    organizationId: string | null,
    actorId: string,
    dto: CreateChecklistDto,
  ) {
    const orgId = this.requireTenant(organizationId);

    // Verify employee belongs to this org.
    const employee = await this.prisma.employee.findFirst({
      where: { id: dto.employeeId, organizationId: orgId, deletedAt: null },
    });
    if (!employee) throw new NotFoundException('Employee not found');

    // If no templateId supplied, use the first template in the org.
    let templateId = dto.templateId;
    if (!templateId) {
      const first = await this.prisma.onboardingTemplate.findFirst({
        where: { organizationId: orgId },
        orderBy: { createdAt: 'asc' },
      });
      templateId = first?.id;
    }

    return this.buildChecklist(orgId, dto.employeeId, templateId ?? null);
  }

  async listChecklists(organizationId: string | null, dto: ListChecklistsDto) {
    const orgId = this.requireTenant(organizationId);

    const where = {
      employee: { organizationId: orgId },
      ...(dto.status ? { status: dto.status } : {}),
      ...(dto.employeeId ? { employeeId: dto.employeeId } : {}),
    };

    return this.prisma.onboardingChecklist.findMany({
      where,
      include: {
        employee: {
          select: { id: true, firstName: true, lastName: true, avatarUrl: true },
        },
        template: { select: { id: true, name: true } },
        tasks: {
          orderBy: { orderIndex: 'asc' },
          select: {
            id: true,
            title: true,
            status: true,
            dueDate: true,
            assignTo: true,
          },
        },
        _count: { select: { tasks: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getMyChecklist(userId: string) {
    const employee = await this.prisma.employee.findFirst({
      where: { userId, deletedAt: null },
    });
    if (!employee)
      throw new NotFoundException('No employee record linked to this account');

    const checklist = await this.prisma.onboardingChecklist.findFirst({
      where: { employeeId: employee.id, status: { not: ChecklistStatus.COMPLETED } },
      include: {
        template: { select: { id: true, name: true } },
        tasks: { orderBy: { orderIndex: 'asc' } },
      },
      orderBy: { createdAt: 'desc' },
    });

    if (!checklist)
      throw new NotFoundException('No active onboarding checklist found');

    return checklist;
  }

  // ── Tasks ─────────────────────────────────────────────────────────────────────

  async completeTask(
    userId: string,
    userRole: Role,
    taskId: string,
    dto: CompleteTaskDto,
  ) {
    const task = await this.prisma.onboardingTask.findUnique({
      where: { id: taskId },
      include: { checklist: { include: { employee: { select: { userId: true } } } } },
    });
    if (!task) throw new NotFoundException('Task not found');

    // HR can complete any task; employees only their own checklist's tasks.
    if (!HR_ROLES.includes(userRole)) {
      if (task.checklist.employee.userId !== userId)
        throw new ForbiddenException('You can only complete your own onboarding tasks');
    }

    if (task.status === 'COMPLETED')
      throw new BadRequestException('Task is already completed');

    const updated = await this.prisma.onboardingTask.update({
      where: { id: taskId },
      data: {
        status: 'COMPLETED',
        completedAt: new Date(),
        note: dto.note,
      },
    });

    // Check if all tasks in the checklist are done → mark checklist COMPLETED.
    await this.syncChecklistStatus(task.checklistId);

    // Emit a WebSocket event for HR dashboards.
    this.events.emit('onboarding.task_completed', {
      taskId,
      employeeId: task.checklist.employee,
    });

    return updated;
  }

  async assignTask(
    organizationId: string | null,
    taskId: string,
    actorId: string,
    dto: AssignTaskDto,
  ) {
    const orgId = this.requireTenant(organizationId);

    const task = await this.prisma.onboardingTask.findUnique({
      where: { id: taskId },
      include: { checklist: { include: { employee: { select: { organizationId: true } } } } },
    });
    if (!task) throw new NotFoundException('Task not found');
    if (task.checklist.employee.organizationId !== orgId)
      throw new ForbiddenException('Access denied');

    // Verify the target user exists in the org.
    const user = await this.prisma.user.findFirst({
      where: { id: dto.assignedTo, organizationId: orgId },
    });
    if (!user) throw new NotFoundException('Target user not found in this organization');

    return this.prisma.onboardingTask.update({
      where: { id: taskId },
      data: { assignedTo: dto.assignedTo },
    });
  }

  // ── Auto-create on employee create (called by EmployeesService) ───────────────

  async autoCreateChecklist(organizationId: string, employeeId: string) {
    const template = await this.prisma.onboardingTemplate.findFirst({
      where: { organizationId },
      orderBy: { createdAt: 'asc' },
    });

    // No templates configured yet — skip silently.
    if (!template) return null;

    return this.buildChecklist(organizationId, employeeId, template.id);
  }

  // ── Private ───────────────────────────────────────────────────────────────────

  private async buildChecklist(
    orgId: string,
    employeeId: string,
    templateId: string | null,
  ) {
    // Fetch template tasks if a template is linked.
    const templateTasks = templateId
      ? await this.prisma.onboardingTemplateTask.findMany({
          where: { templateId },
          orderBy: { orderIndex: 'asc' },
        })
      : [];

    const employee = await this.prisma.employee.findUnique({
      where: { id: employeeId },
      select: { startDate: true },
    });

    const checklist = await this.prisma.onboardingChecklist.create({
      data: {
        employeeId,
        templateId,
        status: ChecklistStatus.IN_PROGRESS,
        tasks: {
          create: templateTasks.map((t) => ({
            title: t.title,
            description: t.description,
            assignTo: t.assignTo,
            orderIndex: t.orderIndex,
            dueDate: employee?.startDate
              ? this.addDays(employee.startDate, t.dueAfterDays)
              : undefined,
            status: 'PENDING',
          })),
        },
      },
      include: {
        tasks: { orderBy: { orderIndex: 'asc' } },
        template: { select: { id: true, name: true } },
      },
    });

    return checklist;
  }

  private addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  private async syncChecklistStatus(checklistId: string) {
    const [total, completed] = await this.prisma.$transaction([
      this.prisma.onboardingTask.count({ where: { checklistId } }),
      this.prisma.onboardingTask.count({ where: { checklistId, status: 'COMPLETED' } }),
    ]);

    if (total > 0 && total === completed) {
      await this.prisma.onboardingChecklist.update({
        where: { id: checklistId },
        data: { status: ChecklistStatus.COMPLETED },
      });
    }
  }
}
