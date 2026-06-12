import { Role } from '../../generated/prisma/enums';

/** Shape of the signed JWT access-token payload. */
export interface JwtPayload {
  sub: string; // user id
  email: string;
  role: Role;
  organizationId: string | null;
}

/** Authenticated principal attached to the request by JwtStrategy. */
export interface AuthUser {
  id: string;
  email: string;
  role: Role;
  organizationId: string | null;
}
