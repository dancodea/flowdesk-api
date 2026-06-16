import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LeavePolicyModel = runtime.Types.Result.DefaultSelection<Prisma.$LeavePolicyPayload>;
export type AggregateLeavePolicy = {
    _count: LeavePolicyCountAggregateOutputType | null;
    _avg: LeavePolicyAvgAggregateOutputType | null;
    _sum: LeavePolicySumAggregateOutputType | null;
    _min: LeavePolicyMinAggregateOutputType | null;
    _max: LeavePolicyMaxAggregateOutputType | null;
};
export type LeavePolicyAvgAggregateOutputType = {
    annualAllowance: runtime.Decimal | null;
    carryOverMax: runtime.Decimal | null;
    advanceNoticeDays: number | null;
    maxConsecutiveDays: number | null;
};
export type LeavePolicySumAggregateOutputType = {
    annualAllowance: runtime.Decimal | null;
    carryOverMax: runtime.Decimal | null;
    advanceNoticeDays: number | null;
    maxConsecutiveDays: number | null;
};
export type LeavePolicyMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    leaveTypeId: string | null;
    name: string | null;
    annualAllowance: runtime.Decimal | null;
    accrualType: $Enums.AccrualType | null;
    carryOverMax: runtime.Decimal | null;
    advanceNoticeDays: number | null;
    maxConsecutiveDays: number | null;
    createdAt: Date | null;
};
export type LeavePolicyMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    leaveTypeId: string | null;
    name: string | null;
    annualAllowance: runtime.Decimal | null;
    accrualType: $Enums.AccrualType | null;
    carryOverMax: runtime.Decimal | null;
    advanceNoticeDays: number | null;
    maxConsecutiveDays: number | null;
    createdAt: Date | null;
};
export type LeavePolicyCountAggregateOutputType = {
    id: number;
    organizationId: number;
    leaveTypeId: number;
    name: number;
    annualAllowance: number;
    accrualType: number;
    carryOverMax: number;
    advanceNoticeDays: number;
    maxConsecutiveDays: number;
    createdAt: number;
    _all: number;
};
export type LeavePolicyAvgAggregateInputType = {
    annualAllowance?: true;
    carryOverMax?: true;
    advanceNoticeDays?: true;
    maxConsecutiveDays?: true;
};
export type LeavePolicySumAggregateInputType = {
    annualAllowance?: true;
    carryOverMax?: true;
    advanceNoticeDays?: true;
    maxConsecutiveDays?: true;
};
export type LeavePolicyMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    leaveTypeId?: true;
    name?: true;
    annualAllowance?: true;
    accrualType?: true;
    carryOverMax?: true;
    advanceNoticeDays?: true;
    maxConsecutiveDays?: true;
    createdAt?: true;
};
export type LeavePolicyMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    leaveTypeId?: true;
    name?: true;
    annualAllowance?: true;
    accrualType?: true;
    carryOverMax?: true;
    advanceNoticeDays?: true;
    maxConsecutiveDays?: true;
    createdAt?: true;
};
export type LeavePolicyCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    leaveTypeId?: true;
    name?: true;
    annualAllowance?: true;
    accrualType?: true;
    carryOverMax?: true;
    advanceNoticeDays?: true;
    maxConsecutiveDays?: true;
    createdAt?: true;
    _all?: true;
};
export type LeavePolicyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeavePolicyWhereInput;
    orderBy?: Prisma.LeavePolicyOrderByWithRelationInput | Prisma.LeavePolicyOrderByWithRelationInput[];
    cursor?: Prisma.LeavePolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LeavePolicyCountAggregateInputType;
    _avg?: LeavePolicyAvgAggregateInputType;
    _sum?: LeavePolicySumAggregateInputType;
    _min?: LeavePolicyMinAggregateInputType;
    _max?: LeavePolicyMaxAggregateInputType;
};
export type GetLeavePolicyAggregateType<T extends LeavePolicyAggregateArgs> = {
    [P in keyof T & keyof AggregateLeavePolicy]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLeavePolicy[P]> : Prisma.GetScalarType<T[P], AggregateLeavePolicy[P]>;
};
export type LeavePolicyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeavePolicyWhereInput;
    orderBy?: Prisma.LeavePolicyOrderByWithAggregationInput | Prisma.LeavePolicyOrderByWithAggregationInput[];
    by: Prisma.LeavePolicyScalarFieldEnum[] | Prisma.LeavePolicyScalarFieldEnum;
    having?: Prisma.LeavePolicyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LeavePolicyCountAggregateInputType | true;
    _avg?: LeavePolicyAvgAggregateInputType;
    _sum?: LeavePolicySumAggregateInputType;
    _min?: LeavePolicyMinAggregateInputType;
    _max?: LeavePolicyMaxAggregateInputType;
};
export type LeavePolicyGroupByOutputType = {
    id: string;
    organizationId: string;
    leaveTypeId: string;
    name: string | null;
    annualAllowance: runtime.Decimal;
    accrualType: $Enums.AccrualType;
    carryOverMax: runtime.Decimal;
    advanceNoticeDays: number;
    maxConsecutiveDays: number | null;
    createdAt: Date;
    _count: LeavePolicyCountAggregateOutputType | null;
    _avg: LeavePolicyAvgAggregateOutputType | null;
    _sum: LeavePolicySumAggregateOutputType | null;
    _min: LeavePolicyMinAggregateOutputType | null;
    _max: LeavePolicyMaxAggregateOutputType | null;
};
export type GetLeavePolicyGroupByPayload<T extends LeavePolicyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LeavePolicyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LeavePolicyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LeavePolicyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LeavePolicyGroupByOutputType[P]>;
}>>;
export type LeavePolicyWhereInput = {
    AND?: Prisma.LeavePolicyWhereInput | Prisma.LeavePolicyWhereInput[];
    OR?: Prisma.LeavePolicyWhereInput[];
    NOT?: Prisma.LeavePolicyWhereInput | Prisma.LeavePolicyWhereInput[];
    id?: Prisma.UuidFilter<"LeavePolicy"> | string;
    organizationId?: Prisma.UuidFilter<"LeavePolicy"> | string;
    leaveTypeId?: Prisma.UuidFilter<"LeavePolicy"> | string;
    name?: Prisma.StringNullableFilter<"LeavePolicy"> | string | null;
    annualAllowance?: Prisma.DecimalFilter<"LeavePolicy"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    accrualType?: Prisma.EnumAccrualTypeFilter<"LeavePolicy"> | $Enums.AccrualType;
    carryOverMax?: Prisma.DecimalFilter<"LeavePolicy"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    advanceNoticeDays?: Prisma.IntFilter<"LeavePolicy"> | number;
    maxConsecutiveDays?: Prisma.IntNullableFilter<"LeavePolicy"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"LeavePolicy"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    leaveType?: Prisma.XOR<Prisma.LeaveTypeScalarRelationFilter, Prisma.LeaveTypeWhereInput>;
};
export type LeavePolicyOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    leaveTypeId?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    annualAllowance?: Prisma.SortOrder;
    accrualType?: Prisma.SortOrder;
    carryOverMax?: Prisma.SortOrder;
    advanceNoticeDays?: Prisma.SortOrder;
    maxConsecutiveDays?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    leaveType?: Prisma.LeaveTypeOrderByWithRelationInput;
};
export type LeavePolicyWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.LeavePolicyWhereInput | Prisma.LeavePolicyWhereInput[];
    OR?: Prisma.LeavePolicyWhereInput[];
    NOT?: Prisma.LeavePolicyWhereInput | Prisma.LeavePolicyWhereInput[];
    organizationId?: Prisma.UuidFilter<"LeavePolicy"> | string;
    leaveTypeId?: Prisma.UuidFilter<"LeavePolicy"> | string;
    name?: Prisma.StringNullableFilter<"LeavePolicy"> | string | null;
    annualAllowance?: Prisma.DecimalFilter<"LeavePolicy"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    accrualType?: Prisma.EnumAccrualTypeFilter<"LeavePolicy"> | $Enums.AccrualType;
    carryOverMax?: Prisma.DecimalFilter<"LeavePolicy"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    advanceNoticeDays?: Prisma.IntFilter<"LeavePolicy"> | number;
    maxConsecutiveDays?: Prisma.IntNullableFilter<"LeavePolicy"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"LeavePolicy"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    leaveType?: Prisma.XOR<Prisma.LeaveTypeScalarRelationFilter, Prisma.LeaveTypeWhereInput>;
}, "id">;
export type LeavePolicyOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    leaveTypeId?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    annualAllowance?: Prisma.SortOrder;
    accrualType?: Prisma.SortOrder;
    carryOverMax?: Prisma.SortOrder;
    advanceNoticeDays?: Prisma.SortOrder;
    maxConsecutiveDays?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.LeavePolicyCountOrderByAggregateInput;
    _avg?: Prisma.LeavePolicyAvgOrderByAggregateInput;
    _max?: Prisma.LeavePolicyMaxOrderByAggregateInput;
    _min?: Prisma.LeavePolicyMinOrderByAggregateInput;
    _sum?: Prisma.LeavePolicySumOrderByAggregateInput;
};
export type LeavePolicyScalarWhereWithAggregatesInput = {
    AND?: Prisma.LeavePolicyScalarWhereWithAggregatesInput | Prisma.LeavePolicyScalarWhereWithAggregatesInput[];
    OR?: Prisma.LeavePolicyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LeavePolicyScalarWhereWithAggregatesInput | Prisma.LeavePolicyScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"LeavePolicy"> | string;
    organizationId?: Prisma.UuidWithAggregatesFilter<"LeavePolicy"> | string;
    leaveTypeId?: Prisma.UuidWithAggregatesFilter<"LeavePolicy"> | string;
    name?: Prisma.StringNullableWithAggregatesFilter<"LeavePolicy"> | string | null;
    annualAllowance?: Prisma.DecimalWithAggregatesFilter<"LeavePolicy"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    accrualType?: Prisma.EnumAccrualTypeWithAggregatesFilter<"LeavePolicy"> | $Enums.AccrualType;
    carryOverMax?: Prisma.DecimalWithAggregatesFilter<"LeavePolicy"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    advanceNoticeDays?: Prisma.IntWithAggregatesFilter<"LeavePolicy"> | number;
    maxConsecutiveDays?: Prisma.IntNullableWithAggregatesFilter<"LeavePolicy"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LeavePolicy"> | Date | string;
};
export type LeavePolicyCreateInput = {
    id?: string;
    name?: string | null;
    annualAllowance: runtime.Decimal | runtime.DecimalJsLike | number | string;
    accrualType?: $Enums.AccrualType;
    carryOverMax?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    advanceNoticeDays?: number;
    maxConsecutiveDays?: number | null;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutLeavePoliciesInput;
    leaveType: Prisma.LeaveTypeCreateNestedOneWithoutPoliciesInput;
};
export type LeavePolicyUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    leaveTypeId: string;
    name?: string | null;
    annualAllowance: runtime.Decimal | runtime.DecimalJsLike | number | string;
    accrualType?: $Enums.AccrualType;
    carryOverMax?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    advanceNoticeDays?: number;
    maxConsecutiveDays?: number | null;
    createdAt?: Date | string;
};
export type LeavePolicyUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    annualAllowance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    accrualType?: Prisma.EnumAccrualTypeFieldUpdateOperationsInput | $Enums.AccrualType;
    carryOverMax?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    advanceNoticeDays?: Prisma.IntFieldUpdateOperationsInput | number;
    maxConsecutiveDays?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutLeavePoliciesNestedInput;
    leaveType?: Prisma.LeaveTypeUpdateOneRequiredWithoutPoliciesNestedInput;
};
export type LeavePolicyUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    leaveTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    annualAllowance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    accrualType?: Prisma.EnumAccrualTypeFieldUpdateOperationsInput | $Enums.AccrualType;
    carryOverMax?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    advanceNoticeDays?: Prisma.IntFieldUpdateOperationsInput | number;
    maxConsecutiveDays?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeavePolicyCreateManyInput = {
    id?: string;
    organizationId: string;
    leaveTypeId: string;
    name?: string | null;
    annualAllowance: runtime.Decimal | runtime.DecimalJsLike | number | string;
    accrualType?: $Enums.AccrualType;
    carryOverMax?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    advanceNoticeDays?: number;
    maxConsecutiveDays?: number | null;
    createdAt?: Date | string;
};
export type LeavePolicyUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    annualAllowance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    accrualType?: Prisma.EnumAccrualTypeFieldUpdateOperationsInput | $Enums.AccrualType;
    carryOverMax?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    advanceNoticeDays?: Prisma.IntFieldUpdateOperationsInput | number;
    maxConsecutiveDays?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeavePolicyUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    leaveTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    annualAllowance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    accrualType?: Prisma.EnumAccrualTypeFieldUpdateOperationsInput | $Enums.AccrualType;
    carryOverMax?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    advanceNoticeDays?: Prisma.IntFieldUpdateOperationsInput | number;
    maxConsecutiveDays?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeavePolicyListRelationFilter = {
    every?: Prisma.LeavePolicyWhereInput;
    some?: Prisma.LeavePolicyWhereInput;
    none?: Prisma.LeavePolicyWhereInput;
};
export type LeavePolicyOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LeavePolicyCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    leaveTypeId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    annualAllowance?: Prisma.SortOrder;
    accrualType?: Prisma.SortOrder;
    carryOverMax?: Prisma.SortOrder;
    advanceNoticeDays?: Prisma.SortOrder;
    maxConsecutiveDays?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LeavePolicyAvgOrderByAggregateInput = {
    annualAllowance?: Prisma.SortOrder;
    carryOverMax?: Prisma.SortOrder;
    advanceNoticeDays?: Prisma.SortOrder;
    maxConsecutiveDays?: Prisma.SortOrder;
};
export type LeavePolicyMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    leaveTypeId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    annualAllowance?: Prisma.SortOrder;
    accrualType?: Prisma.SortOrder;
    carryOverMax?: Prisma.SortOrder;
    advanceNoticeDays?: Prisma.SortOrder;
    maxConsecutiveDays?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LeavePolicyMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    leaveTypeId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    annualAllowance?: Prisma.SortOrder;
    accrualType?: Prisma.SortOrder;
    carryOverMax?: Prisma.SortOrder;
    advanceNoticeDays?: Prisma.SortOrder;
    maxConsecutiveDays?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LeavePolicySumOrderByAggregateInput = {
    annualAllowance?: Prisma.SortOrder;
    carryOverMax?: Prisma.SortOrder;
    advanceNoticeDays?: Prisma.SortOrder;
    maxConsecutiveDays?: Prisma.SortOrder;
};
export type LeavePolicyCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.LeavePolicyCreateWithoutOrganizationInput, Prisma.LeavePolicyUncheckedCreateWithoutOrganizationInput> | Prisma.LeavePolicyCreateWithoutOrganizationInput[] | Prisma.LeavePolicyUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.LeavePolicyCreateOrConnectWithoutOrganizationInput | Prisma.LeavePolicyCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.LeavePolicyCreateManyOrganizationInputEnvelope;
    connect?: Prisma.LeavePolicyWhereUniqueInput | Prisma.LeavePolicyWhereUniqueInput[];
};
export type LeavePolicyUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.LeavePolicyCreateWithoutOrganizationInput, Prisma.LeavePolicyUncheckedCreateWithoutOrganizationInput> | Prisma.LeavePolicyCreateWithoutOrganizationInput[] | Prisma.LeavePolicyUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.LeavePolicyCreateOrConnectWithoutOrganizationInput | Prisma.LeavePolicyCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.LeavePolicyCreateManyOrganizationInputEnvelope;
    connect?: Prisma.LeavePolicyWhereUniqueInput | Prisma.LeavePolicyWhereUniqueInput[];
};
export type LeavePolicyUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.LeavePolicyCreateWithoutOrganizationInput, Prisma.LeavePolicyUncheckedCreateWithoutOrganizationInput> | Prisma.LeavePolicyCreateWithoutOrganizationInput[] | Prisma.LeavePolicyUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.LeavePolicyCreateOrConnectWithoutOrganizationInput | Prisma.LeavePolicyCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.LeavePolicyUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.LeavePolicyUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.LeavePolicyCreateManyOrganizationInputEnvelope;
    set?: Prisma.LeavePolicyWhereUniqueInput | Prisma.LeavePolicyWhereUniqueInput[];
    disconnect?: Prisma.LeavePolicyWhereUniqueInput | Prisma.LeavePolicyWhereUniqueInput[];
    delete?: Prisma.LeavePolicyWhereUniqueInput | Prisma.LeavePolicyWhereUniqueInput[];
    connect?: Prisma.LeavePolicyWhereUniqueInput | Prisma.LeavePolicyWhereUniqueInput[];
    update?: Prisma.LeavePolicyUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.LeavePolicyUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.LeavePolicyUpdateManyWithWhereWithoutOrganizationInput | Prisma.LeavePolicyUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.LeavePolicyScalarWhereInput | Prisma.LeavePolicyScalarWhereInput[];
};
export type LeavePolicyUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.LeavePolicyCreateWithoutOrganizationInput, Prisma.LeavePolicyUncheckedCreateWithoutOrganizationInput> | Prisma.LeavePolicyCreateWithoutOrganizationInput[] | Prisma.LeavePolicyUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.LeavePolicyCreateOrConnectWithoutOrganizationInput | Prisma.LeavePolicyCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.LeavePolicyUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.LeavePolicyUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.LeavePolicyCreateManyOrganizationInputEnvelope;
    set?: Prisma.LeavePolicyWhereUniqueInput | Prisma.LeavePolicyWhereUniqueInput[];
    disconnect?: Prisma.LeavePolicyWhereUniqueInput | Prisma.LeavePolicyWhereUniqueInput[];
    delete?: Prisma.LeavePolicyWhereUniqueInput | Prisma.LeavePolicyWhereUniqueInput[];
    connect?: Prisma.LeavePolicyWhereUniqueInput | Prisma.LeavePolicyWhereUniqueInput[];
    update?: Prisma.LeavePolicyUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.LeavePolicyUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.LeavePolicyUpdateManyWithWhereWithoutOrganizationInput | Prisma.LeavePolicyUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.LeavePolicyScalarWhereInput | Prisma.LeavePolicyScalarWhereInput[];
};
export type LeavePolicyCreateNestedManyWithoutLeaveTypeInput = {
    create?: Prisma.XOR<Prisma.LeavePolicyCreateWithoutLeaveTypeInput, Prisma.LeavePolicyUncheckedCreateWithoutLeaveTypeInput> | Prisma.LeavePolicyCreateWithoutLeaveTypeInput[] | Prisma.LeavePolicyUncheckedCreateWithoutLeaveTypeInput[];
    connectOrCreate?: Prisma.LeavePolicyCreateOrConnectWithoutLeaveTypeInput | Prisma.LeavePolicyCreateOrConnectWithoutLeaveTypeInput[];
    createMany?: Prisma.LeavePolicyCreateManyLeaveTypeInputEnvelope;
    connect?: Prisma.LeavePolicyWhereUniqueInput | Prisma.LeavePolicyWhereUniqueInput[];
};
export type LeavePolicyUncheckedCreateNestedManyWithoutLeaveTypeInput = {
    create?: Prisma.XOR<Prisma.LeavePolicyCreateWithoutLeaveTypeInput, Prisma.LeavePolicyUncheckedCreateWithoutLeaveTypeInput> | Prisma.LeavePolicyCreateWithoutLeaveTypeInput[] | Prisma.LeavePolicyUncheckedCreateWithoutLeaveTypeInput[];
    connectOrCreate?: Prisma.LeavePolicyCreateOrConnectWithoutLeaveTypeInput | Prisma.LeavePolicyCreateOrConnectWithoutLeaveTypeInput[];
    createMany?: Prisma.LeavePolicyCreateManyLeaveTypeInputEnvelope;
    connect?: Prisma.LeavePolicyWhereUniqueInput | Prisma.LeavePolicyWhereUniqueInput[];
};
export type LeavePolicyUpdateManyWithoutLeaveTypeNestedInput = {
    create?: Prisma.XOR<Prisma.LeavePolicyCreateWithoutLeaveTypeInput, Prisma.LeavePolicyUncheckedCreateWithoutLeaveTypeInput> | Prisma.LeavePolicyCreateWithoutLeaveTypeInput[] | Prisma.LeavePolicyUncheckedCreateWithoutLeaveTypeInput[];
    connectOrCreate?: Prisma.LeavePolicyCreateOrConnectWithoutLeaveTypeInput | Prisma.LeavePolicyCreateOrConnectWithoutLeaveTypeInput[];
    upsert?: Prisma.LeavePolicyUpsertWithWhereUniqueWithoutLeaveTypeInput | Prisma.LeavePolicyUpsertWithWhereUniqueWithoutLeaveTypeInput[];
    createMany?: Prisma.LeavePolicyCreateManyLeaveTypeInputEnvelope;
    set?: Prisma.LeavePolicyWhereUniqueInput | Prisma.LeavePolicyWhereUniqueInput[];
    disconnect?: Prisma.LeavePolicyWhereUniqueInput | Prisma.LeavePolicyWhereUniqueInput[];
    delete?: Prisma.LeavePolicyWhereUniqueInput | Prisma.LeavePolicyWhereUniqueInput[];
    connect?: Prisma.LeavePolicyWhereUniqueInput | Prisma.LeavePolicyWhereUniqueInput[];
    update?: Prisma.LeavePolicyUpdateWithWhereUniqueWithoutLeaveTypeInput | Prisma.LeavePolicyUpdateWithWhereUniqueWithoutLeaveTypeInput[];
    updateMany?: Prisma.LeavePolicyUpdateManyWithWhereWithoutLeaveTypeInput | Prisma.LeavePolicyUpdateManyWithWhereWithoutLeaveTypeInput[];
    deleteMany?: Prisma.LeavePolicyScalarWhereInput | Prisma.LeavePolicyScalarWhereInput[];
};
export type LeavePolicyUncheckedUpdateManyWithoutLeaveTypeNestedInput = {
    create?: Prisma.XOR<Prisma.LeavePolicyCreateWithoutLeaveTypeInput, Prisma.LeavePolicyUncheckedCreateWithoutLeaveTypeInput> | Prisma.LeavePolicyCreateWithoutLeaveTypeInput[] | Prisma.LeavePolicyUncheckedCreateWithoutLeaveTypeInput[];
    connectOrCreate?: Prisma.LeavePolicyCreateOrConnectWithoutLeaveTypeInput | Prisma.LeavePolicyCreateOrConnectWithoutLeaveTypeInput[];
    upsert?: Prisma.LeavePolicyUpsertWithWhereUniqueWithoutLeaveTypeInput | Prisma.LeavePolicyUpsertWithWhereUniqueWithoutLeaveTypeInput[];
    createMany?: Prisma.LeavePolicyCreateManyLeaveTypeInputEnvelope;
    set?: Prisma.LeavePolicyWhereUniqueInput | Prisma.LeavePolicyWhereUniqueInput[];
    disconnect?: Prisma.LeavePolicyWhereUniqueInput | Prisma.LeavePolicyWhereUniqueInput[];
    delete?: Prisma.LeavePolicyWhereUniqueInput | Prisma.LeavePolicyWhereUniqueInput[];
    connect?: Prisma.LeavePolicyWhereUniqueInput | Prisma.LeavePolicyWhereUniqueInput[];
    update?: Prisma.LeavePolicyUpdateWithWhereUniqueWithoutLeaveTypeInput | Prisma.LeavePolicyUpdateWithWhereUniqueWithoutLeaveTypeInput[];
    updateMany?: Prisma.LeavePolicyUpdateManyWithWhereWithoutLeaveTypeInput | Prisma.LeavePolicyUpdateManyWithWhereWithoutLeaveTypeInput[];
    deleteMany?: Prisma.LeavePolicyScalarWhereInput | Prisma.LeavePolicyScalarWhereInput[];
};
export type EnumAccrualTypeFieldUpdateOperationsInput = {
    set?: $Enums.AccrualType;
};
export type LeavePolicyCreateWithoutOrganizationInput = {
    id?: string;
    name?: string | null;
    annualAllowance: runtime.Decimal | runtime.DecimalJsLike | number | string;
    accrualType?: $Enums.AccrualType;
    carryOverMax?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    advanceNoticeDays?: number;
    maxConsecutiveDays?: number | null;
    createdAt?: Date | string;
    leaveType: Prisma.LeaveTypeCreateNestedOneWithoutPoliciesInput;
};
export type LeavePolicyUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    leaveTypeId: string;
    name?: string | null;
    annualAllowance: runtime.Decimal | runtime.DecimalJsLike | number | string;
    accrualType?: $Enums.AccrualType;
    carryOverMax?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    advanceNoticeDays?: number;
    maxConsecutiveDays?: number | null;
    createdAt?: Date | string;
};
export type LeavePolicyCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.LeavePolicyWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeavePolicyCreateWithoutOrganizationInput, Prisma.LeavePolicyUncheckedCreateWithoutOrganizationInput>;
};
export type LeavePolicyCreateManyOrganizationInputEnvelope = {
    data: Prisma.LeavePolicyCreateManyOrganizationInput | Prisma.LeavePolicyCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type LeavePolicyUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.LeavePolicyWhereUniqueInput;
    update: Prisma.XOR<Prisma.LeavePolicyUpdateWithoutOrganizationInput, Prisma.LeavePolicyUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.LeavePolicyCreateWithoutOrganizationInput, Prisma.LeavePolicyUncheckedCreateWithoutOrganizationInput>;
};
export type LeavePolicyUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.LeavePolicyWhereUniqueInput;
    data: Prisma.XOR<Prisma.LeavePolicyUpdateWithoutOrganizationInput, Prisma.LeavePolicyUncheckedUpdateWithoutOrganizationInput>;
};
export type LeavePolicyUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.LeavePolicyScalarWhereInput;
    data: Prisma.XOR<Prisma.LeavePolicyUpdateManyMutationInput, Prisma.LeavePolicyUncheckedUpdateManyWithoutOrganizationInput>;
};
export type LeavePolicyScalarWhereInput = {
    AND?: Prisma.LeavePolicyScalarWhereInput | Prisma.LeavePolicyScalarWhereInput[];
    OR?: Prisma.LeavePolicyScalarWhereInput[];
    NOT?: Prisma.LeavePolicyScalarWhereInput | Prisma.LeavePolicyScalarWhereInput[];
    id?: Prisma.UuidFilter<"LeavePolicy"> | string;
    organizationId?: Prisma.UuidFilter<"LeavePolicy"> | string;
    leaveTypeId?: Prisma.UuidFilter<"LeavePolicy"> | string;
    name?: Prisma.StringNullableFilter<"LeavePolicy"> | string | null;
    annualAllowance?: Prisma.DecimalFilter<"LeavePolicy"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    accrualType?: Prisma.EnumAccrualTypeFilter<"LeavePolicy"> | $Enums.AccrualType;
    carryOverMax?: Prisma.DecimalFilter<"LeavePolicy"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    advanceNoticeDays?: Prisma.IntFilter<"LeavePolicy"> | number;
    maxConsecutiveDays?: Prisma.IntNullableFilter<"LeavePolicy"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"LeavePolicy"> | Date | string;
};
export type LeavePolicyCreateWithoutLeaveTypeInput = {
    id?: string;
    name?: string | null;
    annualAllowance: runtime.Decimal | runtime.DecimalJsLike | number | string;
    accrualType?: $Enums.AccrualType;
    carryOverMax?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    advanceNoticeDays?: number;
    maxConsecutiveDays?: number | null;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutLeavePoliciesInput;
};
export type LeavePolicyUncheckedCreateWithoutLeaveTypeInput = {
    id?: string;
    organizationId: string;
    name?: string | null;
    annualAllowance: runtime.Decimal | runtime.DecimalJsLike | number | string;
    accrualType?: $Enums.AccrualType;
    carryOverMax?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    advanceNoticeDays?: number;
    maxConsecutiveDays?: number | null;
    createdAt?: Date | string;
};
export type LeavePolicyCreateOrConnectWithoutLeaveTypeInput = {
    where: Prisma.LeavePolicyWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeavePolicyCreateWithoutLeaveTypeInput, Prisma.LeavePolicyUncheckedCreateWithoutLeaveTypeInput>;
};
export type LeavePolicyCreateManyLeaveTypeInputEnvelope = {
    data: Prisma.LeavePolicyCreateManyLeaveTypeInput | Prisma.LeavePolicyCreateManyLeaveTypeInput[];
    skipDuplicates?: boolean;
};
export type LeavePolicyUpsertWithWhereUniqueWithoutLeaveTypeInput = {
    where: Prisma.LeavePolicyWhereUniqueInput;
    update: Prisma.XOR<Prisma.LeavePolicyUpdateWithoutLeaveTypeInput, Prisma.LeavePolicyUncheckedUpdateWithoutLeaveTypeInput>;
    create: Prisma.XOR<Prisma.LeavePolicyCreateWithoutLeaveTypeInput, Prisma.LeavePolicyUncheckedCreateWithoutLeaveTypeInput>;
};
export type LeavePolicyUpdateWithWhereUniqueWithoutLeaveTypeInput = {
    where: Prisma.LeavePolicyWhereUniqueInput;
    data: Prisma.XOR<Prisma.LeavePolicyUpdateWithoutLeaveTypeInput, Prisma.LeavePolicyUncheckedUpdateWithoutLeaveTypeInput>;
};
export type LeavePolicyUpdateManyWithWhereWithoutLeaveTypeInput = {
    where: Prisma.LeavePolicyScalarWhereInput;
    data: Prisma.XOR<Prisma.LeavePolicyUpdateManyMutationInput, Prisma.LeavePolicyUncheckedUpdateManyWithoutLeaveTypeInput>;
};
export type LeavePolicyCreateManyOrganizationInput = {
    id?: string;
    leaveTypeId: string;
    name?: string | null;
    annualAllowance: runtime.Decimal | runtime.DecimalJsLike | number | string;
    accrualType?: $Enums.AccrualType;
    carryOverMax?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    advanceNoticeDays?: number;
    maxConsecutiveDays?: number | null;
    createdAt?: Date | string;
};
export type LeavePolicyUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    annualAllowance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    accrualType?: Prisma.EnumAccrualTypeFieldUpdateOperationsInput | $Enums.AccrualType;
    carryOverMax?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    advanceNoticeDays?: Prisma.IntFieldUpdateOperationsInput | number;
    maxConsecutiveDays?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leaveType?: Prisma.LeaveTypeUpdateOneRequiredWithoutPoliciesNestedInput;
};
export type LeavePolicyUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    leaveTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    annualAllowance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    accrualType?: Prisma.EnumAccrualTypeFieldUpdateOperationsInput | $Enums.AccrualType;
    carryOverMax?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    advanceNoticeDays?: Prisma.IntFieldUpdateOperationsInput | number;
    maxConsecutiveDays?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeavePolicyUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    leaveTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    annualAllowance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    accrualType?: Prisma.EnumAccrualTypeFieldUpdateOperationsInput | $Enums.AccrualType;
    carryOverMax?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    advanceNoticeDays?: Prisma.IntFieldUpdateOperationsInput | number;
    maxConsecutiveDays?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeavePolicyCreateManyLeaveTypeInput = {
    id?: string;
    organizationId: string;
    name?: string | null;
    annualAllowance: runtime.Decimal | runtime.DecimalJsLike | number | string;
    accrualType?: $Enums.AccrualType;
    carryOverMax?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    advanceNoticeDays?: number;
    maxConsecutiveDays?: number | null;
    createdAt?: Date | string;
};
export type LeavePolicyUpdateWithoutLeaveTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    annualAllowance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    accrualType?: Prisma.EnumAccrualTypeFieldUpdateOperationsInput | $Enums.AccrualType;
    carryOverMax?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    advanceNoticeDays?: Prisma.IntFieldUpdateOperationsInput | number;
    maxConsecutiveDays?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutLeavePoliciesNestedInput;
};
export type LeavePolicyUncheckedUpdateWithoutLeaveTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    annualAllowance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    accrualType?: Prisma.EnumAccrualTypeFieldUpdateOperationsInput | $Enums.AccrualType;
    carryOverMax?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    advanceNoticeDays?: Prisma.IntFieldUpdateOperationsInput | number;
    maxConsecutiveDays?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeavePolicyUncheckedUpdateManyWithoutLeaveTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    annualAllowance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    accrualType?: Prisma.EnumAccrualTypeFieldUpdateOperationsInput | $Enums.AccrualType;
    carryOverMax?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    advanceNoticeDays?: Prisma.IntFieldUpdateOperationsInput | number;
    maxConsecutiveDays?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeavePolicySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    leaveTypeId?: boolean;
    name?: boolean;
    annualAllowance?: boolean;
    accrualType?: boolean;
    carryOverMax?: boolean;
    advanceNoticeDays?: boolean;
    maxConsecutiveDays?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    leaveType?: boolean | Prisma.LeaveTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["leavePolicy"]>;
