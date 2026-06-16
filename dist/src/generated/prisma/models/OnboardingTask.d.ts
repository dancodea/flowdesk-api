import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OnboardingTaskModel = runtime.Types.Result.DefaultSelection<Prisma.$OnboardingTaskPayload>;
export type AggregateOnboardingTask = {
    _count: OnboardingTaskCountAggregateOutputType | null;
    _avg: OnboardingTaskAvgAggregateOutputType | null;
    _sum: OnboardingTaskSumAggregateOutputType | null;
    _min: OnboardingTaskMinAggregateOutputType | null;
    _max: OnboardingTaskMaxAggregateOutputType | null;
};
export type OnboardingTaskAvgAggregateOutputType = {
    orderIndex: number | null;
};
export type OnboardingTaskSumAggregateOutputType = {
    orderIndex: number | null;
};
export type OnboardingTaskMinAggregateOutputType = {
    id: string | null;
    checklistId: string | null;
    title: string | null;
    description: string | null;
    dueDate: Date | null;
    assignedTo: string | null;
    assignTo: $Enums.OnboardingAssignee | null;
    status: $Enums.OnboardingTaskStatus | null;
    completedAt: Date | null;
    note: string | null;
    orderIndex: number | null;
};
export type OnboardingTaskMaxAggregateOutputType = {
    id: string | null;
    checklistId: string | null;
    title: string | null;
    description: string | null;
    dueDate: Date | null;
    assignedTo: string | null;
    assignTo: $Enums.OnboardingAssignee | null;
    status: $Enums.OnboardingTaskStatus | null;
    completedAt: Date | null;
    note: string | null;
    orderIndex: number | null;
};
export type OnboardingTaskCountAggregateOutputType = {
    id: number;
    checklistId: number;
    title: number;
    description: number;
    dueDate: number;
    assignedTo: number;
    assignTo: number;
    status: number;
    completedAt: number;
    note: number;
    orderIndex: number;
    _all: number;
};
export type OnboardingTaskAvgAggregateInputType = {
    orderIndex?: true;
};
export type OnboardingTaskSumAggregateInputType = {
    orderIndex?: true;
};
export type OnboardingTaskMinAggregateInputType = {
    id?: true;
    checklistId?: true;
    title?: true;
    description?: true;
    dueDate?: true;
    assignedTo?: true;
    assignTo?: true;
    status?: true;
    completedAt?: true;
    note?: true;
    orderIndex?: true;
};
export type OnboardingTaskMaxAggregateInputType = {
    id?: true;
    checklistId?: true;
    title?: true;
    description?: true;
    dueDate?: true;
    assignedTo?: true;
    assignTo?: true;
    status?: true;
    completedAt?: true;
    note?: true;
    orderIndex?: true;
};
export type OnboardingTaskCountAggregateInputType = {
    id?: true;
    checklistId?: true;
    title?: true;
    description?: true;
    dueDate?: true;
    assignedTo?: true;
    assignTo?: true;
    status?: true;
    completedAt?: true;
    note?: true;
    orderIndex?: true;
    _all?: true;
};
export type OnboardingTaskAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OnboardingTaskWhereInput;
    orderBy?: Prisma.OnboardingTaskOrderByWithRelationInput | Prisma.OnboardingTaskOrderByWithRelationInput[];
    cursor?: Prisma.OnboardingTaskWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OnboardingTaskCountAggregateInputType;
    _avg?: OnboardingTaskAvgAggregateInputType;
    _sum?: OnboardingTaskSumAggregateInputType;
    _min?: OnboardingTaskMinAggregateInputType;
    _max?: OnboardingTaskMaxAggregateInputType;
};
export type GetOnboardingTaskAggregateType<T extends OnboardingTaskAggregateArgs> = {
    [P in keyof T & keyof AggregateOnboardingTask]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOnboardingTask[P]> : Prisma.GetScalarType<T[P], AggregateOnboardingTask[P]>;
};
export type OnboardingTaskGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OnboardingTaskWhereInput;
    orderBy?: Prisma.OnboardingTaskOrderByWithAggregationInput | Prisma.OnboardingTaskOrderByWithAggregationInput[];
    by: Prisma.OnboardingTaskScalarFieldEnum[] | Prisma.OnboardingTaskScalarFieldEnum;
    having?: Prisma.OnboardingTaskScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OnboardingTaskCountAggregateInputType | true;
    _avg?: OnboardingTaskAvgAggregateInputType;
    _sum?: OnboardingTaskSumAggregateInputType;
    _min?: OnboardingTaskMinAggregateInputType;
    _max?: OnboardingTaskMaxAggregateInputType;
};
export type OnboardingTaskGroupByOutputType = {
    id: string;
    checklistId: string;
    title: string;
    description: string | null;
    dueDate: Date | null;
    assignedTo: string | null;
    assignTo: $Enums.OnboardingAssignee;
    status: $Enums.OnboardingTaskStatus;
    completedAt: Date | null;
    note: string | null;
    orderIndex: number;
    _count: OnboardingTaskCountAggregateOutputType | null;
    _avg: OnboardingTaskAvgAggregateOutputType | null;
    _sum: OnboardingTaskSumAggregateOutputType | null;
    _min: OnboardingTaskMinAggregateOutputType | null;
    _max: OnboardingTaskMaxAggregateOutputType | null;
};
export type GetOnboardingTaskGroupByPayload<T extends OnboardingTaskGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OnboardingTaskGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OnboardingTaskGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OnboardingTaskGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OnboardingTaskGroupByOutputType[P]>;
}>>;
export type OnboardingTaskWhereInput = {
    AND?: Prisma.OnboardingTaskWhereInput | Prisma.OnboardingTaskWhereInput[];
    OR?: Prisma.OnboardingTaskWhereInput[];
    NOT?: Prisma.OnboardingTaskWhereInput | Prisma.OnboardingTaskWhereInput[];
    id?: Prisma.UuidFilter<"OnboardingTask"> | string;
    checklistId?: Prisma.UuidFilter<"OnboardingTask"> | string;
    title?: Prisma.StringFilter<"OnboardingTask"> | string;
    description?: Prisma.StringNullableFilter<"OnboardingTask"> | string | null;
    dueDate?: Prisma.DateTimeNullableFilter<"OnboardingTask"> | Date | string | null;
    assignedTo?: Prisma.UuidNullableFilter<"OnboardingTask"> | string | null;
    assignTo?: Prisma.EnumOnboardingAssigneeFilter<"OnboardingTask"> | $Enums.OnboardingAssignee;
    status?: Prisma.EnumOnboardingTaskStatusFilter<"OnboardingTask"> | $Enums.OnboardingTaskStatus;
    completedAt?: Prisma.DateTimeNullableFilter<"OnboardingTask"> | Date | string | null;
    note?: Prisma.StringNullableFilter<"OnboardingTask"> | string | null;
    orderIndex?: Prisma.IntFilter<"OnboardingTask"> | number;
    checklist?: Prisma.XOR<Prisma.OnboardingChecklistScalarRelationFilter, Prisma.OnboardingChecklistWhereInput>;
};
export type OnboardingTaskOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    checklistId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    dueDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    assignedTo?: Prisma.SortOrderInput | Prisma.SortOrder;
    assignTo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    checklist?: Prisma.OnboardingChecklistOrderByWithRelationInput;
};
export type OnboardingTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.OnboardingTaskWhereInput | Prisma.OnboardingTaskWhereInput[];
    OR?: Prisma.OnboardingTaskWhereInput[];
    NOT?: Prisma.OnboardingTaskWhereInput | Prisma.OnboardingTaskWhereInput[];
    checklistId?: Prisma.UuidFilter<"OnboardingTask"> | string;
    title?: Prisma.StringFilter<"OnboardingTask"> | string;
    description?: Prisma.StringNullableFilter<"OnboardingTask"> | string | null;
    dueDate?: Prisma.DateTimeNullableFilter<"OnboardingTask"> | Date | string | null;
    assignedTo?: Prisma.UuidNullableFilter<"OnboardingTask"> | string | null;
    assignTo?: Prisma.EnumOnboardingAssigneeFilter<"OnboardingTask"> | $Enums.OnboardingAssignee;
    status?: Prisma.EnumOnboardingTaskStatusFilter<"OnboardingTask"> | $Enums.OnboardingTaskStatus;
    completedAt?: Prisma.DateTimeNullableFilter<"OnboardingTask"> | Date | string | null;
    note?: Prisma.StringNullableFilter<"OnboardingTask"> | string | null;
    orderIndex?: Prisma.IntFilter<"OnboardingTask"> | number;
    checklist?: Prisma.XOR<Prisma.OnboardingChecklistScalarRelationFilter, Prisma.OnboardingChecklistWhereInput>;
}, "id">;
export type OnboardingTaskOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    checklistId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    dueDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    assignedTo?: Prisma.SortOrderInput | Prisma.SortOrder;
    assignTo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
    _count?: Prisma.OnboardingTaskCountOrderByAggregateInput;
    _avg?: Prisma.OnboardingTaskAvgOrderByAggregateInput;
    _max?: Prisma.OnboardingTaskMaxOrderByAggregateInput;
    _min?: Prisma.OnboardingTaskMinOrderByAggregateInput;
    _sum?: Prisma.OnboardingTaskSumOrderByAggregateInput;
};
export type OnboardingTaskScalarWhereWithAggregatesInput = {
    AND?: Prisma.OnboardingTaskScalarWhereWithAggregatesInput | Prisma.OnboardingTaskScalarWhereWithAggregatesInput[];
    OR?: Prisma.OnboardingTaskScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OnboardingTaskScalarWhereWithAggregatesInput | Prisma.OnboardingTaskScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"OnboardingTask"> | string;
    checklistId?: Prisma.UuidWithAggregatesFilter<"OnboardingTask"> | string;
    title?: Prisma.StringWithAggregatesFilter<"OnboardingTask"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"OnboardingTask"> | string | null;
    dueDate?: Prisma.DateTimeNullableWithAggregatesFilter<"OnboardingTask"> | Date | string | null;
    assignedTo?: Prisma.UuidNullableWithAggregatesFilter<"OnboardingTask"> | string | null;
    assignTo?: Prisma.EnumOnboardingAssigneeWithAggregatesFilter<"OnboardingTask"> | $Enums.OnboardingAssignee;
    status?: Prisma.EnumOnboardingTaskStatusWithAggregatesFilter<"OnboardingTask"> | $Enums.OnboardingTaskStatus;
    completedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"OnboardingTask"> | Date | string | null;
    note?: Prisma.StringNullableWithAggregatesFilter<"OnboardingTask"> | string | null;
    orderIndex?: Prisma.IntWithAggregatesFilter<"OnboardingTask"> | number;
};
export type OnboardingTaskCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    dueDate?: Date | string | null;
    assignedTo?: string | null;
    assignTo?: $Enums.OnboardingAssignee;
    status?: $Enums.OnboardingTaskStatus;
    completedAt?: Date | string | null;
    note?: string | null;
    orderIndex: number;
    checklist: Prisma.OnboardingChecklistCreateNestedOneWithoutTasksInput;
};
export type OnboardingTaskUncheckedCreateInput = {
    id?: string;
    checklistId: string;
    title: string;
    description?: string | null;
    dueDate?: Date | string | null;
    assignedTo?: string | null;
    assignTo?: $Enums.OnboardingAssignee;
    status?: $Enums.OnboardingTaskStatus;
    completedAt?: Date | string | null;
    note?: string | null;
    orderIndex: number;
};
export type OnboardingTaskUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assignedTo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignTo?: Prisma.EnumOnboardingAssigneeFieldUpdateOperationsInput | $Enums.OnboardingAssignee;
    status?: Prisma.EnumOnboardingTaskStatusFieldUpdateOperationsInput | $Enums.OnboardingTaskStatus;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    checklist?: Prisma.OnboardingChecklistUpdateOneRequiredWithoutTasksNestedInput;
};
export type OnboardingTaskUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    checklistId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assignedTo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignTo?: Prisma.EnumOnboardingAssigneeFieldUpdateOperationsInput | $Enums.OnboardingAssignee;
    status?: Prisma.EnumOnboardingTaskStatusFieldUpdateOperationsInput | $Enums.OnboardingTaskStatus;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type OnboardingTaskCreateManyInput = {
    id?: string;
    checklistId: string;
    title: string;
    description?: string | null;
    dueDate?: Date | string | null;
    assignedTo?: string | null;
    assignTo?: $Enums.OnboardingAssignee;
    status?: $Enums.OnboardingTaskStatus;
    completedAt?: Date | string | null;
    note?: string | null;
    orderIndex: number;
};
export type OnboardingTaskUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assignedTo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignTo?: Prisma.EnumOnboardingAssigneeFieldUpdateOperationsInput | $Enums.OnboardingAssignee;
    status?: Prisma.EnumOnboardingTaskStatusFieldUpdateOperationsInput | $Enums.OnboardingTaskStatus;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type OnboardingTaskUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    checklistId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assignedTo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignTo?: Prisma.EnumOnboardingAssigneeFieldUpdateOperationsInput | $Enums.OnboardingAssignee;
    status?: Prisma.EnumOnboardingTaskStatusFieldUpdateOperationsInput | $Enums.OnboardingTaskStatus;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type OnboardingTaskListRelationFilter = {
    every?: Prisma.OnboardingTaskWhereInput;
    some?: Prisma.OnboardingTaskWhereInput;
    none?: Prisma.OnboardingTaskWhereInput;
};
export type OnboardingTaskOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OnboardingTaskCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    checklistId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    assignedTo?: Prisma.SortOrder;
    assignTo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
};
export type OnboardingTaskAvgOrderByAggregateInput = {
    orderIndex?: Prisma.SortOrder;
};
export type OnboardingTaskMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    checklistId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    assignedTo?: Prisma.SortOrder;
    assignTo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
};
export type OnboardingTaskMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    checklistId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    assignedTo?: Prisma.SortOrder;
    assignTo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    orderIndex?: Prisma.SortOrder;
};
export type OnboardingTaskSumOrderByAggregateInput = {
    orderIndex?: Prisma.SortOrder;
};
export type OnboardingTaskCreateNestedManyWithoutChecklistInput = {
    create?: Prisma.XOR<Prisma.OnboardingTaskCreateWithoutChecklistInput, Prisma.OnboardingTaskUncheckedCreateWithoutChecklistInput> | Prisma.OnboardingTaskCreateWithoutChecklistInput[] | Prisma.OnboardingTaskUncheckedCreateWithoutChecklistInput[];
    connectOrCreate?: Prisma.OnboardingTaskCreateOrConnectWithoutChecklistInput | Prisma.OnboardingTaskCreateOrConnectWithoutChecklistInput[];
    createMany?: Prisma.OnboardingTaskCreateManyChecklistInputEnvelope;
    connect?: Prisma.OnboardingTaskWhereUniqueInput | Prisma.OnboardingTaskWhereUniqueInput[];
};
export type OnboardingTaskUncheckedCreateNestedManyWithoutChecklistInput = {
    create?: Prisma.XOR<Prisma.OnboardingTaskCreateWithoutChecklistInput, Prisma.OnboardingTaskUncheckedCreateWithoutChecklistInput> | Prisma.OnboardingTaskCreateWithoutChecklistInput[] | Prisma.OnboardingTaskUncheckedCreateWithoutChecklistInput[];
    connectOrCreate?: Prisma.OnboardingTaskCreateOrConnectWithoutChecklistInput | Prisma.OnboardingTaskCreateOrConnectWithoutChecklistInput[];
    createMany?: Prisma.OnboardingTaskCreateManyChecklistInputEnvelope;
    connect?: Prisma.OnboardingTaskWhereUniqueInput | Prisma.OnboardingTaskWhereUniqueInput[];
};
export type OnboardingTaskUpdateManyWithoutChecklistNestedInput = {
    create?: Prisma.XOR<Prisma.OnboardingTaskCreateWithoutChecklistInput, Prisma.OnboardingTaskUncheckedCreateWithoutChecklistInput> | Prisma.OnboardingTaskCreateWithoutChecklistInput[] | Prisma.OnboardingTaskUncheckedCreateWithoutChecklistInput[];
    connectOrCreate?: Prisma.OnboardingTaskCreateOrConnectWithoutChecklistInput | Prisma.OnboardingTaskCreateOrConnectWithoutChecklistInput[];
    upsert?: Prisma.OnboardingTaskUpsertWithWhereUniqueWithoutChecklistInput | Prisma.OnboardingTaskUpsertWithWhereUniqueWithoutChecklistInput[];
    createMany?: Prisma.OnboardingTaskCreateManyChecklistInputEnvelope;
    set?: Prisma.OnboardingTaskWhereUniqueInput | Prisma.OnboardingTaskWhereUniqueInput[];
    disconnect?: Prisma.OnboardingTaskWhereUniqueInput | Prisma.OnboardingTaskWhereUniqueInput[];
    delete?: Prisma.OnboardingTaskWhereUniqueInput | Prisma.OnboardingTaskWhereUniqueInput[];
    connect?: Prisma.OnboardingTaskWhereUniqueInput | Prisma.OnboardingTaskWhereUniqueInput[];
    update?: Prisma.OnboardingTaskUpdateWithWhereUniqueWithoutChecklistInput | Prisma.OnboardingTaskUpdateWithWhereUniqueWithoutChecklistInput[];
    updateMany?: Prisma.OnboardingTaskUpdateManyWithWhereWithoutChecklistInput | Prisma.OnboardingTaskUpdateManyWithWhereWithoutChecklistInput[];
    deleteMany?: Prisma.OnboardingTaskScalarWhereInput | Prisma.OnboardingTaskScalarWhereInput[];
};
export type OnboardingTaskUncheckedUpdateManyWithoutChecklistNestedInput = {
    create?: Prisma.XOR<Prisma.OnboardingTaskCreateWithoutChecklistInput, Prisma.OnboardingTaskUncheckedCreateWithoutChecklistInput> | Prisma.OnboardingTaskCreateWithoutChecklistInput[] | Prisma.OnboardingTaskUncheckedCreateWithoutChecklistInput[];
    connectOrCreate?: Prisma.OnboardingTaskCreateOrConnectWithoutChecklistInput | Prisma.OnboardingTaskCreateOrConnectWithoutChecklistInput[];
    upsert?: Prisma.OnboardingTaskUpsertWithWhereUniqueWithoutChecklistInput | Prisma.OnboardingTaskUpsertWithWhereUniqueWithoutChecklistInput[];
    createMany?: Prisma.OnboardingTaskCreateManyChecklistInputEnvelope;
    set?: Prisma.OnboardingTaskWhereUniqueInput | Prisma.OnboardingTaskWhereUniqueInput[];
    disconnect?: Prisma.OnboardingTaskWhereUniqueInput | Prisma.OnboardingTaskWhereUniqueInput[];
    delete?: Prisma.OnboardingTaskWhereUniqueInput | Prisma.OnboardingTaskWhereUniqueInput[];
    connect?: Prisma.OnboardingTaskWhereUniqueInput | Prisma.OnboardingTaskWhereUniqueInput[];
    update?: Prisma.OnboardingTaskUpdateWithWhereUniqueWithoutChecklistInput | Prisma.OnboardingTaskUpdateWithWhereUniqueWithoutChecklistInput[];
    updateMany?: Prisma.OnboardingTaskUpdateManyWithWhereWithoutChecklistInput | Prisma.OnboardingTaskUpdateManyWithWhereWithoutChecklistInput[];
    deleteMany?: Prisma.OnboardingTaskScalarWhereInput | Prisma.OnboardingTaskScalarWhereInput[];
};
export type EnumOnboardingTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.OnboardingTaskStatus;
};
export type OnboardingTaskCreateWithoutChecklistInput = {
    id?: string;
    title: string;
    description?: string | null;
    dueDate?: Date | string | null;
    assignedTo?: string | null;
    assignTo?: $Enums.OnboardingAssignee;
    status?: $Enums.OnboardingTaskStatus;
    completedAt?: Date | string | null;
    note?: string | null;
    orderIndex: number;
};
export type OnboardingTaskUncheckedCreateWithoutChecklistInput = {
    id?: string;
    title: string;
    description?: string | null;
    dueDate?: Date | string | null;
    assignedTo?: string | null;
    assignTo?: $Enums.OnboardingAssignee;
    status?: $Enums.OnboardingTaskStatus;
    completedAt?: Date | string | null;
    note?: string | null;
    orderIndex: number;
};
export type OnboardingTaskCreateOrConnectWithoutChecklistInput = {
    where: Prisma.OnboardingTaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.OnboardingTaskCreateWithoutChecklistInput, Prisma.OnboardingTaskUncheckedCreateWithoutChecklistInput>;
};
export type OnboardingTaskCreateManyChecklistInputEnvelope = {
    data: Prisma.OnboardingTaskCreateManyChecklistInput | Prisma.OnboardingTaskCreateManyChecklistInput[];
    skipDuplicates?: boolean;
};
export type OnboardingTaskUpsertWithWhereUniqueWithoutChecklistInput = {
    where: Prisma.OnboardingTaskWhereUniqueInput;
    update: Prisma.XOR<Prisma.OnboardingTaskUpdateWithoutChecklistInput, Prisma.OnboardingTaskUncheckedUpdateWithoutChecklistInput>;
    create: Prisma.XOR<Prisma.OnboardingTaskCreateWithoutChecklistInput, Prisma.OnboardingTaskUncheckedCreateWithoutChecklistInput>;
};
export type OnboardingTaskUpdateWithWhereUniqueWithoutChecklistInput = {
    where: Prisma.OnboardingTaskWhereUniqueInput;
    data: Prisma.XOR<Prisma.OnboardingTaskUpdateWithoutChecklistInput, Prisma.OnboardingTaskUncheckedUpdateWithoutChecklistInput>;
};
export type OnboardingTaskUpdateManyWithWhereWithoutChecklistInput = {
    where: Prisma.OnboardingTaskScalarWhereInput;
    data: Prisma.XOR<Prisma.OnboardingTaskUpdateManyMutationInput, Prisma.OnboardingTaskUncheckedUpdateManyWithoutChecklistInput>;
};
export type OnboardingTaskScalarWhereInput = {
    AND?: Prisma.OnboardingTaskScalarWhereInput | Prisma.OnboardingTaskScalarWhereInput[];
    OR?: Prisma.OnboardingTaskScalarWhereInput[];
    NOT?: Prisma.OnboardingTaskScalarWhereInput | Prisma.OnboardingTaskScalarWhereInput[];
    id?: Prisma.UuidFilter<"OnboardingTask"> | string;
    checklistId?: Prisma.UuidFilter<"OnboardingTask"> | string;
    title?: Prisma.StringFilter<"OnboardingTask"> | string;
    description?: Prisma.StringNullableFilter<"OnboardingTask"> | string | null;
    dueDate?: Prisma.DateTimeNullableFilter<"OnboardingTask"> | Date | string | null;
    assignedTo?: Prisma.UuidNullableFilter<"OnboardingTask"> | string | null;
    assignTo?: Prisma.EnumOnboardingAssigneeFilter<"OnboardingTask"> | $Enums.OnboardingAssignee;
    status?: Prisma.EnumOnboardingTaskStatusFilter<"OnboardingTask"> | $Enums.OnboardingTaskStatus;
    completedAt?: Prisma.DateTimeNullableFilter<"OnboardingTask"> | Date | string | null;
    note?: Prisma.StringNullableFilter<"OnboardingTask"> | string | null;
    orderIndex?: Prisma.IntFilter<"OnboardingTask"> | number;
};
export type OnboardingTaskCreateManyChecklistInput = {
    id?: string;
    title: string;
    description?: string | null;
    dueDate?: Date | string | null;
    assignedTo?: string | null;
    assignTo?: $Enums.OnboardingAssignee;
    status?: $Enums.OnboardingTaskStatus;
    completedAt?: Date | string | null;
    note?: string | null;
    orderIndex: number;
};
export type OnboardingTaskUpdateWithoutChecklistInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assignedTo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignTo?: Prisma.EnumOnboardingAssigneeFieldUpdateOperationsInput | $Enums.OnboardingAssignee;
    status?: Prisma.EnumOnboardingTaskStatusFieldUpdateOperationsInput | $Enums.OnboardingTaskStatus;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type OnboardingTaskUncheckedUpdateWithoutChecklistInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assignedTo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignTo?: Prisma.EnumOnboardingAssigneeFieldUpdateOperationsInput | $Enums.OnboardingAssignee;
    status?: Prisma.EnumOnboardingTaskStatusFieldUpdateOperationsInput | $Enums.OnboardingTaskStatus;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type OnboardingTaskUncheckedUpdateManyWithoutChecklistInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assignedTo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignTo?: Prisma.EnumOnboardingAssigneeFieldUpdateOperationsInput | $Enums.OnboardingAssignee;
    status?: Prisma.EnumOnboardingTaskStatusFieldUpdateOperationsInput | $Enums.OnboardingTaskStatus;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderIndex?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type OnboardingTaskSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    checklistId?: boolean;
    title?: boolean;
    description?: boolean;
    dueDate?: boolean;
    assignedTo?: boolean;
    assignTo?: boolean;
    status?: boolean;
    completedAt?: boolean;
    note?: boolean;
    orderIndex?: boolean;
    checklist?: boolean | Prisma.OnboardingChecklistDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["onboardingTask"]>;
