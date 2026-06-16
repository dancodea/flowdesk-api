import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DepartmentModel = runtime.Types.Result.DefaultSelection<Prisma.$DepartmentPayload>;
export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null;
    _min: DepartmentMinAggregateOutputType | null;
    _max: DepartmentMaxAggregateOutputType | null;
};
export type DepartmentMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    name: string | null;
    parentDepartmentId: string | null;
    headId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DepartmentMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    name: string | null;
    parentDepartmentId: string | null;
    headId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DepartmentCountAggregateOutputType = {
    id: number;
    organizationId: number;
    name: number;
    parentDepartmentId: number;
    headId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type DepartmentMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    parentDepartmentId?: true;
    headId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DepartmentMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    parentDepartmentId?: true;
    headId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DepartmentCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    parentDepartmentId?: true;
    headId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type DepartmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DepartmentWhereInput;
    orderBy?: Prisma.DepartmentOrderByWithRelationInput | Prisma.DepartmentOrderByWithRelationInput[];
    cursor?: Prisma.DepartmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DepartmentCountAggregateInputType;
    _min?: DepartmentMinAggregateInputType;
    _max?: DepartmentMaxAggregateInputType;
};
export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
    [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDepartment[P]> : Prisma.GetScalarType<T[P], AggregateDepartment[P]>;
};
export type DepartmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DepartmentWhereInput;
    orderBy?: Prisma.DepartmentOrderByWithAggregationInput | Prisma.DepartmentOrderByWithAggregationInput[];
    by: Prisma.DepartmentScalarFieldEnum[] | Prisma.DepartmentScalarFieldEnum;
    having?: Prisma.DepartmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DepartmentCountAggregateInputType | true;
    _min?: DepartmentMinAggregateInputType;
    _max?: DepartmentMaxAggregateInputType;
};
export type DepartmentGroupByOutputType = {
    id: string;
    organizationId: string;
    name: string;
    parentDepartmentId: string | null;
    headId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: DepartmentCountAggregateOutputType | null;
    _min: DepartmentMinAggregateOutputType | null;
    _max: DepartmentMaxAggregateOutputType | null;
};
export type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DepartmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DepartmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DepartmentGroupByOutputType[P]>;
}>>;
export type DepartmentWhereInput = {
    AND?: Prisma.DepartmentWhereInput | Prisma.DepartmentWhereInput[];
    OR?: Prisma.DepartmentWhereInput[];
    NOT?: Prisma.DepartmentWhereInput | Prisma.DepartmentWhereInput[];
    id?: Prisma.UuidFilter<"Department"> | string;
    organizationId?: Prisma.UuidFilter<"Department"> | string;
    name?: Prisma.StringFilter<"Department"> | string;
    parentDepartmentId?: Prisma.UuidNullableFilter<"Department"> | string | null;
    headId?: Prisma.UuidNullableFilter<"Department"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Department"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Department"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    parentDepartment?: Prisma.XOR<Prisma.DepartmentNullableScalarRelationFilter, Prisma.DepartmentWhereInput> | null;
    childDepartments?: Prisma.DepartmentListRelationFilter;
    employees?: Prisma.EmployeeListRelationFilter;
    jobPostings?: Prisma.JobPostingListRelationFilter;
};
export type DepartmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    parentDepartmentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    headId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    parentDepartment?: Prisma.DepartmentOrderByWithRelationInput;
    childDepartments?: Prisma.DepartmentOrderByRelationAggregateInput;
    employees?: Prisma.EmployeeOrderByRelationAggregateInput;
    jobPostings?: Prisma.JobPostingOrderByRelationAggregateInput;
};
export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DepartmentWhereInput | Prisma.DepartmentWhereInput[];
    OR?: Prisma.DepartmentWhereInput[];
    NOT?: Prisma.DepartmentWhereInput | Prisma.DepartmentWhereInput[];
    organizationId?: Prisma.UuidFilter<"Department"> | string;
    name?: Prisma.StringFilter<"Department"> | string;
    parentDepartmentId?: Prisma.UuidNullableFilter<"Department"> | string | null;
    headId?: Prisma.UuidNullableFilter<"Department"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Department"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Department"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    parentDepartment?: Prisma.XOR<Prisma.DepartmentNullableScalarRelationFilter, Prisma.DepartmentWhereInput> | null;
    childDepartments?: Prisma.DepartmentListRelationFilter;
    employees?: Prisma.EmployeeListRelationFilter;
    jobPostings?: Prisma.JobPostingListRelationFilter;
}, "id">;
export type DepartmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    parentDepartmentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    headId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.DepartmentCountOrderByAggregateInput;
    _max?: Prisma.DepartmentMaxOrderByAggregateInput;
    _min?: Prisma.DepartmentMinOrderByAggregateInput;
};
export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.DepartmentScalarWhereWithAggregatesInput | Prisma.DepartmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.DepartmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DepartmentScalarWhereWithAggregatesInput | Prisma.DepartmentScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Department"> | string;
    organizationId?: Prisma.UuidWithAggregatesFilter<"Department"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Department"> | string;
    parentDepartmentId?: Prisma.UuidNullableWithAggregatesFilter<"Department"> | string | null;
    headId?: Prisma.UuidNullableWithAggregatesFilter<"Department"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Department"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Department"> | Date | string;
};
export type DepartmentCreateInput = {
    id?: string;
    name: string;
    headId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutDepartmentsInput;
    parentDepartment?: Prisma.DepartmentCreateNestedOneWithoutChildDepartmentsInput;
    childDepartments?: Prisma.DepartmentCreateNestedManyWithoutParentDepartmentInput;
    employees?: Prisma.EmployeeCreateNestedManyWithoutDepartmentInput;
    jobPostings?: Prisma.JobPostingCreateNestedManyWithoutDepartmentInput;
};
export type DepartmentUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    name: string;
    parentDepartmentId?: string | null;
    headId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    childDepartments?: Prisma.DepartmentUncheckedCreateNestedManyWithoutParentDepartmentInput;
    employees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutDepartmentInput;
    jobPostings?: Prisma.JobPostingUncheckedCreateNestedManyWithoutDepartmentInput;
};
export type DepartmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    headId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutDepartmentsNestedInput;
    parentDepartment?: Prisma.DepartmentUpdateOneWithoutChildDepartmentsNestedInput;
    childDepartments?: Prisma.DepartmentUpdateManyWithoutParentDepartmentNestedInput;
    employees?: Prisma.EmployeeUpdateManyWithoutDepartmentNestedInput;
    jobPostings?: Prisma.JobPostingUpdateManyWithoutDepartmentNestedInput;
};
export type DepartmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    parentDepartmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    headId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    childDepartments?: Prisma.DepartmentUncheckedUpdateManyWithoutParentDepartmentNestedInput;
    employees?: Prisma.EmployeeUncheckedUpdateManyWithoutDepartmentNestedInput;
    jobPostings?: Prisma.JobPostingUncheckedUpdateManyWithoutDepartmentNestedInput;
};
export type DepartmentCreateManyInput = {
    id?: string;
    organizationId: string;
    name: string;
    parentDepartmentId?: string | null;
    headId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DepartmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    headId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DepartmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    parentDepartmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    headId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DepartmentListRelationFilter = {
    every?: Prisma.DepartmentWhereInput;
    some?: Prisma.DepartmentWhereInput;
    none?: Prisma.DepartmentWhereInput;
};
export type DepartmentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DepartmentNullableScalarRelationFilter = {
    is?: Prisma.DepartmentWhereInput | null;
    isNot?: Prisma.DepartmentWhereInput | null;
};
export type DepartmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    parentDepartmentId?: Prisma.SortOrder;
    headId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DepartmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    parentDepartmentId?: Prisma.SortOrder;
    headId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DepartmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    parentDepartmentId?: Prisma.SortOrder;
    headId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DepartmentCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutOrganizationInput, Prisma.DepartmentUncheckedCreateWithoutOrganizationInput> | Prisma.DepartmentCreateWithoutOrganizationInput[] | Prisma.DepartmentUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutOrganizationInput | Prisma.DepartmentCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.DepartmentCreateManyOrganizationInputEnvelope;
    connect?: Prisma.DepartmentWhereUniqueInput | Prisma.DepartmentWhereUniqueInput[];
};
export type DepartmentUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutOrganizationInput, Prisma.DepartmentUncheckedCreateWithoutOrganizationInput> | Prisma.DepartmentCreateWithoutOrganizationInput[] | Prisma.DepartmentUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutOrganizationInput | Prisma.DepartmentCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.DepartmentCreateManyOrganizationInputEnvelope;
    connect?: Prisma.DepartmentWhereUniqueInput | Prisma.DepartmentWhereUniqueInput[];
};
export type DepartmentUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutOrganizationInput, Prisma.DepartmentUncheckedCreateWithoutOrganizationInput> | Prisma.DepartmentCreateWithoutOrganizationInput[] | Prisma.DepartmentUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutOrganizationInput | Prisma.DepartmentCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.DepartmentUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.DepartmentUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.DepartmentCreateManyOrganizationInputEnvelope;
    set?: Prisma.DepartmentWhereUniqueInput | Prisma.DepartmentWhereUniqueInput[];
    disconnect?: Prisma.DepartmentWhereUniqueInput | Prisma.DepartmentWhereUniqueInput[];
    delete?: Prisma.DepartmentWhereUniqueInput | Prisma.DepartmentWhereUniqueInput[];
    connect?: Prisma.DepartmentWhereUniqueInput | Prisma.DepartmentWhereUniqueInput[];
    update?: Prisma.DepartmentUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.DepartmentUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.DepartmentUpdateManyWithWhereWithoutOrganizationInput | Prisma.DepartmentUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.DepartmentScalarWhereInput | Prisma.DepartmentScalarWhereInput[];
};
export type DepartmentUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutOrganizationInput, Prisma.DepartmentUncheckedCreateWithoutOrganizationInput> | Prisma.DepartmentCreateWithoutOrganizationInput[] | Prisma.DepartmentUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutOrganizationInput | Prisma.DepartmentCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.DepartmentUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.DepartmentUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.DepartmentCreateManyOrganizationInputEnvelope;
    set?: Prisma.DepartmentWhereUniqueInput | Prisma.DepartmentWhereUniqueInput[];
    disconnect?: Prisma.DepartmentWhereUniqueInput | Prisma.DepartmentWhereUniqueInput[];
    delete?: Prisma.DepartmentWhereUniqueInput | Prisma.DepartmentWhereUniqueInput[];
    connect?: Prisma.DepartmentWhereUniqueInput | Prisma.DepartmentWhereUniqueInput[];
    update?: Prisma.DepartmentUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.DepartmentUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.DepartmentUpdateManyWithWhereWithoutOrganizationInput | Prisma.DepartmentUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.DepartmentScalarWhereInput | Prisma.DepartmentScalarWhereInput[];
};
export type DepartmentCreateNestedOneWithoutChildDepartmentsInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutChildDepartmentsInput, Prisma.DepartmentUncheckedCreateWithoutChildDepartmentsInput>;
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutChildDepartmentsInput;
    connect?: Prisma.DepartmentWhereUniqueInput;
};
export type DepartmentCreateNestedManyWithoutParentDepartmentInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutParentDepartmentInput, Prisma.DepartmentUncheckedCreateWithoutParentDepartmentInput> | Prisma.DepartmentCreateWithoutParentDepartmentInput[] | Prisma.DepartmentUncheckedCreateWithoutParentDepartmentInput[];
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutParentDepartmentInput | Prisma.DepartmentCreateOrConnectWithoutParentDepartmentInput[];
    createMany?: Prisma.DepartmentCreateManyParentDepartmentInputEnvelope;
    connect?: Prisma.DepartmentWhereUniqueInput | Prisma.DepartmentWhereUniqueInput[];
};
export type DepartmentUncheckedCreateNestedManyWithoutParentDepartmentInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutParentDepartmentInput, Prisma.DepartmentUncheckedCreateWithoutParentDepartmentInput> | Prisma.DepartmentCreateWithoutParentDepartmentInput[] | Prisma.DepartmentUncheckedCreateWithoutParentDepartmentInput[];
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutParentDepartmentInput | Prisma.DepartmentCreateOrConnectWithoutParentDepartmentInput[];
    createMany?: Prisma.DepartmentCreateManyParentDepartmentInputEnvelope;
    connect?: Prisma.DepartmentWhereUniqueInput | Prisma.DepartmentWhereUniqueInput[];
};
export type DepartmentUpdateOneWithoutChildDepartmentsNestedInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutChildDepartmentsInput, Prisma.DepartmentUncheckedCreateWithoutChildDepartmentsInput>;
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutChildDepartmentsInput;
    upsert?: Prisma.DepartmentUpsertWithoutChildDepartmentsInput;
    disconnect?: Prisma.DepartmentWhereInput | boolean;
    delete?: Prisma.DepartmentWhereInput | boolean;
    connect?: Prisma.DepartmentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DepartmentUpdateToOneWithWhereWithoutChildDepartmentsInput, Prisma.DepartmentUpdateWithoutChildDepartmentsInput>, Prisma.DepartmentUncheckedUpdateWithoutChildDepartmentsInput>;
};
export type DepartmentUpdateManyWithoutParentDepartmentNestedInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutParentDepartmentInput, Prisma.DepartmentUncheckedCreateWithoutParentDepartmentInput> | Prisma.DepartmentCreateWithoutParentDepartmentInput[] | Prisma.DepartmentUncheckedCreateWithoutParentDepartmentInput[];
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutParentDepartmentInput | Prisma.DepartmentCreateOrConnectWithoutParentDepartmentInput[];
    upsert?: Prisma.DepartmentUpsertWithWhereUniqueWithoutParentDepartmentInput | Prisma.DepartmentUpsertWithWhereUniqueWithoutParentDepartmentInput[];
    createMany?: Prisma.DepartmentCreateManyParentDepartmentInputEnvelope;
    set?: Prisma.DepartmentWhereUniqueInput | Prisma.DepartmentWhereUniqueInput[];
    disconnect?: Prisma.DepartmentWhereUniqueInput | Prisma.DepartmentWhereUniqueInput[];
    delete?: Prisma.DepartmentWhereUniqueInput | Prisma.DepartmentWhereUniqueInput[];
    connect?: Prisma.DepartmentWhereUniqueInput | Prisma.DepartmentWhereUniqueInput[];
    update?: Prisma.DepartmentUpdateWithWhereUniqueWithoutParentDepartmentInput | Prisma.DepartmentUpdateWithWhereUniqueWithoutParentDepartmentInput[];
    updateMany?: Prisma.DepartmentUpdateManyWithWhereWithoutParentDepartmentInput | Prisma.DepartmentUpdateManyWithWhereWithoutParentDepartmentInput[];
    deleteMany?: Prisma.DepartmentScalarWhereInput | Prisma.DepartmentScalarWhereInput[];
};
export type DepartmentUncheckedUpdateManyWithoutParentDepartmentNestedInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutParentDepartmentInput, Prisma.DepartmentUncheckedCreateWithoutParentDepartmentInput> | Prisma.DepartmentCreateWithoutParentDepartmentInput[] | Prisma.DepartmentUncheckedCreateWithoutParentDepartmentInput[];
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutParentDepartmentInput | Prisma.DepartmentCreateOrConnectWithoutParentDepartmentInput[];
    upsert?: Prisma.DepartmentUpsertWithWhereUniqueWithoutParentDepartmentInput | Prisma.DepartmentUpsertWithWhereUniqueWithoutParentDepartmentInput[];
    createMany?: Prisma.DepartmentCreateManyParentDepartmentInputEnvelope;
    set?: Prisma.DepartmentWhereUniqueInput | Prisma.DepartmentWhereUniqueInput[];
    disconnect?: Prisma.DepartmentWhereUniqueInput | Prisma.DepartmentWhereUniqueInput[];
    delete?: Prisma.DepartmentWhereUniqueInput | Prisma.DepartmentWhereUniqueInput[];
    connect?: Prisma.DepartmentWhereUniqueInput | Prisma.DepartmentWhereUniqueInput[];
    update?: Prisma.DepartmentUpdateWithWhereUniqueWithoutParentDepartmentInput | Prisma.DepartmentUpdateWithWhereUniqueWithoutParentDepartmentInput[];
    updateMany?: Prisma.DepartmentUpdateManyWithWhereWithoutParentDepartmentInput | Prisma.DepartmentUpdateManyWithWhereWithoutParentDepartmentInput[];
    deleteMany?: Prisma.DepartmentScalarWhereInput | Prisma.DepartmentScalarWhereInput[];
};
export type DepartmentCreateNestedOneWithoutEmployeesInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutEmployeesInput, Prisma.DepartmentUncheckedCreateWithoutEmployeesInput>;
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutEmployeesInput;
    connect?: Prisma.DepartmentWhereUniqueInput;
};
export type DepartmentUpdateOneWithoutEmployeesNestedInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutEmployeesInput, Prisma.DepartmentUncheckedCreateWithoutEmployeesInput>;
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutEmployeesInput;
    upsert?: Prisma.DepartmentUpsertWithoutEmployeesInput;
    disconnect?: Prisma.DepartmentWhereInput | boolean;
    delete?: Prisma.DepartmentWhereInput | boolean;
    connect?: Prisma.DepartmentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DepartmentUpdateToOneWithWhereWithoutEmployeesInput, Prisma.DepartmentUpdateWithoutEmployeesInput>, Prisma.DepartmentUncheckedUpdateWithoutEmployeesInput>;
};
export type DepartmentCreateNestedOneWithoutJobPostingsInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutJobPostingsInput, Prisma.DepartmentUncheckedCreateWithoutJobPostingsInput>;
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutJobPostingsInput;
    connect?: Prisma.DepartmentWhereUniqueInput;
};
export type DepartmentUpdateOneWithoutJobPostingsNestedInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutJobPostingsInput, Prisma.DepartmentUncheckedCreateWithoutJobPostingsInput>;
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutJobPostingsInput;
    upsert?: Prisma.DepartmentUpsertWithoutJobPostingsInput;
    disconnect?: Prisma.DepartmentWhereInput | boolean;
    delete?: Prisma.DepartmentWhereInput | boolean;
    connect?: Prisma.DepartmentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DepartmentUpdateToOneWithWhereWithoutJobPostingsInput, Prisma.DepartmentUpdateWithoutJobPostingsInput>, Prisma.DepartmentUncheckedUpdateWithoutJobPostingsInput>;
};
export type DepartmentCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    headId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parentDepartment?: Prisma.DepartmentCreateNestedOneWithoutChildDepartmentsInput;
    childDepartments?: Prisma.DepartmentCreateNestedManyWithoutParentDepartmentInput;
    employees?: Prisma.EmployeeCreateNestedManyWithoutDepartmentInput;
    jobPostings?: Prisma.JobPostingCreateNestedManyWithoutDepartmentInput;
};
export type DepartmentUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    parentDepartmentId?: string | null;
    headId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    childDepartments?: Prisma.DepartmentUncheckedCreateNestedManyWithoutParentDepartmentInput;
    employees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutDepartmentInput;
    jobPostings?: Prisma.JobPostingUncheckedCreateNestedManyWithoutDepartmentInput;
};
export type DepartmentCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.DepartmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DepartmentCreateWithoutOrganizationInput, Prisma.DepartmentUncheckedCreateWithoutOrganizationInput>;
};
export type DepartmentCreateManyOrganizationInputEnvelope = {
    data: Prisma.DepartmentCreateManyOrganizationInput | Prisma.DepartmentCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type DepartmentUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.DepartmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.DepartmentUpdateWithoutOrganizationInput, Prisma.DepartmentUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.DepartmentCreateWithoutOrganizationInput, Prisma.DepartmentUncheckedCreateWithoutOrganizationInput>;
};
export type DepartmentUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.DepartmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.DepartmentUpdateWithoutOrganizationInput, Prisma.DepartmentUncheckedUpdateWithoutOrganizationInput>;
};
export type DepartmentUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.DepartmentScalarWhereInput;
    data: Prisma.XOR<Prisma.DepartmentUpdateManyMutationInput, Prisma.DepartmentUncheckedUpdateManyWithoutOrganizationInput>;
};
export type DepartmentScalarWhereInput = {
    AND?: Prisma.DepartmentScalarWhereInput | Prisma.DepartmentScalarWhereInput[];
    OR?: Prisma.DepartmentScalarWhereInput[];
    NOT?: Prisma.DepartmentScalarWhereInput | Prisma.DepartmentScalarWhereInput[];
    id?: Prisma.UuidFilter<"Department"> | string;
    organizationId?: Prisma.UuidFilter<"Department"> | string;
    name?: Prisma.StringFilter<"Department"> | string;
    parentDepartmentId?: Prisma.UuidNullableFilter<"Department"> | string | null;
    headId?: Prisma.UuidNullableFilter<"Department"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Department"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Department"> | Date | string;
};
export type DepartmentCreateWithoutChildDepartmentsInput = {
    id?: string;
    name: string;
    headId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutDepartmentsInput;
    parentDepartment?: Prisma.DepartmentCreateNestedOneWithoutChildDepartmentsInput;
    employees?: Prisma.EmployeeCreateNestedManyWithoutDepartmentInput;
    jobPostings?: Prisma.JobPostingCreateNestedManyWithoutDepartmentInput;
};
export type DepartmentUncheckedCreateWithoutChildDepartmentsInput = {
    id?: string;
    organizationId: string;
    name: string;
    parentDepartmentId?: string | null;
    headId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    employees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutDepartmentInput;
    jobPostings?: Prisma.JobPostingUncheckedCreateNestedManyWithoutDepartmentInput;
};
export type DepartmentCreateOrConnectWithoutChildDepartmentsInput = {
    where: Prisma.DepartmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DepartmentCreateWithoutChildDepartmentsInput, Prisma.DepartmentUncheckedCreateWithoutChildDepartmentsInput>;
};
export type DepartmentCreateWithoutParentDepartmentInput = {
    id?: string;
    name: string;
    headId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutDepartmentsInput;
    childDepartments?: Prisma.DepartmentCreateNestedManyWithoutParentDepartmentInput;
    employees?: Prisma.EmployeeCreateNestedManyWithoutDepartmentInput;
    jobPostings?: Prisma.JobPostingCreateNestedManyWithoutDepartmentInput;
};
export type DepartmentUncheckedCreateWithoutParentDepartmentInput = {
    id?: string;
    organizationId: string;
    name: string;
    headId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    childDepartments?: Prisma.DepartmentUncheckedCreateNestedManyWithoutParentDepartmentInput;
    employees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutDepartmentInput;
    jobPostings?: Prisma.JobPostingUncheckedCreateNestedManyWithoutDepartmentInput;
};
export type DepartmentCreateOrConnectWithoutParentDepartmentInput = {
    where: Prisma.DepartmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DepartmentCreateWithoutParentDepartmentInput, Prisma.DepartmentUncheckedCreateWithoutParentDepartmentInput>;
};
export type DepartmentCreateManyParentDepartmentInputEnvelope = {
    data: Prisma.DepartmentCreateManyParentDepartmentInput | Prisma.DepartmentCreateManyParentDepartmentInput[];
    skipDuplicates?: boolean;
};
export type DepartmentUpsertWithoutChildDepartmentsInput = {
    update: Prisma.XOR<Prisma.DepartmentUpdateWithoutChildDepartmentsInput, Prisma.DepartmentUncheckedUpdateWithoutChildDepartmentsInput>;
    create: Prisma.XOR<Prisma.DepartmentCreateWithoutChildDepartmentsInput, Prisma.DepartmentUncheckedCreateWithoutChildDepartmentsInput>;
    where?: Prisma.DepartmentWhereInput;
};
export type DepartmentUpdateToOneWithWhereWithoutChildDepartmentsInput = {
    where?: Prisma.DepartmentWhereInput;
    data: Prisma.XOR<Prisma.DepartmentUpdateWithoutChildDepartmentsInput, Prisma.DepartmentUncheckedUpdateWithoutChildDepartmentsInput>;
};
export type DepartmentUpdateWithoutChildDepartmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    headId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutDepartmentsNestedInput;
    parentDepartment?: Prisma.DepartmentUpdateOneWithoutChildDepartmentsNestedInput;
    employees?: Prisma.EmployeeUpdateManyWithoutDepartmentNestedInput;
    jobPostings?: Prisma.JobPostingUpdateManyWithoutDepartmentNestedInput;
};
export type DepartmentUncheckedUpdateWithoutChildDepartmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    parentDepartmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    headId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employees?: Prisma.EmployeeUncheckedUpdateManyWithoutDepartmentNestedInput;
    jobPostings?: Prisma.JobPostingUncheckedUpdateManyWithoutDepartmentNestedInput;
};
export type DepartmentUpsertWithWhereUniqueWithoutParentDepartmentInput = {
    where: Prisma.DepartmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.DepartmentUpdateWithoutParentDepartmentInput, Prisma.DepartmentUncheckedUpdateWithoutParentDepartmentInput>;
    create: Prisma.XOR<Prisma.DepartmentCreateWithoutParentDepartmentInput, Prisma.DepartmentUncheckedCreateWithoutParentDepartmentInput>;
};
export type DepartmentUpdateWithWhereUniqueWithoutParentDepartmentInput = {
    where: Prisma.DepartmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.DepartmentUpdateWithoutParentDepartmentInput, Prisma.DepartmentUncheckedUpdateWithoutParentDepartmentInput>;
};
export type DepartmentUpdateManyWithWhereWithoutParentDepartmentInput = {
    where: Prisma.DepartmentScalarWhereInput;
    data: Prisma.XOR<Prisma.DepartmentUpdateManyMutationInput, Prisma.DepartmentUncheckedUpdateManyWithoutParentDepartmentInput>;
};
export type DepartmentCreateWithoutEmployeesInput = {
    id?: string;
    name: string;
    headId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutDepartmentsInput;
    parentDepartment?: Prisma.DepartmentCreateNestedOneWithoutChildDepartmentsInput;
    childDepartments?: Prisma.DepartmentCreateNestedManyWithoutParentDepartmentInput;
    jobPostings?: Prisma.JobPostingCreateNestedManyWithoutDepartmentInput;
};
export type DepartmentUncheckedCreateWithoutEmployeesInput = {
    id?: string;
    organizationId: string;
    name: string;
    parentDepartmentId?: string | null;
    headId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    childDepartments?: Prisma.DepartmentUncheckedCreateNestedManyWithoutParentDepartmentInput;
    jobPostings?: Prisma.JobPostingUncheckedCreateNestedManyWithoutDepartmentInput;
};
export type DepartmentCreateOrConnectWithoutEmployeesInput = {
    where: Prisma.DepartmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DepartmentCreateWithoutEmployeesInput, Prisma.DepartmentUncheckedCreateWithoutEmployeesInput>;
};
export type DepartmentUpsertWithoutEmployeesInput = {
    update: Prisma.XOR<Prisma.DepartmentUpdateWithoutEmployeesInput, Prisma.DepartmentUncheckedUpdateWithoutEmployeesInput>;
    create: Prisma.XOR<Prisma.DepartmentCreateWithoutEmployeesInput, Prisma.DepartmentUncheckedCreateWithoutEmployeesInput>;
    where?: Prisma.DepartmentWhereInput;
};
export type DepartmentUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: Prisma.DepartmentWhereInput;
    data: Prisma.XOR<Prisma.DepartmentUpdateWithoutEmployeesInput, Prisma.DepartmentUncheckedUpdateWithoutEmployeesInput>;
};
export type DepartmentUpdateWithoutEmployeesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    headId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutDepartmentsNestedInput;
    parentDepartment?: Prisma.DepartmentUpdateOneWithoutChildDepartmentsNestedInput;
    childDepartments?: Prisma.DepartmentUpdateManyWithoutParentDepartmentNestedInput;
    jobPostings?: Prisma.JobPostingUpdateManyWithoutDepartmentNestedInput;
};
export type DepartmentUncheckedUpdateWithoutEmployeesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    parentDepartmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    headId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    childDepartments?: Prisma.DepartmentUncheckedUpdateManyWithoutParentDepartmentNestedInput;
    jobPostings?: Prisma.JobPostingUncheckedUpdateManyWithoutDepartmentNestedInput;
};
export type DepartmentCreateWithoutJobPostingsInput = {
    id?: string;
    name: string;
    headId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutDepartmentsInput;
    parentDepartment?: Prisma.DepartmentCreateNestedOneWithoutChildDepartmentsInput;
    childDepartments?: Prisma.DepartmentCreateNestedManyWithoutParentDepartmentInput;
    employees?: Prisma.EmployeeCreateNestedManyWithoutDepartmentInput;
};
export type DepartmentUncheckedCreateWithoutJobPostingsInput = {
    id?: string;
    organizationId: string;
    name: string;
    parentDepartmentId?: string | null;
    headId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    childDepartments?: Prisma.DepartmentUncheckedCreateNestedManyWithoutParentDepartmentInput;
    employees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutDepartmentInput;
};
export type DepartmentCreateOrConnectWithoutJobPostingsInput = {
    where: Prisma.DepartmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DepartmentCreateWithoutJobPostingsInput, Prisma.DepartmentUncheckedCreateWithoutJobPostingsInput>;
};
export type DepartmentUpsertWithoutJobPostingsInput = {
    update: Prisma.XOR<Prisma.DepartmentUpdateWithoutJobPostingsInput, Prisma.DepartmentUncheckedUpdateWithoutJobPostingsInput>;
    create: Prisma.XOR<Prisma.DepartmentCreateWithoutJobPostingsInput, Prisma.DepartmentUncheckedCreateWithoutJobPostingsInput>;
    where?: Prisma.DepartmentWhereInput;
};
export type DepartmentUpdateToOneWithWhereWithoutJobPostingsInput = {
    where?: Prisma.DepartmentWhereInput;
    data: Prisma.XOR<Prisma.DepartmentUpdateWithoutJobPostingsInput, Prisma.DepartmentUncheckedUpdateWithoutJobPostingsInput>;
};
export type DepartmentUpdateWithoutJobPostingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    headId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutDepartmentsNestedInput;
    parentDepartment?: Prisma.DepartmentUpdateOneWithoutChildDepartmentsNestedInput;
    childDepartments?: Prisma.DepartmentUpdateManyWithoutParentDepartmentNestedInput;
    employees?: Prisma.EmployeeUpdateManyWithoutDepartmentNestedInput;
};
export type DepartmentUncheckedUpdateWithoutJobPostingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    parentDepartmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    headId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    childDepartments?: Prisma.DepartmentUncheckedUpdateManyWithoutParentDepartmentNestedInput;
    employees?: Prisma.EmployeeUncheckedUpdateManyWithoutDepartmentNestedInput;
};
export type DepartmentCreateManyOrganizationInput = {
    id?: string;
    name: string;
    parentDepartmentId?: string | null;
    headId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DepartmentUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    headId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    parentDepartment?: Prisma.DepartmentUpdateOneWithoutChildDepartmentsNestedInput;
    childDepartments?: Prisma.DepartmentUpdateManyWithoutParentDepartmentNestedInput;
    employees?: Prisma.EmployeeUpdateManyWithoutDepartmentNestedInput;
    jobPostings?: Prisma.JobPostingUpdateManyWithoutDepartmentNestedInput;
};
export type DepartmentUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    parentDepartmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    headId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    childDepartments?: Prisma.DepartmentUncheckedUpdateManyWithoutParentDepartmentNestedInput;
    employees?: Prisma.EmployeeUncheckedUpdateManyWithoutDepartmentNestedInput;
    jobPostings?: Prisma.JobPostingUncheckedUpdateManyWithoutDepartmentNestedInput;
};
export type DepartmentUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    parentDepartmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    headId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DepartmentCreateManyParentDepartmentInput = {
    id?: string;
    organizationId: string;
    name: string;
    headId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DepartmentUpdateWithoutParentDepartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    headId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutDepartmentsNestedInput;
    childDepartments?: Prisma.DepartmentUpdateManyWithoutParentDepartmentNestedInput;
    employees?: Prisma.EmployeeUpdateManyWithoutDepartmentNestedInput;
    jobPostings?: Prisma.JobPostingUpdateManyWithoutDepartmentNestedInput;
};
export type DepartmentUncheckedUpdateWithoutParentDepartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    headId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    childDepartments?: Prisma.DepartmentUncheckedUpdateManyWithoutParentDepartmentNestedInput;
    employees?: Prisma.EmployeeUncheckedUpdateManyWithoutDepartmentNestedInput;
    jobPostings?: Prisma.JobPostingUncheckedUpdateManyWithoutDepartmentNestedInput;
};
export type DepartmentUncheckedUpdateManyWithoutParentDepartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    headId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DepartmentCountOutputType = {
    childDepartments: number;
    employees: number;
    jobPostings: number;
};
export type DepartmentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    childDepartments?: boolean | DepartmentCountOutputTypeCountChildDepartmentsArgs;
    employees?: boolean | DepartmentCountOutputTypeCountEmployeesArgs;
    jobPostings?: boolean | DepartmentCountOutputTypeCountJobPostingsArgs;
};
export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentCountOutputTypeSelect<ExtArgs> | null;
};
export type DepartmentCountOutputTypeCountChildDepartmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DepartmentWhereInput;
};
export type DepartmentCountOutputTypeCountEmployeesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeWhereInput;
};
export type DepartmentCountOutputTypeCountJobPostingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JobPostingWhereInput;
};
export type DepartmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    parentDepartmentId?: boolean;
    headId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    parentDepartment?: boolean | Prisma.Department$parentDepartmentArgs<ExtArgs>;
    childDepartments?: boolean | Prisma.Department$childDepartmentsArgs<ExtArgs>;
    employees?: boolean | Prisma.Department$employeesArgs<ExtArgs>;
    jobPostings?: boolean | Prisma.Department$jobPostingsArgs<ExtArgs>;
    _count?: boolean | Prisma.DepartmentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["department"]>;
