import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { AssetRequestStatus, AssetStatus, Role } from '../../generated/prisma/enums';
import { PrismaService } from '../../prisma/prisma.service';
import { AUDIT_EVENT } from '../audit/audit.types';
import type { AuditEvent } from '../audit/audit.types';
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

const IT_ROLES: Role[] = [Role.ORG_ADMIN, Role.HR_MANAGER, Role.IT_ADMIN];

@Injectable()
export class AssetsService {
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

  // ── Catalog ───────────────────────────────────────────────────────────────────

  async createAsset(
    organizationId: string | null,
    actorId: string,
    actorName: string,
    actorRole: string,
    dto: CreateAssetDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    const asset = await this.prisma.asset.create({
      data: {
        organizationId: orgId,
        name: dto.name,
        type: dto.type,
        brand: dto.brand,
        model: dto.model,
        serialNumber: dto.serialNumber,
        purchaseDate: dto.purchaseDate ? new Date(dto.purchaseDate) : undefined,
        purchasePrice: dto.purchasePrice,
        currentValue: dto.currentValue,
        locationId: dto.locationId,
        notes: dto.notes,
        status: AssetStatus.AVAILABLE,
      },
    });
    this.emitAudit({
      organizationId: orgId,
      action: 'asset.created',
      resourceType: 'Asset',
      resourceId: asset.id,
      resourceName: asset.name,
      actorId,
      actorName,
      actorRole,
    });
    return asset;
  }

