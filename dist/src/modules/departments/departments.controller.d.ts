import type { AuthUser } from '../auth/auth.types';
import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto, UpdateDepartmentDto } from './dto';
export declare class DepartmentsController {
    private readonly departments;
    constructor(departments: DepartmentsService);
    list(user: AuthUser, tree?: boolean): Promise<import("./departments.service").DepartmentNode[] | {
        organizationId: string;
        id: string;
        createdAt: Date;
        name: string;
        updatedAt: Date;
        headId: string | null;
        parentDepartmentId: string | null;
    }[]>;
    findOne(user: AuthUser, id: string): Promise<{
        head: {
            id: string;
            firstName: string;
            lastName: string;
            jobTitle: string | null;
        } | null;
        employees: {
            id: string;
            avatarUrl: string | null;
            status: import("../../generated/prisma/enums").EmployeeStatus;
            firstName: string;
            lastName: string;
            jobTitle: string | null;
        }[];
        childDepartments: {
            organizationId: string;
            id: string;
            createdAt: Date;
            name: string;
            updatedAt: Date;
            headId: string | null;
            parentDepartmentId: string | null;
        }[];
        organizationId: string;
        id: string;
        createdAt: Date;
        name: string;
        updatedAt: Date;
        headId: string | null;
        parentDepartmentId: string | null;
    }>;
    create(user: AuthUser, dto: CreateDepartmentDto): Promise<{
        organizationId: string;
        id: string;
        createdAt: Date;
        name: string;
        updatedAt: Date;
        headId: string | null;
        parentDepartmentId: string | null;
    }>;
    update(user: AuthUser, id: string, dto: UpdateDepartmentDto): Promise<{
        organizationId: string;
        id: string;
        createdAt: Date;
        name: string;
        updatedAt: Date;
        headId: string | null;
        parentDepartmentId: string | null;
    }>;
    remove(user: AuthUser, id: string): Promise<{
        deleted: boolean;
    }>;
}
