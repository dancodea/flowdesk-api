import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { NotificationsModule } from '../notifications/notifications.module';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';

@Module({
  // AuthModule provides AuthMailService for sending portal invite emails.
  // NotificationsModule provides NotificationsService for in-app / push alerts.
  imports: [AuthModule, NotificationsModule],
  controllers: [EmployeesController],
  providers: [EmployeesService],
  exports: [EmployeesService],
})
export class EmployeesModule {}
