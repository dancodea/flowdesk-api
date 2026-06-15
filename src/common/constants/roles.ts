import { Role } from '../../generated/prisma/enums';

/**
 * Reusable role groups for the @Roles() decorator.
 *
 * RolesGuard matches the caller's role against an explicit list (no implicit
 * hierarchy), so a "hr_manager and above" rule must spell out every role that
 * qualifies. These constants keep those lists consistent across modules.
 */

/** Org owner only — billing, org config, destructive deletes. */
export const ORG_ADMIN_ONLY: Role[] = [Role.ORG_ADMIN];

/** HR-capable roles (the spec's "hr_manager+"). */
export const HR_ROLES: Role[] = [Role.ORG_ADMIN, Role.HR_MANAGER];

/** Roles that can approve team-level requests (leave, timesheets). */
export const MANAGER_ROLES: Role[] = [
  Role.ORG_ADMIN,
  Role.HR_MANAGER,
  Role.DEPARTMENT_MANAGER,
  Role.TEAM_LEAD,
];

/** Payroll-capable roles (the spec's "payroll_manager+"). */
export const PAYROLL_ROLES: Role[] = [Role.ORG_ADMIN, Role.PAYROLL_MANAGER];

/** Recruitment-capable roles (the spec's "recruiter+"). */
export const RECRUITER_ROLES: Role[] = [
  Role.ORG_ADMIN,
  Role.HR_MANAGER,
  Role.RECRUITER,
];

/** IT / asset-management roles. */
export const IT_ROLES: Role[] = [
  Role.ORG_ADMIN,
  Role.HR_MANAGER,
  Role.IT_ADMIN,
];
