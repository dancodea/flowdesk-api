import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TaxSettingsModel = runtime.Types.Result.DefaultSelection<Prisma.$TaxSettingsPayload>;
export type AggregateTaxSettings = {
    _count: TaxSettingsCountAggregateOutputType | null;
    _avg: TaxSettingsAvgAggregateOutputType | null;
    _sum: TaxSettingsSumAggregateOutputType | null;
    _min: TaxSettingsMinAggregateOutputType | null;
    _max: TaxSettingsMaxAggregateOutputType | null;
};
export type TaxSettingsAvgAggregateOutputType = {
    pensionRate: runtime.Decimal | null;
    employerPensionRate: runtime.Decimal | null;
    nationalInsuranceRate: runtime.Decimal | null;
};
export type TaxSettingsSumAggregateOutputType = {
    pensionRate: runtime.Decimal | null;
    employerPensionRate: runtime.Decimal | null;
    nationalInsuranceRate: runtime.Decimal | null;
};
export type TaxSettingsMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    country: string | null;
    pensionRate: runtime.Decimal | null;
    employerPensionRate: runtime.Decimal | null;
    nationalInsuranceRate: runtime.Decimal | null;
    updatedAt: Date | null;
};
export type TaxSettingsMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    country: string | null;
    pensionRate: runtime.Decimal | null;
    employerPensionRate: runtime.Decimal | null;
    nationalInsuranceRate: runtime.Decimal | null;
    updatedAt: Date | null;
};
export type TaxSettingsCountAggregateOutputType = {
    id: number;
    organizationId: number;
    country: number;
    brackets: number;
    pensionRate: number;
    employerPensionRate: number;
    nationalInsuranceRate: number;
    updatedAt: number;
    _all: number;
};
export type TaxSettingsAvgAggregateInputType = {
    pensionRate?: true;
    employerPensionRate?: true;
    nationalInsuranceRate?: true;
};
export type TaxSettingsSumAggregateInputType = {
    pensionRate?: true;
    employerPensionRate?: true;
    nationalInsuranceRate?: true;
};
export type TaxSettingsMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    country?: true;
    pensionRate?: true;
    employerPensionRate?: true;
    nationalInsuranceRate?: true;
    updatedAt?: true;
};
export type TaxSettingsMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    country?: true;
    pensionRate?: true;
    employerPensionRate?: true;
    nationalInsuranceRate?: true;
    updatedAt?: true;
};
export type TaxSettingsCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    country?: true;
    brackets?: true;
    pensionRate?: true;
    employerPensionRate?: true;
    nationalInsuranceRate?: true;
    updatedAt?: true;
    _all?: true;
};
export type TaxSettingsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaxSettingsWhereInput;
    orderBy?: Prisma.TaxSettingsOrderByWithRelationInput | Prisma.TaxSettingsOrderByWithRelationInput[];
    cursor?: Prisma.TaxSettingsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TaxSettingsCountAggregateInputType;
    _avg?: TaxSettingsAvgAggregateInputType;
    _sum?: TaxSettingsSumAggregateInputType;
    _min?: TaxSettingsMinAggregateInputType;
    _max?: TaxSettingsMaxAggregateInputType;
};
export type GetTaxSettingsAggregateType<T extends TaxSettingsAggregateArgs> = {
    [P in keyof T & keyof AggregateTaxSettings]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTaxSettings[P]> : Prisma.GetScalarType<T[P], AggregateTaxSettings[P]>;
};
export type TaxSettingsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaxSettingsWhereInput;
    orderBy?: Prisma.TaxSettingsOrderByWithAggregationInput | Prisma.TaxSettingsOrderByWithAggregationInput[];
    by: Prisma.TaxSettingsScalarFieldEnum[] | Prisma.TaxSettingsScalarFieldEnum;
    having?: Prisma.TaxSettingsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TaxSettingsCountAggregateInputType | true;
    _avg?: TaxSettingsAvgAggregateInputType;
    _sum?: TaxSettingsSumAggregateInputType;
    _min?: TaxSettingsMinAggregateInputType;
    _max?: TaxSettingsMaxAggregateInputType;
};
export type TaxSettingsGroupByOutputType = {
    id: string;
    organizationId: string;
    country: string;
    brackets: runtime.JsonValue | null;
    pensionRate: runtime.Decimal | null;
    employerPensionRate: runtime.Decimal | null;
    nationalInsuranceRate: runtime.Decimal | null;
    updatedAt: Date;
    _count: TaxSettingsCountAggregateOutputType | null;
    _avg: TaxSettingsAvgAggregateOutputType | null;
    _sum: TaxSettingsSumAggregateOutputType | null;
    _min: TaxSettingsMinAggregateOutputType | null;
    _max: TaxSettingsMaxAggregateOutputType | null;
};
export type GetTaxSettingsGroupByPayload<T extends TaxSettingsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TaxSettingsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TaxSettingsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TaxSettingsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TaxSettingsGroupByOutputType[P]>;
}>>;
export type TaxSettingsWhereInput = {
    AND?: Prisma.TaxSettingsWhereInput | Prisma.TaxSettingsWhereInput[];
    OR?: Prisma.TaxSettingsWhereInput[];
    NOT?: Prisma.TaxSettingsWhereInput | Prisma.TaxSettingsWhereInput[];
    id?: Prisma.UuidFilter<"TaxSettings"> | string;
    organizationId?: Prisma.UuidFilter<"TaxSettings"> | string;
    country?: Prisma.StringFilter<"TaxSettings"> | string;
    brackets?: Prisma.JsonNullableFilter<"TaxSettings">;
    pensionRate?: Prisma.DecimalNullableFilter<"TaxSettings"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    employerPensionRate?: Prisma.DecimalNullableFilter<"TaxSettings"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    nationalInsuranceRate?: Prisma.DecimalNullableFilter<"TaxSettings"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updatedAt?: Prisma.DateTimeFilter<"TaxSettings"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
};
export type TaxSettingsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    brackets?: Prisma.SortOrderInput | Prisma.SortOrder;
    pensionRate?: Prisma.SortOrderInput | Prisma.SortOrder;
    employerPensionRate?: Prisma.SortOrderInput | Prisma.SortOrder;
    nationalInsuranceRate?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
};
export type TaxSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    organizationId?: string;
    AND?: Prisma.TaxSettingsWhereInput | Prisma.TaxSettingsWhereInput[];
    OR?: Prisma.TaxSettingsWhereInput[];
    NOT?: Prisma.TaxSettingsWhereInput | Prisma.TaxSettingsWhereInput[];
    country?: Prisma.StringFilter<"TaxSettings"> | string;
    brackets?: Prisma.JsonNullableFilter<"TaxSettings">;
    pensionRate?: Prisma.DecimalNullableFilter<"TaxSettings"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    employerPensionRate?: Prisma.DecimalNullableFilter<"TaxSettings"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    nationalInsuranceRate?: Prisma.DecimalNullableFilter<"TaxSettings"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updatedAt?: Prisma.DateTimeFilter<"TaxSettings"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
}, "id" | "organizationId">;
export type TaxSettingsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    brackets?: Prisma.SortOrderInput | Prisma.SortOrder;
    pensionRate?: Prisma.SortOrderInput | Prisma.SortOrder;
    employerPensionRate?: Prisma.SortOrderInput | Prisma.SortOrder;
    nationalInsuranceRate?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TaxSettingsCountOrderByAggregateInput;
    _avg?: Prisma.TaxSettingsAvgOrderByAggregateInput;
    _max?: Prisma.TaxSettingsMaxOrderByAggregateInput;
    _min?: Prisma.TaxSettingsMinOrderByAggregateInput;
    _sum?: Prisma.TaxSettingsSumOrderByAggregateInput;
};
export type TaxSettingsScalarWhereWithAggregatesInput = {
    AND?: Prisma.TaxSettingsScalarWhereWithAggregatesInput | Prisma.TaxSettingsScalarWhereWithAggregatesInput[];
    OR?: Prisma.TaxSettingsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TaxSettingsScalarWhereWithAggregatesInput | Prisma.TaxSettingsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"TaxSettings"> | string;
    organizationId?: Prisma.UuidWithAggregatesFilter<"TaxSettings"> | string;
    country?: Prisma.StringWithAggregatesFilter<"TaxSettings"> | string;
    brackets?: Prisma.JsonNullableWithAggregatesFilter<"TaxSettings">;
    pensionRate?: Prisma.DecimalNullableWithAggregatesFilter<"TaxSettings"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    employerPensionRate?: Prisma.DecimalNullableWithAggregatesFilter<"TaxSettings"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    nationalInsuranceRate?: Prisma.DecimalNullableWithAggregatesFilter<"TaxSettings"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"TaxSettings"> | Date | string;
};
export type TaxSettingsCreateInput = {
    id?: string;
    country: string;
    brackets?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pensionRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    employerPensionRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    nationalInsuranceRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutTaxSettingsInput;
};
export type TaxSettingsUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    country: string;
    brackets?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pensionRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    employerPensionRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    nationalInsuranceRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updatedAt?: Date | string;
};
export type TaxSettingsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    brackets?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pensionRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    employerPensionRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    nationalInsuranceRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutTaxSettingsNestedInput;
};
export type TaxSettingsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    brackets?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pensionRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    employerPensionRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    nationalInsuranceRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaxSettingsCreateManyInput = {
    id?: string;
    organizationId: string;
    country: string;
    brackets?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pensionRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    employerPensionRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    nationalInsuranceRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updatedAt?: Date | string;
};
export type TaxSettingsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    brackets?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pensionRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    employerPensionRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    nationalInsuranceRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaxSettingsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    brackets?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pensionRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    employerPensionRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    nationalInsuranceRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaxSettingsNullableScalarRelationFilter = {
    is?: Prisma.TaxSettingsWhereInput | null;
    isNot?: Prisma.TaxSettingsWhereInput | null;
};
export type TaxSettingsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    brackets?: Prisma.SortOrder;
    pensionRate?: Prisma.SortOrder;
    employerPensionRate?: Prisma.SortOrder;
    nationalInsuranceRate?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TaxSettingsAvgOrderByAggregateInput = {
    pensionRate?: Prisma.SortOrder;
    employerPensionRate?: Prisma.SortOrder;
    nationalInsuranceRate?: Prisma.SortOrder;
};
export type TaxSettingsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    pensionRate?: Prisma.SortOrder;
    employerPensionRate?: Prisma.SortOrder;
    nationalInsuranceRate?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TaxSettingsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    pensionRate?: Prisma.SortOrder;
    employerPensionRate?: Prisma.SortOrder;
    nationalInsuranceRate?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TaxSettingsSumOrderByAggregateInput = {
    pensionRate?: Prisma.SortOrder;
    employerPensionRate?: Prisma.SortOrder;
    nationalInsuranceRate?: Prisma.SortOrder;
};
export type TaxSettingsCreateNestedOneWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.TaxSettingsCreateWithoutOrganizationInput, Prisma.TaxSettingsUncheckedCreateWithoutOrganizationInput>;
    connectOrCreate?: Prisma.TaxSettingsCreateOrConnectWithoutOrganizationInput;
    connect?: Prisma.TaxSettingsWhereUniqueInput;
};
export type TaxSettingsUncheckedCreateNestedOneWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.TaxSettingsCreateWithoutOrganizationInput, Prisma.TaxSettingsUncheckedCreateWithoutOrganizationInput>;
    connectOrCreate?: Prisma.TaxSettingsCreateOrConnectWithoutOrganizationInput;
    connect?: Prisma.TaxSettingsWhereUniqueInput;
};
export type TaxSettingsUpdateOneWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.TaxSettingsCreateWithoutOrganizationInput, Prisma.TaxSettingsUncheckedCreateWithoutOrganizationInput>;
    connectOrCreate?: Prisma.TaxSettingsCreateOrConnectWithoutOrganizationInput;
    upsert?: Prisma.TaxSettingsUpsertWithoutOrganizationInput;
    disconnect?: Prisma.TaxSettingsWhereInput | boolean;
    delete?: Prisma.TaxSettingsWhereInput | boolean;
    connect?: Prisma.TaxSettingsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TaxSettingsUpdateToOneWithWhereWithoutOrganizationInput, Prisma.TaxSettingsUpdateWithoutOrganizationInput>, Prisma.TaxSettingsUncheckedUpdateWithoutOrganizationInput>;
};
export type TaxSettingsUncheckedUpdateOneWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.TaxSettingsCreateWithoutOrganizationInput, Prisma.TaxSettingsUncheckedCreateWithoutOrganizationInput>;
    connectOrCreate?: Prisma.TaxSettingsCreateOrConnectWithoutOrganizationInput;
    upsert?: Prisma.TaxSettingsUpsertWithoutOrganizationInput;
    disconnect?: Prisma.TaxSettingsWhereInput | boolean;
    delete?: Prisma.TaxSettingsWhereInput | boolean;
    connect?: Prisma.TaxSettingsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TaxSettingsUpdateToOneWithWhereWithoutOrganizationInput, Prisma.TaxSettingsUpdateWithoutOrganizationInput>, Prisma.TaxSettingsUncheckedUpdateWithoutOrganizationInput>;
};
export type TaxSettingsCreateWithoutOrganizationInput = {
    id?: string;
    country: string;
    brackets?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pensionRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    employerPensionRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    nationalInsuranceRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updatedAt?: Date | string;
};
export type TaxSettingsUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    country: string;
    brackets?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pensionRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    employerPensionRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    nationalInsuranceRate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updatedAt?: Date | string;
};
export type TaxSettingsCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.TaxSettingsWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaxSettingsCreateWithoutOrganizationInput, Prisma.TaxSettingsUncheckedCreateWithoutOrganizationInput>;
};
export type TaxSettingsUpsertWithoutOrganizationInput = {
    update: Prisma.XOR<Prisma.TaxSettingsUpdateWithoutOrganizationInput, Prisma.TaxSettingsUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.TaxSettingsCreateWithoutOrganizationInput, Prisma.TaxSettingsUncheckedCreateWithoutOrganizationInput>;
    where?: Prisma.TaxSettingsWhereInput;
};
export type TaxSettingsUpdateToOneWithWhereWithoutOrganizationInput = {
    where?: Prisma.TaxSettingsWhereInput;
    data: Prisma.XOR<Prisma.TaxSettingsUpdateWithoutOrganizationInput, Prisma.TaxSettingsUncheckedUpdateWithoutOrganizationInput>;
};
export type TaxSettingsUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    brackets?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pensionRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    employerPensionRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    nationalInsuranceRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaxSettingsUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    brackets?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    pensionRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    employerPensionRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    nationalInsuranceRate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaxSettingsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    country?: boolean;
    brackets?: boolean;
    pensionRate?: boolean;
    employerPensionRate?: boolean;
    nationalInsuranceRate?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["taxSettings"]>;
