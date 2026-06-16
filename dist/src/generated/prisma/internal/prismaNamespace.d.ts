import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly Organization: "Organization";
    readonly User: "User";
    readonly RefreshToken: "RefreshToken";
    readonly EmailVerificationToken: "EmailVerificationToken";
    readonly PasswordResetToken: "PasswordResetToken";
    readonly Invitation: "Invitation";
    readonly Location: "Location";
    readonly Department: "Department";
    readonly WorkSchedule: "WorkSchedule";
    readonly PublicHoliday: "PublicHoliday";
    readonly Employee: "Employee";
    readonly EmployeeDocument: "EmployeeDocument";
    readonly RoleChange: "RoleChange";
    readonly JobPosting: "JobPosting";
    readonly PipelineStage: "PipelineStage";
    readonly Application: "Application";
    readonly ApplicationNote: "ApplicationNote";
    readonly Interview: "Interview";
    readonly InterviewPanelist: "InterviewPanelist";
    readonly InterviewFeedback: "InterviewFeedback";
    readonly Offer: "Offer";
    readonly OnboardingTemplate: "OnboardingTemplate";
    readonly OnboardingTemplateTask: "OnboardingTemplateTask";
    readonly OnboardingChecklist: "OnboardingChecklist";
    readonly OnboardingTask: "OnboardingTask";
    readonly ShiftTemplate: "ShiftTemplate";
    readonly ShiftSchedule: "ShiftSchedule";
    readonly AttendanceEntry: "AttendanceEntry";
    readonly BreakEntry: "BreakEntry";
    readonly Timesheet: "Timesheet";
    readonly LeaveType: "LeaveType";
    readonly LeavePolicy: "LeavePolicy";
    readonly LeaveBalance: "LeaveBalance";
    readonly LeaveRequest: "LeaveRequest";
    readonly PayGroup: "PayGroup";
    readonly PayRun: "PayRun";
    readonly PayRunLine: "PayRunLine";
    readonly PayRunAdjustment: "PayRunAdjustment";
    readonly Payslip: "Payslip";
    readonly DeductionType: "DeductionType";
    readonly TaxSettings: "TaxSettings";
    readonly PerformanceCycle: "PerformanceCycle";
    readonly PerformanceReview: "PerformanceReview";
    readonly Goal: "Goal";
    readonly GoalCheckin: "GoalCheckin";
    readonly ContinuousFeedback: "ContinuousFeedback";
    readonly Asset: "Asset";
    readonly AssetAssignment: "AssetAssignment";
    readonly AssetRequest: "AssetRequest";
    readonly AssetMaintenance: "AssetMaintenance";
    readonly Notification: "Notification";
    readonly NotificationPreference: "NotificationPreference";
    readonly Announcement: "Announcement";
    readonly AnnouncementRead: "AnnouncementRead";
    readonly AuditLog: "AuditLog";
    readonly BillingInvoice: "BillingInvoice";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "organization" | "user" | "refreshToken" | "emailVerificationToken" | "passwordResetToken" | "invitation" | "location" | "department" | "workSchedule" | "publicHoliday" | "employee" | "employeeDocument" | "roleChange" | "jobPosting" | "pipelineStage" | "application" | "applicationNote" | "interview" | "interviewPanelist" | "interviewFeedback" | "offer" | "onboardingTemplate" | "onboardingTemplateTask" | "onboardingChecklist" | "onboardingTask" | "shiftTemplate" | "shiftSchedule" | "attendanceEntry" | "breakEntry" | "timesheet" | "leaveType" | "leavePolicy" | "leaveBalance" | "leaveRequest" | "payGroup" | "payRun" | "payRunLine" | "payRunAdjustment" | "payslip" | "deductionType" | "taxSettings" | "performanceCycle" | "performanceReview" | "goal" | "goalCheckin" | "continuousFeedback" | "asset" | "assetAssignment" | "assetRequest" | "assetMaintenance" | "notification" | "notificationPreference" | "announcement" | "announcementRead" | "auditLog" | "billingInvoice";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Organization: {
            payload: Prisma.$OrganizationPayload<ExtArgs>;
            fields: Prisma.OrganizationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrganizationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationPayload>;
                };
                findFirst: {
                    args: Prisma.OrganizationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationPayload>;
                };
                findMany: {
                    args: Prisma.OrganizationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationPayload>[];
                };
                create: {
                    args: Prisma.OrganizationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationPayload>;
                };
                createMany: {
                    args: Prisma.OrganizationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationPayload>[];
                };
                delete: {
                    args: Prisma.OrganizationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationPayload>;
                };
                update: {
                    args: Prisma.OrganizationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationPayload>;
                };
                deleteMany: {
                    args: Prisma.OrganizationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrganizationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationPayload>[];
                };
                upsert: {
                    args: Prisma.OrganizationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizationPayload>;
                };
                aggregate: {
                    args: Prisma.OrganizationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrganization>;
                };
                groupBy: {
                    args: Prisma.OrganizationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrganizationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrganizationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrganizationCountAggregateOutputType> | number;
                };
            };
        };
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        RefreshToken: {
            payload: Prisma.$RefreshTokenPayload<ExtArgs>;
            fields: Prisma.RefreshTokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                findFirst: {
                    args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                findMany: {
                    args: Prisma.RefreshTokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
                };
                create: {
                    args: Prisma.RefreshTokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                createMany: {
                    args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
                };
                delete: {
                    args: Prisma.RefreshTokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                update: {
                    args: Prisma.RefreshTokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                deleteMany: {
                    args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
                };
                upsert: {
                    args: Prisma.RefreshTokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                aggregate: {
                    args: Prisma.RefreshTokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRefreshToken>;
                };
                groupBy: {
                    args: Prisma.RefreshTokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RefreshTokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RefreshTokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RefreshTokenCountAggregateOutputType> | number;
                };
            };
        };
        EmailVerificationToken: {
            payload: Prisma.$EmailVerificationTokenPayload<ExtArgs>;
            fields: Prisma.EmailVerificationTokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EmailVerificationTokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EmailVerificationTokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>;
                };
                findFirst: {
                    args: Prisma.EmailVerificationTokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EmailVerificationTokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>;
                };
                findMany: {
                    args: Prisma.EmailVerificationTokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>[];
                };
                create: {
                    args: Prisma.EmailVerificationTokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>;
                };
                createMany: {
                    args: Prisma.EmailVerificationTokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EmailVerificationTokenCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>[];
                };
                delete: {
                    args: Prisma.EmailVerificationTokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>;
                };
                update: {
                    args: Prisma.EmailVerificationTokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>;
                };
                deleteMany: {
                    args: Prisma.EmailVerificationTokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EmailVerificationTokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EmailVerificationTokenUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>[];
                };
                upsert: {
                    args: Prisma.EmailVerificationTokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>;
                };
                aggregate: {
                    args: Prisma.EmailVerificationTokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEmailVerificationToken>;
                };
                groupBy: {
                    args: Prisma.EmailVerificationTokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EmailVerificationTokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EmailVerificationTokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EmailVerificationTokenCountAggregateOutputType> | number;
                };
            };
        };
        PasswordResetToken: {
            payload: Prisma.$PasswordResetTokenPayload<ExtArgs>;
            fields: Prisma.PasswordResetTokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PasswordResetTokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                findFirst: {
                    args: Prisma.PasswordResetTokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                findMany: {
                    args: Prisma.PasswordResetTokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[];
                };
                create: {
                    args: Prisma.PasswordResetTokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                createMany: {
                    args: Prisma.PasswordResetTokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[];
                };
                delete: {
                    args: Prisma.PasswordResetTokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                update: {
                    args: Prisma.PasswordResetTokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                deleteMany: {
                    args: Prisma.PasswordResetTokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PasswordResetTokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[];
                };
                upsert: {
                    args: Prisma.PasswordResetTokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                aggregate: {
                    args: Prisma.PasswordResetTokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePasswordResetToken>;
                };
                groupBy: {
                    args: Prisma.PasswordResetTokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PasswordResetTokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PasswordResetTokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PasswordResetTokenCountAggregateOutputType> | number;
                };
            };
        };
        Invitation: {
            payload: Prisma.$InvitationPayload<ExtArgs>;
            fields: Prisma.InvitationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.InvitationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.InvitationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationPayload>;
                };
                findFirst: {
                    args: Prisma.InvitationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.InvitationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationPayload>;
                };
                findMany: {
                    args: Prisma.InvitationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationPayload>[];
                };
                create: {
                    args: Prisma.InvitationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationPayload>;
                };
                createMany: {
                    args: Prisma.InvitationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.InvitationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationPayload>[];
                };
                delete: {
                    args: Prisma.InvitationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationPayload>;
                };
                update: {
                    args: Prisma.InvitationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationPayload>;
                };
                deleteMany: {
                    args: Prisma.InvitationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.InvitationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.InvitationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationPayload>[];
                };
                upsert: {
                    args: Prisma.InvitationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitationPayload>;
                };
                aggregate: {
                    args: Prisma.InvitationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInvitation>;
                };
                groupBy: {
                    args: Prisma.InvitationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InvitationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.InvitationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InvitationCountAggregateOutputType> | number;
                };
            };
        };
        Location: {
            payload: Prisma.$LocationPayload<ExtArgs>;
            fields: Prisma.LocationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LocationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocationPayload>;
                };
                findFirst: {
                    args: Prisma.LocationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocationPayload>;
                };
                findMany: {
                    args: Prisma.LocationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocationPayload>[];
                };
                create: {
                    args: Prisma.LocationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocationPayload>;
                };
                createMany: {
                    args: Prisma.LocationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LocationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocationPayload>[];
                };
                delete: {
                    args: Prisma.LocationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocationPayload>;
                };
                update: {
                    args: Prisma.LocationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocationPayload>;
                };
                deleteMany: {
                    args: Prisma.LocationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LocationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocationPayload>[];
                };
                upsert: {
                    args: Prisma.LocationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocationPayload>;
                };
                aggregate: {
                    args: Prisma.LocationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLocation>;
                };
                groupBy: {
                    args: Prisma.LocationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LocationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LocationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LocationCountAggregateOutputType> | number;
                };
            };
        };
        Department: {
            payload: Prisma.$DepartmentPayload<ExtArgs>;
            fields: Prisma.DepartmentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DepartmentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload>;
                };
                findFirst: {
                    args: Prisma.DepartmentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload>;
                };
                findMany: {
                    args: Prisma.DepartmentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload>[];
                };
                create: {
                    args: Prisma.DepartmentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload>;
                };
                createMany: {
                    args: Prisma.DepartmentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload>[];
                };
                delete: {
                    args: Prisma.DepartmentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload>;
                };
                update: {
                    args: Prisma.DepartmentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload>;
                };
                deleteMany: {
                    args: Prisma.DepartmentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DepartmentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DepartmentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload>[];
                };
                upsert: {
                    args: Prisma.DepartmentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload>;
                };
                aggregate: {
                    args: Prisma.DepartmentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDepartment>;
                };
                groupBy: {
                    args: Prisma.DepartmentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DepartmentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DepartmentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DepartmentCountAggregateOutputType> | number;
                };
            };
        };
        WorkSchedule: {
            payload: Prisma.$WorkSchedulePayload<ExtArgs>;
            fields: Prisma.WorkScheduleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.WorkScheduleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkSchedulePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.WorkScheduleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkSchedulePayload>;
                };
                findFirst: {
                    args: Prisma.WorkScheduleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkSchedulePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.WorkScheduleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkSchedulePayload>;
                };
                findMany: {
                    args: Prisma.WorkScheduleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkSchedulePayload>[];
                };
                create: {
                    args: Prisma.WorkScheduleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkSchedulePayload>;
                };
                createMany: {
                    args: Prisma.WorkScheduleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.WorkScheduleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkSchedulePayload>[];
                };
                delete: {
                    args: Prisma.WorkScheduleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkSchedulePayload>;
                };
                update: {
                    args: Prisma.WorkScheduleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkSchedulePayload>;
                };
                deleteMany: {
                    args: Prisma.WorkScheduleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.WorkScheduleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.WorkScheduleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkSchedulePayload>[];
                };
                upsert: {
                    args: Prisma.WorkScheduleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WorkSchedulePayload>;
                };
                aggregate: {
                    args: Prisma.WorkScheduleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateWorkSchedule>;
                };
                groupBy: {
                    args: Prisma.WorkScheduleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WorkScheduleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.WorkScheduleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WorkScheduleCountAggregateOutputType> | number;
                };
            };
        };
        PublicHoliday: {
            payload: Prisma.$PublicHolidayPayload<ExtArgs>;
            fields: Prisma.PublicHolidayFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PublicHolidayFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PublicHolidayPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PublicHolidayFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PublicHolidayPayload>;
                };
                findFirst: {
                    args: Prisma.PublicHolidayFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PublicHolidayPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PublicHolidayFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PublicHolidayPayload>;
                };
                findMany: {
                    args: Prisma.PublicHolidayFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PublicHolidayPayload>[];
                };
                create: {
                    args: Prisma.PublicHolidayCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PublicHolidayPayload>;
                };
                createMany: {
                    args: Prisma.PublicHolidayCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PublicHolidayCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PublicHolidayPayload>[];
                };
                delete: {
                    args: Prisma.PublicHolidayDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PublicHolidayPayload>;
                };
                update: {
                    args: Prisma.PublicHolidayUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PublicHolidayPayload>;
                };
                deleteMany: {
                    args: Prisma.PublicHolidayDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PublicHolidayUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PublicHolidayUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PublicHolidayPayload>[];
                };
                upsert: {
                    args: Prisma.PublicHolidayUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PublicHolidayPayload>;
                };
                aggregate: {
                    args: Prisma.PublicHolidayAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePublicHoliday>;
                };
                groupBy: {
                    args: Prisma.PublicHolidayGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PublicHolidayGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PublicHolidayCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PublicHolidayCountAggregateOutputType> | number;
                };
            };
        };
        Employee: {
            payload: Prisma.$EmployeePayload<ExtArgs>;
            fields: Prisma.EmployeeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EmployeeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeePayload>;
                };
                findFirst: {
                    args: Prisma.EmployeeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeePayload>;
                };
                findMany: {
                    args: Prisma.EmployeeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeePayload>[];
                };
                create: {
                    args: Prisma.EmployeeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeePayload>;
                };
                createMany: {
                    args: Prisma.EmployeeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeePayload>[];
                };
                delete: {
                    args: Prisma.EmployeeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeePayload>;
                };
                update: {
                    args: Prisma.EmployeeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeePayload>;
                };
                deleteMany: {
                    args: Prisma.EmployeeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EmployeeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeePayload>[];
                };
                upsert: {
                    args: Prisma.EmployeeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeePayload>;
                };
                aggregate: {
                    args: Prisma.EmployeeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEmployee>;
                };
                groupBy: {
                    args: Prisma.EmployeeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EmployeeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EmployeeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EmployeeCountAggregateOutputType> | number;
                };
            };
        };
        EmployeeDocument: {
            payload: Prisma.$EmployeeDocumentPayload<ExtArgs>;
            fields: Prisma.EmployeeDocumentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EmployeeDocumentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeeDocumentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EmployeeDocumentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeeDocumentPayload>;
                };
                findFirst: {
                    args: Prisma.EmployeeDocumentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeeDocumentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EmployeeDocumentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeeDocumentPayload>;
                };
                findMany: {
                    args: Prisma.EmployeeDocumentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeeDocumentPayload>[];
                };
                create: {
                    args: Prisma.EmployeeDocumentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeeDocumentPayload>;
                };
                createMany: {
                    args: Prisma.EmployeeDocumentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EmployeeDocumentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeeDocumentPayload>[];
                };
                delete: {
                    args: Prisma.EmployeeDocumentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeeDocumentPayload>;
                };
                update: {
                    args: Prisma.EmployeeDocumentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeeDocumentPayload>;
                };
                deleteMany: {
                    args: Prisma.EmployeeDocumentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EmployeeDocumentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EmployeeDocumentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeeDocumentPayload>[];
                };
                upsert: {
                    args: Prisma.EmployeeDocumentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeeDocumentPayload>;
                };
                aggregate: {
                    args: Prisma.EmployeeDocumentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEmployeeDocument>;
                };
                groupBy: {
                    args: Prisma.EmployeeDocumentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EmployeeDocumentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EmployeeDocumentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EmployeeDocumentCountAggregateOutputType> | number;
                };
            };
        };
        RoleChange: {
            payload: Prisma.$RoleChangePayload<ExtArgs>;
            fields: Prisma.RoleChangeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RoleChangeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoleChangePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RoleChangeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoleChangePayload>;
                };
                findFirst: {
                    args: Prisma.RoleChangeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoleChangePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RoleChangeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoleChangePayload>;
                };
                findMany: {
                    args: Prisma.RoleChangeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoleChangePayload>[];
                };
                create: {
                    args: Prisma.RoleChangeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoleChangePayload>;
                };
                createMany: {
                    args: Prisma.RoleChangeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RoleChangeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoleChangePayload>[];
                };
                delete: {
                    args: Prisma.RoleChangeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoleChangePayload>;
                };
                update: {
                    args: Prisma.RoleChangeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoleChangePayload>;
                };
                deleteMany: {
                    args: Prisma.RoleChangeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RoleChangeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RoleChangeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoleChangePayload>[];
                };
                upsert: {
                    args: Prisma.RoleChangeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RoleChangePayload>;
                };
                aggregate: {
                    args: Prisma.RoleChangeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRoleChange>;
                };
                groupBy: {
                    args: Prisma.RoleChangeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RoleChangeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RoleChangeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RoleChangeCountAggregateOutputType> | number;
                };
            };
        };
        JobPosting: {
            payload: Prisma.$JobPostingPayload<ExtArgs>;
            fields: Prisma.JobPostingFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.JobPostingFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobPostingPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.JobPostingFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobPostingPayload>;
                };
                findFirst: {
                    args: Prisma.JobPostingFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobPostingPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.JobPostingFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobPostingPayload>;
                };
                findMany: {
                    args: Prisma.JobPostingFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobPostingPayload>[];
                };
                create: {
                    args: Prisma.JobPostingCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobPostingPayload>;
                };
                createMany: {
                    args: Prisma.JobPostingCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.JobPostingCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobPostingPayload>[];
                };
                delete: {
                    args: Prisma.JobPostingDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobPostingPayload>;
                };
                update: {
                    args: Prisma.JobPostingUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobPostingPayload>;
                };
                deleteMany: {
                    args: Prisma.JobPostingDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.JobPostingUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.JobPostingUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobPostingPayload>[];
                };
                upsert: {
                    args: Prisma.JobPostingUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobPostingPayload>;
                };
                aggregate: {
                    args: Prisma.JobPostingAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateJobPosting>;
                };
                groupBy: {
                    args: Prisma.JobPostingGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.JobPostingGroupByOutputType>[];
                };
                count: {
                    args: Prisma.JobPostingCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.JobPostingCountAggregateOutputType> | number;
                };
            };
        };
        PipelineStage: {
            payload: Prisma.$PipelineStagePayload<ExtArgs>;
            fields: Prisma.PipelineStageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PipelineStageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PipelineStagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PipelineStageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PipelineStagePayload>;
                };
                findFirst: {
                    args: Prisma.PipelineStageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PipelineStagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PipelineStageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PipelineStagePayload>;
                };
                findMany: {
                    args: Prisma.PipelineStageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PipelineStagePayload>[];
                };
                create: {
                    args: Prisma.PipelineStageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PipelineStagePayload>;
                };
                createMany: {
                    args: Prisma.PipelineStageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PipelineStageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PipelineStagePayload>[];
                };
                delete: {
                    args: Prisma.PipelineStageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PipelineStagePayload>;
                };
                update: {
                    args: Prisma.PipelineStageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PipelineStagePayload>;
                };
                deleteMany: {
                    args: Prisma.PipelineStageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PipelineStageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PipelineStageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PipelineStagePayload>[];
                };
                upsert: {
                    args: Prisma.PipelineStageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PipelineStagePayload>;
                };
                aggregate: {
                    args: Prisma.PipelineStageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePipelineStage>;
                };
                groupBy: {
                    args: Prisma.PipelineStageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PipelineStageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PipelineStageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PipelineStageCountAggregateOutputType> | number;
                };
            };
        };
        Application: {
            payload: Prisma.$ApplicationPayload<ExtArgs>;
            fields: Prisma.ApplicationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ApplicationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApplicationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApplicationPayload>;
                };
                findFirst: {
                    args: Prisma.ApplicationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApplicationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApplicationPayload>;
                };
                findMany: {
                    args: Prisma.ApplicationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApplicationPayload>[];
                };
                create: {
                    args: Prisma.ApplicationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApplicationPayload>;
                };
                createMany: {
                    args: Prisma.ApplicationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ApplicationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApplicationPayload>[];
                };
                delete: {
                    args: Prisma.ApplicationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApplicationPayload>;
                };
                update: {
                    args: Prisma.ApplicationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApplicationPayload>;
                };
                deleteMany: {
                    args: Prisma.ApplicationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ApplicationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ApplicationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApplicationPayload>[];
                };
                upsert: {
                    args: Prisma.ApplicationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApplicationPayload>;
                };
                aggregate: {
                    args: Prisma.ApplicationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateApplication>;
                };
                groupBy: {
                    args: Prisma.ApplicationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ApplicationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ApplicationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ApplicationCountAggregateOutputType> | number;
                };
            };
        };
        ApplicationNote: {
            payload: Prisma.$ApplicationNotePayload<ExtArgs>;
            fields: Prisma.ApplicationNoteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ApplicationNoteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApplicationNotePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ApplicationNoteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApplicationNotePayload>;
                };
                findFirst: {
                    args: Prisma.ApplicationNoteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApplicationNotePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ApplicationNoteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApplicationNotePayload>;
                };
                findMany: {
                    args: Prisma.ApplicationNoteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApplicationNotePayload>[];
                };
                create: {
                    args: Prisma.ApplicationNoteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApplicationNotePayload>;
                };
                createMany: {
                    args: Prisma.ApplicationNoteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ApplicationNoteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApplicationNotePayload>[];
                };
                delete: {
                    args: Prisma.ApplicationNoteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApplicationNotePayload>;
                };
                update: {
                    args: Prisma.ApplicationNoteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApplicationNotePayload>;
                };
                deleteMany: {
                    args: Prisma.ApplicationNoteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ApplicationNoteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ApplicationNoteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApplicationNotePayload>[];
                };
                upsert: {
                    args: Prisma.ApplicationNoteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApplicationNotePayload>;
                };
                aggregate: {
                    args: Prisma.ApplicationNoteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateApplicationNote>;
                };
                groupBy: {
                    args: Prisma.ApplicationNoteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ApplicationNoteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ApplicationNoteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ApplicationNoteCountAggregateOutputType> | number;
                };
            };
        };
        Interview: {
            payload: Prisma.$InterviewPayload<ExtArgs>;
            fields: Prisma.InterviewFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.InterviewFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.InterviewFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPayload>;
                };
                findFirst: {
                    args: Prisma.InterviewFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.InterviewFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPayload>;
                };
                findMany: {
                    args: Prisma.InterviewFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPayload>[];
                };
                create: {
                    args: Prisma.InterviewCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPayload>;
                };
                createMany: {
                    args: Prisma.InterviewCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.InterviewCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPayload>[];
                };
                delete: {
                    args: Prisma.InterviewDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPayload>;
                };
                update: {
                    args: Prisma.InterviewUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPayload>;
                };
                deleteMany: {
                    args: Prisma.InterviewDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.InterviewUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.InterviewUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPayload>[];
                };
                upsert: {
                    args: Prisma.InterviewUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPayload>;
                };
                aggregate: {
                    args: Prisma.InterviewAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInterview>;
                };
                groupBy: {
                    args: Prisma.InterviewGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InterviewGroupByOutputType>[];
                };
                count: {
                    args: Prisma.InterviewCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InterviewCountAggregateOutputType> | number;
                };
            };
        };
        InterviewPanelist: {
            payload: Prisma.$InterviewPanelistPayload<ExtArgs>;
            fields: Prisma.InterviewPanelistFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.InterviewPanelistFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPanelistPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.InterviewPanelistFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPanelistPayload>;
                };
                findFirst: {
                    args: Prisma.InterviewPanelistFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPanelistPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.InterviewPanelistFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPanelistPayload>;
                };
                findMany: {
                    args: Prisma.InterviewPanelistFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPanelistPayload>[];
                };
                create: {
                    args: Prisma.InterviewPanelistCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPanelistPayload>;
                };
                createMany: {
                    args: Prisma.InterviewPanelistCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.InterviewPanelistCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPanelistPayload>[];
                };
                delete: {
                    args: Prisma.InterviewPanelistDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPanelistPayload>;
                };
                update: {
                    args: Prisma.InterviewPanelistUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPanelistPayload>;
                };
                deleteMany: {
                    args: Prisma.InterviewPanelistDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.InterviewPanelistUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.InterviewPanelistUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPanelistPayload>[];
                };
                upsert: {
                    args: Prisma.InterviewPanelistUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewPanelistPayload>;
                };
                aggregate: {
                    args: Prisma.InterviewPanelistAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInterviewPanelist>;
                };
                groupBy: {
                    args: Prisma.InterviewPanelistGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InterviewPanelistGroupByOutputType>[];
                };
                count: {
                    args: Prisma.InterviewPanelistCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InterviewPanelistCountAggregateOutputType> | number;
                };
            };
        };
        InterviewFeedback: {
            payload: Prisma.$InterviewFeedbackPayload<ExtArgs>;
            fields: Prisma.InterviewFeedbackFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.InterviewFeedbackFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewFeedbackPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.InterviewFeedbackFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewFeedbackPayload>;
                };
                findFirst: {
                    args: Prisma.InterviewFeedbackFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewFeedbackPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.InterviewFeedbackFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewFeedbackPayload>;
                };
                findMany: {
                    args: Prisma.InterviewFeedbackFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewFeedbackPayload>[];
                };
                create: {
                    args: Prisma.InterviewFeedbackCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewFeedbackPayload>;
                };
                createMany: {
                    args: Prisma.InterviewFeedbackCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.InterviewFeedbackCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewFeedbackPayload>[];
                };
                delete: {
                    args: Prisma.InterviewFeedbackDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewFeedbackPayload>;
                };
                update: {
                    args: Prisma.InterviewFeedbackUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewFeedbackPayload>;
                };
                deleteMany: {
                    args: Prisma.InterviewFeedbackDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.InterviewFeedbackUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.InterviewFeedbackUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewFeedbackPayload>[];
                };
                upsert: {
                    args: Prisma.InterviewFeedbackUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterviewFeedbackPayload>;
                };
                aggregate: {
                    args: Prisma.InterviewFeedbackAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInterviewFeedback>;
                };
                groupBy: {
                    args: Prisma.InterviewFeedbackGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InterviewFeedbackGroupByOutputType>[];
                };
                count: {
                    args: Prisma.InterviewFeedbackCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InterviewFeedbackCountAggregateOutputType> | number;
                };
            };
        };
        Offer: {
            payload: Prisma.$OfferPayload<ExtArgs>;
            fields: Prisma.OfferFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OfferFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OfferPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OfferFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OfferPayload>;
                };
                findFirst: {
                    args: Prisma.OfferFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OfferPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OfferFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OfferPayload>;
                };
                findMany: {
                    args: Prisma.OfferFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OfferPayload>[];
                };
                create: {
                    args: Prisma.OfferCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OfferPayload>;
                };
                createMany: {
                    args: Prisma.OfferCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OfferCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OfferPayload>[];
                };
                delete: {
                    args: Prisma.OfferDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OfferPayload>;
                };
                update: {
                    args: Prisma.OfferUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OfferPayload>;
                };
                deleteMany: {
                    args: Prisma.OfferDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OfferUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OfferUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OfferPayload>[];
                };
                upsert: {
                    args: Prisma.OfferUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OfferPayload>;
                };
                aggregate: {
                    args: Prisma.OfferAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOffer>;
                };
                groupBy: {
                    args: Prisma.OfferGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OfferGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OfferCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OfferCountAggregateOutputType> | number;
                };
            };
        };
        OnboardingTemplate: {
            payload: Prisma.$OnboardingTemplatePayload<ExtArgs>;
            fields: Prisma.OnboardingTemplateFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OnboardingTemplateFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingTemplatePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OnboardingTemplateFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingTemplatePayload>;
                };
                findFirst: {
                    args: Prisma.OnboardingTemplateFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingTemplatePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OnboardingTemplateFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingTemplatePayload>;
                };
                findMany: {
                    args: Prisma.OnboardingTemplateFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingTemplatePayload>[];
                };
                create: {
                    args: Prisma.OnboardingTemplateCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingTemplatePayload>;
                };
                createMany: {
                    args: Prisma.OnboardingTemplateCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OnboardingTemplateCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingTemplatePayload>[];
                };
                delete: {
                    args: Prisma.OnboardingTemplateDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingTemplatePayload>;
                };
                update: {
                    args: Prisma.OnboardingTemplateUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingTemplatePayload>;
                };
                deleteMany: {
                    args: Prisma.OnboardingTemplateDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OnboardingTemplateUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OnboardingTemplateUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingTemplatePayload>[];
                };
                upsert: {
                    args: Prisma.OnboardingTemplateUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingTemplatePayload>;
                };
                aggregate: {
                    args: Prisma.OnboardingTemplateAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOnboardingTemplate>;
                };
                groupBy: {
                    args: Prisma.OnboardingTemplateGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OnboardingTemplateGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OnboardingTemplateCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OnboardingTemplateCountAggregateOutputType> | number;
                };
            };
        };
        OnboardingTemplateTask: {
            payload: Prisma.$OnboardingTemplateTaskPayload<ExtArgs>;
            fields: Prisma.OnboardingTemplateTaskFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OnboardingTemplateTaskFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingTemplateTaskPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OnboardingTemplateTaskFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingTemplateTaskPayload>;
                };
                findFirst: {
                    args: Prisma.OnboardingTemplateTaskFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingTemplateTaskPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OnboardingTemplateTaskFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingTemplateTaskPayload>;
                };
                findMany: {
                    args: Prisma.OnboardingTemplateTaskFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingTemplateTaskPayload>[];
                };
                create: {
                    args: Prisma.OnboardingTemplateTaskCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingTemplateTaskPayload>;
                };
                createMany: {
                    args: Prisma.OnboardingTemplateTaskCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OnboardingTemplateTaskCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingTemplateTaskPayload>[];
                };
                delete: {
                    args: Prisma.OnboardingTemplateTaskDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingTemplateTaskPayload>;
                };
                update: {
                    args: Prisma.OnboardingTemplateTaskUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingTemplateTaskPayload>;
                };
                deleteMany: {
                    args: Prisma.OnboardingTemplateTaskDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OnboardingTemplateTaskUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OnboardingTemplateTaskUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingTemplateTaskPayload>[];
                };
                upsert: {
                    args: Prisma.OnboardingTemplateTaskUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingTemplateTaskPayload>;
                };
                aggregate: {
                    args: Prisma.OnboardingTemplateTaskAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOnboardingTemplateTask>;
                };
                groupBy: {
                    args: Prisma.OnboardingTemplateTaskGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OnboardingTemplateTaskGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OnboardingTemplateTaskCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OnboardingTemplateTaskCountAggregateOutputType> | number;
                };
            };
        };
        OnboardingChecklist: {
            payload: Prisma.$OnboardingChecklistPayload<ExtArgs>;
            fields: Prisma.OnboardingChecklistFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OnboardingChecklistFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingChecklistPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OnboardingChecklistFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingChecklistPayload>;
                };
                findFirst: {
                    args: Prisma.OnboardingChecklistFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingChecklistPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OnboardingChecklistFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingChecklistPayload>;
                };
                findMany: {
                    args: Prisma.OnboardingChecklistFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingChecklistPayload>[];
                };
                create: {
                    args: Prisma.OnboardingChecklistCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingChecklistPayload>;
                };
                createMany: {
                    args: Prisma.OnboardingChecklistCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OnboardingChecklistCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingChecklistPayload>[];
                };
                delete: {
                    args: Prisma.OnboardingChecklistDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingChecklistPayload>;
                };
                update: {
                    args: Prisma.OnboardingChecklistUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingChecklistPayload>;
                };
                deleteMany: {
                    args: Prisma.OnboardingChecklistDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OnboardingChecklistUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OnboardingChecklistUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingChecklistPayload>[];
                };
                upsert: {
                    args: Prisma.OnboardingChecklistUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingChecklistPayload>;
                };
                aggregate: {
                    args: Prisma.OnboardingChecklistAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOnboardingChecklist>;
                };
                groupBy: {
                    args: Prisma.OnboardingChecklistGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OnboardingChecklistGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OnboardingChecklistCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OnboardingChecklistCountAggregateOutputType> | number;
                };
            };
        };
        OnboardingTask: {
            payload: Prisma.$OnboardingTaskPayload<ExtArgs>;
            fields: Prisma.OnboardingTaskFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OnboardingTaskFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingTaskPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OnboardingTaskFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingTaskPayload>;
                };
                findFirst: {
                    args: Prisma.OnboardingTaskFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingTaskPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OnboardingTaskFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingTaskPayload>;
                };
                findMany: {
                    args: Prisma.OnboardingTaskFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingTaskPayload>[];
                };
                create: {
                    args: Prisma.OnboardingTaskCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingTaskPayload>;
                };
                createMany: {
                    args: Prisma.OnboardingTaskCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OnboardingTaskCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingTaskPayload>[];
                };
                delete: {
                    args: Prisma.OnboardingTaskDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingTaskPayload>;
                };
                update: {
                    args: Prisma.OnboardingTaskUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingTaskPayload>;
                };
                deleteMany: {
                    args: Prisma.OnboardingTaskDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OnboardingTaskUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OnboardingTaskUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingTaskPayload>[];
                };
                upsert: {
                    args: Prisma.OnboardingTaskUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OnboardingTaskPayload>;
                };
                aggregate: {
                    args: Prisma.OnboardingTaskAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOnboardingTask>;
                };
                groupBy: {
                    args: Prisma.OnboardingTaskGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OnboardingTaskGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OnboardingTaskCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OnboardingTaskCountAggregateOutputType> | number;
                };
            };
        };
        ShiftTemplate: {
            payload: Prisma.$ShiftTemplatePayload<ExtArgs>;
            fields: Prisma.ShiftTemplateFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ShiftTemplateFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShiftTemplatePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ShiftTemplateFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShiftTemplatePayload>;
                };
                findFirst: {
                    args: Prisma.ShiftTemplateFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShiftTemplatePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ShiftTemplateFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShiftTemplatePayload>;
                };
                findMany: {
                    args: Prisma.ShiftTemplateFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShiftTemplatePayload>[];
                };
                create: {
                    args: Prisma.ShiftTemplateCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShiftTemplatePayload>;
                };
                createMany: {
                    args: Prisma.ShiftTemplateCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ShiftTemplateCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShiftTemplatePayload>[];
                };
                delete: {
                    args: Prisma.ShiftTemplateDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShiftTemplatePayload>;
                };
                update: {
                    args: Prisma.ShiftTemplateUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShiftTemplatePayload>;
                };
                deleteMany: {
                    args: Prisma.ShiftTemplateDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ShiftTemplateUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ShiftTemplateUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShiftTemplatePayload>[];
                };
                upsert: {
                    args: Prisma.ShiftTemplateUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShiftTemplatePayload>;
                };
                aggregate: {
                    args: Prisma.ShiftTemplateAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateShiftTemplate>;
                };
                groupBy: {
                    args: Prisma.ShiftTemplateGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShiftTemplateGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ShiftTemplateCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShiftTemplateCountAggregateOutputType> | number;
                };
            };
        };
        ShiftSchedule: {
            payload: Prisma.$ShiftSchedulePayload<ExtArgs>;
            fields: Prisma.ShiftScheduleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ShiftScheduleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShiftSchedulePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ShiftScheduleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShiftSchedulePayload>;
                };
                findFirst: {
                    args: Prisma.ShiftScheduleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShiftSchedulePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ShiftScheduleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShiftSchedulePayload>;
                };
                findMany: {
                    args: Prisma.ShiftScheduleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShiftSchedulePayload>[];
                };
                create: {
                    args: Prisma.ShiftScheduleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShiftSchedulePayload>;
                };
                createMany: {
                    args: Prisma.ShiftScheduleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ShiftScheduleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShiftSchedulePayload>[];
                };
                delete: {
                    args: Prisma.ShiftScheduleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShiftSchedulePayload>;
                };
                update: {
                    args: Prisma.ShiftScheduleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShiftSchedulePayload>;
                };
                deleteMany: {
                    args: Prisma.ShiftScheduleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ShiftScheduleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ShiftScheduleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShiftSchedulePayload>[];
                };
                upsert: {
                    args: Prisma.ShiftScheduleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShiftSchedulePayload>;
                };
                aggregate: {
                    args: Prisma.ShiftScheduleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateShiftSchedule>;
                };
                groupBy: {
                    args: Prisma.ShiftScheduleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShiftScheduleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ShiftScheduleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShiftScheduleCountAggregateOutputType> | number;
                };
            };
        };
        AttendanceEntry: {
            payload: Prisma.$AttendanceEntryPayload<ExtArgs>;
            fields: Prisma.AttendanceEntryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AttendanceEntryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceEntryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AttendanceEntryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceEntryPayload>;
                };
                findFirst: {
                    args: Prisma.AttendanceEntryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceEntryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AttendanceEntryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceEntryPayload>;
                };
                findMany: {
                    args: Prisma.AttendanceEntryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceEntryPayload>[];
                };
                create: {
                    args: Prisma.AttendanceEntryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceEntryPayload>;
                };
                createMany: {
                    args: Prisma.AttendanceEntryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AttendanceEntryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceEntryPayload>[];
                };
                delete: {
                    args: Prisma.AttendanceEntryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceEntryPayload>;
                };
                update: {
                    args: Prisma.AttendanceEntryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceEntryPayload>;
                };
                deleteMany: {
                    args: Prisma.AttendanceEntryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AttendanceEntryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AttendanceEntryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceEntryPayload>[];
                };
                upsert: {
                    args: Prisma.AttendanceEntryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendanceEntryPayload>;
                };
                aggregate: {
                    args: Prisma.AttendanceEntryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAttendanceEntry>;
                };
                groupBy: {
                    args: Prisma.AttendanceEntryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AttendanceEntryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AttendanceEntryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AttendanceEntryCountAggregateOutputType> | number;
                };
            };
        };
        BreakEntry: {
            payload: Prisma.$BreakEntryPayload<ExtArgs>;
            fields: Prisma.BreakEntryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BreakEntryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreakEntryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BreakEntryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreakEntryPayload>;
                };
                findFirst: {
                    args: Prisma.BreakEntryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreakEntryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BreakEntryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreakEntryPayload>;
                };
                findMany: {
                    args: Prisma.BreakEntryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreakEntryPayload>[];
                };
                create: {
                    args: Prisma.BreakEntryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreakEntryPayload>;
                };
                createMany: {
                    args: Prisma.BreakEntryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BreakEntryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreakEntryPayload>[];
                };
                delete: {
                    args: Prisma.BreakEntryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreakEntryPayload>;
                };
                update: {
                    args: Prisma.BreakEntryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreakEntryPayload>;
                };
                deleteMany: {
                    args: Prisma.BreakEntryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BreakEntryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BreakEntryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreakEntryPayload>[];
                };
                upsert: {
                    args: Prisma.BreakEntryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreakEntryPayload>;
                };
                aggregate: {
                    args: Prisma.BreakEntryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBreakEntry>;
                };
                groupBy: {
                    args: Prisma.BreakEntryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BreakEntryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BreakEntryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BreakEntryCountAggregateOutputType> | number;
                };
            };
        };
        Timesheet: {
            payload: Prisma.$TimesheetPayload<ExtArgs>;
            fields: Prisma.TimesheetFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TimesheetFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimesheetPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TimesheetFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimesheetPayload>;
                };
                findFirst: {
                    args: Prisma.TimesheetFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimesheetPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TimesheetFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimesheetPayload>;
                };
                findMany: {
                    args: Prisma.TimesheetFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimesheetPayload>[];
                };
                create: {
                    args: Prisma.TimesheetCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimesheetPayload>;
                };
                createMany: {
                    args: Prisma.TimesheetCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TimesheetCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimesheetPayload>[];
                };
                delete: {
                    args: Prisma.TimesheetDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimesheetPayload>;
                };
                update: {
                    args: Prisma.TimesheetUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimesheetPayload>;
                };
                deleteMany: {
                    args: Prisma.TimesheetDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TimesheetUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TimesheetUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimesheetPayload>[];
                };
                upsert: {
                    args: Prisma.TimesheetUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TimesheetPayload>;
                };
                aggregate: {
                    args: Prisma.TimesheetAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTimesheet>;
                };
                groupBy: {
                    args: Prisma.TimesheetGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TimesheetGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TimesheetCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TimesheetCountAggregateOutputType> | number;
                };
            };
        };
        LeaveType: {
            payload: Prisma.$LeaveTypePayload<ExtArgs>;
            fields: Prisma.LeaveTypeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LeaveTypeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveTypePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LeaveTypeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveTypePayload>;
                };
                findFirst: {
                    args: Prisma.LeaveTypeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveTypePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LeaveTypeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveTypePayload>;
                };
                findMany: {
                    args: Prisma.LeaveTypeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveTypePayload>[];
                };
                create: {
                    args: Prisma.LeaveTypeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveTypePayload>;
                };
                createMany: {
                    args: Prisma.LeaveTypeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LeaveTypeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveTypePayload>[];
                };
                delete: {
                    args: Prisma.LeaveTypeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveTypePayload>;
                };
                update: {
                    args: Prisma.LeaveTypeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveTypePayload>;
                };
                deleteMany: {
                    args: Prisma.LeaveTypeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LeaveTypeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LeaveTypeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveTypePayload>[];
                };
                upsert: {
                    args: Prisma.LeaveTypeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveTypePayload>;
                };
                aggregate: {
                    args: Prisma.LeaveTypeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLeaveType>;
                };
                groupBy: {
                    args: Prisma.LeaveTypeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LeaveTypeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LeaveTypeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LeaveTypeCountAggregateOutputType> | number;
                };
            };
        };
        LeavePolicy: {
            payload: Prisma.$LeavePolicyPayload<ExtArgs>;
            fields: Prisma.LeavePolicyFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LeavePolicyFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeavePolicyPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LeavePolicyFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeavePolicyPayload>;
                };
                findFirst: {
                    args: Prisma.LeavePolicyFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeavePolicyPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LeavePolicyFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeavePolicyPayload>;
                };
                findMany: {
                    args: Prisma.LeavePolicyFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeavePolicyPayload>[];
                };
                create: {
                    args: Prisma.LeavePolicyCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeavePolicyPayload>;
                };
                createMany: {
                    args: Prisma.LeavePolicyCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LeavePolicyCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeavePolicyPayload>[];
                };
                delete: {
                    args: Prisma.LeavePolicyDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeavePolicyPayload>;
                };
                update: {
                    args: Prisma.LeavePolicyUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeavePolicyPayload>;
                };
                deleteMany: {
                    args: Prisma.LeavePolicyDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LeavePolicyUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LeavePolicyUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeavePolicyPayload>[];
                };
                upsert: {
                    args: Prisma.LeavePolicyUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeavePolicyPayload>;
                };
                aggregate: {
                    args: Prisma.LeavePolicyAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLeavePolicy>;
                };
                groupBy: {
                    args: Prisma.LeavePolicyGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LeavePolicyGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LeavePolicyCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LeavePolicyCountAggregateOutputType> | number;
                };
            };
        };
        LeaveBalance: {
            payload: Prisma.$LeaveBalancePayload<ExtArgs>;
            fields: Prisma.LeaveBalanceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LeaveBalanceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveBalancePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LeaveBalanceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveBalancePayload>;
                };
                findFirst: {
                    args: Prisma.LeaveBalanceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveBalancePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LeaveBalanceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveBalancePayload>;
                };
                findMany: {
                    args: Prisma.LeaveBalanceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveBalancePayload>[];
                };
                create: {
                    args: Prisma.LeaveBalanceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveBalancePayload>;
                };
                createMany: {
                    args: Prisma.LeaveBalanceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LeaveBalanceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveBalancePayload>[];
                };
                delete: {
                    args: Prisma.LeaveBalanceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveBalancePayload>;
                };
                update: {
                    args: Prisma.LeaveBalanceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveBalancePayload>;
                };
                deleteMany: {
                    args: Prisma.LeaveBalanceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LeaveBalanceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LeaveBalanceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveBalancePayload>[];
                };
                upsert: {
                    args: Prisma.LeaveBalanceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveBalancePayload>;
                };
                aggregate: {
                    args: Prisma.LeaveBalanceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLeaveBalance>;
                };
                groupBy: {
                    args: Prisma.LeaveBalanceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LeaveBalanceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LeaveBalanceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LeaveBalanceCountAggregateOutputType> | number;
                };
            };
        };
        LeaveRequest: {
            payload: Prisma.$LeaveRequestPayload<ExtArgs>;
            fields: Prisma.LeaveRequestFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LeaveRequestFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveRequestPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LeaveRequestFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveRequestPayload>;
                };
                findFirst: {
                    args: Prisma.LeaveRequestFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveRequestPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LeaveRequestFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveRequestPayload>;
                };
                findMany: {
                    args: Prisma.LeaveRequestFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveRequestPayload>[];
                };
                create: {
                    args: Prisma.LeaveRequestCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveRequestPayload>;
                };
                createMany: {
                    args: Prisma.LeaveRequestCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LeaveRequestCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveRequestPayload>[];
                };
                delete: {
                    args: Prisma.LeaveRequestDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveRequestPayload>;
                };
                update: {
                    args: Prisma.LeaveRequestUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveRequestPayload>;
                };
                deleteMany: {
                    args: Prisma.LeaveRequestDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LeaveRequestUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LeaveRequestUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveRequestPayload>[];
                };
                upsert: {
                    args: Prisma.LeaveRequestUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaveRequestPayload>;
                };
                aggregate: {
                    args: Prisma.LeaveRequestAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLeaveRequest>;
                };
                groupBy: {
                    args: Prisma.LeaveRequestGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LeaveRequestGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LeaveRequestCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LeaveRequestCountAggregateOutputType> | number;
                };
            };
        };
        PayGroup: {
            payload: Prisma.$PayGroupPayload<ExtArgs>;
            fields: Prisma.PayGroupFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PayGroupFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayGroupPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PayGroupFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayGroupPayload>;
                };
                findFirst: {
                    args: Prisma.PayGroupFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayGroupPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PayGroupFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayGroupPayload>;
                };
                findMany: {
                    args: Prisma.PayGroupFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayGroupPayload>[];
                };
                create: {
                    args: Prisma.PayGroupCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayGroupPayload>;
                };
                createMany: {
                    args: Prisma.PayGroupCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PayGroupCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayGroupPayload>[];
                };
                delete: {
                    args: Prisma.PayGroupDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayGroupPayload>;
                };
                update: {
                    args: Prisma.PayGroupUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayGroupPayload>;
                };
                deleteMany: {
                    args: Prisma.PayGroupDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PayGroupUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PayGroupUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayGroupPayload>[];
                };
                upsert: {
                    args: Prisma.PayGroupUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayGroupPayload>;
                };
                aggregate: {
                    args: Prisma.PayGroupAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePayGroup>;
                };
                groupBy: {
                    args: Prisma.PayGroupGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PayGroupGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PayGroupCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PayGroupCountAggregateOutputType> | number;
                };
            };
        };
        PayRun: {
            payload: Prisma.$PayRunPayload<ExtArgs>;
            fields: Prisma.PayRunFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PayRunFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayRunPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PayRunFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayRunPayload>;
                };
                findFirst: {
                    args: Prisma.PayRunFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayRunPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PayRunFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayRunPayload>;
                };
                findMany: {
                    args: Prisma.PayRunFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayRunPayload>[];
                };
                create: {
                    args: Prisma.PayRunCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayRunPayload>;
                };
                createMany: {
                    args: Prisma.PayRunCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PayRunCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayRunPayload>[];
                };
                delete: {
                    args: Prisma.PayRunDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayRunPayload>;
                };
                update: {
                    args: Prisma.PayRunUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayRunPayload>;
                };
                deleteMany: {
                    args: Prisma.PayRunDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PayRunUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PayRunUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayRunPayload>[];
                };
                upsert: {
                    args: Prisma.PayRunUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayRunPayload>;
                };
                aggregate: {
                    args: Prisma.PayRunAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePayRun>;
                };
                groupBy: {
                    args: Prisma.PayRunGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PayRunGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PayRunCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PayRunCountAggregateOutputType> | number;
                };
            };
        };
        PayRunLine: {
            payload: Prisma.$PayRunLinePayload<ExtArgs>;
            fields: Prisma.PayRunLineFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PayRunLineFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayRunLinePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PayRunLineFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayRunLinePayload>;
                };
                findFirst: {
                    args: Prisma.PayRunLineFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayRunLinePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PayRunLineFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayRunLinePayload>;
                };
                findMany: {
                    args: Prisma.PayRunLineFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayRunLinePayload>[];
                };
                create: {
                    args: Prisma.PayRunLineCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayRunLinePayload>;
                };
                createMany: {
                    args: Prisma.PayRunLineCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PayRunLineCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayRunLinePayload>[];
                };
                delete: {
                    args: Prisma.PayRunLineDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayRunLinePayload>;
                };
                update: {
                    args: Prisma.PayRunLineUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayRunLinePayload>;
                };
                deleteMany: {
                    args: Prisma.PayRunLineDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PayRunLineUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PayRunLineUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayRunLinePayload>[];
                };
                upsert: {
                    args: Prisma.PayRunLineUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayRunLinePayload>;
                };
                aggregate: {
                    args: Prisma.PayRunLineAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePayRunLine>;
                };
                groupBy: {
                    args: Prisma.PayRunLineGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PayRunLineGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PayRunLineCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PayRunLineCountAggregateOutputType> | number;
                };
            };
        };
        PayRunAdjustment: {
            payload: Prisma.$PayRunAdjustmentPayload<ExtArgs>;
            fields: Prisma.PayRunAdjustmentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PayRunAdjustmentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayRunAdjustmentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PayRunAdjustmentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayRunAdjustmentPayload>;
                };
                findFirst: {
                    args: Prisma.PayRunAdjustmentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayRunAdjustmentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PayRunAdjustmentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayRunAdjustmentPayload>;
                };
                findMany: {
                    args: Prisma.PayRunAdjustmentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayRunAdjustmentPayload>[];
                };
                create: {
                    args: Prisma.PayRunAdjustmentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayRunAdjustmentPayload>;
                };
                createMany: {
                    args: Prisma.PayRunAdjustmentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PayRunAdjustmentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayRunAdjustmentPayload>[];
                };
                delete: {
                    args: Prisma.PayRunAdjustmentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayRunAdjustmentPayload>;
                };
                update: {
                    args: Prisma.PayRunAdjustmentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayRunAdjustmentPayload>;
                };
                deleteMany: {
                    args: Prisma.PayRunAdjustmentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PayRunAdjustmentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PayRunAdjustmentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayRunAdjustmentPayload>[];
                };
                upsert: {
                    args: Prisma.PayRunAdjustmentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayRunAdjustmentPayload>;
                };
                aggregate: {
                    args: Prisma.PayRunAdjustmentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePayRunAdjustment>;
                };
                groupBy: {
                    args: Prisma.PayRunAdjustmentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PayRunAdjustmentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PayRunAdjustmentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PayRunAdjustmentCountAggregateOutputType> | number;
                };
            };
        };
        Payslip: {
            payload: Prisma.$PayslipPayload<ExtArgs>;
            fields: Prisma.PayslipFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PayslipFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayslipPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PayslipFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayslipPayload>;
                };
                findFirst: {
                    args: Prisma.PayslipFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayslipPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PayslipFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayslipPayload>;
                };
                findMany: {
                    args: Prisma.PayslipFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayslipPayload>[];
                };
                create: {
                    args: Prisma.PayslipCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayslipPayload>;
                };
                createMany: {
                    args: Prisma.PayslipCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PayslipCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayslipPayload>[];
                };
                delete: {
                    args: Prisma.PayslipDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayslipPayload>;
                };
                update: {
                    args: Prisma.PayslipUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayslipPayload>;
                };
                deleteMany: {
                    args: Prisma.PayslipDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PayslipUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PayslipUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayslipPayload>[];
                };
                upsert: {
                    args: Prisma.PayslipUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayslipPayload>;
                };
                aggregate: {
                    args: Prisma.PayslipAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePayslip>;
                };
                groupBy: {
                    args: Prisma.PayslipGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PayslipGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PayslipCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PayslipCountAggregateOutputType> | number;
                };
            };
        };
        DeductionType: {
            payload: Prisma.$DeductionTypePayload<ExtArgs>;
            fields: Prisma.DeductionTypeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DeductionTypeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeductionTypePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DeductionTypeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeductionTypePayload>;
                };
                findFirst: {
                    args: Prisma.DeductionTypeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeductionTypePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DeductionTypeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeductionTypePayload>;
                };
                findMany: {
                    args: Prisma.DeductionTypeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeductionTypePayload>[];
                };
                create: {
                    args: Prisma.DeductionTypeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeductionTypePayload>;
                };
                createMany: {
                    args: Prisma.DeductionTypeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DeductionTypeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeductionTypePayload>[];
                };
                delete: {
                    args: Prisma.DeductionTypeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeductionTypePayload>;
                };
                update: {
                    args: Prisma.DeductionTypeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeductionTypePayload>;
                };
                deleteMany: {
                    args: Prisma.DeductionTypeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DeductionTypeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DeductionTypeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeductionTypePayload>[];
                };
                upsert: {
                    args: Prisma.DeductionTypeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DeductionTypePayload>;
                };
                aggregate: {
                    args: Prisma.DeductionTypeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDeductionType>;
                };
                groupBy: {
                    args: Prisma.DeductionTypeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeductionTypeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DeductionTypeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DeductionTypeCountAggregateOutputType> | number;
                };
            };
        };
        TaxSettings: {
            payload: Prisma.$TaxSettingsPayload<ExtArgs>;
            fields: Prisma.TaxSettingsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TaxSettingsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaxSettingsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TaxSettingsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaxSettingsPayload>;
                };
                findFirst: {
                    args: Prisma.TaxSettingsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaxSettingsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TaxSettingsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaxSettingsPayload>;
                };
                findMany: {
                    args: Prisma.TaxSettingsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaxSettingsPayload>[];
                };
                create: {
                    args: Prisma.TaxSettingsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaxSettingsPayload>;
                };
                createMany: {
                    args: Prisma.TaxSettingsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TaxSettingsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaxSettingsPayload>[];
                };
                delete: {
                    args: Prisma.TaxSettingsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaxSettingsPayload>;
                };
                update: {
                    args: Prisma.TaxSettingsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaxSettingsPayload>;
                };
                deleteMany: {
                    args: Prisma.TaxSettingsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TaxSettingsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TaxSettingsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaxSettingsPayload>[];
                };
                upsert: {
                    args: Prisma.TaxSettingsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaxSettingsPayload>;
                };
                aggregate: {
                    args: Prisma.TaxSettingsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTaxSettings>;
                };
                groupBy: {
                    args: Prisma.TaxSettingsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TaxSettingsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TaxSettingsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TaxSettingsCountAggregateOutputType> | number;
                };
            };
        };
        PerformanceCycle: {
            payload: Prisma.$PerformanceCyclePayload<ExtArgs>;
            fields: Prisma.PerformanceCycleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PerformanceCycleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceCyclePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PerformanceCycleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceCyclePayload>;
                };
                findFirst: {
                    args: Prisma.PerformanceCycleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceCyclePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PerformanceCycleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceCyclePayload>;
                };
                findMany: {
                    args: Prisma.PerformanceCycleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceCyclePayload>[];
                };
                create: {
                    args: Prisma.PerformanceCycleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceCyclePayload>;
                };
                createMany: {
                    args: Prisma.PerformanceCycleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PerformanceCycleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceCyclePayload>[];
                };
                delete: {
                    args: Prisma.PerformanceCycleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceCyclePayload>;
                };
                update: {
                    args: Prisma.PerformanceCycleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceCyclePayload>;
                };
                deleteMany: {
                    args: Prisma.PerformanceCycleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PerformanceCycleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PerformanceCycleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceCyclePayload>[];
                };
                upsert: {
                    args: Prisma.PerformanceCycleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceCyclePayload>;
                };
                aggregate: {
                    args: Prisma.PerformanceCycleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePerformanceCycle>;
                };
                groupBy: {
                    args: Prisma.PerformanceCycleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PerformanceCycleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PerformanceCycleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PerformanceCycleCountAggregateOutputType> | number;
                };
            };
        };
        PerformanceReview: {
            payload: Prisma.$PerformanceReviewPayload<ExtArgs>;
            fields: Prisma.PerformanceReviewFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PerformanceReviewFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceReviewPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PerformanceReviewFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceReviewPayload>;
                };
                findFirst: {
                    args: Prisma.PerformanceReviewFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceReviewPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PerformanceReviewFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceReviewPayload>;
                };
                findMany: {
                    args: Prisma.PerformanceReviewFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceReviewPayload>[];
                };
                create: {
                    args: Prisma.PerformanceReviewCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceReviewPayload>;
                };
                createMany: {
                    args: Prisma.PerformanceReviewCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PerformanceReviewCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceReviewPayload>[];
                };
                delete: {
                    args: Prisma.PerformanceReviewDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceReviewPayload>;
                };
                update: {
                    args: Prisma.PerformanceReviewUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceReviewPayload>;
                };
                deleteMany: {
                    args: Prisma.PerformanceReviewDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PerformanceReviewUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PerformanceReviewUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceReviewPayload>[];
                };
                upsert: {
                    args: Prisma.PerformanceReviewUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PerformanceReviewPayload>;
                };
                aggregate: {
                    args: Prisma.PerformanceReviewAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePerformanceReview>;
                };
                groupBy: {
                    args: Prisma.PerformanceReviewGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PerformanceReviewGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PerformanceReviewCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PerformanceReviewCountAggregateOutputType> | number;
                };
            };
        };
        Goal: {
            payload: Prisma.$GoalPayload<ExtArgs>;
            fields: Prisma.GoalFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.GoalFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GoalPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.GoalFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GoalPayload>;
                };
                findFirst: {
                    args: Prisma.GoalFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GoalPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.GoalFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GoalPayload>;
                };
                findMany: {
                    args: Prisma.GoalFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GoalPayload>[];
                };
                create: {
                    args: Prisma.GoalCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GoalPayload>;
                };
                createMany: {
                    args: Prisma.GoalCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.GoalCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GoalPayload>[];
                };
                delete: {
                    args: Prisma.GoalDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GoalPayload>;
                };
                update: {
                    args: Prisma.GoalUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GoalPayload>;
                };
                deleteMany: {
                    args: Prisma.GoalDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.GoalUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.GoalUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GoalPayload>[];
                };
                upsert: {
                    args: Prisma.GoalUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GoalPayload>;
                };
                aggregate: {
                    args: Prisma.GoalAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateGoal>;
                };
                groupBy: {
                    args: Prisma.GoalGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GoalGroupByOutputType>[];
                };
                count: {
                    args: Prisma.GoalCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GoalCountAggregateOutputType> | number;
                };
            };
        };
        GoalCheckin: {
            payload: Prisma.$GoalCheckinPayload<ExtArgs>;
            fields: Prisma.GoalCheckinFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.GoalCheckinFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GoalCheckinPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.GoalCheckinFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GoalCheckinPayload>;
                };
                findFirst: {
                    args: Prisma.GoalCheckinFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GoalCheckinPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.GoalCheckinFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GoalCheckinPayload>;
                };
                findMany: {
                    args: Prisma.GoalCheckinFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GoalCheckinPayload>[];
                };
                create: {
                    args: Prisma.GoalCheckinCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GoalCheckinPayload>;
                };
                createMany: {
                    args: Prisma.GoalCheckinCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.GoalCheckinCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GoalCheckinPayload>[];
                };
                delete: {
                    args: Prisma.GoalCheckinDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GoalCheckinPayload>;
                };
                update: {
                    args: Prisma.GoalCheckinUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GoalCheckinPayload>;
                };
                deleteMany: {
                    args: Prisma.GoalCheckinDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.GoalCheckinUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.GoalCheckinUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GoalCheckinPayload>[];
                };
                upsert: {
                    args: Prisma.GoalCheckinUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GoalCheckinPayload>;
                };
                aggregate: {
                    args: Prisma.GoalCheckinAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateGoalCheckin>;
                };
                groupBy: {
                    args: Prisma.GoalCheckinGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GoalCheckinGroupByOutputType>[];
                };
                count: {
                    args: Prisma.GoalCheckinCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GoalCheckinCountAggregateOutputType> | number;
                };
            };
        };
        ContinuousFeedback: {
            payload: Prisma.$ContinuousFeedbackPayload<ExtArgs>;
            fields: Prisma.ContinuousFeedbackFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ContinuousFeedbackFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContinuousFeedbackPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ContinuousFeedbackFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContinuousFeedbackPayload>;
                };
                findFirst: {
                    args: Prisma.ContinuousFeedbackFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContinuousFeedbackPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ContinuousFeedbackFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContinuousFeedbackPayload>;
                };
                findMany: {
                    args: Prisma.ContinuousFeedbackFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContinuousFeedbackPayload>[];
                };
                create: {
                    args: Prisma.ContinuousFeedbackCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContinuousFeedbackPayload>;
                };
                createMany: {
                    args: Prisma.ContinuousFeedbackCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ContinuousFeedbackCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContinuousFeedbackPayload>[];
                };
                delete: {
                    args: Prisma.ContinuousFeedbackDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContinuousFeedbackPayload>;
                };
                update: {
                    args: Prisma.ContinuousFeedbackUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContinuousFeedbackPayload>;
                };
                deleteMany: {
                    args: Prisma.ContinuousFeedbackDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ContinuousFeedbackUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ContinuousFeedbackUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContinuousFeedbackPayload>[];
                };
                upsert: {
                    args: Prisma.ContinuousFeedbackUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContinuousFeedbackPayload>;
                };
                aggregate: {
                    args: Prisma.ContinuousFeedbackAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateContinuousFeedback>;
                };
                groupBy: {
                    args: Prisma.ContinuousFeedbackGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContinuousFeedbackGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ContinuousFeedbackCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContinuousFeedbackCountAggregateOutputType> | number;
                };
            };
        };
        Asset: {
            payload: Prisma.$AssetPayload<ExtArgs>;
            fields: Prisma.AssetFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AssetFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AssetFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetPayload>;
                };
                findFirst: {
                    args: Prisma.AssetFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AssetFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetPayload>;
                };
                findMany: {
                    args: Prisma.AssetFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetPayload>[];
                };
                create: {
                    args: Prisma.AssetCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetPayload>;
                };
                createMany: {
                    args: Prisma.AssetCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AssetCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetPayload>[];
                };
                delete: {
                    args: Prisma.AssetDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetPayload>;
                };
                update: {
                    args: Prisma.AssetUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetPayload>;
                };
                deleteMany: {
                    args: Prisma.AssetDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AssetUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AssetUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetPayload>[];
                };
                upsert: {
                    args: Prisma.AssetUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetPayload>;
                };
                aggregate: {
                    args: Prisma.AssetAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAsset>;
                };
                groupBy: {
                    args: Prisma.AssetGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AssetGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AssetCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AssetCountAggregateOutputType> | number;
                };
            };
        };
        AssetAssignment: {
            payload: Prisma.$AssetAssignmentPayload<ExtArgs>;
            fields: Prisma.AssetAssignmentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AssetAssignmentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetAssignmentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AssetAssignmentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetAssignmentPayload>;
                };
                findFirst: {
                    args: Prisma.AssetAssignmentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetAssignmentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AssetAssignmentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetAssignmentPayload>;
                };
                findMany: {
                    args: Prisma.AssetAssignmentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetAssignmentPayload>[];
                };
                create: {
                    args: Prisma.AssetAssignmentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetAssignmentPayload>;
                };
                createMany: {
                    args: Prisma.AssetAssignmentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AssetAssignmentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetAssignmentPayload>[];
                };
                delete: {
                    args: Prisma.AssetAssignmentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetAssignmentPayload>;
                };
                update: {
                    args: Prisma.AssetAssignmentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetAssignmentPayload>;
                };
                deleteMany: {
                    args: Prisma.AssetAssignmentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AssetAssignmentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AssetAssignmentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetAssignmentPayload>[];
                };
                upsert: {
                    args: Prisma.AssetAssignmentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetAssignmentPayload>;
                };
                aggregate: {
                    args: Prisma.AssetAssignmentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAssetAssignment>;
                };
                groupBy: {
                    args: Prisma.AssetAssignmentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AssetAssignmentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AssetAssignmentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AssetAssignmentCountAggregateOutputType> | number;
                };
            };
        };
        AssetRequest: {
            payload: Prisma.$AssetRequestPayload<ExtArgs>;
            fields: Prisma.AssetRequestFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AssetRequestFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetRequestPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AssetRequestFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetRequestPayload>;
                };
                findFirst: {
                    args: Prisma.AssetRequestFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetRequestPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AssetRequestFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetRequestPayload>;
                };
                findMany: {
                    args: Prisma.AssetRequestFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetRequestPayload>[];
                };
                create: {
                    args: Prisma.AssetRequestCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetRequestPayload>;
                };
                createMany: {
                    args: Prisma.AssetRequestCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AssetRequestCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetRequestPayload>[];
                };
                delete: {
                    args: Prisma.AssetRequestDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetRequestPayload>;
                };
                update: {
                    args: Prisma.AssetRequestUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetRequestPayload>;
                };
                deleteMany: {
                    args: Prisma.AssetRequestDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AssetRequestUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AssetRequestUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetRequestPayload>[];
                };
                upsert: {
                    args: Prisma.AssetRequestUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetRequestPayload>;
                };
                aggregate: {
                    args: Prisma.AssetRequestAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAssetRequest>;
                };
                groupBy: {
                    args: Prisma.AssetRequestGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AssetRequestGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AssetRequestCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AssetRequestCountAggregateOutputType> | number;
                };
            };
        };
        AssetMaintenance: {
            payload: Prisma.$AssetMaintenancePayload<ExtArgs>;
            fields: Prisma.AssetMaintenanceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AssetMaintenanceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetMaintenancePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AssetMaintenanceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetMaintenancePayload>;
                };
                findFirst: {
                    args: Prisma.AssetMaintenanceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetMaintenancePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AssetMaintenanceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetMaintenancePayload>;
                };
                findMany: {
                    args: Prisma.AssetMaintenanceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetMaintenancePayload>[];
                };
                create: {
                    args: Prisma.AssetMaintenanceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetMaintenancePayload>;
                };
                createMany: {
                    args: Prisma.AssetMaintenanceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AssetMaintenanceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetMaintenancePayload>[];
                };
                delete: {
                    args: Prisma.AssetMaintenanceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetMaintenancePayload>;
                };
                update: {
                    args: Prisma.AssetMaintenanceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetMaintenancePayload>;
                };
                deleteMany: {
                    args: Prisma.AssetMaintenanceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AssetMaintenanceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AssetMaintenanceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetMaintenancePayload>[];
                };
                upsert: {
                    args: Prisma.AssetMaintenanceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetMaintenancePayload>;
                };
                aggregate: {
                    args: Prisma.AssetMaintenanceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAssetMaintenance>;
                };
                groupBy: {
                    args: Prisma.AssetMaintenanceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AssetMaintenanceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AssetMaintenanceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AssetMaintenanceCountAggregateOutputType> | number;
                };
            };
        };
        Notification: {
            payload: Prisma.$NotificationPayload<ExtArgs>;
            fields: Prisma.NotificationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NotificationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findFirst: {
                    args: Prisma.NotificationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findMany: {
                    args: Prisma.NotificationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                create: {
                    args: Prisma.NotificationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                createMany: {
                    args: Prisma.NotificationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                delete: {
                    args: Prisma.NotificationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                update: {
                    args: Prisma.NotificationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                deleteMany: {
                    args: Prisma.NotificationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NotificationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                upsert: {
                    args: Prisma.NotificationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                aggregate: {
                    args: Prisma.NotificationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotification>;
                };
                groupBy: {
                    args: Prisma.NotificationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NotificationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationCountAggregateOutputType> | number;
                };
            };
        };
        NotificationPreference: {
            payload: Prisma.$NotificationPreferencePayload<ExtArgs>;
            fields: Prisma.NotificationPreferenceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NotificationPreferenceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NotificationPreferenceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>;
                };
                findFirst: {
                    args: Prisma.NotificationPreferenceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NotificationPreferenceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>;
                };
                findMany: {
                    args: Prisma.NotificationPreferenceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>[];
                };
                create: {
                    args: Prisma.NotificationPreferenceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>;
                };
                createMany: {
                    args: Prisma.NotificationPreferenceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.NotificationPreferenceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>[];
                };
                delete: {
                    args: Prisma.NotificationPreferenceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>;
                };
                update: {
                    args: Prisma.NotificationPreferenceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>;
                };
                deleteMany: {
                    args: Prisma.NotificationPreferenceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NotificationPreferenceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.NotificationPreferenceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>[];
                };
                upsert: {
                    args: Prisma.NotificationPreferenceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPreferencePayload>;
                };
                aggregate: {
                    args: Prisma.NotificationPreferenceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotificationPreference>;
                };
                groupBy: {
                    args: Prisma.NotificationPreferenceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationPreferenceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NotificationPreferenceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationPreferenceCountAggregateOutputType> | number;
                };
            };
        };
        Announcement: {
            payload: Prisma.$AnnouncementPayload<ExtArgs>;
            fields: Prisma.AnnouncementFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AnnouncementFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AnnouncementFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload>;
                };
                findFirst: {
                    args: Prisma.AnnouncementFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AnnouncementFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload>;
                };
                findMany: {
                    args: Prisma.AnnouncementFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload>[];
                };
                create: {
                    args: Prisma.AnnouncementCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload>;
                };
                createMany: {
                    args: Prisma.AnnouncementCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AnnouncementCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload>[];
                };
                delete: {
                    args: Prisma.AnnouncementDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload>;
                };
                update: {
                    args: Prisma.AnnouncementUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload>;
                };
                deleteMany: {
                    args: Prisma.AnnouncementDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AnnouncementUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AnnouncementUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload>[];
                };
                upsert: {
                    args: Prisma.AnnouncementUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload>;
                };
                aggregate: {
                    args: Prisma.AnnouncementAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAnnouncement>;
                };
                groupBy: {
                    args: Prisma.AnnouncementGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AnnouncementGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AnnouncementCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AnnouncementCountAggregateOutputType> | number;
                };
            };
        };
        AnnouncementRead: {
            payload: Prisma.$AnnouncementReadPayload<ExtArgs>;
            fields: Prisma.AnnouncementReadFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AnnouncementReadFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementReadPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AnnouncementReadFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementReadPayload>;
                };
                findFirst: {
                    args: Prisma.AnnouncementReadFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementReadPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AnnouncementReadFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementReadPayload>;
                };
                findMany: {
                    args: Prisma.AnnouncementReadFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementReadPayload>[];
                };
                create: {
                    args: Prisma.AnnouncementReadCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementReadPayload>;
                };
                createMany: {
                    args: Prisma.AnnouncementReadCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AnnouncementReadCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementReadPayload>[];
                };
                delete: {
                    args: Prisma.AnnouncementReadDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementReadPayload>;
                };
                update: {
                    args: Prisma.AnnouncementReadUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementReadPayload>;
                };
                deleteMany: {
                    args: Prisma.AnnouncementReadDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AnnouncementReadUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AnnouncementReadUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementReadPayload>[];
                };
                upsert: {
                    args: Prisma.AnnouncementReadUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementReadPayload>;
                };
                aggregate: {
                    args: Prisma.AnnouncementReadAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAnnouncementRead>;
                };
                groupBy: {
                    args: Prisma.AnnouncementReadGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AnnouncementReadGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AnnouncementReadCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AnnouncementReadCountAggregateOutputType> | number;
                };
            };
        };
        AuditLog: {
            payload: Prisma.$AuditLogPayload<ExtArgs>;
            fields: Prisma.AuditLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AuditLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findFirst: {
                    args: Prisma.AuditLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findMany: {
                    args: Prisma.AuditLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                create: {
                    args: Prisma.AuditLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                createMany: {
                    args: Prisma.AuditLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                delete: {
                    args: Prisma.AuditLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                update: {
                    args: Prisma.AuditLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                deleteMany: {
                    args: Prisma.AuditLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AuditLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                upsert: {
                    args: Prisma.AuditLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                aggregate: {
                    args: Prisma.AuditLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuditLog>;
                };
                groupBy: {
                    args: Prisma.AuditLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AuditLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogCountAggregateOutputType> | number;
                };
            };
        };
        BillingInvoice: {
            payload: Prisma.$BillingInvoicePayload<ExtArgs>;
            fields: Prisma.BillingInvoiceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BillingInvoiceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BillingInvoicePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BillingInvoiceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BillingInvoicePayload>;
                };
                findFirst: {
                    args: Prisma.BillingInvoiceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BillingInvoicePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BillingInvoiceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BillingInvoicePayload>;
                };
                findMany: {
                    args: Prisma.BillingInvoiceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BillingInvoicePayload>[];
                };
                create: {
                    args: Prisma.BillingInvoiceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BillingInvoicePayload>;
                };
                createMany: {
                    args: Prisma.BillingInvoiceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BillingInvoiceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BillingInvoicePayload>[];
                };
                delete: {
                    args: Prisma.BillingInvoiceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BillingInvoicePayload>;
                };
                update: {
                    args: Prisma.BillingInvoiceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BillingInvoicePayload>;
                };
                deleteMany: {
                    args: Prisma.BillingInvoiceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BillingInvoiceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BillingInvoiceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BillingInvoicePayload>[];
                };
                upsert: {
                    args: Prisma.BillingInvoiceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BillingInvoicePayload>;
                };
                aggregate: {
                    args: Prisma.BillingInvoiceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBillingInvoice>;
                };
                groupBy: {
                    args: Prisma.BillingInvoiceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BillingInvoiceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BillingInvoiceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BillingInvoiceCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const OrganizationScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly industry: "industry";
    readonly size: "size";
    readonly country: "country";
    readonly timezone: "timezone";
    readonly currency: "currency";
    readonly logoUrl: "logoUrl";
    readonly website: "website";
    readonly fiscalYearStart: "fiscalYearStart";
    readonly plan: "plan";
    readonly stripeCustomerId: "stripeCustomerId";
    readonly stripeSubscriptionId: "stripeSubscriptionId";
    readonly subscriptionStatus: "subscriptionStatus";
    readonly trialEndsAt: "trialEndsAt";
    readonly seatCount: "seatCount";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly fullName: "fullName";
    readonly role: "role";
    readonly emailVerified: "emailVerified";
    readonly avatarUrl: "avatarUrl";
    readonly isActive: "isActive";
    readonly twoFaEnabled: "twoFaEnabled";
    readonly twoFaSecret: "twoFaSecret";
    readonly lastLoginAt: "lastLoginAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const RefreshTokenScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly tokenHash: "tokenHash";
    readonly deviceInfo: "deviceInfo";
    readonly ipAddress: "ipAddress";
    readonly expiresAt: "expiresAt";
    readonly revokedAt: "revokedAt";
    readonly createdAt: "createdAt";
};
export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum];
export declare const EmailVerificationTokenScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly tokenHash: "tokenHash";
    readonly expiresAt: "expiresAt";
    readonly usedAt: "usedAt";
    readonly createdAt: "createdAt";
};
export type EmailVerificationTokenScalarFieldEnum = (typeof EmailVerificationTokenScalarFieldEnum)[keyof typeof EmailVerificationTokenScalarFieldEnum];
export declare const PasswordResetTokenScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly tokenHash: "tokenHash";
    readonly expiresAt: "expiresAt";
    readonly usedAt: "usedAt";
    readonly createdAt: "createdAt";
};
export type PasswordResetTokenScalarFieldEnum = (typeof PasswordResetTokenScalarFieldEnum)[keyof typeof PasswordResetTokenScalarFieldEnum];
export declare const InvitationScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly email: "email";
    readonly role: "role";
    readonly departmentId: "departmentId";
    readonly tokenHash: "tokenHash";
    readonly status: "status";
    readonly expiresAt: "expiresAt";
    readonly acceptedAt: "acceptedAt";
    readonly invitedById: "invitedById";
    readonly createdAt: "createdAt";
};
export type InvitationScalarFieldEnum = (typeof InvitationScalarFieldEnum)[keyof typeof InvitationScalarFieldEnum];
export declare const LocationScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly name: "name";
    readonly address: "address";
    readonly city: "city";
    readonly country: "country";
    readonly timezone: "timezone";
    readonly isRemote: "isRemote";
    readonly createdAt: "createdAt";
};
export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum];
export declare const DepartmentScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly name: "name";
    readonly parentDepartmentId: "parentDepartmentId";
    readonly headId: "headId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum];
export declare const WorkScheduleScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly name: "name";
    readonly workDays: "workDays";
    readonly dailyHours: "dailyHours";
    readonly overtimeThresholdDaily: "overtimeThresholdDaily";
    readonly overtimeThresholdWeekly: "overtimeThresholdWeekly";
    readonly isDefault: "isDefault";
    readonly createdAt: "createdAt";
};
export type WorkScheduleScalarFieldEnum = (typeof WorkScheduleScalarFieldEnum)[keyof typeof WorkScheduleScalarFieldEnum];
export declare const PublicHolidayScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly locationId: "locationId";
    readonly name: "name";
    readonly date: "date";
    readonly isCustom: "isCustom";
    readonly createdAt: "createdAt";
};
export type PublicHolidayScalarFieldEnum = (typeof PublicHolidayScalarFieldEnum)[keyof typeof PublicHolidayScalarFieldEnum];
export declare const EmployeeScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly userId: "userId";
    readonly employeeNumber: "employeeNumber";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly personalEmail: "personalEmail";
    readonly workEmail: "workEmail";
    readonly phone: "phone";
    readonly dateOfBirth: "dateOfBirth";
    readonly gender: "gender";
    readonly nationality: "nationality";
    readonly address: "address";
    readonly emergencyContact: "emergencyContact";
    readonly avatarUrl: "avatarUrl";
    readonly jobTitle: "jobTitle";
    readonly departmentId: "departmentId";
    readonly locationId: "locationId";
    readonly managerId: "managerId";
    readonly employmentType: "employmentType";
    readonly workScheduleId: "workScheduleId";
    readonly startDate: "startDate";
    readonly probationEndDate: "probationEndDate";
    readonly terminationDate: "terminationDate";
    readonly terminationReason: "terminationReason";
    readonly status: "status";
    readonly salaryType: "salaryType";
    readonly baseSalary: "baseSalary";
    readonly hourlyRate: "hourlyRate";
    readonly currency: "currency";
    readonly payGroupId: "payGroupId";
    readonly bankName: "bankName";
    readonly bankAccountNumber: "bankAccountNumber";
    readonly bankRoutingNumber: "bankRoutingNumber";
    readonly paymentMethod: "paymentMethod";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum];
