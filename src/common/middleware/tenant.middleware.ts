import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class TenantMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

  use(req: Request, _res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1];
    if (token) {
      try {
        const payload: any = this.jwtService.decode(token);
        if (payload?.organizationId) {
          (req as any).tenantId = payload.organizationId;
        }
      } catch {
        // No tenant context — downstream guards decide if that is allowed.
      }
    }
    next();
  }
}
