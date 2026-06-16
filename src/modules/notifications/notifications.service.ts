import { InjectQueue } from '@nestjs/bullmq';
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Queue } from 'bullmq';
import type { Prisma } from '../../generated/prisma/client';
import { EventsGateway } from '../../gateways/events.gateway';
import { EMAIL_QUEUE } from '../../jobs/email.processor';
import { PUSH_QUEUE } from '../../jobs/push.processor';
import { PrismaService } from '../../prisma/prisma.service';
import { ListNotificationsDto, UpdatePreferencesDto } from './dto';
import { WsEvent } from './notification-types';

/**
 * Payload other modules pass to create a notification. `email` / `push` opt the
 * notification into those channels; they still respect the user's preferences.
 */
export interface CreateNotificationInput {
  organizationId: string;
  userId: string;
  type: string;
  title: string;
  body?: string;
  data?: Record<string, unknown>;
  email?: {
    subject: string;
    template: string;
    context?: Record<string, unknown>;
  };
  push?: { title?: string; body?: string };
}

@Injectable()
export class NotificationsService {
  private readonly logger = new Logger(NotificationsService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly events: EventsGateway,
    @InjectQueue(EMAIL_QUEUE) private readonly emailQueue: Queue,
    @InjectQueue(PUSH_QUEUE) private readonly pushQueue: Queue,
  ) {}

  /**
   * Central entry point: persists the notification, pushes it to the user's
   * socket room in real time, then fans out to email / push channels subject to
   * the recipient's preferences. Safe to call fire-and-forget from any module.
   */
  async create(input: CreateNotificationInput) {
    const notification = await this.prisma.notification.create({
      data: {
        organizationId: input.organizationId,
        userId: input.userId,
        type: input.type,
        title: input.title,
        body: input.body,
        data: input.data as Prisma.InputJsonValue | undefined,
      },
    });

    // Real-time in-app delivery.
    this.events.emitToUser(input.userId, WsEvent.NOTIFICATION_NEW, {
      notification,
    });

    // Channel fan-out, gated by preferences.
    const prefs = await this.prisma.notificationPreference.findUnique({
      where: { userId: input.userId },
    });
    const typeAllowed = this.isTypeAllowed(prefs?.preferences, input.type);

    if (input.email && (prefs?.emailEnabled ?? true) && typeAllowed) {
      await this.enqueueEmail(input);
    }
    if (input.push && (prefs?.pushEnabled ?? true) && typeAllowed) {
      await this.enqueuePush(input);
    }

    return notification;
  }

  private isTypeAllowed(preferences: unknown, type: string): boolean {
    if (!preferences || typeof preferences !== 'object') return true;
    const map = preferences as Record<string, unknown>;
    // Absent key = allowed by default; only an explicit `false` mutes it.
    return map[type] !== false;
  }

  private async enqueueEmail(input: CreateNotificationInput) {
    if (!input.email) return;
    const user = await this.prisma.user.findUnique({
      where: { id: input.userId },
      select: { email: true },
    });
    if (!user) return;
    await this.emailQueue.add(
      input.email.template,
      {
        to: user.email,
        subject: input.email.subject,
        template: input.email.template,
        context: input.email.context ?? {},
      },
      {
        attempts: 3,
        backoff: { type: 'exponential', delay: 5000 },
        removeOnComplete: true,
      },
    );
  }

  private async enqueuePush(input: CreateNotificationInput) {
    if (!input.push) return;
    await this.pushQueue.add(
      input.type,
      {
        userId: input.userId,
        title: input.push.title ?? input.title,
        body: input.push.body ?? input.body,
        data: input.data ?? {},
      },
      {
        attempts: 3,
        backoff: { type: 'exponential', delay: 5000 },
        removeOnComplete: true,
      },
    );
  }

  // ── User-facing read APIs ────────────────────────────────────────────────────
  async list(userId: string, dto: ListNotificationsDto) {
    const where = {
      userId,
      ...(dto.read !== undefined ? { read: dto.read } : {}),
      ...(dto.type ? { type: dto.type } : {}),
    };
    const [items, total, unread] = await this.prisma.$transaction([
      this.prisma.notification.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (dto.page - 1) * dto.limit,
        take: dto.limit,
      }),
      this.prisma.notification.count({ where }),
      this.prisma.notification.count({ where: { userId, read: false } }),
    ]);
    return { items, total, unread, page: dto.page, limit: dto.limit };
  }

  private async findOwned(userId: string, id: string) {
    const notification = await this.prisma.notification.findFirst({
      where: { id, userId },
    });
    if (!notification) throw new NotFoundException('Notification not found');
    return notification;
  }

  async markRead(userId: string, id: string) {
    await this.findOwned(userId, id);
    return this.prisma.notification.update({
      where: { id },
      data: { read: true, readAt: new Date() },
    });
  }

  async markAllRead(userId: string) {
    const result = await this.prisma.notification.updateMany({
      where: { userId, read: false },
      data: { read: true, readAt: new Date() },
    });
    return { updated: result.count };
  }

  async remove(userId: string, id: string) {
    await this.findOwned(userId, id);
    await this.prisma.notification.delete({ where: { id } });
    return { deleted: true };
  }

  // ── Preferences ──────────────────────────────────────────────────────────────
  async getPreferences(userId: string) {
    const existing = await this.prisma.notificationPreference.findUnique({
      where: { userId },
    });
    if (existing) return existing;
    // Lazily create defaults on first read.
    return this.prisma.notificationPreference.create({ data: { userId } });
  }

  async updatePreferences(userId: string, dto: UpdatePreferencesDto) {
    const current = await this.getPreferences(userId);
    const mergedTypes = {
      ...((current.preferences as Record<string, boolean>) ?? {}),
      ...(dto.types ?? {}),
    };

    return this.prisma.notificationPreference.update({
      where: { userId },
      data: {
        emailEnabled: dto.emailEnabled,
        pushEnabled: dto.pushEnabled,
        preferences: mergedTypes,
      },
    });
  }
}
