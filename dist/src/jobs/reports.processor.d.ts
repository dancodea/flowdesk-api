import { WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
export declare const REPORTS_QUEUE = "reports";
export declare class ReportsProcessor extends WorkerHost {
    private readonly logger;
    process(job: Job): Promise<void>;
}
