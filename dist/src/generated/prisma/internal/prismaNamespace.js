"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaveTypeScalarFieldEnum = exports.TimesheetScalarFieldEnum = exports.BreakEntryScalarFieldEnum = exports.AttendanceEntryScalarFieldEnum = exports.ShiftScheduleScalarFieldEnum = exports.ShiftTemplateScalarFieldEnum = exports.OnboardingTaskScalarFieldEnum = exports.OnboardingChecklistScalarFieldEnum = exports.OnboardingTemplateTaskScalarFieldEnum = exports.OnboardingTemplateScalarFieldEnum = exports.OfferScalarFieldEnum = exports.InterviewFeedbackScalarFieldEnum = exports.InterviewPanelistScalarFieldEnum = exports.InterviewScalarFieldEnum = exports.ApplicationNoteScalarFieldEnum = exports.ApplicationScalarFieldEnum = exports.PipelineStageScalarFieldEnum = exports.JobPostingScalarFieldEnum = exports.RoleChangeScalarFieldEnum = exports.EmployeeDocumentScalarFieldEnum = exports.EmployeeScalarFieldEnum = exports.PublicHolidayScalarFieldEnum = exports.WorkScheduleScalarFieldEnum = exports.DepartmentScalarFieldEnum = exports.LocationScalarFieldEnum = exports.InvitationScalarFieldEnum = exports.PasswordResetTokenScalarFieldEnum = exports.EmailVerificationTokenScalarFieldEnum = exports.RefreshTokenScalarFieldEnum = exports.UserScalarFieldEnum = exports.OrganizationScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
exports.defineExtension = exports.JsonNullValueFilter = exports.NullsOrder = exports.QueryMode = exports.JsonNullValueInput = exports.NullableJsonNullValueInput = exports.SortOrder = exports.BillingInvoiceScalarFieldEnum = exports.AuditLogScalarFieldEnum = exports.AnnouncementReadScalarFieldEnum = exports.AnnouncementScalarFieldEnum = exports.NotificationPreferenceScalarFieldEnum = exports.NotificationScalarFieldEnum = exports.AssetMaintenanceScalarFieldEnum = exports.AssetRequestScalarFieldEnum = exports.AssetAssignmentScalarFieldEnum = exports.AssetScalarFieldEnum = exports.ContinuousFeedbackScalarFieldEnum = exports.GoalCheckinScalarFieldEnum = exports.GoalScalarFieldEnum = exports.PerformanceReviewScalarFieldEnum = exports.PerformanceCycleScalarFieldEnum = exports.TaxSettingsScalarFieldEnum = exports.DeductionTypeScalarFieldEnum = exports.PayslipScalarFieldEnum = exports.PayRunAdjustmentScalarFieldEnum = exports.PayRunLineScalarFieldEnum = exports.PayRunScalarFieldEnum = exports.PayGroupScalarFieldEnum = exports.LeaveRequestScalarFieldEnum = exports.LeaveBalanceScalarFieldEnum = exports.LeavePolicyScalarFieldEnum = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.8.0",
    engine: "3c6e192761c0362d496ed980de936e2f3cebcd3a"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    Organization: 'Organization',
    User: 'User',
    RefreshToken: 'RefreshToken',
    EmailVerificationToken: 'EmailVerificationToken',
    PasswordResetToken: 'PasswordResetToken',
    Invitation: 'Invitation',
    Location: 'Location',
    Department: 'Department',
    WorkSchedule: 'WorkSchedule',
    PublicHoliday: 'PublicHoliday',
    Employee: 'Employee',
    EmployeeDocument: 'EmployeeDocument',
    RoleChange: 'RoleChange',
    JobPosting: 'JobPosting',
    PipelineStage: 'PipelineStage',
    Application: 'Application',
    ApplicationNote: 'ApplicationNote',
    Interview: 'Interview',
    InterviewPanelist: 'InterviewPanelist',
    InterviewFeedback: 'InterviewFeedback',
    Offer: 'Offer',
    OnboardingTemplate: 'OnboardingTemplate',
    OnboardingTemplateTask: 'OnboardingTemplateTask',
    OnboardingChecklist: 'OnboardingChecklist',
    OnboardingTask: 'OnboardingTask',
    ShiftTemplate: 'ShiftTemplate',
    ShiftSchedule: 'ShiftSchedule',
    AttendanceEntry: 'AttendanceEntry',
    BreakEntry: 'BreakEntry',
    Timesheet: 'Timesheet',
    LeaveType: 'LeaveType',
    LeavePolicy: 'LeavePolicy',
    LeaveBalance: 'LeaveBalance',
    LeaveRequest: 'LeaveRequest',
    PayGroup: 'PayGroup',
    PayRun: 'PayRun',
    PayRunLine: 'PayRunLine',
    PayRunAdjustment: 'PayRunAdjustment',
    Payslip: 'Payslip',
    DeductionType: 'DeductionType',
    TaxSettings: 'TaxSettings',
    PerformanceCycle: 'PerformanceCycle',
    PerformanceReview: 'PerformanceReview',
    Goal: 'Goal',
    GoalCheckin: 'GoalCheckin',
    ContinuousFeedback: 'ContinuousFeedback',
    Asset: 'Asset',
    AssetAssignment: 'AssetAssignment',
    AssetRequest: 'AssetRequest',
    AssetMaintenance: 'AssetMaintenance',
    Notification: 'Notification',
    NotificationPreference: 'NotificationPreference',
    Announcement: 'Announcement',
    AnnouncementRead: 'AnnouncementRead',
    AuditLog: 'AuditLog',
    BillingInvoice: 'BillingInvoice'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.OrganizationScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    industry: 'industry',
    size: 'size',
    country: 'country',
    timezone: 'timezone',
    currency: 'currency',
    logoUrl: 'logoUrl',
    website: 'website',
    fiscalYearStart: 'fiscalYearStart',
    plan: 'plan',
    stripeCustomerId: 'stripeCustomerId',
    stripeSubscriptionId: 'stripeSubscriptionId',
    subscriptionStatus: 'subscriptionStatus',
    trialEndsAt: 'trialEndsAt',
    seatCount: 'seatCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.UserScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    email: 'email',
    passwordHash: 'passwordHash',
    fullName: 'fullName',
    role: 'role',
    emailVerified: 'emailVerified',
    avatarUrl: 'avatarUrl',
    isActive: 'isActive',
    twoFaEnabled: 'twoFaEnabled',
    twoFaSecret: 'twoFaSecret',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.RefreshTokenScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    tokenHash: 'tokenHash',
    deviceInfo: 'deviceInfo',
    ipAddress: 'ipAddress',
    expiresAt: 'expiresAt',
    revokedAt: 'revokedAt',
    createdAt: 'createdAt'
};
exports.EmailVerificationTokenScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    tokenHash: 'tokenHash',
    expiresAt: 'expiresAt',
    usedAt: 'usedAt',
    createdAt: 'createdAt'
};
exports.PasswordResetTokenScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    tokenHash: 'tokenHash',
    expiresAt: 'expiresAt',
    usedAt: 'usedAt',
    createdAt: 'createdAt'
};
exports.InvitationScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    email: 'email',
    role: 'role',
    departmentId: 'departmentId',
    tokenHash: 'tokenHash',
    status: 'status',
    expiresAt: 'expiresAt',
    acceptedAt: 'acceptedAt',
    invitedById: 'invitedById',
    createdAt: 'createdAt'
};
exports.LocationScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    name: 'name',
    address: 'address',
    city: 'city',
    country: 'country',
    timezone: 'timezone',
    isRemote: 'isRemote',
    createdAt: 'createdAt'
};
exports.DepartmentScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    name: 'name',
    parentDepartmentId: 'parentDepartmentId',
    headId: 'headId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.WorkScheduleScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    name: 'name',
    workDays: 'workDays',
    dailyHours: 'dailyHours',
    overtimeThresholdDaily: 'overtimeThresholdDaily',
    overtimeThresholdWeekly: 'overtimeThresholdWeekly',
    isDefault: 'isDefault',
    createdAt: 'createdAt'
};
exports.PublicHolidayScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    locationId: 'locationId',
    name: 'name',
    date: 'date',
    isCustom: 'isCustom',
    createdAt: 'createdAt'
};
exports.EmployeeScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    userId: 'userId',
    employeeNumber: 'employeeNumber',
    firstName: 'firstName',
    lastName: 'lastName',
    personalEmail: 'personalEmail',
    workEmail: 'workEmail',
    phone: 'phone',
    dateOfBirth: 'dateOfBirth',
    gender: 'gender',
    nationality: 'nationality',
    address: 'address',
    emergencyContact: 'emergencyContact',
    avatarUrl: 'avatarUrl',
    jobTitle: 'jobTitle',
    departmentId: 'departmentId',
    locationId: 'locationId',
    managerId: 'managerId',
    employmentType: 'employmentType',
    workScheduleId: 'workScheduleId',
    startDate: 'startDate',
    probationEndDate: 'probationEndDate',
    terminationDate: 'terminationDate',
    terminationReason: 'terminationReason',
    status: 'status',
    salaryType: 'salaryType',
    baseSalary: 'baseSalary',
    hourlyRate: 'hourlyRate',
    currency: 'currency',
    payGroupId: 'payGroupId',
    bankName: 'bankName',
    bankAccountNumber: 'bankAccountNumber',
    bankRoutingNumber: 'bankRoutingNumber',
    paymentMethod: 'paymentMethod',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.EmployeeDocumentScalarFieldEnum = {
    id: 'id',
    employeeId: 'employeeId',
    name: 'name',
    type: 'type',
    cloudinaryPublicId: 'cloudinaryPublicId',
    secureUrl: 'secureUrl',
    fileSize: 'fileSize',
    mimeType: 'mimeType',
    expiryDate: 'expiryDate',
    signedAt: 'signedAt',
    uploadedBy: 'uploadedBy',
    createdAt: 'createdAt'
};
exports.RoleChangeScalarFieldEnum = {
    id: 'id',
    employeeId: 'employeeId',
    changedBy: 'changedBy',
    field: 'field',
    oldValue: 'oldValue',
    newValue: 'newValue',
    effectiveDate: 'effectiveDate',
    reason: 'reason',
    createdAt: 'createdAt'
};
exports.JobPostingScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    title: 'title',
    departmentId: 'departmentId',
    locationId: 'locationId',
    employmentType: 'employmentType',
    remoteType: 'remoteType',
    salaryMin: 'salaryMin',
    salaryMax: 'salaryMax',
    currency: 'currency',
    description: 'description',
    requirements: 'requirements',
    benefits: 'benefits',
    status: 'status',
    visibility: 'visibility',
    hiringManagerId: 'hiringManagerId',
    recruiterId: 'recruiterId',
    createdBy: 'createdBy',
    publishedAt: 'publishedAt',
    closedAt: 'closedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PipelineStageScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    name: 'name',
    orderIndex: 'orderIndex',
    color: 'color',
    isDefault: 'isDefault',
    isFinal: 'isFinal',
    createdAt: 'createdAt'
};
exports.ApplicationScalarFieldEnum = {
    id: 'id',
    jobPostingId: 'jobPostingId',
    stageId: 'stageId',
    candidateName: 'candidateName',
    candidateEmail: 'candidateEmail',
    candidatePhone: 'candidatePhone',
    cvCloudinaryPublicId: 'cvCloudinaryPublicId',
    coverLetter: 'coverLetter',
    source: 'source',
    status: 'status',
    rejectionReason: 'rejectionReason',
    appliedAt: 'appliedAt',
    updatedAt: 'updatedAt'
};
exports.ApplicationNoteScalarFieldEnum = {
    id: 'id',
    applicationId: 'applicationId',
    authorId: 'authorId',
    content: 'content',
    createdAt: 'createdAt'
};
exports.InterviewScalarFieldEnum = {
    id: 'id',
    applicationId: 'applicationId',
    scheduledAt: 'scheduledAt',
    durationMinutes: 'durationMinutes',
    type: 'type',
    meetingLink: 'meetingLink',
    location: 'location',
    status: 'status',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
};
exports.InterviewPanelistScalarFieldEnum = {
    interviewId: 'interviewId',
    employeeId: 'employeeId'
};
exports.InterviewFeedbackScalarFieldEnum = {
    id: 'id',
    interviewId: 'interviewId',
    interviewerId: 'interviewerId',
    rating: 'rating',
    strengths: 'strengths',
    weaknesses: 'weaknesses',
    recommendation: 'recommendation',
    submittedAt: 'submittedAt'
};
exports.OfferScalarFieldEnum = {
    id: 'id',
    applicationId: 'applicationId',
    salary: 'salary',
    currency: 'currency',
    startDate: 'startDate',
    offerLetterCloudinaryPublicId: 'offerLetterCloudinaryPublicId',
    status: 'status',
    sentAt: 'sentAt',
    signedAt: 'signedAt',
    expiresAt: 'expiresAt',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
};
exports.OnboardingTemplateScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    name: 'name',
    description: 'description',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
};
exports.OnboardingTemplateTaskScalarFieldEnum = {
    id: 'id',
    templateId: 'templateId',
    title: 'title',
    description: 'description',
    dueAfterDays: 'dueAfterDays',
    assignTo: 'assignTo',
    orderIndex: 'orderIndex'
};
exports.OnboardingChecklistScalarFieldEnum = {
    id: 'id',
    employeeId: 'employeeId',
    templateId: 'templateId',
    status: 'status',
    createdAt: 'createdAt'
};
exports.OnboardingTaskScalarFieldEnum = {
    id: 'id',
    checklistId: 'checklistId',
    title: 'title',
    description: 'description',
    dueDate: 'dueDate',
    assignedTo: 'assignedTo',
    assignTo: 'assignTo',
    status: 'status',
    completedAt: 'completedAt',
    note: 'note',
    orderIndex: 'orderIndex'
};
exports.ShiftTemplateScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    name: 'name',
    startTime: 'startTime',
    endTime: 'endTime',
    breakMinutes: 'breakMinutes',
    color: 'color',
    createdAt: 'createdAt'
};
exports.ShiftScheduleScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    employeeId: 'employeeId',
    templateId: 'templateId',
    date: 'date',
    startTime: 'startTime',
    endTime: 'endTime',
    note: 'note',
    createdAt: 'createdAt'
};
exports.AttendanceEntryScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    employeeId: 'employeeId',
    date: 'date',
    clockIn: 'clockIn',
    clockOut: 'clockOut',
    totalMinutes: 'totalMinutes',
    overtimeMinutes: 'overtimeMinutes',
    isManual: 'isManual',
    manualReason: 'manualReason',
    status: 'status',
    locationLat: 'locationLat',
    locationLng: 'locationLng',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.BreakEntryScalarFieldEnum = {
    id: 'id',
    attendanceEntryId: 'attendanceEntryId',
    startTime: 'startTime',
    endTime: 'endTime',
    durationMinutes: 'durationMinutes'
};
exports.TimesheetScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    employeeId: 'employeeId',
    weekStart: 'weekStart',
    weekEnd: 'weekEnd',
    totalHours: 'totalHours',
    overtimeHours: 'overtimeHours',
    status: 'status',
    submittedAt: 'submittedAt',
    approvedBy: 'approvedBy',
    approvedAt: 'approvedAt',
    rejectionReason: 'rejectionReason'
};
exports.LeaveTypeScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    name: 'name',
    color: 'color',
    isPaid: 'isPaid',
    requiresDocument: 'requiresDocument',
    genderRestriction: 'genderRestriction',
    isActive: 'isActive',
    createdAt: 'createdAt'
};
exports.LeavePolicyScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    leaveTypeId: 'leaveTypeId',
    name: 'name',
    annualAllowance: 'annualAllowance',
    accrualType: 'accrualType',
    carryOverMax: 'carryOverMax',
    advanceNoticeDays: 'advanceNoticeDays',
    maxConsecutiveDays: 'maxConsecutiveDays',
    createdAt: 'createdAt'
};
exports.LeaveBalanceScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    employeeId: 'employeeId',
    leaveTypeId: 'leaveTypeId',
    year: 'year',
    allocated: 'allocated',
    used: 'used',
    pending: 'pending',
    carriedOver: 'carriedOver',
    adjusted: 'adjusted'
};
exports.LeaveRequestScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    employeeId: 'employeeId',
    leaveTypeId: 'leaveTypeId',
    startDate: 'startDate',
    endDate: 'endDate',
    halfDay: 'halfDay',
    halfDayPeriod: 'halfDayPeriod',
    durationDays: 'durationDays',
    reason: 'reason',
    documentCloudinaryPublicId: 'documentCloudinaryPublicId',
    status: 'status',
    approvedBy: 'approvedBy',
    approvedAt: 'approvedAt',
    rejectionReason: 'rejectionReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PayGroupScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    name: 'name',
    payFrequency: 'payFrequency',
    firstPayDate: 'firstPayDate',
    payPeriodStartDay: 'payPeriodStartDay',
    createdAt: 'createdAt'
};
exports.PayRunScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    payGroupId: 'payGroupId',
    periodStart: 'periodStart',
    periodEnd: 'periodEnd',
    payDate: 'payDate',
    status: 'status',
    totalGross: 'totalGross',
    totalDeductions: 'totalDeductions',
    totalNet: 'totalNet',
    employeeCount: 'employeeCount',
    notes: 'notes',
    createdBy: 'createdBy',
    approvedBy: 'approvedBy',
    approvedAt: 'approvedAt',
    processedAt: 'processedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PayRunLineScalarFieldEnum = {
    id: 'id',
    payRunId: 'payRunId',
    employeeId: 'employeeId',
    grossPay: 'grossPay',
    netPay: 'netPay',
    totalDeductions: 'totalDeductions',
    isExcluded: 'isExcluded',
    exclusionReason: 'exclusionReason',
    earnings: 'earnings',
    deductions: 'deductions',
    taxes: 'taxes',
    createdAt: 'createdAt'
};
exports.PayRunAdjustmentScalarFieldEnum = {
    id: 'id',
    payRunId: 'payRunId',
    employeeId: 'employeeId',
    type: 'type',
    amount: 'amount',
    description: 'description',
    addedBy: 'addedBy',
    createdAt: 'createdAt'
};
exports.PayslipScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    payRunId: 'payRunId',
    employeeId: 'employeeId',
    periodStart: 'periodStart',
    periodEnd: 'periodEnd',
    payDate: 'payDate',
    grossPay: 'grossPay',
    totalDeductions: 'totalDeductions',
    netPay: 'netPay',
    earnings: 'earnings',
    deductions: 'deductions',
    taxes: 'taxes',
    pdfCloudinaryPublicId: 'pdfCloudinaryPublicId',
    emailedAt: 'emailedAt',
    createdAt: 'createdAt'
};
exports.DeductionTypeScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    name: 'name',
    type: 'type',
    defaultValue: 'defaultValue',
    isPreTax: 'isPreTax',
    createdAt: 'createdAt'
};
exports.TaxSettingsScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    country: 'country',
    brackets: 'brackets',
    pensionRate: 'pensionRate',
    employerPensionRate: 'employerPensionRate',
    nationalInsuranceRate: 'nationalInsuranceRate',
    updatedAt: 'updatedAt'
};
exports.PerformanceCycleScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    name: 'name',
    type: 'type',
    startDate: 'startDate',
    endDate: 'endDate',
    reviewType: 'reviewType',
    ratingScale: 'ratingScale',
    status: 'status',
    createdBy: 'createdBy',
    launchedAt: 'launchedAt',
    closedAt: 'closedAt',
    createdAt: 'createdAt'
};
exports.PerformanceReviewScalarFieldEnum = {
    id: 'id',
    cycleId: 'cycleId',
    employeeId: 'employeeId',
    managerId: 'managerId',
    selfReviewData: 'selfReviewData',
    managerReviewData: 'managerReviewData',
    peerFeedbackData: 'peerFeedbackData',
    overallRating: 'overallRating',
    overallLabel: 'overallLabel',
    selfSubmittedAt: 'selfSubmittedAt',
    managerSubmittedAt: 'managerSubmittedAt',
    acknowledgedAt: 'acknowledgedAt',
    status: 'status',
    createdAt: 'createdAt'
};
exports.GoalScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    ownerId: 'ownerId',
    cycleId: 'cycleId',
    title: 'title',
    description: 'description',
    metric: 'metric',
    target: 'target',
    currentProgress: 'currentProgress',
    dueDate: 'dueDate',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.GoalCheckinScalarFieldEnum = {
    id: 'id',
    goalId: 'goalId',
    progress: 'progress',
    comment: 'comment',
    checkedInBy: 'checkedInBy',
    createdAt: 'createdAt'
};
exports.ContinuousFeedbackScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    fromEmployeeId: 'fromEmployeeId',
    toEmployeeId: 'toEmployeeId',
    message: 'message',
    isAnonymous: 'isAnonymous',
    createdAt: 'createdAt'
};
exports.AssetScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    name: 'name',
    type: 'type',
    brand: 'brand',
    model: 'model',
    serialNumber: 'serialNumber',
    purchaseDate: 'purchaseDate',
    purchasePrice: 'purchasePrice',
    currentValue: 'currentValue',
    locationId: 'locationId',
    status: 'status',
    notes: 'notes',
    qrCodeKey: 'qrCodeKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.AssetAssignmentScalarFieldEnum = {
    id: 'id',
    assetId: 'assetId',
    employeeId: 'employeeId',
    assignedDate: 'assignedDate',
    expectedReturnDate: 'expectedReturnDate',
    returnedDate: 'returnedDate',
    returnCondition: 'returnCondition',
    returnNotes: 'returnNotes',
    acknowledgedAt: 'acknowledgedAt',
    assignedBy: 'assignedBy',
    createdAt: 'createdAt'
};
exports.AssetRequestScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    employeeId: 'employeeId',
    assetType: 'assetType',
    reason: 'reason',
    status: 'status',
    fulfilledAssetId: 'fulfilledAssetId',
    createdAt: 'createdAt'
};
exports.AssetMaintenanceScalarFieldEnum = {
    id: 'id',
    assetId: 'assetId',
    description: 'description',
    cost: 'cost',
    date: 'date',
    performedBy: 'performedBy',
    createdAt: 'createdAt'
};
exports.NotificationScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    userId: 'userId',
    type: 'type',
    title: 'title',
    body: 'body',
    data: 'data',
    read: 'read',
    readAt: 'readAt',
    createdAt: 'createdAt'
};
exports.NotificationPreferenceScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    emailEnabled: 'emailEnabled',
    pushEnabled: 'pushEnabled',
    preferences: 'preferences',
    updatedAt: 'updatedAt'
};
exports.AnnouncementScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    title: 'title',
    content: 'content',
    audience: 'audience',
    audienceDeptIds: 'audienceDeptIds',
    audienceRoles: 'audienceRoles',
    isPinned: 'isPinned',
    publishedBy: 'publishedBy',
    publishedAt: 'publishedAt',
    updatedAt: 'updatedAt'
};
exports.AnnouncementReadScalarFieldEnum = {
    announcementId: 'announcementId',
    userId: 'userId',
    readAt: 'readAt'
};
exports.AuditLogScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    actorId: 'actorId',
    actorName: 'actorName',
    actorRole: 'actorRole',
    action: 'action',
    resourceType: 'resourceType',
    resourceId: 'resourceId',
    resourceName: 'resourceName',
    changes: 'changes',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt'
};
exports.BillingInvoiceScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    stripeInvoiceId: 'stripeInvoiceId',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    periodStart: 'periodStart',
    periodEnd: 'periodEnd',
    pdfUrl: 'pdfUrl',
    paidAt: 'paidAt',
    createdAt: 'createdAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.JsonNullValueInput = {
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map