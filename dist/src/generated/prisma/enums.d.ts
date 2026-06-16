export declare const InvitationStatus: {
    readonly PENDING: "PENDING";
    readonly ACCEPTED: "ACCEPTED";
    readonly EXPIRED: "EXPIRED";
    readonly REVOKED: "REVOKED";
};
export type InvitationStatus = (typeof InvitationStatus)[keyof typeof InvitationStatus];
export declare const Plan: {
    readonly STARTER: "STARTER";
    readonly GROWTH: "GROWTH";
    readonly BUSINESS: "BUSINESS";
    readonly ENTERPRISE: "ENTERPRISE";
};
export type Plan = (typeof Plan)[keyof typeof Plan];
export declare const Role: {
    readonly SUPER_ADMIN: "SUPER_ADMIN";
    readonly ORG_ADMIN: "ORG_ADMIN";
    readonly HR_MANAGER: "HR_MANAGER";
    readonly PAYROLL_MANAGER: "PAYROLL_MANAGER";
    readonly DEPARTMENT_MANAGER: "DEPARTMENT_MANAGER";
    readonly TEAM_LEAD: "TEAM_LEAD";
    readonly EMPLOYEE: "EMPLOYEE";
    readonly RECRUITER: "RECRUITER";
    readonly IT_ADMIN: "IT_ADMIN";
    readonly FINANCE_VIEWER: "FINANCE_VIEWER";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const SubscriptionStatus: {
    readonly TRIALING: "TRIALING";
    readonly ACTIVE: "ACTIVE";
    readonly PAST_DUE: "PAST_DUE";
    readonly CANCELLED: "CANCELLED";
    readonly INCOMPLETE: "INCOMPLETE";
    readonly UNPAID: "UNPAID";
};
export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus];
export declare const Gender: {
    readonly MALE: "MALE";
    readonly FEMALE: "FEMALE";
    readonly OTHER: "OTHER";
    readonly PREFER_NOT_TO_SAY: "PREFER_NOT_TO_SAY";
};
export type Gender = (typeof Gender)[keyof typeof Gender];
export declare const EmploymentType: {
    readonly FULL_TIME: "FULL_TIME";
    readonly PART_TIME: "PART_TIME";
    readonly CONTRACT: "CONTRACT";
    readonly INTERN: "INTERN";
};
export type EmploymentType = (typeof EmploymentType)[keyof typeof EmploymentType];
export declare const EmployeeStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly ONBOARDING: "ONBOARDING";
    readonly PROBATION: "PROBATION";
    readonly ON_LEAVE: "ON_LEAVE";
    readonly INACTIVE: "INACTIVE";
    readonly TERMINATED: "TERMINATED";
};
export type EmployeeStatus = (typeof EmployeeStatus)[keyof typeof EmployeeStatus];
export declare const SalaryType: {
    readonly SALARIED: "SALARIED";
    readonly HOURLY: "HOURLY";
};
export type SalaryType = (typeof SalaryType)[keyof typeof SalaryType];
export declare const PaymentMethod: {
    readonly DIRECT_DEPOSIT: "DIRECT_DEPOSIT";
    readonly CHEQUE: "CHEQUE";
};
export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod];
export declare const JobStatus: {
    readonly DRAFT: "DRAFT";
    readonly OPEN: "OPEN";
    readonly PAUSED: "PAUSED";
    readonly CLOSED: "CLOSED";
};
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];
export declare const JobVisibility: {
    readonly INTERNAL: "INTERNAL";
    readonly PUBLIC: "PUBLIC";
    readonly UNLISTED: "UNLISTED";
};
export type JobVisibility = (typeof JobVisibility)[keyof typeof JobVisibility];
export declare const RemoteType: {
    readonly ONSITE: "ONSITE";
    readonly HYBRID: "HYBRID";
    readonly REMOTE: "REMOTE";
};
export type RemoteType = (typeof RemoteType)[keyof typeof RemoteType];
export declare const ApplicationStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly REJECTED: "REJECTED";
    readonly HIRED: "HIRED";
    readonly WITHDRAWN: "WITHDRAWN";
};
export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus];
export declare const InterviewType: {
    readonly VIDEO: "VIDEO";
    readonly PHONE: "PHONE";
    readonly IN_PERSON: "IN_PERSON";
};
export type InterviewType = (typeof InterviewType)[keyof typeof InterviewType];
export declare const InterviewStatus: {
    readonly SCHEDULED: "SCHEDULED";
    readonly COMPLETED: "COMPLETED";
    readonly CANCELLED: "CANCELLED";
    readonly NO_SHOW: "NO_SHOW";
};
export type InterviewStatus = (typeof InterviewStatus)[keyof typeof InterviewStatus];
export declare const InterviewRecommendation: {
    readonly HIRE: "HIRE";
    readonly NO_HIRE: "NO_HIRE";
    readonly MAYBE: "MAYBE";
};
export type InterviewRecommendation = (typeof InterviewRecommendation)[keyof typeof InterviewRecommendation];
export declare const OfferStatus: {
    readonly DRAFT: "DRAFT";
    readonly SENT: "SENT";
    readonly VIEWED: "VIEWED";
    readonly SIGNED: "SIGNED";
    readonly ACCEPTED: "ACCEPTED";
    readonly DECLINED: "DECLINED";
    readonly WITHDRAWN: "WITHDRAWN";
};
export type OfferStatus = (typeof OfferStatus)[keyof typeof OfferStatus];
export declare const OnboardingAssignee: {
    readonly EMPLOYEE: "EMPLOYEE";
    readonly HR: "HR";
    readonly IT: "IT";
    readonly MANAGER: "MANAGER";
};
export type OnboardingAssignee = (typeof OnboardingAssignee)[keyof typeof OnboardingAssignee];
export declare const ChecklistStatus: {
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly COMPLETED: "COMPLETED";
    readonly OVERDUE: "OVERDUE";
};
export type ChecklistStatus = (typeof ChecklistStatus)[keyof typeof ChecklistStatus];
export declare const OnboardingTaskStatus: {
    readonly PENDING: "PENDING";
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly COMPLETED: "COMPLETED";
    readonly OVERDUE: "OVERDUE";
};
export type OnboardingTaskStatus = (typeof OnboardingTaskStatus)[keyof typeof OnboardingTaskStatus];
export declare const AttendanceStatus: {
    readonly PRESENT: "PRESENT";
    readonly LATE: "LATE";
    readonly ABSENT: "ABSENT";
    readonly ON_LEAVE: "ON_LEAVE";
    readonly HOLIDAY: "HOLIDAY";
    readonly WEEKEND: "WEEKEND";
};
export type AttendanceStatus = (typeof AttendanceStatus)[keyof typeof AttendanceStatus];
export declare const TimesheetStatus: {
    readonly DRAFT: "DRAFT";
    readonly SUBMITTED: "SUBMITTED";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
};
export type TimesheetStatus = (typeof TimesheetStatus)[keyof typeof TimesheetStatus];
export declare const AccrualType: {
    readonly YEARLY: "YEARLY";
    readonly MONTHLY: "MONTHLY";
};
export type AccrualType = (typeof AccrualType)[keyof typeof AccrualType];
export declare const LeaveStatus: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
    readonly CANCELLED: "CANCELLED";
};
export type LeaveStatus = (typeof LeaveStatus)[keyof typeof LeaveStatus];
export declare const HalfDayPeriod: {
    readonly MORNING: "MORNING";
    readonly AFTERNOON: "AFTERNOON";
};
export type HalfDayPeriod = (typeof HalfDayPeriod)[keyof typeof HalfDayPeriod];
export declare const PayFrequency: {
    readonly WEEKLY: "WEEKLY";
    readonly BIWEEKLY: "BIWEEKLY";
    readonly SEMI_MONTHLY: "SEMI_MONTHLY";
    readonly MONTHLY: "MONTHLY";
};
export type PayFrequency = (typeof PayFrequency)[keyof typeof PayFrequency];
export declare const PayRunStatus: {
    readonly DRAFT: "DRAFT";
    readonly PENDING_APPROVAL: "PENDING_APPROVAL";
    readonly APPROVED: "APPROVED";
    readonly PROCESSING: "PROCESSING";
    readonly COMPLETED: "COMPLETED";
    readonly CANCELLED: "CANCELLED";
};
export type PayRunStatus = (typeof PayRunStatus)[keyof typeof PayRunStatus];
export declare const AdjustmentType: {
    readonly BONUS: "BONUS";
    readonly DEDUCTION: "DEDUCTION";
    readonly REIMBURSEMENT: "REIMBURSEMENT";
};
export type AdjustmentType = (typeof AdjustmentType)[keyof typeof AdjustmentType];
export declare const DeductionValueType: {
    readonly FIXED: "FIXED";
    readonly PERCENTAGE: "PERCENTAGE";
};
export type DeductionValueType = (typeof DeductionValueType)[keyof typeof DeductionValueType];
export declare const PerformanceCycleType: {
    readonly ANNUAL: "ANNUAL";
    readonly QUARTERLY: "QUARTERLY";
    readonly PROBATION: "PROBATION";
};
export type PerformanceCycleType = (typeof PerformanceCycleType)[keyof typeof PerformanceCycleType];
export declare const ReviewType: {
    readonly SELF_AND_MANAGER: "SELF_AND_MANAGER";
    readonly THREE_SIXTY: "THREE_SIXTY";
    readonly MANAGER_ONLY: "MANAGER_ONLY";
};
export type ReviewType = (typeof ReviewType)[keyof typeof ReviewType];
export declare const ReviewCycleStatus: {
    readonly DRAFT: "DRAFT";
    readonly ACTIVE: "ACTIVE";
    readonly CLOSED: "CLOSED";
};
export type ReviewCycleStatus = (typeof ReviewCycleStatus)[keyof typeof ReviewCycleStatus];
export declare const PerformanceReviewStatus: {
    readonly PENDING_SELF: "PENDING_SELF";
    readonly PENDING_PEER: "PENDING_PEER";
    readonly PENDING_MANAGER: "PENDING_MANAGER";
    readonly PENDING_ACKNOWLEDGEMENT: "PENDING_ACKNOWLEDGEMENT";
    readonly COMPLETED: "COMPLETED";
    readonly ARCHIVED: "ARCHIVED";
};
export type PerformanceReviewStatus = (typeof PerformanceReviewStatus)[keyof typeof PerformanceReviewStatus];
export declare const GoalStatus: {
    readonly ON_TRACK: "ON_TRACK";
    readonly AT_RISK: "AT_RISK";
    readonly OFF_TRACK: "OFF_TRACK";
    readonly COMPLETED: "COMPLETED";
};
export type GoalStatus = (typeof GoalStatus)[keyof typeof GoalStatus];
export declare const AssetStatus: {
    readonly AVAILABLE: "AVAILABLE";
    readonly ASSIGNED: "ASSIGNED";
    readonly UNDER_REPAIR: "UNDER_REPAIR";
    readonly RETIRED: "RETIRED";
};
export type AssetStatus = (typeof AssetStatus)[keyof typeof AssetStatus];
export declare const AssetRequestStatus: {
    readonly PENDING: "PENDING";
    readonly FULFILLED: "FULFILLED";
    readonly REJECTED: "REJECTED";
};
export type AssetRequestStatus = (typeof AssetRequestStatus)[keyof typeof AssetRequestStatus];
export declare const ReturnCondition: {
    readonly GOOD: "GOOD";
    readonly DAMAGED: "DAMAGED";
    readonly MISSING: "MISSING";
};
export type ReturnCondition = (typeof ReturnCondition)[keyof typeof ReturnCondition];
export declare const AnnouncementAudience: {
    readonly ALL: "ALL";
    readonly DEPT: "DEPT";
    readonly ROLE: "ROLE";
};
export type AnnouncementAudience = (typeof AnnouncementAudience)[keyof typeof AnnouncementAudience];
export declare const InvoiceStatus: {
    readonly DRAFT: "DRAFT";
    readonly OPEN: "OPEN";
    readonly PAID: "PAID";
    readonly VOID: "VOID";
    readonly UNCOLLECTIBLE: "UNCOLLECTIBLE";
};
export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus];
