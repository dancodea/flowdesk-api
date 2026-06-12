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
