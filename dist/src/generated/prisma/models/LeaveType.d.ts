import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LeaveTypeModel = runtime.Types.Result.DefaultSelection<Prisma.$LeaveTypePayload>;
export type AggregateLeaveType = {
    _count: LeaveTypeCountAggregateOutputType | null;
    _min: LeaveTypeMinAggregateOutputType | null;
    _max: LeaveTypeMaxAggregateOutputType | null;
};
export type LeaveTypeMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    name: string | null;
    color: string | null;
    isPaid: boolean | null;
    requiresDocument: boolean | null;
    genderRestriction: $Enums.Gender | null;
    isActive: boolean | null;
    createdAt: Date | null;
};
export type LeaveTypeMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    name: string | null;
    color: string | null;
    isPaid: boolean | null;
    requiresDocument: boolean | null;
    genderRestriction: $Enums.Gender | null;
    isActive: boolean | null;
    createdAt: Date | null;
};
export type LeaveTypeCountAggregateOutputType = {
    id: number;
    organizationId: number;
    name: number;
    color: number;
    isPaid: number;
    requiresDocument: number;
    genderRestriction: number;
    isActive: number;
    createdAt: number;
    _all: number;
};
export type LeaveTypeMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    color?: true;
    isPaid?: true;
    requiresDocument?: true;
    genderRestriction?: true;
    isActive?: true;
    createdAt?: true;
};
export type LeaveTypeMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    color?: true;
    isPaid?: true;
    requiresDocument?: true;
    genderRestriction?: true;
    isActive?: true;
    createdAt?: true;
};
export type LeaveTypeCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    color?: true;
    isPaid?: true;
    requiresDocument?: true;
    genderRestriction?: true;
    isActive?: true;
    createdAt?: true;
    _all?: true;
};
export type LeaveTypeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaveTypeWhereInput;
    orderBy?: Prisma.LeaveTypeOrderByWithRelationInput | Prisma.LeaveTypeOrderByWithRelationInput[];
    cursor?: Prisma.LeaveTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LeaveTypeCountAggregateInputType;
    _min?: LeaveTypeMinAggregateInputType;
    _max?: LeaveTypeMaxAggregateInputType;
};
export type GetLeaveTypeAggregateType<T extends LeaveTypeAggregateArgs> = {
    [P in keyof T & keyof AggregateLeaveType]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLeaveType[P]> : Prisma.GetScalarType<T[P], AggregateLeaveType[P]>;
};
export type LeaveTypeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaveTypeWhereInput;
    orderBy?: Prisma.LeaveTypeOrderByWithAggregationInput | Prisma.LeaveTypeOrderByWithAggregationInput[];
    by: Prisma.LeaveTypeScalarFieldEnum[] | Prisma.LeaveTypeScalarFieldEnum;
    having?: Prisma.LeaveTypeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LeaveTypeCountAggregateInputType | true;
    _min?: LeaveTypeMinAggregateInputType;
    _max?: LeaveTypeMaxAggregateInputType;
};
export type LeaveTypeGroupByOutputType = {
    id: string;
    organizationId: string;
    name: string;
    color: string;
    isPaid: boolean;
    requiresDocument: boolean;
    genderRestriction: $Enums.Gender | null;
    isActive: boolean;
    createdAt: Date;
    _count: LeaveTypeCountAggregateOutputType | null;
    _min: LeaveTypeMinAggregateOutputType | null;
    _max: LeaveTypeMaxAggregateOutputType | null;
};
export type GetLeaveTypeGroupByPayload<T extends LeaveTypeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LeaveTypeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LeaveTypeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LeaveTypeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LeaveTypeGroupByOutputType[P]>;
}>>;
export type LeaveTypeWhereInput = {
    AND?: Prisma.LeaveTypeWhereInput | Prisma.LeaveTypeWhereInput[];
    OR?: Prisma.LeaveTypeWhereInput[];
    NOT?: Prisma.LeaveTypeWhereInput | Prisma.LeaveTypeWhereInput[];
    id?: Prisma.UuidFilter<"LeaveType"> | string;
    organizationId?: Prisma.UuidFilter<"LeaveType"> | string;
    name?: Prisma.StringFilter<"LeaveType"> | string;
    color?: Prisma.StringFilter<"LeaveType"> | string;
    isPaid?: Prisma.BoolFilter<"LeaveType"> | boolean;
    requiresDocument?: Prisma.BoolFilter<"LeaveType"> | boolean;
    genderRestriction?: Prisma.EnumGenderNullableFilter<"LeaveType"> | $Enums.Gender | null;
    isActive?: Prisma.BoolFilter<"LeaveType"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"LeaveType"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    policies?: Prisma.LeavePolicyListRelationFilter;
    balances?: Prisma.LeaveBalanceListRelationFilter;
    requests?: Prisma.LeaveRequestListRelationFilter;
};
export type LeaveTypeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    isPaid?: Prisma.SortOrder;
    requiresDocument?: Prisma.SortOrder;
    genderRestriction?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    policies?: Prisma.LeavePolicyOrderByRelationAggregateInput;
    balances?: Prisma.LeaveBalanceOrderByRelationAggregateInput;
    requests?: Prisma.LeaveRequestOrderByRelationAggregateInput;
};
export type LeaveTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.LeaveTypeWhereInput | Prisma.LeaveTypeWhereInput[];
    OR?: Prisma.LeaveTypeWhereInput[];
    NOT?: Prisma.LeaveTypeWhereInput | Prisma.LeaveTypeWhereInput[];
    organizationId?: Prisma.UuidFilter<"LeaveType"> | string;
    name?: Prisma.StringFilter<"LeaveType"> | string;
    color?: Prisma.StringFilter<"LeaveType"> | string;
    isPaid?: Prisma.BoolFilter<"LeaveType"> | boolean;
    requiresDocument?: Prisma.BoolFilter<"LeaveType"> | boolean;
    genderRestriction?: Prisma.EnumGenderNullableFilter<"LeaveType"> | $Enums.Gender | null;
    isActive?: Prisma.BoolFilter<"LeaveType"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"LeaveType"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    policies?: Prisma.LeavePolicyListRelationFilter;
    balances?: Prisma.LeaveBalanceListRelationFilter;
    requests?: Prisma.LeaveRequestListRelationFilter;
}, "id">;
export type LeaveTypeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    isPaid?: Prisma.SortOrder;
    requiresDocument?: Prisma.SortOrder;
    genderRestriction?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.LeaveTypeCountOrderByAggregateInput;
    _max?: Prisma.LeaveTypeMaxOrderByAggregateInput;
    _min?: Prisma.LeaveTypeMinOrderByAggregateInput;
};
export type LeaveTypeScalarWhereWithAggregatesInput = {
    AND?: Prisma.LeaveTypeScalarWhereWithAggregatesInput | Prisma.LeaveTypeScalarWhereWithAggregatesInput[];
    OR?: Prisma.LeaveTypeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LeaveTypeScalarWhereWithAggregatesInput | Prisma.LeaveTypeScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"LeaveType"> | string;
    organizationId?: Prisma.UuidWithAggregatesFilter<"LeaveType"> | string;
    name?: Prisma.StringWithAggregatesFilter<"LeaveType"> | string;
    color?: Prisma.StringWithAggregatesFilter<"LeaveType"> | string;
    isPaid?: Prisma.BoolWithAggregatesFilter<"LeaveType"> | boolean;
    requiresDocument?: Prisma.BoolWithAggregatesFilter<"LeaveType"> | boolean;
    genderRestriction?: Prisma.EnumGenderNullableWithAggregatesFilter<"LeaveType"> | $Enums.Gender | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"LeaveType"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LeaveType"> | Date | string;
};
export type LeaveTypeCreateInput = {
    id?: string;
    name: string;
    color?: string;
    isPaid?: boolean;
    requiresDocument?: boolean;
    genderRestriction?: $Enums.Gender | null;
    isActive?: boolean;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutLeaveTypesInput;
    policies?: Prisma.LeavePolicyCreateNestedManyWithoutLeaveTypeInput;
    balances?: Prisma.LeaveBalanceCreateNestedManyWithoutLeaveTypeInput;
    requests?: Prisma.LeaveRequestCreateNestedManyWithoutLeaveTypeInput;
};
export type LeaveTypeUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    name: string;
    color?: string;
    isPaid?: boolean;
    requiresDocument?: boolean;
    genderRestriction?: $Enums.Gender | null;
    isActive?: boolean;
    createdAt?: Date | string;
    policies?: Prisma.LeavePolicyUncheckedCreateNestedManyWithoutLeaveTypeInput;
    balances?: Prisma.LeaveBalanceUncheckedCreateNestedManyWithoutLeaveTypeInput;
    requests?: Prisma.LeaveRequestUncheckedCreateNestedManyWithoutLeaveTypeInput;
};
export type LeaveTypeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    isPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requiresDocument?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    genderRestriction?: Prisma.NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutLeaveTypesNestedInput;
    policies?: Prisma.LeavePolicyUpdateManyWithoutLeaveTypeNestedInput;
    balances?: Prisma.LeaveBalanceUpdateManyWithoutLeaveTypeNestedInput;
    requests?: Prisma.LeaveRequestUpdateManyWithoutLeaveTypeNestedInput;
};
export type LeaveTypeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    isPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requiresDocument?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    genderRestriction?: Prisma.NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    policies?: Prisma.LeavePolicyUncheckedUpdateManyWithoutLeaveTypeNestedInput;
    balances?: Prisma.LeaveBalanceUncheckedUpdateManyWithoutLeaveTypeNestedInput;
    requests?: Prisma.LeaveRequestUncheckedUpdateManyWithoutLeaveTypeNestedInput;
};
export type LeaveTypeCreateManyInput = {
    id?: string;
    organizationId: string;
    name: string;
    color?: string;
    isPaid?: boolean;
    requiresDocument?: boolean;
    genderRestriction?: $Enums.Gender | null;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type LeaveTypeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    isPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requiresDocument?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    genderRestriction?: Prisma.NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveTypeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    isPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requiresDocument?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    genderRestriction?: Prisma.NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveTypeListRelationFilter = {
    every?: Prisma.LeaveTypeWhereInput;
    some?: Prisma.LeaveTypeWhereInput;
    none?: Prisma.LeaveTypeWhereInput;
};
export type LeaveTypeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LeaveTypeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    isPaid?: Prisma.SortOrder;
    requiresDocument?: Prisma.SortOrder;
    genderRestriction?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LeaveTypeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    isPaid?: Prisma.SortOrder;
    requiresDocument?: Prisma.SortOrder;
    genderRestriction?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LeaveTypeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    isPaid?: Prisma.SortOrder;
    requiresDocument?: Prisma.SortOrder;
    genderRestriction?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LeaveTypeScalarRelationFilter = {
    is?: Prisma.LeaveTypeWhereInput;
    isNot?: Prisma.LeaveTypeWhereInput;
};
export type LeaveTypeCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.LeaveTypeCreateWithoutOrganizationInput, Prisma.LeaveTypeUncheckedCreateWithoutOrganizationInput> | Prisma.LeaveTypeCreateWithoutOrganizationInput[] | Prisma.LeaveTypeUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.LeaveTypeCreateOrConnectWithoutOrganizationInput | Prisma.LeaveTypeCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.LeaveTypeCreateManyOrganizationInputEnvelope;
    connect?: Prisma.LeaveTypeWhereUniqueInput | Prisma.LeaveTypeWhereUniqueInput[];
};
export type LeaveTypeUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.LeaveTypeCreateWithoutOrganizationInput, Prisma.LeaveTypeUncheckedCreateWithoutOrganizationInput> | Prisma.LeaveTypeCreateWithoutOrganizationInput[] | Prisma.LeaveTypeUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.LeaveTypeCreateOrConnectWithoutOrganizationInput | Prisma.LeaveTypeCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.LeaveTypeCreateManyOrganizationInputEnvelope;
    connect?: Prisma.LeaveTypeWhereUniqueInput | Prisma.LeaveTypeWhereUniqueInput[];
};
export type LeaveTypeUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveTypeCreateWithoutOrganizationInput, Prisma.LeaveTypeUncheckedCreateWithoutOrganizationInput> | Prisma.LeaveTypeCreateWithoutOrganizationInput[] | Prisma.LeaveTypeUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.LeaveTypeCreateOrConnectWithoutOrganizationInput | Prisma.LeaveTypeCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.LeaveTypeUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.LeaveTypeUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.LeaveTypeCreateManyOrganizationInputEnvelope;
    set?: Prisma.LeaveTypeWhereUniqueInput | Prisma.LeaveTypeWhereUniqueInput[];
    disconnect?: Prisma.LeaveTypeWhereUniqueInput | Prisma.LeaveTypeWhereUniqueInput[];
    delete?: Prisma.LeaveTypeWhereUniqueInput | Prisma.LeaveTypeWhereUniqueInput[];
    connect?: Prisma.LeaveTypeWhereUniqueInput | Prisma.LeaveTypeWhereUniqueInput[];
    update?: Prisma.LeaveTypeUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.LeaveTypeUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.LeaveTypeUpdateManyWithWhereWithoutOrganizationInput | Prisma.LeaveTypeUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.LeaveTypeScalarWhereInput | Prisma.LeaveTypeScalarWhereInput[];
};
export type LeaveTypeUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveTypeCreateWithoutOrganizationInput, Prisma.LeaveTypeUncheckedCreateWithoutOrganizationInput> | Prisma.LeaveTypeCreateWithoutOrganizationInput[] | Prisma.LeaveTypeUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.LeaveTypeCreateOrConnectWithoutOrganizationInput | Prisma.LeaveTypeCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.LeaveTypeUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.LeaveTypeUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.LeaveTypeCreateManyOrganizationInputEnvelope;
    set?: Prisma.LeaveTypeWhereUniqueInput | Prisma.LeaveTypeWhereUniqueInput[];
    disconnect?: Prisma.LeaveTypeWhereUniqueInput | Prisma.LeaveTypeWhereUniqueInput[];
    delete?: Prisma.LeaveTypeWhereUniqueInput | Prisma.LeaveTypeWhereUniqueInput[];
    connect?: Prisma.LeaveTypeWhereUniqueInput | Prisma.LeaveTypeWhereUniqueInput[];
    update?: Prisma.LeaveTypeUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.LeaveTypeUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.LeaveTypeUpdateManyWithWhereWithoutOrganizationInput | Prisma.LeaveTypeUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.LeaveTypeScalarWhereInput | Prisma.LeaveTypeScalarWhereInput[];
};
export type LeaveTypeCreateNestedOneWithoutPoliciesInput = {
    create?: Prisma.XOR<Prisma.LeaveTypeCreateWithoutPoliciesInput, Prisma.LeaveTypeUncheckedCreateWithoutPoliciesInput>;
    connectOrCreate?: Prisma.LeaveTypeCreateOrConnectWithoutPoliciesInput;
    connect?: Prisma.LeaveTypeWhereUniqueInput;
};
export type LeaveTypeUpdateOneRequiredWithoutPoliciesNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveTypeCreateWithoutPoliciesInput, Prisma.LeaveTypeUncheckedCreateWithoutPoliciesInput>;
    connectOrCreate?: Prisma.LeaveTypeCreateOrConnectWithoutPoliciesInput;
    upsert?: Prisma.LeaveTypeUpsertWithoutPoliciesInput;
    connect?: Prisma.LeaveTypeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LeaveTypeUpdateToOneWithWhereWithoutPoliciesInput, Prisma.LeaveTypeUpdateWithoutPoliciesInput>, Prisma.LeaveTypeUncheckedUpdateWithoutPoliciesInput>;
};
export type LeaveTypeCreateNestedOneWithoutBalancesInput = {
    create?: Prisma.XOR<Prisma.LeaveTypeCreateWithoutBalancesInput, Prisma.LeaveTypeUncheckedCreateWithoutBalancesInput>;
    connectOrCreate?: Prisma.LeaveTypeCreateOrConnectWithoutBalancesInput;
    connect?: Prisma.LeaveTypeWhereUniqueInput;
};
export type LeaveTypeUpdateOneRequiredWithoutBalancesNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveTypeCreateWithoutBalancesInput, Prisma.LeaveTypeUncheckedCreateWithoutBalancesInput>;
    connectOrCreate?: Prisma.LeaveTypeCreateOrConnectWithoutBalancesInput;
    upsert?: Prisma.LeaveTypeUpsertWithoutBalancesInput;
    connect?: Prisma.LeaveTypeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LeaveTypeUpdateToOneWithWhereWithoutBalancesInput, Prisma.LeaveTypeUpdateWithoutBalancesInput>, Prisma.LeaveTypeUncheckedUpdateWithoutBalancesInput>;
};
export type LeaveTypeCreateNestedOneWithoutRequestsInput = {
    create?: Prisma.XOR<Prisma.LeaveTypeCreateWithoutRequestsInput, Prisma.LeaveTypeUncheckedCreateWithoutRequestsInput>;
    connectOrCreate?: Prisma.LeaveTypeCreateOrConnectWithoutRequestsInput;
    connect?: Prisma.LeaveTypeWhereUniqueInput;
};
export type LeaveTypeUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveTypeCreateWithoutRequestsInput, Prisma.LeaveTypeUncheckedCreateWithoutRequestsInput>;
    connectOrCreate?: Prisma.LeaveTypeCreateOrConnectWithoutRequestsInput;
    upsert?: Prisma.LeaveTypeUpsertWithoutRequestsInput;
    connect?: Prisma.LeaveTypeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LeaveTypeUpdateToOneWithWhereWithoutRequestsInput, Prisma.LeaveTypeUpdateWithoutRequestsInput>, Prisma.LeaveTypeUncheckedUpdateWithoutRequestsInput>;
};
export type LeaveTypeCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    color?: string;
    isPaid?: boolean;
    requiresDocument?: boolean;
    genderRestriction?: $Enums.Gender | null;
    isActive?: boolean;
    createdAt?: Date | string;
    policies?: Prisma.LeavePolicyCreateNestedManyWithoutLeaveTypeInput;
    balances?: Prisma.LeaveBalanceCreateNestedManyWithoutLeaveTypeInput;
    requests?: Prisma.LeaveRequestCreateNestedManyWithoutLeaveTypeInput;
};
export type LeaveTypeUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    color?: string;
    isPaid?: boolean;
    requiresDocument?: boolean;
    genderRestriction?: $Enums.Gender | null;
    isActive?: boolean;
    createdAt?: Date | string;
    policies?: Prisma.LeavePolicyUncheckedCreateNestedManyWithoutLeaveTypeInput;
    balances?: Prisma.LeaveBalanceUncheckedCreateNestedManyWithoutLeaveTypeInput;
    requests?: Prisma.LeaveRequestUncheckedCreateNestedManyWithoutLeaveTypeInput;
};
export type LeaveTypeCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.LeaveTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaveTypeCreateWithoutOrganizationInput, Prisma.LeaveTypeUncheckedCreateWithoutOrganizationInput>;
};
export type LeaveTypeCreateManyOrganizationInputEnvelope = {
    data: Prisma.LeaveTypeCreateManyOrganizationInput | Prisma.LeaveTypeCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type LeaveTypeUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.LeaveTypeWhereUniqueInput;
    update: Prisma.XOR<Prisma.LeaveTypeUpdateWithoutOrganizationInput, Prisma.LeaveTypeUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.LeaveTypeCreateWithoutOrganizationInput, Prisma.LeaveTypeUncheckedCreateWithoutOrganizationInput>;
};
export type LeaveTypeUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.LeaveTypeWhereUniqueInput;
    data: Prisma.XOR<Prisma.LeaveTypeUpdateWithoutOrganizationInput, Prisma.LeaveTypeUncheckedUpdateWithoutOrganizationInput>;
};
export type LeaveTypeUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.LeaveTypeScalarWhereInput;
    data: Prisma.XOR<Prisma.LeaveTypeUpdateManyMutationInput, Prisma.LeaveTypeUncheckedUpdateManyWithoutOrganizationInput>;
};
export type LeaveTypeScalarWhereInput = {
    AND?: Prisma.LeaveTypeScalarWhereInput | Prisma.LeaveTypeScalarWhereInput[];
    OR?: Prisma.LeaveTypeScalarWhereInput[];
    NOT?: Prisma.LeaveTypeScalarWhereInput | Prisma.LeaveTypeScalarWhereInput[];
    id?: Prisma.UuidFilter<"LeaveType"> | string;
    organizationId?: Prisma.UuidFilter<"LeaveType"> | string;
    name?: Prisma.StringFilter<"LeaveType"> | string;
    color?: Prisma.StringFilter<"LeaveType"> | string;
    isPaid?: Prisma.BoolFilter<"LeaveType"> | boolean;
    requiresDocument?: Prisma.BoolFilter<"LeaveType"> | boolean;
    genderRestriction?: Prisma.EnumGenderNullableFilter<"LeaveType"> | $Enums.Gender | null;
    isActive?: Prisma.BoolFilter<"LeaveType"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"LeaveType"> | Date | string;
};
export type LeaveTypeCreateWithoutPoliciesInput = {
    id?: string;
    name: string;
    color?: string;
    isPaid?: boolean;
    requiresDocument?: boolean;
    genderRestriction?: $Enums.Gender | null;
    isActive?: boolean;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutLeaveTypesInput;
    balances?: Prisma.LeaveBalanceCreateNestedManyWithoutLeaveTypeInput;
    requests?: Prisma.LeaveRequestCreateNestedManyWithoutLeaveTypeInput;
};
export type LeaveTypeUncheckedCreateWithoutPoliciesInput = {
    id?: string;
    organizationId: string;
    name: string;
    color?: string;
    isPaid?: boolean;
    requiresDocument?: boolean;
    genderRestriction?: $Enums.Gender | null;
    isActive?: boolean;
    createdAt?: Date | string;
    balances?: Prisma.LeaveBalanceUncheckedCreateNestedManyWithoutLeaveTypeInput;
    requests?: Prisma.LeaveRequestUncheckedCreateNestedManyWithoutLeaveTypeInput;
};
export type LeaveTypeCreateOrConnectWithoutPoliciesInput = {
    where: Prisma.LeaveTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaveTypeCreateWithoutPoliciesInput, Prisma.LeaveTypeUncheckedCreateWithoutPoliciesInput>;
};
export type LeaveTypeUpsertWithoutPoliciesInput = {
    update: Prisma.XOR<Prisma.LeaveTypeUpdateWithoutPoliciesInput, Prisma.LeaveTypeUncheckedUpdateWithoutPoliciesInput>;
    create: Prisma.XOR<Prisma.LeaveTypeCreateWithoutPoliciesInput, Prisma.LeaveTypeUncheckedCreateWithoutPoliciesInput>;
    where?: Prisma.LeaveTypeWhereInput;
};
export type LeaveTypeUpdateToOneWithWhereWithoutPoliciesInput = {
    where?: Prisma.LeaveTypeWhereInput;
    data: Prisma.XOR<Prisma.LeaveTypeUpdateWithoutPoliciesInput, Prisma.LeaveTypeUncheckedUpdateWithoutPoliciesInput>;
};
export type LeaveTypeUpdateWithoutPoliciesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    isPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requiresDocument?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    genderRestriction?: Prisma.NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutLeaveTypesNestedInput;
    balances?: Prisma.LeaveBalanceUpdateManyWithoutLeaveTypeNestedInput;
    requests?: Prisma.LeaveRequestUpdateManyWithoutLeaveTypeNestedInput;
};
export type LeaveTypeUncheckedUpdateWithoutPoliciesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    isPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requiresDocument?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    genderRestriction?: Prisma.NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    balances?: Prisma.LeaveBalanceUncheckedUpdateManyWithoutLeaveTypeNestedInput;
    requests?: Prisma.LeaveRequestUncheckedUpdateManyWithoutLeaveTypeNestedInput;
};
export type LeaveTypeCreateWithoutBalancesInput = {
    id?: string;
    name: string;
    color?: string;
    isPaid?: boolean;
    requiresDocument?: boolean;
    genderRestriction?: $Enums.Gender | null;
    isActive?: boolean;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutLeaveTypesInput;
    policies?: Prisma.LeavePolicyCreateNestedManyWithoutLeaveTypeInput;
    requests?: Prisma.LeaveRequestCreateNestedManyWithoutLeaveTypeInput;
};
export type LeaveTypeUncheckedCreateWithoutBalancesInput = {
    id?: string;
    organizationId: string;
    name: string;
    color?: string;
    isPaid?: boolean;
    requiresDocument?: boolean;
    genderRestriction?: $Enums.Gender | null;
    isActive?: boolean;
    createdAt?: Date | string;
    policies?: Prisma.LeavePolicyUncheckedCreateNestedManyWithoutLeaveTypeInput;
    requests?: Prisma.LeaveRequestUncheckedCreateNestedManyWithoutLeaveTypeInput;
};
export type LeaveTypeCreateOrConnectWithoutBalancesInput = {
    where: Prisma.LeaveTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaveTypeCreateWithoutBalancesInput, Prisma.LeaveTypeUncheckedCreateWithoutBalancesInput>;
};
export type LeaveTypeUpsertWithoutBalancesInput = {
    update: Prisma.XOR<Prisma.LeaveTypeUpdateWithoutBalancesInput, Prisma.LeaveTypeUncheckedUpdateWithoutBalancesInput>;
    create: Prisma.XOR<Prisma.LeaveTypeCreateWithoutBalancesInput, Prisma.LeaveTypeUncheckedCreateWithoutBalancesInput>;
    where?: Prisma.LeaveTypeWhereInput;
};
export type LeaveTypeUpdateToOneWithWhereWithoutBalancesInput = {
    where?: Prisma.LeaveTypeWhereInput;
    data: Prisma.XOR<Prisma.LeaveTypeUpdateWithoutBalancesInput, Prisma.LeaveTypeUncheckedUpdateWithoutBalancesInput>;
};
export type LeaveTypeUpdateWithoutBalancesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    isPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requiresDocument?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    genderRestriction?: Prisma.NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutLeaveTypesNestedInput;
    policies?: Prisma.LeavePolicyUpdateManyWithoutLeaveTypeNestedInput;
    requests?: Prisma.LeaveRequestUpdateManyWithoutLeaveTypeNestedInput;
};
export type LeaveTypeUncheckedUpdateWithoutBalancesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    isPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requiresDocument?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    genderRestriction?: Prisma.NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    policies?: Prisma.LeavePolicyUncheckedUpdateManyWithoutLeaveTypeNestedInput;
    requests?: Prisma.LeaveRequestUncheckedUpdateManyWithoutLeaveTypeNestedInput;
};
export type LeaveTypeCreateWithoutRequestsInput = {
    id?: string;
    name: string;
    color?: string;
    isPaid?: boolean;
    requiresDocument?: boolean;
    genderRestriction?: $Enums.Gender | null;
    isActive?: boolean;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutLeaveTypesInput;
    policies?: Prisma.LeavePolicyCreateNestedManyWithoutLeaveTypeInput;
    balances?: Prisma.LeaveBalanceCreateNestedManyWithoutLeaveTypeInput;
};
export type LeaveTypeUncheckedCreateWithoutRequestsInput = {
    id?: string;
    organizationId: string;
    name: string;
    color?: string;
    isPaid?: boolean;
    requiresDocument?: boolean;
    genderRestriction?: $Enums.Gender | null;
    isActive?: boolean;
    createdAt?: Date | string;
    policies?: Prisma.LeavePolicyUncheckedCreateNestedManyWithoutLeaveTypeInput;
    balances?: Prisma.LeaveBalanceUncheckedCreateNestedManyWithoutLeaveTypeInput;
};
export type LeaveTypeCreateOrConnectWithoutRequestsInput = {
    where: Prisma.LeaveTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaveTypeCreateWithoutRequestsInput, Prisma.LeaveTypeUncheckedCreateWithoutRequestsInput>;
};
export type LeaveTypeUpsertWithoutRequestsInput = {
    update: Prisma.XOR<Prisma.LeaveTypeUpdateWithoutRequestsInput, Prisma.LeaveTypeUncheckedUpdateWithoutRequestsInput>;
    create: Prisma.XOR<Prisma.LeaveTypeCreateWithoutRequestsInput, Prisma.LeaveTypeUncheckedCreateWithoutRequestsInput>;
    where?: Prisma.LeaveTypeWhereInput;
};
export type LeaveTypeUpdateToOneWithWhereWithoutRequestsInput = {
    where?: Prisma.LeaveTypeWhereInput;
    data: Prisma.XOR<Prisma.LeaveTypeUpdateWithoutRequestsInput, Prisma.LeaveTypeUncheckedUpdateWithoutRequestsInput>;
};
export type LeaveTypeUpdateWithoutRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    isPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requiresDocument?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    genderRestriction?: Prisma.NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutLeaveTypesNestedInput;
    policies?: Prisma.LeavePolicyUpdateManyWithoutLeaveTypeNestedInput;
    balances?: Prisma.LeaveBalanceUpdateManyWithoutLeaveTypeNestedInput;
};
export type LeaveTypeUncheckedUpdateWithoutRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    isPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requiresDocument?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    genderRestriction?: Prisma.NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    policies?: Prisma.LeavePolicyUncheckedUpdateManyWithoutLeaveTypeNestedInput;
    balances?: Prisma.LeaveBalanceUncheckedUpdateManyWithoutLeaveTypeNestedInput;
};
export type LeaveTypeCreateManyOrganizationInput = {
    id?: string;
    name: string;
    color?: string;
    isPaid?: boolean;
    requiresDocument?: boolean;
    genderRestriction?: $Enums.Gender | null;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type LeaveTypeUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    isPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requiresDocument?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    genderRestriction?: Prisma.NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    policies?: Prisma.LeavePolicyUpdateManyWithoutLeaveTypeNestedInput;
    balances?: Prisma.LeaveBalanceUpdateManyWithoutLeaveTypeNestedInput;
    requests?: Prisma.LeaveRequestUpdateManyWithoutLeaveTypeNestedInput;
};
export type LeaveTypeUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    isPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requiresDocument?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    genderRestriction?: Prisma.NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    policies?: Prisma.LeavePolicyUncheckedUpdateManyWithoutLeaveTypeNestedInput;
    balances?: Prisma.LeaveBalanceUncheckedUpdateManyWithoutLeaveTypeNestedInput;
    requests?: Prisma.LeaveRequestUncheckedUpdateManyWithoutLeaveTypeNestedInput;
};
export type LeaveTypeUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    isPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requiresDocument?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    genderRestriction?: Prisma.NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaveTypeCountOutputType = {
    policies: number;
    balances: number;
    requests: number;
};
export type LeaveTypeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    policies?: boolean | LeaveTypeCountOutputTypeCountPoliciesArgs;
    balances?: boolean | LeaveTypeCountOutputTypeCountBalancesArgs;
    requests?: boolean | LeaveTypeCountOutputTypeCountRequestsArgs;
};
export type LeaveTypeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeCountOutputTypeSelect<ExtArgs> | null;
};
export type LeaveTypeCountOutputTypeCountPoliciesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeavePolicyWhereInput;
};
export type LeaveTypeCountOutputTypeCountBalancesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaveBalanceWhereInput;
};
export type LeaveTypeCountOutputTypeCountRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaveRequestWhereInput;
};
export type LeaveTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    color?: boolean;
    isPaid?: boolean;
    requiresDocument?: boolean;
    genderRestriction?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    policies?: boolean | Prisma.LeaveType$policiesArgs<ExtArgs>;
    balances?: boolean | Prisma.LeaveType$balancesArgs<ExtArgs>;
    requests?: boolean | Prisma.LeaveType$requestsArgs<ExtArgs>;
    _count?: boolean | Prisma.LeaveTypeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["leaveType"]>;
