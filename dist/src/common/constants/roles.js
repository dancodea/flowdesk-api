"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IT_ROLES = exports.RECRUITER_ROLES = exports.PAYROLL_ROLES = exports.MANAGER_ROLES = exports.HR_ROLES = exports.ORG_ADMIN_ONLY = void 0;
const enums_1 = require("../../generated/prisma/enums");
exports.ORG_ADMIN_ONLY = [enums_1.Role.ORG_ADMIN];
exports.HR_ROLES = [enums_1.Role.ORG_ADMIN, enums_1.Role.HR_MANAGER];
exports.MANAGER_ROLES = [
    enums_1.Role.ORG_ADMIN,
    enums_1.Role.HR_MANAGER,
    enums_1.Role.DEPARTMENT_MANAGER,
    enums_1.Role.TEAM_LEAD,
];
exports.PAYROLL_ROLES = [enums_1.Role.ORG_ADMIN, enums_1.Role.PAYROLL_MANAGER];
exports.RECRUITER_ROLES = [
    enums_1.Role.ORG_ADMIN,
    enums_1.Role.HR_MANAGER,
    enums_1.Role.RECRUITER,
];
exports.IT_ROLES = [
    enums_1.Role.ORG_ADMIN,
    enums_1.Role.HR_MANAGER,
    enums_1.Role.IT_ADMIN,
];
//# sourceMappingURL=roles.js.map