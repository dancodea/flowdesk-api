import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';

export const EMAIL_QUEUE = 'email';

@Processor(EMAIL_QUEUE)
export class EmailProcessor extends WorkerHost {
  private readonly logger = new Logger(EmailProcessor.name);

  process(job: Job): Promise<void> {
    this.logger.log(`Processing email job ${job.name} (${job.id})`);
    // TODO: send transactional email via SendGrid.
    return Promise.resolve();
  }
}