export type OnboardingTaskSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    checklistId?: boolean;
    title?: boolean;
    description?: boolean;
    dueDate?: boolean;
    assignedTo?: boolean;
    assignTo?: boolean;
    status?: boolean;
    completedAt?: boolean;
    note?: boolean;
    orderIndex?: boolean;
    checklist?: boolean | Prisma.OnboardingChecklistDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["onboardingTask"]>;
export type OnboardingTaskSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    checklistId?: boolean;
    title?: boolean;
    description?: boolean;
    dueDate?: boolean;
    assignedTo?: boolean;
    assignTo?: boolean;
    status?: boolean;
    completedAt?: boolean;
    note?: boolean;
    orderIndex?: boolean;
    checklist?: boolean | Prisma.OnboardingChecklistDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["onboardingTask"]>;
export type OnboardingTaskSelectScalar = {
    id?: boolean;
    checklistId?: boolean;
    title?: boolean;
    description?: boolean;
    dueDate?: boolean;
    assignedTo?: boolean;
    assignTo?: boolean;
    status?: boolean;
    completedAt?: boolean;
    note?: boolean;
    orderIndex?: boolean;
};
export type OnboardingTaskOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "checklistId" | "title" | "description" | "dueDate" | "assignedTo" | "assignTo" | "status" | "completedAt" | "note" | "orderIndex", ExtArgs["result"]["onboardingTask"]>;
export type OnboardingTaskInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    checklist?: boolean | Prisma.OnboardingChecklistDefaultArgs<ExtArgs>;
};
export type OnboardingTaskIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    checklist?: boolean | Prisma.OnboardingChecklistDefaultArgs<ExtArgs>;
};
export type OnboardingTaskIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    checklist?: boolean | Prisma.OnboardingChecklistDefaultArgs<ExtArgs>;
};
export type $OnboardingTaskPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OnboardingTask";
    objects: {
        checklist: Prisma.$OnboardingChecklistPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        checklistId: string;
        title: string;
        description: string | null;
        dueDate: Date | null;
        assignedTo: string | null;
        assignTo: $Enums.OnboardingAssignee;
        status: $Enums.OnboardingTaskStatus;
        completedAt: Date | null;
        note: string | null;
        orderIndex: number;
    }, ExtArgs["result"]["onboardingTask"]>;
    composites: {};
};
export type OnboardingTaskGetPayload<S extends boolean | null | undefined | OnboardingTaskDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OnboardingTaskPayload, S>;
export type OnboardingTaskCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OnboardingTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OnboardingTaskCountAggregateInputType | true;
};
export interface OnboardingTaskDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OnboardingTask'];
        meta: {
            name: 'OnboardingTask';
        };
    };
    findUnique<T extends OnboardingTaskFindUniqueArgs>(args: Prisma.SelectSubset<T, OnboardingTaskFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OnboardingTaskClient<runtime.Types.Result.GetResult<Prisma.$OnboardingTaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OnboardingTaskFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OnboardingTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OnboardingTaskClient<runtime.Types.Result.GetResult<Prisma.$OnboardingTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OnboardingTaskFindFirstArgs>(args?: Prisma.SelectSubset<T, OnboardingTaskFindFirstArgs<ExtArgs>>): Prisma.Prisma__OnboardingTaskClient<runtime.Types.Result.GetResult<Prisma.$OnboardingTaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OnboardingTaskFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OnboardingTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OnboardingTaskClient<runtime.Types.Result.GetResult<Prisma.$OnboardingTaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OnboardingTaskFindManyArgs>(args?: Prisma.SelectSubset<T, OnboardingTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OnboardingTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OnboardingTaskCreateArgs>(args: Prisma.SelectSubset<T, OnboardingTaskCreateArgs<ExtArgs>>): Prisma.Prisma__OnboardingTaskClient<runtime.Types.Result.GetResult<Prisma.$OnboardingTaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OnboardingTaskCreateManyArgs>(args?: Prisma.SelectSubset<T, OnboardingTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OnboardingTaskCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OnboardingTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OnboardingTaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OnboardingTaskDeleteArgs>(args: Prisma.SelectSubset<T, OnboardingTaskDeleteArgs<ExtArgs>>): Prisma.Prisma__OnboardingTaskClient<runtime.Types.Result.GetResult<Prisma.$OnboardingTaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OnboardingTaskUpdateArgs>(args: Prisma.SelectSubset<T, OnboardingTaskUpdateArgs<ExtArgs>>): Prisma.Prisma__OnboardingTaskClient<runtime.Types.Result.GetResult<Prisma.$OnboardingTaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OnboardingTaskDeleteManyArgs>(args?: Prisma.SelectSubset<T, OnboardingTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OnboardingTaskUpdateManyArgs>(args: Prisma.SelectSubset<T, OnboardingTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OnboardingTaskUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OnboardingTaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OnboardingTaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OnboardingTaskUpsertArgs>(args: Prisma.SelectSubset<T, OnboardingTaskUpsertArgs<ExtArgs>>): Prisma.Prisma__OnboardingTaskClient<runtime.Types.Result.GetResult<Prisma.$OnboardingTaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OnboardingTaskCountArgs>(args?: Prisma.Subset<T, OnboardingTaskCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OnboardingTaskCountAggregateOutputType> : number>;
    aggregate<T extends OnboardingTaskAggregateArgs>(args: Prisma.Subset<T, OnboardingTaskAggregateArgs>): Prisma.PrismaPromise<GetOnboardingTaskAggregateType<T>>;
    groupBy<T extends OnboardingTaskGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OnboardingTaskGroupByArgs['orderBy'];
    } : {
        orderBy?: OnboardingTaskGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OnboardingTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOnboardingTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OnboardingTaskFieldRefs;
}
export interface Prisma__OnboardingTaskClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    checklist<T extends Prisma.OnboardingChecklistDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OnboardingChecklistDefaultArgs<ExtArgs>>): Prisma.Prisma__OnboardingChecklistClient<runtime.Types.Result.GetResult<Prisma.$OnboardingChecklistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OnboardingTaskFieldRefs {
    readonly id: Prisma.FieldRef<"OnboardingTask", 'String'>;
    readonly checklistId: Prisma.FieldRef<"OnboardingTask", 'String'>;
    readonly title: Prisma.FieldRef<"OnboardingTask", 'String'>;
    readonly description: Prisma.FieldRef<"OnboardingTask", 'String'>;
    readonly dueDate: Prisma.FieldRef<"OnboardingTask", 'DateTime'>;
    readonly assignedTo: Prisma.FieldRef<"OnboardingTask", 'String'>;
    readonly assignTo: Prisma.FieldRef<"OnboardingTask", 'OnboardingAssignee'>;
    readonly status: Prisma.FieldRef<"OnboardingTask", 'OnboardingTaskStatus'>;
    readonly completedAt: Prisma.FieldRef<"OnboardingTask", 'DateTime'>;
    readonly note: Prisma.FieldRef<"OnboardingTask", 'String'>;
    readonly orderIndex: Prisma.FieldRef<"OnboardingTask", 'Int'>;
}
export type OnboardingTaskFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingTaskSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingTaskOmit<ExtArgs> | null;
    include?: Prisma.OnboardingTaskInclude<ExtArgs> | null;
    where: Prisma.OnboardingTaskWhereUniqueInput;
};
export type OnboardingTaskFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingTaskSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingTaskOmit<ExtArgs> | null;
    include?: Prisma.OnboardingTaskInclude<ExtArgs> | null;
    where: Prisma.OnboardingTaskWhereUniqueInput;
};
export type OnboardingTaskFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingTaskSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingTaskOmit<ExtArgs> | null;
    include?: Prisma.OnboardingTaskInclude<ExtArgs> | null;
    where?: Prisma.OnboardingTaskWhereInput;
    orderBy?: Prisma.OnboardingTaskOrderByWithRelationInput | Prisma.OnboardingTaskOrderByWithRelationInput[];
    cursor?: Prisma.OnboardingTaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OnboardingTaskScalarFieldEnum | Prisma.OnboardingTaskScalarFieldEnum[];
};
export type OnboardingTaskFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingTaskSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingTaskOmit<ExtArgs> | null;
    include?: Prisma.OnboardingTaskInclude<ExtArgs> | null;
    where?: Prisma.OnboardingTaskWhereInput;
    orderBy?: Prisma.OnboardingTaskOrderByWithRelationInput | Prisma.OnboardingTaskOrderByWithRelationInput[];
    cursor?: Prisma.OnboardingTaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OnboardingTaskScalarFieldEnum | Prisma.OnboardingTaskScalarFieldEnum[];
};
export type OnboardingTaskFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingTaskSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingTaskOmit<ExtArgs> | null;
    include?: Prisma.OnboardingTaskInclude<ExtArgs> | null;
    where?: Prisma.OnboardingTaskWhereInput;
    orderBy?: Prisma.OnboardingTaskOrderByWithRelationInput | Prisma.OnboardingTaskOrderByWithRelationInput[];
    cursor?: Prisma.OnboardingTaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OnboardingTaskScalarFieldEnum | Prisma.OnboardingTaskScalarFieldEnum[];
};
export type OnboardingTaskCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingTaskSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingTaskOmit<ExtArgs> | null;
    include?: Prisma.OnboardingTaskInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OnboardingTaskCreateInput, Prisma.OnboardingTaskUncheckedCreateInput>;
};
export type OnboardingTaskCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OnboardingTaskCreateManyInput | Prisma.OnboardingTaskCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OnboardingTaskCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingTaskSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OnboardingTaskOmit<ExtArgs> | null;
    data: Prisma.OnboardingTaskCreateManyInput | Prisma.OnboardingTaskCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.OnboardingTaskIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type OnboardingTaskUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingTaskSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingTaskOmit<ExtArgs> | null;
    include?: Prisma.OnboardingTaskInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OnboardingTaskUpdateInput, Prisma.OnboardingTaskUncheckedUpdateInput>;
    where: Prisma.OnboardingTaskWhereUniqueInput;
};
export type OnboardingTaskUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OnboardingTaskUpdateManyMutationInput, Prisma.OnboardingTaskUncheckedUpdateManyInput>;
    where?: Prisma.OnboardingTaskWhereInput;
    limit?: number;
};
export type OnboardingTaskUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingTaskSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OnboardingTaskOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OnboardingTaskUpdateManyMutationInput, Prisma.OnboardingTaskUncheckedUpdateManyInput>;
    where?: Prisma.OnboardingTaskWhereInput;
    limit?: number;
    include?: Prisma.OnboardingTaskIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type OnboardingTaskUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingTaskSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingTaskOmit<ExtArgs> | null;
    include?: Prisma.OnboardingTaskInclude<ExtArgs> | null;
    where: Prisma.OnboardingTaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.OnboardingTaskCreateInput, Prisma.OnboardingTaskUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OnboardingTaskUpdateInput, Prisma.OnboardingTaskUncheckedUpdateInput>;
};
export type OnboardingTaskDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingTaskSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingTaskOmit<ExtArgs> | null;
    include?: Prisma.OnboardingTaskInclude<ExtArgs> | null;
    where: Prisma.OnboardingTaskWhereUniqueInput;
};
export type OnboardingTaskDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OnboardingTaskWhereInput;
    limit?: number;
};
export type OnboardingTaskDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingTaskSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingTaskOmit<ExtArgs> | null;
    include?: Prisma.OnboardingTaskInclude<ExtArgs> | null;
};
