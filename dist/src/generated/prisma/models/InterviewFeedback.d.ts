import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InterviewFeedbackModel = runtime.Types.Result.DefaultSelection<Prisma.$InterviewFeedbackPayload>;
export type AggregateInterviewFeedback = {
    _count: InterviewFeedbackCountAggregateOutputType | null;
    _avg: InterviewFeedbackAvgAggregateOutputType | null;
    _sum: InterviewFeedbackSumAggregateOutputType | null;
    _min: InterviewFeedbackMinAggregateOutputType | null;
    _max: InterviewFeedbackMaxAggregateOutputType | null;
};
export type InterviewFeedbackAvgAggregateOutputType = {
    rating: number | null;
};
export type InterviewFeedbackSumAggregateOutputType = {
    rating: number | null;
};
export type InterviewFeedbackMinAggregateOutputType = {
    id: string | null;
    interviewId: string | null;
    interviewerId: string | null;
    rating: number | null;
    strengths: string | null;
    weaknesses: string | null;
    recommendation: $Enums.InterviewRecommendation | null;
    submittedAt: Date | null;
};
export type InterviewFeedbackMaxAggregateOutputType = {
    id: string | null;
    interviewId: string | null;
    interviewerId: string | null;
    rating: number | null;
    strengths: string | null;
    weaknesses: string | null;
    recommendation: $Enums.InterviewRecommendation | null;
    submittedAt: Date | null;
};
export type InterviewFeedbackCountAggregateOutputType = {
    id: number;
    interviewId: number;
    interviewerId: number;
    rating: number;
    strengths: number;
    weaknesses: number;
    recommendation: number;
    submittedAt: number;
    _all: number;
};
export type InterviewFeedbackAvgAggregateInputType = {
    rating?: true;
};
export type InterviewFeedbackSumAggregateInputType = {
    rating?: true;
};
export type InterviewFeedbackMinAggregateInputType = {
    id?: true;
    interviewId?: true;
    interviewerId?: true;
    rating?: true;
    strengths?: true;
    weaknesses?: true;
    recommendation?: true;
    submittedAt?: true;
};
export type InterviewFeedbackMaxAggregateInputType = {
    id?: true;
    interviewId?: true;
    interviewerId?: true;
    rating?: true;
    strengths?: true;
    weaknesses?: true;
    recommendation?: true;
    submittedAt?: true;
};
export type InterviewFeedbackCountAggregateInputType = {
    id?: true;
    interviewId?: true;
    interviewerId?: true;
    rating?: true;
    strengths?: true;
    weaknesses?: true;
    recommendation?: true;
    submittedAt?: true;
    _all?: true;
};
export type InterviewFeedbackAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterviewFeedbackWhereInput;
    orderBy?: Prisma.InterviewFeedbackOrderByWithRelationInput | Prisma.InterviewFeedbackOrderByWithRelationInput[];
    cursor?: Prisma.InterviewFeedbackWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InterviewFeedbackCountAggregateInputType;
    _avg?: InterviewFeedbackAvgAggregateInputType;
    _sum?: InterviewFeedbackSumAggregateInputType;
    _min?: InterviewFeedbackMinAggregateInputType;
    _max?: InterviewFeedbackMaxAggregateInputType;
};
export type GetInterviewFeedbackAggregateType<T extends InterviewFeedbackAggregateArgs> = {
    [P in keyof T & keyof AggregateInterviewFeedback]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInterviewFeedback[P]> : Prisma.GetScalarType<T[P], AggregateInterviewFeedback[P]>;
};
export type InterviewFeedbackGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterviewFeedbackWhereInput;
    orderBy?: Prisma.InterviewFeedbackOrderByWithAggregationInput | Prisma.InterviewFeedbackOrderByWithAggregationInput[];
    by: Prisma.InterviewFeedbackScalarFieldEnum[] | Prisma.InterviewFeedbackScalarFieldEnum;
    having?: Prisma.InterviewFeedbackScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InterviewFeedbackCountAggregateInputType | true;
    _avg?: InterviewFeedbackAvgAggregateInputType;
    _sum?: InterviewFeedbackSumAggregateInputType;
    _min?: InterviewFeedbackMinAggregateInputType;
    _max?: InterviewFeedbackMaxAggregateInputType;
};
export type InterviewFeedbackGroupByOutputType = {
    id: string;
    interviewId: string;
    interviewerId: string | null;
    rating: number | null;
    strengths: string | null;
    weaknesses: string | null;
    recommendation: $Enums.InterviewRecommendation | null;
    submittedAt: Date;
    _count: InterviewFeedbackCountAggregateOutputType | null;
    _avg: InterviewFeedbackAvgAggregateOutputType | null;
    _sum: InterviewFeedbackSumAggregateOutputType | null;
    _min: InterviewFeedbackMinAggregateOutputType | null;
    _max: InterviewFeedbackMaxAggregateOutputType | null;
};
export type GetInterviewFeedbackGroupByPayload<T extends InterviewFeedbackGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InterviewFeedbackGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InterviewFeedbackGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InterviewFeedbackGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InterviewFeedbackGroupByOutputType[P]>;
}>>;
export type InterviewFeedbackWhereInput = {
    AND?: Prisma.InterviewFeedbackWhereInput | Prisma.InterviewFeedbackWhereInput[];
    OR?: Prisma.InterviewFeedbackWhereInput[];
    NOT?: Prisma.InterviewFeedbackWhereInput | Prisma.InterviewFeedbackWhereInput[];
    id?: Prisma.UuidFilter<"InterviewFeedback"> | string;
    interviewId?: Prisma.UuidFilter<"InterviewFeedback"> | string;
    interviewerId?: Prisma.UuidNullableFilter<"InterviewFeedback"> | string | null;
    rating?: Prisma.IntNullableFilter<"InterviewFeedback"> | number | null;
    strengths?: Prisma.StringNullableFilter<"InterviewFeedback"> | string | null;
    weaknesses?: Prisma.StringNullableFilter<"InterviewFeedback"> | string | null;
    recommendation?: Prisma.EnumInterviewRecommendationNullableFilter<"InterviewFeedback"> | $Enums.InterviewRecommendation | null;
    submittedAt?: Prisma.DateTimeFilter<"InterviewFeedback"> | Date | string;
    interview?: Prisma.XOR<Prisma.InterviewScalarRelationFilter, Prisma.InterviewWhereInput>;
    interviewer?: Prisma.XOR<Prisma.EmployeeNullableScalarRelationFilter, Prisma.EmployeeWhereInput> | null;
};
export type InterviewFeedbackOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    interviewId?: Prisma.SortOrder;
    interviewerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    rating?: Prisma.SortOrderInput | Prisma.SortOrder;
    strengths?: Prisma.SortOrderInput | Prisma.SortOrder;
    weaknesses?: Prisma.SortOrderInput | Prisma.SortOrder;
    recommendation?: Prisma.SortOrderInput | Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
    interview?: Prisma.InterviewOrderByWithRelationInput;
    interviewer?: Prisma.EmployeeOrderByWithRelationInput;
};
export type InterviewFeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.InterviewFeedbackWhereInput | Prisma.InterviewFeedbackWhereInput[];
    OR?: Prisma.InterviewFeedbackWhereInput[];
    NOT?: Prisma.InterviewFeedbackWhereInput | Prisma.InterviewFeedbackWhereInput[];
    interviewId?: Prisma.UuidFilter<"InterviewFeedback"> | string;
    interviewerId?: Prisma.UuidNullableFilter<"InterviewFeedback"> | string | null;
    rating?: Prisma.IntNullableFilter<"InterviewFeedback"> | number | null;
    strengths?: Prisma.StringNullableFilter<"InterviewFeedback"> | string | null;
    weaknesses?: Prisma.StringNullableFilter<"InterviewFeedback"> | string | null;
    recommendation?: Prisma.EnumInterviewRecommendationNullableFilter<"InterviewFeedback"> | $Enums.InterviewRecommendation | null;
    submittedAt?: Prisma.DateTimeFilter<"InterviewFeedback"> | Date | string;
    interview?: Prisma.XOR<Prisma.InterviewScalarRelationFilter, Prisma.InterviewWhereInput>;
    interviewer?: Prisma.XOR<Prisma.EmployeeNullableScalarRelationFilter, Prisma.EmployeeWhereInput> | null;
}, "id">;
export type InterviewFeedbackOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    interviewId?: Prisma.SortOrder;
    interviewerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    rating?: Prisma.SortOrderInput | Prisma.SortOrder;
    strengths?: Prisma.SortOrderInput | Prisma.SortOrder;
    weaknesses?: Prisma.SortOrderInput | Prisma.SortOrder;
    recommendation?: Prisma.SortOrderInput | Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
    _count?: Prisma.InterviewFeedbackCountOrderByAggregateInput;
    _avg?: Prisma.InterviewFeedbackAvgOrderByAggregateInput;
    _max?: Prisma.InterviewFeedbackMaxOrderByAggregateInput;
    _min?: Prisma.InterviewFeedbackMinOrderByAggregateInput;
    _sum?: Prisma.InterviewFeedbackSumOrderByAggregateInput;
};
export type InterviewFeedbackScalarWhereWithAggregatesInput = {
    AND?: Prisma.InterviewFeedbackScalarWhereWithAggregatesInput | Prisma.InterviewFeedbackScalarWhereWithAggregatesInput[];
    OR?: Prisma.InterviewFeedbackScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InterviewFeedbackScalarWhereWithAggregatesInput | Prisma.InterviewFeedbackScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"InterviewFeedback"> | string;
    interviewId?: Prisma.UuidWithAggregatesFilter<"InterviewFeedback"> | string;
    interviewerId?: Prisma.UuidNullableWithAggregatesFilter<"InterviewFeedback"> | string | null;
    rating?: Prisma.IntNullableWithAggregatesFilter<"InterviewFeedback"> | number | null;
    strengths?: Prisma.StringNullableWithAggregatesFilter<"InterviewFeedback"> | string | null;
    weaknesses?: Prisma.StringNullableWithAggregatesFilter<"InterviewFeedback"> | string | null;
    recommendation?: Prisma.EnumInterviewRecommendationNullableWithAggregatesFilter<"InterviewFeedback"> | $Enums.InterviewRecommendation | null;
    submittedAt?: Prisma.DateTimeWithAggregatesFilter<"InterviewFeedback"> | Date | string;
};
export type InterviewFeedbackCreateInput = {
    id?: string;
    rating?: number | null;
    strengths?: string | null;
    weaknesses?: string | null;
    recommendation?: $Enums.InterviewRecommendation | null;
    submittedAt?: Date | string;
    interview: Prisma.InterviewCreateNestedOneWithoutFeedbackInput;
    interviewer?: Prisma.EmployeeCreateNestedOneWithoutInterviewFeedbacksInput;
};
export type InterviewFeedbackUncheckedCreateInput = {
    id?: string;
    interviewId: string;
    interviewerId?: string | null;
    rating?: number | null;
    strengths?: string | null;
    weaknesses?: string | null;
    recommendation?: $Enums.InterviewRecommendation | null;
    submittedAt?: Date | string;
};
export type InterviewFeedbackUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    strengths?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weaknesses?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recommendation?: Prisma.NullableEnumInterviewRecommendationFieldUpdateOperationsInput | $Enums.InterviewRecommendation | null;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    interview?: Prisma.InterviewUpdateOneRequiredWithoutFeedbackNestedInput;
    interviewer?: Prisma.EmployeeUpdateOneWithoutInterviewFeedbacksNestedInput;
};
export type InterviewFeedbackUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    interviewId?: Prisma.StringFieldUpdateOperationsInput | string;
    interviewerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    strengths?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weaknesses?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recommendation?: Prisma.NullableEnumInterviewRecommendationFieldUpdateOperationsInput | $Enums.InterviewRecommendation | null;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InterviewFeedbackCreateManyInput = {
    id?: string;
    interviewId: string;
    interviewerId?: string | null;
    rating?: number | null;
    strengths?: string | null;
    weaknesses?: string | null;
    recommendation?: $Enums.InterviewRecommendation | null;
    submittedAt?: Date | string;
};
export type InterviewFeedbackUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    strengths?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weaknesses?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recommendation?: Prisma.NullableEnumInterviewRecommendationFieldUpdateOperationsInput | $Enums.InterviewRecommendation | null;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InterviewFeedbackUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    interviewId?: Prisma.StringFieldUpdateOperationsInput | string;
    interviewerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    strengths?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weaknesses?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recommendation?: Prisma.NullableEnumInterviewRecommendationFieldUpdateOperationsInput | $Enums.InterviewRecommendation | null;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InterviewFeedbackListRelationFilter = {
    every?: Prisma.InterviewFeedbackWhereInput;
    some?: Prisma.InterviewFeedbackWhereInput;
    none?: Prisma.InterviewFeedbackWhereInput;
};
export type InterviewFeedbackOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InterviewFeedbackCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    interviewId?: Prisma.SortOrder;
    interviewerId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    strengths?: Prisma.SortOrder;
    weaknesses?: Prisma.SortOrder;
    recommendation?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
};
export type InterviewFeedbackAvgOrderByAggregateInput = {
    rating?: Prisma.SortOrder;
};
export type InterviewFeedbackMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    interviewId?: Prisma.SortOrder;
    interviewerId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    strengths?: Prisma.SortOrder;
    weaknesses?: Prisma.SortOrder;
    recommendation?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
};
export type InterviewFeedbackMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    interviewId?: Prisma.SortOrder;
    interviewerId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    strengths?: Prisma.SortOrder;
    weaknesses?: Prisma.SortOrder;
    recommendation?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
};
export type InterviewFeedbackSumOrderByAggregateInput = {
    rating?: Prisma.SortOrder;
};
export type InterviewFeedbackCreateNestedManyWithoutInterviewerInput = {
    create?: Prisma.XOR<Prisma.InterviewFeedbackCreateWithoutInterviewerInput, Prisma.InterviewFeedbackUncheckedCreateWithoutInterviewerInput> | Prisma.InterviewFeedbackCreateWithoutInterviewerInput[] | Prisma.InterviewFeedbackUncheckedCreateWithoutInterviewerInput[];
    connectOrCreate?: Prisma.InterviewFeedbackCreateOrConnectWithoutInterviewerInput | Prisma.InterviewFeedbackCreateOrConnectWithoutInterviewerInput[];
    createMany?: Prisma.InterviewFeedbackCreateManyInterviewerInputEnvelope;
    connect?: Prisma.InterviewFeedbackWhereUniqueInput | Prisma.InterviewFeedbackWhereUniqueInput[];
};
export type InterviewFeedbackUncheckedCreateNestedManyWithoutInterviewerInput = {
    create?: Prisma.XOR<Prisma.InterviewFeedbackCreateWithoutInterviewerInput, Prisma.InterviewFeedbackUncheckedCreateWithoutInterviewerInput> | Prisma.InterviewFeedbackCreateWithoutInterviewerInput[] | Prisma.InterviewFeedbackUncheckedCreateWithoutInterviewerInput[];
    connectOrCreate?: Prisma.InterviewFeedbackCreateOrConnectWithoutInterviewerInput | Prisma.InterviewFeedbackCreateOrConnectWithoutInterviewerInput[];
    createMany?: Prisma.InterviewFeedbackCreateManyInterviewerInputEnvelope;
    connect?: Prisma.InterviewFeedbackWhereUniqueInput | Prisma.InterviewFeedbackWhereUniqueInput[];
};
export type InterviewFeedbackUpdateManyWithoutInterviewerNestedInput = {
    create?: Prisma.XOR<Prisma.InterviewFeedbackCreateWithoutInterviewerInput, Prisma.InterviewFeedbackUncheckedCreateWithoutInterviewerInput> | Prisma.InterviewFeedbackCreateWithoutInterviewerInput[] | Prisma.InterviewFeedbackUncheckedCreateWithoutInterviewerInput[];
    connectOrCreate?: Prisma.InterviewFeedbackCreateOrConnectWithoutInterviewerInput | Prisma.InterviewFeedbackCreateOrConnectWithoutInterviewerInput[];
    upsert?: Prisma.InterviewFeedbackUpsertWithWhereUniqueWithoutInterviewerInput | Prisma.InterviewFeedbackUpsertWithWhereUniqueWithoutInterviewerInput[];
    createMany?: Prisma.InterviewFeedbackCreateManyInterviewerInputEnvelope;
    set?: Prisma.InterviewFeedbackWhereUniqueInput | Prisma.InterviewFeedbackWhereUniqueInput[];
    disconnect?: Prisma.InterviewFeedbackWhereUniqueInput | Prisma.InterviewFeedbackWhereUniqueInput[];
    delete?: Prisma.InterviewFeedbackWhereUniqueInput | Prisma.InterviewFeedbackWhereUniqueInput[];
    connect?: Prisma.InterviewFeedbackWhereUniqueInput | Prisma.InterviewFeedbackWhereUniqueInput[];
    update?: Prisma.InterviewFeedbackUpdateWithWhereUniqueWithoutInterviewerInput | Prisma.InterviewFeedbackUpdateWithWhereUniqueWithoutInterviewerInput[];
    updateMany?: Prisma.InterviewFeedbackUpdateManyWithWhereWithoutInterviewerInput | Prisma.InterviewFeedbackUpdateManyWithWhereWithoutInterviewerInput[];
    deleteMany?: Prisma.InterviewFeedbackScalarWhereInput | Prisma.InterviewFeedbackScalarWhereInput[];
};
export type InterviewFeedbackUncheckedUpdateManyWithoutInterviewerNestedInput = {
    create?: Prisma.XOR<Prisma.InterviewFeedbackCreateWithoutInterviewerInput, Prisma.InterviewFeedbackUncheckedCreateWithoutInterviewerInput> | Prisma.InterviewFeedbackCreateWithoutInterviewerInput[] | Prisma.InterviewFeedbackUncheckedCreateWithoutInterviewerInput[];
    connectOrCreate?: Prisma.InterviewFeedbackCreateOrConnectWithoutInterviewerInput | Prisma.InterviewFeedbackCreateOrConnectWithoutInterviewerInput[];
    upsert?: Prisma.InterviewFeedbackUpsertWithWhereUniqueWithoutInterviewerInput | Prisma.InterviewFeedbackUpsertWithWhereUniqueWithoutInterviewerInput[];
    createMany?: Prisma.InterviewFeedbackCreateManyInterviewerInputEnvelope;
    set?: Prisma.InterviewFeedbackWhereUniqueInput | Prisma.InterviewFeedbackWhereUniqueInput[];
    disconnect?: Prisma.InterviewFeedbackWhereUniqueInput | Prisma.InterviewFeedbackWhereUniqueInput[];
    delete?: Prisma.InterviewFeedbackWhereUniqueInput | Prisma.InterviewFeedbackWhereUniqueInput[];
    connect?: Prisma.InterviewFeedbackWhereUniqueInput | Prisma.InterviewFeedbackWhereUniqueInput[];
    update?: Prisma.InterviewFeedbackUpdateWithWhereUniqueWithoutInterviewerInput | Prisma.InterviewFeedbackUpdateWithWhereUniqueWithoutInterviewerInput[];
    updateMany?: Prisma.InterviewFeedbackUpdateManyWithWhereWithoutInterviewerInput | Prisma.InterviewFeedbackUpdateManyWithWhereWithoutInterviewerInput[];
    deleteMany?: Prisma.InterviewFeedbackScalarWhereInput | Prisma.InterviewFeedbackScalarWhereInput[];
};
export type InterviewFeedbackCreateNestedManyWithoutInterviewInput = {
    create?: Prisma.XOR<Prisma.InterviewFeedbackCreateWithoutInterviewInput, Prisma.InterviewFeedbackUncheckedCreateWithoutInterviewInput> | Prisma.InterviewFeedbackCreateWithoutInterviewInput[] | Prisma.InterviewFeedbackUncheckedCreateWithoutInterviewInput[];
    connectOrCreate?: Prisma.InterviewFeedbackCreateOrConnectWithoutInterviewInput | Prisma.InterviewFeedbackCreateOrConnectWithoutInterviewInput[];
    createMany?: Prisma.InterviewFeedbackCreateManyInterviewInputEnvelope;
    connect?: Prisma.InterviewFeedbackWhereUniqueInput | Prisma.InterviewFeedbackWhereUniqueInput[];
};
export type InterviewFeedbackUncheckedCreateNestedManyWithoutInterviewInput = {
    create?: Prisma.XOR<Prisma.InterviewFeedbackCreateWithoutInterviewInput, Prisma.InterviewFeedbackUncheckedCreateWithoutInterviewInput> | Prisma.InterviewFeedbackCreateWithoutInterviewInput[] | Prisma.InterviewFeedbackUncheckedCreateWithoutInterviewInput[];
    connectOrCreate?: Prisma.InterviewFeedbackCreateOrConnectWithoutInterviewInput | Prisma.InterviewFeedbackCreateOrConnectWithoutInterviewInput[];
    createMany?: Prisma.InterviewFeedbackCreateManyInterviewInputEnvelope;
    connect?: Prisma.InterviewFeedbackWhereUniqueInput | Prisma.InterviewFeedbackWhereUniqueInput[];
};
export type InterviewFeedbackUpdateManyWithoutInterviewNestedInput = {
    create?: Prisma.XOR<Prisma.InterviewFeedbackCreateWithoutInterviewInput, Prisma.InterviewFeedbackUncheckedCreateWithoutInterviewInput> | Prisma.InterviewFeedbackCreateWithoutInterviewInput[] | Prisma.InterviewFeedbackUncheckedCreateWithoutInterviewInput[];
    connectOrCreate?: Prisma.InterviewFeedbackCreateOrConnectWithoutInterviewInput | Prisma.InterviewFeedbackCreateOrConnectWithoutInterviewInput[];
    upsert?: Prisma.InterviewFeedbackUpsertWithWhereUniqueWithoutInterviewInput | Prisma.InterviewFeedbackUpsertWithWhereUniqueWithoutInterviewInput[];
    createMany?: Prisma.InterviewFeedbackCreateManyInterviewInputEnvelope;
    set?: Prisma.InterviewFeedbackWhereUniqueInput | Prisma.InterviewFeedbackWhereUniqueInput[];
    disconnect?: Prisma.InterviewFeedbackWhereUniqueInput | Prisma.InterviewFeedbackWhereUniqueInput[];
    delete?: Prisma.InterviewFeedbackWhereUniqueInput | Prisma.InterviewFeedbackWhereUniqueInput[];
    connect?: Prisma.InterviewFeedbackWhereUniqueInput | Prisma.InterviewFeedbackWhereUniqueInput[];
    update?: Prisma.InterviewFeedbackUpdateWithWhereUniqueWithoutInterviewInput | Prisma.InterviewFeedbackUpdateWithWhereUniqueWithoutInterviewInput[];
    updateMany?: Prisma.InterviewFeedbackUpdateManyWithWhereWithoutInterviewInput | Prisma.InterviewFeedbackUpdateManyWithWhereWithoutInterviewInput[];
    deleteMany?: Prisma.InterviewFeedbackScalarWhereInput | Prisma.InterviewFeedbackScalarWhereInput[];
};
export type InterviewFeedbackUncheckedUpdateManyWithoutInterviewNestedInput = {
    create?: Prisma.XOR<Prisma.InterviewFeedbackCreateWithoutInterviewInput, Prisma.InterviewFeedbackUncheckedCreateWithoutInterviewInput> | Prisma.InterviewFeedbackCreateWithoutInterviewInput[] | Prisma.InterviewFeedbackUncheckedCreateWithoutInterviewInput[];
    connectOrCreate?: Prisma.InterviewFeedbackCreateOrConnectWithoutInterviewInput | Prisma.InterviewFeedbackCreateOrConnectWithoutInterviewInput[];
    upsert?: Prisma.InterviewFeedbackUpsertWithWhereUniqueWithoutInterviewInput | Prisma.InterviewFeedbackUpsertWithWhereUniqueWithoutInterviewInput[];
    createMany?: Prisma.InterviewFeedbackCreateManyInterviewInputEnvelope;
    set?: Prisma.InterviewFeedbackWhereUniqueInput | Prisma.InterviewFeedbackWhereUniqueInput[];
    disconnect?: Prisma.InterviewFeedbackWhereUniqueInput | Prisma.InterviewFeedbackWhereUniqueInput[];
    delete?: Prisma.InterviewFeedbackWhereUniqueInput | Prisma.InterviewFeedbackWhereUniqueInput[];
    connect?: Prisma.InterviewFeedbackWhereUniqueInput | Prisma.InterviewFeedbackWhereUniqueInput[];
    update?: Prisma.InterviewFeedbackUpdateWithWhereUniqueWithoutInterviewInput | Prisma.InterviewFeedbackUpdateWithWhereUniqueWithoutInterviewInput[];
    updateMany?: Prisma.InterviewFeedbackUpdateManyWithWhereWithoutInterviewInput | Prisma.InterviewFeedbackUpdateManyWithWhereWithoutInterviewInput[];
    deleteMany?: Prisma.InterviewFeedbackScalarWhereInput | Prisma.InterviewFeedbackScalarWhereInput[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableEnumInterviewRecommendationFieldUpdateOperationsInput = {
    set?: $Enums.InterviewRecommendation | null;
};
export type InterviewFeedbackCreateWithoutInterviewerInput = {
    id?: string;
    rating?: number | null;
    strengths?: string | null;
    weaknesses?: string | null;
    recommendation?: $Enums.InterviewRecommendation | null;
    submittedAt?: Date | string;
    interview: Prisma.InterviewCreateNestedOneWithoutFeedbackInput;
};
export type InterviewFeedbackUncheckedCreateWithoutInterviewerInput = {
    id?: string;
    interviewId: string;
    rating?: number | null;
    strengths?: string | null;
    weaknesses?: string | null;
    recommendation?: $Enums.InterviewRecommendation | null;
    submittedAt?: Date | string;
};
export type InterviewFeedbackCreateOrConnectWithoutInterviewerInput = {
    where: Prisma.InterviewFeedbackWhereUniqueInput;
    create: Prisma.XOR<Prisma.InterviewFeedbackCreateWithoutInterviewerInput, Prisma.InterviewFeedbackUncheckedCreateWithoutInterviewerInput>;
};
export type InterviewFeedbackCreateManyInterviewerInputEnvelope = {
    data: Prisma.InterviewFeedbackCreateManyInterviewerInput | Prisma.InterviewFeedbackCreateManyInterviewerInput[];
    skipDuplicates?: boolean;
};
export type InterviewFeedbackUpsertWithWhereUniqueWithoutInterviewerInput = {
    where: Prisma.InterviewFeedbackWhereUniqueInput;
    update: Prisma.XOR<Prisma.InterviewFeedbackUpdateWithoutInterviewerInput, Prisma.InterviewFeedbackUncheckedUpdateWithoutInterviewerInput>;
    create: Prisma.XOR<Prisma.InterviewFeedbackCreateWithoutInterviewerInput, Prisma.InterviewFeedbackUncheckedCreateWithoutInterviewerInput>;
};
export type InterviewFeedbackUpdateWithWhereUniqueWithoutInterviewerInput = {
    where: Prisma.InterviewFeedbackWhereUniqueInput;
    data: Prisma.XOR<Prisma.InterviewFeedbackUpdateWithoutInterviewerInput, Prisma.InterviewFeedbackUncheckedUpdateWithoutInterviewerInput>;
};
export type InterviewFeedbackUpdateManyWithWhereWithoutInterviewerInput = {
    where: Prisma.InterviewFeedbackScalarWhereInput;
    data: Prisma.XOR<Prisma.InterviewFeedbackUpdateManyMutationInput, Prisma.InterviewFeedbackUncheckedUpdateManyWithoutInterviewerInput>;
};
export type InterviewFeedbackScalarWhereInput = {
    AND?: Prisma.InterviewFeedbackScalarWhereInput | Prisma.InterviewFeedbackScalarWhereInput[];
    OR?: Prisma.InterviewFeedbackScalarWhereInput[];
    NOT?: Prisma.InterviewFeedbackScalarWhereInput | Prisma.InterviewFeedbackScalarWhereInput[];
    id?: Prisma.UuidFilter<"InterviewFeedback"> | string;
    interviewId?: Prisma.UuidFilter<"InterviewFeedback"> | string;
    interviewerId?: Prisma.UuidNullableFilter<"InterviewFeedback"> | string | null;
    rating?: Prisma.IntNullableFilter<"InterviewFeedback"> | number | null;
    strengths?: Prisma.StringNullableFilter<"InterviewFeedback"> | string | null;
    weaknesses?: Prisma.StringNullableFilter<"InterviewFeedback"> | string | null;
    recommendation?: Prisma.EnumInterviewRecommendationNullableFilter<"InterviewFeedback"> | $Enums.InterviewRecommendation | null;
    submittedAt?: Prisma.DateTimeFilter<"InterviewFeedback"> | Date | string;
};
export type InterviewFeedbackCreateWithoutInterviewInput = {
    id?: string;
    rating?: number | null;
    strengths?: string | null;
    weaknesses?: string | null;
    recommendation?: $Enums.InterviewRecommendation | null;
    submittedAt?: Date | string;
    interviewer?: Prisma.EmployeeCreateNestedOneWithoutInterviewFeedbacksInput;
};
export type InterviewFeedbackUncheckedCreateWithoutInterviewInput = {
    id?: string;
    interviewerId?: string | null;
    rating?: number | null;
    strengths?: string | null;
    weaknesses?: string | null;
    recommendation?: $Enums.InterviewRecommendation | null;
    submittedAt?: Date | string;
};
export type InterviewFeedbackCreateOrConnectWithoutInterviewInput = {
    where: Prisma.InterviewFeedbackWhereUniqueInput;
    create: Prisma.XOR<Prisma.InterviewFeedbackCreateWithoutInterviewInput, Prisma.InterviewFeedbackUncheckedCreateWithoutInterviewInput>;
};
export type InterviewFeedbackCreateManyInterviewInputEnvelope = {
    data: Prisma.InterviewFeedbackCreateManyInterviewInput | Prisma.InterviewFeedbackCreateManyInterviewInput[];
    skipDuplicates?: boolean;
};
export type InterviewFeedbackUpsertWithWhereUniqueWithoutInterviewInput = {
    where: Prisma.InterviewFeedbackWhereUniqueInput;
    update: Prisma.XOR<Prisma.InterviewFeedbackUpdateWithoutInterviewInput, Prisma.InterviewFeedbackUncheckedUpdateWithoutInterviewInput>;
    create: Prisma.XOR<Prisma.InterviewFeedbackCreateWithoutInterviewInput, Prisma.InterviewFeedbackUncheckedCreateWithoutInterviewInput>;
};
export type InterviewFeedbackUpdateWithWhereUniqueWithoutInterviewInput = {
    where: Prisma.InterviewFeedbackWhereUniqueInput;
    data: Prisma.XOR<Prisma.InterviewFeedbackUpdateWithoutInterviewInput, Prisma.InterviewFeedbackUncheckedUpdateWithoutInterviewInput>;
};
export type InterviewFeedbackUpdateManyWithWhereWithoutInterviewInput = {
    where: Prisma.InterviewFeedbackScalarWhereInput;
    data: Prisma.XOR<Prisma.InterviewFeedbackUpdateManyMutationInput, Prisma.InterviewFeedbackUncheckedUpdateManyWithoutInterviewInput>;
};
export type InterviewFeedbackCreateManyInterviewerInput = {
    id?: string;
    interviewId: string;
    rating?: number | null;
    strengths?: string | null;
    weaknesses?: string | null;
    recommendation?: $Enums.InterviewRecommendation | null;
    submittedAt?: Date | string;
};
export type InterviewFeedbackUpdateWithoutInterviewerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    strengths?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weaknesses?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recommendation?: Prisma.NullableEnumInterviewRecommendationFieldUpdateOperationsInput | $Enums.InterviewRecommendation | null;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    interview?: Prisma.InterviewUpdateOneRequiredWithoutFeedbackNestedInput;
};
export type InterviewFeedbackUncheckedUpdateWithoutInterviewerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    interviewId?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    strengths?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weaknesses?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recommendation?: Prisma.NullableEnumInterviewRecommendationFieldUpdateOperationsInput | $Enums.InterviewRecommendation | null;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InterviewFeedbackUncheckedUpdateManyWithoutInterviewerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    interviewId?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    strengths?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weaknesses?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recommendation?: Prisma.NullableEnumInterviewRecommendationFieldUpdateOperationsInput | $Enums.InterviewRecommendation | null;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InterviewFeedbackCreateManyInterviewInput = {
    id?: string;
    interviewerId?: string | null;
    rating?: number | null;
    strengths?: string | null;
    weaknesses?: string | null;
    recommendation?: $Enums.InterviewRecommendation | null;
    submittedAt?: Date | string;
};
export type InterviewFeedbackUpdateWithoutInterviewInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    strengths?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weaknesses?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recommendation?: Prisma.NullableEnumInterviewRecommendationFieldUpdateOperationsInput | $Enums.InterviewRecommendation | null;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    interviewer?: Prisma.EmployeeUpdateOneWithoutInterviewFeedbacksNestedInput;
};
export type InterviewFeedbackUncheckedUpdateWithoutInterviewInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    interviewerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    strengths?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weaknesses?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recommendation?: Prisma.NullableEnumInterviewRecommendationFieldUpdateOperationsInput | $Enums.InterviewRecommendation | null;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InterviewFeedbackUncheckedUpdateManyWithoutInterviewInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    interviewerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    strengths?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weaknesses?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recommendation?: Prisma.NullableEnumInterviewRecommendationFieldUpdateOperationsInput | $Enums.InterviewRecommendation | null;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InterviewFeedbackSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    interviewId?: boolean;
    interviewerId?: boolean;
    rating?: boolean;
    strengths?: boolean;
    weaknesses?: boolean;
    recommendation?: boolean;
    submittedAt?: boolean;
    interview?: boolean | Prisma.InterviewDefaultArgs<ExtArgs>;
    interviewer?: boolean | Prisma.InterviewFeedback$interviewerArgs<ExtArgs>;
}, ExtArgs["result"]["interviewFeedback"]>;
export type InterviewFeedbackSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    interviewId?: boolean;
    interviewerId?: boolean;
    rating?: boolean;
    strengths?: boolean;
    weaknesses?: boolean;
    recommendation?: boolean;
    submittedAt?: boolean;
    interview?: boolean | Prisma.InterviewDefaultArgs<ExtArgs>;
    interviewer?: boolean | Prisma.InterviewFeedback$interviewerArgs<ExtArgs>;
}, ExtArgs["result"]["interviewFeedback"]>;
export type InterviewFeedbackSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    interviewId?: boolean;
    interviewerId?: boolean;
    rating?: boolean;
    strengths?: boolean;
    weaknesses?: boolean;
    recommendation?: boolean;
    submittedAt?: boolean;
    interview?: boolean | Prisma.InterviewDefaultArgs<ExtArgs>;
    interviewer?: boolean | Prisma.InterviewFeedback$interviewerArgs<ExtArgs>;
}, ExtArgs["result"]["interviewFeedback"]>;
export type InterviewFeedbackSelectScalar = {
    id?: boolean;
    interviewId?: boolean;
    interviewerId?: boolean;
    rating?: boolean;
    strengths?: boolean;
    weaknesses?: boolean;
    recommendation?: boolean;
    submittedAt?: boolean;
};
export type InterviewFeedbackOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "interviewId" | "interviewerId" | "rating" | "strengths" | "weaknesses" | "recommendation" | "submittedAt", ExtArgs["result"]["interviewFeedback"]>;
export type InterviewFeedbackInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    interview?: boolean | Prisma.InterviewDefaultArgs<ExtArgs>;
    interviewer?: boolean | Prisma.InterviewFeedback$interviewerArgs<ExtArgs>;
};
export type InterviewFeedbackIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    interview?: boolean | Prisma.InterviewDefaultArgs<ExtArgs>;
    interviewer?: boolean | Prisma.InterviewFeedback$interviewerArgs<ExtArgs>;
};
export type InterviewFeedbackIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    interview?: boolean | Prisma.InterviewDefaultArgs<ExtArgs>;
    interviewer?: boolean | Prisma.InterviewFeedback$interviewerArgs<ExtArgs>;
};
export type $InterviewFeedbackPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "InterviewFeedback";
    objects: {
        interview: Prisma.$InterviewPayload<ExtArgs>;
        interviewer: Prisma.$EmployeePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        interviewId: string;
        interviewerId: string | null;
        rating: number | null;
        strengths: string | null;
        weaknesses: string | null;
        recommendation: $Enums.InterviewRecommendation | null;
        submittedAt: Date;
    }, ExtArgs["result"]["interviewFeedback"]>;
    composites: {};
};
export type InterviewFeedbackGetPayload<S extends boolean | null | undefined | InterviewFeedbackDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InterviewFeedbackPayload, S>;
export type InterviewFeedbackCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InterviewFeedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InterviewFeedbackCountAggregateInputType | true;
};
export interface InterviewFeedbackDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['InterviewFeedback'];
        meta: {
            name: 'InterviewFeedback';
        };
    };
    findUnique<T extends InterviewFeedbackFindUniqueArgs>(args: Prisma.SelectSubset<T, InterviewFeedbackFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InterviewFeedbackClient<runtime.Types.Result.GetResult<Prisma.$InterviewFeedbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InterviewFeedbackFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InterviewFeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InterviewFeedbackClient<runtime.Types.Result.GetResult<Prisma.$InterviewFeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InterviewFeedbackFindFirstArgs>(args?: Prisma.SelectSubset<T, InterviewFeedbackFindFirstArgs<ExtArgs>>): Prisma.Prisma__InterviewFeedbackClient<runtime.Types.Result.GetResult<Prisma.$InterviewFeedbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InterviewFeedbackFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InterviewFeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InterviewFeedbackClient<runtime.Types.Result.GetResult<Prisma.$InterviewFeedbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InterviewFeedbackFindManyArgs>(args?: Prisma.SelectSubset<T, InterviewFeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewFeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InterviewFeedbackCreateArgs>(args: Prisma.SelectSubset<T, InterviewFeedbackCreateArgs<ExtArgs>>): Prisma.Prisma__InterviewFeedbackClient<runtime.Types.Result.GetResult<Prisma.$InterviewFeedbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InterviewFeedbackCreateManyArgs>(args?: Prisma.SelectSubset<T, InterviewFeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InterviewFeedbackCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InterviewFeedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewFeedbackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InterviewFeedbackDeleteArgs>(args: Prisma.SelectSubset<T, InterviewFeedbackDeleteArgs<ExtArgs>>): Prisma.Prisma__InterviewFeedbackClient<runtime.Types.Result.GetResult<Prisma.$InterviewFeedbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InterviewFeedbackUpdateArgs>(args: Prisma.SelectSubset<T, InterviewFeedbackUpdateArgs<ExtArgs>>): Prisma.Prisma__InterviewFeedbackClient<runtime.Types.Result.GetResult<Prisma.$InterviewFeedbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InterviewFeedbackDeleteManyArgs>(args?: Prisma.SelectSubset<T, InterviewFeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InterviewFeedbackUpdateManyArgs>(args: Prisma.SelectSubset<T, InterviewFeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InterviewFeedbackUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InterviewFeedbackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewFeedbackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InterviewFeedbackUpsertArgs>(args: Prisma.SelectSubset<T, InterviewFeedbackUpsertArgs<ExtArgs>>): Prisma.Prisma__InterviewFeedbackClient<runtime.Types.Result.GetResult<Prisma.$InterviewFeedbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InterviewFeedbackCountArgs>(args?: Prisma.Subset<T, InterviewFeedbackCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InterviewFeedbackCountAggregateOutputType> : number>;
    aggregate<T extends InterviewFeedbackAggregateArgs>(args: Prisma.Subset<T, InterviewFeedbackAggregateArgs>): Prisma.PrismaPromise<GetInterviewFeedbackAggregateType<T>>;
    groupBy<T extends InterviewFeedbackGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InterviewFeedbackGroupByArgs['orderBy'];
    } : {
        orderBy?: InterviewFeedbackGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InterviewFeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterviewFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InterviewFeedbackFieldRefs;
}
export interface Prisma__InterviewFeedbackClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    interview<T extends Prisma.InterviewDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InterviewDefaultArgs<ExtArgs>>): Prisma.Prisma__InterviewClient<runtime.Types.Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    interviewer<T extends Prisma.InterviewFeedback$interviewerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InterviewFeedback$interviewerArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InterviewFeedbackFieldRefs {
    readonly id: Prisma.FieldRef<"InterviewFeedback", 'String'>;
    readonly interviewId: Prisma.FieldRef<"InterviewFeedback", 'String'>;
    readonly interviewerId: Prisma.FieldRef<"InterviewFeedback", 'String'>;
    readonly rating: Prisma.FieldRef<"InterviewFeedback", 'Int'>;
    readonly strengths: Prisma.FieldRef<"InterviewFeedback", 'String'>;
    readonly weaknesses: Prisma.FieldRef<"InterviewFeedback", 'String'>;
    readonly recommendation: Prisma.FieldRef<"InterviewFeedback", 'InterviewRecommendation'>;
    readonly submittedAt: Prisma.FieldRef<"InterviewFeedback", 'DateTime'>;
}
export type InterviewFeedbackFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewFeedbackSelect<ExtArgs> | null;
    omit?: Prisma.InterviewFeedbackOmit<ExtArgs> | null;
    include?: Prisma.InterviewFeedbackInclude<ExtArgs> | null;
    where: Prisma.InterviewFeedbackWhereUniqueInput;
};
export type InterviewFeedbackFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewFeedbackSelect<ExtArgs> | null;
    omit?: Prisma.InterviewFeedbackOmit<ExtArgs> | null;
    include?: Prisma.InterviewFeedbackInclude<ExtArgs> | null;
    where: Prisma.InterviewFeedbackWhereUniqueInput;
};
export type InterviewFeedbackFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InterviewFeedbackFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InterviewFeedbackFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InterviewFeedbackCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewFeedbackSelect<ExtArgs> | null;
    omit?: Prisma.InterviewFeedbackOmit<ExtArgs> | null;
    include?: Prisma.InterviewFeedbackInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InterviewFeedbackCreateInput, Prisma.InterviewFeedbackUncheckedCreateInput>;
};
export type InterviewFeedbackCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InterviewFeedbackCreateManyInput | Prisma.InterviewFeedbackCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InterviewFeedbackCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewFeedbackSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InterviewFeedbackOmit<ExtArgs> | null;
    data: Prisma.InterviewFeedbackCreateManyInput | Prisma.InterviewFeedbackCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.InterviewFeedbackIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type InterviewFeedbackUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewFeedbackSelect<ExtArgs> | null;
    omit?: Prisma.InterviewFeedbackOmit<ExtArgs> | null;
    include?: Prisma.InterviewFeedbackInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InterviewFeedbackUpdateInput, Prisma.InterviewFeedbackUncheckedUpdateInput>;
    where: Prisma.InterviewFeedbackWhereUniqueInput;
};
export type InterviewFeedbackUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InterviewFeedbackUpdateManyMutationInput, Prisma.InterviewFeedbackUncheckedUpdateManyInput>;
    where?: Prisma.InterviewFeedbackWhereInput;
    limit?: number;
};
export type InterviewFeedbackUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewFeedbackSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InterviewFeedbackOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InterviewFeedbackUpdateManyMutationInput, Prisma.InterviewFeedbackUncheckedUpdateManyInput>;
    where?: Prisma.InterviewFeedbackWhereInput;
    limit?: number;
    include?: Prisma.InterviewFeedbackIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type InterviewFeedbackUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewFeedbackSelect<ExtArgs> | null;
    omit?: Prisma.InterviewFeedbackOmit<ExtArgs> | null;
    include?: Prisma.InterviewFeedbackInclude<ExtArgs> | null;
    where: Prisma.InterviewFeedbackWhereUniqueInput;
    create: Prisma.XOR<Prisma.InterviewFeedbackCreateInput, Prisma.InterviewFeedbackUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InterviewFeedbackUpdateInput, Prisma.InterviewFeedbackUncheckedUpdateInput>;
};
export type InterviewFeedbackDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewFeedbackSelect<ExtArgs> | null;
    omit?: Prisma.InterviewFeedbackOmit<ExtArgs> | null;
    include?: Prisma.InterviewFeedbackInclude<ExtArgs> | null;
    where: Prisma.InterviewFeedbackWhereUniqueInput;
};
export type InterviewFeedbackDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterviewFeedbackWhereInput;
    limit?: number;
};
export type InterviewFeedback$interviewerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where?: Prisma.EmployeeWhereInput;
};
export type InterviewFeedbackDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewFeedbackSelect<ExtArgs> | null;
    omit?: Prisma.InterviewFeedbackOmit<ExtArgs> | null;
    include?: Prisma.InterviewFeedbackInclude<ExtArgs> | null;
};
