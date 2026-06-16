"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const schedule_1 = require("@nestjs/schedule");
const event_emitter_1 = require("@nestjs/event-emitter");
const throttler_1 = require("@nestjs/throttler");
const bullmq_1 = require("@nestjs/bullmq");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const app_config_1 = __importDefault(require("./config/app.config"));
const jwt_config_1 = __importDefault(require("./config/jwt.config"));
const cloudinary_config_1 = __importDefault(require("./config/cloudinary.config"));
const prisma_module_1 = require("./prisma/prisma.module");
const events_module_1 = require("./gateways/events.module");
const jobs_module_1 = require("./jobs/jobs.module");
const tenant_middleware_1 = require("./common/middleware/tenant.middleware");
const auth_module_1 = require("./modules/auth/auth.module");
const organizations_module_1 = require("./modules/organizations/organizations.module");
const departments_module_1 = require("./modules/departments/departments.module");
const locations_module_1 = require("./modules/locations/locations.module");
const employees_module_1 = require("./modules/employees/employees.module");
const recruitment_module_1 = require("./modules/recruitment/recruitment.module");
const onboarding_module_1 = require("./modules/onboarding/onboarding.module");
const attendance_module_1 = require("./modules/attendance/attendance.module");
const shifts_module_1 = require("./modules/shifts/shifts.module");
const leave_module_1 = require("./modules/leave/leave.module");
const payroll_module_1 = require("./modules/payroll/payroll.module");
const performance_module_1 = require("./modules/performance/performance.module");
const assets_module_1 = require("./modules/assets/assets.module");
const notifications_module_1 = require("./modules/notifications/notifications.module");
const announcements_module_1 = require("./modules/announcements/announcements.module");
const reports_module_1 = require("./modules/reports/reports.module");
const audit_module_1 = require("./modules/audit/audit.module");
const billing_module_1 = require("./modules/billing/billing.module");
const uploads_module_1 = require("./modules/uploads/uploads.module");
const settings_module_1 = require("./modules/settings/settings.module");
const invitations_module_1 = require("./modules/invitations/invitations.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(tenant_middleware_1.TenantMiddleware).forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [app_config_1.default, jwt_config_1.default, cloudinary_config_1.default],
            }),
            jwt_1.JwtModule.register({ global: true, secret: process.env.JWT_SECRET }),
            schedule_1.ScheduleModule.forRoot(),
            event_emitter_1.EventEmitterModule.forRoot(),
            throttler_1.ThrottlerModule.forRoot([
                {
                    ttl: parseInt(process.env.THROTTLE_TTL ?? '60', 10) * 1000,
                    limit: parseInt(process.env.THROTTLE_LIMIT ?? '100', 10),
                },
            ]),
            bullmq_1.BullModule.forRoot({
                connection: { url: process.env.REDIS_URL ?? 'redis://localhost:6379' },
            }),
            prisma_module_1.PrismaModule,
            events_module_1.EventsModule,
            jobs_module_1.JobsModule,
            auth_module_1.AuthModule,
            organizations_module_1.OrganizationsModule,
            departments_module_1.DepartmentsModule,
            locations_module_1.LocationsModule,
            employees_module_1.EmployeesModule,
            recruitment_module_1.RecruitmentModule,
            onboarding_module_1.OnboardingModule,
            attendance_module_1.AttendanceModule,
            shifts_module_1.ShiftsModule,
            leave_module_1.LeaveModule,
            payroll_module_1.PayrollModule,
            performance_module_1.PerformanceModule,
            assets_module_1.AssetsModule,
            notifications_module_1.NotificationsModule,
            announcements_module_1.AnnouncementsModule,
            reports_module_1.ReportsModule,
            audit_module_1.AuditModule,
            billing_module_1.BillingModule,
            uploads_module_1.UploadsModule,
            settings_module_1.SettingsModule,
            invitations_module_1.InvitationsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map