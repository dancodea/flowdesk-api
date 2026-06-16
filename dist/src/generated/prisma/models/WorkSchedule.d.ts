import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type WorkScheduleModel = runtime.Types.Result.DefaultSelection<Prisma.$WorkSchedulePayload>;
export type AggregateWorkSchedule = {
    _count: WorkScheduleCountAggregateOutputType | null;
    _avg: WorkScheduleAvgAggregateOutputType | null;
    _sum: WorkScheduleSumAggregateOutputType | null;
    _min: WorkScheduleMinAggregateOutputType | null;
    _max: WorkScheduleMaxAggregateOutputType | null;
};
export type WorkScheduleAvgAggregateOutputType = {
    workDays: number | null;
    dailyHours: runtime.Decimal | null;
    overtimeThresholdDaily: runtime.Decimal | null;
    overtimeThresholdWeekly: runtime.Decimal | null;
};
export type WorkScheduleSumAggregateOutputType = {
    workDays: number[];
    dailyHours: runtime.Decimal | null;
    overtimeThresholdDaily: runtime.Decimal | null;
    overtimeThresholdWeekly: runtime.Decimal | null;
};
export type WorkScheduleMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    name: string | null;
    dailyHours: runtime.Decimal | null;
    overtimeThresholdDaily: runtime.Decimal | null;
    overtimeThresholdWeekly: runtime.Decimal | null;
    isDefault: boolean | null;
    createdAt: Date | null;
};
export type WorkScheduleMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    name: string | null;
    dailyHours: runtime.Decimal | null;
    overtimeThresholdDaily: runtime.Decimal | null;
    overtimeThresholdWeekly: runtime.Decimal | null;
    isDefault: boolean | null;
    createdAt: Date | null;
};
export type WorkScheduleCountAggregateOutputType = {
    id: number;
    organizationId: number;
    name: number;
    workDays: number;
    dailyHours: number;
    overtimeThresholdDaily: number;
    overtimeThresholdWeekly: number;
    isDefault: number;
    createdAt: number;
    _all: number;
};
export type WorkScheduleAvgAggregateInputType = {
    workDays?: true;
    dailyHours?: true;
    overtimeThresholdDaily?: true;
    overtimeThresholdWeekly?: true;
};
export type WorkScheduleSumAggregateInputType = {
    workDays?: true;
    dailyHours?: true;
    overtimeThresholdDaily?: true;
    overtimeThresholdWeekly?: true;
};
export type WorkScheduleMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    dailyHours?: true;
    overtimeThresholdDaily?: true;
    overtimeThresholdWeekly?: true;
    isDefault?: true;
    createdAt?: true;
};
export type WorkScheduleMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    dailyHours?: true;
    overtimeThresholdDaily?: true;
    overtimeThresholdWeekly?: true;
    isDefault?: true;
    createdAt?: true;
};
export type WorkScheduleCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    workDays?: true;
    dailyHours?: true;
    overtimeThresholdDaily?: true;
    overtimeThresholdWeekly?: true;
    isDefault?: true;
    createdAt?: true;
    _all?: true;
};
export type WorkScheduleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WorkScheduleWhereInput;
    orderBy?: Prisma.WorkScheduleOrderByWithRelationInput | Prisma.WorkScheduleOrderByWithRelationInput[];
    cursor?: Prisma.WorkScheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WorkScheduleCountAggregateInputType;
    _avg?: WorkScheduleAvgAggregateInputType;
    _sum?: WorkScheduleSumAggregateInputType;
    _min?: WorkScheduleMinAggregateInputType;
    _max?: WorkScheduleMaxAggregateInputType;
};
export type GetWorkScheduleAggregateType<T extends WorkScheduleAggregateArgs> = {
    [P in keyof T & keyof AggregateWorkSchedule]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWorkSchedule[P]> : Prisma.GetScalarType<T[P], AggregateWorkSchedule[P]>;
};
export type WorkScheduleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WorkScheduleWhereInput;
    orderBy?: Prisma.WorkScheduleOrderByWithAggregationInput | Prisma.WorkScheduleOrderByWithAggregationInput[];
    by: Prisma.WorkScheduleScalarFieldEnum[] | Prisma.WorkScheduleScalarFieldEnum;
    having?: Prisma.WorkScheduleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WorkScheduleCountAggregateInputType | true;
    _avg?: WorkScheduleAvgAggregateInputType;
    _sum?: WorkScheduleSumAggregateInputType;
    _min?: WorkScheduleMinAggregateInputType;
    _max?: WorkScheduleMaxAggregateInputType;
};
export type WorkScheduleGroupByOutputType = {
    id: string;
    organizationId: string;
    name: string;
    workDays: number[];
    dailyHours: runtime.Decimal;
    overtimeThresholdDaily: runtime.Decimal | null;
    overtimeThresholdWeekly: runtime.Decimal | null;
    isDefault: boolean;
    createdAt: Date;
    _count: WorkScheduleCountAggregateOutputType | null;
    _avg: WorkScheduleAvgAggregateOutputType | null;
    _sum: WorkScheduleSumAggregateOutputType | null;
    _min: WorkScheduleMinAggregateOutputType | null;
    _max: WorkScheduleMaxAggregateOutputType | null;
};
export type GetWorkScheduleGroupByPayload<T extends WorkScheduleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WorkScheduleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WorkScheduleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WorkScheduleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WorkScheduleGroupByOutputType[P]>;
}>>;
export type WorkScheduleWhereInput = {
    AND?: Prisma.WorkScheduleWhereInput | Prisma.WorkScheduleWhereInput[];
    OR?: Prisma.WorkScheduleWhereInput[];
    NOT?: Prisma.WorkScheduleWhereInput | Prisma.WorkScheduleWhereInput[];
    id?: Prisma.UuidFilter<"WorkSchedule"> | string;
    organizationId?: Prisma.UuidFilter<"WorkSchedule"> | string;
    name?: Prisma.StringFilter<"WorkSchedule"> | string;
    workDays?: Prisma.IntNullableListFilter<"WorkSchedule">;
    dailyHours?: Prisma.DecimalFilter<"WorkSchedule"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    overtimeThresholdDaily?: Prisma.DecimalNullableFilter<"WorkSchedule"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeThresholdWeekly?: Prisma.DecimalNullableFilter<"WorkSchedule"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isDefault?: Prisma.BoolFilter<"WorkSchedule"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"WorkSchedule"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    employees?: Prisma.EmployeeListRelationFilter;
};
export type WorkScheduleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    workDays?: Prisma.SortOrder;
    dailyHours?: Prisma.SortOrder;
    overtimeThresholdDaily?: Prisma.SortOrderInput | Prisma.SortOrder;
    overtimeThresholdWeekly?: Prisma.SortOrderInput | Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    employees?: Prisma.EmployeeOrderByRelationAggregateInput;
};
export type WorkScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.WorkScheduleWhereInput | Prisma.WorkScheduleWhereInput[];
    OR?: Prisma.WorkScheduleWhereInput[];
    NOT?: Prisma.WorkScheduleWhereInput | Prisma.WorkScheduleWhereInput[];
    organizationId?: Prisma.UuidFilter<"WorkSchedule"> | string;
    name?: Prisma.StringFilter<"WorkSchedule"> | string;
    workDays?: Prisma.IntNullableListFilter<"WorkSchedule">;
    dailyHours?: Prisma.DecimalFilter<"WorkSchedule"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    overtimeThresholdDaily?: Prisma.DecimalNullableFilter<"WorkSchedule"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeThresholdWeekly?: Prisma.DecimalNullableFilter<"WorkSchedule"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isDefault?: Prisma.BoolFilter<"WorkSchedule"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"WorkSchedule"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    employees?: Prisma.EmployeeListRelationFilter;
}, "id">;
export type WorkScheduleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    workDays?: Prisma.SortOrder;
    dailyHours?: Prisma.SortOrder;
    overtimeThresholdDaily?: Prisma.SortOrderInput | Prisma.SortOrder;
    overtimeThresholdWeekly?: Prisma.SortOrderInput | Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.WorkScheduleCountOrderByAggregateInput;
    _avg?: Prisma.WorkScheduleAvgOrderByAggregateInput;
    _max?: Prisma.WorkScheduleMaxOrderByAggregateInput;
    _min?: Prisma.WorkScheduleMinOrderByAggregateInput;
    _sum?: Prisma.WorkScheduleSumOrderByAggregateInput;
};
export type WorkScheduleScalarWhereWithAggregatesInput = {
    AND?: Prisma.WorkScheduleScalarWhereWithAggregatesInput | Prisma.WorkScheduleScalarWhereWithAggregatesInput[];
    OR?: Prisma.WorkScheduleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WorkScheduleScalarWhereWithAggregatesInput | Prisma.WorkScheduleScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"WorkSchedule"> | string;
    organizationId?: Prisma.UuidWithAggregatesFilter<"WorkSchedule"> | string;
    name?: Prisma.StringWithAggregatesFilter<"WorkSchedule"> | string;
    workDays?: Prisma.IntNullableListFilter<"WorkSchedule">;
    dailyHours?: Prisma.DecimalWithAggregatesFilter<"WorkSchedule"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    overtimeThresholdDaily?: Prisma.DecimalNullableWithAggregatesFilter<"WorkSchedule"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeThresholdWeekly?: Prisma.DecimalNullableWithAggregatesFilter<"WorkSchedule"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isDefault?: Prisma.BoolWithAggregatesFilter<"WorkSchedule"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"WorkSchedule"> | Date | string;
};
export type WorkScheduleCreateInput = {
    id?: string;
    name: string;
    workDays?: Prisma.WorkScheduleCreateworkDaysInput | number[];
    dailyHours?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    overtimeThresholdDaily?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeThresholdWeekly?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isDefault?: boolean;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutWorkSchedulesInput;
    employees?: Prisma.EmployeeCreateNestedManyWithoutWorkScheduleInput;
};
export type WorkScheduleUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    name: string;
    workDays?: Prisma.WorkScheduleCreateworkDaysInput | number[];
    dailyHours?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    overtimeThresholdDaily?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeThresholdWeekly?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isDefault?: boolean;
    createdAt?: Date | string;
    employees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutWorkScheduleInput;
};
export type WorkScheduleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    workDays?: Prisma.WorkScheduleUpdateworkDaysInput | number[];
    dailyHours?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    overtimeThresholdDaily?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeThresholdWeekly?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutWorkSchedulesNestedInput;
    employees?: Prisma.EmployeeUpdateManyWithoutWorkScheduleNestedInput;
};
export type WorkScheduleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    workDays?: Prisma.WorkScheduleUpdateworkDaysInput | number[];
    dailyHours?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    overtimeThresholdDaily?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeThresholdWeekly?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employees?: Prisma.EmployeeUncheckedUpdateManyWithoutWorkScheduleNestedInput;
};
export type WorkScheduleCreateManyInput = {
    id?: string;
    organizationId: string;
    name: string;
    workDays?: Prisma.WorkScheduleCreateworkDaysInput | number[];
    dailyHours?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    overtimeThresholdDaily?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeThresholdWeekly?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isDefault?: boolean;
    createdAt?: Date | string;
};
export type WorkScheduleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    workDays?: Prisma.WorkScheduleUpdateworkDaysInput | number[];
    dailyHours?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    overtimeThresholdDaily?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeThresholdWeekly?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WorkScheduleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    workDays?: Prisma.WorkScheduleUpdateworkDaysInput | number[];
    dailyHours?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    overtimeThresholdDaily?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeThresholdWeekly?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WorkScheduleListRelationFilter = {
    every?: Prisma.WorkScheduleWhereInput;
    some?: Prisma.WorkScheduleWhereInput;
    none?: Prisma.WorkScheduleWhereInput;
};
export type WorkScheduleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    has?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    hasEvery?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    hasSome?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type WorkScheduleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    workDays?: Prisma.SortOrder;
    dailyHours?: Prisma.SortOrder;
    overtimeThresholdDaily?: Prisma.SortOrder;
    overtimeThresholdWeekly?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WorkScheduleAvgOrderByAggregateInput = {
    workDays?: Prisma.SortOrder;
    dailyHours?: Prisma.SortOrder;
    overtimeThresholdDaily?: Prisma.SortOrder;
    overtimeThresholdWeekly?: Prisma.SortOrder;
};
export type WorkScheduleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    dailyHours?: Prisma.SortOrder;
    overtimeThresholdDaily?: Prisma.SortOrder;
    overtimeThresholdWeekly?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WorkScheduleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    dailyHours?: Prisma.SortOrder;
    overtimeThresholdDaily?: Prisma.SortOrder;
    overtimeThresholdWeekly?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WorkScheduleSumOrderByAggregateInput = {
    workDays?: Prisma.SortOrder;
    dailyHours?: Prisma.SortOrder;
    overtimeThresholdDaily?: Prisma.SortOrder;
    overtimeThresholdWeekly?: Prisma.SortOrder;
};
export type WorkScheduleNullableScalarRelationFilter = {
    is?: Prisma.WorkScheduleWhereInput | null;
    isNot?: Prisma.WorkScheduleWhereInput | null;
};
export type WorkScheduleCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.WorkScheduleCreateWithoutOrganizationInput, Prisma.WorkScheduleUncheckedCreateWithoutOrganizationInput> | Prisma.WorkScheduleCreateWithoutOrganizationInput[] | Prisma.WorkScheduleUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.WorkScheduleCreateOrConnectWithoutOrganizationInput | Prisma.WorkScheduleCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.WorkScheduleCreateManyOrganizationInputEnvelope;
    connect?: Prisma.WorkScheduleWhereUniqueInput | Prisma.WorkScheduleWhereUniqueInput[];
};
export type WorkScheduleUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.WorkScheduleCreateWithoutOrganizationInput, Prisma.WorkScheduleUncheckedCreateWithoutOrganizationInput> | Prisma.WorkScheduleCreateWithoutOrganizationInput[] | Prisma.WorkScheduleUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.WorkScheduleCreateOrConnectWithoutOrganizationInput | Prisma.WorkScheduleCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.WorkScheduleCreateManyOrganizationInputEnvelope;
    connect?: Prisma.WorkScheduleWhereUniqueInput | Prisma.WorkScheduleWhereUniqueInput[];
};
export type WorkScheduleUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.WorkScheduleCreateWithoutOrganizationInput, Prisma.WorkScheduleUncheckedCreateWithoutOrganizationInput> | Prisma.WorkScheduleCreateWithoutOrganizationInput[] | Prisma.WorkScheduleUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.WorkScheduleCreateOrConnectWithoutOrganizationInput | Prisma.WorkScheduleCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.WorkScheduleUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.WorkScheduleUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.WorkScheduleCreateManyOrganizationInputEnvelope;
    set?: Prisma.WorkScheduleWhereUniqueInput | Prisma.WorkScheduleWhereUniqueInput[];
    disconnect?: Prisma.WorkScheduleWhereUniqueInput | Prisma.WorkScheduleWhereUniqueInput[];
    delete?: Prisma.WorkScheduleWhereUniqueInput | Prisma.WorkScheduleWhereUniqueInput[];
    connect?: Prisma.WorkScheduleWhereUniqueInput | Prisma.WorkScheduleWhereUniqueInput[];
    update?: Prisma.WorkScheduleUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.WorkScheduleUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.WorkScheduleUpdateManyWithWhereWithoutOrganizationInput | Prisma.WorkScheduleUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.WorkScheduleScalarWhereInput | Prisma.WorkScheduleScalarWhereInput[];
};
export type WorkScheduleUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.WorkScheduleCreateWithoutOrganizationInput, Prisma.WorkScheduleUncheckedCreateWithoutOrganizationInput> | Prisma.WorkScheduleCreateWithoutOrganizationInput[] | Prisma.WorkScheduleUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.WorkScheduleCreateOrConnectWithoutOrganizationInput | Prisma.WorkScheduleCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.WorkScheduleUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.WorkScheduleUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.WorkScheduleCreateManyOrganizationInputEnvelope;
    set?: Prisma.WorkScheduleWhereUniqueInput | Prisma.WorkScheduleWhereUniqueInput[];
    disconnect?: Prisma.WorkScheduleWhereUniqueInput | Prisma.WorkScheduleWhereUniqueInput[];
    delete?: Prisma.WorkScheduleWhereUniqueInput | Prisma.WorkScheduleWhereUniqueInput[];
    connect?: Prisma.WorkScheduleWhereUniqueInput | Prisma.WorkScheduleWhereUniqueInput[];
    update?: Prisma.WorkScheduleUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.WorkScheduleUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.WorkScheduleUpdateManyWithWhereWithoutOrganizationInput | Prisma.WorkScheduleUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.WorkScheduleScalarWhereInput | Prisma.WorkScheduleScalarWhereInput[];
};
export type WorkScheduleCreateworkDaysInput = {
    set: number[];
};
export type WorkScheduleUpdateworkDaysInput = {
    set?: number[];
    push?: number | number[];
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type WorkScheduleCreateNestedOneWithoutEmployeesInput = {
    create?: Prisma.XOR<Prisma.WorkScheduleCreateWithoutEmployeesInput, Prisma.WorkScheduleUncheckedCreateWithoutEmployeesInput>;
    connectOrCreate?: Prisma.WorkScheduleCreateOrConnectWithoutEmployeesInput;
    connect?: Prisma.WorkScheduleWhereUniqueInput;
};
export type WorkScheduleUpdateOneWithoutEmployeesNestedInput = {
    create?: Prisma.XOR<Prisma.WorkScheduleCreateWithoutEmployeesInput, Prisma.WorkScheduleUncheckedCreateWithoutEmployeesInput>;
    connectOrCreate?: Prisma.WorkScheduleCreateOrConnectWithoutEmployeesInput;
    upsert?: Prisma.WorkScheduleUpsertWithoutEmployeesInput;
    disconnect?: Prisma.WorkScheduleWhereInput | boolean;
    delete?: Prisma.WorkScheduleWhereInput | boolean;
    connect?: Prisma.WorkScheduleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.WorkScheduleUpdateToOneWithWhereWithoutEmployeesInput, Prisma.WorkScheduleUpdateWithoutEmployeesInput>, Prisma.WorkScheduleUncheckedUpdateWithoutEmployeesInput>;
};
export type WorkScheduleCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    workDays?: Prisma.WorkScheduleCreateworkDaysInput | number[];
    dailyHours?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    overtimeThresholdDaily?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeThresholdWeekly?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isDefault?: boolean;
    createdAt?: Date | string;
    employees?: Prisma.EmployeeCreateNestedManyWithoutWorkScheduleInput;
};
export type WorkScheduleUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    workDays?: Prisma.WorkScheduleCreateworkDaysInput | number[];
    dailyHours?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    overtimeThresholdDaily?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeThresholdWeekly?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isDefault?: boolean;
    createdAt?: Date | string;
    employees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutWorkScheduleInput;
};
export type WorkScheduleCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.WorkScheduleWhereUniqueInput;
    create: Prisma.XOR<Prisma.WorkScheduleCreateWithoutOrganizationInput, Prisma.WorkScheduleUncheckedCreateWithoutOrganizationInput>;
};
export type WorkScheduleCreateManyOrganizationInputEnvelope = {
    data: Prisma.WorkScheduleCreateManyOrganizationInput | Prisma.WorkScheduleCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type WorkScheduleUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.WorkScheduleWhereUniqueInput;
    update: Prisma.XOR<Prisma.WorkScheduleUpdateWithoutOrganizationInput, Prisma.WorkScheduleUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.WorkScheduleCreateWithoutOrganizationInput, Prisma.WorkScheduleUncheckedCreateWithoutOrganizationInput>;
};
export type WorkScheduleUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.WorkScheduleWhereUniqueInput;
    data: Prisma.XOR<Prisma.WorkScheduleUpdateWithoutOrganizationInput, Prisma.WorkScheduleUncheckedUpdateWithoutOrganizationInput>;
};
export type WorkScheduleUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.WorkScheduleScalarWhereInput;
    data: Prisma.XOR<Prisma.WorkScheduleUpdateManyMutationInput, Prisma.WorkScheduleUncheckedUpdateManyWithoutOrganizationInput>;
};
export type WorkScheduleScalarWhereInput = {
    AND?: Prisma.WorkScheduleScalarWhereInput | Prisma.WorkScheduleScalarWhereInput[];
    OR?: Prisma.WorkScheduleScalarWhereInput[];
    NOT?: Prisma.WorkScheduleScalarWhereInput | Prisma.WorkScheduleScalarWhereInput[];
    id?: Prisma.UuidFilter<"WorkSchedule"> | string;
    organizationId?: Prisma.UuidFilter<"WorkSchedule"> | string;
    name?: Prisma.StringFilter<"WorkSchedule"> | string;
    workDays?: Prisma.IntNullableListFilter<"WorkSchedule">;
    dailyHours?: Prisma.DecimalFilter<"WorkSchedule"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    overtimeThresholdDaily?: Prisma.DecimalNullableFilter<"WorkSchedule"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeThresholdWeekly?: Prisma.DecimalNullableFilter<"WorkSchedule"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isDefault?: Prisma.BoolFilter<"WorkSchedule"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"WorkSchedule"> | Date | string;
};
export type WorkScheduleCreateWithoutEmployeesInput = {
    id?: string;
    name: string;
    workDays?: Prisma.WorkScheduleCreateworkDaysInput | number[];
    dailyHours?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    overtimeThresholdDaily?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeThresholdWeekly?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isDefault?: boolean;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutWorkSchedulesInput;
};
export type WorkScheduleUncheckedCreateWithoutEmployeesInput = {
    id?: string;
    organizationId: string;
    name: string;
    workDays?: Prisma.WorkScheduleCreateworkDaysInput | number[];
    dailyHours?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    overtimeThresholdDaily?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeThresholdWeekly?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isDefault?: boolean;
    createdAt?: Date | string;
};
export type WorkScheduleCreateOrConnectWithoutEmployeesInput = {
    where: Prisma.WorkScheduleWhereUniqueInput;
    create: Prisma.XOR<Prisma.WorkScheduleCreateWithoutEmployeesInput, Prisma.WorkScheduleUncheckedCreateWithoutEmployeesInput>;
};
export type WorkScheduleUpsertWithoutEmployeesInput = {
    update: Prisma.XOR<Prisma.WorkScheduleUpdateWithoutEmployeesInput, Prisma.WorkScheduleUncheckedUpdateWithoutEmployeesInput>;
    create: Prisma.XOR<Prisma.WorkScheduleCreateWithoutEmployeesInput, Prisma.WorkScheduleUncheckedCreateWithoutEmployeesInput>;
    where?: Prisma.WorkScheduleWhereInput;
};
export type WorkScheduleUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: Prisma.WorkScheduleWhereInput;
    data: Prisma.XOR<Prisma.WorkScheduleUpdateWithoutEmployeesInput, Prisma.WorkScheduleUncheckedUpdateWithoutEmployeesInput>;
};
export type WorkScheduleUpdateWithoutEmployeesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    workDays?: Prisma.WorkScheduleUpdateworkDaysInput | number[];
    dailyHours?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    overtimeThresholdDaily?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeThresholdWeekly?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutWorkSchedulesNestedInput;
};
export type WorkScheduleUncheckedUpdateWithoutEmployeesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    workDays?: Prisma.WorkScheduleUpdateworkDaysInput | number[];
    dailyHours?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    overtimeThresholdDaily?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeThresholdWeekly?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WorkScheduleCreateManyOrganizationInput = {
    id?: string;
    name: string;
    workDays?: Prisma.WorkScheduleCreateworkDaysInput | number[];
    dailyHours?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    overtimeThresholdDaily?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeThresholdWeekly?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isDefault?: boolean;
    createdAt?: Date | string;
};
export type WorkScheduleUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    workDays?: Prisma.WorkScheduleUpdateworkDaysInput | number[];
    dailyHours?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    overtimeThresholdDaily?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeThresholdWeekly?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employees?: Prisma.EmployeeUpdateManyWithoutWorkScheduleNestedInput;
};
export type WorkScheduleUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    workDays?: Prisma.WorkScheduleUpdateworkDaysInput | number[];
    dailyHours?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    overtimeThresholdDaily?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeThresholdWeekly?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employees?: Prisma.EmployeeUncheckedUpdateManyWithoutWorkScheduleNestedInput;
};
export type WorkScheduleUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    workDays?: Prisma.WorkScheduleUpdateworkDaysInput | number[];
    dailyHours?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    overtimeThresholdDaily?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeThresholdWeekly?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WorkScheduleCountOutputType = {
    employees: number;
};
export type WorkScheduleCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employees?: boolean | WorkScheduleCountOutputTypeCountEmployeesArgs;
};
export type WorkScheduleCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkScheduleCountOutputTypeSelect<ExtArgs> | null;
};
export type WorkScheduleCountOutputTypeCountEmployeesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeWhereInput;
};
export type WorkScheduleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    workDays?: boolean;
    dailyHours?: boolean;
    overtimeThresholdDaily?: boolean;
    overtimeThresholdWeekly?: boolean;
    isDefault?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    employees?: boolean | Prisma.WorkSchedule$employeesArgs<ExtArgs>;
    _count?: boolean | Prisma.WorkScheduleCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["workSchedule"]>;
