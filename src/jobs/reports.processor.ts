import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';

export const REPORTS_QUEUE = 'reports';

@Processor(REPORTS_QUEUE)
export class ReportsProcessor extends WorkerHost {
  private readonly logger = new Logger(ReportsProcessor.name);

  process(job: Job): Promise<void> {
    this.logger.log(`Processing reports job ${job.name} (${job.id})`);
    // TODO: build CSV/Excel exports and scheduled report deliveries.
    return Promise.resolve();
  }
}
