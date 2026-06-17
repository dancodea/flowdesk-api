import { Module } from '@nestjs/common';
import { NotificationsModule } from '../notifications/notifications.module';
import { CareersController, RecruitmentController } from './recruitment.controller';
import { RecruitmentService } from './recruitment.service';

@Module({
  imports: [NotificationsModule],
  controllers: [RecruitmentController, CareersController],
  providers: [RecruitmentService],
  exports: [RecruitmentService],
})
export class RecruitmentModule {}
