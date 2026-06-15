import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';

export const PAYROLL_QUEUE = 'payroll';

@Processor(PAYROLL_QUEUE)
export class PayrollProcessor extends WorkerHost {
  private readonly logger = new Logger(PayrollProcessor.name);

  process(job: Job): Promise<void> {
    this.logger.log(`Processing payroll job ${job.name} (${job.id})`);
    // TODO: generate payslip PDFs, initiate bank transfers, mark run COMPLETED.
    return Promise.resolve();
  }
}
