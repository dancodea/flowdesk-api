import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AssetRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$AssetRequestPayload>;
export type AggregateAssetRequest = {
    _count: AssetRequestCountAggregateOutputType | null;
    _min: AssetRequestMinAggregateOutputType | null;
    _max: AssetRequestMaxAggregateOutputType | null;
};
export type AssetRequestMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    employeeId: string | null;
    assetType: string | null;
    reason: string | null;
    status: $Enums.AssetRequestStatus | null;
    fulfilledAssetId: string | null;
    createdAt: Date | null;
};
export type AssetRequestMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    employeeId: string | null;
    assetType: string | null;
    reason: string | null;
    status: $Enums.AssetRequestStatus | null;
    fulfilledAssetId: string | null;
    createdAt: Date | null;
};
export type AssetRequestCountAggregateOutputType = {
    id: number;
    organizationId: number;
    employeeId: number;
    assetType: number;
    reason: number;
    status: number;
    fulfilledAssetId: number;
    createdAt: number;
    _all: number;
};
export type AssetRequestMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    employeeId?: true;
    assetType?: true;
    reason?: true;
    status?: true;
    fulfilledAssetId?: true;
    createdAt?: true;
};
export type AssetRequestMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    employeeId?: true;
    assetType?: true;
    reason?: true;
    status?: true;
    fulfilledAssetId?: true;
    createdAt?: true;
};
export type AssetRequestCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    employeeId?: true;
    assetType?: true;
    reason?: true;
    status?: true;
    fulfilledAssetId?: true;
    createdAt?: true;
    _all?: true;
};
export type AssetRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetRequestWhereInput;
    orderBy?: Prisma.AssetRequestOrderByWithRelationInput | Prisma.AssetRequestOrderByWithRelationInput[];
    cursor?: Prisma.AssetRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AssetRequestCountAggregateInputType;
    _min?: AssetRequestMinAggregateInputType;
    _max?: AssetRequestMaxAggregateInputType;
};
export type GetAssetRequestAggregateType<T extends AssetRequestAggregateArgs> = {
    [P in keyof T & keyof AggregateAssetRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAssetRequest[P]> : Prisma.GetScalarType<T[P], AggregateAssetRequest[P]>;
};
export type AssetRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetRequestWhereInput;
    orderBy?: Prisma.AssetRequestOrderByWithAggregationInput | Prisma.AssetRequestOrderByWithAggregationInput[];
    by: Prisma.AssetRequestScalarFieldEnum[] | Prisma.AssetRequestScalarFieldEnum;
    having?: Prisma.AssetRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AssetRequestCountAggregateInputType | true;
    _min?: AssetRequestMinAggregateInputType;
    _max?: AssetRequestMaxAggregateInputType;
};
export type AssetRequestGroupByOutputType = {
    id: string;
    organizationId: string;
    employeeId: string | null;
    assetType: string;
    reason: string | null;
    status: $Enums.AssetRequestStatus;
    fulfilledAssetId: string | null;
    createdAt: Date;
    _count: AssetRequestCountAggregateOutputType | null;
    _min: AssetRequestMinAggregateOutputType | null;
    _max: AssetRequestMaxAggregateOutputType | null;
};
export type GetAssetRequestGroupByPayload<T extends AssetRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AssetRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AssetRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AssetRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AssetRequestGroupByOutputType[P]>;
}>>;
export type AssetRequestWhereInput = {
    AND?: Prisma.AssetRequestWhereInput | Prisma.AssetRequestWhereInput[];
    OR?: Prisma.AssetRequestWhereInput[];
    NOT?: Prisma.AssetRequestWhereInput | Prisma.AssetRequestWhereInput[];
    id?: Prisma.UuidFilter<"AssetRequest"> | string;
    organizationId?: Prisma.UuidFilter<"AssetRequest"> | string;
    employeeId?: Prisma.UuidNullableFilter<"AssetRequest"> | string | null;
    assetType?: Prisma.StringFilter<"AssetRequest"> | string;
    reason?: Prisma.StringNullableFilter<"AssetRequest"> | string | null;
    status?: Prisma.EnumAssetRequestStatusFilter<"AssetRequest"> | $Enums.AssetRequestStatus;
    fulfilledAssetId?: Prisma.UuidNullableFilter<"AssetRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AssetRequest"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    employee?: Prisma.XOR<Prisma.EmployeeNullableScalarRelationFilter, Prisma.EmployeeWhereInput> | null;
    fulfilledAsset?: Prisma.XOR<Prisma.AssetNullableScalarRelationFilter, Prisma.AssetWhereInput> | null;
};
export type AssetRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    assetType?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    fulfilledAssetId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    employee?: Prisma.EmployeeOrderByWithRelationInput;
    fulfilledAsset?: Prisma.AssetOrderByWithRelationInput;
};
export type AssetRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AssetRequestWhereInput | Prisma.AssetRequestWhereInput[];
    OR?: Prisma.AssetRequestWhereInput[];
    NOT?: Prisma.AssetRequestWhereInput | Prisma.AssetRequestWhereInput[];
    organizationId?: Prisma.UuidFilter<"AssetRequest"> | string;
    employeeId?: Prisma.UuidNullableFilter<"AssetRequest"> | string | null;
    assetType?: Prisma.StringFilter<"AssetRequest"> | string;
    reason?: Prisma.StringNullableFilter<"AssetRequest"> | string | null;
    status?: Prisma.EnumAssetRequestStatusFilter<"AssetRequest"> | $Enums.AssetRequestStatus;
    fulfilledAssetId?: Prisma.UuidNullableFilter<"AssetRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AssetRequest"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    employee?: Prisma.XOR<Prisma.EmployeeNullableScalarRelationFilter, Prisma.EmployeeWhereInput> | null;
    fulfilledAsset?: Prisma.XOR<Prisma.AssetNullableScalarRelationFilter, Prisma.AssetWhereInput> | null;
}, "id">;
export type AssetRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    assetType?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    fulfilledAssetId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AssetRequestCountOrderByAggregateInput;
    _max?: Prisma.AssetRequestMaxOrderByAggregateInput;
    _min?: Prisma.AssetRequestMinOrderByAggregateInput;
};
export type AssetRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.AssetRequestScalarWhereWithAggregatesInput | Prisma.AssetRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.AssetRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AssetRequestScalarWhereWithAggregatesInput | Prisma.AssetRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"AssetRequest"> | string;
    organizationId?: Prisma.UuidWithAggregatesFilter<"AssetRequest"> | string;
    employeeId?: Prisma.UuidNullableWithAggregatesFilter<"AssetRequest"> | string | null;
    assetType?: Prisma.StringWithAggregatesFilter<"AssetRequest"> | string;
    reason?: Prisma.StringNullableWithAggregatesFilter<"AssetRequest"> | string | null;
    status?: Prisma.EnumAssetRequestStatusWithAggregatesFilter<"AssetRequest"> | $Enums.AssetRequestStatus;
    fulfilledAssetId?: Prisma.UuidNullableWithAggregatesFilter<"AssetRequest"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AssetRequest"> | Date | string;
};
export type AssetRequestCreateInput = {
    id?: string;
    assetType: string;
    reason?: string | null;
    status?: $Enums.AssetRequestStatus;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutAssetRequestsInput;
    employee?: Prisma.EmployeeCreateNestedOneWithoutAssetRequestsInput;
    fulfilledAsset?: Prisma.AssetCreateNestedOneWithoutFulfilledRequestsInput;
};
export type AssetRequestUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    employeeId?: string | null;
    assetType: string;
    reason?: string | null;
    status?: $Enums.AssetRequestStatus;
    fulfilledAssetId?: string | null;
    createdAt?: Date | string;
};
export type AssetRequestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetType?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAssetRequestStatusFieldUpdateOperationsInput | $Enums.AssetRequestStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutAssetRequestsNestedInput;
    employee?: Prisma.EmployeeUpdateOneWithoutAssetRequestsNestedInput;
    fulfilledAsset?: Prisma.AssetUpdateOneWithoutFulfilledRequestsNestedInput;
};
export type AssetRequestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assetType?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAssetRequestStatusFieldUpdateOperationsInput | $Enums.AssetRequestStatus;
    fulfilledAssetId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetRequestCreateManyInput = {
    id?: string;
    organizationId: string;
    employeeId?: string | null;
    assetType: string;
    reason?: string | null;
    status?: $Enums.AssetRequestStatus;
    fulfilledAssetId?: string | null;
    createdAt?: Date | string;
};
export type AssetRequestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetType?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAssetRequestStatusFieldUpdateOperationsInput | $Enums.AssetRequestStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetRequestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assetType?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAssetRequestStatusFieldUpdateOperationsInput | $Enums.AssetRequestStatus;
    fulfilledAssetId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetRequestListRelationFilter = {
    every?: Prisma.AssetRequestWhereInput;
    some?: Prisma.AssetRequestWhereInput;
    none?: Prisma.AssetRequestWhereInput;
};
export type AssetRequestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AssetRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    assetType?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    fulfilledAssetId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AssetRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    assetType?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    fulfilledAssetId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AssetRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    assetType?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    fulfilledAssetId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AssetRequestCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.AssetRequestCreateWithoutOrganizationInput, Prisma.AssetRequestUncheckedCreateWithoutOrganizationInput> | Prisma.AssetRequestCreateWithoutOrganizationInput[] | Prisma.AssetRequestUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.AssetRequestCreateOrConnectWithoutOrganizationInput | Prisma.AssetRequestCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.AssetRequestCreateManyOrganizationInputEnvelope;
    connect?: Prisma.AssetRequestWhereUniqueInput | Prisma.AssetRequestWhereUniqueInput[];
};
export type AssetRequestUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.AssetRequestCreateWithoutOrganizationInput, Prisma.AssetRequestUncheckedCreateWithoutOrganizationInput> | Prisma.AssetRequestCreateWithoutOrganizationInput[] | Prisma.AssetRequestUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.AssetRequestCreateOrConnectWithoutOrganizationInput | Prisma.AssetRequestCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.AssetRequestCreateManyOrganizationInputEnvelope;
    connect?: Prisma.AssetRequestWhereUniqueInput | Prisma.AssetRequestWhereUniqueInput[];
};
export type AssetRequestUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.AssetRequestCreateWithoutOrganizationInput, Prisma.AssetRequestUncheckedCreateWithoutOrganizationInput> | Prisma.AssetRequestCreateWithoutOrganizationInput[] | Prisma.AssetRequestUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.AssetRequestCreateOrConnectWithoutOrganizationInput | Prisma.AssetRequestCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.AssetRequestUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.AssetRequestUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.AssetRequestCreateManyOrganizationInputEnvelope;
    set?: Prisma.AssetRequestWhereUniqueInput | Prisma.AssetRequestWhereUniqueInput[];
    disconnect?: Prisma.AssetRequestWhereUniqueInput | Prisma.AssetRequestWhereUniqueInput[];
    delete?: Prisma.AssetRequestWhereUniqueInput | Prisma.AssetRequestWhereUniqueInput[];
    connect?: Prisma.AssetRequestWhereUniqueInput | Prisma.AssetRequestWhereUniqueInput[];
    update?: Prisma.AssetRequestUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.AssetRequestUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.AssetRequestUpdateManyWithWhereWithoutOrganizationInput | Prisma.AssetRequestUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.AssetRequestScalarWhereInput | Prisma.AssetRequestScalarWhereInput[];
};
export type AssetRequestUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.AssetRequestCreateWithoutOrganizationInput, Prisma.AssetRequestUncheckedCreateWithoutOrganizationInput> | Prisma.AssetRequestCreateWithoutOrganizationInput[] | Prisma.AssetRequestUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.AssetRequestCreateOrConnectWithoutOrganizationInput | Prisma.AssetRequestCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.AssetRequestUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.AssetRequestUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.AssetRequestCreateManyOrganizationInputEnvelope;
    set?: Prisma.AssetRequestWhereUniqueInput | Prisma.AssetRequestWhereUniqueInput[];
    disconnect?: Prisma.AssetRequestWhereUniqueInput | Prisma.AssetRequestWhereUniqueInput[];
    delete?: Prisma.AssetRequestWhereUniqueInput | Prisma.AssetRequestWhereUniqueInput[];
    connect?: Prisma.AssetRequestWhereUniqueInput | Prisma.AssetRequestWhereUniqueInput[];
    update?: Prisma.AssetRequestUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.AssetRequestUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.AssetRequestUpdateManyWithWhereWithoutOrganizationInput | Prisma.AssetRequestUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.AssetRequestScalarWhereInput | Prisma.AssetRequestScalarWhereInput[];
};
export type AssetRequestCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.AssetRequestCreateWithoutEmployeeInput, Prisma.AssetRequestUncheckedCreateWithoutEmployeeInput> | Prisma.AssetRequestCreateWithoutEmployeeInput[] | Prisma.AssetRequestUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.AssetRequestCreateOrConnectWithoutEmployeeInput | Prisma.AssetRequestCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.AssetRequestCreateManyEmployeeInputEnvelope;
    connect?: Prisma.AssetRequestWhereUniqueInput | Prisma.AssetRequestWhereUniqueInput[];
};
export type AssetRequestUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.AssetRequestCreateWithoutEmployeeInput, Prisma.AssetRequestUncheckedCreateWithoutEmployeeInput> | Prisma.AssetRequestCreateWithoutEmployeeInput[] | Prisma.AssetRequestUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.AssetRequestCreateOrConnectWithoutEmployeeInput | Prisma.AssetRequestCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.AssetRequestCreateManyEmployeeInputEnvelope;
    connect?: Prisma.AssetRequestWhereUniqueInput | Prisma.AssetRequestWhereUniqueInput[];
};
export type AssetRequestUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.AssetRequestCreateWithoutEmployeeInput, Prisma.AssetRequestUncheckedCreateWithoutEmployeeInput> | Prisma.AssetRequestCreateWithoutEmployeeInput[] | Prisma.AssetRequestUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.AssetRequestCreateOrConnectWithoutEmployeeInput | Prisma.AssetRequestCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.AssetRequestUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.AssetRequestUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.AssetRequestCreateManyEmployeeInputEnvelope;
    set?: Prisma.AssetRequestWhereUniqueInput | Prisma.AssetRequestWhereUniqueInput[];
    disconnect?: Prisma.AssetRequestWhereUniqueInput | Prisma.AssetRequestWhereUniqueInput[];
    delete?: Prisma.AssetRequestWhereUniqueInput | Prisma.AssetRequestWhereUniqueInput[];
    connect?: Prisma.AssetRequestWhereUniqueInput | Prisma.AssetRequestWhereUniqueInput[];
    update?: Prisma.AssetRequestUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.AssetRequestUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.AssetRequestUpdateManyWithWhereWithoutEmployeeInput | Prisma.AssetRequestUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.AssetRequestScalarWhereInput | Prisma.AssetRequestScalarWhereInput[];
};
export type AssetRequestUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.AssetRequestCreateWithoutEmployeeInput, Prisma.AssetRequestUncheckedCreateWithoutEmployeeInput> | Prisma.AssetRequestCreateWithoutEmployeeInput[] | Prisma.AssetRequestUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.AssetRequestCreateOrConnectWithoutEmployeeInput | Prisma.AssetRequestCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.AssetRequestUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.AssetRequestUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.AssetRequestCreateManyEmployeeInputEnvelope;
    set?: Prisma.AssetRequestWhereUniqueInput | Prisma.AssetRequestWhereUniqueInput[];
    disconnect?: Prisma.AssetRequestWhereUniqueInput | Prisma.AssetRequestWhereUniqueInput[];
    delete?: Prisma.AssetRequestWhereUniqueInput | Prisma.AssetRequestWhereUniqueInput[];
    connect?: Prisma.AssetRequestWhereUniqueInput | Prisma.AssetRequestWhereUniqueInput[];
    update?: Prisma.AssetRequestUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.AssetRequestUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.AssetRequestUpdateManyWithWhereWithoutEmployeeInput | Prisma.AssetRequestUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.AssetRequestScalarWhereInput | Prisma.AssetRequestScalarWhereInput[];
};
export type AssetRequestCreateNestedManyWithoutFulfilledAssetInput = {
    create?: Prisma.XOR<Prisma.AssetRequestCreateWithoutFulfilledAssetInput, Prisma.AssetRequestUncheckedCreateWithoutFulfilledAssetInput> | Prisma.AssetRequestCreateWithoutFulfilledAssetInput[] | Prisma.AssetRequestUncheckedCreateWithoutFulfilledAssetInput[];
    connectOrCreate?: Prisma.AssetRequestCreateOrConnectWithoutFulfilledAssetInput | Prisma.AssetRequestCreateOrConnectWithoutFulfilledAssetInput[];
    createMany?: Prisma.AssetRequestCreateManyFulfilledAssetInputEnvelope;
    connect?: Prisma.AssetRequestWhereUniqueInput | Prisma.AssetRequestWhereUniqueInput[];
};
export type AssetRequestUncheckedCreateNestedManyWithoutFulfilledAssetInput = {
    create?: Prisma.XOR<Prisma.AssetRequestCreateWithoutFulfilledAssetInput, Prisma.AssetRequestUncheckedCreateWithoutFulfilledAssetInput> | Prisma.AssetRequestCreateWithoutFulfilledAssetInput[] | Prisma.AssetRequestUncheckedCreateWithoutFulfilledAssetInput[];
    connectOrCreate?: Prisma.AssetRequestCreateOrConnectWithoutFulfilledAssetInput | Prisma.AssetRequestCreateOrConnectWithoutFulfilledAssetInput[];
    createMany?: Prisma.AssetRequestCreateManyFulfilledAssetInputEnvelope;
    connect?: Prisma.AssetRequestWhereUniqueInput | Prisma.AssetRequestWhereUniqueInput[];
};
export type AssetRequestUpdateManyWithoutFulfilledAssetNestedInput = {
    create?: Prisma.XOR<Prisma.AssetRequestCreateWithoutFulfilledAssetInput, Prisma.AssetRequestUncheckedCreateWithoutFulfilledAssetInput> | Prisma.AssetRequestCreateWithoutFulfilledAssetInput[] | Prisma.AssetRequestUncheckedCreateWithoutFulfilledAssetInput[];
    connectOrCreate?: Prisma.AssetRequestCreateOrConnectWithoutFulfilledAssetInput | Prisma.AssetRequestCreateOrConnectWithoutFulfilledAssetInput[];
    upsert?: Prisma.AssetRequestUpsertWithWhereUniqueWithoutFulfilledAssetInput | Prisma.AssetRequestUpsertWithWhereUniqueWithoutFulfilledAssetInput[];
    createMany?: Prisma.AssetRequestCreateManyFulfilledAssetInputEnvelope;
    set?: Prisma.AssetRequestWhereUniqueInput | Prisma.AssetRequestWhereUniqueInput[];
    disconnect?: Prisma.AssetRequestWhereUniqueInput | Prisma.AssetRequestWhereUniqueInput[];
    delete?: Prisma.AssetRequestWhereUniqueInput | Prisma.AssetRequestWhereUniqueInput[];
    connect?: Prisma.AssetRequestWhereUniqueInput | Prisma.AssetRequestWhereUniqueInput[];
    update?: Prisma.AssetRequestUpdateWithWhereUniqueWithoutFulfilledAssetInput | Prisma.AssetRequestUpdateWithWhereUniqueWithoutFulfilledAssetInput[];
    updateMany?: Prisma.AssetRequestUpdateManyWithWhereWithoutFulfilledAssetInput | Prisma.AssetRequestUpdateManyWithWhereWithoutFulfilledAssetInput[];
    deleteMany?: Prisma.AssetRequestScalarWhereInput | Prisma.AssetRequestScalarWhereInput[];
};
export type AssetRequestUncheckedUpdateManyWithoutFulfilledAssetNestedInput = {
    create?: Prisma.XOR<Prisma.AssetRequestCreateWithoutFulfilledAssetInput, Prisma.AssetRequestUncheckedCreateWithoutFulfilledAssetInput> | Prisma.AssetRequestCreateWithoutFulfilledAssetInput[] | Prisma.AssetRequestUncheckedCreateWithoutFulfilledAssetInput[];
    connectOrCreate?: Prisma.AssetRequestCreateOrConnectWithoutFulfilledAssetInput | Prisma.AssetRequestCreateOrConnectWithoutFulfilledAssetInput[];
    upsert?: Prisma.AssetRequestUpsertWithWhereUniqueWithoutFulfilledAssetInput | Prisma.AssetRequestUpsertWithWhereUniqueWithoutFulfilledAssetInput[];
    createMany?: Prisma.AssetRequestCreateManyFulfilledAssetInputEnvelope;
    set?: Prisma.AssetRequestWhereUniqueInput | Prisma.AssetRequestWhereUniqueInput[];
    disconnect?: Prisma.AssetRequestWhereUniqueInput | Prisma.AssetRequestWhereUniqueInput[];
    delete?: Prisma.AssetRequestWhereUniqueInput | Prisma.AssetRequestWhereUniqueInput[];
    connect?: Prisma.AssetRequestWhereUniqueInput | Prisma.AssetRequestWhereUniqueInput[];
    update?: Prisma.AssetRequestUpdateWithWhereUniqueWithoutFulfilledAssetInput | Prisma.AssetRequestUpdateWithWhereUniqueWithoutFulfilledAssetInput[];
    updateMany?: Prisma.AssetRequestUpdateManyWithWhereWithoutFulfilledAssetInput | Prisma.AssetRequestUpdateManyWithWhereWithoutFulfilledAssetInput[];
    deleteMany?: Prisma.AssetRequestScalarWhereInput | Prisma.AssetRequestScalarWhereInput[];
};
export type EnumAssetRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.AssetRequestStatus;
};
export type AssetRequestCreateWithoutOrganizationInput = {
    id?: string;
    assetType: string;
    reason?: string | null;
    status?: $Enums.AssetRequestStatus;
    createdAt?: Date | string;
    employee?: Prisma.EmployeeCreateNestedOneWithoutAssetRequestsInput;
    fulfilledAsset?: Prisma.AssetCreateNestedOneWithoutFulfilledRequestsInput;
};
export type AssetRequestUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    employeeId?: string | null;
    assetType: string;
    reason?: string | null;
    status?: $Enums.AssetRequestStatus;
    fulfilledAssetId?: string | null;
    createdAt?: Date | string;
};
export type AssetRequestCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.AssetRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetRequestCreateWithoutOrganizationInput, Prisma.AssetRequestUncheckedCreateWithoutOrganizationInput>;
};
export type AssetRequestCreateManyOrganizationInputEnvelope = {
    data: Prisma.AssetRequestCreateManyOrganizationInput | Prisma.AssetRequestCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type AssetRequestUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.AssetRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.AssetRequestUpdateWithoutOrganizationInput, Prisma.AssetRequestUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.AssetRequestCreateWithoutOrganizationInput, Prisma.AssetRequestUncheckedCreateWithoutOrganizationInput>;
};
export type AssetRequestUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.AssetRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.AssetRequestUpdateWithoutOrganizationInput, Prisma.AssetRequestUncheckedUpdateWithoutOrganizationInput>;
};
export type AssetRequestUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.AssetRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.AssetRequestUpdateManyMutationInput, Prisma.AssetRequestUncheckedUpdateManyWithoutOrganizationInput>;
};
export type AssetRequestScalarWhereInput = {
    AND?: Prisma.AssetRequestScalarWhereInput | Prisma.AssetRequestScalarWhereInput[];
    OR?: Prisma.AssetRequestScalarWhereInput[];
    NOT?: Prisma.AssetRequestScalarWhereInput | Prisma.AssetRequestScalarWhereInput[];
    id?: Prisma.UuidFilter<"AssetRequest"> | string;
    organizationId?: Prisma.UuidFilter<"AssetRequest"> | string;
    employeeId?: Prisma.UuidNullableFilter<"AssetRequest"> | string | null;
    assetType?: Prisma.StringFilter<"AssetRequest"> | string;
    reason?: Prisma.StringNullableFilter<"AssetRequest"> | string | null;
    status?: Prisma.EnumAssetRequestStatusFilter<"AssetRequest"> | $Enums.AssetRequestStatus;
    fulfilledAssetId?: Prisma.UuidNullableFilter<"AssetRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AssetRequest"> | Date | string;
};
export type AssetRequestCreateWithoutEmployeeInput = {
    id?: string;
    assetType: string;
    reason?: string | null;
    status?: $Enums.AssetRequestStatus;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutAssetRequestsInput;
    fulfilledAsset?: Prisma.AssetCreateNestedOneWithoutFulfilledRequestsInput;
};
export type AssetRequestUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    organizationId: string;
    assetType: string;
    reason?: string | null;
    status?: $Enums.AssetRequestStatus;
    fulfilledAssetId?: string | null;
    createdAt?: Date | string;
};
export type AssetRequestCreateOrConnectWithoutEmployeeInput = {
    where: Prisma.AssetRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetRequestCreateWithoutEmployeeInput, Prisma.AssetRequestUncheckedCreateWithoutEmployeeInput>;
};
export type AssetRequestCreateManyEmployeeInputEnvelope = {
    data: Prisma.AssetRequestCreateManyEmployeeInput | Prisma.AssetRequestCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
};
export type AssetRequestUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.AssetRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.AssetRequestUpdateWithoutEmployeeInput, Prisma.AssetRequestUncheckedUpdateWithoutEmployeeInput>;
    create: Prisma.XOR<Prisma.AssetRequestCreateWithoutEmployeeInput, Prisma.AssetRequestUncheckedCreateWithoutEmployeeInput>;
};
export type AssetRequestUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.AssetRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.AssetRequestUpdateWithoutEmployeeInput, Prisma.AssetRequestUncheckedUpdateWithoutEmployeeInput>;
};
export type AssetRequestUpdateManyWithWhereWithoutEmployeeInput = {
    where: Prisma.AssetRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.AssetRequestUpdateManyMutationInput, Prisma.AssetRequestUncheckedUpdateManyWithoutEmployeeInput>;
};
export type AssetRequestCreateWithoutFulfilledAssetInput = {
    id?: string;
    assetType: string;
    reason?: string | null;
    status?: $Enums.AssetRequestStatus;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutAssetRequestsInput;
    employee?: Prisma.EmployeeCreateNestedOneWithoutAssetRequestsInput;
};
export type AssetRequestUncheckedCreateWithoutFulfilledAssetInput = {
    id?: string;
    organizationId: string;
    employeeId?: string | null;
    assetType: string;
    reason?: string | null;
    status?: $Enums.AssetRequestStatus;
    createdAt?: Date | string;
};
export type AssetRequestCreateOrConnectWithoutFulfilledAssetInput = {
    where: Prisma.AssetRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetRequestCreateWithoutFulfilledAssetInput, Prisma.AssetRequestUncheckedCreateWithoutFulfilledAssetInput>;
};
export type AssetRequestCreateManyFulfilledAssetInputEnvelope = {
    data: Prisma.AssetRequestCreateManyFulfilledAssetInput | Prisma.AssetRequestCreateManyFulfilledAssetInput[];
    skipDuplicates?: boolean;
};
export type AssetRequestUpsertWithWhereUniqueWithoutFulfilledAssetInput = {
    where: Prisma.AssetRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.AssetRequestUpdateWithoutFulfilledAssetInput, Prisma.AssetRequestUncheckedUpdateWithoutFulfilledAssetInput>;
    create: Prisma.XOR<Prisma.AssetRequestCreateWithoutFulfilledAssetInput, Prisma.AssetRequestUncheckedCreateWithoutFulfilledAssetInput>;
};
export type AssetRequestUpdateWithWhereUniqueWithoutFulfilledAssetInput = {
    where: Prisma.AssetRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.AssetRequestUpdateWithoutFulfilledAssetInput, Prisma.AssetRequestUncheckedUpdateWithoutFulfilledAssetInput>;
};
export type AssetRequestUpdateManyWithWhereWithoutFulfilledAssetInput = {
    where: Prisma.AssetRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.AssetRequestUpdateManyMutationInput, Prisma.AssetRequestUncheckedUpdateManyWithoutFulfilledAssetInput>;
};
export type AssetRequestCreateManyOrganizationInput = {
    id?: string;
    employeeId?: string | null;
    assetType: string;
    reason?: string | null;
    status?: $Enums.AssetRequestStatus;
    fulfilledAssetId?: string | null;
    createdAt?: Date | string;
};
export type AssetRequestUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetType?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAssetRequestStatusFieldUpdateOperationsInput | $Enums.AssetRequestStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneWithoutAssetRequestsNestedInput;
    fulfilledAsset?: Prisma.AssetUpdateOneWithoutFulfilledRequestsNestedInput;
};
export type AssetRequestUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assetType?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAssetRequestStatusFieldUpdateOperationsInput | $Enums.AssetRequestStatus;
    fulfilledAssetId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetRequestUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assetType?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAssetRequestStatusFieldUpdateOperationsInput | $Enums.AssetRequestStatus;
    fulfilledAssetId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetRequestCreateManyEmployeeInput = {
    id?: string;
    organizationId: string;
    assetType: string;
    reason?: string | null;
    status?: $Enums.AssetRequestStatus;
    fulfilledAssetId?: string | null;
    createdAt?: Date | string;
};
export type AssetRequestUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetType?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAssetRequestStatusFieldUpdateOperationsInput | $Enums.AssetRequestStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutAssetRequestsNestedInput;
    fulfilledAsset?: Prisma.AssetUpdateOneWithoutFulfilledRequestsNestedInput;
};
export type AssetRequestUncheckedUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    assetType?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAssetRequestStatusFieldUpdateOperationsInput | $Enums.AssetRequestStatus;
    fulfilledAssetId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetRequestUncheckedUpdateManyWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    assetType?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAssetRequestStatusFieldUpdateOperationsInput | $Enums.AssetRequestStatus;
    fulfilledAssetId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetRequestCreateManyFulfilledAssetInput = {
    id?: string;
    organizationId: string;
    employeeId?: string | null;
    assetType: string;
    reason?: string | null;
    status?: $Enums.AssetRequestStatus;
    createdAt?: Date | string;
};
export type AssetRequestUpdateWithoutFulfilledAssetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    assetType?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAssetRequestStatusFieldUpdateOperationsInput | $Enums.AssetRequestStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutAssetRequestsNestedInput;
    employee?: Prisma.EmployeeUpdateOneWithoutAssetRequestsNestedInput;
};
export type AssetRequestUncheckedUpdateWithoutFulfilledAssetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assetType?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAssetRequestStatusFieldUpdateOperationsInput | $Enums.AssetRequestStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetRequestUncheckedUpdateManyWithoutFulfilledAssetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assetType?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAssetRequestStatusFieldUpdateOperationsInput | $Enums.AssetRequestStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    employeeId?: boolean;
    assetType?: boolean;
    reason?: boolean;
    status?: boolean;
    fulfilledAssetId?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.AssetRequest$employeeArgs<ExtArgs>;
    fulfilledAsset?: boolean | Prisma.AssetRequest$fulfilledAssetArgs<ExtArgs>;
}, ExtArgs["result"]["assetRequest"]>;
export type AssetRequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    employeeId?: boolean;
    assetType?: boolean;
    reason?: boolean;
    status?: boolean;
    fulfilledAssetId?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.AssetRequest$employeeArgs<ExtArgs>;
    fulfilledAsset?: boolean | Prisma.AssetRequest$fulfilledAssetArgs<ExtArgs>;
}, ExtArgs["result"]["assetRequest"]>;
export type AssetRequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    employeeId?: boolean;
    assetType?: boolean;
    reason?: boolean;
    status?: boolean;
    fulfilledAssetId?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.AssetRequest$employeeArgs<ExtArgs>;
    fulfilledAsset?: boolean | Prisma.AssetRequest$fulfilledAssetArgs<ExtArgs>;
}, ExtArgs["result"]["assetRequest"]>;
export type AssetRequestSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    employeeId?: boolean;
    assetType?: boolean;
    reason?: boolean;
    status?: boolean;
    fulfilledAssetId?: boolean;
    createdAt?: boolean;
};
export type AssetRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "employeeId" | "assetType" | "reason" | "status" | "fulfilledAssetId" | "createdAt", ExtArgs["result"]["assetRequest"]>;
export type AssetRequestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.AssetRequest$employeeArgs<ExtArgs>;
    fulfilledAsset?: boolean | Prisma.AssetRequest$fulfilledAssetArgs<ExtArgs>;
};
export type AssetRequestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.AssetRequest$employeeArgs<ExtArgs>;
    fulfilledAsset?: boolean | Prisma.AssetRequest$fulfilledAssetArgs<ExtArgs>;
};
export type AssetRequestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.AssetRequest$employeeArgs<ExtArgs>;
    fulfilledAsset?: boolean | Prisma.AssetRequest$fulfilledAssetArgs<ExtArgs>;
};
export type $AssetRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AssetRequest";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        employee: Prisma.$EmployeePayload<ExtArgs> | null;
        fulfilledAsset: Prisma.$AssetPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        employeeId: string | null;
        assetType: string;
        reason: string | null;
        status: $Enums.AssetRequestStatus;
        fulfilledAssetId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["assetRequest"]>;
    composites: {};
};
export type AssetRequestGetPayload<S extends boolean | null | undefined | AssetRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AssetRequestPayload, S>;
export type AssetRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AssetRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AssetRequestCountAggregateInputType | true;
};
export interface AssetRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AssetRequest'];
        meta: {
            name: 'AssetRequest';
        };
    };
    findUnique<T extends AssetRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, AssetRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AssetRequestClient<runtime.Types.Result.GetResult<Prisma.$AssetRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AssetRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AssetRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssetRequestClient<runtime.Types.Result.GetResult<Prisma.$AssetRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AssetRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, AssetRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__AssetRequestClient<runtime.Types.Result.GetResult<Prisma.$AssetRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AssetRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AssetRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssetRequestClient<runtime.Types.Result.GetResult<Prisma.$AssetRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AssetRequestFindManyArgs>(args?: Prisma.SelectSubset<T, AssetRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AssetRequestCreateArgs>(args: Prisma.SelectSubset<T, AssetRequestCreateArgs<ExtArgs>>): Prisma.Prisma__AssetRequestClient<runtime.Types.Result.GetResult<Prisma.$AssetRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AssetRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, AssetRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AssetRequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AssetRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AssetRequestDeleteArgs>(args: Prisma.SelectSubset<T, AssetRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__AssetRequestClient<runtime.Types.Result.GetResult<Prisma.$AssetRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AssetRequestUpdateArgs>(args: Prisma.SelectSubset<T, AssetRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__AssetRequestClient<runtime.Types.Result.GetResult<Prisma.$AssetRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AssetRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, AssetRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AssetRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, AssetRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AssetRequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AssetRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AssetRequestUpsertArgs>(args: Prisma.SelectSubset<T, AssetRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__AssetRequestClient<runtime.Types.Result.GetResult<Prisma.$AssetRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AssetRequestCountArgs>(args?: Prisma.Subset<T, AssetRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AssetRequestCountAggregateOutputType> : number>;
    aggregate<T extends AssetRequestAggregateArgs>(args: Prisma.Subset<T, AssetRequestAggregateArgs>): Prisma.PrismaPromise<GetAssetRequestAggregateType<T>>;
    groupBy<T extends AssetRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AssetRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: AssetRequestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AssetRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AssetRequestFieldRefs;
}
export interface Prisma__AssetRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    employee<T extends Prisma.AssetRequest$employeeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AssetRequest$employeeArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    fulfilledAsset<T extends Prisma.AssetRequest$fulfilledAssetArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AssetRequest$fulfilledAssetArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AssetRequestFieldRefs {
    readonly id: Prisma.FieldRef<"AssetRequest", 'String'>;
    readonly organizationId: Prisma.FieldRef<"AssetRequest", 'String'>;
    readonly employeeId: Prisma.FieldRef<"AssetRequest", 'String'>;
    readonly assetType: Prisma.FieldRef<"AssetRequest", 'String'>;
    readonly reason: Prisma.FieldRef<"AssetRequest", 'String'>;
    readonly status: Prisma.FieldRef<"AssetRequest", 'AssetRequestStatus'>;
    readonly fulfilledAssetId: Prisma.FieldRef<"AssetRequest", 'String'>;
    readonly createdAt: Prisma.FieldRef<"AssetRequest", 'DateTime'>;
}
export type AssetRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetRequestSelect<ExtArgs> | null;
    omit?: Prisma.AssetRequestOmit<ExtArgs> | null;
    include?: Prisma.AssetRequestInclude<ExtArgs> | null;
    where: Prisma.AssetRequestWhereUniqueInput;
};
export type AssetRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetRequestSelect<ExtArgs> | null;
    omit?: Prisma.AssetRequestOmit<ExtArgs> | null;
    include?: Prisma.AssetRequestInclude<ExtArgs> | null;
    where: Prisma.AssetRequestWhereUniqueInput;
};
export type AssetRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetRequestSelect<ExtArgs> | null;
    omit?: Prisma.AssetRequestOmit<ExtArgs> | null;
    include?: Prisma.AssetRequestInclude<ExtArgs> | null;
    where?: Prisma.AssetRequestWhereInput;
    orderBy?: Prisma.AssetRequestOrderByWithRelationInput | Prisma.AssetRequestOrderByWithRelationInput[];
    cursor?: Prisma.AssetRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetRequestScalarFieldEnum | Prisma.AssetRequestScalarFieldEnum[];
};
export type AssetRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetRequestSelect<ExtArgs> | null;
    omit?: Prisma.AssetRequestOmit<ExtArgs> | null;
    include?: Prisma.AssetRequestInclude<ExtArgs> | null;
    where?: Prisma.AssetRequestWhereInput;
    orderBy?: Prisma.AssetRequestOrderByWithRelationInput | Prisma.AssetRequestOrderByWithRelationInput[];
    cursor?: Prisma.AssetRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetRequestScalarFieldEnum | Prisma.AssetRequestScalarFieldEnum[];
};
export type AssetRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetRequestSelect<ExtArgs> | null;
    omit?: Prisma.AssetRequestOmit<ExtArgs> | null;
    include?: Prisma.AssetRequestInclude<ExtArgs> | null;
    where?: Prisma.AssetRequestWhereInput;
    orderBy?: Prisma.AssetRequestOrderByWithRelationInput | Prisma.AssetRequestOrderByWithRelationInput[];
    cursor?: Prisma.AssetRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetRequestScalarFieldEnum | Prisma.AssetRequestScalarFieldEnum[];
};
export type AssetRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetRequestSelect<ExtArgs> | null;
    omit?: Prisma.AssetRequestOmit<ExtArgs> | null;
    include?: Prisma.AssetRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetRequestCreateInput, Prisma.AssetRequestUncheckedCreateInput>;
};
export type AssetRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AssetRequestCreateManyInput | Prisma.AssetRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AssetRequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetRequestSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AssetRequestOmit<ExtArgs> | null;
    data: Prisma.AssetRequestCreateManyInput | Prisma.AssetRequestCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AssetRequestIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AssetRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetRequestSelect<ExtArgs> | null;
    omit?: Prisma.AssetRequestOmit<ExtArgs> | null;
    include?: Prisma.AssetRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetRequestUpdateInput, Prisma.AssetRequestUncheckedUpdateInput>;
    where: Prisma.AssetRequestWhereUniqueInput;
};
export type AssetRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AssetRequestUpdateManyMutationInput, Prisma.AssetRequestUncheckedUpdateManyInput>;
    where?: Prisma.AssetRequestWhereInput;
    limit?: number;
};
export type AssetRequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AssetRequestOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetRequestUpdateManyMutationInput, Prisma.AssetRequestUncheckedUpdateManyInput>;
    where?: Prisma.AssetRequestWhereInput;
    limit?: number;
    include?: Prisma.AssetRequestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AssetRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetRequestSelect<ExtArgs> | null;
    omit?: Prisma.AssetRequestOmit<ExtArgs> | null;
    include?: Prisma.AssetRequestInclude<ExtArgs> | null;
    where: Prisma.AssetRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetRequestCreateInput, Prisma.AssetRequestUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AssetRequestUpdateInput, Prisma.AssetRequestUncheckedUpdateInput>;
};
export type AssetRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetRequestSelect<ExtArgs> | null;
    omit?: Prisma.AssetRequestOmit<ExtArgs> | null;
    include?: Prisma.AssetRequestInclude<ExtArgs> | null;
    where: Prisma.AssetRequestWhereUniqueInput;
};
export type AssetRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetRequestWhereInput;
    limit?: number;
};
export type AssetRequest$employeeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where?: Prisma.EmployeeWhereInput;
};
export type AssetRequest$fulfilledAssetArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    include?: Prisma.AssetInclude<ExtArgs> | null;
    where?: Prisma.AssetWhereInput;
};
export type AssetRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetRequestSelect<ExtArgs> | null;
    omit?: Prisma.AssetRequestOmit<ExtArgs> | null;
    include?: Prisma.AssetRequestInclude<ExtArgs> | null;
};
