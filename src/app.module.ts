import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { ScheduleModule } from '@nestjs/schedule';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ThrottlerModule } from '@nestjs/throttler';
import { BullModule } from '@nestjs/bullmq';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import appConfig from './config/app.config';
import jwtConfig from './config/jwt.config';
import cloudinaryConfig from './config/cloudinary.config';

import { PrismaModule } from './prisma/prisma.module';
import { EventsModule } from './gateways/events.module';
import { JobsModule } from './jobs/jobs.module';
import { TenantMiddleware } from './common/middleware/tenant.middleware';

import { AuthModule } from './modules/auth/auth.module';
import { OrganizationsModule } from './modules/organizations/organizations.module';
import { DepartmentsModule } from './modules/departments/departments.module';
import { LocationsModule } from './modules/locations/locations.module';
import { EmployeesModule } from './modules/employees/employees.module';
import { RecruitmentModule } from './modules/recruitment/recruitment.module';
import { OnboardingModule } from './modules/onboarding/onboarding.module';
import { AttendanceModule } from './modules/attendance/attendance.module';
import { ShiftsModule } from './modules/shifts/shifts.module';
import { LeaveModule } from './modules/leave/leave.module';
import { PayrollModule } from './modules/payroll/payroll.module';
import { PerformanceModule } from './modules/performance/performance.module';
import { AssetsModule } from './modules/assets/assets.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { AnnouncementsModule } from './modules/announcements/announcements.module';
import { ReportsModule } from './modules/reports/reports.module';
import { AuditModule } from './modules/audit/audit.module';
import { BillingModule } from './modules/billing/billing.module';
import { UploadsModule } from './modules/uploads/uploads.module';
import { SettingsModule } from './modules/settings/settings.module';
import { InvitationsModule } from './modules/invitations/invitations.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, jwtConfig, cloudinaryConfig],
    }),
    JwtModule.register({ global: true, secret: process.env.JWT_SECRET }),
    ScheduleModule.forRoot(),
    EventEmitterModule.forRoot(),
    ThrottlerModule.forRoot([
      {
        ttl: parseInt(process.env.THROTTLE_TTL ?? '60', 10) * 1000,
        limit: parseInt(process.env.THROTTLE_LIMIT ?? '100', 10),
      },
    ]),
    BullModule.forRoot({
      connection: { url: process.env.REDIS_URL ?? 'redis://localhost:6379' },
    }),
    PrismaModule,
    EventsModule,
    JobsModule,
    AuthModule,
    OrganizationsModule,
    DepartmentsModule,
    LocationsModule,
    EmployeesModule,
    RecruitmentModule,
    OnboardingModule,
    AttendanceModule,
    ShiftsModule,
    LeaveModule,
    PayrollModule,
    PerformanceModule,
    AssetsModule,
    NotificationsModule,
    AnnouncementsModule,
    ReportsModule,
    AuditModule,
    BillingModule,
    UploadsModule,
    SettingsModule,
    InvitationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TenantMiddleware).forRoutes('*');
  }
}
