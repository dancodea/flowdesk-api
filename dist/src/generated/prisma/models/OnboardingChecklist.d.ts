import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OnboardingChecklistModel = runtime.Types.Result.DefaultSelection<Prisma.$OnboardingChecklistPayload>;
export type AggregateOnboardingChecklist = {
    _count: OnboardingChecklistCountAggregateOutputType | null;
    _min: OnboardingChecklistMinAggregateOutputType | null;
    _max: OnboardingChecklistMaxAggregateOutputType | null;
};
export type OnboardingChecklistMinAggregateOutputType = {
    id: string | null;
    employeeId: string | null;
    templateId: string | null;
    status: $Enums.ChecklistStatus | null;
    createdAt: Date | null;
};
export type OnboardingChecklistMaxAggregateOutputType = {
    id: string | null;
    employeeId: string | null;
    templateId: string | null;
    status: $Enums.ChecklistStatus | null;
    createdAt: Date | null;
};
export type OnboardingChecklistCountAggregateOutputType = {
    id: number;
    employeeId: number;
    templateId: number;
    status: number;
    createdAt: number;
    _all: number;
};
export type OnboardingChecklistMinAggregateInputType = {
    id?: true;
    employeeId?: true;
    templateId?: true;
    status?: true;
    createdAt?: true;
};
export type OnboardingChecklistMaxAggregateInputType = {
    id?: true;
    employeeId?: true;
    templateId?: true;
    status?: true;
    createdAt?: true;
};
export type OnboardingChecklistCountAggregateInputType = {
    id?: true;
    employeeId?: true;
    templateId?: true;
    status?: true;
    createdAt?: true;
    _all?: true;
};
export type OnboardingChecklistAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OnboardingChecklistWhereInput;
    orderBy?: Prisma.OnboardingChecklistOrderByWithRelationInput | Prisma.OnboardingChecklistOrderByWithRelationInput[];
    cursor?: Prisma.OnboardingChecklistWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OnboardingChecklistCountAggregateInputType;
    _min?: OnboardingChecklistMinAggregateInputType;
    _max?: OnboardingChecklistMaxAggregateInputType;
};
export type GetOnboardingChecklistAggregateType<T extends OnboardingChecklistAggregateArgs> = {
    [P in keyof T & keyof AggregateOnboardingChecklist]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOnboardingChecklist[P]> : Prisma.GetScalarType<T[P], AggregateOnboardingChecklist[P]>;
};
export type OnboardingChecklistGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OnboardingChecklistWhereInput;
    orderBy?: Prisma.OnboardingChecklistOrderByWithAggregationInput | Prisma.OnboardingChecklistOrderByWithAggregationInput[];
    by: Prisma.OnboardingChecklistScalarFieldEnum[] | Prisma.OnboardingChecklistScalarFieldEnum;
    having?: Prisma.OnboardingChecklistScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OnboardingChecklistCountAggregateInputType | true;
    _min?: OnboardingChecklistMinAggregateInputType;
    _max?: OnboardingChecklistMaxAggregateInputType;
};
export type OnboardingChecklistGroupByOutputType = {
    id: string;
    employeeId: string;
    templateId: string | null;
    status: $Enums.ChecklistStatus;
    createdAt: Date;
    _count: OnboardingChecklistCountAggregateOutputType | null;
    _min: OnboardingChecklistMinAggregateOutputType | null;
    _max: OnboardingChecklistMaxAggregateOutputType | null;
};
export type GetOnboardingChecklistGroupByPayload<T extends OnboardingChecklistGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OnboardingChecklistGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OnboardingChecklistGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OnboardingChecklistGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OnboardingChecklistGroupByOutputType[P]>;
}>>;
export type OnboardingChecklistWhereInput = {
    AND?: Prisma.OnboardingChecklistWhereInput | Prisma.OnboardingChecklistWhereInput[];
    OR?: Prisma.OnboardingChecklistWhereInput[];
    NOT?: Prisma.OnboardingChecklistWhereInput | Prisma.OnboardingChecklistWhereInput[];
    id?: Prisma.UuidFilter<"OnboardingChecklist"> | string;
    employeeId?: Prisma.UuidFilter<"OnboardingChecklist"> | string;
    templateId?: Prisma.UuidNullableFilter<"OnboardingChecklist"> | string | null;
    status?: Prisma.EnumChecklistStatusFilter<"OnboardingChecklist"> | $Enums.ChecklistStatus;
    createdAt?: Prisma.DateTimeFilter<"OnboardingChecklist"> | Date | string;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
    template?: Prisma.XOR<Prisma.OnboardingTemplateNullableScalarRelationFilter, Prisma.OnboardingTemplateWhereInput> | null;
    tasks?: Prisma.OnboardingTaskListRelationFilter;
};
export type OnboardingChecklistOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    templateId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    employee?: Prisma.EmployeeOrderByWithRelationInput;
    template?: Prisma.OnboardingTemplateOrderByWithRelationInput;
    tasks?: Prisma.OnboardingTaskOrderByRelationAggregateInput;
};
export type OnboardingChecklistWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.OnboardingChecklistWhereInput | Prisma.OnboardingChecklistWhereInput[];
    OR?: Prisma.OnboardingChecklistWhereInput[];
    NOT?: Prisma.OnboardingChecklistWhereInput | Prisma.OnboardingChecklistWhereInput[];
    employeeId?: Prisma.UuidFilter<"OnboardingChecklist"> | string;
    templateId?: Prisma.UuidNullableFilter<"OnboardingChecklist"> | string | null;
    status?: Prisma.EnumChecklistStatusFilter<"OnboardingChecklist"> | $Enums.ChecklistStatus;
    createdAt?: Prisma.DateTimeFilter<"OnboardingChecklist"> | Date | string;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
    template?: Prisma.XOR<Prisma.OnboardingTemplateNullableScalarRelationFilter, Prisma.OnboardingTemplateWhereInput> | null;
    tasks?: Prisma.OnboardingTaskListRelationFilter;
}, "id">;
export type OnboardingChecklistOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    templateId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.OnboardingChecklistCountOrderByAggregateInput;
    _max?: Prisma.OnboardingChecklistMaxOrderByAggregateInput;
    _min?: Prisma.OnboardingChecklistMinOrderByAggregateInput;
};
export type OnboardingChecklistScalarWhereWithAggregatesInput = {
    AND?: Prisma.OnboardingChecklistScalarWhereWithAggregatesInput | Prisma.OnboardingChecklistScalarWhereWithAggregatesInput[];
    OR?: Prisma.OnboardingChecklistScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OnboardingChecklistScalarWhereWithAggregatesInput | Prisma.OnboardingChecklistScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"OnboardingChecklist"> | string;
    employeeId?: Prisma.UuidWithAggregatesFilter<"OnboardingChecklist"> | string;
    templateId?: Prisma.UuidNullableWithAggregatesFilter<"OnboardingChecklist"> | string | null;
    status?: Prisma.EnumChecklistStatusWithAggregatesFilter<"OnboardingChecklist"> | $Enums.ChecklistStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"OnboardingChecklist"> | Date | string;
};
export type OnboardingChecklistCreateInput = {
    id?: string;
    status?: $Enums.ChecklistStatus;
    createdAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutOnboardingChecklistsInput;
    template?: Prisma.OnboardingTemplateCreateNestedOneWithoutChecklistsInput;
    tasks?: Prisma.OnboardingTaskCreateNestedManyWithoutChecklistInput;
};
export type OnboardingChecklistUncheckedCreateInput = {
    id?: string;
    employeeId: string;
    templateId?: string | null;
    status?: $Enums.ChecklistStatus;
    createdAt?: Date | string;
    tasks?: Prisma.OnboardingTaskUncheckedCreateNestedManyWithoutChecklistInput;
};
export type OnboardingChecklistUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumChecklistStatusFieldUpdateOperationsInput | $Enums.ChecklistStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutOnboardingChecklistsNestedInput;
    template?: Prisma.OnboardingTemplateUpdateOneWithoutChecklistsNestedInput;
    tasks?: Prisma.OnboardingTaskUpdateManyWithoutChecklistNestedInput;
};
export type OnboardingChecklistUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumChecklistStatusFieldUpdateOperationsInput | $Enums.ChecklistStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.OnboardingTaskUncheckedUpdateManyWithoutChecklistNestedInput;
};
export type OnboardingChecklistCreateManyInput = {
    id?: string;
    employeeId: string;
    templateId?: string | null;
    status?: $Enums.ChecklistStatus;
    createdAt?: Date | string;
};
export type OnboardingChecklistUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumChecklistStatusFieldUpdateOperationsInput | $Enums.ChecklistStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OnboardingChecklistUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumChecklistStatusFieldUpdateOperationsInput | $Enums.ChecklistStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OnboardingChecklistListRelationFilter = {
    every?: Prisma.OnboardingChecklistWhereInput;
    some?: Prisma.OnboardingChecklistWhereInput;
    none?: Prisma.OnboardingChecklistWhereInput;
};
export type OnboardingChecklistOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OnboardingChecklistCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OnboardingChecklistMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OnboardingChecklistMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OnboardingChecklistScalarRelationFilter = {
    is?: Prisma.OnboardingChecklistWhereInput;
    isNot?: Prisma.OnboardingChecklistWhereInput;
};
export type OnboardingChecklistCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.OnboardingChecklistCreateWithoutEmployeeInput, Prisma.OnboardingChecklistUncheckedCreateWithoutEmployeeInput> | Prisma.OnboardingChecklistCreateWithoutEmployeeInput[] | Prisma.OnboardingChecklistUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.OnboardingChecklistCreateOrConnectWithoutEmployeeInput | Prisma.OnboardingChecklistCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.OnboardingChecklistCreateManyEmployeeInputEnvelope;
    connect?: Prisma.OnboardingChecklistWhereUniqueInput | Prisma.OnboardingChecklistWhereUniqueInput[];
};
export type OnboardingChecklistUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.OnboardingChecklistCreateWithoutEmployeeInput, Prisma.OnboardingChecklistUncheckedCreateWithoutEmployeeInput> | Prisma.OnboardingChecklistCreateWithoutEmployeeInput[] | Prisma.OnboardingChecklistUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.OnboardingChecklistCreateOrConnectWithoutEmployeeInput | Prisma.OnboardingChecklistCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.OnboardingChecklistCreateManyEmployeeInputEnvelope;
    connect?: Prisma.OnboardingChecklistWhereUniqueInput | Prisma.OnboardingChecklistWhereUniqueInput[];
};
export type OnboardingChecklistUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.OnboardingChecklistCreateWithoutEmployeeInput, Prisma.OnboardingChecklistUncheckedCreateWithoutEmployeeInput> | Prisma.OnboardingChecklistCreateWithoutEmployeeInput[] | Prisma.OnboardingChecklistUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.OnboardingChecklistCreateOrConnectWithoutEmployeeInput | Prisma.OnboardingChecklistCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.OnboardingChecklistUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.OnboardingChecklistUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.OnboardingChecklistCreateManyEmployeeInputEnvelope;
    set?: Prisma.OnboardingChecklistWhereUniqueInput | Prisma.OnboardingChecklistWhereUniqueInput[];
    disconnect?: Prisma.OnboardingChecklistWhereUniqueInput | Prisma.OnboardingChecklistWhereUniqueInput[];
    delete?: Prisma.OnboardingChecklistWhereUniqueInput | Prisma.OnboardingChecklistWhereUniqueInput[];
    connect?: Prisma.OnboardingChecklistWhereUniqueInput | Prisma.OnboardingChecklistWhereUniqueInput[];
    update?: Prisma.OnboardingChecklistUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.OnboardingChecklistUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.OnboardingChecklistUpdateManyWithWhereWithoutEmployeeInput | Prisma.OnboardingChecklistUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.OnboardingChecklistScalarWhereInput | Prisma.OnboardingChecklistScalarWhereInput[];
};
export type OnboardingChecklistUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.OnboardingChecklistCreateWithoutEmployeeInput, Prisma.OnboardingChecklistUncheckedCreateWithoutEmployeeInput> | Prisma.OnboardingChecklistCreateWithoutEmployeeInput[] | Prisma.OnboardingChecklistUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.OnboardingChecklistCreateOrConnectWithoutEmployeeInput | Prisma.OnboardingChecklistCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.OnboardingChecklistUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.OnboardingChecklistUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.OnboardingChecklistCreateManyEmployeeInputEnvelope;
    set?: Prisma.OnboardingChecklistWhereUniqueInput | Prisma.OnboardingChecklistWhereUniqueInput[];
    disconnect?: Prisma.OnboardingChecklistWhereUniqueInput | Prisma.OnboardingChecklistWhereUniqueInput[];
    delete?: Prisma.OnboardingChecklistWhereUniqueInput | Prisma.OnboardingChecklistWhereUniqueInput[];
    connect?: Prisma.OnboardingChecklistWhereUniqueInput | Prisma.OnboardingChecklistWhereUniqueInput[];
    update?: Prisma.OnboardingChecklistUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.OnboardingChecklistUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.OnboardingChecklistUpdateManyWithWhereWithoutEmployeeInput | Prisma.OnboardingChecklistUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.OnboardingChecklistScalarWhereInput | Prisma.OnboardingChecklistScalarWhereInput[];
};
export type OnboardingChecklistCreateNestedManyWithoutTemplateInput = {
    create?: Prisma.XOR<Prisma.OnboardingChecklistCreateWithoutTemplateInput, Prisma.OnboardingChecklistUncheckedCreateWithoutTemplateInput> | Prisma.OnboardingChecklistCreateWithoutTemplateInput[] | Prisma.OnboardingChecklistUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.OnboardingChecklistCreateOrConnectWithoutTemplateInput | Prisma.OnboardingChecklistCreateOrConnectWithoutTemplateInput[];
    createMany?: Prisma.OnboardingChecklistCreateManyTemplateInputEnvelope;
    connect?: Prisma.OnboardingChecklistWhereUniqueInput | Prisma.OnboardingChecklistWhereUniqueInput[];
};
export type OnboardingChecklistUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: Prisma.XOR<Prisma.OnboardingChecklistCreateWithoutTemplateInput, Prisma.OnboardingChecklistUncheckedCreateWithoutTemplateInput> | Prisma.OnboardingChecklistCreateWithoutTemplateInput[] | Prisma.OnboardingChecklistUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.OnboardingChecklistCreateOrConnectWithoutTemplateInput | Prisma.OnboardingChecklistCreateOrConnectWithoutTemplateInput[];
    createMany?: Prisma.OnboardingChecklistCreateManyTemplateInputEnvelope;
    connect?: Prisma.OnboardingChecklistWhereUniqueInput | Prisma.OnboardingChecklistWhereUniqueInput[];
};
export type OnboardingChecklistUpdateManyWithoutTemplateNestedInput = {
    create?: Prisma.XOR<Prisma.OnboardingChecklistCreateWithoutTemplateInput, Prisma.OnboardingChecklistUncheckedCreateWithoutTemplateInput> | Prisma.OnboardingChecklistCreateWithoutTemplateInput[] | Prisma.OnboardingChecklistUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.OnboardingChecklistCreateOrConnectWithoutTemplateInput | Prisma.OnboardingChecklistCreateOrConnectWithoutTemplateInput[];
    upsert?: Prisma.OnboardingChecklistUpsertWithWhereUniqueWithoutTemplateInput | Prisma.OnboardingChecklistUpsertWithWhereUniqueWithoutTemplateInput[];
    createMany?: Prisma.OnboardingChecklistCreateManyTemplateInputEnvelope;
    set?: Prisma.OnboardingChecklistWhereUniqueInput | Prisma.OnboardingChecklistWhereUniqueInput[];
    disconnect?: Prisma.OnboardingChecklistWhereUniqueInput | Prisma.OnboardingChecklistWhereUniqueInput[];
    delete?: Prisma.OnboardingChecklistWhereUniqueInput | Prisma.OnboardingChecklistWhereUniqueInput[];
    connect?: Prisma.OnboardingChecklistWhereUniqueInput | Prisma.OnboardingChecklistWhereUniqueInput[];
    update?: Prisma.OnboardingChecklistUpdateWithWhereUniqueWithoutTemplateInput | Prisma.OnboardingChecklistUpdateWithWhereUniqueWithoutTemplateInput[];
    updateMany?: Prisma.OnboardingChecklistUpdateManyWithWhereWithoutTemplateInput | Prisma.OnboardingChecklistUpdateManyWithWhereWithoutTemplateInput[];
    deleteMany?: Prisma.OnboardingChecklistScalarWhereInput | Prisma.OnboardingChecklistScalarWhereInput[];
};
export type OnboardingChecklistUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: Prisma.XOR<Prisma.OnboardingChecklistCreateWithoutTemplateInput, Prisma.OnboardingChecklistUncheckedCreateWithoutTemplateInput> | Prisma.OnboardingChecklistCreateWithoutTemplateInput[] | Prisma.OnboardingChecklistUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.OnboardingChecklistCreateOrConnectWithoutTemplateInput | Prisma.OnboardingChecklistCreateOrConnectWithoutTemplateInput[];
    upsert?: Prisma.OnboardingChecklistUpsertWithWhereUniqueWithoutTemplateInput | Prisma.OnboardingChecklistUpsertWithWhereUniqueWithoutTemplateInput[];
    createMany?: Prisma.OnboardingChecklistCreateManyTemplateInputEnvelope;
    set?: Prisma.OnboardingChecklistWhereUniqueInput | Prisma.OnboardingChecklistWhereUniqueInput[];
    disconnect?: Prisma.OnboardingChecklistWhereUniqueInput | Prisma.OnboardingChecklistWhereUniqueInput[];
    delete?: Prisma.OnboardingChecklistWhereUniqueInput | Prisma.OnboardingChecklistWhereUniqueInput[];
    connect?: Prisma.OnboardingChecklistWhereUniqueInput | Prisma.OnboardingChecklistWhereUniqueInput[];
    update?: Prisma.OnboardingChecklistUpdateWithWhereUniqueWithoutTemplateInput | Prisma.OnboardingChecklistUpdateWithWhereUniqueWithoutTemplateInput[];
    updateMany?: Prisma.OnboardingChecklistUpdateManyWithWhereWithoutTemplateInput | Prisma.OnboardingChecklistUpdateManyWithWhereWithoutTemplateInput[];
    deleteMany?: Prisma.OnboardingChecklistScalarWhereInput | Prisma.OnboardingChecklistScalarWhereInput[];
};
export type EnumChecklistStatusFieldUpdateOperationsInput = {
    set?: $Enums.ChecklistStatus;
};
export type OnboardingChecklistCreateNestedOneWithoutTasksInput = {
    create?: Prisma.XOR<Prisma.OnboardingChecklistCreateWithoutTasksInput, Prisma.OnboardingChecklistUncheckedCreateWithoutTasksInput>;
    connectOrCreate?: Prisma.OnboardingChecklistCreateOrConnectWithoutTasksInput;
    connect?: Prisma.OnboardingChecklistWhereUniqueInput;
};
export type OnboardingChecklistUpdateOneRequiredWithoutTasksNestedInput = {
    create?: Prisma.XOR<Prisma.OnboardingChecklistCreateWithoutTasksInput, Prisma.OnboardingChecklistUncheckedCreateWithoutTasksInput>;
    connectOrCreate?: Prisma.OnboardingChecklistCreateOrConnectWithoutTasksInput;
    upsert?: Prisma.OnboardingChecklistUpsertWithoutTasksInput;
    connect?: Prisma.OnboardingChecklistWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OnboardingChecklistUpdateToOneWithWhereWithoutTasksInput, Prisma.OnboardingChecklistUpdateWithoutTasksInput>, Prisma.OnboardingChecklistUncheckedUpdateWithoutTasksInput>;
};
export type OnboardingChecklistCreateWithoutEmployeeInput = {
    id?: string;
    status?: $Enums.ChecklistStatus;
    createdAt?: Date | string;
    template?: Prisma.OnboardingTemplateCreateNestedOneWithoutChecklistsInput;
    tasks?: Prisma.OnboardingTaskCreateNestedManyWithoutChecklistInput;
};
export type OnboardingChecklistUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    templateId?: string | null;
    status?: $Enums.ChecklistStatus;
    createdAt?: Date | string;
    tasks?: Prisma.OnboardingTaskUncheckedCreateNestedManyWithoutChecklistInput;
};
export type OnboardingChecklistCreateOrConnectWithoutEmployeeInput = {
    where: Prisma.OnboardingChecklistWhereUniqueInput;
    create: Prisma.XOR<Prisma.OnboardingChecklistCreateWithoutEmployeeInput, Prisma.OnboardingChecklistUncheckedCreateWithoutEmployeeInput>;
};
export type OnboardingChecklistCreateManyEmployeeInputEnvelope = {
    data: Prisma.OnboardingChecklistCreateManyEmployeeInput | Prisma.OnboardingChecklistCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
};
export type OnboardingChecklistUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.OnboardingChecklistWhereUniqueInput;
    update: Prisma.XOR<Prisma.OnboardingChecklistUpdateWithoutEmployeeInput, Prisma.OnboardingChecklistUncheckedUpdateWithoutEmployeeInput>;
    create: Prisma.XOR<Prisma.OnboardingChecklistCreateWithoutEmployeeInput, Prisma.OnboardingChecklistUncheckedCreateWithoutEmployeeInput>;
};
export type OnboardingChecklistUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.OnboardingChecklistWhereUniqueInput;
    data: Prisma.XOR<Prisma.OnboardingChecklistUpdateWithoutEmployeeInput, Prisma.OnboardingChecklistUncheckedUpdateWithoutEmployeeInput>;
};
export type OnboardingChecklistUpdateManyWithWhereWithoutEmployeeInput = {
    where: Prisma.OnboardingChecklistScalarWhereInput;
    data: Prisma.XOR<Prisma.OnboardingChecklistUpdateManyMutationInput, Prisma.OnboardingChecklistUncheckedUpdateManyWithoutEmployeeInput>;
};
export type OnboardingChecklistScalarWhereInput = {
    AND?: Prisma.OnboardingChecklistScalarWhereInput | Prisma.OnboardingChecklistScalarWhereInput[];
    OR?: Prisma.OnboardingChecklistScalarWhereInput[];
    NOT?: Prisma.OnboardingChecklistScalarWhereInput | Prisma.OnboardingChecklistScalarWhereInput[];
    id?: Prisma.UuidFilter<"OnboardingChecklist"> | string;
    employeeId?: Prisma.UuidFilter<"OnboardingChecklist"> | string;
    templateId?: Prisma.UuidNullableFilter<"OnboardingChecklist"> | string | null;
    status?: Prisma.EnumChecklistStatusFilter<"OnboardingChecklist"> | $Enums.ChecklistStatus;
    createdAt?: Prisma.DateTimeFilter<"OnboardingChecklist"> | Date | string;
};
export type OnboardingChecklistCreateWithoutTemplateInput = {
    id?: string;
    status?: $Enums.ChecklistStatus;
    createdAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutOnboardingChecklistsInput;
    tasks?: Prisma.OnboardingTaskCreateNestedManyWithoutChecklistInput;
};
export type OnboardingChecklistUncheckedCreateWithoutTemplateInput = {
    id?: string;
    employeeId: string;
    status?: $Enums.ChecklistStatus;
    createdAt?: Date | string;
    tasks?: Prisma.OnboardingTaskUncheckedCreateNestedManyWithoutChecklistInput;
};
export type OnboardingChecklistCreateOrConnectWithoutTemplateInput = {
    where: Prisma.OnboardingChecklistWhereUniqueInput;
    create: Prisma.XOR<Prisma.OnboardingChecklistCreateWithoutTemplateInput, Prisma.OnboardingChecklistUncheckedCreateWithoutTemplateInput>;
};
export type OnboardingChecklistCreateManyTemplateInputEnvelope = {
    data: Prisma.OnboardingChecklistCreateManyTemplateInput | Prisma.OnboardingChecklistCreateManyTemplateInput[];
    skipDuplicates?: boolean;
};
export type OnboardingChecklistUpsertWithWhereUniqueWithoutTemplateInput = {
    where: Prisma.OnboardingChecklistWhereUniqueInput;
    update: Prisma.XOR<Prisma.OnboardingChecklistUpdateWithoutTemplateInput, Prisma.OnboardingChecklistUncheckedUpdateWithoutTemplateInput>;
    create: Prisma.XOR<Prisma.OnboardingChecklistCreateWithoutTemplateInput, Prisma.OnboardingChecklistUncheckedCreateWithoutTemplateInput>;
};
export type OnboardingChecklistUpdateWithWhereUniqueWithoutTemplateInput = {
    where: Prisma.OnboardingChecklistWhereUniqueInput;
    data: Prisma.XOR<Prisma.OnboardingChecklistUpdateWithoutTemplateInput, Prisma.OnboardingChecklistUncheckedUpdateWithoutTemplateInput>;
};
export type OnboardingChecklistUpdateManyWithWhereWithoutTemplateInput = {
    where: Prisma.OnboardingChecklistScalarWhereInput;
    data: Prisma.XOR<Prisma.OnboardingChecklistUpdateManyMutationInput, Prisma.OnboardingChecklistUncheckedUpdateManyWithoutTemplateInput>;
};
export type OnboardingChecklistCreateWithoutTasksInput = {
    id?: string;
    status?: $Enums.ChecklistStatus;
    createdAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutOnboardingChecklistsInput;
    template?: Prisma.OnboardingTemplateCreateNestedOneWithoutChecklistsInput;
};
export type OnboardingChecklistUncheckedCreateWithoutTasksInput = {
    id?: string;
    employeeId: string;
    templateId?: string | null;
    status?: $Enums.ChecklistStatus;
    createdAt?: Date | string;
};
export type OnboardingChecklistCreateOrConnectWithoutTasksInput = {
    where: Prisma.OnboardingChecklistWhereUniqueInput;
    create: Prisma.XOR<Prisma.OnboardingChecklistCreateWithoutTasksInput, Prisma.OnboardingChecklistUncheckedCreateWithoutTasksInput>;
};
export type OnboardingChecklistUpsertWithoutTasksInput = {
    update: Prisma.XOR<Prisma.OnboardingChecklistUpdateWithoutTasksInput, Prisma.OnboardingChecklistUncheckedUpdateWithoutTasksInput>;
    create: Prisma.XOR<Prisma.OnboardingChecklistCreateWithoutTasksInput, Prisma.OnboardingChecklistUncheckedCreateWithoutTasksInput>;
    where?: Prisma.OnboardingChecklistWhereInput;
};
export type OnboardingChecklistUpdateToOneWithWhereWithoutTasksInput = {
    where?: Prisma.OnboardingChecklistWhereInput;
    data: Prisma.XOR<Prisma.OnboardingChecklistUpdateWithoutTasksInput, Prisma.OnboardingChecklistUncheckedUpdateWithoutTasksInput>;
};
export type OnboardingChecklistUpdateWithoutTasksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumChecklistStatusFieldUpdateOperationsInput | $Enums.ChecklistStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutOnboardingChecklistsNestedInput;
    template?: Prisma.OnboardingTemplateUpdateOneWithoutChecklistsNestedInput;
};
export type OnboardingChecklistUncheckedUpdateWithoutTasksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumChecklistStatusFieldUpdateOperationsInput | $Enums.ChecklistStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OnboardingChecklistCreateManyEmployeeInput = {
    id?: string;
    templateId?: string | null;
    status?: $Enums.ChecklistStatus;
    createdAt?: Date | string;
};
export type OnboardingChecklistUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumChecklistStatusFieldUpdateOperationsInput | $Enums.ChecklistStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    template?: Prisma.OnboardingTemplateUpdateOneWithoutChecklistsNestedInput;
    tasks?: Prisma.OnboardingTaskUpdateManyWithoutChecklistNestedInput;
};
export type OnboardingChecklistUncheckedUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumChecklistStatusFieldUpdateOperationsInput | $Enums.ChecklistStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.OnboardingTaskUncheckedUpdateManyWithoutChecklistNestedInput;
};
export type OnboardingChecklistUncheckedUpdateManyWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumChecklistStatusFieldUpdateOperationsInput | $Enums.ChecklistStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OnboardingChecklistCreateManyTemplateInput = {
    id?: string;
    employeeId: string;
    status?: $Enums.ChecklistStatus;
    createdAt?: Date | string;
};
export type OnboardingChecklistUpdateWithoutTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumChecklistStatusFieldUpdateOperationsInput | $Enums.ChecklistStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutOnboardingChecklistsNestedInput;
    tasks?: Prisma.OnboardingTaskUpdateManyWithoutChecklistNestedInput;
};
export type OnboardingChecklistUncheckedUpdateWithoutTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumChecklistStatusFieldUpdateOperationsInput | $Enums.ChecklistStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.OnboardingTaskUncheckedUpdateManyWithoutChecklistNestedInput;
};
export type OnboardingChecklistUncheckedUpdateManyWithoutTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumChecklistStatusFieldUpdateOperationsInput | $Enums.ChecklistStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OnboardingChecklistCountOutputType = {
    tasks: number;
};
export type OnboardingChecklistCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tasks?: boolean | OnboardingChecklistCountOutputTypeCountTasksArgs;
};
export type OnboardingChecklistCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingChecklistCountOutputTypeSelect<ExtArgs> | null;
};
export type OnboardingChecklistCountOutputTypeCountTasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OnboardingTaskWhereInput;
};
export type OnboardingChecklistSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    templateId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    template?: boolean | Prisma.OnboardingChecklist$templateArgs<ExtArgs>;
    tasks?: boolean | Prisma.OnboardingChecklist$tasksArgs<ExtArgs>;
    _count?: boolean | Prisma.OnboardingChecklistCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["onboardingChecklist"]>;