export declare const EmployeeDocumentScalarFieldEnum: {
    readonly id: "id";
    readonly employeeId: "employeeId";
    readonly name: "name";
    readonly type: "type";
    readonly cloudinaryPublicId: "cloudinaryPublicId";
    readonly secureUrl: "secureUrl";
    readonly fileSize: "fileSize";
    readonly mimeType: "mimeType";
    readonly expiryDate: "expiryDate";
    readonly signedAt: "signedAt";
    readonly uploadedBy: "uploadedBy";
    readonly createdAt: "createdAt";
};
export type EmployeeDocumentScalarFieldEnum = (typeof EmployeeDocumentScalarFieldEnum)[keyof typeof EmployeeDocumentScalarFieldEnum];
export declare const RoleChangeScalarFieldEnum: {
    readonly id: "id";
    readonly employeeId: "employeeId";
    readonly changedBy: "changedBy";
    readonly field: "field";
    readonly oldValue: "oldValue";
    readonly newValue: "newValue";
    readonly effectiveDate: "effectiveDate";
    readonly reason: "reason";
    readonly createdAt: "createdAt";
};
export type RoleChangeScalarFieldEnum = (typeof RoleChangeScalarFieldEnum)[keyof typeof RoleChangeScalarFieldEnum];
export declare const JobPostingScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly title: "title";
    readonly departmentId: "departmentId";
    readonly locationId: "locationId";
    readonly employmentType: "employmentType";
    readonly remoteType: "remoteType";
    readonly salaryMin: "salaryMin";
    readonly salaryMax: "salaryMax";
    readonly currency: "currency";
    readonly description: "description";
    readonly requirements: "requirements";
    readonly benefits: "benefits";
    readonly status: "status";
    readonly visibility: "visibility";
    readonly hiringManagerId: "hiringManagerId";
    readonly recruiterId: "recruiterId";
    readonly createdBy: "createdBy";
    readonly publishedAt: "publishedAt";
    readonly closedAt: "closedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type JobPostingScalarFieldEnum = (typeof JobPostingScalarFieldEnum)[keyof typeof JobPostingScalarFieldEnum];
