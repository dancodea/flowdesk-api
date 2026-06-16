import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InterviewModel = runtime.Types.Result.DefaultSelection<Prisma.$InterviewPayload>;
export type AggregateInterview = {
    _count: InterviewCountAggregateOutputType | null;
    _avg: InterviewAvgAggregateOutputType | null;
    _sum: InterviewSumAggregateOutputType | null;
    _min: InterviewMinAggregateOutputType | null;
    _max: InterviewMaxAggregateOutputType | null;
};
export type InterviewAvgAggregateOutputType = {
    durationMinutes: number | null;
};
export type InterviewSumAggregateOutputType = {
    durationMinutes: number | null;
};
export type InterviewMinAggregateOutputType = {
    id: string | null;
    applicationId: string | null;
    scheduledAt: Date | null;
    durationMinutes: number | null;
    type: $Enums.InterviewType | null;
    meetingLink: string | null;
    location: string | null;
    status: $Enums.InterviewStatus | null;
    createdBy: string | null;
    createdAt: Date | null;
};
export type InterviewMaxAggregateOutputType = {
    id: string | null;
    applicationId: string | null;
    scheduledAt: Date | null;
    durationMinutes: number | null;
    type: $Enums.InterviewType | null;
    meetingLink: string | null;
    location: string | null;
    status: $Enums.InterviewStatus | null;
    createdBy: string | null;
    createdAt: Date | null;
};
export type InterviewCountAggregateOutputType = {
    id: number;
    applicationId: number;
    scheduledAt: number;
    durationMinutes: number;
    type: number;
    meetingLink: number;
    location: number;
    status: number;
    createdBy: number;
    createdAt: number;
    _all: number;
};
export type InterviewAvgAggregateInputType = {
    durationMinutes?: true;
};
export type InterviewSumAggregateInputType = {
    durationMinutes?: true;
};
export type InterviewMinAggregateInputType = {
    id?: true;
    applicationId?: true;
    scheduledAt?: true;
    durationMinutes?: true;
    type?: true;
    meetingLink?: true;
    location?: true;
    status?: true;
    createdBy?: true;
    createdAt?: true;
};
export type InterviewMaxAggregateInputType = {
    id?: true;
    applicationId?: true;
    scheduledAt?: true;
    durationMinutes?: true;
    type?: true;
    meetingLink?: true;
    location?: true;
    status?: true;
    createdBy?: true;
    createdAt?: true;
};
export type InterviewCountAggregateInputType = {
    id?: true;
    applicationId?: true;
    scheduledAt?: true;
    durationMinutes?: true;
    type?: true;
    meetingLink?: true;
    location?: true;
    status?: true;
    createdBy?: true;
    createdAt?: true;
    _all?: true;
};
export type InterviewAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterviewWhereInput;
    orderBy?: Prisma.InterviewOrderByWithRelationInput | Prisma.InterviewOrderByWithRelationInput[];
    cursor?: Prisma.InterviewWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InterviewCountAggregateInputType;
    _avg?: InterviewAvgAggregateInputType;
    _sum?: InterviewSumAggregateInputType;
    _min?: InterviewMinAggregateInputType;
    _max?: InterviewMaxAggregateInputType;
};
export type GetInterviewAggregateType<T extends InterviewAggregateArgs> = {
    [P in keyof T & keyof AggregateInterview]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInterview[P]> : Prisma.GetScalarType<T[P], AggregateInterview[P]>;
};
export type InterviewGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterviewWhereInput;
    orderBy?: Prisma.InterviewOrderByWithAggregationInput | Prisma.InterviewOrderByWithAggregationInput[];
    by: Prisma.InterviewScalarFieldEnum[] | Prisma.InterviewScalarFieldEnum;
    having?: Prisma.InterviewScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InterviewCountAggregateInputType | true;
    _avg?: InterviewAvgAggregateInputType;
    _sum?: InterviewSumAggregateInputType;
    _min?: InterviewMinAggregateInputType;
    _max?: InterviewMaxAggregateInputType;
};
export type InterviewGroupByOutputType = {
    id: string;
    applicationId: string;
    scheduledAt: Date;
    durationMinutes: number;
    type: $Enums.InterviewType;
    meetingLink: string | null;
    location: string | null;
    status: $Enums.InterviewStatus;
    createdBy: string | null;
    createdAt: Date;
    _count: InterviewCountAggregateOutputType | null;
    _avg: InterviewAvgAggregateOutputType | null;
    _sum: InterviewSumAggregateOutputType | null;
    _min: InterviewMinAggregateOutputType | null;
    _max: InterviewMaxAggregateOutputType | null;
};
export type GetInterviewGroupByPayload<T extends InterviewGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InterviewGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InterviewGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InterviewGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InterviewGroupByOutputType[P]>;
}>>;
export type InterviewWhereInput = {
    AND?: Prisma.InterviewWhereInput | Prisma.InterviewWhereInput[];
    OR?: Prisma.InterviewWhereInput[];
    NOT?: Prisma.InterviewWhereInput | Prisma.InterviewWhereInput[];
    id?: Prisma.UuidFilter<"Interview"> | string;
    applicationId?: Prisma.UuidFilter<"Interview"> | string;
    scheduledAt?: Prisma.DateTimeFilter<"Interview"> | Date | string;
    durationMinutes?: Prisma.IntFilter<"Interview"> | number;
    type?: Prisma.EnumInterviewTypeFilter<"Interview"> | $Enums.InterviewType;
    meetingLink?: Prisma.StringNullableFilter<"Interview"> | string | null;
    location?: Prisma.StringNullableFilter<"Interview"> | string | null;
    status?: Prisma.EnumInterviewStatusFilter<"Interview"> | $Enums.InterviewStatus;
    createdBy?: Prisma.UuidNullableFilter<"Interview"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Interview"> | Date | string;
    application?: Prisma.XOR<Prisma.ApplicationScalarRelationFilter, Prisma.ApplicationWhereInput>;
    panelists?: Prisma.InterviewPanelistListRelationFilter;
    feedback?: Prisma.InterviewFeedbackListRelationFilter;
};
export type InterviewOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    scheduledAt?: Prisma.SortOrder;
    durationMinutes?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    meetingLink?: Prisma.SortOrderInput | Prisma.SortOrder;
    location?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    application?: Prisma.ApplicationOrderByWithRelationInput;
    panelists?: Prisma.InterviewPanelistOrderByRelationAggregateInput;
    feedback?: Prisma.InterviewFeedbackOrderByRelationAggregateInput;
};
export type InterviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.InterviewWhereInput | Prisma.InterviewWhereInput[];
    OR?: Prisma.InterviewWhereInput[];
    NOT?: Prisma.InterviewWhereInput | Prisma.InterviewWhereInput[];
    applicationId?: Prisma.UuidFilter<"Interview"> | string;
    scheduledAt?: Prisma.DateTimeFilter<"Interview"> | Date | string;
    durationMinutes?: Prisma.IntFilter<"Interview"> | number;
    type?: Prisma.EnumInterviewTypeFilter<"Interview"> | $Enums.InterviewType;
    meetingLink?: Prisma.StringNullableFilter<"Interview"> | string | null;
    location?: Prisma.StringNullableFilter<"Interview"> | string | null;
    status?: Prisma.EnumInterviewStatusFilter<"Interview"> | $Enums.InterviewStatus;
    createdBy?: Prisma.UuidNullableFilter<"Interview"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Interview"> | Date | string;
    application?: Prisma.XOR<Prisma.ApplicationScalarRelationFilter, Prisma.ApplicationWhereInput>;
    panelists?: Prisma.InterviewPanelistListRelationFilter;
    feedback?: Prisma.InterviewFeedbackListRelationFilter;
}, "id">;
export type InterviewOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    scheduledAt?: Prisma.SortOrder;
    durationMinutes?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    meetingLink?: Prisma.SortOrderInput | Prisma.SortOrder;
    location?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.InterviewCountOrderByAggregateInput;
    _avg?: Prisma.InterviewAvgOrderByAggregateInput;
    _max?: Prisma.InterviewMaxOrderByAggregateInput;
    _min?: Prisma.InterviewMinOrderByAggregateInput;
    _sum?: Prisma.InterviewSumOrderByAggregateInput;
};
export type InterviewScalarWhereWithAggregatesInput = {
    AND?: Prisma.InterviewScalarWhereWithAggregatesInput | Prisma.InterviewScalarWhereWithAggregatesInput[];
    OR?: Prisma.InterviewScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InterviewScalarWhereWithAggregatesInput | Prisma.InterviewScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Interview"> | string;
    applicationId?: Prisma.UuidWithAggregatesFilter<"Interview"> | string;
    scheduledAt?: Prisma.DateTimeWithAggregatesFilter<"Interview"> | Date | string;
    durationMinutes?: Prisma.IntWithAggregatesFilter<"Interview"> | number;
    type?: Prisma.EnumInterviewTypeWithAggregatesFilter<"Interview"> | $Enums.InterviewType;
    meetingLink?: Prisma.StringNullableWithAggregatesFilter<"Interview"> | string | null;
    location?: Prisma.StringNullableWithAggregatesFilter<"Interview"> | string | null;
    status?: Prisma.EnumInterviewStatusWithAggregatesFilter<"Interview"> | $Enums.InterviewStatus;
    createdBy?: Prisma.UuidNullableWithAggregatesFilter<"Interview"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Interview"> | Date | string;
};
export type InterviewCreateInput = {
    id?: string;
    scheduledAt: Date | string;
    durationMinutes?: number;
    type?: $Enums.InterviewType;
    meetingLink?: string | null;
    location?: string | null;
    status?: $Enums.InterviewStatus;
    createdBy?: string | null;
    createdAt?: Date | string;
    application: Prisma.ApplicationCreateNestedOneWithoutInterviewsInput;
    panelists?: Prisma.InterviewPanelistCreateNestedManyWithoutInterviewInput;
    feedback?: Prisma.InterviewFeedbackCreateNestedManyWithoutInterviewInput;
};
export type InterviewUncheckedCreateInput = {
    id?: string;
    applicationId: string;
    scheduledAt: Date | string;
    durationMinutes?: number;
    type?: $Enums.InterviewType;
    meetingLink?: string | null;
    location?: string | null;
    status?: $Enums.InterviewStatus;
    createdBy?: string | null;
    createdAt?: Date | string;
    panelists?: Prisma.InterviewPanelistUncheckedCreateNestedManyWithoutInterviewInput;
    feedback?: Prisma.InterviewFeedbackUncheckedCreateNestedManyWithoutInterviewInput;
};
export type InterviewUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    durationMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.EnumInterviewTypeFieldUpdateOperationsInput | $Enums.InterviewType;
    meetingLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    application?: Prisma.ApplicationUpdateOneRequiredWithoutInterviewsNestedInput;
    panelists?: Prisma.InterviewPanelistUpdateManyWithoutInterviewNestedInput;
    feedback?: Prisma.InterviewFeedbackUpdateManyWithoutInterviewNestedInput;
};
export type InterviewUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationId?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    durationMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.EnumInterviewTypeFieldUpdateOperationsInput | $Enums.InterviewType;
    meetingLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    panelists?: Prisma.InterviewPanelistUncheckedUpdateManyWithoutInterviewNestedInput;
    feedback?: Prisma.InterviewFeedbackUncheckedUpdateManyWithoutInterviewNestedInput;
};
export type InterviewCreateManyInput = {
    id?: string;
    applicationId: string;
    scheduledAt: Date | string;
    durationMinutes?: number;
    type?: $Enums.InterviewType;
    meetingLink?: string | null;
    location?: string | null;
    status?: $Enums.InterviewStatus;
    createdBy?: string | null;
    createdAt?: Date | string;
};
export type InterviewUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    durationMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.EnumInterviewTypeFieldUpdateOperationsInput | $Enums.InterviewType;
    meetingLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InterviewUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationId?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    durationMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.EnumInterviewTypeFieldUpdateOperationsInput | $Enums.InterviewType;
    meetingLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InterviewListRelationFilter = {
    every?: Prisma.InterviewWhereInput;
    some?: Prisma.InterviewWhereInput;
    none?: Prisma.InterviewWhereInput;
};
export type InterviewOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InterviewCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    scheduledAt?: Prisma.SortOrder;
    durationMinutes?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    meetingLink?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InterviewAvgOrderByAggregateInput = {
    durationMinutes?: Prisma.SortOrder;
};
export type InterviewMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    scheduledAt?: Prisma.SortOrder;
    durationMinutes?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    meetingLink?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InterviewMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    scheduledAt?: Prisma.SortOrder;
    durationMinutes?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    meetingLink?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InterviewSumOrderByAggregateInput = {
    durationMinutes?: Prisma.SortOrder;
};
export type InterviewScalarRelationFilter = {
    is?: Prisma.InterviewWhereInput;
    isNot?: Prisma.InterviewWhereInput;
};
export type InterviewCreateNestedManyWithoutApplicationInput = {
    create?: Prisma.XOR<Prisma.InterviewCreateWithoutApplicationInput, Prisma.InterviewUncheckedCreateWithoutApplicationInput> | Prisma.InterviewCreateWithoutApplicationInput[] | Prisma.InterviewUncheckedCreateWithoutApplicationInput[];
    connectOrCreate?: Prisma.InterviewCreateOrConnectWithoutApplicationInput | Prisma.InterviewCreateOrConnectWithoutApplicationInput[];
    createMany?: Prisma.InterviewCreateManyApplicationInputEnvelope;
    connect?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
};
export type InterviewUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: Prisma.XOR<Prisma.InterviewCreateWithoutApplicationInput, Prisma.InterviewUncheckedCreateWithoutApplicationInput> | Prisma.InterviewCreateWithoutApplicationInput[] | Prisma.InterviewUncheckedCreateWithoutApplicationInput[];
    connectOrCreate?: Prisma.InterviewCreateOrConnectWithoutApplicationInput | Prisma.InterviewCreateOrConnectWithoutApplicationInput[];
    createMany?: Prisma.InterviewCreateManyApplicationInputEnvelope;
    connect?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
};
export type InterviewUpdateManyWithoutApplicationNestedInput = {
    create?: Prisma.XOR<Prisma.InterviewCreateWithoutApplicationInput, Prisma.InterviewUncheckedCreateWithoutApplicationInput> | Prisma.InterviewCreateWithoutApplicationInput[] | Prisma.InterviewUncheckedCreateWithoutApplicationInput[];
    connectOrCreate?: Prisma.InterviewCreateOrConnectWithoutApplicationInput | Prisma.InterviewCreateOrConnectWithoutApplicationInput[];
    upsert?: Prisma.InterviewUpsertWithWhereUniqueWithoutApplicationInput | Prisma.InterviewUpsertWithWhereUniqueWithoutApplicationInput[];
    createMany?: Prisma.InterviewCreateManyApplicationInputEnvelope;
    set?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
    disconnect?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
    delete?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
    connect?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
    update?: Prisma.InterviewUpdateWithWhereUniqueWithoutApplicationInput | Prisma.InterviewUpdateWithWhereUniqueWithoutApplicationInput[];
    updateMany?: Prisma.InterviewUpdateManyWithWhereWithoutApplicationInput | Prisma.InterviewUpdateManyWithWhereWithoutApplicationInput[];
    deleteMany?: Prisma.InterviewScalarWhereInput | Prisma.InterviewScalarWhereInput[];
};
export type InterviewUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: Prisma.XOR<Prisma.InterviewCreateWithoutApplicationInput, Prisma.InterviewUncheckedCreateWithoutApplicationInput> | Prisma.InterviewCreateWithoutApplicationInput[] | Prisma.InterviewUncheckedCreateWithoutApplicationInput[];
    connectOrCreate?: Prisma.InterviewCreateOrConnectWithoutApplicationInput | Prisma.InterviewCreateOrConnectWithoutApplicationInput[];
    upsert?: Prisma.InterviewUpsertWithWhereUniqueWithoutApplicationInput | Prisma.InterviewUpsertWithWhereUniqueWithoutApplicationInput[];
    createMany?: Prisma.InterviewCreateManyApplicationInputEnvelope;
    set?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
    disconnect?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
    delete?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
    connect?: Prisma.InterviewWhereUniqueInput | Prisma.InterviewWhereUniqueInput[];
    update?: Prisma.InterviewUpdateWithWhereUniqueWithoutApplicationInput | Prisma.InterviewUpdateWithWhereUniqueWithoutApplicationInput[];
    updateMany?: Prisma.InterviewUpdateManyWithWhereWithoutApplicationInput | Prisma.InterviewUpdateManyWithWhereWithoutApplicationInput[];
    deleteMany?: Prisma.InterviewScalarWhereInput | Prisma.InterviewScalarWhereInput[];
};
export type EnumInterviewTypeFieldUpdateOperationsInput = {
    set?: $Enums.InterviewType;
};
export type EnumInterviewStatusFieldUpdateOperationsInput = {
    set?: $Enums.InterviewStatus;
};
export type InterviewCreateNestedOneWithoutPanelistsInput = {
    create?: Prisma.XOR<Prisma.InterviewCreateWithoutPanelistsInput, Prisma.InterviewUncheckedCreateWithoutPanelistsInput>;
    connectOrCreate?: Prisma.InterviewCreateOrConnectWithoutPanelistsInput;
    connect?: Prisma.InterviewWhereUniqueInput;
};
export type InterviewUpdateOneRequiredWithoutPanelistsNestedInput = {
    create?: Prisma.XOR<Prisma.InterviewCreateWithoutPanelistsInput, Prisma.InterviewUncheckedCreateWithoutPanelistsInput>;
    connectOrCreate?: Prisma.InterviewCreateOrConnectWithoutPanelistsInput;
    upsert?: Prisma.InterviewUpsertWithoutPanelistsInput;
    connect?: Prisma.InterviewWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InterviewUpdateToOneWithWhereWithoutPanelistsInput, Prisma.InterviewUpdateWithoutPanelistsInput>, Prisma.InterviewUncheckedUpdateWithoutPanelistsInput>;
};
export type InterviewCreateNestedOneWithoutFeedbackInput = {
    create?: Prisma.XOR<Prisma.InterviewCreateWithoutFeedbackInput, Prisma.InterviewUncheckedCreateWithoutFeedbackInput>;
    connectOrCreate?: Prisma.InterviewCreateOrConnectWithoutFeedbackInput;
    connect?: Prisma.InterviewWhereUniqueInput;
};
export type InterviewUpdateOneRequiredWithoutFeedbackNestedInput = {
    create?: Prisma.XOR<Prisma.InterviewCreateWithoutFeedbackInput, Prisma.InterviewUncheckedCreateWithoutFeedbackInput>;
    connectOrCreate?: Prisma.InterviewCreateOrConnectWithoutFeedbackInput;
    upsert?: Prisma.InterviewUpsertWithoutFeedbackInput;
    connect?: Prisma.InterviewWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InterviewUpdateToOneWithWhereWithoutFeedbackInput, Prisma.InterviewUpdateWithoutFeedbackInput>, Prisma.InterviewUncheckedUpdateWithoutFeedbackInput>;
};
export type InterviewCreateWithoutApplicationInput = {
    id?: string;
    scheduledAt: Date | string;
    durationMinutes?: number;
    type?: $Enums.InterviewType;
    meetingLink?: string | null;
    location?: string | null;
    status?: $Enums.InterviewStatus;
    createdBy?: string | null;
    createdAt?: Date | string;
    panelists?: Prisma.InterviewPanelistCreateNestedManyWithoutInterviewInput;
    feedback?: Prisma.InterviewFeedbackCreateNestedManyWithoutInterviewInput;
};
export type InterviewUncheckedCreateWithoutApplicationInput = {
    id?: string;
    scheduledAt: Date | string;
    durationMinutes?: number;
    type?: $Enums.InterviewType;
    meetingLink?: string | null;
    location?: string | null;
    status?: $Enums.InterviewStatus;
    createdBy?: string | null;
    createdAt?: Date | string;
    panelists?: Prisma.InterviewPanelistUncheckedCreateNestedManyWithoutInterviewInput;
    feedback?: Prisma.InterviewFeedbackUncheckedCreateNestedManyWithoutInterviewInput;
};
export type InterviewCreateOrConnectWithoutApplicationInput = {
    where: Prisma.InterviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.InterviewCreateWithoutApplicationInput, Prisma.InterviewUncheckedCreateWithoutApplicationInput>;
};
export type InterviewCreateManyApplicationInputEnvelope = {
    data: Prisma.InterviewCreateManyApplicationInput | Prisma.InterviewCreateManyApplicationInput[];
    skipDuplicates?: boolean;
};
export type InterviewUpsertWithWhereUniqueWithoutApplicationInput = {
    where: Prisma.InterviewWhereUniqueInput;
    update: Prisma.XOR<Prisma.InterviewUpdateWithoutApplicationInput, Prisma.InterviewUncheckedUpdateWithoutApplicationInput>;
    create: Prisma.XOR<Prisma.InterviewCreateWithoutApplicationInput, Prisma.InterviewUncheckedCreateWithoutApplicationInput>;
};
export type InterviewUpdateWithWhereUniqueWithoutApplicationInput = {
    where: Prisma.InterviewWhereUniqueInput;
    data: Prisma.XOR<Prisma.InterviewUpdateWithoutApplicationInput, Prisma.InterviewUncheckedUpdateWithoutApplicationInput>;
};
export type InterviewUpdateManyWithWhereWithoutApplicationInput = {
    where: Prisma.InterviewScalarWhereInput;
    data: Prisma.XOR<Prisma.InterviewUpdateManyMutationInput, Prisma.InterviewUncheckedUpdateManyWithoutApplicationInput>;
};
export type InterviewScalarWhereInput = {
    AND?: Prisma.InterviewScalarWhereInput | Prisma.InterviewScalarWhereInput[];
    OR?: Prisma.InterviewScalarWhereInput[];
    NOT?: Prisma.InterviewScalarWhereInput | Prisma.InterviewScalarWhereInput[];
    id?: Prisma.UuidFilter<"Interview"> | string;
    applicationId?: Prisma.UuidFilter<"Interview"> | string;
    scheduledAt?: Prisma.DateTimeFilter<"Interview"> | Date | string;
    durationMinutes?: Prisma.IntFilter<"Interview"> | number;
    type?: Prisma.EnumInterviewTypeFilter<"Interview"> | $Enums.InterviewType;
    meetingLink?: Prisma.StringNullableFilter<"Interview"> | string | null;
    location?: Prisma.StringNullableFilter<"Interview"> | string | null;
    status?: Prisma.EnumInterviewStatusFilter<"Interview"> | $Enums.InterviewStatus;
    createdBy?: Prisma.UuidNullableFilter<"Interview"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Interview"> | Date | string;
};
export type InterviewCreateWithoutPanelistsInput = {
    id?: string;
    scheduledAt: Date | string;
    durationMinutes?: number;
    type?: $Enums.InterviewType;
    meetingLink?: string | null;
    location?: string | null;
    status?: $Enums.InterviewStatus;
    createdBy?: string | null;
    createdAt?: Date | string;
    application: Prisma.ApplicationCreateNestedOneWithoutInterviewsInput;
    feedback?: Prisma.InterviewFeedbackCreateNestedManyWithoutInterviewInput;
};
export type InterviewUncheckedCreateWithoutPanelistsInput = {
    id?: string;
    applicationId: string;
    scheduledAt: Date | string;
    durationMinutes?: number;
    type?: $Enums.InterviewType;
    meetingLink?: string | null;
    location?: string | null;
    status?: $Enums.InterviewStatus;
    createdBy?: string | null;
    createdAt?: Date | string;
    feedback?: Prisma.InterviewFeedbackUncheckedCreateNestedManyWithoutInterviewInput;
};
export type InterviewCreateOrConnectWithoutPanelistsInput = {
    where: Prisma.InterviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.InterviewCreateWithoutPanelistsInput, Prisma.InterviewUncheckedCreateWithoutPanelistsInput>;
};
export type InterviewUpsertWithoutPanelistsInput = {
    update: Prisma.XOR<Prisma.InterviewUpdateWithoutPanelistsInput, Prisma.InterviewUncheckedUpdateWithoutPanelistsInput>;
    create: Prisma.XOR<Prisma.InterviewCreateWithoutPanelistsInput, Prisma.InterviewUncheckedCreateWithoutPanelistsInput>;
    where?: Prisma.InterviewWhereInput;
};
export type InterviewUpdateToOneWithWhereWithoutPanelistsInput = {
    where?: Prisma.InterviewWhereInput;
    data: Prisma.XOR<Prisma.InterviewUpdateWithoutPanelistsInput, Prisma.InterviewUncheckedUpdateWithoutPanelistsInput>;
};
export type InterviewUpdateWithoutPanelistsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    durationMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.EnumInterviewTypeFieldUpdateOperationsInput | $Enums.InterviewType;
    meetingLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    application?: Prisma.ApplicationUpdateOneRequiredWithoutInterviewsNestedInput;
    feedback?: Prisma.InterviewFeedbackUpdateManyWithoutInterviewNestedInput;
};
export type InterviewUncheckedUpdateWithoutPanelistsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationId?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    durationMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.EnumInterviewTypeFieldUpdateOperationsInput | $Enums.InterviewType;
    meetingLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    feedback?: Prisma.InterviewFeedbackUncheckedUpdateManyWithoutInterviewNestedInput;
};
export type InterviewCreateWithoutFeedbackInput = {
    id?: string;
    scheduledAt: Date | string;
    durationMinutes?: number;
    type?: $Enums.InterviewType;
    meetingLink?: string | null;
    location?: string | null;
    status?: $Enums.InterviewStatus;
    createdBy?: string | null;
    createdAt?: Date | string;
    application: Prisma.ApplicationCreateNestedOneWithoutInterviewsInput;
    panelists?: Prisma.InterviewPanelistCreateNestedManyWithoutInterviewInput;
};
export type InterviewUncheckedCreateWithoutFeedbackInput = {
    id?: string;
    applicationId: string;
    scheduledAt: Date | string;
    durationMinutes?: number;
    type?: $Enums.InterviewType;
    meetingLink?: string | null;
    location?: string | null;
    status?: $Enums.InterviewStatus;
    createdBy?: string | null;
    createdAt?: Date | string;
    panelists?: Prisma.InterviewPanelistUncheckedCreateNestedManyWithoutInterviewInput;
};
export type InterviewCreateOrConnectWithoutFeedbackInput = {
    where: Prisma.InterviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.InterviewCreateWithoutFeedbackInput, Prisma.InterviewUncheckedCreateWithoutFeedbackInput>;
};
export type InterviewUpsertWithoutFeedbackInput = {
    update: Prisma.XOR<Prisma.InterviewUpdateWithoutFeedbackInput, Prisma.InterviewUncheckedUpdateWithoutFeedbackInput>;
    create: Prisma.XOR<Prisma.InterviewCreateWithoutFeedbackInput, Prisma.InterviewUncheckedCreateWithoutFeedbackInput>;
    where?: Prisma.InterviewWhereInput;
};
export type InterviewUpdateToOneWithWhereWithoutFeedbackInput = {
    where?: Prisma.InterviewWhereInput;
    data: Prisma.XOR<Prisma.InterviewUpdateWithoutFeedbackInput, Prisma.InterviewUncheckedUpdateWithoutFeedbackInput>;
};
export type InterviewUpdateWithoutFeedbackInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    durationMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.EnumInterviewTypeFieldUpdateOperationsInput | $Enums.InterviewType;
    meetingLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    application?: Prisma.ApplicationUpdateOneRequiredWithoutInterviewsNestedInput;
    panelists?: Prisma.InterviewPanelistUpdateManyWithoutInterviewNestedInput;
};
export type InterviewUncheckedUpdateWithoutFeedbackInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationId?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    durationMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.EnumInterviewTypeFieldUpdateOperationsInput | $Enums.InterviewType;
    meetingLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    panelists?: Prisma.InterviewPanelistUncheckedUpdateManyWithoutInterviewNestedInput;
};
export type InterviewCreateManyApplicationInput = {
    id?: string;
    scheduledAt: Date | string;
    durationMinutes?: number;
    type?: $Enums.InterviewType;
    meetingLink?: string | null;
    location?: string | null;
    status?: $Enums.InterviewStatus;
    createdBy?: string | null;
    createdAt?: Date | string;
};
export type InterviewUpdateWithoutApplicationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    durationMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.EnumInterviewTypeFieldUpdateOperationsInput | $Enums.InterviewType;
    meetingLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    panelists?: Prisma.InterviewPanelistUpdateManyWithoutInterviewNestedInput;
    feedback?: Prisma.InterviewFeedbackUpdateManyWithoutInterviewNestedInput;
};
export type InterviewUncheckedUpdateWithoutApplicationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    durationMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.EnumInterviewTypeFieldUpdateOperationsInput | $Enums.InterviewType;
    meetingLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    panelists?: Prisma.InterviewPanelistUncheckedUpdateManyWithoutInterviewNestedInput;
    feedback?: Prisma.InterviewFeedbackUncheckedUpdateManyWithoutInterviewNestedInput;
};
export type InterviewUncheckedUpdateManyWithoutApplicationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    durationMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.EnumInterviewTypeFieldUpdateOperationsInput | $Enums.InterviewType;
    meetingLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumInterviewStatusFieldUpdateOperationsInput | $Enums.InterviewStatus;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InterviewCountOutputType = {
    panelists: number;
    feedback: number;
};
export type InterviewCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    panelists?: boolean | InterviewCountOutputTypeCountPanelistsArgs;
    feedback?: boolean | InterviewCountOutputTypeCountFeedbackArgs;
};
export type InterviewCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewCountOutputTypeSelect<ExtArgs> | null;
};
export type InterviewCountOutputTypeCountPanelistsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterviewPanelistWhereInput;
};
export type InterviewCountOutputTypeCountFeedbackArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterviewFeedbackWhereInput;
};
export type InterviewSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    applicationId?: boolean;
    scheduledAt?: boolean;
    durationMinutes?: boolean;
    type?: boolean;
    meetingLink?: boolean;
    location?: boolean;
    status?: boolean;
    createdBy?: boolean;
    createdAt?: boolean;
    application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
    panelists?: boolean | Prisma.Interview$panelistsArgs<ExtArgs>;
    feedback?: boolean | Prisma.Interview$feedbackArgs<ExtArgs>;
    _count?: boolean | Prisma.InterviewCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["interview"]>;
