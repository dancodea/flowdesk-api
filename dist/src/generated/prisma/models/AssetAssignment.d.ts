import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AssetAssignmentModel = runtime.Types.Result.DefaultSelection<Prisma.$AssetAssignmentPayload>;
export type AggregateAssetAssignment = {
    _count: AssetAssignmentCountAggregateOutputType | null;
    _min: AssetAssignmentMinAggregateOutputType | null;
    _max: AssetAssignmentMaxAggregateOutputType | null;
};
export type AssetAssignmentMinAggregateOutputType = {
    id: string | null;
    assetId: string | null;
    employeeId: string | null;
    assignedDate: Date | null;
    expectedReturnDate: Date | null;
    returnedDate: Date | null;
    returnCondition: $Enums.ReturnCondition | null;
    returnNotes: string | null;
    acknowledgedAt: Date | null;
    assignedBy: string | null;
    createdAt: Date | null;
};
export type AssetAssignmentMaxAggregateOutputType = {
    id: string | null;
    assetId: string | null;
    employeeId: string | null;
    assignedDate: Date | null;
    expectedReturnDate: Date | null;
    returnedDate: Date | null;
    returnCondition: $Enums.ReturnCondition | null;
    returnNotes: string | null;
    acknowledgedAt: Date | null;
    assignedBy: string | null;
    createdAt: Date | null;
};
export type AssetAssignmentCountAggregateOutputType = {
    id: number;
    assetId: number;
    employeeId: number;
    assignedDate: number;
    expectedReturnDate: number;
    returnedDate: number;
    returnCondition: number;
    returnNotes: number;
    acknowledgedAt: number;
    assignedBy: number;
    createdAt: number;
    _all: number;
};
export type AssetAssignmentMinAggregateInputType = {
    id?: true;
    assetId?: true;
    employeeId?: true;
    assignedDate?: true;
    expectedReturnDate?: true;
    returnedDate?: true;
    returnCondition?: true;
    returnNotes?: true;
    acknowledgedAt?: true;
    assignedBy?: true;
    createdAt?: true;
};
export type AssetAssignmentMaxAggregateInputType = {
    id?: true;
    assetId?: true;
    employeeId?: true;
    assignedDate?: true;
    expectedReturnDate?: true;
    returnedDate?: true;
    returnCondition?: true;
    returnNotes?: true;
    acknowledgedAt?: true;
    assignedBy?: true;
    createdAt?: true;
};
export type AssetAssignmentCountAggregateInputType = {
    id?: true;
    assetId?: true;
    employeeId?: true;
    assignedDate?: true;
    expectedReturnDate?: true;
    returnedDate?: true;
    returnCondition?: true;
    returnNotes?: true;
    acknowledgedAt?: true;
    assignedBy?: true;
    createdAt?: true;
    _all?: true;
};
export type AssetAssignmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetAssignmentWhereInput;
    orderBy?: Prisma.AssetAssignmentOrderByWithRelationInput | Prisma.AssetAssignmentOrderByWithRelationInput[];
    cursor?: Prisma.AssetAssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AssetAssignmentCountAggregateInputType;
    _min?: AssetAssignmentMinAggregateInputType;
    _max?: AssetAssignmentMaxAggregateInputType;
};
export type GetAssetAssignmentAggregateType<T extends AssetAssignmentAggregateArgs> = {
    [P in keyof T & keyof AggregateAssetAssignment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAssetAssignment[P]> : Prisma.GetScalarType<T[P], AggregateAssetAssignment[P]>;
};
export type AssetAssignmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetAssignmentWhereInput;
    orderBy?: Prisma.AssetAssignmentOrderByWithAggregationInput | Prisma.AssetAssignmentOrderByWithAggregationInput[];
    by: Prisma.AssetAssignmentScalarFieldEnum[] | Prisma.AssetAssignmentScalarFieldEnum;
    having?: Prisma.AssetAssignmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AssetAssignmentCountAggregateInputType | true;
    _min?: AssetAssignmentMinAggregateInputType;
    _max?: AssetAssignmentMaxAggregateInputType;
};
export type AssetAssignmentGroupByOutputType = {
    id: string;
    assetId: string;
    employeeId: string | null;
    assignedDate: Date;
    expectedReturnDate: Date | null;
    returnedDate: Date | null;
    returnCondition: $Enums.ReturnCondition | null;
    returnNotes: string | null;
    acknowledgedAt: Date | null;
    assignedBy: string | null;
    createdAt: Date;
    _count: AssetAssignmentCountAggregateOutputType | null;
    _min: AssetAssignmentMinAggregateOutputType | null;
    _max: AssetAssignmentMaxAggregateOutputType | null;
};
export type GetAssetAssignmentGroupByPayload<T extends AssetAssignmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AssetAssignmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AssetAssignmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AssetAssignmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AssetAssignmentGroupByOutputType[P]>;
}>>;
export type AssetAssignmentWhereInput = {
    AND?: Prisma.AssetAssignmentWhereInput | Prisma.AssetAssignmentWhereInput[];
    OR?: Prisma.AssetAssignmentWhereInput[];
    NOT?: Prisma.AssetAssignmentWhereInput | Prisma.AssetAssignmentWhereInput[];
    id?: Prisma.UuidFilter<"AssetAssignment"> | string;
    assetId?: Prisma.UuidFilter<"AssetAssignment"> | string;
    employeeId?: Prisma.UuidNullableFilter<"AssetAssignment"> | string | null;
    assignedDate?: Prisma.DateTimeFilter<"AssetAssignment"> | Date | string;
    expectedReturnDate?: Prisma.DateTimeNullableFilter<"AssetAssignment"> | Date | string | null;
    returnedDate?: Prisma.DateTimeNullableFilter<"AssetAssignment"> | Date | string | null;
    returnCondition?: Prisma.EnumReturnConditionNullableFilter<"AssetAssignment"> | $Enums.ReturnCondition | null;
    returnNotes?: Prisma.StringNullableFilter<"AssetAssignment"> | string | null;
    acknowledgedAt?: Prisma.DateTimeNullableFilter<"AssetAssignment"> | Date | string | null;
    assignedBy?: Prisma.UuidNullableFilter<"AssetAssignment"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AssetAssignment"> | Date | string;
    asset?: Prisma.XOR<Prisma.AssetScalarRelationFilter, Prisma.AssetWhereInput>;
    employee?: Prisma.XOR<Prisma.EmployeeNullableScalarRelationFilter, Prisma.EmployeeWhereInput> | null;
};
export type AssetAssignmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    assignedDate?: Prisma.SortOrder;
    expectedReturnDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    returnedDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    returnCondition?: Prisma.SortOrderInput | Prisma.SortOrder;
    returnNotes?: Prisma.SortOrderInput | Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    assignedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    asset?: Prisma.AssetOrderByWithRelationInput;
    employee?: Prisma.EmployeeOrderByWithRelationInput;
};
export type AssetAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AssetAssignmentWhereInput | Prisma.AssetAssignmentWhereInput[];
    OR?: Prisma.AssetAssignmentWhereInput[];
    NOT?: Prisma.AssetAssignmentWhereInput | Prisma.AssetAssignmentWhereInput[];
    assetId?: Prisma.UuidFilter<"AssetAssignment"> | string;
    employeeId?: Prisma.UuidNullableFilter<"AssetAssignment"> | string | null;
    assignedDate?: Prisma.DateTimeFilter<"AssetAssignment"> | Date | string;
    expectedReturnDate?: Prisma.DateTimeNullableFilter<"AssetAssignment"> | Date | string | null;
    returnedDate?: Prisma.DateTimeNullableFilter<"AssetAssignment"> | Date | string | null;
    returnCondition?: Prisma.EnumReturnConditionNullableFilter<"AssetAssignment"> | $Enums.ReturnCondition | null;
    returnNotes?: Prisma.StringNullableFilter<"AssetAssignment"> | string | null;
    acknowledgedAt?: Prisma.DateTimeNullableFilter<"AssetAssignment"> | Date | string | null;
    assignedBy?: Prisma.UuidNullableFilter<"AssetAssignment"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AssetAssignment"> | Date | string;
    asset?: Prisma.XOR<Prisma.AssetScalarRelationFilter, Prisma.AssetWhereInput>;
    employee?: Prisma.XOR<Prisma.EmployeeNullableScalarRelationFilter, Prisma.EmployeeWhereInput> | null;
}, "id">;
export type AssetAssignmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    assignedDate?: Prisma.SortOrder;
    expectedReturnDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    returnedDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    returnCondition?: Prisma.SortOrderInput | Prisma.SortOrder;
    returnNotes?: Prisma.SortOrderInput | Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    assignedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AssetAssignmentCountOrderByAggregateInput;
    _max?: Prisma.AssetAssignmentMaxOrderByAggregateInput;
    _min?: Prisma.AssetAssignmentMinOrderByAggregateInput;
};
export type AssetAssignmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.AssetAssignmentScalarWhereWithAggregatesInput | Prisma.AssetAssignmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.AssetAssignmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AssetAssignmentScalarWhereWithAggregatesInput | Prisma.AssetAssignmentScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"AssetAssignment"> | string;
    assetId?: Prisma.UuidWithAggregatesFilter<"AssetAssignment"> | string;
    employeeId?: Prisma.UuidNullableWithAggregatesFilter<"AssetAssignment"> | string | null;
    assignedDate?: Prisma.DateTimeWithAggregatesFilter<"AssetAssignment"> | Date | string;
    expectedReturnDate?: Prisma.DateTimeNullableWithAggregatesFilter<"AssetAssignment"> | Date | string | null;
    returnedDate?: Prisma.DateTimeNullableWithAggregatesFilter<"AssetAssignment"> | Date | string | null;
    returnCondition?: Prisma.EnumReturnConditionNullableWithAggregatesFilter<"AssetAssignment"> | $Enums.ReturnCondition | null;
    returnNotes?: Prisma.StringNullableWithAggregatesFilter<"AssetAssignment"> | string | null;
    acknowledgedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"AssetAssignment"> | Date | string | null;
    assignedBy?: Prisma.UuidNullableWithAggregatesFilter<"AssetAssignment"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AssetAssignment"> | Date | string;
};
export type AssetAssignmentCreateInput = {
    id?: string;
    assignedDate: Date | string;
    expectedReturnDate?: Date | string | null;
    returnedDate?: Date | string | null;
    returnCondition?: $Enums.ReturnCondition | null;
    returnNotes?: string | null;
    acknowledgedAt?: Date | string | null;
    assignedBy?: string | null;
    createdAt?: Date | string;
    asset: Prisma.AssetCreateNestedOneWithoutAssignmentsInput;
    employee?: Prisma.EmployeeCreateNestedOneWithoutAssetAssignmentsInput;
};
export type AssetAssignmentUncheckedCreateInput = {
    id?: string;
    assetId: string;
    employeeId?: string | null;
    assignedDate: Date | string;
    expectedReturnDate?: Date | string | null;
    returnedDate?: Date | string | null;
    returnCondition?: $Enums.ReturnCondition | null;
    returnNotes?: string | null;
    acknowledgedAt?: Date | string | null;
    assignedBy?: string | null;
    createdAt?: Date | string;
};
export type AssetAssignmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expectedReturnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnCondition?: Prisma.NullableEnumReturnConditionFieldUpdateOperationsInput | $Enums.ReturnCondition | null;
    returnNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assignedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    asset?: Prisma.AssetUpdateOneRequiredWithoutAssignmentsNestedInput;
    employee?: Prisma.EmployeeUpdateOneWithoutAssetAssignmentsNestedInput;
};
export type AssetAssignmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetId?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expectedReturnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnCondition?: Prisma.NullableEnumReturnConditionFieldUpdateOperationsInput | $Enums.ReturnCondition | null;
    returnNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assignedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetAssignmentCreateManyInput = {
    id?: string;
    assetId: string;
    employeeId?: string | null;
    assignedDate: Date | string;
    expectedReturnDate?: Date | string | null;
    returnedDate?: Date | string | null;
    returnCondition?: $Enums.ReturnCondition | null;
    returnNotes?: string | null;
    acknowledgedAt?: Date | string | null;
    assignedBy?: string | null;
    createdAt?: Date | string;
};
export type AssetAssignmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expectedReturnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnCondition?: Prisma.NullableEnumReturnConditionFieldUpdateOperationsInput | $Enums.ReturnCondition | null;
    returnNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assignedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetAssignmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetId?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expectedReturnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnCondition?: Prisma.NullableEnumReturnConditionFieldUpdateOperationsInput | $Enums.ReturnCondition | null;
    returnNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assignedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetAssignmentListRelationFilter = {
    every?: Prisma.AssetAssignmentWhereInput;
    some?: Prisma.AssetAssignmentWhereInput;
    none?: Prisma.AssetAssignmentWhereInput;
};
export type AssetAssignmentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AssetAssignmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    assignedDate?: Prisma.SortOrder;
    expectedReturnDate?: Prisma.SortOrder;
    returnedDate?: Prisma.SortOrder;
    returnCondition?: Prisma.SortOrder;
    returnNotes?: Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrder;
    assignedBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AssetAssignmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    assignedDate?: Prisma.SortOrder;
    expectedReturnDate?: Prisma.SortOrder;
    returnedDate?: Prisma.SortOrder;
    returnCondition?: Prisma.SortOrder;
    returnNotes?: Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrder;
    assignedBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AssetAssignmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    assignedDate?: Prisma.SortOrder;
    expectedReturnDate?: Prisma.SortOrder;
    returnedDate?: Prisma.SortOrder;
    returnCondition?: Prisma.SortOrder;
    returnNotes?: Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrder;
    assignedBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AssetAssignmentCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.AssetAssignmentCreateWithoutEmployeeInput, Prisma.AssetAssignmentUncheckedCreateWithoutEmployeeInput> | Prisma.AssetAssignmentCreateWithoutEmployeeInput[] | Prisma.AssetAssignmentUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.AssetAssignmentCreateOrConnectWithoutEmployeeInput | Prisma.AssetAssignmentCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.AssetAssignmentCreateManyEmployeeInputEnvelope;
    connect?: Prisma.AssetAssignmentWhereUniqueInput | Prisma.AssetAssignmentWhereUniqueInput[];
};
export type AssetAssignmentUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.AssetAssignmentCreateWithoutEmployeeInput, Prisma.AssetAssignmentUncheckedCreateWithoutEmployeeInput> | Prisma.AssetAssignmentCreateWithoutEmployeeInput[] | Prisma.AssetAssignmentUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.AssetAssignmentCreateOrConnectWithoutEmployeeInput | Prisma.AssetAssignmentCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.AssetAssignmentCreateManyEmployeeInputEnvelope;
    connect?: Prisma.AssetAssignmentWhereUniqueInput | Prisma.AssetAssignmentWhereUniqueInput[];
};
export type AssetAssignmentUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.AssetAssignmentCreateWithoutEmployeeInput, Prisma.AssetAssignmentUncheckedCreateWithoutEmployeeInput> | Prisma.AssetAssignmentCreateWithoutEmployeeInput[] | Prisma.AssetAssignmentUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.AssetAssignmentCreateOrConnectWithoutEmployeeInput | Prisma.AssetAssignmentCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.AssetAssignmentUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.AssetAssignmentUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.AssetAssignmentCreateManyEmployeeInputEnvelope;
    set?: Prisma.AssetAssignmentWhereUniqueInput | Prisma.AssetAssignmentWhereUniqueInput[];
    disconnect?: Prisma.AssetAssignmentWhereUniqueInput | Prisma.AssetAssignmentWhereUniqueInput[];
    delete?: Prisma.AssetAssignmentWhereUniqueInput | Prisma.AssetAssignmentWhereUniqueInput[];
    connect?: Prisma.AssetAssignmentWhereUniqueInput | Prisma.AssetAssignmentWhereUniqueInput[];
    update?: Prisma.AssetAssignmentUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.AssetAssignmentUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.AssetAssignmentUpdateManyWithWhereWithoutEmployeeInput | Prisma.AssetAssignmentUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.AssetAssignmentScalarWhereInput | Prisma.AssetAssignmentScalarWhereInput[];
};
export type AssetAssignmentUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.AssetAssignmentCreateWithoutEmployeeInput, Prisma.AssetAssignmentUncheckedCreateWithoutEmployeeInput> | Prisma.AssetAssignmentCreateWithoutEmployeeInput[] | Prisma.AssetAssignmentUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.AssetAssignmentCreateOrConnectWithoutEmployeeInput | Prisma.AssetAssignmentCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.AssetAssignmentUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.AssetAssignmentUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.AssetAssignmentCreateManyEmployeeInputEnvelope;
    set?: Prisma.AssetAssignmentWhereUniqueInput | Prisma.AssetAssignmentWhereUniqueInput[];
    disconnect?: Prisma.AssetAssignmentWhereUniqueInput | Prisma.AssetAssignmentWhereUniqueInput[];
    delete?: Prisma.AssetAssignmentWhereUniqueInput | Prisma.AssetAssignmentWhereUniqueInput[];
    connect?: Prisma.AssetAssignmentWhereUniqueInput | Prisma.AssetAssignmentWhereUniqueInput[];
    update?: Prisma.AssetAssignmentUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.AssetAssignmentUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.AssetAssignmentUpdateManyWithWhereWithoutEmployeeInput | Prisma.AssetAssignmentUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.AssetAssignmentScalarWhereInput | Prisma.AssetAssignmentScalarWhereInput[];
};
export type AssetAssignmentCreateNestedManyWithoutAssetInput = {
    create?: Prisma.XOR<Prisma.AssetAssignmentCreateWithoutAssetInput, Prisma.AssetAssignmentUncheckedCreateWithoutAssetInput> | Prisma.AssetAssignmentCreateWithoutAssetInput[] | Prisma.AssetAssignmentUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.AssetAssignmentCreateOrConnectWithoutAssetInput | Prisma.AssetAssignmentCreateOrConnectWithoutAssetInput[];
    createMany?: Prisma.AssetAssignmentCreateManyAssetInputEnvelope;
    connect?: Prisma.AssetAssignmentWhereUniqueInput | Prisma.AssetAssignmentWhereUniqueInput[];
};
export type AssetAssignmentUncheckedCreateNestedManyWithoutAssetInput = {
    create?: Prisma.XOR<Prisma.AssetAssignmentCreateWithoutAssetInput, Prisma.AssetAssignmentUncheckedCreateWithoutAssetInput> | Prisma.AssetAssignmentCreateWithoutAssetInput[] | Prisma.AssetAssignmentUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.AssetAssignmentCreateOrConnectWithoutAssetInput | Prisma.AssetAssignmentCreateOrConnectWithoutAssetInput[];
    createMany?: Prisma.AssetAssignmentCreateManyAssetInputEnvelope;
    connect?: Prisma.AssetAssignmentWhereUniqueInput | Prisma.AssetAssignmentWhereUniqueInput[];
};
export type AssetAssignmentUpdateManyWithoutAssetNestedInput = {
    create?: Prisma.XOR<Prisma.AssetAssignmentCreateWithoutAssetInput, Prisma.AssetAssignmentUncheckedCreateWithoutAssetInput> | Prisma.AssetAssignmentCreateWithoutAssetInput[] | Prisma.AssetAssignmentUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.AssetAssignmentCreateOrConnectWithoutAssetInput | Prisma.AssetAssignmentCreateOrConnectWithoutAssetInput[];
    upsert?: Prisma.AssetAssignmentUpsertWithWhereUniqueWithoutAssetInput | Prisma.AssetAssignmentUpsertWithWhereUniqueWithoutAssetInput[];
    createMany?: Prisma.AssetAssignmentCreateManyAssetInputEnvelope;
    set?: Prisma.AssetAssignmentWhereUniqueInput | Prisma.AssetAssignmentWhereUniqueInput[];
    disconnect?: Prisma.AssetAssignmentWhereUniqueInput | Prisma.AssetAssignmentWhereUniqueInput[];
    delete?: Prisma.AssetAssignmentWhereUniqueInput | Prisma.AssetAssignmentWhereUniqueInput[];
    connect?: Prisma.AssetAssignmentWhereUniqueInput | Prisma.AssetAssignmentWhereUniqueInput[];
    update?: Prisma.AssetAssignmentUpdateWithWhereUniqueWithoutAssetInput | Prisma.AssetAssignmentUpdateWithWhereUniqueWithoutAssetInput[];
    updateMany?: Prisma.AssetAssignmentUpdateManyWithWhereWithoutAssetInput | Prisma.AssetAssignmentUpdateManyWithWhereWithoutAssetInput[];
    deleteMany?: Prisma.AssetAssignmentScalarWhereInput | Prisma.AssetAssignmentScalarWhereInput[];
};
export type AssetAssignmentUncheckedUpdateManyWithoutAssetNestedInput = {
    create?: Prisma.XOR<Prisma.AssetAssignmentCreateWithoutAssetInput, Prisma.AssetAssignmentUncheckedCreateWithoutAssetInput> | Prisma.AssetAssignmentCreateWithoutAssetInput[] | Prisma.AssetAssignmentUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.AssetAssignmentCreateOrConnectWithoutAssetInput | Prisma.AssetAssignmentCreateOrConnectWithoutAssetInput[];
    upsert?: Prisma.AssetAssignmentUpsertWithWhereUniqueWithoutAssetInput | Prisma.AssetAssignmentUpsertWithWhereUniqueWithoutAssetInput[];
    createMany?: Prisma.AssetAssignmentCreateManyAssetInputEnvelope;
    set?: Prisma.AssetAssignmentWhereUniqueInput | Prisma.AssetAssignmentWhereUniqueInput[];
    disconnect?: Prisma.AssetAssignmentWhereUniqueInput | Prisma.AssetAssignmentWhereUniqueInput[];
    delete?: Prisma.AssetAssignmentWhereUniqueInput | Prisma.AssetAssignmentWhereUniqueInput[];
    connect?: Prisma.AssetAssignmentWhereUniqueInput | Prisma.AssetAssignmentWhereUniqueInput[];
    update?: Prisma.AssetAssignmentUpdateWithWhereUniqueWithoutAssetInput | Prisma.AssetAssignmentUpdateWithWhereUniqueWithoutAssetInput[];
    updateMany?: Prisma.AssetAssignmentUpdateManyWithWhereWithoutAssetInput | Prisma.AssetAssignmentUpdateManyWithWhereWithoutAssetInput[];
    deleteMany?: Prisma.AssetAssignmentScalarWhereInput | Prisma.AssetAssignmentScalarWhereInput[];
};
export type NullableEnumReturnConditionFieldUpdateOperationsInput = {
    set?: $Enums.ReturnCondition | null;
};
export type AssetAssignmentCreateWithoutEmployeeInput = {
    id?: string;
    assignedDate: Date | string;
    expectedReturnDate?: Date | string | null;
    returnedDate?: Date | string | null;
    returnCondition?: $Enums.ReturnCondition | null;
    returnNotes?: string | null;
    acknowledgedAt?: Date | string | null;
    assignedBy?: string | null;
    createdAt?: Date | string;
    asset: Prisma.AssetCreateNestedOneWithoutAssignmentsInput;
};
export type AssetAssignmentUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    assetId: string;
    assignedDate: Date | string;
    expectedReturnDate?: Date | string | null;
    returnedDate?: Date | string | null;
    returnCondition?: $Enums.ReturnCondition | null;
    returnNotes?: string | null;
    acknowledgedAt?: Date | string | null;
    assignedBy?: string | null;
    createdAt?: Date | string;
};
export type AssetAssignmentCreateOrConnectWithoutEmployeeInput = {
    where: Prisma.AssetAssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetAssignmentCreateWithoutEmployeeInput, Prisma.AssetAssignmentUncheckedCreateWithoutEmployeeInput>;
};
export type AssetAssignmentCreateManyEmployeeInputEnvelope = {
    data: Prisma.AssetAssignmentCreateManyEmployeeInput | Prisma.AssetAssignmentCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
};
export type AssetAssignmentUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.AssetAssignmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.AssetAssignmentUpdateWithoutEmployeeInput, Prisma.AssetAssignmentUncheckedUpdateWithoutEmployeeInput>;
    create: Prisma.XOR<Prisma.AssetAssignmentCreateWithoutEmployeeInput, Prisma.AssetAssignmentUncheckedCreateWithoutEmployeeInput>;
};
export type AssetAssignmentUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.AssetAssignmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.AssetAssignmentUpdateWithoutEmployeeInput, Prisma.AssetAssignmentUncheckedUpdateWithoutEmployeeInput>;
};
export type AssetAssignmentUpdateManyWithWhereWithoutEmployeeInput = {
    where: Prisma.AssetAssignmentScalarWhereInput;
    data: Prisma.XOR<Prisma.AssetAssignmentUpdateManyMutationInput, Prisma.AssetAssignmentUncheckedUpdateManyWithoutEmployeeInput>;
};
export type AssetAssignmentScalarWhereInput = {
    AND?: Prisma.AssetAssignmentScalarWhereInput | Prisma.AssetAssignmentScalarWhereInput[];
    OR?: Prisma.AssetAssignmentScalarWhereInput[];
    NOT?: Prisma.AssetAssignmentScalarWhereInput | Prisma.AssetAssignmentScalarWhereInput[];
    id?: Prisma.UuidFilter<"AssetAssignment"> | string;
    assetId?: Prisma.UuidFilter<"AssetAssignment"> | string;
    employeeId?: Prisma.UuidNullableFilter<"AssetAssignment"> | string | null;
    assignedDate?: Prisma.DateTimeFilter<"AssetAssignment"> | Date | string;
    expectedReturnDate?: Prisma.DateTimeNullableFilter<"AssetAssignment"> | Date | string | null;
    returnedDate?: Prisma.DateTimeNullableFilter<"AssetAssignment"> | Date | string | null;
    returnCondition?: Prisma.EnumReturnConditionNullableFilter<"AssetAssignment"> | $Enums.ReturnCondition | null;
    returnNotes?: Prisma.StringNullableFilter<"AssetAssignment"> | string | null;
    acknowledgedAt?: Prisma.DateTimeNullableFilter<"AssetAssignment"> | Date | string | null;
    assignedBy?: Prisma.UuidNullableFilter<"AssetAssignment"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AssetAssignment"> | Date | string;
};
export type AssetAssignmentCreateWithoutAssetInput = {
    id?: string;
    assignedDate: Date | string;
    expectedReturnDate?: Date | string | null;
    returnedDate?: Date | string | null;
    returnCondition?: $Enums.ReturnCondition | null;
    returnNotes?: string | null;
    acknowledgedAt?: Date | string | null;
    assignedBy?: string | null;
    createdAt?: Date | string;
    employee?: Prisma.EmployeeCreateNestedOneWithoutAssetAssignmentsInput;
};
export type AssetAssignmentUncheckedCreateWithoutAssetInput = {
    id?: string;
    employeeId?: string | null;
    assignedDate: Date | string;
    expectedReturnDate?: Date | string | null;
    returnedDate?: Date | string | null;
    returnCondition?: $Enums.ReturnCondition | null;
    returnNotes?: string | null;
    acknowledgedAt?: Date | string | null;
    assignedBy?: string | null;
    createdAt?: Date | string;
};
export type AssetAssignmentCreateOrConnectWithoutAssetInput = {
    where: Prisma.AssetAssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetAssignmentCreateWithoutAssetInput, Prisma.AssetAssignmentUncheckedCreateWithoutAssetInput>;
};
export type AssetAssignmentCreateManyAssetInputEnvelope = {
    data: Prisma.AssetAssignmentCreateManyAssetInput | Prisma.AssetAssignmentCreateManyAssetInput[];
    skipDuplicates?: boolean;
};
export type AssetAssignmentUpsertWithWhereUniqueWithoutAssetInput = {
    where: Prisma.AssetAssignmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.AssetAssignmentUpdateWithoutAssetInput, Prisma.AssetAssignmentUncheckedUpdateWithoutAssetInput>;
    create: Prisma.XOR<Prisma.AssetAssignmentCreateWithoutAssetInput, Prisma.AssetAssignmentUncheckedCreateWithoutAssetInput>;
};
export type AssetAssignmentUpdateWithWhereUniqueWithoutAssetInput = {
    where: Prisma.AssetAssignmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.AssetAssignmentUpdateWithoutAssetInput, Prisma.AssetAssignmentUncheckedUpdateWithoutAssetInput>;
};
export type AssetAssignmentUpdateManyWithWhereWithoutAssetInput = {
    where: Prisma.AssetAssignmentScalarWhereInput;
    data: Prisma.XOR<Prisma.AssetAssignmentUpdateManyMutationInput, Prisma.AssetAssignmentUncheckedUpdateManyWithoutAssetInput>;
};
export type AssetAssignmentCreateManyEmployeeInput = {
    id?: string;
    assetId: string;
    assignedDate: Date | string;
    expectedReturnDate?: Date | string | null;
    returnedDate?: Date | string | null;
    returnCondition?: $Enums.ReturnCondition | null;
    returnNotes?: string | null;
    acknowledgedAt?: Date | string | null;
    assignedBy?: string | null;
    createdAt?: Date | string;
};
export type AssetAssignmentUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expectedReturnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnCondition?: Prisma.NullableEnumReturnConditionFieldUpdateOperationsInput | $Enums.ReturnCondition | null;
    returnNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assignedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    asset?: Prisma.AssetUpdateOneRequiredWithoutAssignmentsNestedInput;
};
export type AssetAssignmentUncheckedUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expectedReturnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnCondition?: Prisma.NullableEnumReturnConditionFieldUpdateOperationsInput | $Enums.ReturnCondition | null;
    returnNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assignedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetAssignmentUncheckedUpdateManyWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expectedReturnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnCondition?: Prisma.NullableEnumReturnConditionFieldUpdateOperationsInput | $Enums.ReturnCondition | null;
    returnNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assignedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetAssignmentCreateManyAssetInput = {
    id?: string;
    employeeId?: string | null;
    assignedDate: Date | string;
    expectedReturnDate?: Date | string | null;
    returnedDate?: Date | string | null;
    returnCondition?: $Enums.ReturnCondition | null;
    returnNotes?: string | null;
    acknowledgedAt?: Date | string | null;
    assignedBy?: string | null;
    createdAt?: Date | string;
};
export type AssetAssignmentUpdateWithoutAssetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expectedReturnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnCondition?: Prisma.NullableEnumReturnConditionFieldUpdateOperationsInput | $Enums.ReturnCondition | null;
    returnNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assignedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneWithoutAssetAssignmentsNestedInput;
};
export type AssetAssignmentUncheckedUpdateWithoutAssetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expectedReturnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnCondition?: Prisma.NullableEnumReturnConditionFieldUpdateOperationsInput | $Enums.ReturnCondition | null;
    returnNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assignedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetAssignmentUncheckedUpdateManyWithoutAssetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assignedDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expectedReturnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnCondition?: Prisma.NullableEnumReturnConditionFieldUpdateOperationsInput | $Enums.ReturnCondition | null;
    returnNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assignedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetAssignmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    assetId?: boolean;
    employeeId?: boolean;
    assignedDate?: boolean;
    expectedReturnDate?: boolean;
    returnedDate?: boolean;
    returnCondition?: boolean;
    returnNotes?: boolean;
    acknowledgedAt?: boolean;
    assignedBy?: boolean;
    createdAt?: boolean;
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.AssetAssignment$employeeArgs<ExtArgs>;
}, ExtArgs["result"]["assetAssignment"]>;
export type AssetAssignmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    assetId?: boolean;
    employeeId?: boolean;
    assignedDate?: boolean;
    expectedReturnDate?: boolean;
    returnedDate?: boolean;
    returnCondition?: boolean;
    returnNotes?: boolean;
    acknowledgedAt?: boolean;
    assignedBy?: boolean;
    createdAt?: boolean;
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.AssetAssignment$employeeArgs<ExtArgs>;
}, ExtArgs["result"]["assetAssignment"]>;
export type AssetAssignmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    assetId?: boolean;
    employeeId?: boolean;
    assignedDate?: boolean;
    expectedReturnDate?: boolean;
    returnedDate?: boolean;
    returnCondition?: boolean;
    returnNotes?: boolean;
    acknowledgedAt?: boolean;
    assignedBy?: boolean;
    createdAt?: boolean;
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.AssetAssignment$employeeArgs<ExtArgs>;
}, ExtArgs["result"]["assetAssignment"]>;
export type AssetAssignmentSelectScalar = {
    id?: boolean;
    assetId?: boolean;
    employeeId?: boolean;
    assignedDate?: boolean;
    expectedReturnDate?: boolean;
    returnedDate?: boolean;
    returnCondition?: boolean;
    returnNotes?: boolean;
    acknowledgedAt?: boolean;
    assignedBy?: boolean;
    createdAt?: boolean;
};
export type AssetAssignmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "assetId" | "employeeId" | "assignedDate" | "expectedReturnDate" | "returnedDate" | "returnCondition" | "returnNotes" | "acknowledgedAt" | "assignedBy" | "createdAt", ExtArgs["result"]["assetAssignment"]>;
export type AssetAssignmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.AssetAssignment$employeeArgs<ExtArgs>;
};
export type AssetAssignmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.AssetAssignment$employeeArgs<ExtArgs>;
};
export type AssetAssignmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.AssetAssignment$employeeArgs<ExtArgs>;
};
export type $AssetAssignmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AssetAssignment";
    objects: {
        asset: Prisma.$AssetPayload<ExtArgs>;
        employee: Prisma.$EmployeePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        assetId: string;
        employeeId: string | null;
        assignedDate: Date;
        expectedReturnDate: Date | null;
        returnedDate: Date | null;
        returnCondition: $Enums.ReturnCondition | null;
        returnNotes: string | null;
        acknowledgedAt: Date | null;
        assignedBy: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["assetAssignment"]>;
    composites: {};
};
export type AssetAssignmentGetPayload<S extends boolean | null | undefined | AssetAssignmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AssetAssignmentPayload, S>;
export type AssetAssignmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AssetAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AssetAssignmentCountAggregateInputType | true;
};
export interface AssetAssignmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AssetAssignment'];
        meta: {
            name: 'AssetAssignment';
        };
    };
    findUnique<T extends AssetAssignmentFindUniqueArgs>(args: Prisma.SelectSubset<T, AssetAssignmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AssetAssignmentClient<runtime.Types.Result.GetResult<Prisma.$AssetAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AssetAssignmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AssetAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssetAssignmentClient<runtime.Types.Result.GetResult<Prisma.$AssetAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AssetAssignmentFindFirstArgs>(args?: Prisma.SelectSubset<T, AssetAssignmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__AssetAssignmentClient<runtime.Types.Result.GetResult<Prisma.$AssetAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AssetAssignmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AssetAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssetAssignmentClient<runtime.Types.Result.GetResult<Prisma.$AssetAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AssetAssignmentFindManyArgs>(args?: Prisma.SelectSubset<T, AssetAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AssetAssignmentCreateArgs>(args: Prisma.SelectSubset<T, AssetAssignmentCreateArgs<ExtArgs>>): Prisma.Prisma__AssetAssignmentClient<runtime.Types.Result.GetResult<Prisma.$AssetAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AssetAssignmentCreateManyArgs>(args?: Prisma.SelectSubset<T, AssetAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AssetAssignmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AssetAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AssetAssignmentDeleteArgs>(args: Prisma.SelectSubset<T, AssetAssignmentDeleteArgs<ExtArgs>>): Prisma.Prisma__AssetAssignmentClient<runtime.Types.Result.GetResult<Prisma.$AssetAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AssetAssignmentUpdateArgs>(args: Prisma.SelectSubset<T, AssetAssignmentUpdateArgs<ExtArgs>>): Prisma.Prisma__AssetAssignmentClient<runtime.Types.Result.GetResult<Prisma.$AssetAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AssetAssignmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, AssetAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AssetAssignmentUpdateManyArgs>(args: Prisma.SelectSubset<T, AssetAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AssetAssignmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AssetAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AssetAssignmentUpsertArgs>(args: Prisma.SelectSubset<T, AssetAssignmentUpsertArgs<ExtArgs>>): Prisma.Prisma__AssetAssignmentClient<runtime.Types.Result.GetResult<Prisma.$AssetAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AssetAssignmentCountArgs>(args?: Prisma.Subset<T, AssetAssignmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AssetAssignmentCountAggregateOutputType> : number>;
    aggregate<T extends AssetAssignmentAggregateArgs>(args: Prisma.Subset<T, AssetAssignmentAggregateArgs>): Prisma.PrismaPromise<GetAssetAssignmentAggregateType<T>>;
    groupBy<T extends AssetAssignmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AssetAssignmentGroupByArgs['orderBy'];
    } : {
        orderBy?: AssetAssignmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AssetAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AssetAssignmentFieldRefs;
}
export interface Prisma__AssetAssignmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    asset<T extends Prisma.AssetDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AssetDefaultArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    employee<T extends Prisma.AssetAssignment$employeeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AssetAssignment$employeeArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AssetAssignmentFieldRefs {
    readonly id: Prisma.FieldRef<"AssetAssignment", 'String'>;
    readonly assetId: Prisma.FieldRef<"AssetAssignment", 'String'>;
    readonly employeeId: Prisma.FieldRef<"AssetAssignment", 'String'>;
    readonly assignedDate: Prisma.FieldRef<"AssetAssignment", 'DateTime'>;
    readonly expectedReturnDate: Prisma.FieldRef<"AssetAssignment", 'DateTime'>;
    readonly returnedDate: Prisma.FieldRef<"AssetAssignment", 'DateTime'>;
    readonly returnCondition: Prisma.FieldRef<"AssetAssignment", 'ReturnCondition'>;
    readonly returnNotes: Prisma.FieldRef<"AssetAssignment", 'String'>;
    readonly acknowledgedAt: Prisma.FieldRef<"AssetAssignment", 'DateTime'>;
    readonly assignedBy: Prisma.FieldRef<"AssetAssignment", 'String'>;
    readonly createdAt: Prisma.FieldRef<"AssetAssignment", 'DateTime'>;
}
export type AssetAssignmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssetAssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssetAssignmentInclude<ExtArgs> | null;
    where: Prisma.AssetAssignmentWhereUniqueInput;
};
export type AssetAssignmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssetAssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssetAssignmentInclude<ExtArgs> | null;
    where: Prisma.AssetAssignmentWhereUniqueInput;
};
export type AssetAssignmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssetAssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssetAssignmentInclude<ExtArgs> | null;
    where?: Prisma.AssetAssignmentWhereInput;
    orderBy?: Prisma.AssetAssignmentOrderByWithRelationInput | Prisma.AssetAssignmentOrderByWithRelationInput[];
    cursor?: Prisma.AssetAssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetAssignmentScalarFieldEnum | Prisma.AssetAssignmentScalarFieldEnum[];
};
export type AssetAssignmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssetAssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssetAssignmentInclude<ExtArgs> | null;
    where?: Prisma.AssetAssignmentWhereInput;
    orderBy?: Prisma.AssetAssignmentOrderByWithRelationInput | Prisma.AssetAssignmentOrderByWithRelationInput[];
    cursor?: Prisma.AssetAssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetAssignmentScalarFieldEnum | Prisma.AssetAssignmentScalarFieldEnum[];
};
export type AssetAssignmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssetAssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssetAssignmentInclude<ExtArgs> | null;
    where?: Prisma.AssetAssignmentWhereInput;
    orderBy?: Prisma.AssetAssignmentOrderByWithRelationInput | Prisma.AssetAssignmentOrderByWithRelationInput[];
    cursor?: Prisma.AssetAssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetAssignmentScalarFieldEnum | Prisma.AssetAssignmentScalarFieldEnum[];
};
export type AssetAssignmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssetAssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssetAssignmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetAssignmentCreateInput, Prisma.AssetAssignmentUncheckedCreateInput>;
};
export type AssetAssignmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AssetAssignmentCreateManyInput | Prisma.AssetAssignmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AssetAssignmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetAssignmentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AssetAssignmentOmit<ExtArgs> | null;
    data: Prisma.AssetAssignmentCreateManyInput | Prisma.AssetAssignmentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AssetAssignmentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AssetAssignmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssetAssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssetAssignmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetAssignmentUpdateInput, Prisma.AssetAssignmentUncheckedUpdateInput>;
    where: Prisma.AssetAssignmentWhereUniqueInput;
};
export type AssetAssignmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AssetAssignmentUpdateManyMutationInput, Prisma.AssetAssignmentUncheckedUpdateManyInput>;
    where?: Prisma.AssetAssignmentWhereInput;
    limit?: number;
};
export type AssetAssignmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetAssignmentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AssetAssignmentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetAssignmentUpdateManyMutationInput, Prisma.AssetAssignmentUncheckedUpdateManyInput>;
    where?: Prisma.AssetAssignmentWhereInput;
    limit?: number;
    include?: Prisma.AssetAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AssetAssignmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssetAssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssetAssignmentInclude<ExtArgs> | null;
    where: Prisma.AssetAssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetAssignmentCreateInput, Prisma.AssetAssignmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AssetAssignmentUpdateInput, Prisma.AssetAssignmentUncheckedUpdateInput>;
};
export type AssetAssignmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssetAssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssetAssignmentInclude<ExtArgs> | null;
    where: Prisma.AssetAssignmentWhereUniqueInput;
};
export type AssetAssignmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetAssignmentWhereInput;
    limit?: number;
};
export type AssetAssignment$employeeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where?: Prisma.EmployeeWhereInput;
};
export type AssetAssignmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.AssetAssignmentOmit<ExtArgs> | null;
    include?: Prisma.AssetAssignmentInclude<ExtArgs> | null;
};
