import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BillingInvoiceModel = runtime.Types.Result.DefaultSelection<Prisma.$BillingInvoicePayload>;
export type AggregateBillingInvoice = {
    _count: BillingInvoiceCountAggregateOutputType | null;
    _avg: BillingInvoiceAvgAggregateOutputType | null;
    _sum: BillingInvoiceSumAggregateOutputType | null;
    _min: BillingInvoiceMinAggregateOutputType | null;
    _max: BillingInvoiceMaxAggregateOutputType | null;
};
export type BillingInvoiceAvgAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type BillingInvoiceSumAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type BillingInvoiceMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    stripeInvoiceId: string | null;
    amount: runtime.Decimal | null;
    currency: string | null;
    status: $Enums.InvoiceStatus | null;
    periodStart: Date | null;
    periodEnd: Date | null;
    pdfUrl: string | null;
    paidAt: Date | null;
    createdAt: Date | null;
};
export type BillingInvoiceMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    stripeInvoiceId: string | null;
    amount: runtime.Decimal | null;
    currency: string | null;
    status: $Enums.InvoiceStatus | null;
    periodStart: Date | null;
    periodEnd: Date | null;
    pdfUrl: string | null;
    paidAt: Date | null;
    createdAt: Date | null;
};
export type BillingInvoiceCountAggregateOutputType = {
    id: number;
    organizationId: number;
    stripeInvoiceId: number;
    amount: number;
    currency: number;
    status: number;
    periodStart: number;
    periodEnd: number;
    pdfUrl: number;
    paidAt: number;
    createdAt: number;
    _all: number;
};
export type BillingInvoiceAvgAggregateInputType = {
    amount?: true;
};
export type BillingInvoiceSumAggregateInputType = {
    amount?: true;
};
export type BillingInvoiceMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    stripeInvoiceId?: true;
    amount?: true;
    currency?: true;
    status?: true;
    periodStart?: true;
    periodEnd?: true;
    pdfUrl?: true;
    paidAt?: true;
    createdAt?: true;
};
export type BillingInvoiceMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    stripeInvoiceId?: true;
    amount?: true;
    currency?: true;
    status?: true;
    periodStart?: true;
    periodEnd?: true;
    pdfUrl?: true;
    paidAt?: true;
    createdAt?: true;
};
export type BillingInvoiceCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    stripeInvoiceId?: true;
    amount?: true;
    currency?: true;
    status?: true;
    periodStart?: true;
    periodEnd?: true;
    pdfUrl?: true;
    paidAt?: true;
    createdAt?: true;
    _all?: true;
};
export type BillingInvoiceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BillingInvoiceWhereInput;
    orderBy?: Prisma.BillingInvoiceOrderByWithRelationInput | Prisma.BillingInvoiceOrderByWithRelationInput[];
    cursor?: Prisma.BillingInvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BillingInvoiceCountAggregateInputType;
    _avg?: BillingInvoiceAvgAggregateInputType;
    _sum?: BillingInvoiceSumAggregateInputType;
    _min?: BillingInvoiceMinAggregateInputType;
    _max?: BillingInvoiceMaxAggregateInputType;
};
export type GetBillingInvoiceAggregateType<T extends BillingInvoiceAggregateArgs> = {
    [P in keyof T & keyof AggregateBillingInvoice]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBillingInvoice[P]> : Prisma.GetScalarType<T[P], AggregateBillingInvoice[P]>;
};
export type BillingInvoiceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BillingInvoiceWhereInput;
    orderBy?: Prisma.BillingInvoiceOrderByWithAggregationInput | Prisma.BillingInvoiceOrderByWithAggregationInput[];
    by: Prisma.BillingInvoiceScalarFieldEnum[] | Prisma.BillingInvoiceScalarFieldEnum;
    having?: Prisma.BillingInvoiceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BillingInvoiceCountAggregateInputType | true;
    _avg?: BillingInvoiceAvgAggregateInputType;
    _sum?: BillingInvoiceSumAggregateInputType;
    _min?: BillingInvoiceMinAggregateInputType;
    _max?: BillingInvoiceMaxAggregateInputType;
};
export type BillingInvoiceGroupByOutputType = {
    id: string;
    organizationId: string;
    stripeInvoiceId: string | null;
    amount: runtime.Decimal;
    currency: string;
    status: $Enums.InvoiceStatus;
    periodStart: Date | null;
    periodEnd: Date | null;
    pdfUrl: string | null;
    paidAt: Date | null;
    createdAt: Date;
    _count: BillingInvoiceCountAggregateOutputType | null;
    _avg: BillingInvoiceAvgAggregateOutputType | null;
    _sum: BillingInvoiceSumAggregateOutputType | null;
    _min: BillingInvoiceMinAggregateOutputType | null;
    _max: BillingInvoiceMaxAggregateOutputType | null;
};
export type GetBillingInvoiceGroupByPayload<T extends BillingInvoiceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BillingInvoiceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BillingInvoiceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BillingInvoiceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BillingInvoiceGroupByOutputType[P]>;
}>>;
export type BillingInvoiceWhereInput = {
    AND?: Prisma.BillingInvoiceWhereInput | Prisma.BillingInvoiceWhereInput[];
    OR?: Prisma.BillingInvoiceWhereInput[];
    NOT?: Prisma.BillingInvoiceWhereInput | Prisma.BillingInvoiceWhereInput[];
    id?: Prisma.UuidFilter<"BillingInvoice"> | string;
    organizationId?: Prisma.UuidFilter<"BillingInvoice"> | string;
    stripeInvoiceId?: Prisma.StringNullableFilter<"BillingInvoice"> | string | null;
    amount?: Prisma.DecimalFilter<"BillingInvoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"BillingInvoice"> | string;
    status?: Prisma.EnumInvoiceStatusFilter<"BillingInvoice"> | $Enums.InvoiceStatus;
    periodStart?: Prisma.DateTimeNullableFilter<"BillingInvoice"> | Date | string | null;
    periodEnd?: Prisma.DateTimeNullableFilter<"BillingInvoice"> | Date | string | null;
    pdfUrl?: Prisma.StringNullableFilter<"BillingInvoice"> | string | null;
    paidAt?: Prisma.DateTimeNullableFilter<"BillingInvoice"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"BillingInvoice"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
};
export type BillingInvoiceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    stripeInvoiceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrderInput | Prisma.SortOrder;
    periodEnd?: Prisma.SortOrderInput | Prisma.SortOrder;
    pdfUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    paidAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
};
export type BillingInvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    stripeInvoiceId?: string;
    AND?: Prisma.BillingInvoiceWhereInput | Prisma.BillingInvoiceWhereInput[];
    OR?: Prisma.BillingInvoiceWhereInput[];
    NOT?: Prisma.BillingInvoiceWhereInput | Prisma.BillingInvoiceWhereInput[];
    organizationId?: Prisma.UuidFilter<"BillingInvoice"> | string;
    amount?: Prisma.DecimalFilter<"BillingInvoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"BillingInvoice"> | string;
    status?: Prisma.EnumInvoiceStatusFilter<"BillingInvoice"> | $Enums.InvoiceStatus;
    periodStart?: Prisma.DateTimeNullableFilter<"BillingInvoice"> | Date | string | null;
    periodEnd?: Prisma.DateTimeNullableFilter<"BillingInvoice"> | Date | string | null;
    pdfUrl?: Prisma.StringNullableFilter<"BillingInvoice"> | string | null;
    paidAt?: Prisma.DateTimeNullableFilter<"BillingInvoice"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"BillingInvoice"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
}, "id" | "stripeInvoiceId">;
export type BillingInvoiceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    stripeInvoiceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrderInput | Prisma.SortOrder;
    periodEnd?: Prisma.SortOrderInput | Prisma.SortOrder;
    pdfUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    paidAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.BillingInvoiceCountOrderByAggregateInput;
    _avg?: Prisma.BillingInvoiceAvgOrderByAggregateInput;
    _max?: Prisma.BillingInvoiceMaxOrderByAggregateInput;
    _min?: Prisma.BillingInvoiceMinOrderByAggregateInput;
    _sum?: Prisma.BillingInvoiceSumOrderByAggregateInput;
};
export type BillingInvoiceScalarWhereWithAggregatesInput = {
    AND?: Prisma.BillingInvoiceScalarWhereWithAggregatesInput | Prisma.BillingInvoiceScalarWhereWithAggregatesInput[];
    OR?: Prisma.BillingInvoiceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BillingInvoiceScalarWhereWithAggregatesInput | Prisma.BillingInvoiceScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"BillingInvoice"> | string;
    organizationId?: Prisma.UuidWithAggregatesFilter<"BillingInvoice"> | string;
    stripeInvoiceId?: Prisma.StringNullableWithAggregatesFilter<"BillingInvoice"> | string | null;
    amount?: Prisma.DecimalWithAggregatesFilter<"BillingInvoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringWithAggregatesFilter<"BillingInvoice"> | string;
    status?: Prisma.EnumInvoiceStatusWithAggregatesFilter<"BillingInvoice"> | $Enums.InvoiceStatus;
    periodStart?: Prisma.DateTimeNullableWithAggregatesFilter<"BillingInvoice"> | Date | string | null;
    periodEnd?: Prisma.DateTimeNullableWithAggregatesFilter<"BillingInvoice"> | Date | string | null;
    pdfUrl?: Prisma.StringNullableWithAggregatesFilter<"BillingInvoice"> | string | null;
    paidAt?: Prisma.DateTimeNullableWithAggregatesFilter<"BillingInvoice"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"BillingInvoice"> | Date | string;
};
export type BillingInvoiceCreateInput = {
    id?: string;
    stripeInvoiceId?: string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    status: $Enums.InvoiceStatus;
    periodStart?: Date | string | null;
    periodEnd?: Date | string | null;
    pdfUrl?: string | null;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutBillingInvoicesInput;
};
export type BillingInvoiceUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    stripeInvoiceId?: string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    status: $Enums.InvoiceStatus;
    periodStart?: Date | string | null;
    periodEnd?: Date | string | null;
    pdfUrl?: string | null;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
};
export type BillingInvoiceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeInvoiceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    periodStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    periodEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutBillingInvoicesNestedInput;
};
export type BillingInvoiceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeInvoiceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    periodStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    periodEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BillingInvoiceCreateManyInput = {
    id?: string;
    organizationId: string;
    stripeInvoiceId?: string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    status: $Enums.InvoiceStatus;
    periodStart?: Date | string | null;
    periodEnd?: Date | string | null;
    pdfUrl?: string | null;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
};
export type BillingInvoiceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeInvoiceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    periodStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    periodEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BillingInvoiceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeInvoiceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    periodStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    periodEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BillingInvoiceListRelationFilter = {
    every?: Prisma.BillingInvoiceWhereInput;
    some?: Prisma.BillingInvoiceWhereInput;
    none?: Prisma.BillingInvoiceWhereInput;
};
export type BillingInvoiceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BillingInvoiceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    stripeInvoiceId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    pdfUrl?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BillingInvoiceAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type BillingInvoiceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    stripeInvoiceId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    pdfUrl?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BillingInvoiceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    stripeInvoiceId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    pdfUrl?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BillingInvoiceSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type BillingInvoiceCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.BillingInvoiceCreateWithoutOrganizationInput, Prisma.BillingInvoiceUncheckedCreateWithoutOrganizationInput> | Prisma.BillingInvoiceCreateWithoutOrganizationInput[] | Prisma.BillingInvoiceUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.BillingInvoiceCreateOrConnectWithoutOrganizationInput | Prisma.BillingInvoiceCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.BillingInvoiceCreateManyOrganizationInputEnvelope;
    connect?: Prisma.BillingInvoiceWhereUniqueInput | Prisma.BillingInvoiceWhereUniqueInput[];
};
export type BillingInvoiceUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.BillingInvoiceCreateWithoutOrganizationInput, Prisma.BillingInvoiceUncheckedCreateWithoutOrganizationInput> | Prisma.BillingInvoiceCreateWithoutOrganizationInput[] | Prisma.BillingInvoiceUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.BillingInvoiceCreateOrConnectWithoutOrganizationInput | Prisma.BillingInvoiceCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.BillingInvoiceCreateManyOrganizationInputEnvelope;
    connect?: Prisma.BillingInvoiceWhereUniqueInput | Prisma.BillingInvoiceWhereUniqueInput[];
};
export type BillingInvoiceUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.BillingInvoiceCreateWithoutOrganizationInput, Prisma.BillingInvoiceUncheckedCreateWithoutOrganizationInput> | Prisma.BillingInvoiceCreateWithoutOrganizationInput[] | Prisma.BillingInvoiceUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.BillingInvoiceCreateOrConnectWithoutOrganizationInput | Prisma.BillingInvoiceCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.BillingInvoiceUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.BillingInvoiceUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.BillingInvoiceCreateManyOrganizationInputEnvelope;
    set?: Prisma.BillingInvoiceWhereUniqueInput | Prisma.BillingInvoiceWhereUniqueInput[];
    disconnect?: Prisma.BillingInvoiceWhereUniqueInput | Prisma.BillingInvoiceWhereUniqueInput[];
    delete?: Prisma.BillingInvoiceWhereUniqueInput | Prisma.BillingInvoiceWhereUniqueInput[];
    connect?: Prisma.BillingInvoiceWhereUniqueInput | Prisma.BillingInvoiceWhereUniqueInput[];
    update?: Prisma.BillingInvoiceUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.BillingInvoiceUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.BillingInvoiceUpdateManyWithWhereWithoutOrganizationInput | Prisma.BillingInvoiceUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.BillingInvoiceScalarWhereInput | Prisma.BillingInvoiceScalarWhereInput[];
};
export type BillingInvoiceUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.BillingInvoiceCreateWithoutOrganizationInput, Prisma.BillingInvoiceUncheckedCreateWithoutOrganizationInput> | Prisma.BillingInvoiceCreateWithoutOrganizationInput[] | Prisma.BillingInvoiceUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.BillingInvoiceCreateOrConnectWithoutOrganizationInput | Prisma.BillingInvoiceCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.BillingInvoiceUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.BillingInvoiceUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.BillingInvoiceCreateManyOrganizationInputEnvelope;
    set?: Prisma.BillingInvoiceWhereUniqueInput | Prisma.BillingInvoiceWhereUniqueInput[];
    disconnect?: Prisma.BillingInvoiceWhereUniqueInput | Prisma.BillingInvoiceWhereUniqueInput[];
    delete?: Prisma.BillingInvoiceWhereUniqueInput | Prisma.BillingInvoiceWhereUniqueInput[];
    connect?: Prisma.BillingInvoiceWhereUniqueInput | Prisma.BillingInvoiceWhereUniqueInput[];
    update?: Prisma.BillingInvoiceUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.BillingInvoiceUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.BillingInvoiceUpdateManyWithWhereWithoutOrganizationInput | Prisma.BillingInvoiceUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.BillingInvoiceScalarWhereInput | Prisma.BillingInvoiceScalarWhereInput[];
};
export type EnumInvoiceStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvoiceStatus;
};
export type BillingInvoiceCreateWithoutOrganizationInput = {
    id?: string;
    stripeInvoiceId?: string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    status: $Enums.InvoiceStatus;
    periodStart?: Date | string | null;
    periodEnd?: Date | string | null;
    pdfUrl?: string | null;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
};
export type BillingInvoiceUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    stripeInvoiceId?: string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    status: $Enums.InvoiceStatus;
    periodStart?: Date | string | null;
    periodEnd?: Date | string | null;
    pdfUrl?: string | null;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
};
export type BillingInvoiceCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.BillingInvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.BillingInvoiceCreateWithoutOrganizationInput, Prisma.BillingInvoiceUncheckedCreateWithoutOrganizationInput>;
};
export type BillingInvoiceCreateManyOrganizationInputEnvelope = {
    data: Prisma.BillingInvoiceCreateManyOrganizationInput | Prisma.BillingInvoiceCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type BillingInvoiceUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.BillingInvoiceWhereUniqueInput;
    update: Prisma.XOR<Prisma.BillingInvoiceUpdateWithoutOrganizationInput, Prisma.BillingInvoiceUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.BillingInvoiceCreateWithoutOrganizationInput, Prisma.BillingInvoiceUncheckedCreateWithoutOrganizationInput>;
};
export type BillingInvoiceUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.BillingInvoiceWhereUniqueInput;
    data: Prisma.XOR<Prisma.BillingInvoiceUpdateWithoutOrganizationInput, Prisma.BillingInvoiceUncheckedUpdateWithoutOrganizationInput>;
};
export type BillingInvoiceUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.BillingInvoiceScalarWhereInput;
    data: Prisma.XOR<Prisma.BillingInvoiceUpdateManyMutationInput, Prisma.BillingInvoiceUncheckedUpdateManyWithoutOrganizationInput>;
};
export type BillingInvoiceScalarWhereInput = {
    AND?: Prisma.BillingInvoiceScalarWhereInput | Prisma.BillingInvoiceScalarWhereInput[];
    OR?: Prisma.BillingInvoiceScalarWhereInput[];
    NOT?: Prisma.BillingInvoiceScalarWhereInput | Prisma.BillingInvoiceScalarWhereInput[];
    id?: Prisma.UuidFilter<"BillingInvoice"> | string;
    organizationId?: Prisma.UuidFilter<"BillingInvoice"> | string;
    stripeInvoiceId?: Prisma.StringNullableFilter<"BillingInvoice"> | string | null;
    amount?: Prisma.DecimalFilter<"BillingInvoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"BillingInvoice"> | string;
    status?: Prisma.EnumInvoiceStatusFilter<"BillingInvoice"> | $Enums.InvoiceStatus;
    periodStart?: Prisma.DateTimeNullableFilter<"BillingInvoice"> | Date | string | null;
    periodEnd?: Prisma.DateTimeNullableFilter<"BillingInvoice"> | Date | string | null;
    pdfUrl?: Prisma.StringNullableFilter<"BillingInvoice"> | string | null;
    paidAt?: Prisma.DateTimeNullableFilter<"BillingInvoice"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"BillingInvoice"> | Date | string;
};
export type BillingInvoiceCreateManyOrganizationInput = {
    id?: string;
    stripeInvoiceId?: string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    status: $Enums.InvoiceStatus;
    periodStart?: Date | string | null;
    periodEnd?: Date | string | null;
    pdfUrl?: string | null;
    paidAt?: Date | string | null;
    createdAt?: Date | string;
};
export type BillingInvoiceUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeInvoiceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    periodStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    periodEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BillingInvoiceUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeInvoiceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    periodStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    periodEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BillingInvoiceUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeInvoiceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    periodStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    periodEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pdfUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BillingInvoiceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    stripeInvoiceId?: boolean;
    amount?: boolean;
    currency?: boolean;
    status?: boolean;
    periodStart?: boolean;
    periodEnd?: boolean;
    pdfUrl?: boolean;
    paidAt?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["billingInvoice"]>;