export declare const PipelineStageScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly name: "name";
    readonly orderIndex: "orderIndex";
    readonly color: "color";
    readonly isDefault: "isDefault";
    readonly isFinal: "isFinal";
    readonly createdAt: "createdAt";
};
export type PipelineStageScalarFieldEnum = (typeof PipelineStageScalarFieldEnum)[keyof typeof PipelineStageScalarFieldEnum];
export declare const ApplicationScalarFieldEnum: {
    readonly id: "id";
    readonly jobPostingId: "jobPostingId";
    readonly stageId: "stageId";
    readonly candidateName: "candidateName";
    readonly candidateEmail: "candidateEmail";
    readonly candidatePhone: "candidatePhone";
    readonly cvCloudinaryPublicId: "cvCloudinaryPublicId";
    readonly coverLetter: "coverLetter";
    readonly source: "source";
    readonly status: "status";
    readonly rejectionReason: "rejectionReason";
    readonly appliedAt: "appliedAt";
    readonly updatedAt: "updatedAt";
};
export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum];
export declare const ApplicationNoteScalarFieldEnum: {
    readonly id: "id";
    readonly applicationId: "applicationId";
    readonly authorId: "authorId";
    readonly content: "content";
    readonly createdAt: "createdAt";
};
export type ApplicationNoteScalarFieldEnum = (typeof ApplicationNoteScalarFieldEnum)[keyof typeof ApplicationNoteScalarFieldEnum];
export declare const InterviewScalarFieldEnum: {
    readonly id: "id";
    readonly applicationId: "applicationId";
    readonly scheduledAt: "scheduledAt";
    readonly durationMinutes: "durationMinutes";
    readonly type: "type";
    readonly meetingLink: "meetingLink";
    readonly location: "location";
    readonly status: "status";
    readonly createdBy: "createdBy";
    readonly createdAt: "createdAt";
};
export type InterviewScalarFieldEnum = (typeof InterviewScalarFieldEnum)[keyof typeof InterviewScalarFieldEnum];
export declare const InterviewPanelistScalarFieldEnum: {
    readonly interviewId: "interviewId";
    readonly employeeId: "employeeId";
};
export type InterviewPanelistScalarFieldEnum = (typeof InterviewPanelistScalarFieldEnum)[keyof typeof InterviewPanelistScalarFieldEnum];
export declare const InterviewFeedbackScalarFieldEnum: {
    readonly id: "id";
    readonly interviewId: "interviewId";
    readonly interviewerId: "interviewerId";
    readonly rating: "rating";
    readonly strengths: "strengths";
    readonly weaknesses: "weaknesses";
    readonly recommendation: "recommendation";
    readonly submittedAt: "submittedAt";
};
export type InterviewFeedbackScalarFieldEnum = (typeof InterviewFeedbackScalarFieldEnum)[keyof typeof InterviewFeedbackScalarFieldEnum];
export declare const OfferScalarFieldEnum: {
    readonly id: "id";
    readonly applicationId: "applicationId";
    readonly salary: "salary";
    readonly currency: "currency";
    readonly startDate: "startDate";
    readonly offerLetterCloudinaryPublicId: "offerLetterCloudinaryPublicId";
    readonly status: "status";
    readonly sentAt: "sentAt";
    readonly signedAt: "signedAt";
    readonly expiresAt: "expiresAt";
    readonly createdBy: "createdBy";
    readonly createdAt: "createdAt";
};
export type OfferScalarFieldEnum = (typeof OfferScalarFieldEnum)[keyof typeof OfferScalarFieldEnum];
export declare const OnboardingTemplateScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly name: "name";
    readonly description: "description";
    readonly createdBy: "createdBy";
    readonly createdAt: "createdAt";
};
export type OnboardingTemplateScalarFieldEnum = (typeof OnboardingTemplateScalarFieldEnum)[keyof typeof OnboardingTemplateScalarFieldEnum];
export declare const OnboardingTemplateTaskScalarFieldEnum: {
    readonly id: "id";
    readonly templateId: "templateId";
    readonly title: "title";
    readonly description: "description";
    readonly dueAfterDays: "dueAfterDays";
    readonly assignTo: "assignTo";
    readonly orderIndex: "orderIndex";
};
export type OnboardingTemplateTaskScalarFieldEnum = (typeof OnboardingTemplateTaskScalarFieldEnum)[keyof typeof OnboardingTemplateTaskScalarFieldEnum];
export declare const OnboardingChecklistScalarFieldEnum: {
    readonly id: "id";
    readonly employeeId: "employeeId";
    readonly templateId: "templateId";
    readonly status: "status";
    readonly createdAt: "createdAt";
};
export type OnboardingChecklistScalarFieldEnum = (typeof OnboardingChecklistScalarFieldEnum)[keyof typeof OnboardingChecklistScalarFieldEnum];
export declare const OnboardingTaskScalarFieldEnum: {
    readonly id: "id";
    readonly checklistId: "checklistId";
    readonly title: "title";
    readonly description: "description";
    readonly dueDate: "dueDate";
    readonly assignedTo: "assignedTo";
    readonly assignTo: "assignTo";
    readonly status: "status";
    readonly completedAt: "completedAt";
    readonly note: "note";
    readonly orderIndex: "orderIndex";
};
export type OnboardingTaskScalarFieldEnum = (typeof OnboardingTaskScalarFieldEnum)[keyof typeof OnboardingTaskScalarFieldEnum];
export declare const ShiftTemplateScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly name: "name";
    readonly startTime: "startTime";
    readonly endTime: "endTime";
    readonly breakMinutes: "breakMinutes";
    readonly color: "color";
    readonly createdAt: "createdAt";
};
export type ShiftTemplateScalarFieldEnum = (typeof ShiftTemplateScalarFieldEnum)[keyof typeof ShiftTemplateScalarFieldEnum];
export declare const ShiftScheduleScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly employeeId: "employeeId";
    readonly templateId: "templateId";
    readonly date: "date";
    readonly startTime: "startTime";
    readonly endTime: "endTime";
    readonly note: "note";
    readonly createdAt: "createdAt";
};
export type ShiftScheduleScalarFieldEnum = (typeof ShiftScheduleScalarFieldEnum)[keyof typeof ShiftScheduleScalarFieldEnum];
export declare const AttendanceEntryScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly employeeId: "employeeId";
    readonly date: "date";
    readonly clockIn: "clockIn";
    readonly clockOut: "clockOut";
    readonly totalMinutes: "totalMinutes";
    readonly overtimeMinutes: "overtimeMinutes";
    readonly isManual: "isManual";
    readonly manualReason: "manualReason";
    readonly status: "status";
    readonly locationLat: "locationLat";
    readonly locationLng: "locationLng";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AttendanceEntryScalarFieldEnum = (typeof AttendanceEntryScalarFieldEnum)[keyof typeof AttendanceEntryScalarFieldEnum];
