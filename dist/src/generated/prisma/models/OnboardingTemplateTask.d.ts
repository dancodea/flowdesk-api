import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OnboardingTemplateTaskModel = runtime.Types.Result.DefaultSelection<Prisma.$OnboardingTemplateTaskPayload>;
export type AggregateOnboardingTemplateTask = {
    _count: OnboardingTemplateTaskCountAggregateOutputType | null;
    _avg: OnboardingTemplateTaskAvgAggregateOutputType | null;
    _sum: OnboardingTemplateTaskSumAggregateOutputType | null;
    _min: OnboardingTemplateTaskMinAggregateOutputType | null;
    _max: OnboardingTemplateTaskMaxAggregateOutputType | null;
};
export type OnboardingTemplateTaskAvgAggregateOutputType = {
    dueAfterDays: number | null;
    orderIndex: number | null;
};
export type OnboardingTemplateTaskSumAggregateOutputType = {
    dueAfterDays: number | null;
    orderIndex: number | null;
};
export type OnboardingTemplateTaskMinAggregateOutputType = {
    id: string | null;
    templateId: string | null;
    title: string | null;
    description: string | null;
    dueAfterDays: number | null;
    assignTo: $Enums.OnboardingAssignee | null;
    orderIndex: number | null;
};
export type OnboardingTemplateTaskMaxAggregateOutputType = {
    id: string | null;
    templateId: string | null;
    title: string | null;
    description: string | null;
    dueAfterDays: number | null;
    assignTo: $Enums.OnboardingAssignee | null;
    orderIndex: number | null;
};
export type OnboardingTemplateTaskCountAggregateOutputType = {
    id: number;
    templateId: number;
    title: number;
    description: number;
    dueAfterDays: number;
    assignTo: number;
    orderIndex: number;
    _all: number;
};
export type OnboardingTemplateTaskAvgAggregateInputType = {
    dueAfterDays?: true;
    orderIndex?: true;
};
export type OnboardingTemplateTaskSumAggregateInputType = {
    dueAfterDays?: true;
    orderIndex?: true;
};
export type OnboardingTemplateTaskMinAggregateInputType = {
    id?: true;
    templateId?: true;
    title?: true;
    description?: true;
    dueAfterDays?: true;
    assignTo?: true;
    orderIndex?: true;
};
export type OnboardingTemplateTaskMaxAggregateInputType = {
    id?: true;
    templateId?: true;
    title?: true;
    description?: true;
    dueAfterDays?: true;
    assignTo?: true;
    orderIndex?: true;
};
export type OnboardingTemplateTaskCountAggregateInputType = {
    id?: true;
    templateId?: true;
    title?: true;
    description?: true;
    dueAfterDays?: true;
    assignTo?: true;
    orderIndex?: true;
    _all?: true;
};
export type OnboardingTemplateTaskAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OnboardingTemplateTaskWhereInput;
    orderBy?: Prisma.OnboardingTemplateTaskOrderByWithRelationInput | Prisma.OnboardingTemplateTaskOrderByWithRelationInput[];
    cursor?: Prisma.OnboardingTemplateTaskWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OnboardingTemplateTaskCountAggregateInputType;
    _avg?: OnboardingTemplateTaskAvgAggregateInputType;
    _sum?: OnboardingTemplateTaskSumAggregateInputType;
    _min?: OnboardingTemplateTaskMinAggregateInputType;
    _max?: OnboardingTemplateTaskMaxAggregateInputType;
};
export type GetOnboardingTemplateTaskAggregateType<T extends OnboardingTemplateTaskAggregateArgs> = {
    [P in keyof T & keyof AggregateOnboardingTemplateTask]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOnboardingTemplateTask[P]> : Prisma.GetScalarType<T[P], AggregateOnboardingTemplateTask[P]>;
};
export type OnboardingTemplateTaskGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OnboardingTemplateTaskWhereInput;
    orderBy?: Prisma.OnboardingTemplateTaskOrderByWithAggregationInput | Prisma.OnboardingTemplateTaskOrderByWithAggregationInput[];
    by: Prisma.OnboardingTemplateTaskScalarFieldEnum[] | Prisma.OnboardingTemplateTaskScalarFieldEnum;
    having?: Prisma.OnboardingTemplateTaskScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OnboardingTemplateTaskCountAggregateInputType | true;
    _avg?: OnboardingTemplateTaskAvgAggregateInputType;
    _sum?: OnboardingTemplateTaskSumAggregateInputType;
    _min?: OnboardingTemplateTaskMinAggregateInputType;
    _max?: OnboardingTemplateTaskMaxAggregateInputType;
};
export type OnboardingTemplateTaskGroupByOutputType = {
    id: string;
    templateId: string;
    title: string;
    description: string | null;
    dueAfterDays: number;
    assignTo: $Enums.OnboardingAssignee;
    orderIndex: number;
    _count: OnboardingTemplateTaskCountAggregateOutputType | null;
    _avg: OnboardingTemplateTaskAvgAggregateOutputType | null;
    _sum: OnboardingTemplateTaskSumAggregateOutputType | null;
    _min: OnboardingTemplateTaskMinAggregateOutputType | null;
    _max: OnboardingTemplateTaskMaxAggregateOutputType | null;
};
export type GetOnboardingTemplateTaskGroupByPayload<T extends OnboardingTemplateTaskGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OnboardingTemplateTaskGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OnboardingTemplateTaskGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OnboardingTemplateTaskGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OnboardingTemplateTaskGroupByOutputType[P]>;
}>>;
export type OnboardingTemplateTaskWhereInput = {
    AND?: Prisma.OnboardingTemplateTaskWhereInput | Prisma.OnboardingTemplateTaskWhereInput[];
    OR?: Prisma.OnboardingTemplateTaskWhereInput[];
    NOT?: Prisma.OnboardingTemplateTaskWhereInput | Prisma.OnboardingTemplateTaskWhereInput[];
    id?: Prisma.UuidFilter<"OnboardingTemplateTask"> | string;
    templateId?: Prisma.UuidFilter<"OnboardingTemplateTask"> | string;
    title?: Prisma.StringFilter<"OnboardingTemplateTask"> | string;
    description?: Prisma.StringNullableFilter<"OnboardingTemplateTask"> | string | null;
    dueAfterDays?: Prisma.IntFilter<"OnboardingTemplateTask"> | number;
    assignTo?: Prisma.EnumOnboardingAssigneeFilter<"OnboardingTemplateTask"> | $Enums.OnboardingAssignee;
    orderIndex?: Prisma.IntFilter<"OnboardingTemplateTask"> | number;
    template?: Prisma.XOR<Prisma.OnboardingTemplateScalarRelationFilter, Prisma.OnboardingTemplateWhereInput>;
};
export type OnboardingTemplateTaskOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    dueAfterDays?: Prisma.SortOrder;
    assignTo?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    template?: Prisma.OnboardingTemplateOrderByWithRelationInput;
};
export type OnboardingTemplateTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.OnboardingTemplateTaskWhereInput | Prisma.OnboardingTemplateTaskWhereInput[];
    OR?: Prisma.OnboardingTemplateTaskWhereInput[];
    NOT?: Prisma.OnboardingTemplateTaskWhereInput | Prisma.OnboardingTemplateTaskWhereInput[];
    templateId?: Prisma.UuidFilter<"OnboardingTemplateTask"> | string;
    title?: Prisma.StringFilter<"OnboardingTemplateTask"> | string;
    description?: Prisma.StringNullableFilter<"OnboardingTemplateTask"> | string | null;
    dueAfterDays?: Prisma.IntFilter<"OnboardingTemplateTask"> | number;
    assignTo?: Prisma.EnumOnboardingAssigneeFilter<"OnboardingTemplateTask"> | $Enums.OnboardingAssignee;
    orderIndex?: Prisma.IntFilter<"OnboardingTemplateTask"> | number;
    template?: Prisma.XOR<Prisma.OnboardingTemplateScalarRelationFilter, Prisma.OnboardingTemplateWhereInput>;
}, "id">;
export type OnboardingTemplateTaskOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    dueAfterDays?: Prisma.SortOrder;
    assignTo?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    _count?: Prisma.OnboardingTemplateTaskCountOrderByAggregateInput;
    _avg?: Prisma.OnboardingTemplateTaskAvgOrderByAggregateInput;
    _max?: Prisma.OnboardingTemplateTaskMaxOrderByAggregateInput;
    _min?: Prisma.OnboardingTemplateTaskMinOrderByAggregateInput;
    _sum?: Prisma.OnboardingTemplateTaskSumOrderByAggregateInput;
};
export type OnboardingTemplateTaskScalarWhereWithAggregatesInput = {
    AND?: Prisma.OnboardingTemplateTaskScalarWhereWithAggregatesInput | Prisma.OnboardingTemplateTaskScalarWhereWithAggregatesInput[];
    OR?: Prisma.OnboardingTemplateTaskScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OnboardingTemplateTaskScalarWhereWithAggregatesInput | Prisma.OnboardingTemplateTaskScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"OnboardingTemplateTask"> | string;
    templateId?: Prisma.UuidWithAggregatesFilter<"OnboardingTemplateTask"> | string;
    title?: Prisma.StringWithAggregatesFilter<"OnboardingTemplateTask"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"OnboardingTemplateTask"> | string | null;
    dueAfterDays?: Prisma.IntWithAggregatesFilter<"OnboardingTemplateTask"> | number;
    assignTo?: Prisma.EnumOnboardingAssigneeWithAggregatesFilter<"OnboardingTemplateTask"> | $Enums.OnboardingAssignee;
    orderIndex?: Prisma.IntWithAggregatesFilter<"OnboardingTemplateTask"> | number;
};
export type OnboardingTemplateTaskCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    dueAfterDays?: number;
    assignTo?: $Enums.OnboardingAssignee;
    orderIndex: number;
    template: Prisma.OnboardingTemplateCreateNestedOneWithoutTasksInput;
};
export type OnboardingTemplateTaskUncheckedCreateInput = {
    id?: string;
    templateId: string;
    title: string;
    description?: string | null;
    dueAfterDays?: number;
    assignTo?: $Enums.OnboardingAssignee;
    orderIndex: number;
};
export type OnboardingTemplateTaskUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueAfterDays?: Prisma.IntFieldUpdateOperationsInput | number;
    assignTo?: Prisma.EnumOnboardingAssigneeFieldUpdateOperationsInput | $Enums.OnboardingAssignee;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    template?: Prisma.OnboardingTemplateUpdateOneRequiredWithoutTasksNestedInput;
};
export type OnboardingTemplateTaskUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueAfterDays?: Prisma.IntFieldUpdateOperationsInput | number;
    assignTo?: Prisma.EnumOnboardingAssigneeFieldUpdateOperationsInput | $Enums.OnboardingAssignee;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type OnboardingTemplateTaskCreateManyInput = {
    id?: string;
    templateId: string;
    title: string;
    description?: string | null;
    dueAfterDays?: number;
    assignTo?: $Enums.OnboardingAssignee;
    orderIndex: number;
};
export type OnboardingTemplateTaskUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueAfterDays?: Prisma.IntFieldUpdateOperationsInput | number;
    assignTo?: Prisma.EnumOnboardingAssigneeFieldUpdateOperationsInput | $Enums.OnboardingAssignee;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type OnboardingTemplateTaskUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueAfterDays?: Prisma.IntFieldUpdateOperationsInput | number;
    assignTo?: Prisma.EnumOnboardingAssigneeFieldUpdateOperationsInput | $Enums.OnboardingAssignee;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type OnboardingTemplateTaskListRelationFilter = {
    every?: Prisma.OnboardingTemplateTaskWhereInput;
    some?: Prisma.OnboardingTemplateTaskWhereInput;
    none?: Prisma.OnboardingTemplateTaskWhereInput;
};
export type OnboardingTemplateTaskOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OnboardingTemplateTaskCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    dueAfterDays?: Prisma.SortOrder;
    assignTo?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
};
export type OnboardingTemplateTaskAvgOrderByAggregateInput = {
    dueAfterDays?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
};
export type OnboardingTemplateTaskMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    dueAfterDays?: Prisma.SortOrder;
    assignTo?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
};
export type OnboardingTemplateTaskMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    dueAfterDays?: Prisma.SortOrder;
    assignTo?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
};
export type OnboardingTemplateTaskSumOrderByAggregateInput = {
    dueAfterDays?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
};
export type OnboardingTemplateTaskCreateNestedManyWithoutTemplateInput = {
    create?: Prisma.XOR<Prisma.OnboardingTemplateTaskCreateWithoutTemplateInput, Prisma.OnboardingTemplateTaskUncheckedCreateWithoutTemplateInput> | Prisma.OnboardingTemplateTaskCreateWithoutTemplateInput[] | Prisma.OnboardingTemplateTaskUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.OnboardingTemplateTaskCreateOrConnectWithoutTemplateInput | Prisma.OnboardingTemplateTaskCreateOrConnectWithoutTemplateInput[];
    createMany?: Prisma.OnboardingTemplateTaskCreateManyTemplateInputEnvelope;
    connect?: Prisma.OnboardingTemplateTaskWhereUniqueInput | Prisma.OnboardingTemplateTaskWhereUniqueInput[];
};
export type OnboardingTemplateTaskUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: Prisma.XOR<Prisma.OnboardingTemplateTaskCreateWithoutTemplateInput, Prisma.OnboardingTemplateTaskUncheckedCreateWithoutTemplateInput> | Prisma.OnboardingTemplateTaskCreateWithoutTemplateInput[] | Prisma.OnboardingTemplateTaskUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.OnboardingTemplateTaskCreateOrConnectWithoutTemplateInput | Prisma.OnboardingTemplateTaskCreateOrConnectWithoutTemplateInput[];
    createMany?: Prisma.OnboardingTemplateTaskCreateManyTemplateInputEnvelope;
    connect?: Prisma.OnboardingTemplateTaskWhereUniqueInput | Prisma.OnboardingTemplateTaskWhereUniqueInput[];
};
export type OnboardingTemplateTaskUpdateManyWithoutTemplateNestedInput = {
    create?: Prisma.XOR<Prisma.OnboardingTemplateTaskCreateWithoutTemplateInput, Prisma.OnboardingTemplateTaskUncheckedCreateWithoutTemplateInput> | Prisma.OnboardingTemplateTaskCreateWithoutTemplateInput[] | Prisma.OnboardingTemplateTaskUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.OnboardingTemplateTaskCreateOrConnectWithoutTemplateInput | Prisma.OnboardingTemplateTaskCreateOrConnectWithoutTemplateInput[];
    upsert?: Prisma.OnboardingTemplateTaskUpsertWithWhereUniqueWithoutTemplateInput | Prisma.OnboardingTemplateTaskUpsertWithWhereUniqueWithoutTemplateInput[];
    createMany?: Prisma.OnboardingTemplateTaskCreateManyTemplateInputEnvelope;
    set?: Prisma.OnboardingTemplateTaskWhereUniqueInput | Prisma.OnboardingTemplateTaskWhereUniqueInput[];
    disconnect?: Prisma.OnboardingTemplateTaskWhereUniqueInput | Prisma.OnboardingTemplateTaskWhereUniqueInput[];
    delete?: Prisma.OnboardingTemplateTaskWhereUniqueInput | Prisma.OnboardingTemplateTaskWhereUniqueInput[];
    connect?: Prisma.OnboardingTemplateTaskWhereUniqueInput | Prisma.OnboardingTemplateTaskWhereUniqueInput[];
    update?: Prisma.OnboardingTemplateTaskUpdateWithWhereUniqueWithoutTemplateInput | Prisma.OnboardingTemplateTaskUpdateWithWhereUniqueWithoutTemplateInput[];
    updateMany?: Prisma.OnboardingTemplateTaskUpdateManyWithWhereWithoutTemplateInput | Prisma.OnboardingTemplateTaskUpdateManyWithWhereWithoutTemplateInput[];
    deleteMany?: Prisma.OnboardingTemplateTaskScalarWhereInput | Prisma.OnboardingTemplateTaskScalarWhereInput[];
};
export type OnboardingTemplateTaskUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: Prisma.XOR<Prisma.OnboardingTemplateTaskCreateWithoutTemplateInput, Prisma.OnboardingTemplateTaskUncheckedCreateWithoutTemplateInput> | Prisma.OnboardingTemplateTaskCreateWithoutTemplateInput[] | Prisma.OnboardingTemplateTaskUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.OnboardingTemplateTaskCreateOrConnectWithoutTemplateInput | Prisma.OnboardingTemplateTaskCreateOrConnectWithoutTemplateInput[];
    upsert?: Prisma.OnboardingTemplateTaskUpsertWithWhereUniqueWithoutTemplateInput | Prisma.OnboardingTemplateTaskUpsertWithWhereUniqueWithoutTemplateInput[];
    createMany?: Prisma.OnboardingTemplateTaskCreateManyTemplateInputEnvelope;
    set?: Prisma.OnboardingTemplateTaskWhereUniqueInput | Prisma.OnboardingTemplateTaskWhereUniqueInput[];
    disconnect?: Prisma.OnboardingTemplateTaskWhereUniqueInput | Prisma.OnboardingTemplateTaskWhereUniqueInput[];
    delete?: Prisma.OnboardingTemplateTaskWhereUniqueInput | Prisma.OnboardingTemplateTaskWhereUniqueInput[];
    connect?: Prisma.OnboardingTemplateTaskWhereUniqueInput | Prisma.OnboardingTemplateTaskWhereUniqueInput[];
    update?: Prisma.OnboardingTemplateTaskUpdateWithWhereUniqueWithoutTemplateInput | Prisma.OnboardingTemplateTaskUpdateWithWhereUniqueWithoutTemplateInput[];
    updateMany?: Prisma.OnboardingTemplateTaskUpdateManyWithWhereWithoutTemplateInput | Prisma.OnboardingTemplateTaskUpdateManyWithWhereWithoutTemplateInput[];
    deleteMany?: Prisma.OnboardingTemplateTaskScalarWhereInput | Prisma.OnboardingTemplateTaskScalarWhereInput[];
};
export type EnumOnboardingAssigneeFieldUpdateOperationsInput = {
    set?: $Enums.OnboardingAssignee;
};
export type OnboardingTemplateTaskCreateWithoutTemplateInput = {
    id?: string;
    title: string;
    description?: string | null;
    dueAfterDays?: number;
    assignTo?: $Enums.OnboardingAssignee;
    orderIndex: number;
};
export type OnboardingTemplateTaskUncheckedCreateWithoutTemplateInput = {
    id?: string;
    title: string;
    description?: string | null;
    dueAfterDays?: number;
    assignTo?: $Enums.OnboardingAssignee;
    orderIndex: number;
};
export type OnboardingTemplateTaskCreateOrConnectWithoutTemplateInput = {
    where: Prisma.OnboardingTemplateTaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.OnboardingTemplateTaskCreateWithoutTemplateInput, Prisma.OnboardingTemplateTaskUncheckedCreateWithoutTemplateInput>;
};
export type OnboardingTemplateTaskCreateManyTemplateInputEnvelope = {
    data: Prisma.OnboardingTemplateTaskCreateManyTemplateInput | Prisma.OnboardingTemplateTaskCreateManyTemplateInput[];
    skipDuplicates?: boolean;
};
export type OnboardingTemplateTaskUpsertWithWhereUniqueWithoutTemplateInput = {
    where: Prisma.OnboardingTemplateTaskWhereUniqueInput;
    update: Prisma.XOR<Prisma.OnboardingTemplateTaskUpdateWithoutTemplateInput, Prisma.OnboardingTemplateTaskUncheckedUpdateWithoutTemplateInput>;
    create: Prisma.XOR<Prisma.OnboardingTemplateTaskCreateWithoutTemplateInput, Prisma.OnboardingTemplateTaskUncheckedCreateWithoutTemplateInput>;
};
export type OnboardingTemplateTaskUpdateWithWhereUniqueWithoutTemplateInput = {
    where: Prisma.OnboardingTemplateTaskWhereUniqueInput;
    data: Prisma.XOR<Prisma.OnboardingTemplateTaskUpdateWithoutTemplateInput, Prisma.OnboardingTemplateTaskUncheckedUpdateWithoutTemplateInput>;
};
export type OnboardingTemplateTaskUpdateManyWithWhereWithoutTemplateInput = {
    where: Prisma.OnboardingTemplateTaskScalarWhereInput;
    data: Prisma.XOR<Prisma.OnboardingTemplateTaskUpdateManyMutationInput, Prisma.OnboardingTemplateTaskUncheckedUpdateManyWithoutTemplateInput>;
};
export type OnboardingTemplateTaskScalarWhereInput = {
    AND?: Prisma.OnboardingTemplateTaskScalarWhereInput | Prisma.OnboardingTemplateTaskScalarWhereInput[];
    OR?: Prisma.OnboardingTemplateTaskScalarWhereInput[];
    NOT?: Prisma.OnboardingTemplateTaskScalarWhereInput | Prisma.OnboardingTemplateTaskScalarWhereInput[];
    id?: Prisma.UuidFilter<"OnboardingTemplateTask"> | string;
    templateId?: Prisma.UuidFilter<"OnboardingTemplateTask"> | string;
    title?: Prisma.StringFilter<"OnboardingTemplateTask"> | string;
    description?: Prisma.StringNullableFilter<"OnboardingTemplateTask"> | string | null;
    dueAfterDays?: Prisma.IntFilter<"OnboardingTemplateTask"> | number;
    assignTo?: Prisma.EnumOnboardingAssigneeFilter<"OnboardingTemplateTask"> | $Enums.OnboardingAssignee;
    orderIndex?: Prisma.IntFilter<"OnboardingTemplateTask"> | number;
};
export type OnboardingTemplateTaskCreateManyTemplateInput = {
    id?: string;
    title: string;
    description?: string | null;
    dueAfterDays?: number;
    assignTo?: $Enums.OnboardingAssignee;
    orderIndex: number;
};
export type OnboardingTemplateTaskUpdateWithoutTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueAfterDays?: Prisma.IntFieldUpdateOperationsInput | number;
    assignTo?: Prisma.EnumOnboardingAssigneeFieldUpdateOperationsInput | $Enums.OnboardingAssignee;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type OnboardingTemplateTaskUncheckedUpdateWithoutTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueAfterDays?: Prisma.IntFieldUpdateOperationsInput | number;
    assignTo?: Prisma.EnumOnboardingAssigneeFieldUpdateOperationsInput | $Enums.OnboardingAssignee;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type OnboardingTemplateTaskUncheckedUpdateManyWithoutTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueAfterDays?: Prisma.IntFieldUpdateOperationsInput | number;
    assignTo?: Prisma.EnumOnboardingAssigneeFieldUpdateOperationsInput | $Enums.OnboardingAssignee;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type OnboardingTemplateTaskSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    templateId?: boolean;
    title?: boolean;
    description?: boolean;
    dueAfterDays?: boolean;
    assignTo?: boolean;
    orderIndex?: boolean;
    template?: boolean | Prisma.OnboardingTemplateDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["onboardingTemplateTask"]>;
export type OnboardingTemplateTaskSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    templateId?: boolean;
    title?: boolean;
    description?: boolean;
    dueAfterDays?: boolean;
    assignTo?: boolean;
    orderIndex?: boolean;
    template?: boolean | Prisma.OnboardingTemplateDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["onboardingTemplateTask"]>;
export type OnboardingTemplateTaskSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    templateId?: boolean;
    title?: boolean;
    description?: boolean;
    dueAfterDays?: boolean;
    assignTo?: boolean;
    orderIndex?: boolean;
    template?: boolean | Prisma.OnboardingTemplateDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["onboardingTemplateTask"]>;
export type OnboardingTemplateTaskSelectScalar = {
    id?: boolean;
    templateId?: boolean;
    title?: boolean;
    description?: boolean;
    dueAfterDays?: boolean;
    assignTo?: boolean;
    orderIndex?: boolean;
};
export type OnboardingTemplateTaskOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "templateId" | "title" | "description" | "dueAfterDays" | "assignTo" | "orderIndex", ExtArgs["result"]["onboardingTemplateTask"]>;
export type OnboardingTemplateTaskInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    template?: boolean | Prisma.OnboardingTemplateDefaultArgs<ExtArgs>;
};
export type OnboardingTemplateTaskIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    template?: boolean | Prisma.OnboardingTemplateDefaultArgs<ExtArgs>;
};
export type OnboardingTemplateTaskIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    template?: boolean | Prisma.OnboardingTemplateDefaultArgs<ExtArgs>;
};
export type $OnboardingTemplateTaskPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OnboardingTemplateTask";
    objects: {
        template: Prisma.$OnboardingTemplatePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        templateId: string;
        title: string;
        description: string | null;
        dueAfterDays: number;
        assignTo: $Enums.OnboardingAssignee;
        orderIndex: number;
    }, ExtArgs["result"]["onboardingTemplateTask"]>;
    composites: {};
};
export type OnboardingTemplateTaskGetPayload<S extends boolean | null | undefined | OnboardingTemplateTaskDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OnboardingTemplateTaskPayload, S>;
export type OnboardingTemplateTaskCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OnboardingTemplateTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OnboardingTemplateTaskCountAggregateInputType | true;
};
export interface OnboardingTemplateTaskDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OnboardingTemplateTask'];
        meta: {
            name: 'OnboardingTemplateTask';
        };
    };
    findUnique<T extends OnboardingTemplateTaskFindUniqueArgs>(args: Prisma.SelectSubset<T, OnboardingTemplateTaskFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OnboardingTemplateTaskClient<runtime.Types.Result.GetResult<Prisma.$OnboardingTemplateTaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OnboardingTemplateTaskFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OnboardingTemplateTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OnboardingTemplateTaskClient<runtime.Types.Result.GetResult<Prisma.$OnboardingTemplateTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OnboardingTemplateTaskFindFirstArgs>(args?: Prisma.SelectSubset<T, OnboardingTemplateTaskFindFirstArgs<ExtArgs>>): Prisma.Prisma__OnboardingTemplateTaskClient<runtime.Types.Result.GetResult<Prisma.$OnboardingTemplateTaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OnboardingTemplateTaskFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OnboardingTemplateTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OnboardingTemplateTaskClient<runtime.Types.Result.GetResult<Prisma.$OnboardingTemplateTaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OnboardingTemplateTaskFindManyArgs>(args?: Prisma.SelectSubset<T, OnboardingTemplateTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OnboardingTemplateTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OnboardingTemplateTaskCreateArgs>(args: Prisma.SelectSubset<T, OnboardingTemplateTaskCreateArgs<ExtArgs>>): Prisma.Prisma__OnboardingTemplateTaskClient<runtime.Types.Result.GetResult<Prisma.$OnboardingTemplateTaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OnboardingTemplateTaskCreateManyArgs>(args?: Prisma.SelectSubset<T, OnboardingTemplateTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OnboardingTemplateTaskCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OnboardingTemplateTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OnboardingTemplateTaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OnboardingTemplateTaskDeleteArgs>(args: Prisma.SelectSubset<T, OnboardingTemplateTaskDeleteArgs<ExtArgs>>): Prisma.Prisma__OnboardingTemplateTaskClient<runtime.Types.Result.GetResult<Prisma.$OnboardingTemplateTaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OnboardingTemplateTaskUpdateArgs>(args: Prisma.SelectSubset<T, OnboardingTemplateTaskUpdateArgs<ExtArgs>>): Prisma.Prisma__OnboardingTemplateTaskClient<runtime.Types.Result.GetResult<Prisma.$OnboardingTemplateTaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OnboardingTemplateTaskDeleteManyArgs>(args?: Prisma.SelectSubset<T, OnboardingTemplateTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OnboardingTemplateTaskUpdateManyArgs>(args: Prisma.SelectSubset<T, OnboardingTemplateTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OnboardingTemplateTaskUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OnboardingTemplateTaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OnboardingTemplateTaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OnboardingTemplateTaskUpsertArgs>(args: Prisma.SelectSubset<T, OnboardingTemplateTaskUpsertArgs<ExtArgs>>): Prisma.Prisma__OnboardingTemplateTaskClient<runtime.Types.Result.GetResult<Prisma.$OnboardingTemplateTaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OnboardingTemplateTaskCountArgs>(args?: Prisma.Subset<T, OnboardingTemplateTaskCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OnboardingTemplateTaskCountAggregateOutputType> : number>;
    aggregate<T extends OnboardingTemplateTaskAggregateArgs>(args: Prisma.Subset<T, OnboardingTemplateTaskAggregateArgs>): Prisma.PrismaPromise<GetOnboardingTemplateTaskAggregateType<T>>;
    groupBy<T extends OnboardingTemplateTaskGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OnboardingTemplateTaskGroupByArgs['orderBy'];
    } : {
        orderBy?: OnboardingTemplateTaskGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OnboardingTemplateTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOnboardingTemplateTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OnboardingTemplateTaskFieldRefs;
}
export interface Prisma__OnboardingTemplateTaskClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    template<T extends Prisma.OnboardingTemplateDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OnboardingTemplateDefaultArgs<ExtArgs>>): Prisma.Prisma__OnboardingTemplateClient<runtime.Types.Result.GetResult<Prisma.$OnboardingTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OnboardingTemplateTaskFieldRefs {
    readonly id: Prisma.FieldRef<"OnboardingTemplateTask", 'String'>;
    readonly templateId: Prisma.FieldRef<"OnboardingTemplateTask", 'String'>;
    readonly title: Prisma.FieldRef<"OnboardingTemplateTask", 'String'>;
    readonly description: Prisma.FieldRef<"OnboardingTemplateTask", 'String'>;
    readonly dueAfterDays: Prisma.FieldRef<"OnboardingTemplateTask", 'Int'>;
    readonly assignTo: Prisma.FieldRef<"OnboardingTemplateTask", 'OnboardingAssignee'>;
    readonly orderIndex: Prisma.FieldRef<"OnboardingTemplateTask", 'Int'>;
}
export type OnboardingTemplateTaskFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingTemplateTaskSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingTemplateTaskOmit<ExtArgs> | null;
    include?: Prisma.OnboardingTemplateTaskInclude<ExtArgs> | null;
    where: Prisma.OnboardingTemplateTaskWhereUniqueInput;
};
export type OnboardingTemplateTaskFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingTemplateTaskSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingTemplateTaskOmit<ExtArgs> | null;
    include?: Prisma.OnboardingTemplateTaskInclude<ExtArgs> | null;
    where: Prisma.OnboardingTemplateTaskWhereUniqueInput;
};
export type OnboardingTemplateTaskFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OnboardingTemplateTaskFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OnboardingTemplateTaskFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OnboardingTemplateTaskCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingTemplateTaskSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingTemplateTaskOmit<ExtArgs> | null;
    include?: Prisma.OnboardingTemplateTaskInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OnboardingTemplateTaskCreateInput, Prisma.OnboardingTemplateTaskUncheckedCreateInput>;
};
export type OnboardingTemplateTaskCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OnboardingTemplateTaskCreateManyInput | Prisma.OnboardingTemplateTaskCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OnboardingTemplateTaskCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingTemplateTaskSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OnboardingTemplateTaskOmit<ExtArgs> | null;
    data: Prisma.OnboardingTemplateTaskCreateManyInput | Prisma.OnboardingTemplateTaskCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.OnboardingTemplateTaskIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type OnboardingTemplateTaskUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingTemplateTaskSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingTemplateTaskOmit<ExtArgs> | null;
    include?: Prisma.OnboardingTemplateTaskInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OnboardingTemplateTaskUpdateInput, Prisma.OnboardingTemplateTaskUncheckedUpdateInput>;
    where: Prisma.OnboardingTemplateTaskWhereUniqueInput;
};
export type OnboardingTemplateTaskUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OnboardingTemplateTaskUpdateManyMutationInput, Prisma.OnboardingTemplateTaskUncheckedUpdateManyInput>;
    where?: Prisma.OnboardingTemplateTaskWhereInput;
    limit?: number;
};
export type OnboardingTemplateTaskUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingTemplateTaskSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OnboardingTemplateTaskOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OnboardingTemplateTaskUpdateManyMutationInput, Prisma.OnboardingTemplateTaskUncheckedUpdateManyInput>;
    where?: Prisma.OnboardingTemplateTaskWhereInput;
    limit?: number;
    include?: Prisma.OnboardingTemplateTaskIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type OnboardingTemplateTaskUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingTemplateTaskSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingTemplateTaskOmit<ExtArgs> | null;
    include?: Prisma.OnboardingTemplateTaskInclude<ExtArgs> | null;
    where: Prisma.OnboardingTemplateTaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.OnboardingTemplateTaskCreateInput, Prisma.OnboardingTemplateTaskUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OnboardingTemplateTaskUpdateInput, Prisma.OnboardingTemplateTaskUncheckedUpdateInput>;
};
export type OnboardingTemplateTaskDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingTemplateTaskSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingTemplateTaskOmit<ExtArgs> | null;
    include?: Prisma.OnboardingTemplateTaskInclude<ExtArgs> | null;
    where: Prisma.OnboardingTemplateTaskWhereUniqueInput;
};
export type OnboardingTemplateTaskDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OnboardingTemplateTaskWhereInput;
    limit?: number;
};
export type OnboardingTemplateTaskDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingTemplateTaskSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingTemplateTaskOmit<ExtArgs> | null;
    include?: Prisma.OnboardingTemplateTaskInclude<ExtArgs> | null;
};
