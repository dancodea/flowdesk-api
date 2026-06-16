import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type GoalCheckinModel = runtime.Types.Result.DefaultSelection<Prisma.$GoalCheckinPayload>;
export type AggregateGoalCheckin = {
    _count: GoalCheckinCountAggregateOutputType | null;
    _avg: GoalCheckinAvgAggregateOutputType | null;
    _sum: GoalCheckinSumAggregateOutputType | null;
    _min: GoalCheckinMinAggregateOutputType | null;
    _max: GoalCheckinMaxAggregateOutputType | null;
};
export type GoalCheckinAvgAggregateOutputType = {
    progress: runtime.Decimal | null;
};
export type GoalCheckinSumAggregateOutputType = {
    progress: runtime.Decimal | null;
};
export type GoalCheckinMinAggregateOutputType = {
    id: string | null;
    goalId: string | null;
    progress: runtime.Decimal | null;
    comment: string | null;
    checkedInBy: string | null;
    createdAt: Date | null;
};
export type GoalCheckinMaxAggregateOutputType = {
    id: string | null;
    goalId: string | null;
    progress: runtime.Decimal | null;
    comment: string | null;
    checkedInBy: string | null;
    createdAt: Date | null;
};
export type GoalCheckinCountAggregateOutputType = {
    id: number;
    goalId: number;
    progress: number;
    comment: number;
    checkedInBy: number;
    createdAt: number;
    _all: number;
};
export type GoalCheckinAvgAggregateInputType = {
    progress?: true;
};
export type GoalCheckinSumAggregateInputType = {
    progress?: true;
};
export type GoalCheckinMinAggregateInputType = {
    id?: true;
    goalId?: true;
    progress?: true;
    comment?: true;
    checkedInBy?: true;
    createdAt?: true;
};
export type GoalCheckinMaxAggregateInputType = {
    id?: true;
    goalId?: true;
    progress?: true;
    comment?: true;
    checkedInBy?: true;
    createdAt?: true;
};
export type GoalCheckinCountAggregateInputType = {
    id?: true;
    goalId?: true;
    progress?: true;
    comment?: true;
    checkedInBy?: true;
    createdAt?: true;
    _all?: true;
};
export type GoalCheckinAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GoalCheckinWhereInput;
    orderBy?: Prisma.GoalCheckinOrderByWithRelationInput | Prisma.GoalCheckinOrderByWithRelationInput[];
    cursor?: Prisma.GoalCheckinWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | GoalCheckinCountAggregateInputType;
    _avg?: GoalCheckinAvgAggregateInputType;
    _sum?: GoalCheckinSumAggregateInputType;
    _min?: GoalCheckinMinAggregateInputType;
    _max?: GoalCheckinMaxAggregateInputType;
};
export type GetGoalCheckinAggregateType<T extends GoalCheckinAggregateArgs> = {
    [P in keyof T & keyof AggregateGoalCheckin]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGoalCheckin[P]> : Prisma.GetScalarType<T[P], AggregateGoalCheckin[P]>;
};
export type GoalCheckinGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GoalCheckinWhereInput;
    orderBy?: Prisma.GoalCheckinOrderByWithAggregationInput | Prisma.GoalCheckinOrderByWithAggregationInput[];
    by: Prisma.GoalCheckinScalarFieldEnum[] | Prisma.GoalCheckinScalarFieldEnum;
    having?: Prisma.GoalCheckinScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GoalCheckinCountAggregateInputType | true;
    _avg?: GoalCheckinAvgAggregateInputType;
    _sum?: GoalCheckinSumAggregateInputType;
    _min?: GoalCheckinMinAggregateInputType;
    _max?: GoalCheckinMaxAggregateInputType;
};
export type GoalCheckinGroupByOutputType = {
    id: string;
    goalId: string;
    progress: runtime.Decimal;
    comment: string | null;
    checkedInBy: string | null;
    createdAt: Date;
    _count: GoalCheckinCountAggregateOutputType | null;
    _avg: GoalCheckinAvgAggregateOutputType | null;
    _sum: GoalCheckinSumAggregateOutputType | null;
    _min: GoalCheckinMinAggregateOutputType | null;
    _max: GoalCheckinMaxAggregateOutputType | null;
};
export type GetGoalCheckinGroupByPayload<T extends GoalCheckinGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GoalCheckinGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GoalCheckinGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GoalCheckinGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GoalCheckinGroupByOutputType[P]>;
}>>;
export type GoalCheckinWhereInput = {
    AND?: Prisma.GoalCheckinWhereInput | Prisma.GoalCheckinWhereInput[];
    OR?: Prisma.GoalCheckinWhereInput[];
    NOT?: Prisma.GoalCheckinWhereInput | Prisma.GoalCheckinWhereInput[];
    id?: Prisma.UuidFilter<"GoalCheckin"> | string;
    goalId?: Prisma.UuidFilter<"GoalCheckin"> | string;
    progress?: Prisma.DecimalFilter<"GoalCheckin"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    comment?: Prisma.StringNullableFilter<"GoalCheckin"> | string | null;
    checkedInBy?: Prisma.UuidNullableFilter<"GoalCheckin"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"GoalCheckin"> | Date | string;
    goal?: Prisma.XOR<Prisma.GoalScalarRelationFilter, Prisma.GoalWhereInput>;
};
export type GoalCheckinOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    goalId?: Prisma.SortOrder;
    progress?: Prisma.SortOrder;
    comment?: Prisma.SortOrderInput | Prisma.SortOrder;
    checkedInBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    goal?: Prisma.GoalOrderByWithRelationInput;
};
export type GoalCheckinWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.GoalCheckinWhereInput | Prisma.GoalCheckinWhereInput[];
    OR?: Prisma.GoalCheckinWhereInput[];
    NOT?: Prisma.GoalCheckinWhereInput | Prisma.GoalCheckinWhereInput[];
    goalId?: Prisma.UuidFilter<"GoalCheckin"> | string;
    progress?: Prisma.DecimalFilter<"GoalCheckin"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    comment?: Prisma.StringNullableFilter<"GoalCheckin"> | string | null;
    checkedInBy?: Prisma.UuidNullableFilter<"GoalCheckin"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"GoalCheckin"> | Date | string;
    goal?: Prisma.XOR<Prisma.GoalScalarRelationFilter, Prisma.GoalWhereInput>;
}, "id">;
export type GoalCheckinOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    goalId?: Prisma.SortOrder;
    progress?: Prisma.SortOrder;
    comment?: Prisma.SortOrderInput | Prisma.SortOrder;
    checkedInBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.GoalCheckinCountOrderByAggregateInput;
    _avg?: Prisma.GoalCheckinAvgOrderByAggregateInput;
    _max?: Prisma.GoalCheckinMaxOrderByAggregateInput;
    _min?: Prisma.GoalCheckinMinOrderByAggregateInput;
    _sum?: Prisma.GoalCheckinSumOrderByAggregateInput;
};
export type GoalCheckinScalarWhereWithAggregatesInput = {
    AND?: Prisma.GoalCheckinScalarWhereWithAggregatesInput | Prisma.GoalCheckinScalarWhereWithAggregatesInput[];
    OR?: Prisma.GoalCheckinScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GoalCheckinScalarWhereWithAggregatesInput | Prisma.GoalCheckinScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"GoalCheckin"> | string;
    goalId?: Prisma.UuidWithAggregatesFilter<"GoalCheckin"> | string;
    progress?: Prisma.DecimalWithAggregatesFilter<"GoalCheckin"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    comment?: Prisma.StringNullableWithAggregatesFilter<"GoalCheckin"> | string | null;
    checkedInBy?: Prisma.UuidNullableWithAggregatesFilter<"GoalCheckin"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"GoalCheckin"> | Date | string;
};
export type GoalCheckinCreateInput = {
    id?: string;
    progress: runtime.Decimal | runtime.DecimalJsLike | number | string;
    comment?: string | null;
    checkedInBy?: string | null;
    createdAt?: Date | string;
    goal: Prisma.GoalCreateNestedOneWithoutCheckinsInput;
};
export type GoalCheckinUncheckedCreateInput = {
    id?: string;
    goalId: string;
    progress: runtime.Decimal | runtime.DecimalJsLike | number | string;
    comment?: string | null;
    checkedInBy?: string | null;
    createdAt?: Date | string;
};
export type GoalCheckinUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    progress?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedInBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    goal?: Prisma.GoalUpdateOneRequiredWithoutCheckinsNestedInput;
};
export type GoalCheckinUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    goalId?: Prisma.StringFieldUpdateOperationsInput | string;
    progress?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedInBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GoalCheckinCreateManyInput = {
    id?: string;
    goalId: string;
    progress: runtime.Decimal | runtime.DecimalJsLike | number | string;
    comment?: string | null;
    checkedInBy?: string | null;
    createdAt?: Date | string;
};
export type GoalCheckinUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    progress?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedInBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GoalCheckinUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    goalId?: Prisma.StringFieldUpdateOperationsInput | string;
    progress?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedInBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GoalCheckinListRelationFilter = {
    every?: Prisma.GoalCheckinWhereInput;
    some?: Prisma.GoalCheckinWhereInput;
    none?: Prisma.GoalCheckinWhereInput;
};
export type GoalCheckinOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type GoalCheckinCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    goalId?: Prisma.SortOrder;
    progress?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    checkedInBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type GoalCheckinAvgOrderByAggregateInput = {
    progress?: Prisma.SortOrder;
};
export type GoalCheckinMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    goalId?: Prisma.SortOrder;
    progress?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    checkedInBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type GoalCheckinMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    goalId?: Prisma.SortOrder;
    progress?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    checkedInBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type GoalCheckinSumOrderByAggregateInput = {
    progress?: Prisma.SortOrder;
};
export type GoalCheckinCreateNestedManyWithoutGoalInput = {
    create?: Prisma.XOR<Prisma.GoalCheckinCreateWithoutGoalInput, Prisma.GoalCheckinUncheckedCreateWithoutGoalInput> | Prisma.GoalCheckinCreateWithoutGoalInput[] | Prisma.GoalCheckinUncheckedCreateWithoutGoalInput[];
    connectOrCreate?: Prisma.GoalCheckinCreateOrConnectWithoutGoalInput | Prisma.GoalCheckinCreateOrConnectWithoutGoalInput[];
    createMany?: Prisma.GoalCheckinCreateManyGoalInputEnvelope;
    connect?: Prisma.GoalCheckinWhereUniqueInput | Prisma.GoalCheckinWhereUniqueInput[];
};
export type GoalCheckinUncheckedCreateNestedManyWithoutGoalInput = {
    create?: Prisma.XOR<Prisma.GoalCheckinCreateWithoutGoalInput, Prisma.GoalCheckinUncheckedCreateWithoutGoalInput> | Prisma.GoalCheckinCreateWithoutGoalInput[] | Prisma.GoalCheckinUncheckedCreateWithoutGoalInput[];
    connectOrCreate?: Prisma.GoalCheckinCreateOrConnectWithoutGoalInput | Prisma.GoalCheckinCreateOrConnectWithoutGoalInput[];
    createMany?: Prisma.GoalCheckinCreateManyGoalInputEnvelope;
    connect?: Prisma.GoalCheckinWhereUniqueInput | Prisma.GoalCheckinWhereUniqueInput[];
};
export type GoalCheckinUpdateManyWithoutGoalNestedInput = {
    create?: Prisma.XOR<Prisma.GoalCheckinCreateWithoutGoalInput, Prisma.GoalCheckinUncheckedCreateWithoutGoalInput> | Prisma.GoalCheckinCreateWithoutGoalInput[] | Prisma.GoalCheckinUncheckedCreateWithoutGoalInput[];
    connectOrCreate?: Prisma.GoalCheckinCreateOrConnectWithoutGoalInput | Prisma.GoalCheckinCreateOrConnectWithoutGoalInput[];
    upsert?: Prisma.GoalCheckinUpsertWithWhereUniqueWithoutGoalInput | Prisma.GoalCheckinUpsertWithWhereUniqueWithoutGoalInput[];
    createMany?: Prisma.GoalCheckinCreateManyGoalInputEnvelope;
    set?: Prisma.GoalCheckinWhereUniqueInput | Prisma.GoalCheckinWhereUniqueInput[];
    disconnect?: Prisma.GoalCheckinWhereUniqueInput | Prisma.GoalCheckinWhereUniqueInput[];
    delete?: Prisma.GoalCheckinWhereUniqueInput | Prisma.GoalCheckinWhereUniqueInput[];
    connect?: Prisma.GoalCheckinWhereUniqueInput | Prisma.GoalCheckinWhereUniqueInput[];
    update?: Prisma.GoalCheckinUpdateWithWhereUniqueWithoutGoalInput | Prisma.GoalCheckinUpdateWithWhereUniqueWithoutGoalInput[];
    updateMany?: Prisma.GoalCheckinUpdateManyWithWhereWithoutGoalInput | Prisma.GoalCheckinUpdateManyWithWhereWithoutGoalInput[];
    deleteMany?: Prisma.GoalCheckinScalarWhereInput | Prisma.GoalCheckinScalarWhereInput[];
};
export type GoalCheckinUncheckedUpdateManyWithoutGoalNestedInput = {
    create?: Prisma.XOR<Prisma.GoalCheckinCreateWithoutGoalInput, Prisma.GoalCheckinUncheckedCreateWithoutGoalInput> | Prisma.GoalCheckinCreateWithoutGoalInput[] | Prisma.GoalCheckinUncheckedCreateWithoutGoalInput[];
    connectOrCreate?: Prisma.GoalCheckinCreateOrConnectWithoutGoalInput | Prisma.GoalCheckinCreateOrConnectWithoutGoalInput[];
    upsert?: Prisma.GoalCheckinUpsertWithWhereUniqueWithoutGoalInput | Prisma.GoalCheckinUpsertWithWhereUniqueWithoutGoalInput[];
    createMany?: Prisma.GoalCheckinCreateManyGoalInputEnvelope;
    set?: Prisma.GoalCheckinWhereUniqueInput | Prisma.GoalCheckinWhereUniqueInput[];
    disconnect?: Prisma.GoalCheckinWhereUniqueInput | Prisma.GoalCheckinWhereUniqueInput[];
    delete?: Prisma.GoalCheckinWhereUniqueInput | Prisma.GoalCheckinWhereUniqueInput[];
    connect?: Prisma.GoalCheckinWhereUniqueInput | Prisma.GoalCheckinWhereUniqueInput[];
    update?: Prisma.GoalCheckinUpdateWithWhereUniqueWithoutGoalInput | Prisma.GoalCheckinUpdateWithWhereUniqueWithoutGoalInput[];
    updateMany?: Prisma.GoalCheckinUpdateManyWithWhereWithoutGoalInput | Prisma.GoalCheckinUpdateManyWithWhereWithoutGoalInput[];
    deleteMany?: Prisma.GoalCheckinScalarWhereInput | Prisma.GoalCheckinScalarWhereInput[];
};
export type GoalCheckinCreateWithoutGoalInput = {
    id?: string;
    progress: runtime.Decimal | runtime.DecimalJsLike | number | string;
    comment?: string | null;
    checkedInBy?: string | null;
    createdAt?: Date | string;
};
export type GoalCheckinUncheckedCreateWithoutGoalInput = {
    id?: string;
    progress: runtime.Decimal | runtime.DecimalJsLike | number | string;
    comment?: string | null;
    checkedInBy?: string | null;
    createdAt?: Date | string;
};
export type GoalCheckinCreateOrConnectWithoutGoalInput = {
    where: Prisma.GoalCheckinWhereUniqueInput;
    create: Prisma.XOR<Prisma.GoalCheckinCreateWithoutGoalInput, Prisma.GoalCheckinUncheckedCreateWithoutGoalInput>;
};
export type GoalCheckinCreateManyGoalInputEnvelope = {
    data: Prisma.GoalCheckinCreateManyGoalInput | Prisma.GoalCheckinCreateManyGoalInput[];
    skipDuplicates?: boolean;
};
export type GoalCheckinUpsertWithWhereUniqueWithoutGoalInput = {
    where: Prisma.GoalCheckinWhereUniqueInput;
    update: Prisma.XOR<Prisma.GoalCheckinUpdateWithoutGoalInput, Prisma.GoalCheckinUncheckedUpdateWithoutGoalInput>;
    create: Prisma.XOR<Prisma.GoalCheckinCreateWithoutGoalInput, Prisma.GoalCheckinUncheckedCreateWithoutGoalInput>;
};
export type GoalCheckinUpdateWithWhereUniqueWithoutGoalInput = {
    where: Prisma.GoalCheckinWhereUniqueInput;
    data: Prisma.XOR<Prisma.GoalCheckinUpdateWithoutGoalInput, Prisma.GoalCheckinUncheckedUpdateWithoutGoalInput>;
};
export type GoalCheckinUpdateManyWithWhereWithoutGoalInput = {
    where: Prisma.GoalCheckinScalarWhereInput;
    data: Prisma.XOR<Prisma.GoalCheckinUpdateManyMutationInput, Prisma.GoalCheckinUncheckedUpdateManyWithoutGoalInput>;
};
export type GoalCheckinScalarWhereInput = {
    AND?: Prisma.GoalCheckinScalarWhereInput | Prisma.GoalCheckinScalarWhereInput[];
    OR?: Prisma.GoalCheckinScalarWhereInput[];
    NOT?: Prisma.GoalCheckinScalarWhereInput | Prisma.GoalCheckinScalarWhereInput[];
    id?: Prisma.UuidFilter<"GoalCheckin"> | string;
    goalId?: Prisma.UuidFilter<"GoalCheckin"> | string;
    progress?: Prisma.DecimalFilter<"GoalCheckin"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    comment?: Prisma.StringNullableFilter<"GoalCheckin"> | string | null;
    checkedInBy?: Prisma.UuidNullableFilter<"GoalCheckin"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"GoalCheckin"> | Date | string;
};
export type GoalCheckinCreateManyGoalInput = {
    id?: string;
    progress: runtime.Decimal | runtime.DecimalJsLike | number | string;
    comment?: string | null;
    checkedInBy?: string | null;
    createdAt?: Date | string;
};
export type GoalCheckinUpdateWithoutGoalInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    progress?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedInBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GoalCheckinUncheckedUpdateWithoutGoalInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    progress?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedInBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GoalCheckinUncheckedUpdateManyWithoutGoalInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    progress?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    checkedInBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GoalCheckinSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    goalId?: boolean;
    progress?: boolean;
    comment?: boolean;
    checkedInBy?: boolean;
    createdAt?: boolean;
    goal?: boolean | Prisma.GoalDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["goalCheckin"]>;
