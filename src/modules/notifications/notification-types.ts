/**
 * Known notification types (the `type` column on Notification). Each maps to a
 * preference key so users can mute categories independently. Other modules
 * import these constants instead of hard-coding strings.
 */
export const NotificationType = {
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
} as const;

export type NotificationType =
  (typeof NotificationType)[keyof typeof NotificationType];

/**
 * WebSocket event names emitted to clients (spec section 12). Kept here so the
 * gateway callers and notification layer agree on the wire format.
 */
export const WsEvent = {
  NOTIFICATION_NEW: 'notification:new',
  LEAVE_STATUS_CHANGED: 'leave:status_changed',
  ATTENDANCE_UPDATE: 'attendance:update',
  PAYROLL_RUN_STATUS: 'payroll:run_status',
  PAYROLL_PROCESSING_PROGRESS: 'payroll:processing_progress',
  ONBOARDING_TASK_COMPLETED: 'onboarding:task_completed',
  PERFORMANCE_REVIEW_SUBMITTED: 'performance:review_submitted',
  ANNOUNCEMENT_NEW: 'announcement:new',
  TIMESHEET_APPROVAL_NEEDED: 'timesheet:approval_needed',
} as const;

export type WsEvent = (typeof WsEvent)[keyof typeof WsEvent];
