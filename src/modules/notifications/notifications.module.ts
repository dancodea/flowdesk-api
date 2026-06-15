import { Module } from '@nestjs/common';
import { EventsModule } from '../../gateways/events.module';
import { JobsModule } from '../../jobs/jobs.module';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';

@Module({
  // JobsModule exposes the email/push BullMQ queues; EventsModule exposes the
  // Socket.IO gateway for real-time delivery.
  imports: [JobsModule, EventsModule],
  controllers: [NotificationsController],
  providers: [NotificationsService],
  exports: [NotificationsService],
})
export class NotificationsModule {}