export type OnboardingChecklistSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    templateId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    template?: boolean | Prisma.OnboardingChecklist$templateArgs<ExtArgs>;
}, ExtArgs["result"]["onboardingChecklist"]>;
export type OnboardingChecklistSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    templateId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    template?: boolean | Prisma.OnboardingChecklist$templateArgs<ExtArgs>;
}, ExtArgs["result"]["onboardingChecklist"]>;
export type OnboardingChecklistSelectScalar = {
    id?: boolean;
    employeeId?: boolean;
    templateId?: boolean;
    status?: boolean;
    createdAt?: boolean;
};
export type OnboardingChecklistOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "employeeId" | "templateId" | "status" | "createdAt", ExtArgs["result"]["onboardingChecklist"]>;
export type OnboardingChecklistInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    template?: boolean | Prisma.OnboardingChecklist$templateArgs<ExtArgs>;
    tasks?: boolean | Prisma.OnboardingChecklist$tasksArgs<ExtArgs>;
    _count?: boolean | Prisma.OnboardingChecklistCountOutputTypeDefaultArgs<ExtArgs>;
};
export type OnboardingChecklistIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    template?: boolean | Prisma.OnboardingChecklist$templateArgs<ExtArgs>;
};
export type OnboardingChecklistIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    template?: boolean | Prisma.OnboardingChecklist$templateArgs<ExtArgs>;
};
export type $OnboardingChecklistPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OnboardingChecklist";
    objects: {
        employee: Prisma.$EmployeePayload<ExtArgs>;
        template: Prisma.$OnboardingTemplatePayload<ExtArgs> | null;
        tasks: Prisma.$OnboardingTaskPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        employeeId: string;
        templateId: string | null;
        status: $Enums.ChecklistStatus;
        createdAt: Date;
    }, ExtArgs["result"]["onboardingChecklist"]>;
    composites: {};
};
export type OnboardingChecklistGetPayload<S extends boolean | null | undefined | OnboardingChecklistDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OnboardingChecklistPayload, S>;
export type OnboardingChecklistCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OnboardingChecklistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OnboardingChecklistCountAggregateInputType | true;
};
export interface OnboardingChecklistDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OnboardingChecklist'];
        meta: {
            name: 'OnboardingChecklist';
        };
    };
    findUnique<T extends OnboardingChecklistFindUniqueArgs>(args: Prisma.SelectSubset<T, OnboardingChecklistFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OnboardingChecklistClient<runtime.Types.Result.GetResult<Prisma.$OnboardingChecklistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OnboardingChecklistFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OnboardingChecklistFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OnboardingChecklistClient<runtime.Types.Result.GetResult<Prisma.$OnboardingChecklistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OnboardingChecklistFindFirstArgs>(args?: Prisma.SelectSubset<T, OnboardingChecklistFindFirstArgs<ExtArgs>>): Prisma.Prisma__OnboardingChecklistClient<runtime.Types.Result.GetResult<Prisma.$OnboardingChecklistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OnboardingChecklistFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OnboardingChecklistFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OnboardingChecklistClient<runtime.Types.Result.GetResult<Prisma.$OnboardingChecklistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OnboardingChecklistFindManyArgs>(args?: Prisma.SelectSubset<T, OnboardingChecklistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OnboardingChecklistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OnboardingChecklistCreateArgs>(args: Prisma.SelectSubset<T, OnboardingChecklistCreateArgs<ExtArgs>>): Prisma.Prisma__OnboardingChecklistClient<runtime.Types.Result.GetResult<Prisma.$OnboardingChecklistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OnboardingChecklistCreateManyArgs>(args?: Prisma.SelectSubset<T, OnboardingChecklistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OnboardingChecklistCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OnboardingChecklistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OnboardingChecklistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OnboardingChecklistDeleteArgs>(args: Prisma.SelectSubset<T, OnboardingChecklistDeleteArgs<ExtArgs>>): Prisma.Prisma__OnboardingChecklistClient<runtime.Types.Result.GetResult<Prisma.$OnboardingChecklistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OnboardingChecklistUpdateArgs>(args: Prisma.SelectSubset<T, OnboardingChecklistUpdateArgs<ExtArgs>>): Prisma.Prisma__OnboardingChecklistClient<runtime.Types.Result.GetResult<Prisma.$OnboardingChecklistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OnboardingChecklistDeleteManyArgs>(args?: Prisma.SelectSubset<T, OnboardingChecklistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OnboardingChecklistUpdateManyArgs>(args: Prisma.SelectSubset<T, OnboardingChecklistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OnboardingChecklistUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OnboardingChecklistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OnboardingChecklistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OnboardingChecklistUpsertArgs>(args: Prisma.SelectSubset<T, OnboardingChecklistUpsertArgs<ExtArgs>>): Prisma.Prisma__OnboardingChecklistClient<runtime.Types.Result.GetResult<Prisma.$OnboardingChecklistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OnboardingChecklistCountArgs>(args?: Prisma.Subset<T, OnboardingChecklistCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OnboardingChecklistCountAggregateOutputType> : number>;
    aggregate<T extends OnboardingChecklistAggregateArgs>(args: Prisma.Subset<T, OnboardingChecklistAggregateArgs>): Prisma.PrismaPromise<GetOnboardingChecklistAggregateType<T>>;
    groupBy<T extends OnboardingChecklistGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OnboardingChecklistGroupByArgs['orderBy'];
    } : {
        orderBy?: OnboardingChecklistGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OnboardingChecklistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOnboardingChecklistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OnboardingChecklistFieldRefs;
}
export interface Prisma__OnboardingChecklistClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    employee<T extends Prisma.EmployeeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmployeeDefaultArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    template<T extends Prisma.OnboardingChecklist$templateArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OnboardingChecklist$templateArgs<ExtArgs>>): Prisma.Prisma__OnboardingTemplateClient<runtime.Types.Result.GetResult<Prisma.$OnboardingTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    tasks<T extends Prisma.OnboardingChecklist$tasksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OnboardingChecklist$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OnboardingTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OnboardingChecklistFieldRefs {
    readonly id: Prisma.FieldRef<"OnboardingChecklist", 'String'>;
    readonly employeeId: Prisma.FieldRef<"OnboardingChecklist", 'String'>;
    readonly templateId: Prisma.FieldRef<"OnboardingChecklist", 'String'>;
    readonly status: Prisma.FieldRef<"OnboardingChecklist", 'ChecklistStatus'>;
    readonly createdAt: Prisma.FieldRef<"OnboardingChecklist", 'DateTime'>;
}
export type OnboardingChecklistFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingChecklistSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingChecklistOmit<ExtArgs> | null;
    include?: Prisma.OnboardingChecklistInclude<ExtArgs> | null;
    where: Prisma.OnboardingChecklistWhereUniqueInput;
};
export type OnboardingChecklistFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingChecklistSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingChecklistOmit<ExtArgs> | null;
    include?: Prisma.OnboardingChecklistInclude<ExtArgs> | null;
    where: Prisma.OnboardingChecklistWhereUniqueInput;
};
export type OnboardingChecklistFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OnboardingChecklistFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OnboardingChecklistFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OnboardingChecklistCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingChecklistSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingChecklistOmit<ExtArgs> | null;
    include?: Prisma.OnboardingChecklistInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OnboardingChecklistCreateInput, Prisma.OnboardingChecklistUncheckedCreateInput>;
};
export type OnboardingChecklistCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OnboardingChecklistCreateManyInput | Prisma.OnboardingChecklistCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OnboardingChecklistCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingChecklistSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OnboardingChecklistOmit<ExtArgs> | null;
    data: Prisma.OnboardingChecklistCreateManyInput | Prisma.OnboardingChecklistCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.OnboardingChecklistIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type OnboardingChecklistUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingChecklistSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingChecklistOmit<ExtArgs> | null;
    include?: Prisma.OnboardingChecklistInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OnboardingChecklistUpdateInput, Prisma.OnboardingChecklistUncheckedUpdateInput>;
    where: Prisma.OnboardingChecklistWhereUniqueInput;
};
export type OnboardingChecklistUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OnboardingChecklistUpdateManyMutationInput, Prisma.OnboardingChecklistUncheckedUpdateManyInput>;
    where?: Prisma.OnboardingChecklistWhereInput;
    limit?: number;
};
export type OnboardingChecklistUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingChecklistSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OnboardingChecklistOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OnboardingChecklistUpdateManyMutationInput, Prisma.OnboardingChecklistUncheckedUpdateManyInput>;
    where?: Prisma.OnboardingChecklistWhereInput;
    limit?: number;
    include?: Prisma.OnboardingChecklistIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type OnboardingChecklistUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingChecklistSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingChecklistOmit<ExtArgs> | null;
    include?: Prisma.OnboardingChecklistInclude<ExtArgs> | null;
    where: Prisma.OnboardingChecklistWhereUniqueInput;
    create: Prisma.XOR<Prisma.OnboardingChecklistCreateInput, Prisma.OnboardingChecklistUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OnboardingChecklistUpdateInput, Prisma.OnboardingChecklistUncheckedUpdateInput>;
};
export type OnboardingChecklistDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingChecklistSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingChecklistOmit<ExtArgs> | null;
    include?: Prisma.OnboardingChecklistInclude<ExtArgs> | null;
    where: Prisma.OnboardingChecklistWhereUniqueInput;
};
export type OnboardingChecklistDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OnboardingChecklistWhereInput;
    limit?: number;
};
export type OnboardingChecklist$templateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingTemplateSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingTemplateOmit<ExtArgs> | null;
    include?: Prisma.OnboardingTemplateInclude<ExtArgs> | null;
    where?: Prisma.OnboardingTemplateWhereInput;
};
export type OnboardingChecklist$tasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OnboardingChecklistDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OnboardingChecklistSelect<ExtArgs> | null;
    omit?: Prisma.OnboardingChecklistOmit<ExtArgs> | null;
    include?: Prisma.OnboardingChecklistInclude<ExtArgs> | null;
};
