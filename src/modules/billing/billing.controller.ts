import {
  Body,
  Controller,
  Get,
  Headers,
  HttpCode,
  HttpStatus,
  Post,
  Req,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { Public } from '../../common/decorators/public.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { ORG_ADMIN_ONLY } from '../../common/constants/roles';
import type { AuthUser } from '../auth/auth.types';
import { CreateCheckoutDto } from './dto/billing.dto';
import { BillingService } from './billing.service';

@ApiTags('billing')
@Controller('billing')
export class BillingController {
  constructor(private readonly billing: BillingService) {}

  @Post('checkout')
  @ApiBearerAuth()
  @Roles(...ORG_ADMIN_ONLY)
  @ApiOperation({ summary: 'Create a Stripe checkout session for a plan upgrade' })
  createCheckout(@CurrentUser() user: AuthUser, @Body() dto: CreateCheckoutDto) {
    return this.billing.createCheckout(user.organizationId, dto);
  }

  @Post('portal')
  @ApiBearerAuth()
  @Roles(...ORG_ADMIN_ONLY)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Create a Stripe billing portal session' })
  createPortal(@CurrentUser() user: AuthUser) {
    return this.billing.createPortal(user.organizationId);
  }

  @Get('invoices')
  @ApiBearerAuth()
  @Roles(...ORG_ADMIN_ONLY)
  @ApiOperation({ summary: 'List billing invoices' })
  listInvoices(@CurrentUser() user: AuthUser) {
    return this.billing.listInvoices(user.organizationId);
  }

  @Public()
  @Post('webhook')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Stripe webhook receiver (public, signature-verified)' })
  handleWebhook(
    @Req() req: any,
    @Headers('stripe-signature') sig: string,
  ) {
    return this.billing.handleWebhook(req.rawBody!, sig);
  }
}