export declare const BreakEntryScalarFieldEnum: {
    readonly id: "id";
    readonly attendanceEntryId: "attendanceEntryId";
    readonly startTime: "startTime";
    readonly endTime: "endTime";
    readonly durationMinutes: "durationMinutes";
};
export type BreakEntryScalarFieldEnum = (typeof BreakEntryScalarFieldEnum)[keyof typeof BreakEntryScalarFieldEnum];
export declare const TimesheetScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly employeeId: "employeeId";
    readonly weekStart: "weekStart";
    readonly weekEnd: "weekEnd";
    readonly totalHours: "totalHours";
    readonly overtimeHours: "overtimeHours";
    readonly status: "status";
    readonly submittedAt: "submittedAt";
    readonly approvedBy: "approvedBy";
    readonly approvedAt: "approvedAt";
    readonly rejectionReason: "rejectionReason";
};
export type TimesheetScalarFieldEnum = (typeof TimesheetScalarFieldEnum)[keyof typeof TimesheetScalarFieldEnum];
export declare const LeaveTypeScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly name: "name";
    readonly color: "color";
    readonly isPaid: "isPaid";
    readonly requiresDocument: "requiresDocument";
    readonly genderRestriction: "genderRestriction";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
};
export type LeaveTypeScalarFieldEnum = (typeof LeaveTypeScalarFieldEnum)[keyof typeof LeaveTypeScalarFieldEnum];
export declare const LeavePolicyScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly leaveTypeId: "leaveTypeId";
    readonly name: "name";
    readonly annualAllowance: "annualAllowance";
    readonly accrualType: "accrualType";
    readonly carryOverMax: "carryOverMax";
    readonly advanceNoticeDays: "advanceNoticeDays";
    readonly maxConsecutiveDays: "maxConsecutiveDays";
    readonly createdAt: "createdAt";
};
export type LeavePolicyScalarFieldEnum = (typeof LeavePolicyScalarFieldEnum)[keyof typeof LeavePolicyScalarFieldEnum];
export declare const LeaveBalanceScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly employeeId: "employeeId";
    readonly leaveTypeId: "leaveTypeId";
    readonly year: "year";
    readonly allocated: "allocated";
    readonly used: "used";
    readonly pending: "pending";
    readonly carriedOver: "carriedOver";
    readonly adjusted: "adjusted";
};
export type LeaveBalanceScalarFieldEnum = (typeof LeaveBalanceScalarFieldEnum)[keyof typeof LeaveBalanceScalarFieldEnum];
export declare const LeaveRequestScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly employeeId: "employeeId";
    readonly leaveTypeId: "leaveTypeId";
    readonly startDate: "startDate";
    readonly endDate: "endDate";
    readonly halfDay: "halfDay";
    readonly halfDayPeriod: "halfDayPeriod";
    readonly durationDays: "durationDays";
    readonly reason: "reason";
    readonly documentCloudinaryPublicId: "documentCloudinaryPublicId";
    readonly status: "status";
    readonly approvedBy: "approvedBy";
    readonly approvedAt: "approvedAt";
    readonly rejectionReason: "rejectionReason";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LeaveRequestScalarFieldEnum = (typeof LeaveRequestScalarFieldEnum)[keyof typeof LeaveRequestScalarFieldEnum];
