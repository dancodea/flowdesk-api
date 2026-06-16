import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PayGroupModel = runtime.Types.Result.DefaultSelection<Prisma.$PayGroupPayload>;
export type AggregatePayGroup = {
    _count: PayGroupCountAggregateOutputType | null;
    _avg: PayGroupAvgAggregateOutputType | null;
    _sum: PayGroupSumAggregateOutputType | null;
    _min: PayGroupMinAggregateOutputType | null;
    _max: PayGroupMaxAggregateOutputType | null;
};
export type PayGroupAvgAggregateOutputType = {
    payPeriodStartDay: number | null;
};
export type PayGroupSumAggregateOutputType = {
    payPeriodStartDay: number | null;
};
export type PayGroupMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    name: string | null;
    payFrequency: $Enums.PayFrequency | null;
    firstPayDate: Date | null;
    payPeriodStartDay: number | null;
    createdAt: Date | null;
};
export type PayGroupMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    name: string | null;
    payFrequency: $Enums.PayFrequency | null;
    firstPayDate: Date | null;
    payPeriodStartDay: number | null;
    createdAt: Date | null;
};
export type PayGroupCountAggregateOutputType = {
    id: number;
    organizationId: number;
    name: number;
    payFrequency: number;
    firstPayDate: number;
    payPeriodStartDay: number;
    createdAt: number;
    _all: number;
};
export type PayGroupAvgAggregateInputType = {
    payPeriodStartDay?: true;
};
export type PayGroupSumAggregateInputType = {
    payPeriodStartDay?: true;
};
export type PayGroupMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    payFrequency?: true;
    firstPayDate?: true;
    payPeriodStartDay?: true;
    createdAt?: true;
};
export type PayGroupMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    payFrequency?: true;
    firstPayDate?: true;
    payPeriodStartDay?: true;
    createdAt?: true;
};
export type PayGroupCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    payFrequency?: true;
    firstPayDate?: true;
    payPeriodStartDay?: true;
    createdAt?: true;
    _all?: true;
};
export type PayGroupAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayGroupWhereInput;
    orderBy?: Prisma.PayGroupOrderByWithRelationInput | Prisma.PayGroupOrderByWithRelationInput[];
    cursor?: Prisma.PayGroupWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PayGroupCountAggregateInputType;
    _avg?: PayGroupAvgAggregateInputType;
    _sum?: PayGroupSumAggregateInputType;
    _min?: PayGroupMinAggregateInputType;
    _max?: PayGroupMaxAggregateInputType;
};
export type GetPayGroupAggregateType<T extends PayGroupAggregateArgs> = {
    [P in keyof T & keyof AggregatePayGroup]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePayGroup[P]> : Prisma.GetScalarType<T[P], AggregatePayGroup[P]>;
};
export type PayGroupGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayGroupWhereInput;
    orderBy?: Prisma.PayGroupOrderByWithAggregationInput | Prisma.PayGroupOrderByWithAggregationInput[];
    by: Prisma.PayGroupScalarFieldEnum[] | Prisma.PayGroupScalarFieldEnum;
    having?: Prisma.PayGroupScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PayGroupCountAggregateInputType | true;
    _avg?: PayGroupAvgAggregateInputType;
    _sum?: PayGroupSumAggregateInputType;
    _min?: PayGroupMinAggregateInputType;
    _max?: PayGroupMaxAggregateInputType;
};
export type PayGroupGroupByOutputType = {
    id: string;
    organizationId: string;
    name: string;
    payFrequency: $Enums.PayFrequency;
    firstPayDate: Date | null;
    payPeriodStartDay: number;
    createdAt: Date;
    _count: PayGroupCountAggregateOutputType | null;
    _avg: PayGroupAvgAggregateOutputType | null;
    _sum: PayGroupSumAggregateOutputType | null;
    _min: PayGroupMinAggregateOutputType | null;
    _max: PayGroupMaxAggregateOutputType | null;
};
export type GetPayGroupGroupByPayload<T extends PayGroupGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PayGroupGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PayGroupGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PayGroupGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PayGroupGroupByOutputType[P]>;
}>>;
export type PayGroupWhereInput = {
    AND?: Prisma.PayGroupWhereInput | Prisma.PayGroupWhereInput[];
    OR?: Prisma.PayGroupWhereInput[];
    NOT?: Prisma.PayGroupWhereInput | Prisma.PayGroupWhereInput[];
    id?: Prisma.UuidFilter<"PayGroup"> | string;
    organizationId?: Prisma.UuidFilter<"PayGroup"> | string;
    name?: Prisma.StringFilter<"PayGroup"> | string;
    payFrequency?: Prisma.EnumPayFrequencyFilter<"PayGroup"> | $Enums.PayFrequency;
    firstPayDate?: Prisma.DateTimeNullableFilter<"PayGroup"> | Date | string | null;
    payPeriodStartDay?: Prisma.IntFilter<"PayGroup"> | number;
    createdAt?: Prisma.DateTimeFilter<"PayGroup"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    employees?: Prisma.EmployeeListRelationFilter;
    payRuns?: Prisma.PayRunListRelationFilter;
};
export type PayGroupOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    payFrequency?: Prisma.SortOrder;
    firstPayDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    payPeriodStartDay?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    employees?: Prisma.EmployeeOrderByRelationAggregateInput;
    payRuns?: Prisma.PayRunOrderByRelationAggregateInput;
};
export type PayGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PayGroupWhereInput | Prisma.PayGroupWhereInput[];
    OR?: Prisma.PayGroupWhereInput[];
    NOT?: Prisma.PayGroupWhereInput | Prisma.PayGroupWhereInput[];
    organizationId?: Prisma.UuidFilter<"PayGroup"> | string;
    name?: Prisma.StringFilter<"PayGroup"> | string;
    payFrequency?: Prisma.EnumPayFrequencyFilter<"PayGroup"> | $Enums.PayFrequency;
    firstPayDate?: Prisma.DateTimeNullableFilter<"PayGroup"> | Date | string | null;
    payPeriodStartDay?: Prisma.IntFilter<"PayGroup"> | number;
    createdAt?: Prisma.DateTimeFilter<"PayGroup"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    employees?: Prisma.EmployeeListRelationFilter;
    payRuns?: Prisma.PayRunListRelationFilter;
}, "id">;
export type PayGroupOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    payFrequency?: Prisma.SortOrder;
    firstPayDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    payPeriodStartDay?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PayGroupCountOrderByAggregateInput;
    _avg?: Prisma.PayGroupAvgOrderByAggregateInput;
    _max?: Prisma.PayGroupMaxOrderByAggregateInput;
    _min?: Prisma.PayGroupMinOrderByAggregateInput;
    _sum?: Prisma.PayGroupSumOrderByAggregateInput;
};
export type PayGroupScalarWhereWithAggregatesInput = {
    AND?: Prisma.PayGroupScalarWhereWithAggregatesInput | Prisma.PayGroupScalarWhereWithAggregatesInput[];
    OR?: Prisma.PayGroupScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PayGroupScalarWhereWithAggregatesInput | Prisma.PayGroupScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PayGroup"> | string;
    organizationId?: Prisma.UuidWithAggregatesFilter<"PayGroup"> | string;
    name?: Prisma.StringWithAggregatesFilter<"PayGroup"> | string;
    payFrequency?: Prisma.EnumPayFrequencyWithAggregatesFilter<"PayGroup"> | $Enums.PayFrequency;
    firstPayDate?: Prisma.DateTimeNullableWithAggregatesFilter<"PayGroup"> | Date | string | null;
    payPeriodStartDay?: Prisma.IntWithAggregatesFilter<"PayGroup"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PayGroup"> | Date | string;
};
export type PayGroupCreateInput = {
    id?: string;
    name: string;
    payFrequency?: $Enums.PayFrequency;
    firstPayDate?: Date | string | null;
    payPeriodStartDay?: number;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutPayGroupsInput;
    employees?: Prisma.EmployeeCreateNestedManyWithoutPayGroupInput;
    payRuns?: Prisma.PayRunCreateNestedManyWithoutPayGroupInput;
};
export type PayGroupUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    name: string;
    payFrequency?: $Enums.PayFrequency;
    firstPayDate?: Date | string | null;
    payPeriodStartDay?: number;
    createdAt?: Date | string;
    employees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutPayGroupInput;
    payRuns?: Prisma.PayRunUncheckedCreateNestedManyWithoutPayGroupInput;
};
export type PayGroupUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    payFrequency?: Prisma.EnumPayFrequencyFieldUpdateOperationsInput | $Enums.PayFrequency;
    firstPayDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payPeriodStartDay?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutPayGroupsNestedInput;
    employees?: Prisma.EmployeeUpdateManyWithoutPayGroupNestedInput;
    payRuns?: Prisma.PayRunUpdateManyWithoutPayGroupNestedInput;
};
export type PayGroupUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    payFrequency?: Prisma.EnumPayFrequencyFieldUpdateOperationsInput | $Enums.PayFrequency;
    firstPayDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payPeriodStartDay?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employees?: Prisma.EmployeeUncheckedUpdateManyWithoutPayGroupNestedInput;
    payRuns?: Prisma.PayRunUncheckedUpdateManyWithoutPayGroupNestedInput;
};
export type PayGroupCreateManyInput = {
    id?: string;
    organizationId: string;
    name: string;
    payFrequency?: $Enums.PayFrequency;
    firstPayDate?: Date | string | null;
    payPeriodStartDay?: number;
    createdAt?: Date | string;
};
export type PayGroupUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    payFrequency?: Prisma.EnumPayFrequencyFieldUpdateOperationsInput | $Enums.PayFrequency;
    firstPayDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payPeriodStartDay?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayGroupUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    payFrequency?: Prisma.EnumPayFrequencyFieldUpdateOperationsInput | $Enums.PayFrequency;
    firstPayDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payPeriodStartDay?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayGroupListRelationFilter = {
    every?: Prisma.PayGroupWhereInput;
    some?: Prisma.PayGroupWhereInput;
    none?: Prisma.PayGroupWhereInput;
};
export type PayGroupOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PayGroupNullableScalarRelationFilter = {
    is?: Prisma.PayGroupWhereInput | null;
    isNot?: Prisma.PayGroupWhereInput | null;
};
export type PayGroupCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    payFrequency?: Prisma.SortOrder;
    firstPayDate?: Prisma.SortOrder;
    payPeriodStartDay?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PayGroupAvgOrderByAggregateInput = {
    payPeriodStartDay?: Prisma.SortOrder;
};
export type PayGroupMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    payFrequency?: Prisma.SortOrder;
    firstPayDate?: Prisma.SortOrder;
    payPeriodStartDay?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PayGroupMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    payFrequency?: Prisma.SortOrder;
    firstPayDate?: Prisma.SortOrder;
    payPeriodStartDay?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PayGroupSumOrderByAggregateInput = {
    payPeriodStartDay?: Prisma.SortOrder;
};
export type PayGroupCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.PayGroupCreateWithoutOrganizationInput, Prisma.PayGroupUncheckedCreateWithoutOrganizationInput> | Prisma.PayGroupCreateWithoutOrganizationInput[] | Prisma.PayGroupUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.PayGroupCreateOrConnectWithoutOrganizationInput | Prisma.PayGroupCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.PayGroupCreateManyOrganizationInputEnvelope;
    connect?: Prisma.PayGroupWhereUniqueInput | Prisma.PayGroupWhereUniqueInput[];
};
export type PayGroupUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.PayGroupCreateWithoutOrganizationInput, Prisma.PayGroupUncheckedCreateWithoutOrganizationInput> | Prisma.PayGroupCreateWithoutOrganizationInput[] | Prisma.PayGroupUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.PayGroupCreateOrConnectWithoutOrganizationInput | Prisma.PayGroupCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.PayGroupCreateManyOrganizationInputEnvelope;
    connect?: Prisma.PayGroupWhereUniqueInput | Prisma.PayGroupWhereUniqueInput[];
};
export type PayGroupUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.PayGroupCreateWithoutOrganizationInput, Prisma.PayGroupUncheckedCreateWithoutOrganizationInput> | Prisma.PayGroupCreateWithoutOrganizationInput[] | Prisma.PayGroupUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.PayGroupCreateOrConnectWithoutOrganizationInput | Prisma.PayGroupCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.PayGroupUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.PayGroupUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.PayGroupCreateManyOrganizationInputEnvelope;
    set?: Prisma.PayGroupWhereUniqueInput | Prisma.PayGroupWhereUniqueInput[];
    disconnect?: Prisma.PayGroupWhereUniqueInput | Prisma.PayGroupWhereUniqueInput[];
    delete?: Prisma.PayGroupWhereUniqueInput | Prisma.PayGroupWhereUniqueInput[];
    connect?: Prisma.PayGroupWhereUniqueInput | Prisma.PayGroupWhereUniqueInput[];
    update?: Prisma.PayGroupUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.PayGroupUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.PayGroupUpdateManyWithWhereWithoutOrganizationInput | Prisma.PayGroupUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.PayGroupScalarWhereInput | Prisma.PayGroupScalarWhereInput[];
};
export type PayGroupUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.PayGroupCreateWithoutOrganizationInput, Prisma.PayGroupUncheckedCreateWithoutOrganizationInput> | Prisma.PayGroupCreateWithoutOrganizationInput[] | Prisma.PayGroupUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.PayGroupCreateOrConnectWithoutOrganizationInput | Prisma.PayGroupCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.PayGroupUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.PayGroupUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.PayGroupCreateManyOrganizationInputEnvelope;
    set?: Prisma.PayGroupWhereUniqueInput | Prisma.PayGroupWhereUniqueInput[];
    disconnect?: Prisma.PayGroupWhereUniqueInput | Prisma.PayGroupWhereUniqueInput[];
    delete?: Prisma.PayGroupWhereUniqueInput | Prisma.PayGroupWhereUniqueInput[];
    connect?: Prisma.PayGroupWhereUniqueInput | Prisma.PayGroupWhereUniqueInput[];
    update?: Prisma.PayGroupUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.PayGroupUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.PayGroupUpdateManyWithWhereWithoutOrganizationInput | Prisma.PayGroupUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.PayGroupScalarWhereInput | Prisma.PayGroupScalarWhereInput[];
};
export type PayGroupCreateNestedOneWithoutEmployeesInput = {
    create?: Prisma.XOR<Prisma.PayGroupCreateWithoutEmployeesInput, Prisma.PayGroupUncheckedCreateWithoutEmployeesInput>;
    connectOrCreate?: Prisma.PayGroupCreateOrConnectWithoutEmployeesInput;
    connect?: Prisma.PayGroupWhereUniqueInput;
};
export type PayGroupUpdateOneWithoutEmployeesNestedInput = {
    create?: Prisma.XOR<Prisma.PayGroupCreateWithoutEmployeesInput, Prisma.PayGroupUncheckedCreateWithoutEmployeesInput>;
    connectOrCreate?: Prisma.PayGroupCreateOrConnectWithoutEmployeesInput;
    upsert?: Prisma.PayGroupUpsertWithoutEmployeesInput;
    disconnect?: Prisma.PayGroupWhereInput | boolean;
    delete?: Prisma.PayGroupWhereInput | boolean;
    connect?: Prisma.PayGroupWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PayGroupUpdateToOneWithWhereWithoutEmployeesInput, Prisma.PayGroupUpdateWithoutEmployeesInput>, Prisma.PayGroupUncheckedUpdateWithoutEmployeesInput>;
};
export type EnumPayFrequencyFieldUpdateOperationsInput = {
    set?: $Enums.PayFrequency;
};
export type PayGroupCreateNestedOneWithoutPayRunsInput = {
    create?: Prisma.XOR<Prisma.PayGroupCreateWithoutPayRunsInput, Prisma.PayGroupUncheckedCreateWithoutPayRunsInput>;
    connectOrCreate?: Prisma.PayGroupCreateOrConnectWithoutPayRunsInput;
    connect?: Prisma.PayGroupWhereUniqueInput;
};
export type PayGroupUpdateOneWithoutPayRunsNestedInput = {
    create?: Prisma.XOR<Prisma.PayGroupCreateWithoutPayRunsInput, Prisma.PayGroupUncheckedCreateWithoutPayRunsInput>;
    connectOrCreate?: Prisma.PayGroupCreateOrConnectWithoutPayRunsInput;
    upsert?: Prisma.PayGroupUpsertWithoutPayRunsInput;
    disconnect?: Prisma.PayGroupWhereInput | boolean;
    delete?: Prisma.PayGroupWhereInput | boolean;
    connect?: Prisma.PayGroupWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PayGroupUpdateToOneWithWhereWithoutPayRunsInput, Prisma.PayGroupUpdateWithoutPayRunsInput>, Prisma.PayGroupUncheckedUpdateWithoutPayRunsInput>;
};
export type PayGroupCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    payFrequency?: $Enums.PayFrequency;
    firstPayDate?: Date | string | null;
    payPeriodStartDay?: number;
    createdAt?: Date | string;
    employees?: Prisma.EmployeeCreateNestedManyWithoutPayGroupInput;
    payRuns?: Prisma.PayRunCreateNestedManyWithoutPayGroupInput;
};
export type PayGroupUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    payFrequency?: $Enums.PayFrequency;
    firstPayDate?: Date | string | null;
    payPeriodStartDay?: number;
    createdAt?: Date | string;
    employees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutPayGroupInput;
    payRuns?: Prisma.PayRunUncheckedCreateNestedManyWithoutPayGroupInput;
};
export type PayGroupCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.PayGroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayGroupCreateWithoutOrganizationInput, Prisma.PayGroupUncheckedCreateWithoutOrganizationInput>;
};
export type PayGroupCreateManyOrganizationInputEnvelope = {
    data: Prisma.PayGroupCreateManyOrganizationInput | Prisma.PayGroupCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type PayGroupUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.PayGroupWhereUniqueInput;
    update: Prisma.XOR<Prisma.PayGroupUpdateWithoutOrganizationInput, Prisma.PayGroupUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.PayGroupCreateWithoutOrganizationInput, Prisma.PayGroupUncheckedCreateWithoutOrganizationInput>;
};
export type PayGroupUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.PayGroupWhereUniqueInput;
    data: Prisma.XOR<Prisma.PayGroupUpdateWithoutOrganizationInput, Prisma.PayGroupUncheckedUpdateWithoutOrganizationInput>;
};
export type PayGroupUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.PayGroupScalarWhereInput;
    data: Prisma.XOR<Prisma.PayGroupUpdateManyMutationInput, Prisma.PayGroupUncheckedUpdateManyWithoutOrganizationInput>;
};
export type PayGroupScalarWhereInput = {
    AND?: Prisma.PayGroupScalarWhereInput | Prisma.PayGroupScalarWhereInput[];
    OR?: Prisma.PayGroupScalarWhereInput[];
    NOT?: Prisma.PayGroupScalarWhereInput | Prisma.PayGroupScalarWhereInput[];
    id?: Prisma.UuidFilter<"PayGroup"> | string;
    organizationId?: Prisma.UuidFilter<"PayGroup"> | string;
    name?: Prisma.StringFilter<"PayGroup"> | string;
    payFrequency?: Prisma.EnumPayFrequencyFilter<"PayGroup"> | $Enums.PayFrequency;
    firstPayDate?: Prisma.DateTimeNullableFilter<"PayGroup"> | Date | string | null;
    payPeriodStartDay?: Prisma.IntFilter<"PayGroup"> | number;
    createdAt?: Prisma.DateTimeFilter<"PayGroup"> | Date | string;
};
export type PayGroupCreateWithoutEmployeesInput = {
    id?: string;
    name: string;
    payFrequency?: $Enums.PayFrequency;
    firstPayDate?: Date | string | null;
    payPeriodStartDay?: number;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutPayGroupsInput;
    payRuns?: Prisma.PayRunCreateNestedManyWithoutPayGroupInput;
};
export type PayGroupUncheckedCreateWithoutEmployeesInput = {
    id?: string;
    organizationId: string;
    name: string;
    payFrequency?: $Enums.PayFrequency;
    firstPayDate?: Date | string | null;
    payPeriodStartDay?: number;
    createdAt?: Date | string;
    payRuns?: Prisma.PayRunUncheckedCreateNestedManyWithoutPayGroupInput;
};
export type PayGroupCreateOrConnectWithoutEmployeesInput = {
    where: Prisma.PayGroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayGroupCreateWithoutEmployeesInput, Prisma.PayGroupUncheckedCreateWithoutEmployeesInput>;
};
export type PayGroupUpsertWithoutEmployeesInput = {
    update: Prisma.XOR<Prisma.PayGroupUpdateWithoutEmployeesInput, Prisma.PayGroupUncheckedUpdateWithoutEmployeesInput>;
    create: Prisma.XOR<Prisma.PayGroupCreateWithoutEmployeesInput, Prisma.PayGroupUncheckedCreateWithoutEmployeesInput>;
    where?: Prisma.PayGroupWhereInput;
};
export type PayGroupUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: Prisma.PayGroupWhereInput;
    data: Prisma.XOR<Prisma.PayGroupUpdateWithoutEmployeesInput, Prisma.PayGroupUncheckedUpdateWithoutEmployeesInput>;
};
export type PayGroupUpdateWithoutEmployeesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    payFrequency?: Prisma.EnumPayFrequencyFieldUpdateOperationsInput | $Enums.PayFrequency;
    firstPayDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payPeriodStartDay?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutPayGroupsNestedInput;
    payRuns?: Prisma.PayRunUpdateManyWithoutPayGroupNestedInput;
};
export type PayGroupUncheckedUpdateWithoutEmployeesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    payFrequency?: Prisma.EnumPayFrequencyFieldUpdateOperationsInput | $Enums.PayFrequency;
    firstPayDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payPeriodStartDay?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payRuns?: Prisma.PayRunUncheckedUpdateManyWithoutPayGroupNestedInput;
};
export type PayGroupCreateWithoutPayRunsInput = {
    id?: string;
    name: string;
    payFrequency?: $Enums.PayFrequency;
    firstPayDate?: Date | string | null;
    payPeriodStartDay?: number;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutPayGroupsInput;
    employees?: Prisma.EmployeeCreateNestedManyWithoutPayGroupInput;
};
export type PayGroupUncheckedCreateWithoutPayRunsInput = {
    id?: string;
    organizationId: string;
    name: string;
    payFrequency?: $Enums.PayFrequency;
    firstPayDate?: Date | string | null;
    payPeriodStartDay?: number;
    createdAt?: Date | string;
    employees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutPayGroupInput;
};
export type PayGroupCreateOrConnectWithoutPayRunsInput = {
    where: Prisma.PayGroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayGroupCreateWithoutPayRunsInput, Prisma.PayGroupUncheckedCreateWithoutPayRunsInput>;
};
export type PayGroupUpsertWithoutPayRunsInput = {
    update: Prisma.XOR<Prisma.PayGroupUpdateWithoutPayRunsInput, Prisma.PayGroupUncheckedUpdateWithoutPayRunsInput>;
    create: Prisma.XOR<Prisma.PayGroupCreateWithoutPayRunsInput, Prisma.PayGroupUncheckedCreateWithoutPayRunsInput>;
    where?: Prisma.PayGroupWhereInput;
};
export type PayGroupUpdateToOneWithWhereWithoutPayRunsInput = {
    where?: Prisma.PayGroupWhereInput;
    data: Prisma.XOR<Prisma.PayGroupUpdateWithoutPayRunsInput, Prisma.PayGroupUncheckedUpdateWithoutPayRunsInput>;
};
export type PayGroupUpdateWithoutPayRunsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    payFrequency?: Prisma.EnumPayFrequencyFieldUpdateOperationsInput | $Enums.PayFrequency;
    firstPayDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payPeriodStartDay?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutPayGroupsNestedInput;
    employees?: Prisma.EmployeeUpdateManyWithoutPayGroupNestedInput;
};
export type PayGroupUncheckedUpdateWithoutPayRunsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    payFrequency?: Prisma.EnumPayFrequencyFieldUpdateOperationsInput | $Enums.PayFrequency;
    firstPayDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payPeriodStartDay?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employees?: Prisma.EmployeeUncheckedUpdateManyWithoutPayGroupNestedInput;
};
export type PayGroupCreateManyOrganizationInput = {
    id?: string;
    name: string;
    payFrequency?: $Enums.PayFrequency;
    firstPayDate?: Date | string | null;
    payPeriodStartDay?: number;
    createdAt?: Date | string;
};
export type PayGroupUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    payFrequency?: Prisma.EnumPayFrequencyFieldUpdateOperationsInput | $Enums.PayFrequency;
    firstPayDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payPeriodStartDay?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employees?: Prisma.EmployeeUpdateManyWithoutPayGroupNestedInput;
    payRuns?: Prisma.PayRunUpdateManyWithoutPayGroupNestedInput;
};
export type PayGroupUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    payFrequency?: Prisma.EnumPayFrequencyFieldUpdateOperationsInput | $Enums.PayFrequency;
    firstPayDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payPeriodStartDay?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employees?: Prisma.EmployeeUncheckedUpdateManyWithoutPayGroupNestedInput;
    payRuns?: Prisma.PayRunUncheckedUpdateManyWithoutPayGroupNestedInput;
};
export type PayGroupUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    payFrequency?: Prisma.EnumPayFrequencyFieldUpdateOperationsInput | $Enums.PayFrequency;
    firstPayDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payPeriodStartDay?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayGroupCountOutputType = {
    employees: number;
    payRuns: number;
};
export type PayGroupCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employees?: boolean | PayGroupCountOutputTypeCountEmployeesArgs;
    payRuns?: boolean | PayGroupCountOutputTypeCountPayRunsArgs;
};
export type PayGroupCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayGroupCountOutputTypeSelect<ExtArgs> | null;
};
export type PayGroupCountOutputTypeCountEmployeesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeWhereInput;
};
export type PayGroupCountOutputTypeCountPayRunsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayRunWhereInput;
};
export type PayGroupSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    payFrequency?: boolean;
    firstPayDate?: boolean;
    payPeriodStartDay?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    employees?: boolean | Prisma.PayGroup$employeesArgs<ExtArgs>;
    payRuns?: boolean | Prisma.PayGroup$payRunsArgs<ExtArgs>;
    _count?: boolean | Prisma.PayGroupCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payGroup"]>;
