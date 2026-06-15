import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateDepartmentDto, UpdateDepartmentDto } from './dto';

export interface DepartmentNode {
  id: string;
  name: string;
  parentDepartmentId: string | null;
  headId: string | null;
  children: DepartmentNode[];
}

@Injectable()
export class DepartmentsService {
  constructor(private readonly prisma: PrismaService) {}

  private requireTenant(organizationId: string | null): string {
    if (!organizationId) {
      throw new BadRequestException('No organization context on this account');
    }
    return organizationId;
  }

  private async assertParent(orgId: string, parentId?: string) {
    if (!parentId) return;
    const parent = await this.prisma.department.findFirst({
      where: { id: parentId, organizationId: orgId },
    });
    if (!parent) throw new BadRequestException('Parent department not found');
  }

  private async assertHead(orgId: string, headId?: string) {
    if (!headId) return;
    const head = await this.prisma.employee.findFirst({
      where: { id: headId, organizationId: orgId, deletedAt: null },
    });
    if (!head)
      throw new BadRequestException('Department head must be an employee');
  }

  async create(organizationId: string | null, dto: CreateDepartmentDto) {
    const id = this.requireTenant(organizationId);
    await this.assertParent(id, dto.parentDepartmentId);
    await this.assertHead(id, dto.headId);
    return this.prisma.department.create({
      data: { organizationId: id, ...dto },
    });
  }

  async list(organizationId: string | null, tree: boolean) {
    const id = this.requireTenant(organizationId);
    const departments = await this.prisma.department.findMany({
      where: { organizationId: id },
      orderBy: { name: 'asc' },
    });
    if (!tree) return departments;
    return this.buildTree(departments);
  }

  private buildTree(
    departments: {
      id: string;
      name: string;
      parentDepartmentId: string | null;
      headId: string | null;
    }[],
  ): DepartmentNode[] {
    const byId = new Map<string, DepartmentNode>();
    departments.forEach((d) => byId.set(d.id, { ...d, children: [] }));

    const roots: DepartmentNode[] = [];
    byId.forEach((node) => {
      const parent = node.parentDepartmentId
        ? byId.get(node.parentDepartmentId)
        : undefined;
      if (parent) parent.children.push(node);
      else roots.push(node);
    });
    return roots;
  }

  async findOne(organizationId: string | null, departmentId: string) {
    const id = this.requireTenant(organizationId);
    const department = await this.prisma.department.findFirst({
      where: { id: departmentId, organizationId: id },
      include: {
        childDepartments: true,
        employees: {
          where: { deletedAt: null },
          select: {
            id: true,
            firstName: true,
            lastName: true,
            jobTitle: true,
            avatarUrl: true,
            status: true,
          },
          orderBy: { firstName: 'asc' },
        },
      },
    });
    if (!department) throw new NotFoundException('Department not found');

    const head = department.headId
      ? await this.prisma.employee.findUnique({
          where: { id: department.headId },
          select: { id: true, firstName: true, lastName: true, jobTitle: true },
        })
      : null;

    return { ...department, head };
  }

  async update(
    organizationId: string | null,
    departmentId: string,
    dto: UpdateDepartmentDto,
  ) {
    const id = this.requireTenant(organizationId);
    await this.findOne(id, departmentId);

    if (dto.parentDepartmentId === departmentId) {
      throw new BadRequestException('A department cannot be its own parent');
    }
    await this.assertParent(id, dto.parentDepartmentId);
    await this.assertHead(id, dto.headId);

    return this.prisma.department.update({
      where: { id: departmentId },
      data: { ...dto },
    });
  }

  async remove(organizationId: string | null, departmentId: string) {
    const id = this.requireTenant(organizationId);
    await this.findOne(id, departmentId);

    const [employees, children] = await this.prisma.$transaction([
      this.prisma.employee.count({
        where: { departmentId, deletedAt: null },
      }),
      this.prisma.department.count({
        where: { parentDepartmentId: departmentId },
      }),
    ]);
    if (employees > 0) {
      throw new ConflictException('Department still has employees assigned');
    }
    if (children > 0) {
      throw new ConflictException('Department still has sub-departments');
    }

    await this.prisma.department.delete({ where: { id: departmentId } });
    return { deleted: true };
  }
}
