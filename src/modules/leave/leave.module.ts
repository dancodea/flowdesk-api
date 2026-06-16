import { Module } from '@nestjs/common';
import { NotificationsModule } from '../notifications/notifications.module';
import { HolidaysController, LeaveController } from './leave.controller';
import { LeaveService } from './leave.service';

@Module({
  imports: [NotificationsModule],
  controllers: [LeaveController, HolidaysController],
  providers: [LeaveService],
  exports: [LeaveService],
})
export class LeaveModule {}