export declare const PayGroupScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly name: "name";
    readonly payFrequency: "payFrequency";
    readonly firstPayDate: "firstPayDate";
    readonly payPeriodStartDay: "payPeriodStartDay";
    readonly createdAt: "createdAt";
};
export type PayGroupScalarFieldEnum = (typeof PayGroupScalarFieldEnum)[keyof typeof PayGroupScalarFieldEnum];
export declare const PayRunScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly payGroupId: "payGroupId";
    readonly periodStart: "periodStart";
    readonly periodEnd: "periodEnd";
    readonly payDate: "payDate";
    readonly status: "status";
    readonly totalGross: "totalGross";
    readonly totalDeductions: "totalDeductions";
    readonly totalNet: "totalNet";
    readonly employeeCount: "employeeCount";
    readonly notes: "notes";
    readonly createdBy: "createdBy";
    readonly approvedBy: "approvedBy";
    readonly approvedAt: "approvedAt";
    readonly processedAt: "processedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PayRunScalarFieldEnum = (typeof PayRunScalarFieldEnum)[keyof typeof PayRunScalarFieldEnum];
export declare const PayRunLineScalarFieldEnum: {
    readonly id: "id";
    readonly payRunId: "payRunId";
    readonly employeeId: "employeeId";
    readonly grossPay: "grossPay";
    readonly netPay: "netPay";
    readonly totalDeductions: "totalDeductions";
    readonly isExcluded: "isExcluded";
    readonly exclusionReason: "exclusionReason";
    readonly earnings: "earnings";
    readonly deductions: "deductions";
    readonly taxes: "taxes";
    readonly createdAt: "createdAt";
};
export type PayRunLineScalarFieldEnum = (typeof PayRunLineScalarFieldEnum)[keyof typeof PayRunLineScalarFieldEnum];
export declare const PayRunAdjustmentScalarFieldEnum: {
    readonly id: "id";
    readonly payRunId: "payRunId";
    readonly employeeId: "employeeId";
    readonly type: "type";
    readonly amount: "amount";
    readonly description: "description";
    readonly addedBy: "addedBy";
    readonly createdAt: "createdAt";
};
export type PayRunAdjustmentScalarFieldEnum = (typeof PayRunAdjustmentScalarFieldEnum)[keyof typeof PayRunAdjustmentScalarFieldEnum];
export declare const PayslipScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly payRunId: "payRunId";
    readonly employeeId: "employeeId";
    readonly periodStart: "periodStart";
    readonly periodEnd: "periodEnd";
    readonly payDate: "payDate";
    readonly grossPay: "grossPay";
    readonly totalDeductions: "totalDeductions";
    readonly netPay: "netPay";
    readonly earnings: "earnings";
    readonly deductions: "deductions";
    readonly taxes: "taxes";
    readonly pdfCloudinaryPublicId: "pdfCloudinaryPublicId";
    readonly emailedAt: "emailedAt";
    readonly createdAt: "createdAt";
};
export type PayslipScalarFieldEnum = (typeof PayslipScalarFieldEnum)[keyof typeof PayslipScalarFieldEnum];
export declare const DeductionTypeScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly name: "name";
    readonly type: "type";
    readonly defaultValue: "defaultValue";
    readonly isPreTax: "isPreTax";
    readonly createdAt: "createdAt";
};
export type DeductionTypeScalarFieldEnum = (typeof DeductionTypeScalarFieldEnum)[keyof typeof DeductionTypeScalarFieldEnum];
export declare const TaxSettingsScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly country: "country";
    readonly brackets: "brackets";
    readonly pensionRate: "pensionRate";
    readonly employerPensionRate: "employerPensionRate";
    readonly nationalInsuranceRate: "nationalInsuranceRate";
    readonly updatedAt: "updatedAt";
};
export type TaxSettingsScalarFieldEnum = (typeof TaxSettingsScalarFieldEnum)[keyof typeof TaxSettingsScalarFieldEnum];
export declare const PerformanceCycleScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly name: "name";
    readonly type: "type";
    readonly startDate: "startDate";
    readonly endDate: "endDate";
    readonly reviewType: "reviewType";
    readonly ratingScale: "ratingScale";
    readonly status: "status";
    readonly createdBy: "createdBy";
    readonly launchedAt: "launchedAt";
    readonly closedAt: "closedAt";
    readonly createdAt: "createdAt";
};
export type PerformanceCycleScalarFieldEnum = (typeof PerformanceCycleScalarFieldEnum)[keyof typeof PerformanceCycleScalarFieldEnum];
export declare const PerformanceReviewScalarFieldEnum: {
    readonly id: "id";
    readonly cycleId: "cycleId";
    readonly employeeId: "employeeId";
    readonly managerId: "managerId";
    readonly selfReviewData: "selfReviewData";
    readonly managerReviewData: "managerReviewData";
    readonly peerFeedbackData: "peerFeedbackData";
    readonly overallRating: "overallRating";
    readonly overallLabel: "overallLabel";
    readonly selfSubmittedAt: "selfSubmittedAt";
    readonly managerSubmittedAt: "managerSubmittedAt";
    readonly acknowledgedAt: "acknowledgedAt";
    readonly status: "status";
    readonly createdAt: "createdAt";
};
export type PerformanceReviewScalarFieldEnum = (typeof PerformanceReviewScalarFieldEnum)[keyof typeof PerformanceReviewScalarFieldEnum];
export declare const GoalScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly ownerId: "ownerId";
    readonly cycleId: "cycleId";
    readonly title: "title";
    readonly description: "description";
    readonly metric: "metric";
    readonly target: "target";
    readonly currentProgress: "currentProgress";
    readonly dueDate: "dueDate";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type GoalScalarFieldEnum = (typeof GoalScalarFieldEnum)[keyof typeof GoalScalarFieldEnum];