export type PayGroupSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    payFrequency?: boolean;
    firstPayDate?: boolean;
    payPeriodStartDay?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payGroup"]>;
export type PayGroupSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    payFrequency?: boolean;
    firstPayDate?: boolean;
    payPeriodStartDay?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payGroup"]>;
export type PayGroupSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    payFrequency?: boolean;
    firstPayDate?: boolean;
    payPeriodStartDay?: boolean;
    createdAt?: boolean;
};
export type PayGroupOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "name" | "payFrequency" | "firstPayDate" | "payPeriodStartDay" | "createdAt", ExtArgs["result"]["payGroup"]>;
export type PayGroupInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    employees?: boolean | Prisma.PayGroup$employeesArgs<ExtArgs>;
    payRuns?: boolean | Prisma.PayGroup$payRunsArgs<ExtArgs>;
    _count?: boolean | Prisma.PayGroupCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PayGroupIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type PayGroupIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type $PayGroupPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PayGroup";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        employees: Prisma.$EmployeePayload<ExtArgs>[];
        payRuns: Prisma.$PayRunPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        name: string;
        payFrequency: $Enums.PayFrequency;
        firstPayDate: Date | null;
        payPeriodStartDay: number;
        createdAt: Date;
    }, ExtArgs["result"]["payGroup"]>;
    composites: {};
};
export type PayGroupGetPayload<S extends boolean | null | undefined | PayGroupDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PayGroupPayload, S>;
export type PayGroupCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PayGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PayGroupCountAggregateInputType | true;
};
export interface PayGroupDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PayGroup'];
        meta: {
            name: 'PayGroup';
        };
    };
    findUnique<T extends PayGroupFindUniqueArgs>(args: Prisma.SelectSubset<T, PayGroupFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PayGroupClient<runtime.Types.Result.GetResult<Prisma.$PayGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PayGroupFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PayGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PayGroupClient<runtime.Types.Result.GetResult<Prisma.$PayGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PayGroupFindFirstArgs>(args?: Prisma.SelectSubset<T, PayGroupFindFirstArgs<ExtArgs>>): Prisma.Prisma__PayGroupClient<runtime.Types.Result.GetResult<Prisma.$PayGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PayGroupFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PayGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PayGroupClient<runtime.Types.Result.GetResult<Prisma.$PayGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PayGroupFindManyArgs>(args?: Prisma.SelectSubset<T, PayGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PayGroupCreateArgs>(args: Prisma.SelectSubset<T, PayGroupCreateArgs<ExtArgs>>): Prisma.Prisma__PayGroupClient<runtime.Types.Result.GetResult<Prisma.$PayGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PayGroupCreateManyArgs>(args?: Prisma.SelectSubset<T, PayGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PayGroupCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PayGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PayGroupDeleteArgs>(args: Prisma.SelectSubset<T, PayGroupDeleteArgs<ExtArgs>>): Prisma.Prisma__PayGroupClient<runtime.Types.Result.GetResult<Prisma.$PayGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PayGroupUpdateArgs>(args: Prisma.SelectSubset<T, PayGroupUpdateArgs<ExtArgs>>): Prisma.Prisma__PayGroupClient<runtime.Types.Result.GetResult<Prisma.$PayGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PayGroupDeleteManyArgs>(args?: Prisma.SelectSubset<T, PayGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PayGroupUpdateManyArgs>(args: Prisma.SelectSubset<T, PayGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PayGroupUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PayGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PayGroupUpsertArgs>(args: Prisma.SelectSubset<T, PayGroupUpsertArgs<ExtArgs>>): Prisma.Prisma__PayGroupClient<runtime.Types.Result.GetResult<Prisma.$PayGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PayGroupCountArgs>(args?: Prisma.Subset<T, PayGroupCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PayGroupCountAggregateOutputType> : number>;
    aggregate<T extends PayGroupAggregateArgs>(args: Prisma.Subset<T, PayGroupAggregateArgs>): Prisma.PrismaPromise<GetPayGroupAggregateType<T>>;
    groupBy<T extends PayGroupGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PayGroupGroupByArgs['orderBy'];
    } : {
        orderBy?: PayGroupGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PayGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PayGroupFieldRefs;
}
export interface Prisma__PayGroupClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    employees<T extends Prisma.PayGroup$employeesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PayGroup$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    payRuns<T extends Prisma.PayGroup$payRunsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PayGroup$payRunsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PayGroupFieldRefs {
    readonly id: Prisma.FieldRef<"PayGroup", 'String'>;
    readonly organizationId: Prisma.FieldRef<"PayGroup", 'String'>;
    readonly name: Prisma.FieldRef<"PayGroup", 'String'>;
    readonly payFrequency: Prisma.FieldRef<"PayGroup", 'PayFrequency'>;
    readonly firstPayDate: Prisma.FieldRef<"PayGroup", 'DateTime'>;
    readonly payPeriodStartDay: Prisma.FieldRef<"PayGroup", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"PayGroup", 'DateTime'>;
}
export type PayGroupFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayGroupSelect<ExtArgs> | null;
    omit?: Prisma.PayGroupOmit<ExtArgs> | null;
    include?: Prisma.PayGroupInclude<ExtArgs> | null;
    where: Prisma.PayGroupWhereUniqueInput;
};
export type PayGroupFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayGroupSelect<ExtArgs> | null;
    omit?: Prisma.PayGroupOmit<ExtArgs> | null;
    include?: Prisma.PayGroupInclude<ExtArgs> | null;
    where: Prisma.PayGroupWhereUniqueInput;
};
export type PayGroupFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayGroupSelect<ExtArgs> | null;
    omit?: Prisma.PayGroupOmit<ExtArgs> | null;
    include?: Prisma.PayGroupInclude<ExtArgs> | null;
    where?: Prisma.PayGroupWhereInput;
    orderBy?: Prisma.PayGroupOrderByWithRelationInput | Prisma.PayGroupOrderByWithRelationInput[];
    cursor?: Prisma.PayGroupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PayGroupScalarFieldEnum | Prisma.PayGroupScalarFieldEnum[];
};
export type PayGroupFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayGroupSelect<ExtArgs> | null;
    omit?: Prisma.PayGroupOmit<ExtArgs> | null;
    include?: Prisma.PayGroupInclude<ExtArgs> | null;
    where?: Prisma.PayGroupWhereInput;
    orderBy?: Prisma.PayGroupOrderByWithRelationInput | Prisma.PayGroupOrderByWithRelationInput[];
    cursor?: Prisma.PayGroupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PayGroupScalarFieldEnum | Prisma.PayGroupScalarFieldEnum[];
};
export type PayGroupFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayGroupSelect<ExtArgs> | null;
    omit?: Prisma.PayGroupOmit<ExtArgs> | null;
    include?: Prisma.PayGroupInclude<ExtArgs> | null;
    where?: Prisma.PayGroupWhereInput;
    orderBy?: Prisma.PayGroupOrderByWithRelationInput | Prisma.PayGroupOrderByWithRelationInput[];
    cursor?: Prisma.PayGroupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PayGroupScalarFieldEnum | Prisma.PayGroupScalarFieldEnum[];
};
export type PayGroupCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayGroupSelect<ExtArgs> | null;
    omit?: Prisma.PayGroupOmit<ExtArgs> | null;
    include?: Prisma.PayGroupInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PayGroupCreateInput, Prisma.PayGroupUncheckedCreateInput>;
};
export type PayGroupCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PayGroupCreateManyInput | Prisma.PayGroupCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PayGroupCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayGroupSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PayGroupOmit<ExtArgs> | null;
    data: Prisma.PayGroupCreateManyInput | Prisma.PayGroupCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PayGroupIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PayGroupUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayGroupSelect<ExtArgs> | null;
    omit?: Prisma.PayGroupOmit<ExtArgs> | null;
    include?: Prisma.PayGroupInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PayGroupUpdateInput, Prisma.PayGroupUncheckedUpdateInput>;
    where: Prisma.PayGroupWhereUniqueInput;
};
export type PayGroupUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PayGroupUpdateManyMutationInput, Prisma.PayGroupUncheckedUpdateManyInput>;
    where?: Prisma.PayGroupWhereInput;
    limit?: number;
};
export type PayGroupUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayGroupSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PayGroupOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PayGroupUpdateManyMutationInput, Prisma.PayGroupUncheckedUpdateManyInput>;
    where?: Prisma.PayGroupWhereInput;
    limit?: number;
    include?: Prisma.PayGroupIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PayGroupUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayGroupSelect<ExtArgs> | null;
    omit?: Prisma.PayGroupOmit<ExtArgs> | null;
    include?: Prisma.PayGroupInclude<ExtArgs> | null;
    where: Prisma.PayGroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayGroupCreateInput, Prisma.PayGroupUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PayGroupUpdateInput, Prisma.PayGroupUncheckedUpdateInput>;
};
export type PayGroupDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayGroupSelect<ExtArgs> | null;
    omit?: Prisma.PayGroupOmit<ExtArgs> | null;
    include?: Prisma.PayGroupInclude<ExtArgs> | null;
    where: Prisma.PayGroupWhereUniqueInput;
};
export type PayGroupDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayGroupWhereInput;
    limit?: number;
};
export type PayGroup$employeesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where?: Prisma.EmployeeWhereInput;
    orderBy?: Prisma.EmployeeOrderByWithRelationInput | Prisma.EmployeeOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeScalarFieldEnum | Prisma.EmployeeScalarFieldEnum[];
};
export type PayGroup$payRunsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayRunSelect<ExtArgs> | null;
    omit?: Prisma.PayRunOmit<ExtArgs> | null;
    include?: Prisma.PayRunInclude<ExtArgs> | null;
    where?: Prisma.PayRunWhereInput;
    orderBy?: Prisma.PayRunOrderByWithRelationInput | Prisma.PayRunOrderByWithRelationInput[];
    cursor?: Prisma.PayRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PayRunScalarFieldEnum | Prisma.PayRunScalarFieldEnum[];
};
export type PayGroupDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayGroupSelect<ExtArgs> | null;
    omit?: Prisma.PayGroupOmit<ExtArgs> | null;
    include?: Prisma.PayGroupInclude<ExtArgs> | null;
};
