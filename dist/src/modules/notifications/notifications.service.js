"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var NotificationsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsService = void 0;
const bullmq_1 = require("@nestjs/bullmq");
const common_1 = require("@nestjs/common");
const bullmq_2 = require("bullmq");
const events_gateway_1 = require("../../gateways/events.gateway");
const email_processor_1 = require("../../jobs/email.processor");
const push_processor_1 = require("../../jobs/push.processor");
const prisma_service_1 = require("../../prisma/prisma.service");
const notification_types_1 = require("./notification-types");
let NotificationsService = NotificationsService_1 = class NotificationsService {
    prisma;
    events;
    emailQueue;
    pushQueue;
    logger = new common_1.Logger(NotificationsService_1.name);
    constructor(prisma, events, emailQueue, pushQueue) {
        this.prisma = prisma;
        this.events = events;
        this.emailQueue = emailQueue;
        this.pushQueue = pushQueue;
    }
    async create(input) {
        const notification = await this.prisma.notification.create({
            data: {
                organizationId: input.organizationId,
                userId: input.userId,
                type: input.type,
                title: input.title,
                body: input.body,
                data: input.data,
            },
        });
        this.events.emitToUser(input.userId, notification_types_1.WsEvent.NOTIFICATION_NEW, {
            notification,
        });
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
    isTypeAllowed(preferences, type) {
        if (!preferences || typeof preferences !== 'object')
            return true;
        const map = preferences;
        return map[type] !== false;
    }
    async enqueueEmail(input) {
        if (!input.email)
            return;
        const user = await this.prisma.user.findUnique({
            where: { id: input.userId },
            select: { email: true },
        });
        if (!user)
            return;
        await this.emailQueue.add(input.email.template, {
            to: user.email,
            subject: input.email.subject,
            template: input.email.template,
            context: input.email.context ?? {},
        }, {
            attempts: 3,
            backoff: { type: 'exponential', delay: 5000 },
            removeOnComplete: true,
        });
    }
    async enqueuePush(input) {
        if (!input.push)
            return;
        await this.pushQueue.add(input.type, {
            userId: input.userId,
            title: input.push.title ?? input.title,
            body: input.push.body ?? input.body,
            data: input.data ?? {},
        }, {
            attempts: 3,
            backoff: { type: 'exponential', delay: 5000 },
            removeOnComplete: true,
        });
    }
    async list(userId, dto) {
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
    async findOwned(userId, id) {
        const notification = await this.prisma.notification.findFirst({
            where: { id, userId },
        });
        if (!notification)
            throw new common_1.NotFoundException('Notification not found');
        return notification;
    }
    async markRead(userId, id) {
        await this.findOwned(userId, id);
        return this.prisma.notification.update({
            where: { id },
            data: { read: true, readAt: new Date() },
        });
    }
    async markAllRead(userId) {
        const result = await this.prisma.notification.updateMany({
            where: { userId, read: false },
            data: { read: true, readAt: new Date() },
        });
        return { updated: result.count };
    }
    async remove(userId, id) {
        await this.findOwned(userId, id);
        await this.prisma.notification.delete({ where: { id } });
        return { deleted: true };
    }
    async getPreferences(userId) {
        const existing = await this.prisma.notificationPreference.findUnique({
            where: { userId },
        });
        if (existing)
            return existing;
        return this.prisma.notificationPreference.create({ data: { userId } });
    }
    async updatePreferences(userId, dto) {
        const current = await this.getPreferences(userId);
        const mergedTypes = {
            ...(current.preferences ?? {}),
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
};
exports.NotificationsService = NotificationsService;
exports.NotificationsService = NotificationsService = NotificationsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, bullmq_1.InjectQueue)(email_processor_1.EMAIL_QUEUE)),
    __param(3, (0, bullmq_1.InjectQueue)(push_processor_1.PUSH_QUEUE)),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        events_gateway_1.EventsGateway,
        bullmq_2.Queue,
        bullmq_2.Queue])
], NotificationsService);
//# sourceMappingURL=notifications.service.js.map