  async listAssets(organizationId: string | null, dto: ListAssetsDto) {
    const orgId = this.requireTenant(organizationId);
    const page = dto.page ?? 1;
    const limit = dto.limit ?? 20;

    const where: any = {
      organizationId: orgId,
      ...(dto.type ? { type: { equals: dto.type, mode: 'insensitive' } } : {}),
      ...(dto.status ? { status: dto.status } : {}),
      ...(dto.locationId ? { locationId: dto.locationId } : {}),
      ...(dto.search
        ? {
            OR: [
              { name: { contains: dto.search, mode: 'insensitive' } },
              { serialNumber: { contains: dto.search, mode: 'insensitive' } },
              { brand: { contains: dto.search, mode: 'insensitive' } },
            ],
          }
        : {}),
    };

    const [items, total] = await this.prisma.$transaction([
      this.prisma.asset.findMany({
        where,
        include: {
          location: { select: { id: true, name: true } },
          assignments: {
            where: { returnedDate: null },
            include: {
              employee: { select: { id: true, firstName: true, lastName: true } },
            },
            take: 1,
          },
        },
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.asset.count({ where }),
    ]);

    return { items, total, page, limit };
  }

  async getAsset(organizationId: string | null, id: string) {
    const orgId = this.requireTenant(organizationId);
    const asset = await this.prisma.asset.findFirst({
      where: { id, organizationId: orgId },
      include: {
        location: { select: { id: true, name: true } },
        assignments: {
          include: {
            employee: { select: { id: true, firstName: true, lastName: true, avatarUrl: true } },
          },
          orderBy: { assignedDate: 'desc' },
        },
        maintenance: { orderBy: { date: 'desc' } },
      },
    });
    if (!asset) throw new NotFoundException('Asset not found');
    return asset;
  }

  async updateAsset(
    organizationId: string | null,
    id: string,
    dto: UpdateAssetDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    await this.findAsset(orgId, id);
    return this.prisma.asset.update({
      where: { id },
      data: {
        name: dto.name,
        type: dto.type,
        brand: dto.brand,
        model: dto.model,
        serialNumber: dto.serialNumber,
        purchaseDate: dto.purchaseDate ? new Date(dto.purchaseDate) : undefined,
        purchasePrice: dto.purchasePrice,
        currentValue: dto.currentValue,
        locationId: dto.locationId,
        notes: dto.notes,
        status: dto.status,
      },
    });
  }

  async retireAsset(
    organizationId: string | null,
    id: string,
    actorId: string,
    actorName: string,
    actorRole: string,
  ) {
    const orgId = this.requireTenant(organizationId);
    const asset = await this.findAsset(orgId, id);
    if (asset.status === AssetStatus.ASSIGNED)
      throw new BadRequestException('Return the asset before retiring it');

    const updated = await this.prisma.asset.update({
      where: { id },
      data: { status: AssetStatus.RETIRED },
    });

    this.emitAudit({
      organizationId: orgId,
      action: 'asset.retired',
      resourceType: 'Asset',
      resourceId: id,
      resourceName: asset.name,
      actorId,
      actorName,
      actorRole,
    });

    return updated;
  }

  // ── QR ────────────────────────────────────────────────────────────────────────

  async getQrKey(organizationId: string | null, id: string) {
    const orgId = this.requireTenant(organizationId);
    let asset = await this.findAsset(orgId, id);

    if (!asset.qrCodeKey) {
      // Generate a stable key: just use the asset id.
      asset = await this.prisma.asset.update({
        where: { id },
        data: { qrCodeKey: id },
      });
    }

    return { assetId: asset.id, qrCodeKey: asset.qrCodeKey };
  }

  // ── Assignments ───────────────────────────────────────────────────────────────

  async assignAsset(
    organizationId: string | null,
    assetId: string,
    actorId: string,
    actorName: string,
    actorRole: string,
    dto: AssignAssetDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    const asset = await this.findAsset(orgId, assetId);

    if (asset.status !== AssetStatus.AVAILABLE)
      throw new BadRequestException(
        `Asset is not available (current status: ${asset.status})`,
      );

    const employee = await this.prisma.employee.findFirst({
      where: { id: dto.employeeId, organizationId: orgId, deletedAt: null },
    });
    if (!employee) throw new NotFoundException('Employee not found');

    const [assignment] = await this.prisma.$transaction([
      this.prisma.assetAssignment.create({
        data: {
          assetId,
          employeeId: dto.employeeId,
          assignedDate: new Date(dto.assignedDate),
          expectedReturnDate: dto.expectedReturnDate
            ? new Date(dto.expectedReturnDate)
            : undefined,
          assignedBy: actorId,
        },
        include: {
          employee: { select: { id: true, firstName: true, lastName: true } },
        },
      }),
      this.prisma.asset.update({
        where: { id: assetId },
        data: { status: AssetStatus.ASSIGNED },
      }),
    ]);

    this.emitAudit({
      organizationId: orgId,
      action: 'asset.assigned',
      resourceType: 'AssetAssignment',
      resourceId: assignment.id,
      resourceName: asset.name,
      actorId,
      actorName,
      actorRole,
      changes: { employeeId: dto.employeeId },
    });

    return assignment;
  }

  async listAssignments(organizationId: string | null, assetId: string) {
    const orgId = this.requireTenant(organizationId);
    await this.findAsset(orgId, assetId);
    return this.prisma.assetAssignment.findMany({
      where: { assetId },
      include: {
        employee: { select: { id: true, firstName: true, lastName: true, avatarUrl: true } },
      },
      orderBy: { assignedDate: 'desc' },
    });
  }

  async returnAsset(
    organizationId: string | null,
    assignmentId: string,
    actorId: string,
    actorName: string,
    actorRole: string,
    dto: ReturnAssetDto,
  ) {
    const orgId = this.requireTenant(organizationId);

    const assignment = await this.prisma.assetAssignment.findFirst({
      where: { id: assignmentId, asset: { organizationId: orgId } },
      include: { asset: true },
    });
    if (!assignment) throw new NotFoundException('Assignment not found');
    if (assignment.returnedDate)
      throw new BadRequestException('Asset has already been returned');

    const newStatus =
      dto.condition === 'MISSING'
        ? AssetStatus.RETIRED
        : dto.condition === 'DAMAGED'
          ? AssetStatus.UNDER_REPAIR
          : AssetStatus.AVAILABLE;

    const [updated] = await this.prisma.$transaction([
      this.prisma.assetAssignment.update({
        where: { id: assignmentId },
        data: {
          returnedDate: new Date(),
          returnCondition: dto.condition,
          returnNotes: dto.notes,
          acknowledgedAt: new Date(),
        },
      }),
      this.prisma.asset.update({
        where: { id: assignment.assetId },
        data: { status: newStatus },
      }),
    ]);

    this.emitAudit({
      organizationId: orgId,
      action: 'asset.returned',
      resourceType: 'AssetAssignment',
      resourceId: assignmentId,
      resourceName: assignment.asset.name,
      actorId,
      actorName,
      actorRole,
      changes: { condition: dto.condition },
    });

    return updated;
  }

  // ── Requests ──────────────────────────────────────────────────────────────────

  async createRequest(
    organizationId: string | null,
    userId: string,
    dto: CreateAssetRequestDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    const emp = await this.prisma.employee.findFirst({
      where: { userId, organizationId: orgId, deletedAt: null },
    });
    if (!emp) throw new NotFoundException('Employee record not found');

    return this.prisma.assetRequest.create({
      data: {
        organizationId: orgId,
        employeeId: emp.id,
        assetType: dto.assetType,
        reason: dto.reason,
        status: AssetRequestStatus.PENDING,
      },
    });
  }

  async listRequests(
    organizationId: string | null,
    userId: string,
    role: Role,
    dto: ListRequestsDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    const page = dto.page ?? 1;
    const limit = dto.limit ?? 20;

    let employeeId: string | undefined;
    if (!IT_ROLES.includes(role)) {
      const emp = await this.prisma.employee.findFirst({
        where: { userId, organizationId: orgId, deletedAt: null },
      });
      employeeId = emp?.id;
    }

    const where: any = {
      organizationId: orgId,
      ...(employeeId ? { employeeId } : {}),
      ...(dto.status ? { status: dto.status } : {}),
    };

    const [items, total] = await this.prisma.$transaction([
      this.prisma.assetRequest.findMany({
        where,
        include: {
          employee: { select: { id: true, firstName: true, lastName: true } },
          fulfilledAsset: { select: { id: true, name: true, type: true } },
        },
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.assetRequest.count({ where }),
    ]);

    return { items, total, page, limit };
  }

  async fulfillRequest(
    organizationId: string | null,
    requestId: string,
    actorId: string,
    actorName: string,
    actorRole: string,
    dto: FulfillRequestDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    const request = await this.findRequest(orgId, requestId);
    if (request.status !== AssetRequestStatus.PENDING)
      throw new BadRequestException('Only pending requests can be fulfilled');

    const asset = await this.findAsset(orgId, dto.assetId);
    if (asset.status !== AssetStatus.AVAILABLE)
      throw new BadRequestException('Selected asset is not available');

    const [updated] = await this.prisma.$transaction([
      this.prisma.assetRequest.update({
        where: { id: requestId },
        data: { status: AssetRequestStatus.FULFILLED, fulfilledAssetId: dto.assetId },
      }),
      this.prisma.assetAssignment.create({
        data: {
          assetId: dto.assetId,
          employeeId: request.employeeId,
          assignedDate: new Date(),
          assignedBy: actorId,
        },
      }),
      this.prisma.asset.update({
        where: { id: dto.assetId },
        data: { status: AssetStatus.ASSIGNED },
      }),
    ]);

    this.emitAudit({
      organizationId: orgId,
      action: 'asset.request.fulfilled',
      resourceType: 'AssetRequest',
      resourceId: requestId,
      actorId,
      actorName,
      actorRole,
      changes: { assetId: dto.assetId },
    });

    return updated;
  }

  async rejectRequest(
    organizationId: string | null,
    requestId: string,
    actorId: string,
    actorName: string,
    actorRole: string,
  ) {
    const orgId = this.requireTenant(organizationId);
    const request = await this.findRequest(orgId, requestId);
    if (request.status !== AssetRequestStatus.PENDING)
      throw new BadRequestException('Only pending requests can be rejected');

    const updated = await this.prisma.assetRequest.update({
      where: { id: requestId },
      data: { status: AssetRequestStatus.REJECTED },
    });

    this.emitAudit({
      organizationId: orgId,
      action: 'asset.request.rejected',
      resourceType: 'AssetRequest',
      resourceId: requestId,
      actorId,
      actorName,
      actorRole,
    });

    return updated;
  }

  // ── Maintenance ───────────────────────────────────────────────────────────────

  async logMaintenance(
    organizationId: string | null,
    assetId: string,
    actorId: string,
    actorName: string,
    actorRole: string,
    dto: LogMaintenanceDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    const asset = await this.findAsset(orgId, assetId);

    const record = await this.prisma.assetMaintenance.create({
      data: {
        assetId,
        description: dto.description,
        date: new Date(dto.date),
        cost: dto.cost,
        performedBy: dto.performedBy,
      },
    });

    // Auto-set status to UNDER_REPAIR if not already.
    if (asset.status === AssetStatus.AVAILABLE) {
      await this.prisma.asset.update({
        where: { id: assetId },
        data: { status: AssetStatus.UNDER_REPAIR },
      });
    }

    this.emitAudit({
      organizationId: orgId,
      action: 'asset.maintenance.logged',
      resourceType: 'AssetMaintenance',
      resourceId: record.id,
      resourceName: asset.name,
      actorId,
      actorName,
      actorRole,
    });

    return record;
  }

  async listMaintenance(organizationId: string | null, assetId: string) {
    const orgId = this.requireTenant(organizationId);
    await this.findAsset(orgId, assetId);
    return this.prisma.assetMaintenance.findMany({
      where: { assetId },
      orderBy: { date: 'desc' },
    });
  }

  // ── Private helpers ───────────────────────────────────────────────────────────

  private async findAsset(orgId: string, id: string) {
    const asset = await this.prisma.asset.findFirst({
      where: { id, organizationId: orgId },
    });
    if (!asset) throw new NotFoundException('Asset not found');
    return asset;
  }

  private async findRequest(orgId: string, id: string) {
    const req = await this.prisma.assetRequest.findFirst({
      where: { id, organizationId: orgId },
    });
    if (!req) throw new NotFoundException('Asset request not found');
    return req;
  }
}
