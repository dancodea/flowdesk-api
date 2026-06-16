import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PerformanceReviewModel = runtime.Types.Result.DefaultSelection<Prisma.$PerformanceReviewPayload>;
export type AggregatePerformanceReview = {
    _count: PerformanceReviewCountAggregateOutputType | null;
    _avg: PerformanceReviewAvgAggregateOutputType | null;
    _sum: PerformanceReviewSumAggregateOutputType | null;
    _min: PerformanceReviewMinAggregateOutputType | null;
    _max: PerformanceReviewMaxAggregateOutputType | null;
};
export type PerformanceReviewAvgAggregateOutputType = {
    overallRating: runtime.Decimal | null;
};
export type PerformanceReviewSumAggregateOutputType = {
    overallRating: runtime.Decimal | null;
};
export type PerformanceReviewMinAggregateOutputType = {
    id: string | null;
    cycleId: string | null;
    employeeId: string | null;
    managerId: string | null;
    overallRating: runtime.Decimal | null;
    overallLabel: string | null;
    selfSubmittedAt: Date | null;
    managerSubmittedAt: Date | null;
    acknowledgedAt: Date | null;
    status: $Enums.PerformanceReviewStatus | null;
    createdAt: Date | null;
};
export type PerformanceReviewMaxAggregateOutputType = {
    id: string | null;
    cycleId: string | null;
    employeeId: string | null;
    managerId: string | null;
    overallRating: runtime.Decimal | null;
    overallLabel: string | null;
    selfSubmittedAt: Date | null;
    managerSubmittedAt: Date | null;
    acknowledgedAt: Date | null;
    status: $Enums.PerformanceReviewStatus | null;
    createdAt: Date | null;
};
export type PerformanceReviewCountAggregateOutputType = {
    id: number;
    cycleId: number;
    employeeId: number;
    managerId: number;
    selfReviewData: number;
    managerReviewData: number;
    peerFeedbackData: number;
    overallRating: number;
    overallLabel: number;
    selfSubmittedAt: number;
    managerSubmittedAt: number;
    acknowledgedAt: number;
    status: number;
    createdAt: number;
    _all: number;
};
export type PerformanceReviewAvgAggregateInputType = {
    overallRating?: true;
};
export type PerformanceReviewSumAggregateInputType = {
    overallRating?: true;
};
export type PerformanceReviewMinAggregateInputType = {
    id?: true;
    cycleId?: true;
    employeeId?: true;
    managerId?: true;
    overallRating?: true;
    overallLabel?: true;
    selfSubmittedAt?: true;
    managerSubmittedAt?: true;
    acknowledgedAt?: true;
    status?: true;
    createdAt?: true;
};
export type PerformanceReviewMaxAggregateInputType = {
    id?: true;
    cycleId?: true;
    employeeId?: true;
    managerId?: true;
    overallRating?: true;
    overallLabel?: true;
    selfSubmittedAt?: true;
    managerSubmittedAt?: true;
    acknowledgedAt?: true;
    status?: true;
    createdAt?: true;
};
export type PerformanceReviewCountAggregateInputType = {
    id?: true;
    cycleId?: true;
    employeeId?: true;
    managerId?: true;
    selfReviewData?: true;
    managerReviewData?: true;
    peerFeedbackData?: true;
    overallRating?: true;
    overallLabel?: true;
    selfSubmittedAt?: true;
    managerSubmittedAt?: true;
    acknowledgedAt?: true;
    status?: true;
    createdAt?: true;
    _all?: true;
};
export type PerformanceReviewAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PerformanceReviewWhereInput;
    orderBy?: Prisma.PerformanceReviewOrderByWithRelationInput | Prisma.PerformanceReviewOrderByWithRelationInput[];
    cursor?: Prisma.PerformanceReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PerformanceReviewCountAggregateInputType;
    _avg?: PerformanceReviewAvgAggregateInputType;
    _sum?: PerformanceReviewSumAggregateInputType;
    _min?: PerformanceReviewMinAggregateInputType;
    _max?: PerformanceReviewMaxAggregateInputType;
};
export type GetPerformanceReviewAggregateType<T extends PerformanceReviewAggregateArgs> = {
    [P in keyof T & keyof AggregatePerformanceReview]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePerformanceReview[P]> : Prisma.GetScalarType<T[P], AggregatePerformanceReview[P]>;
};
export type PerformanceReviewGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PerformanceReviewWhereInput;
    orderBy?: Prisma.PerformanceReviewOrderByWithAggregationInput | Prisma.PerformanceReviewOrderByWithAggregationInput[];
    by: Prisma.PerformanceReviewScalarFieldEnum[] | Prisma.PerformanceReviewScalarFieldEnum;
    having?: Prisma.PerformanceReviewScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PerformanceReviewCountAggregateInputType | true;
    _avg?: PerformanceReviewAvgAggregateInputType;
    _sum?: PerformanceReviewSumAggregateInputType;
    _min?: PerformanceReviewMinAggregateInputType;
    _max?: PerformanceReviewMaxAggregateInputType;
};
export type PerformanceReviewGroupByOutputType = {
    id: string;
    cycleId: string;
    employeeId: string;
    managerId: string | null;
    selfReviewData: runtime.JsonValue | null;
    managerReviewData: runtime.JsonValue | null;
    peerFeedbackData: runtime.JsonValue | null;
    overallRating: runtime.Decimal | null;
    overallLabel: string | null;
    selfSubmittedAt: Date | null;
    managerSubmittedAt: Date | null;
    acknowledgedAt: Date | null;
    status: $Enums.PerformanceReviewStatus;
    createdAt: Date;
    _count: PerformanceReviewCountAggregateOutputType | null;
    _avg: PerformanceReviewAvgAggregateOutputType | null;
    _sum: PerformanceReviewSumAggregateOutputType | null;
    _min: PerformanceReviewMinAggregateOutputType | null;
    _max: PerformanceReviewMaxAggregateOutputType | null;
};
export type GetPerformanceReviewGroupByPayload<T extends PerformanceReviewGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PerformanceReviewGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PerformanceReviewGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PerformanceReviewGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PerformanceReviewGroupByOutputType[P]>;
}>>;
export type PerformanceReviewWhereInput = {
    AND?: Prisma.PerformanceReviewWhereInput | Prisma.PerformanceReviewWhereInput[];
    OR?: Prisma.PerformanceReviewWhereInput[];
    NOT?: Prisma.PerformanceReviewWhereInput | Prisma.PerformanceReviewWhereInput[];
    id?: Prisma.UuidFilter<"PerformanceReview"> | string;
    cycleId?: Prisma.UuidFilter<"PerformanceReview"> | string;
    employeeId?: Prisma.UuidFilter<"PerformanceReview"> | string;
    managerId?: Prisma.UuidNullableFilter<"PerformanceReview"> | string | null;
    selfReviewData?: Prisma.JsonNullableFilter<"PerformanceReview">;
    managerReviewData?: Prisma.JsonNullableFilter<"PerformanceReview">;
    peerFeedbackData?: Prisma.JsonNullableFilter<"PerformanceReview">;
    overallRating?: Prisma.DecimalNullableFilter<"PerformanceReview"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overallLabel?: Prisma.StringNullableFilter<"PerformanceReview"> | string | null;
    selfSubmittedAt?: Prisma.DateTimeNullableFilter<"PerformanceReview"> | Date | string | null;
    managerSubmittedAt?: Prisma.DateTimeNullableFilter<"PerformanceReview"> | Date | string | null;
    acknowledgedAt?: Prisma.DateTimeNullableFilter<"PerformanceReview"> | Date | string | null;
    status?: Prisma.EnumPerformanceReviewStatusFilter<"PerformanceReview"> | $Enums.PerformanceReviewStatus;
    createdAt?: Prisma.DateTimeFilter<"PerformanceReview"> | Date | string;
    cycle?: Prisma.XOR<Prisma.PerformanceCycleScalarRelationFilter, Prisma.PerformanceCycleWhereInput>;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
};
export type PerformanceReviewOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    cycleId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    managerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    selfReviewData?: Prisma.SortOrderInput | Prisma.SortOrder;
    managerReviewData?: Prisma.SortOrderInput | Prisma.SortOrder;
    peerFeedbackData?: Prisma.SortOrderInput | Prisma.SortOrder;
    overallRating?: Prisma.SortOrderInput | Prisma.SortOrder;
    overallLabel?: Prisma.SortOrderInput | Prisma.SortOrder;
    selfSubmittedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    managerSubmittedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    cycle?: Prisma.PerformanceCycleOrderByWithRelationInput;
    employee?: Prisma.EmployeeOrderByWithRelationInput;
};
export type PerformanceReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    cycleId_employeeId?: Prisma.PerformanceReviewCycleIdEmployeeIdCompoundUniqueInput;
    AND?: Prisma.PerformanceReviewWhereInput | Prisma.PerformanceReviewWhereInput[];
    OR?: Prisma.PerformanceReviewWhereInput[];
    NOT?: Prisma.PerformanceReviewWhereInput | Prisma.PerformanceReviewWhereInput[];
    cycleId?: Prisma.UuidFilter<"PerformanceReview"> | string;
    employeeId?: Prisma.UuidFilter<"PerformanceReview"> | string;
    managerId?: Prisma.UuidNullableFilter<"PerformanceReview"> | string | null;
    selfReviewData?: Prisma.JsonNullableFilter<"PerformanceReview">;
    managerReviewData?: Prisma.JsonNullableFilter<"PerformanceReview">;
    peerFeedbackData?: Prisma.JsonNullableFilter<"PerformanceReview">;
    overallRating?: Prisma.DecimalNullableFilter<"PerformanceReview"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overallLabel?: Prisma.StringNullableFilter<"PerformanceReview"> | string | null;
    selfSubmittedAt?: Prisma.DateTimeNullableFilter<"PerformanceReview"> | Date | string | null;
    managerSubmittedAt?: Prisma.DateTimeNullableFilter<"PerformanceReview"> | Date | string | null;
    acknowledgedAt?: Prisma.DateTimeNullableFilter<"PerformanceReview"> | Date | string | null;
    status?: Prisma.EnumPerformanceReviewStatusFilter<"PerformanceReview"> | $Enums.PerformanceReviewStatus;
    createdAt?: Prisma.DateTimeFilter<"PerformanceReview"> | Date | string;
    cycle?: Prisma.XOR<Prisma.PerformanceCycleScalarRelationFilter, Prisma.PerformanceCycleWhereInput>;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
}, "id" | "cycleId_employeeId">;
export type PerformanceReviewOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    cycleId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    managerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    selfReviewData?: Prisma.SortOrderInput | Prisma.SortOrder;
    managerReviewData?: Prisma.SortOrderInput | Prisma.SortOrder;
    peerFeedbackData?: Prisma.SortOrderInput | Prisma.SortOrder;
    overallRating?: Prisma.SortOrderInput | Prisma.SortOrder;
    overallLabel?: Prisma.SortOrderInput | Prisma.SortOrder;
    selfSubmittedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    managerSubmittedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PerformanceReviewCountOrderByAggregateInput;
    _avg?: Prisma.PerformanceReviewAvgOrderByAggregateInput;
    _max?: Prisma.PerformanceReviewMaxOrderByAggregateInput;
    _min?: Prisma.PerformanceReviewMinOrderByAggregateInput;
    _sum?: Prisma.PerformanceReviewSumOrderByAggregateInput;
};
export type PerformanceReviewScalarWhereWithAggregatesInput = {
    AND?: Prisma.PerformanceReviewScalarWhereWithAggregatesInput | Prisma.PerformanceReviewScalarWhereWithAggregatesInput[];
    OR?: Prisma.PerformanceReviewScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PerformanceReviewScalarWhereWithAggregatesInput | Prisma.PerformanceReviewScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PerformanceReview"> | string;
    cycleId?: Prisma.UuidWithAggregatesFilter<"PerformanceReview"> | string;
    employeeId?: Prisma.UuidWithAggregatesFilter<"PerformanceReview"> | string;
    managerId?: Prisma.UuidNullableWithAggregatesFilter<"PerformanceReview"> | string | null;
    selfReviewData?: Prisma.JsonNullableWithAggregatesFilter<"PerformanceReview">;
    managerReviewData?: Prisma.JsonNullableWithAggregatesFilter<"PerformanceReview">;
    peerFeedbackData?: Prisma.JsonNullableWithAggregatesFilter<"PerformanceReview">;
    overallRating?: Prisma.DecimalNullableWithAggregatesFilter<"PerformanceReview"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overallLabel?: Prisma.StringNullableWithAggregatesFilter<"PerformanceReview"> | string | null;
    selfSubmittedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PerformanceReview"> | Date | string | null;
    managerSubmittedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PerformanceReview"> | Date | string | null;
    acknowledgedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PerformanceReview"> | Date | string | null;
    status?: Prisma.EnumPerformanceReviewStatusWithAggregatesFilter<"PerformanceReview"> | $Enums.PerformanceReviewStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PerformanceReview"> | Date | string;
};
export type PerformanceReviewCreateInput = {
    id?: string;
    managerId?: string | null;
    selfReviewData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    managerReviewData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    peerFeedbackData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    overallRating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overallLabel?: string | null;
    selfSubmittedAt?: Date | string | null;
    managerSubmittedAt?: Date | string | null;
    acknowledgedAt?: Date | string | null;
    status?: $Enums.PerformanceReviewStatus;
    createdAt?: Date | string;
    cycle: Prisma.PerformanceCycleCreateNestedOneWithoutReviewsInput;
    employee: Prisma.EmployeeCreateNestedOneWithoutPerformanceReviewsInput;
};
export type PerformanceReviewUncheckedCreateInput = {
    id?: string;
    cycleId: string;
    employeeId: string;
    managerId?: string | null;
    selfReviewData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    managerReviewData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    peerFeedbackData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    overallRating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overallLabel?: string | null;
    selfSubmittedAt?: Date | string | null;
    managerSubmittedAt?: Date | string | null;
    acknowledgedAt?: Date | string | null;
    status?: $Enums.PerformanceReviewStatus;
    createdAt?: Date | string;
};
export type PerformanceReviewUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    managerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    selfReviewData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    managerReviewData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    peerFeedbackData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    overallRating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overallLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    selfSubmittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    managerSubmittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumPerformanceReviewStatusFieldUpdateOperationsInput | $Enums.PerformanceReviewStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cycle?: Prisma.PerformanceCycleUpdateOneRequiredWithoutReviewsNestedInput;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutPerformanceReviewsNestedInput;
};
export type PerformanceReviewUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cycleId?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    managerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    selfReviewData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    managerReviewData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    peerFeedbackData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    overallRating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overallLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    selfSubmittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    managerSubmittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumPerformanceReviewStatusFieldUpdateOperationsInput | $Enums.PerformanceReviewStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PerformanceReviewCreateManyInput = {
    id?: string;
    cycleId: string;
    employeeId: string;
    managerId?: string | null;
    selfReviewData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    managerReviewData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    peerFeedbackData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    overallRating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overallLabel?: string | null;
    selfSubmittedAt?: Date | string | null;
    managerSubmittedAt?: Date | string | null;
    acknowledgedAt?: Date | string | null;
    status?: $Enums.PerformanceReviewStatus;
    createdAt?: Date | string;
};
export type PerformanceReviewUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    managerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    selfReviewData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    managerReviewData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    peerFeedbackData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    overallRating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overallLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    selfSubmittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    managerSubmittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumPerformanceReviewStatusFieldUpdateOperationsInput | $Enums.PerformanceReviewStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PerformanceReviewUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cycleId?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    managerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    selfReviewData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    managerReviewData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    peerFeedbackData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    overallRating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overallLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    selfSubmittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    managerSubmittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumPerformanceReviewStatusFieldUpdateOperationsInput | $Enums.PerformanceReviewStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PerformanceReviewListRelationFilter = {
    every?: Prisma.PerformanceReviewWhereInput;
    some?: Prisma.PerformanceReviewWhereInput;
    none?: Prisma.PerformanceReviewWhereInput;
};
export type PerformanceReviewOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PerformanceReviewCycleIdEmployeeIdCompoundUniqueInput = {
    cycleId: string;
    employeeId: string;
};
export type PerformanceReviewCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cycleId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    managerId?: Prisma.SortOrder;
    selfReviewData?: Prisma.SortOrder;
    managerReviewData?: Prisma.SortOrder;
    peerFeedbackData?: Prisma.SortOrder;
    overallRating?: Prisma.SortOrder;
    overallLabel?: Prisma.SortOrder;
    selfSubmittedAt?: Prisma.SortOrder;
    managerSubmittedAt?: Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PerformanceReviewAvgOrderByAggregateInput = {
    overallRating?: Prisma.SortOrder;
};
export type PerformanceReviewMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cycleId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    managerId?: Prisma.SortOrder;
    overallRating?: Prisma.SortOrder;
    overallLabel?: Prisma.SortOrder;
    selfSubmittedAt?: Prisma.SortOrder;
    managerSubmittedAt?: Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PerformanceReviewMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cycleId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    managerId?: Prisma.SortOrder;
    overallRating?: Prisma.SortOrder;
    overallLabel?: Prisma.SortOrder;
    selfSubmittedAt?: Prisma.SortOrder;
    managerSubmittedAt?: Prisma.SortOrder;
    acknowledgedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PerformanceReviewSumOrderByAggregateInput = {
    overallRating?: Prisma.SortOrder;
};
export type PerformanceReviewCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.PerformanceReviewCreateWithoutEmployeeInput, Prisma.PerformanceReviewUncheckedCreateWithoutEmployeeInput> | Prisma.PerformanceReviewCreateWithoutEmployeeInput[] | Prisma.PerformanceReviewUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.PerformanceReviewCreateOrConnectWithoutEmployeeInput | Prisma.PerformanceReviewCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.PerformanceReviewCreateManyEmployeeInputEnvelope;
    connect?: Prisma.PerformanceReviewWhereUniqueInput | Prisma.PerformanceReviewWhereUniqueInput[];
};
export type PerformanceReviewUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.PerformanceReviewCreateWithoutEmployeeInput, Prisma.PerformanceReviewUncheckedCreateWithoutEmployeeInput> | Prisma.PerformanceReviewCreateWithoutEmployeeInput[] | Prisma.PerformanceReviewUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.PerformanceReviewCreateOrConnectWithoutEmployeeInput | Prisma.PerformanceReviewCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.PerformanceReviewCreateManyEmployeeInputEnvelope;
    connect?: Prisma.PerformanceReviewWhereUniqueInput | Prisma.PerformanceReviewWhereUniqueInput[];
};
export type PerformanceReviewUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.PerformanceReviewCreateWithoutEmployeeInput, Prisma.PerformanceReviewUncheckedCreateWithoutEmployeeInput> | Prisma.PerformanceReviewCreateWithoutEmployeeInput[] | Prisma.PerformanceReviewUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.PerformanceReviewCreateOrConnectWithoutEmployeeInput | Prisma.PerformanceReviewCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.PerformanceReviewUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.PerformanceReviewUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.PerformanceReviewCreateManyEmployeeInputEnvelope;
    set?: Prisma.PerformanceReviewWhereUniqueInput | Prisma.PerformanceReviewWhereUniqueInput[];
    disconnect?: Prisma.PerformanceReviewWhereUniqueInput | Prisma.PerformanceReviewWhereUniqueInput[];
    delete?: Prisma.PerformanceReviewWhereUniqueInput | Prisma.PerformanceReviewWhereUniqueInput[];
    connect?: Prisma.PerformanceReviewWhereUniqueInput | Prisma.PerformanceReviewWhereUniqueInput[];
    update?: Prisma.PerformanceReviewUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.PerformanceReviewUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.PerformanceReviewUpdateManyWithWhereWithoutEmployeeInput | Prisma.PerformanceReviewUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.PerformanceReviewScalarWhereInput | Prisma.PerformanceReviewScalarWhereInput[];
};
export type PerformanceReviewUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.PerformanceReviewCreateWithoutEmployeeInput, Prisma.PerformanceReviewUncheckedCreateWithoutEmployeeInput> | Prisma.PerformanceReviewCreateWithoutEmployeeInput[] | Prisma.PerformanceReviewUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.PerformanceReviewCreateOrConnectWithoutEmployeeInput | Prisma.PerformanceReviewCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.PerformanceReviewUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.PerformanceReviewUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.PerformanceReviewCreateManyEmployeeInputEnvelope;
    set?: Prisma.PerformanceReviewWhereUniqueInput | Prisma.PerformanceReviewWhereUniqueInput[];
    disconnect?: Prisma.PerformanceReviewWhereUniqueInput | Prisma.PerformanceReviewWhereUniqueInput[];
    delete?: Prisma.PerformanceReviewWhereUniqueInput | Prisma.PerformanceReviewWhereUniqueInput[];
    connect?: Prisma.PerformanceReviewWhereUniqueInput | Prisma.PerformanceReviewWhereUniqueInput[];
    update?: Prisma.PerformanceReviewUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.PerformanceReviewUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.PerformanceReviewUpdateManyWithWhereWithoutEmployeeInput | Prisma.PerformanceReviewUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.PerformanceReviewScalarWhereInput | Prisma.PerformanceReviewScalarWhereInput[];
};
export type PerformanceReviewCreateNestedManyWithoutCycleInput = {
    create?: Prisma.XOR<Prisma.PerformanceReviewCreateWithoutCycleInput, Prisma.PerformanceReviewUncheckedCreateWithoutCycleInput> | Prisma.PerformanceReviewCreateWithoutCycleInput[] | Prisma.PerformanceReviewUncheckedCreateWithoutCycleInput[];
    connectOrCreate?: Prisma.PerformanceReviewCreateOrConnectWithoutCycleInput | Prisma.PerformanceReviewCreateOrConnectWithoutCycleInput[];
    createMany?: Prisma.PerformanceReviewCreateManyCycleInputEnvelope;
    connect?: Prisma.PerformanceReviewWhereUniqueInput | Prisma.PerformanceReviewWhereUniqueInput[];
};
export type PerformanceReviewUncheckedCreateNestedManyWithoutCycleInput = {
    create?: Prisma.XOR<Prisma.PerformanceReviewCreateWithoutCycleInput, Prisma.PerformanceReviewUncheckedCreateWithoutCycleInput> | Prisma.PerformanceReviewCreateWithoutCycleInput[] | Prisma.PerformanceReviewUncheckedCreateWithoutCycleInput[];
    connectOrCreate?: Prisma.PerformanceReviewCreateOrConnectWithoutCycleInput | Prisma.PerformanceReviewCreateOrConnectWithoutCycleInput[];
    createMany?: Prisma.PerformanceReviewCreateManyCycleInputEnvelope;
    connect?: Prisma.PerformanceReviewWhereUniqueInput | Prisma.PerformanceReviewWhereUniqueInput[];
};
export type PerformanceReviewUpdateManyWithoutCycleNestedInput = {
    create?: Prisma.XOR<Prisma.PerformanceReviewCreateWithoutCycleInput, Prisma.PerformanceReviewUncheckedCreateWithoutCycleInput> | Prisma.PerformanceReviewCreateWithoutCycleInput[] | Prisma.PerformanceReviewUncheckedCreateWithoutCycleInput[];
    connectOrCreate?: Prisma.PerformanceReviewCreateOrConnectWithoutCycleInput | Prisma.PerformanceReviewCreateOrConnectWithoutCycleInput[];
    upsert?: Prisma.PerformanceReviewUpsertWithWhereUniqueWithoutCycleInput | Prisma.PerformanceReviewUpsertWithWhereUniqueWithoutCycleInput[];
    createMany?: Prisma.PerformanceReviewCreateManyCycleInputEnvelope;
    set?: Prisma.PerformanceReviewWhereUniqueInput | Prisma.PerformanceReviewWhereUniqueInput[];
    disconnect?: Prisma.PerformanceReviewWhereUniqueInput | Prisma.PerformanceReviewWhereUniqueInput[];
    delete?: Prisma.PerformanceReviewWhereUniqueInput | Prisma.PerformanceReviewWhereUniqueInput[];
    connect?: Prisma.PerformanceReviewWhereUniqueInput | Prisma.PerformanceReviewWhereUniqueInput[];
    update?: Prisma.PerformanceReviewUpdateWithWhereUniqueWithoutCycleInput | Prisma.PerformanceReviewUpdateWithWhereUniqueWithoutCycleInput[];
    updateMany?: Prisma.PerformanceReviewUpdateManyWithWhereWithoutCycleInput | Prisma.PerformanceReviewUpdateManyWithWhereWithoutCycleInput[];
    deleteMany?: Prisma.PerformanceReviewScalarWhereInput | Prisma.PerformanceReviewScalarWhereInput[];
};
export type PerformanceReviewUncheckedUpdateManyWithoutCycleNestedInput = {
    create?: Prisma.XOR<Prisma.PerformanceReviewCreateWithoutCycleInput, Prisma.PerformanceReviewUncheckedCreateWithoutCycleInput> | Prisma.PerformanceReviewCreateWithoutCycleInput[] | Prisma.PerformanceReviewUncheckedCreateWithoutCycleInput[];
    connectOrCreate?: Prisma.PerformanceReviewCreateOrConnectWithoutCycleInput | Prisma.PerformanceReviewCreateOrConnectWithoutCycleInput[];
    upsert?: Prisma.PerformanceReviewUpsertWithWhereUniqueWithoutCycleInput | Prisma.PerformanceReviewUpsertWithWhereUniqueWithoutCycleInput[];
    createMany?: Prisma.PerformanceReviewCreateManyCycleInputEnvelope;
    set?: Prisma.PerformanceReviewWhereUniqueInput | Prisma.PerformanceReviewWhereUniqueInput[];
    disconnect?: Prisma.PerformanceReviewWhereUniqueInput | Prisma.PerformanceReviewWhereUniqueInput[];
    delete?: Prisma.PerformanceReviewWhereUniqueInput | Prisma.PerformanceReviewWhereUniqueInput[];
    connect?: Prisma.PerformanceReviewWhereUniqueInput | Prisma.PerformanceReviewWhereUniqueInput[];
    update?: Prisma.PerformanceReviewUpdateWithWhereUniqueWithoutCycleInput | Prisma.PerformanceReviewUpdateWithWhereUniqueWithoutCycleInput[];
    updateMany?: Prisma.PerformanceReviewUpdateManyWithWhereWithoutCycleInput | Prisma.PerformanceReviewUpdateManyWithWhereWithoutCycleInput[];
    deleteMany?: Prisma.PerformanceReviewScalarWhereInput | Prisma.PerformanceReviewScalarWhereInput[];
};
export type EnumPerformanceReviewStatusFieldUpdateOperationsInput = {
    set?: $Enums.PerformanceReviewStatus;
};
export type PerformanceReviewCreateWithoutEmployeeInput = {
    id?: string;
    managerId?: string | null;
    selfReviewData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    managerReviewData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    peerFeedbackData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    overallRating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overallLabel?: string | null;
    selfSubmittedAt?: Date | string | null;
    managerSubmittedAt?: Date | string | null;
    acknowledgedAt?: Date | string | null;
    status?: $Enums.PerformanceReviewStatus;
    createdAt?: Date | string;
    cycle: Prisma.PerformanceCycleCreateNestedOneWithoutReviewsInput;
};
export type PerformanceReviewUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    cycleId: string;
    managerId?: string | null;
    selfReviewData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    managerReviewData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    peerFeedbackData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    overallRating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overallLabel?: string | null;
    selfSubmittedAt?: Date | string | null;
    managerSubmittedAt?: Date | string | null;
    acknowledgedAt?: Date | string | null;
    status?: $Enums.PerformanceReviewStatus;
    createdAt?: Date | string;
};
export type PerformanceReviewCreateOrConnectWithoutEmployeeInput = {
    where: Prisma.PerformanceReviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.PerformanceReviewCreateWithoutEmployeeInput, Prisma.PerformanceReviewUncheckedCreateWithoutEmployeeInput>;
};
export type PerformanceReviewCreateManyEmployeeInputEnvelope = {
    data: Prisma.PerformanceReviewCreateManyEmployeeInput | Prisma.PerformanceReviewCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
};
export type PerformanceReviewUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.PerformanceReviewWhereUniqueInput;
    update: Prisma.XOR<Prisma.PerformanceReviewUpdateWithoutEmployeeInput, Prisma.PerformanceReviewUncheckedUpdateWithoutEmployeeInput>;
    create: Prisma.XOR<Prisma.PerformanceReviewCreateWithoutEmployeeInput, Prisma.PerformanceReviewUncheckedCreateWithoutEmployeeInput>;
};
export type PerformanceReviewUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.PerformanceReviewWhereUniqueInput;
    data: Prisma.XOR<Prisma.PerformanceReviewUpdateWithoutEmployeeInput, Prisma.PerformanceReviewUncheckedUpdateWithoutEmployeeInput>;
};
export type PerformanceReviewUpdateManyWithWhereWithoutEmployeeInput = {
    where: Prisma.PerformanceReviewScalarWhereInput;
    data: Prisma.XOR<Prisma.PerformanceReviewUpdateManyMutationInput, Prisma.PerformanceReviewUncheckedUpdateManyWithoutEmployeeInput>;
};
export type PerformanceReviewScalarWhereInput = {
    AND?: Prisma.PerformanceReviewScalarWhereInput | Prisma.PerformanceReviewScalarWhereInput[];
    OR?: Prisma.PerformanceReviewScalarWhereInput[];
    NOT?: Prisma.PerformanceReviewScalarWhereInput | Prisma.PerformanceReviewScalarWhereInput[];
    id?: Prisma.UuidFilter<"PerformanceReview"> | string;
    cycleId?: Prisma.UuidFilter<"PerformanceReview"> | string;
    employeeId?: Prisma.UuidFilter<"PerformanceReview"> | string;
    managerId?: Prisma.UuidNullableFilter<"PerformanceReview"> | string | null;
    selfReviewData?: Prisma.JsonNullableFilter<"PerformanceReview">;
    managerReviewData?: Prisma.JsonNullableFilter<"PerformanceReview">;
    peerFeedbackData?: Prisma.JsonNullableFilter<"PerformanceReview">;
    overallRating?: Prisma.DecimalNullableFilter<"PerformanceReview"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overallLabel?: Prisma.StringNullableFilter<"PerformanceReview"> | string | null;
    selfSubmittedAt?: Prisma.DateTimeNullableFilter<"PerformanceReview"> | Date | string | null;
    managerSubmittedAt?: Prisma.DateTimeNullableFilter<"PerformanceReview"> | Date | string | null;
    acknowledgedAt?: Prisma.DateTimeNullableFilter<"PerformanceReview"> | Date | string | null;
    status?: Prisma.EnumPerformanceReviewStatusFilter<"PerformanceReview"> | $Enums.PerformanceReviewStatus;
    createdAt?: Prisma.DateTimeFilter<"PerformanceReview"> | Date | string;
};
export type PerformanceReviewCreateWithoutCycleInput = {
    id?: string;
    managerId?: string | null;
    selfReviewData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    managerReviewData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    peerFeedbackData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    overallRating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overallLabel?: string | null;
    selfSubmittedAt?: Date | string | null;
    managerSubmittedAt?: Date | string | null;
    acknowledgedAt?: Date | string | null;
    status?: $Enums.PerformanceReviewStatus;
    createdAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutPerformanceReviewsInput;
};
export type PerformanceReviewUncheckedCreateWithoutCycleInput = {
    id?: string;
    employeeId: string;
    managerId?: string | null;
    selfReviewData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    managerReviewData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    peerFeedbackData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    overallRating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overallLabel?: string | null;
    selfSubmittedAt?: Date | string | null;
    managerSubmittedAt?: Date | string | null;
    acknowledgedAt?: Date | string | null;
    status?: $Enums.PerformanceReviewStatus;
    createdAt?: Date | string;
};
export type PerformanceReviewCreateOrConnectWithoutCycleInput = {
    where: Prisma.PerformanceReviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.PerformanceReviewCreateWithoutCycleInput, Prisma.PerformanceReviewUncheckedCreateWithoutCycleInput>;
};
export type PerformanceReviewCreateManyCycleInputEnvelope = {
    data: Prisma.PerformanceReviewCreateManyCycleInput | Prisma.PerformanceReviewCreateManyCycleInput[];
    skipDuplicates?: boolean;
};
export type PerformanceReviewUpsertWithWhereUniqueWithoutCycleInput = {
    where: Prisma.PerformanceReviewWhereUniqueInput;
    update: Prisma.XOR<Prisma.PerformanceReviewUpdateWithoutCycleInput, Prisma.PerformanceReviewUncheckedUpdateWithoutCycleInput>;
    create: Prisma.XOR<Prisma.PerformanceReviewCreateWithoutCycleInput, Prisma.PerformanceReviewUncheckedCreateWithoutCycleInput>;
};
export type PerformanceReviewUpdateWithWhereUniqueWithoutCycleInput = {
    where: Prisma.PerformanceReviewWhereUniqueInput;
    data: Prisma.XOR<Prisma.PerformanceReviewUpdateWithoutCycleInput, Prisma.PerformanceReviewUncheckedUpdateWithoutCycleInput>;
};
export type PerformanceReviewUpdateManyWithWhereWithoutCycleInput = {
    where: Prisma.PerformanceReviewScalarWhereInput;
    data: Prisma.XOR<Prisma.PerformanceReviewUpdateManyMutationInput, Prisma.PerformanceReviewUncheckedUpdateManyWithoutCycleInput>;
};
export type PerformanceReviewCreateManyEmployeeInput = {
    id?: string;
    cycleId: string;
    managerId?: string | null;
    selfReviewData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    managerReviewData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    peerFeedbackData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    overallRating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overallLabel?: string | null;
    selfSubmittedAt?: Date | string | null;
    managerSubmittedAt?: Date | string | null;
    acknowledgedAt?: Date | string | null;
    status?: $Enums.PerformanceReviewStatus;
    createdAt?: Date | string;
};
export type PerformanceReviewUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    managerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    selfReviewData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    managerReviewData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    peerFeedbackData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    overallRating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overallLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    selfSubmittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    managerSubmittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumPerformanceReviewStatusFieldUpdateOperationsInput | $Enums.PerformanceReviewStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cycle?: Prisma.PerformanceCycleUpdateOneRequiredWithoutReviewsNestedInput;
};
export type PerformanceReviewUncheckedUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cycleId?: Prisma.StringFieldUpdateOperationsInput | string;
    managerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    selfReviewData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    managerReviewData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    peerFeedbackData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    overallRating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overallLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    selfSubmittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    managerSubmittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumPerformanceReviewStatusFieldUpdateOperationsInput | $Enums.PerformanceReviewStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PerformanceReviewUncheckedUpdateManyWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cycleId?: Prisma.StringFieldUpdateOperationsInput | string;
    managerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    selfReviewData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    managerReviewData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    peerFeedbackData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    overallRating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overallLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    selfSubmittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    managerSubmittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumPerformanceReviewStatusFieldUpdateOperationsInput | $Enums.PerformanceReviewStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PerformanceReviewCreateManyCycleInput = {
    id?: string;
    employeeId: string;
    managerId?: string | null;
    selfReviewData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    managerReviewData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    peerFeedbackData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    overallRating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overallLabel?: string | null;
    selfSubmittedAt?: Date | string | null;
    managerSubmittedAt?: Date | string | null;
    acknowledgedAt?: Date | string | null;
    status?: $Enums.PerformanceReviewStatus;
    createdAt?: Date | string;
};
export type PerformanceReviewUpdateWithoutCycleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    managerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    selfReviewData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    managerReviewData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    peerFeedbackData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    overallRating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overallLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    selfSubmittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    managerSubmittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumPerformanceReviewStatusFieldUpdateOperationsInput | $Enums.PerformanceReviewStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutPerformanceReviewsNestedInput;
};
export type PerformanceReviewUncheckedUpdateWithoutCycleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    managerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    selfReviewData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    managerReviewData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    peerFeedbackData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    overallRating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overallLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    selfSubmittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    managerSubmittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumPerformanceReviewStatusFieldUpdateOperationsInput | $Enums.PerformanceReviewStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PerformanceReviewUncheckedUpdateManyWithoutCycleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    managerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    selfReviewData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    managerReviewData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    peerFeedbackData?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    overallRating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overallLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    selfSubmittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    managerSubmittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumPerformanceReviewStatusFieldUpdateOperationsInput | $Enums.PerformanceReviewStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PerformanceReviewSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cycleId?: boolean;
    employeeId?: boolean;
    managerId?: boolean;
    selfReviewData?: boolean;
    managerReviewData?: boolean;
    peerFeedbackData?: boolean;
    overallRating?: boolean;
    overallLabel?: boolean;
    selfSubmittedAt?: boolean;
    managerSubmittedAt?: boolean;
    acknowledgedAt?: boolean;
    status?: boolean;
    createdAt?: boolean;
    cycle?: boolean | Prisma.PerformanceCycleDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["performanceReview"]>;
