import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PipelineStageModel = runtime.Types.Result.DefaultSelection<Prisma.$PipelineStagePayload>;
export type AggregatePipelineStage = {
    _count: PipelineStageCountAggregateOutputType | null;
    _avg: PipelineStageAvgAggregateOutputType | null;
    _sum: PipelineStageSumAggregateOutputType | null;
    _min: PipelineStageMinAggregateOutputType | null;
    _max: PipelineStageMaxAggregateOutputType | null;
};
export type PipelineStageAvgAggregateOutputType = {
    orderIndex: number | null;
};
export type PipelineStageSumAggregateOutputType = {
    orderIndex: number | null;
};
export type PipelineStageMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    name: string | null;
    orderIndex: number | null;
    color: string | null;
    isDefault: boolean | null;
    isFinal: boolean | null;
    createdAt: Date | null;
};
export type PipelineStageMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    name: string | null;
    orderIndex: number | null;
    color: string | null;
    isDefault: boolean | null;
    isFinal: boolean | null;
    createdAt: Date | null;
};
export type PipelineStageCountAggregateOutputType = {
    id: number;
    organizationId: number;
    name: number;
    orderIndex: number;
    color: number;
    isDefault: number;
    isFinal: number;
    createdAt: number;
    _all: number;
};
export type PipelineStageAvgAggregateInputType = {
    orderIndex?: true;
};
export type PipelineStageSumAggregateInputType = {
    orderIndex?: true;
};
export type PipelineStageMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    orderIndex?: true;
    color?: true;
    isDefault?: true;
    isFinal?: true;
    createdAt?: true;
};
export type PipelineStageMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    orderIndex?: true;
    color?: true;
    isDefault?: true;
    isFinal?: true;
    createdAt?: true;
};
export type PipelineStageCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    orderIndex?: true;
    color?: true;
    isDefault?: true;
    isFinal?: true;
    createdAt?: true;
    _all?: true;
};
export type PipelineStageAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PipelineStageWhereInput;
    orderBy?: Prisma.PipelineStageOrderByWithRelationInput | Prisma.PipelineStageOrderByWithRelationInput[];
    cursor?: Prisma.PipelineStageWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PipelineStageCountAggregateInputType;
    _avg?: PipelineStageAvgAggregateInputType;
    _sum?: PipelineStageSumAggregateInputType;
    _min?: PipelineStageMinAggregateInputType;
    _max?: PipelineStageMaxAggregateInputType;
};
export type GetPipelineStageAggregateType<T extends PipelineStageAggregateArgs> = {
    [P in keyof T & keyof AggregatePipelineStage]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePipelineStage[P]> : Prisma.GetScalarType<T[P], AggregatePipelineStage[P]>;
};
export type PipelineStageGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PipelineStageWhereInput;
    orderBy?: Prisma.PipelineStageOrderByWithAggregationInput | Prisma.PipelineStageOrderByWithAggregationInput[];
    by: Prisma.PipelineStageScalarFieldEnum[] | Prisma.PipelineStageScalarFieldEnum;
    having?: Prisma.PipelineStageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PipelineStageCountAggregateInputType | true;
    _avg?: PipelineStageAvgAggregateInputType;
    _sum?: PipelineStageSumAggregateInputType;
    _min?: PipelineStageMinAggregateInputType;
    _max?: PipelineStageMaxAggregateInputType;
};
export type PipelineStageGroupByOutputType = {
    id: string;
    organizationId: string;
    name: string;
    orderIndex: number;
    color: string | null;
    isDefault: boolean;
    isFinal: boolean;
    createdAt: Date;
    _count: PipelineStageCountAggregateOutputType | null;
    _avg: PipelineStageAvgAggregateOutputType | null;
    _sum: PipelineStageSumAggregateOutputType | null;
    _min: PipelineStageMinAggregateOutputType | null;
    _max: PipelineStageMaxAggregateOutputType | null;
};
export type GetPipelineStageGroupByPayload<T extends PipelineStageGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PipelineStageGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PipelineStageGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PipelineStageGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PipelineStageGroupByOutputType[P]>;
}>>;
export type PipelineStageWhereInput = {
    AND?: Prisma.PipelineStageWhereInput | Prisma.PipelineStageWhereInput[];
    OR?: Prisma.PipelineStageWhereInput[];
    NOT?: Prisma.PipelineStageWhereInput | Prisma.PipelineStageWhereInput[];
    id?: Prisma.UuidFilter<"PipelineStage"> | string;
    organizationId?: Prisma.UuidFilter<"PipelineStage"> | string;
    name?: Prisma.StringFilter<"PipelineStage"> | string;
    orderIndex?: Prisma.IntFilter<"PipelineStage"> | number;
    color?: Prisma.StringNullableFilter<"PipelineStage"> | string | null;
    isDefault?: Prisma.BoolFilter<"PipelineStage"> | boolean;
    isFinal?: Prisma.BoolFilter<"PipelineStage"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"PipelineStage"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    applications?: Prisma.ApplicationListRelationFilter;
};
export type PipelineStageOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    color?: Prisma.SortOrderInput | Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    isFinal?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    applications?: Prisma.ApplicationOrderByRelationAggregateInput;
};
export type PipelineStageWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PipelineStageWhereInput | Prisma.PipelineStageWhereInput[];
    OR?: Prisma.PipelineStageWhereInput[];
    NOT?: Prisma.PipelineStageWhereInput | Prisma.PipelineStageWhereInput[];
    organizationId?: Prisma.UuidFilter<"PipelineStage"> | string;
    name?: Prisma.StringFilter<"PipelineStage"> | string;
    orderIndex?: Prisma.IntFilter<"PipelineStage"> | number;
    color?: Prisma.StringNullableFilter<"PipelineStage"> | string | null;
    isDefault?: Prisma.BoolFilter<"PipelineStage"> | boolean;
    isFinal?: Prisma.BoolFilter<"PipelineStage"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"PipelineStage"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    applications?: Prisma.ApplicationListRelationFilter;
}, "id">;
export type PipelineStageOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    color?: Prisma.SortOrderInput | Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    isFinal?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PipelineStageCountOrderByAggregateInput;
    _avg?: Prisma.PipelineStageAvgOrderByAggregateInput;
    _max?: Prisma.PipelineStageMaxOrderByAggregateInput;
    _min?: Prisma.PipelineStageMinOrderByAggregateInput;
    _sum?: Prisma.PipelineStageSumOrderByAggregateInput;
};
export type PipelineStageScalarWhereWithAggregatesInput = {
    AND?: Prisma.PipelineStageScalarWhereWithAggregatesInput | Prisma.PipelineStageScalarWhereWithAggregatesInput[];
    OR?: Prisma.PipelineStageScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PipelineStageScalarWhereWithAggregatesInput | Prisma.PipelineStageScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PipelineStage"> | string;
    organizationId?: Prisma.UuidWithAggregatesFilter<"PipelineStage"> | string;
    name?: Prisma.StringWithAggregatesFilter<"PipelineStage"> | string;
    orderIndex?: Prisma.IntWithAggregatesFilter<"PipelineStage"> | number;
    color?: Prisma.StringNullableWithAggregatesFilter<"PipelineStage"> | string | null;
    isDefault?: Prisma.BoolWithAggregatesFilter<"PipelineStage"> | boolean;
    isFinal?: Prisma.BoolWithAggregatesFilter<"PipelineStage"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PipelineStage"> | Date | string;
};
export type PipelineStageCreateInput = {
    id?: string;
    name: string;
    orderIndex: number;
    color?: string | null;
    isDefault?: boolean;
    isFinal?: boolean;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutPipelineStagesInput;
    applications?: Prisma.ApplicationCreateNestedManyWithoutStageInput;
};
export type PipelineStageUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    name: string;
    orderIndex: number;
    color?: string | null;
    isDefault?: boolean;
    isFinal?: boolean;
    createdAt?: Date | string;
    applications?: Prisma.ApplicationUncheckedCreateNestedManyWithoutStageInput;
};
export type PipelineStageUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFinal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutPipelineStagesNestedInput;
    applications?: Prisma.ApplicationUpdateManyWithoutStageNestedInput;
};
export type PipelineStageUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFinal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    applications?: Prisma.ApplicationUncheckedUpdateManyWithoutStageNestedInput;
};
export type PipelineStageCreateManyInput = {
    id?: string;
    organizationId: string;
    name: string;
    orderIndex: number;
    color?: string | null;
    isDefault?: boolean;
    isFinal?: boolean;
    createdAt?: Date | string;
};
export type PipelineStageUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFinal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PipelineStageUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFinal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PipelineStageListRelationFilter = {
    every?: Prisma.PipelineStageWhereInput;
    some?: Prisma.PipelineStageWhereInput;
    none?: Prisma.PipelineStageWhereInput;
};
export type PipelineStageOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PipelineStageCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    isFinal?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PipelineStageAvgOrderByAggregateInput = {
    orderIndex?: Prisma.SortOrder;
};
export type PipelineStageMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    isFinal?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PipelineStageMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    isFinal?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PipelineStageSumOrderByAggregateInput = {
    orderIndex?: Prisma.SortOrder;
};
export type PipelineStageNullableScalarRelationFilter = {
    is?: Prisma.PipelineStageWhereInput | null;
    isNot?: Prisma.PipelineStageWhereInput | null;
};
export type PipelineStageCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.PipelineStageCreateWithoutOrganizationInput, Prisma.PipelineStageUncheckedCreateWithoutOrganizationInput> | Prisma.PipelineStageCreateWithoutOrganizationInput[] | Prisma.PipelineStageUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.PipelineStageCreateOrConnectWithoutOrganizationInput | Prisma.PipelineStageCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.PipelineStageCreateManyOrganizationInputEnvelope;
    connect?: Prisma.PipelineStageWhereUniqueInput | Prisma.PipelineStageWhereUniqueInput[];
};
export type PipelineStageUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.PipelineStageCreateWithoutOrganizationInput, Prisma.PipelineStageUncheckedCreateWithoutOrganizationInput> | Prisma.PipelineStageCreateWithoutOrganizationInput[] | Prisma.PipelineStageUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.PipelineStageCreateOrConnectWithoutOrganizationInput | Prisma.PipelineStageCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.PipelineStageCreateManyOrganizationInputEnvelope;
    connect?: Prisma.PipelineStageWhereUniqueInput | Prisma.PipelineStageWhereUniqueInput[];
};
export type PipelineStageUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.PipelineStageCreateWithoutOrganizationInput, Prisma.PipelineStageUncheckedCreateWithoutOrganizationInput> | Prisma.PipelineStageCreateWithoutOrganizationInput[] | Prisma.PipelineStageUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.PipelineStageCreateOrConnectWithoutOrganizationInput | Prisma.PipelineStageCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.PipelineStageUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.PipelineStageUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.PipelineStageCreateManyOrganizationInputEnvelope;
    set?: Prisma.PipelineStageWhereUniqueInput | Prisma.PipelineStageWhereUniqueInput[];
    disconnect?: Prisma.PipelineStageWhereUniqueInput | Prisma.PipelineStageWhereUniqueInput[];
    delete?: Prisma.PipelineStageWhereUniqueInput | Prisma.PipelineStageWhereUniqueInput[];
    connect?: Prisma.PipelineStageWhereUniqueInput | Prisma.PipelineStageWhereUniqueInput[];
    update?: Prisma.PipelineStageUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.PipelineStageUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.PipelineStageUpdateManyWithWhereWithoutOrganizationInput | Prisma.PipelineStageUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.PipelineStageScalarWhereInput | Prisma.PipelineStageScalarWhereInput[];
};
export type PipelineStageUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.PipelineStageCreateWithoutOrganizationInput, Prisma.PipelineStageUncheckedCreateWithoutOrganizationInput> | Prisma.PipelineStageCreateWithoutOrganizationInput[] | Prisma.PipelineStageUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.PipelineStageCreateOrConnectWithoutOrganizationInput | Prisma.PipelineStageCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.PipelineStageUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.PipelineStageUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.PipelineStageCreateManyOrganizationInputEnvelope;
    set?: Prisma.PipelineStageWhereUniqueInput | Prisma.PipelineStageWhereUniqueInput[];
    disconnect?: Prisma.PipelineStageWhereUniqueInput | Prisma.PipelineStageWhereUniqueInput[];
    delete?: Prisma.PipelineStageWhereUniqueInput | Prisma.PipelineStageWhereUniqueInput[];
    connect?: Prisma.PipelineStageWhereUniqueInput | Prisma.PipelineStageWhereUniqueInput[];
    update?: Prisma.PipelineStageUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.PipelineStageUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.PipelineStageUpdateManyWithWhereWithoutOrganizationInput | Prisma.PipelineStageUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.PipelineStageScalarWhereInput | Prisma.PipelineStageScalarWhereInput[];
};
export type PipelineStageCreateNestedOneWithoutApplicationsInput = {
    create?: Prisma.XOR<Prisma.PipelineStageCreateWithoutApplicationsInput, Prisma.PipelineStageUncheckedCreateWithoutApplicationsInput>;
    connectOrCreate?: Prisma.PipelineStageCreateOrConnectWithoutApplicationsInput;
    connect?: Prisma.PipelineStageWhereUniqueInput;
};
export type PipelineStageUpdateOneWithoutApplicationsNestedInput = {
    create?: Prisma.XOR<Prisma.PipelineStageCreateWithoutApplicationsInput, Prisma.PipelineStageUncheckedCreateWithoutApplicationsInput>;
    connectOrCreate?: Prisma.PipelineStageCreateOrConnectWithoutApplicationsInput;
    upsert?: Prisma.PipelineStageUpsertWithoutApplicationsInput;
    disconnect?: Prisma.PipelineStageWhereInput | boolean;
    delete?: Prisma.PipelineStageWhereInput | boolean;
    connect?: Prisma.PipelineStageWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PipelineStageUpdateToOneWithWhereWithoutApplicationsInput, Prisma.PipelineStageUpdateWithoutApplicationsInput>, Prisma.PipelineStageUncheckedUpdateWithoutApplicationsInput>;
};
export type PipelineStageCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    orderIndex: number;
    color?: string | null;
    isDefault?: boolean;
    isFinal?: boolean;
    createdAt?: Date | string;
    applications?: Prisma.ApplicationCreateNestedManyWithoutStageInput;
};
export type PipelineStageUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    orderIndex: number;
    color?: string | null;
    isDefault?: boolean;
    isFinal?: boolean;
    createdAt?: Date | string;
    applications?: Prisma.ApplicationUncheckedCreateNestedManyWithoutStageInput;
};
export type PipelineStageCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.PipelineStageWhereUniqueInput;
    create: Prisma.XOR<Prisma.PipelineStageCreateWithoutOrganizationInput, Prisma.PipelineStageUncheckedCreateWithoutOrganizationInput>;
};
export type PipelineStageCreateManyOrganizationInputEnvelope = {
    data: Prisma.PipelineStageCreateManyOrganizationInput | Prisma.PipelineStageCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type PipelineStageUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.PipelineStageWhereUniqueInput;
    update: Prisma.XOR<Prisma.PipelineStageUpdateWithoutOrganizationInput, Prisma.PipelineStageUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.PipelineStageCreateWithoutOrganizationInput, Prisma.PipelineStageUncheckedCreateWithoutOrganizationInput>;
};
export type PipelineStageUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.PipelineStageWhereUniqueInput;
    data: Prisma.XOR<Prisma.PipelineStageUpdateWithoutOrganizationInput, Prisma.PipelineStageUncheckedUpdateWithoutOrganizationInput>;
};
export type PipelineStageUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.PipelineStageScalarWhereInput;
    data: Prisma.XOR<Prisma.PipelineStageUpdateManyMutationInput, Prisma.PipelineStageUncheckedUpdateManyWithoutOrganizationInput>;
};
export type PipelineStageScalarWhereInput = {
    AND?: Prisma.PipelineStageScalarWhereInput | Prisma.PipelineStageScalarWhereInput[];
    OR?: Prisma.PipelineStageScalarWhereInput[];
    NOT?: Prisma.PipelineStageScalarWhereInput | Prisma.PipelineStageScalarWhereInput[];
    id?: Prisma.UuidFilter<"PipelineStage"> | string;
    organizationId?: Prisma.UuidFilter<"PipelineStage"> | string;
    name?: Prisma.StringFilter<"PipelineStage"> | string;
    orderIndex?: Prisma.IntFilter<"PipelineStage"> | number;
    color?: Prisma.StringNullableFilter<"PipelineStage"> | string | null;
    isDefault?: Prisma.BoolFilter<"PipelineStage"> | boolean;
    isFinal?: Prisma.BoolFilter<"PipelineStage"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"PipelineStage"> | Date | string;
};
export type PipelineStageCreateWithoutApplicationsInput = {
    id?: string;
    name: string;
    orderIndex: number;
    color?: string | null;
    isDefault?: boolean;
    isFinal?: boolean;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutPipelineStagesInput;
};
export type PipelineStageUncheckedCreateWithoutApplicationsInput = {
    id?: string;
    organizationId: string;
    name: string;
    orderIndex: number;
    color?: string | null;
    isDefault?: boolean;
    isFinal?: boolean;
    createdAt?: Date | string;
};
export type PipelineStageCreateOrConnectWithoutApplicationsInput = {
    where: Prisma.PipelineStageWhereUniqueInput;
    create: Prisma.XOR<Prisma.PipelineStageCreateWithoutApplicationsInput, Prisma.PipelineStageUncheckedCreateWithoutApplicationsInput>;
};
export type PipelineStageUpsertWithoutApplicationsInput = {
    update: Prisma.XOR<Prisma.PipelineStageUpdateWithoutApplicationsInput, Prisma.PipelineStageUncheckedUpdateWithoutApplicationsInput>;
    create: Prisma.XOR<Prisma.PipelineStageCreateWithoutApplicationsInput, Prisma.PipelineStageUncheckedCreateWithoutApplicationsInput>;
    where?: Prisma.PipelineStageWhereInput;
};
export type PipelineStageUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: Prisma.PipelineStageWhereInput;
    data: Prisma.XOR<Prisma.PipelineStageUpdateWithoutApplicationsInput, Prisma.PipelineStageUncheckedUpdateWithoutApplicationsInput>;
};
export type PipelineStageUpdateWithoutApplicationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFinal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutPipelineStagesNestedInput;
};
export type PipelineStageUncheckedUpdateWithoutApplicationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFinal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PipelineStageCreateManyOrganizationInput = {
    id?: string;
    name: string;
    orderIndex: number;
    color?: string | null;
    isDefault?: boolean;
    isFinal?: boolean;
    createdAt?: Date | string;
};
export type PipelineStageUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFinal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    applications?: Prisma.ApplicationUpdateManyWithoutStageNestedInput;
};
export type PipelineStageUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFinal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    applications?: Prisma.ApplicationUncheckedUpdateManyWithoutStageNestedInput;
};
export type PipelineStageUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFinal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PipelineStageCountOutputType = {
    applications: number;
};
export type PipelineStageCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    applications?: boolean | PipelineStageCountOutputTypeCountApplicationsArgs;
};
export type PipelineStageCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PipelineStageCountOutputTypeSelect<ExtArgs> | null;
};
export type PipelineStageCountOutputTypeCountApplicationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApplicationWhereInput;
};
export type PipelineStageSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    orderIndex?: boolean;
    color?: boolean;
    isDefault?: boolean;
    isFinal?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    applications?: boolean | Prisma.PipelineStage$applicationsArgs<ExtArgs>;
    _count?: boolean | Prisma.PipelineStageCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pipelineStage"]>;
