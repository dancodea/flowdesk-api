import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InterviewPanelistModel = runtime.Types.Result.DefaultSelection<Prisma.$InterviewPanelistPayload>;
export type AggregateInterviewPanelist = {
    _count: InterviewPanelistCountAggregateOutputType | null;
    _min: InterviewPanelistMinAggregateOutputType | null;
    _max: InterviewPanelistMaxAggregateOutputType | null;
};
export type InterviewPanelistMinAggregateOutputType = {
    interviewId: string | null;
    employeeId: string | null;
};
export type InterviewPanelistMaxAggregateOutputType = {
    interviewId: string | null;
    employeeId: string | null;
};
export type InterviewPanelistCountAggregateOutputType = {
    interviewId: number;
    employeeId: number;
    _all: number;
};
export type InterviewPanelistMinAggregateInputType = {
    interviewId?: true;
    employeeId?: true;
};
export type InterviewPanelistMaxAggregateInputType = {
    interviewId?: true;
    employeeId?: true;
};
export type InterviewPanelistCountAggregateInputType = {
    interviewId?: true;
    employeeId?: true;
    _all?: true;
};
export type InterviewPanelistAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterviewPanelistWhereInput;
    orderBy?: Prisma.InterviewPanelistOrderByWithRelationInput | Prisma.InterviewPanelistOrderByWithRelationInput[];
    cursor?: Prisma.InterviewPanelistWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InterviewPanelistCountAggregateInputType;
    _min?: InterviewPanelistMinAggregateInputType;
    _max?: InterviewPanelistMaxAggregateInputType;
};
export type GetInterviewPanelistAggregateType<T extends InterviewPanelistAggregateArgs> = {
    [P in keyof T & keyof AggregateInterviewPanelist]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInterviewPanelist[P]> : Prisma.GetScalarType<T[P], AggregateInterviewPanelist[P]>;
};
export type InterviewPanelistGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterviewPanelistWhereInput;
    orderBy?: Prisma.InterviewPanelistOrderByWithAggregationInput | Prisma.InterviewPanelistOrderByWithAggregationInput[];
    by: Prisma.InterviewPanelistScalarFieldEnum[] | Prisma.InterviewPanelistScalarFieldEnum;
    having?: Prisma.InterviewPanelistScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InterviewPanelistCountAggregateInputType | true;
    _min?: InterviewPanelistMinAggregateInputType;
    _max?: InterviewPanelistMaxAggregateInputType;
};
export type InterviewPanelistGroupByOutputType = {
    interviewId: string;
    employeeId: string;
    _count: InterviewPanelistCountAggregateOutputType | null;
    _min: InterviewPanelistMinAggregateOutputType | null;
    _max: InterviewPanelistMaxAggregateOutputType | null;
};
export type GetInterviewPanelistGroupByPayload<T extends InterviewPanelistGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InterviewPanelistGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InterviewPanelistGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InterviewPanelistGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InterviewPanelistGroupByOutputType[P]>;
}>>;
export type InterviewPanelistWhereInput = {
    AND?: Prisma.InterviewPanelistWhereInput | Prisma.InterviewPanelistWhereInput[];
    OR?: Prisma.InterviewPanelistWhereInput[];
    NOT?: Prisma.InterviewPanelistWhereInput | Prisma.InterviewPanelistWhereInput[];
    interviewId?: Prisma.UuidFilter<"InterviewPanelist"> | string;
    employeeId?: Prisma.UuidFilter<"InterviewPanelist"> | string;
    interview?: Prisma.XOR<Prisma.InterviewScalarRelationFilter, Prisma.InterviewWhereInput>;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
};
export type InterviewPanelistOrderByWithRelationInput = {
    interviewId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    interview?: Prisma.InterviewOrderByWithRelationInput;
    employee?: Prisma.EmployeeOrderByWithRelationInput;
};
export type InterviewPanelistWhereUniqueInput = Prisma.AtLeast<{
    interviewId_employeeId?: Prisma.InterviewPanelistInterviewIdEmployeeIdCompoundUniqueInput;
    AND?: Prisma.InterviewPanelistWhereInput | Prisma.InterviewPanelistWhereInput[];
    OR?: Prisma.InterviewPanelistWhereInput[];
    NOT?: Prisma.InterviewPanelistWhereInput | Prisma.InterviewPanelistWhereInput[];
    interviewId?: Prisma.UuidFilter<"InterviewPanelist"> | string;
    employeeId?: Prisma.UuidFilter<"InterviewPanelist"> | string;
    interview?: Prisma.XOR<Prisma.InterviewScalarRelationFilter, Prisma.InterviewWhereInput>;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
}, "interviewId_employeeId">;
export type InterviewPanelistOrderByWithAggregationInput = {
    interviewId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    _count?: Prisma.InterviewPanelistCountOrderByAggregateInput;
    _max?: Prisma.InterviewPanelistMaxOrderByAggregateInput;
    _min?: Prisma.InterviewPanelistMinOrderByAggregateInput;
};
export type InterviewPanelistScalarWhereWithAggregatesInput = {
    AND?: Prisma.InterviewPanelistScalarWhereWithAggregatesInput | Prisma.InterviewPanelistScalarWhereWithAggregatesInput[];
    OR?: Prisma.InterviewPanelistScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InterviewPanelistScalarWhereWithAggregatesInput | Prisma.InterviewPanelistScalarWhereWithAggregatesInput[];
    interviewId?: Prisma.UuidWithAggregatesFilter<"InterviewPanelist"> | string;
    employeeId?: Prisma.UuidWithAggregatesFilter<"InterviewPanelist"> | string;
};
export type InterviewPanelistCreateInput = {
    interview: Prisma.InterviewCreateNestedOneWithoutPanelistsInput;
    employee: Prisma.EmployeeCreateNestedOneWithoutInterviewPanelsInput;
};
export type InterviewPanelistUncheckedCreateInput = {
    interviewId: string;
    employeeId: string;
};
export type InterviewPanelistUpdateInput = {
    interview?: Prisma.InterviewUpdateOneRequiredWithoutPanelistsNestedInput;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutInterviewPanelsNestedInput;
};
export type InterviewPanelistUncheckedUpdateInput = {
    interviewId?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type InterviewPanelistCreateManyInput = {
    interviewId: string;
    employeeId: string;
};
export type InterviewPanelistUpdateManyMutationInput = {};
export type InterviewPanelistUncheckedUpdateManyInput = {
    interviewId?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type InterviewPanelistListRelationFilter = {
    every?: Prisma.InterviewPanelistWhereInput;
    some?: Prisma.InterviewPanelistWhereInput;
    none?: Prisma.InterviewPanelistWhereInput;
};
export type InterviewPanelistOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InterviewPanelistInterviewIdEmployeeIdCompoundUniqueInput = {
    interviewId: string;
    employeeId: string;
};
export type InterviewPanelistCountOrderByAggregateInput = {
    interviewId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
};
export type InterviewPanelistMaxOrderByAggregateInput = {
    interviewId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
};
export type InterviewPanelistMinOrderByAggregateInput = {
    interviewId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
};
export type InterviewPanelistCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.InterviewPanelistCreateWithoutEmployeeInput, Prisma.InterviewPanelistUncheckedCreateWithoutEmployeeInput> | Prisma.InterviewPanelistCreateWithoutEmployeeInput[] | Prisma.InterviewPanelistUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.InterviewPanelistCreateOrConnectWithoutEmployeeInput | Prisma.InterviewPanelistCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.InterviewPanelistCreateManyEmployeeInputEnvelope;
    connect?: Prisma.InterviewPanelistWhereUniqueInput | Prisma.InterviewPanelistWhereUniqueInput[];
};
export type InterviewPanelistUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.InterviewPanelistCreateWithoutEmployeeInput, Prisma.InterviewPanelistUncheckedCreateWithoutEmployeeInput> | Prisma.InterviewPanelistCreateWithoutEmployeeInput[] | Prisma.InterviewPanelistUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.InterviewPanelistCreateOrConnectWithoutEmployeeInput | Prisma.InterviewPanelistCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.InterviewPanelistCreateManyEmployeeInputEnvelope;
    connect?: Prisma.InterviewPanelistWhereUniqueInput | Prisma.InterviewPanelistWhereUniqueInput[];
};
export type InterviewPanelistUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.InterviewPanelistCreateWithoutEmployeeInput, Prisma.InterviewPanelistUncheckedCreateWithoutEmployeeInput> | Prisma.InterviewPanelistCreateWithoutEmployeeInput[] | Prisma.InterviewPanelistUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.InterviewPanelistCreateOrConnectWithoutEmployeeInput | Prisma.InterviewPanelistCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.InterviewPanelistUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.InterviewPanelistUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.InterviewPanelistCreateManyEmployeeInputEnvelope;
    set?: Prisma.InterviewPanelistWhereUniqueInput | Prisma.InterviewPanelistWhereUniqueInput[];
    disconnect?: Prisma.InterviewPanelistWhereUniqueInput | Prisma.InterviewPanelistWhereUniqueInput[];
    delete?: Prisma.InterviewPanelistWhereUniqueInput | Prisma.InterviewPanelistWhereUniqueInput[];
    connect?: Prisma.InterviewPanelistWhereUniqueInput | Prisma.InterviewPanelistWhereUniqueInput[];
    update?: Prisma.InterviewPanelistUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.InterviewPanelistUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.InterviewPanelistUpdateManyWithWhereWithoutEmployeeInput | Prisma.InterviewPanelistUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.InterviewPanelistScalarWhereInput | Prisma.InterviewPanelistScalarWhereInput[];
};
export type InterviewPanelistUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.InterviewPanelistCreateWithoutEmployeeInput, Prisma.InterviewPanelistUncheckedCreateWithoutEmployeeInput> | Prisma.InterviewPanelistCreateWithoutEmployeeInput[] | Prisma.InterviewPanelistUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.InterviewPanelistCreateOrConnectWithoutEmployeeInput | Prisma.InterviewPanelistCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.InterviewPanelistUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.InterviewPanelistUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.InterviewPanelistCreateManyEmployeeInputEnvelope;
    set?: Prisma.InterviewPanelistWhereUniqueInput | Prisma.InterviewPanelistWhereUniqueInput[];
    disconnect?: Prisma.InterviewPanelistWhereUniqueInput | Prisma.InterviewPanelistWhereUniqueInput[];
    delete?: Prisma.InterviewPanelistWhereUniqueInput | Prisma.InterviewPanelistWhereUniqueInput[];
    connect?: Prisma.InterviewPanelistWhereUniqueInput | Prisma.InterviewPanelistWhereUniqueInput[];
    update?: Prisma.InterviewPanelistUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.InterviewPanelistUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.InterviewPanelistUpdateManyWithWhereWithoutEmployeeInput | Prisma.InterviewPanelistUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.InterviewPanelistScalarWhereInput | Prisma.InterviewPanelistScalarWhereInput[];
};
export type InterviewPanelistCreateNestedManyWithoutInterviewInput = {
    create?: Prisma.XOR<Prisma.InterviewPanelistCreateWithoutInterviewInput, Prisma.InterviewPanelistUncheckedCreateWithoutInterviewInput> | Prisma.InterviewPanelistCreateWithoutInterviewInput[] | Prisma.InterviewPanelistUncheckedCreateWithoutInterviewInput[];
    connectOrCreate?: Prisma.InterviewPanelistCreateOrConnectWithoutInterviewInput | Prisma.InterviewPanelistCreateOrConnectWithoutInterviewInput[];
    createMany?: Prisma.InterviewPanelistCreateManyInterviewInputEnvelope;
    connect?: Prisma.InterviewPanelistWhereUniqueInput | Prisma.InterviewPanelistWhereUniqueInput[];
};
export type InterviewPanelistUncheckedCreateNestedManyWithoutInterviewInput = {
    create?: Prisma.XOR<Prisma.InterviewPanelistCreateWithoutInterviewInput, Prisma.InterviewPanelistUncheckedCreateWithoutInterviewInput> | Prisma.InterviewPanelistCreateWithoutInterviewInput[] | Prisma.InterviewPanelistUncheckedCreateWithoutInterviewInput[];
    connectOrCreate?: Prisma.InterviewPanelistCreateOrConnectWithoutInterviewInput | Prisma.InterviewPanelistCreateOrConnectWithoutInterviewInput[];
    createMany?: Prisma.InterviewPanelistCreateManyInterviewInputEnvelope;
    connect?: Prisma.InterviewPanelistWhereUniqueInput | Prisma.InterviewPanelistWhereUniqueInput[];
};
export type InterviewPanelistUpdateManyWithoutInterviewNestedInput = {
    create?: Prisma.XOR<Prisma.InterviewPanelistCreateWithoutInterviewInput, Prisma.InterviewPanelistUncheckedCreateWithoutInterviewInput> | Prisma.InterviewPanelistCreateWithoutInterviewInput[] | Prisma.InterviewPanelistUncheckedCreateWithoutInterviewInput[];
    connectOrCreate?: Prisma.InterviewPanelistCreateOrConnectWithoutInterviewInput | Prisma.InterviewPanelistCreateOrConnectWithoutInterviewInput[];
    upsert?: Prisma.InterviewPanelistUpsertWithWhereUniqueWithoutInterviewInput | Prisma.InterviewPanelistUpsertWithWhereUniqueWithoutInterviewInput[];
    createMany?: Prisma.InterviewPanelistCreateManyInterviewInputEnvelope;
    set?: Prisma.InterviewPanelistWhereUniqueInput | Prisma.InterviewPanelistWhereUniqueInput[];
    disconnect?: Prisma.InterviewPanelistWhereUniqueInput | Prisma.InterviewPanelistWhereUniqueInput[];
    delete?: Prisma.InterviewPanelistWhereUniqueInput | Prisma.InterviewPanelistWhereUniqueInput[];
    connect?: Prisma.InterviewPanelistWhereUniqueInput | Prisma.InterviewPanelistWhereUniqueInput[];
    update?: Prisma.InterviewPanelistUpdateWithWhereUniqueWithoutInterviewInput | Prisma.InterviewPanelistUpdateWithWhereUniqueWithoutInterviewInput[];
    updateMany?: Prisma.InterviewPanelistUpdateManyWithWhereWithoutInterviewInput | Prisma.InterviewPanelistUpdateManyWithWhereWithoutInterviewInput[];
    deleteMany?: Prisma.InterviewPanelistScalarWhereInput | Prisma.InterviewPanelistScalarWhereInput[];
};
export type InterviewPanelistUncheckedUpdateManyWithoutInterviewNestedInput = {
    create?: Prisma.XOR<Prisma.InterviewPanelistCreateWithoutInterviewInput, Prisma.InterviewPanelistUncheckedCreateWithoutInterviewInput> | Prisma.InterviewPanelistCreateWithoutInterviewInput[] | Prisma.InterviewPanelistUncheckedCreateWithoutInterviewInput[];
    connectOrCreate?: Prisma.InterviewPanelistCreateOrConnectWithoutInterviewInput | Prisma.InterviewPanelistCreateOrConnectWithoutInterviewInput[];
    upsert?: Prisma.InterviewPanelistUpsertWithWhereUniqueWithoutInterviewInput | Prisma.InterviewPanelistUpsertWithWhereUniqueWithoutInterviewInput[];
    createMany?: Prisma.InterviewPanelistCreateManyInterviewInputEnvelope;
    set?: Prisma.InterviewPanelistWhereUniqueInput | Prisma.InterviewPanelistWhereUniqueInput[];
    disconnect?: Prisma.InterviewPanelistWhereUniqueInput | Prisma.InterviewPanelistWhereUniqueInput[];
    delete?: Prisma.InterviewPanelistWhereUniqueInput | Prisma.InterviewPanelistWhereUniqueInput[];
    connect?: Prisma.InterviewPanelistWhereUniqueInput | Prisma.InterviewPanelistWhereUniqueInput[];
    update?: Prisma.InterviewPanelistUpdateWithWhereUniqueWithoutInterviewInput | Prisma.InterviewPanelistUpdateWithWhereUniqueWithoutInterviewInput[];
    updateMany?: Prisma.InterviewPanelistUpdateManyWithWhereWithoutInterviewInput | Prisma.InterviewPanelistUpdateManyWithWhereWithoutInterviewInput[];
    deleteMany?: Prisma.InterviewPanelistScalarWhereInput | Prisma.InterviewPanelistScalarWhereInput[];
};
export type InterviewPanelistCreateWithoutEmployeeInput = {
    interview: Prisma.InterviewCreateNestedOneWithoutPanelistsInput;
};
export type InterviewPanelistUncheckedCreateWithoutEmployeeInput = {
    interviewId: string;
};
export type InterviewPanelistCreateOrConnectWithoutEmployeeInput = {
    where: Prisma.InterviewPanelistWhereUniqueInput;
    create: Prisma.XOR<Prisma.InterviewPanelistCreateWithoutEmployeeInput, Prisma.InterviewPanelistUncheckedCreateWithoutEmployeeInput>;
};
export type InterviewPanelistCreateManyEmployeeInputEnvelope = {
    data: Prisma.InterviewPanelistCreateManyEmployeeInput | Prisma.InterviewPanelistCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
};
export type InterviewPanelistUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.InterviewPanelistWhereUniqueInput;
    update: Prisma.XOR<Prisma.InterviewPanelistUpdateWithoutEmployeeInput, Prisma.InterviewPanelistUncheckedUpdateWithoutEmployeeInput>;
    create: Prisma.XOR<Prisma.InterviewPanelistCreateWithoutEmployeeInput, Prisma.InterviewPanelistUncheckedCreateWithoutEmployeeInput>;
};
export type InterviewPanelistUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.InterviewPanelistWhereUniqueInput;
    data: Prisma.XOR<Prisma.InterviewPanelistUpdateWithoutEmployeeInput, Prisma.InterviewPanelistUncheckedUpdateWithoutEmployeeInput>;
};
export type InterviewPanelistUpdateManyWithWhereWithoutEmployeeInput = {
    where: Prisma.InterviewPanelistScalarWhereInput;
    data: Prisma.XOR<Prisma.InterviewPanelistUpdateManyMutationInput, Prisma.InterviewPanelistUncheckedUpdateManyWithoutEmployeeInput>;
};
export type InterviewPanelistScalarWhereInput = {
    AND?: Prisma.InterviewPanelistScalarWhereInput | Prisma.InterviewPanelistScalarWhereInput[];
    OR?: Prisma.InterviewPanelistScalarWhereInput[];
    NOT?: Prisma.InterviewPanelistScalarWhereInput | Prisma.InterviewPanelistScalarWhereInput[];
    interviewId?: Prisma.UuidFilter<"InterviewPanelist"> | string;
    employeeId?: Prisma.UuidFilter<"InterviewPanelist"> | string;
};
export type InterviewPanelistCreateWithoutInterviewInput = {
    employee: Prisma.EmployeeCreateNestedOneWithoutInterviewPanelsInput;
};
export type InterviewPanelistUncheckedCreateWithoutInterviewInput = {
    employeeId: string;
};
export type InterviewPanelistCreateOrConnectWithoutInterviewInput = {
    where: Prisma.InterviewPanelistWhereUniqueInput;
    create: Prisma.XOR<Prisma.InterviewPanelistCreateWithoutInterviewInput, Prisma.InterviewPanelistUncheckedCreateWithoutInterviewInput>;
};
export type InterviewPanelistCreateManyInterviewInputEnvelope = {
    data: Prisma.InterviewPanelistCreateManyInterviewInput | Prisma.InterviewPanelistCreateManyInterviewInput[];
    skipDuplicates?: boolean;
};
export type InterviewPanelistUpsertWithWhereUniqueWithoutInterviewInput = {
    where: Prisma.InterviewPanelistWhereUniqueInput;
    update: Prisma.XOR<Prisma.InterviewPanelistUpdateWithoutInterviewInput, Prisma.InterviewPanelistUncheckedUpdateWithoutInterviewInput>;
    create: Prisma.XOR<Prisma.InterviewPanelistCreateWithoutInterviewInput, Prisma.InterviewPanelistUncheckedCreateWithoutInterviewInput>;
};
export type InterviewPanelistUpdateWithWhereUniqueWithoutInterviewInput = {
    where: Prisma.InterviewPanelistWhereUniqueInput;
    data: Prisma.XOR<Prisma.InterviewPanelistUpdateWithoutInterviewInput, Prisma.InterviewPanelistUncheckedUpdateWithoutInterviewInput>;
};
export type InterviewPanelistUpdateManyWithWhereWithoutInterviewInput = {
    where: Prisma.InterviewPanelistScalarWhereInput;
    data: Prisma.XOR<Prisma.InterviewPanelistUpdateManyMutationInput, Prisma.InterviewPanelistUncheckedUpdateManyWithoutInterviewInput>;
};
export type InterviewPanelistCreateManyEmployeeInput = {
    interviewId: string;
};
export type InterviewPanelistUpdateWithoutEmployeeInput = {
    interview?: Prisma.InterviewUpdateOneRequiredWithoutPanelistsNestedInput;
};
export type InterviewPanelistUncheckedUpdateWithoutEmployeeInput = {
    interviewId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type InterviewPanelistUncheckedUpdateManyWithoutEmployeeInput = {
    interviewId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type InterviewPanelistCreateManyInterviewInput = {
    employeeId: string;
};
export type InterviewPanelistUpdateWithoutInterviewInput = {
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutInterviewPanelsNestedInput;
};
export type InterviewPanelistUncheckedUpdateWithoutInterviewInput = {
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type InterviewPanelistUncheckedUpdateManyWithoutInterviewInput = {
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type InterviewPanelistSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    interviewId?: boolean;
    employeeId?: boolean;
    interview?: boolean | Prisma.InterviewDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["interviewPanelist"]>;
export type InterviewPanelistSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    interviewId?: boolean;
    employeeId?: boolean;
    interview?: boolean | Prisma.InterviewDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["interviewPanelist"]>;
export type InterviewPanelistSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    interviewId?: boolean;
    employeeId?: boolean;
    interview?: boolean | Prisma.InterviewDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["interviewPanelist"]>;
export type InterviewPanelistSelectScalar = {
    interviewId?: boolean;
    employeeId?: boolean;
};
export type InterviewPanelistOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"interviewId" | "employeeId", ExtArgs["result"]["interviewPanelist"]>;
export type InterviewPanelistInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    interview?: boolean | Prisma.InterviewDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type InterviewPanelistIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    interview?: boolean | Prisma.InterviewDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type InterviewPanelistIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    interview?: boolean | Prisma.InterviewDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type $InterviewPanelistPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "InterviewPanelist";
    objects: {
        interview: Prisma.$InterviewPayload<ExtArgs>;
        employee: Prisma.$EmployeePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        interviewId: string;
        employeeId: string;
    }, ExtArgs["result"]["interviewPanelist"]>;
    composites: {};
};
export type InterviewPanelistGetPayload<S extends boolean | null | undefined | InterviewPanelistDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InterviewPanelistPayload, S>;
export type InterviewPanelistCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InterviewPanelistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InterviewPanelistCountAggregateInputType | true;
};
export interface InterviewPanelistDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['InterviewPanelist'];
        meta: {
            name: 'InterviewPanelist';
        };
    };
    findUnique<T extends InterviewPanelistFindUniqueArgs>(args: Prisma.SelectSubset<T, InterviewPanelistFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InterviewPanelistClient<runtime.Types.Result.GetResult<Prisma.$InterviewPanelistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InterviewPanelistFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InterviewPanelistFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InterviewPanelistClient<runtime.Types.Result.GetResult<Prisma.$InterviewPanelistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InterviewPanelistFindFirstArgs>(args?: Prisma.SelectSubset<T, InterviewPanelistFindFirstArgs<ExtArgs>>): Prisma.Prisma__InterviewPanelistClient<runtime.Types.Result.GetResult<Prisma.$InterviewPanelistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InterviewPanelistFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InterviewPanelistFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InterviewPanelistClient<runtime.Types.Result.GetResult<Prisma.$InterviewPanelistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InterviewPanelistFindManyArgs>(args?: Prisma.SelectSubset<T, InterviewPanelistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewPanelistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InterviewPanelistCreateArgs>(args: Prisma.SelectSubset<T, InterviewPanelistCreateArgs<ExtArgs>>): Prisma.Prisma__InterviewPanelistClient<runtime.Types.Result.GetResult<Prisma.$InterviewPanelistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InterviewPanelistCreateManyArgs>(args?: Prisma.SelectSubset<T, InterviewPanelistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InterviewPanelistCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InterviewPanelistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewPanelistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InterviewPanelistDeleteArgs>(args: Prisma.SelectSubset<T, InterviewPanelistDeleteArgs<ExtArgs>>): Prisma.Prisma__InterviewPanelistClient<runtime.Types.Result.GetResult<Prisma.$InterviewPanelistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InterviewPanelistUpdateArgs>(args: Prisma.SelectSubset<T, InterviewPanelistUpdateArgs<ExtArgs>>): Prisma.Prisma__InterviewPanelistClient<runtime.Types.Result.GetResult<Prisma.$InterviewPanelistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InterviewPanelistDeleteManyArgs>(args?: Prisma.SelectSubset<T, InterviewPanelistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InterviewPanelistUpdateManyArgs>(args: Prisma.SelectSubset<T, InterviewPanelistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InterviewPanelistUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InterviewPanelistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterviewPanelistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InterviewPanelistUpsertArgs>(args: Prisma.SelectSubset<T, InterviewPanelistUpsertArgs<ExtArgs>>): Prisma.Prisma__InterviewPanelistClient<runtime.Types.Result.GetResult<Prisma.$InterviewPanelistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InterviewPanelistCountArgs>(args?: Prisma.Subset<T, InterviewPanelistCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InterviewPanelistCountAggregateOutputType> : number>;
    aggregate<T extends InterviewPanelistAggregateArgs>(args: Prisma.Subset<T, InterviewPanelistAggregateArgs>): Prisma.PrismaPromise<GetInterviewPanelistAggregateType<T>>;
    groupBy<T extends InterviewPanelistGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InterviewPanelistGroupByArgs['orderBy'];
    } : {
        orderBy?: InterviewPanelistGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InterviewPanelistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterviewPanelistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InterviewPanelistFieldRefs;
}
export interface Prisma__InterviewPanelistClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    interview<T extends Prisma.InterviewDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InterviewDefaultArgs<ExtArgs>>): Prisma.Prisma__InterviewClient<runtime.Types.Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    employee<T extends Prisma.EmployeeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmployeeDefaultArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InterviewPanelistFieldRefs {
    readonly interviewId: Prisma.FieldRef<"InterviewPanelist", 'String'>;
    readonly employeeId: Prisma.FieldRef<"InterviewPanelist", 'String'>;
}
export type InterviewPanelistFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewPanelistSelect<ExtArgs> | null;
    omit?: Prisma.InterviewPanelistOmit<ExtArgs> | null;
    include?: Prisma.InterviewPanelistInclude<ExtArgs> | null;
    where: Prisma.InterviewPanelistWhereUniqueInput;
};
export type InterviewPanelistFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewPanelistSelect<ExtArgs> | null;
    omit?: Prisma.InterviewPanelistOmit<ExtArgs> | null;
    include?: Prisma.InterviewPanelistInclude<ExtArgs> | null;
    where: Prisma.InterviewPanelistWhereUniqueInput;
};
export type InterviewPanelistFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InterviewPanelistFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InterviewPanelistFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InterviewPanelistCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewPanelistSelect<ExtArgs> | null;
    omit?: Prisma.InterviewPanelistOmit<ExtArgs> | null;
    include?: Prisma.InterviewPanelistInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InterviewPanelistCreateInput, Prisma.InterviewPanelistUncheckedCreateInput>;
};
export type InterviewPanelistCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InterviewPanelistCreateManyInput | Prisma.InterviewPanelistCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InterviewPanelistCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewPanelistSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InterviewPanelistOmit<ExtArgs> | null;
    data: Prisma.InterviewPanelistCreateManyInput | Prisma.InterviewPanelistCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.InterviewPanelistIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type InterviewPanelistUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewPanelistSelect<ExtArgs> | null;
    omit?: Prisma.InterviewPanelistOmit<ExtArgs> | null;
    include?: Prisma.InterviewPanelistInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InterviewPanelistUpdateInput, Prisma.InterviewPanelistUncheckedUpdateInput>;
    where: Prisma.InterviewPanelistWhereUniqueInput;
};
export type InterviewPanelistUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InterviewPanelistUpdateManyMutationInput, Prisma.InterviewPanelistUncheckedUpdateManyInput>;
    where?: Prisma.InterviewPanelistWhereInput;
    limit?: number;
};
export type InterviewPanelistUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewPanelistSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InterviewPanelistOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InterviewPanelistUpdateManyMutationInput, Prisma.InterviewPanelistUncheckedUpdateManyInput>;
    where?: Prisma.InterviewPanelistWhereInput;
    limit?: number;
    include?: Prisma.InterviewPanelistIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type InterviewPanelistUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewPanelistSelect<ExtArgs> | null;
    omit?: Prisma.InterviewPanelistOmit<ExtArgs> | null;
    include?: Prisma.InterviewPanelistInclude<ExtArgs> | null;
    where: Prisma.InterviewPanelistWhereUniqueInput;
    create: Prisma.XOR<Prisma.InterviewPanelistCreateInput, Prisma.InterviewPanelistUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InterviewPanelistUpdateInput, Prisma.InterviewPanelistUncheckedUpdateInput>;
};
export type InterviewPanelistDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewPanelistSelect<ExtArgs> | null;
    omit?: Prisma.InterviewPanelistOmit<ExtArgs> | null;
    include?: Prisma.InterviewPanelistInclude<ExtArgs> | null;
    where: Prisma.InterviewPanelistWhereUniqueInput;
};
export type InterviewPanelistDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterviewPanelistWhereInput;
    limit?: number;
};
export type InterviewPanelistDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterviewPanelistSelect<ExtArgs> | null;
    omit?: Prisma.InterviewPanelistOmit<ExtArgs> | null;
    include?: Prisma.InterviewPanelistInclude<ExtArgs> | null;
};
