import { Module } from '@nestjs/common';
import { AuditController } from './audit.controller';
import { AuditReadService } from './audit-read.service';
import { AuditService } from './audit.service';

@Module({
  controllers: [AuditController],
  providers: [AuditService, AuditReadService],
  exports: [AuditService],
})
export class AuditModule {}
