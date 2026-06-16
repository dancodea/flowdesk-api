import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import * as ExcelJS from 'exceljs';
import { v2 as cloudinary } from 'cloudinary';
import type { Prisma } from '../../generated/prisma/client';
import { InvitationStatus, Role } from '../../generated/prisma/enums';
import { PrismaService } from '../../prisma/prisma.service';
import { AuthMailService } from '../auth/auth-mail.service';
import { NotificationsService } from '../notifications/notifications.service';
import { OnboardingService } from '../onboarding/onboarding.service';
import { generateOneTimeToken } from '../auth/token.util';
import { AUDIT_EVENT } from '../audit/audit.types';
import type { AuditEvent } from '../audit/audit.types';
import {
  AddDocumentDto,
  CreateEmployeeDto,
  ListEmployeesDto,
  SelfUpdateDto,
  UpdateEmployeeDto,
} from './dto';

const INVITE_TTL_MS = 7 * 24 * 60 * 60 * 1000;

// Fields tracked for role-change history.
const TRACKED_JOB_FIELDS = [
  'jobTitle',
  'departmentId',
  'locationId',
  'managerId',
  'employmentType',
  'baseSalary',
  'hourlyRate',
  'salaryType',
  'payGroupId',
] as const;

// Safe employee projection for list views (omits banking details by default).
const LIST_SELECT = {
  id: true,
  employeeNumber: true,
  firstName: true,
  lastName: true,
  workEmail: true,
  avatarUrl: true,
  jobTitle: true,
  status: true,
  employmentType: true,
  startDate: true,
  department: { select: { id: true, name: true } },
  location: { select: { id: true, name: true } },
};

