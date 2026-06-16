import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ShiftTemplateModel = runtime.Types.Result.DefaultSelection<Prisma.$ShiftTemplatePayload>;
export type AggregateShiftTemplate = {
    _count: ShiftTemplateCountAggregateOutputType | null;
    _avg: ShiftTemplateAvgAggregateOutputType | null;
    _sum: ShiftTemplateSumAggregateOutputType | null;
    _min: ShiftTemplateMinAggregateOutputType | null;
    _max: ShiftTemplateMaxAggregateOutputType | null;
};
export type ShiftTemplateAvgAggregateOutputType = {
    breakMinutes: number | null;
};
export type ShiftTemplateSumAggregateOutputType = {
    breakMinutes: number | null;
};
export type ShiftTemplateMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    name: string | null;
    startTime: Date | null;
    endTime: Date | null;
    breakMinutes: number | null;
    color: string | null;
    createdAt: Date | null;
};
export type ShiftTemplateMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    name: string | null;
    startTime: Date | null;
    endTime: Date | null;
    breakMinutes: number | null;
    color: string | null;
    createdAt: Date | null;
};
export type ShiftTemplateCountAggregateOutputType = {
    id: number;
    organizationId: number;
    name: number;
    startTime: number;
    endTime: number;
    breakMinutes: number;
    color: number;
    createdAt: number;
    _all: number;
};
export type ShiftTemplateAvgAggregateInputType = {
    breakMinutes?: true;
};
export type ShiftTemplateSumAggregateInputType = {
    breakMinutes?: true;
};
export type ShiftTemplateMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    startTime?: true;
    endTime?: true;
    breakMinutes?: true;
    color?: true;
    createdAt?: true;
};
export type ShiftTemplateMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    startTime?: true;
    endTime?: true;
    breakMinutes?: true;
    color?: true;
    createdAt?: true;
};
export type ShiftTemplateCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    startTime?: true;
    endTime?: true;
    breakMinutes?: true;
    color?: true;
    createdAt?: true;
    _all?: true;
};
export type ShiftTemplateAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShiftTemplateWhereInput;
    orderBy?: Prisma.ShiftTemplateOrderByWithRelationInput | Prisma.ShiftTemplateOrderByWithRelationInput[];
    cursor?: Prisma.ShiftTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ShiftTemplateCountAggregateInputType;
    _avg?: ShiftTemplateAvgAggregateInputType;
    _sum?: ShiftTemplateSumAggregateInputType;
    _min?: ShiftTemplateMinAggregateInputType;
    _max?: ShiftTemplateMaxAggregateInputType;
};
export type GetShiftTemplateAggregateType<T extends ShiftTemplateAggregateArgs> = {
    [P in keyof T & keyof AggregateShiftTemplate]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShiftTemplate[P]> : Prisma.GetScalarType<T[P], AggregateShiftTemplate[P]>;
};
export type ShiftTemplateGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShiftTemplateWhereInput;
    orderBy?: Prisma.ShiftTemplateOrderByWithAggregationInput | Prisma.ShiftTemplateOrderByWithAggregationInput[];
    by: Prisma.ShiftTemplateScalarFieldEnum[] | Prisma.ShiftTemplateScalarFieldEnum;
    having?: Prisma.ShiftTemplateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShiftTemplateCountAggregateInputType | true;
    _avg?: ShiftTemplateAvgAggregateInputType;
    _sum?: ShiftTemplateSumAggregateInputType;
    _min?: ShiftTemplateMinAggregateInputType;
    _max?: ShiftTemplateMaxAggregateInputType;
};
export type ShiftTemplateGroupByOutputType = {
    id: string;
    organizationId: string;
    name: string;
    startTime: Date;
    endTime: Date;
    breakMinutes: number;
    color: string | null;
    createdAt: Date;
    _count: ShiftTemplateCountAggregateOutputType | null;
    _avg: ShiftTemplateAvgAggregateOutputType | null;
    _sum: ShiftTemplateSumAggregateOutputType | null;
    _min: ShiftTemplateMinAggregateOutputType | null;
    _max: ShiftTemplateMaxAggregateOutputType | null;
};
export type GetShiftTemplateGroupByPayload<T extends ShiftTemplateGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ShiftTemplateGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ShiftTemplateGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ShiftTemplateGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ShiftTemplateGroupByOutputType[P]>;
}>>;
export type ShiftTemplateWhereInput = {
    AND?: Prisma.ShiftTemplateWhereInput | Prisma.ShiftTemplateWhereInput[];
    OR?: Prisma.ShiftTemplateWhereInput[];
    NOT?: Prisma.ShiftTemplateWhereInput | Prisma.ShiftTemplateWhereInput[];
    id?: Prisma.UuidFilter<"ShiftTemplate"> | string;
    organizationId?: Prisma.UuidFilter<"ShiftTemplate"> | string;
    name?: Prisma.StringFilter<"ShiftTemplate"> | string;
    startTime?: Prisma.DateTimeFilter<"ShiftTemplate"> | Date | string;
    endTime?: Prisma.DateTimeFilter<"ShiftTemplate"> | Date | string;
    breakMinutes?: Prisma.IntFilter<"ShiftTemplate"> | number;
    color?: Prisma.StringNullableFilter<"ShiftTemplate"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ShiftTemplate"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    schedules?: Prisma.ShiftScheduleListRelationFilter;
};
export type ShiftTemplateOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    breakMinutes?: Prisma.SortOrder;
    color?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    schedules?: Prisma.ShiftScheduleOrderByRelationAggregateInput;
};
export type ShiftTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ShiftTemplateWhereInput | Prisma.ShiftTemplateWhereInput[];
    OR?: Prisma.ShiftTemplateWhereInput[];
    NOT?: Prisma.ShiftTemplateWhereInput | Prisma.ShiftTemplateWhereInput[];
    organizationId?: Prisma.UuidFilter<"ShiftTemplate"> | string;
    name?: Prisma.StringFilter<"ShiftTemplate"> | string;
    startTime?: Prisma.DateTimeFilter<"ShiftTemplate"> | Date | string;
    endTime?: Prisma.DateTimeFilter<"ShiftTemplate"> | Date | string;
    breakMinutes?: Prisma.IntFilter<"ShiftTemplate"> | number;
    color?: Prisma.StringNullableFilter<"ShiftTemplate"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ShiftTemplate"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    schedules?: Prisma.ShiftScheduleListRelationFilter;
}, "id">;
export type ShiftTemplateOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    breakMinutes?: Prisma.SortOrder;
    color?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ShiftTemplateCountOrderByAggregateInput;
    _avg?: Prisma.ShiftTemplateAvgOrderByAggregateInput;
    _max?: Prisma.ShiftTemplateMaxOrderByAggregateInput;
    _min?: Prisma.ShiftTemplateMinOrderByAggregateInput;
    _sum?: Prisma.ShiftTemplateSumOrderByAggregateInput;
};
export type ShiftTemplateScalarWhereWithAggregatesInput = {
    AND?: Prisma.ShiftTemplateScalarWhereWithAggregatesInput | Prisma.ShiftTemplateScalarWhereWithAggregatesInput[];
    OR?: Prisma.ShiftTemplateScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ShiftTemplateScalarWhereWithAggregatesInput | Prisma.ShiftTemplateScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ShiftTemplate"> | string;
    organizationId?: Prisma.UuidWithAggregatesFilter<"ShiftTemplate"> | string;
    name?: Prisma.StringWithAggregatesFilter<"ShiftTemplate"> | string;
    startTime?: Prisma.DateTimeWithAggregatesFilter<"ShiftTemplate"> | Date | string;
    endTime?: Prisma.DateTimeWithAggregatesFilter<"ShiftTemplate"> | Date | string;
    breakMinutes?: Prisma.IntWithAggregatesFilter<"ShiftTemplate"> | number;
    color?: Prisma.StringNullableWithAggregatesFilter<"ShiftTemplate"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ShiftTemplate"> | Date | string;
};
export type ShiftTemplateCreateInput = {
    id?: string;
    name: string;
    startTime: Date | string;
    endTime: Date | string;
    breakMinutes?: number;
    color?: string | null;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutShiftTemplatesInput;
    schedules?: Prisma.ShiftScheduleCreateNestedManyWithoutTemplateInput;
};
export type ShiftTemplateUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    name: string;
    startTime: Date | string;
    endTime: Date | string;
    breakMinutes?: number;
    color?: string | null;
    createdAt?: Date | string;
    schedules?: Prisma.ShiftScheduleUncheckedCreateNestedManyWithoutTemplateInput;
};
export type ShiftTemplateUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    breakMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutShiftTemplatesNestedInput;
    schedules?: Prisma.ShiftScheduleUpdateManyWithoutTemplateNestedInput;
};
export type ShiftTemplateUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    breakMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    schedules?: Prisma.ShiftScheduleUncheckedUpdateManyWithoutTemplateNestedInput;
};
export type ShiftTemplateCreateManyInput = {
    id?: string;
    organizationId: string;
    name: string;
    startTime: Date | string;
    endTime: Date | string;
    breakMinutes?: number;
    color?: string | null;
    createdAt?: Date | string;
};
export type ShiftTemplateUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    breakMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShiftTemplateUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    breakMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShiftTemplateListRelationFilter = {
    every?: Prisma.ShiftTemplateWhereInput;
    some?: Prisma.ShiftTemplateWhereInput;
    none?: Prisma.ShiftTemplateWhereInput;
};
export type ShiftTemplateOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ShiftTemplateCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    breakMinutes?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShiftTemplateAvgOrderByAggregateInput = {
    breakMinutes?: Prisma.SortOrder;
};
export type ShiftTemplateMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    breakMinutes?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShiftTemplateMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    breakMinutes?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShiftTemplateSumOrderByAggregateInput = {
    breakMinutes?: Prisma.SortOrder;
};
export type ShiftTemplateNullableScalarRelationFilter = {
    is?: Prisma.ShiftTemplateWhereInput | null;
    isNot?: Prisma.ShiftTemplateWhereInput | null;
};
export type ShiftTemplateCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.ShiftTemplateCreateWithoutOrganizationInput, Prisma.ShiftTemplateUncheckedCreateWithoutOrganizationInput> | Prisma.ShiftTemplateCreateWithoutOrganizationInput[] | Prisma.ShiftTemplateUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.ShiftTemplateCreateOrConnectWithoutOrganizationInput | Prisma.ShiftTemplateCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.ShiftTemplateCreateManyOrganizationInputEnvelope;
    connect?: Prisma.ShiftTemplateWhereUniqueInput | Prisma.ShiftTemplateWhereUniqueInput[];
};
export type ShiftTemplateUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.ShiftTemplateCreateWithoutOrganizationInput, Prisma.ShiftTemplateUncheckedCreateWithoutOrganizationInput> | Prisma.ShiftTemplateCreateWithoutOrganizationInput[] | Prisma.ShiftTemplateUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.ShiftTemplateCreateOrConnectWithoutOrganizationInput | Prisma.ShiftTemplateCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.ShiftTemplateCreateManyOrganizationInputEnvelope;
    connect?: Prisma.ShiftTemplateWhereUniqueInput | Prisma.ShiftTemplateWhereUniqueInput[];
};
export type ShiftTemplateUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.ShiftTemplateCreateWithoutOrganizationInput, Prisma.ShiftTemplateUncheckedCreateWithoutOrganizationInput> | Prisma.ShiftTemplateCreateWithoutOrganizationInput[] | Prisma.ShiftTemplateUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.ShiftTemplateCreateOrConnectWithoutOrganizationInput | Prisma.ShiftTemplateCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.ShiftTemplateUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.ShiftTemplateUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.ShiftTemplateCreateManyOrganizationInputEnvelope;
    set?: Prisma.ShiftTemplateWhereUniqueInput | Prisma.ShiftTemplateWhereUniqueInput[];
    disconnect?: Prisma.ShiftTemplateWhereUniqueInput | Prisma.ShiftTemplateWhereUniqueInput[];
    delete?: Prisma.ShiftTemplateWhereUniqueInput | Prisma.ShiftTemplateWhereUniqueInput[];
    connect?: Prisma.ShiftTemplateWhereUniqueInput | Prisma.ShiftTemplateWhereUniqueInput[];
    update?: Prisma.ShiftTemplateUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.ShiftTemplateUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.ShiftTemplateUpdateManyWithWhereWithoutOrganizationInput | Prisma.ShiftTemplateUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.ShiftTemplateScalarWhereInput | Prisma.ShiftTemplateScalarWhereInput[];
};
export type ShiftTemplateUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.ShiftTemplateCreateWithoutOrganizationInput, Prisma.ShiftTemplateUncheckedCreateWithoutOrganizationInput> | Prisma.ShiftTemplateCreateWithoutOrganizationInput[] | Prisma.ShiftTemplateUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.ShiftTemplateCreateOrConnectWithoutOrganizationInput | Prisma.ShiftTemplateCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.ShiftTemplateUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.ShiftTemplateUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.ShiftTemplateCreateManyOrganizationInputEnvelope;
    set?: Prisma.ShiftTemplateWhereUniqueInput | Prisma.ShiftTemplateWhereUniqueInput[];
    disconnect?: Prisma.ShiftTemplateWhereUniqueInput | Prisma.ShiftTemplateWhereUniqueInput[];
    delete?: Prisma.ShiftTemplateWhereUniqueInput | Prisma.ShiftTemplateWhereUniqueInput[];
    connect?: Prisma.ShiftTemplateWhereUniqueInput | Prisma.ShiftTemplateWhereUniqueInput[];
    update?: Prisma.ShiftTemplateUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.ShiftTemplateUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.ShiftTemplateUpdateManyWithWhereWithoutOrganizationInput | Prisma.ShiftTemplateUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.ShiftTemplateScalarWhereInput | Prisma.ShiftTemplateScalarWhereInput[];
};
export type ShiftTemplateCreateNestedOneWithoutSchedulesInput = {
    create?: Prisma.XOR<Prisma.ShiftTemplateCreateWithoutSchedulesInput, Prisma.ShiftTemplateUncheckedCreateWithoutSchedulesInput>;
    connectOrCreate?: Prisma.ShiftTemplateCreateOrConnectWithoutSchedulesInput;
    connect?: Prisma.ShiftTemplateWhereUniqueInput;
};
export type ShiftTemplateUpdateOneWithoutSchedulesNestedInput = {
    create?: Prisma.XOR<Prisma.ShiftTemplateCreateWithoutSchedulesInput, Prisma.ShiftTemplateUncheckedCreateWithoutSchedulesInput>;
    connectOrCreate?: Prisma.ShiftTemplateCreateOrConnectWithoutSchedulesInput;
    upsert?: Prisma.ShiftTemplateUpsertWithoutSchedulesInput;
    disconnect?: Prisma.ShiftTemplateWhereInput | boolean;
    delete?: Prisma.ShiftTemplateWhereInput | boolean;
    connect?: Prisma.ShiftTemplateWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShiftTemplateUpdateToOneWithWhereWithoutSchedulesInput, Prisma.ShiftTemplateUpdateWithoutSchedulesInput>, Prisma.ShiftTemplateUncheckedUpdateWithoutSchedulesInput>;
};
export type ShiftTemplateCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    startTime: Date | string;
    endTime: Date | string;
    breakMinutes?: number;
    color?: string | null;
    createdAt?: Date | string;
    schedules?: Prisma.ShiftScheduleCreateNestedManyWithoutTemplateInput;
};
export type ShiftTemplateUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    startTime: Date | string;
    endTime: Date | string;
    breakMinutes?: number;
    color?: string | null;
    createdAt?: Date | string;
    schedules?: Prisma.ShiftScheduleUncheckedCreateNestedManyWithoutTemplateInput;
};
export type ShiftTemplateCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.ShiftTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShiftTemplateCreateWithoutOrganizationInput, Prisma.ShiftTemplateUncheckedCreateWithoutOrganizationInput>;
};
export type ShiftTemplateCreateManyOrganizationInputEnvelope = {
    data: Prisma.ShiftTemplateCreateManyOrganizationInput | Prisma.ShiftTemplateCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type ShiftTemplateUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.ShiftTemplateWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShiftTemplateUpdateWithoutOrganizationInput, Prisma.ShiftTemplateUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.ShiftTemplateCreateWithoutOrganizationInput, Prisma.ShiftTemplateUncheckedCreateWithoutOrganizationInput>;
};
export type ShiftTemplateUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.ShiftTemplateWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShiftTemplateUpdateWithoutOrganizationInput, Prisma.ShiftTemplateUncheckedUpdateWithoutOrganizationInput>;
};
export type ShiftTemplateUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.ShiftTemplateScalarWhereInput;
    data: Prisma.XOR<Prisma.ShiftTemplateUpdateManyMutationInput, Prisma.ShiftTemplateUncheckedUpdateManyWithoutOrganizationInput>;
};
export type ShiftTemplateScalarWhereInput = {
    AND?: Prisma.ShiftTemplateScalarWhereInput | Prisma.ShiftTemplateScalarWhereInput[];
    OR?: Prisma.ShiftTemplateScalarWhereInput[];
    NOT?: Prisma.ShiftTemplateScalarWhereInput | Prisma.ShiftTemplateScalarWhereInput[];
    id?: Prisma.UuidFilter<"ShiftTemplate"> | string;
    organizationId?: Prisma.UuidFilter<"ShiftTemplate"> | string;
    name?: Prisma.StringFilter<"ShiftTemplate"> | string;
    startTime?: Prisma.DateTimeFilter<"ShiftTemplate"> | Date | string;
    endTime?: Prisma.DateTimeFilter<"ShiftTemplate"> | Date | string;
    breakMinutes?: Prisma.IntFilter<"ShiftTemplate"> | number;
    color?: Prisma.StringNullableFilter<"ShiftTemplate"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ShiftTemplate"> | Date | string;
};
export type ShiftTemplateCreateWithoutSchedulesInput = {
    id?: string;
    name: string;
    startTime: Date | string;
    endTime: Date | string;
    breakMinutes?: number;
    color?: string | null;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutShiftTemplatesInput;
};
export type ShiftTemplateUncheckedCreateWithoutSchedulesInput = {
    id?: string;
    organizationId: string;
    name: string;
    startTime: Date | string;
    endTime: Date | string;
    breakMinutes?: number;
    color?: string | null;
    createdAt?: Date | string;
};
export type ShiftTemplateCreateOrConnectWithoutSchedulesInput = {
    where: Prisma.ShiftTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShiftTemplateCreateWithoutSchedulesInput, Prisma.ShiftTemplateUncheckedCreateWithoutSchedulesInput>;
};
export type ShiftTemplateUpsertWithoutSchedulesInput = {
    update: Prisma.XOR<Prisma.ShiftTemplateUpdateWithoutSchedulesInput, Prisma.ShiftTemplateUncheckedUpdateWithoutSchedulesInput>;
    create: Prisma.XOR<Prisma.ShiftTemplateCreateWithoutSchedulesInput, Prisma.ShiftTemplateUncheckedCreateWithoutSchedulesInput>;
    where?: Prisma.ShiftTemplateWhereInput;
};
export type ShiftTemplateUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: Prisma.ShiftTemplateWhereInput;
    data: Prisma.XOR<Prisma.ShiftTemplateUpdateWithoutSchedulesInput, Prisma.ShiftTemplateUncheckedUpdateWithoutSchedulesInput>;
};
export type ShiftTemplateUpdateWithoutSchedulesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    breakMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutShiftTemplatesNestedInput;
};
export type ShiftTemplateUncheckedUpdateWithoutSchedulesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    breakMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShiftTemplateCreateManyOrganizationInput = {
    id?: string;
    name: string;
    startTime: Date | string;
    endTime: Date | string;
    breakMinutes?: number;
    color?: string | null;
    createdAt?: Date | string;
};
export type ShiftTemplateUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    breakMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    schedules?: Prisma.ShiftScheduleUpdateManyWithoutTemplateNestedInput;
};
export type ShiftTemplateUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    breakMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    schedules?: Prisma.ShiftScheduleUncheckedUpdateManyWithoutTemplateNestedInput;
};
export type ShiftTemplateUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    breakMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShiftTemplateCountOutputType = {
    schedules: number;
};
export type ShiftTemplateCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    schedules?: boolean | ShiftTemplateCountOutputTypeCountSchedulesArgs;
};
export type ShiftTemplateCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftTemplateCountOutputTypeSelect<ExtArgs> | null;
};
export type ShiftTemplateCountOutputTypeCountSchedulesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShiftScheduleWhereInput;
};
export type ShiftTemplateSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    breakMinutes?: boolean;
    color?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    schedules?: boolean | Prisma.ShiftTemplate$schedulesArgs<ExtArgs>;
    _count?: boolean | Prisma.ShiftTemplateCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shiftTemplate"]>;
