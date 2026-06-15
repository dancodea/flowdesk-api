import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';

export const PUSH_QUEUE = 'push';

@Processor(PUSH_QUEUE)
export class PushProcessor extends WorkerHost {
  private readonly logger = new Logger(PushProcessor.name);

  process(job: Job): Promise<void> {
    this.logger.log(`Processing push job ${job.name} (${job.id})`);
    // TODO: send FCM push notification via firebase-admin.
    return Promise.resolve();
  }
}