export type DepartmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    parentDepartmentId?: boolean;
    headId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    parentDepartment?: boolean | Prisma.Department$parentDepartmentArgs<ExtArgs>;
}, ExtArgs["result"]["department"]>;
export type DepartmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    parentDepartmentId?: boolean;
    headId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    parentDepartment?: boolean | Prisma.Department$parentDepartmentArgs<ExtArgs>;
}, ExtArgs["result"]["department"]>;
export type DepartmentSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    parentDepartmentId?: boolean;
    headId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type DepartmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "name" | "parentDepartmentId" | "headId" | "createdAt" | "updatedAt", ExtArgs["result"]["department"]>;
export type DepartmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    parentDepartment?: boolean | Prisma.Department$parentDepartmentArgs<ExtArgs>;
    childDepartments?: boolean | Prisma.Department$childDepartmentsArgs<ExtArgs>;
    employees?: boolean | Prisma.Department$employeesArgs<ExtArgs>;
    jobPostings?: boolean | Prisma.Department$jobPostingsArgs<ExtArgs>;
    _count?: boolean | Prisma.DepartmentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    parentDepartment?: boolean | Prisma.Department$parentDepartmentArgs<ExtArgs>;
};
export type DepartmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    parentDepartment?: boolean | Prisma.Department$parentDepartmentArgs<ExtArgs>;
};
export type $DepartmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Department";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        parentDepartment: Prisma.$DepartmentPayload<ExtArgs> | null;
        childDepartments: Prisma.$DepartmentPayload<ExtArgs>[];
        employees: Prisma.$EmployeePayload<ExtArgs>[];
        jobPostings: Prisma.$JobPostingPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        name: string;
        parentDepartmentId: string | null;
        headId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["department"]>;
    composites: {};
};
export type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DepartmentPayload, S>;
export type DepartmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DepartmentCountAggregateInputType | true;
};
export interface DepartmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Department'];
        meta: {
            name: 'Department';
        };
    };
    findUnique<T extends DepartmentFindUniqueArgs>(args: Prisma.SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DepartmentFindFirstArgs>(args?: Prisma.SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DepartmentFindManyArgs>(args?: Prisma.SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DepartmentCreateArgs>(args: Prisma.SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DepartmentCreateManyArgs>(args?: Prisma.SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DepartmentDeleteArgs>(args: Prisma.SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DepartmentUpdateArgs>(args: Prisma.SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DepartmentUpdateManyArgs>(args: Prisma.SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DepartmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DepartmentUpsertArgs>(args: Prisma.SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DepartmentCountArgs>(args?: Prisma.Subset<T, DepartmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DepartmentCountAggregateOutputType> : number>;
    aggregate<T extends DepartmentAggregateArgs>(args: Prisma.Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>;
    groupBy<T extends DepartmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DepartmentGroupByArgs['orderBy'];
    } : {
        orderBy?: DepartmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DepartmentFieldRefs;
}
export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    parentDepartment<T extends Prisma.Department$parentDepartmentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Department$parentDepartmentArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    childDepartments<T extends Prisma.Department$childDepartmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Department$childDepartmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    employees<T extends Prisma.Department$employeesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Department$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    jobPostings<T extends Prisma.Department$jobPostingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Department$jobPostingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DepartmentFieldRefs {
    readonly id: Prisma.FieldRef<"Department", 'String'>;
    readonly organizationId: Prisma.FieldRef<"Department", 'String'>;
    readonly name: Prisma.FieldRef<"Department", 'String'>;
    readonly parentDepartmentId: Prisma.FieldRef<"Department", 'String'>;
    readonly headId: Prisma.FieldRef<"Department", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Department", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Department", 'DateTime'>;
}
export type DepartmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where: Prisma.DepartmentWhereUniqueInput;
};
export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where: Prisma.DepartmentWhereUniqueInput;
};
export type DepartmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where?: Prisma.DepartmentWhereInput;
    orderBy?: Prisma.DepartmentOrderByWithRelationInput | Prisma.DepartmentOrderByWithRelationInput[];
    cursor?: Prisma.DepartmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DepartmentScalarFieldEnum | Prisma.DepartmentScalarFieldEnum[];
};
export type DepartmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where?: Prisma.DepartmentWhereInput;
    orderBy?: Prisma.DepartmentOrderByWithRelationInput | Prisma.DepartmentOrderByWithRelationInput[];
    cursor?: Prisma.DepartmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DepartmentScalarFieldEnum | Prisma.DepartmentScalarFieldEnum[];
};
export type DepartmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where?: Prisma.DepartmentWhereInput;
    orderBy?: Prisma.DepartmentOrderByWithRelationInput | Prisma.DepartmentOrderByWithRelationInput[];
    cursor?: Prisma.DepartmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DepartmentScalarFieldEnum | Prisma.DepartmentScalarFieldEnum[];
};
export type DepartmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DepartmentCreateInput, Prisma.DepartmentUncheckedCreateInput>;
};
export type DepartmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DepartmentCreateManyInput | Prisma.DepartmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DepartmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    data: Prisma.DepartmentCreateManyInput | Prisma.DepartmentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DepartmentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DepartmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DepartmentUpdateInput, Prisma.DepartmentUncheckedUpdateInput>;
    where: Prisma.DepartmentWhereUniqueInput;
};
export type DepartmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DepartmentUpdateManyMutationInput, Prisma.DepartmentUncheckedUpdateManyInput>;
    where?: Prisma.DepartmentWhereInput;
    limit?: number;
};
export type DepartmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DepartmentUpdateManyMutationInput, Prisma.DepartmentUncheckedUpdateManyInput>;
    where?: Prisma.DepartmentWhereInput;
    limit?: number;
    include?: Prisma.DepartmentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DepartmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where: Prisma.DepartmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DepartmentCreateInput, Prisma.DepartmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DepartmentUpdateInput, Prisma.DepartmentUncheckedUpdateInput>;
};
export type DepartmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where: Prisma.DepartmentWhereUniqueInput;
};
export type DepartmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DepartmentWhereInput;
    limit?: number;
};
export type Department$parentDepartmentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where?: Prisma.DepartmentWhereInput;
};
export type Department$childDepartmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where?: Prisma.DepartmentWhereInput;
    orderBy?: Prisma.DepartmentOrderByWithRelationInput | Prisma.DepartmentOrderByWithRelationInput[];
    cursor?: Prisma.DepartmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DepartmentScalarFieldEnum | Prisma.DepartmentScalarFieldEnum[];
};
export type Department$employeesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Department$jobPostingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JobPostingSelect<ExtArgs> | null;
    omit?: Prisma.JobPostingOmit<ExtArgs> | null;
    include?: Prisma.JobPostingInclude<ExtArgs> | null;
    where?: Prisma.JobPostingWhereInput;
    orderBy?: Prisma.JobPostingOrderByWithRelationInput | Prisma.JobPostingOrderByWithRelationInput[];
    cursor?: Prisma.JobPostingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.JobPostingScalarFieldEnum | Prisma.JobPostingScalarFieldEnum[];
};
export type DepartmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
};
