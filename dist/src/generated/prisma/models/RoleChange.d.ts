import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RoleChangeModel = runtime.Types.Result.DefaultSelection<Prisma.$RoleChangePayload>;
export type AggregateRoleChange = {
    _count: RoleChangeCountAggregateOutputType | null;
    _min: RoleChangeMinAggregateOutputType | null;
    _max: RoleChangeMaxAggregateOutputType | null;
};
export type RoleChangeMinAggregateOutputType = {
    id: string | null;
    employeeId: string | null;
    changedBy: string | null;
    field: string | null;
    oldValue: string | null;
    newValue: string | null;
    effectiveDate: Date | null;
    reason: string | null;
    createdAt: Date | null;
};
export type RoleChangeMaxAggregateOutputType = {
    id: string | null;
    employeeId: string | null;
    changedBy: string | null;
    field: string | null;
    oldValue: string | null;
    newValue: string | null;
    effectiveDate: Date | null;
    reason: string | null;
    createdAt: Date | null;
};
export type RoleChangeCountAggregateOutputType = {
    id: number;
    employeeId: number;
    changedBy: number;
    field: number;
    oldValue: number;
    newValue: number;
    effectiveDate: number;
    reason: number;
    createdAt: number;
    _all: number;
};
export type RoleChangeMinAggregateInputType = {
    id?: true;
    employeeId?: true;
    changedBy?: true;
    field?: true;
    oldValue?: true;
    newValue?: true;
    effectiveDate?: true;
    reason?: true;
    createdAt?: true;
};
export type RoleChangeMaxAggregateInputType = {
    id?: true;
    employeeId?: true;
    changedBy?: true;
    field?: true;
    oldValue?: true;
    newValue?: true;
    effectiveDate?: true;
    reason?: true;
    createdAt?: true;
};
export type RoleChangeCountAggregateInputType = {
    id?: true;
    employeeId?: true;
    changedBy?: true;
    field?: true;
    oldValue?: true;
    newValue?: true;
    effectiveDate?: true;
    reason?: true;
    createdAt?: true;
    _all?: true;
};
export type RoleChangeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoleChangeWhereInput;
    orderBy?: Prisma.RoleChangeOrderByWithRelationInput | Prisma.RoleChangeOrderByWithRelationInput[];
    cursor?: Prisma.RoleChangeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RoleChangeCountAggregateInputType;
    _min?: RoleChangeMinAggregateInputType;
    _max?: RoleChangeMaxAggregateInputType;
};
export type GetRoleChangeAggregateType<T extends RoleChangeAggregateArgs> = {
    [P in keyof T & keyof AggregateRoleChange]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRoleChange[P]> : Prisma.GetScalarType<T[P], AggregateRoleChange[P]>;
};
export type RoleChangeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoleChangeWhereInput;
    orderBy?: Prisma.RoleChangeOrderByWithAggregationInput | Prisma.RoleChangeOrderByWithAggregationInput[];
    by: Prisma.RoleChangeScalarFieldEnum[] | Prisma.RoleChangeScalarFieldEnum;
    having?: Prisma.RoleChangeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RoleChangeCountAggregateInputType | true;
    _min?: RoleChangeMinAggregateInputType;
    _max?: RoleChangeMaxAggregateInputType;
};
export type RoleChangeGroupByOutputType = {
    id: string;
    employeeId: string;
    changedBy: string | null;
    field: string;
    oldValue: string | null;
    newValue: string | null;
    effectiveDate: Date | null;
    reason: string | null;
    createdAt: Date;
    _count: RoleChangeCountAggregateOutputType | null;
    _min: RoleChangeMinAggregateOutputType | null;
    _max: RoleChangeMaxAggregateOutputType | null;
};
export type GetRoleChangeGroupByPayload<T extends RoleChangeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RoleChangeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RoleChangeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RoleChangeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RoleChangeGroupByOutputType[P]>;
}>>;
export type RoleChangeWhereInput = {
    AND?: Prisma.RoleChangeWhereInput | Prisma.RoleChangeWhereInput[];
    OR?: Prisma.RoleChangeWhereInput[];
    NOT?: Prisma.RoleChangeWhereInput | Prisma.RoleChangeWhereInput[];
    id?: Prisma.UuidFilter<"RoleChange"> | string;
    employeeId?: Prisma.UuidFilter<"RoleChange"> | string;
    changedBy?: Prisma.UuidNullableFilter<"RoleChange"> | string | null;
    field?: Prisma.StringFilter<"RoleChange"> | string;
    oldValue?: Prisma.StringNullableFilter<"RoleChange"> | string | null;
    newValue?: Prisma.StringNullableFilter<"RoleChange"> | string | null;
    effectiveDate?: Prisma.DateTimeNullableFilter<"RoleChange"> | Date | string | null;
    reason?: Prisma.StringNullableFilter<"RoleChange"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"RoleChange"> | Date | string;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
};
export type RoleChangeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    changedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    field?: Prisma.SortOrder;
    oldValue?: Prisma.SortOrderInput | Prisma.SortOrder;
    newValue?: Prisma.SortOrderInput | Prisma.SortOrder;
    effectiveDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    employee?: Prisma.EmployeeOrderByWithRelationInput;
};
export type RoleChangeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.RoleChangeWhereInput | Prisma.RoleChangeWhereInput[];
    OR?: Prisma.RoleChangeWhereInput[];
    NOT?: Prisma.RoleChangeWhereInput | Prisma.RoleChangeWhereInput[];
    employeeId?: Prisma.UuidFilter<"RoleChange"> | string;
    changedBy?: Prisma.UuidNullableFilter<"RoleChange"> | string | null;
    field?: Prisma.StringFilter<"RoleChange"> | string;
    oldValue?: Prisma.StringNullableFilter<"RoleChange"> | string | null;
    newValue?: Prisma.StringNullableFilter<"RoleChange"> | string | null;
    effectiveDate?: Prisma.DateTimeNullableFilter<"RoleChange"> | Date | string | null;
    reason?: Prisma.StringNullableFilter<"RoleChange"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"RoleChange"> | Date | string;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
}, "id">;
export type RoleChangeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    changedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    field?: Prisma.SortOrder;
    oldValue?: Prisma.SortOrderInput | Prisma.SortOrder;
    newValue?: Prisma.SortOrderInput | Prisma.SortOrder;
    effectiveDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.RoleChangeCountOrderByAggregateInput;
    _max?: Prisma.RoleChangeMaxOrderByAggregateInput;
    _min?: Prisma.RoleChangeMinOrderByAggregateInput;
};
export type RoleChangeScalarWhereWithAggregatesInput = {
    AND?: Prisma.RoleChangeScalarWhereWithAggregatesInput | Prisma.RoleChangeScalarWhereWithAggregatesInput[];
    OR?: Prisma.RoleChangeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RoleChangeScalarWhereWithAggregatesInput | Prisma.RoleChangeScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"RoleChange"> | string;
    employeeId?: Prisma.UuidWithAggregatesFilter<"RoleChange"> | string;
    changedBy?: Prisma.UuidNullableWithAggregatesFilter<"RoleChange"> | string | null;
    field?: Prisma.StringWithAggregatesFilter<"RoleChange"> | string;
    oldValue?: Prisma.StringNullableWithAggregatesFilter<"RoleChange"> | string | null;
    newValue?: Prisma.StringNullableWithAggregatesFilter<"RoleChange"> | string | null;
    effectiveDate?: Prisma.DateTimeNullableWithAggregatesFilter<"RoleChange"> | Date | string | null;
    reason?: Prisma.StringNullableWithAggregatesFilter<"RoleChange"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"RoleChange"> | Date | string;
};
export type RoleChangeCreateInput = {
    id?: string;
    changedBy?: string | null;
    field: string;
    oldValue?: string | null;
    newValue?: string | null;
    effectiveDate?: Date | string | null;
    reason?: string | null;
    createdAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutRoleChangesInput;
};
export type RoleChangeUncheckedCreateInput = {
    id?: string;
    employeeId: string;
    changedBy?: string | null;
    field: string;
    oldValue?: string | null;
    newValue?: string | null;
    effectiveDate?: Date | string | null;
    reason?: string | null;
    createdAt?: Date | string;
};
export type RoleChangeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    changedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    field?: Prisma.StringFieldUpdateOperationsInput | string;
    oldValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    newValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutRoleChangesNestedInput;
};
export type RoleChangeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    changedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    field?: Prisma.StringFieldUpdateOperationsInput | string;
    oldValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    newValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoleChangeCreateManyInput = {
    id?: string;
    employeeId: string;
    changedBy?: string | null;
    field: string;
    oldValue?: string | null;
    newValue?: string | null;
    effectiveDate?: Date | string | null;
    reason?: string | null;
    createdAt?: Date | string;
};
export type RoleChangeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    changedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    field?: Prisma.StringFieldUpdateOperationsInput | string;
    oldValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    newValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoleChangeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    changedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    field?: Prisma.StringFieldUpdateOperationsInput | string;
    oldValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    newValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoleChangeListRelationFilter = {
    every?: Prisma.RoleChangeWhereInput;
    some?: Prisma.RoleChangeWhereInput;
    none?: Prisma.RoleChangeWhereInput;
};
export type RoleChangeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RoleChangeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    changedBy?: Prisma.SortOrder;
    field?: Prisma.SortOrder;
    oldValue?: Prisma.SortOrder;
    newValue?: Prisma.SortOrder;
    effectiveDate?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RoleChangeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    changedBy?: Prisma.SortOrder;
    field?: Prisma.SortOrder;
    oldValue?: Prisma.SortOrder;
    newValue?: Prisma.SortOrder;
    effectiveDate?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RoleChangeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    changedBy?: Prisma.SortOrder;
    field?: Prisma.SortOrder;
    oldValue?: Prisma.SortOrder;
    newValue?: Prisma.SortOrder;
    effectiveDate?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RoleChangeCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.RoleChangeCreateWithoutEmployeeInput, Prisma.RoleChangeUncheckedCreateWithoutEmployeeInput> | Prisma.RoleChangeCreateWithoutEmployeeInput[] | Prisma.RoleChangeUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.RoleChangeCreateOrConnectWithoutEmployeeInput | Prisma.RoleChangeCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.RoleChangeCreateManyEmployeeInputEnvelope;
    connect?: Prisma.RoleChangeWhereUniqueInput | Prisma.RoleChangeWhereUniqueInput[];
};
export type RoleChangeUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.RoleChangeCreateWithoutEmployeeInput, Prisma.RoleChangeUncheckedCreateWithoutEmployeeInput> | Prisma.RoleChangeCreateWithoutEmployeeInput[] | Prisma.RoleChangeUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.RoleChangeCreateOrConnectWithoutEmployeeInput | Prisma.RoleChangeCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.RoleChangeCreateManyEmployeeInputEnvelope;
    connect?: Prisma.RoleChangeWhereUniqueInput | Prisma.RoleChangeWhereUniqueInput[];
};
export type RoleChangeUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.RoleChangeCreateWithoutEmployeeInput, Prisma.RoleChangeUncheckedCreateWithoutEmployeeInput> | Prisma.RoleChangeCreateWithoutEmployeeInput[] | Prisma.RoleChangeUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.RoleChangeCreateOrConnectWithoutEmployeeInput | Prisma.RoleChangeCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.RoleChangeUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.RoleChangeUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.RoleChangeCreateManyEmployeeInputEnvelope;
    set?: Prisma.RoleChangeWhereUniqueInput | Prisma.RoleChangeWhereUniqueInput[];
    disconnect?: Prisma.RoleChangeWhereUniqueInput | Prisma.RoleChangeWhereUniqueInput[];
    delete?: Prisma.RoleChangeWhereUniqueInput | Prisma.RoleChangeWhereUniqueInput[];
    connect?: Prisma.RoleChangeWhereUniqueInput | Prisma.RoleChangeWhereUniqueInput[];
    update?: Prisma.RoleChangeUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.RoleChangeUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.RoleChangeUpdateManyWithWhereWithoutEmployeeInput | Prisma.RoleChangeUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.RoleChangeScalarWhereInput | Prisma.RoleChangeScalarWhereInput[];
};
export type RoleChangeUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.RoleChangeCreateWithoutEmployeeInput, Prisma.RoleChangeUncheckedCreateWithoutEmployeeInput> | Prisma.RoleChangeCreateWithoutEmployeeInput[] | Prisma.RoleChangeUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.RoleChangeCreateOrConnectWithoutEmployeeInput | Prisma.RoleChangeCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.RoleChangeUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.RoleChangeUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.RoleChangeCreateManyEmployeeInputEnvelope;
    set?: Prisma.RoleChangeWhereUniqueInput | Prisma.RoleChangeWhereUniqueInput[];
    disconnect?: Prisma.RoleChangeWhereUniqueInput | Prisma.RoleChangeWhereUniqueInput[];
    delete?: Prisma.RoleChangeWhereUniqueInput | Prisma.RoleChangeWhereUniqueInput[];
    connect?: Prisma.RoleChangeWhereUniqueInput | Prisma.RoleChangeWhereUniqueInput[];
    update?: Prisma.RoleChangeUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.RoleChangeUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.RoleChangeUpdateManyWithWhereWithoutEmployeeInput | Prisma.RoleChangeUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.RoleChangeScalarWhereInput | Prisma.RoleChangeScalarWhereInput[];
};
export type RoleChangeCreateWithoutEmployeeInput = {
    id?: string;
    changedBy?: string | null;
    field: string;
    oldValue?: string | null;
    newValue?: string | null;
    effectiveDate?: Date | string | null;
    reason?: string | null;
    createdAt?: Date | string;
};
export type RoleChangeUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    changedBy?: string | null;
    field: string;
    oldValue?: string | null;
    newValue?: string | null;
    effectiveDate?: Date | string | null;
    reason?: string | null;
    createdAt?: Date | string;
};
export type RoleChangeCreateOrConnectWithoutEmployeeInput = {
    where: Prisma.RoleChangeWhereUniqueInput;
    create: Prisma.XOR<Prisma.RoleChangeCreateWithoutEmployeeInput, Prisma.RoleChangeUncheckedCreateWithoutEmployeeInput>;
};
export type RoleChangeCreateManyEmployeeInputEnvelope = {
    data: Prisma.RoleChangeCreateManyEmployeeInput | Prisma.RoleChangeCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
};
export type RoleChangeUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.RoleChangeWhereUniqueInput;
    update: Prisma.XOR<Prisma.RoleChangeUpdateWithoutEmployeeInput, Prisma.RoleChangeUncheckedUpdateWithoutEmployeeInput>;
    create: Prisma.XOR<Prisma.RoleChangeCreateWithoutEmployeeInput, Prisma.RoleChangeUncheckedCreateWithoutEmployeeInput>;
};
export type RoleChangeUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.RoleChangeWhereUniqueInput;
    data: Prisma.XOR<Prisma.RoleChangeUpdateWithoutEmployeeInput, Prisma.RoleChangeUncheckedUpdateWithoutEmployeeInput>;
};
export type RoleChangeUpdateManyWithWhereWithoutEmployeeInput = {
    where: Prisma.RoleChangeScalarWhereInput;
    data: Prisma.XOR<Prisma.RoleChangeUpdateManyMutationInput, Prisma.RoleChangeUncheckedUpdateManyWithoutEmployeeInput>;
};
export type RoleChangeScalarWhereInput = {
    AND?: Prisma.RoleChangeScalarWhereInput | Prisma.RoleChangeScalarWhereInput[];
    OR?: Prisma.RoleChangeScalarWhereInput[];
    NOT?: Prisma.RoleChangeScalarWhereInput | Prisma.RoleChangeScalarWhereInput[];
    id?: Prisma.UuidFilter<"RoleChange"> | string;
    employeeId?: Prisma.UuidFilter<"RoleChange"> | string;
    changedBy?: Prisma.UuidNullableFilter<"RoleChange"> | string | null;
    field?: Prisma.StringFilter<"RoleChange"> | string;
    oldValue?: Prisma.StringNullableFilter<"RoleChange"> | string | null;
    newValue?: Prisma.StringNullableFilter<"RoleChange"> | string | null;
    effectiveDate?: Prisma.DateTimeNullableFilter<"RoleChange"> | Date | string | null;
    reason?: Prisma.StringNullableFilter<"RoleChange"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"RoleChange"> | Date | string;
};
export type RoleChangeCreateManyEmployeeInput = {
    id?: string;
    changedBy?: string | null;
    field: string;
    oldValue?: string | null;
    newValue?: string | null;
    effectiveDate?: Date | string | null;
    reason?: string | null;
    createdAt?: Date | string;
};
export type RoleChangeUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    changedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    field?: Prisma.StringFieldUpdateOperationsInput | string;
    oldValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    newValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoleChangeUncheckedUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    changedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    field?: Prisma.StringFieldUpdateOperationsInput | string;
    oldValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    newValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoleChangeUncheckedUpdateManyWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    changedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    field?: Prisma.StringFieldUpdateOperationsInput | string;
    oldValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    newValue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoleChangeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    changedBy?: boolean;
    field?: boolean;
    oldValue?: boolean;
    newValue?: boolean;
    effectiveDate?: boolean;
    reason?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["roleChange"]>;
