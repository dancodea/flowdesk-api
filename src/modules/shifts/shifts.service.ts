import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { PrismaService } from '../../prisma/prisma.service';
import { AUDIT_EVENT } from '../audit/audit.types';
import type { AuditEvent } from '../audit/audit.types';
import {
  AssignShiftDto,
  BulkAssignShiftDto,
  CreateShiftTemplateDto,
  ListSchedulesDto,
  UpdateShiftTemplateDto,
} from './dto';

@Injectable()
export class ShiftsService {
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

  // ── Shift Templates ───────────────────────────────────────────────────────────

  async createTemplate(
    organizationId: string | null,
    actorId: string,
    actorName: string,
    actorRole: string,
    dto: CreateShiftTemplateDto,
  ) {
    const orgId = this.requireTenant(organizationId);

    const template = await this.prisma.shiftTemplate.create({
      data: {
        organizationId: orgId,
        name: dto.name,
        startTime: this.parseTime(dto.startTime),
        endTime: this.parseTime(dto.endTime),
        breakMinutes: dto.breakMinutes ?? 0,
        color: dto.color,
      },
    });

    this.emitAudit({
      organizationId: orgId,
      action: 'shift.template.created',
      resourceType: 'ShiftTemplate',
      resourceId: template.id,
      resourceName: template.name,
      actorId,
      actorName,
      actorRole,
    });

    return template;
  }

  listTemplates(organizationId: string | null) {
    const orgId = this.requireTenant(organizationId);
    return this.prisma.shiftTemplate.findMany({
      where: { organizationId: orgId },
      orderBy: { name: 'asc' },
    });
  }

  async getTemplate(organizationId: string | null, id: string) {
    const orgId = this.requireTenant(organizationId);
    const template = await this.prisma.shiftTemplate.findFirst({
      where: { id, organizationId: orgId },
      include: { schedules: { take: 5, orderBy: { date: 'desc' } } },
    });
    if (!template) throw new NotFoundException('Shift template not found');
    return template;
  }

  async updateTemplate(
    organizationId: string | null,
    id: string,
    actorId: string,
    actorName: string,
    actorRole: string,
    dto: UpdateShiftTemplateDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    await this.getTemplate(orgId, id);

    const updated = await this.prisma.shiftTemplate.update({
      where: { id },
      data: {
        name: dto.name,
        startTime: dto.startTime ? this.parseTime(dto.startTime) : undefined,
        endTime: dto.endTime ? this.parseTime(dto.endTime) : undefined,
        breakMinutes: dto.breakMinutes,
        color: dto.color,
      },
    });

    this.emitAudit({
      organizationId: orgId,
      action: 'shift.template.updated',
      resourceType: 'ShiftTemplate',
      resourceId: id,
      resourceName: updated.name,
      actorId,
      actorName,
      actorRole,
    });

    return updated;
  }

  async deleteTemplate(
    organizationId: string | null,
    id: string,
    actorId: string,
    actorName: string,
    actorRole: string,
  ) {
    const orgId = this.requireTenant(organizationId);
    await this.getTemplate(orgId, id);
    await this.prisma.shiftTemplate.delete({ where: { id } });

    this.emitAudit({
      organizationId: orgId,
      action: 'shift.template.deleted',
      resourceType: 'ShiftTemplate',
      resourceId: id,
      actorId,
      actorName,
      actorRole,
    });

    return { deleted: true };
  }

  // ── Shift Schedules ───────────────────────────────────────────────────────────

  async assignShift(
    organizationId: string | null,
    actorId: string,
    actorName: string,
    actorRole: string,
    dto: AssignShiftDto,
  ) {
    const orgId = this.requireTenant(organizationId);

    const employee = await this.prisma.employee.findFirst({
      where: { id: dto.employeeId, organizationId: orgId, deletedAt: null },
    });
    if (!employee) throw new NotFoundException('Employee not found');

    if (dto.templateId) {
      const tmpl = await this.prisma.shiftTemplate.findFirst({
        where: { id: dto.templateId, organizationId: orgId },
      });
      if (!tmpl) throw new NotFoundException('Shift template not found');
    }

    if (!dto.templateId && (!dto.startTime || !dto.endTime))
      throw new BadRequestException('Either templateId or startTime+endTime is required');

    const date = new Date(dto.date);

    const schedule = await this.prisma.shiftSchedule.upsert({
      where: { employeeId_date: { employeeId: dto.employeeId, date } },
      create: {
        organizationId: orgId,
        employeeId: dto.employeeId,
        date,
        templateId: dto.templateId,
        startTime: dto.startTime ? this.parseTime(dto.startTime) : undefined,
        endTime: dto.endTime ? this.parseTime(dto.endTime) : undefined,
        note: dto.note,
      },
      update: {
        templateId: dto.templateId,
        startTime: dto.startTime ? this.parseTime(dto.startTime) : undefined,
        endTime: dto.endTime ? this.parseTime(dto.endTime) : undefined,
        note: dto.note,
      },
      include: {
        template: { select: { id: true, name: true, color: true } },
        employee: { select: { id: true, firstName: true, lastName: true } },
      },
    });

    this.emitAudit({
      organizationId: orgId,
      action: 'shift.schedule.assigned',
      resourceType: 'ShiftSchedule',
      resourceId: schedule.id,
      actorId,
      actorName,
      actorRole,
      changes: { employeeId: dto.employeeId, date: dto.date },
    });

    return schedule;
  }