export type InterviewSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    applicationId?: boolean;
    scheduledAt?: boolean;
    durationMinutes?: boolean;
    type?: boolean;
    meetingLink?: boolean;
    location?: boolean;
    status?: boolean;
    createdBy?: boolean;
    createdAt?: boolean;
    application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["interview"]>;
export type InterviewSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    applicationId?: boolean;
    scheduledAt?: boolean;
    durationMinutes?: boolean;
    type?: boolean;
    meetingLink?: boolean;
    location?: boolean;
    status?: boolean;
    createdBy?: boolean;
    createdAt?: boolean;
    application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["interview"]>;
export type InterviewSelectScalar = {
    id?: boolean;
    applicationId?: boolean;
    scheduledAt?: boolean;
    durationMinutes?: boolean;
    type?: boolean;
    meetingLink?: boolean;
    location?: boolean;
    status?: boolean;
    createdBy?: boolean;
    createdAt?: boolean;
};
export type InterviewOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "applicationId" | "scheduledAt" | "durationMinutes" | "type" | "meetingLink" | "location" | "status" | "createdBy" | "createdAt", ExtArgs["result"]["interview"]>;
export type InterviewInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
    panelists?: boolean | Prisma.Interview$panelistsArgs<ExtArgs>;
    feedback?: boolean | Prisma.Interview$feedbackArgs<ExtArgs>;
    _count?: boolean | Prisma.InterviewCountOutputTypeDefaultArgs<ExtArgs>;
};
export type InterviewIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
};
export type InterviewIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
};
export type $InterviewPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Interview";
    objects: {
        application: Prisma.$ApplicationPayload<ExtArgs>;
        panelists: Prisma.$InterviewPanelistPayload<ExtArgs>[];
        feedback: Prisma.$InterviewFeedbackPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        applicationId: string;
        scheduledAt: Date;
        durationMinutes: number;
        type: $Enums.InterviewType;
        meetingLink: string | null;
        location: string | null;
        status: $Enums.InterviewStatus;
        createdBy: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["interview"]>;
    composites: {};
};
export type InterviewGetPayload<S extends boolean | null | undefined | InterviewDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InterviewPayload, S>;
export type InterviewCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InterviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InterviewCountAggregateInputType | true;
};
export interface InterviewDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Interview'];
        meta: {
            name: 'Interview';
        };
    };
    findUnique<T extends InterviewFindUniqueArgs>(args: Prisma.SelectSubset<T, InterviewFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InterviewClient<runtime.Types.Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InterviewFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InterviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InterviewClient<runtime.Types.Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InterviewFindFirstArgs>(args?: Prisma.SelectSubset<T, InterviewFindFirstArgs<ExtArgs>>): Prisma.Prisma__InterviewClient<runtime.Types.Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InterviewFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InterviewFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InterviewClient<runtime.Types.Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InterviewFindManyArgs>(args?: Prisma.SelectSubset<T, InterviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InterviewCreateArgs>(args: Prisma.SelectSubset<T, InterviewCreateArgs<ExtArgs>>): Prisma.Prisma__InterviewClient<runtime.Types.Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InterviewCreateManyArgs>(args?: Prisma.SelectSubset<T, InterviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InterviewCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InterviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InterviewDeleteArgs>(args: Prisma.SelectSubset<T, InterviewDeleteArgs<ExtArgs>>): Prisma.Prisma__InterviewClient<runtime.Types.Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InterviewUpdateArgs>(args: Prisma.SelectSubset<T, InterviewUpdateArgs<ExtArgs>>): Prisma.Prisma__InterviewClient<runtime.Types.Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InterviewDeleteManyArgs>(args?: Prisma.SelectSubset<T, InterviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InterviewUpdateManyArgs>(args: Prisma.SelectSubset<T, InterviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InterviewUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InterviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InterviewUpsertArgs>(args: Prisma.SelectSubset<T, InterviewUpsertArgs<ExtArgs>>): Prisma.Prisma__InterviewClient<runtime.Types.Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InterviewCountArgs>(args?: Prisma.Subset<T, InterviewCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InterviewCountAggregateOutputType> : number>;
    aggregate<T extends InterviewAggregateArgs>(args: Prisma.Subset<T, InterviewAggregateArgs>): Prisma.PrismaPromise<GetInterviewAggregateType<T>>;
    groupBy<T extends InterviewGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InterviewGroupByArgs['orderBy'];
    } : {
        orderBy?: InterviewGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InterviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InterviewFieldRefs;
}
export interface Prisma__InterviewClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    application<T extends Prisma.ApplicationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ApplicationDefaultArgs<ExtArgs>>): Prisma.Prisma__ApplicationClient<runtime.Types.Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    panelists<T extends Prisma.Interview$panelistsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Interview$panelistsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewPanelistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    feedback<T extends Prisma.Interview$feedbackArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Interview$feedbackArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewFeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InterviewFieldRefs {
    readonly id: Prisma.FieldRef<"Interview", 'String'>;
    readonly applicationId: Prisma.FieldRef<"Interview", 'String'>;
    readonly scheduledAt: Prisma.FieldRef<"Interview", 'DateTime'>;
    readonly durationMinutes: Prisma.FieldRef<"Interview", 'Int'>;
    readonly type: Prisma.FieldRef<"Interview", 'InterviewType'>;
    readonly meetingLink: Prisma.FieldRef<"Interview", 'String'>;
    readonly location: Prisma.FieldRef<"Interview", 'String'>;
    readonly status: Prisma.FieldRef<"Interview", 'InterviewStatus'>;
    readonly createdBy: Prisma.FieldRef<"Interview", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Interview", 'DateTime'>;
}
export type InterviewFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewSelect<ExtArgs> | null;
    omit?: Prisma.InterviewOmit<ExtArgs> | null;
    include?: Prisma.InterviewInclude<ExtArgs> | null;
    where: Prisma.InterviewWhereUniqueInput;
};
export type InterviewFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewSelect<ExtArgs> | null;
    omit?: Prisma.InterviewOmit<ExtArgs> | null;
    include?: Prisma.InterviewInclude<ExtArgs> | null;
    where: Prisma.InterviewWhereUniqueInput;
};
export type InterviewFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewSelect<ExtArgs> | null;
    omit?: Prisma.InterviewOmit<ExtArgs> | null;
    include?: Prisma.InterviewInclude<ExtArgs> | null;
    where?: Prisma.InterviewWhereInput;
    orderBy?: Prisma.InterviewOrderByWithRelationInput | Prisma.InterviewOrderByWithRelationInput[];
    cursor?: Prisma.InterviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InterviewScalarFieldEnum | Prisma.InterviewScalarFieldEnum[];
};
export type InterviewFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewSelect<ExtArgs> | null;
    omit?: Prisma.InterviewOmit<ExtArgs> | null;
    include?: Prisma.InterviewInclude<ExtArgs> | null;
    where?: Prisma.InterviewWhereInput;
    orderBy?: Prisma.InterviewOrderByWithRelationInput | Prisma.InterviewOrderByWithRelationInput[];
    cursor?: Prisma.InterviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InterviewScalarFieldEnum | Prisma.InterviewScalarFieldEnum[];
};
export type InterviewFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewSelect<ExtArgs> | null;
    omit?: Prisma.InterviewOmit<ExtArgs> | null;
    include?: Prisma.InterviewInclude<ExtArgs> | null;
    where?: Prisma.InterviewWhereInput;
    orderBy?: Prisma.InterviewOrderByWithRelationInput | Prisma.InterviewOrderByWithRelationInput[];
    cursor?: Prisma.InterviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InterviewScalarFieldEnum | Prisma.InterviewScalarFieldEnum[];
};
export type InterviewCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewSelect<ExtArgs> | null;
    omit?: Prisma.InterviewOmit<ExtArgs> | null;
    include?: Prisma.InterviewInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InterviewCreateInput, Prisma.InterviewUncheckedCreateInput>;
};
export type InterviewCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InterviewCreateManyInput | Prisma.InterviewCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InterviewCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InterviewOmit<ExtArgs> | null;
    data: Prisma.InterviewCreateManyInput | Prisma.InterviewCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.InterviewIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type InterviewUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewSelect<ExtArgs> | null;
    omit?: Prisma.InterviewOmit<ExtArgs> | null;
    include?: Prisma.InterviewInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InterviewUpdateInput, Prisma.InterviewUncheckedUpdateInput>;
    where: Prisma.InterviewWhereUniqueInput;
};
export type InterviewUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InterviewUpdateManyMutationInput, Prisma.InterviewUncheckedUpdateManyInput>;
    where?: Prisma.InterviewWhereInput;
    limit?: number;
};
export type InterviewUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InterviewOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InterviewUpdateManyMutationInput, Prisma.InterviewUncheckedUpdateManyInput>;
    where?: Prisma.InterviewWhereInput;
    limit?: number;
    include?: Prisma.InterviewIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type InterviewUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewSelect<ExtArgs> | null;
    omit?: Prisma.InterviewOmit<ExtArgs> | null;
    include?: Prisma.InterviewInclude<ExtArgs> | null;
    where: Prisma.InterviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.InterviewCreateInput, Prisma.InterviewUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InterviewUpdateInput, Prisma.InterviewUncheckedUpdateInput>;
};
export type InterviewDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewSelect<ExtArgs> | null;
    omit?: Prisma.InterviewOmit<ExtArgs> | null;
    include?: Prisma.InterviewInclude<ExtArgs> | null;
    where: Prisma.InterviewWhereUniqueInput;
};
export type InterviewDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterviewWhereInput;
    limit?: number;
};
export type Interview$panelistsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewPanelistSelect<ExtArgs> | null;
    omit?: Prisma.InterviewPanelistOmit<ExtArgs> | null;
    include?: Prisma.InterviewPanelistInclude<ExtArgs> | null;
    where?: Prisma.InterviewPanelistWhereInput;
    orderBy?: Prisma.InterviewPanelistOrderByWithRelationInput | Prisma.InterviewPanelistOrderByWithRelationInput[];
    cursor?: Prisma.InterviewPanelistWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InterviewPanelistScalarFieldEnum | Prisma.InterviewPanelistScalarFieldEnum[];
};
export type Interview$feedbackArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewFeedbackSelect<ExtArgs> | null;
    omit?: Prisma.InterviewFeedbackOmit<ExtArgs> | null;
    include?: Prisma.InterviewFeedbackInclude<ExtArgs> | null;
    where?: Prisma.InterviewFeedbackWhereInput;
    orderBy?: Prisma.InterviewFeedbackOrderByWithRelationInput | Prisma.InterviewFeedbackOrderByWithRelationInput[];
    cursor?: Prisma.InterviewFeedbackWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InterviewFeedbackScalarFieldEnum | Prisma.InterviewFeedbackScalarFieldEnum[];
};
export type InterviewDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewSelect<ExtArgs> | null;
    omit?: Prisma.InterviewOmit<ExtArgs> | null;
    include?: Prisma.InterviewInclude<ExtArgs> | null;
};
