import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    $connect(): runtime.Types.Utils.JsPromise<void>;
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    get organization(): Prisma.OrganizationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get user(): Prisma.UserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get emailVerificationToken(): Prisma.EmailVerificationTokenDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get passwordResetToken(): Prisma.PasswordResetTokenDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get invitation(): Prisma.InvitationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get location(): Prisma.LocationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get department(): Prisma.DepartmentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get workSchedule(): Prisma.WorkScheduleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get publicHoliday(): Prisma.PublicHolidayDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get employee(): Prisma.EmployeeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get employeeDocument(): Prisma.EmployeeDocumentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get roleChange(): Prisma.RoleChangeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get jobPosting(): Prisma.JobPostingDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get pipelineStage(): Prisma.PipelineStageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get application(): Prisma.ApplicationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get applicationNote(): Prisma.ApplicationNoteDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get interview(): Prisma.InterviewDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get interviewPanelist(): Prisma.InterviewPanelistDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get interviewFeedback(): Prisma.InterviewFeedbackDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get offer(): Prisma.OfferDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get onboardingTemplate(): Prisma.OnboardingTemplateDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get onboardingTemplateTask(): Prisma.OnboardingTemplateTaskDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get onboardingChecklist(): Prisma.OnboardingChecklistDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get onboardingTask(): Prisma.OnboardingTaskDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get shiftTemplate(): Prisma.ShiftTemplateDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get shiftSchedule(): Prisma.ShiftScheduleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get attendanceEntry(): Prisma.AttendanceEntryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get breakEntry(): Prisma.BreakEntryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get timesheet(): Prisma.TimesheetDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get leaveType(): Prisma.LeaveTypeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get leavePolicy(): Prisma.LeavePolicyDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get leaveBalance(): Prisma.LeaveBalanceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get leaveRequest(): Prisma.LeaveRequestDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get payGroup(): Prisma.PayGroupDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get payRun(): Prisma.PayRunDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get payRunLine(): Prisma.PayRunLineDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get payRunAdjustment(): Prisma.PayRunAdjustmentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get payslip(): Prisma.PayslipDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get deductionType(): Prisma.DeductionTypeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get taxSettings(): Prisma.TaxSettingsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get performanceCycle(): Prisma.PerformanceCycleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get performanceReview(): Prisma.PerformanceReviewDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get goal(): Prisma.GoalDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get goalCheckin(): Prisma.GoalCheckinDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get continuousFeedback(): Prisma.ContinuousFeedbackDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get asset(): Prisma.AssetDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get assetAssignment(): Prisma.AssetAssignmentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get assetRequest(): Prisma.AssetRequestDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get assetMaintenance(): Prisma.AssetMaintenanceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get notification(): Prisma.NotificationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get notificationPreference(): Prisma.NotificationPreferenceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get announcement(): Prisma.AnnouncementDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get announcementRead(): Prisma.AnnouncementReadDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get auditLog(): Prisma.AuditLogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get billingInvoice(): Prisma.BillingInvoiceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
