import { WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
export declare const EMAIL_QUEUE = "email";
export declare class EmailProcessor extends WorkerHost {
    private readonly logger;
    process(job: Job): Promise<void>;
}
