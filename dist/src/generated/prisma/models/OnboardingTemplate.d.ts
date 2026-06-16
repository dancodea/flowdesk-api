import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OnboardingTemplateModel = runtime.Types.Result.DefaultSelection<Prisma.$OnboardingTemplatePayload>;
export type AggregateOnboardingTemplate = {
    _count: OnboardingTemplateCountAggregateOutputType | null;
    _min: OnboardingTemplateMinAggregateOutputType | null;
    _max: OnboardingTemplateMaxAggregateOutputType | null;
};
export type OnboardingTemplateMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    name: string | null;
    description: string | null;
    createdBy: string | null;
    createdAt: Date | null;
};
export type OnboardingTemplateMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    name: string | null;
    description: string | null;
    createdBy: string | null;
    createdAt: Date | null;
};
export type OnboardingTemplateCountAggregateOutputType = {
    id: number;
    organizationId: number;
    name: number;
    description: number;
    createdBy: number;
    createdAt: number;
    _all: number;
};
export type OnboardingTemplateMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    description?: true;
    createdBy?: true;
    createdAt?: true;
};
export type OnboardingTemplateMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    description?: true;
    createdBy?: true;
    createdAt?: true;
};
export type OnboardingTemplateCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    description?: true;
    createdBy?: true;
    createdAt?: true;
    _all?: true;
};
export type OnboardingTemplateAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OnboardingTemplateWhereInput;
    orderBy?: Prisma.OnboardingTemplateOrderByWithRelationInput | Prisma.OnboardingTemplateOrderByWithRelationInput[];
    cursor?: Prisma.OnboardingTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OnboardingTemplateCountAggregateInputType;
    _min?: OnboardingTemplateMinAggregateInputType;
    _max?: OnboardingTemplateMaxAggregateInputType;
};
export type GetOnboardingTemplateAggregateType<T extends OnboardingTemplateAggregateArgs> = {
    [P in keyof T & keyof AggregateOnboardingTemplate]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOnboardingTemplate[P]> : Prisma.GetScalarType<T[P], AggregateOnboardingTemplate[P]>;
};
export type OnboardingTemplateGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OnboardingTemplateWhereInput;
    orderBy?: Prisma.OnboardingTemplateOrderByWithAggregationInput | Prisma.OnboardingTemplateOrderByWithAggregationInput[];
    by: Prisma.OnboardingTemplateScalarFieldEnum[] | Prisma.OnboardingTemplateScalarFieldEnum;
    having?: Prisma.OnboardingTemplateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OnboardingTemplateCountAggregateInputType | true;
    _min?: OnboardingTemplateMinAggregateInputType;
    _max?: OnboardingTemplateMaxAggregateInputType;
};
export type OnboardingTemplateGroupByOutputType = {
    id: string;
    organizationId: string;
    name: string;
    description: string | null;
    createdBy: string | null;
    createdAt: Date;
    _count: OnboardingTemplateCountAggregateOutputType | null;
    _min: OnboardingTemplateMinAggregateOutputType | null;
    _max: OnboardingTemplateMaxAggregateOutputType | null;
};
export type GetOnboardingTemplateGroupByPayload<T extends OnboardingTemplateGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OnboardingTemplateGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OnboardingTemplateGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OnboardingTemplateGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OnboardingTemplateGroupByOutputType[P]>;
}>>;
export type OnboardingTemplateWhereInput = {
    AND?: Prisma.OnboardingTemplateWhereInput | Prisma.OnboardingTemplateWhereInput[];
    OR?: Prisma.OnboardingTemplateWhereInput[];
    NOT?: Prisma.OnboardingTemplateWhereInput | Prisma.OnboardingTemplateWhereInput[];
    id?: Prisma.UuidFilter<"OnboardingTemplate"> | string;
    organizationId?: Prisma.UuidFilter<"OnboardingTemplate"> | string;
    name?: Prisma.StringFilter<"OnboardingTemplate"> | string;
    description?: Prisma.StringNullableFilter<"OnboardingTemplate"> | string | null;
    createdBy?: Prisma.UuidNullableFilter<"OnboardingTemplate"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"OnboardingTemplate"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    tasks?: Prisma.OnboardingTemplateTaskListRelationFilter;
    checklists?: Prisma.OnboardingChecklistListRelationFilter;
};
export type OnboardingTemplateOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    tasks?: Prisma.OnboardingTemplateTaskOrderByRelationAggregateInput;
    checklists?: Prisma.OnboardingChecklistOrderByRelationAggregateInput;
};
export type OnboardingTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.OnboardingTemplateWhereInput | Prisma.OnboardingTemplateWhereInput[];
    OR?: Prisma.OnboardingTemplateWhereInput[];
    NOT?: Prisma.OnboardingTemplateWhereInput | Prisma.OnboardingTemplateWhereInput[];
    organizationId?: Prisma.UuidFilter<"OnboardingTemplate"> | string;
    name?: Prisma.StringFilter<"OnboardingTemplate"> | string;
    description?: Prisma.StringNullableFilter<"OnboardingTemplate"> | string | null;
    createdBy?: Prisma.UuidNullableFilter<"OnboardingTemplate"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"OnboardingTemplate"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    tasks?: Prisma.OnboardingTemplateTaskListRelationFilter;
    checklists?: Prisma.OnboardingChecklistListRelationFilter;
}, "id">;
export type OnboardingTemplateOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.OnboardingTemplateCountOrderByAggregateInput;
    _max?: Prisma.OnboardingTemplateMaxOrderByAggregateInput;
    _min?: Prisma.OnboardingTemplateMinOrderByAggregateInput;
};
export type OnboardingTemplateScalarWhereWithAggregatesInput = {
    AND?: Prisma.OnboardingTemplateScalarWhereWithAggregatesInput | Prisma.OnboardingTemplateScalarWhereWithAggregatesInput[];
    OR?: Prisma.OnboardingTemplateScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OnboardingTemplateScalarWhereWithAggregatesInput | Prisma.OnboardingTemplateScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"OnboardingTemplate"> | string;
    organizationId?: Prisma.UuidWithAggregatesFilter<"OnboardingTemplate"> | string;
    name?: Prisma.StringWithAggregatesFilter<"OnboardingTemplate"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"OnboardingTemplate"> | string | null;
    createdBy?: Prisma.UuidNullableWithAggregatesFilter<"OnboardingTemplate"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"OnboardingTemplate"> | Date | string;
};
export type OnboardingTemplateCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdBy?: string | null;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutOnboardingTemplatesInput;
    tasks?: Prisma.OnboardingTemplateTaskCreateNestedManyWithoutTemplateInput;
    checklists?: Prisma.OnboardingChecklistCreateNestedManyWithoutTemplateInput;
};
export type OnboardingTemplateUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    name: string;
    description?: string | null;
    createdBy?: string | null;
    createdAt?: Date | string;
    tasks?: Prisma.OnboardingTemplateTaskUncheckedCreateNestedManyWithoutTemplateInput;
    checklists?: Prisma.OnboardingChecklistUncheckedCreateNestedManyWithoutTemplateInput;
};
export type OnboardingTemplateUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutOnboardingTemplatesNestedInput;
    tasks?: Prisma.OnboardingTemplateTaskUpdateManyWithoutTemplateNestedInput;
    checklists?: Prisma.OnboardingChecklistUpdateManyWithoutTemplateNestedInput;
};
export type OnboardingTemplateUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.OnboardingTemplateTaskUncheckedUpdateManyWithoutTemplateNestedInput;
    checklists?: Prisma.OnboardingChecklistUncheckedUpdateManyWithoutTemplateNestedInput;
};
export type OnboardingTemplateCreateManyInput = {
    id?: string;
    organizationId: string;
    name: string;
    description?: string | null;
    createdBy?: string | null;
    createdAt?: Date | string;
};
export type OnboardingTemplateUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OnboardingTemplateUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OnboardingTemplateListRelationFilter = {
    every?: Prisma.OnboardingTemplateWhereInput;
    some?: Prisma.OnboardingTemplateWhereInput;
    none?: Prisma.OnboardingTemplateWhereInput;
};
export type OnboardingTemplateOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OnboardingTemplateCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OnboardingTemplateMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OnboardingTemplateMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OnboardingTemplateScalarRelationFilter = {
    is?: Prisma.OnboardingTemplateWhereInput;
    isNot?: Prisma.OnboardingTemplateWhereInput;
};
export type OnboardingTemplateNullableScalarRelationFilter = {
    is?: Prisma.OnboardingTemplateWhereInput | null;
    isNot?: Prisma.OnboardingTemplateWhereInput | null;
};
export type OnboardingTemplateCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.OnboardingTemplateCreateWithoutOrganizationInput, Prisma.OnboardingTemplateUncheckedCreateWithoutOrganizationInput> | Prisma.OnboardingTemplateCreateWithoutOrganizationInput[] | Prisma.OnboardingTemplateUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.OnboardingTemplateCreateOrConnectWithoutOrganizationInput | Prisma.OnboardingTemplateCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.OnboardingTemplateCreateManyOrganizationInputEnvelope;
    connect?: Prisma.OnboardingTemplateWhereUniqueInput | Prisma.OnboardingTemplateWhereUniqueInput[];
};
export type OnboardingTemplateUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.OnboardingTemplateCreateWithoutOrganizationInput, Prisma.OnboardingTemplateUncheckedCreateWithoutOrganizationInput> | Prisma.OnboardingTemplateCreateWithoutOrganizationInput[] | Prisma.OnboardingTemplateUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.OnboardingTemplateCreateOrConnectWithoutOrganizationInput | Prisma.OnboardingTemplateCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.OnboardingTemplateCreateManyOrganizationInputEnvelope;
    connect?: Prisma.OnboardingTemplateWhereUniqueInput | Prisma.OnboardingTemplateWhereUniqueInput[];
};
export type OnboardingTemplateUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.OnboardingTemplateCreateWithoutOrganizationInput, Prisma.OnboardingTemplateUncheckedCreateWithoutOrganizationInput> | Prisma.OnboardingTemplateCreateWithoutOrganizationInput[] | Prisma.OnboardingTemplateUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.OnboardingTemplateCreateOrConnectWithoutOrganizationInput | Prisma.OnboardingTemplateCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.OnboardingTemplateUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.OnboardingTemplateUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.OnboardingTemplateCreateManyOrganizationInputEnvelope;
    set?: Prisma.OnboardingTemplateWhereUniqueInput | Prisma.OnboardingTemplateWhereUniqueInput[];
    disconnect?: Prisma.OnboardingTemplateWhereUniqueInput | Prisma.OnboardingTemplateWhereUniqueInput[];
    delete?: Prisma.OnboardingTemplateWhereUniqueInput | Prisma.OnboardingTemplateWhereUniqueInput[];
    connect?: Prisma.OnboardingTemplateWhereUniqueInput | Prisma.OnboardingTemplateWhereUniqueInput[];
    update?: Prisma.OnboardingTemplateUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.OnboardingTemplateUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.OnboardingTemplateUpdateManyWithWhereWithoutOrganizationInput | Prisma.OnboardingTemplateUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.OnboardingTemplateScalarWhereInput | Prisma.OnboardingTemplateScalarWhereInput[];
};
export type OnboardingTemplateUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.OnboardingTemplateCreateWithoutOrganizationInput, Prisma.OnboardingTemplateUncheckedCreateWithoutOrganizationInput> | Prisma.OnboardingTemplateCreateWithoutOrganizationInput[] | Prisma.OnboardingTemplateUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.OnboardingTemplateCreateOrConnectWithoutOrganizationInput | Prisma.OnboardingTemplateCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.OnboardingTemplateUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.OnboardingTemplateUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.OnboardingTemplateCreateManyOrganizationInputEnvelope;
    set?: Prisma.OnboardingTemplateWhereUniqueInput | Prisma.OnboardingTemplateWhereUniqueInput[];
    disconnect?: Prisma.OnboardingTemplateWhereUniqueInput | Prisma.OnboardingTemplateWhereUniqueInput[];
    delete?: Prisma.OnboardingTemplateWhereUniqueInput | Prisma.OnboardingTemplateWhereUniqueInput[];
    connect?: Prisma.OnboardingTemplateWhereUniqueInput | Prisma.OnboardingTemplateWhereUniqueInput[];
    update?: Prisma.OnboardingTemplateUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.OnboardingTemplateUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.OnboardingTemplateUpdateManyWithWhereWithoutOrganizationInput | Prisma.OnboardingTemplateUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.OnboardingTemplateScalarWhereInput | Prisma.OnboardingTemplateScalarWhereInput[];
};
export type OnboardingTemplateCreateNestedOneWithoutTasksInput = {
    create?: Prisma.XOR<Prisma.OnboardingTemplateCreateWithoutTasksInput, Prisma.OnboardingTemplateUncheckedCreateWithoutTasksInput>;
    connectOrCreate?: Prisma.OnboardingTemplateCreateOrConnectWithoutTasksInput;
    connect?: Prisma.OnboardingTemplateWhereUniqueInput;
};
export type OnboardingTemplateUpdateOneRequiredWithoutTasksNestedInput = {
    create?: Prisma.XOR<Prisma.OnboardingTemplateCreateWithoutTasksInput, Prisma.OnboardingTemplateUncheckedCreateWithoutTasksInput>;
    connectOrCreate?: Prisma.OnboardingTemplateCreateOrConnectWithoutTasksInput;
    upsert?: Prisma.OnboardingTemplateUpsertWithoutTasksInput;
    connect?: Prisma.OnboardingTemplateWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OnboardingTemplateUpdateToOneWithWhereWithoutTasksInput, Prisma.OnboardingTemplateUpdateWithoutTasksInput>, Prisma.OnboardingTemplateUncheckedUpdateWithoutTasksInput>;
};
export type OnboardingTemplateCreateNestedOneWithoutChecklistsInput = {
    create?: Prisma.XOR<Prisma.OnboardingTemplateCreateWithoutChecklistsInput, Prisma.OnboardingTemplateUncheckedCreateWithoutChecklistsInput>;
    connectOrCreate?: Prisma.OnboardingTemplateCreateOrConnectWithoutChecklistsInput;
    connect?: Prisma.OnboardingTemplateWhereUniqueInput;
};
export type OnboardingTemplateUpdateOneWithoutChecklistsNestedInput = {
    create?: Prisma.XOR<Prisma.OnboardingTemplateCreateWithoutChecklistsInput, Prisma.OnboardingTemplateUncheckedCreateWithoutChecklistsInput>;
    connectOrCreate?: Prisma.OnboardingTemplateCreateOrConnectWithoutChecklistsInput;
    upsert?: Prisma.OnboardingTemplateUpsertWithoutChecklistsInput;
    disconnect?: Prisma.OnboardingTemplateWhereInput | boolean;
    delete?: Prisma.OnboardingTemplateWhereInput | boolean;
    connect?: Prisma.OnboardingTemplateWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OnboardingTemplateUpdateToOneWithWhereWithoutChecklistsInput, Prisma.OnboardingTemplateUpdateWithoutChecklistsInput>, Prisma.OnboardingTemplateUncheckedUpdateWithoutChecklistsInput>;
};
export type OnboardingTemplateCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdBy?: string | null;
    createdAt?: Date | string;
    tasks?: Prisma.OnboardingTemplateTaskCreateNestedManyWithoutTemplateInput;
    checklists?: Prisma.OnboardingChecklistCreateNestedManyWithoutTemplateInput;
};
export type OnboardingTemplateUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdBy?: string | null;
    createdAt?: Date | string;
    tasks?: Prisma.OnboardingTemplateTaskUncheckedCreateNestedManyWithoutTemplateInput;
    checklists?: Prisma.OnboardingChecklistUncheckedCreateNestedManyWithoutTemplateInput;
};
export type OnboardingTemplateCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.OnboardingTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.OnboardingTemplateCreateWithoutOrganizationInput, Prisma.OnboardingTemplateUncheckedCreateWithoutOrganizationInput>;
};
export type OnboardingTemplateCreateManyOrganizationInputEnvelope = {
    data: Prisma.OnboardingTemplateCreateManyOrganizationInput | Prisma.OnboardingTemplateCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type OnboardingTemplateUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.OnboardingTemplateWhereUniqueInput;
    update: Prisma.XOR<Prisma.OnboardingTemplateUpdateWithoutOrganizationInput, Prisma.OnboardingTemplateUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.OnboardingTemplateCreateWithoutOrganizationInput, Prisma.OnboardingTemplateUncheckedCreateWithoutOrganizationInput>;
};
export type OnboardingTemplateUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.OnboardingTemplateWhereUniqueInput;
    data: Prisma.XOR<Prisma.OnboardingTemplateUpdateWithoutOrganizationInput, Prisma.OnboardingTemplateUncheckedUpdateWithoutOrganizationInput>;
};
export type OnboardingTemplateUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.OnboardingTemplateScalarWhereInput;
    data: Prisma.XOR<Prisma.OnboardingTemplateUpdateManyMutationInput, Prisma.OnboardingTemplateUncheckedUpdateManyWithoutOrganizationInput>;
};
export type OnboardingTemplateScalarWhereInput = {
    AND?: Prisma.OnboardingTemplateScalarWhereInput | Prisma.OnboardingTemplateScalarWhereInput[];
    OR?: Prisma.OnboardingTemplateScalarWhereInput[];
    NOT?: Prisma.OnboardingTemplateScalarWhereInput | Prisma.OnboardingTemplateScalarWhereInput[];
    id?: Prisma.UuidFilter<"OnboardingTemplate"> | string;
    organizationId?: Prisma.UuidFilter<"OnboardingTemplate"> | string;
    name?: Prisma.StringFilter<"OnboardingTemplate"> | string;
    description?: Prisma.StringNullableFilter<"OnboardingTemplate"> | string | null;
    createdBy?: Prisma.UuidNullableFilter<"OnboardingTemplate"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"OnboardingTemplate"> | Date | string;
};
export type OnboardingTemplateCreateWithoutTasksInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdBy?: string | null;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutOnboardingTemplatesInput;
    checklists?: Prisma.OnboardingChecklistCreateNestedManyWithoutTemplateInput;
};
export type OnboardingTemplateUncheckedCreateWithoutTasksInput = {
    id?: string;
    organizationId: string;
    name: string;
    description?: string | null;
    createdBy?: string | null;
    createdAt?: Date | string;
    checklists?: Prisma.OnboardingChecklistUncheckedCreateNestedManyWithoutTemplateInput;
};
export type OnboardingTemplateCreateOrConnectWithoutTasksInput = {
    where: Prisma.OnboardingTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.OnboardingTemplateCreateWithoutTasksInput, Prisma.OnboardingTemplateUncheckedCreateWithoutTasksInput>;
};
export type OnboardingTemplateUpsertWithoutTasksInput = {
    update: Prisma.XOR<Prisma.OnboardingTemplateUpdateWithoutTasksInput, Prisma.OnboardingTemplateUncheckedUpdateWithoutTasksInput>;
    create: Prisma.XOR<Prisma.OnboardingTemplateCreateWithoutTasksInput, Prisma.OnboardingTemplateUncheckedCreateWithoutTasksInput>;
    where?: Prisma.OnboardingTemplateWhereInput;
};
export type OnboardingTemplateUpdateToOneWithWhereWithoutTasksInput = {
    where?: Prisma.OnboardingTemplateWhereInput;
    data: Prisma.XOR<Prisma.OnboardingTemplateUpdateWithoutTasksInput, Prisma.OnboardingTemplateUncheckedUpdateWithoutTasksInput>;
};
export type OnboardingTemplateUpdateWithoutTasksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutOnboardingTemplatesNestedInput;
    checklists?: Prisma.OnboardingChecklistUpdateManyWithoutTemplateNestedInput;
};
export type OnboardingTemplateUncheckedUpdateWithoutTasksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checklists?: Prisma.OnboardingChecklistUncheckedUpdateManyWithoutTemplateNestedInput;
};
export type OnboardingTemplateCreateWithoutChecklistsInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdBy?: string | null;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutOnboardingTemplatesInput;
    tasks?: Prisma.OnboardingTemplateTaskCreateNestedManyWithoutTemplateInput;
};
export type OnboardingTemplateUncheckedCreateWithoutChecklistsInput = {
    id?: string;
    organizationId: string;
    name: string;
    description?: string | null;
    createdBy?: string | null;
    createdAt?: Date | string;
    tasks?: Prisma.OnboardingTemplateTaskUncheckedCreateNestedManyWithoutTemplateInput;
};
export type OnboardingTemplateCreateOrConnectWithoutChecklistsInput = {
    where: Prisma.OnboardingTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.OnboardingTemplateCreateWithoutChecklistsInput, Prisma.OnboardingTemplateUncheckedCreateWithoutChecklistsInput>;
};
export type OnboardingTemplateUpsertWithoutChecklistsInput = {
    update: Prisma.XOR<Prisma.OnboardingTemplateUpdateWithoutChecklistsInput, Prisma.OnboardingTemplateUncheckedUpdateWithoutChecklistsInput>;
    create: Prisma.XOR<Prisma.OnboardingTemplateCreateWithoutChecklistsInput, Prisma.OnboardingTemplateUncheckedCreateWithoutChecklistsInput>;
    where?: Prisma.OnboardingTemplateWhereInput;
};
export type OnboardingTemplateUpdateToOneWithWhereWithoutChecklistsInput = {
    where?: Prisma.OnboardingTemplateWhereInput;
    data: Prisma.XOR<Prisma.OnboardingTemplateUpdateWithoutChecklistsInput, Prisma.OnboardingTemplateUncheckedUpdateWithoutChecklistsInput>;
};
export type OnboardingTemplateUpdateWithoutChecklistsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutOnboardingTemplatesNestedInput;
    tasks?: Prisma.OnboardingTemplateTaskUpdateManyWithoutTemplateNestedInput;
};
export type OnboardingTemplateUncheckedUpdateWithoutChecklistsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.OnboardingTemplateTaskUncheckedUpdateManyWithoutTemplateNestedInput;
};
export type OnboardingTemplateCreateManyOrganizationInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdBy?: string | null;
    createdAt?: Date | string;
};
export type OnboardingTemplateUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.OnboardingTemplateTaskUpdateManyWithoutTemplateNestedInput;
    checklists?: Prisma.OnboardingChecklistUpdateManyWithoutTemplateNestedInput;
};
export type OnboardingTemplateUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.OnboardingTemplateTaskUncheckedUpdateManyWithoutTemplateNestedInput;
    checklists?: Prisma.OnboardingChecklistUncheckedUpdateManyWithoutTemplateNestedInput;
};
export type OnboardingTemplateUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OnboardingTemplateCountOutputType = {
    tasks: number;
    checklists: number;
};
export type OnboardingTemplateCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tasks?: boolean | OnboardingTemplateCountOutputTypeCountTasksArgs;
    checklists?: boolean | OnboardingTemplateCountOutputTypeCountChecklistsArgs;
};
export type OnboardingTemplateCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingTemplateCountOutputTypeSelect<ExtArgs> | null;
};
export type OnboardingTemplateCountOutputTypeCountTasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OnboardingTemplateTaskWhereInput;
};
export type OnboardingTemplateCountOutputTypeCountChecklistsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OnboardingChecklistWhereInput;
};
export type OnboardingTemplateSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    description?: boolean;
    createdBy?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    tasks?: boolean | Prisma.OnboardingTemplate$tasksArgs<ExtArgs>;
    checklists?: boolean | Prisma.OnboardingTemplate$checklistsArgs<ExtArgs>;
    _count?: boolean | Prisma.OnboardingTemplateCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["onboardingTemplate"]>;
