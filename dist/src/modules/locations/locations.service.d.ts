import { PrismaService } from '../../prisma/prisma.service';
import { CreateLocationDto, UpdateLocationDto } from './dto';
export declare class LocationsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private requireTenant;
    list(organizationId: string | null): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        organizationId: string;
        id: string;
        createdAt: Date;
        name: string;
        country: string | null;
        timezone: string | null;
        address: string | null;
        city: string | null;
        isRemote: boolean;
    }[]>;
    findOne(organizationId: string | null, locationId: string): Promise<{
        organizationId: string;
        id: string;
        createdAt: Date;
        name: string;
        country: string | null;
        timezone: string | null;
        address: string | null;
        city: string | null;
        isRemote: boolean;
    }>;
    create(organizationId: string | null, dto: CreateLocationDto): import("../../generated/prisma/models").Prisma__LocationClient<{
        organizationId: string;
        id: string;
        createdAt: Date;
        name: string;
        country: string | null;
        timezone: string | null;
        address: string | null;
        city: string | null;
        isRemote: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    update(organizationId: string | null, locationId: string, dto: UpdateLocationDto): Promise<{
        organizationId: string;
        id: string;
        createdAt: Date;
        name: string;
        country: string | null;
        timezone: string | null;
        address: string | null;
        city: string | null;
        isRemote: boolean;
    }>;
    remove(organizationId: string | null, locationId: string): Promise<{
        deleted: boolean;
    }>;
}