export type BillingInvoiceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    stripeInvoiceId?: boolean;
    amount?: boolean;
    currency?: boolean;
    status?: boolean;
    periodStart?: boolean;
    periodEnd?: boolean;
    pdfUrl?: boolean;
    paidAt?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["billingInvoice"]>;
export type BillingInvoiceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    stripeInvoiceId?: boolean;
    amount?: boolean;
    currency?: boolean;
    status?: boolean;
    periodStart?: boolean;
    periodEnd?: boolean;
    pdfUrl?: boolean;
    paidAt?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["billingInvoice"]>;
export type BillingInvoiceSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    stripeInvoiceId?: boolean;
    amount?: boolean;
    currency?: boolean;
    status?: boolean;
    periodStart?: boolean;
    periodEnd?: boolean;
    pdfUrl?: boolean;
    paidAt?: boolean;
    createdAt?: boolean;
};
export type BillingInvoiceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "stripeInvoiceId" | "amount" | "currency" | "status" | "periodStart" | "periodEnd" | "pdfUrl" | "paidAt" | "createdAt", ExtArgs["result"]["billingInvoice"]>;
export type BillingInvoiceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type BillingInvoiceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type BillingInvoiceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type $BillingInvoicePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BillingInvoice";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        stripeInvoiceId: string | null;
        amount: runtime.Decimal;
        currency: string;
        status: $Enums.InvoiceStatus;
        periodStart: Date | null;
        periodEnd: Date | null;
        pdfUrl: string | null;
        paidAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["billingInvoice"]>;
    composites: {};
};
export type BillingInvoiceGetPayload<S extends boolean | null | undefined | BillingInvoiceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BillingInvoicePayload, S>;
export type BillingInvoiceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BillingInvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BillingInvoiceCountAggregateInputType | true;
};
export interface BillingInvoiceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BillingInvoice'];
        meta: {
            name: 'BillingInvoice';
        };
    };
    findUnique<T extends BillingInvoiceFindUniqueArgs>(args: Prisma.SelectSubset<T, BillingInvoiceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BillingInvoiceClient<runtime.Types.Result.GetResult<Prisma.$BillingInvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BillingInvoiceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BillingInvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BillingInvoiceClient<runtime.Types.Result.GetResult<Prisma.$BillingInvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BillingInvoiceFindFirstArgs>(args?: Prisma.SelectSubset<T, BillingInvoiceFindFirstArgs<ExtArgs>>): Prisma.Prisma__BillingInvoiceClient<runtime.Types.Result.GetResult<Prisma.$BillingInvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BillingInvoiceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BillingInvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BillingInvoiceClient<runtime.Types.Result.GetResult<Prisma.$BillingInvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BillingInvoiceFindManyArgs>(args?: Prisma.SelectSubset<T, BillingInvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BillingInvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BillingInvoiceCreateArgs>(args: Prisma.SelectSubset<T, BillingInvoiceCreateArgs<ExtArgs>>): Prisma.Prisma__BillingInvoiceClient<runtime.Types.Result.GetResult<Prisma.$BillingInvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BillingInvoiceCreateManyArgs>(args?: Prisma.SelectSubset<T, BillingInvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BillingInvoiceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BillingInvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BillingInvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BillingInvoiceDeleteArgs>(args: Prisma.SelectSubset<T, BillingInvoiceDeleteArgs<ExtArgs>>): Prisma.Prisma__BillingInvoiceClient<runtime.Types.Result.GetResult<Prisma.$BillingInvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BillingInvoiceUpdateArgs>(args: Prisma.SelectSubset<T, BillingInvoiceUpdateArgs<ExtArgs>>): Prisma.Prisma__BillingInvoiceClient<runtime.Types.Result.GetResult<Prisma.$BillingInvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BillingInvoiceDeleteManyArgs>(args?: Prisma.SelectSubset<T, BillingInvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BillingInvoiceUpdateManyArgs>(args: Prisma.SelectSubset<T, BillingInvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BillingInvoiceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BillingInvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BillingInvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BillingInvoiceUpsertArgs>(args: Prisma.SelectSubset<T, BillingInvoiceUpsertArgs<ExtArgs>>): Prisma.Prisma__BillingInvoiceClient<runtime.Types.Result.GetResult<Prisma.$BillingInvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BillingInvoiceCountArgs>(args?: Prisma.Subset<T, BillingInvoiceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BillingInvoiceCountAggregateOutputType> : number>;
    aggregate<T extends BillingInvoiceAggregateArgs>(args: Prisma.Subset<T, BillingInvoiceAggregateArgs>): Prisma.PrismaPromise<GetBillingInvoiceAggregateType<T>>;
    groupBy<T extends BillingInvoiceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BillingInvoiceGroupByArgs['orderBy'];
    } : {
        orderBy?: BillingInvoiceGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BillingInvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillingInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BillingInvoiceFieldRefs;
}
export interface Prisma__BillingInvoiceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BillingInvoiceFieldRefs {
    readonly id: Prisma.FieldRef<"BillingInvoice", 'String'>;
    readonly organizationId: Prisma.FieldRef<"BillingInvoice", 'String'>;
    readonly stripeInvoiceId: Prisma.FieldRef<"BillingInvoice", 'String'>;
    readonly amount: Prisma.FieldRef<"BillingInvoice", 'Decimal'>;
    readonly currency: Prisma.FieldRef<"BillingInvoice", 'String'>;
    readonly status: Prisma.FieldRef<"BillingInvoice", 'InvoiceStatus'>;
    readonly periodStart: Prisma.FieldRef<"BillingInvoice", 'DateTime'>;
    readonly periodEnd: Prisma.FieldRef<"BillingInvoice", 'DateTime'>;
    readonly pdfUrl: Prisma.FieldRef<"BillingInvoice", 'String'>;
    readonly paidAt: Prisma.FieldRef<"BillingInvoice", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"BillingInvoice", 'DateTime'>;
}
export type BillingInvoiceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BillingInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.BillingInvoiceOmit<ExtArgs> | null;
    include?: Prisma.BillingInvoiceInclude<ExtArgs> | null;
    where: Prisma.BillingInvoiceWhereUniqueInput;
};
export type BillingInvoiceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BillingInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.BillingInvoiceOmit<ExtArgs> | null;
    include?: Prisma.BillingInvoiceInclude<ExtArgs> | null;
    where: Prisma.BillingInvoiceWhereUniqueInput;
};
export type BillingInvoiceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BillingInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.BillingInvoiceOmit<ExtArgs> | null;
    include?: Prisma.BillingInvoiceInclude<ExtArgs> | null;
    where?: Prisma.BillingInvoiceWhereInput;
    orderBy?: Prisma.BillingInvoiceOrderByWithRelationInput | Prisma.BillingInvoiceOrderByWithRelationInput[];
    cursor?: Prisma.BillingInvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BillingInvoiceScalarFieldEnum | Prisma.BillingInvoiceScalarFieldEnum[];
};
export type BillingInvoiceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BillingInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.BillingInvoiceOmit<ExtArgs> | null;
    include?: Prisma.BillingInvoiceInclude<ExtArgs> | null;
    where?: Prisma.BillingInvoiceWhereInput;
    orderBy?: Prisma.BillingInvoiceOrderByWithRelationInput | Prisma.BillingInvoiceOrderByWithRelationInput[];
    cursor?: Prisma.BillingInvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BillingInvoiceScalarFieldEnum | Prisma.BillingInvoiceScalarFieldEnum[];
};
export type BillingInvoiceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BillingInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.BillingInvoiceOmit<ExtArgs> | null;
    include?: Prisma.BillingInvoiceInclude<ExtArgs> | null;
    where?: Prisma.BillingInvoiceWhereInput;
    orderBy?: Prisma.BillingInvoiceOrderByWithRelationInput | Prisma.BillingInvoiceOrderByWithRelationInput[];
    cursor?: Prisma.BillingInvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BillingInvoiceScalarFieldEnum | Prisma.BillingInvoiceScalarFieldEnum[];
};
export type BillingInvoiceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BillingInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.BillingInvoiceOmit<ExtArgs> | null;
    include?: Prisma.BillingInvoiceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BillingInvoiceCreateInput, Prisma.BillingInvoiceUncheckedCreateInput>;
};
export type BillingInvoiceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BillingInvoiceCreateManyInput | Prisma.BillingInvoiceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BillingInvoiceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BillingInvoiceSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BillingInvoiceOmit<ExtArgs> | null;
    data: Prisma.BillingInvoiceCreateManyInput | Prisma.BillingInvoiceCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BillingInvoiceIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BillingInvoiceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BillingInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.BillingInvoiceOmit<ExtArgs> | null;
    include?: Prisma.BillingInvoiceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BillingInvoiceUpdateInput, Prisma.BillingInvoiceUncheckedUpdateInput>;
    where: Prisma.BillingInvoiceWhereUniqueInput;
};
export type BillingInvoiceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BillingInvoiceUpdateManyMutationInput, Prisma.BillingInvoiceUncheckedUpdateManyInput>;
    where?: Prisma.BillingInvoiceWhereInput;
    limit?: number;
};
export type BillingInvoiceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BillingInvoiceSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BillingInvoiceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BillingInvoiceUpdateManyMutationInput, Prisma.BillingInvoiceUncheckedUpdateManyInput>;
    where?: Prisma.BillingInvoiceWhereInput;
    limit?: number;
    include?: Prisma.BillingInvoiceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BillingInvoiceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BillingInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.BillingInvoiceOmit<ExtArgs> | null;
    include?: Prisma.BillingInvoiceInclude<ExtArgs> | null;
    where: Prisma.BillingInvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.BillingInvoiceCreateInput, Prisma.BillingInvoiceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BillingInvoiceUpdateInput, Prisma.BillingInvoiceUncheckedUpdateInput>;
};
export type BillingInvoiceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BillingInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.BillingInvoiceOmit<ExtArgs> | null;
    include?: Prisma.BillingInvoiceInclude<ExtArgs> | null;
    where: Prisma.BillingInvoiceWhereUniqueInput;
};
export type BillingInvoiceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BillingInvoiceWhereInput;
    limit?: number;
};
export type BillingInvoiceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BillingInvoiceSelect<ExtArgs> | null;
    omit?: Prisma.BillingInvoiceOmit<ExtArgs> | null;
    include?: Prisma.BillingInvoiceInclude<ExtArgs> | null;
};
