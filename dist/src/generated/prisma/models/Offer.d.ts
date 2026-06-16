import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OfferModel = runtime.Types.Result.DefaultSelection<Prisma.$OfferPayload>;
export type AggregateOffer = {
    _count: OfferCountAggregateOutputType | null;
    _avg: OfferAvgAggregateOutputType | null;
    _sum: OfferSumAggregateOutputType | null;
    _min: OfferMinAggregateOutputType | null;
    _max: OfferMaxAggregateOutputType | null;
};
export type OfferAvgAggregateOutputType = {
    salary: runtime.Decimal | null;
};
export type OfferSumAggregateOutputType = {
    salary: runtime.Decimal | null;
};
export type OfferMinAggregateOutputType = {
    id: string | null;
    applicationId: string | null;
    salary: runtime.Decimal | null;
    currency: string | null;
    startDate: Date | null;
    offerLetterCloudinaryPublicId: string | null;
    status: $Enums.OfferStatus | null;
    sentAt: Date | null;
    signedAt: Date | null;
    expiresAt: Date | null;
    createdBy: string | null;
    createdAt: Date | null;
};
export type OfferMaxAggregateOutputType = {
    id: string | null;
    applicationId: string | null;
    salary: runtime.Decimal | null;
    currency: string | null;
    startDate: Date | null;
    offerLetterCloudinaryPublicId: string | null;
    status: $Enums.OfferStatus | null;
    sentAt: Date | null;
    signedAt: Date | null;
    expiresAt: Date | null;
    createdBy: string | null;
    createdAt: Date | null;
};
export type OfferCountAggregateOutputType = {
    id: number;
    applicationId: number;
    salary: number;
    currency: number;
    startDate: number;
    offerLetterCloudinaryPublicId: number;
    status: number;
    sentAt: number;
    signedAt: number;
    expiresAt: number;
    createdBy: number;
    createdAt: number;
    _all: number;
};
export type OfferAvgAggregateInputType = {
    salary?: true;
};
export type OfferSumAggregateInputType = {
    salary?: true;
};
export type OfferMinAggregateInputType = {
    id?: true;
    applicationId?: true;
    salary?: true;
    currency?: true;
    startDate?: true;
    offerLetterCloudinaryPublicId?: true;
    status?: true;
    sentAt?: true;
    signedAt?: true;
    expiresAt?: true;
    createdBy?: true;
    createdAt?: true;
};
export type OfferMaxAggregateInputType = {
    id?: true;
    applicationId?: true;
    salary?: true;
    currency?: true;
    startDate?: true;
    offerLetterCloudinaryPublicId?: true;
    status?: true;
    sentAt?: true;
    signedAt?: true;
    expiresAt?: true;
    createdBy?: true;
    createdAt?: true;
};
export type OfferCountAggregateInputType = {
    id?: true;
    applicationId?: true;
    salary?: true;
    currency?: true;
    startDate?: true;
    offerLetterCloudinaryPublicId?: true;
    status?: true;
    sentAt?: true;
    signedAt?: true;
    expiresAt?: true;
    createdBy?: true;
    createdAt?: true;
    _all?: true;
};
export type OfferAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OfferWhereInput;
    orderBy?: Prisma.OfferOrderByWithRelationInput | Prisma.OfferOrderByWithRelationInput[];
    cursor?: Prisma.OfferWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OfferCountAggregateInputType;
    _avg?: OfferAvgAggregateInputType;
    _sum?: OfferSumAggregateInputType;
    _min?: OfferMinAggregateInputType;
    _max?: OfferMaxAggregateInputType;
};
export type GetOfferAggregateType<T extends OfferAggregateArgs> = {
    [P in keyof T & keyof AggregateOffer]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOffer[P]> : Prisma.GetScalarType<T[P], AggregateOffer[P]>;
};
export type OfferGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OfferWhereInput;
    orderBy?: Prisma.OfferOrderByWithAggregationInput | Prisma.OfferOrderByWithAggregationInput[];
    by: Prisma.OfferScalarFieldEnum[] | Prisma.OfferScalarFieldEnum;
    having?: Prisma.OfferScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OfferCountAggregateInputType | true;
    _avg?: OfferAvgAggregateInputType;
    _sum?: OfferSumAggregateInputType;
    _min?: OfferMinAggregateInputType;
    _max?: OfferMaxAggregateInputType;
};
export type OfferGroupByOutputType = {
    id: string;
    applicationId: string;
    salary: runtime.Decimal;
    currency: string | null;
    startDate: Date | null;
    offerLetterCloudinaryPublicId: string | null;
    status: $Enums.OfferStatus;
    sentAt: Date | null;
    signedAt: Date | null;
    expiresAt: Date | null;
    createdBy: string | null;
    createdAt: Date;
    _count: OfferCountAggregateOutputType | null;
    _avg: OfferAvgAggregateOutputType | null;
    _sum: OfferSumAggregateOutputType | null;
    _min: OfferMinAggregateOutputType | null;
    _max: OfferMaxAggregateOutputType | null;
};
export type GetOfferGroupByPayload<T extends OfferGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OfferGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OfferGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OfferGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OfferGroupByOutputType[P]>;
}>>;
export type OfferWhereInput = {
    AND?: Prisma.OfferWhereInput | Prisma.OfferWhereInput[];
    OR?: Prisma.OfferWhereInput[];
    NOT?: Prisma.OfferWhereInput | Prisma.OfferWhereInput[];
    id?: Prisma.UuidFilter<"Offer"> | string;
    applicationId?: Prisma.UuidFilter<"Offer"> | string;
    salary?: Prisma.DecimalFilter<"Offer"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringNullableFilter<"Offer"> | string | null;
    startDate?: Prisma.DateTimeNullableFilter<"Offer"> | Date | string | null;
    offerLetterCloudinaryPublicId?: Prisma.StringNullableFilter<"Offer"> | string | null;
    status?: Prisma.EnumOfferStatusFilter<"Offer"> | $Enums.OfferStatus;
    sentAt?: Prisma.DateTimeNullableFilter<"Offer"> | Date | string | null;
    signedAt?: Prisma.DateTimeNullableFilter<"Offer"> | Date | string | null;
    expiresAt?: Prisma.DateTimeNullableFilter<"Offer"> | Date | string | null;
    createdBy?: Prisma.UuidNullableFilter<"Offer"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Offer"> | Date | string;
    application?: Prisma.XOR<Prisma.ApplicationScalarRelationFilter, Prisma.ApplicationWhereInput>;
};
export type OfferOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    salary?: Prisma.SortOrder;
    currency?: Prisma.SortOrderInput | Prisma.SortOrder;
    startDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    offerLetterCloudinaryPublicId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    signedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    expiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    application?: Prisma.ApplicationOrderByWithRelationInput;
};
export type OfferWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.OfferWhereInput | Prisma.OfferWhereInput[];
    OR?: Prisma.OfferWhereInput[];
    NOT?: Prisma.OfferWhereInput | Prisma.OfferWhereInput[];
    applicationId?: Prisma.UuidFilter<"Offer"> | string;
    salary?: Prisma.DecimalFilter<"Offer"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringNullableFilter<"Offer"> | string | null;
    startDate?: Prisma.DateTimeNullableFilter<"Offer"> | Date | string | null;
    offerLetterCloudinaryPublicId?: Prisma.StringNullableFilter<"Offer"> | string | null;
    status?: Prisma.EnumOfferStatusFilter<"Offer"> | $Enums.OfferStatus;
    sentAt?: Prisma.DateTimeNullableFilter<"Offer"> | Date | string | null;
    signedAt?: Prisma.DateTimeNullableFilter<"Offer"> | Date | string | null;
    expiresAt?: Prisma.DateTimeNullableFilter<"Offer"> | Date | string | null;
    createdBy?: Prisma.UuidNullableFilter<"Offer"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Offer"> | Date | string;
    application?: Prisma.XOR<Prisma.ApplicationScalarRelationFilter, Prisma.ApplicationWhereInput>;
}, "id">;
export type OfferOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    salary?: Prisma.SortOrder;
    currency?: Prisma.SortOrderInput | Prisma.SortOrder;
    startDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    offerLetterCloudinaryPublicId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    signedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    expiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.OfferCountOrderByAggregateInput;
    _avg?: Prisma.OfferAvgOrderByAggregateInput;
    _max?: Prisma.OfferMaxOrderByAggregateInput;
    _min?: Prisma.OfferMinOrderByAggregateInput;
    _sum?: Prisma.OfferSumOrderByAggregateInput;
};
export type OfferScalarWhereWithAggregatesInput = {
    AND?: Prisma.OfferScalarWhereWithAggregatesInput | Prisma.OfferScalarWhereWithAggregatesInput[];
    OR?: Prisma.OfferScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OfferScalarWhereWithAggregatesInput | Prisma.OfferScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Offer"> | string;
    applicationId?: Prisma.UuidWithAggregatesFilter<"Offer"> | string;
    salary?: Prisma.DecimalWithAggregatesFilter<"Offer"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringNullableWithAggregatesFilter<"Offer"> | string | null;
    startDate?: Prisma.DateTimeNullableWithAggregatesFilter<"Offer"> | Date | string | null;
    offerLetterCloudinaryPublicId?: Prisma.StringNullableWithAggregatesFilter<"Offer"> | string | null;
    status?: Prisma.EnumOfferStatusWithAggregatesFilter<"Offer"> | $Enums.OfferStatus;
    sentAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Offer"> | Date | string | null;
    signedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Offer"> | Date | string | null;
    expiresAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Offer"> | Date | string | null;
    createdBy?: Prisma.UuidNullableWithAggregatesFilter<"Offer"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Offer"> | Date | string;
};
export type OfferCreateInput = {
    id?: string;
    salary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string | null;
    startDate?: Date | string | null;
    offerLetterCloudinaryPublicId?: string | null;
    status?: $Enums.OfferStatus;
    sentAt?: Date | string | null;
    signedAt?: Date | string | null;
    expiresAt?: Date | string | null;
    createdBy?: string | null;
    createdAt?: Date | string;
    application: Prisma.ApplicationCreateNestedOneWithoutOffersInput;
};
export type OfferUncheckedCreateInput = {
    id?: string;
    applicationId: string;
    salary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string | null;
    startDate?: Date | string | null;
    offerLetterCloudinaryPublicId?: string | null;
    status?: $Enums.OfferStatus;
    sentAt?: Date | string | null;
    signedAt?: Date | string | null;
    expiresAt?: Date | string | null;
    createdBy?: string | null;
    createdAt?: Date | string;
};
export type OfferUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    salary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    offerLetterCloudinaryPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOfferStatusFieldUpdateOperationsInput | $Enums.OfferStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    signedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    application?: Prisma.ApplicationUpdateOneRequiredWithoutOffersNestedInput;
};
export type OfferUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationId?: Prisma.StringFieldUpdateOperationsInput | string;
    salary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    offerLetterCloudinaryPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOfferStatusFieldUpdateOperationsInput | $Enums.OfferStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    signedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OfferCreateManyInput = {
    id?: string;
    applicationId: string;
    salary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string | null;
    startDate?: Date | string | null;
    offerLetterCloudinaryPublicId?: string | null;
    status?: $Enums.OfferStatus;
    sentAt?: Date | string | null;
    signedAt?: Date | string | null;
    expiresAt?: Date | string | null;
    createdBy?: string | null;
    createdAt?: Date | string;
};
export type OfferUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    salary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    offerLetterCloudinaryPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOfferStatusFieldUpdateOperationsInput | $Enums.OfferStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    signedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OfferUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationId?: Prisma.StringFieldUpdateOperationsInput | string;
    salary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    offerLetterCloudinaryPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOfferStatusFieldUpdateOperationsInput | $Enums.OfferStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    signedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OfferListRelationFilter = {
    every?: Prisma.OfferWhereInput;
    some?: Prisma.OfferWhereInput;
    none?: Prisma.OfferWhereInput;
};
export type OfferOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OfferCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    salary?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    offerLetterCloudinaryPublicId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    signedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OfferAvgOrderByAggregateInput = {
    salary?: Prisma.SortOrder;
};
export type OfferMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    salary?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    offerLetterCloudinaryPublicId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    signedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OfferMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    salary?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    offerLetterCloudinaryPublicId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    signedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OfferSumOrderByAggregateInput = {
    salary?: Prisma.SortOrder;
};
export type OfferCreateNestedManyWithoutApplicationInput = {
    create?: Prisma.XOR<Prisma.OfferCreateWithoutApplicationInput, Prisma.OfferUncheckedCreateWithoutApplicationInput> | Prisma.OfferCreateWithoutApplicationInput[] | Prisma.OfferUncheckedCreateWithoutApplicationInput[];
    connectOrCreate?: Prisma.OfferCreateOrConnectWithoutApplicationInput | Prisma.OfferCreateOrConnectWithoutApplicationInput[];
    createMany?: Prisma.OfferCreateManyApplicationInputEnvelope;
    connect?: Prisma.OfferWhereUniqueInput | Prisma.OfferWhereUniqueInput[];
};
export type OfferUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: Prisma.XOR<Prisma.OfferCreateWithoutApplicationInput, Prisma.OfferUncheckedCreateWithoutApplicationInput> | Prisma.OfferCreateWithoutApplicationInput[] | Prisma.OfferUncheckedCreateWithoutApplicationInput[];
    connectOrCreate?: Prisma.OfferCreateOrConnectWithoutApplicationInput | Prisma.OfferCreateOrConnectWithoutApplicationInput[];
    createMany?: Prisma.OfferCreateManyApplicationInputEnvelope;
    connect?: Prisma.OfferWhereUniqueInput | Prisma.OfferWhereUniqueInput[];
};
export type OfferUpdateManyWithoutApplicationNestedInput = {
    create?: Prisma.XOR<Prisma.OfferCreateWithoutApplicationInput, Prisma.OfferUncheckedCreateWithoutApplicationInput> | Prisma.OfferCreateWithoutApplicationInput[] | Prisma.OfferUncheckedCreateWithoutApplicationInput[];
    connectOrCreate?: Prisma.OfferCreateOrConnectWithoutApplicationInput | Prisma.OfferCreateOrConnectWithoutApplicationInput[];
    upsert?: Prisma.OfferUpsertWithWhereUniqueWithoutApplicationInput | Prisma.OfferUpsertWithWhereUniqueWithoutApplicationInput[];
    createMany?: Prisma.OfferCreateManyApplicationInputEnvelope;
    set?: Prisma.OfferWhereUniqueInput | Prisma.OfferWhereUniqueInput[];
    disconnect?: Prisma.OfferWhereUniqueInput | Prisma.OfferWhereUniqueInput[];
    delete?: Prisma.OfferWhereUniqueInput | Prisma.OfferWhereUniqueInput[];
    connect?: Prisma.OfferWhereUniqueInput | Prisma.OfferWhereUniqueInput[];
    update?: Prisma.OfferUpdateWithWhereUniqueWithoutApplicationInput | Prisma.OfferUpdateWithWhereUniqueWithoutApplicationInput[];
    updateMany?: Prisma.OfferUpdateManyWithWhereWithoutApplicationInput | Prisma.OfferUpdateManyWithWhereWithoutApplicationInput[];
    deleteMany?: Prisma.OfferScalarWhereInput | Prisma.OfferScalarWhereInput[];
};
export type OfferUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: Prisma.XOR<Prisma.OfferCreateWithoutApplicationInput, Prisma.OfferUncheckedCreateWithoutApplicationInput> | Prisma.OfferCreateWithoutApplicationInput[] | Prisma.OfferUncheckedCreateWithoutApplicationInput[];
    connectOrCreate?: Prisma.OfferCreateOrConnectWithoutApplicationInput | Prisma.OfferCreateOrConnectWithoutApplicationInput[];
    upsert?: Prisma.OfferUpsertWithWhereUniqueWithoutApplicationInput | Prisma.OfferUpsertWithWhereUniqueWithoutApplicationInput[];
    createMany?: Prisma.OfferCreateManyApplicationInputEnvelope;
    set?: Prisma.OfferWhereUniqueInput | Prisma.OfferWhereUniqueInput[];
    disconnect?: Prisma.OfferWhereUniqueInput | Prisma.OfferWhereUniqueInput[];
    delete?: Prisma.OfferWhereUniqueInput | Prisma.OfferWhereUniqueInput[];
    connect?: Prisma.OfferWhereUniqueInput | Prisma.OfferWhereUniqueInput[];
    update?: Prisma.OfferUpdateWithWhereUniqueWithoutApplicationInput | Prisma.OfferUpdateWithWhereUniqueWithoutApplicationInput[];
    updateMany?: Prisma.OfferUpdateManyWithWhereWithoutApplicationInput | Prisma.OfferUpdateManyWithWhereWithoutApplicationInput[];
    deleteMany?: Prisma.OfferScalarWhereInput | Prisma.OfferScalarWhereInput[];
};
export type EnumOfferStatusFieldUpdateOperationsInput = {
    set?: $Enums.OfferStatus;
};
export type OfferCreateWithoutApplicationInput = {
    id?: string;
    salary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string | null;
    startDate?: Date | string | null;
    offerLetterCloudinaryPublicId?: string | null;
    status?: $Enums.OfferStatus;
    sentAt?: Date | string | null;
    signedAt?: Date | string | null;
    expiresAt?: Date | string | null;
    createdBy?: string | null;
    createdAt?: Date | string;
};
export type OfferUncheckedCreateWithoutApplicationInput = {
    id?: string;
    salary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string | null;
    startDate?: Date | string | null;
    offerLetterCloudinaryPublicId?: string | null;
    status?: $Enums.OfferStatus;
    sentAt?: Date | string | null;
    signedAt?: Date | string | null;
    expiresAt?: Date | string | null;
    createdBy?: string | null;
    createdAt?: Date | string;
};
export type OfferCreateOrConnectWithoutApplicationInput = {
    where: Prisma.OfferWhereUniqueInput;
    create: Prisma.XOR<Prisma.OfferCreateWithoutApplicationInput, Prisma.OfferUncheckedCreateWithoutApplicationInput>;
};
export type OfferCreateManyApplicationInputEnvelope = {
    data: Prisma.OfferCreateManyApplicationInput | Prisma.OfferCreateManyApplicationInput[];
    skipDuplicates?: boolean;
};
export type OfferUpsertWithWhereUniqueWithoutApplicationInput = {
    where: Prisma.OfferWhereUniqueInput;
    update: Prisma.XOR<Prisma.OfferUpdateWithoutApplicationInput, Prisma.OfferUncheckedUpdateWithoutApplicationInput>;
    create: Prisma.XOR<Prisma.OfferCreateWithoutApplicationInput, Prisma.OfferUncheckedCreateWithoutApplicationInput>;
};
export type OfferUpdateWithWhereUniqueWithoutApplicationInput = {
    where: Prisma.OfferWhereUniqueInput;
    data: Prisma.XOR<Prisma.OfferUpdateWithoutApplicationInput, Prisma.OfferUncheckedUpdateWithoutApplicationInput>;
};
export type OfferUpdateManyWithWhereWithoutApplicationInput = {
    where: Prisma.OfferScalarWhereInput;
    data: Prisma.XOR<Prisma.OfferUpdateManyMutationInput, Prisma.OfferUncheckedUpdateManyWithoutApplicationInput>;
};
export type OfferScalarWhereInput = {
    AND?: Prisma.OfferScalarWhereInput | Prisma.OfferScalarWhereInput[];
    OR?: Prisma.OfferScalarWhereInput[];
    NOT?: Prisma.OfferScalarWhereInput | Prisma.OfferScalarWhereInput[];
    id?: Prisma.UuidFilter<"Offer"> | string;
    applicationId?: Prisma.UuidFilter<"Offer"> | string;
    salary?: Prisma.DecimalFilter<"Offer"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringNullableFilter<"Offer"> | string | null;
    startDate?: Prisma.DateTimeNullableFilter<"Offer"> | Date | string | null;
    offerLetterCloudinaryPublicId?: Prisma.StringNullableFilter<"Offer"> | string | null;
    status?: Prisma.EnumOfferStatusFilter<"Offer"> | $Enums.OfferStatus;
    sentAt?: Prisma.DateTimeNullableFilter<"Offer"> | Date | string | null;
    signedAt?: Prisma.DateTimeNullableFilter<"Offer"> | Date | string | null;
    expiresAt?: Prisma.DateTimeNullableFilter<"Offer"> | Date | string | null;
    createdBy?: Prisma.UuidNullableFilter<"Offer"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Offer"> | Date | string;
};
export type OfferCreateManyApplicationInput = {
    id?: string;
    salary: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string | null;
    startDate?: Date | string | null;
    offerLetterCloudinaryPublicId?: string | null;
    status?: $Enums.OfferStatus;
    sentAt?: Date | string | null;
    signedAt?: Date | string | null;
    expiresAt?: Date | string | null;
    createdBy?: string | null;
    createdAt?: Date | string;
};
export type OfferUpdateWithoutApplicationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    salary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    offerLetterCloudinaryPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOfferStatusFieldUpdateOperationsInput | $Enums.OfferStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    signedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OfferUncheckedUpdateWithoutApplicationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    salary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    offerLetterCloudinaryPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOfferStatusFieldUpdateOperationsInput | $Enums.OfferStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    signedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OfferUncheckedUpdateManyWithoutApplicationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    salary?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    offerLetterCloudinaryPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOfferStatusFieldUpdateOperationsInput | $Enums.OfferStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    signedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OfferSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    applicationId?: boolean;
    salary?: boolean;
    currency?: boolean;
    startDate?: boolean;
    offerLetterCloudinaryPublicId?: boolean;
    status?: boolean;
    sentAt?: boolean;
    signedAt?: boolean;
    expiresAt?: boolean;
    createdBy?: boolean;
    createdAt?: boolean;
    application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["offer"]>;
