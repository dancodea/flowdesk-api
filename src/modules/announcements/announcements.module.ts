import { Module } from '@nestjs/common';
import { EventsModule } from '../../gateways/events.module';
import { AnnouncementsController } from './announcements.controller';
import { AnnouncementsService } from './announcements.service';

@Module({
  imports: [EventsModule],
  controllers: [AnnouncementsController],
  providers: [AnnouncementsService],
  exports: [AnnouncementsService],
})
export class AnnouncementsModule {}
