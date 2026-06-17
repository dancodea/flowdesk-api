import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ListAuditLogsDto } from './dto/audit-query.dto';

@Injectable()
export class AuditReadService {
  constructor(private readonly prisma: PrismaService) {}

  async list(organizationId: string, dto: ListAuditLogsDto) {
    const page = dto.page ?? 1;
    const limit = dto.limit ?? 50;

    const where: any = {
      organizationId,
      ...(dto.action ? { action: { contains: dto.action, mode: 'insensitive' } } : {}),
      ...(dto.actorId ? { actorId: dto.actorId } : {}),
      ...(dto.resourceType ? { resourceType: dto.resourceType } : {}),
      ...(dto.resourceId ? { resourceId: dto.resourceId } : {}),
      ...(dto.from || dto.to
        ? {
            createdAt: {
              ...(dto.from ? { gte: new Date(dto.from) } : {}),
              ...(dto.to ? { lte: new Date(dto.to) } : {}),
            },
          }
        : {}),
    };

    const [items, total] = await this.prisma.$transaction([
      this.prisma.auditLog.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.auditLog.count({ where }),
    ]);

    return { items, total, page, limit };
  }

  async export(organizationId: string, dto: ListAuditLogsDto): Promise<string> {
    const { items } = await this.list(organizationId, { ...dto, limit: 5000, page: 1 });

    const header = 'timestamp,actor,role,action,resourceType,resourceId,resourceName\n';
    const rows = items
      .map((log) =>
        [
          log.createdAt.toISOString(),
          log.actorName ?? log.actorId ?? '',
          log.actorRole ?? '',
          log.action,
          log.resourceType,
          log.resourceId ?? '',
          log.resourceName ?? '',
        ]
          .map((v) => `"${String(v).replace(/"/g, '""')}"`)
          .join(','),
      )
      .join('\n');

    return header + rows;
  }
}