export type ShiftTemplateSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    breakMinutes?: boolean;
    color?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shiftTemplate"]>;
export type ShiftTemplateSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    breakMinutes?: boolean;
    color?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shiftTemplate"]>;
export type ShiftTemplateSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    breakMinutes?: boolean;
    color?: boolean;
    createdAt?: boolean;
};
export type ShiftTemplateOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "name" | "startTime" | "endTime" | "breakMinutes" | "color" | "createdAt", ExtArgs["result"]["shiftTemplate"]>;
export type ShiftTemplateInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    schedules?: boolean | Prisma.ShiftTemplate$schedulesArgs<ExtArgs>;
    _count?: boolean | Prisma.ShiftTemplateCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ShiftTemplateIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type ShiftTemplateIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type $ShiftTemplatePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ShiftTemplate";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        schedules: Prisma.$ShiftSchedulePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        name: string;
        startTime: Date;
        endTime: Date;
        breakMinutes: number;
        color: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["shiftTemplate"]>;
    composites: {};
};
export type ShiftTemplateGetPayload<S extends boolean | null | undefined | ShiftTemplateDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ShiftTemplatePayload, S>;
export type ShiftTemplateCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ShiftTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShiftTemplateCountAggregateInputType | true;
};
export interface ShiftTemplateDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ShiftTemplate'];
        meta: {
            name: 'ShiftTemplate';
        };
    };
    findUnique<T extends ShiftTemplateFindUniqueArgs>(args: Prisma.SelectSubset<T, ShiftTemplateFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ShiftTemplateClient<runtime.Types.Result.GetResult<Prisma.$ShiftTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ShiftTemplateFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ShiftTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShiftTemplateClient<runtime.Types.Result.GetResult<Prisma.$ShiftTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ShiftTemplateFindFirstArgs>(args?: Prisma.SelectSubset<T, ShiftTemplateFindFirstArgs<ExtArgs>>): Prisma.Prisma__ShiftTemplateClient<runtime.Types.Result.GetResult<Prisma.$ShiftTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ShiftTemplateFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ShiftTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShiftTemplateClient<runtime.Types.Result.GetResult<Prisma.$ShiftTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ShiftTemplateFindManyArgs>(args?: Prisma.SelectSubset<T, ShiftTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShiftTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ShiftTemplateCreateArgs>(args: Prisma.SelectSubset<T, ShiftTemplateCreateArgs<ExtArgs>>): Prisma.Prisma__ShiftTemplateClient<runtime.Types.Result.GetResult<Prisma.$ShiftTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ShiftTemplateCreateManyArgs>(args?: Prisma.SelectSubset<T, ShiftTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ShiftTemplateCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ShiftTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShiftTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ShiftTemplateDeleteArgs>(args: Prisma.SelectSubset<T, ShiftTemplateDeleteArgs<ExtArgs>>): Prisma.Prisma__ShiftTemplateClient<runtime.Types.Result.GetResult<Prisma.$ShiftTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ShiftTemplateUpdateArgs>(args: Prisma.SelectSubset<T, ShiftTemplateUpdateArgs<ExtArgs>>): Prisma.Prisma__ShiftTemplateClient<runtime.Types.Result.GetResult<Prisma.$ShiftTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ShiftTemplateDeleteManyArgs>(args?: Prisma.SelectSubset<T, ShiftTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ShiftTemplateUpdateManyArgs>(args: Prisma.SelectSubset<T, ShiftTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ShiftTemplateUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ShiftTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShiftTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ShiftTemplateUpsertArgs>(args: Prisma.SelectSubset<T, ShiftTemplateUpsertArgs<ExtArgs>>): Prisma.Prisma__ShiftTemplateClient<runtime.Types.Result.GetResult<Prisma.$ShiftTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ShiftTemplateCountArgs>(args?: Prisma.Subset<T, ShiftTemplateCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ShiftTemplateCountAggregateOutputType> : number>;
    aggregate<T extends ShiftTemplateAggregateArgs>(args: Prisma.Subset<T, ShiftTemplateAggregateArgs>): Prisma.PrismaPromise<GetShiftTemplateAggregateType<T>>;
    groupBy<T extends ShiftTemplateGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ShiftTemplateGroupByArgs['orderBy'];
    } : {
        orderBy?: ShiftTemplateGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ShiftTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShiftTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ShiftTemplateFieldRefs;
}
export interface Prisma__ShiftTemplateClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    schedules<T extends Prisma.ShiftTemplate$schedulesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShiftTemplate$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShiftSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ShiftTemplateFieldRefs {
    readonly id: Prisma.FieldRef<"ShiftTemplate", 'String'>;
    readonly organizationId: Prisma.FieldRef<"ShiftTemplate", 'String'>;
    readonly name: Prisma.FieldRef<"ShiftTemplate", 'String'>;
    readonly startTime: Prisma.FieldRef<"ShiftTemplate", 'DateTime'>;
    readonly endTime: Prisma.FieldRef<"ShiftTemplate", 'DateTime'>;
    readonly breakMinutes: Prisma.FieldRef<"ShiftTemplate", 'Int'>;
    readonly color: Prisma.FieldRef<"ShiftTemplate", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ShiftTemplate", 'DateTime'>;
}
export type ShiftTemplateFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftTemplateSelect<ExtArgs> | null;
    omit?: Prisma.ShiftTemplateOmit<ExtArgs> | null;
    include?: Prisma.ShiftTemplateInclude<ExtArgs> | null;
    where: Prisma.ShiftTemplateWhereUniqueInput;
};
export type ShiftTemplateFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftTemplateSelect<ExtArgs> | null;
    omit?: Prisma.ShiftTemplateOmit<ExtArgs> | null;
    include?: Prisma.ShiftTemplateInclude<ExtArgs> | null;
    where: Prisma.ShiftTemplateWhereUniqueInput;
};
export type ShiftTemplateFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftTemplateSelect<ExtArgs> | null;
    omit?: Prisma.ShiftTemplateOmit<ExtArgs> | null;
    include?: Prisma.ShiftTemplateInclude<ExtArgs> | null;
    where?: Prisma.ShiftTemplateWhereInput;
    orderBy?: Prisma.ShiftTemplateOrderByWithRelationInput | Prisma.ShiftTemplateOrderByWithRelationInput[];
    cursor?: Prisma.ShiftTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShiftTemplateScalarFieldEnum | Prisma.ShiftTemplateScalarFieldEnum[];
};
export type ShiftTemplateFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftTemplateSelect<ExtArgs> | null;
    omit?: Prisma.ShiftTemplateOmit<ExtArgs> | null;
    include?: Prisma.ShiftTemplateInclude<ExtArgs> | null;
    where?: Prisma.ShiftTemplateWhereInput;
    orderBy?: Prisma.ShiftTemplateOrderByWithRelationInput | Prisma.ShiftTemplateOrderByWithRelationInput[];
    cursor?: Prisma.ShiftTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShiftTemplateScalarFieldEnum | Prisma.ShiftTemplateScalarFieldEnum[];
};
export type ShiftTemplateFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftTemplateSelect<ExtArgs> | null;
    omit?: Prisma.ShiftTemplateOmit<ExtArgs> | null;
    include?: Prisma.ShiftTemplateInclude<ExtArgs> | null;
    where?: Prisma.ShiftTemplateWhereInput;
    orderBy?: Prisma.ShiftTemplateOrderByWithRelationInput | Prisma.ShiftTemplateOrderByWithRelationInput[];
    cursor?: Prisma.ShiftTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShiftTemplateScalarFieldEnum | Prisma.ShiftTemplateScalarFieldEnum[];
};
export type ShiftTemplateCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftTemplateSelect<ExtArgs> | null;
    omit?: Prisma.ShiftTemplateOmit<ExtArgs> | null;
    include?: Prisma.ShiftTemplateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShiftTemplateCreateInput, Prisma.ShiftTemplateUncheckedCreateInput>;
};
export type ShiftTemplateCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ShiftTemplateCreateManyInput | Prisma.ShiftTemplateCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ShiftTemplateCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftTemplateSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ShiftTemplateOmit<ExtArgs> | null;
    data: Prisma.ShiftTemplateCreateManyInput | Prisma.ShiftTemplateCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ShiftTemplateIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ShiftTemplateUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftTemplateSelect<ExtArgs> | null;
    omit?: Prisma.ShiftTemplateOmit<ExtArgs> | null;
    include?: Prisma.ShiftTemplateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShiftTemplateUpdateInput, Prisma.ShiftTemplateUncheckedUpdateInput>;
    where: Prisma.ShiftTemplateWhereUniqueInput;
};
export type ShiftTemplateUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ShiftTemplateUpdateManyMutationInput, Prisma.ShiftTemplateUncheckedUpdateManyInput>;
    where?: Prisma.ShiftTemplateWhereInput;
    limit?: number;
};
export type ShiftTemplateUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftTemplateSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ShiftTemplateOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShiftTemplateUpdateManyMutationInput, Prisma.ShiftTemplateUncheckedUpdateManyInput>;
    where?: Prisma.ShiftTemplateWhereInput;
    limit?: number;
    include?: Prisma.ShiftTemplateIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ShiftTemplateUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftTemplateSelect<ExtArgs> | null;
    omit?: Prisma.ShiftTemplateOmit<ExtArgs> | null;
    include?: Prisma.ShiftTemplateInclude<ExtArgs> | null;
    where: Prisma.ShiftTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShiftTemplateCreateInput, Prisma.ShiftTemplateUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ShiftTemplateUpdateInput, Prisma.ShiftTemplateUncheckedUpdateInput>;
};
export type ShiftTemplateDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftTemplateSelect<ExtArgs> | null;
    omit?: Prisma.ShiftTemplateOmit<ExtArgs> | null;
    include?: Prisma.ShiftTemplateInclude<ExtArgs> | null;
    where: Prisma.ShiftTemplateWhereUniqueInput;
};
export type ShiftTemplateDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShiftTemplateWhereInput;
    limit?: number;
};
export type ShiftTemplate$schedulesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ShiftScheduleOmit<ExtArgs> | null;
    include?: Prisma.ShiftScheduleInclude<ExtArgs> | null;
    where?: Prisma.ShiftScheduleWhereInput;
    orderBy?: Prisma.ShiftScheduleOrderByWithRelationInput | Prisma.ShiftScheduleOrderByWithRelationInput[];
    cursor?: Prisma.ShiftScheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShiftScheduleScalarFieldEnum | Prisma.ShiftScheduleScalarFieldEnum[];
};
export type ShiftTemplateDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftTemplateSelect<ExtArgs> | null;
    omit?: Prisma.ShiftTemplateOmit<ExtArgs> | null;
    include?: Prisma.ShiftTemplateInclude<ExtArgs> | null;
};
