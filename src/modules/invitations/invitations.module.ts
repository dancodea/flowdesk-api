import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { InvitationsController } from './invitations.controller';
import { InvitationsService } from './invitations.service';

@Module({
  // AuthModule provides AuthMailService (invite emails) + generateOneTimeToken.
  imports: [AuthModule],
  controllers: [InvitationsController],
  providers: [InvitationsService],
})
export class InvitationsModule {}
