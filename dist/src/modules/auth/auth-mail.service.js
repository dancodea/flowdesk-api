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
var AuthMailService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMailService = void 0;
const bullmq_1 = require("@nestjs/bullmq");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const bullmq_2 = require("bullmq");
const email_processor_1 = require("../../jobs/email.processor");
let AuthMailService = AuthMailService_1 = class AuthMailService {
    emailQueue;
    config;
    logger = new common_1.Logger(AuthMailService_1.name);
    constructor(emailQueue, config) {
        this.emailQueue = emailQueue;
        this.config = config;
    }
    get clientUrl() {
        return this.config.get('app.clientUrl') ?? 'http://localhost:3000';
    }
    async send(job) {
        const hasProvider = !!process.env.SENDGRID_API_KEY;
        if (!hasProvider) {
            this.logger.warn(`[email:dev] No SENDGRID_API_KEY set — would send "${job.subject}" to ${job.to}\n` +
                JSON.stringify(job.context, null, 2));
            return;
        }
        await this.emailQueue.add(job.template, job, {
            attempts: 3,
            backoff: { type: 'exponential', delay: 5000 },
            removeOnComplete: true,
        });
    }
    async sendEmailVerification(to, token) {
        const link = `${this.clientUrl}/verify-email?token=${token}`;
        await this.send({
            to,
            subject: 'Verify your FlowDesk email',
            template: 'email-verification',
            context: { link, token },
        });
    }
    async sendPasswordReset(to, token) {
        const link = `${this.clientUrl}/reset-password?token=${token}`;
        await this.send({
            to,
            subject: 'Reset your FlowDesk password',
            template: 'password-reset',
            context: { link, token },
        });
    }
    async sendInvite(to, token) {
        const link = `${this.clientUrl}/invite/accept?token=${token}`;
        await this.send({
            to,
            subject: 'You have been invited to FlowDesk',
            template: 'invitation',
            context: { link, token },
        });
    }
};
exports.AuthMailService = AuthMailService;
exports.AuthMailService = AuthMailService = AuthMailService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, bullmq_1.InjectQueue)(email_processor_1.EMAIL_QUEUE)),
    __metadata("design:paramtypes", [bullmq_2.Queue,
        config_1.ConfigService])
], AuthMailService);
//# sourceMappingURL=auth-mail.service.js.map