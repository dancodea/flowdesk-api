import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { AnnouncementAudience } from '../../generated/prisma/enums';
import { PrismaService } from '../../prisma/prisma.service';
import { EventsGateway } from '../../gateways/events.gateway';
import {
  CreateAnnouncementDto,
  ListAnnouncementsDto,
  UpdateAnnouncementDto,
} from './dto/announcement.dto';

@Injectable()
export class AnnouncementsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly events: EventEmitter2,
    private readonly gateway: EventsGateway,
  ) {}

  private requireTenant(organizationId: string | null): string {
    if (!organizationId)
      throw new BadRequestException('No organization context');
    return organizationId;
  }

  async create(
    organizationId: string | null,
    userId: string,
    dto: CreateAnnouncementDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    const announcement = await this.prisma.announcement.create({
      data: {
        organizationId: orgId,
        title: dto.title,
        content: dto.content,
        audience: dto.audience ?? AnnouncementAudience.ALL,
        isPinned: dto.isPinned ?? false,
        publishedBy: userId,
        publishedAt: new Date(),
      },
    });

    // Broadcast to org via WebSocket.
    this.gateway.emitToOrg(orgId, 'announcement:new', {
      id: announcement.id,
      title: announcement.title,
      audience: announcement.audience,
    });

    return announcement;
  }

  async list(
    organizationId: string | null,
    userId: string,
    dto: ListAnnouncementsDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    const page = dto.page ?? 1;
    const limit = dto.limit ?? 20;

    const where: any = {
      organizationId: orgId,
      ...(dto.audience ? { audience: dto.audience } : {}),
    };

    const [items, total] = await this.prisma.$transaction([
      this.prisma.announcement.findMany({
        where,
        include: {
          reads: {
            where: { userId },
            select: { readAt: true },
            take: 1,
          },
          _count: { select: { reads: true } },
        },
        orderBy: [{ isPinned: 'desc' }, { publishedAt: 'desc' }],
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.announcement.count({ where }),
    ]);

    return {
      items: items.map((a) => ({
        ...a,
        isRead: a.reads.length > 0,
        reads: undefined,
      })),
      total,
      page,
      limit,
    };
  }

  async getOne(organizationId: string | null, id: string, userId: string) {
    const orgId = this.requireTenant(organizationId);
    const announcement = await this.prisma.announcement.findFirst({
      where: { id, organizationId: orgId },
      include: {
        reads: { where: { userId }, select: { readAt: true }, take: 1 },
        _count: { select: { reads: true } },
      },
    });
    if (!announcement) throw new NotFoundException('Announcement not found');
    return { ...announcement, isRead: announcement.reads.length > 0 };
  }

  async update(
    organizationId: string | null,
    id: string,
    dto: UpdateAnnouncementDto,
  ) {
    const orgId = this.requireTenant(organizationId);
    await this.findAnnouncement(orgId, id);
    return this.prisma.announcement.update({
      where: { id },
      data: {
        title: dto.title,
        content: dto.content,
        audience: dto.audience,
        isPinned: dto.isPinned,
      },
    });
  }

  async remove(organizationId: string | null, id: string) {
    const orgId = this.requireTenant(organizationId);
    await this.findAnnouncement(orgId, id);
    await this.prisma.announcement.delete({ where: { id } });
    return { deleted: true };
  }

  async markRead(
    organizationId: string | null,
    id: string,
    userId: string,
  ) {
    const orgId = this.requireTenant(organizationId);
    await this.findAnnouncement(orgId, id);

    await this.prisma.announcementRead.upsert({
      where: { announcementId_userId: { announcementId: id, userId } },
      create: { announcementId: id, userId, readAt: new Date() },
      update: {},
    });

    return { read: true };
  }

  private async findAnnouncement(orgId: string, id: string) {
    const a = await this.prisma.announcement.findFirst({
      where: { id, organizationId: orgId },
    });
    if (!a) throw new NotFoundException('Announcement not found');
    return a;
  }
}
