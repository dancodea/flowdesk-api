import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AssetMaintenanceModel = runtime.Types.Result.DefaultSelection<Prisma.$AssetMaintenancePayload>;
export type AggregateAssetMaintenance = {
    _count: AssetMaintenanceCountAggregateOutputType | null;
    _avg: AssetMaintenanceAvgAggregateOutputType | null;
    _sum: AssetMaintenanceSumAggregateOutputType | null;
    _min: AssetMaintenanceMinAggregateOutputType | null;
    _max: AssetMaintenanceMaxAggregateOutputType | null;
};
export type AssetMaintenanceAvgAggregateOutputType = {
    cost: runtime.Decimal | null;
};
export type AssetMaintenanceSumAggregateOutputType = {
    cost: runtime.Decimal | null;
};
export type AssetMaintenanceMinAggregateOutputType = {
    id: string | null;
    assetId: string | null;
    description: string | null;
    cost: runtime.Decimal | null;
    date: Date | null;
    performedBy: string | null;
    createdAt: Date | null;
};
export type AssetMaintenanceMaxAggregateOutputType = {
    id: string | null;
    assetId: string | null;
    description: string | null;
    cost: runtime.Decimal | null;
    date: Date | null;
    performedBy: string | null;
    createdAt: Date | null;
};
export type AssetMaintenanceCountAggregateOutputType = {
    id: number;
    assetId: number;
    description: number;
    cost: number;
    date: number;
    performedBy: number;
    createdAt: number;
    _all: number;
};
export type AssetMaintenanceAvgAggregateInputType = {
    cost?: true;
};
export type AssetMaintenanceSumAggregateInputType = {
    cost?: true;
};
export type AssetMaintenanceMinAggregateInputType = {
    id?: true;
    assetId?: true;
    description?: true;
    cost?: true;
    date?: true;
    performedBy?: true;
    createdAt?: true;
};
export type AssetMaintenanceMaxAggregateInputType = {
    id?: true;
    assetId?: true;
    description?: true;
    cost?: true;
    date?: true;
    performedBy?: true;
    createdAt?: true;
};
export type AssetMaintenanceCountAggregateInputType = {
    id?: true;
    assetId?: true;
    description?: true;
    cost?: true;
    date?: true;
    performedBy?: true;
    createdAt?: true;
    _all?: true;
};
export type AssetMaintenanceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetMaintenanceWhereInput;
    orderBy?: Prisma.AssetMaintenanceOrderByWithRelationInput | Prisma.AssetMaintenanceOrderByWithRelationInput[];
    cursor?: Prisma.AssetMaintenanceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AssetMaintenanceCountAggregateInputType;
    _avg?: AssetMaintenanceAvgAggregateInputType;
    _sum?: AssetMaintenanceSumAggregateInputType;
    _min?: AssetMaintenanceMinAggregateInputType;
    _max?: AssetMaintenanceMaxAggregateInputType;
};
export type GetAssetMaintenanceAggregateType<T extends AssetMaintenanceAggregateArgs> = {
    [P in keyof T & keyof AggregateAssetMaintenance]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAssetMaintenance[P]> : Prisma.GetScalarType<T[P], AggregateAssetMaintenance[P]>;
};
export type AssetMaintenanceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetMaintenanceWhereInput;
    orderBy?: Prisma.AssetMaintenanceOrderByWithAggregationInput | Prisma.AssetMaintenanceOrderByWithAggregationInput[];
    by: Prisma.AssetMaintenanceScalarFieldEnum[] | Prisma.AssetMaintenanceScalarFieldEnum;
    having?: Prisma.AssetMaintenanceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AssetMaintenanceCountAggregateInputType | true;
    _avg?: AssetMaintenanceAvgAggregateInputType;
    _sum?: AssetMaintenanceSumAggregateInputType;
    _min?: AssetMaintenanceMinAggregateInputType;
    _max?: AssetMaintenanceMaxAggregateInputType;
};
export type AssetMaintenanceGroupByOutputType = {
    id: string;
    assetId: string;
    description: string;
    cost: runtime.Decimal | null;
    date: Date;
    performedBy: string | null;
    createdAt: Date;
    _count: AssetMaintenanceCountAggregateOutputType | null;
    _avg: AssetMaintenanceAvgAggregateOutputType | null;
    _sum: AssetMaintenanceSumAggregateOutputType | null;
    _min: AssetMaintenanceMinAggregateOutputType | null;
    _max: AssetMaintenanceMaxAggregateOutputType | null;
};
export type GetAssetMaintenanceGroupByPayload<T extends AssetMaintenanceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AssetMaintenanceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AssetMaintenanceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AssetMaintenanceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AssetMaintenanceGroupByOutputType[P]>;
}>>;
export type AssetMaintenanceWhereInput = {
    AND?: Prisma.AssetMaintenanceWhereInput | Prisma.AssetMaintenanceWhereInput[];
    OR?: Prisma.AssetMaintenanceWhereInput[];
    NOT?: Prisma.AssetMaintenanceWhereInput | Prisma.AssetMaintenanceWhereInput[];
    id?: Prisma.UuidFilter<"AssetMaintenance"> | string;
    assetId?: Prisma.UuidFilter<"AssetMaintenance"> | string;
    description?: Prisma.StringFilter<"AssetMaintenance"> | string;
    cost?: Prisma.DecimalNullableFilter<"AssetMaintenance"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    date?: Prisma.DateTimeFilter<"AssetMaintenance"> | Date | string;
    performedBy?: Prisma.UuidNullableFilter<"AssetMaintenance"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AssetMaintenance"> | Date | string;
    asset?: Prisma.XOR<Prisma.AssetScalarRelationFilter, Prisma.AssetWhereInput>;
};
export type AssetMaintenanceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    cost?: Prisma.SortOrderInput | Prisma.SortOrder;
    date?: Prisma.SortOrder;
    performedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    asset?: Prisma.AssetOrderByWithRelationInput;
};
export type AssetMaintenanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AssetMaintenanceWhereInput | Prisma.AssetMaintenanceWhereInput[];
    OR?: Prisma.AssetMaintenanceWhereInput[];
    NOT?: Prisma.AssetMaintenanceWhereInput | Prisma.AssetMaintenanceWhereInput[];
    assetId?: Prisma.UuidFilter<"AssetMaintenance"> | string;
    description?: Prisma.StringFilter<"AssetMaintenance"> | string;
    cost?: Prisma.DecimalNullableFilter<"AssetMaintenance"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    date?: Prisma.DateTimeFilter<"AssetMaintenance"> | Date | string;
    performedBy?: Prisma.UuidNullableFilter<"AssetMaintenance"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AssetMaintenance"> | Date | string;
    asset?: Prisma.XOR<Prisma.AssetScalarRelationFilter, Prisma.AssetWhereInput>;
}, "id">;
export type AssetMaintenanceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    cost?: Prisma.SortOrderInput | Prisma.SortOrder;
    date?: Prisma.SortOrder;
    performedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AssetMaintenanceCountOrderByAggregateInput;
    _avg?: Prisma.AssetMaintenanceAvgOrderByAggregateInput;
    _max?: Prisma.AssetMaintenanceMaxOrderByAggregateInput;
    _min?: Prisma.AssetMaintenanceMinOrderByAggregateInput;
    _sum?: Prisma.AssetMaintenanceSumOrderByAggregateInput;
};
export type AssetMaintenanceScalarWhereWithAggregatesInput = {
    AND?: Prisma.AssetMaintenanceScalarWhereWithAggregatesInput | Prisma.AssetMaintenanceScalarWhereWithAggregatesInput[];
    OR?: Prisma.AssetMaintenanceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AssetMaintenanceScalarWhereWithAggregatesInput | Prisma.AssetMaintenanceScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"AssetMaintenance"> | string;
    assetId?: Prisma.UuidWithAggregatesFilter<"AssetMaintenance"> | string;
    description?: Prisma.StringWithAggregatesFilter<"AssetMaintenance"> | string;
    cost?: Prisma.DecimalNullableWithAggregatesFilter<"AssetMaintenance"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    date?: Prisma.DateTimeWithAggregatesFilter<"AssetMaintenance"> | Date | string;
    performedBy?: Prisma.UuidNullableWithAggregatesFilter<"AssetMaintenance"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AssetMaintenance"> | Date | string;
};
export type AssetMaintenanceCreateInput = {
    id?: string;
    description: string;
    cost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    date: Date | string;
    performedBy?: string | null;
    createdAt?: Date | string;
    asset: Prisma.AssetCreateNestedOneWithoutMaintenanceInput;
};
export type AssetMaintenanceUncheckedCreateInput = {
    id?: string;
    assetId: string;
    description: string;
    cost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    date: Date | string;
    performedBy?: string | null;
    createdAt?: Date | string;
};
export type AssetMaintenanceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    cost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    performedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    asset?: Prisma.AssetUpdateOneRequiredWithoutMaintenanceNestedInput;
};
export type AssetMaintenanceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    cost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    performedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetMaintenanceCreateManyInput = {
    id?: string;
    assetId: string;
    description: string;
    cost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    date: Date | string;
    performedBy?: string | null;
    createdAt?: Date | string;
};
export type AssetMaintenanceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    cost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    performedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetMaintenanceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    cost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    performedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetMaintenanceListRelationFilter = {
    every?: Prisma.AssetMaintenanceWhereInput;
    some?: Prisma.AssetMaintenanceWhereInput;
    none?: Prisma.AssetMaintenanceWhereInput;
};
export type AssetMaintenanceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AssetMaintenanceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    cost?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    performedBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AssetMaintenanceAvgOrderByAggregateInput = {
    cost?: Prisma.SortOrder;
};
export type AssetMaintenanceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    cost?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    performedBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AssetMaintenanceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    cost?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    performedBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AssetMaintenanceSumOrderByAggregateInput = {
    cost?: Prisma.SortOrder;
};
export type AssetMaintenanceCreateNestedManyWithoutAssetInput = {
    create?: Prisma.XOR<Prisma.AssetMaintenanceCreateWithoutAssetInput, Prisma.AssetMaintenanceUncheckedCreateWithoutAssetInput> | Prisma.AssetMaintenanceCreateWithoutAssetInput[] | Prisma.AssetMaintenanceUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.AssetMaintenanceCreateOrConnectWithoutAssetInput | Prisma.AssetMaintenanceCreateOrConnectWithoutAssetInput[];
    createMany?: Prisma.AssetMaintenanceCreateManyAssetInputEnvelope;
    connect?: Prisma.AssetMaintenanceWhereUniqueInput | Prisma.AssetMaintenanceWhereUniqueInput[];
};
export type AssetMaintenanceUncheckedCreateNestedManyWithoutAssetInput = {
    create?: Prisma.XOR<Prisma.AssetMaintenanceCreateWithoutAssetInput, Prisma.AssetMaintenanceUncheckedCreateWithoutAssetInput> | Prisma.AssetMaintenanceCreateWithoutAssetInput[] | Prisma.AssetMaintenanceUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.AssetMaintenanceCreateOrConnectWithoutAssetInput | Prisma.AssetMaintenanceCreateOrConnectWithoutAssetInput[];
    createMany?: Prisma.AssetMaintenanceCreateManyAssetInputEnvelope;
    connect?: Prisma.AssetMaintenanceWhereUniqueInput | Prisma.AssetMaintenanceWhereUniqueInput[];
};
export type AssetMaintenanceUpdateManyWithoutAssetNestedInput = {
    create?: Prisma.XOR<Prisma.AssetMaintenanceCreateWithoutAssetInput, Prisma.AssetMaintenanceUncheckedCreateWithoutAssetInput> | Prisma.AssetMaintenanceCreateWithoutAssetInput[] | Prisma.AssetMaintenanceUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.AssetMaintenanceCreateOrConnectWithoutAssetInput | Prisma.AssetMaintenanceCreateOrConnectWithoutAssetInput[];
    upsert?: Prisma.AssetMaintenanceUpsertWithWhereUniqueWithoutAssetInput | Prisma.AssetMaintenanceUpsertWithWhereUniqueWithoutAssetInput[];
    createMany?: Prisma.AssetMaintenanceCreateManyAssetInputEnvelope;
    set?: Prisma.AssetMaintenanceWhereUniqueInput | Prisma.AssetMaintenanceWhereUniqueInput[];
    disconnect?: Prisma.AssetMaintenanceWhereUniqueInput | Prisma.AssetMaintenanceWhereUniqueInput[];
    delete?: Prisma.AssetMaintenanceWhereUniqueInput | Prisma.AssetMaintenanceWhereUniqueInput[];
    connect?: Prisma.AssetMaintenanceWhereUniqueInput | Prisma.AssetMaintenanceWhereUniqueInput[];
    update?: Prisma.AssetMaintenanceUpdateWithWhereUniqueWithoutAssetInput | Prisma.AssetMaintenanceUpdateWithWhereUniqueWithoutAssetInput[];
    updateMany?: Prisma.AssetMaintenanceUpdateManyWithWhereWithoutAssetInput | Prisma.AssetMaintenanceUpdateManyWithWhereWithoutAssetInput[];
    deleteMany?: Prisma.AssetMaintenanceScalarWhereInput | Prisma.AssetMaintenanceScalarWhereInput[];
};
export type AssetMaintenanceUncheckedUpdateManyWithoutAssetNestedInput = {
    create?: Prisma.XOR<Prisma.AssetMaintenanceCreateWithoutAssetInput, Prisma.AssetMaintenanceUncheckedCreateWithoutAssetInput> | Prisma.AssetMaintenanceCreateWithoutAssetInput[] | Prisma.AssetMaintenanceUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.AssetMaintenanceCreateOrConnectWithoutAssetInput | Prisma.AssetMaintenanceCreateOrConnectWithoutAssetInput[];
    upsert?: Prisma.AssetMaintenanceUpsertWithWhereUniqueWithoutAssetInput | Prisma.AssetMaintenanceUpsertWithWhereUniqueWithoutAssetInput[];
    createMany?: Prisma.AssetMaintenanceCreateManyAssetInputEnvelope;
    set?: Prisma.AssetMaintenanceWhereUniqueInput | Prisma.AssetMaintenanceWhereUniqueInput[];
    disconnect?: Prisma.AssetMaintenanceWhereUniqueInput | Prisma.AssetMaintenanceWhereUniqueInput[];
    delete?: Prisma.AssetMaintenanceWhereUniqueInput | Prisma.AssetMaintenanceWhereUniqueInput[];
    connect?: Prisma.AssetMaintenanceWhereUniqueInput | Prisma.AssetMaintenanceWhereUniqueInput[];
    update?: Prisma.AssetMaintenanceUpdateWithWhereUniqueWithoutAssetInput | Prisma.AssetMaintenanceUpdateWithWhereUniqueWithoutAssetInput[];
    updateMany?: Prisma.AssetMaintenanceUpdateManyWithWhereWithoutAssetInput | Prisma.AssetMaintenanceUpdateManyWithWhereWithoutAssetInput[];
    deleteMany?: Prisma.AssetMaintenanceScalarWhereInput | Prisma.AssetMaintenanceScalarWhereInput[];
};
export type AssetMaintenanceCreateWithoutAssetInput = {
    id?: string;
    description: string;
    cost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    date: Date | string;
    performedBy?: string | null;
    createdAt?: Date | string;
};
export type AssetMaintenanceUncheckedCreateWithoutAssetInput = {
    id?: string;
    description: string;
    cost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    date: Date | string;
    performedBy?: string | null;
    createdAt?: Date | string;
};
export type AssetMaintenanceCreateOrConnectWithoutAssetInput = {
    where: Prisma.AssetMaintenanceWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetMaintenanceCreateWithoutAssetInput, Prisma.AssetMaintenanceUncheckedCreateWithoutAssetInput>;
};
export type AssetMaintenanceCreateManyAssetInputEnvelope = {
    data: Prisma.AssetMaintenanceCreateManyAssetInput | Prisma.AssetMaintenanceCreateManyAssetInput[];
    skipDuplicates?: boolean;
};
export type AssetMaintenanceUpsertWithWhereUniqueWithoutAssetInput = {
    where: Prisma.AssetMaintenanceWhereUniqueInput;
    update: Prisma.XOR<Prisma.AssetMaintenanceUpdateWithoutAssetInput, Prisma.AssetMaintenanceUncheckedUpdateWithoutAssetInput>;
    create: Prisma.XOR<Prisma.AssetMaintenanceCreateWithoutAssetInput, Prisma.AssetMaintenanceUncheckedCreateWithoutAssetInput>;
};
export type AssetMaintenanceUpdateWithWhereUniqueWithoutAssetInput = {
    where: Prisma.AssetMaintenanceWhereUniqueInput;
    data: Prisma.XOR<Prisma.AssetMaintenanceUpdateWithoutAssetInput, Prisma.AssetMaintenanceUncheckedUpdateWithoutAssetInput>;
};
export type AssetMaintenanceUpdateManyWithWhereWithoutAssetInput = {
    where: Prisma.AssetMaintenanceScalarWhereInput;
    data: Prisma.XOR<Prisma.AssetMaintenanceUpdateManyMutationInput, Prisma.AssetMaintenanceUncheckedUpdateManyWithoutAssetInput>;
};
export type AssetMaintenanceScalarWhereInput = {
    AND?: Prisma.AssetMaintenanceScalarWhereInput | Prisma.AssetMaintenanceScalarWhereInput[];
    OR?: Prisma.AssetMaintenanceScalarWhereInput[];
    NOT?: Prisma.AssetMaintenanceScalarWhereInput | Prisma.AssetMaintenanceScalarWhereInput[];
    id?: Prisma.UuidFilter<"AssetMaintenance"> | string;
    assetId?: Prisma.UuidFilter<"AssetMaintenance"> | string;
    description?: Prisma.StringFilter<"AssetMaintenance"> | string;
    cost?: Prisma.DecimalNullableFilter<"AssetMaintenance"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    date?: Prisma.DateTimeFilter<"AssetMaintenance"> | Date | string;
    performedBy?: Prisma.UuidNullableFilter<"AssetMaintenance"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AssetMaintenance"> | Date | string;
};
export type AssetMaintenanceCreateManyAssetInput = {
    id?: string;
    description: string;
    cost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    date: Date | string;
    performedBy?: string | null;
    createdAt?: Date | string;
};
export type AssetMaintenanceUpdateWithoutAssetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    cost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    performedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetMaintenanceUncheckedUpdateWithoutAssetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    cost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    performedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetMaintenanceUncheckedUpdateManyWithoutAssetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    cost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    performedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetMaintenanceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    assetId?: boolean;
    description?: boolean;
    cost?: boolean;
    date?: boolean;
    performedBy?: boolean;
    createdAt?: boolean;
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["assetMaintenance"]>;
export type AssetMaintenanceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    assetId?: boolean;
    description?: boolean;
    cost?: boolean;
    date?: boolean;
    performedBy?: boolean;
    createdAt?: boolean;
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["assetMaintenance"]>;
export type AssetMaintenanceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    assetId?: boolean;
    description?: boolean;
    cost?: boolean;
    date?: boolean;
    performedBy?: boolean;
    createdAt?: boolean;
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["assetMaintenance"]>;
export type AssetMaintenanceSelectScalar = {
    id?: boolean;
    assetId?: boolean;
    description?: boolean;
    cost?: boolean;
    date?: boolean;
    performedBy?: boolean;
    createdAt?: boolean;
};
export type AssetMaintenanceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "assetId" | "description" | "cost" | "date" | "performedBy" | "createdAt", ExtArgs["result"]["assetMaintenance"]>;
export type AssetMaintenanceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
};
export type AssetMaintenanceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
};
export type AssetMaintenanceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
};
export type $AssetMaintenancePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AssetMaintenance";
    objects: {
        asset: Prisma.$AssetPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        assetId: string;
        description: string;
        cost: runtime.Decimal | null;
        date: Date;
        performedBy: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["assetMaintenance"]>;
    composites: {};
};
export type AssetMaintenanceGetPayload<S extends boolean | null | undefined | AssetMaintenanceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AssetMaintenancePayload, S>;
export type AssetMaintenanceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AssetMaintenanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AssetMaintenanceCountAggregateInputType | true;
};
export interface AssetMaintenanceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AssetMaintenance'];
        meta: {
            name: 'AssetMaintenance';
        };
    };
    findUnique<T extends AssetMaintenanceFindUniqueArgs>(args: Prisma.SelectSubset<T, AssetMaintenanceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AssetMaintenanceClient<runtime.Types.Result.GetResult<Prisma.$AssetMaintenancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AssetMaintenanceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AssetMaintenanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssetMaintenanceClient<runtime.Types.Result.GetResult<Prisma.$AssetMaintenancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AssetMaintenanceFindFirstArgs>(args?: Prisma.SelectSubset<T, AssetMaintenanceFindFirstArgs<ExtArgs>>): Prisma.Prisma__AssetMaintenanceClient<runtime.Types.Result.GetResult<Prisma.$AssetMaintenancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AssetMaintenanceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AssetMaintenanceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssetMaintenanceClient<runtime.Types.Result.GetResult<Prisma.$AssetMaintenancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AssetMaintenanceFindManyArgs>(args?: Prisma.SelectSubset<T, AssetMaintenanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetMaintenancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AssetMaintenanceCreateArgs>(args: Prisma.SelectSubset<T, AssetMaintenanceCreateArgs<ExtArgs>>): Prisma.Prisma__AssetMaintenanceClient<runtime.Types.Result.GetResult<Prisma.$AssetMaintenancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AssetMaintenanceCreateManyArgs>(args?: Prisma.SelectSubset<T, AssetMaintenanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AssetMaintenanceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AssetMaintenanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetMaintenancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AssetMaintenanceDeleteArgs>(args: Prisma.SelectSubset<T, AssetMaintenanceDeleteArgs<ExtArgs>>): Prisma.Prisma__AssetMaintenanceClient<runtime.Types.Result.GetResult<Prisma.$AssetMaintenancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AssetMaintenanceUpdateArgs>(args: Prisma.SelectSubset<T, AssetMaintenanceUpdateArgs<ExtArgs>>): Prisma.Prisma__AssetMaintenanceClient<runtime.Types.Result.GetResult<Prisma.$AssetMaintenancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AssetMaintenanceDeleteManyArgs>(args?: Prisma.SelectSubset<T, AssetMaintenanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AssetMaintenanceUpdateManyArgs>(args: Prisma.SelectSubset<T, AssetMaintenanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AssetMaintenanceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AssetMaintenanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetMaintenancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AssetMaintenanceUpsertArgs>(args: Prisma.SelectSubset<T, AssetMaintenanceUpsertArgs<ExtArgs>>): Prisma.Prisma__AssetMaintenanceClient<runtime.Types.Result.GetResult<Prisma.$AssetMaintenancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AssetMaintenanceCountArgs>(args?: Prisma.Subset<T, AssetMaintenanceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AssetMaintenanceCountAggregateOutputType> : number>;
    aggregate<T extends AssetMaintenanceAggregateArgs>(args: Prisma.Subset<T, AssetMaintenanceAggregateArgs>): Prisma.PrismaPromise<GetAssetMaintenanceAggregateType<T>>;
    groupBy<T extends AssetMaintenanceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AssetMaintenanceGroupByArgs['orderBy'];
    } : {
        orderBy?: AssetMaintenanceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AssetMaintenanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetMaintenanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AssetMaintenanceFieldRefs;
}
export interface Prisma__AssetMaintenanceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    asset<T extends Prisma.AssetDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AssetDefaultArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AssetMaintenanceFieldRefs {
    readonly id: Prisma.FieldRef<"AssetMaintenance", 'String'>;
    readonly assetId: Prisma.FieldRef<"AssetMaintenance", 'String'>;
    readonly description: Prisma.FieldRef<"AssetMaintenance", 'String'>;
    readonly cost: Prisma.FieldRef<"AssetMaintenance", 'Decimal'>;
    readonly date: Prisma.FieldRef<"AssetMaintenance", 'DateTime'>;
    readonly performedBy: Prisma.FieldRef<"AssetMaintenance", 'String'>;
    readonly createdAt: Prisma.FieldRef<"AssetMaintenance", 'DateTime'>;
}
export type AssetMaintenanceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetMaintenanceSelect<ExtArgs> | null;
    omit?: Prisma.AssetMaintenanceOmit<ExtArgs> | null;
    include?: Prisma.AssetMaintenanceInclude<ExtArgs> | null;
    where: Prisma.AssetMaintenanceWhereUniqueInput;
};
export type AssetMaintenanceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetMaintenanceSelect<ExtArgs> | null;
    omit?: Prisma.AssetMaintenanceOmit<ExtArgs> | null;
    include?: Prisma.AssetMaintenanceInclude<ExtArgs> | null;
    where: Prisma.AssetMaintenanceWhereUniqueInput;
};
export type AssetMaintenanceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetMaintenanceSelect<ExtArgs> | null;
    omit?: Prisma.AssetMaintenanceOmit<ExtArgs> | null;
    include?: Prisma.AssetMaintenanceInclude<ExtArgs> | null;
    where?: Prisma.AssetMaintenanceWhereInput;
    orderBy?: Prisma.AssetMaintenanceOrderByWithRelationInput | Prisma.AssetMaintenanceOrderByWithRelationInput[];
    cursor?: Prisma.AssetMaintenanceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetMaintenanceScalarFieldEnum | Prisma.AssetMaintenanceScalarFieldEnum[];
};
export type AssetMaintenanceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetMaintenanceSelect<ExtArgs> | null;
    omit?: Prisma.AssetMaintenanceOmit<ExtArgs> | null;
    include?: Prisma.AssetMaintenanceInclude<ExtArgs> | null;
    where?: Prisma.AssetMaintenanceWhereInput;
    orderBy?: Prisma.AssetMaintenanceOrderByWithRelationInput | Prisma.AssetMaintenanceOrderByWithRelationInput[];
    cursor?: Prisma.AssetMaintenanceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetMaintenanceScalarFieldEnum | Prisma.AssetMaintenanceScalarFieldEnum[];
};
export type AssetMaintenanceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetMaintenanceSelect<ExtArgs> | null;
    omit?: Prisma.AssetMaintenanceOmit<ExtArgs> | null;
    include?: Prisma.AssetMaintenanceInclude<ExtArgs> | null;
    where?: Prisma.AssetMaintenanceWhereInput;
    orderBy?: Prisma.AssetMaintenanceOrderByWithRelationInput | Prisma.AssetMaintenanceOrderByWithRelationInput[];
    cursor?: Prisma.AssetMaintenanceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetMaintenanceScalarFieldEnum | Prisma.AssetMaintenanceScalarFieldEnum[];
};
export type AssetMaintenanceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetMaintenanceSelect<ExtArgs> | null;
    omit?: Prisma.AssetMaintenanceOmit<ExtArgs> | null;
    include?: Prisma.AssetMaintenanceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetMaintenanceCreateInput, Prisma.AssetMaintenanceUncheckedCreateInput>;
};
export type AssetMaintenanceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AssetMaintenanceCreateManyInput | Prisma.AssetMaintenanceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AssetMaintenanceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetMaintenanceSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AssetMaintenanceOmit<ExtArgs> | null;
    data: Prisma.AssetMaintenanceCreateManyInput | Prisma.AssetMaintenanceCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AssetMaintenanceIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AssetMaintenanceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetMaintenanceSelect<ExtArgs> | null;
    omit?: Prisma.AssetMaintenanceOmit<ExtArgs> | null;
    include?: Prisma.AssetMaintenanceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetMaintenanceUpdateInput, Prisma.AssetMaintenanceUncheckedUpdateInput>;
    where: Prisma.AssetMaintenanceWhereUniqueInput;
};
export type AssetMaintenanceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AssetMaintenanceUpdateManyMutationInput, Prisma.AssetMaintenanceUncheckedUpdateManyInput>;
    where?: Prisma.AssetMaintenanceWhereInput;
    limit?: number;
};
export type AssetMaintenanceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetMaintenanceSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AssetMaintenanceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetMaintenanceUpdateManyMutationInput, Prisma.AssetMaintenanceUncheckedUpdateManyInput>;
    where?: Prisma.AssetMaintenanceWhereInput;
    limit?: number;
    include?: Prisma.AssetMaintenanceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AssetMaintenanceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetMaintenanceSelect<ExtArgs> | null;
    omit?: Prisma.AssetMaintenanceOmit<ExtArgs> | null;
    include?: Prisma.AssetMaintenanceInclude<ExtArgs> | null;
    where: Prisma.AssetMaintenanceWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetMaintenanceCreateInput, Prisma.AssetMaintenanceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AssetMaintenanceUpdateInput, Prisma.AssetMaintenanceUncheckedUpdateInput>;
};
export type AssetMaintenanceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetMaintenanceSelect<ExtArgs> | null;
    omit?: Prisma.AssetMaintenanceOmit<ExtArgs> | null;
    include?: Prisma.AssetMaintenanceInclude<ExtArgs> | null;
    where: Prisma.AssetMaintenanceWhereUniqueInput;
};
export type AssetMaintenanceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetMaintenanceWhereInput;
    limit?: number;
};
export type AssetMaintenanceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetMaintenanceSelect<ExtArgs> | null;
    omit?: Prisma.AssetMaintenanceOmit<ExtArgs> | null;
    include?: Prisma.AssetMaintenanceInclude<ExtArgs> | null;
};