export type LeaveTypeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    color?: boolean;
    isPaid?: boolean;
    requiresDocument?: boolean;
    genderRestriction?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["leaveType"]>;
export type LeaveTypeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    color?: boolean;
    isPaid?: boolean;
    requiresDocument?: boolean;
    genderRestriction?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["leaveType"]>;
export type LeaveTypeSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    color?: boolean;
    isPaid?: boolean;
    requiresDocument?: boolean;
    genderRestriction?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
};
export type LeaveTypeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "name" | "color" | "isPaid" | "requiresDocument" | "genderRestriction" | "isActive" | "createdAt", ExtArgs["result"]["leaveType"]>;
export type LeaveTypeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    policies?: boolean | Prisma.LeaveType$policiesArgs<ExtArgs>;
    balances?: boolean | Prisma.LeaveType$balancesArgs<ExtArgs>;
    requests?: boolean | Prisma.LeaveType$requestsArgs<ExtArgs>;
    _count?: boolean | Prisma.LeaveTypeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type LeaveTypeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type LeaveTypeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type $LeaveTypePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LeaveType";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        policies: Prisma.$LeavePolicyPayload<ExtArgs>[];
        balances: Prisma.$LeaveBalancePayload<ExtArgs>[];
        requests: Prisma.$LeaveRequestPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        name: string;
        color: string;
        isPaid: boolean;
        requiresDocument: boolean;
        genderRestriction: $Enums.Gender | null;
        isActive: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["leaveType"]>;
    composites: {};
};
export type LeaveTypeGetPayload<S extends boolean | null | undefined | LeaveTypeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload, S>;
export type LeaveTypeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LeaveTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LeaveTypeCountAggregateInputType | true;
};
export interface LeaveTypeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LeaveType'];
        meta: {
            name: 'LeaveType';
        };
    };
    findUnique<T extends LeaveTypeFindUniqueArgs>(args: Prisma.SelectSubset<T, LeaveTypeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LeaveTypeClient<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LeaveTypeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LeaveTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LeaveTypeClient<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LeaveTypeFindFirstArgs>(args?: Prisma.SelectSubset<T, LeaveTypeFindFirstArgs<ExtArgs>>): Prisma.Prisma__LeaveTypeClient<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LeaveTypeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LeaveTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LeaveTypeClient<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LeaveTypeFindManyArgs>(args?: Prisma.SelectSubset<T, LeaveTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LeaveTypeCreateArgs>(args: Prisma.SelectSubset<T, LeaveTypeCreateArgs<ExtArgs>>): Prisma.Prisma__LeaveTypeClient<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LeaveTypeCreateManyArgs>(args?: Prisma.SelectSubset<T, LeaveTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LeaveTypeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LeaveTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LeaveTypeDeleteArgs>(args: Prisma.SelectSubset<T, LeaveTypeDeleteArgs<ExtArgs>>): Prisma.Prisma__LeaveTypeClient<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LeaveTypeUpdateArgs>(args: Prisma.SelectSubset<T, LeaveTypeUpdateArgs<ExtArgs>>): Prisma.Prisma__LeaveTypeClient<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LeaveTypeDeleteManyArgs>(args?: Prisma.SelectSubset<T, LeaveTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LeaveTypeUpdateManyArgs>(args: Prisma.SelectSubset<T, LeaveTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LeaveTypeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LeaveTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LeaveTypeUpsertArgs>(args: Prisma.SelectSubset<T, LeaveTypeUpsertArgs<ExtArgs>>): Prisma.Prisma__LeaveTypeClient<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LeaveTypeCountArgs>(args?: Prisma.Subset<T, LeaveTypeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LeaveTypeCountAggregateOutputType> : number>;
    aggregate<T extends LeaveTypeAggregateArgs>(args: Prisma.Subset<T, LeaveTypeAggregateArgs>): Prisma.PrismaPromise<GetLeaveTypeAggregateType<T>>;
    groupBy<T extends LeaveTypeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LeaveTypeGroupByArgs['orderBy'];
    } : {
        orderBy?: LeaveTypeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LeaveTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaveTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LeaveTypeFieldRefs;
}
export interface Prisma__LeaveTypeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    policies<T extends Prisma.LeaveType$policiesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LeaveType$policiesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeavePolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    balances<T extends Prisma.LeaveType$balancesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LeaveType$balancesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    requests<T extends Prisma.LeaveType$requestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LeaveType$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LeaveTypeFieldRefs {
    readonly id: Prisma.FieldRef<"LeaveType", 'String'>;
    readonly organizationId: Prisma.FieldRef<"LeaveType", 'String'>;
    readonly name: Prisma.FieldRef<"LeaveType", 'String'>;
    readonly color: Prisma.FieldRef<"LeaveType", 'String'>;
    readonly isPaid: Prisma.FieldRef<"LeaveType", 'Boolean'>;
    readonly requiresDocument: Prisma.FieldRef<"LeaveType", 'Boolean'>;
    readonly genderRestriction: Prisma.FieldRef<"LeaveType", 'Gender'>;
    readonly isActive: Prisma.FieldRef<"LeaveType", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"LeaveType", 'DateTime'>;
}
export type LeaveTypeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeSelect<ExtArgs> | null;
    omit?: Prisma.LeaveTypeOmit<ExtArgs> | null;
    include?: Prisma.LeaveTypeInclude<ExtArgs> | null;
    where: Prisma.LeaveTypeWhereUniqueInput;
};
export type LeaveTypeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeSelect<ExtArgs> | null;
    omit?: Prisma.LeaveTypeOmit<ExtArgs> | null;
    include?: Prisma.LeaveTypeInclude<ExtArgs> | null;
    where: Prisma.LeaveTypeWhereUniqueInput;
};
export type LeaveTypeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeSelect<ExtArgs> | null;
    omit?: Prisma.LeaveTypeOmit<ExtArgs> | null;
    include?: Prisma.LeaveTypeInclude<ExtArgs> | null;
    where?: Prisma.LeaveTypeWhereInput;
    orderBy?: Prisma.LeaveTypeOrderByWithRelationInput | Prisma.LeaveTypeOrderByWithRelationInput[];
    cursor?: Prisma.LeaveTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeaveTypeScalarFieldEnum | Prisma.LeaveTypeScalarFieldEnum[];
};
export type LeaveTypeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeSelect<ExtArgs> | null;
    omit?: Prisma.LeaveTypeOmit<ExtArgs> | null;
    include?: Prisma.LeaveTypeInclude<ExtArgs> | null;
    where?: Prisma.LeaveTypeWhereInput;
    orderBy?: Prisma.LeaveTypeOrderByWithRelationInput | Prisma.LeaveTypeOrderByWithRelationInput[];
    cursor?: Prisma.LeaveTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeaveTypeScalarFieldEnum | Prisma.LeaveTypeScalarFieldEnum[];
};
export type LeaveTypeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeSelect<ExtArgs> | null;
    omit?: Prisma.LeaveTypeOmit<ExtArgs> | null;
    include?: Prisma.LeaveTypeInclude<ExtArgs> | null;
    where?: Prisma.LeaveTypeWhereInput;
    orderBy?: Prisma.LeaveTypeOrderByWithRelationInput | Prisma.LeaveTypeOrderByWithRelationInput[];
    cursor?: Prisma.LeaveTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeaveTypeScalarFieldEnum | Prisma.LeaveTypeScalarFieldEnum[];
};
export type LeaveTypeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeSelect<ExtArgs> | null;
    omit?: Prisma.LeaveTypeOmit<ExtArgs> | null;
    include?: Prisma.LeaveTypeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeaveTypeCreateInput, Prisma.LeaveTypeUncheckedCreateInput>;
};
export type LeaveTypeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LeaveTypeCreateManyInput | Prisma.LeaveTypeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LeaveTypeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LeaveTypeOmit<ExtArgs> | null;
    data: Prisma.LeaveTypeCreateManyInput | Prisma.LeaveTypeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LeaveTypeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LeaveTypeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeSelect<ExtArgs> | null;
    omit?: Prisma.LeaveTypeOmit<ExtArgs> | null;
    include?: Prisma.LeaveTypeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeaveTypeUpdateInput, Prisma.LeaveTypeUncheckedUpdateInput>;
    where: Prisma.LeaveTypeWhereUniqueInput;
};
export type LeaveTypeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LeaveTypeUpdateManyMutationInput, Prisma.LeaveTypeUncheckedUpdateManyInput>;
    where?: Prisma.LeaveTypeWhereInput;
    limit?: number;
};
export type LeaveTypeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LeaveTypeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeaveTypeUpdateManyMutationInput, Prisma.LeaveTypeUncheckedUpdateManyInput>;
    where?: Prisma.LeaveTypeWhereInput;
    limit?: number;
    include?: Prisma.LeaveTypeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LeaveTypeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeSelect<ExtArgs> | null;
    omit?: Prisma.LeaveTypeOmit<ExtArgs> | null;
    include?: Prisma.LeaveTypeInclude<ExtArgs> | null;
    where: Prisma.LeaveTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaveTypeCreateInput, Prisma.LeaveTypeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LeaveTypeUpdateInput, Prisma.LeaveTypeUncheckedUpdateInput>;
};
export type LeaveTypeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeSelect<ExtArgs> | null;
    omit?: Prisma.LeaveTypeOmit<ExtArgs> | null;
    include?: Prisma.LeaveTypeInclude<ExtArgs> | null;
    where: Prisma.LeaveTypeWhereUniqueInput;
};
export type LeaveTypeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaveTypeWhereInput;
    limit?: number;
};
export type LeaveType$policiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeavePolicySelect<ExtArgs> | null;
    omit?: Prisma.LeavePolicyOmit<ExtArgs> | null;
    include?: Prisma.LeavePolicyInclude<ExtArgs> | null;
    where?: Prisma.LeavePolicyWhereInput;
    orderBy?: Prisma.LeavePolicyOrderByWithRelationInput | Prisma.LeavePolicyOrderByWithRelationInput[];
    cursor?: Prisma.LeavePolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeavePolicyScalarFieldEnum | Prisma.LeavePolicyScalarFieldEnum[];
};
export type LeaveType$balancesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveBalanceSelect<ExtArgs> | null;
    omit?: Prisma.LeaveBalanceOmit<ExtArgs> | null;
    include?: Prisma.LeaveBalanceInclude<ExtArgs> | null;
    where?: Prisma.LeaveBalanceWhereInput;
    orderBy?: Prisma.LeaveBalanceOrderByWithRelationInput | Prisma.LeaveBalanceOrderByWithRelationInput[];
    cursor?: Prisma.LeaveBalanceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeaveBalanceScalarFieldEnum | Prisma.LeaveBalanceScalarFieldEnum[];
};
export type LeaveType$requestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveRequestSelect<ExtArgs> | null;
    omit?: Prisma.LeaveRequestOmit<ExtArgs> | null;
    include?: Prisma.LeaveRequestInclude<ExtArgs> | null;
    where?: Prisma.LeaveRequestWhereInput;
    orderBy?: Prisma.LeaveRequestOrderByWithRelationInput | Prisma.LeaveRequestOrderByWithRelationInput[];
    cursor?: Prisma.LeaveRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeaveRequestScalarFieldEnum | Prisma.LeaveRequestScalarFieldEnum[];
};
export type LeaveTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveTypeSelect<ExtArgs> | null;
    omit?: Prisma.LeaveTypeOmit<ExtArgs> | null;
    include?: Prisma.LeaveTypeInclude<ExtArgs> | null;
};
