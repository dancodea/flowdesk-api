import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateLocationDto, UpdateLocationDto } from './dto';

@Injectable()
export class LocationsService {
  constructor(private readonly prisma: PrismaService) {}

  private requireTenant(organizationId: string | null): string {
    if (!organizationId) {
      throw new BadRequestException('No organization context on this account');
    }
    return organizationId;
  }

  list(organizationId: string | null) {
    const id = this.requireTenant(organizationId);
    return this.prisma.location.findMany({
      where: { organizationId: id },
      orderBy: { name: 'asc' },
    });
  }

  async findOne(organizationId: string | null, locationId: string) {
    const id = this.requireTenant(organizationId);
    const location = await this.prisma.location.findFirst({
      where: { id: locationId, organizationId: id },
    });
    if (!location) throw new NotFoundException('Location not found');
    return location;
  }

  create(organizationId: string | null, dto: CreateLocationDto) {
    const id = this.requireTenant(organizationId);
    return this.prisma.location.create({
      data: { organizationId: id, ...dto },
    });
  }

  async update(
    organizationId: string | null,
    locationId: string,
    dto: UpdateLocationDto,
  ) {
    await this.findOne(organizationId, locationId);
    return this.prisma.location.update({
      where: { id: locationId },
      data: { ...dto },
    });
  }

  async remove(organizationId: string | null, locationId: string) {
    await this.findOne(organizationId, locationId);
    // Employees / assets / job postings reference locations with SET NULL,
    // so deletion simply detaches them.
    await this.prisma.location.delete({ where: { id: locationId } });
    return { deleted: true };
  }
}