export type RoleChangeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    changedBy?: boolean;
    field?: boolean;
    oldValue?: boolean;
    newValue?: boolean;
    effectiveDate?: boolean;
    reason?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["roleChange"]>;
export type RoleChangeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    changedBy?: boolean;
    field?: boolean;
    oldValue?: boolean;
    newValue?: boolean;
    effectiveDate?: boolean;
    reason?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["roleChange"]>;
export type RoleChangeSelectScalar = {
    id?: boolean;
    employeeId?: boolean;
    changedBy?: boolean;
    field?: boolean;
    oldValue?: boolean;
    newValue?: boolean;
    effectiveDate?: boolean;
    reason?: boolean;
    createdAt?: boolean;
};
export type RoleChangeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "employeeId" | "changedBy" | "field" | "oldValue" | "newValue" | "effectiveDate" | "reason" | "createdAt", ExtArgs["result"]["roleChange"]>;
export type RoleChangeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type RoleChangeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type RoleChangeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type $RoleChangePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RoleChange";
    objects: {
        employee: Prisma.$EmployeePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        employeeId: string;
        changedBy: string | null;
        field: string;
        oldValue: string | null;
        newValue: string | null;
        effectiveDate: Date | null;
        reason: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["roleChange"]>;
    composites: {};
};
export type RoleChangeGetPayload<S extends boolean | null | undefined | RoleChangeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RoleChangePayload, S>;
export type RoleChangeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RoleChangeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RoleChangeCountAggregateInputType | true;
};
export interface RoleChangeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RoleChange'];
        meta: {
            name: 'RoleChange';
        };
    };
    findUnique<T extends RoleChangeFindUniqueArgs>(args: Prisma.SelectSubset<T, RoleChangeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RoleChangeClient<runtime.Types.Result.GetResult<Prisma.$RoleChangePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RoleChangeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RoleChangeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RoleChangeClient<runtime.Types.Result.GetResult<Prisma.$RoleChangePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RoleChangeFindFirstArgs>(args?: Prisma.SelectSubset<T, RoleChangeFindFirstArgs<ExtArgs>>): Prisma.Prisma__RoleChangeClient<runtime.Types.Result.GetResult<Prisma.$RoleChangePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RoleChangeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RoleChangeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RoleChangeClient<runtime.Types.Result.GetResult<Prisma.$RoleChangePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RoleChangeFindManyArgs>(args?: Prisma.SelectSubset<T, RoleChangeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RoleChangePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RoleChangeCreateArgs>(args: Prisma.SelectSubset<T, RoleChangeCreateArgs<ExtArgs>>): Prisma.Prisma__RoleChangeClient<runtime.Types.Result.GetResult<Prisma.$RoleChangePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RoleChangeCreateManyArgs>(args?: Prisma.SelectSubset<T, RoleChangeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RoleChangeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RoleChangeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RoleChangePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RoleChangeDeleteArgs>(args: Prisma.SelectSubset<T, RoleChangeDeleteArgs<ExtArgs>>): Prisma.Prisma__RoleChangeClient<runtime.Types.Result.GetResult<Prisma.$RoleChangePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RoleChangeUpdateArgs>(args: Prisma.SelectSubset<T, RoleChangeUpdateArgs<ExtArgs>>): Prisma.Prisma__RoleChangeClient<runtime.Types.Result.GetResult<Prisma.$RoleChangePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RoleChangeDeleteManyArgs>(args?: Prisma.SelectSubset<T, RoleChangeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RoleChangeUpdateManyArgs>(args: Prisma.SelectSubset<T, RoleChangeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RoleChangeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RoleChangeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RoleChangePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RoleChangeUpsertArgs>(args: Prisma.SelectSubset<T, RoleChangeUpsertArgs<ExtArgs>>): Prisma.Prisma__RoleChangeClient<runtime.Types.Result.GetResult<Prisma.$RoleChangePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RoleChangeCountArgs>(args?: Prisma.Subset<T, RoleChangeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RoleChangeCountAggregateOutputType> : number>;
    aggregate<T extends RoleChangeAggregateArgs>(args: Prisma.Subset<T, RoleChangeAggregateArgs>): Prisma.PrismaPromise<GetRoleChangeAggregateType<T>>;
    groupBy<T extends RoleChangeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RoleChangeGroupByArgs['orderBy'];
    } : {
        orderBy?: RoleChangeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RoleChangeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleChangeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RoleChangeFieldRefs;
}
export interface Prisma__RoleChangeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    employee<T extends Prisma.EmployeeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmployeeDefaultArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RoleChangeFieldRefs {
    readonly id: Prisma.FieldRef<"RoleChange", 'String'>;
    readonly employeeId: Prisma.FieldRef<"RoleChange", 'String'>;
    readonly changedBy: Prisma.FieldRef<"RoleChange", 'String'>;
    readonly field: Prisma.FieldRef<"RoleChange", 'String'>;
    readonly oldValue: Prisma.FieldRef<"RoleChange", 'String'>;
    readonly newValue: Prisma.FieldRef<"RoleChange", 'String'>;
    readonly effectiveDate: Prisma.FieldRef<"RoleChange", 'DateTime'>;
    readonly reason: Prisma.FieldRef<"RoleChange", 'String'>;
    readonly createdAt: Prisma.FieldRef<"RoleChange", 'DateTime'>;
}
export type RoleChangeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleChangeSelect<ExtArgs> | null;
    omit?: Prisma.RoleChangeOmit<ExtArgs> | null;
    include?: Prisma.RoleChangeInclude<ExtArgs> | null;
    where: Prisma.RoleChangeWhereUniqueInput;
};
export type RoleChangeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleChangeSelect<ExtArgs> | null;
    omit?: Prisma.RoleChangeOmit<ExtArgs> | null;
    include?: Prisma.RoleChangeInclude<ExtArgs> | null;
    where: Prisma.RoleChangeWhereUniqueInput;
};
export type RoleChangeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleChangeSelect<ExtArgs> | null;
    omit?: Prisma.RoleChangeOmit<ExtArgs> | null;
    include?: Prisma.RoleChangeInclude<ExtArgs> | null;
    where?: Prisma.RoleChangeWhereInput;
    orderBy?: Prisma.RoleChangeOrderByWithRelationInput | Prisma.RoleChangeOrderByWithRelationInput[];
    cursor?: Prisma.RoleChangeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoleChangeScalarFieldEnum | Prisma.RoleChangeScalarFieldEnum[];
};
export type RoleChangeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleChangeSelect<ExtArgs> | null;
    omit?: Prisma.RoleChangeOmit<ExtArgs> | null;
    include?: Prisma.RoleChangeInclude<ExtArgs> | null;
    where?: Prisma.RoleChangeWhereInput;
    orderBy?: Prisma.RoleChangeOrderByWithRelationInput | Prisma.RoleChangeOrderByWithRelationInput[];
    cursor?: Prisma.RoleChangeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoleChangeScalarFieldEnum | Prisma.RoleChangeScalarFieldEnum[];
};
export type RoleChangeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleChangeSelect<ExtArgs> | null;
    omit?: Prisma.RoleChangeOmit<ExtArgs> | null;
    include?: Prisma.RoleChangeInclude<ExtArgs> | null;
    where?: Prisma.RoleChangeWhereInput;
    orderBy?: Prisma.RoleChangeOrderByWithRelationInput | Prisma.RoleChangeOrderByWithRelationInput[];
    cursor?: Prisma.RoleChangeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoleChangeScalarFieldEnum | Prisma.RoleChangeScalarFieldEnum[];
};
export type RoleChangeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleChangeSelect<ExtArgs> | null;
    omit?: Prisma.RoleChangeOmit<ExtArgs> | null;
    include?: Prisma.RoleChangeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RoleChangeCreateInput, Prisma.RoleChangeUncheckedCreateInput>;
};
export type RoleChangeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RoleChangeCreateManyInput | Prisma.RoleChangeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RoleChangeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleChangeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RoleChangeOmit<ExtArgs> | null;
    data: Prisma.RoleChangeCreateManyInput | Prisma.RoleChangeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RoleChangeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RoleChangeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleChangeSelect<ExtArgs> | null;
    omit?: Prisma.RoleChangeOmit<ExtArgs> | null;
    include?: Prisma.RoleChangeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RoleChangeUpdateInput, Prisma.RoleChangeUncheckedUpdateInput>;
    where: Prisma.RoleChangeWhereUniqueInput;
};
export type RoleChangeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RoleChangeUpdateManyMutationInput, Prisma.RoleChangeUncheckedUpdateManyInput>;
    where?: Prisma.RoleChangeWhereInput;
    limit?: number;
};
export type RoleChangeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleChangeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RoleChangeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RoleChangeUpdateManyMutationInput, Prisma.RoleChangeUncheckedUpdateManyInput>;
    where?: Prisma.RoleChangeWhereInput;
    limit?: number;
    include?: Prisma.RoleChangeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RoleChangeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleChangeSelect<ExtArgs> | null;
    omit?: Prisma.RoleChangeOmit<ExtArgs> | null;
    include?: Prisma.RoleChangeInclude<ExtArgs> | null;
    where: Prisma.RoleChangeWhereUniqueInput;
    create: Prisma.XOR<Prisma.RoleChangeCreateInput, Prisma.RoleChangeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RoleChangeUpdateInput, Prisma.RoleChangeUncheckedUpdateInput>;
};
export type RoleChangeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleChangeSelect<ExtArgs> | null;
    omit?: Prisma.RoleChangeOmit<ExtArgs> | null;
    include?: Prisma.RoleChangeInclude<ExtArgs> | null;
    where: Prisma.RoleChangeWhereUniqueInput;
};
export type RoleChangeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoleChangeWhereInput;
    limit?: number;
};
export type RoleChangeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleChangeSelect<ExtArgs> | null;
    omit?: Prisma.RoleChangeOmit<ExtArgs> | null;
    include?: Prisma.RoleChangeInclude<ExtArgs> | null;
};