export type OnboardingTemplateSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    description?: boolean;
    createdBy?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["onboardingTemplate"]>;
export type OnboardingTemplateSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    description?: boolean;
    createdBy?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["onboardingTemplate"]>;
export type OnboardingTemplateSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    description?: boolean;
    createdBy?: boolean;
    createdAt?: boolean;
};
export type OnboardingTemplateOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "name" | "description" | "createdBy" | "createdAt", ExtArgs["result"]["onboardingTemplate"]>;
export type OnboardingTemplateInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    tasks?: boolean | Prisma.OnboardingTemplate$tasksArgs<ExtArgs>;
    checklists?: boolean | Prisma.OnboardingTemplate$checklistsArgs<ExtArgs>;
    _count?: boolean | Prisma.OnboardingTemplateCountOutputTypeDefaultArgs<ExtArgs>;
};
export type OnboardingTemplateIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type OnboardingTemplateIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type $OnboardingTemplatePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OnboardingTemplate";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        tasks: Prisma.$OnboardingTemplateTaskPayload<ExtArgs>[];
        checklists: Prisma.$OnboardingChecklistPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        name: string;
        description: string | null;
        createdBy: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["onboardingTemplate"]>;
    composites: {};
};
export type OnboardingTemplateGetPayload<S extends boolean | null | undefined | OnboardingTemplateDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OnboardingTemplatePayload, S>;
export type OnboardingTemplateCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OnboardingTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OnboardingTemplateCountAggregateInputType | true;
};
export interface OnboardingTemplateDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OnboardingTemplate'];
        meta: {
            name: 'OnboardingTemplate';
        };
    };
    findUnique<T extends OnboardingTemplateFindUniqueArgs>(args: Prisma.SelectSubset<T, OnboardingTemplateFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OnboardingTemplateClient<runtime.Types.Result.GetResult<Prisma.$OnboardingTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OnboardingTemplateFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OnboardingTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OnboardingTemplateClient<runtime.Types.Result.GetResult<Prisma.$OnboardingTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OnboardingTemplateFindFirstArgs>(args?: Prisma.SelectSubset<T, OnboardingTemplateFindFirstArgs<ExtArgs>>): Prisma.Prisma__OnboardingTemplateClient<runtime.Types.Result.GetResult<Prisma.$OnboardingTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OnboardingTemplateFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OnboardingTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OnboardingTemplateClient<runtime.Types.Result.GetResult<Prisma.$OnboardingTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OnboardingTemplateFindManyArgs>(args?: Prisma.SelectSubset<T, OnboardingTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OnboardingTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OnboardingTemplateCreateArgs>(args: Prisma.SelectSubset<T, OnboardingTemplateCreateArgs<ExtArgs>>): Prisma.Prisma__OnboardingTemplateClient<runtime.Types.Result.GetResult<Prisma.$OnboardingTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OnboardingTemplateCreateManyArgs>(args?: Prisma.SelectSubset<T, OnboardingTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OnboardingTemplateCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OnboardingTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OnboardingTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OnboardingTemplateDeleteArgs>(args: Prisma.SelectSubset<T, OnboardingTemplateDeleteArgs<ExtArgs>>): Prisma.Prisma__OnboardingTemplateClient<runtime.Types.Result.GetResult<Prisma.$OnboardingTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OnboardingTemplateUpdateArgs>(args: Prisma.SelectSubset<T, OnboardingTemplateUpdateArgs<ExtArgs>>): Prisma.Prisma__OnboardingTemplateClient<runtime.Types.Result.GetResult<Prisma.$OnboardingTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OnboardingTemplateDeleteManyArgs>(args?: Prisma.SelectSubset<T, OnboardingTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OnboardingTemplateUpdateManyArgs>(args: Prisma.SelectSubset<T, OnboardingTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OnboardingTemplateUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OnboardingTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OnboardingTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OnboardingTemplateUpsertArgs>(args: Prisma.SelectSubset<T, OnboardingTemplateUpsertArgs<ExtArgs>>): Prisma.Prisma__OnboardingTemplateClient<runtime.Types.Result.GetResult<Prisma.$OnboardingTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OnboardingTemplateCountArgs>(args?: Prisma.Subset<T, OnboardingTemplateCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OnboardingTemplateCountAggregateOutputType> : number>;
    aggregate<T extends OnboardingTemplateAggregateArgs>(args: Prisma.Subset<T, OnboardingTemplateAggregateArgs>): Prisma.PrismaPromise<GetOnboardingTemplateAggregateType<T>>;
    groupBy<T extends OnboardingTemplateGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OnboardingTemplateGroupByArgs['orderBy'];
    } : {
        orderBy?: OnboardingTemplateGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OnboardingTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOnboardingTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OnboardingTemplateFieldRefs;
}
export interface Prisma__OnboardingTemplateClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    tasks<T extends Prisma.OnboardingTemplate$tasksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OnboardingTemplate$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OnboardingTemplateTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    checklists<T extends Prisma.OnboardingTemplate$checklistsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OnboardingTemplate$checklistsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OnboardingChecklistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OnboardingTemplateFieldRefs {
    readonly id: Prisma.FieldRef<"OnboardingTemplate", 'String'>;
    readonly organizationId: Prisma.FieldRef<"OnboardingTemplate", 'String'>;
    readonly name: Prisma.FieldRef<"OnboardingTemplate", 'String'>;
    readonly description: Prisma.FieldRef<"OnboardingTemplate", 'String'>;
    readonly createdBy: Prisma.FieldRef<"OnboardingTemplate", 'String'>;
    readonly createdAt: Prisma.FieldRef<"OnboardingTemplate", 'DateTime'>;
}
export type OnboardingTemplateFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingTemplateSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingTemplateOmit<ExtArgs> | null;
    include?: Prisma.OnboardingTemplateInclude<ExtArgs> | null;
    where: Prisma.OnboardingTemplateWhereUniqueInput;
};
export type OnboardingTemplateFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingTemplateSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingTemplateOmit<ExtArgs> | null;
    include?: Prisma.OnboardingTemplateInclude<ExtArgs> | null;
    where: Prisma.OnboardingTemplateWhereUniqueInput;
};
export type OnboardingTemplateFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingTemplateSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingTemplateOmit<ExtArgs> | null;
    include?: Prisma.OnboardingTemplateInclude<ExtArgs> | null;
    where?: Prisma.OnboardingTemplateWhereInput;
    orderBy?: Prisma.OnboardingTemplateOrderByWithRelationInput | Prisma.OnboardingTemplateOrderByWithRelationInput[];
    cursor?: Prisma.OnboardingTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OnboardingTemplateScalarFieldEnum | Prisma.OnboardingTemplateScalarFieldEnum[];
};
export type OnboardingTemplateFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingTemplateSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingTemplateOmit<ExtArgs> | null;
    include?: Prisma.OnboardingTemplateInclude<ExtArgs> | null;
    where?: Prisma.OnboardingTemplateWhereInput;
    orderBy?: Prisma.OnboardingTemplateOrderByWithRelationInput | Prisma.OnboardingTemplateOrderByWithRelationInput[];
    cursor?: Prisma.OnboardingTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OnboardingTemplateScalarFieldEnum | Prisma.OnboardingTemplateScalarFieldEnum[];
};
export type OnboardingTemplateFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingTemplateSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingTemplateOmit<ExtArgs> | null;
    include?: Prisma.OnboardingTemplateInclude<ExtArgs> | null;
    where?: Prisma.OnboardingTemplateWhereInput;
    orderBy?: Prisma.OnboardingTemplateOrderByWithRelationInput | Prisma.OnboardingTemplateOrderByWithRelationInput[];
    cursor?: Prisma.OnboardingTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OnboardingTemplateScalarFieldEnum | Prisma.OnboardingTemplateScalarFieldEnum[];
};
export type OnboardingTemplateCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingTemplateSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingTemplateOmit<ExtArgs> | null;
    include?: Prisma.OnboardingTemplateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OnboardingTemplateCreateInput, Prisma.OnboardingTemplateUncheckedCreateInput>;
};
export type OnboardingTemplateCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OnboardingTemplateCreateManyInput | Prisma.OnboardingTemplateCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OnboardingTemplateCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingTemplateSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OnboardingTemplateOmit<ExtArgs> | null;
    data: Prisma.OnboardingTemplateCreateManyInput | Prisma.OnboardingTemplateCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.OnboardingTemplateIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type OnboardingTemplateUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingTemplateSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingTemplateOmit<ExtArgs> | null;
    include?: Prisma.OnboardingTemplateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OnboardingTemplateUpdateInput, Prisma.OnboardingTemplateUncheckedUpdateInput>;
    where: Prisma.OnboardingTemplateWhereUniqueInput;
};
export type OnboardingTemplateUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OnboardingTemplateUpdateManyMutationInput, Prisma.OnboardingTemplateUncheckedUpdateManyInput>;
    where?: Prisma.OnboardingTemplateWhereInput;
    limit?: number;
};
export type OnboardingTemplateUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingTemplateSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OnboardingTemplateOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OnboardingTemplateUpdateManyMutationInput, Prisma.OnboardingTemplateUncheckedUpdateManyInput>;
    where?: Prisma.OnboardingTemplateWhereInput;
    limit?: number;
    include?: Prisma.OnboardingTemplateIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type OnboardingTemplateUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingTemplateSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingTemplateOmit<ExtArgs> | null;
    include?: Prisma.OnboardingTemplateInclude<ExtArgs> | null;
    where: Prisma.OnboardingTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.OnboardingTemplateCreateInput, Prisma.OnboardingTemplateUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OnboardingTemplateUpdateInput, Prisma.OnboardingTemplateUncheckedUpdateInput>;
};
export type OnboardingTemplateDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingTemplateSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingTemplateOmit<ExtArgs> | null;
    include?: Prisma.OnboardingTemplateInclude<ExtArgs> | null;
    where: Prisma.OnboardingTemplateWhereUniqueInput;
};
export type OnboardingTemplateDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OnboardingTemplateWhereInput;
    limit?: number;
};
export type OnboardingTemplate$tasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingTemplateTaskSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingTemplateTaskOmit<ExtArgs> | null;
    include?: Prisma.OnboardingTemplateTaskInclude<ExtArgs> | null;
    where?: Prisma.OnboardingTemplateTaskWhereInput;
    orderBy?: Prisma.OnboardingTemplateTaskOrderByWithRelationInput | Prisma.OnboardingTemplateTaskOrderByWithRelationInput[];
    cursor?: Prisma.OnboardingTemplateTaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OnboardingTemplateTaskScalarFieldEnum | Prisma.OnboardingTemplateTaskScalarFieldEnum[];
};
export type OnboardingTemplate$checklistsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingChecklistSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingChecklistOmit<ExtArgs> | null;
    include?: Prisma.OnboardingChecklistInclude<ExtArgs> | null;
    where?: Prisma.OnboardingChecklistWhereInput;
    orderBy?: Prisma.OnboardingChecklistOrderByWithRelationInput | Prisma.OnboardingChecklistOrderByWithRelationInput[];
    cursor?: Prisma.OnboardingChecklistWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OnboardingChecklistScalarFieldEnum | Prisma.OnboardingChecklistScalarFieldEnum[];
};
export type OnboardingTemplateDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingTemplateSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingTemplateOmit<ExtArgs> | null;
    include?: Prisma.OnboardingTemplateInclude<ExtArgs> | null;
};
