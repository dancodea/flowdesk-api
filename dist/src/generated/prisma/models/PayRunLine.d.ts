import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PayRunLineModel = runtime.Types.Result.DefaultSelection<Prisma.$PayRunLinePayload>;
export type AggregatePayRunLine = {
    _count: PayRunLineCountAggregateOutputType | null;
    _avg: PayRunLineAvgAggregateOutputType | null;
    _sum: PayRunLineSumAggregateOutputType | null;
    _min: PayRunLineMinAggregateOutputType | null;
    _max: PayRunLineMaxAggregateOutputType | null;
};
export type PayRunLineAvgAggregateOutputType = {
    grossPay: runtime.Decimal | null;
    netPay: runtime.Decimal | null;
    totalDeductions: runtime.Decimal | null;
};
export type PayRunLineSumAggregateOutputType = {
    grossPay: runtime.Decimal | null;
    netPay: runtime.Decimal | null;
    totalDeductions: runtime.Decimal | null;
};
export type PayRunLineMinAggregateOutputType = {
    id: string | null;
    payRunId: string | null;
    employeeId: string | null;
    grossPay: runtime.Decimal | null;
    netPay: runtime.Decimal | null;
    totalDeductions: runtime.Decimal | null;
    isExcluded: boolean | null;
    exclusionReason: string | null;
    createdAt: Date | null;
};
export type PayRunLineMaxAggregateOutputType = {
    id: string | null;
    payRunId: string | null;
    employeeId: string | null;
    grossPay: runtime.Decimal | null;
    netPay: runtime.Decimal | null;
    totalDeductions: runtime.Decimal | null;
    isExcluded: boolean | null;
    exclusionReason: string | null;
    createdAt: Date | null;
};
export type PayRunLineCountAggregateOutputType = {
    id: number;
    payRunId: number;
    employeeId: number;
    grossPay: number;
    netPay: number;
    totalDeductions: number;
    isExcluded: number;
    exclusionReason: number;
    earnings: number;
    deductions: number;
    taxes: number;
    createdAt: number;
    _all: number;
};
export type PayRunLineAvgAggregateInputType = {
    grossPay?: true;
    netPay?: true;
    totalDeductions?: true;
};
export type PayRunLineSumAggregateInputType = {
    grossPay?: true;
    netPay?: true;
    totalDeductions?: true;
};
export type PayRunLineMinAggregateInputType = {
    id?: true;
    payRunId?: true;
    employeeId?: true;
    grossPay?: true;
    netPay?: true;
    totalDeductions?: true;
    isExcluded?: true;
    exclusionReason?: true;
    createdAt?: true;
};
export type PayRunLineMaxAggregateInputType = {
    id?: true;
    payRunId?: true;
    employeeId?: true;
    grossPay?: true;
    netPay?: true;
    totalDeductions?: true;
    isExcluded?: true;
    exclusionReason?: true;
    createdAt?: true;
};
export type PayRunLineCountAggregateInputType = {
    id?: true;
    payRunId?: true;
    employeeId?: true;
    grossPay?: true;
    netPay?: true;
    totalDeductions?: true;
    isExcluded?: true;
    exclusionReason?: true;
    earnings?: true;
    deductions?: true;
    taxes?: true;
    createdAt?: true;
    _all?: true;
};
export type PayRunLineAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayRunLineWhereInput;
    orderBy?: Prisma.PayRunLineOrderByWithRelationInput | Prisma.PayRunLineOrderByWithRelationInput[];
    cursor?: Prisma.PayRunLineWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PayRunLineCountAggregateInputType;
    _avg?: PayRunLineAvgAggregateInputType;
    _sum?: PayRunLineSumAggregateInputType;
    _min?: PayRunLineMinAggregateInputType;
    _max?: PayRunLineMaxAggregateInputType;
};
export type GetPayRunLineAggregateType<T extends PayRunLineAggregateArgs> = {
    [P in keyof T & keyof AggregatePayRunLine]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePayRunLine[P]> : Prisma.GetScalarType<T[P], AggregatePayRunLine[P]>;
};
export type PayRunLineGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayRunLineWhereInput;
    orderBy?: Prisma.PayRunLineOrderByWithAggregationInput | Prisma.PayRunLineOrderByWithAggregationInput[];
    by: Prisma.PayRunLineScalarFieldEnum[] | Prisma.PayRunLineScalarFieldEnum;
    having?: Prisma.PayRunLineScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PayRunLineCountAggregateInputType | true;
    _avg?: PayRunLineAvgAggregateInputType;
    _sum?: PayRunLineSumAggregateInputType;
    _min?: PayRunLineMinAggregateInputType;
    _max?: PayRunLineMaxAggregateInputType;
};
export type PayRunLineGroupByOutputType = {
    id: string;
    payRunId: string;
    employeeId: string;
    grossPay: runtime.Decimal;
    netPay: runtime.Decimal;
    totalDeductions: runtime.Decimal;
    isExcluded: boolean;
    exclusionReason: string | null;
    earnings: runtime.JsonValue | null;
    deductions: runtime.JsonValue | null;
    taxes: runtime.JsonValue | null;
    createdAt: Date;
    _count: PayRunLineCountAggregateOutputType | null;
    _avg: PayRunLineAvgAggregateOutputType | null;
    _sum: PayRunLineSumAggregateOutputType | null;
    _min: PayRunLineMinAggregateOutputType | null;
    _max: PayRunLineMaxAggregateOutputType | null;
};
export type GetPayRunLineGroupByPayload<T extends PayRunLineGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PayRunLineGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PayRunLineGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PayRunLineGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PayRunLineGroupByOutputType[P]>;
}>>;
export type PayRunLineWhereInput = {
    AND?: Prisma.PayRunLineWhereInput | Prisma.PayRunLineWhereInput[];
    OR?: Prisma.PayRunLineWhereInput[];
    NOT?: Prisma.PayRunLineWhereInput | Prisma.PayRunLineWhereInput[];
    id?: Prisma.UuidFilter<"PayRunLine"> | string;
    payRunId?: Prisma.UuidFilter<"PayRunLine"> | string;
    employeeId?: Prisma.UuidFilter<"PayRunLine"> | string;
    grossPay?: Prisma.DecimalFilter<"PayRunLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netPay?: Prisma.DecimalFilter<"PayRunLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDeductions?: Prisma.DecimalFilter<"PayRunLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isExcluded?: Prisma.BoolFilter<"PayRunLine"> | boolean;
    exclusionReason?: Prisma.StringNullableFilter<"PayRunLine"> | string | null;
    earnings?: Prisma.JsonNullableFilter<"PayRunLine">;
    deductions?: Prisma.JsonNullableFilter<"PayRunLine">;
    taxes?: Prisma.JsonNullableFilter<"PayRunLine">;
    createdAt?: Prisma.DateTimeFilter<"PayRunLine"> | Date | string;
    payRun?: Prisma.XOR<Prisma.PayRunScalarRelationFilter, Prisma.PayRunWhereInput>;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
};
export type PayRunLineOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    payRunId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    grossPay?: Prisma.SortOrder;
    netPay?: Prisma.SortOrder;
    totalDeductions?: Prisma.SortOrder;
    isExcluded?: Prisma.SortOrder;
    exclusionReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    earnings?: Prisma.SortOrderInput | Prisma.SortOrder;
    deductions?: Prisma.SortOrderInput | Prisma.SortOrder;
    taxes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    payRun?: Prisma.PayRunOrderByWithRelationInput;
    employee?: Prisma.EmployeeOrderByWithRelationInput;
};
export type PayRunLineWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PayRunLineWhereInput | Prisma.PayRunLineWhereInput[];
    OR?: Prisma.PayRunLineWhereInput[];
    NOT?: Prisma.PayRunLineWhereInput | Prisma.PayRunLineWhereInput[];
    payRunId?: Prisma.UuidFilter<"PayRunLine"> | string;
    employeeId?: Prisma.UuidFilter<"PayRunLine"> | string;
    grossPay?: Prisma.DecimalFilter<"PayRunLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netPay?: Prisma.DecimalFilter<"PayRunLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDeductions?: Prisma.DecimalFilter<"PayRunLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isExcluded?: Prisma.BoolFilter<"PayRunLine"> | boolean;
    exclusionReason?: Prisma.StringNullableFilter<"PayRunLine"> | string | null;
    earnings?: Prisma.JsonNullableFilter<"PayRunLine">;
    deductions?: Prisma.JsonNullableFilter<"PayRunLine">;
    taxes?: Prisma.JsonNullableFilter<"PayRunLine">;
    createdAt?: Prisma.DateTimeFilter<"PayRunLine"> | Date | string;
    payRun?: Prisma.XOR<Prisma.PayRunScalarRelationFilter, Prisma.PayRunWhereInput>;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
}, "id">;
export type PayRunLineOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    payRunId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    grossPay?: Prisma.SortOrder;
    netPay?: Prisma.SortOrder;
    totalDeductions?: Prisma.SortOrder;
    isExcluded?: Prisma.SortOrder;
    exclusionReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    earnings?: Prisma.SortOrderInput | Prisma.SortOrder;
    deductions?: Prisma.SortOrderInput | Prisma.SortOrder;
    taxes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PayRunLineCountOrderByAggregateInput;
    _avg?: Prisma.PayRunLineAvgOrderByAggregateInput;
    _max?: Prisma.PayRunLineMaxOrderByAggregateInput;
    _min?: Prisma.PayRunLineMinOrderByAggregateInput;
    _sum?: Prisma.PayRunLineSumOrderByAggregateInput;
};
export type PayRunLineScalarWhereWithAggregatesInput = {
    AND?: Prisma.PayRunLineScalarWhereWithAggregatesInput | Prisma.PayRunLineScalarWhereWithAggregatesInput[];
    OR?: Prisma.PayRunLineScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PayRunLineScalarWhereWithAggregatesInput | Prisma.PayRunLineScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PayRunLine"> | string;
    payRunId?: Prisma.UuidWithAggregatesFilter<"PayRunLine"> | string;
    employeeId?: Prisma.UuidWithAggregatesFilter<"PayRunLine"> | string;
    grossPay?: Prisma.DecimalWithAggregatesFilter<"PayRunLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netPay?: Prisma.DecimalWithAggregatesFilter<"PayRunLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDeductions?: Prisma.DecimalWithAggregatesFilter<"PayRunLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isExcluded?: Prisma.BoolWithAggregatesFilter<"PayRunLine"> | boolean;
    exclusionReason?: Prisma.StringNullableWithAggregatesFilter<"PayRunLine"> | string | null;
    earnings?: Prisma.JsonNullableWithAggregatesFilter<"PayRunLine">;
    deductions?: Prisma.JsonNullableWithAggregatesFilter<"PayRunLine">;
    taxes?: Prisma.JsonNullableWithAggregatesFilter<"PayRunLine">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PayRunLine"> | Date | string;
};
export type PayRunLineCreateInput = {
    id?: string;
    grossPay?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netPay?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDeductions?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    isExcluded?: boolean;
    exclusionReason?: string | null;
    earnings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    deductions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    taxes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    payRun: Prisma.PayRunCreateNestedOneWithoutLinesInput;
    employee: Prisma.EmployeeCreateNestedOneWithoutPayRunLinesInput;
};
export type PayRunLineUncheckedCreateInput = {
    id?: string;
    payRunId: string;
    employeeId: string;
    grossPay?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netPay?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDeductions?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    isExcluded?: boolean;
    exclusionReason?: string | null;
    earnings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    deductions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    taxes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type PayRunLineUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    grossPay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netPay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDeductions?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isExcluded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    exclusionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    earnings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    deductions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    taxes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payRun?: Prisma.PayRunUpdateOneRequiredWithoutLinesNestedInput;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutPayRunLinesNestedInput;
};
export type PayRunLineUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    payRunId?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    grossPay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netPay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDeductions?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isExcluded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    exclusionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    earnings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    deductions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    taxes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayRunLineCreateManyInput = {
    id?: string;
    payRunId: string;
    employeeId: string;
    grossPay?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netPay?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDeductions?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    isExcluded?: boolean;
    exclusionReason?: string | null;
    earnings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    deductions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    taxes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type PayRunLineUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    grossPay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netPay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDeductions?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isExcluded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    exclusionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    earnings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    deductions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    taxes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayRunLineUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    payRunId?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    grossPay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netPay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDeductions?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isExcluded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    exclusionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    earnings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    deductions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    taxes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayRunLineListRelationFilter = {
    every?: Prisma.PayRunLineWhereInput;
    some?: Prisma.PayRunLineWhereInput;
    none?: Prisma.PayRunLineWhereInput;
};
export type PayRunLineOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PayRunLineCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    payRunId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    grossPay?: Prisma.SortOrder;
    netPay?: Prisma.SortOrder;
    totalDeductions?: Prisma.SortOrder;
    isExcluded?: Prisma.SortOrder;
    exclusionReason?: Prisma.SortOrder;
    earnings?: Prisma.SortOrder;
    deductions?: Prisma.SortOrder;
    taxes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PayRunLineAvgOrderByAggregateInput = {
    grossPay?: Prisma.SortOrder;
    netPay?: Prisma.SortOrder;
    totalDeductions?: Prisma.SortOrder;
};
export type PayRunLineMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    payRunId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    grossPay?: Prisma.SortOrder;
    netPay?: Prisma.SortOrder;
    totalDeductions?: Prisma.SortOrder;
    isExcluded?: Prisma.SortOrder;
    exclusionReason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PayRunLineMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    payRunId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    grossPay?: Prisma.SortOrder;
    netPay?: Prisma.SortOrder;
    totalDeductions?: Prisma.SortOrder;
    isExcluded?: Prisma.SortOrder;
    exclusionReason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PayRunLineSumOrderByAggregateInput = {
    grossPay?: Prisma.SortOrder;
    netPay?: Prisma.SortOrder;
    totalDeductions?: Prisma.SortOrder;
};
export type PayRunLineCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.PayRunLineCreateWithoutEmployeeInput, Prisma.PayRunLineUncheckedCreateWithoutEmployeeInput> | Prisma.PayRunLineCreateWithoutEmployeeInput[] | Prisma.PayRunLineUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.PayRunLineCreateOrConnectWithoutEmployeeInput | Prisma.PayRunLineCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.PayRunLineCreateManyEmployeeInputEnvelope;
    connect?: Prisma.PayRunLineWhereUniqueInput | Prisma.PayRunLineWhereUniqueInput[];
};
export type PayRunLineUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.PayRunLineCreateWithoutEmployeeInput, Prisma.PayRunLineUncheckedCreateWithoutEmployeeInput> | Prisma.PayRunLineCreateWithoutEmployeeInput[] | Prisma.PayRunLineUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.PayRunLineCreateOrConnectWithoutEmployeeInput | Prisma.PayRunLineCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.PayRunLineCreateManyEmployeeInputEnvelope;
    connect?: Prisma.PayRunLineWhereUniqueInput | Prisma.PayRunLineWhereUniqueInput[];
};
export type PayRunLineUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.PayRunLineCreateWithoutEmployeeInput, Prisma.PayRunLineUncheckedCreateWithoutEmployeeInput> | Prisma.PayRunLineCreateWithoutEmployeeInput[] | Prisma.PayRunLineUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.PayRunLineCreateOrConnectWithoutEmployeeInput | Prisma.PayRunLineCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.PayRunLineUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.PayRunLineUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.PayRunLineCreateManyEmployeeInputEnvelope;
    set?: Prisma.PayRunLineWhereUniqueInput | Prisma.PayRunLineWhereUniqueInput[];
    disconnect?: Prisma.PayRunLineWhereUniqueInput | Prisma.PayRunLineWhereUniqueInput[];
    delete?: Prisma.PayRunLineWhereUniqueInput | Prisma.PayRunLineWhereUniqueInput[];
    connect?: Prisma.PayRunLineWhereUniqueInput | Prisma.PayRunLineWhereUniqueInput[];
    update?: Prisma.PayRunLineUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.PayRunLineUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.PayRunLineUpdateManyWithWhereWithoutEmployeeInput | Prisma.PayRunLineUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.PayRunLineScalarWhereInput | Prisma.PayRunLineScalarWhereInput[];
};
export type PayRunLineUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.PayRunLineCreateWithoutEmployeeInput, Prisma.PayRunLineUncheckedCreateWithoutEmployeeInput> | Prisma.PayRunLineCreateWithoutEmployeeInput[] | Prisma.PayRunLineUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.PayRunLineCreateOrConnectWithoutEmployeeInput | Prisma.PayRunLineCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.PayRunLineUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.PayRunLineUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.PayRunLineCreateManyEmployeeInputEnvelope;
    set?: Prisma.PayRunLineWhereUniqueInput | Prisma.PayRunLineWhereUniqueInput[];
    disconnect?: Prisma.PayRunLineWhereUniqueInput | Prisma.PayRunLineWhereUniqueInput[];
    delete?: Prisma.PayRunLineWhereUniqueInput | Prisma.PayRunLineWhereUniqueInput[];
    connect?: Prisma.PayRunLineWhereUniqueInput | Prisma.PayRunLineWhereUniqueInput[];
    update?: Prisma.PayRunLineUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.PayRunLineUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.PayRunLineUpdateManyWithWhereWithoutEmployeeInput | Prisma.PayRunLineUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.PayRunLineScalarWhereInput | Prisma.PayRunLineScalarWhereInput[];
};
export type PayRunLineCreateNestedManyWithoutPayRunInput = {
    create?: Prisma.XOR<Prisma.PayRunLineCreateWithoutPayRunInput, Prisma.PayRunLineUncheckedCreateWithoutPayRunInput> | Prisma.PayRunLineCreateWithoutPayRunInput[] | Prisma.PayRunLineUncheckedCreateWithoutPayRunInput[];
    connectOrCreate?: Prisma.PayRunLineCreateOrConnectWithoutPayRunInput | Prisma.PayRunLineCreateOrConnectWithoutPayRunInput[];
    createMany?: Prisma.PayRunLineCreateManyPayRunInputEnvelope;
    connect?: Prisma.PayRunLineWhereUniqueInput | Prisma.PayRunLineWhereUniqueInput[];
};
export type PayRunLineUncheckedCreateNestedManyWithoutPayRunInput = {
    create?: Prisma.XOR<Prisma.PayRunLineCreateWithoutPayRunInput, Prisma.PayRunLineUncheckedCreateWithoutPayRunInput> | Prisma.PayRunLineCreateWithoutPayRunInput[] | Prisma.PayRunLineUncheckedCreateWithoutPayRunInput[];
    connectOrCreate?: Prisma.PayRunLineCreateOrConnectWithoutPayRunInput | Prisma.PayRunLineCreateOrConnectWithoutPayRunInput[];
    createMany?: Prisma.PayRunLineCreateManyPayRunInputEnvelope;
    connect?: Prisma.PayRunLineWhereUniqueInput | Prisma.PayRunLineWhereUniqueInput[];
};
export type PayRunLineUpdateManyWithoutPayRunNestedInput = {
    create?: Prisma.XOR<Prisma.PayRunLineCreateWithoutPayRunInput, Prisma.PayRunLineUncheckedCreateWithoutPayRunInput> | Prisma.PayRunLineCreateWithoutPayRunInput[] | Prisma.PayRunLineUncheckedCreateWithoutPayRunInput[];
    connectOrCreate?: Prisma.PayRunLineCreateOrConnectWithoutPayRunInput | Prisma.PayRunLineCreateOrConnectWithoutPayRunInput[];
    upsert?: Prisma.PayRunLineUpsertWithWhereUniqueWithoutPayRunInput | Prisma.PayRunLineUpsertWithWhereUniqueWithoutPayRunInput[];
    createMany?: Prisma.PayRunLineCreateManyPayRunInputEnvelope;
    set?: Prisma.PayRunLineWhereUniqueInput | Prisma.PayRunLineWhereUniqueInput[];
    disconnect?: Prisma.PayRunLineWhereUniqueInput | Prisma.PayRunLineWhereUniqueInput[];
    delete?: Prisma.PayRunLineWhereUniqueInput | Prisma.PayRunLineWhereUniqueInput[];
    connect?: Prisma.PayRunLineWhereUniqueInput | Prisma.PayRunLineWhereUniqueInput[];
    update?: Prisma.PayRunLineUpdateWithWhereUniqueWithoutPayRunInput | Prisma.PayRunLineUpdateWithWhereUniqueWithoutPayRunInput[];
    updateMany?: Prisma.PayRunLineUpdateManyWithWhereWithoutPayRunInput | Prisma.PayRunLineUpdateManyWithWhereWithoutPayRunInput[];
    deleteMany?: Prisma.PayRunLineScalarWhereInput | Prisma.PayRunLineScalarWhereInput[];
};
export type PayRunLineUncheckedUpdateManyWithoutPayRunNestedInput = {
    create?: Prisma.XOR<Prisma.PayRunLineCreateWithoutPayRunInput, Prisma.PayRunLineUncheckedCreateWithoutPayRunInput> | Prisma.PayRunLineCreateWithoutPayRunInput[] | Prisma.PayRunLineUncheckedCreateWithoutPayRunInput[];
    connectOrCreate?: Prisma.PayRunLineCreateOrConnectWithoutPayRunInput | Prisma.PayRunLineCreateOrConnectWithoutPayRunInput[];
    upsert?: Prisma.PayRunLineUpsertWithWhereUniqueWithoutPayRunInput | Prisma.PayRunLineUpsertWithWhereUniqueWithoutPayRunInput[];
    createMany?: Prisma.PayRunLineCreateManyPayRunInputEnvelope;
    set?: Prisma.PayRunLineWhereUniqueInput | Prisma.PayRunLineWhereUniqueInput[];
    disconnect?: Prisma.PayRunLineWhereUniqueInput | Prisma.PayRunLineWhereUniqueInput[];
    delete?: Prisma.PayRunLineWhereUniqueInput | Prisma.PayRunLineWhereUniqueInput[];
    connect?: Prisma.PayRunLineWhereUniqueInput | Prisma.PayRunLineWhereUniqueInput[];
    update?: Prisma.PayRunLineUpdateWithWhereUniqueWithoutPayRunInput | Prisma.PayRunLineUpdateWithWhereUniqueWithoutPayRunInput[];
    updateMany?: Prisma.PayRunLineUpdateManyWithWhereWithoutPayRunInput | Prisma.PayRunLineUpdateManyWithWhereWithoutPayRunInput[];
    deleteMany?: Prisma.PayRunLineScalarWhereInput | Prisma.PayRunLineScalarWhereInput[];
};
export type PayRunLineCreateWithoutEmployeeInput = {
    id?: string;
    grossPay?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netPay?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDeductions?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    isExcluded?: boolean;
    exclusionReason?: string | null;
    earnings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    deductions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    taxes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    payRun: Prisma.PayRunCreateNestedOneWithoutLinesInput;
};
export type PayRunLineUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    payRunId: string;
    grossPay?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netPay?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDeductions?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    isExcluded?: boolean;
    exclusionReason?: string | null;
    earnings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    deductions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    taxes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type PayRunLineCreateOrConnectWithoutEmployeeInput = {
    where: Prisma.PayRunLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayRunLineCreateWithoutEmployeeInput, Prisma.PayRunLineUncheckedCreateWithoutEmployeeInput>;
};
export type PayRunLineCreateManyEmployeeInputEnvelope = {
    data: Prisma.PayRunLineCreateManyEmployeeInput | Prisma.PayRunLineCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
};
export type PayRunLineUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.PayRunLineWhereUniqueInput;
    update: Prisma.XOR<Prisma.PayRunLineUpdateWithoutEmployeeInput, Prisma.PayRunLineUncheckedUpdateWithoutEmployeeInput>;
    create: Prisma.XOR<Prisma.PayRunLineCreateWithoutEmployeeInput, Prisma.PayRunLineUncheckedCreateWithoutEmployeeInput>;
};
export type PayRunLineUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.PayRunLineWhereUniqueInput;
    data: Prisma.XOR<Prisma.PayRunLineUpdateWithoutEmployeeInput, Prisma.PayRunLineUncheckedUpdateWithoutEmployeeInput>;
};
export type PayRunLineUpdateManyWithWhereWithoutEmployeeInput = {
    where: Prisma.PayRunLineScalarWhereInput;
    data: Prisma.XOR<Prisma.PayRunLineUpdateManyMutationInput, Prisma.PayRunLineUncheckedUpdateManyWithoutEmployeeInput>;
};
export type PayRunLineScalarWhereInput = {
    AND?: Prisma.PayRunLineScalarWhereInput | Prisma.PayRunLineScalarWhereInput[];
    OR?: Prisma.PayRunLineScalarWhereInput[];
    NOT?: Prisma.PayRunLineScalarWhereInput | Prisma.PayRunLineScalarWhereInput[];
    id?: Prisma.UuidFilter<"PayRunLine"> | string;
    payRunId?: Prisma.UuidFilter<"PayRunLine"> | string;
    employeeId?: Prisma.UuidFilter<"PayRunLine"> | string;
    grossPay?: Prisma.DecimalFilter<"PayRunLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netPay?: Prisma.DecimalFilter<"PayRunLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDeductions?: Prisma.DecimalFilter<"PayRunLine"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isExcluded?: Prisma.BoolFilter<"PayRunLine"> | boolean;
    exclusionReason?: Prisma.StringNullableFilter<"PayRunLine"> | string | null;
    earnings?: Prisma.JsonNullableFilter<"PayRunLine">;
    deductions?: Prisma.JsonNullableFilter<"PayRunLine">;
    taxes?: Prisma.JsonNullableFilter<"PayRunLine">;
    createdAt?: Prisma.DateTimeFilter<"PayRunLine"> | Date | string;
};
export type PayRunLineCreateWithoutPayRunInput = {
    id?: string;
    grossPay?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netPay?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDeductions?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    isExcluded?: boolean;
    exclusionReason?: string | null;
    earnings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    deductions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    taxes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutPayRunLinesInput;
};
export type PayRunLineUncheckedCreateWithoutPayRunInput = {
    id?: string;
    employeeId: string;
    grossPay?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netPay?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDeductions?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    isExcluded?: boolean;
    exclusionReason?: string | null;
    earnings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    deductions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    taxes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type PayRunLineCreateOrConnectWithoutPayRunInput = {
    where: Prisma.PayRunLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayRunLineCreateWithoutPayRunInput, Prisma.PayRunLineUncheckedCreateWithoutPayRunInput>;
};
export type PayRunLineCreateManyPayRunInputEnvelope = {
    data: Prisma.PayRunLineCreateManyPayRunInput | Prisma.PayRunLineCreateManyPayRunInput[];
    skipDuplicates?: boolean;
};
export type PayRunLineUpsertWithWhereUniqueWithoutPayRunInput = {
    where: Prisma.PayRunLineWhereUniqueInput;
    update: Prisma.XOR<Prisma.PayRunLineUpdateWithoutPayRunInput, Prisma.PayRunLineUncheckedUpdateWithoutPayRunInput>;
    create: Prisma.XOR<Prisma.PayRunLineCreateWithoutPayRunInput, Prisma.PayRunLineUncheckedCreateWithoutPayRunInput>;
};
export type PayRunLineUpdateWithWhereUniqueWithoutPayRunInput = {
    where: Prisma.PayRunLineWhereUniqueInput;
    data: Prisma.XOR<Prisma.PayRunLineUpdateWithoutPayRunInput, Prisma.PayRunLineUncheckedUpdateWithoutPayRunInput>;
};
export type PayRunLineUpdateManyWithWhereWithoutPayRunInput = {
    where: Prisma.PayRunLineScalarWhereInput;
    data: Prisma.XOR<Prisma.PayRunLineUpdateManyMutationInput, Prisma.PayRunLineUncheckedUpdateManyWithoutPayRunInput>;
};
export type PayRunLineCreateManyEmployeeInput = {
    id?: string;
    payRunId: string;
    grossPay?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netPay?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDeductions?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    isExcluded?: boolean;
    exclusionReason?: string | null;
    earnings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    deductions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    taxes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type PayRunLineUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    grossPay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netPay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDeductions?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isExcluded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    exclusionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    earnings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    deductions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    taxes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payRun?: Prisma.PayRunUpdateOneRequiredWithoutLinesNestedInput;
};
export type PayRunLineUncheckedUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    payRunId?: Prisma.StringFieldUpdateOperationsInput | string;
    grossPay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netPay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDeductions?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isExcluded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    exclusionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    earnings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    deductions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    taxes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayRunLineUncheckedUpdateManyWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    payRunId?: Prisma.StringFieldUpdateOperationsInput | string;
    grossPay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netPay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDeductions?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isExcluded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    exclusionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    earnings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    deductions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    taxes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayRunLineCreateManyPayRunInput = {
    id?: string;
    employeeId: string;
    grossPay?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    netPay?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDeductions?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    isExcluded?: boolean;
    exclusionReason?: string | null;
    earnings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    deductions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    taxes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type PayRunLineUpdateWithoutPayRunInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    grossPay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netPay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDeductions?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isExcluded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    exclusionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    earnings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    deductions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    taxes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutPayRunLinesNestedInput;
};
export type PayRunLineUncheckedUpdateWithoutPayRunInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    grossPay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netPay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDeductions?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isExcluded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    exclusionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    earnings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    deductions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    taxes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayRunLineUncheckedUpdateManyWithoutPayRunInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    grossPay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    netPay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDeductions?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isExcluded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    exclusionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    earnings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    deductions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    taxes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayRunLineSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    payRunId?: boolean;
    employeeId?: boolean;
    grossPay?: boolean;
    netPay?: boolean;
    totalDeductions?: boolean;
    isExcluded?: boolean;
    exclusionReason?: boolean;
    earnings?: boolean;
    deductions?: boolean;
    taxes?: boolean;
    createdAt?: boolean;
    payRun?: boolean | Prisma.PayRunDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payRunLine"]>;
export type PayRunLineSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    payRunId?: boolean;
    employeeId?: boolean;
    grossPay?: boolean;
    netPay?: boolean;
    totalDeductions?: boolean;
    isExcluded?: boolean;
    exclusionReason?: boolean;
    earnings?: boolean;
    deductions?: boolean;
    taxes?: boolean;
    createdAt?: boolean;
    payRun?: boolean | Prisma.PayRunDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payRunLine"]>;
export type PayRunLineSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    payRunId?: boolean;
    employeeId?: boolean;
    grossPay?: boolean;
    netPay?: boolean;
    totalDeductions?: boolean;
    isExcluded?: boolean;
    exclusionReason?: boolean;
    earnings?: boolean;
    deductions?: boolean;
    taxes?: boolean;
    createdAt?: boolean;
    payRun?: boolean | Prisma.PayRunDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payRunLine"]>;
export type PayRunLineSelectScalar = {
    id?: boolean;
    payRunId?: boolean;
    employeeId?: boolean;
    grossPay?: boolean;
    netPay?: boolean;
    totalDeductions?: boolean;
    isExcluded?: boolean;
    exclusionReason?: boolean;
    earnings?: boolean;
    deductions?: boolean;
    taxes?: boolean;
    createdAt?: boolean;
};
export type PayRunLineOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "payRunId" | "employeeId" | "grossPay" | "netPay" | "totalDeductions" | "isExcluded" | "exclusionReason" | "earnings" | "deductions" | "taxes" | "createdAt", ExtArgs["result"]["payRunLine"]>;
export type PayRunLineInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payRun?: boolean | Prisma.PayRunDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type PayRunLineIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payRun?: boolean | Prisma.PayRunDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type PayRunLineIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payRun?: boolean | Prisma.PayRunDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type $PayRunLinePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PayRunLine";
    objects: {
        payRun: Prisma.$PayRunPayload<ExtArgs>;
        employee: Prisma.$EmployeePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        payRunId: string;
        employeeId: string;
        grossPay: runtime.Decimal;
        netPay: runtime.Decimal;
        totalDeductions: runtime.Decimal;
        isExcluded: boolean;
        exclusionReason: string | null;
        earnings: runtime.JsonValue | null;
        deductions: runtime.JsonValue | null;
        taxes: runtime.JsonValue | null;
        createdAt: Date;
    }, ExtArgs["result"]["payRunLine"]>;
    composites: {};
};
export type PayRunLineGetPayload<S extends boolean | null | undefined | PayRunLineDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PayRunLinePayload, S>;
export type PayRunLineCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PayRunLineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PayRunLineCountAggregateInputType | true;
};
export interface PayRunLineDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PayRunLine'];
        meta: {
            name: 'PayRunLine';
        };
    };
    findUnique<T extends PayRunLineFindUniqueArgs>(args: Prisma.SelectSubset<T, PayRunLineFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PayRunLineClient<runtime.Types.Result.GetResult<Prisma.$PayRunLinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PayRunLineFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PayRunLineFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PayRunLineClient<runtime.Types.Result.GetResult<Prisma.$PayRunLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PayRunLineFindFirstArgs>(args?: Prisma.SelectSubset<T, PayRunLineFindFirstArgs<ExtArgs>>): Prisma.Prisma__PayRunLineClient<runtime.Types.Result.GetResult<Prisma.$PayRunLinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PayRunLineFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PayRunLineFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PayRunLineClient<runtime.Types.Result.GetResult<Prisma.$PayRunLinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PayRunLineFindManyArgs>(args?: Prisma.SelectSubset<T, PayRunLineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayRunLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PayRunLineCreateArgs>(args: Prisma.SelectSubset<T, PayRunLineCreateArgs<ExtArgs>>): Prisma.Prisma__PayRunLineClient<runtime.Types.Result.GetResult<Prisma.$PayRunLinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PayRunLineCreateManyArgs>(args?: Prisma.SelectSubset<T, PayRunLineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PayRunLineCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PayRunLineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayRunLinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PayRunLineDeleteArgs>(args: Prisma.SelectSubset<T, PayRunLineDeleteArgs<ExtArgs>>): Prisma.Prisma__PayRunLineClient<runtime.Types.Result.GetResult<Prisma.$PayRunLinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PayRunLineUpdateArgs>(args: Prisma.SelectSubset<T, PayRunLineUpdateArgs<ExtArgs>>): Prisma.Prisma__PayRunLineClient<runtime.Types.Result.GetResult<Prisma.$PayRunLinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PayRunLineDeleteManyArgs>(args?: Prisma.SelectSubset<T, PayRunLineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PayRunLineUpdateManyArgs>(args: Prisma.SelectSubset<T, PayRunLineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PayRunLineUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PayRunLineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayRunLinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PayRunLineUpsertArgs>(args: Prisma.SelectSubset<T, PayRunLineUpsertArgs<ExtArgs>>): Prisma.Prisma__PayRunLineClient<runtime.Types.Result.GetResult<Prisma.$PayRunLinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PayRunLineCountArgs>(args?: Prisma.Subset<T, PayRunLineCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PayRunLineCountAggregateOutputType> : number>;
    aggregate<T extends PayRunLineAggregateArgs>(args: Prisma.Subset<T, PayRunLineAggregateArgs>): Prisma.PrismaPromise<GetPayRunLineAggregateType<T>>;
    groupBy<T extends PayRunLineGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PayRunLineGroupByArgs['orderBy'];
    } : {
        orderBy?: PayRunLineGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PayRunLineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayRunLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PayRunLineFieldRefs;
}
export interface Prisma__PayRunLineClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    payRun<T extends Prisma.PayRunDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PayRunDefaultArgs<ExtArgs>>): Prisma.Prisma__PayRunClient<runtime.Types.Result.GetResult<Prisma.$PayRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    employee<T extends Prisma.EmployeeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmployeeDefaultArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PayRunLineFieldRefs {
    readonly id: Prisma.FieldRef<"PayRunLine", 'String'>;
    readonly payRunId: Prisma.FieldRef<"PayRunLine", 'String'>;
    readonly employeeId: Prisma.FieldRef<"PayRunLine", 'String'>;
    readonly grossPay: Prisma.FieldRef<"PayRunLine", 'Decimal'>;
    readonly netPay: Prisma.FieldRef<"PayRunLine", 'Decimal'>;
    readonly totalDeductions: Prisma.FieldRef<"PayRunLine", 'Decimal'>;
    readonly isExcluded: Prisma.FieldRef<"PayRunLine", 'Boolean'>;
    readonly exclusionReason: Prisma.FieldRef<"PayRunLine", 'String'>;
    readonly earnings: Prisma.FieldRef<"PayRunLine", 'Json'>;
    readonly deductions: Prisma.FieldRef<"PayRunLine", 'Json'>;
    readonly taxes: Prisma.FieldRef<"PayRunLine", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"PayRunLine", 'DateTime'>;
}
export type PayRunLineFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayRunLineSelect<ExtArgs> | null;
    omit?: Prisma.PayRunLineOmit<ExtArgs> | null;
    include?: Prisma.PayRunLineInclude<ExtArgs> | null;
    where: Prisma.PayRunLineWhereUniqueInput;
};
export type PayRunLineFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayRunLineSelect<ExtArgs> | null;
    omit?: Prisma.PayRunLineOmit<ExtArgs> | null;
    include?: Prisma.PayRunLineInclude<ExtArgs> | null;
    where: Prisma.PayRunLineWhereUniqueInput;
};
export type PayRunLineFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayRunLineSelect<ExtArgs> | null;
    omit?: Prisma.PayRunLineOmit<ExtArgs> | null;
    include?: Prisma.PayRunLineInclude<ExtArgs> | null;
    where?: Prisma.PayRunLineWhereInput;
    orderBy?: Prisma.PayRunLineOrderByWithRelationInput | Prisma.PayRunLineOrderByWithRelationInput[];
    cursor?: Prisma.PayRunLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PayRunLineScalarFieldEnum | Prisma.PayRunLineScalarFieldEnum[];
};
export type PayRunLineFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayRunLineSelect<ExtArgs> | null;
    omit?: Prisma.PayRunLineOmit<ExtArgs> | null;
    include?: Prisma.PayRunLineInclude<ExtArgs> | null;
    where?: Prisma.PayRunLineWhereInput;
    orderBy?: Prisma.PayRunLineOrderByWithRelationInput | Prisma.PayRunLineOrderByWithRelationInput[];
    cursor?: Prisma.PayRunLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PayRunLineScalarFieldEnum | Prisma.PayRunLineScalarFieldEnum[];
};
export type PayRunLineFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayRunLineSelect<ExtArgs> | null;
    omit?: Prisma.PayRunLineOmit<ExtArgs> | null;
    include?: Prisma.PayRunLineInclude<ExtArgs> | null;
    where?: Prisma.PayRunLineWhereInput;
    orderBy?: Prisma.PayRunLineOrderByWithRelationInput | Prisma.PayRunLineOrderByWithRelationInput[];
    cursor?: Prisma.PayRunLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PayRunLineScalarFieldEnum | Prisma.PayRunLineScalarFieldEnum[];
};
export type PayRunLineCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayRunLineSelect<ExtArgs> | null;
    omit?: Prisma.PayRunLineOmit<ExtArgs> | null;
    include?: Prisma.PayRunLineInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PayRunLineCreateInput, Prisma.PayRunLineUncheckedCreateInput>;
};
export type PayRunLineCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PayRunLineCreateManyInput | Prisma.PayRunLineCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PayRunLineCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayRunLineSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PayRunLineOmit<ExtArgs> | null;
    data: Prisma.PayRunLineCreateManyInput | Prisma.PayRunLineCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PayRunLineIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PayRunLineUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayRunLineSelect<ExtArgs> | null;
    omit?: Prisma.PayRunLineOmit<ExtArgs> | null;
    include?: Prisma.PayRunLineInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PayRunLineUpdateInput, Prisma.PayRunLineUncheckedUpdateInput>;
    where: Prisma.PayRunLineWhereUniqueInput;
};
export type PayRunLineUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PayRunLineUpdateManyMutationInput, Prisma.PayRunLineUncheckedUpdateManyInput>;
    where?: Prisma.PayRunLineWhereInput;
    limit?: number;
};
export type PayRunLineUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayRunLineSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PayRunLineOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PayRunLineUpdateManyMutationInput, Prisma.PayRunLineUncheckedUpdateManyInput>;
    where?: Prisma.PayRunLineWhereInput;
    limit?: number;
    include?: Prisma.PayRunLineIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PayRunLineUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayRunLineSelect<ExtArgs> | null;
    omit?: Prisma.PayRunLineOmit<ExtArgs> | null;
    include?: Prisma.PayRunLineInclude<ExtArgs> | null;
    where: Prisma.PayRunLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayRunLineCreateInput, Prisma.PayRunLineUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PayRunLineUpdateInput, Prisma.PayRunLineUncheckedUpdateInput>;
};
export type PayRunLineDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayRunLineSelect<ExtArgs> | null;
    omit?: Prisma.PayRunLineOmit<ExtArgs> | null;
    include?: Prisma.PayRunLineInclude<ExtArgs> | null;
    where: Prisma.PayRunLineWhereUniqueInput;
};
export type PayRunLineDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayRunLineWhereInput;
    limit?: number;
};
export type PayRunLineDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayRunLineSelect<ExtArgs> | null;
    omit?: Prisma.PayRunLineOmit<ExtArgs> | null;
    include?: Prisma.PayRunLineInclude<ExtArgs> | null;
};
