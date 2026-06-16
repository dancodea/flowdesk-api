import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DeductionTypeModel = runtime.Types.Result.DefaultSelection<Prisma.$DeductionTypePayload>;
export type AggregateDeductionType = {
    _count: DeductionTypeCountAggregateOutputType | null;
    _avg: DeductionTypeAvgAggregateOutputType | null;
    _sum: DeductionTypeSumAggregateOutputType | null;
    _min: DeductionTypeMinAggregateOutputType | null;
    _max: DeductionTypeMaxAggregateOutputType | null;
};
export type DeductionTypeAvgAggregateOutputType = {
    defaultValue: runtime.Decimal | null;
};
export type DeductionTypeSumAggregateOutputType = {
    defaultValue: runtime.Decimal | null;
};
export type DeductionTypeMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    name: string | null;
    type: $Enums.DeductionValueType | null;
    defaultValue: runtime.Decimal | null;
    isPreTax: boolean | null;
    createdAt: Date | null;
};
export type DeductionTypeMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    name: string | null;
    type: $Enums.DeductionValueType | null;
    defaultValue: runtime.Decimal | null;
    isPreTax: boolean | null;
    createdAt: Date | null;
};
export type DeductionTypeCountAggregateOutputType = {
    id: number;
    organizationId: number;
    name: number;
    type: number;
    defaultValue: number;
    isPreTax: number;
    createdAt: number;
    _all: number;
};
export type DeductionTypeAvgAggregateInputType = {
    defaultValue?: true;
};
export type DeductionTypeSumAggregateInputType = {
    defaultValue?: true;
};
export type DeductionTypeMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    type?: true;
    defaultValue?: true;
    isPreTax?: true;
    createdAt?: true;
};
export type DeductionTypeMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    type?: true;
    defaultValue?: true;
    isPreTax?: true;
    createdAt?: true;
};
export type DeductionTypeCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    type?: true;
    defaultValue?: true;
    isPreTax?: true;
    createdAt?: true;
    _all?: true;
};
export type DeductionTypeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeductionTypeWhereInput;
    orderBy?: Prisma.DeductionTypeOrderByWithRelationInput | Prisma.DeductionTypeOrderByWithRelationInput[];
    cursor?: Prisma.DeductionTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DeductionTypeCountAggregateInputType;
    _avg?: DeductionTypeAvgAggregateInputType;
    _sum?: DeductionTypeSumAggregateInputType;
    _min?: DeductionTypeMinAggregateInputType;
    _max?: DeductionTypeMaxAggregateInputType;
};
export type GetDeductionTypeAggregateType<T extends DeductionTypeAggregateArgs> = {
    [P in keyof T & keyof AggregateDeductionType]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDeductionType[P]> : Prisma.GetScalarType<T[P], AggregateDeductionType[P]>;
};
export type DeductionTypeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeductionTypeWhereInput;
    orderBy?: Prisma.DeductionTypeOrderByWithAggregationInput | Prisma.DeductionTypeOrderByWithAggregationInput[];
    by: Prisma.DeductionTypeScalarFieldEnum[] | Prisma.DeductionTypeScalarFieldEnum;
    having?: Prisma.DeductionTypeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DeductionTypeCountAggregateInputType | true;
    _avg?: DeductionTypeAvgAggregateInputType;
    _sum?: DeductionTypeSumAggregateInputType;
    _min?: DeductionTypeMinAggregateInputType;
    _max?: DeductionTypeMaxAggregateInputType;
};
export type DeductionTypeGroupByOutputType = {
    id: string;
    organizationId: string;
    name: string;
    type: $Enums.DeductionValueType;
    defaultValue: runtime.Decimal | null;
    isPreTax: boolean;
    createdAt: Date;
    _count: DeductionTypeCountAggregateOutputType | null;
    _avg: DeductionTypeAvgAggregateOutputType | null;
    _sum: DeductionTypeSumAggregateOutputType | null;
    _min: DeductionTypeMinAggregateOutputType | null;
    _max: DeductionTypeMaxAggregateOutputType | null;
};
export type GetDeductionTypeGroupByPayload<T extends DeductionTypeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DeductionTypeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DeductionTypeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DeductionTypeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DeductionTypeGroupByOutputType[P]>;
}>>;
export type DeductionTypeWhereInput = {
    AND?: Prisma.DeductionTypeWhereInput | Prisma.DeductionTypeWhereInput[];
    OR?: Prisma.DeductionTypeWhereInput[];
    NOT?: Prisma.DeductionTypeWhereInput | Prisma.DeductionTypeWhereInput[];
    id?: Prisma.UuidFilter<"DeductionType"> | string;
    organizationId?: Prisma.UuidFilter<"DeductionType"> | string;
    name?: Prisma.StringFilter<"DeductionType"> | string;
    type?: Prisma.EnumDeductionValueTypeFilter<"DeductionType"> | $Enums.DeductionValueType;
    defaultValue?: Prisma.DecimalNullableFilter<"DeductionType"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPreTax?: Prisma.BoolFilter<"DeductionType"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"DeductionType"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
};
export type DeductionTypeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    defaultValue?: Prisma.SortOrderInput | Prisma.SortOrder;
    isPreTax?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
};
export type DeductionTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DeductionTypeWhereInput | Prisma.DeductionTypeWhereInput[];
    OR?: Prisma.DeductionTypeWhereInput[];
    NOT?: Prisma.DeductionTypeWhereInput | Prisma.DeductionTypeWhereInput[];
    organizationId?: Prisma.UuidFilter<"DeductionType"> | string;
    name?: Prisma.StringFilter<"DeductionType"> | string;
    type?: Prisma.EnumDeductionValueTypeFilter<"DeductionType"> | $Enums.DeductionValueType;
    defaultValue?: Prisma.DecimalNullableFilter<"DeductionType"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPreTax?: Prisma.BoolFilter<"DeductionType"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"DeductionType"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
}, "id">;
export type DeductionTypeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    defaultValue?: Prisma.SortOrderInput | Prisma.SortOrder;
    isPreTax?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.DeductionTypeCountOrderByAggregateInput;
    _avg?: Prisma.DeductionTypeAvgOrderByAggregateInput;
    _max?: Prisma.DeductionTypeMaxOrderByAggregateInput;
    _min?: Prisma.DeductionTypeMinOrderByAggregateInput;
    _sum?: Prisma.DeductionTypeSumOrderByAggregateInput;
};
export type DeductionTypeScalarWhereWithAggregatesInput = {
    AND?: Prisma.DeductionTypeScalarWhereWithAggregatesInput | Prisma.DeductionTypeScalarWhereWithAggregatesInput[];
    OR?: Prisma.DeductionTypeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DeductionTypeScalarWhereWithAggregatesInput | Prisma.DeductionTypeScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"DeductionType"> | string;
    organizationId?: Prisma.UuidWithAggregatesFilter<"DeductionType"> | string;
    name?: Prisma.StringWithAggregatesFilter<"DeductionType"> | string;
    type?: Prisma.EnumDeductionValueTypeWithAggregatesFilter<"DeductionType"> | $Enums.DeductionValueType;
    defaultValue?: Prisma.DecimalNullableWithAggregatesFilter<"DeductionType"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPreTax?: Prisma.BoolWithAggregatesFilter<"DeductionType"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DeductionType"> | Date | string;
};
export type DeductionTypeCreateInput = {
    id?: string;
    name: string;
    type?: $Enums.DeductionValueType;
    defaultValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPreTax?: boolean;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutDeductionTypesInput;
};
export type DeductionTypeUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    name: string;
    type?: $Enums.DeductionValueType;
    defaultValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPreTax?: boolean;
    createdAt?: Date | string;
};
export type DeductionTypeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumDeductionValueTypeFieldUpdateOperationsInput | $Enums.DeductionValueType;
    defaultValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPreTax?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutDeductionTypesNestedInput;
};
export type DeductionTypeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumDeductionValueTypeFieldUpdateOperationsInput | $Enums.DeductionValueType;
    defaultValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPreTax?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeductionTypeCreateManyInput = {
    id?: string;
    organizationId: string;
    name: string;
    type?: $Enums.DeductionValueType;
    defaultValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPreTax?: boolean;
    createdAt?: Date | string;
};
export type DeductionTypeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumDeductionValueTypeFieldUpdateOperationsInput | $Enums.DeductionValueType;
    defaultValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPreTax?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeductionTypeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumDeductionValueTypeFieldUpdateOperationsInput | $Enums.DeductionValueType;
    defaultValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPreTax?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeductionTypeListRelationFilter = {
    every?: Prisma.DeductionTypeWhereInput;
    some?: Prisma.DeductionTypeWhereInput;
    none?: Prisma.DeductionTypeWhereInput;
};
export type DeductionTypeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DeductionTypeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    defaultValue?: Prisma.SortOrder;
    isPreTax?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DeductionTypeAvgOrderByAggregateInput = {
    defaultValue?: Prisma.SortOrder;
};
export type DeductionTypeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    defaultValue?: Prisma.SortOrder;
    isPreTax?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DeductionTypeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    defaultValue?: Prisma.SortOrder;
    isPreTax?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DeductionTypeSumOrderByAggregateInput = {
    defaultValue?: Prisma.SortOrder;
};
export type DeductionTypeCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.DeductionTypeCreateWithoutOrganizationInput, Prisma.DeductionTypeUncheckedCreateWithoutOrganizationInput> | Prisma.DeductionTypeCreateWithoutOrganizationInput[] | Prisma.DeductionTypeUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.DeductionTypeCreateOrConnectWithoutOrganizationInput | Prisma.DeductionTypeCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.DeductionTypeCreateManyOrganizationInputEnvelope;
    connect?: Prisma.DeductionTypeWhereUniqueInput | Prisma.DeductionTypeWhereUniqueInput[];
};
export type DeductionTypeUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.DeductionTypeCreateWithoutOrganizationInput, Prisma.DeductionTypeUncheckedCreateWithoutOrganizationInput> | Prisma.DeductionTypeCreateWithoutOrganizationInput[] | Prisma.DeductionTypeUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.DeductionTypeCreateOrConnectWithoutOrganizationInput | Prisma.DeductionTypeCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.DeductionTypeCreateManyOrganizationInputEnvelope;
    connect?: Prisma.DeductionTypeWhereUniqueInput | Prisma.DeductionTypeWhereUniqueInput[];
};
export type DeductionTypeUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.DeductionTypeCreateWithoutOrganizationInput, Prisma.DeductionTypeUncheckedCreateWithoutOrganizationInput> | Prisma.DeductionTypeCreateWithoutOrganizationInput[] | Prisma.DeductionTypeUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.DeductionTypeCreateOrConnectWithoutOrganizationInput | Prisma.DeductionTypeCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.DeductionTypeUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.DeductionTypeUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.DeductionTypeCreateManyOrganizationInputEnvelope;
    set?: Prisma.DeductionTypeWhereUniqueInput | Prisma.DeductionTypeWhereUniqueInput[];
    disconnect?: Prisma.DeductionTypeWhereUniqueInput | Prisma.DeductionTypeWhereUniqueInput[];
    delete?: Prisma.DeductionTypeWhereUniqueInput | Prisma.DeductionTypeWhereUniqueInput[];
    connect?: Prisma.DeductionTypeWhereUniqueInput | Prisma.DeductionTypeWhereUniqueInput[];
    update?: Prisma.DeductionTypeUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.DeductionTypeUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.DeductionTypeUpdateManyWithWhereWithoutOrganizationInput | Prisma.DeductionTypeUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.DeductionTypeScalarWhereInput | Prisma.DeductionTypeScalarWhereInput[];
};
export type DeductionTypeUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.DeductionTypeCreateWithoutOrganizationInput, Prisma.DeductionTypeUncheckedCreateWithoutOrganizationInput> | Prisma.DeductionTypeCreateWithoutOrganizationInput[] | Prisma.DeductionTypeUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.DeductionTypeCreateOrConnectWithoutOrganizationInput | Prisma.DeductionTypeCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.DeductionTypeUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.DeductionTypeUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.DeductionTypeCreateManyOrganizationInputEnvelope;
    set?: Prisma.DeductionTypeWhereUniqueInput | Prisma.DeductionTypeWhereUniqueInput[];
    disconnect?: Prisma.DeductionTypeWhereUniqueInput | Prisma.DeductionTypeWhereUniqueInput[];
    delete?: Prisma.DeductionTypeWhereUniqueInput | Prisma.DeductionTypeWhereUniqueInput[];
    connect?: Prisma.DeductionTypeWhereUniqueInput | Prisma.DeductionTypeWhereUniqueInput[];
    update?: Prisma.DeductionTypeUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.DeductionTypeUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.DeductionTypeUpdateManyWithWhereWithoutOrganizationInput | Prisma.DeductionTypeUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.DeductionTypeScalarWhereInput | Prisma.DeductionTypeScalarWhereInput[];
};
export type EnumDeductionValueTypeFieldUpdateOperationsInput = {
    set?: $Enums.DeductionValueType;
};
export type DeductionTypeCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    type?: $Enums.DeductionValueType;
    defaultValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPreTax?: boolean;
    createdAt?: Date | string;
};
export type DeductionTypeUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    type?: $Enums.DeductionValueType;
    defaultValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPreTax?: boolean;
    createdAt?: Date | string;
};
export type DeductionTypeCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.DeductionTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.DeductionTypeCreateWithoutOrganizationInput, Prisma.DeductionTypeUncheckedCreateWithoutOrganizationInput>;
};
export type DeductionTypeCreateManyOrganizationInputEnvelope = {
    data: Prisma.DeductionTypeCreateManyOrganizationInput | Prisma.DeductionTypeCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type DeductionTypeUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.DeductionTypeWhereUniqueInput;
    update: Prisma.XOR<Prisma.DeductionTypeUpdateWithoutOrganizationInput, Prisma.DeductionTypeUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.DeductionTypeCreateWithoutOrganizationInput, Prisma.DeductionTypeUncheckedCreateWithoutOrganizationInput>;
};
export type DeductionTypeUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.DeductionTypeWhereUniqueInput;
    data: Prisma.XOR<Prisma.DeductionTypeUpdateWithoutOrganizationInput, Prisma.DeductionTypeUncheckedUpdateWithoutOrganizationInput>;
};
export type DeductionTypeUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.DeductionTypeScalarWhereInput;
    data: Prisma.XOR<Prisma.DeductionTypeUpdateManyMutationInput, Prisma.DeductionTypeUncheckedUpdateManyWithoutOrganizationInput>;
};
export type DeductionTypeScalarWhereInput = {
    AND?: Prisma.DeductionTypeScalarWhereInput | Prisma.DeductionTypeScalarWhereInput[];
    OR?: Prisma.DeductionTypeScalarWhereInput[];
    NOT?: Prisma.DeductionTypeScalarWhereInput | Prisma.DeductionTypeScalarWhereInput[];
    id?: Prisma.UuidFilter<"DeductionType"> | string;
    organizationId?: Prisma.UuidFilter<"DeductionType"> | string;
    name?: Prisma.StringFilter<"DeductionType"> | string;
    type?: Prisma.EnumDeductionValueTypeFilter<"DeductionType"> | $Enums.DeductionValueType;
    defaultValue?: Prisma.DecimalNullableFilter<"DeductionType"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPreTax?: Prisma.BoolFilter<"DeductionType"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"DeductionType"> | Date | string;
};
export type DeductionTypeCreateManyOrganizationInput = {
    id?: string;
    name: string;
    type?: $Enums.DeductionValueType;
    defaultValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPreTax?: boolean;
    createdAt?: Date | string;
};
export type DeductionTypeUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumDeductionValueTypeFieldUpdateOperationsInput | $Enums.DeductionValueType;
    defaultValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPreTax?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeductionTypeUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumDeductionValueTypeFieldUpdateOperationsInput | $Enums.DeductionValueType;
    defaultValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPreTax?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeductionTypeUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumDeductionValueTypeFieldUpdateOperationsInput | $Enums.DeductionValueType;
    defaultValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPreTax?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DeductionTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    type?: boolean;
    defaultValue?: boolean;
    isPreTax?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["deductionType"]>;
