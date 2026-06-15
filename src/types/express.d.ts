import type { AuthUser } from '../modules/auth/auth.types';

/**
 * Augments Express's Request with the principal attached by JwtStrategy and the
 * tenant id resolved by TenantMiddleware.
 *
 * `Express.User` is the type behind `req.user` (passport declares it as an empty
 * interface); extending it with AuthUser's fields makes `req.user` strongly
 * typed everywhere instead of `any`.
 */
declare global {
  namespace Express {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface User extends AuthUser {}

    interface Request {
      tenantId?: string;
    }
  }
}

export {};
