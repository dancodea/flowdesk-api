import { PrismaService } from '../../prisma/prisma.service';
import { CreateDepartmentDto, UpdateDepartmentDto } from './dto';
export interface DepartmentNode {
    id: string;
    name: string;
    parentDepartmentId: string | null;
    headId: string | null;
    children: DepartmentNode[];
}
export declare class DepartmentsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private requireTenant;
    private assertParent;
    private assertHead;
    create(organizationId: string | null, dto: CreateDepartmentDto): Promise<{
        organizationId: string;
        id: string;
        createdAt: Date;
        name: string;
        updatedAt: Date;
        headId: string | null;
        parentDepartmentId: string | null;
    }>;
    list(organizationId: string | null, tree: boolean): Promise<DepartmentNode[] | {
        organizationId: string;
        id: string;
        createdAt: Date;
        name: string;
        updatedAt: Date;
        headId: string | null;
        parentDepartmentId: string | null;
    }[]>;
    private buildTree;
    findOne(organizationId: string | null, departmentId: string): Promise<{
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
    update(organizationId: string | null, departmentId: string, dto: UpdateDepartmentDto): Promise<{
        organizationId: string;
        id: string;
        createdAt: Date;
        name: string;
        updatedAt: Date;
        headId: string | null;
        parentDepartmentId: string | null;
    }>;
    remove(organizationId: string | null, departmentId: string): Promise<{
        deleted: boolean;
    }>;
}