export type DeductionTypeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    type?: boolean;
    defaultValue?: boolean;
    isPreTax?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["deductionType"]>;
export type DeductionTypeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    type?: boolean;
    defaultValue?: boolean;
    isPreTax?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["deductionType"]>;
export type DeductionTypeSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    type?: boolean;
    defaultValue?: boolean;
    isPreTax?: boolean;
    createdAt?: boolean;
};
export type DeductionTypeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "name" | "type" | "defaultValue" | "isPreTax" | "createdAt", ExtArgs["result"]["deductionType"]>;
export type DeductionTypeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type DeductionTypeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type DeductionTypeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type $DeductionTypePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DeductionType";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        name: string;
        type: $Enums.DeductionValueType;
        defaultValue: runtime.Decimal | null;
        isPreTax: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["deductionType"]>;
    composites: {};
};
export type DeductionTypeGetPayload<S extends boolean | null | undefined | DeductionTypeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DeductionTypePayload, S>;
export type DeductionTypeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DeductionTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DeductionTypeCountAggregateInputType | true;
};
export interface DeductionTypeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DeductionType'];
        meta: {
            name: 'DeductionType';
        };
    };
    findUnique<T extends DeductionTypeFindUniqueArgs>(args: Prisma.SelectSubset<T, DeductionTypeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DeductionTypeClient<runtime.Types.Result.GetResult<Prisma.$DeductionTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DeductionTypeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DeductionTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DeductionTypeClient<runtime.Types.Result.GetResult<Prisma.$DeductionTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DeductionTypeFindFirstArgs>(args?: Prisma.SelectSubset<T, DeductionTypeFindFirstArgs<ExtArgs>>): Prisma.Prisma__DeductionTypeClient<runtime.Types.Result.GetResult<Prisma.$DeductionTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DeductionTypeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DeductionTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DeductionTypeClient<runtime.Types.Result.GetResult<Prisma.$DeductionTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DeductionTypeFindManyArgs>(args?: Prisma.SelectSubset<T, DeductionTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeductionTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DeductionTypeCreateArgs>(args: Prisma.SelectSubset<T, DeductionTypeCreateArgs<ExtArgs>>): Prisma.Prisma__DeductionTypeClient<runtime.Types.Result.GetResult<Prisma.$DeductionTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DeductionTypeCreateManyArgs>(args?: Prisma.SelectSubset<T, DeductionTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DeductionTypeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DeductionTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeductionTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DeductionTypeDeleteArgs>(args: Prisma.SelectSubset<T, DeductionTypeDeleteArgs<ExtArgs>>): Prisma.Prisma__DeductionTypeClient<runtime.Types.Result.GetResult<Prisma.$DeductionTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DeductionTypeUpdateArgs>(args: Prisma.SelectSubset<T, DeductionTypeUpdateArgs<ExtArgs>>): Prisma.Prisma__DeductionTypeClient<runtime.Types.Result.GetResult<Prisma.$DeductionTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DeductionTypeDeleteManyArgs>(args?: Prisma.SelectSubset<T, DeductionTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DeductionTypeUpdateManyArgs>(args: Prisma.SelectSubset<T, DeductionTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DeductionTypeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DeductionTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DeductionTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DeductionTypeUpsertArgs>(args: Prisma.SelectSubset<T, DeductionTypeUpsertArgs<ExtArgs>>): Prisma.Prisma__DeductionTypeClient<runtime.Types.Result.GetResult<Prisma.$DeductionTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DeductionTypeCountArgs>(args?: Prisma.Subset<T, DeductionTypeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DeductionTypeCountAggregateOutputType> : number>;
    aggregate<T extends DeductionTypeAggregateArgs>(args: Prisma.Subset<T, DeductionTypeAggregateArgs>): Prisma.PrismaPromise<GetDeductionTypeAggregateType<T>>;
    groupBy<T extends DeductionTypeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DeductionTypeGroupByArgs['orderBy'];
    } : {
        orderBy?: DeductionTypeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DeductionTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeductionTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DeductionTypeFieldRefs;
}
export interface Prisma__DeductionTypeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DeductionTypeFieldRefs {
    readonly id: Prisma.FieldRef<"DeductionType", 'String'>;
    readonly organizationId: Prisma.FieldRef<"DeductionType", 'String'>;
    readonly name: Prisma.FieldRef<"DeductionType", 'String'>;
    readonly type: Prisma.FieldRef<"DeductionType", 'DeductionValueType'>;
    readonly defaultValue: Prisma.FieldRef<"DeductionType", 'Decimal'>;
    readonly isPreTax: Prisma.FieldRef<"DeductionType", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"DeductionType", 'DateTime'>;
}
export type DeductionTypeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeductionTypeSelect<ExtArgs> | null;
    omit?: Prisma.DeductionTypeOmit<ExtArgs> | null;
    include?: Prisma.DeductionTypeInclude<ExtArgs> | null;
    where: Prisma.DeductionTypeWhereUniqueInput;
};
export type DeductionTypeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeductionTypeSelect<ExtArgs> | null;
    omit?: Prisma.DeductionTypeOmit<ExtArgs> | null;
    include?: Prisma.DeductionTypeInclude<ExtArgs> | null;
    where: Prisma.DeductionTypeWhereUniqueInput;
};
export type DeductionTypeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeductionTypeSelect<ExtArgs> | null;
    omit?: Prisma.DeductionTypeOmit<ExtArgs> | null;
    include?: Prisma.DeductionTypeInclude<ExtArgs> | null;
    where?: Prisma.DeductionTypeWhereInput;
    orderBy?: Prisma.DeductionTypeOrderByWithRelationInput | Prisma.DeductionTypeOrderByWithRelationInput[];
    cursor?: Prisma.DeductionTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DeductionTypeScalarFieldEnum | Prisma.DeductionTypeScalarFieldEnum[];
};
export type DeductionTypeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeductionTypeSelect<ExtArgs> | null;
    omit?: Prisma.DeductionTypeOmit<ExtArgs> | null;
    include?: Prisma.DeductionTypeInclude<ExtArgs> | null;
    where?: Prisma.DeductionTypeWhereInput;
    orderBy?: Prisma.DeductionTypeOrderByWithRelationInput | Prisma.DeductionTypeOrderByWithRelationInput[];
    cursor?: Prisma.DeductionTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DeductionTypeScalarFieldEnum | Prisma.DeductionTypeScalarFieldEnum[];
};
export type DeductionTypeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeductionTypeSelect<ExtArgs> | null;
    omit?: Prisma.DeductionTypeOmit<ExtArgs> | null;
    include?: Prisma.DeductionTypeInclude<ExtArgs> | null;
    where?: Prisma.DeductionTypeWhereInput;
    orderBy?: Prisma.DeductionTypeOrderByWithRelationInput | Prisma.DeductionTypeOrderByWithRelationInput[];
    cursor?: Prisma.DeductionTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DeductionTypeScalarFieldEnum | Prisma.DeductionTypeScalarFieldEnum[];
};
export type DeductionTypeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeductionTypeSelect<ExtArgs> | null;
    omit?: Prisma.DeductionTypeOmit<ExtArgs> | null;
    include?: Prisma.DeductionTypeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DeductionTypeCreateInput, Prisma.DeductionTypeUncheckedCreateInput>;
};
export type DeductionTypeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DeductionTypeCreateManyInput | Prisma.DeductionTypeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DeductionTypeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeductionTypeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DeductionTypeOmit<ExtArgs> | null;
    data: Prisma.DeductionTypeCreateManyInput | Prisma.DeductionTypeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DeductionTypeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DeductionTypeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeductionTypeSelect<ExtArgs> | null;
    omit?: Prisma.DeductionTypeOmit<ExtArgs> | null;
    include?: Prisma.DeductionTypeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DeductionTypeUpdateInput, Prisma.DeductionTypeUncheckedUpdateInput>;
    where: Prisma.DeductionTypeWhereUniqueInput;
};
export type DeductionTypeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DeductionTypeUpdateManyMutationInput, Prisma.DeductionTypeUncheckedUpdateManyInput>;
    where?: Prisma.DeductionTypeWhereInput;
    limit?: number;
};
export type DeductionTypeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeductionTypeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DeductionTypeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DeductionTypeUpdateManyMutationInput, Prisma.DeductionTypeUncheckedUpdateManyInput>;
    where?: Prisma.DeductionTypeWhereInput;
    limit?: number;
    include?: Prisma.DeductionTypeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DeductionTypeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeductionTypeSelect<ExtArgs> | null;
    omit?: Prisma.DeductionTypeOmit<ExtArgs> | null;
    include?: Prisma.DeductionTypeInclude<ExtArgs> | null;
    where: Prisma.DeductionTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.DeductionTypeCreateInput, Prisma.DeductionTypeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DeductionTypeUpdateInput, Prisma.DeductionTypeUncheckedUpdateInput>;
};
export type DeductionTypeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeductionTypeSelect<ExtArgs> | null;
    omit?: Prisma.DeductionTypeOmit<ExtArgs> | null;
    include?: Prisma.DeductionTypeInclude<ExtArgs> | null;
    where: Prisma.DeductionTypeWhereUniqueInput;
};
export type DeductionTypeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DeductionTypeWhereInput;
    limit?: number;
};
export type DeductionTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DeductionTypeSelect<ExtArgs> | null;
    omit?: Prisma.DeductionTypeOmit<ExtArgs> | null;
    include?: Prisma.DeductionTypeInclude<ExtArgs> | null;
};
