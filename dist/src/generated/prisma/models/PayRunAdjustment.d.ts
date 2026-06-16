import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PayRunAdjustmentModel = runtime.Types.Result.DefaultSelection<Prisma.$PayRunAdjustmentPayload>;
export type AggregatePayRunAdjustment = {
    _count: PayRunAdjustmentCountAggregateOutputType | null;
    _avg: PayRunAdjustmentAvgAggregateOutputType | null;
    _sum: PayRunAdjustmentSumAggregateOutputType | null;
    _min: PayRunAdjustmentMinAggregateOutputType | null;
    _max: PayRunAdjustmentMaxAggregateOutputType | null;
};
export type PayRunAdjustmentAvgAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type PayRunAdjustmentSumAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type PayRunAdjustmentMinAggregateOutputType = {
    id: string | null;
    payRunId: string | null;
    employeeId: string | null;
    type: $Enums.AdjustmentType | null;
    amount: runtime.Decimal | null;
    description: string | null;
    addedBy: string | null;
    createdAt: Date | null;
};
export type PayRunAdjustmentMaxAggregateOutputType = {
    id: string | null;
    payRunId: string | null;
    employeeId: string | null;
    type: $Enums.AdjustmentType | null;
    amount: runtime.Decimal | null;
    description: string | null;
    addedBy: string | null;
    createdAt: Date | null;
};
export type PayRunAdjustmentCountAggregateOutputType = {
    id: number;
    payRunId: number;
    employeeId: number;
    type: number;
    amount: number;
    description: number;
    addedBy: number;
    createdAt: number;
    _all: number;
};
export type PayRunAdjustmentAvgAggregateInputType = {
    amount?: true;
};
export type PayRunAdjustmentSumAggregateInputType = {
    amount?: true;
};
export type PayRunAdjustmentMinAggregateInputType = {
    id?: true;
    payRunId?: true;
    employeeId?: true;
    type?: true;
    amount?: true;
    description?: true;
    addedBy?: true;
    createdAt?: true;
};
export type PayRunAdjustmentMaxAggregateInputType = {
    id?: true;
    payRunId?: true;
    employeeId?: true;
    type?: true;
    amount?: true;
    description?: true;
    addedBy?: true;
    createdAt?: true;
};
export type PayRunAdjustmentCountAggregateInputType = {
    id?: true;
    payRunId?: true;
    employeeId?: true;
    type?: true;
    amount?: true;
    description?: true;
    addedBy?: true;
    createdAt?: true;
    _all?: true;
};
export type PayRunAdjustmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayRunAdjustmentWhereInput;
    orderBy?: Prisma.PayRunAdjustmentOrderByWithRelationInput | Prisma.PayRunAdjustmentOrderByWithRelationInput[];
    cursor?: Prisma.PayRunAdjustmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PayRunAdjustmentCountAggregateInputType;
    _avg?: PayRunAdjustmentAvgAggregateInputType;
    _sum?: PayRunAdjustmentSumAggregateInputType;
    _min?: PayRunAdjustmentMinAggregateInputType;
    _max?: PayRunAdjustmentMaxAggregateInputType;
};
export type GetPayRunAdjustmentAggregateType<T extends PayRunAdjustmentAggregateArgs> = {
    [P in keyof T & keyof AggregatePayRunAdjustment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePayRunAdjustment[P]> : Prisma.GetScalarType<T[P], AggregatePayRunAdjustment[P]>;
};
export type PayRunAdjustmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayRunAdjustmentWhereInput;
    orderBy?: Prisma.PayRunAdjustmentOrderByWithAggregationInput | Prisma.PayRunAdjustmentOrderByWithAggregationInput[];
    by: Prisma.PayRunAdjustmentScalarFieldEnum[] | Prisma.PayRunAdjustmentScalarFieldEnum;
    having?: Prisma.PayRunAdjustmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PayRunAdjustmentCountAggregateInputType | true;
    _avg?: PayRunAdjustmentAvgAggregateInputType;
    _sum?: PayRunAdjustmentSumAggregateInputType;
    _min?: PayRunAdjustmentMinAggregateInputType;
    _max?: PayRunAdjustmentMaxAggregateInputType;
};
export type PayRunAdjustmentGroupByOutputType = {
    id: string;
    payRunId: string;
    employeeId: string;
    type: $Enums.AdjustmentType;
    amount: runtime.Decimal;
    description: string | null;
    addedBy: string | null;
    createdAt: Date;
    _count: PayRunAdjustmentCountAggregateOutputType | null;
    _avg: PayRunAdjustmentAvgAggregateOutputType | null;
    _sum: PayRunAdjustmentSumAggregateOutputType | null;
    _min: PayRunAdjustmentMinAggregateOutputType | null;
    _max: PayRunAdjustmentMaxAggregateOutputType | null;
};
export type GetPayRunAdjustmentGroupByPayload<T extends PayRunAdjustmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PayRunAdjustmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PayRunAdjustmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PayRunAdjustmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PayRunAdjustmentGroupByOutputType[P]>;
}>>;
export type PayRunAdjustmentWhereInput = {
    AND?: Prisma.PayRunAdjustmentWhereInput | Prisma.PayRunAdjustmentWhereInput[];
    OR?: Prisma.PayRunAdjustmentWhereInput[];
    NOT?: Prisma.PayRunAdjustmentWhereInput | Prisma.PayRunAdjustmentWhereInput[];
    id?: Prisma.UuidFilter<"PayRunAdjustment"> | string;
    payRunId?: Prisma.UuidFilter<"PayRunAdjustment"> | string;
    employeeId?: Prisma.UuidFilter<"PayRunAdjustment"> | string;
    type?: Prisma.EnumAdjustmentTypeFilter<"PayRunAdjustment"> | $Enums.AdjustmentType;
    amount?: Prisma.DecimalFilter<"PayRunAdjustment"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.StringNullableFilter<"PayRunAdjustment"> | string | null;
    addedBy?: Prisma.UuidNullableFilter<"PayRunAdjustment"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PayRunAdjustment"> | Date | string;
    payRun?: Prisma.XOR<Prisma.PayRunScalarRelationFilter, Prisma.PayRunWhereInput>;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
};
export type PayRunAdjustmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    payRunId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    addedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    payRun?: Prisma.PayRunOrderByWithRelationInput;
    employee?: Prisma.EmployeeOrderByWithRelationInput;
};
export type PayRunAdjustmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PayRunAdjustmentWhereInput | Prisma.PayRunAdjustmentWhereInput[];
    OR?: Prisma.PayRunAdjustmentWhereInput[];
    NOT?: Prisma.PayRunAdjustmentWhereInput | Prisma.PayRunAdjustmentWhereInput[];
    payRunId?: Prisma.UuidFilter<"PayRunAdjustment"> | string;
    employeeId?: Prisma.UuidFilter<"PayRunAdjustment"> | string;
    type?: Prisma.EnumAdjustmentTypeFilter<"PayRunAdjustment"> | $Enums.AdjustmentType;
    amount?: Prisma.DecimalFilter<"PayRunAdjustment"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.StringNullableFilter<"PayRunAdjustment"> | string | null;
    addedBy?: Prisma.UuidNullableFilter<"PayRunAdjustment"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PayRunAdjustment"> | Date | string;
    payRun?: Prisma.XOR<Prisma.PayRunScalarRelationFilter, Prisma.PayRunWhereInput>;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
}, "id">;
export type PayRunAdjustmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    payRunId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    addedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PayRunAdjustmentCountOrderByAggregateInput;
    _avg?: Prisma.PayRunAdjustmentAvgOrderByAggregateInput;
    _max?: Prisma.PayRunAdjustmentMaxOrderByAggregateInput;
    _min?: Prisma.PayRunAdjustmentMinOrderByAggregateInput;
    _sum?: Prisma.PayRunAdjustmentSumOrderByAggregateInput;
};
export type PayRunAdjustmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.PayRunAdjustmentScalarWhereWithAggregatesInput | Prisma.PayRunAdjustmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.PayRunAdjustmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PayRunAdjustmentScalarWhereWithAggregatesInput | Prisma.PayRunAdjustmentScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PayRunAdjustment"> | string;
    payRunId?: Prisma.UuidWithAggregatesFilter<"PayRunAdjustment"> | string;
    employeeId?: Prisma.UuidWithAggregatesFilter<"PayRunAdjustment"> | string;
    type?: Prisma.EnumAdjustmentTypeWithAggregatesFilter<"PayRunAdjustment"> | $Enums.AdjustmentType;
    amount?: Prisma.DecimalWithAggregatesFilter<"PayRunAdjustment"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"PayRunAdjustment"> | string | null;
    addedBy?: Prisma.UuidNullableWithAggregatesFilter<"PayRunAdjustment"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PayRunAdjustment"> | Date | string;
};
export type PayRunAdjustmentCreateInput = {
    id?: string;
    type: $Enums.AdjustmentType;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: string | null;
    addedBy?: string | null;
    createdAt?: Date | string;
    payRun: Prisma.PayRunCreateNestedOneWithoutAdjustmentsInput;
    employee: Prisma.EmployeeCreateNestedOneWithoutPayRunAdjustmentsInput;
};
export type PayRunAdjustmentUncheckedCreateInput = {
    id?: string;
    payRunId: string;
    employeeId: string;
    type: $Enums.AdjustmentType;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: string | null;
    addedBy?: string | null;
    createdAt?: Date | string;
};
export type PayRunAdjustmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumAdjustmentTypeFieldUpdateOperationsInput | $Enums.AdjustmentType;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payRun?: Prisma.PayRunUpdateOneRequiredWithoutAdjustmentsNestedInput;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutPayRunAdjustmentsNestedInput;
};
export type PayRunAdjustmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    payRunId?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumAdjustmentTypeFieldUpdateOperationsInput | $Enums.AdjustmentType;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayRunAdjustmentCreateManyInput = {
    id?: string;
    payRunId: string;
    employeeId: string;
    type: $Enums.AdjustmentType;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: string | null;
    addedBy?: string | null;
    createdAt?: Date | string;
};
export type PayRunAdjustmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumAdjustmentTypeFieldUpdateOperationsInput | $Enums.AdjustmentType;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayRunAdjustmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    payRunId?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumAdjustmentTypeFieldUpdateOperationsInput | $Enums.AdjustmentType;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayRunAdjustmentListRelationFilter = {
    every?: Prisma.PayRunAdjustmentWhereInput;
    some?: Prisma.PayRunAdjustmentWhereInput;
    none?: Prisma.PayRunAdjustmentWhereInput;
};
export type PayRunAdjustmentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PayRunAdjustmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    payRunId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    addedBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PayRunAdjustmentAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type PayRunAdjustmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    payRunId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    addedBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PayRunAdjustmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    payRunId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    addedBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PayRunAdjustmentSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type PayRunAdjustmentCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.PayRunAdjustmentCreateWithoutEmployeeInput, Prisma.PayRunAdjustmentUncheckedCreateWithoutEmployeeInput> | Prisma.PayRunAdjustmentCreateWithoutEmployeeInput[] | Prisma.PayRunAdjustmentUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.PayRunAdjustmentCreateOrConnectWithoutEmployeeInput | Prisma.PayRunAdjustmentCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.PayRunAdjustmentCreateManyEmployeeInputEnvelope;
    connect?: Prisma.PayRunAdjustmentWhereUniqueInput | Prisma.PayRunAdjustmentWhereUniqueInput[];
};
export type PayRunAdjustmentUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.PayRunAdjustmentCreateWithoutEmployeeInput, Prisma.PayRunAdjustmentUncheckedCreateWithoutEmployeeInput> | Prisma.PayRunAdjustmentCreateWithoutEmployeeInput[] | Prisma.PayRunAdjustmentUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.PayRunAdjustmentCreateOrConnectWithoutEmployeeInput | Prisma.PayRunAdjustmentCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.PayRunAdjustmentCreateManyEmployeeInputEnvelope;
    connect?: Prisma.PayRunAdjustmentWhereUniqueInput | Prisma.PayRunAdjustmentWhereUniqueInput[];
};
export type PayRunAdjustmentUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.PayRunAdjustmentCreateWithoutEmployeeInput, Prisma.PayRunAdjustmentUncheckedCreateWithoutEmployeeInput> | Prisma.PayRunAdjustmentCreateWithoutEmployeeInput[] | Prisma.PayRunAdjustmentUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.PayRunAdjustmentCreateOrConnectWithoutEmployeeInput | Prisma.PayRunAdjustmentCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.PayRunAdjustmentUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.PayRunAdjustmentUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.PayRunAdjustmentCreateManyEmployeeInputEnvelope;
    set?: Prisma.PayRunAdjustmentWhereUniqueInput | Prisma.PayRunAdjustmentWhereUniqueInput[];
    disconnect?: Prisma.PayRunAdjustmentWhereUniqueInput | Prisma.PayRunAdjustmentWhereUniqueInput[];
    delete?: Prisma.PayRunAdjustmentWhereUniqueInput | Prisma.PayRunAdjustmentWhereUniqueInput[];
    connect?: Prisma.PayRunAdjustmentWhereUniqueInput | Prisma.PayRunAdjustmentWhereUniqueInput[];
    update?: Prisma.PayRunAdjustmentUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.PayRunAdjustmentUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.PayRunAdjustmentUpdateManyWithWhereWithoutEmployeeInput | Prisma.PayRunAdjustmentUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.PayRunAdjustmentScalarWhereInput | Prisma.PayRunAdjustmentScalarWhereInput[];
};
export type PayRunAdjustmentUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.PayRunAdjustmentCreateWithoutEmployeeInput, Prisma.PayRunAdjustmentUncheckedCreateWithoutEmployeeInput> | Prisma.PayRunAdjustmentCreateWithoutEmployeeInput[] | Prisma.PayRunAdjustmentUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.PayRunAdjustmentCreateOrConnectWithoutEmployeeInput | Prisma.PayRunAdjustmentCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.PayRunAdjustmentUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.PayRunAdjustmentUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.PayRunAdjustmentCreateManyEmployeeInputEnvelope;
    set?: Prisma.PayRunAdjustmentWhereUniqueInput | Prisma.PayRunAdjustmentWhereUniqueInput[];
    disconnect?: Prisma.PayRunAdjustmentWhereUniqueInput | Prisma.PayRunAdjustmentWhereUniqueInput[];
    delete?: Prisma.PayRunAdjustmentWhereUniqueInput | Prisma.PayRunAdjustmentWhereUniqueInput[];
    connect?: Prisma.PayRunAdjustmentWhereUniqueInput | Prisma.PayRunAdjustmentWhereUniqueInput[];
    update?: Prisma.PayRunAdjustmentUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.PayRunAdjustmentUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.PayRunAdjustmentUpdateManyWithWhereWithoutEmployeeInput | Prisma.PayRunAdjustmentUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.PayRunAdjustmentScalarWhereInput | Prisma.PayRunAdjustmentScalarWhereInput[];
};
export type PayRunAdjustmentCreateNestedManyWithoutPayRunInput = {
    create?: Prisma.XOR<Prisma.PayRunAdjustmentCreateWithoutPayRunInput, Prisma.PayRunAdjustmentUncheckedCreateWithoutPayRunInput> | Prisma.PayRunAdjustmentCreateWithoutPayRunInput[] | Prisma.PayRunAdjustmentUncheckedCreateWithoutPayRunInput[];
    connectOrCreate?: Prisma.PayRunAdjustmentCreateOrConnectWithoutPayRunInput | Prisma.PayRunAdjustmentCreateOrConnectWithoutPayRunInput[];
    createMany?: Prisma.PayRunAdjustmentCreateManyPayRunInputEnvelope;
    connect?: Prisma.PayRunAdjustmentWhereUniqueInput | Prisma.PayRunAdjustmentWhereUniqueInput[];
};
export type PayRunAdjustmentUncheckedCreateNestedManyWithoutPayRunInput = {
    create?: Prisma.XOR<Prisma.PayRunAdjustmentCreateWithoutPayRunInput, Prisma.PayRunAdjustmentUncheckedCreateWithoutPayRunInput> | Prisma.PayRunAdjustmentCreateWithoutPayRunInput[] | Prisma.PayRunAdjustmentUncheckedCreateWithoutPayRunInput[];
    connectOrCreate?: Prisma.PayRunAdjustmentCreateOrConnectWithoutPayRunInput | Prisma.PayRunAdjustmentCreateOrConnectWithoutPayRunInput[];
    createMany?: Prisma.PayRunAdjustmentCreateManyPayRunInputEnvelope;
    connect?: Prisma.PayRunAdjustmentWhereUniqueInput | Prisma.PayRunAdjustmentWhereUniqueInput[];
};
export type PayRunAdjustmentUpdateManyWithoutPayRunNestedInput = {
    create?: Prisma.XOR<Prisma.PayRunAdjustmentCreateWithoutPayRunInput, Prisma.PayRunAdjustmentUncheckedCreateWithoutPayRunInput> | Prisma.PayRunAdjustmentCreateWithoutPayRunInput[] | Prisma.PayRunAdjustmentUncheckedCreateWithoutPayRunInput[];
    connectOrCreate?: Prisma.PayRunAdjustmentCreateOrConnectWithoutPayRunInput | Prisma.PayRunAdjustmentCreateOrConnectWithoutPayRunInput[];
    upsert?: Prisma.PayRunAdjustmentUpsertWithWhereUniqueWithoutPayRunInput | Prisma.PayRunAdjustmentUpsertWithWhereUniqueWithoutPayRunInput[];
    createMany?: Prisma.PayRunAdjustmentCreateManyPayRunInputEnvelope;
    set?: Prisma.PayRunAdjustmentWhereUniqueInput | Prisma.PayRunAdjustmentWhereUniqueInput[];
    disconnect?: Prisma.PayRunAdjustmentWhereUniqueInput | Prisma.PayRunAdjustmentWhereUniqueInput[];
    delete?: Prisma.PayRunAdjustmentWhereUniqueInput | Prisma.PayRunAdjustmentWhereUniqueInput[];
    connect?: Prisma.PayRunAdjustmentWhereUniqueInput | Prisma.PayRunAdjustmentWhereUniqueInput[];
    update?: Prisma.PayRunAdjustmentUpdateWithWhereUniqueWithoutPayRunInput | Prisma.PayRunAdjustmentUpdateWithWhereUniqueWithoutPayRunInput[];
    updateMany?: Prisma.PayRunAdjustmentUpdateManyWithWhereWithoutPayRunInput | Prisma.PayRunAdjustmentUpdateManyWithWhereWithoutPayRunInput[];
    deleteMany?: Prisma.PayRunAdjustmentScalarWhereInput | Prisma.PayRunAdjustmentScalarWhereInput[];
};
export type PayRunAdjustmentUncheckedUpdateManyWithoutPayRunNestedInput = {
    create?: Prisma.XOR<Prisma.PayRunAdjustmentCreateWithoutPayRunInput, Prisma.PayRunAdjustmentUncheckedCreateWithoutPayRunInput> | Prisma.PayRunAdjustmentCreateWithoutPayRunInput[] | Prisma.PayRunAdjustmentUncheckedCreateWithoutPayRunInput[];
    connectOrCreate?: Prisma.PayRunAdjustmentCreateOrConnectWithoutPayRunInput | Prisma.PayRunAdjustmentCreateOrConnectWithoutPayRunInput[];
    upsert?: Prisma.PayRunAdjustmentUpsertWithWhereUniqueWithoutPayRunInput | Prisma.PayRunAdjustmentUpsertWithWhereUniqueWithoutPayRunInput[];
    createMany?: Prisma.PayRunAdjustmentCreateManyPayRunInputEnvelope;
    set?: Prisma.PayRunAdjustmentWhereUniqueInput | Prisma.PayRunAdjustmentWhereUniqueInput[];
    disconnect?: Prisma.PayRunAdjustmentWhereUniqueInput | Prisma.PayRunAdjustmentWhereUniqueInput[];
    delete?: Prisma.PayRunAdjustmentWhereUniqueInput | Prisma.PayRunAdjustmentWhereUniqueInput[];
    connect?: Prisma.PayRunAdjustmentWhereUniqueInput | Prisma.PayRunAdjustmentWhereUniqueInput[];
    update?: Prisma.PayRunAdjustmentUpdateWithWhereUniqueWithoutPayRunInput | Prisma.PayRunAdjustmentUpdateWithWhereUniqueWithoutPayRunInput[];
    updateMany?: Prisma.PayRunAdjustmentUpdateManyWithWhereWithoutPayRunInput | Prisma.PayRunAdjustmentUpdateManyWithWhereWithoutPayRunInput[];
    deleteMany?: Prisma.PayRunAdjustmentScalarWhereInput | Prisma.PayRunAdjustmentScalarWhereInput[];
};
export type EnumAdjustmentTypeFieldUpdateOperationsInput = {
    set?: $Enums.AdjustmentType;
};
export type PayRunAdjustmentCreateWithoutEmployeeInput = {
    id?: string;
    type: $Enums.AdjustmentType;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: string | null;
    addedBy?: string | null;
    createdAt?: Date | string;
    payRun: Prisma.PayRunCreateNestedOneWithoutAdjustmentsInput;
};
export type PayRunAdjustmentUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    payRunId: string;
    type: $Enums.AdjustmentType;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: string | null;
    addedBy?: string | null;
    createdAt?: Date | string;
};
export type PayRunAdjustmentCreateOrConnectWithoutEmployeeInput = {
    where: Prisma.PayRunAdjustmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayRunAdjustmentCreateWithoutEmployeeInput, Prisma.PayRunAdjustmentUncheckedCreateWithoutEmployeeInput>;
};
export type PayRunAdjustmentCreateManyEmployeeInputEnvelope = {
    data: Prisma.PayRunAdjustmentCreateManyEmployeeInput | Prisma.PayRunAdjustmentCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
};
export type PayRunAdjustmentUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.PayRunAdjustmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.PayRunAdjustmentUpdateWithoutEmployeeInput, Prisma.PayRunAdjustmentUncheckedUpdateWithoutEmployeeInput>;
    create: Prisma.XOR<Prisma.PayRunAdjustmentCreateWithoutEmployeeInput, Prisma.PayRunAdjustmentUncheckedCreateWithoutEmployeeInput>;
};
export type PayRunAdjustmentUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.PayRunAdjustmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.PayRunAdjustmentUpdateWithoutEmployeeInput, Prisma.PayRunAdjustmentUncheckedUpdateWithoutEmployeeInput>;
};
export type PayRunAdjustmentUpdateManyWithWhereWithoutEmployeeInput = {
    where: Prisma.PayRunAdjustmentScalarWhereInput;
    data: Prisma.XOR<Prisma.PayRunAdjustmentUpdateManyMutationInput, Prisma.PayRunAdjustmentUncheckedUpdateManyWithoutEmployeeInput>;
};
export type PayRunAdjustmentScalarWhereInput = {
    AND?: Prisma.PayRunAdjustmentScalarWhereInput | Prisma.PayRunAdjustmentScalarWhereInput[];
    OR?: Prisma.PayRunAdjustmentScalarWhereInput[];
    NOT?: Prisma.PayRunAdjustmentScalarWhereInput | Prisma.PayRunAdjustmentScalarWhereInput[];
    id?: Prisma.UuidFilter<"PayRunAdjustment"> | string;
    payRunId?: Prisma.UuidFilter<"PayRunAdjustment"> | string;
    employeeId?: Prisma.UuidFilter<"PayRunAdjustment"> | string;
    type?: Prisma.EnumAdjustmentTypeFilter<"PayRunAdjustment"> | $Enums.AdjustmentType;
    amount?: Prisma.DecimalFilter<"PayRunAdjustment"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.StringNullableFilter<"PayRunAdjustment"> | string | null;
    addedBy?: Prisma.UuidNullableFilter<"PayRunAdjustment"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PayRunAdjustment"> | Date | string;
};
export type PayRunAdjustmentCreateWithoutPayRunInput = {
    id?: string;
    type: $Enums.AdjustmentType;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: string | null;
    addedBy?: string | null;
    createdAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutPayRunAdjustmentsInput;
};
export type PayRunAdjustmentUncheckedCreateWithoutPayRunInput = {
    id?: string;
    employeeId: string;
    type: $Enums.AdjustmentType;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: string | null;
    addedBy?: string | null;
    createdAt?: Date | string;
};
export type PayRunAdjustmentCreateOrConnectWithoutPayRunInput = {
    where: Prisma.PayRunAdjustmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayRunAdjustmentCreateWithoutPayRunInput, Prisma.PayRunAdjustmentUncheckedCreateWithoutPayRunInput>;
};
export type PayRunAdjustmentCreateManyPayRunInputEnvelope = {
    data: Prisma.PayRunAdjustmentCreateManyPayRunInput | Prisma.PayRunAdjustmentCreateManyPayRunInput[];
    skipDuplicates?: boolean;
};
export type PayRunAdjustmentUpsertWithWhereUniqueWithoutPayRunInput = {
    where: Prisma.PayRunAdjustmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.PayRunAdjustmentUpdateWithoutPayRunInput, Prisma.PayRunAdjustmentUncheckedUpdateWithoutPayRunInput>;
    create: Prisma.XOR<Prisma.PayRunAdjustmentCreateWithoutPayRunInput, Prisma.PayRunAdjustmentUncheckedCreateWithoutPayRunInput>;
};
export type PayRunAdjustmentUpdateWithWhereUniqueWithoutPayRunInput = {
    where: Prisma.PayRunAdjustmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.PayRunAdjustmentUpdateWithoutPayRunInput, Prisma.PayRunAdjustmentUncheckedUpdateWithoutPayRunInput>;
};
export type PayRunAdjustmentUpdateManyWithWhereWithoutPayRunInput = {
    where: Prisma.PayRunAdjustmentScalarWhereInput;
    data: Prisma.XOR<Prisma.PayRunAdjustmentUpdateManyMutationInput, Prisma.PayRunAdjustmentUncheckedUpdateManyWithoutPayRunInput>;
};
export type PayRunAdjustmentCreateManyEmployeeInput = {
    id?: string;
    payRunId: string;
    type: $Enums.AdjustmentType;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: string | null;
    addedBy?: string | null;
    createdAt?: Date | string;
};
export type PayRunAdjustmentUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumAdjustmentTypeFieldUpdateOperationsInput | $Enums.AdjustmentType;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payRun?: Prisma.PayRunUpdateOneRequiredWithoutAdjustmentsNestedInput;
};
export type PayRunAdjustmentUncheckedUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    payRunId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumAdjustmentTypeFieldUpdateOperationsInput | $Enums.AdjustmentType;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayRunAdjustmentUncheckedUpdateManyWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    payRunId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumAdjustmentTypeFieldUpdateOperationsInput | $Enums.AdjustmentType;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayRunAdjustmentCreateManyPayRunInput = {
    id?: string;
    employeeId: string;
    type: $Enums.AdjustmentType;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: string | null;
    addedBy?: string | null;
    createdAt?: Date | string;
};
export type PayRunAdjustmentUpdateWithoutPayRunInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumAdjustmentTypeFieldUpdateOperationsInput | $Enums.AdjustmentType;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutPayRunAdjustmentsNestedInput;
};
export type PayRunAdjustmentUncheckedUpdateWithoutPayRunInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumAdjustmentTypeFieldUpdateOperationsInput | $Enums.AdjustmentType;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayRunAdjustmentUncheckedUpdateManyWithoutPayRunInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumAdjustmentTypeFieldUpdateOperationsInput | $Enums.AdjustmentType;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayRunAdjustmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    payRunId?: boolean;
    employeeId?: boolean;
    type?: boolean;
    amount?: boolean;
    description?: boolean;
    addedBy?: boolean;
    createdAt?: boolean;
    payRun?: boolean | Prisma.PayRunDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payRunAdjustment"]>;
