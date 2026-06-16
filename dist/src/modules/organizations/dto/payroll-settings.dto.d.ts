import { PayFrequency } from '../../../generated/prisma/enums';
export declare class PayrollSettingsDto {
    payFrequency: PayFrequency;
    firstPayDate?: string;
    payPeriodStart?: number;
}