export type OfferSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    applicationId?: boolean;
    salary?: boolean;
    currency?: boolean;
    startDate?: boolean;
    offerLetterCloudinaryPublicId?: boolean;
    status?: boolean;
    sentAt?: boolean;
    signedAt?: boolean;
    expiresAt?: boolean;
    createdBy?: boolean;
    createdAt?: boolean;
    application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["offer"]>;
export type OfferSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    applicationId?: boolean;
    salary?: boolean;
    currency?: boolean;
    startDate?: boolean;
    offerLetterCloudinaryPublicId?: boolean;
    status?: boolean;
    sentAt?: boolean;
    signedAt?: boolean;
    expiresAt?: boolean;
    createdBy?: boolean;
    createdAt?: boolean;
    application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["offer"]>;
export type OfferSelectScalar = {
    id?: boolean;
    applicationId?: boolean;
    salary?: boolean;
    currency?: boolean;
    startDate?: boolean;
    offerLetterCloudinaryPublicId?: boolean;
    status?: boolean;
    sentAt?: boolean;
    signedAt?: boolean;
    expiresAt?: boolean;
    createdBy?: boolean;
    createdAt?: boolean;
};
export type OfferOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "applicationId" | "salary" | "currency" | "startDate" | "offerLetterCloudinaryPublicId" | "status" | "sentAt" | "signedAt" | "expiresAt" | "createdBy" | "createdAt", ExtArgs["result"]["offer"]>;
export type OfferInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
};
export type OfferIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
};
export type OfferIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
};
export type $OfferPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Offer";
    objects: {
        application: Prisma.$ApplicationPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        applicationId: string;
        salary: runtime.Decimal;
        currency: string | null;
        startDate: Date | null;
        offerLetterCloudinaryPublicId: string | null;
        status: $Enums.OfferStatus;
        sentAt: Date | null;
        signedAt: Date | null;
        expiresAt: Date | null;
        createdBy: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["offer"]>;
    composites: {};
};
export type OfferGetPayload<S extends boolean | null | undefined | OfferDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OfferPayload, S>;
export type OfferCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OfferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OfferCountAggregateInputType | true;
};
export interface OfferDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Offer'];
        meta: {
            name: 'Offer';
        };
    };
    findUnique<T extends OfferFindUniqueArgs>(args: Prisma.SelectSubset<T, OfferFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OfferClient<runtime.Types.Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OfferFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OfferFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OfferClient<runtime.Types.Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OfferFindFirstArgs>(args?: Prisma.SelectSubset<T, OfferFindFirstArgs<ExtArgs>>): Prisma.Prisma__OfferClient<runtime.Types.Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OfferFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OfferFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OfferClient<runtime.Types.Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OfferFindManyArgs>(args?: Prisma.SelectSubset<T, OfferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OfferCreateArgs>(args: Prisma.SelectSubset<T, OfferCreateArgs<ExtArgs>>): Prisma.Prisma__OfferClient<runtime.Types.Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OfferCreateManyArgs>(args?: Prisma.SelectSubset<T, OfferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OfferCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OfferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OfferDeleteArgs>(args: Prisma.SelectSubset<T, OfferDeleteArgs<ExtArgs>>): Prisma.Prisma__OfferClient<runtime.Types.Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OfferUpdateArgs>(args: Prisma.SelectSubset<T, OfferUpdateArgs<ExtArgs>>): Prisma.Prisma__OfferClient<runtime.Types.Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OfferDeleteManyArgs>(args?: Prisma.SelectSubset<T, OfferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OfferUpdateManyArgs>(args: Prisma.SelectSubset<T, OfferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OfferUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OfferUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OfferUpsertArgs>(args: Prisma.SelectSubset<T, OfferUpsertArgs<ExtArgs>>): Prisma.Prisma__OfferClient<runtime.Types.Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OfferCountArgs>(args?: Prisma.Subset<T, OfferCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OfferCountAggregateOutputType> : number>;
    aggregate<T extends OfferAggregateArgs>(args: Prisma.Subset<T, OfferAggregateArgs>): Prisma.PrismaPromise<GetOfferAggregateType<T>>;
    groupBy<T extends OfferGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OfferGroupByArgs['orderBy'];
    } : {
        orderBy?: OfferGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OfferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OfferFieldRefs;
}
export interface Prisma__OfferClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    application<T extends Prisma.ApplicationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ApplicationDefaultArgs<ExtArgs>>): Prisma.Prisma__ApplicationClient<runtime.Types.Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OfferFieldRefs {
    readonly id: Prisma.FieldRef<"Offer", 'String'>;
    readonly applicationId: Prisma.FieldRef<"Offer", 'String'>;
    readonly salary: Prisma.FieldRef<"Offer", 'Decimal'>;
    readonly currency: Prisma.FieldRef<"Offer", 'String'>;
    readonly startDate: Prisma.FieldRef<"Offer", 'DateTime'>;
    readonly offerLetterCloudinaryPublicId: Prisma.FieldRef<"Offer", 'String'>;
    readonly status: Prisma.FieldRef<"Offer", 'OfferStatus'>;
    readonly sentAt: Prisma.FieldRef<"Offer", 'DateTime'>;
    readonly signedAt: Prisma.FieldRef<"Offer", 'DateTime'>;
    readonly expiresAt: Prisma.FieldRef<"Offer", 'DateTime'>;
    readonly createdBy: Prisma.FieldRef<"Offer", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Offer", 'DateTime'>;
}
export type OfferFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfferSelect<ExtArgs> | null;
    omit?: Prisma.OfferOmit<ExtArgs> | null;
    include?: Prisma.OfferInclude<ExtArgs> | null;
    where: Prisma.OfferWhereUniqueInput;
};
export type OfferFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfferSelect<ExtArgs> | null;
    omit?: Prisma.OfferOmit<ExtArgs> | null;
    include?: Prisma.OfferInclude<ExtArgs> | null;
    where: Prisma.OfferWhereUniqueInput;
};
export type OfferFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfferSelect<ExtArgs> | null;
    omit?: Prisma.OfferOmit<ExtArgs> | null;
    include?: Prisma.OfferInclude<ExtArgs> | null;
    where?: Prisma.OfferWhereInput;
    orderBy?: Prisma.OfferOrderByWithRelationInput | Prisma.OfferOrderByWithRelationInput[];
    cursor?: Prisma.OfferWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OfferScalarFieldEnum | Prisma.OfferScalarFieldEnum[];
};
export type OfferFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfferSelect<ExtArgs> | null;
    omit?: Prisma.OfferOmit<ExtArgs> | null;
    include?: Prisma.OfferInclude<ExtArgs> | null;
    where?: Prisma.OfferWhereInput;
    orderBy?: Prisma.OfferOrderByWithRelationInput | Prisma.OfferOrderByWithRelationInput[];
    cursor?: Prisma.OfferWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OfferScalarFieldEnum | Prisma.OfferScalarFieldEnum[];
};
export type OfferFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfferSelect<ExtArgs> | null;
    omit?: Prisma.OfferOmit<ExtArgs> | null;
    include?: Prisma.OfferInclude<ExtArgs> | null;
    where?: Prisma.OfferWhereInput;
    orderBy?: Prisma.OfferOrderByWithRelationInput | Prisma.OfferOrderByWithRelationInput[];
    cursor?: Prisma.OfferWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OfferScalarFieldEnum | Prisma.OfferScalarFieldEnum[];
};
export type OfferCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfferSelect<ExtArgs> | null;
    omit?: Prisma.OfferOmit<ExtArgs> | null;
    include?: Prisma.OfferInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OfferCreateInput, Prisma.OfferUncheckedCreateInput>;
};
export type OfferCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OfferCreateManyInput | Prisma.OfferCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OfferCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfferSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OfferOmit<ExtArgs> | null;
    data: Prisma.OfferCreateManyInput | Prisma.OfferCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.OfferIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type OfferUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfferSelect<ExtArgs> | null;
    omit?: Prisma.OfferOmit<ExtArgs> | null;
    include?: Prisma.OfferInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OfferUpdateInput, Prisma.OfferUncheckedUpdateInput>;
    where: Prisma.OfferWhereUniqueInput;
};
export type OfferUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OfferUpdateManyMutationInput, Prisma.OfferUncheckedUpdateManyInput>;
    where?: Prisma.OfferWhereInput;
    limit?: number;
};
export type OfferUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfferSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OfferOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OfferUpdateManyMutationInput, Prisma.OfferUncheckedUpdateManyInput>;
    where?: Prisma.OfferWhereInput;
    limit?: number;
    include?: Prisma.OfferIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type OfferUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfferSelect<ExtArgs> | null;
    omit?: Prisma.OfferOmit<ExtArgs> | null;
    include?: Prisma.OfferInclude<ExtArgs> | null;
    where: Prisma.OfferWhereUniqueInput;
    create: Prisma.XOR<Prisma.OfferCreateInput, Prisma.OfferUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OfferUpdateInput, Prisma.OfferUncheckedUpdateInput>;
};
export type OfferDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfferSelect<ExtArgs> | null;
    omit?: Prisma.OfferOmit<ExtArgs> | null;
    include?: Prisma.OfferInclude<ExtArgs> | null;
    where: Prisma.OfferWhereUniqueInput;
};
export type OfferDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OfferWhereInput;
    limit?: number;
};
export type OfferDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfferSelect<ExtArgs> | null;
    omit?: Prisma.OfferOmit<ExtArgs> | null;
    include?: Prisma.OfferInclude<ExtArgs> | null;
};