export type PayRunAdjustmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    payRunId?: boolean;
    employeeId?: boolean;
    type?: boolean;
    amount?: boolean;
    description?: boolean;
    addedBy?: boolean;
    createdAt?: boolean;
    payRun?: boolean | Prisma.PayRunDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payRunAdjustment"]>;
export type PayRunAdjustmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    payRunId?: boolean;
    employeeId?: boolean;
    type?: boolean;
    amount?: boolean;
    description?: boolean;
    addedBy?: boolean;
    createdAt?: boolean;
    payRun?: boolean | Prisma.PayRunDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payRunAdjustment"]>;
export type PayRunAdjustmentSelectScalar = {
    id?: boolean;
    payRunId?: boolean;
    employeeId?: boolean;
    type?: boolean;
    amount?: boolean;
    description?: boolean;
    addedBy?: boolean;
    createdAt?: boolean;
};
export type PayRunAdjustmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "payRunId" | "employeeId" | "type" | "amount" | "description" | "addedBy" | "createdAt", ExtArgs["result"]["payRunAdjustment"]>;
export type PayRunAdjustmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payRun?: boolean | Prisma.PayRunDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type PayRunAdjustmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payRun?: boolean | Prisma.PayRunDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type PayRunAdjustmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payRun?: boolean | Prisma.PayRunDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type $PayRunAdjustmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PayRunAdjustment";
    objects: {
        payRun: Prisma.$PayRunPayload<ExtArgs>;
        employee: Prisma.$EmployeePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        payRunId: string;
        employeeId: string;
        type: $Enums.AdjustmentType;
        amount: runtime.Decimal;
        description: string | null;
        addedBy: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["payRunAdjustment"]>;
    composites: {};
};
export type PayRunAdjustmentGetPayload<S extends boolean | null | undefined | PayRunAdjustmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PayRunAdjustmentPayload, S>;
export type PayRunAdjustmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PayRunAdjustmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PayRunAdjustmentCountAggregateInputType | true;
};
export interface PayRunAdjustmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PayRunAdjustment'];
        meta: {
            name: 'PayRunAdjustment';
        };
    };
    findUnique<T extends PayRunAdjustmentFindUniqueArgs>(args: Prisma.SelectSubset<T, PayRunAdjustmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PayRunAdjustmentClient<runtime.Types.Result.GetResult<Prisma.$PayRunAdjustmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PayRunAdjustmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PayRunAdjustmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PayRunAdjustmentClient<runtime.Types.Result.GetResult<Prisma.$PayRunAdjustmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PayRunAdjustmentFindFirstArgs>(args?: Prisma.SelectSubset<T, PayRunAdjustmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__PayRunAdjustmentClient<runtime.Types.Result.GetResult<Prisma.$PayRunAdjustmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PayRunAdjustmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PayRunAdjustmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PayRunAdjustmentClient<runtime.Types.Result.GetResult<Prisma.$PayRunAdjustmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PayRunAdjustmentFindManyArgs>(args?: Prisma.SelectSubset<T, PayRunAdjustmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayRunAdjustmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PayRunAdjustmentCreateArgs>(args: Prisma.SelectSubset<T, PayRunAdjustmentCreateArgs<ExtArgs>>): Prisma.Prisma__PayRunAdjustmentClient<runtime.Types.Result.GetResult<Prisma.$PayRunAdjustmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PayRunAdjustmentCreateManyArgs>(args?: Prisma.SelectSubset<T, PayRunAdjustmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PayRunAdjustmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PayRunAdjustmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayRunAdjustmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PayRunAdjustmentDeleteArgs>(args: Prisma.SelectSubset<T, PayRunAdjustmentDeleteArgs<ExtArgs>>): Prisma.Prisma__PayRunAdjustmentClient<runtime.Types.Result.GetResult<Prisma.$PayRunAdjustmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PayRunAdjustmentUpdateArgs>(args: Prisma.SelectSubset<T, PayRunAdjustmentUpdateArgs<ExtArgs>>): Prisma.Prisma__PayRunAdjustmentClient<runtime.Types.Result.GetResult<Prisma.$PayRunAdjustmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PayRunAdjustmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, PayRunAdjustmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PayRunAdjustmentUpdateManyArgs>(args: Prisma.SelectSubset<T, PayRunAdjustmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PayRunAdjustmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PayRunAdjustmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayRunAdjustmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PayRunAdjustmentUpsertArgs>(args: Prisma.SelectSubset<T, PayRunAdjustmentUpsertArgs<ExtArgs>>): Prisma.Prisma__PayRunAdjustmentClient<runtime.Types.Result.GetResult<Prisma.$PayRunAdjustmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PayRunAdjustmentCountArgs>(args?: Prisma.Subset<T, PayRunAdjustmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PayRunAdjustmentCountAggregateOutputType> : number>;
    aggregate<T extends PayRunAdjustmentAggregateArgs>(args: Prisma.Subset<T, PayRunAdjustmentAggregateArgs>): Prisma.PrismaPromise<GetPayRunAdjustmentAggregateType<T>>;
    groupBy<T extends PayRunAdjustmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PayRunAdjustmentGroupByArgs['orderBy'];
    } : {
        orderBy?: PayRunAdjustmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PayRunAdjustmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayRunAdjustmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PayRunAdjustmentFieldRefs;
}
export interface Prisma__PayRunAdjustmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    payRun<T extends Prisma.PayRunDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PayRunDefaultArgs<ExtArgs>>): Prisma.Prisma__PayRunClient<runtime.Types.Result.GetResult<Prisma.$PayRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    employee<T extends Prisma.EmployeeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmployeeDefaultArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PayRunAdjustmentFieldRefs {
    readonly id: Prisma.FieldRef<"PayRunAdjustment", 'String'>;
    readonly payRunId: Prisma.FieldRef<"PayRunAdjustment", 'String'>;
    readonly employeeId: Prisma.FieldRef<"PayRunAdjustment", 'String'>;
    readonly type: Prisma.FieldRef<"PayRunAdjustment", 'AdjustmentType'>;
    readonly amount: Prisma.FieldRef<"PayRunAdjustment", 'Decimal'>;
    readonly description: Prisma.FieldRef<"PayRunAdjustment", 'String'>;
    readonly addedBy: Prisma.FieldRef<"PayRunAdjustment", 'String'>;
    readonly createdAt: Prisma.FieldRef<"PayRunAdjustment", 'DateTime'>;
}
export type PayRunAdjustmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayRunAdjustmentSelect<ExtArgs> | null;
    omit?: Prisma.PayRunAdjustmentOmit<ExtArgs> | null;
    include?: Prisma.PayRunAdjustmentInclude<ExtArgs> | null;
    where: Prisma.PayRunAdjustmentWhereUniqueInput;
};
export type PayRunAdjustmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayRunAdjustmentSelect<ExtArgs> | null;
    omit?: Prisma.PayRunAdjustmentOmit<ExtArgs> | null;
    include?: Prisma.PayRunAdjustmentInclude<ExtArgs> | null;
    where: Prisma.PayRunAdjustmentWhereUniqueInput;
};
export type PayRunAdjustmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayRunAdjustmentSelect<ExtArgs> | null;
    omit?: Prisma.PayRunAdjustmentOmit<ExtArgs> | null;
    include?: Prisma.PayRunAdjustmentInclude<ExtArgs> | null;
    where?: Prisma.PayRunAdjustmentWhereInput;
    orderBy?: Prisma.PayRunAdjustmentOrderByWithRelationInput | Prisma.PayRunAdjustmentOrderByWithRelationInput[];
    cursor?: Prisma.PayRunAdjustmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PayRunAdjustmentScalarFieldEnum | Prisma.PayRunAdjustmentScalarFieldEnum[];
};
export type PayRunAdjustmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayRunAdjustmentSelect<ExtArgs> | null;
    omit?: Prisma.PayRunAdjustmentOmit<ExtArgs> | null;
    include?: Prisma.PayRunAdjustmentInclude<ExtArgs> | null;
    where?: Prisma.PayRunAdjustmentWhereInput;
    orderBy?: Prisma.PayRunAdjustmentOrderByWithRelationInput | Prisma.PayRunAdjustmentOrderByWithRelationInput[];
    cursor?: Prisma.PayRunAdjustmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PayRunAdjustmentScalarFieldEnum | Prisma.PayRunAdjustmentScalarFieldEnum[];
};
export type PayRunAdjustmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayRunAdjustmentSelect<ExtArgs> | null;
    omit?: Prisma.PayRunAdjustmentOmit<ExtArgs> | null;
    include?: Prisma.PayRunAdjustmentInclude<ExtArgs> | null;
    where?: Prisma.PayRunAdjustmentWhereInput;
    orderBy?: Prisma.PayRunAdjustmentOrderByWithRelationInput | Prisma.PayRunAdjustmentOrderByWithRelationInput[];
    cursor?: Prisma.PayRunAdjustmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PayRunAdjustmentScalarFieldEnum | Prisma.PayRunAdjustmentScalarFieldEnum[];
};
export type PayRunAdjustmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayRunAdjustmentSelect<ExtArgs> | null;
    omit?: Prisma.PayRunAdjustmentOmit<ExtArgs> | null;
    include?: Prisma.PayRunAdjustmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PayRunAdjustmentCreateInput, Prisma.PayRunAdjustmentUncheckedCreateInput>;
};
export type PayRunAdjustmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PayRunAdjustmentCreateManyInput | Prisma.PayRunAdjustmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PayRunAdjustmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayRunAdjustmentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PayRunAdjustmentOmit<ExtArgs> | null;
    data: Prisma.PayRunAdjustmentCreateManyInput | Prisma.PayRunAdjustmentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PayRunAdjustmentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PayRunAdjustmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayRunAdjustmentSelect<ExtArgs> | null;
    omit?: Prisma.PayRunAdjustmentOmit<ExtArgs> | null;
    include?: Prisma.PayRunAdjustmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PayRunAdjustmentUpdateInput, Prisma.PayRunAdjustmentUncheckedUpdateInput>;
    where: Prisma.PayRunAdjustmentWhereUniqueInput;
};
export type PayRunAdjustmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PayRunAdjustmentUpdateManyMutationInput, Prisma.PayRunAdjustmentUncheckedUpdateManyInput>;
    where?: Prisma.PayRunAdjustmentWhereInput;
    limit?: number;
};
export type PayRunAdjustmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayRunAdjustmentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PayRunAdjustmentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PayRunAdjustmentUpdateManyMutationInput, Prisma.PayRunAdjustmentUncheckedUpdateManyInput>;
    where?: Prisma.PayRunAdjustmentWhereInput;
    limit?: number;
    include?: Prisma.PayRunAdjustmentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PayRunAdjustmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayRunAdjustmentSelect<ExtArgs> | null;
    omit?: Prisma.PayRunAdjustmentOmit<ExtArgs> | null;
    include?: Prisma.PayRunAdjustmentInclude<ExtArgs> | null;
    where: Prisma.PayRunAdjustmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayRunAdjustmentCreateInput, Prisma.PayRunAdjustmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PayRunAdjustmentUpdateInput, Prisma.PayRunAdjustmentUncheckedUpdateInput>;
};
export type PayRunAdjustmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayRunAdjustmentSelect<ExtArgs> | null;
    omit?: Prisma.PayRunAdjustmentOmit<ExtArgs> | null;
    include?: Prisma.PayRunAdjustmentInclude<ExtArgs> | null;
    where: Prisma.PayRunAdjustmentWhereUniqueInput;
};
export type PayRunAdjustmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayRunAdjustmentWhereInput;
    limit?: number;
};
export type PayRunAdjustmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayRunAdjustmentSelect<ExtArgs> | null;
    omit?: Prisma.PayRunAdjustmentOmit<ExtArgs> | null;
    include?: Prisma.PayRunAdjustmentInclude<ExtArgs> | null;
};