export type GoalCheckinSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    goalId?: boolean;
    progress?: boolean;
    comment?: boolean;
    checkedInBy?: boolean;
    createdAt?: boolean;
    goal?: boolean | Prisma.GoalDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["goalCheckin"]>;
export type GoalCheckinSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    goalId?: boolean;
    progress?: boolean;
    comment?: boolean;
    checkedInBy?: boolean;
    createdAt?: boolean;
    goal?: boolean | Prisma.GoalDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["goalCheckin"]>;
export type GoalCheckinSelectScalar = {
    id?: boolean;
    goalId?: boolean;
    progress?: boolean;
    comment?: boolean;
    checkedInBy?: boolean;
    createdAt?: boolean;
};
export type GoalCheckinOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "goalId" | "progress" | "comment" | "checkedInBy" | "createdAt", ExtArgs["result"]["goalCheckin"]>;
export type GoalCheckinInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    goal?: boolean | Prisma.GoalDefaultArgs<ExtArgs>;
};
export type GoalCheckinIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    goal?: boolean | Prisma.GoalDefaultArgs<ExtArgs>;
};
export type GoalCheckinIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    goal?: boolean | Prisma.GoalDefaultArgs<ExtArgs>;
};
export type $GoalCheckinPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "GoalCheckin";
    objects: {
        goal: Prisma.$GoalPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        goalId: string;
        progress: runtime.Decimal;
        comment: string | null;
        checkedInBy: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["goalCheckin"]>;
    composites: {};
};
export type GoalCheckinGetPayload<S extends boolean | null | undefined | GoalCheckinDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GoalCheckinPayload, S>;
export type GoalCheckinCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GoalCheckinFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GoalCheckinCountAggregateInputType | true;
};
export interface GoalCheckinDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['GoalCheckin'];
        meta: {
            name: 'GoalCheckin';
        };
    };
    findUnique<T extends GoalCheckinFindUniqueArgs>(args: Prisma.SelectSubset<T, GoalCheckinFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GoalCheckinClient<runtime.Types.Result.GetResult<Prisma.$GoalCheckinPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends GoalCheckinFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GoalCheckinFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GoalCheckinClient<runtime.Types.Result.GetResult<Prisma.$GoalCheckinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends GoalCheckinFindFirstArgs>(args?: Prisma.SelectSubset<T, GoalCheckinFindFirstArgs<ExtArgs>>): Prisma.Prisma__GoalCheckinClient<runtime.Types.Result.GetResult<Prisma.$GoalCheckinPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends GoalCheckinFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GoalCheckinFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GoalCheckinClient<runtime.Types.Result.GetResult<Prisma.$GoalCheckinPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends GoalCheckinFindManyArgs>(args?: Prisma.SelectSubset<T, GoalCheckinFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GoalCheckinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends GoalCheckinCreateArgs>(args: Prisma.SelectSubset<T, GoalCheckinCreateArgs<ExtArgs>>): Prisma.Prisma__GoalCheckinClient<runtime.Types.Result.GetResult<Prisma.$GoalCheckinPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends GoalCheckinCreateManyArgs>(args?: Prisma.SelectSubset<T, GoalCheckinCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends GoalCheckinCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GoalCheckinCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GoalCheckinPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends GoalCheckinDeleteArgs>(args: Prisma.SelectSubset<T, GoalCheckinDeleteArgs<ExtArgs>>): Prisma.Prisma__GoalCheckinClient<runtime.Types.Result.GetResult<Prisma.$GoalCheckinPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends GoalCheckinUpdateArgs>(args: Prisma.SelectSubset<T, GoalCheckinUpdateArgs<ExtArgs>>): Prisma.Prisma__GoalCheckinClient<runtime.Types.Result.GetResult<Prisma.$GoalCheckinPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends GoalCheckinDeleteManyArgs>(args?: Prisma.SelectSubset<T, GoalCheckinDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends GoalCheckinUpdateManyArgs>(args: Prisma.SelectSubset<T, GoalCheckinUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends GoalCheckinUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GoalCheckinUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GoalCheckinPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends GoalCheckinUpsertArgs>(args: Prisma.SelectSubset<T, GoalCheckinUpsertArgs<ExtArgs>>): Prisma.Prisma__GoalCheckinClient<runtime.Types.Result.GetResult<Prisma.$GoalCheckinPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends GoalCheckinCountArgs>(args?: Prisma.Subset<T, GoalCheckinCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GoalCheckinCountAggregateOutputType> : number>;
    aggregate<T extends GoalCheckinAggregateArgs>(args: Prisma.Subset<T, GoalCheckinAggregateArgs>): Prisma.PrismaPromise<GetGoalCheckinAggregateType<T>>;
    groupBy<T extends GoalCheckinGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GoalCheckinGroupByArgs['orderBy'];
    } : {
        orderBy?: GoalCheckinGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GoalCheckinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoalCheckinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: GoalCheckinFieldRefs;
}
export interface Prisma__GoalCheckinClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    goal<T extends Prisma.GoalDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GoalDefaultArgs<ExtArgs>>): Prisma.Prisma__GoalClient<runtime.Types.Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface GoalCheckinFieldRefs {
    readonly id: Prisma.FieldRef<"GoalCheckin", 'String'>;
    readonly goalId: Prisma.FieldRef<"GoalCheckin", 'String'>;
    readonly progress: Prisma.FieldRef<"GoalCheckin", 'Decimal'>;
    readonly comment: Prisma.FieldRef<"GoalCheckin", 'String'>;
    readonly checkedInBy: Prisma.FieldRef<"GoalCheckin", 'String'>;
    readonly createdAt: Prisma.FieldRef<"GoalCheckin", 'DateTime'>;
}
export type GoalCheckinFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoalCheckinSelect<ExtArgs> | null;
    omit?: Prisma.GoalCheckinOmit<ExtArgs> | null;
    include?: Prisma.GoalCheckinInclude<ExtArgs> | null;
    where: Prisma.GoalCheckinWhereUniqueInput;
};
export type GoalCheckinFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoalCheckinSelect<ExtArgs> | null;
    omit?: Prisma.GoalCheckinOmit<ExtArgs> | null;
    include?: Prisma.GoalCheckinInclude<ExtArgs> | null;
    where: Prisma.GoalCheckinWhereUniqueInput;
};
export type GoalCheckinFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoalCheckinSelect<ExtArgs> | null;
    omit?: Prisma.GoalCheckinOmit<ExtArgs> | null;
    include?: Prisma.GoalCheckinInclude<ExtArgs> | null;
    where?: Prisma.GoalCheckinWhereInput;
    orderBy?: Prisma.GoalCheckinOrderByWithRelationInput | Prisma.GoalCheckinOrderByWithRelationInput[];
    cursor?: Prisma.GoalCheckinWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GoalCheckinScalarFieldEnum | Prisma.GoalCheckinScalarFieldEnum[];
};
export type GoalCheckinFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoalCheckinSelect<ExtArgs> | null;
    omit?: Prisma.GoalCheckinOmit<ExtArgs> | null;
    include?: Prisma.GoalCheckinInclude<ExtArgs> | null;
    where?: Prisma.GoalCheckinWhereInput;
    orderBy?: Prisma.GoalCheckinOrderByWithRelationInput | Prisma.GoalCheckinOrderByWithRelationInput[];
    cursor?: Prisma.GoalCheckinWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GoalCheckinScalarFieldEnum | Prisma.GoalCheckinScalarFieldEnum[];
};
export type GoalCheckinFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoalCheckinSelect<ExtArgs> | null;
    omit?: Prisma.GoalCheckinOmit<ExtArgs> | null;
    include?: Prisma.GoalCheckinInclude<ExtArgs> | null;
    where?: Prisma.GoalCheckinWhereInput;
    orderBy?: Prisma.GoalCheckinOrderByWithRelationInput | Prisma.GoalCheckinOrderByWithRelationInput[];
    cursor?: Prisma.GoalCheckinWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GoalCheckinScalarFieldEnum | Prisma.GoalCheckinScalarFieldEnum[];
};
export type GoalCheckinCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoalCheckinSelect<ExtArgs> | null;
    omit?: Prisma.GoalCheckinOmit<ExtArgs> | null;
    include?: Prisma.GoalCheckinInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GoalCheckinCreateInput, Prisma.GoalCheckinUncheckedCreateInput>;
};
export type GoalCheckinCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.GoalCheckinCreateManyInput | Prisma.GoalCheckinCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GoalCheckinCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoalCheckinSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GoalCheckinOmit<ExtArgs> | null;
    data: Prisma.GoalCheckinCreateManyInput | Prisma.GoalCheckinCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.GoalCheckinIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type GoalCheckinUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoalCheckinSelect<ExtArgs> | null;
    omit?: Prisma.GoalCheckinOmit<ExtArgs> | null;
    include?: Prisma.GoalCheckinInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GoalCheckinUpdateInput, Prisma.GoalCheckinUncheckedUpdateInput>;
    where: Prisma.GoalCheckinWhereUniqueInput;
};
export type GoalCheckinUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.GoalCheckinUpdateManyMutationInput, Prisma.GoalCheckinUncheckedUpdateManyInput>;
    where?: Prisma.GoalCheckinWhereInput;
    limit?: number;
};
export type GoalCheckinUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoalCheckinSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GoalCheckinOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GoalCheckinUpdateManyMutationInput, Prisma.GoalCheckinUncheckedUpdateManyInput>;
    where?: Prisma.GoalCheckinWhereInput;
    limit?: number;
    include?: Prisma.GoalCheckinIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type GoalCheckinUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoalCheckinSelect<ExtArgs> | null;
    omit?: Prisma.GoalCheckinOmit<ExtArgs> | null;
    include?: Prisma.GoalCheckinInclude<ExtArgs> | null;
    where: Prisma.GoalCheckinWhereUniqueInput;
    create: Prisma.XOR<Prisma.GoalCheckinCreateInput, Prisma.GoalCheckinUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.GoalCheckinUpdateInput, Prisma.GoalCheckinUncheckedUpdateInput>;
};
export type GoalCheckinDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoalCheckinSelect<ExtArgs> | null;
    omit?: Prisma.GoalCheckinOmit<ExtArgs> | null;
    include?: Prisma.GoalCheckinInclude<ExtArgs> | null;
    where: Prisma.GoalCheckinWhereUniqueInput;
};
export type GoalCheckinDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GoalCheckinWhereInput;
    limit?: number;
};
export type GoalCheckinDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoalCheckinSelect<ExtArgs> | null;
    omit?: Prisma.GoalCheckinOmit<ExtArgs> | null;
    include?: Prisma.GoalCheckinInclude<ExtArgs> | null;
};
