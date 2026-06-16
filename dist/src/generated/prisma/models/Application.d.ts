import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ApplicationModel = runtime.Types.Result.DefaultSelection<Prisma.$ApplicationPayload>;
export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null;
    _min: ApplicationMinAggregateOutputType | null;
    _max: ApplicationMaxAggregateOutputType | null;
};
export type ApplicationMinAggregateOutputType = {
    id: string | null;
    jobPostingId: string | null;
    stageId: string | null;
    candidateName: string | null;
    candidateEmail: string | null;
    candidatePhone: string | null;
    cvCloudinaryPublicId: string | null;
    coverLetter: string | null;
    source: string | null;
    status: $Enums.ApplicationStatus | null;
    rejectionReason: string | null;
    appliedAt: Date | null;
    updatedAt: Date | null;
};
export type ApplicationMaxAggregateOutputType = {
    id: string | null;
    jobPostingId: string | null;
    stageId: string | null;
    candidateName: string | null;
    candidateEmail: string | null;
    candidatePhone: string | null;
    cvCloudinaryPublicId: string | null;
    coverLetter: string | null;
    source: string | null;
    status: $Enums.ApplicationStatus | null;
    rejectionReason: string | null;
    appliedAt: Date | null;
    updatedAt: Date | null;
};
export type ApplicationCountAggregateOutputType = {
    id: number;
    jobPostingId: number;
    stageId: number;
    candidateName: number;
    candidateEmail: number;
    candidatePhone: number;
    cvCloudinaryPublicId: number;
    coverLetter: number;
    source: number;
    status: number;
    rejectionReason: number;
    appliedAt: number;
    updatedAt: number;
    _all: number;
};
export type ApplicationMinAggregateInputType = {
    id?: true;
    jobPostingId?: true;
    stageId?: true;
    candidateName?: true;
    candidateEmail?: true;
    candidatePhone?: true;
    cvCloudinaryPublicId?: true;
    coverLetter?: true;
    source?: true;
    status?: true;
    rejectionReason?: true;
    appliedAt?: true;
    updatedAt?: true;
};
export type ApplicationMaxAggregateInputType = {
    id?: true;
    jobPostingId?: true;
    stageId?: true;
    candidateName?: true;
    candidateEmail?: true;
    candidatePhone?: true;
    cvCloudinaryPublicId?: true;
    coverLetter?: true;
    source?: true;
    status?: true;
    rejectionReason?: true;
    appliedAt?: true;
    updatedAt?: true;
};
export type ApplicationCountAggregateInputType = {
    id?: true;
    jobPostingId?: true;
    stageId?: true;
    candidateName?: true;
    candidateEmail?: true;
    candidatePhone?: true;
    cvCloudinaryPublicId?: true;
    coverLetter?: true;
    source?: true;
    status?: true;
    rejectionReason?: true;
    appliedAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ApplicationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApplicationWhereInput;
    orderBy?: Prisma.ApplicationOrderByWithRelationInput | Prisma.ApplicationOrderByWithRelationInput[];
    cursor?: Prisma.ApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ApplicationCountAggregateInputType;
    _min?: ApplicationMinAggregateInputType;
    _max?: ApplicationMaxAggregateInputType;
};
export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
    [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateApplication[P]> : Prisma.GetScalarType<T[P], AggregateApplication[P]>;
};
export type ApplicationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApplicationWhereInput;
    orderBy?: Prisma.ApplicationOrderByWithAggregationInput | Prisma.ApplicationOrderByWithAggregationInput[];
    by: Prisma.ApplicationScalarFieldEnum[] | Prisma.ApplicationScalarFieldEnum;
    having?: Prisma.ApplicationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ApplicationCountAggregateInputType | true;
    _min?: ApplicationMinAggregateInputType;
    _max?: ApplicationMaxAggregateInputType;
};
export type ApplicationGroupByOutputType = {
    id: string;
    jobPostingId: string;
    stageId: string | null;
    candidateName: string;
    candidateEmail: string;
    candidatePhone: string | null;
    cvCloudinaryPublicId: string | null;
    coverLetter: string | null;
    source: string | null;
    status: $Enums.ApplicationStatus;
    rejectionReason: string | null;
    appliedAt: Date;
    updatedAt: Date;
    _count: ApplicationCountAggregateOutputType | null;
    _min: ApplicationMinAggregateOutputType | null;
    _max: ApplicationMaxAggregateOutputType | null;
};
export type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ApplicationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ApplicationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ApplicationGroupByOutputType[P]>;
}>>;
export type ApplicationWhereInput = {
    AND?: Prisma.ApplicationWhereInput | Prisma.ApplicationWhereInput[];
    OR?: Prisma.ApplicationWhereInput[];
    NOT?: Prisma.ApplicationWhereInput | Prisma.ApplicationWhereInput[];
    id?: Prisma.UuidFilter<"Application"> | string;
    jobPostingId?: Prisma.UuidFilter<"Application"> | string;
    stageId?: Prisma.UuidNullableFilter<"Application"> | string | null;
    candidateName?: Prisma.StringFilter<"Application"> | string;
    candidateEmail?: Prisma.StringFilter<"Application"> | string;
    candidatePhone?: Prisma.StringNullableFilter<"Application"> | string | null;
    cvCloudinaryPublicId?: Prisma.StringNullableFilter<"Application"> | string | null;
    coverLetter?: Prisma.StringNullableFilter<"Application"> | string | null;
    source?: Prisma.StringNullableFilter<"Application"> | string | null;
    status?: Prisma.EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus;
    rejectionReason?: Prisma.StringNullableFilter<"Application"> | string | null;
    appliedAt?: Prisma.DateTimeFilter<"Application"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Application"> | Date | string;
    jobPosting?: Prisma.XOR<Prisma.JobPostingScalarRelationFilter, Prisma.JobPostingWhereInput>;
    stage?: Prisma.XOR<Prisma.PipelineStageNullableScalarRelationFilter, Prisma.PipelineStageWhereInput> | null;
    notes?: Prisma.ApplicationNoteListRelationFilter;
    interviews?: Prisma.InterviewListRelationFilter;
    offers?: Prisma.OfferListRelationFilter;
};
export type ApplicationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    jobPostingId?: Prisma.SortOrder;
    stageId?: Prisma.SortOrderInput | Prisma.SortOrder;
    candidateName?: Prisma.SortOrder;
    candidateEmail?: Prisma.SortOrder;
    candidatePhone?: Prisma.SortOrderInput | Prisma.SortOrder;
    cvCloudinaryPublicId?: Prisma.SortOrderInput | Prisma.SortOrder;
    coverLetter?: Prisma.SortOrderInput | Prisma.SortOrder;
    source?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    appliedAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    jobPosting?: Prisma.JobPostingOrderByWithRelationInput;
    stage?: Prisma.PipelineStageOrderByWithRelationInput;
    notes?: Prisma.ApplicationNoteOrderByRelationAggregateInput;
    interviews?: Prisma.InterviewOrderByRelationAggregateInput;
    offers?: Prisma.OfferOrderByRelationAggregateInput;
};
export type ApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ApplicationWhereInput | Prisma.ApplicationWhereInput[];
    OR?: Prisma.ApplicationWhereInput[];
    NOT?: Prisma.ApplicationWhereInput | Prisma.ApplicationWhereInput[];
    jobPostingId?: Prisma.UuidFilter<"Application"> | string;
    stageId?: Prisma.UuidNullableFilter<"Application"> | string | null;
    candidateName?: Prisma.StringFilter<"Application"> | string;
    candidateEmail?: Prisma.StringFilter<"Application"> | string;
    candidatePhone?: Prisma.StringNullableFilter<"Application"> | string | null;
    cvCloudinaryPublicId?: Prisma.StringNullableFilter<"Application"> | string | null;
    coverLetter?: Prisma.StringNullableFilter<"Application"> | string | null;
    source?: Prisma.StringNullableFilter<"Application"> | string | null;
    status?: Prisma.EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus;
    rejectionReason?: Prisma.StringNullableFilter<"Application"> | string | null;
    appliedAt?: Prisma.DateTimeFilter<"Application"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Application"> | Date | string;
    jobPosting?: Prisma.XOR<Prisma.JobPostingScalarRelationFilter, Prisma.JobPostingWhereInput>;
    stage?: Prisma.XOR<Prisma.PipelineStageNullableScalarRelationFilter, Prisma.PipelineStageWhereInput> | null;
    notes?: Prisma.ApplicationNoteListRelationFilter;
    interviews?: Prisma.InterviewListRelationFilter;
    offers?: Prisma.OfferListRelationFilter;
}, "id">;
export type ApplicationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    jobPostingId?: Prisma.SortOrder;
    stageId?: Prisma.SortOrderInput | Prisma.SortOrder;
    candidateName?: Prisma.SortOrder;
    candidateEmail?: Prisma.SortOrder;
    candidatePhone?: Prisma.SortOrderInput | Prisma.SortOrder;
    cvCloudinaryPublicId?: Prisma.SortOrderInput | Prisma.SortOrder;
    coverLetter?: Prisma.SortOrderInput | Prisma.SortOrder;
    source?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    appliedAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ApplicationCountOrderByAggregateInput;
    _max?: Prisma.ApplicationMaxOrderByAggregateInput;
    _min?: Prisma.ApplicationMinOrderByAggregateInput;
};
export type ApplicationScalarWhereWithAggregatesInput = {
    AND?: Prisma.ApplicationScalarWhereWithAggregatesInput | Prisma.ApplicationScalarWhereWithAggregatesInput[];
    OR?: Prisma.ApplicationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ApplicationScalarWhereWithAggregatesInput | Prisma.ApplicationScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Application"> | string;
    jobPostingId?: Prisma.UuidWithAggregatesFilter<"Application"> | string;
    stageId?: Prisma.UuidNullableWithAggregatesFilter<"Application"> | string | null;
    candidateName?: Prisma.StringWithAggregatesFilter<"Application"> | string;
    candidateEmail?: Prisma.StringWithAggregatesFilter<"Application"> | string;
    candidatePhone?: Prisma.StringNullableWithAggregatesFilter<"Application"> | string | null;
    cvCloudinaryPublicId?: Prisma.StringNullableWithAggregatesFilter<"Application"> | string | null;
    coverLetter?: Prisma.StringNullableWithAggregatesFilter<"Application"> | string | null;
    source?: Prisma.StringNullableWithAggregatesFilter<"Application"> | string | null;
    status?: Prisma.EnumApplicationStatusWithAggregatesFilter<"Application"> | $Enums.ApplicationStatus;
    rejectionReason?: Prisma.StringNullableWithAggregatesFilter<"Application"> | string | null;
    appliedAt?: Prisma.DateTimeWithAggregatesFilter<"Application"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Application"> | Date | string;
};
export type ApplicationCreateInput = {
    id?: string;
    candidateName: string;
    candidateEmail: string;
    candidatePhone?: string | null;
    cvCloudinaryPublicId?: string | null;
    coverLetter?: string | null;
    source?: string | null;
    status?: $Enums.ApplicationStatus;
    rejectionReason?: string | null;
    appliedAt?: Date | string;
    updatedAt?: Date | string;
    jobPosting: Prisma.JobPostingCreateNestedOneWithoutApplicationsInput;
    stage?: Prisma.PipelineStageCreateNestedOneWithoutApplicationsInput;
    notes?: Prisma.ApplicationNoteCreateNestedManyWithoutApplicationInput;
    interviews?: Prisma.InterviewCreateNestedManyWithoutApplicationInput;
    offers?: Prisma.OfferCreateNestedManyWithoutApplicationInput;
};
export type ApplicationUncheckedCreateInput = {
    id?: string;
    jobPostingId: string;
    stageId?: string | null;
    candidateName: string;
    candidateEmail: string;
    candidatePhone?: string | null;
    cvCloudinaryPublicId?: string | null;
    coverLetter?: string | null;
    source?: string | null;
    status?: $Enums.ApplicationStatus;
    rejectionReason?: string | null;
    appliedAt?: Date | string;
    updatedAt?: Date | string;
    notes?: Prisma.ApplicationNoteUncheckedCreateNestedManyWithoutApplicationInput;
    interviews?: Prisma.InterviewUncheckedCreateNestedManyWithoutApplicationInput;
    offers?: Prisma.OfferUncheckedCreateNestedManyWithoutApplicationInput;
};
export type ApplicationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    candidateName?: Prisma.StringFieldUpdateOperationsInput | string;
    candidateEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    candidatePhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cvCloudinaryPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverLetter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    jobPosting?: Prisma.JobPostingUpdateOneRequiredWithoutApplicationsNestedInput;
    stage?: Prisma.PipelineStageUpdateOneWithoutApplicationsNestedInput;
    notes?: Prisma.ApplicationNoteUpdateManyWithoutApplicationNestedInput;
    interviews?: Prisma.InterviewUpdateManyWithoutApplicationNestedInput;
    offers?: Prisma.OfferUpdateManyWithoutApplicationNestedInput;
};
export type ApplicationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobPostingId?: Prisma.StringFieldUpdateOperationsInput | string;
    stageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    candidateName?: Prisma.StringFieldUpdateOperationsInput | string;
    candidateEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    candidatePhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cvCloudinaryPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverLetter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.ApplicationNoteUncheckedUpdateManyWithoutApplicationNestedInput;
    interviews?: Prisma.InterviewUncheckedUpdateManyWithoutApplicationNestedInput;
    offers?: Prisma.OfferUncheckedUpdateManyWithoutApplicationNestedInput;
};
export type ApplicationCreateManyInput = {
    id?: string;
    jobPostingId: string;
    stageId?: string | null;
    candidateName: string;
    candidateEmail: string;
    candidatePhone?: string | null;
    cvCloudinaryPublicId?: string | null;
    coverLetter?: string | null;
    source?: string | null;
    status?: $Enums.ApplicationStatus;
    rejectionReason?: string | null;
    appliedAt?: Date | string;
    updatedAt?: Date | string;
};
export type ApplicationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    candidateName?: Prisma.StringFieldUpdateOperationsInput | string;
    candidateEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    candidatePhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cvCloudinaryPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverLetter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApplicationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobPostingId?: Prisma.StringFieldUpdateOperationsInput | string;
    stageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    candidateName?: Prisma.StringFieldUpdateOperationsInput | string;
    candidateEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    candidatePhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cvCloudinaryPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverLetter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApplicationListRelationFilter = {
    every?: Prisma.ApplicationWhereInput;
    some?: Prisma.ApplicationWhereInput;
    none?: Prisma.ApplicationWhereInput;
};
export type ApplicationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ApplicationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    jobPostingId?: Prisma.SortOrder;
    stageId?: Prisma.SortOrder;
    candidateName?: Prisma.SortOrder;
    candidateEmail?: Prisma.SortOrder;
    candidatePhone?: Prisma.SortOrder;
    cvCloudinaryPublicId?: Prisma.SortOrder;
    coverLetter?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrder;
    appliedAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ApplicationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    jobPostingId?: Prisma.SortOrder;
    stageId?: Prisma.SortOrder;
    candidateName?: Prisma.SortOrder;
    candidateEmail?: Prisma.SortOrder;
    candidatePhone?: Prisma.SortOrder;
    cvCloudinaryPublicId?: Prisma.SortOrder;
    coverLetter?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrder;
    appliedAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ApplicationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    jobPostingId?: Prisma.SortOrder;
    stageId?: Prisma.SortOrder;
    candidateName?: Prisma.SortOrder;
    candidateEmail?: Prisma.SortOrder;
    candidatePhone?: Prisma.SortOrder;
    cvCloudinaryPublicId?: Prisma.SortOrder;
    coverLetter?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrder;
    appliedAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ApplicationScalarRelationFilter = {
    is?: Prisma.ApplicationWhereInput;
    isNot?: Prisma.ApplicationWhereInput;
};
export type ApplicationCreateNestedManyWithoutJobPostingInput = {
    create?: Prisma.XOR<Prisma.ApplicationCreateWithoutJobPostingInput, Prisma.ApplicationUncheckedCreateWithoutJobPostingInput> | Prisma.ApplicationCreateWithoutJobPostingInput[] | Prisma.ApplicationUncheckedCreateWithoutJobPostingInput[];
    connectOrCreate?: Prisma.ApplicationCreateOrConnectWithoutJobPostingInput | Prisma.ApplicationCreateOrConnectWithoutJobPostingInput[];
    createMany?: Prisma.ApplicationCreateManyJobPostingInputEnvelope;
    connect?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
};
export type ApplicationUncheckedCreateNestedManyWithoutJobPostingInput = {
    create?: Prisma.XOR<Prisma.ApplicationCreateWithoutJobPostingInput, Prisma.ApplicationUncheckedCreateWithoutJobPostingInput> | Prisma.ApplicationCreateWithoutJobPostingInput[] | Prisma.ApplicationUncheckedCreateWithoutJobPostingInput[];
    connectOrCreate?: Prisma.ApplicationCreateOrConnectWithoutJobPostingInput | Prisma.ApplicationCreateOrConnectWithoutJobPostingInput[];
    createMany?: Prisma.ApplicationCreateManyJobPostingInputEnvelope;
    connect?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
};
export type ApplicationUpdateManyWithoutJobPostingNestedInput = {
    create?: Prisma.XOR<Prisma.ApplicationCreateWithoutJobPostingInput, Prisma.ApplicationUncheckedCreateWithoutJobPostingInput> | Prisma.ApplicationCreateWithoutJobPostingInput[] | Prisma.ApplicationUncheckedCreateWithoutJobPostingInput[];
    connectOrCreate?: Prisma.ApplicationCreateOrConnectWithoutJobPostingInput | Prisma.ApplicationCreateOrConnectWithoutJobPostingInput[];
    upsert?: Prisma.ApplicationUpsertWithWhereUniqueWithoutJobPostingInput | Prisma.ApplicationUpsertWithWhereUniqueWithoutJobPostingInput[];
    createMany?: Prisma.ApplicationCreateManyJobPostingInputEnvelope;
    set?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
    disconnect?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
    delete?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
    connect?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
    update?: Prisma.ApplicationUpdateWithWhereUniqueWithoutJobPostingInput | Prisma.ApplicationUpdateWithWhereUniqueWithoutJobPostingInput[];
    updateMany?: Prisma.ApplicationUpdateManyWithWhereWithoutJobPostingInput | Prisma.ApplicationUpdateManyWithWhereWithoutJobPostingInput[];
    deleteMany?: Prisma.ApplicationScalarWhereInput | Prisma.ApplicationScalarWhereInput[];
};
export type ApplicationUncheckedUpdateManyWithoutJobPostingNestedInput = {
    create?: Prisma.XOR<Prisma.ApplicationCreateWithoutJobPostingInput, Prisma.ApplicationUncheckedCreateWithoutJobPostingInput> | Prisma.ApplicationCreateWithoutJobPostingInput[] | Prisma.ApplicationUncheckedCreateWithoutJobPostingInput[];
    connectOrCreate?: Prisma.ApplicationCreateOrConnectWithoutJobPostingInput | Prisma.ApplicationCreateOrConnectWithoutJobPostingInput[];
    upsert?: Prisma.ApplicationUpsertWithWhereUniqueWithoutJobPostingInput | Prisma.ApplicationUpsertWithWhereUniqueWithoutJobPostingInput[];
    createMany?: Prisma.ApplicationCreateManyJobPostingInputEnvelope;
    set?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
    disconnect?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
    delete?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
    connect?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
    update?: Prisma.ApplicationUpdateWithWhereUniqueWithoutJobPostingInput | Prisma.ApplicationUpdateWithWhereUniqueWithoutJobPostingInput[];
    updateMany?: Prisma.ApplicationUpdateManyWithWhereWithoutJobPostingInput | Prisma.ApplicationUpdateManyWithWhereWithoutJobPostingInput[];
    deleteMany?: Prisma.ApplicationScalarWhereInput | Prisma.ApplicationScalarWhereInput[];
};
export type ApplicationCreateNestedManyWithoutStageInput = {
    create?: Prisma.XOR<Prisma.ApplicationCreateWithoutStageInput, Prisma.ApplicationUncheckedCreateWithoutStageInput> | Prisma.ApplicationCreateWithoutStageInput[] | Prisma.ApplicationUncheckedCreateWithoutStageInput[];
    connectOrCreate?: Prisma.ApplicationCreateOrConnectWithoutStageInput | Prisma.ApplicationCreateOrConnectWithoutStageInput[];
    createMany?: Prisma.ApplicationCreateManyStageInputEnvelope;
    connect?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
};
export type ApplicationUncheckedCreateNestedManyWithoutStageInput = {
    create?: Prisma.XOR<Prisma.ApplicationCreateWithoutStageInput, Prisma.ApplicationUncheckedCreateWithoutStageInput> | Prisma.ApplicationCreateWithoutStageInput[] | Prisma.ApplicationUncheckedCreateWithoutStageInput[];
    connectOrCreate?: Prisma.ApplicationCreateOrConnectWithoutStageInput | Prisma.ApplicationCreateOrConnectWithoutStageInput[];
    createMany?: Prisma.ApplicationCreateManyStageInputEnvelope;
    connect?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
};
export type ApplicationUpdateManyWithoutStageNestedInput = {
    create?: Prisma.XOR<Prisma.ApplicationCreateWithoutStageInput, Prisma.ApplicationUncheckedCreateWithoutStageInput> | Prisma.ApplicationCreateWithoutStageInput[] | Prisma.ApplicationUncheckedCreateWithoutStageInput[];
    connectOrCreate?: Prisma.ApplicationCreateOrConnectWithoutStageInput | Prisma.ApplicationCreateOrConnectWithoutStageInput[];
    upsert?: Prisma.ApplicationUpsertWithWhereUniqueWithoutStageInput | Prisma.ApplicationUpsertWithWhereUniqueWithoutStageInput[];
    createMany?: Prisma.ApplicationCreateManyStageInputEnvelope;
    set?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
    disconnect?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
    delete?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
    connect?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
    update?: Prisma.ApplicationUpdateWithWhereUniqueWithoutStageInput | Prisma.ApplicationUpdateWithWhereUniqueWithoutStageInput[];
    updateMany?: Prisma.ApplicationUpdateManyWithWhereWithoutStageInput | Prisma.ApplicationUpdateManyWithWhereWithoutStageInput[];
    deleteMany?: Prisma.ApplicationScalarWhereInput | Prisma.ApplicationScalarWhereInput[];
};
export type ApplicationUncheckedUpdateManyWithoutStageNestedInput = {
    create?: Prisma.XOR<Prisma.ApplicationCreateWithoutStageInput, Prisma.ApplicationUncheckedCreateWithoutStageInput> | Prisma.ApplicationCreateWithoutStageInput[] | Prisma.ApplicationUncheckedCreateWithoutStageInput[];
    connectOrCreate?: Prisma.ApplicationCreateOrConnectWithoutStageInput | Prisma.ApplicationCreateOrConnectWithoutStageInput[];
    upsert?: Prisma.ApplicationUpsertWithWhereUniqueWithoutStageInput | Prisma.ApplicationUpsertWithWhereUniqueWithoutStageInput[];
    createMany?: Prisma.ApplicationCreateManyStageInputEnvelope;
    set?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
    disconnect?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
    delete?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
    connect?: Prisma.ApplicationWhereUniqueInput | Prisma.ApplicationWhereUniqueInput[];
    update?: Prisma.ApplicationUpdateWithWhereUniqueWithoutStageInput | Prisma.ApplicationUpdateWithWhereUniqueWithoutStageInput[];
    updateMany?: Prisma.ApplicationUpdateManyWithWhereWithoutStageInput | Prisma.ApplicationUpdateManyWithWhereWithoutStageInput[];
    deleteMany?: Prisma.ApplicationScalarWhereInput | Prisma.ApplicationScalarWhereInput[];
};
export type EnumApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationStatus;
};
export type ApplicationCreateNestedOneWithoutNotesInput = {
    create?: Prisma.XOR<Prisma.ApplicationCreateWithoutNotesInput, Prisma.ApplicationUncheckedCreateWithoutNotesInput>;
    connectOrCreate?: Prisma.ApplicationCreateOrConnectWithoutNotesInput;
    connect?: Prisma.ApplicationWhereUniqueInput;
};
export type ApplicationUpdateOneRequiredWithoutNotesNestedInput = {
    create?: Prisma.XOR<Prisma.ApplicationCreateWithoutNotesInput, Prisma.ApplicationUncheckedCreateWithoutNotesInput>;
    connectOrCreate?: Prisma.ApplicationCreateOrConnectWithoutNotesInput;
    upsert?: Prisma.ApplicationUpsertWithoutNotesInput;
    connect?: Prisma.ApplicationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ApplicationUpdateToOneWithWhereWithoutNotesInput, Prisma.ApplicationUpdateWithoutNotesInput>, Prisma.ApplicationUncheckedUpdateWithoutNotesInput>;
};
export type ApplicationCreateNestedOneWithoutInterviewsInput = {
    create?: Prisma.XOR<Prisma.ApplicationCreateWithoutInterviewsInput, Prisma.ApplicationUncheckedCreateWithoutInterviewsInput>;
    connectOrCreate?: Prisma.ApplicationCreateOrConnectWithoutInterviewsInput;
    connect?: Prisma.ApplicationWhereUniqueInput;
};
export type ApplicationUpdateOneRequiredWithoutInterviewsNestedInput = {
    create?: Prisma.XOR<Prisma.ApplicationCreateWithoutInterviewsInput, Prisma.ApplicationUncheckedCreateWithoutInterviewsInput>;
    connectOrCreate?: Prisma.ApplicationCreateOrConnectWithoutInterviewsInput;
    upsert?: Prisma.ApplicationUpsertWithoutInterviewsInput;
    connect?: Prisma.ApplicationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ApplicationUpdateToOneWithWhereWithoutInterviewsInput, Prisma.ApplicationUpdateWithoutInterviewsInput>, Prisma.ApplicationUncheckedUpdateWithoutInterviewsInput>;
};
export type ApplicationCreateNestedOneWithoutOffersInput = {
    create?: Prisma.XOR<Prisma.ApplicationCreateWithoutOffersInput, Prisma.ApplicationUncheckedCreateWithoutOffersInput>;
    connectOrCreate?: Prisma.ApplicationCreateOrConnectWithoutOffersInput;
    connect?: Prisma.ApplicationWhereUniqueInput;
};
export type ApplicationUpdateOneRequiredWithoutOffersNestedInput = {
    create?: Prisma.XOR<Prisma.ApplicationCreateWithoutOffersInput, Prisma.ApplicationUncheckedCreateWithoutOffersInput>;
    connectOrCreate?: Prisma.ApplicationCreateOrConnectWithoutOffersInput;
    upsert?: Prisma.ApplicationUpsertWithoutOffersInput;
    connect?: Prisma.ApplicationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ApplicationUpdateToOneWithWhereWithoutOffersInput, Prisma.ApplicationUpdateWithoutOffersInput>, Prisma.ApplicationUncheckedUpdateWithoutOffersInput>;
};
export type ApplicationCreateWithoutJobPostingInput = {
    id?: string;
    candidateName: string;
    candidateEmail: string;
    candidatePhone?: string | null;
    cvCloudinaryPublicId?: string | null;
    coverLetter?: string | null;
    source?: string | null;
    status?: $Enums.ApplicationStatus;
    rejectionReason?: string | null;
    appliedAt?: Date | string;
    updatedAt?: Date | string;
    stage?: Prisma.PipelineStageCreateNestedOneWithoutApplicationsInput;
    notes?: Prisma.ApplicationNoteCreateNestedManyWithoutApplicationInput;
    interviews?: Prisma.InterviewCreateNestedManyWithoutApplicationInput;
    offers?: Prisma.OfferCreateNestedManyWithoutApplicationInput;
};
export type ApplicationUncheckedCreateWithoutJobPostingInput = {
    id?: string;
    stageId?: string | null;
    candidateName: string;
    candidateEmail: string;
    candidatePhone?: string | null;
    cvCloudinaryPublicId?: string | null;
    coverLetter?: string | null;
    source?: string | null;
    status?: $Enums.ApplicationStatus;
    rejectionReason?: string | null;
    appliedAt?: Date | string;
    updatedAt?: Date | string;
    notes?: Prisma.ApplicationNoteUncheckedCreateNestedManyWithoutApplicationInput;
    interviews?: Prisma.InterviewUncheckedCreateNestedManyWithoutApplicationInput;
    offers?: Prisma.OfferUncheckedCreateNestedManyWithoutApplicationInput;
};
export type ApplicationCreateOrConnectWithoutJobPostingInput = {
    where: Prisma.ApplicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApplicationCreateWithoutJobPostingInput, Prisma.ApplicationUncheckedCreateWithoutJobPostingInput>;
};
export type ApplicationCreateManyJobPostingInputEnvelope = {
    data: Prisma.ApplicationCreateManyJobPostingInput | Prisma.ApplicationCreateManyJobPostingInput[];
    skipDuplicates?: boolean;
};
export type ApplicationUpsertWithWhereUniqueWithoutJobPostingInput = {
    where: Prisma.ApplicationWhereUniqueInput;
    update: Prisma.XOR<Prisma.ApplicationUpdateWithoutJobPostingInput, Prisma.ApplicationUncheckedUpdateWithoutJobPostingInput>;
    create: Prisma.XOR<Prisma.ApplicationCreateWithoutJobPostingInput, Prisma.ApplicationUncheckedCreateWithoutJobPostingInput>;
};
export type ApplicationUpdateWithWhereUniqueWithoutJobPostingInput = {
    where: Prisma.ApplicationWhereUniqueInput;
    data: Prisma.XOR<Prisma.ApplicationUpdateWithoutJobPostingInput, Prisma.ApplicationUncheckedUpdateWithoutJobPostingInput>;
};
export type ApplicationUpdateManyWithWhereWithoutJobPostingInput = {
    where: Prisma.ApplicationScalarWhereInput;
    data: Prisma.XOR<Prisma.ApplicationUpdateManyMutationInput, Prisma.ApplicationUncheckedUpdateManyWithoutJobPostingInput>;
};
export type ApplicationScalarWhereInput = {
    AND?: Prisma.ApplicationScalarWhereInput | Prisma.ApplicationScalarWhereInput[];
    OR?: Prisma.ApplicationScalarWhereInput[];
    NOT?: Prisma.ApplicationScalarWhereInput | Prisma.ApplicationScalarWhereInput[];
    id?: Prisma.UuidFilter<"Application"> | string;
    jobPostingId?: Prisma.UuidFilter<"Application"> | string;
    stageId?: Prisma.UuidNullableFilter<"Application"> | string | null;
    candidateName?: Prisma.StringFilter<"Application"> | string;
    candidateEmail?: Prisma.StringFilter<"Application"> | string;
    candidatePhone?: Prisma.StringNullableFilter<"Application"> | string | null;
    cvCloudinaryPublicId?: Prisma.StringNullableFilter<"Application"> | string | null;
    coverLetter?: Prisma.StringNullableFilter<"Application"> | string | null;
    source?: Prisma.StringNullableFilter<"Application"> | string | null;
    status?: Prisma.EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus;
    rejectionReason?: Prisma.StringNullableFilter<"Application"> | string | null;
    appliedAt?: Prisma.DateTimeFilter<"Application"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Application"> | Date | string;
};
export type ApplicationCreateWithoutStageInput = {
    id?: string;
    candidateName: string;
    candidateEmail: string;
    candidatePhone?: string | null;
    cvCloudinaryPublicId?: string | null;
    coverLetter?: string | null;
    source?: string | null;
    status?: $Enums.ApplicationStatus;
    rejectionReason?: string | null;
    appliedAt?: Date | string;
    updatedAt?: Date | string;
    jobPosting: Prisma.JobPostingCreateNestedOneWithoutApplicationsInput;
    notes?: Prisma.ApplicationNoteCreateNestedManyWithoutApplicationInput;
    interviews?: Prisma.InterviewCreateNestedManyWithoutApplicationInput;
    offers?: Prisma.OfferCreateNestedManyWithoutApplicationInput;
};
export type ApplicationUncheckedCreateWithoutStageInput = {
    id?: string;
    jobPostingId: string;
    candidateName: string;
    candidateEmail: string;
    candidatePhone?: string | null;
    cvCloudinaryPublicId?: string | null;
    coverLetter?: string | null;
    source?: string | null;
    status?: $Enums.ApplicationStatus;
    rejectionReason?: string | null;
    appliedAt?: Date | string;
    updatedAt?: Date | string;
    notes?: Prisma.ApplicationNoteUncheckedCreateNestedManyWithoutApplicationInput;
    interviews?: Prisma.InterviewUncheckedCreateNestedManyWithoutApplicationInput;
    offers?: Prisma.OfferUncheckedCreateNestedManyWithoutApplicationInput;
};
export type ApplicationCreateOrConnectWithoutStageInput = {
    where: Prisma.ApplicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApplicationCreateWithoutStageInput, Prisma.ApplicationUncheckedCreateWithoutStageInput>;
};
export type ApplicationCreateManyStageInputEnvelope = {
    data: Prisma.ApplicationCreateManyStageInput | Prisma.ApplicationCreateManyStageInput[];
    skipDuplicates?: boolean;
};
export type ApplicationUpsertWithWhereUniqueWithoutStageInput = {
    where: Prisma.ApplicationWhereUniqueInput;
    update: Prisma.XOR<Prisma.ApplicationUpdateWithoutStageInput, Prisma.ApplicationUncheckedUpdateWithoutStageInput>;
    create: Prisma.XOR<Prisma.ApplicationCreateWithoutStageInput, Prisma.ApplicationUncheckedCreateWithoutStageInput>;
};
export type ApplicationUpdateWithWhereUniqueWithoutStageInput = {
    where: Prisma.ApplicationWhereUniqueInput;
    data: Prisma.XOR<Prisma.ApplicationUpdateWithoutStageInput, Prisma.ApplicationUncheckedUpdateWithoutStageInput>;
};
export type ApplicationUpdateManyWithWhereWithoutStageInput = {
    where: Prisma.ApplicationScalarWhereInput;
    data: Prisma.XOR<Prisma.ApplicationUpdateManyMutationInput, Prisma.ApplicationUncheckedUpdateManyWithoutStageInput>;
};
export type ApplicationCreateWithoutNotesInput = {
    id?: string;
    candidateName: string;
    candidateEmail: string;
    candidatePhone?: string | null;
    cvCloudinaryPublicId?: string | null;
    coverLetter?: string | null;
    source?: string | null;
    status?: $Enums.ApplicationStatus;
    rejectionReason?: string | null;
    appliedAt?: Date | string;
    updatedAt?: Date | string;
    jobPosting: Prisma.JobPostingCreateNestedOneWithoutApplicationsInput;
    stage?: Prisma.PipelineStageCreateNestedOneWithoutApplicationsInput;
    interviews?: Prisma.InterviewCreateNestedManyWithoutApplicationInput;
    offers?: Prisma.OfferCreateNestedManyWithoutApplicationInput;
};
export type ApplicationUncheckedCreateWithoutNotesInput = {
    id?: string;
    jobPostingId: string;
    stageId?: string | null;
    candidateName: string;
    candidateEmail: string;
    candidatePhone?: string | null;
    cvCloudinaryPublicId?: string | null;
    coverLetter?: string | null;
    source?: string | null;
    status?: $Enums.ApplicationStatus;
    rejectionReason?: string | null;
    appliedAt?: Date | string;
    updatedAt?: Date | string;
    interviews?: Prisma.InterviewUncheckedCreateNestedManyWithoutApplicationInput;
    offers?: Prisma.OfferUncheckedCreateNestedManyWithoutApplicationInput;
};
export type ApplicationCreateOrConnectWithoutNotesInput = {
    where: Prisma.ApplicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApplicationCreateWithoutNotesInput, Prisma.ApplicationUncheckedCreateWithoutNotesInput>;
};
export type ApplicationUpsertWithoutNotesInput = {
    update: Prisma.XOR<Prisma.ApplicationUpdateWithoutNotesInput, Prisma.ApplicationUncheckedUpdateWithoutNotesInput>;
    create: Prisma.XOR<Prisma.ApplicationCreateWithoutNotesInput, Prisma.ApplicationUncheckedCreateWithoutNotesInput>;
    where?: Prisma.ApplicationWhereInput;
};
export type ApplicationUpdateToOneWithWhereWithoutNotesInput = {
    where?: Prisma.ApplicationWhereInput;
    data: Prisma.XOR<Prisma.ApplicationUpdateWithoutNotesInput, Prisma.ApplicationUncheckedUpdateWithoutNotesInput>;
};
export type ApplicationUpdateWithoutNotesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    candidateName?: Prisma.StringFieldUpdateOperationsInput | string;
    candidateEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    candidatePhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cvCloudinaryPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverLetter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    jobPosting?: Prisma.JobPostingUpdateOneRequiredWithoutApplicationsNestedInput;
    stage?: Prisma.PipelineStageUpdateOneWithoutApplicationsNestedInput;
    interviews?: Prisma.InterviewUpdateManyWithoutApplicationNestedInput;
    offers?: Prisma.OfferUpdateManyWithoutApplicationNestedInput;
};
export type ApplicationUncheckedUpdateWithoutNotesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobPostingId?: Prisma.StringFieldUpdateOperationsInput | string;
    stageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    candidateName?: Prisma.StringFieldUpdateOperationsInput | string;
    candidateEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    candidatePhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cvCloudinaryPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverLetter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    interviews?: Prisma.InterviewUncheckedUpdateManyWithoutApplicationNestedInput;
    offers?: Prisma.OfferUncheckedUpdateManyWithoutApplicationNestedInput;
};
export type ApplicationCreateWithoutInterviewsInput = {
    id?: string;
    candidateName: string;
    candidateEmail: string;
    candidatePhone?: string | null;
    cvCloudinaryPublicId?: string | null;
    coverLetter?: string | null;
    source?: string | null;
    status?: $Enums.ApplicationStatus;
    rejectionReason?: string | null;
    appliedAt?: Date | string;
    updatedAt?: Date | string;
    jobPosting: Prisma.JobPostingCreateNestedOneWithoutApplicationsInput;
    stage?: Prisma.PipelineStageCreateNestedOneWithoutApplicationsInput;
    notes?: Prisma.ApplicationNoteCreateNestedManyWithoutApplicationInput;
    offers?: Prisma.OfferCreateNestedManyWithoutApplicationInput;
};
export type ApplicationUncheckedCreateWithoutInterviewsInput = {
    id?: string;
    jobPostingId: string;
    stageId?: string | null;
    candidateName: string;
    candidateEmail: string;
    candidatePhone?: string | null;
    cvCloudinaryPublicId?: string | null;
    coverLetter?: string | null;
    source?: string | null;
    status?: $Enums.ApplicationStatus;
    rejectionReason?: string | null;
    appliedAt?: Date | string;
    updatedAt?: Date | string;
    notes?: Prisma.ApplicationNoteUncheckedCreateNestedManyWithoutApplicationInput;
    offers?: Prisma.OfferUncheckedCreateNestedManyWithoutApplicationInput;
};
export type ApplicationCreateOrConnectWithoutInterviewsInput = {
    where: Prisma.ApplicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApplicationCreateWithoutInterviewsInput, Prisma.ApplicationUncheckedCreateWithoutInterviewsInput>;
};
export type ApplicationUpsertWithoutInterviewsInput = {
    update: Prisma.XOR<Prisma.ApplicationUpdateWithoutInterviewsInput, Prisma.ApplicationUncheckedUpdateWithoutInterviewsInput>;
    create: Prisma.XOR<Prisma.ApplicationCreateWithoutInterviewsInput, Prisma.ApplicationUncheckedCreateWithoutInterviewsInput>;
    where?: Prisma.ApplicationWhereInput;
};
export type ApplicationUpdateToOneWithWhereWithoutInterviewsInput = {
    where?: Prisma.ApplicationWhereInput;
    data: Prisma.XOR<Prisma.ApplicationUpdateWithoutInterviewsInput, Prisma.ApplicationUncheckedUpdateWithoutInterviewsInput>;
};
export type ApplicationUpdateWithoutInterviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    candidateName?: Prisma.StringFieldUpdateOperationsInput | string;
    candidateEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    candidatePhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cvCloudinaryPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverLetter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    jobPosting?: Prisma.JobPostingUpdateOneRequiredWithoutApplicationsNestedInput;
    stage?: Prisma.PipelineStageUpdateOneWithoutApplicationsNestedInput;
    notes?: Prisma.ApplicationNoteUpdateManyWithoutApplicationNestedInput;
    offers?: Prisma.OfferUpdateManyWithoutApplicationNestedInput;
};
export type ApplicationUncheckedUpdateWithoutInterviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobPostingId?: Prisma.StringFieldUpdateOperationsInput | string;
    stageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    candidateName?: Prisma.StringFieldUpdateOperationsInput | string;
    candidateEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    candidatePhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cvCloudinaryPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverLetter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.ApplicationNoteUncheckedUpdateManyWithoutApplicationNestedInput;
    offers?: Prisma.OfferUncheckedUpdateManyWithoutApplicationNestedInput;
};
export type ApplicationCreateWithoutOffersInput = {
    id?: string;
    candidateName: string;
    candidateEmail: string;
    candidatePhone?: string | null;
    cvCloudinaryPublicId?: string | null;
    coverLetter?: string | null;
    source?: string | null;
    status?: $Enums.ApplicationStatus;
    rejectionReason?: string | null;
    appliedAt?: Date | string;
    updatedAt?: Date | string;
    jobPosting: Prisma.JobPostingCreateNestedOneWithoutApplicationsInput;
    stage?: Prisma.PipelineStageCreateNestedOneWithoutApplicationsInput;
    notes?: Prisma.ApplicationNoteCreateNestedManyWithoutApplicationInput;
    interviews?: Prisma.InterviewCreateNestedManyWithoutApplicationInput;
};
export type ApplicationUncheckedCreateWithoutOffersInput = {
    id?: string;
    jobPostingId: string;
    stageId?: string | null;
    candidateName: string;
    candidateEmail: string;
    candidatePhone?: string | null;
    cvCloudinaryPublicId?: string | null;
    coverLetter?: string | null;
    source?: string | null;
    status?: $Enums.ApplicationStatus;
    rejectionReason?: string | null;
    appliedAt?: Date | string;
    updatedAt?: Date | string;
    notes?: Prisma.ApplicationNoteUncheckedCreateNestedManyWithoutApplicationInput;
    interviews?: Prisma.InterviewUncheckedCreateNestedManyWithoutApplicationInput;
};
export type ApplicationCreateOrConnectWithoutOffersInput = {
    where: Prisma.ApplicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApplicationCreateWithoutOffersInput, Prisma.ApplicationUncheckedCreateWithoutOffersInput>;
};
export type ApplicationUpsertWithoutOffersInput = {
    update: Prisma.XOR<Prisma.ApplicationUpdateWithoutOffersInput, Prisma.ApplicationUncheckedUpdateWithoutOffersInput>;
    create: Prisma.XOR<Prisma.ApplicationCreateWithoutOffersInput, Prisma.ApplicationUncheckedCreateWithoutOffersInput>;
    where?: Prisma.ApplicationWhereInput;
};
export type ApplicationUpdateToOneWithWhereWithoutOffersInput = {
    where?: Prisma.ApplicationWhereInput;
    data: Prisma.XOR<Prisma.ApplicationUpdateWithoutOffersInput, Prisma.ApplicationUncheckedUpdateWithoutOffersInput>;
};
export type ApplicationUpdateWithoutOffersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    candidateName?: Prisma.StringFieldUpdateOperationsInput | string;
    candidateEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    candidatePhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cvCloudinaryPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverLetter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    jobPosting?: Prisma.JobPostingUpdateOneRequiredWithoutApplicationsNestedInput;
    stage?: Prisma.PipelineStageUpdateOneWithoutApplicationsNestedInput;
    notes?: Prisma.ApplicationNoteUpdateManyWithoutApplicationNestedInput;
    interviews?: Prisma.InterviewUpdateManyWithoutApplicationNestedInput;
};
export type ApplicationUncheckedUpdateWithoutOffersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobPostingId?: Prisma.StringFieldUpdateOperationsInput | string;
    stageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    candidateName?: Prisma.StringFieldUpdateOperationsInput | string;
    candidateEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    candidatePhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cvCloudinaryPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverLetter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.ApplicationNoteUncheckedUpdateManyWithoutApplicationNestedInput;
    interviews?: Prisma.InterviewUncheckedUpdateManyWithoutApplicationNestedInput;
};
export type ApplicationCreateManyJobPostingInput = {
    id?: string;
    stageId?: string | null;
    candidateName: string;
    candidateEmail: string;
    candidatePhone?: string | null;
    cvCloudinaryPublicId?: string | null;
    coverLetter?: string | null;
    source?: string | null;
    status?: $Enums.ApplicationStatus;
    rejectionReason?: string | null;
    appliedAt?: Date | string;
    updatedAt?: Date | string;
};
export type ApplicationUpdateWithoutJobPostingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    candidateName?: Prisma.StringFieldUpdateOperationsInput | string;
    candidateEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    candidatePhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cvCloudinaryPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverLetter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    stage?: Prisma.PipelineStageUpdateOneWithoutApplicationsNestedInput;
    notes?: Prisma.ApplicationNoteUpdateManyWithoutApplicationNestedInput;
    interviews?: Prisma.InterviewUpdateManyWithoutApplicationNestedInput;
    offers?: Prisma.OfferUpdateManyWithoutApplicationNestedInput;
};
export type ApplicationUncheckedUpdateWithoutJobPostingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    candidateName?: Prisma.StringFieldUpdateOperationsInput | string;
    candidateEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    candidatePhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cvCloudinaryPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverLetter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.ApplicationNoteUncheckedUpdateManyWithoutApplicationNestedInput;
    interviews?: Prisma.InterviewUncheckedUpdateManyWithoutApplicationNestedInput;
    offers?: Prisma.OfferUncheckedUpdateManyWithoutApplicationNestedInput;
};
export type ApplicationUncheckedUpdateManyWithoutJobPostingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    candidateName?: Prisma.StringFieldUpdateOperationsInput | string;
    candidateEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    candidatePhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cvCloudinaryPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverLetter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApplicationCreateManyStageInput = {
    id?: string;
    jobPostingId: string;
    candidateName: string;
    candidateEmail: string;
    candidatePhone?: string | null;
    cvCloudinaryPublicId?: string | null;
    coverLetter?: string | null;
    source?: string | null;
    status?: $Enums.ApplicationStatus;
    rejectionReason?: string | null;
    appliedAt?: Date | string;
    updatedAt?: Date | string;
};
export type ApplicationUpdateWithoutStageInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    candidateName?: Prisma.StringFieldUpdateOperationsInput | string;
    candidateEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    candidatePhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cvCloudinaryPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverLetter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    jobPosting?: Prisma.JobPostingUpdateOneRequiredWithoutApplicationsNestedInput;
    notes?: Prisma.ApplicationNoteUpdateManyWithoutApplicationNestedInput;
    interviews?: Prisma.InterviewUpdateManyWithoutApplicationNestedInput;
    offers?: Prisma.OfferUpdateManyWithoutApplicationNestedInput;
};
export type ApplicationUncheckedUpdateWithoutStageInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobPostingId?: Prisma.StringFieldUpdateOperationsInput | string;
    candidateName?: Prisma.StringFieldUpdateOperationsInput | string;
    candidateEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    candidatePhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cvCloudinaryPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverLetter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.ApplicationNoteUncheckedUpdateManyWithoutApplicationNestedInput;
    interviews?: Prisma.InterviewUncheckedUpdateManyWithoutApplicationNestedInput;
    offers?: Prisma.OfferUncheckedUpdateManyWithoutApplicationNestedInput;
};
export type ApplicationUncheckedUpdateManyWithoutStageInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    jobPostingId?: Prisma.StringFieldUpdateOperationsInput | string;
    candidateName?: Prisma.StringFieldUpdateOperationsInput | string;
    candidateEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    candidatePhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cvCloudinaryPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverLetter?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApplicationCountOutputType = {
    notes: number;
    interviews: number;
    offers: number;
};
export type ApplicationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    notes?: boolean | ApplicationCountOutputTypeCountNotesArgs;
    interviews?: boolean | ApplicationCountOutputTypeCountInterviewsArgs;
    offers?: boolean | ApplicationCountOutputTypeCountOffersArgs;
};
export type ApplicationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApplicationCountOutputTypeSelect<ExtArgs> | null;
};
export type ApplicationCountOutputTypeCountNotesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApplicationNoteWhereInput;
};
export type ApplicationCountOutputTypeCountInterviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterviewWhereInput;
};
export type ApplicationCountOutputTypeCountOffersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OfferWhereInput;
};
export type ApplicationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    jobPostingId?: boolean;
    stageId?: boolean;
    candidateName?: boolean;
    candidateEmail?: boolean;
    candidatePhone?: boolean;
    cvCloudinaryPublicId?: boolean;
    coverLetter?: boolean;
    source?: boolean;
    status?: boolean;
    rejectionReason?: boolean;
    appliedAt?: boolean;
    updatedAt?: boolean;
    jobPosting?: boolean | Prisma.JobPostingDefaultArgs<ExtArgs>;
    stage?: boolean | Prisma.Application$stageArgs<ExtArgs>;
    notes?: boolean | Prisma.Application$notesArgs<ExtArgs>;
    interviews?: boolean | Prisma.Application$interviewsArgs<ExtArgs>;
    offers?: boolean | Prisma.Application$offersArgs<ExtArgs>;
    _count?: boolean | Prisma.ApplicationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["application"]>;