export type TaxSettingsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    country?: boolean;
    brackets?: boolean;
    pensionRate?: boolean;
    employerPensionRate?: boolean;
    nationalInsuranceRate?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["taxSettings"]>;
export type TaxSettingsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    country?: boolean;
    brackets?: boolean;
    pensionRate?: boolean;
    employerPensionRate?: boolean;
    nationalInsuranceRate?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["taxSettings"]>;
export type TaxSettingsSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    country?: boolean;
    brackets?: boolean;
    pensionRate?: boolean;
    employerPensionRate?: boolean;
    nationalInsuranceRate?: boolean;
    updatedAt?: boolean;
};
export type TaxSettingsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "country" | "brackets" | "pensionRate" | "employerPensionRate" | "nationalInsuranceRate" | "updatedAt", ExtArgs["result"]["taxSettings"]>;
export type TaxSettingsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type TaxSettingsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type TaxSettingsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type $TaxSettingsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TaxSettings";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        country: string;
        brackets: runtime.JsonValue | null;
        pensionRate: runtime.Decimal | null;
        employerPensionRate: runtime.Decimal | null;
        nationalInsuranceRate: runtime.Decimal | null;
        updatedAt: Date;
    }, ExtArgs["result"]["taxSettings"]>;
    composites: {};
};
export type TaxSettingsGetPayload<S extends boolean | null | undefined | TaxSettingsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TaxSettingsPayload, S>;
export type TaxSettingsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TaxSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TaxSettingsCountAggregateInputType | true;
};
export interface TaxSettingsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TaxSettings'];
        meta: {
            name: 'TaxSettings';
        };
    };
    findUnique<T extends TaxSettingsFindUniqueArgs>(args: Prisma.SelectSubset<T, TaxSettingsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TaxSettingsClient<runtime.Types.Result.GetResult<Prisma.$TaxSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TaxSettingsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TaxSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaxSettingsClient<runtime.Types.Result.GetResult<Prisma.$TaxSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TaxSettingsFindFirstArgs>(args?: Prisma.SelectSubset<T, TaxSettingsFindFirstArgs<ExtArgs>>): Prisma.Prisma__TaxSettingsClient<runtime.Types.Result.GetResult<Prisma.$TaxSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TaxSettingsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TaxSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaxSettingsClient<runtime.Types.Result.GetResult<Prisma.$TaxSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TaxSettingsFindManyArgs>(args?: Prisma.SelectSubset<T, TaxSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaxSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TaxSettingsCreateArgs>(args: Prisma.SelectSubset<T, TaxSettingsCreateArgs<ExtArgs>>): Prisma.Prisma__TaxSettingsClient<runtime.Types.Result.GetResult<Prisma.$TaxSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TaxSettingsCreateManyArgs>(args?: Prisma.SelectSubset<T, TaxSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TaxSettingsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TaxSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaxSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TaxSettingsDeleteArgs>(args: Prisma.SelectSubset<T, TaxSettingsDeleteArgs<ExtArgs>>): Prisma.Prisma__TaxSettingsClient<runtime.Types.Result.GetResult<Prisma.$TaxSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TaxSettingsUpdateArgs>(args: Prisma.SelectSubset<T, TaxSettingsUpdateArgs<ExtArgs>>): Prisma.Prisma__TaxSettingsClient<runtime.Types.Result.GetResult<Prisma.$TaxSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TaxSettingsDeleteManyArgs>(args?: Prisma.SelectSubset<T, TaxSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TaxSettingsUpdateManyArgs>(args: Prisma.SelectSubset<T, TaxSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TaxSettingsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TaxSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaxSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TaxSettingsUpsertArgs>(args: Prisma.SelectSubset<T, TaxSettingsUpsertArgs<ExtArgs>>): Prisma.Prisma__TaxSettingsClient<runtime.Types.Result.GetResult<Prisma.$TaxSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TaxSettingsCountArgs>(args?: Prisma.Subset<T, TaxSettingsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TaxSettingsCountAggregateOutputType> : number>;
    aggregate<T extends TaxSettingsAggregateArgs>(args: Prisma.Subset<T, TaxSettingsAggregateArgs>): Prisma.PrismaPromise<GetTaxSettingsAggregateType<T>>;
    groupBy<T extends TaxSettingsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TaxSettingsGroupByArgs['orderBy'];
    } : {
        orderBy?: TaxSettingsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TaxSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaxSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TaxSettingsFieldRefs;
}
export interface Prisma__TaxSettingsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TaxSettingsFieldRefs {
    readonly id: Prisma.FieldRef<"TaxSettings", 'String'>;
    readonly organizationId: Prisma.FieldRef<"TaxSettings", 'String'>;
    readonly country: Prisma.FieldRef<"TaxSettings", 'String'>;
    readonly brackets: Prisma.FieldRef<"TaxSettings", 'Json'>;
    readonly pensionRate: Prisma.FieldRef<"TaxSettings", 'Decimal'>;
    readonly employerPensionRate: Prisma.FieldRef<"TaxSettings", 'Decimal'>;
    readonly nationalInsuranceRate: Prisma.FieldRef<"TaxSettings", 'Decimal'>;
    readonly updatedAt: Prisma.FieldRef<"TaxSettings", 'DateTime'>;
}
export type TaxSettingsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxSettingsSelect<ExtArgs> | null;
    omit?: Prisma.TaxSettingsOmit<ExtArgs> | null;
    include?: Prisma.TaxSettingsInclude<ExtArgs> | null;
    where: Prisma.TaxSettingsWhereUniqueInput;
};
export type TaxSettingsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxSettingsSelect<ExtArgs> | null;
    omit?: Prisma.TaxSettingsOmit<ExtArgs> | null;
    include?: Prisma.TaxSettingsInclude<ExtArgs> | null;
    where: Prisma.TaxSettingsWhereUniqueInput;
};
export type TaxSettingsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxSettingsSelect<ExtArgs> | null;
    omit?: Prisma.TaxSettingsOmit<ExtArgs> | null;
    include?: Prisma.TaxSettingsInclude<ExtArgs> | null;
    where?: Prisma.TaxSettingsWhereInput;
    orderBy?: Prisma.TaxSettingsOrderByWithRelationInput | Prisma.TaxSettingsOrderByWithRelationInput[];
    cursor?: Prisma.TaxSettingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaxSettingsScalarFieldEnum | Prisma.TaxSettingsScalarFieldEnum[];
};
export type TaxSettingsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxSettingsSelect<ExtArgs> | null;
    omit?: Prisma.TaxSettingsOmit<ExtArgs> | null;
    include?: Prisma.TaxSettingsInclude<ExtArgs> | null;
    where?: Prisma.TaxSettingsWhereInput;
    orderBy?: Prisma.TaxSettingsOrderByWithRelationInput | Prisma.TaxSettingsOrderByWithRelationInput[];
    cursor?: Prisma.TaxSettingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaxSettingsScalarFieldEnum | Prisma.TaxSettingsScalarFieldEnum[];
};
export type TaxSettingsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxSettingsSelect<ExtArgs> | null;
    omit?: Prisma.TaxSettingsOmit<ExtArgs> | null;
    include?: Prisma.TaxSettingsInclude<ExtArgs> | null;
    where?: Prisma.TaxSettingsWhereInput;
    orderBy?: Prisma.TaxSettingsOrderByWithRelationInput | Prisma.TaxSettingsOrderByWithRelationInput[];
    cursor?: Prisma.TaxSettingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaxSettingsScalarFieldEnum | Prisma.TaxSettingsScalarFieldEnum[];
};
export type TaxSettingsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxSettingsSelect<ExtArgs> | null;
    omit?: Prisma.TaxSettingsOmit<ExtArgs> | null;
    include?: Prisma.TaxSettingsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaxSettingsCreateInput, Prisma.TaxSettingsUncheckedCreateInput>;
};
export type TaxSettingsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TaxSettingsCreateManyInput | Prisma.TaxSettingsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TaxSettingsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxSettingsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaxSettingsOmit<ExtArgs> | null;
    data: Prisma.TaxSettingsCreateManyInput | Prisma.TaxSettingsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TaxSettingsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TaxSettingsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxSettingsSelect<ExtArgs> | null;
    omit?: Prisma.TaxSettingsOmit<ExtArgs> | null;
    include?: Prisma.TaxSettingsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaxSettingsUpdateInput, Prisma.TaxSettingsUncheckedUpdateInput>;
    where: Prisma.TaxSettingsWhereUniqueInput;
};
export type TaxSettingsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TaxSettingsUpdateManyMutationInput, Prisma.TaxSettingsUncheckedUpdateManyInput>;
    where?: Prisma.TaxSettingsWhereInput;
    limit?: number;
};
export type TaxSettingsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxSettingsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaxSettingsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaxSettingsUpdateManyMutationInput, Prisma.TaxSettingsUncheckedUpdateManyInput>;
    where?: Prisma.TaxSettingsWhereInput;
    limit?: number;
    include?: Prisma.TaxSettingsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TaxSettingsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxSettingsSelect<ExtArgs> | null;
    omit?: Prisma.TaxSettingsOmit<ExtArgs> | null;
    include?: Prisma.TaxSettingsInclude<ExtArgs> | null;
    where: Prisma.TaxSettingsWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaxSettingsCreateInput, Prisma.TaxSettingsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TaxSettingsUpdateInput, Prisma.TaxSettingsUncheckedUpdateInput>;
};
export type TaxSettingsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxSettingsSelect<ExtArgs> | null;
    omit?: Prisma.TaxSettingsOmit<ExtArgs> | null;
    include?: Prisma.TaxSettingsInclude<ExtArgs> | null;
    where: Prisma.TaxSettingsWhereUniqueInput;
};
export type TaxSettingsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaxSettingsWhereInput;
    limit?: number;
};
export type TaxSettingsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaxSettingsSelect<ExtArgs> | null;
    omit?: Prisma.TaxSettingsOmit<ExtArgs> | null;
    include?: Prisma.TaxSettingsInclude<ExtArgs> | null;
};