export declare const GoalCheckinScalarFieldEnum: {
    readonly id: "id";
    readonly goalId: "goalId";
    readonly progress: "progress";
    readonly comment: "comment";
    readonly checkedInBy: "checkedInBy";
    readonly createdAt: "createdAt";
};
export type GoalCheckinScalarFieldEnum = (typeof GoalCheckinScalarFieldEnum)[keyof typeof GoalCheckinScalarFieldEnum];
export declare const ContinuousFeedbackScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly fromEmployeeId: "fromEmployeeId";
    readonly toEmployeeId: "toEmployeeId";
    readonly message: "message";
    readonly isAnonymous: "isAnonymous";
    readonly createdAt: "createdAt";
};
export type ContinuousFeedbackScalarFieldEnum = (typeof ContinuousFeedbackScalarFieldEnum)[keyof typeof ContinuousFeedbackScalarFieldEnum];
export declare const AssetScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly name: "name";
    readonly type: "type";
    readonly brand: "brand";
    readonly model: "model";
    readonly serialNumber: "serialNumber";
    readonly purchaseDate: "purchaseDate";
    readonly purchasePrice: "purchasePrice";
    readonly currentValue: "currentValue";
    readonly locationId: "locationId";
    readonly status: "status";
    readonly notes: "notes";
    readonly qrCodeKey: "qrCodeKey";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AssetScalarFieldEnum = (typeof AssetScalarFieldEnum)[keyof typeof AssetScalarFieldEnum];
