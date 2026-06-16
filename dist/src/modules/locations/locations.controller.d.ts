import type { AuthUser } from '../auth/auth.types';
import { CreateLocationDto, UpdateLocationDto } from './dto';
import { LocationsService } from './locations.service';
export declare class LocationsController {
    private readonly locations;
    constructor(locations: LocationsService);
    list(user: AuthUser): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
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
    findOne(user: AuthUser, id: string): Promise<{
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
    create(user: AuthUser, dto: CreateLocationDto): import("../../generated/prisma/models").Prisma__LocationClient<{
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
    update(user: AuthUser, id: string, dto: UpdateLocationDto): Promise<{
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
    remove(user: AuthUser, id: string): Promise<{
        deleted: boolean;
    }>;
}