export type WorkScheduleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    workDays?: boolean;
    dailyHours?: boolean;
    overtimeThresholdDaily?: boolean;
    overtimeThresholdWeekly?: boolean;
    isDefault?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["workSchedule"]>;
export type WorkScheduleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    workDays?: boolean;
    dailyHours?: boolean;
    overtimeThresholdDaily?: boolean;
    overtimeThresholdWeekly?: boolean;
    isDefault?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["workSchedule"]>;
export type WorkScheduleSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    workDays?: boolean;
    dailyHours?: boolean;
    overtimeThresholdDaily?: boolean;
    overtimeThresholdWeekly?: boolean;
    isDefault?: boolean;
    createdAt?: boolean;
};
export type WorkScheduleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "name" | "workDays" | "dailyHours" | "overtimeThresholdDaily" | "overtimeThresholdWeekly" | "isDefault" | "createdAt", ExtArgs["result"]["workSchedule"]>;
export type WorkScheduleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    employees?: boolean | Prisma.WorkSchedule$employeesArgs<ExtArgs>;
    _count?: boolean | Prisma.WorkScheduleCountOutputTypeDefaultArgs<ExtArgs>;
};
export type WorkScheduleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type WorkScheduleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type $WorkSchedulePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WorkSchedule";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        employees: Prisma.$EmployeePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        name: string;
        workDays: number[];
        dailyHours: runtime.Decimal;
        overtimeThresholdDaily: runtime.Decimal | null;
        overtimeThresholdWeekly: runtime.Decimal | null;
        isDefault: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["workSchedule"]>;
    composites: {};
};
export type WorkScheduleGetPayload<S extends boolean | null | undefined | WorkScheduleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WorkSchedulePayload, S>;
export type WorkScheduleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WorkScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WorkScheduleCountAggregateInputType | true;
};
export interface WorkScheduleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WorkSchedule'];
        meta: {
            name: 'WorkSchedule';
        };
    };
    findUnique<T extends WorkScheduleFindUniqueArgs>(args: Prisma.SelectSubset<T, WorkScheduleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WorkScheduleClient<runtime.Types.Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WorkScheduleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WorkScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WorkScheduleClient<runtime.Types.Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WorkScheduleFindFirstArgs>(args?: Prisma.SelectSubset<T, WorkScheduleFindFirstArgs<ExtArgs>>): Prisma.Prisma__WorkScheduleClient<runtime.Types.Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WorkScheduleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WorkScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WorkScheduleClient<runtime.Types.Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WorkScheduleFindManyArgs>(args?: Prisma.SelectSubset<T, WorkScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WorkScheduleCreateArgs>(args: Prisma.SelectSubset<T, WorkScheduleCreateArgs<ExtArgs>>): Prisma.Prisma__WorkScheduleClient<runtime.Types.Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WorkScheduleCreateManyArgs>(args?: Prisma.SelectSubset<T, WorkScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends WorkScheduleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WorkScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends WorkScheduleDeleteArgs>(args: Prisma.SelectSubset<T, WorkScheduleDeleteArgs<ExtArgs>>): Prisma.Prisma__WorkScheduleClient<runtime.Types.Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WorkScheduleUpdateArgs>(args: Prisma.SelectSubset<T, WorkScheduleUpdateArgs<ExtArgs>>): Prisma.Prisma__WorkScheduleClient<runtime.Types.Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WorkScheduleDeleteManyArgs>(args?: Prisma.SelectSubset<T, WorkScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WorkScheduleUpdateManyArgs>(args: Prisma.SelectSubset<T, WorkScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends WorkScheduleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WorkScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends WorkScheduleUpsertArgs>(args: Prisma.SelectSubset<T, WorkScheduleUpsertArgs<ExtArgs>>): Prisma.Prisma__WorkScheduleClient<runtime.Types.Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WorkScheduleCountArgs>(args?: Prisma.Subset<T, WorkScheduleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WorkScheduleCountAggregateOutputType> : number>;
    aggregate<T extends WorkScheduleAggregateArgs>(args: Prisma.Subset<T, WorkScheduleAggregateArgs>): Prisma.PrismaPromise<GetWorkScheduleAggregateType<T>>;
    groupBy<T extends WorkScheduleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WorkScheduleGroupByArgs['orderBy'];
    } : {
        orderBy?: WorkScheduleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WorkScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WorkScheduleFieldRefs;
}
export interface Prisma__WorkScheduleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    employees<T extends Prisma.WorkSchedule$employeesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WorkSchedule$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WorkScheduleFieldRefs {
    readonly id: Prisma.FieldRef<"WorkSchedule", 'String'>;
    readonly organizationId: Prisma.FieldRef<"WorkSchedule", 'String'>;
    readonly name: Prisma.FieldRef<"WorkSchedule", 'String'>;
    readonly workDays: Prisma.FieldRef<"WorkSchedule", 'Int[]'>;
    readonly dailyHours: Prisma.FieldRef<"WorkSchedule", 'Decimal'>;
    readonly overtimeThresholdDaily: Prisma.FieldRef<"WorkSchedule", 'Decimal'>;
    readonly overtimeThresholdWeekly: Prisma.FieldRef<"WorkSchedule", 'Decimal'>;
    readonly isDefault: Prisma.FieldRef<"WorkSchedule", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"WorkSchedule", 'DateTime'>;
}
export type WorkScheduleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkScheduleSelect<ExtArgs> | null;
    omit?: Prisma.WorkScheduleOmit<ExtArgs> | null;
    include?: Prisma.WorkScheduleInclude<ExtArgs> | null;
    where: Prisma.WorkScheduleWhereUniqueInput;
};
export type WorkScheduleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkScheduleSelect<ExtArgs> | null;
    omit?: Prisma.WorkScheduleOmit<ExtArgs> | null;
    include?: Prisma.WorkScheduleInclude<ExtArgs> | null;
    where: Prisma.WorkScheduleWhereUniqueInput;
};
export type WorkScheduleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkScheduleSelect<ExtArgs> | null;
    omit?: Prisma.WorkScheduleOmit<ExtArgs> | null;
    include?: Prisma.WorkScheduleInclude<ExtArgs> | null;
    where?: Prisma.WorkScheduleWhereInput;
    orderBy?: Prisma.WorkScheduleOrderByWithRelationInput | Prisma.WorkScheduleOrderByWithRelationInput[];
    cursor?: Prisma.WorkScheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WorkScheduleScalarFieldEnum | Prisma.WorkScheduleScalarFieldEnum[];
};
export type WorkScheduleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkScheduleSelect<ExtArgs> | null;
    omit?: Prisma.WorkScheduleOmit<ExtArgs> | null;
    include?: Prisma.WorkScheduleInclude<ExtArgs> | null;
    where?: Prisma.WorkScheduleWhereInput;
    orderBy?: Prisma.WorkScheduleOrderByWithRelationInput | Prisma.WorkScheduleOrderByWithRelationInput[];
    cursor?: Prisma.WorkScheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WorkScheduleScalarFieldEnum | Prisma.WorkScheduleScalarFieldEnum[];
};
export type WorkScheduleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkScheduleSelect<ExtArgs> | null;
    omit?: Prisma.WorkScheduleOmit<ExtArgs> | null;
    include?: Prisma.WorkScheduleInclude<ExtArgs> | null;
    where?: Prisma.WorkScheduleWhereInput;
    orderBy?: Prisma.WorkScheduleOrderByWithRelationInput | Prisma.WorkScheduleOrderByWithRelationInput[];
    cursor?: Prisma.WorkScheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WorkScheduleScalarFieldEnum | Prisma.WorkScheduleScalarFieldEnum[];
};
export type WorkScheduleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkScheduleSelect<ExtArgs> | null;
    omit?: Prisma.WorkScheduleOmit<ExtArgs> | null;
    include?: Prisma.WorkScheduleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WorkScheduleCreateInput, Prisma.WorkScheduleUncheckedCreateInput>;
};
export type WorkScheduleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WorkScheduleCreateManyInput | Prisma.WorkScheduleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WorkScheduleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkScheduleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WorkScheduleOmit<ExtArgs> | null;
    data: Prisma.WorkScheduleCreateManyInput | Prisma.WorkScheduleCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.WorkScheduleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type WorkScheduleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkScheduleSelect<ExtArgs> | null;
    omit?: Prisma.WorkScheduleOmit<ExtArgs> | null;
    include?: Prisma.WorkScheduleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WorkScheduleUpdateInput, Prisma.WorkScheduleUncheckedUpdateInput>;
    where: Prisma.WorkScheduleWhereUniqueInput;
};
export type WorkScheduleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WorkScheduleUpdateManyMutationInput, Prisma.WorkScheduleUncheckedUpdateManyInput>;
    where?: Prisma.WorkScheduleWhereInput;
    limit?: number;
};
export type WorkScheduleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkScheduleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WorkScheduleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WorkScheduleUpdateManyMutationInput, Prisma.WorkScheduleUncheckedUpdateManyInput>;
    where?: Prisma.WorkScheduleWhereInput;
    limit?: number;
    include?: Prisma.WorkScheduleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type WorkScheduleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkScheduleSelect<ExtArgs> | null;
    omit?: Prisma.WorkScheduleOmit<ExtArgs> | null;
    include?: Prisma.WorkScheduleInclude<ExtArgs> | null;
    where: Prisma.WorkScheduleWhereUniqueInput;
    create: Prisma.XOR<Prisma.WorkScheduleCreateInput, Prisma.WorkScheduleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WorkScheduleUpdateInput, Prisma.WorkScheduleUncheckedUpdateInput>;
};
export type WorkScheduleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkScheduleSelect<ExtArgs> | null;
    omit?: Prisma.WorkScheduleOmit<ExtArgs> | null;
    include?: Prisma.WorkScheduleInclude<ExtArgs> | null;
    where: Prisma.WorkScheduleWhereUniqueInput;
};
export type WorkScheduleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WorkScheduleWhereInput;
    limit?: number;
};
export type WorkSchedule$employeesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where?: Prisma.EmployeeWhereInput;
    orderBy?: Prisma.EmployeeOrderByWithRelationInput | Prisma.EmployeeOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeScalarFieldEnum | Prisma.EmployeeScalarFieldEnum[];
};
export type WorkScheduleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkScheduleSelect<ExtArgs> | null;
    omit?: Prisma.WorkScheduleOmit<ExtArgs> | null;
    include?: Prisma.WorkScheduleInclude<ExtArgs> | null;
};
