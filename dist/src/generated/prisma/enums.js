"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceStatus = exports.AnnouncementAudience = exports.ReturnCondition = exports.AssetRequestStatus = exports.AssetStatus = exports.GoalStatus = exports.PerformanceReviewStatus = exports.ReviewCycleStatus = exports.ReviewType = exports.PerformanceCycleType = exports.DeductionValueType = exports.AdjustmentType = exports.PayRunStatus = exports.PayFrequency = exports.HalfDayPeriod = exports.LeaveStatus = exports.AccrualType = exports.TimesheetStatus = exports.AttendanceStatus = exports.OnboardingTaskStatus = exports.ChecklistStatus = exports.OnboardingAssignee = exports.OfferStatus = exports.InterviewRecommendation = exports.InterviewStatus = exports.InterviewType = exports.ApplicationStatus = exports.RemoteType = exports.JobVisibility = exports.JobStatus = exports.PaymentMethod = exports.SalaryType = exports.EmployeeStatus = exports.EmploymentType = exports.Gender = exports.SubscriptionStatus = exports.Role = exports.Plan = exports.InvitationStatus = void 0;
exports.InvitationStatus = {
    PENDING: 'PENDING',
    ACCEPTED: 'ACCEPTED',
    EXPIRED: 'EXPIRED',
    REVOKED: 'REVOKED'
};
exports.Plan = {
    STARTER: 'STARTER',
    GROWTH: 'GROWTH',
    BUSINESS: 'BUSINESS',
    ENTERPRISE: 'ENTERPRISE'
};
exports.Role = {
    SUPER_ADMIN: 'SUPER_ADMIN',
    ORG_ADMIN: 'ORG_ADMIN',
    HR_MANAGER: 'HR_MANAGER',
    PAYROLL_MANAGER: 'PAYROLL_MANAGER',
    DEPARTMENT_MANAGER: 'DEPARTMENT_MANAGER',
    TEAM_LEAD: 'TEAM_LEAD',
    EMPLOYEE: 'EMPLOYEE',
    RECRUITER: 'RECRUITER',
    IT_ADMIN: 'IT_ADMIN',
    FINANCE_VIEWER: 'FINANCE_VIEWER'
};
exports.SubscriptionStatus = {
    TRIALING: 'TRIALING',
    ACTIVE: 'ACTIVE',
    PAST_DUE: 'PAST_DUE',
    CANCELLED: 'CANCELLED',
    INCOMPLETE: 'INCOMPLETE',
    UNPAID: 'UNPAID'
};
exports.Gender = {
    MALE: 'MALE',
    FEMALE: 'FEMALE',
    OTHER: 'OTHER',
    PREFER_NOT_TO_SAY: 'PREFER_NOT_TO_SAY'
};
exports.EmploymentType = {
    FULL_TIME: 'FULL_TIME',
    PART_TIME: 'PART_TIME',
    CONTRACT: 'CONTRACT',
    INTERN: 'INTERN'
};
exports.EmployeeStatus = {
    ACTIVE: 'ACTIVE',
    ONBOARDING: 'ONBOARDING',
    PROBATION: 'PROBATION',
    ON_LEAVE: 'ON_LEAVE',
    INACTIVE: 'INACTIVE',
    TERMINATED: 'TERMINATED'
};
exports.SalaryType = {
    SALARIED: 'SALARIED',
    HOURLY: 'HOURLY'
};
exports.PaymentMethod = {
    DIRECT_DEPOSIT: 'DIRECT_DEPOSIT',
    CHEQUE: 'CHEQUE'
};
exports.JobStatus = {
    DRAFT: 'DRAFT',
    OPEN: 'OPEN',
    PAUSED: 'PAUSED',
    CLOSED: 'CLOSED'
};
exports.JobVisibility = {
    INTERNAL: 'INTERNAL',
    PUBLIC: 'PUBLIC',
    UNLISTED: 'UNLISTED'
};
exports.RemoteType = {
    ONSITE: 'ONSITE',
    HYBRID: 'HYBRID',
    REMOTE: 'REMOTE'
};
exports.ApplicationStatus = {
    ACTIVE: 'ACTIVE',
    REJECTED: 'REJECTED',
    HIRED: 'HIRED',
    WITHDRAWN: 'WITHDRAWN'
};
exports.InterviewType = {
    VIDEO: 'VIDEO',
    PHONE: 'PHONE',
    IN_PERSON: 'IN_PERSON'
};
exports.InterviewStatus = {
    SCHEDULED: 'SCHEDULED',
    COMPLETED: 'COMPLETED',
    CANCELLED: 'CANCELLED',
    NO_SHOW: 'NO_SHOW'
};
exports.InterviewRecommendation = {
    HIRE: 'HIRE',
    NO_HIRE: 'NO_HIRE',
    MAYBE: 'MAYBE'
};
exports.OfferStatus = {
    DRAFT: 'DRAFT',
    SENT: 'SENT',
    VIEWED: 'VIEWED',
    SIGNED: 'SIGNED',
    ACCEPTED: 'ACCEPTED',
    DECLINED: 'DECLINED',
    WITHDRAWN: 'WITHDRAWN'
};
exports.OnboardingAssignee = {
    EMPLOYEE: 'EMPLOYEE',
    HR: 'HR',
    IT: 'IT',
    MANAGER: 'MANAGER'
};
exports.ChecklistStatus = {
    IN_PROGRESS: 'IN_PROGRESS',
    COMPLETED: 'COMPLETED',
    OVERDUE: 'OVERDUE'
};
exports.OnboardingTaskStatus = {
    PENDING: 'PENDING',
    IN_PROGRESS: 'IN_PROGRESS',
    COMPLETED: 'COMPLETED',
    OVERDUE: 'OVERDUE'
};
exports.AttendanceStatus = {
    PRESENT: 'PRESENT',
    LATE: 'LATE',
    ABSENT: 'ABSENT',
    ON_LEAVE: 'ON_LEAVE',
    HOLIDAY: 'HOLIDAY',
    WEEKEND: 'WEEKEND'
};
exports.TimesheetStatus = {
    DRAFT: 'DRAFT',
    SUBMITTED: 'SUBMITTED',
    APPROVED: 'APPROVED',
    REJECTED: 'REJECTED'
};
exports.AccrualType = {
    YEARLY: 'YEARLY',
    MONTHLY: 'MONTHLY'
};
exports.LeaveStatus = {
    PENDING: 'PENDING',
    APPROVED: 'APPROVED',
    REJECTED: 'REJECTED',
    CANCELLED: 'CANCELLED'
};
exports.HalfDayPeriod = {
    MORNING: 'MORNING',
    AFTERNOON: 'AFTERNOON'
};
exports.PayFrequency = {
    WEEKLY: 'WEEKLY',
    BIWEEKLY: 'BIWEEKLY',
    SEMI_MONTHLY: 'SEMI_MONTHLY',
    MONTHLY: 'MONTHLY'
};
exports.PayRunStatus = {
    DRAFT: 'DRAFT',
    PENDING_APPROVAL: 'PENDING_APPROVAL',
    APPROVED: 'APPROVED',
    PROCESSING: 'PROCESSING',
    COMPLETED: 'COMPLETED',
    CANCELLED: 'CANCELLED'
};
exports.AdjustmentType = {
    BONUS: 'BONUS',
    DEDUCTION: 'DEDUCTION',
    REIMBURSEMENT: 'REIMBURSEMENT'
};
exports.DeductionValueType = {
    FIXED: 'FIXED',
    PERCENTAGE: 'PERCENTAGE'
};
exports.PerformanceCycleType = {
    ANNUAL: 'ANNUAL',
    QUARTERLY: 'QUARTERLY',
    PROBATION: 'PROBATION'
};
exports.ReviewType = {
    SELF_AND_MANAGER: 'SELF_AND_MANAGER',
    THREE_SIXTY: 'THREE_SIXTY',
    MANAGER_ONLY: 'MANAGER_ONLY'
};
exports.ReviewCycleStatus = {
    DRAFT: 'DRAFT',
    ACTIVE: 'ACTIVE',
    CLOSED: 'CLOSED'
};
exports.PerformanceReviewStatus = {
    PENDING_SELF: 'PENDING_SELF',
    PENDING_PEER: 'PENDING_PEER',
    PENDING_MANAGER: 'PENDING_MANAGER',
    PENDING_ACKNOWLEDGEMENT: 'PENDING_ACKNOWLEDGEMENT',
    COMPLETED: 'COMPLETED',
    ARCHIVED: 'ARCHIVED'
};
exports.GoalStatus = {
    ON_TRACK: 'ON_TRACK',
    AT_RISK: 'AT_RISK',
    OFF_TRACK: 'OFF_TRACK',
    COMPLETED: 'COMPLETED'
};
exports.AssetStatus = {
    AVAILABLE: 'AVAILABLE',
    ASSIGNED: 'ASSIGNED',
    UNDER_REPAIR: 'UNDER_REPAIR',
    RETIRED: 'RETIRED'
};
exports.AssetRequestStatus = {
    PENDING: 'PENDING',
    FULFILLED: 'FULFILLED',
    REJECTED: 'REJECTED'
};
exports.ReturnCondition = {
    GOOD: 'GOOD',
    DAMAGED: 'DAMAGED',
    MISSING: 'MISSING'
};
exports.AnnouncementAudience = {
    ALL: 'ALL',
    DEPT: 'DEPT',
    ROLE: 'ROLE'
};
exports.InvoiceStatus = {
    DRAFT: 'DRAFT',
    OPEN: 'OPEN',
    PAID: 'PAID',
    VOID: 'VOID',
    UNCOLLECTIBLE: 'UNCOLLECTIBLE'
};
//# sourceMappingURL=enums.js.map