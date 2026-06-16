import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ShiftScheduleModel = runtime.Types.Result.DefaultSelection<Prisma.$ShiftSchedulePayload>;
export type AggregateShiftSchedule = {
    _count: ShiftScheduleCountAggregateOutputType | null;
    _min: ShiftScheduleMinAggregateOutputType | null;
    _max: ShiftScheduleMaxAggregateOutputType | null;
};
export type ShiftScheduleMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    employeeId: string | null;
    templateId: string | null;
    date: Date | null;
    startTime: Date | null;
    endTime: Date | null;
    note: string | null;
    createdAt: Date | null;
};
export type ShiftScheduleMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    employeeId: string | null;
    templateId: string | null;
    date: Date | null;
    startTime: Date | null;
    endTime: Date | null;
    note: string | null;
    createdAt: Date | null;
};
export type ShiftScheduleCountAggregateOutputType = {
    id: number;
    organizationId: number;
    employeeId: number;
    templateId: number;
    date: number;
    startTime: number;
    endTime: number;
    note: number;
    createdAt: number;
    _all: number;
};
export type ShiftScheduleMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    employeeId?: true;
    templateId?: true;
    date?: true;
    startTime?: true;
    endTime?: true;
    note?: true;
    createdAt?: true;
};
export type ShiftScheduleMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    employeeId?: true;
    templateId?: true;
    date?: true;
    startTime?: true;
    endTime?: true;
    note?: true;
    createdAt?: true;
};
export type ShiftScheduleCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    employeeId?: true;
    templateId?: true;
    date?: true;
    startTime?: true;
    endTime?: true;
    note?: true;
    createdAt?: true;
    _all?: true;
};
export type ShiftScheduleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShiftScheduleWhereInput;
    orderBy?: Prisma.ShiftScheduleOrderByWithRelationInput | Prisma.ShiftScheduleOrderByWithRelationInput[];
    cursor?: Prisma.ShiftScheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ShiftScheduleCountAggregateInputType;
    _min?: ShiftScheduleMinAggregateInputType;
    _max?: ShiftScheduleMaxAggregateInputType;
};
export type GetShiftScheduleAggregateType<T extends ShiftScheduleAggregateArgs> = {
    [P in keyof T & keyof AggregateShiftSchedule]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShiftSchedule[P]> : Prisma.GetScalarType<T[P], AggregateShiftSchedule[P]>;
};
export type ShiftScheduleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShiftScheduleWhereInput;
    orderBy?: Prisma.ShiftScheduleOrderByWithAggregationInput | Prisma.ShiftScheduleOrderByWithAggregationInput[];
    by: Prisma.ShiftScheduleScalarFieldEnum[] | Prisma.ShiftScheduleScalarFieldEnum;
    having?: Prisma.ShiftScheduleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShiftScheduleCountAggregateInputType | true;
    _min?: ShiftScheduleMinAggregateInputType;
    _max?: ShiftScheduleMaxAggregateInputType;
};
export type ShiftScheduleGroupByOutputType = {
    id: string;
    organizationId: string;
    employeeId: string;
    templateId: string | null;
    date: Date;
    startTime: Date | null;
    endTime: Date | null;
    note: string | null;
    createdAt: Date;
    _count: ShiftScheduleCountAggregateOutputType | null;
    _min: ShiftScheduleMinAggregateOutputType | null;
    _max: ShiftScheduleMaxAggregateOutputType | null;
};
export type GetShiftScheduleGroupByPayload<T extends ShiftScheduleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ShiftScheduleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ShiftScheduleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ShiftScheduleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ShiftScheduleGroupByOutputType[P]>;
}>>;
export type ShiftScheduleWhereInput = {
    AND?: Prisma.ShiftScheduleWhereInput | Prisma.ShiftScheduleWhereInput[];
    OR?: Prisma.ShiftScheduleWhereInput[];
    NOT?: Prisma.ShiftScheduleWhereInput | Prisma.ShiftScheduleWhereInput[];
    id?: Prisma.UuidFilter<"ShiftSchedule"> | string;
    organizationId?: Prisma.UuidFilter<"ShiftSchedule"> | string;
    employeeId?: Prisma.UuidFilter<"ShiftSchedule"> | string;
    templateId?: Prisma.UuidNullableFilter<"ShiftSchedule"> | string | null;
    date?: Prisma.DateTimeFilter<"ShiftSchedule"> | Date | string;
    startTime?: Prisma.DateTimeNullableFilter<"ShiftSchedule"> | Date | string | null;
    endTime?: Prisma.DateTimeNullableFilter<"ShiftSchedule"> | Date | string | null;
    note?: Prisma.StringNullableFilter<"ShiftSchedule"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ShiftSchedule"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
    template?: Prisma.XOR<Prisma.ShiftTemplateNullableScalarRelationFilter, Prisma.ShiftTemplateWhereInput> | null;
};
export type ShiftScheduleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    templateId?: Prisma.SortOrderInput | Prisma.SortOrder;
    date?: Prisma.SortOrder;
    startTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    endTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    employee?: Prisma.EmployeeOrderByWithRelationInput;
    template?: Prisma.ShiftTemplateOrderByWithRelationInput;
};
export type ShiftScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    employeeId_date?: Prisma.ShiftScheduleEmployeeIdDateCompoundUniqueInput;
    AND?: Prisma.ShiftScheduleWhereInput | Prisma.ShiftScheduleWhereInput[];
    OR?: Prisma.ShiftScheduleWhereInput[];
    NOT?: Prisma.ShiftScheduleWhereInput | Prisma.ShiftScheduleWhereInput[];
    organizationId?: Prisma.UuidFilter<"ShiftSchedule"> | string;
    employeeId?: Prisma.UuidFilter<"ShiftSchedule"> | string;
    templateId?: Prisma.UuidNullableFilter<"ShiftSchedule"> | string | null;
    date?: Prisma.DateTimeFilter<"ShiftSchedule"> | Date | string;
    startTime?: Prisma.DateTimeNullableFilter<"ShiftSchedule"> | Date | string | null;
    endTime?: Prisma.DateTimeNullableFilter<"ShiftSchedule"> | Date | string | null;
    note?: Prisma.StringNullableFilter<"ShiftSchedule"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ShiftSchedule"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
    template?: Prisma.XOR<Prisma.ShiftTemplateNullableScalarRelationFilter, Prisma.ShiftTemplateWhereInput> | null;
}, "id" | "employeeId_date">;
export type ShiftScheduleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    templateId?: Prisma.SortOrderInput | Prisma.SortOrder;
    date?: Prisma.SortOrder;
    startTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    endTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ShiftScheduleCountOrderByAggregateInput;
    _max?: Prisma.ShiftScheduleMaxOrderByAggregateInput;
    _min?: Prisma.ShiftScheduleMinOrderByAggregateInput;
};
export type ShiftScheduleScalarWhereWithAggregatesInput = {
    AND?: Prisma.ShiftScheduleScalarWhereWithAggregatesInput | Prisma.ShiftScheduleScalarWhereWithAggregatesInput[];
    OR?: Prisma.ShiftScheduleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ShiftScheduleScalarWhereWithAggregatesInput | Prisma.ShiftScheduleScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ShiftSchedule"> | string;
    organizationId?: Prisma.UuidWithAggregatesFilter<"ShiftSchedule"> | string;
    employeeId?: Prisma.UuidWithAggregatesFilter<"ShiftSchedule"> | string;
    templateId?: Prisma.UuidNullableWithAggregatesFilter<"ShiftSchedule"> | string | null;
    date?: Prisma.DateTimeWithAggregatesFilter<"ShiftSchedule"> | Date | string;
    startTime?: Prisma.DateTimeNullableWithAggregatesFilter<"ShiftSchedule"> | Date | string | null;
    endTime?: Prisma.DateTimeNullableWithAggregatesFilter<"ShiftSchedule"> | Date | string | null;
    note?: Prisma.StringNullableWithAggregatesFilter<"ShiftSchedule"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ShiftSchedule"> | Date | string;
};
export type ShiftScheduleCreateInput = {
    id?: string;
    date: Date | string;
    startTime?: Date | string | null;
    endTime?: Date | string | null;
    note?: string | null;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutShiftSchedulesInput;
    employee: Prisma.EmployeeCreateNestedOneWithoutShiftSchedulesInput;
    template?: Prisma.ShiftTemplateCreateNestedOneWithoutSchedulesInput;
};
export type ShiftScheduleUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    employeeId: string;
    templateId?: string | null;
    date: Date | string;
    startTime?: Date | string | null;
    endTime?: Date | string | null;
    note?: string | null;
    createdAt?: Date | string;
};
export type ShiftScheduleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutShiftSchedulesNestedInput;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutShiftSchedulesNestedInput;
    template?: Prisma.ShiftTemplateUpdateOneWithoutSchedulesNestedInput;
};
export type ShiftScheduleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShiftScheduleCreateManyInput = {
    id?: string;
    organizationId: string;
    employeeId: string;
    templateId?: string | null;
    date: Date | string;
    startTime?: Date | string | null;
    endTime?: Date | string | null;
    note?: string | null;
    createdAt?: Date | string;
};
export type ShiftScheduleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShiftScheduleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShiftScheduleListRelationFilter = {
    every?: Prisma.ShiftScheduleWhereInput;
    some?: Prisma.ShiftScheduleWhereInput;
    none?: Prisma.ShiftScheduleWhereInput;
};
export type ShiftScheduleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ShiftScheduleEmployeeIdDateCompoundUniqueInput = {
    employeeId: string;
    date: Date | string;
};
export type ShiftScheduleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShiftScheduleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShiftScheduleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShiftScheduleCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.ShiftScheduleCreateWithoutOrganizationInput, Prisma.ShiftScheduleUncheckedCreateWithoutOrganizationInput> | Prisma.ShiftScheduleCreateWithoutOrganizationInput[] | Prisma.ShiftScheduleUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.ShiftScheduleCreateOrConnectWithoutOrganizationInput | Prisma.ShiftScheduleCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.ShiftScheduleCreateManyOrganizationInputEnvelope;
    connect?: Prisma.ShiftScheduleWhereUniqueInput | Prisma.ShiftScheduleWhereUniqueInput[];
};
export type ShiftScheduleUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.ShiftScheduleCreateWithoutOrganizationInput, Prisma.ShiftScheduleUncheckedCreateWithoutOrganizationInput> | Prisma.ShiftScheduleCreateWithoutOrganizationInput[] | Prisma.ShiftScheduleUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.ShiftScheduleCreateOrConnectWithoutOrganizationInput | Prisma.ShiftScheduleCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.ShiftScheduleCreateManyOrganizationInputEnvelope;
    connect?: Prisma.ShiftScheduleWhereUniqueInput | Prisma.ShiftScheduleWhereUniqueInput[];
};
export type ShiftScheduleUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.ShiftScheduleCreateWithoutOrganizationInput, Prisma.ShiftScheduleUncheckedCreateWithoutOrganizationInput> | Prisma.ShiftScheduleCreateWithoutOrganizationInput[] | Prisma.ShiftScheduleUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.ShiftScheduleCreateOrConnectWithoutOrganizationInput | Prisma.ShiftScheduleCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.ShiftScheduleUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.ShiftScheduleUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.ShiftScheduleCreateManyOrganizationInputEnvelope;
    set?: Prisma.ShiftScheduleWhereUniqueInput | Prisma.ShiftScheduleWhereUniqueInput[];
    disconnect?: Prisma.ShiftScheduleWhereUniqueInput | Prisma.ShiftScheduleWhereUniqueInput[];
    delete?: Prisma.ShiftScheduleWhereUniqueInput | Prisma.ShiftScheduleWhereUniqueInput[];
    connect?: Prisma.ShiftScheduleWhereUniqueInput | Prisma.ShiftScheduleWhereUniqueInput[];
    update?: Prisma.ShiftScheduleUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.ShiftScheduleUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.ShiftScheduleUpdateManyWithWhereWithoutOrganizationInput | Prisma.ShiftScheduleUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.ShiftScheduleScalarWhereInput | Prisma.ShiftScheduleScalarWhereInput[];
};
export type ShiftScheduleUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.ShiftScheduleCreateWithoutOrganizationInput, Prisma.ShiftScheduleUncheckedCreateWithoutOrganizationInput> | Prisma.ShiftScheduleCreateWithoutOrganizationInput[] | Prisma.ShiftScheduleUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.ShiftScheduleCreateOrConnectWithoutOrganizationInput | Prisma.ShiftScheduleCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.ShiftScheduleUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.ShiftScheduleUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.ShiftScheduleCreateManyOrganizationInputEnvelope;
    set?: Prisma.ShiftScheduleWhereUniqueInput | Prisma.ShiftScheduleWhereUniqueInput[];
    disconnect?: Prisma.ShiftScheduleWhereUniqueInput | Prisma.ShiftScheduleWhereUniqueInput[];
    delete?: Prisma.ShiftScheduleWhereUniqueInput | Prisma.ShiftScheduleWhereUniqueInput[];
    connect?: Prisma.ShiftScheduleWhereUniqueInput | Prisma.ShiftScheduleWhereUniqueInput[];
    update?: Prisma.ShiftScheduleUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.ShiftScheduleUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.ShiftScheduleUpdateManyWithWhereWithoutOrganizationInput | Prisma.ShiftScheduleUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.ShiftScheduleScalarWhereInput | Prisma.ShiftScheduleScalarWhereInput[];
};
export type ShiftScheduleCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.ShiftScheduleCreateWithoutEmployeeInput, Prisma.ShiftScheduleUncheckedCreateWithoutEmployeeInput> | Prisma.ShiftScheduleCreateWithoutEmployeeInput[] | Prisma.ShiftScheduleUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.ShiftScheduleCreateOrConnectWithoutEmployeeInput | Prisma.ShiftScheduleCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.ShiftScheduleCreateManyEmployeeInputEnvelope;
    connect?: Prisma.ShiftScheduleWhereUniqueInput | Prisma.ShiftScheduleWhereUniqueInput[];
};
export type ShiftScheduleUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.ShiftScheduleCreateWithoutEmployeeInput, Prisma.ShiftScheduleUncheckedCreateWithoutEmployeeInput> | Prisma.ShiftScheduleCreateWithoutEmployeeInput[] | Prisma.ShiftScheduleUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.ShiftScheduleCreateOrConnectWithoutEmployeeInput | Prisma.ShiftScheduleCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.ShiftScheduleCreateManyEmployeeInputEnvelope;
    connect?: Prisma.ShiftScheduleWhereUniqueInput | Prisma.ShiftScheduleWhereUniqueInput[];
};
export type ShiftScheduleUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.ShiftScheduleCreateWithoutEmployeeInput, Prisma.ShiftScheduleUncheckedCreateWithoutEmployeeInput> | Prisma.ShiftScheduleCreateWithoutEmployeeInput[] | Prisma.ShiftScheduleUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.ShiftScheduleCreateOrConnectWithoutEmployeeInput | Prisma.ShiftScheduleCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.ShiftScheduleUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.ShiftScheduleUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.ShiftScheduleCreateManyEmployeeInputEnvelope;
    set?: Prisma.ShiftScheduleWhereUniqueInput | Prisma.ShiftScheduleWhereUniqueInput[];
    disconnect?: Prisma.ShiftScheduleWhereUniqueInput | Prisma.ShiftScheduleWhereUniqueInput[];
    delete?: Prisma.ShiftScheduleWhereUniqueInput | Prisma.ShiftScheduleWhereUniqueInput[];
    connect?: Prisma.ShiftScheduleWhereUniqueInput | Prisma.ShiftScheduleWhereUniqueInput[];
    update?: Prisma.ShiftScheduleUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.ShiftScheduleUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.ShiftScheduleUpdateManyWithWhereWithoutEmployeeInput | Prisma.ShiftScheduleUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.ShiftScheduleScalarWhereInput | Prisma.ShiftScheduleScalarWhereInput[];
};
export type ShiftScheduleUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.ShiftScheduleCreateWithoutEmployeeInput, Prisma.ShiftScheduleUncheckedCreateWithoutEmployeeInput> | Prisma.ShiftScheduleCreateWithoutEmployeeInput[] | Prisma.ShiftScheduleUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.ShiftScheduleCreateOrConnectWithoutEmployeeInput | Prisma.ShiftScheduleCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.ShiftScheduleUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.ShiftScheduleUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.ShiftScheduleCreateManyEmployeeInputEnvelope;
    set?: Prisma.ShiftScheduleWhereUniqueInput | Prisma.ShiftScheduleWhereUniqueInput[];
    disconnect?: Prisma.ShiftScheduleWhereUniqueInput | Prisma.ShiftScheduleWhereUniqueInput[];
    delete?: Prisma.ShiftScheduleWhereUniqueInput | Prisma.ShiftScheduleWhereUniqueInput[];
    connect?: Prisma.ShiftScheduleWhereUniqueInput | Prisma.ShiftScheduleWhereUniqueInput[];
    update?: Prisma.ShiftScheduleUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.ShiftScheduleUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.ShiftScheduleUpdateManyWithWhereWithoutEmployeeInput | Prisma.ShiftScheduleUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.ShiftScheduleScalarWhereInput | Prisma.ShiftScheduleScalarWhereInput[];
};
export type ShiftScheduleCreateNestedManyWithoutTemplateInput = {
    create?: Prisma.XOR<Prisma.ShiftScheduleCreateWithoutTemplateInput, Prisma.ShiftScheduleUncheckedCreateWithoutTemplateInput> | Prisma.ShiftScheduleCreateWithoutTemplateInput[] | Prisma.ShiftScheduleUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.ShiftScheduleCreateOrConnectWithoutTemplateInput | Prisma.ShiftScheduleCreateOrConnectWithoutTemplateInput[];
    createMany?: Prisma.ShiftScheduleCreateManyTemplateInputEnvelope;
    connect?: Prisma.ShiftScheduleWhereUniqueInput | Prisma.ShiftScheduleWhereUniqueInput[];
};
export type ShiftScheduleUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: Prisma.XOR<Prisma.ShiftScheduleCreateWithoutTemplateInput, Prisma.ShiftScheduleUncheckedCreateWithoutTemplateInput> | Prisma.ShiftScheduleCreateWithoutTemplateInput[] | Prisma.ShiftScheduleUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.ShiftScheduleCreateOrConnectWithoutTemplateInput | Prisma.ShiftScheduleCreateOrConnectWithoutTemplateInput[];
    createMany?: Prisma.ShiftScheduleCreateManyTemplateInputEnvelope;
    connect?: Prisma.ShiftScheduleWhereUniqueInput | Prisma.ShiftScheduleWhereUniqueInput[];
};
export type ShiftScheduleUpdateManyWithoutTemplateNestedInput = {
    create?: Prisma.XOR<Prisma.ShiftScheduleCreateWithoutTemplateInput, Prisma.ShiftScheduleUncheckedCreateWithoutTemplateInput> | Prisma.ShiftScheduleCreateWithoutTemplateInput[] | Prisma.ShiftScheduleUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.ShiftScheduleCreateOrConnectWithoutTemplateInput | Prisma.ShiftScheduleCreateOrConnectWithoutTemplateInput[];
    upsert?: Prisma.ShiftScheduleUpsertWithWhereUniqueWithoutTemplateInput | Prisma.ShiftScheduleUpsertWithWhereUniqueWithoutTemplateInput[];
    createMany?: Prisma.ShiftScheduleCreateManyTemplateInputEnvelope;
    set?: Prisma.ShiftScheduleWhereUniqueInput | Prisma.ShiftScheduleWhereUniqueInput[];
    disconnect?: Prisma.ShiftScheduleWhereUniqueInput | Prisma.ShiftScheduleWhereUniqueInput[];
    delete?: Prisma.ShiftScheduleWhereUniqueInput | Prisma.ShiftScheduleWhereUniqueInput[];
    connect?: Prisma.ShiftScheduleWhereUniqueInput | Prisma.ShiftScheduleWhereUniqueInput[];
    update?: Prisma.ShiftScheduleUpdateWithWhereUniqueWithoutTemplateInput | Prisma.ShiftScheduleUpdateWithWhereUniqueWithoutTemplateInput[];
    updateMany?: Prisma.ShiftScheduleUpdateManyWithWhereWithoutTemplateInput | Prisma.ShiftScheduleUpdateManyWithWhereWithoutTemplateInput[];
    deleteMany?: Prisma.ShiftScheduleScalarWhereInput | Prisma.ShiftScheduleScalarWhereInput[];
};
export type ShiftScheduleUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: Prisma.XOR<Prisma.ShiftScheduleCreateWithoutTemplateInput, Prisma.ShiftScheduleUncheckedCreateWithoutTemplateInput> | Prisma.ShiftScheduleCreateWithoutTemplateInput[] | Prisma.ShiftScheduleUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.ShiftScheduleCreateOrConnectWithoutTemplateInput | Prisma.ShiftScheduleCreateOrConnectWithoutTemplateInput[];
    upsert?: Prisma.ShiftScheduleUpsertWithWhereUniqueWithoutTemplateInput | Prisma.ShiftScheduleUpsertWithWhereUniqueWithoutTemplateInput[];
    createMany?: Prisma.ShiftScheduleCreateManyTemplateInputEnvelope;
    set?: Prisma.ShiftScheduleWhereUniqueInput | Prisma.ShiftScheduleWhereUniqueInput[];
    disconnect?: Prisma.ShiftScheduleWhereUniqueInput | Prisma.ShiftScheduleWhereUniqueInput[];
    delete?: Prisma.ShiftScheduleWhereUniqueInput | Prisma.ShiftScheduleWhereUniqueInput[];
    connect?: Prisma.ShiftScheduleWhereUniqueInput | Prisma.ShiftScheduleWhereUniqueInput[];
    update?: Prisma.ShiftScheduleUpdateWithWhereUniqueWithoutTemplateInput | Prisma.ShiftScheduleUpdateWithWhereUniqueWithoutTemplateInput[];
    updateMany?: Prisma.ShiftScheduleUpdateManyWithWhereWithoutTemplateInput | Prisma.ShiftScheduleUpdateManyWithWhereWithoutTemplateInput[];
    deleteMany?: Prisma.ShiftScheduleScalarWhereInput | Prisma.ShiftScheduleScalarWhereInput[];
};
export type ShiftScheduleCreateWithoutOrganizationInput = {
    id?: string;
    date: Date | string;
    startTime?: Date | string | null;
    endTime?: Date | string | null;
    note?: string | null;
    createdAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutShiftSchedulesInput;
    template?: Prisma.ShiftTemplateCreateNestedOneWithoutSchedulesInput;
};
export type ShiftScheduleUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    employeeId: string;
    templateId?: string | null;
    date: Date | string;
    startTime?: Date | string | null;
    endTime?: Date | string | null;
    note?: string | null;
    createdAt?: Date | string;
};
export type ShiftScheduleCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.ShiftScheduleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShiftScheduleCreateWithoutOrganizationInput, Prisma.ShiftScheduleUncheckedCreateWithoutOrganizationInput>;
};
export type ShiftScheduleCreateManyOrganizationInputEnvelope = {
    data: Prisma.ShiftScheduleCreateManyOrganizationInput | Prisma.ShiftScheduleCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type ShiftScheduleUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.ShiftScheduleWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShiftScheduleUpdateWithoutOrganizationInput, Prisma.ShiftScheduleUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.ShiftScheduleCreateWithoutOrganizationInput, Prisma.ShiftScheduleUncheckedCreateWithoutOrganizationInput>;
};
export type ShiftScheduleUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.ShiftScheduleWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShiftScheduleUpdateWithoutOrganizationInput, Prisma.ShiftScheduleUncheckedUpdateWithoutOrganizationInput>;
};
export type ShiftScheduleUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.ShiftScheduleScalarWhereInput;
    data: Prisma.XOR<Prisma.ShiftScheduleUpdateManyMutationInput, Prisma.ShiftScheduleUncheckedUpdateManyWithoutOrganizationInput>;
};
export type ShiftScheduleScalarWhereInput = {
    AND?: Prisma.ShiftScheduleScalarWhereInput | Prisma.ShiftScheduleScalarWhereInput[];
    OR?: Prisma.ShiftScheduleScalarWhereInput[];
    NOT?: Prisma.ShiftScheduleScalarWhereInput | Prisma.ShiftScheduleScalarWhereInput[];
    id?: Prisma.UuidFilter<"ShiftSchedule"> | string;
    organizationId?: Prisma.UuidFilter<"ShiftSchedule"> | string;
    employeeId?: Prisma.UuidFilter<"ShiftSchedule"> | string;
    templateId?: Prisma.UuidNullableFilter<"ShiftSchedule"> | string | null;
    date?: Prisma.DateTimeFilter<"ShiftSchedule"> | Date | string;
    startTime?: Prisma.DateTimeNullableFilter<"ShiftSchedule"> | Date | string | null;
    endTime?: Prisma.DateTimeNullableFilter<"ShiftSchedule"> | Date | string | null;
    note?: Prisma.StringNullableFilter<"ShiftSchedule"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ShiftSchedule"> | Date | string;
};
export type ShiftScheduleCreateWithoutEmployeeInput = {
    id?: string;
    date: Date | string;
    startTime?: Date | string | null;
    endTime?: Date | string | null;
    note?: string | null;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutShiftSchedulesInput;
    template?: Prisma.ShiftTemplateCreateNestedOneWithoutSchedulesInput;
};
export type ShiftScheduleUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    organizationId: string;
    templateId?: string | null;
    date: Date | string;
    startTime?: Date | string | null;
    endTime?: Date | string | null;
    note?: string | null;
    createdAt?: Date | string;
};
export type ShiftScheduleCreateOrConnectWithoutEmployeeInput = {
    where: Prisma.ShiftScheduleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShiftScheduleCreateWithoutEmployeeInput, Prisma.ShiftScheduleUncheckedCreateWithoutEmployeeInput>;
};
export type ShiftScheduleCreateManyEmployeeInputEnvelope = {
    data: Prisma.ShiftScheduleCreateManyEmployeeInput | Prisma.ShiftScheduleCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
};
export type ShiftScheduleUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.ShiftScheduleWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShiftScheduleUpdateWithoutEmployeeInput, Prisma.ShiftScheduleUncheckedUpdateWithoutEmployeeInput>;
    create: Prisma.XOR<Prisma.ShiftScheduleCreateWithoutEmployeeInput, Prisma.ShiftScheduleUncheckedCreateWithoutEmployeeInput>;
};
export type ShiftScheduleUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.ShiftScheduleWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShiftScheduleUpdateWithoutEmployeeInput, Prisma.ShiftScheduleUncheckedUpdateWithoutEmployeeInput>;
};
export type ShiftScheduleUpdateManyWithWhereWithoutEmployeeInput = {
    where: Prisma.ShiftScheduleScalarWhereInput;
    data: Prisma.XOR<Prisma.ShiftScheduleUpdateManyMutationInput, Prisma.ShiftScheduleUncheckedUpdateManyWithoutEmployeeInput>;
};
export type ShiftScheduleCreateWithoutTemplateInput = {
    id?: string;
    date: Date | string;
    startTime?: Date | string | null;
    endTime?: Date | string | null;
    note?: string | null;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutShiftSchedulesInput;
    employee: Prisma.EmployeeCreateNestedOneWithoutShiftSchedulesInput;
};
export type ShiftScheduleUncheckedCreateWithoutTemplateInput = {
    id?: string;
    organizationId: string;
    employeeId: string;
    date: Date | string;
    startTime?: Date | string | null;
    endTime?: Date | string | null;
    note?: string | null;
    createdAt?: Date | string;
};
export type ShiftScheduleCreateOrConnectWithoutTemplateInput = {
    where: Prisma.ShiftScheduleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShiftScheduleCreateWithoutTemplateInput, Prisma.ShiftScheduleUncheckedCreateWithoutTemplateInput>;
};
export type ShiftScheduleCreateManyTemplateInputEnvelope = {
    data: Prisma.ShiftScheduleCreateManyTemplateInput | Prisma.ShiftScheduleCreateManyTemplateInput[];
    skipDuplicates?: boolean;
};
export type ShiftScheduleUpsertWithWhereUniqueWithoutTemplateInput = {
    where: Prisma.ShiftScheduleWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShiftScheduleUpdateWithoutTemplateInput, Prisma.ShiftScheduleUncheckedUpdateWithoutTemplateInput>;
    create: Prisma.XOR<Prisma.ShiftScheduleCreateWithoutTemplateInput, Prisma.ShiftScheduleUncheckedCreateWithoutTemplateInput>;
};
export type ShiftScheduleUpdateWithWhereUniqueWithoutTemplateInput = {
    where: Prisma.ShiftScheduleWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShiftScheduleUpdateWithoutTemplateInput, Prisma.ShiftScheduleUncheckedUpdateWithoutTemplateInput>;
};
export type ShiftScheduleUpdateManyWithWhereWithoutTemplateInput = {
    where: Prisma.ShiftScheduleScalarWhereInput;
    data: Prisma.XOR<Prisma.ShiftScheduleUpdateManyMutationInput, Prisma.ShiftScheduleUncheckedUpdateManyWithoutTemplateInput>;
};
export type ShiftScheduleCreateManyOrganizationInput = {
    id?: string;
    employeeId: string;
    templateId?: string | null;
    date: Date | string;
    startTime?: Date | string | null;
    endTime?: Date | string | null;
    note?: string | null;
    createdAt?: Date | string;
};
export type ShiftScheduleUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutShiftSchedulesNestedInput;
    template?: Prisma.ShiftTemplateUpdateOneWithoutSchedulesNestedInput;
};
export type ShiftScheduleUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShiftScheduleUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShiftScheduleCreateManyEmployeeInput = {
    id?: string;
    organizationId: string;
    templateId?: string | null;
    date: Date | string;
    startTime?: Date | string | null;
    endTime?: Date | string | null;
    note?: string | null;
    createdAt?: Date | string;
};
export type ShiftScheduleUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutShiftSchedulesNestedInput;
    template?: Prisma.ShiftTemplateUpdateOneWithoutSchedulesNestedInput;
};
export type ShiftScheduleUncheckedUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShiftScheduleUncheckedUpdateManyWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShiftScheduleCreateManyTemplateInput = {
    id?: string;
    organizationId: string;
    employeeId: string;
    date: Date | string;
    startTime?: Date | string | null;
    endTime?: Date | string | null;
    note?: string | null;
    createdAt?: Date | string;
};
export type ShiftScheduleUpdateWithoutTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutShiftSchedulesNestedInput;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutShiftSchedulesNestedInput;
};
export type ShiftScheduleUncheckedUpdateWithoutTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShiftScheduleUncheckedUpdateManyWithoutTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShiftScheduleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    employeeId?: boolean;
    templateId?: boolean;
    date?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    note?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    template?: boolean | Prisma.ShiftSchedule$templateArgs<ExtArgs>;
}, ExtArgs["result"]["shiftSchedule"]>;
export type ShiftScheduleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    employeeId?: boolean;
    templateId?: boolean;
    date?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    note?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    template?: boolean | Prisma.ShiftSchedule$templateArgs<ExtArgs>;
}, ExtArgs["result"]["shiftSchedule"]>;
export type ShiftScheduleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    employeeId?: boolean;
    templateId?: boolean;
    date?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    note?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    template?: boolean | Prisma.ShiftSchedule$templateArgs<ExtArgs>;
}, ExtArgs["result"]["shiftSchedule"]>;
export type ShiftScheduleSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    employeeId?: boolean;
    templateId?: boolean;
    date?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    note?: boolean;
    createdAt?: boolean;
};
export type ShiftScheduleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "employeeId" | "templateId" | "date" | "startTime" | "endTime" | "note" | "createdAt", ExtArgs["result"]["shiftSchedule"]>;
export type ShiftScheduleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    template?: boolean | Prisma.ShiftSchedule$templateArgs<ExtArgs>;
};
export type ShiftScheduleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    template?: boolean | Prisma.ShiftSchedule$templateArgs<ExtArgs>;
};
export type ShiftScheduleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    template?: boolean | Prisma.ShiftSchedule$templateArgs<ExtArgs>;
};
export type $ShiftSchedulePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ShiftSchedule";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        employee: Prisma.$EmployeePayload<ExtArgs>;
        template: Prisma.$ShiftTemplatePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        employeeId: string;
        templateId: string | null;
        date: Date;
        startTime: Date | null;
        endTime: Date | null;
        note: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["shiftSchedule"]>;
    composites: {};
};
export type ShiftScheduleGetPayload<S extends boolean | null | undefined | ShiftScheduleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ShiftSchedulePayload, S>;
export type ShiftScheduleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ShiftScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShiftScheduleCountAggregateInputType | true;
};
export interface ShiftScheduleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ShiftSchedule'];
        meta: {
            name: 'ShiftSchedule';
        };
    };
    findUnique<T extends ShiftScheduleFindUniqueArgs>(args: Prisma.SelectSubset<T, ShiftScheduleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ShiftScheduleClient<runtime.Types.Result.GetResult<Prisma.$ShiftSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ShiftScheduleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ShiftScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShiftScheduleClient<runtime.Types.Result.GetResult<Prisma.$ShiftSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ShiftScheduleFindFirstArgs>(args?: Prisma.SelectSubset<T, ShiftScheduleFindFirstArgs<ExtArgs>>): Prisma.Prisma__ShiftScheduleClient<runtime.Types.Result.GetResult<Prisma.$ShiftSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ShiftScheduleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ShiftScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShiftScheduleClient<runtime.Types.Result.GetResult<Prisma.$ShiftSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ShiftScheduleFindManyArgs>(args?: Prisma.SelectSubset<T, ShiftScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShiftSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ShiftScheduleCreateArgs>(args: Prisma.SelectSubset<T, ShiftScheduleCreateArgs<ExtArgs>>): Prisma.Prisma__ShiftScheduleClient<runtime.Types.Result.GetResult<Prisma.$ShiftSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ShiftScheduleCreateManyArgs>(args?: Prisma.SelectSubset<T, ShiftScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ShiftScheduleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ShiftScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShiftSchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ShiftScheduleDeleteArgs>(args: Prisma.SelectSubset<T, ShiftScheduleDeleteArgs<ExtArgs>>): Prisma.Prisma__ShiftScheduleClient<runtime.Types.Result.GetResult<Prisma.$ShiftSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ShiftScheduleUpdateArgs>(args: Prisma.SelectSubset<T, ShiftScheduleUpdateArgs<ExtArgs>>): Prisma.Prisma__ShiftScheduleClient<runtime.Types.Result.GetResult<Prisma.$ShiftSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ShiftScheduleDeleteManyArgs>(args?: Prisma.SelectSubset<T, ShiftScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ShiftScheduleUpdateManyArgs>(args: Prisma.SelectSubset<T, ShiftScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ShiftScheduleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ShiftScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShiftSchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ShiftScheduleUpsertArgs>(args: Prisma.SelectSubset<T, ShiftScheduleUpsertArgs<ExtArgs>>): Prisma.Prisma__ShiftScheduleClient<runtime.Types.Result.GetResult<Prisma.$ShiftSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ShiftScheduleCountArgs>(args?: Prisma.Subset<T, ShiftScheduleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ShiftScheduleCountAggregateOutputType> : number>;
    aggregate<T extends ShiftScheduleAggregateArgs>(args: Prisma.Subset<T, ShiftScheduleAggregateArgs>): Prisma.PrismaPromise<GetShiftScheduleAggregateType<T>>;
    groupBy<T extends ShiftScheduleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ShiftScheduleGroupByArgs['orderBy'];
    } : {
        orderBy?: ShiftScheduleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ShiftScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShiftScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ShiftScheduleFieldRefs;
}
export interface Prisma__ShiftScheduleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    employee<T extends Prisma.EmployeeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmployeeDefaultArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    template<T extends Prisma.ShiftSchedule$templateArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShiftSchedule$templateArgs<ExtArgs>>): Prisma.Prisma__ShiftTemplateClient<runtime.Types.Result.GetResult<Prisma.$ShiftTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ShiftScheduleFieldRefs {
    readonly id: Prisma.FieldRef<"ShiftSchedule", 'String'>;
    readonly organizationId: Prisma.FieldRef<"ShiftSchedule", 'String'>;
    readonly employeeId: Prisma.FieldRef<"ShiftSchedule", 'String'>;
    readonly templateId: Prisma.FieldRef<"ShiftSchedule", 'String'>;
    readonly date: Prisma.FieldRef<"ShiftSchedule", 'DateTime'>;
    readonly startTime: Prisma.FieldRef<"ShiftSchedule", 'DateTime'>;
    readonly endTime: Prisma.FieldRef<"ShiftSchedule", 'DateTime'>;
    readonly note: Prisma.FieldRef<"ShiftSchedule", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ShiftSchedule", 'DateTime'>;
}
export type ShiftScheduleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ShiftScheduleOmit<ExtArgs> | null;
    include?: Prisma.ShiftScheduleInclude<ExtArgs> | null;
    where: Prisma.ShiftScheduleWhereUniqueInput;
};
export type ShiftScheduleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ShiftScheduleOmit<ExtArgs> | null;
    include?: Prisma.ShiftScheduleInclude<ExtArgs> | null;
    where: Prisma.ShiftScheduleWhereUniqueInput;
};
export type ShiftScheduleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ShiftScheduleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ShiftScheduleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ShiftScheduleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ShiftScheduleOmit<ExtArgs> | null;
    include?: Prisma.ShiftScheduleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShiftScheduleCreateInput, Prisma.ShiftScheduleUncheckedCreateInput>;
};
export type ShiftScheduleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ShiftScheduleCreateManyInput | Prisma.ShiftScheduleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ShiftScheduleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftScheduleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ShiftScheduleOmit<ExtArgs> | null;
    data: Prisma.ShiftScheduleCreateManyInput | Prisma.ShiftScheduleCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ShiftScheduleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ShiftScheduleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ShiftScheduleOmit<ExtArgs> | null;
    include?: Prisma.ShiftScheduleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShiftScheduleUpdateInput, Prisma.ShiftScheduleUncheckedUpdateInput>;
    where: Prisma.ShiftScheduleWhereUniqueInput;
};
export type ShiftScheduleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ShiftScheduleUpdateManyMutationInput, Prisma.ShiftScheduleUncheckedUpdateManyInput>;
    where?: Prisma.ShiftScheduleWhereInput;
    limit?: number;
};
export type ShiftScheduleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftScheduleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ShiftScheduleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShiftScheduleUpdateManyMutationInput, Prisma.ShiftScheduleUncheckedUpdateManyInput>;
    where?: Prisma.ShiftScheduleWhereInput;
    limit?: number;
    include?: Prisma.ShiftScheduleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ShiftScheduleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ShiftScheduleOmit<ExtArgs> | null;
    include?: Prisma.ShiftScheduleInclude<ExtArgs> | null;
    where: Prisma.ShiftScheduleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShiftScheduleCreateInput, Prisma.ShiftScheduleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ShiftScheduleUpdateInput, Prisma.ShiftScheduleUncheckedUpdateInput>;
};
export type ShiftScheduleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ShiftScheduleOmit<ExtArgs> | null;
    include?: Prisma.ShiftScheduleInclude<ExtArgs> | null;
    where: Prisma.ShiftScheduleWhereUniqueInput;
};
export type ShiftScheduleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShiftScheduleWhereInput;
    limit?: number;
};
export type ShiftSchedule$templateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftTemplateSelect<ExtArgs> | null;
    omit?: Prisma.ShiftTemplateOmit<ExtArgs> | null;
    include?: Prisma.ShiftTemplateInclude<ExtArgs> | null;
    where?: Prisma.ShiftTemplateWhereInput;
};
export type ShiftScheduleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShiftScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ShiftScheduleOmit<ExtArgs> | null;
    include?: Prisma.ShiftScheduleInclude<ExtArgs> | null;
};
