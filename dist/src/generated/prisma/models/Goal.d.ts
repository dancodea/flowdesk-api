import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type GoalModel = runtime.Types.Result.DefaultSelection<Prisma.$GoalPayload>;
export type AggregateGoal = {
    _count: GoalCountAggregateOutputType | null;
    _avg: GoalAvgAggregateOutputType | null;
    _sum: GoalSumAggregateOutputType | null;
    _min: GoalMinAggregateOutputType | null;
    _max: GoalMaxAggregateOutputType | null;
};
export type GoalAvgAggregateOutputType = {
    target: runtime.Decimal | null;
    currentProgress: runtime.Decimal | null;
};
export type GoalSumAggregateOutputType = {
    target: runtime.Decimal | null;
    currentProgress: runtime.Decimal | null;
};
export type GoalMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    ownerId: string | null;
    cycleId: string | null;
    title: string | null;
    description: string | null;
    metric: string | null;
    target: runtime.Decimal | null;
    currentProgress: runtime.Decimal | null;
    dueDate: Date | null;
    status: $Enums.GoalStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type GoalMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    ownerId: string | null;
    cycleId: string | null;
    title: string | null;
    description: string | null;
    metric: string | null;
    target: runtime.Decimal | null;
    currentProgress: runtime.Decimal | null;
    dueDate: Date | null;
    status: $Enums.GoalStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type GoalCountAggregateOutputType = {
    id: number;
    organizationId: number;
    ownerId: number;
    cycleId: number;
    title: number;
    description: number;
    metric: number;
    target: number;
    currentProgress: number;
    dueDate: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type GoalAvgAggregateInputType = {
    target?: true;
    currentProgress?: true;
};
export type GoalSumAggregateInputType = {
    target?: true;
    currentProgress?: true;
};
export type GoalMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    ownerId?: true;
    cycleId?: true;
    title?: true;
    description?: true;
    metric?: true;
    target?: true;
    currentProgress?: true;
    dueDate?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type GoalMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    ownerId?: true;
    cycleId?: true;
    title?: true;
    description?: true;
    metric?: true;
    target?: true;
    currentProgress?: true;
    dueDate?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type GoalCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    ownerId?: true;
    cycleId?: true;
    title?: true;
    description?: true;
    metric?: true;
    target?: true;
    currentProgress?: true;
    dueDate?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type GoalAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GoalWhereInput;
    orderBy?: Prisma.GoalOrderByWithRelationInput | Prisma.GoalOrderByWithRelationInput[];
    cursor?: Prisma.GoalWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | GoalCountAggregateInputType;
    _avg?: GoalAvgAggregateInputType;
    _sum?: GoalSumAggregateInputType;
    _min?: GoalMinAggregateInputType;
    _max?: GoalMaxAggregateInputType;
};
export type GetGoalAggregateType<T extends GoalAggregateArgs> = {
    [P in keyof T & keyof AggregateGoal]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGoal[P]> : Prisma.GetScalarType<T[P], AggregateGoal[P]>;
};
export type GoalGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GoalWhereInput;
    orderBy?: Prisma.GoalOrderByWithAggregationInput | Prisma.GoalOrderByWithAggregationInput[];
    by: Prisma.GoalScalarFieldEnum[] | Prisma.GoalScalarFieldEnum;
    having?: Prisma.GoalScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GoalCountAggregateInputType | true;
    _avg?: GoalAvgAggregateInputType;
    _sum?: GoalSumAggregateInputType;
    _min?: GoalMinAggregateInputType;
    _max?: GoalMaxAggregateInputType;
};
export type GoalGroupByOutputType = {
    id: string;
    organizationId: string;
    ownerId: string | null;
    cycleId: string | null;
    title: string;
    description: string | null;
    metric: string | null;
    target: runtime.Decimal | null;
    currentProgress: runtime.Decimal;
    dueDate: Date | null;
    status: $Enums.GoalStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: GoalCountAggregateOutputType | null;
    _avg: GoalAvgAggregateOutputType | null;
    _sum: GoalSumAggregateOutputType | null;
    _min: GoalMinAggregateOutputType | null;
    _max: GoalMaxAggregateOutputType | null;
};
export type GetGoalGroupByPayload<T extends GoalGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GoalGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GoalGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GoalGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GoalGroupByOutputType[P]>;
}>>;
export type GoalWhereInput = {
    AND?: Prisma.GoalWhereInput | Prisma.GoalWhereInput[];
    OR?: Prisma.GoalWhereInput[];
    NOT?: Prisma.GoalWhereInput | Prisma.GoalWhereInput[];
    id?: Prisma.UuidFilter<"Goal"> | string;
    organizationId?: Prisma.UuidFilter<"Goal"> | string;
    ownerId?: Prisma.UuidNullableFilter<"Goal"> | string | null;
    cycleId?: Prisma.UuidNullableFilter<"Goal"> | string | null;
    title?: Prisma.StringFilter<"Goal"> | string;
    description?: Prisma.StringNullableFilter<"Goal"> | string | null;
    metric?: Prisma.StringNullableFilter<"Goal"> | string | null;
    target?: Prisma.DecimalNullableFilter<"Goal"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currentProgress?: Prisma.DecimalFilter<"Goal"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Prisma.DateTimeNullableFilter<"Goal"> | Date | string | null;
    status?: Prisma.EnumGoalStatusFilter<"Goal"> | $Enums.GoalStatus;
    createdAt?: Prisma.DateTimeFilter<"Goal"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Goal"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    owner?: Prisma.XOR<Prisma.EmployeeNullableScalarRelationFilter, Prisma.EmployeeWhereInput> | null;
    cycle?: Prisma.XOR<Prisma.PerformanceCycleNullableScalarRelationFilter, Prisma.PerformanceCycleWhereInput> | null;
    checkins?: Prisma.GoalCheckinListRelationFilter;
};
export type GoalOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    cycleId?: Prisma.SortOrderInput | Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    metric?: Prisma.SortOrderInput | Prisma.SortOrder;
    target?: Prisma.SortOrderInput | Prisma.SortOrder;
    currentProgress?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    owner?: Prisma.EmployeeOrderByWithRelationInput;
    cycle?: Prisma.PerformanceCycleOrderByWithRelationInput;
    checkins?: Prisma.GoalCheckinOrderByRelationAggregateInput;
};
export type GoalWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.GoalWhereInput | Prisma.GoalWhereInput[];
    OR?: Prisma.GoalWhereInput[];
    NOT?: Prisma.GoalWhereInput | Prisma.GoalWhereInput[];
    organizationId?: Prisma.UuidFilter<"Goal"> | string;
    ownerId?: Prisma.UuidNullableFilter<"Goal"> | string | null;
    cycleId?: Prisma.UuidNullableFilter<"Goal"> | string | null;
    title?: Prisma.StringFilter<"Goal"> | string;
    description?: Prisma.StringNullableFilter<"Goal"> | string | null;
    metric?: Prisma.StringNullableFilter<"Goal"> | string | null;
    target?: Prisma.DecimalNullableFilter<"Goal"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currentProgress?: Prisma.DecimalFilter<"Goal"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Prisma.DateTimeNullableFilter<"Goal"> | Date | string | null;
    status?: Prisma.EnumGoalStatusFilter<"Goal"> | $Enums.GoalStatus;
    createdAt?: Prisma.DateTimeFilter<"Goal"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Goal"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    owner?: Prisma.XOR<Prisma.EmployeeNullableScalarRelationFilter, Prisma.EmployeeWhereInput> | null;
    cycle?: Prisma.XOR<Prisma.PerformanceCycleNullableScalarRelationFilter, Prisma.PerformanceCycleWhereInput> | null;
    checkins?: Prisma.GoalCheckinListRelationFilter;
}, "id">;
export type GoalOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    cycleId?: Prisma.SortOrderInput | Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    metric?: Prisma.SortOrderInput | Prisma.SortOrder;
    target?: Prisma.SortOrderInput | Prisma.SortOrder;
    currentProgress?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.GoalCountOrderByAggregateInput;
    _avg?: Prisma.GoalAvgOrderByAggregateInput;
    _max?: Prisma.GoalMaxOrderByAggregateInput;
    _min?: Prisma.GoalMinOrderByAggregateInput;
    _sum?: Prisma.GoalSumOrderByAggregateInput;
};
export type GoalScalarWhereWithAggregatesInput = {
    AND?: Prisma.GoalScalarWhereWithAggregatesInput | Prisma.GoalScalarWhereWithAggregatesInput[];
    OR?: Prisma.GoalScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GoalScalarWhereWithAggregatesInput | Prisma.GoalScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Goal"> | string;
    organizationId?: Prisma.UuidWithAggregatesFilter<"Goal"> | string;
    ownerId?: Prisma.UuidNullableWithAggregatesFilter<"Goal"> | string | null;
    cycleId?: Prisma.UuidNullableWithAggregatesFilter<"Goal"> | string | null;
    title?: Prisma.StringWithAggregatesFilter<"Goal"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Goal"> | string | null;
    metric?: Prisma.StringNullableWithAggregatesFilter<"Goal"> | string | null;
    target?: Prisma.DecimalNullableWithAggregatesFilter<"Goal"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currentProgress?: Prisma.DecimalWithAggregatesFilter<"Goal"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Prisma.DateTimeNullableWithAggregatesFilter<"Goal"> | Date | string | null;
    status?: Prisma.EnumGoalStatusWithAggregatesFilter<"Goal"> | $Enums.GoalStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Goal"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Goal"> | Date | string;
};
export type GoalCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    metric?: string | null;
    target?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currentProgress?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Date | string | null;
    status?: $Enums.GoalStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutGoalsInput;
    owner?: Prisma.EmployeeCreateNestedOneWithoutGoalsInput;
    cycle?: Prisma.PerformanceCycleCreateNestedOneWithoutGoalsInput;
    checkins?: Prisma.GoalCheckinCreateNestedManyWithoutGoalInput;
};
export type GoalUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    ownerId?: string | null;
    cycleId?: string | null;
    title: string;
    description?: string | null;
    metric?: string | null;
    target?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currentProgress?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Date | string | null;
    status?: $Enums.GoalStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    checkins?: Prisma.GoalCheckinUncheckedCreateNestedManyWithoutGoalInput;
};
export type GoalUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metric?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    target?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currentProgress?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutGoalsNestedInput;
    owner?: Prisma.EmployeeUpdateOneWithoutGoalsNestedInput;
    cycle?: Prisma.PerformanceCycleUpdateOneWithoutGoalsNestedInput;
    checkins?: Prisma.GoalCheckinUpdateManyWithoutGoalNestedInput;
};
export type GoalUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cycleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metric?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    target?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currentProgress?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkins?: Prisma.GoalCheckinUncheckedUpdateManyWithoutGoalNestedInput;
};
export type GoalCreateManyInput = {
    id?: string;
    organizationId: string;
    ownerId?: string | null;
    cycleId?: string | null;
    title: string;
    description?: string | null;
    metric?: string | null;
    target?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currentProgress?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Date | string | null;
    status?: $Enums.GoalStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GoalUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metric?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    target?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currentProgress?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GoalUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cycleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metric?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    target?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currentProgress?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GoalListRelationFilter = {
    every?: Prisma.GoalWhereInput;
    some?: Prisma.GoalWhereInput;
    none?: Prisma.GoalWhereInput;
};
export type GoalOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type GoalCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    cycleId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    metric?: Prisma.SortOrder;
    target?: Prisma.SortOrder;
    currentProgress?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GoalAvgOrderByAggregateInput = {
    target?: Prisma.SortOrder;
    currentProgress?: Prisma.SortOrder;
};
export type GoalMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    cycleId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    metric?: Prisma.SortOrder;
    target?: Prisma.SortOrder;
    currentProgress?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GoalMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    cycleId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    metric?: Prisma.SortOrder;
    target?: Prisma.SortOrder;
    currentProgress?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GoalSumOrderByAggregateInput = {
    target?: Prisma.SortOrder;
    currentProgress?: Prisma.SortOrder;
};
export type GoalScalarRelationFilter = {
    is?: Prisma.GoalWhereInput;
    isNot?: Prisma.GoalWhereInput;
};
export type GoalCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.GoalCreateWithoutOrganizationInput, Prisma.GoalUncheckedCreateWithoutOrganizationInput> | Prisma.GoalCreateWithoutOrganizationInput[] | Prisma.GoalUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.GoalCreateOrConnectWithoutOrganizationInput | Prisma.GoalCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.GoalCreateManyOrganizationInputEnvelope;
    connect?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
};
export type GoalUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.GoalCreateWithoutOrganizationInput, Prisma.GoalUncheckedCreateWithoutOrganizationInput> | Prisma.GoalCreateWithoutOrganizationInput[] | Prisma.GoalUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.GoalCreateOrConnectWithoutOrganizationInput | Prisma.GoalCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.GoalCreateManyOrganizationInputEnvelope;
    connect?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
};
export type GoalUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.GoalCreateWithoutOrganizationInput, Prisma.GoalUncheckedCreateWithoutOrganizationInput> | Prisma.GoalCreateWithoutOrganizationInput[] | Prisma.GoalUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.GoalCreateOrConnectWithoutOrganizationInput | Prisma.GoalCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.GoalUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.GoalUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.GoalCreateManyOrganizationInputEnvelope;
    set?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
    disconnect?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
    delete?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
    connect?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
    update?: Prisma.GoalUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.GoalUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.GoalUpdateManyWithWhereWithoutOrganizationInput | Prisma.GoalUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.GoalScalarWhereInput | Prisma.GoalScalarWhereInput[];
};
export type GoalUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.GoalCreateWithoutOrganizationInput, Prisma.GoalUncheckedCreateWithoutOrganizationInput> | Prisma.GoalCreateWithoutOrganizationInput[] | Prisma.GoalUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.GoalCreateOrConnectWithoutOrganizationInput | Prisma.GoalCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.GoalUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.GoalUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.GoalCreateManyOrganizationInputEnvelope;
    set?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
    disconnect?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
    delete?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
    connect?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
    update?: Prisma.GoalUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.GoalUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.GoalUpdateManyWithWhereWithoutOrganizationInput | Prisma.GoalUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.GoalScalarWhereInput | Prisma.GoalScalarWhereInput[];
};
export type GoalCreateNestedManyWithoutOwnerInput = {
    create?: Prisma.XOR<Prisma.GoalCreateWithoutOwnerInput, Prisma.GoalUncheckedCreateWithoutOwnerInput> | Prisma.GoalCreateWithoutOwnerInput[] | Prisma.GoalUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.GoalCreateOrConnectWithoutOwnerInput | Prisma.GoalCreateOrConnectWithoutOwnerInput[];
    createMany?: Prisma.GoalCreateManyOwnerInputEnvelope;
    connect?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
};
export type GoalUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: Prisma.XOR<Prisma.GoalCreateWithoutOwnerInput, Prisma.GoalUncheckedCreateWithoutOwnerInput> | Prisma.GoalCreateWithoutOwnerInput[] | Prisma.GoalUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.GoalCreateOrConnectWithoutOwnerInput | Prisma.GoalCreateOrConnectWithoutOwnerInput[];
    createMany?: Prisma.GoalCreateManyOwnerInputEnvelope;
    connect?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
};
export type GoalUpdateManyWithoutOwnerNestedInput = {
    create?: Prisma.XOR<Prisma.GoalCreateWithoutOwnerInput, Prisma.GoalUncheckedCreateWithoutOwnerInput> | Prisma.GoalCreateWithoutOwnerInput[] | Prisma.GoalUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.GoalCreateOrConnectWithoutOwnerInput | Prisma.GoalCreateOrConnectWithoutOwnerInput[];
    upsert?: Prisma.GoalUpsertWithWhereUniqueWithoutOwnerInput | Prisma.GoalUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: Prisma.GoalCreateManyOwnerInputEnvelope;
    set?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
    disconnect?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
    delete?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
    connect?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
    update?: Prisma.GoalUpdateWithWhereUniqueWithoutOwnerInput | Prisma.GoalUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?: Prisma.GoalUpdateManyWithWhereWithoutOwnerInput | Prisma.GoalUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: Prisma.GoalScalarWhereInput | Prisma.GoalScalarWhereInput[];
};
export type GoalUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: Prisma.XOR<Prisma.GoalCreateWithoutOwnerInput, Prisma.GoalUncheckedCreateWithoutOwnerInput> | Prisma.GoalCreateWithoutOwnerInput[] | Prisma.GoalUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.GoalCreateOrConnectWithoutOwnerInput | Prisma.GoalCreateOrConnectWithoutOwnerInput[];
    upsert?: Prisma.GoalUpsertWithWhereUniqueWithoutOwnerInput | Prisma.GoalUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: Prisma.GoalCreateManyOwnerInputEnvelope;
    set?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
    disconnect?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
    delete?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
    connect?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
    update?: Prisma.GoalUpdateWithWhereUniqueWithoutOwnerInput | Prisma.GoalUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?: Prisma.GoalUpdateManyWithWhereWithoutOwnerInput | Prisma.GoalUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: Prisma.GoalScalarWhereInput | Prisma.GoalScalarWhereInput[];
};
export type GoalCreateNestedManyWithoutCycleInput = {
    create?: Prisma.XOR<Prisma.GoalCreateWithoutCycleInput, Prisma.GoalUncheckedCreateWithoutCycleInput> | Prisma.GoalCreateWithoutCycleInput[] | Prisma.GoalUncheckedCreateWithoutCycleInput[];
    connectOrCreate?: Prisma.GoalCreateOrConnectWithoutCycleInput | Prisma.GoalCreateOrConnectWithoutCycleInput[];
    createMany?: Prisma.GoalCreateManyCycleInputEnvelope;
    connect?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
};
export type GoalUncheckedCreateNestedManyWithoutCycleInput = {
    create?: Prisma.XOR<Prisma.GoalCreateWithoutCycleInput, Prisma.GoalUncheckedCreateWithoutCycleInput> | Prisma.GoalCreateWithoutCycleInput[] | Prisma.GoalUncheckedCreateWithoutCycleInput[];
    connectOrCreate?: Prisma.GoalCreateOrConnectWithoutCycleInput | Prisma.GoalCreateOrConnectWithoutCycleInput[];
    createMany?: Prisma.GoalCreateManyCycleInputEnvelope;
    connect?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
};
export type GoalUpdateManyWithoutCycleNestedInput = {
    create?: Prisma.XOR<Prisma.GoalCreateWithoutCycleInput, Prisma.GoalUncheckedCreateWithoutCycleInput> | Prisma.GoalCreateWithoutCycleInput[] | Prisma.GoalUncheckedCreateWithoutCycleInput[];
    connectOrCreate?: Prisma.GoalCreateOrConnectWithoutCycleInput | Prisma.GoalCreateOrConnectWithoutCycleInput[];
    upsert?: Prisma.GoalUpsertWithWhereUniqueWithoutCycleInput | Prisma.GoalUpsertWithWhereUniqueWithoutCycleInput[];
    createMany?: Prisma.GoalCreateManyCycleInputEnvelope;
    set?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
    disconnect?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
    delete?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
    connect?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
    update?: Prisma.GoalUpdateWithWhereUniqueWithoutCycleInput | Prisma.GoalUpdateWithWhereUniqueWithoutCycleInput[];
    updateMany?: Prisma.GoalUpdateManyWithWhereWithoutCycleInput | Prisma.GoalUpdateManyWithWhereWithoutCycleInput[];
    deleteMany?: Prisma.GoalScalarWhereInput | Prisma.GoalScalarWhereInput[];
};
export type GoalUncheckedUpdateManyWithoutCycleNestedInput = {
    create?: Prisma.XOR<Prisma.GoalCreateWithoutCycleInput, Prisma.GoalUncheckedCreateWithoutCycleInput> | Prisma.GoalCreateWithoutCycleInput[] | Prisma.GoalUncheckedCreateWithoutCycleInput[];
    connectOrCreate?: Prisma.GoalCreateOrConnectWithoutCycleInput | Prisma.GoalCreateOrConnectWithoutCycleInput[];
    upsert?: Prisma.GoalUpsertWithWhereUniqueWithoutCycleInput | Prisma.GoalUpsertWithWhereUniqueWithoutCycleInput[];
    createMany?: Prisma.GoalCreateManyCycleInputEnvelope;
    set?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
    disconnect?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
    delete?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
    connect?: Prisma.GoalWhereUniqueInput | Prisma.GoalWhereUniqueInput[];
    update?: Prisma.GoalUpdateWithWhereUniqueWithoutCycleInput | Prisma.GoalUpdateWithWhereUniqueWithoutCycleInput[];
    updateMany?: Prisma.GoalUpdateManyWithWhereWithoutCycleInput | Prisma.GoalUpdateManyWithWhereWithoutCycleInput[];
    deleteMany?: Prisma.GoalScalarWhereInput | Prisma.GoalScalarWhereInput[];
};
export type EnumGoalStatusFieldUpdateOperationsInput = {
    set?: $Enums.GoalStatus;
};
export type GoalCreateNestedOneWithoutCheckinsInput = {
    create?: Prisma.XOR<Prisma.GoalCreateWithoutCheckinsInput, Prisma.GoalUncheckedCreateWithoutCheckinsInput>;
    connectOrCreate?: Prisma.GoalCreateOrConnectWithoutCheckinsInput;
    connect?: Prisma.GoalWhereUniqueInput;
};
export type GoalUpdateOneRequiredWithoutCheckinsNestedInput = {
    create?: Prisma.XOR<Prisma.GoalCreateWithoutCheckinsInput, Prisma.GoalUncheckedCreateWithoutCheckinsInput>;
    connectOrCreate?: Prisma.GoalCreateOrConnectWithoutCheckinsInput;
    upsert?: Prisma.GoalUpsertWithoutCheckinsInput;
    connect?: Prisma.GoalWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GoalUpdateToOneWithWhereWithoutCheckinsInput, Prisma.GoalUpdateWithoutCheckinsInput>, Prisma.GoalUncheckedUpdateWithoutCheckinsInput>;
};
export type GoalCreateWithoutOrganizationInput = {
    id?: string;
    title: string;
    description?: string | null;
    metric?: string | null;
    target?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currentProgress?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Date | string | null;
    status?: $Enums.GoalStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    owner?: Prisma.EmployeeCreateNestedOneWithoutGoalsInput;
    cycle?: Prisma.PerformanceCycleCreateNestedOneWithoutGoalsInput;
    checkins?: Prisma.GoalCheckinCreateNestedManyWithoutGoalInput;
};
export type GoalUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    ownerId?: string | null;
    cycleId?: string | null;
    title: string;
    description?: string | null;
    metric?: string | null;
    target?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currentProgress?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Date | string | null;
    status?: $Enums.GoalStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    checkins?: Prisma.GoalCheckinUncheckedCreateNestedManyWithoutGoalInput;
};
export type GoalCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.GoalWhereUniqueInput;
    create: Prisma.XOR<Prisma.GoalCreateWithoutOrganizationInput, Prisma.GoalUncheckedCreateWithoutOrganizationInput>;
};
export type GoalCreateManyOrganizationInputEnvelope = {
    data: Prisma.GoalCreateManyOrganizationInput | Prisma.GoalCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type GoalUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.GoalWhereUniqueInput;
    update: Prisma.XOR<Prisma.GoalUpdateWithoutOrganizationInput, Prisma.GoalUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.GoalCreateWithoutOrganizationInput, Prisma.GoalUncheckedCreateWithoutOrganizationInput>;
};
export type GoalUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.GoalWhereUniqueInput;
    data: Prisma.XOR<Prisma.GoalUpdateWithoutOrganizationInput, Prisma.GoalUncheckedUpdateWithoutOrganizationInput>;
};
export type GoalUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.GoalScalarWhereInput;
    data: Prisma.XOR<Prisma.GoalUpdateManyMutationInput, Prisma.GoalUncheckedUpdateManyWithoutOrganizationInput>;
};
export type GoalScalarWhereInput = {
    AND?: Prisma.GoalScalarWhereInput | Prisma.GoalScalarWhereInput[];
    OR?: Prisma.GoalScalarWhereInput[];
    NOT?: Prisma.GoalScalarWhereInput | Prisma.GoalScalarWhereInput[];
    id?: Prisma.UuidFilter<"Goal"> | string;
    organizationId?: Prisma.UuidFilter<"Goal"> | string;
    ownerId?: Prisma.UuidNullableFilter<"Goal"> | string | null;
    cycleId?: Prisma.UuidNullableFilter<"Goal"> | string | null;
    title?: Prisma.StringFilter<"Goal"> | string;
    description?: Prisma.StringNullableFilter<"Goal"> | string | null;
    metric?: Prisma.StringNullableFilter<"Goal"> | string | null;
    target?: Prisma.DecimalNullableFilter<"Goal"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currentProgress?: Prisma.DecimalFilter<"Goal"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Prisma.DateTimeNullableFilter<"Goal"> | Date | string | null;
    status?: Prisma.EnumGoalStatusFilter<"Goal"> | $Enums.GoalStatus;
    createdAt?: Prisma.DateTimeFilter<"Goal"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Goal"> | Date | string;
};
export type GoalCreateWithoutOwnerInput = {
    id?: string;
    title: string;
    description?: string | null;
    metric?: string | null;
    target?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currentProgress?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Date | string | null;
    status?: $Enums.GoalStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutGoalsInput;
    cycle?: Prisma.PerformanceCycleCreateNestedOneWithoutGoalsInput;
    checkins?: Prisma.GoalCheckinCreateNestedManyWithoutGoalInput;
};
export type GoalUncheckedCreateWithoutOwnerInput = {
    id?: string;
    organizationId: string;
    cycleId?: string | null;
    title: string;
    description?: string | null;
    metric?: string | null;
    target?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currentProgress?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Date | string | null;
    status?: $Enums.GoalStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    checkins?: Prisma.GoalCheckinUncheckedCreateNestedManyWithoutGoalInput;
};
export type GoalCreateOrConnectWithoutOwnerInput = {
    where: Prisma.GoalWhereUniqueInput;
    create: Prisma.XOR<Prisma.GoalCreateWithoutOwnerInput, Prisma.GoalUncheckedCreateWithoutOwnerInput>;
};
export type GoalCreateManyOwnerInputEnvelope = {
    data: Prisma.GoalCreateManyOwnerInput | Prisma.GoalCreateManyOwnerInput[];
    skipDuplicates?: boolean;
};
export type GoalUpsertWithWhereUniqueWithoutOwnerInput = {
    where: Prisma.GoalWhereUniqueInput;
    update: Prisma.XOR<Prisma.GoalUpdateWithoutOwnerInput, Prisma.GoalUncheckedUpdateWithoutOwnerInput>;
    create: Prisma.XOR<Prisma.GoalCreateWithoutOwnerInput, Prisma.GoalUncheckedCreateWithoutOwnerInput>;
};
export type GoalUpdateWithWhereUniqueWithoutOwnerInput = {
    where: Prisma.GoalWhereUniqueInput;
    data: Prisma.XOR<Prisma.GoalUpdateWithoutOwnerInput, Prisma.GoalUncheckedUpdateWithoutOwnerInput>;
};
export type GoalUpdateManyWithWhereWithoutOwnerInput = {
    where: Prisma.GoalScalarWhereInput;
    data: Prisma.XOR<Prisma.GoalUpdateManyMutationInput, Prisma.GoalUncheckedUpdateManyWithoutOwnerInput>;
};
export type GoalCreateWithoutCycleInput = {
    id?: string;
    title: string;
    description?: string | null;
    metric?: string | null;
    target?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currentProgress?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Date | string | null;
    status?: $Enums.GoalStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutGoalsInput;
    owner?: Prisma.EmployeeCreateNestedOneWithoutGoalsInput;
    checkins?: Prisma.GoalCheckinCreateNestedManyWithoutGoalInput;
};
export type GoalUncheckedCreateWithoutCycleInput = {
    id?: string;
    organizationId: string;
    ownerId?: string | null;
    title: string;
    description?: string | null;
    metric?: string | null;
    target?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currentProgress?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Date | string | null;
    status?: $Enums.GoalStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    checkins?: Prisma.GoalCheckinUncheckedCreateNestedManyWithoutGoalInput;
};
export type GoalCreateOrConnectWithoutCycleInput = {
    where: Prisma.GoalWhereUniqueInput;
    create: Prisma.XOR<Prisma.GoalCreateWithoutCycleInput, Prisma.GoalUncheckedCreateWithoutCycleInput>;
};
export type GoalCreateManyCycleInputEnvelope = {
    data: Prisma.GoalCreateManyCycleInput | Prisma.GoalCreateManyCycleInput[];
    skipDuplicates?: boolean;
};
export type GoalUpsertWithWhereUniqueWithoutCycleInput = {
    where: Prisma.GoalWhereUniqueInput;
    update: Prisma.XOR<Prisma.GoalUpdateWithoutCycleInput, Prisma.GoalUncheckedUpdateWithoutCycleInput>;
    create: Prisma.XOR<Prisma.GoalCreateWithoutCycleInput, Prisma.GoalUncheckedCreateWithoutCycleInput>;
};
export type GoalUpdateWithWhereUniqueWithoutCycleInput = {
    where: Prisma.GoalWhereUniqueInput;
    data: Prisma.XOR<Prisma.GoalUpdateWithoutCycleInput, Prisma.GoalUncheckedUpdateWithoutCycleInput>;
};
export type GoalUpdateManyWithWhereWithoutCycleInput = {
    where: Prisma.GoalScalarWhereInput;
    data: Prisma.XOR<Prisma.GoalUpdateManyMutationInput, Prisma.GoalUncheckedUpdateManyWithoutCycleInput>;
};
export type GoalCreateWithoutCheckinsInput = {
    id?: string;
    title: string;
    description?: string | null;
    metric?: string | null;
    target?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currentProgress?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Date | string | null;
    status?: $Enums.GoalStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutGoalsInput;
    owner?: Prisma.EmployeeCreateNestedOneWithoutGoalsInput;
    cycle?: Prisma.PerformanceCycleCreateNestedOneWithoutGoalsInput;
};
export type GoalUncheckedCreateWithoutCheckinsInput = {
    id?: string;
    organizationId: string;
    ownerId?: string | null;
    cycleId?: string | null;
    title: string;
    description?: string | null;
    metric?: string | null;
    target?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currentProgress?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Date | string | null;
    status?: $Enums.GoalStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GoalCreateOrConnectWithoutCheckinsInput = {
    where: Prisma.GoalWhereUniqueInput;
    create: Prisma.XOR<Prisma.GoalCreateWithoutCheckinsInput, Prisma.GoalUncheckedCreateWithoutCheckinsInput>;
};
export type GoalUpsertWithoutCheckinsInput = {
    update: Prisma.XOR<Prisma.GoalUpdateWithoutCheckinsInput, Prisma.GoalUncheckedUpdateWithoutCheckinsInput>;
    create: Prisma.XOR<Prisma.GoalCreateWithoutCheckinsInput, Prisma.GoalUncheckedCreateWithoutCheckinsInput>;
    where?: Prisma.GoalWhereInput;
};
export type GoalUpdateToOneWithWhereWithoutCheckinsInput = {
    where?: Prisma.GoalWhereInput;
    data: Prisma.XOR<Prisma.GoalUpdateWithoutCheckinsInput, Prisma.GoalUncheckedUpdateWithoutCheckinsInput>;
};
export type GoalUpdateWithoutCheckinsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metric?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    target?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currentProgress?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutGoalsNestedInput;
    owner?: Prisma.EmployeeUpdateOneWithoutGoalsNestedInput;
    cycle?: Prisma.PerformanceCycleUpdateOneWithoutGoalsNestedInput;
};
export type GoalUncheckedUpdateWithoutCheckinsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cycleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metric?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    target?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currentProgress?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GoalCreateManyOrganizationInput = {
    id?: string;
    ownerId?: string | null;
    cycleId?: string | null;
    title: string;
    description?: string | null;
    metric?: string | null;
    target?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currentProgress?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Date | string | null;
    status?: $Enums.GoalStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GoalUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metric?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    target?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currentProgress?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: Prisma.EmployeeUpdateOneWithoutGoalsNestedInput;
    cycle?: Prisma.PerformanceCycleUpdateOneWithoutGoalsNestedInput;
    checkins?: Prisma.GoalCheckinUpdateManyWithoutGoalNestedInput;
};
export type GoalUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cycleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metric?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    target?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currentProgress?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkins?: Prisma.GoalCheckinUncheckedUpdateManyWithoutGoalNestedInput;
};
export type GoalUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cycleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metric?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    target?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currentProgress?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GoalCreateManyOwnerInput = {
    id?: string;
    organizationId: string;
    cycleId?: string | null;
    title: string;
    description?: string | null;
    metric?: string | null;
    target?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currentProgress?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Date | string | null;
    status?: $Enums.GoalStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GoalUpdateWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metric?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    target?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currentProgress?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutGoalsNestedInput;
    cycle?: Prisma.PerformanceCycleUpdateOneWithoutGoalsNestedInput;
    checkins?: Prisma.GoalCheckinUpdateManyWithoutGoalNestedInput;
};
export type GoalUncheckedUpdateWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    cycleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metric?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    target?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currentProgress?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkins?: Prisma.GoalCheckinUncheckedUpdateManyWithoutGoalNestedInput;
};
export type GoalUncheckedUpdateManyWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    cycleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metric?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    target?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currentProgress?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GoalCreateManyCycleInput = {
    id?: string;
    organizationId: string;
    ownerId?: string | null;
    title: string;
    description?: string | null;
    metric?: string | null;
    target?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currentProgress?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Date | string | null;
    status?: $Enums.GoalStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GoalUpdateWithoutCycleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metric?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    target?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currentProgress?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutGoalsNestedInput;
    owner?: Prisma.EmployeeUpdateOneWithoutGoalsNestedInput;
    checkins?: Prisma.GoalCheckinUpdateManyWithoutGoalNestedInput;
};
export type GoalUncheckedUpdateWithoutCycleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metric?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    target?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currentProgress?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkins?: Prisma.GoalCheckinUncheckedUpdateManyWithoutGoalNestedInput;
};
export type GoalUncheckedUpdateManyWithoutCycleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metric?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    target?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currentProgress?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GoalCountOutputType = {
    checkins: number;
};
export type GoalCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    checkins?: boolean | GoalCountOutputTypeCountCheckinsArgs;
};
export type GoalCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoalCountOutputTypeSelect<ExtArgs> | null;
};
export type GoalCountOutputTypeCountCheckinsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GoalCheckinWhereInput;
};
export type GoalSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    ownerId?: boolean;
    cycleId?: boolean;
    title?: boolean;
    description?: boolean;
    metric?: boolean;
    target?: boolean;
    currentProgress?: boolean;
    dueDate?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    owner?: boolean | Prisma.Goal$ownerArgs<ExtArgs>;
    cycle?: boolean | Prisma.Goal$cycleArgs<ExtArgs>;
    checkins?: boolean | Prisma.Goal$checkinsArgs<ExtArgs>;
    _count?: boolean | Prisma.GoalCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["goal"]>;
