import { WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
export declare const PUSH_QUEUE = "push";
export declare class PushProcessor extends WorkerHost {
    private readonly logger;
    process(job: Job): Promise<void>;
}