export type ApplicationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    jobPostingId?: boolean;
    stageId?: boolean;
    candidateName?: boolean;
    candidateEmail?: boolean;
    candidatePhone?: boolean;
    cvCloudinaryPublicId?: boolean;
    coverLetter?: boolean;
    source?: boolean;
    status?: boolean;
    rejectionReason?: boolean;
    appliedAt?: boolean;
    updatedAt?: boolean;
    jobPosting?: boolean | Prisma.JobPostingDefaultArgs<ExtArgs>;
    stage?: boolean | Prisma.Application$stageArgs<ExtArgs>;
}, ExtArgs["result"]["application"]>;
export type ApplicationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    jobPostingId?: boolean;
    stageId?: boolean;
    candidateName?: boolean;
    candidateEmail?: boolean;
    candidatePhone?: boolean;
    cvCloudinaryPublicId?: boolean;
    coverLetter?: boolean;
    source?: boolean;
    status?: boolean;
    rejectionReason?: boolean;
    appliedAt?: boolean;
    updatedAt?: boolean;
    jobPosting?: boolean | Prisma.JobPostingDefaultArgs<ExtArgs>;
    stage?: boolean | Prisma.Application$stageArgs<ExtArgs>;
}, ExtArgs["result"]["application"]>;
export type ApplicationSelectScalar = {
    id?: boolean;
    jobPostingId?: boolean;
    stageId?: boolean;
    candidateName?: boolean;
    candidateEmail?: boolean;
    candidatePhone?: boolean;
    cvCloudinaryPublicId?: boolean;
    coverLetter?: boolean;
    source?: boolean;
    status?: boolean;
    rejectionReason?: boolean;
    appliedAt?: boolean;
    updatedAt?: boolean;
};
export type ApplicationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "jobPostingId" | "stageId" | "candidateName" | "candidateEmail" | "candidatePhone" | "cvCloudinaryPublicId" | "coverLetter" | "source" | "status" | "rejectionReason" | "appliedAt" | "updatedAt", ExtArgs["result"]["application"]>;
export type ApplicationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    jobPosting?: boolean | Prisma.JobPostingDefaultArgs<ExtArgs>;
    stage?: boolean | Prisma.Application$stageArgs<ExtArgs>;
    notes?: boolean | Prisma.Application$notesArgs<ExtArgs>;
    interviews?: boolean | Prisma.Application$interviewsArgs<ExtArgs>;
    offers?: boolean | Prisma.Application$offersArgs<ExtArgs>;
    _count?: boolean | Prisma.ApplicationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ApplicationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    jobPosting?: boolean | Prisma.JobPostingDefaultArgs<ExtArgs>;
    stage?: boolean | Prisma.Application$stageArgs<ExtArgs>;
};
export type ApplicationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    jobPosting?: boolean | Prisma.JobPostingDefaultArgs<ExtArgs>;
    stage?: boolean | Prisma.Application$stageArgs<ExtArgs>;
};
export type $ApplicationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Application";
    objects: {
        jobPosting: Prisma.$JobPostingPayload<ExtArgs>;
        stage: Prisma.$PipelineStagePayload<ExtArgs> | null;
        notes: Prisma.$ApplicationNotePayload<ExtArgs>[];
        interviews: Prisma.$InterviewPayload<ExtArgs>[];
        offers: Prisma.$OfferPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        jobPostingId: string;
        stageId: string | null;
        candidateName: string;
        candidateEmail: string;
        candidatePhone: string | null;
        cvCloudinaryPublicId: string | null;
        coverLetter: string | null;
        source: string | null;
        status: $Enums.ApplicationStatus;
        rejectionReason: string | null;
        appliedAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["application"]>;
    composites: {};
};
export type ApplicationGetPayload<S extends boolean | null | undefined | ApplicationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ApplicationPayload, S>;
export type ApplicationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ApplicationCountAggregateInputType | true;
};
export interface ApplicationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Application'];
        meta: {
            name: 'Application';
        };
    };
    findUnique<T extends ApplicationFindUniqueArgs>(args: Prisma.SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ApplicationClient<runtime.Types.Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApplicationClient<runtime.Types.Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ApplicationFindFirstArgs>(args?: Prisma.SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>): Prisma.Prisma__ApplicationClient<runtime.Types.Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApplicationClient<runtime.Types.Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ApplicationFindManyArgs>(args?: Prisma.SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ApplicationCreateArgs>(args: Prisma.SelectSubset<T, ApplicationCreateArgs<ExtArgs>>): Prisma.Prisma__ApplicationClient<runtime.Types.Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ApplicationCreateManyArgs>(args?: Prisma.SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ApplicationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ApplicationDeleteArgs>(args: Prisma.SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>): Prisma.Prisma__ApplicationClient<runtime.Types.Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ApplicationUpdateArgs>(args: Prisma.SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>): Prisma.Prisma__ApplicationClient<runtime.Types.Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ApplicationDeleteManyArgs>(args?: Prisma.SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ApplicationUpdateManyArgs>(args: Prisma.SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ApplicationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ApplicationUpsertArgs>(args: Prisma.SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>): Prisma.Prisma__ApplicationClient<runtime.Types.Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ApplicationCountArgs>(args?: Prisma.Subset<T, ApplicationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ApplicationCountAggregateOutputType> : number>;
    aggregate<T extends ApplicationAggregateArgs>(args: Prisma.Subset<T, ApplicationAggregateArgs>): Prisma.PrismaPromise<GetApplicationAggregateType<T>>;
    groupBy<T extends ApplicationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ApplicationGroupByArgs['orderBy'];
    } : {
        orderBy?: ApplicationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ApplicationFieldRefs;
}
export interface Prisma__ApplicationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    jobPosting<T extends Prisma.JobPostingDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.JobPostingDefaultArgs<ExtArgs>>): Prisma.Prisma__JobPostingClient<runtime.Types.Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    stage<T extends Prisma.Application$stageArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Application$stageArgs<ExtArgs>>): Prisma.Prisma__PipelineStageClient<runtime.Types.Result.GetResult<Prisma.$PipelineStagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    notes<T extends Prisma.Application$notesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Application$notesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApplicationNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    interviews<T extends Prisma.Application$interviewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Application$interviewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    offers<T extends Prisma.Application$offersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Application$offersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ApplicationFieldRefs {
    readonly id: Prisma.FieldRef<"Application", 'String'>;
    readonly jobPostingId: Prisma.FieldRef<"Application", 'String'>;
    readonly stageId: Prisma.FieldRef<"Application", 'String'>;
    readonly candidateName: Prisma.FieldRef<"Application", 'String'>;
    readonly candidateEmail: Prisma.FieldRef<"Application", 'String'>;
    readonly candidatePhone: Prisma.FieldRef<"Application", 'String'>;
    readonly cvCloudinaryPublicId: Prisma.FieldRef<"Application", 'String'>;
    readonly coverLetter: Prisma.FieldRef<"Application", 'String'>;
    readonly source: Prisma.FieldRef<"Application", 'String'>;
    readonly status: Prisma.FieldRef<"Application", 'ApplicationStatus'>;
    readonly rejectionReason: Prisma.FieldRef<"Application", 'String'>;
    readonly appliedAt: Prisma.FieldRef<"Application", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Application", 'DateTime'>;
}
export type ApplicationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApplicationSelect<ExtArgs> | null;
    omit?: Prisma.ApplicationOmit<ExtArgs> | null;
    include?: Prisma.ApplicationInclude<ExtArgs> | null;
    where: Prisma.ApplicationWhereUniqueInput;
};
export type ApplicationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApplicationSelect<ExtArgs> | null;
    omit?: Prisma.ApplicationOmit<ExtArgs> | null;
    include?: Prisma.ApplicationInclude<ExtArgs> | null;
    where: Prisma.ApplicationWhereUniqueInput;
};
export type ApplicationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApplicationSelect<ExtArgs> | null;
    omit?: Prisma.ApplicationOmit<ExtArgs> | null;
    include?: Prisma.ApplicationInclude<ExtArgs> | null;
    where?: Prisma.ApplicationWhereInput;
    orderBy?: Prisma.ApplicationOrderByWithRelationInput | Prisma.ApplicationOrderByWithRelationInput[];
    cursor?: Prisma.ApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ApplicationScalarFieldEnum | Prisma.ApplicationScalarFieldEnum[];
};
export type ApplicationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApplicationSelect<ExtArgs> | null;
    omit?: Prisma.ApplicationOmit<ExtArgs> | null;
    include?: Prisma.ApplicationInclude<ExtArgs> | null;
    where?: Prisma.ApplicationWhereInput;
    orderBy?: Prisma.ApplicationOrderByWithRelationInput | Prisma.ApplicationOrderByWithRelationInput[];
    cursor?: Prisma.ApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ApplicationScalarFieldEnum | Prisma.ApplicationScalarFieldEnum[];
};
export type ApplicationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApplicationSelect<ExtArgs> | null;
    omit?: Prisma.ApplicationOmit<ExtArgs> | null;
    include?: Prisma.ApplicationInclude<ExtArgs> | null;
    where?: Prisma.ApplicationWhereInput;
    orderBy?: Prisma.ApplicationOrderByWithRelationInput | Prisma.ApplicationOrderByWithRelationInput[];
    cursor?: Prisma.ApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ApplicationScalarFieldEnum | Prisma.ApplicationScalarFieldEnum[];
};
export type ApplicationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApplicationSelect<ExtArgs> | null;
    omit?: Prisma.ApplicationOmit<ExtArgs> | null;
    include?: Prisma.ApplicationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ApplicationCreateInput, Prisma.ApplicationUncheckedCreateInput>;
};
export type ApplicationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ApplicationCreateManyInput | Prisma.ApplicationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ApplicationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApplicationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ApplicationOmit<ExtArgs> | null;
    data: Prisma.ApplicationCreateManyInput | Prisma.ApplicationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ApplicationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ApplicationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApplicationSelect<ExtArgs> | null;
    omit?: Prisma.ApplicationOmit<ExtArgs> | null;
    include?: Prisma.ApplicationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ApplicationUpdateInput, Prisma.ApplicationUncheckedUpdateInput>;
    where: Prisma.ApplicationWhereUniqueInput;
};
export type ApplicationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ApplicationUpdateManyMutationInput, Prisma.ApplicationUncheckedUpdateManyInput>;
    where?: Prisma.ApplicationWhereInput;
    limit?: number;
};
export type ApplicationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApplicationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ApplicationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ApplicationUpdateManyMutationInput, Prisma.ApplicationUncheckedUpdateManyInput>;
    where?: Prisma.ApplicationWhereInput;
    limit?: number;
    include?: Prisma.ApplicationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ApplicationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApplicationSelect<ExtArgs> | null;
    omit?: Prisma.ApplicationOmit<ExtArgs> | null;
    include?: Prisma.ApplicationInclude<ExtArgs> | null;
    where: Prisma.ApplicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApplicationCreateInput, Prisma.ApplicationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ApplicationUpdateInput, Prisma.ApplicationUncheckedUpdateInput>;
};
export type ApplicationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApplicationSelect<ExtArgs> | null;
    omit?: Prisma.ApplicationOmit<ExtArgs> | null;
    include?: Prisma.ApplicationInclude<ExtArgs> | null;
    where: Prisma.ApplicationWhereUniqueInput;
};
export type ApplicationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApplicationWhereInput;
    limit?: number;
};
export type Application$stageArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PipelineStageSelect<ExtArgs> | null;
    omit?: Prisma.PipelineStageOmit<ExtArgs> | null;
    include?: Prisma.PipelineStageInclude<ExtArgs> | null;
    where?: Prisma.PipelineStageWhereInput;
};
export type Application$notesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApplicationNoteSelect<ExtArgs> | null;
    omit?: Prisma.ApplicationNoteOmit<ExtArgs> | null;
    include?: Prisma.ApplicationNoteInclude<ExtArgs> | null;
    where?: Prisma.ApplicationNoteWhereInput;
    orderBy?: Prisma.ApplicationNoteOrderByWithRelationInput | Prisma.ApplicationNoteOrderByWithRelationInput[];
    cursor?: Prisma.ApplicationNoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ApplicationNoteScalarFieldEnum | Prisma.ApplicationNoteScalarFieldEnum[];
};
export type Application$interviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Application$offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OfferSelect<ExtArgs> | null;
    omit?: Prisma.OfferOmit<ExtArgs> | null;
    include?: Prisma.OfferInclude<ExtArgs> | null;
    where?: Prisma.OfferWhereInput;
    orderBy?: Prisma.OfferOrderByWithRelationInput | Prisma.OfferOrderByWithRelationInput[];
    cursor?: Prisma.OfferWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OfferScalarFieldEnum | Prisma.OfferScalarFieldEnum[];
};
export type ApplicationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApplicationSelect<ExtArgs> | null;
    omit?: Prisma.ApplicationOmit<ExtArgs> | null;
    include?: Prisma.ApplicationInclude<ExtArgs> | null;
};
