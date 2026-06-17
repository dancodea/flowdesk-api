import { Controller, Get, Header, Query, Res } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import type { Response } from 'express';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { ORG_ADMIN_ONLY } from '../../common/constants/roles';
import type { AuthUser } from '../auth/auth.types';
import { ListAuditLogsDto } from './dto/audit-query.dto';
import { AuditReadService } from './audit-read.service';

@ApiTags('audit')
@ApiBearerAuth()
@Controller('audit')
export class AuditController {
  constructor(private readonly auditRead: AuditReadService) {}

  @Get('logs')
  @Roles(...ORG_ADMIN_ONLY)
  @ApiOperation({ summary: 'List audit log entries' })
  list(@CurrentUser() user: AuthUser, @Query() dto: ListAuditLogsDto) {
    return this.auditRead.list(user.organizationId!, dto);
  }

  @Get('logs/export')
  @Roles(...ORG_ADMIN_ONLY)
  @ApiOperation({ summary: 'Export audit log as CSV' })
  async export(
    @CurrentUser() user: AuthUser,
    @Query() dto: ListAuditLogsDto,
    @Res() res: Response,
  ) {
    const csv = await this.auditRead.export(user.organizationId!, dto);
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="audit-log.csv"');
    res.send(csv);
  }
}
