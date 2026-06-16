import { ConfigService } from '@nestjs/config';
import { Queue } from 'bullmq';
export declare class AuthMailService {
    private readonly emailQueue;
    private readonly config;
    private readonly logger;
    constructor(emailQueue: Queue, config: ConfigService);
    private get clientUrl();
    private send;
    sendEmailVerification(to: string, token: string): Promise<void>;
    sendPasswordReset(to: string, token: string): Promise<void>;
    sendInvite(to: string, token: string): Promise<void>;
}