@Injectable()
export class EmployeesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mail: AuthMailService,
    private readonly notifications: NotificationsService,
    private readonly onboarding: OnboardingService,
    private readonly events: EventEmitter2,
  ) {}

  private requireTenant(organizationId: string | null): string {
    if (!organizationId)
      throw new BadRequestException('No organization context on this account');
    return organizationId;
  }

  private async findInOrg(organizationId: string, id: string) {
    const employee = await this.prisma.employee.findFirst({
      where: { id, organizationId, deletedAt: null },
    });
    if (!employee) throw new NotFoundException('Employee not found');
    return employee;
  }

  private async employeeForUser(userId: string) {
    return this.prisma.employee.findFirst({
      where: { userId, deletedAt: null },
    });
  }

  private emitAudit(event: AuditEvent) {
    this.events.emit(AUDIT_EVENT, event);
  }

  // ── Create ───────────────────────────────────────────────────────────────────
  async create(
    organizationId: string | null,
    actorId: string,
    actorName: string,
    actorRole: string,
    dto: CreateEmployeeDto,
  ) {
    const orgId = this.requireTenant(organizationId);

    // Unique workEmail within the org.
    const conflict = await this.prisma.employee.findFirst({
      where: { organizationId: orgId, workEmail: dto.workEmail, deletedAt: null },
    });
    if (conflict)
      throw new BadRequestException(
        'An employee with this work email already exists',
      );

    // Sequential employee number.
    const count = await this.prisma.employee.count({
      where: { organizationId: orgId },
    });
    const employeeNumber = `EMP-${String(count + 1).padStart(4, '0')}`;

    const employee = await this.prisma.employee.create({
      data: {
        organizationId: orgId,
        employeeNumber,
        firstName: dto.firstName,
        lastName: dto.lastName,
        workEmail: dto.workEmail,
        personalEmail: dto.personalEmail,
        phone: dto.phone,
        dateOfBirth: dto.dateOfBirth ? new Date(dto.dateOfBirth) : undefined,
        gender: dto.gender,
        nationality: dto.nationality,
        address: (dto.address ?? undefined) as Prisma.InputJsonValue | undefined,
        emergencyContact: (dto.emergencyContact ?? undefined) as Prisma.InputJsonValue | undefined,
        avatarUrl: dto.avatarUrl,
        jobTitle: dto.jobTitle,
        departmentId: dto.departmentId,
        locationId: dto.locationId,
        managerId: dto.managerId,
        employmentType: dto.employmentType,
        workScheduleId: dto.workScheduleId,
        startDate: new Date(dto.startDate),
        probationEndDate: dto.probationEndDate
          ? new Date(dto.probationEndDate)
          : undefined,
        salaryType: dto.salaryType,
        baseSalary: dto.baseSalary,
        hourlyRate: dto.hourlyRate,
        currency: dto.currency,
        payGroupId: dto.payGroupId,
        bankName: dto.bankName,
        bankAccountNumber: dto.bankAccountNumber,
        bankRoutingNumber: dto.bankRoutingNumber,
        paymentMethod: dto.paymentMethod,
        status: 'ONBOARDING',
      },
      include: {
        department: { select: { id: true, name: true } },
        location: { select: { id: true, name: true } },
      },
    });

    this.emitAudit({
      organizationId: orgId,
      action: 'employee.created',
      resourceType: 'Employee',
      resourceId: employee.id,
      resourceName: `${employee.firstName} ${employee.lastName}`,
      actorId,
      actorName,
      actorRole,
    });

    // Send portal invite automatically on creation.
    await this.createInvitation(orgId, employee.id, actorId).catch(() => null);

    // Auto-generate onboarding checklist from the org's default template.
    await this.onboarding.autoCreateChecklist(orgId, employee.id).catch(() => null);

    // Notify manager if assigned.
    if (dto.managerId) {
      await this.notifyManager(orgId, dto.managerId, employee).catch(() => null);
    }

    return employee;
  }

  // ── List ─────────────────────────────────────────────────────────────────────
  async findAll(organizationId: string | null, dto: ListEmployeesDto) {
    const orgId = this.requireTenant(organizationId);

    const where: Record<string, unknown> = {
      organizationId: orgId,
      deletedAt: null,
      ...(dto.departmentId ? { departmentId: dto.departmentId } : {}),
      ...(dto.locationId ? { locationId: dto.locationId } : {}),
      ...(dto.employmentType ? { employmentType: dto.employmentType } : {}),
      ...(dto.status ? { status: dto.status } : {}),
      ...(dto.search
        ? {
            OR: [
              { firstName: { contains: dto.search, mode: 'insensitive' } },
              { lastName: { contains: dto.search, mode: 'insensitive' } },
              { workEmail: { contains: dto.search, mode: 'insensitive' } },
              { jobTitle: { contains: dto.search, mode: 'insensitive' } },
            ],
          }
        : {}),
    };

    const [items, total] = await this.prisma.$transaction([
      this.prisma.employee.findMany({
        where,
        select: LIST_SELECT,
        orderBy: { createdAt: 'desc' },
        skip: (dto.page - 1) * dto.limit,
        take: dto.limit,
      }),
      this.prisma.employee.count({ where }),
    ]);

    return { items, total, page: dto.page, limit: dto.limit };
  }

  // ── Profile ──────────────────────────────────────────────────────────────────
  async findOne(
    organizationId: string | null,
    id: string,
    requestingUserId: string,
    requestingRole: Role,
  ) {
    const orgId = this.requireTenant(organizationId);
    const employee = await this.prisma.employee.findFirst({
      where: { id, organizationId: orgId, deletedAt: null },
      include: {
        department: true,
        location: true,
        workSchedule: true,
        payGroup: { select: { id: true, name: true, payFrequency: true } },
        manager: {
          select: { id: true, firstName: true, lastName: true, avatarUrl: true },
        },
        directReports: {
          where: { deletedAt: null },
          select: { id: true, firstName: true, lastName: true, jobTitle: true, avatarUrl: true },
        },
        documents: {
          select: { id: true, name: true, type: true, createdAt: true, expiryDate: true },
        },
        roleChanges: {
          orderBy: { createdAt: 'desc' },
          take: 20,
        },
      },
    });
    if (!employee) throw new NotFoundException('Employee not found');

    // Employees can only view their own profile.
    const hrRoles: Role[] = [Role.ORG_ADMIN, Role.HR_MANAGER, Role.PAYROLL_MANAGER, Role.DEPARTMENT_MANAGER];
    if (!hrRoles.includes(requestingRole)) {
      const self = await this.employeeForUser(requestingUserId);
      if (self?.id !== id) throw new ForbiddenException('Access denied');
    }

    return employee;
  }

  // ── Own record ───────────────────────────────────────────────────────────────
  async findMe(userId: string) {
    const employee = await this.prisma.employee.findFirst({
      where: { userId, deletedAt: null },
      include: {
        department: { select: { id: true, name: true } },
        location: { select: { id: true, name: true } },
        workSchedule: { select: { id: true, name: true, workDays: true, dailyHours: true } },
        manager: {
          select: { id: true, firstName: true, lastName: true, avatarUrl: true },
        },
        payGroup: { select: { id: true, name: true } },
      },
    });
    if (!employee)
      throw new NotFoundException('No employee record linked to this account');
    return employee;
  }

  // ── Update ───────────────────────────────────────────────────────────────────
  async update(
    organizationId: string | null,
    id: string,
    dto: UpdateEmployeeDto,
    actorId: string,
    actorName: string,
    actorRole: string,
  ) {
    const orgId = this.requireTenant(organizationId);
    const current = await this.findInOrg(orgId, id);

    // Record job-field changes.
    const changes: Record<string, unknown> = {};
    const roleChangeEntries: Array<{
      field: string;
      oldValue: string | null;
      newValue: string | null;
    }> = [];

    for (const field of TRACKED_JOB_FIELDS) {
      const dtoValue = (dto as Record<string, unknown>)[field];
      if (dtoValue === undefined) continue;
      const currentValue = (current as Record<string, unknown>)[field];
      const oldStr = currentValue != null ? String(currentValue) : null;
      const newStr = dtoValue != null ? String(dtoValue) : null;
      if (oldStr !== newStr) {
        changes[field] = { from: oldStr, to: newStr };
        roleChangeEntries.push({ field, oldValue: oldStr, newValue: newStr });
      }
    }

    const updated = await this.prisma.$transaction(async (tx) => {
      const emp = await tx.employee.update({
        where: { id },
        data: {
          firstName: dto.firstName,
          lastName: dto.lastName,
          workEmail: dto.workEmail,
          personalEmail: dto.personalEmail,
          phone: dto.phone,
          dateOfBirth: dto.dateOfBirth ? new Date(dto.dateOfBirth) : undefined,
          gender: dto.gender,
          nationality: dto.nationality,
          address: (dto.address ?? undefined) as Prisma.InputJsonValue | undefined,
          emergencyContact: (dto.emergencyContact ?? undefined) as Prisma.InputJsonValue | undefined,
          avatarUrl: dto.avatarUrl,
          jobTitle: dto.jobTitle,
          departmentId: dto.departmentId,
          locationId: dto.locationId,
          managerId: dto.managerId,
          employmentType: dto.employmentType,
          workScheduleId: dto.workScheduleId,
          probationEndDate: dto.probationEndDate
            ? new Date(dto.probationEndDate)
            : undefined,
          salaryType: dto.salaryType,
          baseSalary: dto.baseSalary,
          hourlyRate: dto.hourlyRate,
          currency: dto.currency,
          payGroupId: dto.payGroupId,
          bankName: dto.bankName,
          bankAccountNumber: dto.bankAccountNumber,
          bankRoutingNumber: dto.bankRoutingNumber,
          paymentMethod: dto.paymentMethod,
          ...(dto.terminationDate
            ? {
                terminationDate: new Date(dto.terminationDate),
                terminationReason: dto.terminationReason,
                status: 'TERMINATED',
              }
            : {}),
        },
      });

      if (roleChangeEntries.length > 0) {
        await tx.roleChange.createMany({
          data: roleChangeEntries.map((rc) => ({
            employeeId: id,
            changedBy: actorId,
            field: rc.field,
            oldValue: rc.oldValue,
            newValue: rc.newValue,
            effectiveDate: new Date(),
          })),
        });
      }

      return emp;
    });

    if (Object.keys(changes).length > 0) {
      this.emitAudit({
        organizationId: orgId,
        action: 'employee.updated',
        resourceType: 'Employee',
        resourceId: id,
        resourceName: `${current.firstName} ${current.lastName}`,
        actorId,
        actorName,
        actorRole,
        changes,
      });
    }

    return updated;
  }

  // ── Self-update ──────────────────────────────────────────────────────────────
  async selfUpdate(userId: string, dto: SelfUpdateDto) {
    const employee = await this.prisma.employee.findFirst({
      where: { userId, deletedAt: null },
    });
    if (!employee)
      throw new NotFoundException('No employee record linked to this account');

    return this.prisma.employee.update({
      where: { id: employee.id },
      data: {
        phone: dto.phone,
        avatarUrl: dto.avatarUrl,
        address: (dto.address ?? undefined) as Prisma.InputJsonValue | undefined,
        emergencyContact: (dto.emergencyContact ?? undefined) as Prisma.InputJsonValue | undefined,
      },
    });
  }

  // ── Soft-delete / terminate ──────────────────────────────────────────────────
  async remove(
    organizationId: string | null,
    id: string,
    actorId: string,
    actorName: string,
    actorRole: string,
  ) {
    const orgId = this.requireTenant(organizationId);
    const employee = await this.findInOrg(orgId, id);

    await this.prisma.employee.update({
      where: { id },
      data: { deletedAt: new Date(), status: 'TERMINATED' },
    });

    this.emitAudit({
      organizationId: orgId,
      action: 'employee.terminated',
      resourceType: 'Employee',
      resourceId: id,
      resourceName: `${employee.firstName} ${employee.lastName}`,
      actorId,
      actorName,
      actorRole,
    });

    return { deleted: true };
  }

  // ── Activate ─────────────────────────────────────────────────────────────────
  async activate(organizationId: string | null, id: string) {
    const orgId = this.requireTenant(organizationId);
    await this.findInOrg(orgId, id);
    return this.prisma.employee.update({
      where: { id },
      data: {
        status: 'ACTIVE',
        deletedAt: null,
        terminationDate: null,
        terminationReason: null,
      },
    });
  }

  // ── Send portal invite ────────────────────────────────────────────────────────
  async sendInvite(
    organizationId: string | null,
    employeeId: string,
    actorId: string,
  ) {
    const orgId = this.requireTenant(organizationId);
    const employee = await this.findInOrg(orgId, employeeId);
    await this.createInvitation(orgId, employeeId, actorId);
    return { invited: true, email: employee.workEmail };
  }

  // ── Lightweight directory ─────────────────────────────────────────────────────
  async directory(
    organizationId: string | null,
    search?: string,
    page = 1,
    limit = 20,
  ) {
    const orgId = this.requireTenant(organizationId);
    const where: Record<string, unknown> = {
      organizationId: orgId,
      deletedAt: null,
      status: 'ACTIVE',
      ...(search
        ? {
            OR: [
              { firstName: { contains: search, mode: 'insensitive' } },
              { lastName: { contains: search, mode: 'insensitive' } },
            ],
          }
        : {}),
    };

    const [items, total] = await this.prisma.$transaction([
      this.prisma.employee.findMany({
        where,
        select: {
          id: true,
          firstName: true,
          lastName: true,
          jobTitle: true,
          avatarUrl: true,
          workEmail: true,
          phone: true,
          department: { select: { id: true, name: true } },
        },
        orderBy: [{ firstName: 'asc' }, { lastName: 'asc' }],
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.employee.count({ where }),
    ]);

    return { items, total, page, limit };
  }

  // ── Org chart ─────────────────────────────────────────────────────────────────
  async orgChart(organizationId: string | null) {
    const orgId = this.requireTenant(organizationId);

    const employees = await this.prisma.employee.findMany({
      where: { organizationId: orgId, deletedAt: null, status: { in: ['ACTIVE', 'ONBOARDING', 'PROBATION'] } },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        jobTitle: true,
        avatarUrl: true,
        managerId: true,
        department: { select: { id: true, name: true } },
      },
      orderBy: [{ firstName: 'asc' }],
    });

    // Build tree structure.
    const map = new Map(employees.map((e) => [e.id, { ...e, children: [] as typeof employees }]));
    const roots: typeof employees = [];

    for (const emp of employees) {
      if (emp.managerId && map.has(emp.managerId)) {
        map.get(emp.managerId)!.children.push(emp);
      } else {
        roots.push(emp);
      }
    }

    return { nodes: roots.map((r) => map.get(r.id)) };
  }

  // ── Export ───────────────────────────────────────────────────────────────────
  async export(organizationId: string | null, format: 'csv' | 'excel' = 'csv') {
    const orgId = this.requireTenant(organizationId);

    const employees = await this.prisma.employee.findMany({
      where: { organizationId: orgId, deletedAt: null },
      include: {
        department: { select: { name: true } },
        location: { select: { name: true } },
      },
      orderBy: { createdAt: 'asc' },
    });

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Employees');

    sheet.columns = [
      { header: 'Employee #', key: 'employeeNumber', width: 14 },
      { header: 'First Name', key: 'firstName', width: 16 },
      { header: 'Last Name', key: 'lastName', width: 16 },
      { header: 'Work Email', key: 'workEmail', width: 28 },
      { header: 'Phone', key: 'phone', width: 16 },
      { header: 'Job Title', key: 'jobTitle', width: 24 },
      { header: 'Department', key: 'department', width: 20 },
      { header: 'Location', key: 'location', width: 20 },
      { header: 'Employment Type', key: 'employmentType', width: 18 },
      { header: 'Status', key: 'status', width: 14 },
      { header: 'Start Date', key: 'startDate', width: 14 },
    ];

    for (const emp of employees) {
      sheet.addRow({
        employeeNumber: emp.employeeNumber ?? '',
        firstName: emp.firstName,
        lastName: emp.lastName,
        workEmail: emp.workEmail,
        phone: emp.phone ?? '',
        jobTitle: emp.jobTitle ?? '',
        department: emp.department?.name ?? '',
        location: emp.location?.name ?? '',
        employmentType: emp.employmentType,
        status: emp.status,
        startDate: emp.startDate.toISOString().slice(0, 10),
      });
    }

    if (format === 'excel') {
      const buffer = await workbook.xlsx.writeBuffer();
      return { buffer: Buffer.from(buffer), mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', filename: 'employees.xlsx' };
    }

    const buffer = await workbook.csv.writeBuffer();
    return { buffer: Buffer.from(buffer), mimeType: 'text/csv', filename: 'employees.csv' };
  }

  // ── Bulk import ───────────────────────────────────────────────────────────────
  async bulkImport(
    organizationId: string | null,
    actorId: string,
    actorName: string,
    actorRole: string,
    fileBuffer: Buffer,
  ) {
    const orgId = this.requireTenant(organizationId);
    const text = fileBuffer.toString('utf-8');
    const lines = text.split('\n').map((l) => l.trim()).filter(Boolean);
    if (lines.length < 2)
      throw new BadRequestException('CSV must have a header row and at least one data row');

    const headers = lines[0].split(',').map((h) => h.trim().toLowerCase().replace(/\s+/g, '_'));

    const results: { row: number; status: 'created' | 'skipped'; reason?: string }[] = [];

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',').map((v) => v.trim());
      const row: Record<string, string> = {};
      headers.forEach((h, idx) => { row[h] = values[idx] ?? ''; });

      const firstName = row['first_name'] ?? row['firstname'] ?? '';
      const lastName = row['last_name'] ?? row['lastname'] ?? '';
      const workEmail = row['work_email'] ?? row['email'] ?? '';
      const startDate = row['start_date'] ?? row['startdate'] ?? new Date().toISOString().slice(0, 10);

      if (!firstName || !lastName || !workEmail) {
        results.push({ row: i + 1, status: 'skipped', reason: 'Missing required fields (first_name, last_name, work_email)' });
        continue;
      }

      try {
        await this.create(orgId, actorId, actorName, actorRole, {
          firstName,
          lastName,
          workEmail,
          startDate,
          jobTitle: row['job_title'] ?? row['jobtitle'],
          phone: row['phone'],
        });
        results.push({ row: i + 1, status: 'created' });
      } catch (err) {
        results.push({
          row: i + 1,
          status: 'skipped',
          reason: err instanceof Error ? err.message : 'Unknown error',
        });
      }
    }

    return {
      created: results.filter((r) => r.status === 'created').length,
      skipped: results.filter((r) => r.status === 'skipped').length,
      results,
    };
  }

  // ── Documents ─────────────────────────────────────────────────────────────────
  async addDocument(
    organizationId: string | null,
    employeeId: string,
    actorUserId: string,
    actorRole: Role,
    dto: AddDocumentDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    await this.assertDocumentAccess(orgId, employeeId, actorUserId, actorRole);

    return this.prisma.employeeDocument.create({
      data: {
        employeeId,
        name: dto.name,
        type: dto.type,
        cloudinaryPublicId: dto.publicId,
        secureUrl: dto.secureUrl,
        expiryDate: dto.expiryDate ? new Date(dto.expiryDate) : undefined,
        uploadedBy: actorUserId,
      },
    });
  }

  async listDocuments(
    organizationId: string | null,
    employeeId: string,
    actorUserId: string,
    actorRole: Role,
    type?: string,
  ) {
    const orgId = this.requireTenant(organizationId);
    await this.assertDocumentAccess(orgId, employeeId, actorUserId, actorRole);

    return this.prisma.employeeDocument.findMany({
      where: {
        employeeId,
        ...(type ? { type } : {}),
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getDocumentDownloadUrl(
    organizationId: string | null,
    employeeId: string,
    docId: string,
    actorUserId: string,
    actorRole: Role,
  ) {
    const orgId = this.requireTenant(organizationId);
    await this.assertDocumentAccess(orgId, employeeId, actorUserId, actorRole);

    const doc = await this.prisma.employeeDocument.findFirst({
      where: { id: docId, employeeId },
    });
    if (!doc) throw new NotFoundException('Document not found');

    // Generate a Cloudinary signed URL valid for 5 minutes.
    const url = cloudinary.url(doc.cloudinaryPublicId, {
      sign_url: true,
      type: 'authenticated',
      expires_at: Math.floor(Date.now() / 1000) + 300,
    });

    return { url, expiresIn: 300 };
  }

  async removeDocument(
    organizationId: string | null,
    employeeId: string,
    docId: string,
    actorUserId: string,
    actorRole: Role,
  ) {
    const orgId = this.requireTenant(organizationId);
    const hrRoles: Role[] = [Role.ORG_ADMIN, Role.HR_MANAGER];
    if (!hrRoles.includes(actorRole)) throw new ForbiddenException('Access denied');
    await this.findInOrg(orgId, employeeId);

    const doc = await this.prisma.employeeDocument.findFirst({
      where: { id: docId, employeeId },
    });
    if (!doc) throw new NotFoundException('Document not found');

    await this.prisma.employeeDocument.delete({ where: { id: docId } });
    return { deleted: true };
  }

  async signDocument(userId: string, employeeId: string, docId: string) {
    const employee = await this.prisma.employee.findFirst({
      where: { userId, deletedAt: null },
    });
    if (!employee || employee.id !== employeeId)
      throw new ForbiddenException('You can only sign your own documents');

    const doc = await this.prisma.employeeDocument.findFirst({
      where: { id: docId, employeeId },
    });
    if (!doc) throw new NotFoundException('Document not found');
    if (doc.signedAt) throw new BadRequestException('Document already signed');

    return this.prisma.employeeDocument.update({
      where: { id: docId },
      data: { signedAt: new Date() },
    });
  }

  // ── Private helpers ───────────────────────────────────────────────────────────

  private async createInvitation(
    orgId: string,
    employeeId: string,
    actorId: string,
  ) {
    const employee = await this.prisma.employee.findUnique({
      where: { id: employeeId },
    });
    if (!employee) return;

    // Revoke any existing pending invite for this email.
    await this.prisma.invitation.updateMany({
      where: {
        organizationId: orgId,
        email: employee.workEmail,
        status: InvitationStatus.PENDING,
      },
      data: { status: InvitationStatus.REVOKED },
    });

    const { raw, hash } = generateOneTimeToken();
    await this.prisma.invitation.create({
      data: {
        organizationId: orgId,
        email: employee.workEmail,
        role: Role.EMPLOYEE,
        tokenHash: hash,
        status: InvitationStatus.PENDING,
        expiresAt: new Date(Date.now() + INVITE_TTL_MS),
        invitedById: actorId,
      },
    });

    await this.mail.sendInvite(employee.workEmail, raw);
  }

  private async notifyManager(
    orgId: string,
    managerId: string,
    employee: { firstName: string; lastName: string },
  ) {
    const manager = await this.prisma.employee.findFirst({
      where: { id: managerId, deletedAt: null },
      select: { userId: true },
    });
    if (!manager?.userId) return;

    await this.notifications.create({
      organizationId: orgId,
      userId: manager.userId,
      type: 'employee.new_report',
      title: 'New direct report added',
      body: `${employee.firstName} ${employee.lastName} has been added to your team.`,
    });
  }

  private async assertDocumentAccess(
    orgId: string,
    employeeId: string,
    userId: string,
    role: Role,
  ) {
    const hrRoles: Role[] = [Role.ORG_ADMIN, Role.HR_MANAGER, Role.PAYROLL_MANAGER];
    if (hrRoles.includes(role)) {
      await this.findInOrg(orgId, employeeId);
      return;
    }
    // For employee role, must be their own record.
    const self = await this.prisma.employee.findFirst({
      where: { userId, deletedAt: null },
    });
    if (self?.id !== employeeId) throw new ForbiddenException('Access denied');
  }
}
