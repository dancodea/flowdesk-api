export declare const NotificationType: {
    readonly LEAVE_REQUEST_SUBMITTED: "leave.request_submitted";
    readonly LEAVE_STATUS_CHANGED: "leave.status_changed";
    readonly TIMESHEET_APPROVAL_NEEDED: "timesheet.approval_needed";
    readonly TIMESHEET_STATUS_CHANGED: "timesheet.status_changed";
    readonly PAYSLIP_READY: "payslip.ready";
    readonly PAYROLL_RUN_STATUS: "payroll.run_status";
    readonly PERFORMANCE_REVIEW_DUE: "performance.review_due";
    readonly PERFORMANCE_REVIEW_SUBMITTED: "performance.review_submitted";
    readonly ONBOARDING_TASK_DUE: "onboarding.task_due";
    readonly ANNOUNCEMENT_PUBLISHED: "announcement.published";
    readonly ASSET_ASSIGNED: "asset.assigned";
    readonly INTERVIEW_SCHEDULED: "interview.scheduled";
    readonly INVITATION: "invitation";
};
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];
export declare const WsEvent: {
    readonly NOTIFICATION_NEW: "notification:new";
    readonly LEAVE_STATUS_CHANGED: "leave:status_changed";
    readonly ATTENDANCE_UPDATE: "attendance:update";
    readonly PAYROLL_RUN_STATUS: "payroll:run_status";
    readonly PAYROLL_PROCESSING_PROGRESS: "payroll:processing_progress";
    readonly ONBOARDING_TASK_COMPLETED: "onboarding:task_completed";
    readonly PERFORMANCE_REVIEW_SUBMITTED: "performance:review_submitted";
    readonly ANNOUNCEMENT_NEW: "announcement:new";
    readonly TIMESHEET_APPROVAL_NEEDED: "timesheet:approval_needed";
};
export type WsEvent = (typeof WsEvent)[keyof typeof WsEvent];