export type GoalSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    ownerId?: boolean;
    cycleId?: boolean;
    title?: boolean;
    description?: boolean;
    metric?: boolean;
    target?: boolean;
    currentProgress?: boolean;
    dueDate?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    owner?: boolean | Prisma.Goal$ownerArgs<ExtArgs>;
    cycle?: boolean | Prisma.Goal$cycleArgs<ExtArgs>;
}, ExtArgs["result"]["goal"]>;
export type GoalSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    ownerId?: boolean;
    cycleId?: boolean;
    title?: boolean;
    description?: boolean;
    metric?: boolean;
    target?: boolean;
    currentProgress?: boolean;
    dueDate?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    owner?: boolean | Prisma.Goal$ownerArgs<ExtArgs>;
    cycle?: boolean | Prisma.Goal$cycleArgs<ExtArgs>;
}, ExtArgs["result"]["goal"]>;
export type GoalSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    ownerId?: boolean;
    cycleId?: boolean;
    title?: boolean;
    description?: boolean;
    metric?: boolean;
    target?: boolean;
    currentProgress?: boolean;
    dueDate?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type GoalOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "ownerId" | "cycleId" | "title" | "description" | "metric" | "target" | "currentProgress" | "dueDate" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["goal"]>;
export type GoalInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    owner?: boolean | Prisma.Goal$ownerArgs<ExtArgs>;
    cycle?: boolean | Prisma.Goal$cycleArgs<ExtArgs>;
    checkins?: boolean | Prisma.Goal$checkinsArgs<ExtArgs>;
    _count?: boolean | Prisma.GoalCountOutputTypeDefaultArgs<ExtArgs>;
};
export type GoalIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    owner?: boolean | Prisma.Goal$ownerArgs<ExtArgs>;
    cycle?: boolean | Prisma.Goal$cycleArgs<ExtArgs>;
};
export type GoalIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    owner?: boolean | Prisma.Goal$ownerArgs<ExtArgs>;
    cycle?: boolean | Prisma.Goal$cycleArgs<ExtArgs>;
};
export type $GoalPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Goal";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        owner: Prisma.$EmployeePayload<ExtArgs> | null;
        cycle: Prisma.$PerformanceCyclePayload<ExtArgs> | null;
        checkins: Prisma.$GoalCheckinPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        ownerId: string | null;
        cycleId: string | null;
        title: string;
        description: string | null;
        metric: string | null;
        target: runtime.Decimal | null;
        currentProgress: runtime.Decimal;
        dueDate: Date | null;
        status: $Enums.GoalStatus;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["goal"]>;
    composites: {};
};
export type GoalGetPayload<S extends boolean | null | undefined | GoalDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GoalPayload, S>;
export type GoalCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GoalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GoalCountAggregateInputType | true;
};
export interface GoalDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Goal'];
        meta: {
            name: 'Goal';
        };
    };
    findUnique<T extends GoalFindUniqueArgs>(args: Prisma.SelectSubset<T, GoalFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GoalClient<runtime.Types.Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends GoalFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GoalFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GoalClient<runtime.Types.Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends GoalFindFirstArgs>(args?: Prisma.SelectSubset<T, GoalFindFirstArgs<ExtArgs>>): Prisma.Prisma__GoalClient<runtime.Types.Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends GoalFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GoalFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GoalClient<runtime.Types.Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends GoalFindManyArgs>(args?: Prisma.SelectSubset<T, GoalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends GoalCreateArgs>(args: Prisma.SelectSubset<T, GoalCreateArgs<ExtArgs>>): Prisma.Prisma__GoalClient<runtime.Types.Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends GoalCreateManyArgs>(args?: Prisma.SelectSubset<T, GoalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends GoalCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GoalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends GoalDeleteArgs>(args: Prisma.SelectSubset<T, GoalDeleteArgs<ExtArgs>>): Prisma.Prisma__GoalClient<runtime.Types.Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends GoalUpdateArgs>(args: Prisma.SelectSubset<T, GoalUpdateArgs<ExtArgs>>): Prisma.Prisma__GoalClient<runtime.Types.Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends GoalDeleteManyArgs>(args?: Prisma.SelectSubset<T, GoalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends GoalUpdateManyArgs>(args: Prisma.SelectSubset<T, GoalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends GoalUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GoalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends GoalUpsertArgs>(args: Prisma.SelectSubset<T, GoalUpsertArgs<ExtArgs>>): Prisma.Prisma__GoalClient<runtime.Types.Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends GoalCountArgs>(args?: Prisma.Subset<T, GoalCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GoalCountAggregateOutputType> : number>;
    aggregate<T extends GoalAggregateArgs>(args: Prisma.Subset<T, GoalAggregateArgs>): Prisma.PrismaPromise<GetGoalAggregateType<T>>;
    groupBy<T extends GoalGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GoalGroupByArgs['orderBy'];
    } : {
        orderBy?: GoalGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: GoalFieldRefs;
}
export interface Prisma__GoalClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    owner<T extends Prisma.Goal$ownerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Goal$ownerArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    cycle<T extends Prisma.Goal$cycleArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Goal$cycleArgs<ExtArgs>>): Prisma.Prisma__PerformanceCycleClient<runtime.Types.Result.GetResult<Prisma.$PerformanceCyclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    checkins<T extends Prisma.Goal$checkinsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Goal$checkinsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GoalCheckinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface GoalFieldRefs {
    readonly id: Prisma.FieldRef<"Goal", 'String'>;
    readonly organizationId: Prisma.FieldRef<"Goal", 'String'>;
    readonly ownerId: Prisma.FieldRef<"Goal", 'String'>;
    readonly cycleId: Prisma.FieldRef<"Goal", 'String'>;
    readonly title: Prisma.FieldRef<"Goal", 'String'>;
    readonly description: Prisma.FieldRef<"Goal", 'String'>;
    readonly metric: Prisma.FieldRef<"Goal", 'String'>;
    readonly target: Prisma.FieldRef<"Goal", 'Decimal'>;
    readonly currentProgress: Prisma.FieldRef<"Goal", 'Decimal'>;
    readonly dueDate: Prisma.FieldRef<"Goal", 'DateTime'>;
    readonly status: Prisma.FieldRef<"Goal", 'GoalStatus'>;
    readonly createdAt: Prisma.FieldRef<"Goal", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Goal", 'DateTime'>;
}
export type GoalFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoalSelect<ExtArgs> | null;
    omit?: Prisma.GoalOmit<ExtArgs> | null;
    include?: Prisma.GoalInclude<ExtArgs> | null;
    where: Prisma.GoalWhereUniqueInput;
};
export type GoalFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoalSelect<ExtArgs> | null;
    omit?: Prisma.GoalOmit<ExtArgs> | null;
    include?: Prisma.GoalInclude<ExtArgs> | null;
    where: Prisma.GoalWhereUniqueInput;
};
export type GoalFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoalSelect<ExtArgs> | null;
    omit?: Prisma.GoalOmit<ExtArgs> | null;
    include?: Prisma.GoalInclude<ExtArgs> | null;
    where?: Prisma.GoalWhereInput;
    orderBy?: Prisma.GoalOrderByWithRelationInput | Prisma.GoalOrderByWithRelationInput[];
    cursor?: Prisma.GoalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GoalScalarFieldEnum | Prisma.GoalScalarFieldEnum[];
};
export type GoalFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoalSelect<ExtArgs> | null;
    omit?: Prisma.GoalOmit<ExtArgs> | null;
    include?: Prisma.GoalInclude<ExtArgs> | null;
    where?: Prisma.GoalWhereInput;
    orderBy?: Prisma.GoalOrderByWithRelationInput | Prisma.GoalOrderByWithRelationInput[];
    cursor?: Prisma.GoalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GoalScalarFieldEnum | Prisma.GoalScalarFieldEnum[];
};
export type GoalFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoalSelect<ExtArgs> | null;
    omit?: Prisma.GoalOmit<ExtArgs> | null;
    include?: Prisma.GoalInclude<ExtArgs> | null;
    where?: Prisma.GoalWhereInput;
    orderBy?: Prisma.GoalOrderByWithRelationInput | Prisma.GoalOrderByWithRelationInput[];
    cursor?: Prisma.GoalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GoalScalarFieldEnum | Prisma.GoalScalarFieldEnum[];
};
export type GoalCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoalSelect<ExtArgs> | null;
    omit?: Prisma.GoalOmit<ExtArgs> | null;
    include?: Prisma.GoalInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GoalCreateInput, Prisma.GoalUncheckedCreateInput>;
};
export type GoalCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.GoalCreateManyInput | Prisma.GoalCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GoalCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoalSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GoalOmit<ExtArgs> | null;
    data: Prisma.GoalCreateManyInput | Prisma.GoalCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.GoalIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type GoalUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoalSelect<ExtArgs> | null;
    omit?: Prisma.GoalOmit<ExtArgs> | null;
    include?: Prisma.GoalInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GoalUpdateInput, Prisma.GoalUncheckedUpdateInput>;
    where: Prisma.GoalWhereUniqueInput;
};
export type GoalUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.GoalUpdateManyMutationInput, Prisma.GoalUncheckedUpdateManyInput>;
    where?: Prisma.GoalWhereInput;
    limit?: number;
};
export type GoalUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoalSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GoalOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GoalUpdateManyMutationInput, Prisma.GoalUncheckedUpdateManyInput>;
    where?: Prisma.GoalWhereInput;
    limit?: number;
    include?: Prisma.GoalIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type GoalUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoalSelect<ExtArgs> | null;
    omit?: Prisma.GoalOmit<ExtArgs> | null;
    include?: Prisma.GoalInclude<ExtArgs> | null;
    where: Prisma.GoalWhereUniqueInput;
    create: Prisma.XOR<Prisma.GoalCreateInput, Prisma.GoalUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.GoalUpdateInput, Prisma.GoalUncheckedUpdateInput>;
};
export type GoalDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoalSelect<ExtArgs> | null;
    omit?: Prisma.GoalOmit<ExtArgs> | null;
    include?: Prisma.GoalInclude<ExtArgs> | null;
    where: Prisma.GoalWhereUniqueInput;
};
export type GoalDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GoalWhereInput;
    limit?: number;
};
export type Goal$ownerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where?: Prisma.EmployeeWhereInput;
};
export type Goal$cycleArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceCycleSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceCycleOmit<ExtArgs> | null;
    include?: Prisma.PerformanceCycleInclude<ExtArgs> | null;
    where?: Prisma.PerformanceCycleWhereInput;
};
export type Goal$checkinsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoalCheckinSelect<ExtArgs> | null;
    omit?: Prisma.GoalCheckinOmit<ExtArgs> | null;
    include?: Prisma.GoalCheckinInclude<ExtArgs> | null;
    where?: Prisma.GoalCheckinWhereInput;
    orderBy?: Prisma.GoalCheckinOrderByWithRelationInput | Prisma.GoalCheckinOrderByWithRelationInput[];
    cursor?: Prisma.GoalCheckinWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GoalCheckinScalarFieldEnum | Prisma.GoalCheckinScalarFieldEnum[];
};
export type GoalDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoalSelect<ExtArgs> | null;
    omit?: Prisma.GoalOmit<ExtArgs> | null;
    include?: Prisma.GoalInclude<ExtArgs> | null;
};