export type PipelineStageSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    orderIndex?: boolean;
    color?: boolean;
    isDefault?: boolean;
    isFinal?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pipelineStage"]>;
export type PipelineStageSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    orderIndex?: boolean;
    color?: boolean;
    isDefault?: boolean;
    isFinal?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pipelineStage"]>;
export type PipelineStageSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    orderIndex?: boolean;
    color?: boolean;
    isDefault?: boolean;
    isFinal?: boolean;
    createdAt?: boolean;
};
export type PipelineStageOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "name" | "orderIndex" | "color" | "isDefault" | "isFinal" | "createdAt", ExtArgs["result"]["pipelineStage"]>;
export type PipelineStageInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    applications?: boolean | Prisma.PipelineStage$applicationsArgs<ExtArgs>;
    _count?: boolean | Prisma.PipelineStageCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PipelineStageIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type PipelineStageIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type $PipelineStagePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PipelineStage";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        applications: Prisma.$ApplicationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        name: string;
        orderIndex: number;
        color: string | null;
        isDefault: boolean;
        isFinal: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["pipelineStage"]>;
    composites: {};
};
export type PipelineStageGetPayload<S extends boolean | null | undefined | PipelineStageDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PipelineStagePayload, S>;
export type PipelineStageCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PipelineStageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PipelineStageCountAggregateInputType | true;
};
export interface PipelineStageDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PipelineStage'];
        meta: {
            name: 'PipelineStage';
        };
    };
    findUnique<T extends PipelineStageFindUniqueArgs>(args: Prisma.SelectSubset<T, PipelineStageFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PipelineStageClient<runtime.Types.Result.GetResult<Prisma.$PipelineStagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PipelineStageFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PipelineStageFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PipelineStageClient<runtime.Types.Result.GetResult<Prisma.$PipelineStagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PipelineStageFindFirstArgs>(args?: Prisma.SelectSubset<T, PipelineStageFindFirstArgs<ExtArgs>>): Prisma.Prisma__PipelineStageClient<runtime.Types.Result.GetResult<Prisma.$PipelineStagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PipelineStageFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PipelineStageFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PipelineStageClient<runtime.Types.Result.GetResult<Prisma.$PipelineStagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PipelineStageFindManyArgs>(args?: Prisma.SelectSubset<T, PipelineStageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PipelineStagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PipelineStageCreateArgs>(args: Prisma.SelectSubset<T, PipelineStageCreateArgs<ExtArgs>>): Prisma.Prisma__PipelineStageClient<runtime.Types.Result.GetResult<Prisma.$PipelineStagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PipelineStageCreateManyArgs>(args?: Prisma.SelectSubset<T, PipelineStageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PipelineStageCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PipelineStageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PipelineStagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PipelineStageDeleteArgs>(args: Prisma.SelectSubset<T, PipelineStageDeleteArgs<ExtArgs>>): Prisma.Prisma__PipelineStageClient<runtime.Types.Result.GetResult<Prisma.$PipelineStagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PipelineStageUpdateArgs>(args: Prisma.SelectSubset<T, PipelineStageUpdateArgs<ExtArgs>>): Prisma.Prisma__PipelineStageClient<runtime.Types.Result.GetResult<Prisma.$PipelineStagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PipelineStageDeleteManyArgs>(args?: Prisma.SelectSubset<T, PipelineStageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PipelineStageUpdateManyArgs>(args: Prisma.SelectSubset<T, PipelineStageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PipelineStageUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PipelineStageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PipelineStagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PipelineStageUpsertArgs>(args: Prisma.SelectSubset<T, PipelineStageUpsertArgs<ExtArgs>>): Prisma.Prisma__PipelineStageClient<runtime.Types.Result.GetResult<Prisma.$PipelineStagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PipelineStageCountArgs>(args?: Prisma.Subset<T, PipelineStageCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PipelineStageCountAggregateOutputType> : number>;
    aggregate<T extends PipelineStageAggregateArgs>(args: Prisma.Subset<T, PipelineStageAggregateArgs>): Prisma.PrismaPromise<GetPipelineStageAggregateType<T>>;
    groupBy<T extends PipelineStageGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PipelineStageGroupByArgs['orderBy'];
    } : {
        orderBy?: PipelineStageGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PipelineStageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPipelineStageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PipelineStageFieldRefs;
}
export interface Prisma__PipelineStageClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    applications<T extends Prisma.PipelineStage$applicationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PipelineStage$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PipelineStageFieldRefs {
    readonly id: Prisma.FieldRef<"PipelineStage", 'String'>;
    readonly organizationId: Prisma.FieldRef<"PipelineStage", 'String'>;
    readonly name: Prisma.FieldRef<"PipelineStage", 'String'>;
    readonly orderIndex: Prisma.FieldRef<"PipelineStage", 'Int'>;
    readonly color: Prisma.FieldRef<"PipelineStage", 'String'>;
    readonly isDefault: Prisma.FieldRef<"PipelineStage", 'Boolean'>;
    readonly isFinal: Prisma.FieldRef<"PipelineStage", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"PipelineStage", 'DateTime'>;
}
export type PipelineStageFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PipelineStageSelect<ExtArgs> | null;
    omit?: Prisma.PipelineStageOmit<ExtArgs> | null;
    include?: Prisma.PipelineStageInclude<ExtArgs> | null;
    where: Prisma.PipelineStageWhereUniqueInput;
};
export type PipelineStageFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PipelineStageSelect<ExtArgs> | null;
    omit?: Prisma.PipelineStageOmit<ExtArgs> | null;
    include?: Prisma.PipelineStageInclude<ExtArgs> | null;
    where: Prisma.PipelineStageWhereUniqueInput;
};
export type PipelineStageFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PipelineStageSelect<ExtArgs> | null;
    omit?: Prisma.PipelineStageOmit<ExtArgs> | null;
    include?: Prisma.PipelineStageInclude<ExtArgs> | null;
    where?: Prisma.PipelineStageWhereInput;
    orderBy?: Prisma.PipelineStageOrderByWithRelationInput | Prisma.PipelineStageOrderByWithRelationInput[];
    cursor?: Prisma.PipelineStageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PipelineStageScalarFieldEnum | Prisma.PipelineStageScalarFieldEnum[];
};
export type PipelineStageFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PipelineStageSelect<ExtArgs> | null;
    omit?: Prisma.PipelineStageOmit<ExtArgs> | null;
    include?: Prisma.PipelineStageInclude<ExtArgs> | null;
    where?: Prisma.PipelineStageWhereInput;
    orderBy?: Prisma.PipelineStageOrderByWithRelationInput | Prisma.PipelineStageOrderByWithRelationInput[];
    cursor?: Prisma.PipelineStageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PipelineStageScalarFieldEnum | Prisma.PipelineStageScalarFieldEnum[];
};
export type PipelineStageFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PipelineStageSelect<ExtArgs> | null;
    omit?: Prisma.PipelineStageOmit<ExtArgs> | null;
    include?: Prisma.PipelineStageInclude<ExtArgs> | null;
    where?: Prisma.PipelineStageWhereInput;
    orderBy?: Prisma.PipelineStageOrderByWithRelationInput | Prisma.PipelineStageOrderByWithRelationInput[];
    cursor?: Prisma.PipelineStageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PipelineStageScalarFieldEnum | Prisma.PipelineStageScalarFieldEnum[];
};
export type PipelineStageCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PipelineStageSelect<ExtArgs> | null;
    omit?: Prisma.PipelineStageOmit<ExtArgs> | null;
    include?: Prisma.PipelineStageInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PipelineStageCreateInput, Prisma.PipelineStageUncheckedCreateInput>;
};
export type PipelineStageCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PipelineStageCreateManyInput | Prisma.PipelineStageCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PipelineStageCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PipelineStageSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PipelineStageOmit<ExtArgs> | null;
    data: Prisma.PipelineStageCreateManyInput | Prisma.PipelineStageCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PipelineStageIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PipelineStageUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PipelineStageSelect<ExtArgs> | null;
    omit?: Prisma.PipelineStageOmit<ExtArgs> | null;
    include?: Prisma.PipelineStageInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PipelineStageUpdateInput, Prisma.PipelineStageUncheckedUpdateInput>;
    where: Prisma.PipelineStageWhereUniqueInput;
};
export type PipelineStageUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PipelineStageUpdateManyMutationInput, Prisma.PipelineStageUncheckedUpdateManyInput>;
    where?: Prisma.PipelineStageWhereInput;
    limit?: number;
};
export type PipelineStageUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PipelineStageSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PipelineStageOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PipelineStageUpdateManyMutationInput, Prisma.PipelineStageUncheckedUpdateManyInput>;
    where?: Prisma.PipelineStageWhereInput;
    limit?: number;
    include?: Prisma.PipelineStageIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PipelineStageUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PipelineStageSelect<ExtArgs> | null;
    omit?: Prisma.PipelineStageOmit<ExtArgs> | null;
    include?: Prisma.PipelineStageInclude<ExtArgs> | null;
    where: Prisma.PipelineStageWhereUniqueInput;
    create: Prisma.XOR<Prisma.PipelineStageCreateInput, Prisma.PipelineStageUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PipelineStageUpdateInput, Prisma.PipelineStageUncheckedUpdateInput>;
};
export type PipelineStageDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PipelineStageSelect<ExtArgs> | null;
    omit?: Prisma.PipelineStageOmit<ExtArgs> | null;
    include?: Prisma.PipelineStageInclude<ExtArgs> | null;
    where: Prisma.PipelineStageWhereUniqueInput;
};
export type PipelineStageDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PipelineStageWhereInput;
    limit?: number;
};
export type PipelineStage$applicationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApplicationSelect<ExtArgs> | null;
    omit?: Prisma.ApplicationOmit<ExtArgs> | null;
    include?: Prisma.ApplicationInclude<ExtArgs> | null;
    where?: Prisma.ApplicationWhereInput;
    orderBy?: Prisma.ApplicationOrderByWithRelationInput | Prisma.ApplicationOrderByWithRelationInput[];
    cursor?: Prisma.ApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ApplicationScalarFieldEnum | Prisma.ApplicationScalarFieldEnum[];
};
export type PipelineStageDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PipelineStageSelect<ExtArgs> | null;
    omit?: Prisma.PipelineStageOmit<ExtArgs> | null;
    include?: Prisma.PipelineStageInclude<ExtArgs> | null;
};
