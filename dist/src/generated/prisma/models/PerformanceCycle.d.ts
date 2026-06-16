import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PerformanceCycleModel = runtime.Types.Result.DefaultSelection<Prisma.$PerformanceCyclePayload>;
export type AggregatePerformanceCycle = {
    _count: PerformanceCycleCountAggregateOutputType | null;
    _avg: PerformanceCycleAvgAggregateOutputType | null;
    _sum: PerformanceCycleSumAggregateOutputType | null;
    _min: PerformanceCycleMinAggregateOutputType | null;
    _max: PerformanceCycleMaxAggregateOutputType | null;
};
export type PerformanceCycleAvgAggregateOutputType = {
    ratingScale: number | null;
};
export type PerformanceCycleSumAggregateOutputType = {
    ratingScale: number | null;
};
export type PerformanceCycleMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    name: string | null;
    type: $Enums.PerformanceCycleType | null;
    startDate: Date | null;
    endDate: Date | null;
    reviewType: $Enums.ReviewType | null;
    ratingScale: number | null;
    status: $Enums.ReviewCycleStatus | null;
    createdBy: string | null;
    launchedAt: Date | null;
    closedAt: Date | null;
    createdAt: Date | null;
};
export type PerformanceCycleMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    name: string | null;
    type: $Enums.PerformanceCycleType | null;
    startDate: Date | null;
    endDate: Date | null;
    reviewType: $Enums.ReviewType | null;
    ratingScale: number | null;
    status: $Enums.ReviewCycleStatus | null;
    createdBy: string | null;
    launchedAt: Date | null;
    closedAt: Date | null;
    createdAt: Date | null;
};
export type PerformanceCycleCountAggregateOutputType = {
    id: number;
    organizationId: number;
    name: number;
    type: number;
    startDate: number;
    endDate: number;
    reviewType: number;
    ratingScale: number;
    status: number;
    createdBy: number;
    launchedAt: number;
    closedAt: number;
    createdAt: number;
    _all: number;
};
export type PerformanceCycleAvgAggregateInputType = {
    ratingScale?: true;
};
export type PerformanceCycleSumAggregateInputType = {
    ratingScale?: true;
};
export type PerformanceCycleMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    type?: true;
    startDate?: true;
    endDate?: true;
    reviewType?: true;
    ratingScale?: true;
    status?: true;
    createdBy?: true;
    launchedAt?: true;
    closedAt?: true;
    createdAt?: true;
};
export type PerformanceCycleMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    type?: true;
    startDate?: true;
    endDate?: true;
    reviewType?: true;
    ratingScale?: true;
    status?: true;
    createdBy?: true;
    launchedAt?: true;
    closedAt?: true;
    createdAt?: true;
};
export type PerformanceCycleCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    type?: true;
    startDate?: true;
    endDate?: true;
    reviewType?: true;
    ratingScale?: true;
    status?: true;
    createdBy?: true;
    launchedAt?: true;
    closedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type PerformanceCycleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PerformanceCycleWhereInput;
    orderBy?: Prisma.PerformanceCycleOrderByWithRelationInput | Prisma.PerformanceCycleOrderByWithRelationInput[];
    cursor?: Prisma.PerformanceCycleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PerformanceCycleCountAggregateInputType;
    _avg?: PerformanceCycleAvgAggregateInputType;
    _sum?: PerformanceCycleSumAggregateInputType;
    _min?: PerformanceCycleMinAggregateInputType;
    _max?: PerformanceCycleMaxAggregateInputType;
};
export type GetPerformanceCycleAggregateType<T extends PerformanceCycleAggregateArgs> = {
    [P in keyof T & keyof AggregatePerformanceCycle]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePerformanceCycle[P]> : Prisma.GetScalarType<T[P], AggregatePerformanceCycle[P]>;
};
export type PerformanceCycleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PerformanceCycleWhereInput;
    orderBy?: Prisma.PerformanceCycleOrderByWithAggregationInput | Prisma.PerformanceCycleOrderByWithAggregationInput[];
    by: Prisma.PerformanceCycleScalarFieldEnum[] | Prisma.PerformanceCycleScalarFieldEnum;
    having?: Prisma.PerformanceCycleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PerformanceCycleCountAggregateInputType | true;
    _avg?: PerformanceCycleAvgAggregateInputType;
    _sum?: PerformanceCycleSumAggregateInputType;
    _min?: PerformanceCycleMinAggregateInputType;
    _max?: PerformanceCycleMaxAggregateInputType;
};
export type PerformanceCycleGroupByOutputType = {
    id: string;
    organizationId: string;
    name: string;
    type: $Enums.PerformanceCycleType;
    startDate: Date;
    endDate: Date;
    reviewType: $Enums.ReviewType;
    ratingScale: number;
    status: $Enums.ReviewCycleStatus;
    createdBy: string | null;
    launchedAt: Date | null;
    closedAt: Date | null;
    createdAt: Date;
    _count: PerformanceCycleCountAggregateOutputType | null;
    _avg: PerformanceCycleAvgAggregateOutputType | null;
    _sum: PerformanceCycleSumAggregateOutputType | null;
    _min: PerformanceCycleMinAggregateOutputType | null;
    _max: PerformanceCycleMaxAggregateOutputType | null;
};
export type GetPerformanceCycleGroupByPayload<T extends PerformanceCycleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PerformanceCycleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PerformanceCycleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PerformanceCycleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PerformanceCycleGroupByOutputType[P]>;
}>>;
export type PerformanceCycleWhereInput = {
    AND?: Prisma.PerformanceCycleWhereInput | Prisma.PerformanceCycleWhereInput[];
    OR?: Prisma.PerformanceCycleWhereInput[];
    NOT?: Prisma.PerformanceCycleWhereInput | Prisma.PerformanceCycleWhereInput[];
    id?: Prisma.UuidFilter<"PerformanceCycle"> | string;
    organizationId?: Prisma.UuidFilter<"PerformanceCycle"> | string;
    name?: Prisma.StringFilter<"PerformanceCycle"> | string;
    type?: Prisma.EnumPerformanceCycleTypeFilter<"PerformanceCycle"> | $Enums.PerformanceCycleType;
    startDate?: Prisma.DateTimeFilter<"PerformanceCycle"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"PerformanceCycle"> | Date | string;
    reviewType?: Prisma.EnumReviewTypeFilter<"PerformanceCycle"> | $Enums.ReviewType;
    ratingScale?: Prisma.IntFilter<"PerformanceCycle"> | number;
    status?: Prisma.EnumReviewCycleStatusFilter<"PerformanceCycle"> | $Enums.ReviewCycleStatus;
    createdBy?: Prisma.UuidNullableFilter<"PerformanceCycle"> | string | null;
    launchedAt?: Prisma.DateTimeNullableFilter<"PerformanceCycle"> | Date | string | null;
    closedAt?: Prisma.DateTimeNullableFilter<"PerformanceCycle"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"PerformanceCycle"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    reviews?: Prisma.PerformanceReviewListRelationFilter;
    goals?: Prisma.GoalListRelationFilter;
};
export type PerformanceCycleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    reviewType?: Prisma.SortOrder;
    ratingScale?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    launchedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    closedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    reviews?: Prisma.PerformanceReviewOrderByRelationAggregateInput;
    goals?: Prisma.GoalOrderByRelationAggregateInput;
};
export type PerformanceCycleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PerformanceCycleWhereInput | Prisma.PerformanceCycleWhereInput[];
    OR?: Prisma.PerformanceCycleWhereInput[];
    NOT?: Prisma.PerformanceCycleWhereInput | Prisma.PerformanceCycleWhereInput[];
    organizationId?: Prisma.UuidFilter<"PerformanceCycle"> | string;
    name?: Prisma.StringFilter<"PerformanceCycle"> | string;
    type?: Prisma.EnumPerformanceCycleTypeFilter<"PerformanceCycle"> | $Enums.PerformanceCycleType;
    startDate?: Prisma.DateTimeFilter<"PerformanceCycle"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"PerformanceCycle"> | Date | string;
    reviewType?: Prisma.EnumReviewTypeFilter<"PerformanceCycle"> | $Enums.ReviewType;
    ratingScale?: Prisma.IntFilter<"PerformanceCycle"> | number;
    status?: Prisma.EnumReviewCycleStatusFilter<"PerformanceCycle"> | $Enums.ReviewCycleStatus;
    createdBy?: Prisma.UuidNullableFilter<"PerformanceCycle"> | string | null;
    launchedAt?: Prisma.DateTimeNullableFilter<"PerformanceCycle"> | Date | string | null;
    closedAt?: Prisma.DateTimeNullableFilter<"PerformanceCycle"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"PerformanceCycle"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    reviews?: Prisma.PerformanceReviewListRelationFilter;
    goals?: Prisma.GoalListRelationFilter;
}, "id">;
export type PerformanceCycleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    reviewType?: Prisma.SortOrder;
    ratingScale?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    launchedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    closedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PerformanceCycleCountOrderByAggregateInput;
    _avg?: Prisma.PerformanceCycleAvgOrderByAggregateInput;
    _max?: Prisma.PerformanceCycleMaxOrderByAggregateInput;
    _min?: Prisma.PerformanceCycleMinOrderByAggregateInput;
    _sum?: Prisma.PerformanceCycleSumOrderByAggregateInput;
};
export type PerformanceCycleScalarWhereWithAggregatesInput = {
    AND?: Prisma.PerformanceCycleScalarWhereWithAggregatesInput | Prisma.PerformanceCycleScalarWhereWithAggregatesInput[];
    OR?: Prisma.PerformanceCycleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PerformanceCycleScalarWhereWithAggregatesInput | Prisma.PerformanceCycleScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PerformanceCycle"> | string;
    organizationId?: Prisma.UuidWithAggregatesFilter<"PerformanceCycle"> | string;
    name?: Prisma.StringWithAggregatesFilter<"PerformanceCycle"> | string;
    type?: Prisma.EnumPerformanceCycleTypeWithAggregatesFilter<"PerformanceCycle"> | $Enums.PerformanceCycleType;
    startDate?: Prisma.DateTimeWithAggregatesFilter<"PerformanceCycle"> | Date | string;
    endDate?: Prisma.DateTimeWithAggregatesFilter<"PerformanceCycle"> | Date | string;
    reviewType?: Prisma.EnumReviewTypeWithAggregatesFilter<"PerformanceCycle"> | $Enums.ReviewType;
    ratingScale?: Prisma.IntWithAggregatesFilter<"PerformanceCycle"> | number;
    status?: Prisma.EnumReviewCycleStatusWithAggregatesFilter<"PerformanceCycle"> | $Enums.ReviewCycleStatus;
    createdBy?: Prisma.UuidNullableWithAggregatesFilter<"PerformanceCycle"> | string | null;
    launchedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PerformanceCycle"> | Date | string | null;
    closedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PerformanceCycle"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PerformanceCycle"> | Date | string;
};
export type PerformanceCycleCreateInput = {
    id?: string;
    name: string;
    type?: $Enums.PerformanceCycleType;
    startDate: Date | string;
    endDate: Date | string;
    reviewType?: $Enums.ReviewType;
    ratingScale?: number;
    status?: $Enums.ReviewCycleStatus;
    createdBy?: string | null;
    launchedAt?: Date | string | null;
    closedAt?: Date | string | null;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutPerformanceCyclesInput;
    reviews?: Prisma.PerformanceReviewCreateNestedManyWithoutCycleInput;
    goals?: Prisma.GoalCreateNestedManyWithoutCycleInput;
};
export type PerformanceCycleUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    name: string;
    type?: $Enums.PerformanceCycleType;
    startDate: Date | string;
    endDate: Date | string;
    reviewType?: $Enums.ReviewType;
    ratingScale?: number;
    status?: $Enums.ReviewCycleStatus;
    createdBy?: string | null;
    launchedAt?: Date | string | null;
    closedAt?: Date | string | null;
    createdAt?: Date | string;
    reviews?: Prisma.PerformanceReviewUncheckedCreateNestedManyWithoutCycleInput;
    goals?: Prisma.GoalUncheckedCreateNestedManyWithoutCycleInput;
};
export type PerformanceCycleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPerformanceCycleTypeFieldUpdateOperationsInput | $Enums.PerformanceCycleType;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewType?: Prisma.EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType;
    ratingScale?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumReviewCycleStatusFieldUpdateOperationsInput | $Enums.ReviewCycleStatus;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    launchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutPerformanceCyclesNestedInput;
    reviews?: Prisma.PerformanceReviewUpdateManyWithoutCycleNestedInput;
    goals?: Prisma.GoalUpdateManyWithoutCycleNestedInput;
};
export type PerformanceCycleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPerformanceCycleTypeFieldUpdateOperationsInput | $Enums.PerformanceCycleType;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewType?: Prisma.EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType;
    ratingScale?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumReviewCycleStatusFieldUpdateOperationsInput | $Enums.ReviewCycleStatus;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    launchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviews?: Prisma.PerformanceReviewUncheckedUpdateManyWithoutCycleNestedInput;
    goals?: Prisma.GoalUncheckedUpdateManyWithoutCycleNestedInput;
};
export type PerformanceCycleCreateManyInput = {
    id?: string;
    organizationId: string;
    name: string;
    type?: $Enums.PerformanceCycleType;
    startDate: Date | string;
    endDate: Date | string;
    reviewType?: $Enums.ReviewType;
    ratingScale?: number;
    status?: $Enums.ReviewCycleStatus;
    createdBy?: string | null;
    launchedAt?: Date | string | null;
    closedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type PerformanceCycleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPerformanceCycleTypeFieldUpdateOperationsInput | $Enums.PerformanceCycleType;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewType?: Prisma.EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType;
    ratingScale?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumReviewCycleStatusFieldUpdateOperationsInput | $Enums.ReviewCycleStatus;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    launchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PerformanceCycleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPerformanceCycleTypeFieldUpdateOperationsInput | $Enums.PerformanceCycleType;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewType?: Prisma.EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType;
    ratingScale?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumReviewCycleStatusFieldUpdateOperationsInput | $Enums.ReviewCycleStatus;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    launchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PerformanceCycleListRelationFilter = {
    every?: Prisma.PerformanceCycleWhereInput;
    some?: Prisma.PerformanceCycleWhereInput;
    none?: Prisma.PerformanceCycleWhereInput;
};
export type PerformanceCycleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PerformanceCycleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    reviewType?: Prisma.SortOrder;
    ratingScale?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    launchedAt?: Prisma.SortOrder;
    closedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PerformanceCycleAvgOrderByAggregateInput = {
    ratingScale?: Prisma.SortOrder;
};
export type PerformanceCycleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    reviewType?: Prisma.SortOrder;
    ratingScale?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    launchedAt?: Prisma.SortOrder;
    closedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PerformanceCycleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    reviewType?: Prisma.SortOrder;
    ratingScale?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    launchedAt?: Prisma.SortOrder;
    closedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PerformanceCycleSumOrderByAggregateInput = {
    ratingScale?: Prisma.SortOrder;
};
export type PerformanceCycleScalarRelationFilter = {
    is?: Prisma.PerformanceCycleWhereInput;
    isNot?: Prisma.PerformanceCycleWhereInput;
};
export type PerformanceCycleNullableScalarRelationFilter = {
    is?: Prisma.PerformanceCycleWhereInput | null;
    isNot?: Prisma.PerformanceCycleWhereInput | null;
};
export type PerformanceCycleCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.PerformanceCycleCreateWithoutOrganizationInput, Prisma.PerformanceCycleUncheckedCreateWithoutOrganizationInput> | Prisma.PerformanceCycleCreateWithoutOrganizationInput[] | Prisma.PerformanceCycleUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.PerformanceCycleCreateOrConnectWithoutOrganizationInput | Prisma.PerformanceCycleCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.PerformanceCycleCreateManyOrganizationInputEnvelope;
    connect?: Prisma.PerformanceCycleWhereUniqueInput | Prisma.PerformanceCycleWhereUniqueInput[];
};
export type PerformanceCycleUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.PerformanceCycleCreateWithoutOrganizationInput, Prisma.PerformanceCycleUncheckedCreateWithoutOrganizationInput> | Prisma.PerformanceCycleCreateWithoutOrganizationInput[] | Prisma.PerformanceCycleUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.PerformanceCycleCreateOrConnectWithoutOrganizationInput | Prisma.PerformanceCycleCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.PerformanceCycleCreateManyOrganizationInputEnvelope;
    connect?: Prisma.PerformanceCycleWhereUniqueInput | Prisma.PerformanceCycleWhereUniqueInput[];
};
export type PerformanceCycleUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.PerformanceCycleCreateWithoutOrganizationInput, Prisma.PerformanceCycleUncheckedCreateWithoutOrganizationInput> | Prisma.PerformanceCycleCreateWithoutOrganizationInput[] | Prisma.PerformanceCycleUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.PerformanceCycleCreateOrConnectWithoutOrganizationInput | Prisma.PerformanceCycleCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.PerformanceCycleUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.PerformanceCycleUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.PerformanceCycleCreateManyOrganizationInputEnvelope;
    set?: Prisma.PerformanceCycleWhereUniqueInput | Prisma.PerformanceCycleWhereUniqueInput[];
    disconnect?: Prisma.PerformanceCycleWhereUniqueInput | Prisma.PerformanceCycleWhereUniqueInput[];
    delete?: Prisma.PerformanceCycleWhereUniqueInput | Prisma.PerformanceCycleWhereUniqueInput[];
    connect?: Prisma.PerformanceCycleWhereUniqueInput | Prisma.PerformanceCycleWhereUniqueInput[];
    update?: Prisma.PerformanceCycleUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.PerformanceCycleUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.PerformanceCycleUpdateManyWithWhereWithoutOrganizationInput | Prisma.PerformanceCycleUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.PerformanceCycleScalarWhereInput | Prisma.PerformanceCycleScalarWhereInput[];
};
export type PerformanceCycleUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.PerformanceCycleCreateWithoutOrganizationInput, Prisma.PerformanceCycleUncheckedCreateWithoutOrganizationInput> | Prisma.PerformanceCycleCreateWithoutOrganizationInput[] | Prisma.PerformanceCycleUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.PerformanceCycleCreateOrConnectWithoutOrganizationInput | Prisma.PerformanceCycleCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.PerformanceCycleUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.PerformanceCycleUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.PerformanceCycleCreateManyOrganizationInputEnvelope;
    set?: Prisma.PerformanceCycleWhereUniqueInput | Prisma.PerformanceCycleWhereUniqueInput[];
    disconnect?: Prisma.PerformanceCycleWhereUniqueInput | Prisma.PerformanceCycleWhereUniqueInput[];
    delete?: Prisma.PerformanceCycleWhereUniqueInput | Prisma.PerformanceCycleWhereUniqueInput[];
    connect?: Prisma.PerformanceCycleWhereUniqueInput | Prisma.PerformanceCycleWhereUniqueInput[];
    update?: Prisma.PerformanceCycleUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.PerformanceCycleUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.PerformanceCycleUpdateManyWithWhereWithoutOrganizationInput | Prisma.PerformanceCycleUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.PerformanceCycleScalarWhereInput | Prisma.PerformanceCycleScalarWhereInput[];
};
export type EnumPerformanceCycleTypeFieldUpdateOperationsInput = {
    set?: $Enums.PerformanceCycleType;
};
export type EnumReviewTypeFieldUpdateOperationsInput = {
    set?: $Enums.ReviewType;
};
export type EnumReviewCycleStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReviewCycleStatus;
};
export type PerformanceCycleCreateNestedOneWithoutReviewsInput = {
    create?: Prisma.XOR<Prisma.PerformanceCycleCreateWithoutReviewsInput, Prisma.PerformanceCycleUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.PerformanceCycleCreateOrConnectWithoutReviewsInput;
    connect?: Prisma.PerformanceCycleWhereUniqueInput;
};
export type PerformanceCycleUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: Prisma.XOR<Prisma.PerformanceCycleCreateWithoutReviewsInput, Prisma.PerformanceCycleUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.PerformanceCycleCreateOrConnectWithoutReviewsInput;
    upsert?: Prisma.PerformanceCycleUpsertWithoutReviewsInput;
    connect?: Prisma.PerformanceCycleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PerformanceCycleUpdateToOneWithWhereWithoutReviewsInput, Prisma.PerformanceCycleUpdateWithoutReviewsInput>, Prisma.PerformanceCycleUncheckedUpdateWithoutReviewsInput>;
};
export type PerformanceCycleCreateNestedOneWithoutGoalsInput = {
    create?: Prisma.XOR<Prisma.PerformanceCycleCreateWithoutGoalsInput, Prisma.PerformanceCycleUncheckedCreateWithoutGoalsInput>;
    connectOrCreate?: Prisma.PerformanceCycleCreateOrConnectWithoutGoalsInput;
    connect?: Prisma.PerformanceCycleWhereUniqueInput;
};
export type PerformanceCycleUpdateOneWithoutGoalsNestedInput = {
    create?: Prisma.XOR<Prisma.PerformanceCycleCreateWithoutGoalsInput, Prisma.PerformanceCycleUncheckedCreateWithoutGoalsInput>;
    connectOrCreate?: Prisma.PerformanceCycleCreateOrConnectWithoutGoalsInput;
    upsert?: Prisma.PerformanceCycleUpsertWithoutGoalsInput;
    disconnect?: Prisma.PerformanceCycleWhereInput | boolean;
    delete?: Prisma.PerformanceCycleWhereInput | boolean;
    connect?: Prisma.PerformanceCycleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PerformanceCycleUpdateToOneWithWhereWithoutGoalsInput, Prisma.PerformanceCycleUpdateWithoutGoalsInput>, Prisma.PerformanceCycleUncheckedUpdateWithoutGoalsInput>;
};
export type PerformanceCycleCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    type?: $Enums.PerformanceCycleType;
    startDate: Date | string;
    endDate: Date | string;
    reviewType?: $Enums.ReviewType;
    ratingScale?: number;
    status?: $Enums.ReviewCycleStatus;
    createdBy?: string | null;
    launchedAt?: Date | string | null;
    closedAt?: Date | string | null;
    createdAt?: Date | string;
    reviews?: Prisma.PerformanceReviewCreateNestedManyWithoutCycleInput;
    goals?: Prisma.GoalCreateNestedManyWithoutCycleInput;
};
export type PerformanceCycleUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    type?: $Enums.PerformanceCycleType;
    startDate: Date | string;
    endDate: Date | string;
    reviewType?: $Enums.ReviewType;
    ratingScale?: number;
    status?: $Enums.ReviewCycleStatus;
    createdBy?: string | null;
    launchedAt?: Date | string | null;
    closedAt?: Date | string | null;
    createdAt?: Date | string;
    reviews?: Prisma.PerformanceReviewUncheckedCreateNestedManyWithoutCycleInput;
    goals?: Prisma.GoalUncheckedCreateNestedManyWithoutCycleInput;
};
export type PerformanceCycleCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.PerformanceCycleWhereUniqueInput;
    create: Prisma.XOR<Prisma.PerformanceCycleCreateWithoutOrganizationInput, Prisma.PerformanceCycleUncheckedCreateWithoutOrganizationInput>;
};
export type PerformanceCycleCreateManyOrganizationInputEnvelope = {
    data: Prisma.PerformanceCycleCreateManyOrganizationInput | Prisma.PerformanceCycleCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type PerformanceCycleUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.PerformanceCycleWhereUniqueInput;
    update: Prisma.XOR<Prisma.PerformanceCycleUpdateWithoutOrganizationInput, Prisma.PerformanceCycleUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.PerformanceCycleCreateWithoutOrganizationInput, Prisma.PerformanceCycleUncheckedCreateWithoutOrganizationInput>;
};
export type PerformanceCycleUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.PerformanceCycleWhereUniqueInput;
    data: Prisma.XOR<Prisma.PerformanceCycleUpdateWithoutOrganizationInput, Prisma.PerformanceCycleUncheckedUpdateWithoutOrganizationInput>;
};
export type PerformanceCycleUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.PerformanceCycleScalarWhereInput;
    data: Prisma.XOR<Prisma.PerformanceCycleUpdateManyMutationInput, Prisma.PerformanceCycleUncheckedUpdateManyWithoutOrganizationInput>;
};
export type PerformanceCycleScalarWhereInput = {
    AND?: Prisma.PerformanceCycleScalarWhereInput | Prisma.PerformanceCycleScalarWhereInput[];
    OR?: Prisma.PerformanceCycleScalarWhereInput[];
    NOT?: Prisma.PerformanceCycleScalarWhereInput | Prisma.PerformanceCycleScalarWhereInput[];
    id?: Prisma.UuidFilter<"PerformanceCycle"> | string;
    organizationId?: Prisma.UuidFilter<"PerformanceCycle"> | string;
    name?: Prisma.StringFilter<"PerformanceCycle"> | string;
    type?: Prisma.EnumPerformanceCycleTypeFilter<"PerformanceCycle"> | $Enums.PerformanceCycleType;
    startDate?: Prisma.DateTimeFilter<"PerformanceCycle"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"PerformanceCycle"> | Date | string;
    reviewType?: Prisma.EnumReviewTypeFilter<"PerformanceCycle"> | $Enums.ReviewType;
    ratingScale?: Prisma.IntFilter<"PerformanceCycle"> | number;
    status?: Prisma.EnumReviewCycleStatusFilter<"PerformanceCycle"> | $Enums.ReviewCycleStatus;
    createdBy?: Prisma.UuidNullableFilter<"PerformanceCycle"> | string | null;
    launchedAt?: Prisma.DateTimeNullableFilter<"PerformanceCycle"> | Date | string | null;
    closedAt?: Prisma.DateTimeNullableFilter<"PerformanceCycle"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"PerformanceCycle"> | Date | string;
};
export type PerformanceCycleCreateWithoutReviewsInput = {
    id?: string;
    name: string;
    type?: $Enums.PerformanceCycleType;
    startDate: Date | string;
    endDate: Date | string;
    reviewType?: $Enums.ReviewType;
    ratingScale?: number;
    status?: $Enums.ReviewCycleStatus;
    createdBy?: string | null;
    launchedAt?: Date | string | null;
    closedAt?: Date | string | null;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutPerformanceCyclesInput;
    goals?: Prisma.GoalCreateNestedManyWithoutCycleInput;
};
export type PerformanceCycleUncheckedCreateWithoutReviewsInput = {
    id?: string;
    organizationId: string;
    name: string;
    type?: $Enums.PerformanceCycleType;
    startDate: Date | string;
    endDate: Date | string;
    reviewType?: $Enums.ReviewType;
    ratingScale?: number;
    status?: $Enums.ReviewCycleStatus;
    createdBy?: string | null;
    launchedAt?: Date | string | null;
    closedAt?: Date | string | null;
    createdAt?: Date | string;
    goals?: Prisma.GoalUncheckedCreateNestedManyWithoutCycleInput;
};
export type PerformanceCycleCreateOrConnectWithoutReviewsInput = {
    where: Prisma.PerformanceCycleWhereUniqueInput;
    create: Prisma.XOR<Prisma.PerformanceCycleCreateWithoutReviewsInput, Prisma.PerformanceCycleUncheckedCreateWithoutReviewsInput>;
};
export type PerformanceCycleUpsertWithoutReviewsInput = {
    update: Prisma.XOR<Prisma.PerformanceCycleUpdateWithoutReviewsInput, Prisma.PerformanceCycleUncheckedUpdateWithoutReviewsInput>;
    create: Prisma.XOR<Prisma.PerformanceCycleCreateWithoutReviewsInput, Prisma.PerformanceCycleUncheckedCreateWithoutReviewsInput>;
    where?: Prisma.PerformanceCycleWhereInput;
};
export type PerformanceCycleUpdateToOneWithWhereWithoutReviewsInput = {
    where?: Prisma.PerformanceCycleWhereInput;
    data: Prisma.XOR<Prisma.PerformanceCycleUpdateWithoutReviewsInput, Prisma.PerformanceCycleUncheckedUpdateWithoutReviewsInput>;
};
export type PerformanceCycleUpdateWithoutReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPerformanceCycleTypeFieldUpdateOperationsInput | $Enums.PerformanceCycleType;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewType?: Prisma.EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType;
    ratingScale?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumReviewCycleStatusFieldUpdateOperationsInput | $Enums.ReviewCycleStatus;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    launchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutPerformanceCyclesNestedInput;
    goals?: Prisma.GoalUpdateManyWithoutCycleNestedInput;
};
export type PerformanceCycleUncheckedUpdateWithoutReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPerformanceCycleTypeFieldUpdateOperationsInput | $Enums.PerformanceCycleType;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewType?: Prisma.EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType;
    ratingScale?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumReviewCycleStatusFieldUpdateOperationsInput | $Enums.ReviewCycleStatus;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    launchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    goals?: Prisma.GoalUncheckedUpdateManyWithoutCycleNestedInput;
};
export type PerformanceCycleCreateWithoutGoalsInput = {
    id?: string;
    name: string;
    type?: $Enums.PerformanceCycleType;
    startDate: Date | string;
    endDate: Date | string;
    reviewType?: $Enums.ReviewType;
    ratingScale?: number;
    status?: $Enums.ReviewCycleStatus;
    createdBy?: string | null;
    launchedAt?: Date | string | null;
    closedAt?: Date | string | null;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutPerformanceCyclesInput;
    reviews?: Prisma.PerformanceReviewCreateNestedManyWithoutCycleInput;
};
export type PerformanceCycleUncheckedCreateWithoutGoalsInput = {
    id?: string;
    organizationId: string;
    name: string;
    type?: $Enums.PerformanceCycleType;
    startDate: Date | string;
    endDate: Date | string;
    reviewType?: $Enums.ReviewType;
    ratingScale?: number;
    status?: $Enums.ReviewCycleStatus;
    createdBy?: string | null;
    launchedAt?: Date | string | null;
    closedAt?: Date | string | null;
    createdAt?: Date | string;
    reviews?: Prisma.PerformanceReviewUncheckedCreateNestedManyWithoutCycleInput;
};
export type PerformanceCycleCreateOrConnectWithoutGoalsInput = {
    where: Prisma.PerformanceCycleWhereUniqueInput;
    create: Prisma.XOR<Prisma.PerformanceCycleCreateWithoutGoalsInput, Prisma.PerformanceCycleUncheckedCreateWithoutGoalsInput>;
};
export type PerformanceCycleUpsertWithoutGoalsInput = {
    update: Prisma.XOR<Prisma.PerformanceCycleUpdateWithoutGoalsInput, Prisma.PerformanceCycleUncheckedUpdateWithoutGoalsInput>;
    create: Prisma.XOR<Prisma.PerformanceCycleCreateWithoutGoalsInput, Prisma.PerformanceCycleUncheckedCreateWithoutGoalsInput>;
    where?: Prisma.PerformanceCycleWhereInput;
};
export type PerformanceCycleUpdateToOneWithWhereWithoutGoalsInput = {
    where?: Prisma.PerformanceCycleWhereInput;
    data: Prisma.XOR<Prisma.PerformanceCycleUpdateWithoutGoalsInput, Prisma.PerformanceCycleUncheckedUpdateWithoutGoalsInput>;
};
export type PerformanceCycleUpdateWithoutGoalsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPerformanceCycleTypeFieldUpdateOperationsInput | $Enums.PerformanceCycleType;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewType?: Prisma.EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType;
    ratingScale?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumReviewCycleStatusFieldUpdateOperationsInput | $Enums.ReviewCycleStatus;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    launchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutPerformanceCyclesNestedInput;
    reviews?: Prisma.PerformanceReviewUpdateManyWithoutCycleNestedInput;
};
export type PerformanceCycleUncheckedUpdateWithoutGoalsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPerformanceCycleTypeFieldUpdateOperationsInput | $Enums.PerformanceCycleType;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewType?: Prisma.EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType;
    ratingScale?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumReviewCycleStatusFieldUpdateOperationsInput | $Enums.ReviewCycleStatus;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    launchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviews?: Prisma.PerformanceReviewUncheckedUpdateManyWithoutCycleNestedInput;
};
export type PerformanceCycleCreateManyOrganizationInput = {
    id?: string;
    name: string;
    type?: $Enums.PerformanceCycleType;
    startDate: Date | string;
    endDate: Date | string;
    reviewType?: $Enums.ReviewType;
    ratingScale?: number;
    status?: $Enums.ReviewCycleStatus;
    createdBy?: string | null;
    launchedAt?: Date | string | null;
    closedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type PerformanceCycleUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPerformanceCycleTypeFieldUpdateOperationsInput | $Enums.PerformanceCycleType;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewType?: Prisma.EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType;
    ratingScale?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumReviewCycleStatusFieldUpdateOperationsInput | $Enums.ReviewCycleStatus;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    launchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviews?: Prisma.PerformanceReviewUpdateManyWithoutCycleNestedInput;
    goals?: Prisma.GoalUpdateManyWithoutCycleNestedInput;
};
export type PerformanceCycleUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPerformanceCycleTypeFieldUpdateOperationsInput | $Enums.PerformanceCycleType;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewType?: Prisma.EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType;
    ratingScale?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumReviewCycleStatusFieldUpdateOperationsInput | $Enums.ReviewCycleStatus;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    launchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviews?: Prisma.PerformanceReviewUncheckedUpdateManyWithoutCycleNestedInput;
    goals?: Prisma.GoalUncheckedUpdateManyWithoutCycleNestedInput;
};
export type PerformanceCycleUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPerformanceCycleTypeFieldUpdateOperationsInput | $Enums.PerformanceCycleType;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewType?: Prisma.EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType;
    ratingScale?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumReviewCycleStatusFieldUpdateOperationsInput | $Enums.ReviewCycleStatus;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    launchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PerformanceCycleCountOutputType = {
    reviews: number;
    goals: number;
};
export type PerformanceCycleCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reviews?: boolean | PerformanceCycleCountOutputTypeCountReviewsArgs;
    goals?: boolean | PerformanceCycleCountOutputTypeCountGoalsArgs;
};
export type PerformanceCycleCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceCycleCountOutputTypeSelect<ExtArgs> | null;
};
export type PerformanceCycleCountOutputTypeCountReviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PerformanceReviewWhereInput;
};
export type PerformanceCycleCountOutputTypeCountGoalsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GoalWhereInput;
};
export type PerformanceCycleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    type?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    reviewType?: boolean;
    ratingScale?: boolean;
    status?: boolean;
    createdBy?: boolean;
    launchedAt?: boolean;
    closedAt?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    reviews?: boolean | Prisma.PerformanceCycle$reviewsArgs<ExtArgs>;
    goals?: boolean | Prisma.PerformanceCycle$goalsArgs<ExtArgs>;
    _count?: boolean | Prisma.PerformanceCycleCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["performanceCycle"]>;