export type LeavePolicySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    leaveTypeId?: boolean;
    name?: boolean;
    annualAllowance?: boolean;
    accrualType?: boolean;
    carryOverMax?: boolean;
    advanceNoticeDays?: boolean;
    maxConsecutiveDays?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    leaveType?: boolean | Prisma.LeaveTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["leavePolicy"]>;
export type LeavePolicySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    leaveTypeId?: boolean;
    name?: boolean;
    annualAllowance?: boolean;
    accrualType?: boolean;
    carryOverMax?: boolean;
    advanceNoticeDays?: boolean;
    maxConsecutiveDays?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    leaveType?: boolean | Prisma.LeaveTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["leavePolicy"]>;
export type LeavePolicySelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    leaveTypeId?: boolean;
    name?: boolean;
    annualAllowance?: boolean;
    accrualType?: boolean;
    carryOverMax?: boolean;
    advanceNoticeDays?: boolean;
    maxConsecutiveDays?: boolean;
    createdAt?: boolean;
};
export type LeavePolicyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "leaveTypeId" | "name" | "annualAllowance" | "accrualType" | "carryOverMax" | "advanceNoticeDays" | "maxConsecutiveDays" | "createdAt", ExtArgs["result"]["leavePolicy"]>;
export type LeavePolicyInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    leaveType?: boolean | Prisma.LeaveTypeDefaultArgs<ExtArgs>;
};
export type LeavePolicyIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    leaveType?: boolean | Prisma.LeaveTypeDefaultArgs<ExtArgs>;
};
export type LeavePolicyIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    leaveType?: boolean | Prisma.LeaveTypeDefaultArgs<ExtArgs>;
};
export type $LeavePolicyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LeavePolicy";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        leaveType: Prisma.$LeaveTypePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        leaveTypeId: string;
        name: string | null;
        annualAllowance: runtime.Decimal;
        accrualType: $Enums.AccrualType;
        carryOverMax: runtime.Decimal;
        advanceNoticeDays: number;
        maxConsecutiveDays: number | null;
        createdAt: Date;
    }, ExtArgs["result"]["leavePolicy"]>;
    composites: {};
};
export type LeavePolicyGetPayload<S extends boolean | null | undefined | LeavePolicyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LeavePolicyPayload, S>;
export type LeavePolicyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LeavePolicyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LeavePolicyCountAggregateInputType | true;
};
export interface LeavePolicyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LeavePolicy'];
        meta: {
            name: 'LeavePolicy';
        };
    };
    findUnique<T extends LeavePolicyFindUniqueArgs>(args: Prisma.SelectSubset<T, LeavePolicyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LeavePolicyClient<runtime.Types.Result.GetResult<Prisma.$LeavePolicyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LeavePolicyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LeavePolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LeavePolicyClient<runtime.Types.Result.GetResult<Prisma.$LeavePolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LeavePolicyFindFirstArgs>(args?: Prisma.SelectSubset<T, LeavePolicyFindFirstArgs<ExtArgs>>): Prisma.Prisma__LeavePolicyClient<runtime.Types.Result.GetResult<Prisma.$LeavePolicyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LeavePolicyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LeavePolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LeavePolicyClient<runtime.Types.Result.GetResult<Prisma.$LeavePolicyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LeavePolicyFindManyArgs>(args?: Prisma.SelectSubset<T, LeavePolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeavePolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LeavePolicyCreateArgs>(args: Prisma.SelectSubset<T, LeavePolicyCreateArgs<ExtArgs>>): Prisma.Prisma__LeavePolicyClient<runtime.Types.Result.GetResult<Prisma.$LeavePolicyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LeavePolicyCreateManyArgs>(args?: Prisma.SelectSubset<T, LeavePolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LeavePolicyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LeavePolicyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeavePolicyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LeavePolicyDeleteArgs>(args: Prisma.SelectSubset<T, LeavePolicyDeleteArgs<ExtArgs>>): Prisma.Prisma__LeavePolicyClient<runtime.Types.Result.GetResult<Prisma.$LeavePolicyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LeavePolicyUpdateArgs>(args: Prisma.SelectSubset<T, LeavePolicyUpdateArgs<ExtArgs>>): Prisma.Prisma__LeavePolicyClient<runtime.Types.Result.GetResult<Prisma.$LeavePolicyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LeavePolicyDeleteManyArgs>(args?: Prisma.SelectSubset<T, LeavePolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LeavePolicyUpdateManyArgs>(args: Prisma.SelectSubset<T, LeavePolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LeavePolicyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LeavePolicyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeavePolicyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LeavePolicyUpsertArgs>(args: Prisma.SelectSubset<T, LeavePolicyUpsertArgs<ExtArgs>>): Prisma.Prisma__LeavePolicyClient<runtime.Types.Result.GetResult<Prisma.$LeavePolicyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LeavePolicyCountArgs>(args?: Prisma.Subset<T, LeavePolicyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LeavePolicyCountAggregateOutputType> : number>;
    aggregate<T extends LeavePolicyAggregateArgs>(args: Prisma.Subset<T, LeavePolicyAggregateArgs>): Prisma.PrismaPromise<GetLeavePolicyAggregateType<T>>;
    groupBy<T extends LeavePolicyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LeavePolicyGroupByArgs['orderBy'];
    } : {
        orderBy?: LeavePolicyGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LeavePolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeavePolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LeavePolicyFieldRefs;
}
export interface Prisma__LeavePolicyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    leaveType<T extends Prisma.LeaveTypeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LeaveTypeDefaultArgs<ExtArgs>>): Prisma.Prisma__LeaveTypeClient<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LeavePolicyFieldRefs {
    readonly id: Prisma.FieldRef<"LeavePolicy", 'String'>;
    readonly organizationId: Prisma.FieldRef<"LeavePolicy", 'String'>;
    readonly leaveTypeId: Prisma.FieldRef<"LeavePolicy", 'String'>;
    readonly name: Prisma.FieldRef<"LeavePolicy", 'String'>;
    readonly annualAllowance: Prisma.FieldRef<"LeavePolicy", 'Decimal'>;
    readonly accrualType: Prisma.FieldRef<"LeavePolicy", 'AccrualType'>;
    readonly carryOverMax: Prisma.FieldRef<"LeavePolicy", 'Decimal'>;
    readonly advanceNoticeDays: Prisma.FieldRef<"LeavePolicy", 'Int'>;
    readonly maxConsecutiveDays: Prisma.FieldRef<"LeavePolicy", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"LeavePolicy", 'DateTime'>;
}
export type LeavePolicyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeavePolicySelect<ExtArgs> | null;
    omit?: Prisma.LeavePolicyOmit<ExtArgs> | null;
    include?: Prisma.LeavePolicyInclude<ExtArgs> | null;
    where: Prisma.LeavePolicyWhereUniqueInput;
};
export type LeavePolicyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeavePolicySelect<ExtArgs> | null;
    omit?: Prisma.LeavePolicyOmit<ExtArgs> | null;
    include?: Prisma.LeavePolicyInclude<ExtArgs> | null;
    where: Prisma.LeavePolicyWhereUniqueInput;
};
export type LeavePolicyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LeavePolicyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LeavePolicyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LeavePolicyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeavePolicySelect<ExtArgs> | null;
    omit?: Prisma.LeavePolicyOmit<ExtArgs> | null;
    include?: Prisma.LeavePolicyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeavePolicyCreateInput, Prisma.LeavePolicyUncheckedCreateInput>;
};
export type LeavePolicyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LeavePolicyCreateManyInput | Prisma.LeavePolicyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LeavePolicyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeavePolicySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LeavePolicyOmit<ExtArgs> | null;
    data: Prisma.LeavePolicyCreateManyInput | Prisma.LeavePolicyCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LeavePolicyIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LeavePolicyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeavePolicySelect<ExtArgs> | null;
    omit?: Prisma.LeavePolicyOmit<ExtArgs> | null;
    include?: Prisma.LeavePolicyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeavePolicyUpdateInput, Prisma.LeavePolicyUncheckedUpdateInput>;
    where: Prisma.LeavePolicyWhereUniqueInput;
};
export type LeavePolicyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LeavePolicyUpdateManyMutationInput, Prisma.LeavePolicyUncheckedUpdateManyInput>;
    where?: Prisma.LeavePolicyWhereInput;
    limit?: number;
};
export type LeavePolicyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeavePolicySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LeavePolicyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeavePolicyUpdateManyMutationInput, Prisma.LeavePolicyUncheckedUpdateManyInput>;
    where?: Prisma.LeavePolicyWhereInput;
    limit?: number;
    include?: Prisma.LeavePolicyIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LeavePolicyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeavePolicySelect<ExtArgs> | null;
    omit?: Prisma.LeavePolicyOmit<ExtArgs> | null;
    include?: Prisma.LeavePolicyInclude<ExtArgs> | null;
    where: Prisma.LeavePolicyWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeavePolicyCreateInput, Prisma.LeavePolicyUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LeavePolicyUpdateInput, Prisma.LeavePolicyUncheckedUpdateInput>;
};
export type LeavePolicyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeavePolicySelect<ExtArgs> | null;
    omit?: Prisma.LeavePolicyOmit<ExtArgs> | null;
    include?: Prisma.LeavePolicyInclude<ExtArgs> | null;
    where: Prisma.LeavePolicyWhereUniqueInput;
};
export type LeavePolicyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeavePolicyWhereInput;
    limit?: number;
};
export type LeavePolicyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeavePolicySelect<ExtArgs> | null;
    omit?: Prisma.LeavePolicyOmit<ExtArgs> | null;
    include?: Prisma.LeavePolicyInclude<ExtArgs> | null;
};