  async bulkAssignShift(
    organizationId: string | null,
    actorId: string,
    actorName: string,
    actorRole: string,
    dto: BulkAssignShiftDto,
  ) {
    const orgId = this.requireTenant(organizationId);

    if (!dto.templateId && (!dto.startTime || !dto.endTime))
      throw new BadRequestException('Either templateId or startTime+endTime is required');

    const date = new Date(dto.date);
    const results: any[] = [];

    for (const employeeId of dto.employeeIds) {
      const employee = await this.prisma.employee.findFirst({
        where: { id: employeeId, organizationId: orgId, deletedAt: null },
      });
      if (!employee) continue;

      const schedule = await this.prisma.shiftSchedule.upsert({
        where: { employeeId_date: { employeeId, date } },
        create: {
          organizationId: orgId,
          employeeId,
          date,
          templateId: dto.templateId,
          startTime: dto.startTime ? this.parseTime(dto.startTime) : undefined,
          endTime: dto.endTime ? this.parseTime(dto.endTime) : undefined,
          note: dto.note,
        },
        update: {
          templateId: dto.templateId,
          startTime: dto.startTime ? this.parseTime(dto.startTime) : undefined,
          endTime: dto.endTime ? this.parseTime(dto.endTime) : undefined,
          note: dto.note,
        },
      });
      results.push(schedule);
    }

    this.emitAudit({
      organizationId: orgId,
      action: 'shift.schedule.bulk_assigned',
      resourceType: 'ShiftSchedule',
      resourceId: '',
      actorId,
      actorName,
      actorRole,
      changes: { employeeCount: results.length, date: dto.date },
    });

    return { assigned: results.length, schedules: results };
  }

  async listSchedules(organizationId: string | null, dto: ListSchedulesDto) {
    const orgId = this.requireTenant(organizationId);

    const where: any = {
      organizationId: orgId,
      ...(dto.employeeId ? { employeeId: dto.employeeId } : {}),
      ...(dto.from || dto.to
        ? {
            date: {
              ...(dto.from ? { gte: new Date(dto.from) } : {}),
              ...(dto.to ? { lte: new Date(dto.to) } : {}),
            },
          }
        : {}),
      ...(dto.departmentId
        ? { employee: { departmentId: dto.departmentId } }
        : {}),
    };

    return this.prisma.shiftSchedule.findMany({
      where,
      include: {
        template: { select: { id: true, name: true, color: true, startTime: true, endTime: true } },
        employee: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            avatarUrl: true,
            department: { select: { id: true, name: true } },
          },
        },
      },
      orderBy: [{ date: 'asc' }, { employee: { firstName: 'asc' } }],
    });
  }

  async deleteSchedule(
    organizationId: string | null,
    id: string,
    actorId: string,
    actorName: string,
    actorRole: string,
  ) {
    const orgId = this.requireTenant(organizationId);
    const schedule = await this.prisma.shiftSchedule.findFirst({
      where: { id, organizationId: orgId },
    });
    if (!schedule) throw new NotFoundException('Shift schedule not found');
    await this.prisma.shiftSchedule.delete({ where: { id } });

    this.emitAudit({
      organizationId: orgId,
      action: 'shift.schedule.deleted',
      resourceType: 'ShiftSchedule',
      resourceId: id,
      actorId,
      actorName,
      actorRole,
    });

    return { deleted: true };
  }

  // ── Helpers ───────────────────────────────────────────────────────────────────

  /**
   * Parse "HH:mm" into a Date Prisma can store as @db.Time.
   * Prisma Time fields expect a full DateTime; the date portion is irrelevant.
   */
  private parseTime(hhmm: string): Date {
    const [h, m] = hhmm.split(':').map(Number);
    if (
      isNaN(h) || isNaN(m) ||
      h < 0 || h > 23 || m < 0 || m > 59
    ) {
      throw new BadRequestException(`Invalid time format: "${hhmm}". Expected HH:mm`);
    }
    const d = new Date(1970, 0, 1, h, m, 0, 0);
    return d;
  }
}