export type PerformanceReviewSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cycleId?: boolean;
    employeeId?: boolean;
    managerId?: boolean;
    selfReviewData?: boolean;
    managerReviewData?: boolean;
    peerFeedbackData?: boolean;
    overallRating?: boolean;
    overallLabel?: boolean;
    selfSubmittedAt?: boolean;
    managerSubmittedAt?: boolean;
    acknowledgedAt?: boolean;
    status?: boolean;
    createdAt?: boolean;
    cycle?: boolean | Prisma.PerformanceCycleDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["performanceReview"]>;
export type PerformanceReviewSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cycleId?: boolean;
    employeeId?: boolean;
    managerId?: boolean;
    selfReviewData?: boolean;
    managerReviewData?: boolean;
    peerFeedbackData?: boolean;
    overallRating?: boolean;
    overallLabel?: boolean;
    selfSubmittedAt?: boolean;
    managerSubmittedAt?: boolean;
    acknowledgedAt?: boolean;
    status?: boolean;
    createdAt?: boolean;
    cycle?: boolean | Prisma.PerformanceCycleDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["performanceReview"]>;
export type PerformanceReviewSelectScalar = {
    id?: boolean;
    cycleId?: boolean;
    employeeId?: boolean;
    managerId?: boolean;
    selfReviewData?: boolean;
    managerReviewData?: boolean;
    peerFeedbackData?: boolean;
    overallRating?: boolean;
    overallLabel?: boolean;
    selfSubmittedAt?: boolean;
    managerSubmittedAt?: boolean;
    acknowledgedAt?: boolean;
    status?: boolean;
    createdAt?: boolean;
};
export type PerformanceReviewOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "cycleId" | "employeeId" | "managerId" | "selfReviewData" | "managerReviewData" | "peerFeedbackData" | "overallRating" | "overallLabel" | "selfSubmittedAt" | "managerSubmittedAt" | "acknowledgedAt" | "status" | "createdAt", ExtArgs["result"]["performanceReview"]>;
export type PerformanceReviewInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cycle?: boolean | Prisma.PerformanceCycleDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type PerformanceReviewIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cycle?: boolean | Prisma.PerformanceCycleDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type PerformanceReviewIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cycle?: boolean | Prisma.PerformanceCycleDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type $PerformanceReviewPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PerformanceReview";
    objects: {
        cycle: Prisma.$PerformanceCyclePayload<ExtArgs>;
        employee: Prisma.$EmployeePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        cycleId: string;
        employeeId: string;
        managerId: string | null;
        selfReviewData: runtime.JsonValue | null;
        managerReviewData: runtime.JsonValue | null;
        peerFeedbackData: runtime.JsonValue | null;
        overallRating: runtime.Decimal | null;
        overallLabel: string | null;
        selfSubmittedAt: Date | null;
        managerSubmittedAt: Date | null;
        acknowledgedAt: Date | null;
        status: $Enums.PerformanceReviewStatus;
        createdAt: Date;
    }, ExtArgs["result"]["performanceReview"]>;
    composites: {};
};
export type PerformanceReviewGetPayload<S extends boolean | null | undefined | PerformanceReviewDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PerformanceReviewPayload, S>;
export type PerformanceReviewCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PerformanceReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PerformanceReviewCountAggregateInputType | true;
};
export interface PerformanceReviewDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PerformanceReview'];
        meta: {
            name: 'PerformanceReview';
        };
    };
    findUnique<T extends PerformanceReviewFindUniqueArgs>(args: Prisma.SelectSubset<T, PerformanceReviewFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PerformanceReviewClient<runtime.Types.Result.GetResult<Prisma.$PerformanceReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PerformanceReviewFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PerformanceReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PerformanceReviewClient<runtime.Types.Result.GetResult<Prisma.$PerformanceReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PerformanceReviewFindFirstArgs>(args?: Prisma.SelectSubset<T, PerformanceReviewFindFirstArgs<ExtArgs>>): Prisma.Prisma__PerformanceReviewClient<runtime.Types.Result.GetResult<Prisma.$PerformanceReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PerformanceReviewFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PerformanceReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PerformanceReviewClient<runtime.Types.Result.GetResult<Prisma.$PerformanceReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PerformanceReviewFindManyArgs>(args?: Prisma.SelectSubset<T, PerformanceReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PerformanceReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PerformanceReviewCreateArgs>(args: Prisma.SelectSubset<T, PerformanceReviewCreateArgs<ExtArgs>>): Prisma.Prisma__PerformanceReviewClient<runtime.Types.Result.GetResult<Prisma.$PerformanceReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PerformanceReviewCreateManyArgs>(args?: Prisma.SelectSubset<T, PerformanceReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PerformanceReviewCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PerformanceReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PerformanceReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PerformanceReviewDeleteArgs>(args: Prisma.SelectSubset<T, PerformanceReviewDeleteArgs<ExtArgs>>): Prisma.Prisma__PerformanceReviewClient<runtime.Types.Result.GetResult<Prisma.$PerformanceReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PerformanceReviewUpdateArgs>(args: Prisma.SelectSubset<T, PerformanceReviewUpdateArgs<ExtArgs>>): Prisma.Prisma__PerformanceReviewClient<runtime.Types.Result.GetResult<Prisma.$PerformanceReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PerformanceReviewDeleteManyArgs>(args?: Prisma.SelectSubset<T, PerformanceReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PerformanceReviewUpdateManyArgs>(args: Prisma.SelectSubset<T, PerformanceReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PerformanceReviewUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PerformanceReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PerformanceReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PerformanceReviewUpsertArgs>(args: Prisma.SelectSubset<T, PerformanceReviewUpsertArgs<ExtArgs>>): Prisma.Prisma__PerformanceReviewClient<runtime.Types.Result.GetResult<Prisma.$PerformanceReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PerformanceReviewCountArgs>(args?: Prisma.Subset<T, PerformanceReviewCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PerformanceReviewCountAggregateOutputType> : number>;
    aggregate<T extends PerformanceReviewAggregateArgs>(args: Prisma.Subset<T, PerformanceReviewAggregateArgs>): Prisma.PrismaPromise<GetPerformanceReviewAggregateType<T>>;
    groupBy<T extends PerformanceReviewGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PerformanceReviewGroupByArgs['orderBy'];
    } : {
        orderBy?: PerformanceReviewGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PerformanceReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerformanceReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PerformanceReviewFieldRefs;
}
export interface Prisma__PerformanceReviewClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cycle<T extends Prisma.PerformanceCycleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PerformanceCycleDefaultArgs<ExtArgs>>): Prisma.Prisma__PerformanceCycleClient<runtime.Types.Result.GetResult<Prisma.$PerformanceCyclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    employee<T extends Prisma.EmployeeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmployeeDefaultArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PerformanceReviewFieldRefs {
    readonly id: Prisma.FieldRef<"PerformanceReview", 'String'>;
    readonly cycleId: Prisma.FieldRef<"PerformanceReview", 'String'>;
    readonly employeeId: Prisma.FieldRef<"PerformanceReview", 'String'>;
    readonly managerId: Prisma.FieldRef<"PerformanceReview", 'String'>;
    readonly selfReviewData: Prisma.FieldRef<"PerformanceReview", 'Json'>;
    readonly managerReviewData: Prisma.FieldRef<"PerformanceReview", 'Json'>;
    readonly peerFeedbackData: Prisma.FieldRef<"PerformanceReview", 'Json'>;
    readonly overallRating: Prisma.FieldRef<"PerformanceReview", 'Decimal'>;
    readonly overallLabel: Prisma.FieldRef<"PerformanceReview", 'String'>;
    readonly selfSubmittedAt: Prisma.FieldRef<"PerformanceReview", 'DateTime'>;
    readonly managerSubmittedAt: Prisma.FieldRef<"PerformanceReview", 'DateTime'>;
    readonly acknowledgedAt: Prisma.FieldRef<"PerformanceReview", 'DateTime'>;
    readonly status: Prisma.FieldRef<"PerformanceReview", 'PerformanceReviewStatus'>;
    readonly createdAt: Prisma.FieldRef<"PerformanceReview", 'DateTime'>;
}
export type PerformanceReviewFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceReviewSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceReviewOmit<ExtArgs> | null;
    include?: Prisma.PerformanceReviewInclude<ExtArgs> | null;
    where: Prisma.PerformanceReviewWhereUniqueInput;
};
export type PerformanceReviewFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceReviewSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceReviewOmit<ExtArgs> | null;
    include?: Prisma.PerformanceReviewInclude<ExtArgs> | null;
    where: Prisma.PerformanceReviewWhereUniqueInput;
};
export type PerformanceReviewFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PerformanceReviewFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PerformanceReviewFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PerformanceReviewCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceReviewSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceReviewOmit<ExtArgs> | null;
    include?: Prisma.PerformanceReviewInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PerformanceReviewCreateInput, Prisma.PerformanceReviewUncheckedCreateInput>;
};
export type PerformanceReviewCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PerformanceReviewCreateManyInput | Prisma.PerformanceReviewCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PerformanceReviewCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceReviewSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PerformanceReviewOmit<ExtArgs> | null;
    data: Prisma.PerformanceReviewCreateManyInput | Prisma.PerformanceReviewCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PerformanceReviewIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PerformanceReviewUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceReviewSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceReviewOmit<ExtArgs> | null;
    include?: Prisma.PerformanceReviewInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PerformanceReviewUpdateInput, Prisma.PerformanceReviewUncheckedUpdateInput>;
    where: Prisma.PerformanceReviewWhereUniqueInput;
};
export type PerformanceReviewUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PerformanceReviewUpdateManyMutationInput, Prisma.PerformanceReviewUncheckedUpdateManyInput>;
    where?: Prisma.PerformanceReviewWhereInput;
    limit?: number;
};
export type PerformanceReviewUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceReviewSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PerformanceReviewOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PerformanceReviewUpdateManyMutationInput, Prisma.PerformanceReviewUncheckedUpdateManyInput>;
    where?: Prisma.PerformanceReviewWhereInput;
    limit?: number;
    include?: Prisma.PerformanceReviewIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PerformanceReviewUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceReviewSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceReviewOmit<ExtArgs> | null;
    include?: Prisma.PerformanceReviewInclude<ExtArgs> | null;
    where: Prisma.PerformanceReviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.PerformanceReviewCreateInput, Prisma.PerformanceReviewUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PerformanceReviewUpdateInput, Prisma.PerformanceReviewUncheckedUpdateInput>;
};
export type PerformanceReviewDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceReviewSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceReviewOmit<ExtArgs> | null;
    include?: Prisma.PerformanceReviewInclude<ExtArgs> | null;
    where: Prisma.PerformanceReviewWhereUniqueInput;
};
export type PerformanceReviewDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PerformanceReviewWhereInput;
    limit?: number;
};
export type PerformanceReviewDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerformanceReviewSelect<ExtArgs> | null;
    omit?: Prisma.PerformanceReviewOmit<ExtArgs> | null;
    include?: Prisma.PerformanceReviewInclude<ExtArgs> | null;
};
