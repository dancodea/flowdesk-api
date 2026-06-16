import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LeaveBalanceModel = runtime.Types.Result.DefaultSelection<Prisma.$LeaveBalancePayload>;
export type AggregateLeaveBalance = {
    _count: LeaveBalanceCountAggregateOutputType | null;
    _avg: LeaveBalanceAvgAggregateOutputType | null;
    _sum: LeaveBalanceSumAggregateOutputType | null;
    _min: LeaveBalanceMinAggregateOutputType | null;
    _max: LeaveBalanceMaxAggregateOutputType | null;
};
export type LeaveBalanceAvgAggregateOutputType = {
    year: number | null;
    allocated: runtime.Decimal | null;
    used: runtime.Decimal | null;
    pending: runtime.Decimal | null;
    carriedOver: runtime.Decimal | null;
    adjusted: runtime.Decimal | null;
};
export type LeaveBalanceSumAggregateOutputType = {
    year: number | null;
    allocated: runtime.Decimal | null;
    used: runtime.Decimal | null;
    pending: runtime.Decimal | null;
    carriedOver: runtime.Decimal | null;
    adjusted: runtime.Decimal | null;
};
export type LeaveBalanceMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    employeeId: string | null;
    leaveTypeId: string | null;
    year: number | null;
    allocated: runtime.Decimal | null;
    used: runtime.Decimal | null;
    pending: runtime.Decimal | null;
    carriedOver: runtime.Decimal | null;
    adjusted: runtime.Decimal | null;
};
export type LeaveBalanceMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    employeeId: string | null;
    leaveTypeId: string | null;
    year: number | null;
    allocated: runtime.Decimal | null;
    used: runtime.Decimal | null;
    pending: runtime.Decimal | null;
    carriedOver: runtime.Decimal | null;
    adjusted: runtime.Decimal | null;
};
export type LeaveBalanceCountAggregateOutputType = {
    id: number;
    organizationId: number;
    employeeId: number;
    leaveTypeId: number;
    year: number;
    allocated: number;
    used: number;
    pending: number;
    carriedOver: number;
    adjusted: number;
    _all: number;
};
export type LeaveBalanceAvgAggregateInputType = {
    year?: true;
    allocated?: true;
    used?: true;
    pending?: true;
    carriedOver?: true;
    adjusted?: true;
};
export type LeaveBalanceSumAggregateInputType = {
    year?: true;
    allocated?: true;
    used?: true;
    pending?: true;
    carriedOver?: true;
    adjusted?: true;
};
export type LeaveBalanceMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    employeeId?: true;
    leaveTypeId?: true;
    year?: true;
    allocated?: true;
    used?: true;
    pending?: true;
    carriedOver?: true;
    adjusted?: true;
};
export type LeaveBalanceMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    employeeId?: true;
    leaveTypeId?: true;
    year?: true;
    allocated?: true;
    used?: true;
    pending?: true;
    carriedOver?: true;
    adjusted?: true;
};
export type LeaveBalanceCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    employeeId?: true;
    leaveTypeId?: true;
    year?: true;
    allocated?: true;
    used?: true;
    pending?: true;
    carriedOver?: true;
    adjusted?: true;
    _all?: true;
};
export type LeaveBalanceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaveBalanceWhereInput;
    orderBy?: Prisma.LeaveBalanceOrderByWithRelationInput | Prisma.LeaveBalanceOrderByWithRelationInput[];
    cursor?: Prisma.LeaveBalanceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LeaveBalanceCountAggregateInputType;
    _avg?: LeaveBalanceAvgAggregateInputType;
    _sum?: LeaveBalanceSumAggregateInputType;
    _min?: LeaveBalanceMinAggregateInputType;
    _max?: LeaveBalanceMaxAggregateInputType;
};
export type GetLeaveBalanceAggregateType<T extends LeaveBalanceAggregateArgs> = {
    [P in keyof T & keyof AggregateLeaveBalance]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLeaveBalance[P]> : Prisma.GetScalarType<T[P], AggregateLeaveBalance[P]>;
};
export type LeaveBalanceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaveBalanceWhereInput;
    orderBy?: Prisma.LeaveBalanceOrderByWithAggregationInput | Prisma.LeaveBalanceOrderByWithAggregationInput[];
    by: Prisma.LeaveBalanceScalarFieldEnum[] | Prisma.LeaveBalanceScalarFieldEnum;
    having?: Prisma.LeaveBalanceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LeaveBalanceCountAggregateInputType | true;
    _avg?: LeaveBalanceAvgAggregateInputType;
    _sum?: LeaveBalanceSumAggregateInputType;
    _min?: LeaveBalanceMinAggregateInputType;
    _max?: LeaveBalanceMaxAggregateInputType;
};
export type LeaveBalanceGroupByOutputType = {
    id: string;
    organizationId: string;
    employeeId: string;
    leaveTypeId: string;
    year: number;
    allocated: runtime.Decimal;
    used: runtime.Decimal;
    pending: runtime.Decimal;
    carriedOver: runtime.Decimal;
    adjusted: runtime.Decimal;
    _count: LeaveBalanceCountAggregateOutputType | null;
    _avg: LeaveBalanceAvgAggregateOutputType | null;
    _sum: LeaveBalanceSumAggregateOutputType | null;
    _min: LeaveBalanceMinAggregateOutputType | null;
    _max: LeaveBalanceMaxAggregateOutputType | null;
};
export type GetLeaveBalanceGroupByPayload<T extends LeaveBalanceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LeaveBalanceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LeaveBalanceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LeaveBalanceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LeaveBalanceGroupByOutputType[P]>;
}>>;
export type LeaveBalanceWhereInput = {
    AND?: Prisma.LeaveBalanceWhereInput | Prisma.LeaveBalanceWhereInput[];
    OR?: Prisma.LeaveBalanceWhereInput[];
    NOT?: Prisma.LeaveBalanceWhereInput | Prisma.LeaveBalanceWhereInput[];
    id?: Prisma.UuidFilter<"LeaveBalance"> | string;
    organizationId?: Prisma.UuidFilter<"LeaveBalance"> | string;
    employeeId?: Prisma.UuidFilter<"LeaveBalance"> | string;
    leaveTypeId?: Prisma.UuidFilter<"LeaveBalance"> | string;
    year?: Prisma.IntFilter<"LeaveBalance"> | number;
    allocated?: Prisma.DecimalFilter<"LeaveBalance"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    used?: Prisma.DecimalFilter<"LeaveBalance"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    pending?: Prisma.DecimalFilter<"LeaveBalance"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    carriedOver?: Prisma.DecimalFilter<"LeaveBalance"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjusted?: Prisma.DecimalFilter<"LeaveBalance"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
    leaveType?: Prisma.XOR<Prisma.LeaveTypeScalarRelationFilter, Prisma.LeaveTypeWhereInput>;
};
export type LeaveBalanceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    leaveTypeId?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    allocated?: Prisma.SortOrder;
    used?: Prisma.SortOrder;
    pending?: Prisma.SortOrder;
    carriedOver?: Prisma.SortOrder;
    adjusted?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    employee?: Prisma.EmployeeOrderByWithRelationInput;
    leaveType?: Prisma.LeaveTypeOrderByWithRelationInput;
};
export type LeaveBalanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    employeeId_leaveTypeId_year?: Prisma.LeaveBalanceEmployeeIdLeaveTypeIdYearCompoundUniqueInput;
    AND?: Prisma.LeaveBalanceWhereInput | Prisma.LeaveBalanceWhereInput[];
    OR?: Prisma.LeaveBalanceWhereInput[];
    NOT?: Prisma.LeaveBalanceWhereInput | Prisma.LeaveBalanceWhereInput[];
    organizationId?: Prisma.UuidFilter<"LeaveBalance"> | string;
    employeeId?: Prisma.UuidFilter<"LeaveBalance"> | string;
    leaveTypeId?: Prisma.UuidFilter<"LeaveBalance"> | string;
    year?: Prisma.IntFilter<"LeaveBalance"> | number;
    allocated?: Prisma.DecimalFilter<"LeaveBalance"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    used?: Prisma.DecimalFilter<"LeaveBalance"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    pending?: Prisma.DecimalFilter<"LeaveBalance"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    carriedOver?: Prisma.DecimalFilter<"LeaveBalance"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjusted?: Prisma.DecimalFilter<"LeaveBalance"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
    leaveType?: Prisma.XOR<Prisma.LeaveTypeScalarRelationFilter, Prisma.LeaveTypeWhereInput>;
}, "id" | "employeeId_leaveTypeId_year">;
export type LeaveBalanceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    leaveTypeId?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    allocated?: Prisma.SortOrder;
    used?: Prisma.SortOrder;
    pending?: Prisma.SortOrder;
    carriedOver?: Prisma.SortOrder;
    adjusted?: Prisma.SortOrder;
    _count?: Prisma.LeaveBalanceCountOrderByAggregateInput;
    _avg?: Prisma.LeaveBalanceAvgOrderByAggregateInput;
    _max?: Prisma.LeaveBalanceMaxOrderByAggregateInput;
    _min?: Prisma.LeaveBalanceMinOrderByAggregateInput;
    _sum?: Prisma.LeaveBalanceSumOrderByAggregateInput;
};
export type LeaveBalanceScalarWhereWithAggregatesInput = {
    AND?: Prisma.LeaveBalanceScalarWhereWithAggregatesInput | Prisma.LeaveBalanceScalarWhereWithAggregatesInput[];
    OR?: Prisma.LeaveBalanceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LeaveBalanceScalarWhereWithAggregatesInput | Prisma.LeaveBalanceScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"LeaveBalance"> | string;
    organizationId?: Prisma.UuidWithAggregatesFilter<"LeaveBalance"> | string;
    employeeId?: Prisma.UuidWithAggregatesFilter<"LeaveBalance"> | string;
    leaveTypeId?: Prisma.UuidWithAggregatesFilter<"LeaveBalance"> | string;
    year?: Prisma.IntWithAggregatesFilter<"LeaveBalance"> | number;
    allocated?: Prisma.DecimalWithAggregatesFilter<"LeaveBalance"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    used?: Prisma.DecimalWithAggregatesFilter<"LeaveBalance"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    pending?: Prisma.DecimalWithAggregatesFilter<"LeaveBalance"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    carriedOver?: Prisma.DecimalWithAggregatesFilter<"LeaveBalance"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjusted?: Prisma.DecimalWithAggregatesFilter<"LeaveBalance"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type LeaveBalanceCreateInput = {
    id?: string;
    year: number;
    allocated?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    used?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    pending?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    carriedOver?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjusted?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutLeaveBalancesInput;
    employee: Prisma.EmployeeCreateNestedOneWithoutLeaveBalancesInput;
    leaveType: Prisma.LeaveTypeCreateNestedOneWithoutBalancesInput;
};
export type LeaveBalanceUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    employeeId: string;
    leaveTypeId: string;
    year: number;
    allocated?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    used?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    pending?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    carriedOver?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjusted?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type LeaveBalanceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    allocated?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    used?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    pending?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    carriedOver?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjusted?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutLeaveBalancesNestedInput;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutLeaveBalancesNestedInput;
    leaveType?: Prisma.LeaveTypeUpdateOneRequiredWithoutBalancesNestedInput;
};
export type LeaveBalanceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    leaveTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    allocated?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    used?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    pending?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    carriedOver?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjusted?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type LeaveBalanceCreateManyInput = {
    id?: string;
    organizationId: string;
    employeeId: string;
    leaveTypeId: string;
    year: number;
    allocated?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    used?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    pending?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    carriedOver?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjusted?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type LeaveBalanceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    allocated?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    used?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    pending?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    carriedOver?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjusted?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type LeaveBalanceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    leaveTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    allocated?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    used?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    pending?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    carriedOver?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjusted?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type LeaveBalanceListRelationFilter = {
    every?: Prisma.LeaveBalanceWhereInput;
    some?: Prisma.LeaveBalanceWhereInput;
    none?: Prisma.LeaveBalanceWhereInput;
};
export type LeaveBalanceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LeaveBalanceEmployeeIdLeaveTypeIdYearCompoundUniqueInput = {
    employeeId: string;
    leaveTypeId: string;
    year: number;
};
export type LeaveBalanceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    leaveTypeId?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    allocated?: Prisma.SortOrder;
    used?: Prisma.SortOrder;
    pending?: Prisma.SortOrder;
    carriedOver?: Prisma.SortOrder;
    adjusted?: Prisma.SortOrder;
};
export type LeaveBalanceAvgOrderByAggregateInput = {
    year?: Prisma.SortOrder;
    allocated?: Prisma.SortOrder;
    used?: Prisma.SortOrder;
    pending?: Prisma.SortOrder;
    carriedOver?: Prisma.SortOrder;
    adjusted?: Prisma.SortOrder;
};
export type LeaveBalanceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    leaveTypeId?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    allocated?: Prisma.SortOrder;
    used?: Prisma.SortOrder;
    pending?: Prisma.SortOrder;
    carriedOver?: Prisma.SortOrder;
    adjusted?: Prisma.SortOrder;
};
export type LeaveBalanceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    leaveTypeId?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    allocated?: Prisma.SortOrder;
    used?: Prisma.SortOrder;
    pending?: Prisma.SortOrder;
    carriedOver?: Prisma.SortOrder;
    adjusted?: Prisma.SortOrder;
};
export type LeaveBalanceSumOrderByAggregateInput = {
    year?: Prisma.SortOrder;
    allocated?: Prisma.SortOrder;
    used?: Prisma.SortOrder;
    pending?: Prisma.SortOrder;
    carriedOver?: Prisma.SortOrder;
    adjusted?: Prisma.SortOrder;
};
export type LeaveBalanceCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.LeaveBalanceCreateWithoutOrganizationInput, Prisma.LeaveBalanceUncheckedCreateWithoutOrganizationInput> | Prisma.LeaveBalanceCreateWithoutOrganizationInput[] | Prisma.LeaveBalanceUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.LeaveBalanceCreateOrConnectWithoutOrganizationInput | Prisma.LeaveBalanceCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.LeaveBalanceCreateManyOrganizationInputEnvelope;
    connect?: Prisma.LeaveBalanceWhereUniqueInput | Prisma.LeaveBalanceWhereUniqueInput[];
};
export type LeaveBalanceUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.LeaveBalanceCreateWithoutOrganizationInput, Prisma.LeaveBalanceUncheckedCreateWithoutOrganizationInput> | Prisma.LeaveBalanceCreateWithoutOrganizationInput[] | Prisma.LeaveBalanceUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.LeaveBalanceCreateOrConnectWithoutOrganizationInput | Prisma.LeaveBalanceCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.LeaveBalanceCreateManyOrganizationInputEnvelope;
    connect?: Prisma.LeaveBalanceWhereUniqueInput | Prisma.LeaveBalanceWhereUniqueInput[];
};
export type LeaveBalanceUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveBalanceCreateWithoutOrganizationInput, Prisma.LeaveBalanceUncheckedCreateWithoutOrganizationInput> | Prisma.LeaveBalanceCreateWithoutOrganizationInput[] | Prisma.LeaveBalanceUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.LeaveBalanceCreateOrConnectWithoutOrganizationInput | Prisma.LeaveBalanceCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.LeaveBalanceUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.LeaveBalanceUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.LeaveBalanceCreateManyOrganizationInputEnvelope;
    set?: Prisma.LeaveBalanceWhereUniqueInput | Prisma.LeaveBalanceWhereUniqueInput[];
    disconnect?: Prisma.LeaveBalanceWhereUniqueInput | Prisma.LeaveBalanceWhereUniqueInput[];
    delete?: Prisma.LeaveBalanceWhereUniqueInput | Prisma.LeaveBalanceWhereUniqueInput[];
    connect?: Prisma.LeaveBalanceWhereUniqueInput | Prisma.LeaveBalanceWhereUniqueInput[];
    update?: Prisma.LeaveBalanceUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.LeaveBalanceUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.LeaveBalanceUpdateManyWithWhereWithoutOrganizationInput | Prisma.LeaveBalanceUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.LeaveBalanceScalarWhereInput | Prisma.LeaveBalanceScalarWhereInput[];
};
export type LeaveBalanceUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveBalanceCreateWithoutOrganizationInput, Prisma.LeaveBalanceUncheckedCreateWithoutOrganizationInput> | Prisma.LeaveBalanceCreateWithoutOrganizationInput[] | Prisma.LeaveBalanceUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.LeaveBalanceCreateOrConnectWithoutOrganizationInput | Prisma.LeaveBalanceCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.LeaveBalanceUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.LeaveBalanceUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.LeaveBalanceCreateManyOrganizationInputEnvelope;
    set?: Prisma.LeaveBalanceWhereUniqueInput | Prisma.LeaveBalanceWhereUniqueInput[];
    disconnect?: Prisma.LeaveBalanceWhereUniqueInput | Prisma.LeaveBalanceWhereUniqueInput[];
    delete?: Prisma.LeaveBalanceWhereUniqueInput | Prisma.LeaveBalanceWhereUniqueInput[];
    connect?: Prisma.LeaveBalanceWhereUniqueInput | Prisma.LeaveBalanceWhereUniqueInput[];
    update?: Prisma.LeaveBalanceUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.LeaveBalanceUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.LeaveBalanceUpdateManyWithWhereWithoutOrganizationInput | Prisma.LeaveBalanceUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.LeaveBalanceScalarWhereInput | Prisma.LeaveBalanceScalarWhereInput[];
};
export type LeaveBalanceCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.LeaveBalanceCreateWithoutEmployeeInput, Prisma.LeaveBalanceUncheckedCreateWithoutEmployeeInput> | Prisma.LeaveBalanceCreateWithoutEmployeeInput[] | Prisma.LeaveBalanceUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.LeaveBalanceCreateOrConnectWithoutEmployeeInput | Prisma.LeaveBalanceCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.LeaveBalanceCreateManyEmployeeInputEnvelope;
    connect?: Prisma.LeaveBalanceWhereUniqueInput | Prisma.LeaveBalanceWhereUniqueInput[];
};
export type LeaveBalanceUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.LeaveBalanceCreateWithoutEmployeeInput, Prisma.LeaveBalanceUncheckedCreateWithoutEmployeeInput> | Prisma.LeaveBalanceCreateWithoutEmployeeInput[] | Prisma.LeaveBalanceUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.LeaveBalanceCreateOrConnectWithoutEmployeeInput | Prisma.LeaveBalanceCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.LeaveBalanceCreateManyEmployeeInputEnvelope;
    connect?: Prisma.LeaveBalanceWhereUniqueInput | Prisma.LeaveBalanceWhereUniqueInput[];
};
export type LeaveBalanceUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveBalanceCreateWithoutEmployeeInput, Prisma.LeaveBalanceUncheckedCreateWithoutEmployeeInput> | Prisma.LeaveBalanceCreateWithoutEmployeeInput[] | Prisma.LeaveBalanceUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.LeaveBalanceCreateOrConnectWithoutEmployeeInput | Prisma.LeaveBalanceCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.LeaveBalanceUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.LeaveBalanceUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.LeaveBalanceCreateManyEmployeeInputEnvelope;
    set?: Prisma.LeaveBalanceWhereUniqueInput | Prisma.LeaveBalanceWhereUniqueInput[];
    disconnect?: Prisma.LeaveBalanceWhereUniqueInput | Prisma.LeaveBalanceWhereUniqueInput[];
    delete?: Prisma.LeaveBalanceWhereUniqueInput | Prisma.LeaveBalanceWhereUniqueInput[];
    connect?: Prisma.LeaveBalanceWhereUniqueInput | Prisma.LeaveBalanceWhereUniqueInput[];
    update?: Prisma.LeaveBalanceUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.LeaveBalanceUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.LeaveBalanceUpdateManyWithWhereWithoutEmployeeInput | Prisma.LeaveBalanceUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.LeaveBalanceScalarWhereInput | Prisma.LeaveBalanceScalarWhereInput[];
};
export type LeaveBalanceUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveBalanceCreateWithoutEmployeeInput, Prisma.LeaveBalanceUncheckedCreateWithoutEmployeeInput> | Prisma.LeaveBalanceCreateWithoutEmployeeInput[] | Prisma.LeaveBalanceUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.LeaveBalanceCreateOrConnectWithoutEmployeeInput | Prisma.LeaveBalanceCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.LeaveBalanceUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.LeaveBalanceUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.LeaveBalanceCreateManyEmployeeInputEnvelope;
    set?: Prisma.LeaveBalanceWhereUniqueInput | Prisma.LeaveBalanceWhereUniqueInput[];
    disconnect?: Prisma.LeaveBalanceWhereUniqueInput | Prisma.LeaveBalanceWhereUniqueInput[];
    delete?: Prisma.LeaveBalanceWhereUniqueInput | Prisma.LeaveBalanceWhereUniqueInput[];
    connect?: Prisma.LeaveBalanceWhereUniqueInput | Prisma.LeaveBalanceWhereUniqueInput[];
    update?: Prisma.LeaveBalanceUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.LeaveBalanceUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.LeaveBalanceUpdateManyWithWhereWithoutEmployeeInput | Prisma.LeaveBalanceUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.LeaveBalanceScalarWhereInput | Prisma.LeaveBalanceScalarWhereInput[];
};
export type LeaveBalanceCreateNestedManyWithoutLeaveTypeInput = {
    create?: Prisma.XOR<Prisma.LeaveBalanceCreateWithoutLeaveTypeInput, Prisma.LeaveBalanceUncheckedCreateWithoutLeaveTypeInput> | Prisma.LeaveBalanceCreateWithoutLeaveTypeInput[] | Prisma.LeaveBalanceUncheckedCreateWithoutLeaveTypeInput[];
    connectOrCreate?: Prisma.LeaveBalanceCreateOrConnectWithoutLeaveTypeInput | Prisma.LeaveBalanceCreateOrConnectWithoutLeaveTypeInput[];
    createMany?: Prisma.LeaveBalanceCreateManyLeaveTypeInputEnvelope;
    connect?: Prisma.LeaveBalanceWhereUniqueInput | Prisma.LeaveBalanceWhereUniqueInput[];
};
export type LeaveBalanceUncheckedCreateNestedManyWithoutLeaveTypeInput = {
    create?: Prisma.XOR<Prisma.LeaveBalanceCreateWithoutLeaveTypeInput, Prisma.LeaveBalanceUncheckedCreateWithoutLeaveTypeInput> | Prisma.LeaveBalanceCreateWithoutLeaveTypeInput[] | Prisma.LeaveBalanceUncheckedCreateWithoutLeaveTypeInput[];
    connectOrCreate?: Prisma.LeaveBalanceCreateOrConnectWithoutLeaveTypeInput | Prisma.LeaveBalanceCreateOrConnectWithoutLeaveTypeInput[];
    createMany?: Prisma.LeaveBalanceCreateManyLeaveTypeInputEnvelope;
    connect?: Prisma.LeaveBalanceWhereUniqueInput | Prisma.LeaveBalanceWhereUniqueInput[];
};
export type LeaveBalanceUpdateManyWithoutLeaveTypeNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveBalanceCreateWithoutLeaveTypeInput, Prisma.LeaveBalanceUncheckedCreateWithoutLeaveTypeInput> | Prisma.LeaveBalanceCreateWithoutLeaveTypeInput[] | Prisma.LeaveBalanceUncheckedCreateWithoutLeaveTypeInput[];
    connectOrCreate?: Prisma.LeaveBalanceCreateOrConnectWithoutLeaveTypeInput | Prisma.LeaveBalanceCreateOrConnectWithoutLeaveTypeInput[];
    upsert?: Prisma.LeaveBalanceUpsertWithWhereUniqueWithoutLeaveTypeInput | Prisma.LeaveBalanceUpsertWithWhereUniqueWithoutLeaveTypeInput[];
    createMany?: Prisma.LeaveBalanceCreateManyLeaveTypeInputEnvelope;
    set?: Prisma.LeaveBalanceWhereUniqueInput | Prisma.LeaveBalanceWhereUniqueInput[];
    disconnect?: Prisma.LeaveBalanceWhereUniqueInput | Prisma.LeaveBalanceWhereUniqueInput[];
    delete?: Prisma.LeaveBalanceWhereUniqueInput | Prisma.LeaveBalanceWhereUniqueInput[];
    connect?: Prisma.LeaveBalanceWhereUniqueInput | Prisma.LeaveBalanceWhereUniqueInput[];
    update?: Prisma.LeaveBalanceUpdateWithWhereUniqueWithoutLeaveTypeInput | Prisma.LeaveBalanceUpdateWithWhereUniqueWithoutLeaveTypeInput[];
    updateMany?: Prisma.LeaveBalanceUpdateManyWithWhereWithoutLeaveTypeInput | Prisma.LeaveBalanceUpdateManyWithWhereWithoutLeaveTypeInput[];
    deleteMany?: Prisma.LeaveBalanceScalarWhereInput | Prisma.LeaveBalanceScalarWhereInput[];
};
export type LeaveBalanceUncheckedUpdateManyWithoutLeaveTypeNestedInput = {
    create?: Prisma.XOR<Prisma.LeaveBalanceCreateWithoutLeaveTypeInput, Prisma.LeaveBalanceUncheckedCreateWithoutLeaveTypeInput> | Prisma.LeaveBalanceCreateWithoutLeaveTypeInput[] | Prisma.LeaveBalanceUncheckedCreateWithoutLeaveTypeInput[];
    connectOrCreate?: Prisma.LeaveBalanceCreateOrConnectWithoutLeaveTypeInput | Prisma.LeaveBalanceCreateOrConnectWithoutLeaveTypeInput[];
    upsert?: Prisma.LeaveBalanceUpsertWithWhereUniqueWithoutLeaveTypeInput | Prisma.LeaveBalanceUpsertWithWhereUniqueWithoutLeaveTypeInput[];
    createMany?: Prisma.LeaveBalanceCreateManyLeaveTypeInputEnvelope;
    set?: Prisma.LeaveBalanceWhereUniqueInput | Prisma.LeaveBalanceWhereUniqueInput[];
    disconnect?: Prisma.LeaveBalanceWhereUniqueInput | Prisma.LeaveBalanceWhereUniqueInput[];
    delete?: Prisma.LeaveBalanceWhereUniqueInput | Prisma.LeaveBalanceWhereUniqueInput[];
    connect?: Prisma.LeaveBalanceWhereUniqueInput | Prisma.LeaveBalanceWhereUniqueInput[];
    update?: Prisma.LeaveBalanceUpdateWithWhereUniqueWithoutLeaveTypeInput | Prisma.LeaveBalanceUpdateWithWhereUniqueWithoutLeaveTypeInput[];
    updateMany?: Prisma.LeaveBalanceUpdateManyWithWhereWithoutLeaveTypeInput | Prisma.LeaveBalanceUpdateManyWithWhereWithoutLeaveTypeInput[];
    deleteMany?: Prisma.LeaveBalanceScalarWhereInput | Prisma.LeaveBalanceScalarWhereInput[];
};
export type LeaveBalanceCreateWithoutOrganizationInput = {
    id?: string;
    year: number;
    allocated?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    used?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    pending?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    carriedOver?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjusted?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutLeaveBalancesInput;
    leaveType: Prisma.LeaveTypeCreateNestedOneWithoutBalancesInput;
};
export type LeaveBalanceUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    employeeId: string;
    leaveTypeId: string;
    year: number;
    allocated?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    used?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    pending?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    carriedOver?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjusted?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type LeaveBalanceCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.LeaveBalanceWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaveBalanceCreateWithoutOrganizationInput, Prisma.LeaveBalanceUncheckedCreateWithoutOrganizationInput>;
};
export type LeaveBalanceCreateManyOrganizationInputEnvelope = {
    data: Prisma.LeaveBalanceCreateManyOrganizationInput | Prisma.LeaveBalanceCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type LeaveBalanceUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.LeaveBalanceWhereUniqueInput;
    update: Prisma.XOR<Prisma.LeaveBalanceUpdateWithoutOrganizationInput, Prisma.LeaveBalanceUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.LeaveBalanceCreateWithoutOrganizationInput, Prisma.LeaveBalanceUncheckedCreateWithoutOrganizationInput>;
};
export type LeaveBalanceUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.LeaveBalanceWhereUniqueInput;
    data: Prisma.XOR<Prisma.LeaveBalanceUpdateWithoutOrganizationInput, Prisma.LeaveBalanceUncheckedUpdateWithoutOrganizationInput>;
};
export type LeaveBalanceUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.LeaveBalanceScalarWhereInput;
    data: Prisma.XOR<Prisma.LeaveBalanceUpdateManyMutationInput, Prisma.LeaveBalanceUncheckedUpdateManyWithoutOrganizationInput>;
};
export type LeaveBalanceScalarWhereInput = {
    AND?: Prisma.LeaveBalanceScalarWhereInput | Prisma.LeaveBalanceScalarWhereInput[];
    OR?: Prisma.LeaveBalanceScalarWhereInput[];
    NOT?: Prisma.LeaveBalanceScalarWhereInput | Prisma.LeaveBalanceScalarWhereInput[];
    id?: Prisma.UuidFilter<"LeaveBalance"> | string;
    organizationId?: Prisma.UuidFilter<"LeaveBalance"> | string;
    employeeId?: Prisma.UuidFilter<"LeaveBalance"> | string;
    leaveTypeId?: Prisma.UuidFilter<"LeaveBalance"> | string;
    year?: Prisma.IntFilter<"LeaveBalance"> | number;
    allocated?: Prisma.DecimalFilter<"LeaveBalance"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    used?: Prisma.DecimalFilter<"LeaveBalance"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    pending?: Prisma.DecimalFilter<"LeaveBalance"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    carriedOver?: Prisma.DecimalFilter<"LeaveBalance"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjusted?: Prisma.DecimalFilter<"LeaveBalance"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type LeaveBalanceCreateWithoutEmployeeInput = {
    id?: string;
    year: number;
    allocated?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    used?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    pending?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    carriedOver?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjusted?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutLeaveBalancesInput;
    leaveType: Prisma.LeaveTypeCreateNestedOneWithoutBalancesInput;
};
export type LeaveBalanceUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    organizationId: string;
    leaveTypeId: string;
    year: number;
    allocated?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    used?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    pending?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    carriedOver?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjusted?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type LeaveBalanceCreateOrConnectWithoutEmployeeInput = {
    where: Prisma.LeaveBalanceWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaveBalanceCreateWithoutEmployeeInput, Prisma.LeaveBalanceUncheckedCreateWithoutEmployeeInput>;
};
export type LeaveBalanceCreateManyEmployeeInputEnvelope = {
    data: Prisma.LeaveBalanceCreateManyEmployeeInput | Prisma.LeaveBalanceCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
};
export type LeaveBalanceUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.LeaveBalanceWhereUniqueInput;
    update: Prisma.XOR<Prisma.LeaveBalanceUpdateWithoutEmployeeInput, Prisma.LeaveBalanceUncheckedUpdateWithoutEmployeeInput>;
    create: Prisma.XOR<Prisma.LeaveBalanceCreateWithoutEmployeeInput, Prisma.LeaveBalanceUncheckedCreateWithoutEmployeeInput>;
};
export type LeaveBalanceUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.LeaveBalanceWhereUniqueInput;
    data: Prisma.XOR<Prisma.LeaveBalanceUpdateWithoutEmployeeInput, Prisma.LeaveBalanceUncheckedUpdateWithoutEmployeeInput>;
};
export type LeaveBalanceUpdateManyWithWhereWithoutEmployeeInput = {
    where: Prisma.LeaveBalanceScalarWhereInput;
    data: Prisma.XOR<Prisma.LeaveBalanceUpdateManyMutationInput, Prisma.LeaveBalanceUncheckedUpdateManyWithoutEmployeeInput>;
};
export type LeaveBalanceCreateWithoutLeaveTypeInput = {
    id?: string;
    year: number;
    allocated?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    used?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    pending?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    carriedOver?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjusted?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutLeaveBalancesInput;
    employee: Prisma.EmployeeCreateNestedOneWithoutLeaveBalancesInput;
};
export type LeaveBalanceUncheckedCreateWithoutLeaveTypeInput = {
    id?: string;
    organizationId: string;
    employeeId: string;
    year: number;
    allocated?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    used?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    pending?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    carriedOver?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjusted?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type LeaveBalanceCreateOrConnectWithoutLeaveTypeInput = {
    where: Prisma.LeaveBalanceWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaveBalanceCreateWithoutLeaveTypeInput, Prisma.LeaveBalanceUncheckedCreateWithoutLeaveTypeInput>;
};
export type LeaveBalanceCreateManyLeaveTypeInputEnvelope = {
    data: Prisma.LeaveBalanceCreateManyLeaveTypeInput | Prisma.LeaveBalanceCreateManyLeaveTypeInput[];
    skipDuplicates?: boolean;
};
export type LeaveBalanceUpsertWithWhereUniqueWithoutLeaveTypeInput = {
    where: Prisma.LeaveBalanceWhereUniqueInput;
    update: Prisma.XOR<Prisma.LeaveBalanceUpdateWithoutLeaveTypeInput, Prisma.LeaveBalanceUncheckedUpdateWithoutLeaveTypeInput>;
    create: Prisma.XOR<Prisma.LeaveBalanceCreateWithoutLeaveTypeInput, Prisma.LeaveBalanceUncheckedCreateWithoutLeaveTypeInput>;
};
export type LeaveBalanceUpdateWithWhereUniqueWithoutLeaveTypeInput = {
    where: Prisma.LeaveBalanceWhereUniqueInput;
    data: Prisma.XOR<Prisma.LeaveBalanceUpdateWithoutLeaveTypeInput, Prisma.LeaveBalanceUncheckedUpdateWithoutLeaveTypeInput>;
};
export type LeaveBalanceUpdateManyWithWhereWithoutLeaveTypeInput = {
    where: Prisma.LeaveBalanceScalarWhereInput;
    data: Prisma.XOR<Prisma.LeaveBalanceUpdateManyMutationInput, Prisma.LeaveBalanceUncheckedUpdateManyWithoutLeaveTypeInput>;
};
export type LeaveBalanceCreateManyOrganizationInput = {
    id?: string;
    employeeId: string;
    leaveTypeId: string;
    year: number;
    allocated?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    used?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    pending?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    carriedOver?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjusted?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type LeaveBalanceUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    allocated?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    used?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    pending?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    carriedOver?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjusted?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutLeaveBalancesNestedInput;
    leaveType?: Prisma.LeaveTypeUpdateOneRequiredWithoutBalancesNestedInput;
};
export type LeaveBalanceUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    leaveTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    allocated?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    used?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    pending?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    carriedOver?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjusted?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type LeaveBalanceUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    leaveTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    allocated?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    used?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    pending?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    carriedOver?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjusted?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type LeaveBalanceCreateManyEmployeeInput = {
    id?: string;
    organizationId: string;
    leaveTypeId: string;
    year: number;
    allocated?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    used?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    pending?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    carriedOver?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjusted?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type LeaveBalanceUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    allocated?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    used?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    pending?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    carriedOver?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjusted?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutLeaveBalancesNestedInput;
    leaveType?: Prisma.LeaveTypeUpdateOneRequiredWithoutBalancesNestedInput;
};
export type LeaveBalanceUncheckedUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    leaveTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    allocated?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    used?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    pending?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    carriedOver?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjusted?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type LeaveBalanceUncheckedUpdateManyWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    leaveTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    allocated?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    used?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    pending?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    carriedOver?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjusted?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type LeaveBalanceCreateManyLeaveTypeInput = {
    id?: string;
    organizationId: string;
    employeeId: string;
    year: number;
    allocated?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    used?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    pending?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    carriedOver?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjusted?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type LeaveBalanceUpdateWithoutLeaveTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    allocated?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    used?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    pending?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    carriedOver?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjusted?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutLeaveBalancesNestedInput;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutLeaveBalancesNestedInput;
};
export type LeaveBalanceUncheckedUpdateWithoutLeaveTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    allocated?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    used?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    pending?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    carriedOver?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjusted?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type LeaveBalanceUncheckedUpdateManyWithoutLeaveTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    allocated?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    used?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    pending?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    carriedOver?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    adjusted?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type LeaveBalanceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    employeeId?: boolean;
    leaveTypeId?: boolean;
    year?: boolean;
    allocated?: boolean;
    used?: boolean;
    pending?: boolean;
    carriedOver?: boolean;
    adjusted?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    leaveType?: boolean | Prisma.LeaveTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["leaveBalance"]>;
export type LeaveBalanceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    employeeId?: boolean;
    leaveTypeId?: boolean;
    year?: boolean;
    allocated?: boolean;
    used?: boolean;
    pending?: boolean;
    carriedOver?: boolean;
    adjusted?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    leaveType?: boolean | Prisma.LeaveTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["leaveBalance"]>;
export type LeaveBalanceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    employeeId?: boolean;
    leaveTypeId?: boolean;
    year?: boolean;
    allocated?: boolean;
    used?: boolean;
    pending?: boolean;
    carriedOver?: boolean;
    adjusted?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    leaveType?: boolean | Prisma.LeaveTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["leaveBalance"]>;
export type LeaveBalanceSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    employeeId?: boolean;
    leaveTypeId?: boolean;
    year?: boolean;
    allocated?: boolean;
    used?: boolean;
    pending?: boolean;
    carriedOver?: boolean;
    adjusted?: boolean;
};
export type LeaveBalanceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "employeeId" | "leaveTypeId" | "year" | "allocated" | "used" | "pending" | "carriedOver" | "adjusted", ExtArgs["result"]["leaveBalance"]>;
export type LeaveBalanceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    leaveType?: boolean | Prisma.LeaveTypeDefaultArgs<ExtArgs>;
};
export type LeaveBalanceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    leaveType?: boolean | Prisma.LeaveTypeDefaultArgs<ExtArgs>;
};
export type LeaveBalanceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    leaveType?: boolean | Prisma.LeaveTypeDefaultArgs<ExtArgs>;
};
export type $LeaveBalancePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LeaveBalance";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        employee: Prisma.$EmployeePayload<ExtArgs>;
        leaveType: Prisma.$LeaveTypePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        employeeId: string;
        leaveTypeId: string;
        year: number;
        allocated: runtime.Decimal;
        used: runtime.Decimal;
        pending: runtime.Decimal;
        carriedOver: runtime.Decimal;
        adjusted: runtime.Decimal;
    }, ExtArgs["result"]["leaveBalance"]>;
    composites: {};
};
export type LeaveBalanceGetPayload<S extends boolean | null | undefined | LeaveBalanceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LeaveBalancePayload, S>;
export type LeaveBalanceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LeaveBalanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LeaveBalanceCountAggregateInputType | true;
};
export interface LeaveBalanceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LeaveBalance'];
        meta: {
            name: 'LeaveBalance';
        };
    };
    findUnique<T extends LeaveBalanceFindUniqueArgs>(args: Prisma.SelectSubset<T, LeaveBalanceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LeaveBalanceClient<runtime.Types.Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LeaveBalanceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LeaveBalanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LeaveBalanceClient<runtime.Types.Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LeaveBalanceFindFirstArgs>(args?: Prisma.SelectSubset<T, LeaveBalanceFindFirstArgs<ExtArgs>>): Prisma.Prisma__LeaveBalanceClient<runtime.Types.Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LeaveBalanceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LeaveBalanceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LeaveBalanceClient<runtime.Types.Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LeaveBalanceFindManyArgs>(args?: Prisma.SelectSubset<T, LeaveBalanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LeaveBalanceCreateArgs>(args: Prisma.SelectSubset<T, LeaveBalanceCreateArgs<ExtArgs>>): Prisma.Prisma__LeaveBalanceClient<runtime.Types.Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LeaveBalanceCreateManyArgs>(args?: Prisma.SelectSubset<T, LeaveBalanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LeaveBalanceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LeaveBalanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LeaveBalanceDeleteArgs>(args: Prisma.SelectSubset<T, LeaveBalanceDeleteArgs<ExtArgs>>): Prisma.Prisma__LeaveBalanceClient<runtime.Types.Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LeaveBalanceUpdateArgs>(args: Prisma.SelectSubset<T, LeaveBalanceUpdateArgs<ExtArgs>>): Prisma.Prisma__LeaveBalanceClient<runtime.Types.Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LeaveBalanceDeleteManyArgs>(args?: Prisma.SelectSubset<T, LeaveBalanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LeaveBalanceUpdateManyArgs>(args: Prisma.SelectSubset<T, LeaveBalanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LeaveBalanceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LeaveBalanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LeaveBalanceUpsertArgs>(args: Prisma.SelectSubset<T, LeaveBalanceUpsertArgs<ExtArgs>>): Prisma.Prisma__LeaveBalanceClient<runtime.Types.Result.GetResult<Prisma.$LeaveBalancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LeaveBalanceCountArgs>(args?: Prisma.Subset<T, LeaveBalanceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LeaveBalanceCountAggregateOutputType> : number>;
    aggregate<T extends LeaveBalanceAggregateArgs>(args: Prisma.Subset<T, LeaveBalanceAggregateArgs>): Prisma.PrismaPromise<GetLeaveBalanceAggregateType<T>>;
    groupBy<T extends LeaveBalanceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LeaveBalanceGroupByArgs['orderBy'];
    } : {
        orderBy?: LeaveBalanceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LeaveBalanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaveBalanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LeaveBalanceFieldRefs;
}
export interface Prisma__LeaveBalanceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    employee<T extends Prisma.EmployeeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmployeeDefaultArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    leaveType<T extends Prisma.LeaveTypeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LeaveTypeDefaultArgs<ExtArgs>>): Prisma.Prisma__LeaveTypeClient<runtime.Types.Result.GetResult<Prisma.$LeaveTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LeaveBalanceFieldRefs {
    readonly id: Prisma.FieldRef<"LeaveBalance", 'String'>;
    readonly organizationId: Prisma.FieldRef<"LeaveBalance", 'String'>;
    readonly employeeId: Prisma.FieldRef<"LeaveBalance", 'String'>;
    readonly leaveTypeId: Prisma.FieldRef<"LeaveBalance", 'String'>;
    readonly year: Prisma.FieldRef<"LeaveBalance", 'Int'>;
    readonly allocated: Prisma.FieldRef<"LeaveBalance", 'Decimal'>;
    readonly used: Prisma.FieldRef<"LeaveBalance", 'Decimal'>;
    readonly pending: Prisma.FieldRef<"LeaveBalance", 'Decimal'>;
    readonly carriedOver: Prisma.FieldRef<"LeaveBalance", 'Decimal'>;
    readonly adjusted: Prisma.FieldRef<"LeaveBalance", 'Decimal'>;
}
export type LeaveBalanceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveBalanceSelect<ExtArgs> | null;
    omit?: Prisma.LeaveBalanceOmit<ExtArgs> | null;
    include?: Prisma.LeaveBalanceInclude<ExtArgs> | null;
    where: Prisma.LeaveBalanceWhereUniqueInput;
};
export type LeaveBalanceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveBalanceSelect<ExtArgs> | null;
    omit?: Prisma.LeaveBalanceOmit<ExtArgs> | null;
    include?: Prisma.LeaveBalanceInclude<ExtArgs> | null;
    where: Prisma.LeaveBalanceWhereUniqueInput;
};
export type LeaveBalanceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LeaveBalanceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LeaveBalanceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LeaveBalanceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveBalanceSelect<ExtArgs> | null;
    omit?: Prisma.LeaveBalanceOmit<ExtArgs> | null;
    include?: Prisma.LeaveBalanceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeaveBalanceCreateInput, Prisma.LeaveBalanceUncheckedCreateInput>;
};
export type LeaveBalanceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LeaveBalanceCreateManyInput | Prisma.LeaveBalanceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LeaveBalanceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveBalanceSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LeaveBalanceOmit<ExtArgs> | null;
    data: Prisma.LeaveBalanceCreateManyInput | Prisma.LeaveBalanceCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LeaveBalanceIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LeaveBalanceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveBalanceSelect<ExtArgs> | null;
    omit?: Prisma.LeaveBalanceOmit<ExtArgs> | null;
    include?: Prisma.LeaveBalanceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeaveBalanceUpdateInput, Prisma.LeaveBalanceUncheckedUpdateInput>;
    where: Prisma.LeaveBalanceWhereUniqueInput;
};
export type LeaveBalanceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LeaveBalanceUpdateManyMutationInput, Prisma.LeaveBalanceUncheckedUpdateManyInput>;
    where?: Prisma.LeaveBalanceWhereInput;
    limit?: number;
};
export type LeaveBalanceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveBalanceSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LeaveBalanceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeaveBalanceUpdateManyMutationInput, Prisma.LeaveBalanceUncheckedUpdateManyInput>;
    where?: Prisma.LeaveBalanceWhereInput;
    limit?: number;
    include?: Prisma.LeaveBalanceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LeaveBalanceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveBalanceSelect<ExtArgs> | null;
    omit?: Prisma.LeaveBalanceOmit<ExtArgs> | null;
    include?: Prisma.LeaveBalanceInclude<ExtArgs> | null;
    where: Prisma.LeaveBalanceWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaveBalanceCreateInput, Prisma.LeaveBalanceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LeaveBalanceUpdateInput, Prisma.LeaveBalanceUncheckedUpdateInput>;
};
export type LeaveBalanceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveBalanceSelect<ExtArgs> | null;
    omit?: Prisma.LeaveBalanceOmit<ExtArgs> | null;
    include?: Prisma.LeaveBalanceInclude<ExtArgs> | null;
    where: Prisma.LeaveBalanceWhereUniqueInput;
};
export type LeaveBalanceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaveBalanceWhereInput;
    limit?: number;
};
export type LeaveBalanceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaveBalanceSelect<ExtArgs> | null;
    omit?: Prisma.LeaveBalanceOmit<ExtArgs> | null;
    include?: Prisma.LeaveBalanceInclude<ExtArgs> | null;
};
