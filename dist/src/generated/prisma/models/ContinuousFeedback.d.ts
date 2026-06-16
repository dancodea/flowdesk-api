import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ContinuousFeedbackModel = runtime.Types.Result.DefaultSelection<Prisma.$ContinuousFeedbackPayload>;
export type AggregateContinuousFeedback = {
    _count: ContinuousFeedbackCountAggregateOutputType | null;
    _min: ContinuousFeedbackMinAggregateOutputType | null;
    _max: ContinuousFeedbackMaxAggregateOutputType | null;
};
export type ContinuousFeedbackMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    fromEmployeeId: string | null;
    toEmployeeId: string | null;
    message: string | null;
    isAnonymous: boolean | null;
    createdAt: Date | null;
};
export type ContinuousFeedbackMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    fromEmployeeId: string | null;
    toEmployeeId: string | null;
    message: string | null;
    isAnonymous: boolean | null;
    createdAt: Date | null;
};
export type ContinuousFeedbackCountAggregateOutputType = {
    id: number;
    organizationId: number;
    fromEmployeeId: number;
    toEmployeeId: number;
    message: number;
    isAnonymous: number;
    createdAt: number;
    _all: number;
};
export type ContinuousFeedbackMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    fromEmployeeId?: true;
    toEmployeeId?: true;
    message?: true;
    isAnonymous?: true;
    createdAt?: true;
};
export type ContinuousFeedbackMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    fromEmployeeId?: true;
    toEmployeeId?: true;
    message?: true;
    isAnonymous?: true;
    createdAt?: true;
};
export type ContinuousFeedbackCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    fromEmployeeId?: true;
    toEmployeeId?: true;
    message?: true;
    isAnonymous?: true;
    createdAt?: true;
    _all?: true;
};
export type ContinuousFeedbackAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContinuousFeedbackWhereInput;
    orderBy?: Prisma.ContinuousFeedbackOrderByWithRelationInput | Prisma.ContinuousFeedbackOrderByWithRelationInput[];
    cursor?: Prisma.ContinuousFeedbackWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ContinuousFeedbackCountAggregateInputType;
    _min?: ContinuousFeedbackMinAggregateInputType;
    _max?: ContinuousFeedbackMaxAggregateInputType;
};
export type GetContinuousFeedbackAggregateType<T extends ContinuousFeedbackAggregateArgs> = {
    [P in keyof T & keyof AggregateContinuousFeedback]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateContinuousFeedback[P]> : Prisma.GetScalarType<T[P], AggregateContinuousFeedback[P]>;
};
export type ContinuousFeedbackGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContinuousFeedbackWhereInput;
    orderBy?: Prisma.ContinuousFeedbackOrderByWithAggregationInput | Prisma.ContinuousFeedbackOrderByWithAggregationInput[];
    by: Prisma.ContinuousFeedbackScalarFieldEnum[] | Prisma.ContinuousFeedbackScalarFieldEnum;
    having?: Prisma.ContinuousFeedbackScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContinuousFeedbackCountAggregateInputType | true;
    _min?: ContinuousFeedbackMinAggregateInputType;
    _max?: ContinuousFeedbackMaxAggregateInputType;
};
export type ContinuousFeedbackGroupByOutputType = {
    id: string;
    organizationId: string;
    fromEmployeeId: string | null;
    toEmployeeId: string | null;
    message: string;
    isAnonymous: boolean;
    createdAt: Date;
    _count: ContinuousFeedbackCountAggregateOutputType | null;
    _min: ContinuousFeedbackMinAggregateOutputType | null;
    _max: ContinuousFeedbackMaxAggregateOutputType | null;
};
export type GetContinuousFeedbackGroupByPayload<T extends ContinuousFeedbackGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ContinuousFeedbackGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ContinuousFeedbackGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ContinuousFeedbackGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ContinuousFeedbackGroupByOutputType[P]>;
}>>;
export type ContinuousFeedbackWhereInput = {
    AND?: Prisma.ContinuousFeedbackWhereInput | Prisma.ContinuousFeedbackWhereInput[];
    OR?: Prisma.ContinuousFeedbackWhereInput[];
    NOT?: Prisma.ContinuousFeedbackWhereInput | Prisma.ContinuousFeedbackWhereInput[];
    id?: Prisma.UuidFilter<"ContinuousFeedback"> | string;
    organizationId?: Prisma.UuidFilter<"ContinuousFeedback"> | string;
    fromEmployeeId?: Prisma.UuidNullableFilter<"ContinuousFeedback"> | string | null;
    toEmployeeId?: Prisma.UuidNullableFilter<"ContinuousFeedback"> | string | null;
    message?: Prisma.StringFilter<"ContinuousFeedback"> | string;
    isAnonymous?: Prisma.BoolFilter<"ContinuousFeedback"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ContinuousFeedback"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    fromEmployee?: Prisma.XOR<Prisma.EmployeeNullableScalarRelationFilter, Prisma.EmployeeWhereInput> | null;
    toEmployee?: Prisma.XOR<Prisma.EmployeeNullableScalarRelationFilter, Prisma.EmployeeWhereInput> | null;
};
export type ContinuousFeedbackOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    fromEmployeeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    toEmployeeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    message?: Prisma.SortOrder;
    isAnonymous?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    fromEmployee?: Prisma.EmployeeOrderByWithRelationInput;
    toEmployee?: Prisma.EmployeeOrderByWithRelationInput;
};
export type ContinuousFeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ContinuousFeedbackWhereInput | Prisma.ContinuousFeedbackWhereInput[];
    OR?: Prisma.ContinuousFeedbackWhereInput[];
    NOT?: Prisma.ContinuousFeedbackWhereInput | Prisma.ContinuousFeedbackWhereInput[];
    organizationId?: Prisma.UuidFilter<"ContinuousFeedback"> | string;
    fromEmployeeId?: Prisma.UuidNullableFilter<"ContinuousFeedback"> | string | null;
    toEmployeeId?: Prisma.UuidNullableFilter<"ContinuousFeedback"> | string | null;
    message?: Prisma.StringFilter<"ContinuousFeedback"> | string;
    isAnonymous?: Prisma.BoolFilter<"ContinuousFeedback"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ContinuousFeedback"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    fromEmployee?: Prisma.XOR<Prisma.EmployeeNullableScalarRelationFilter, Prisma.EmployeeWhereInput> | null;
    toEmployee?: Prisma.XOR<Prisma.EmployeeNullableScalarRelationFilter, Prisma.EmployeeWhereInput> | null;
}, "id">;
export type ContinuousFeedbackOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    fromEmployeeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    toEmployeeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    message?: Prisma.SortOrder;
    isAnonymous?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ContinuousFeedbackCountOrderByAggregateInput;
    _max?: Prisma.ContinuousFeedbackMaxOrderByAggregateInput;
    _min?: Prisma.ContinuousFeedbackMinOrderByAggregateInput;
};
export type ContinuousFeedbackScalarWhereWithAggregatesInput = {
    AND?: Prisma.ContinuousFeedbackScalarWhereWithAggregatesInput | Prisma.ContinuousFeedbackScalarWhereWithAggregatesInput[];
    OR?: Prisma.ContinuousFeedbackScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ContinuousFeedbackScalarWhereWithAggregatesInput | Prisma.ContinuousFeedbackScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ContinuousFeedback"> | string;
    organizationId?: Prisma.UuidWithAggregatesFilter<"ContinuousFeedback"> | string;
    fromEmployeeId?: Prisma.UuidNullableWithAggregatesFilter<"ContinuousFeedback"> | string | null;
    toEmployeeId?: Prisma.UuidNullableWithAggregatesFilter<"ContinuousFeedback"> | string | null;
    message?: Prisma.StringWithAggregatesFilter<"ContinuousFeedback"> | string;
    isAnonymous?: Prisma.BoolWithAggregatesFilter<"ContinuousFeedback"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ContinuousFeedback"> | Date | string;
};
export type ContinuousFeedbackCreateInput = {
    id?: string;
    message: string;
    isAnonymous?: boolean;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutContinuousFeedbackInput;
    fromEmployee?: Prisma.EmployeeCreateNestedOneWithoutFeedbackGivenInput;
    toEmployee?: Prisma.EmployeeCreateNestedOneWithoutFeedbackReceivedInput;
};
export type ContinuousFeedbackUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    fromEmployeeId?: string | null;
    toEmployeeId?: string | null;
    message: string;
    isAnonymous?: boolean;
    createdAt?: Date | string;
};
export type ContinuousFeedbackUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    isAnonymous?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutContinuousFeedbackNestedInput;
    fromEmployee?: Prisma.EmployeeUpdateOneWithoutFeedbackGivenNestedInput;
    toEmployee?: Prisma.EmployeeUpdateOneWithoutFeedbackReceivedNestedInput;
};
export type ContinuousFeedbackUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    fromEmployeeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    toEmployeeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    isAnonymous?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContinuousFeedbackCreateManyInput = {
    id?: string;
    organizationId: string;
    fromEmployeeId?: string | null;
    toEmployeeId?: string | null;
    message: string;
    isAnonymous?: boolean;
    createdAt?: Date | string;
};
export type ContinuousFeedbackUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    isAnonymous?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContinuousFeedbackUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    fromEmployeeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    toEmployeeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    isAnonymous?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContinuousFeedbackListRelationFilter = {
    every?: Prisma.ContinuousFeedbackWhereInput;
    some?: Prisma.ContinuousFeedbackWhereInput;
    none?: Prisma.ContinuousFeedbackWhereInput;
};
export type ContinuousFeedbackOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ContinuousFeedbackCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    fromEmployeeId?: Prisma.SortOrder;
    toEmployeeId?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    isAnonymous?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ContinuousFeedbackMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    fromEmployeeId?: Prisma.SortOrder;
    toEmployeeId?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    isAnonymous?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ContinuousFeedbackMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    fromEmployeeId?: Prisma.SortOrder;
    toEmployeeId?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    isAnonymous?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ContinuousFeedbackCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.ContinuousFeedbackCreateWithoutOrganizationInput, Prisma.ContinuousFeedbackUncheckedCreateWithoutOrganizationInput> | Prisma.ContinuousFeedbackCreateWithoutOrganizationInput[] | Prisma.ContinuousFeedbackUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.ContinuousFeedbackCreateOrConnectWithoutOrganizationInput | Prisma.ContinuousFeedbackCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.ContinuousFeedbackCreateManyOrganizationInputEnvelope;
    connect?: Prisma.ContinuousFeedbackWhereUniqueInput | Prisma.ContinuousFeedbackWhereUniqueInput[];
};
export type ContinuousFeedbackUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.ContinuousFeedbackCreateWithoutOrganizationInput, Prisma.ContinuousFeedbackUncheckedCreateWithoutOrganizationInput> | Prisma.ContinuousFeedbackCreateWithoutOrganizationInput[] | Prisma.ContinuousFeedbackUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.ContinuousFeedbackCreateOrConnectWithoutOrganizationInput | Prisma.ContinuousFeedbackCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.ContinuousFeedbackCreateManyOrganizationInputEnvelope;
    connect?: Prisma.ContinuousFeedbackWhereUniqueInput | Prisma.ContinuousFeedbackWhereUniqueInput[];
};
export type ContinuousFeedbackUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.ContinuousFeedbackCreateWithoutOrganizationInput, Prisma.ContinuousFeedbackUncheckedCreateWithoutOrganizationInput> | Prisma.ContinuousFeedbackCreateWithoutOrganizationInput[] | Prisma.ContinuousFeedbackUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.ContinuousFeedbackCreateOrConnectWithoutOrganizationInput | Prisma.ContinuousFeedbackCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.ContinuousFeedbackUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.ContinuousFeedbackUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.ContinuousFeedbackCreateManyOrganizationInputEnvelope;
    set?: Prisma.ContinuousFeedbackWhereUniqueInput | Prisma.ContinuousFeedbackWhereUniqueInput[];
    disconnect?: Prisma.ContinuousFeedbackWhereUniqueInput | Prisma.ContinuousFeedbackWhereUniqueInput[];
    delete?: Prisma.ContinuousFeedbackWhereUniqueInput | Prisma.ContinuousFeedbackWhereUniqueInput[];
    connect?: Prisma.ContinuousFeedbackWhereUniqueInput | Prisma.ContinuousFeedbackWhereUniqueInput[];
    update?: Prisma.ContinuousFeedbackUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.ContinuousFeedbackUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.ContinuousFeedbackUpdateManyWithWhereWithoutOrganizationInput | Prisma.ContinuousFeedbackUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.ContinuousFeedbackScalarWhereInput | Prisma.ContinuousFeedbackScalarWhereInput[];
};
export type ContinuousFeedbackUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.ContinuousFeedbackCreateWithoutOrganizationInput, Prisma.ContinuousFeedbackUncheckedCreateWithoutOrganizationInput> | Prisma.ContinuousFeedbackCreateWithoutOrganizationInput[] | Prisma.ContinuousFeedbackUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.ContinuousFeedbackCreateOrConnectWithoutOrganizationInput | Prisma.ContinuousFeedbackCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.ContinuousFeedbackUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.ContinuousFeedbackUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.ContinuousFeedbackCreateManyOrganizationInputEnvelope;
    set?: Prisma.ContinuousFeedbackWhereUniqueInput | Prisma.ContinuousFeedbackWhereUniqueInput[];
    disconnect?: Prisma.ContinuousFeedbackWhereUniqueInput | Prisma.ContinuousFeedbackWhereUniqueInput[];
    delete?: Prisma.ContinuousFeedbackWhereUniqueInput | Prisma.ContinuousFeedbackWhereUniqueInput[];
    connect?: Prisma.ContinuousFeedbackWhereUniqueInput | Prisma.ContinuousFeedbackWhereUniqueInput[];
    update?: Prisma.ContinuousFeedbackUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.ContinuousFeedbackUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.ContinuousFeedbackUpdateManyWithWhereWithoutOrganizationInput | Prisma.ContinuousFeedbackUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.ContinuousFeedbackScalarWhereInput | Prisma.ContinuousFeedbackScalarWhereInput[];
};
export type ContinuousFeedbackCreateNestedManyWithoutFromEmployeeInput = {
    create?: Prisma.XOR<Prisma.ContinuousFeedbackCreateWithoutFromEmployeeInput, Prisma.ContinuousFeedbackUncheckedCreateWithoutFromEmployeeInput> | Prisma.ContinuousFeedbackCreateWithoutFromEmployeeInput[] | Prisma.ContinuousFeedbackUncheckedCreateWithoutFromEmployeeInput[];
    connectOrCreate?: Prisma.ContinuousFeedbackCreateOrConnectWithoutFromEmployeeInput | Prisma.ContinuousFeedbackCreateOrConnectWithoutFromEmployeeInput[];
    createMany?: Prisma.ContinuousFeedbackCreateManyFromEmployeeInputEnvelope;
    connect?: Prisma.ContinuousFeedbackWhereUniqueInput | Prisma.ContinuousFeedbackWhereUniqueInput[];
};
export type ContinuousFeedbackCreateNestedManyWithoutToEmployeeInput = {
    create?: Prisma.XOR<Prisma.ContinuousFeedbackCreateWithoutToEmployeeInput, Prisma.ContinuousFeedbackUncheckedCreateWithoutToEmployeeInput> | Prisma.ContinuousFeedbackCreateWithoutToEmployeeInput[] | Prisma.ContinuousFeedbackUncheckedCreateWithoutToEmployeeInput[];
    connectOrCreate?: Prisma.ContinuousFeedbackCreateOrConnectWithoutToEmployeeInput | Prisma.ContinuousFeedbackCreateOrConnectWithoutToEmployeeInput[];
    createMany?: Prisma.ContinuousFeedbackCreateManyToEmployeeInputEnvelope;
    connect?: Prisma.ContinuousFeedbackWhereUniqueInput | Prisma.ContinuousFeedbackWhereUniqueInput[];
};
export type ContinuousFeedbackUncheckedCreateNestedManyWithoutFromEmployeeInput = {
    create?: Prisma.XOR<Prisma.ContinuousFeedbackCreateWithoutFromEmployeeInput, Prisma.ContinuousFeedbackUncheckedCreateWithoutFromEmployeeInput> | Prisma.ContinuousFeedbackCreateWithoutFromEmployeeInput[] | Prisma.ContinuousFeedbackUncheckedCreateWithoutFromEmployeeInput[];
    connectOrCreate?: Prisma.ContinuousFeedbackCreateOrConnectWithoutFromEmployeeInput | Prisma.ContinuousFeedbackCreateOrConnectWithoutFromEmployeeInput[];
    createMany?: Prisma.ContinuousFeedbackCreateManyFromEmployeeInputEnvelope;
    connect?: Prisma.ContinuousFeedbackWhereUniqueInput | Prisma.ContinuousFeedbackWhereUniqueInput[];
};
export type ContinuousFeedbackUncheckedCreateNestedManyWithoutToEmployeeInput = {
    create?: Prisma.XOR<Prisma.ContinuousFeedbackCreateWithoutToEmployeeInput, Prisma.ContinuousFeedbackUncheckedCreateWithoutToEmployeeInput> | Prisma.ContinuousFeedbackCreateWithoutToEmployeeInput[] | Prisma.ContinuousFeedbackUncheckedCreateWithoutToEmployeeInput[];
    connectOrCreate?: Prisma.ContinuousFeedbackCreateOrConnectWithoutToEmployeeInput | Prisma.ContinuousFeedbackCreateOrConnectWithoutToEmployeeInput[];
    createMany?: Prisma.ContinuousFeedbackCreateManyToEmployeeInputEnvelope;
    connect?: Prisma.ContinuousFeedbackWhereUniqueInput | Prisma.ContinuousFeedbackWhereUniqueInput[];
};
export type ContinuousFeedbackUpdateManyWithoutFromEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.ContinuousFeedbackCreateWithoutFromEmployeeInput, Prisma.ContinuousFeedbackUncheckedCreateWithoutFromEmployeeInput> | Prisma.ContinuousFeedbackCreateWithoutFromEmployeeInput[] | Prisma.ContinuousFeedbackUncheckedCreateWithoutFromEmployeeInput[];
    connectOrCreate?: Prisma.ContinuousFeedbackCreateOrConnectWithoutFromEmployeeInput | Prisma.ContinuousFeedbackCreateOrConnectWithoutFromEmployeeInput[];
    upsert?: Prisma.ContinuousFeedbackUpsertWithWhereUniqueWithoutFromEmployeeInput | Prisma.ContinuousFeedbackUpsertWithWhereUniqueWithoutFromEmployeeInput[];
    createMany?: Prisma.ContinuousFeedbackCreateManyFromEmployeeInputEnvelope;
    set?: Prisma.ContinuousFeedbackWhereUniqueInput | Prisma.ContinuousFeedbackWhereUniqueInput[];
    disconnect?: Prisma.ContinuousFeedbackWhereUniqueInput | Prisma.ContinuousFeedbackWhereUniqueInput[];
    delete?: Prisma.ContinuousFeedbackWhereUniqueInput | Prisma.ContinuousFeedbackWhereUniqueInput[];
    connect?: Prisma.ContinuousFeedbackWhereUniqueInput | Prisma.ContinuousFeedbackWhereUniqueInput[];
    update?: Prisma.ContinuousFeedbackUpdateWithWhereUniqueWithoutFromEmployeeInput | Prisma.ContinuousFeedbackUpdateWithWhereUniqueWithoutFromEmployeeInput[];
    updateMany?: Prisma.ContinuousFeedbackUpdateManyWithWhereWithoutFromEmployeeInput | Prisma.ContinuousFeedbackUpdateManyWithWhereWithoutFromEmployeeInput[];
    deleteMany?: Prisma.ContinuousFeedbackScalarWhereInput | Prisma.ContinuousFeedbackScalarWhereInput[];
};
export type ContinuousFeedbackUpdateManyWithoutToEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.ContinuousFeedbackCreateWithoutToEmployeeInput, Prisma.ContinuousFeedbackUncheckedCreateWithoutToEmployeeInput> | Prisma.ContinuousFeedbackCreateWithoutToEmployeeInput[] | Prisma.ContinuousFeedbackUncheckedCreateWithoutToEmployeeInput[];
    connectOrCreate?: Prisma.ContinuousFeedbackCreateOrConnectWithoutToEmployeeInput | Prisma.ContinuousFeedbackCreateOrConnectWithoutToEmployeeInput[];
    upsert?: Prisma.ContinuousFeedbackUpsertWithWhereUniqueWithoutToEmployeeInput | Prisma.ContinuousFeedbackUpsertWithWhereUniqueWithoutToEmployeeInput[];
    createMany?: Prisma.ContinuousFeedbackCreateManyToEmployeeInputEnvelope;
    set?: Prisma.ContinuousFeedbackWhereUniqueInput | Prisma.ContinuousFeedbackWhereUniqueInput[];
    disconnect?: Prisma.ContinuousFeedbackWhereUniqueInput | Prisma.ContinuousFeedbackWhereUniqueInput[];
    delete?: Prisma.ContinuousFeedbackWhereUniqueInput | Prisma.ContinuousFeedbackWhereUniqueInput[];
    connect?: Prisma.ContinuousFeedbackWhereUniqueInput | Prisma.ContinuousFeedbackWhereUniqueInput[];
    update?: Prisma.ContinuousFeedbackUpdateWithWhereUniqueWithoutToEmployeeInput | Prisma.ContinuousFeedbackUpdateWithWhereUniqueWithoutToEmployeeInput[];
    updateMany?: Prisma.ContinuousFeedbackUpdateManyWithWhereWithoutToEmployeeInput | Prisma.ContinuousFeedbackUpdateManyWithWhereWithoutToEmployeeInput[];
    deleteMany?: Prisma.ContinuousFeedbackScalarWhereInput | Prisma.ContinuousFeedbackScalarWhereInput[];
};
export type ContinuousFeedbackUncheckedUpdateManyWithoutFromEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.ContinuousFeedbackCreateWithoutFromEmployeeInput, Prisma.ContinuousFeedbackUncheckedCreateWithoutFromEmployeeInput> | Prisma.ContinuousFeedbackCreateWithoutFromEmployeeInput[] | Prisma.ContinuousFeedbackUncheckedCreateWithoutFromEmployeeInput[];
    connectOrCreate?: Prisma.ContinuousFeedbackCreateOrConnectWithoutFromEmployeeInput | Prisma.ContinuousFeedbackCreateOrConnectWithoutFromEmployeeInput[];
    upsert?: Prisma.ContinuousFeedbackUpsertWithWhereUniqueWithoutFromEmployeeInput | Prisma.ContinuousFeedbackUpsertWithWhereUniqueWithoutFromEmployeeInput[];
    createMany?: Prisma.ContinuousFeedbackCreateManyFromEmployeeInputEnvelope;
    set?: Prisma.ContinuousFeedbackWhereUniqueInput | Prisma.ContinuousFeedbackWhereUniqueInput[];
    disconnect?: Prisma.ContinuousFeedbackWhereUniqueInput | Prisma.ContinuousFeedbackWhereUniqueInput[];
    delete?: Prisma.ContinuousFeedbackWhereUniqueInput | Prisma.ContinuousFeedbackWhereUniqueInput[];
    connect?: Prisma.ContinuousFeedbackWhereUniqueInput | Prisma.ContinuousFeedbackWhereUniqueInput[];
    update?: Prisma.ContinuousFeedbackUpdateWithWhereUniqueWithoutFromEmployeeInput | Prisma.ContinuousFeedbackUpdateWithWhereUniqueWithoutFromEmployeeInput[];
    updateMany?: Prisma.ContinuousFeedbackUpdateManyWithWhereWithoutFromEmployeeInput | Prisma.ContinuousFeedbackUpdateManyWithWhereWithoutFromEmployeeInput[];
    deleteMany?: Prisma.ContinuousFeedbackScalarWhereInput | Prisma.ContinuousFeedbackScalarWhereInput[];
};
export type ContinuousFeedbackUncheckedUpdateManyWithoutToEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.ContinuousFeedbackCreateWithoutToEmployeeInput, Prisma.ContinuousFeedbackUncheckedCreateWithoutToEmployeeInput> | Prisma.ContinuousFeedbackCreateWithoutToEmployeeInput[] | Prisma.ContinuousFeedbackUncheckedCreateWithoutToEmployeeInput[];
    connectOrCreate?: Prisma.ContinuousFeedbackCreateOrConnectWithoutToEmployeeInput | Prisma.ContinuousFeedbackCreateOrConnectWithoutToEmployeeInput[];
    upsert?: Prisma.ContinuousFeedbackUpsertWithWhereUniqueWithoutToEmployeeInput | Prisma.ContinuousFeedbackUpsertWithWhereUniqueWithoutToEmployeeInput[];
    createMany?: Prisma.ContinuousFeedbackCreateManyToEmployeeInputEnvelope;
    set?: Prisma.ContinuousFeedbackWhereUniqueInput | Prisma.ContinuousFeedbackWhereUniqueInput[];
    disconnect?: Prisma.ContinuousFeedbackWhereUniqueInput | Prisma.ContinuousFeedbackWhereUniqueInput[];
    delete?: Prisma.ContinuousFeedbackWhereUniqueInput | Prisma.ContinuousFeedbackWhereUniqueInput[];
    connect?: Prisma.ContinuousFeedbackWhereUniqueInput | Prisma.ContinuousFeedbackWhereUniqueInput[];
    update?: Prisma.ContinuousFeedbackUpdateWithWhereUniqueWithoutToEmployeeInput | Prisma.ContinuousFeedbackUpdateWithWhereUniqueWithoutToEmployeeInput[];
    updateMany?: Prisma.ContinuousFeedbackUpdateManyWithWhereWithoutToEmployeeInput | Prisma.ContinuousFeedbackUpdateManyWithWhereWithoutToEmployeeInput[];
    deleteMany?: Prisma.ContinuousFeedbackScalarWhereInput | Prisma.ContinuousFeedbackScalarWhereInput[];
};
export type ContinuousFeedbackCreateWithoutOrganizationInput = {
    id?: string;
    message: string;
    isAnonymous?: boolean;
    createdAt?: Date | string;
    fromEmployee?: Prisma.EmployeeCreateNestedOneWithoutFeedbackGivenInput;
    toEmployee?: Prisma.EmployeeCreateNestedOneWithoutFeedbackReceivedInput;
};
export type ContinuousFeedbackUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    fromEmployeeId?: string | null;
    toEmployeeId?: string | null;
    message: string;
    isAnonymous?: boolean;
    createdAt?: Date | string;
};
export type ContinuousFeedbackCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.ContinuousFeedbackWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContinuousFeedbackCreateWithoutOrganizationInput, Prisma.ContinuousFeedbackUncheckedCreateWithoutOrganizationInput>;
};
export type ContinuousFeedbackCreateManyOrganizationInputEnvelope = {
    data: Prisma.ContinuousFeedbackCreateManyOrganizationInput | Prisma.ContinuousFeedbackCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type ContinuousFeedbackUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.ContinuousFeedbackWhereUniqueInput;
    update: Prisma.XOR<Prisma.ContinuousFeedbackUpdateWithoutOrganizationInput, Prisma.ContinuousFeedbackUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.ContinuousFeedbackCreateWithoutOrganizationInput, Prisma.ContinuousFeedbackUncheckedCreateWithoutOrganizationInput>;
};
export type ContinuousFeedbackUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.ContinuousFeedbackWhereUniqueInput;
    data: Prisma.XOR<Prisma.ContinuousFeedbackUpdateWithoutOrganizationInput, Prisma.ContinuousFeedbackUncheckedUpdateWithoutOrganizationInput>;
};
export type ContinuousFeedbackUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.ContinuousFeedbackScalarWhereInput;
    data: Prisma.XOR<Prisma.ContinuousFeedbackUpdateManyMutationInput, Prisma.ContinuousFeedbackUncheckedUpdateManyWithoutOrganizationInput>;
};
export type ContinuousFeedbackScalarWhereInput = {
    AND?: Prisma.ContinuousFeedbackScalarWhereInput | Prisma.ContinuousFeedbackScalarWhereInput[];
    OR?: Prisma.ContinuousFeedbackScalarWhereInput[];
    NOT?: Prisma.ContinuousFeedbackScalarWhereInput | Prisma.ContinuousFeedbackScalarWhereInput[];
    id?: Prisma.UuidFilter<"ContinuousFeedback"> | string;
    organizationId?: Prisma.UuidFilter<"ContinuousFeedback"> | string;
    fromEmployeeId?: Prisma.UuidNullableFilter<"ContinuousFeedback"> | string | null;
    toEmployeeId?: Prisma.UuidNullableFilter<"ContinuousFeedback"> | string | null;
    message?: Prisma.StringFilter<"ContinuousFeedback"> | string;
    isAnonymous?: Prisma.BoolFilter<"ContinuousFeedback"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ContinuousFeedback"> | Date | string;
};
export type ContinuousFeedbackCreateWithoutFromEmployeeInput = {
    id?: string;
    message: string;
    isAnonymous?: boolean;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutContinuousFeedbackInput;
    toEmployee?: Prisma.EmployeeCreateNestedOneWithoutFeedbackReceivedInput;
};
export type ContinuousFeedbackUncheckedCreateWithoutFromEmployeeInput = {
    id?: string;
    organizationId: string;
    toEmployeeId?: string | null;
    message: string;
    isAnonymous?: boolean;
    createdAt?: Date | string;
};
export type ContinuousFeedbackCreateOrConnectWithoutFromEmployeeInput = {
    where: Prisma.ContinuousFeedbackWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContinuousFeedbackCreateWithoutFromEmployeeInput, Prisma.ContinuousFeedbackUncheckedCreateWithoutFromEmployeeInput>;
};
export type ContinuousFeedbackCreateManyFromEmployeeInputEnvelope = {
    data: Prisma.ContinuousFeedbackCreateManyFromEmployeeInput | Prisma.ContinuousFeedbackCreateManyFromEmployeeInput[];
    skipDuplicates?: boolean;
};
export type ContinuousFeedbackCreateWithoutToEmployeeInput = {
    id?: string;
    message: string;
    isAnonymous?: boolean;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutContinuousFeedbackInput;
    fromEmployee?: Prisma.EmployeeCreateNestedOneWithoutFeedbackGivenInput;
};
export type ContinuousFeedbackUncheckedCreateWithoutToEmployeeInput = {
    id?: string;
    organizationId: string;
    fromEmployeeId?: string | null;
    message: string;
    isAnonymous?: boolean;
    createdAt?: Date | string;
};
export type ContinuousFeedbackCreateOrConnectWithoutToEmployeeInput = {
    where: Prisma.ContinuousFeedbackWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContinuousFeedbackCreateWithoutToEmployeeInput, Prisma.ContinuousFeedbackUncheckedCreateWithoutToEmployeeInput>;
};
export type ContinuousFeedbackCreateManyToEmployeeInputEnvelope = {
    data: Prisma.ContinuousFeedbackCreateManyToEmployeeInput | Prisma.ContinuousFeedbackCreateManyToEmployeeInput[];
    skipDuplicates?: boolean;
};
export type ContinuousFeedbackUpsertWithWhereUniqueWithoutFromEmployeeInput = {
    where: Prisma.ContinuousFeedbackWhereUniqueInput;
    update: Prisma.XOR<Prisma.ContinuousFeedbackUpdateWithoutFromEmployeeInput, Prisma.ContinuousFeedbackUncheckedUpdateWithoutFromEmployeeInput>;
    create: Prisma.XOR<Prisma.ContinuousFeedbackCreateWithoutFromEmployeeInput, Prisma.ContinuousFeedbackUncheckedCreateWithoutFromEmployeeInput>;
};
export type ContinuousFeedbackUpdateWithWhereUniqueWithoutFromEmployeeInput = {
    where: Prisma.ContinuousFeedbackWhereUniqueInput;
    data: Prisma.XOR<Prisma.ContinuousFeedbackUpdateWithoutFromEmployeeInput, Prisma.ContinuousFeedbackUncheckedUpdateWithoutFromEmployeeInput>;
};
export type ContinuousFeedbackUpdateManyWithWhereWithoutFromEmployeeInput = {
    where: Prisma.ContinuousFeedbackScalarWhereInput;
    data: Prisma.XOR<Prisma.ContinuousFeedbackUpdateManyMutationInput, Prisma.ContinuousFeedbackUncheckedUpdateManyWithoutFromEmployeeInput>;
};
export type ContinuousFeedbackUpsertWithWhereUniqueWithoutToEmployeeInput = {
    where: Prisma.ContinuousFeedbackWhereUniqueInput;
    update: Prisma.XOR<Prisma.ContinuousFeedbackUpdateWithoutToEmployeeInput, Prisma.ContinuousFeedbackUncheckedUpdateWithoutToEmployeeInput>;
    create: Prisma.XOR<Prisma.ContinuousFeedbackCreateWithoutToEmployeeInput, Prisma.ContinuousFeedbackUncheckedCreateWithoutToEmployeeInput>;
};
export type ContinuousFeedbackUpdateWithWhereUniqueWithoutToEmployeeInput = {
    where: Prisma.ContinuousFeedbackWhereUniqueInput;
    data: Prisma.XOR<Prisma.ContinuousFeedbackUpdateWithoutToEmployeeInput, Prisma.ContinuousFeedbackUncheckedUpdateWithoutToEmployeeInput>;
};
export type ContinuousFeedbackUpdateManyWithWhereWithoutToEmployeeInput = {
    where: Prisma.ContinuousFeedbackScalarWhereInput;
    data: Prisma.XOR<Prisma.ContinuousFeedbackUpdateManyMutationInput, Prisma.ContinuousFeedbackUncheckedUpdateManyWithoutToEmployeeInput>;
};
export type ContinuousFeedbackCreateManyOrganizationInput = {
    id?: string;
    fromEmployeeId?: string | null;
    toEmployeeId?: string | null;
    message: string;
    isAnonymous?: boolean;
    createdAt?: Date | string;
};
export type ContinuousFeedbackUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    isAnonymous?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fromEmployee?: Prisma.EmployeeUpdateOneWithoutFeedbackGivenNestedInput;
    toEmployee?: Prisma.EmployeeUpdateOneWithoutFeedbackReceivedNestedInput;
};
export type ContinuousFeedbackUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fromEmployeeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    toEmployeeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    isAnonymous?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContinuousFeedbackUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fromEmployeeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    toEmployeeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    isAnonymous?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContinuousFeedbackCreateManyFromEmployeeInput = {
    id?: string;
    organizationId: string;
    toEmployeeId?: string | null;
    message: string;
    isAnonymous?: boolean;
    createdAt?: Date | string;
};
export type ContinuousFeedbackCreateManyToEmployeeInput = {
    id?: string;
    organizationId: string;
    fromEmployeeId?: string | null;
    message: string;
    isAnonymous?: boolean;
    createdAt?: Date | string;
};
export type ContinuousFeedbackUpdateWithoutFromEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    isAnonymous?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutContinuousFeedbackNestedInput;
    toEmployee?: Prisma.EmployeeUpdateOneWithoutFeedbackReceivedNestedInput;
};
export type ContinuousFeedbackUncheckedUpdateWithoutFromEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    toEmployeeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    isAnonymous?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContinuousFeedbackUncheckedUpdateManyWithoutFromEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    toEmployeeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    isAnonymous?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContinuousFeedbackUpdateWithoutToEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    isAnonymous?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutContinuousFeedbackNestedInput;
    fromEmployee?: Prisma.EmployeeUpdateOneWithoutFeedbackGivenNestedInput;
};
export type ContinuousFeedbackUncheckedUpdateWithoutToEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    fromEmployeeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    isAnonymous?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContinuousFeedbackUncheckedUpdateManyWithoutToEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    fromEmployeeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    isAnonymous?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContinuousFeedbackSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    fromEmployeeId?: boolean;
    toEmployeeId?: boolean;
    message?: boolean;
    isAnonymous?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    fromEmployee?: boolean | Prisma.ContinuousFeedback$fromEmployeeArgs<ExtArgs>;
    toEmployee?: boolean | Prisma.ContinuousFeedback$toEmployeeArgs<ExtArgs>;
}, ExtArgs["result"]["continuousFeedback"]>;
export type ContinuousFeedbackSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    fromEmployeeId?: boolean;
    toEmployeeId?: boolean;
    message?: boolean;
    isAnonymous?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    fromEmployee?: boolean | Prisma.ContinuousFeedback$fromEmployeeArgs<ExtArgs>;
    toEmployee?: boolean | Prisma.ContinuousFeedback$toEmployeeArgs<ExtArgs>;
}, ExtArgs["result"]["continuousFeedback"]>;
export type ContinuousFeedbackSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    fromEmployeeId?: boolean;
    toEmployeeId?: boolean;
    message?: boolean;
    isAnonymous?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    fromEmployee?: boolean | Prisma.ContinuousFeedback$fromEmployeeArgs<ExtArgs>;
    toEmployee?: boolean | Prisma.ContinuousFeedback$toEmployeeArgs<ExtArgs>;
}, ExtArgs["result"]["continuousFeedback"]>;
export type ContinuousFeedbackSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    fromEmployeeId?: boolean;
    toEmployeeId?: boolean;
    message?: boolean;
    isAnonymous?: boolean;
    createdAt?: boolean;
};
export type ContinuousFeedbackOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "fromEmployeeId" | "toEmployeeId" | "message" | "isAnonymous" | "createdAt", ExtArgs["result"]["continuousFeedback"]>;
export type ContinuousFeedbackInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    fromEmployee?: boolean | Prisma.ContinuousFeedback$fromEmployeeArgs<ExtArgs>;
    toEmployee?: boolean | Prisma.ContinuousFeedback$toEmployeeArgs<ExtArgs>;
};
export type ContinuousFeedbackIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    fromEmployee?: boolean | Prisma.ContinuousFeedback$fromEmployeeArgs<ExtArgs>;
    toEmployee?: boolean | Prisma.ContinuousFeedback$toEmployeeArgs<ExtArgs>;
};
export type ContinuousFeedbackIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    fromEmployee?: boolean | Prisma.ContinuousFeedback$fromEmployeeArgs<ExtArgs>;
    toEmployee?: boolean | Prisma.ContinuousFeedback$toEmployeeArgs<ExtArgs>;
};
export type $ContinuousFeedbackPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ContinuousFeedback";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        fromEmployee: Prisma.$EmployeePayload<ExtArgs> | null;
        toEmployee: Prisma.$EmployeePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        fromEmployeeId: string | null;
        toEmployeeId: string | null;
        message: string;
        isAnonymous: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["continuousFeedback"]>;
    composites: {};
};
export type ContinuousFeedbackGetPayload<S extends boolean | null | undefined | ContinuousFeedbackDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ContinuousFeedbackPayload, S>;
export type ContinuousFeedbackCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ContinuousFeedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ContinuousFeedbackCountAggregateInputType | true;
};
export interface ContinuousFeedbackDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ContinuousFeedback'];
        meta: {
            name: 'ContinuousFeedback';
        };
    };
    findUnique<T extends ContinuousFeedbackFindUniqueArgs>(args: Prisma.SelectSubset<T, ContinuousFeedbackFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ContinuousFeedbackClient<runtime.Types.Result.GetResult<Prisma.$ContinuousFeedbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ContinuousFeedbackFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ContinuousFeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContinuousFeedbackClient<runtime.Types.Result.GetResult<Prisma.$ContinuousFeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ContinuousFeedbackFindFirstArgs>(args?: Prisma.SelectSubset<T, ContinuousFeedbackFindFirstArgs<ExtArgs>>): Prisma.Prisma__ContinuousFeedbackClient<runtime.Types.Result.GetResult<Prisma.$ContinuousFeedbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ContinuousFeedbackFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ContinuousFeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContinuousFeedbackClient<runtime.Types.Result.GetResult<Prisma.$ContinuousFeedbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ContinuousFeedbackFindManyArgs>(args?: Prisma.SelectSubset<T, ContinuousFeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContinuousFeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ContinuousFeedbackCreateArgs>(args: Prisma.SelectSubset<T, ContinuousFeedbackCreateArgs<ExtArgs>>): Prisma.Prisma__ContinuousFeedbackClient<runtime.Types.Result.GetResult<Prisma.$ContinuousFeedbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ContinuousFeedbackCreateManyArgs>(args?: Prisma.SelectSubset<T, ContinuousFeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ContinuousFeedbackCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ContinuousFeedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContinuousFeedbackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ContinuousFeedbackDeleteArgs>(args: Prisma.SelectSubset<T, ContinuousFeedbackDeleteArgs<ExtArgs>>): Prisma.Prisma__ContinuousFeedbackClient<runtime.Types.Result.GetResult<Prisma.$ContinuousFeedbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ContinuousFeedbackUpdateArgs>(args: Prisma.SelectSubset<T, ContinuousFeedbackUpdateArgs<ExtArgs>>): Prisma.Prisma__ContinuousFeedbackClient<runtime.Types.Result.GetResult<Prisma.$ContinuousFeedbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ContinuousFeedbackDeleteManyArgs>(args?: Prisma.SelectSubset<T, ContinuousFeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ContinuousFeedbackUpdateManyArgs>(args: Prisma.SelectSubset<T, ContinuousFeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ContinuousFeedbackUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ContinuousFeedbackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContinuousFeedbackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ContinuousFeedbackUpsertArgs>(args: Prisma.SelectSubset<T, ContinuousFeedbackUpsertArgs<ExtArgs>>): Prisma.Prisma__ContinuousFeedbackClient<runtime.Types.Result.GetResult<Prisma.$ContinuousFeedbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ContinuousFeedbackCountArgs>(args?: Prisma.Subset<T, ContinuousFeedbackCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ContinuousFeedbackCountAggregateOutputType> : number>;
    aggregate<T extends ContinuousFeedbackAggregateArgs>(args: Prisma.Subset<T, ContinuousFeedbackAggregateArgs>): Prisma.PrismaPromise<GetContinuousFeedbackAggregateType<T>>;
    groupBy<T extends ContinuousFeedbackGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ContinuousFeedbackGroupByArgs['orderBy'];
    } : {
        orderBy?: ContinuousFeedbackGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ContinuousFeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContinuousFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ContinuousFeedbackFieldRefs;
}
export interface Prisma__ContinuousFeedbackClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    fromEmployee<T extends Prisma.ContinuousFeedback$fromEmployeeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ContinuousFeedback$fromEmployeeArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    toEmployee<T extends Prisma.ContinuousFeedback$toEmployeeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ContinuousFeedback$toEmployeeArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ContinuousFeedbackFieldRefs {
    readonly id: Prisma.FieldRef<"ContinuousFeedback", 'String'>;
    readonly organizationId: Prisma.FieldRef<"ContinuousFeedback", 'String'>;
    readonly fromEmployeeId: Prisma.FieldRef<"ContinuousFeedback", 'String'>;
    readonly toEmployeeId: Prisma.FieldRef<"ContinuousFeedback", 'String'>;
    readonly message: Prisma.FieldRef<"ContinuousFeedback", 'String'>;
    readonly isAnonymous: Prisma.FieldRef<"ContinuousFeedback", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"ContinuousFeedback", 'DateTime'>;
}
export type ContinuousFeedbackFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContinuousFeedbackSelect<ExtArgs> | null;
    omit?: Prisma.ContinuousFeedbackOmit<ExtArgs> | null;
    include?: Prisma.ContinuousFeedbackInclude<ExtArgs> | null;
    where: Prisma.ContinuousFeedbackWhereUniqueInput;
};
export type ContinuousFeedbackFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContinuousFeedbackSelect<ExtArgs> | null;
    omit?: Prisma.ContinuousFeedbackOmit<ExtArgs> | null;
    include?: Prisma.ContinuousFeedbackInclude<ExtArgs> | null;
    where: Prisma.ContinuousFeedbackWhereUniqueInput;
};
export type ContinuousFeedbackFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContinuousFeedbackSelect<ExtArgs> | null;
    omit?: Prisma.ContinuousFeedbackOmit<ExtArgs> | null;
    include?: Prisma.ContinuousFeedbackInclude<ExtArgs> | null;
    where?: Prisma.ContinuousFeedbackWhereInput;
    orderBy?: Prisma.ContinuousFeedbackOrderByWithRelationInput | Prisma.ContinuousFeedbackOrderByWithRelationInput[];
    cursor?: Prisma.ContinuousFeedbackWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContinuousFeedbackScalarFieldEnum | Prisma.ContinuousFeedbackScalarFieldEnum[];
};
export type ContinuousFeedbackFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContinuousFeedbackSelect<ExtArgs> | null;
    omit?: Prisma.ContinuousFeedbackOmit<ExtArgs> | null;
    include?: Prisma.ContinuousFeedbackInclude<ExtArgs> | null;
    where?: Prisma.ContinuousFeedbackWhereInput;
    orderBy?: Prisma.ContinuousFeedbackOrderByWithRelationInput | Prisma.ContinuousFeedbackOrderByWithRelationInput[];
    cursor?: Prisma.ContinuousFeedbackWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContinuousFeedbackScalarFieldEnum | Prisma.ContinuousFeedbackScalarFieldEnum[];
};
export type ContinuousFeedbackFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContinuousFeedbackSelect<ExtArgs> | null;
    omit?: Prisma.ContinuousFeedbackOmit<ExtArgs> | null;
    include?: Prisma.ContinuousFeedbackInclude<ExtArgs> | null;
    where?: Prisma.ContinuousFeedbackWhereInput;
    orderBy?: Prisma.ContinuousFeedbackOrderByWithRelationInput | Prisma.ContinuousFeedbackOrderByWithRelationInput[];
    cursor?: Prisma.ContinuousFeedbackWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContinuousFeedbackScalarFieldEnum | Prisma.ContinuousFeedbackScalarFieldEnum[];
};
export type ContinuousFeedbackCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContinuousFeedbackSelect<ExtArgs> | null;
    omit?: Prisma.ContinuousFeedbackOmit<ExtArgs> | null;
    include?: Prisma.ContinuousFeedbackInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContinuousFeedbackCreateInput, Prisma.ContinuousFeedbackUncheckedCreateInput>;
};
export type ContinuousFeedbackCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ContinuousFeedbackCreateManyInput | Prisma.ContinuousFeedbackCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ContinuousFeedbackCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContinuousFeedbackSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContinuousFeedbackOmit<ExtArgs> | null;
    data: Prisma.ContinuousFeedbackCreateManyInput | Prisma.ContinuousFeedbackCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ContinuousFeedbackIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ContinuousFeedbackUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContinuousFeedbackSelect<ExtArgs> | null;
    omit?: Prisma.ContinuousFeedbackOmit<ExtArgs> | null;
    include?: Prisma.ContinuousFeedbackInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContinuousFeedbackUpdateInput, Prisma.ContinuousFeedbackUncheckedUpdateInput>;
    where: Prisma.ContinuousFeedbackWhereUniqueInput;
};
export type ContinuousFeedbackUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ContinuousFeedbackUpdateManyMutationInput, Prisma.ContinuousFeedbackUncheckedUpdateManyInput>;
    where?: Prisma.ContinuousFeedbackWhereInput;
    limit?: number;
};
export type ContinuousFeedbackUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContinuousFeedbackSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContinuousFeedbackOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContinuousFeedbackUpdateManyMutationInput, Prisma.ContinuousFeedbackUncheckedUpdateManyInput>;
    where?: Prisma.ContinuousFeedbackWhereInput;
    limit?: number;
    include?: Prisma.ContinuousFeedbackIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ContinuousFeedbackUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContinuousFeedbackSelect<ExtArgs> | null;
    omit?: Prisma.ContinuousFeedbackOmit<ExtArgs> | null;
    include?: Prisma.ContinuousFeedbackInclude<ExtArgs> | null;
    where: Prisma.ContinuousFeedbackWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContinuousFeedbackCreateInput, Prisma.ContinuousFeedbackUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ContinuousFeedbackUpdateInput, Prisma.ContinuousFeedbackUncheckedUpdateInput>;
};
export type ContinuousFeedbackDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContinuousFeedbackSelect<ExtArgs> | null;
    omit?: Prisma.ContinuousFeedbackOmit<ExtArgs> | null;
    include?: Prisma.ContinuousFeedbackInclude<ExtArgs> | null;
    where: Prisma.ContinuousFeedbackWhereUniqueInput;
};
export type ContinuousFeedbackDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContinuousFeedbackWhereInput;
    limit?: number;
};
export type ContinuousFeedback$fromEmployeeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where?: Prisma.EmployeeWhereInput;
};
export type ContinuousFeedback$toEmployeeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where?: Prisma.EmployeeWhereInput;
};
export type ContinuousFeedbackDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContinuousFeedbackSelect<ExtArgs> | null;
    omit?: Prisma.ContinuousFeedbackOmit<ExtArgs> | null;
    include?: Prisma.ContinuousFeedbackInclude<ExtArgs> | null;
};