export type PerformanceCycleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    type?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    reviewType?: boolean;
    ratingScale?: boolean;
    status?: boolean;
    createdBy?: boolean;
    launchedAt?: boolean;
    closedAt?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["performanceCycle"]>;
export type PerformanceCycleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    type?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    reviewType?: boolean;
    ratingScale?: boolean;
    status?: boolean;
    createdBy?: boolean;
    launchedAt?: boolean;
    closedAt?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["performanceCycle"]>;
export type PerformanceCycleSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    type?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    reviewType?: boolean;
    ratingScale?: boolean;
    status?: boolean;
    createdBy?: boolean;
    launchedAt?: boolean;
    closedAt?: boolean;
    createdAt?: boolean;
};
export type PerformanceCycleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "name" | "type" | "startDate" | "endDate" | "reviewType" | "ratingScale" | "status" | "createdBy" | "launchedAt" | "closedAt" | "createdAt", ExtArgs["result"]["performanceCycle"]>;
export type PerformanceCycleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    reviews?: boolean | Prisma.PerformanceCycle$reviewsArgs<ExtArgs>;
    goals?: boolean | Prisma.PerformanceCycle$goalsArgs<ExtArgs>;
    _count?: boolean | Prisma.PerformanceCycleCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PerformanceCycleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type PerformanceCycleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type $PerformanceCyclePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PerformanceCycle";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        reviews: Prisma.$PerformanceReviewPayload<ExtArgs>[];
        goals: Prisma.$GoalPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        name: string;
        type: $Enums.PerformanceCycleType;
        startDate: Date;
        endDate: Date;
        reviewType: $Enums.ReviewType;
        ratingScale: number;
        status: $Enums.ReviewCycleStatus;
        createdBy: string | null;
        launchedAt: Date | null;
        closedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["performanceCycle"]>;
    composites: {};
};
export type PerformanceCycleGetPayload<S extends boolean | null | undefined | PerformanceCycleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PerformanceCyclePayload, S>;
export type PerformanceCycleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PerformanceCycleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PerformanceCycleCountAggregateInputType | true;
};
export interface PerformanceCycleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PerformanceCycle'];
        meta: {
            name: 'PerformanceCycle';
        };
    };
    findUnique<T extends PerformanceCycleFindUniqueArgs>(args: Prisma.SelectSubset<T, PerformanceCycleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PerformanceCycleClient<runtime.Types.Result.GetResult<Prisma.$PerformanceCyclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PerformanceCycleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PerformanceCycleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PerformanceCycleClient<runtime.Types.Result.GetResult<Prisma.$PerformanceCyclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PerformanceCycleFindFirstArgs>(args?: Prisma.SelectSubset<T, PerformanceCycleFindFirstArgs<ExtArgs>>): Prisma.Prisma__PerformanceCycleClient<runtime.Types.Result.GetResult<Prisma.$PerformanceCyclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PerformanceCycleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PerformanceCycleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PerformanceCycleClient<runtime.Types.Result.GetResult<Prisma.$PerformanceCyclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PerformanceCycleFindManyArgs>(args?: Prisma.SelectSubset<T, PerformanceCycleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PerformanceCyclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PerformanceCycleCreateArgs>(args: Prisma.SelectSubset<T, PerformanceCycleCreateArgs<ExtArgs>>): Prisma.Prisma__PerformanceCycleClient<runtime.Types.Result.GetResult<Prisma.$PerformanceCyclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PerformanceCycleCreateManyArgs>(args?: Prisma.SelectSubset<T, PerformanceCycleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PerformanceCycleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PerformanceCycleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PerformanceCyclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PerformanceCycleDeleteArgs>(args: Prisma.SelectSubset<T, PerformanceCycleDeleteArgs<ExtArgs>>): Prisma.Prisma__PerformanceCycleClient<runtime.Types.Result.GetResult<Prisma.$PerformanceCyclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PerformanceCycleUpdateArgs>(args: Prisma.SelectSubset<T, PerformanceCycleUpdateArgs<ExtArgs>>): Prisma.Prisma__PerformanceCycleClient<runtime.Types.Result.GetResult<Prisma.$PerformanceCyclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PerformanceCycleDeleteManyArgs>(args?: Prisma.SelectSubset<T, PerformanceCycleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PerformanceCycleUpdateManyArgs>(args: Prisma.SelectSubset<T, PerformanceCycleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PerformanceCycleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PerformanceCycleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PerformanceCyclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PerformanceCycleUpsertArgs>(args: Prisma.SelectSubset<T, PerformanceCycleUpsertArgs<ExtArgs>>): Prisma.Prisma__PerformanceCycleClient<runtime.Types.Result.GetResult<Prisma.$PerformanceCyclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PerformanceCycleCountArgs>(args?: Prisma.Subset<T, PerformanceCycleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PerformanceCycleCountAggregateOutputType> : number>;
    aggregate<T extends PerformanceCycleAggregateArgs>(args: Prisma.Subset<T, PerformanceCycleAggregateArgs>): Prisma.PrismaPromise<GetPerformanceCycleAggregateType<T>>;
    groupBy<T extends PerformanceCycleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PerformanceCycleGroupByArgs['orderBy'];
    } : {
        orderBy?: PerformanceCycleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PerformanceCycleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerformanceCycleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PerformanceCycleFieldRefs;
}
export interface Prisma__PerformanceCycleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    reviews<T extends Prisma.PerformanceCycle$reviewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PerformanceCycle$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PerformanceReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    goals<T extends Prisma.PerformanceCycle$goalsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PerformanceCycle$goalsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PerformanceCycleFieldRefs {
    readonly id: Prisma.FieldRef<"PerformanceCycle", 'String'>;
    readonly organizationId: Prisma.FieldRef<"PerformanceCycle", 'String'>;
    readonly name: Prisma.FieldRef<"PerformanceCycle", 'String'>;
    readonly type: Prisma.FieldRef<"PerformanceCycle", 'PerformanceCycleType'>;
    readonly startDate: Prisma.FieldRef<"PerformanceCycle", 'DateTime'>;
    readonly endDate: Prisma.FieldRef<"PerformanceCycle", 'DateTime'>;
    readonly reviewType: Prisma.FieldRef<"PerformanceCycle", 'ReviewType'>;
    readonly ratingScale: Prisma.FieldRef<"PerformanceCycle", 'Int'>;
    readonly status: Prisma.FieldRef<"PerformanceCycle", 'ReviewCycleStatus'>;
    readonly createdBy: Prisma.FieldRef<"PerformanceCycle", 'String'>;
    readonly launchedAt: Prisma.FieldRef<"PerformanceCycle", 'DateTime'>;
    readonly closedAt: Prisma.FieldRef<"PerformanceCycle", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"PerformanceCycle", 'DateTime'>;
}
export type PerformanceCycleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceCycleSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceCycleOmit<ExtArgs> | null;
    include?: Prisma.PerformanceCycleInclude<ExtArgs> | null;
    where: Prisma.PerformanceCycleWhereUniqueInput;
};
export type PerformanceCycleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceCycleSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceCycleOmit<ExtArgs> | null;
    include?: Prisma.PerformanceCycleInclude<ExtArgs> | null;
    where: Prisma.PerformanceCycleWhereUniqueInput;
};
export type PerformanceCycleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceCycleSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceCycleOmit<ExtArgs> | null;
    include?: Prisma.PerformanceCycleInclude<ExtArgs> | null;
    where?: Prisma.PerformanceCycleWhereInput;
    orderBy?: Prisma.PerformanceCycleOrderByWithRelationInput | Prisma.PerformanceCycleOrderByWithRelationInput[];
    cursor?: Prisma.PerformanceCycleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PerformanceCycleScalarFieldEnum | Prisma.PerformanceCycleScalarFieldEnum[];
};
export type PerformanceCycleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceCycleSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceCycleOmit<ExtArgs> | null;
    include?: Prisma.PerformanceCycleInclude<ExtArgs> | null;
    where?: Prisma.PerformanceCycleWhereInput;
    orderBy?: Prisma.PerformanceCycleOrderByWithRelationInput | Prisma.PerformanceCycleOrderByWithRelationInput[];
    cursor?: Prisma.PerformanceCycleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PerformanceCycleScalarFieldEnum | Prisma.PerformanceCycleScalarFieldEnum[];
};
export type PerformanceCycleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceCycleSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceCycleOmit<ExtArgs> | null;
    include?: Prisma.PerformanceCycleInclude<ExtArgs> | null;
    where?: Prisma.PerformanceCycleWhereInput;
    orderBy?: Prisma.PerformanceCycleOrderByWithRelationInput | Prisma.PerformanceCycleOrderByWithRelationInput[];
    cursor?: Prisma.PerformanceCycleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PerformanceCycleScalarFieldEnum | Prisma.PerformanceCycleScalarFieldEnum[];
};
export type PerformanceCycleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceCycleSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceCycleOmit<ExtArgs> | null;
    include?: Prisma.PerformanceCycleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PerformanceCycleCreateInput, Prisma.PerformanceCycleUncheckedCreateInput>;
};
export type PerformanceCycleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PerformanceCycleCreateManyInput | Prisma.PerformanceCycleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PerformanceCycleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceCycleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PerformanceCycleOmit<ExtArgs> | null;
    data: Prisma.PerformanceCycleCreateManyInput | Prisma.PerformanceCycleCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PerformanceCycleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PerformanceCycleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceCycleSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceCycleOmit<ExtArgs> | null;
    include?: Prisma.PerformanceCycleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PerformanceCycleUpdateInput, Prisma.PerformanceCycleUncheckedUpdateInput>;
    where: Prisma.PerformanceCycleWhereUniqueInput;
};
export type PerformanceCycleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PerformanceCycleUpdateManyMutationInput, Prisma.PerformanceCycleUncheckedUpdateManyInput>;
    where?: Prisma.PerformanceCycleWhereInput;
    limit?: number;
};
export type PerformanceCycleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceCycleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PerformanceCycleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PerformanceCycleUpdateManyMutationInput, Prisma.PerformanceCycleUncheckedUpdateManyInput>;
    where?: Prisma.PerformanceCycleWhereInput;
    limit?: number;
    include?: Prisma.PerformanceCycleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PerformanceCycleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceCycleSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceCycleOmit<ExtArgs> | null;
    include?: Prisma.PerformanceCycleInclude<ExtArgs> | null;
    where: Prisma.PerformanceCycleWhereUniqueInput;
    create: Prisma.XOR<Prisma.PerformanceCycleCreateInput, Prisma.PerformanceCycleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PerformanceCycleUpdateInput, Prisma.PerformanceCycleUncheckedUpdateInput>;
};
export type PerformanceCycleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceCycleSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceCycleOmit<ExtArgs> | null;
    include?: Prisma.PerformanceCycleInclude<ExtArgs> | null;
    where: Prisma.PerformanceCycleWhereUniqueInput;
};
export type PerformanceCycleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PerformanceCycleWhereInput;
    limit?: number;
};
export type PerformanceCycle$reviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceReviewSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceReviewOmit<ExtArgs> | null;
    include?: Prisma.PerformanceReviewInclude<ExtArgs> | null;
    where?: Prisma.PerformanceReviewWhereInput;
    orderBy?: Prisma.PerformanceReviewOrderByWithRelationInput | Prisma.PerformanceReviewOrderByWithRelationInput[];
    cursor?: Prisma.PerformanceReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PerformanceReviewScalarFieldEnum | Prisma.PerformanceReviewScalarFieldEnum[];
};
export type PerformanceCycle$goalsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoalSelect<ExtArgs> | null;
    omit?: Prisma.GoalOmit<ExtArgs> | null;
    include?: Prisma.GoalInclude<ExtArgs> | null;
    where?: Prisma.GoalWhereInput;
    orderBy?: Prisma.GoalOrderByWithRelationInput | Prisma.GoalOrderByWithRelationInput[];
    cursor?: Prisma.GoalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GoalScalarFieldEnum | Prisma.GoalScalarFieldEnum[];
};
export type PerformanceCycleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceCycleSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceCycleOmit<ExtArgs> | null;
    include?: Prisma.PerformanceCycleInclude<ExtArgs> | null;
};
