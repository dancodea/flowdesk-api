import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { PayrollProcessor, PAYROLL_QUEUE } from './payroll.processor';
import { EmailProcessor, EMAIL_QUEUE } from './email.processor';
import { PushProcessor, PUSH_QUEUE } from './push.processor';
import { ReportsProcessor, REPORTS_QUEUE } from './reports.processor';

@Module({
  imports: [
    BullModule.registerQueue(
      { name: PAYROLL_QUEUE },
      { name: EMAIL_QUEUE },
      { name: PUSH_QUEUE },
      { name: REPORTS_QUEUE },
    ),
  ],
  providers: [
    PayrollProcessor,
    EmailProcessor,
    PushProcessor,
    ReportsProcessor,
  ],
  exports: [BullModule],
})
export class JobsModule {}
