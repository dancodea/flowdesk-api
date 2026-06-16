"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WsEvent = exports.NotificationType = void 0;
exports.NotificationType = {
    LEAVE_REQUEST_SUBMITTED: 'leave.request_submitted',
    LEAVE_STATUS_CHANGED: 'leave.status_changed',
    TIMESHEET_APPROVAL_NEEDED: 'timesheet.approval_needed',
    TIMESHEET_STATUS_CHANGED: 'timesheet.status_changed',
    PAYSLIP_READY: 'payslip.ready',
    PAYROLL_RUN_STATUS: 'payroll.run_status',
    PERFORMANCE_REVIEW_DUE: 'performance.review_due',
    PERFORMANCE_REVIEW_SUBMITTED: 'performance.review_submitted',
    ONBOARDING_TASK_DUE: 'onboarding.task_due',
    ANNOUNCEMENT_PUBLISHED: 'announcement.published',
    ASSET_ASSIGNED: 'asset.assigned',
    INTERVIEW_SCHEDULED: 'interview.scheduled',
    INVITATION: 'invitation',
};
exports.WsEvent = {
    NOTIFICATION_NEW: 'notification:new',
    LEAVE_STATUS_CHANGED: 'leave:status_changed',
    ATTENDANCE_UPDATE: 'attendance:update',
    PAYROLL_RUN_STATUS: 'payroll:run_status',
    PAYROLL_PROCESSING_PROGRESS: 'payroll:processing_progress',
    ONBOARDING_TASK_COMPLETED: 'onboarding:task_completed',
    PERFORMANCE_REVIEW_SUBMITTED: 'performance:review_submitted',
    ANNOUNCEMENT_NEW: 'announcement:new',
    TIMESHEET_APPROVAL_NEEDED: 'timesheet:approval_needed',
};
//# sourceMappingURL=notification-types.js.map