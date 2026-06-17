import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import StripeLib from 'stripe';
import { InvoiceStatus, Plan, SubscriptionStatus } from '../../generated/prisma/enums';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCheckoutDto } from './dto/billing.dto';

const PLAN_PRICE_IDS: Record<Plan, string> = {
  [Plan.STARTER]: process.env.STRIPE_PRICE_STARTER ?? 'price_starter',
  [Plan.GROWTH]: process.env.STRIPE_PRICE_GROWTH ?? 'price_growth',
  [Plan.BUSINESS]: process.env.STRIPE_PRICE_BUSINESS ?? 'price_business',
  [Plan.ENTERPRISE]: process.env.STRIPE_PRICE_ENTERPRISE ?? 'price_enterprise',
};

@Injectable()
export class BillingService {
  private readonly logger = new Logger(BillingService.name);
  private readonly stripe: InstanceType<typeof StripeLib>;

  constructor(private readonly prisma: PrismaService) {
    this.stripe = new StripeLib(process.env.STRIPE_SECRET_KEY ?? '', {
      apiVersion: '2026-05-27.dahlia',
    });
  }

  private requireTenant(organizationId: string | null): string {
    if (!organizationId)
      throw new BadRequestException('No organization context');
    return organizationId;
  }

  // ── Checkout ──────────────────────────────────────────────────────────────────

  async createCheckout(organizationId: string | null, dto: CreateCheckoutDto) {
    const orgId = this.requireTenant(organizationId);
    const org = await this.prisma.organization.findUnique({ where: { id: orgId } });
    if (!org) throw new NotFoundException('Organization not found');

    let customerId = org.stripeCustomerId;
    if (!customerId) {
      const customer = await this.stripe.customers.create({
        name: org.name,
        metadata: { organizationId: orgId },
      });
      customerId = customer.id;
      await this.prisma.organization.update({
        where: { id: orgId },
        data: { stripeCustomerId: customerId },
      });
    }

    const session = await this.stripe.checkout.sessions.create({
      customer: customerId,
      mode: 'subscription',
      line_items: [{ price: PLAN_PRICE_IDS[dto.plan], quantity: 1 }],
      success_url: dto.successUrl ?? `${process.env.APP_URL}/billing/success`,
      cancel_url: dto.cancelUrl ?? `${process.env.APP_URL}/billing/cancel`,
      metadata: { organizationId: orgId, plan: dto.plan },
    });

    return { url: session.url, sessionId: session.id };
  }

  // ── Portal ────────────────────────────────────────────────────────────────────

  async createPortal(organizationId: string | null) {
    const orgId = this.requireTenant(organizationId);
    const org = await this.prisma.organization.findUnique({ where: { id: orgId } });
    if (!org?.stripeCustomerId)
      throw new BadRequestException('No Stripe customer linked — create a subscription first');

    const session = await this.stripe.billingPortal.sessions.create({
      customer: org.stripeCustomerId,
      return_url: `${process.env.APP_URL}/settings/billing`,
    });

    return { url: session.url };
  }

  // ── Invoices ──────────────────────────────────────────────────────────────────

  async listInvoices(organizationId: string | null) {
    const orgId = this.requireTenant(organizationId);
    return this.prisma.billingInvoice.findMany({
      where: { organizationId: orgId },
      orderBy: { createdAt: 'desc' },
    });
  }

  // ── Webhook ───────────────────────────────────────────────────────────────────

  async handleWebhook(rawBody: Buffer, signature: string) {
    let event: any;

    try {
      event = this.stripe.webhooks.constructEvent(
        rawBody,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET ?? '',
      );
    } catch (err) {
      this.logger.warn(`Stripe webhook signature verification failed: ${err}`);
      throw new BadRequestException('Invalid webhook signature');
    }

    this.logger.log(`Stripe event: ${event.type}`);

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as any;
        const orgId: string | undefined = session.metadata?.organizationId;
        const plan = session.metadata?.plan as Plan | undefined;
        if (orgId && plan) {
          await this.prisma.organization.update({
            where: { id: orgId },
            data: {
              plan,
              stripeSubscriptionId: session.subscription as string,
              subscriptionStatus: SubscriptionStatus.ACTIVE,
            },
          });
        }
        break;
      }

      case 'invoice.paid': {
        const invoice = event.data.object as any;
        const orgId = await this.orgIdFromCustomer(invoice.customer as string);
        if (orgId) {
          await this.prisma.billingInvoice.upsert({
            where: { stripeInvoiceId: invoice.id },
            create: {
              organizationId: orgId,
              stripeInvoiceId: invoice.id,
              amount: invoice.amount_paid / 100,
              currency: (invoice.currency as string).toUpperCase(),
              status: InvoiceStatus.PAID,
              periodStart: new Date(invoice.period_start * 1000),
              periodEnd: new Date(invoice.period_end * 1000),
              pdfUrl: invoice.invoice_pdf,
              paidAt: new Date(),
            },
            update: { status: InvoiceStatus.PAID, paidAt: new Date() },
          });
          await this.prisma.organization.update({
            where: { id: orgId },
            data: { subscriptionStatus: SubscriptionStatus.ACTIVE },
          });
        }
        break;
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as any;
        const orgId = await this.orgIdFromCustomer(invoice.customer as string);
        if (orgId) {
          await this.prisma.organization.update({
            where: { id: orgId },
            data: { subscriptionStatus: SubscriptionStatus.PAST_DUE },
          });
        }
        break;
      }

      case 'customer.subscription.deleted': {
        const sub = event.data.object as any;
        const orgId = await this.orgIdFromCustomer(sub.customer as string);
        if (orgId) {
          await this.prisma.organization.update({
            where: { id: orgId },
            data: { subscriptionStatus: SubscriptionStatus.CANCELLED },
          });
        }
        break;
      }
    }

    return { received: true };
  }

  private async orgIdFromCustomer(customerId: string): Promise<string | null> {
    const org = await this.prisma.organization.findFirst({
      where: { stripeCustomerId: customerId },
      select: { id: true },
    });
    return org?.id ?? null;
  }
}
