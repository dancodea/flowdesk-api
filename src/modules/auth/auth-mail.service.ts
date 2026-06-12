import { InjectQueue } from '@nestjs/bullmq';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Queue } from 'bullmq';
import { EMAIL_QUEUE } from '../../jobs/email.processor';

interface MailJob {
  to: string;
  subject: string;
  template: string;
  context: Record<string, unknown>;
}

/**
 * Enqueues transactional auth emails onto the BullMQ email queue. When no
 * SendGrid key is configured (local dev), it logs the message + link so flows
 * are testable without a real mail provider.
 */
@Injectable()
export class AuthMailService {
  private readonly logger = new Logger(AuthMailService.name);

  constructor(
    @InjectQueue(EMAIL_QUEUE) private readonly emailQueue: Queue,
    private readonly config: ConfigService,
  ) {}

  private get clientUrl(): string {
    return this.config.get<string>('app.clientUrl') ?? 'http://localhost:3000';
  }

  private async send(job: MailJob): Promise<void> {
    const hasProvider = !!process.env.SENDGRID_API_KEY;
    if (!hasProvider) {
      this.logger.warn(
        `[email:dev] No SENDGRID_API_KEY set — would send "${job.subject}" to ${job.to}\n` +
          JSON.stringify(job.context, null, 2),
      );
      return;
    }
    await this.emailQueue.add(job.template, job, {
      attempts: 3,
      backoff: { type: 'exponential', delay: 5000 },
      removeOnComplete: true,
    });
  }

  async sendEmailVerification(to: string, token: string): Promise<void> {
    const link = `${this.clientUrl}/verify-email?token=${token}`;
    await this.send({
      to,
      subject: 'Verify your FlowDesk email',
      template: 'email-verification',
      context: { link, token },
    });
  }

  async sendPasswordReset(to: string, token: string): Promise<void> {
    const link = `${this.clientUrl}/reset-password?token=${token}`;
    await this.send({
      to,
      subject: 'Reset your FlowDesk password',
      template: 'password-reset',
      context: { link, token },
    });
  }

  async sendInvite(to: string, token: string): Promise<void> {
    const link = `${this.clientUrl}/invite/accept?token=${token}`;
    await this.send({
      to,
      subject: 'You have been invited to FlowDesk',
      template: 'invitation',
      context: { link, token },
    });
  }
}
