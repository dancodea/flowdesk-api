import type { AuthUser } from '../auth/auth.types';
import { ListNotificationsDto, UpdatePreferencesDto } from './dto';
import { NotificationsService } from './notifications.service';
export declare class NotificationsController {
    private readonly notifications;
    constructor(notifications: NotificationsService);
    list(user: AuthUser, dto: ListNotificationsDto): Promise<{
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
    getPreferences(user: AuthUser): Promise<{
        id: string;
        userId: string;
        updatedAt: Date;
        emailEnabled: boolean;
        pushEnabled: boolean;
        preferences: import("@prisma/client/runtime/client").JsonValue;
    }>;
    updatePreferences(user: AuthUser, dto: UpdatePreferencesDto): Promise<{
        id: string;
        userId: string;
        updatedAt: Date;
        emailEnabled: boolean;
        pushEnabled: boolean;
        preferences: import("@prisma/client/runtime/client").JsonValue;
    }>;
    markAllRead(user: AuthUser): Promise<{
        updated: number;
    }>;
    markRead(user: AuthUser, id: string): Promise<{
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
    remove(user: AuthUser, id: string): Promise<{
        deleted: boolean;
    }>;
}
