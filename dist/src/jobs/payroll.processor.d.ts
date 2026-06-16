import { WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
export declare const PAYROLL_QUEUE = "payroll";
export declare class PayrollProcessor extends WorkerHost {
    private readonly logger;
    process(job: Job): Promise<void>;
}