export declare const AssetAssignmentScalarFieldEnum: {
    readonly id: "id";
    readonly assetId: "assetId";
    readonly employeeId: "employeeId";
    readonly assignedDate: "assignedDate";
    readonly expectedReturnDate: "expectedReturnDate";
    readonly returnedDate: "returnedDate";
    readonly returnCondition: "returnCondition";
    readonly returnNotes: "returnNotes";
    readonly acknowledgedAt: "acknowledgedAt";
    readonly assignedBy: "assignedBy";
    readonly createdAt: "createdAt";
};
export type AssetAssignmentScalarFieldEnum = (typeof AssetAssignmentScalarFieldEnum)[keyof typeof AssetAssignmentScalarFieldEnum];
export declare const AssetRequestScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly employeeId: "employeeId";
    readonly assetType: "assetType";
    readonly reason: "reason";
    readonly status: "status";
    readonly fulfilledAssetId: "fulfilledAssetId";
    readonly createdAt: "createdAt";
};
export type AssetRequestScalarFieldEnum = (typeof AssetRequestScalarFieldEnum)[keyof typeof AssetRequestScalarFieldEnum];
export declare const AssetMaintenanceScalarFieldEnum: {
    readonly id: "id";
    readonly assetId: "assetId";
    readonly description: "description";
    readonly cost: "cost";
    readonly date: "date";
    readonly performedBy: "performedBy";
    readonly createdAt: "createdAt";
};
export type AssetMaintenanceScalarFieldEnum = (typeof AssetMaintenanceScalarFieldEnum)[keyof typeof AssetMaintenanceScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly userId: "userId";
    readonly type: "type";
    readonly title: "title";
    readonly body: "body";
    readonly data: "data";
    readonly read: "read";
    readonly readAt: "readAt";
    readonly createdAt: "createdAt";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const NotificationPreferenceScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly emailEnabled: "emailEnabled";
    readonly pushEnabled: "pushEnabled";
    readonly preferences: "preferences";
    readonly updatedAt: "updatedAt";
};
export type NotificationPreferenceScalarFieldEnum = (typeof NotificationPreferenceScalarFieldEnum)[keyof typeof NotificationPreferenceScalarFieldEnum];
export declare const AnnouncementScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly title: "title";
    readonly content: "content";
    readonly audience: "audience";
    readonly audienceDeptIds: "audienceDeptIds";
    readonly audienceRoles: "audienceRoles";
    readonly isPinned: "isPinned";
    readonly publishedBy: "publishedBy";
    readonly publishedAt: "publishedAt";
    readonly updatedAt: "updatedAt";
};
export type AnnouncementScalarFieldEnum = (typeof AnnouncementScalarFieldEnum)[keyof typeof AnnouncementScalarFieldEnum];
export declare const AnnouncementReadScalarFieldEnum: {
    readonly announcementId: "announcementId";
    readonly userId: "userId";
    readonly readAt: "readAt";
};
export type AnnouncementReadScalarFieldEnum = (typeof AnnouncementReadScalarFieldEnum)[keyof typeof AnnouncementReadScalarFieldEnum];
export declare const AuditLogScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly actorId: "actorId";
    readonly actorName: "actorName";
    readonly actorRole: "actorRole";
    readonly action: "action";
    readonly resourceType: "resourceType";
    readonly resourceId: "resourceId";
    readonly resourceName: "resourceName";
    readonly changes: "changes";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
    readonly createdAt: "createdAt";
};
export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum];
export declare const BillingInvoiceScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly stripeInvoiceId: "stripeInvoiceId";
    readonly amount: "amount";
    readonly currency: "currency";
    readonly status: "status";
    readonly periodStart: "periodStart";
    readonly periodEnd: "periodEnd";
    readonly pdfUrl: "pdfUrl";
    readonly paidAt: "paidAt";
    readonly createdAt: "createdAt";
};
export type BillingInvoiceScalarFieldEnum = (typeof BillingInvoiceScalarFieldEnum)[keyof typeof BillingInvoiceScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: runtime.JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type EnumPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Plan'>;
export type ListEnumPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Plan[]'>;
export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>;
export type ListEnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>;
export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type EnumInvitationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvitationStatus'>;
export type ListEnumInvitationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvitationStatus[]'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>;
export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type EnumEmploymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmploymentType'>;
export type ListEnumEmploymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmploymentType[]'>;
export type EnumEmployeeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmployeeStatus'>;
export type ListEnumEmployeeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmployeeStatus[]'>;
export type EnumSalaryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SalaryType'>;
export type ListEnumSalaryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SalaryType[]'>;
export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>;
export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>;
export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>;
export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>;
export type EnumRemoteTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RemoteType'>;
export type ListEnumRemoteTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RemoteType[]'>;
export type EnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus'>;
export type ListEnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus[]'>;
export type EnumJobVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobVisibility'>;
export type ListEnumJobVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobVisibility[]'>;
export type EnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus'>;
export type ListEnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus[]'>;
export type EnumInterviewTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InterviewType'>;
export type ListEnumInterviewTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InterviewType[]'>;
export type EnumInterviewStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InterviewStatus'>;
export type ListEnumInterviewStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InterviewStatus[]'>;
export type EnumInterviewRecommendationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InterviewRecommendation'>;
export type ListEnumInterviewRecommendationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InterviewRecommendation[]'>;
export type EnumOfferStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OfferStatus'>;
export type ListEnumOfferStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OfferStatus[]'>;
export type EnumOnboardingAssigneeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OnboardingAssignee'>;
export type ListEnumOnboardingAssigneeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OnboardingAssignee[]'>;
export type EnumChecklistStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChecklistStatus'>;
export type ListEnumChecklistStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChecklistStatus[]'>;
export type EnumOnboardingTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OnboardingTaskStatus'>;
export type ListEnumOnboardingTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OnboardingTaskStatus[]'>;
export type EnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus'>;
export type ListEnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus[]'>;
export type EnumTimesheetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TimesheetStatus'>;
export type ListEnumTimesheetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TimesheetStatus[]'>;
export type EnumAccrualTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccrualType'>;
export type ListEnumAccrualTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccrualType[]'>;
export type EnumHalfDayPeriodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HalfDayPeriod'>;
export type ListEnumHalfDayPeriodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HalfDayPeriod[]'>;
export type EnumLeaveStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveStatus'>;
export type ListEnumLeaveStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveStatus[]'>;
export type EnumPayFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayFrequency'>;
export type ListEnumPayFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayFrequency[]'>;
export type EnumPayRunStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayRunStatus'>;
export type ListEnumPayRunStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayRunStatus[]'>;
export type EnumAdjustmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdjustmentType'>;
export type ListEnumAdjustmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdjustmentType[]'>;
export type EnumDeductionValueTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeductionValueType'>;
export type ListEnumDeductionValueTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeductionValueType[]'>;
export type EnumPerformanceCycleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PerformanceCycleType'>;
export type ListEnumPerformanceCycleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PerformanceCycleType[]'>;
export type EnumReviewTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReviewType'>;
export type ListEnumReviewTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReviewType[]'>;
export type EnumReviewCycleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReviewCycleStatus'>;
export type ListEnumReviewCycleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReviewCycleStatus[]'>;
export type EnumPerformanceReviewStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PerformanceReviewStatus'>;
export type ListEnumPerformanceReviewStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PerformanceReviewStatus[]'>;
export type EnumGoalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalStatus'>;
export type ListEnumGoalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalStatus[]'>;
export type EnumAssetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssetStatus'>;
export type ListEnumAssetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssetStatus[]'>;
export type EnumReturnConditionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReturnCondition'>;
export type ListEnumReturnConditionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReturnCondition[]'>;
export type EnumAssetRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssetRequestStatus'>;
export type ListEnumAssetRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssetRequestStatus[]'>;
export type EnumAnnouncementAudienceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnnouncementAudience'>;
export type ListEnumAnnouncementAudienceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnnouncementAudience[]'>;
export type EnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus'>;
export type ListEnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    organization?: Prisma.OrganizationOmit;
    user?: Prisma.UserOmit;
    refreshToken?: Prisma.RefreshTokenOmit;
    emailVerificationToken?: Prisma.EmailVerificationTokenOmit;
    passwordResetToken?: Prisma.PasswordResetTokenOmit;
    invitation?: Prisma.InvitationOmit;
    location?: Prisma.LocationOmit;
    department?: Prisma.DepartmentOmit;
    workSchedule?: Prisma.WorkScheduleOmit;
    publicHoliday?: Prisma.PublicHolidayOmit;
    employee?: Prisma.EmployeeOmit;
    employeeDocument?: Prisma.EmployeeDocumentOmit;
    roleChange?: Prisma.RoleChangeOmit;
    jobPosting?: Prisma.JobPostingOmit;
    pipelineStage?: Prisma.PipelineStageOmit;
    application?: Prisma.ApplicationOmit;
    applicationNote?: Prisma.ApplicationNoteOmit;
    interview?: Prisma.InterviewOmit;
    interviewPanelist?: Prisma.InterviewPanelistOmit;
    interviewFeedback?: Prisma.InterviewFeedbackOmit;
    offer?: Prisma.OfferOmit;
    onboardingTemplate?: Prisma.OnboardingTemplateOmit;
    onboardingTemplateTask?: Prisma.OnboardingTemplateTaskOmit;
    onboardingChecklist?: Prisma.OnboardingChecklistOmit;
    onboardingTask?: Prisma.OnboardingTaskOmit;
    shiftTemplate?: Prisma.ShiftTemplateOmit;
    shiftSchedule?: Prisma.ShiftScheduleOmit;
    attendanceEntry?: Prisma.AttendanceEntryOmit;
    breakEntry?: Prisma.BreakEntryOmit;
    timesheet?: Prisma.TimesheetOmit;
    leaveType?: Prisma.LeaveTypeOmit;
    leavePolicy?: Prisma.LeavePolicyOmit;
    leaveBalance?: Prisma.LeaveBalanceOmit;
    leaveRequest?: Prisma.LeaveRequestOmit;
    payGroup?: Prisma.PayGroupOmit;
    payRun?: Prisma.PayRunOmit;
    payRunLine?: Prisma.PayRunLineOmit;
    payRunAdjustment?: Prisma.PayRunAdjustmentOmit;
    payslip?: Prisma.PayslipOmit;
    deductionType?: Prisma.DeductionTypeOmit;
    taxSettings?: Prisma.TaxSettingsOmit;
    performanceCycle?: Prisma.PerformanceCycleOmit;
    performanceReview?: Prisma.PerformanceReviewOmit;
    goal?: Prisma.GoalOmit;
    goalCheckin?: Prisma.GoalCheckinOmit;
    continuousFeedback?: Prisma.ContinuousFeedbackOmit;
    asset?: Prisma.AssetOmit;
    assetAssignment?: Prisma.AssetAssignmentOmit;
    assetRequest?: Prisma.AssetRequestOmit;
    assetMaintenance?: Prisma.AssetMaintenanceOmit;
    notification?: Prisma.NotificationOmit;
    notificationPreference?: Prisma.NotificationPreferenceOmit;
    announcement?: Prisma.AnnouncementOmit;
    announcementRead?: Prisma.AnnouncementReadOmit;
    auditLog?: Prisma.AuditLogOmit;
    billingInvoice?: Prisma.BillingInvoiceOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
