import { Role } from '../../generated/prisma/enums';
export interface JwtPayload {
    sub: string;
    email: string;
    role: Role;
    organizationId: string | null;
}
export interface AuthUser {
    id: string;
    email: string;
    role: Role;
    organizationId: string | null;
}
