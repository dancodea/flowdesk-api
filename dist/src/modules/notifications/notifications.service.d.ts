import { Queue } from 'bullmq';
import { EventsGateway } from '../../gateways/events.gateway';
import { PrismaService } from '../../prisma/prisma.service';
import { ListNotificationsDto, UpdatePreferencesDto } from './dto';
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
    push?: {
        title?: string;
        body?: string;
    };
}
export declare class NotificationsService {
    private readonly prisma;
    private readonly events;
    private readonly emailQueue;
    private readonly pushQueue;
    private readonly logger;
    constructor(prisma: PrismaService, events: EventsGateway, emailQueue: Queue, pushQueue: Queue);
    create(input: CreateNotificationInput): Promise<{
        organizationId: string;
        id: string;
        type: string;
        data: import("@prisma/client/runtime/client").JsonValue | null;
        createdAt: Date;
        userId: string;
        title: string;
        read: boolean;
        body: string | null;
        readAt: Date | null;
    }>;
    private isTypeAllowed;
    private enqueueEmail;
    private enqueuePush;
    list(userId: string, dto: ListNotificationsDto): Promise<{
        items: {
            organizationId: string;
            id: string;
            type: string;
            data: import("@prisma/client/runtime/client").JsonValue | null;
            createdAt: Date;
            userId: string;
            title: string;
            read: boolean;
            body: string | null;
            readAt: Date | null;
        }[];
        total: number;
        unread: number;
        page: number;
        limit: number;
    }>;
    private findOwned;
    markRead(userId: string, id: string): Promise<{
        organizationId: string;
        id: string;
        type: string;
        data: import("@prisma/client/runtime/client").JsonValue | null;
        createdAt: Date;
        userId: string;
        title: string;
        read: boolean;
        body: string | null;
        readAt: Date | null;
    }>;
    markAllRead(userId: string): Promise<{
        updated: number;
    }>;
    remove(userId: string, id: string): Promise<{
        deleted: boolean;
    }>;
    getPreferences(userId: string): Promise<{
        id: string;
        userId: string;
        updatedAt: Date;
        emailEnabled: boolean;
        pushEnabled: boolean;
        preferences: import("@prisma/client/runtime/client").JsonValue;
    }>;
    updatePreferences(userId: string, dto: UpdatePreferencesDto): Promise<{
        id: string;
        userId: string;
        updatedAt: Date;
        emailEnabled: boolean;
        pushEnabled: boolean;
        preferences: import("@prisma/client/runtime/client").JsonValue;
    }>;
}
