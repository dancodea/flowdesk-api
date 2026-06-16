import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ApplicationNoteModel = runtime.Types.Result.DefaultSelection<Prisma.$ApplicationNotePayload>;
export type AggregateApplicationNote = {
    _count: ApplicationNoteCountAggregateOutputType | null;
    _min: ApplicationNoteMinAggregateOutputType | null;
    _max: ApplicationNoteMaxAggregateOutputType | null;
};
export type ApplicationNoteMinAggregateOutputType = {
    id: string | null;
    applicationId: string | null;
    authorId: string | null;
    content: string | null;
    createdAt: Date | null;
};
export type ApplicationNoteMaxAggregateOutputType = {
    id: string | null;
    applicationId: string | null;
    authorId: string | null;
    content: string | null;
    createdAt: Date | null;
};
export type ApplicationNoteCountAggregateOutputType = {
    id: number;
    applicationId: number;
    authorId: number;
    content: number;
    createdAt: number;
    _all: number;
};
export type ApplicationNoteMinAggregateInputType = {
    id?: true;
    applicationId?: true;
    authorId?: true;
    content?: true;
    createdAt?: true;
};
export type ApplicationNoteMaxAggregateInputType = {
    id?: true;
    applicationId?: true;
    authorId?: true;
    content?: true;
    createdAt?: true;
};
export type ApplicationNoteCountAggregateInputType = {
    id?: true;
    applicationId?: true;
    authorId?: true;
    content?: true;
    createdAt?: true;
    _all?: true;
};
export type ApplicationNoteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApplicationNoteWhereInput;
    orderBy?: Prisma.ApplicationNoteOrderByWithRelationInput | Prisma.ApplicationNoteOrderByWithRelationInput[];
    cursor?: Prisma.ApplicationNoteWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ApplicationNoteCountAggregateInputType;
    _min?: ApplicationNoteMinAggregateInputType;
    _max?: ApplicationNoteMaxAggregateInputType;
};
export type GetApplicationNoteAggregateType<T extends ApplicationNoteAggregateArgs> = {
    [P in keyof T & keyof AggregateApplicationNote]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateApplicationNote[P]> : Prisma.GetScalarType<T[P], AggregateApplicationNote[P]>;
};
export type ApplicationNoteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApplicationNoteWhereInput;
    orderBy?: Prisma.ApplicationNoteOrderByWithAggregationInput | Prisma.ApplicationNoteOrderByWithAggregationInput[];
    by: Prisma.ApplicationNoteScalarFieldEnum[] | Prisma.ApplicationNoteScalarFieldEnum;
    having?: Prisma.ApplicationNoteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ApplicationNoteCountAggregateInputType | true;
    _min?: ApplicationNoteMinAggregateInputType;
    _max?: ApplicationNoteMaxAggregateInputType;
};
export type ApplicationNoteGroupByOutputType = {
    id: string;
    applicationId: string;
    authorId: string | null;
    content: string;
    createdAt: Date;
    _count: ApplicationNoteCountAggregateOutputType | null;
    _min: ApplicationNoteMinAggregateOutputType | null;
    _max: ApplicationNoteMaxAggregateOutputType | null;
};
export type GetApplicationNoteGroupByPayload<T extends ApplicationNoteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ApplicationNoteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ApplicationNoteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ApplicationNoteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ApplicationNoteGroupByOutputType[P]>;
}>>;
export type ApplicationNoteWhereInput = {
    AND?: Prisma.ApplicationNoteWhereInput | Prisma.ApplicationNoteWhereInput[];
    OR?: Prisma.ApplicationNoteWhereInput[];
    NOT?: Prisma.ApplicationNoteWhereInput | Prisma.ApplicationNoteWhereInput[];
    id?: Prisma.UuidFilter<"ApplicationNote"> | string;
    applicationId?: Prisma.UuidFilter<"ApplicationNote"> | string;
    authorId?: Prisma.UuidNullableFilter<"ApplicationNote"> | string | null;
    content?: Prisma.StringFilter<"ApplicationNote"> | string;
    createdAt?: Prisma.DateTimeFilter<"ApplicationNote"> | Date | string;
    application?: Prisma.XOR<Prisma.ApplicationScalarRelationFilter, Prisma.ApplicationWhereInput>;
};
export type ApplicationNoteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    application?: Prisma.ApplicationOrderByWithRelationInput;
};
export type ApplicationNoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ApplicationNoteWhereInput | Prisma.ApplicationNoteWhereInput[];
    OR?: Prisma.ApplicationNoteWhereInput[];
    NOT?: Prisma.ApplicationNoteWhereInput | Prisma.ApplicationNoteWhereInput[];
    applicationId?: Prisma.UuidFilter<"ApplicationNote"> | string;
    authorId?: Prisma.UuidNullableFilter<"ApplicationNote"> | string | null;
    content?: Prisma.StringFilter<"ApplicationNote"> | string;
    createdAt?: Prisma.DateTimeFilter<"ApplicationNote"> | Date | string;
    application?: Prisma.XOR<Prisma.ApplicationScalarRelationFilter, Prisma.ApplicationWhereInput>;
}, "id">;
export type ApplicationNoteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ApplicationNoteCountOrderByAggregateInput;
    _max?: Prisma.ApplicationNoteMaxOrderByAggregateInput;
    _min?: Prisma.ApplicationNoteMinOrderByAggregateInput;
};
export type ApplicationNoteScalarWhereWithAggregatesInput = {
    AND?: Prisma.ApplicationNoteScalarWhereWithAggregatesInput | Prisma.ApplicationNoteScalarWhereWithAggregatesInput[];
    OR?: Prisma.ApplicationNoteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ApplicationNoteScalarWhereWithAggregatesInput | Prisma.ApplicationNoteScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ApplicationNote"> | string;
    applicationId?: Prisma.UuidWithAggregatesFilter<"ApplicationNote"> | string;
    authorId?: Prisma.UuidNullableWithAggregatesFilter<"ApplicationNote"> | string | null;
    content?: Prisma.StringWithAggregatesFilter<"ApplicationNote"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ApplicationNote"> | Date | string;
};
export type ApplicationNoteCreateInput = {
    id?: string;
    authorId?: string | null;
    content: string;
    createdAt?: Date | string;
    application: Prisma.ApplicationCreateNestedOneWithoutNotesInput;
};
export type ApplicationNoteUncheckedCreateInput = {
    id?: string;
    applicationId: string;
    authorId?: string | null;
    content: string;
    createdAt?: Date | string;
};
export type ApplicationNoteUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    application?: Prisma.ApplicationUpdateOneRequiredWithoutNotesNestedInput;
};
export type ApplicationNoteUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApplicationNoteCreateManyInput = {
    id?: string;
    applicationId: string;
    authorId?: string | null;
    content: string;
    createdAt?: Date | string;
};
export type ApplicationNoteUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApplicationNoteUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    applicationId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApplicationNoteListRelationFilter = {
    every?: Prisma.ApplicationNoteWhereInput;
    some?: Prisma.ApplicationNoteWhereInput;
    none?: Prisma.ApplicationNoteWhereInput;
};
export type ApplicationNoteOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ApplicationNoteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ApplicationNoteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ApplicationNoteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ApplicationNoteCreateNestedManyWithoutApplicationInput = {
    create?: Prisma.XOR<Prisma.ApplicationNoteCreateWithoutApplicationInput, Prisma.ApplicationNoteUncheckedCreateWithoutApplicationInput> | Prisma.ApplicationNoteCreateWithoutApplicationInput[] | Prisma.ApplicationNoteUncheckedCreateWithoutApplicationInput[];
    connectOrCreate?: Prisma.ApplicationNoteCreateOrConnectWithoutApplicationInput | Prisma.ApplicationNoteCreateOrConnectWithoutApplicationInput[];
    createMany?: Prisma.ApplicationNoteCreateManyApplicationInputEnvelope;
    connect?: Prisma.ApplicationNoteWhereUniqueInput | Prisma.ApplicationNoteWhereUniqueInput[];
};
export type ApplicationNoteUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: Prisma.XOR<Prisma.ApplicationNoteCreateWithoutApplicationInput, Prisma.ApplicationNoteUncheckedCreateWithoutApplicationInput> | Prisma.ApplicationNoteCreateWithoutApplicationInput[] | Prisma.ApplicationNoteUncheckedCreateWithoutApplicationInput[];
    connectOrCreate?: Prisma.ApplicationNoteCreateOrConnectWithoutApplicationInput | Prisma.ApplicationNoteCreateOrConnectWithoutApplicationInput[];
    createMany?: Prisma.ApplicationNoteCreateManyApplicationInputEnvelope;
    connect?: Prisma.ApplicationNoteWhereUniqueInput | Prisma.ApplicationNoteWhereUniqueInput[];
};
export type ApplicationNoteUpdateManyWithoutApplicationNestedInput = {
    create?: Prisma.XOR<Prisma.ApplicationNoteCreateWithoutApplicationInput, Prisma.ApplicationNoteUncheckedCreateWithoutApplicationInput> | Prisma.ApplicationNoteCreateWithoutApplicationInput[] | Prisma.ApplicationNoteUncheckedCreateWithoutApplicationInput[];
    connectOrCreate?: Prisma.ApplicationNoteCreateOrConnectWithoutApplicationInput | Prisma.ApplicationNoteCreateOrConnectWithoutApplicationInput[];
    upsert?: Prisma.ApplicationNoteUpsertWithWhereUniqueWithoutApplicationInput | Prisma.ApplicationNoteUpsertWithWhereUniqueWithoutApplicationInput[];
    createMany?: Prisma.ApplicationNoteCreateManyApplicationInputEnvelope;
    set?: Prisma.ApplicationNoteWhereUniqueInput | Prisma.ApplicationNoteWhereUniqueInput[];
    disconnect?: Prisma.ApplicationNoteWhereUniqueInput | Prisma.ApplicationNoteWhereUniqueInput[];
    delete?: Prisma.ApplicationNoteWhereUniqueInput | Prisma.ApplicationNoteWhereUniqueInput[];
    connect?: Prisma.ApplicationNoteWhereUniqueInput | Prisma.ApplicationNoteWhereUniqueInput[];
    update?: Prisma.ApplicationNoteUpdateWithWhereUniqueWithoutApplicationInput | Prisma.ApplicationNoteUpdateWithWhereUniqueWithoutApplicationInput[];
    updateMany?: Prisma.ApplicationNoteUpdateManyWithWhereWithoutApplicationInput | Prisma.ApplicationNoteUpdateManyWithWhereWithoutApplicationInput[];
    deleteMany?: Prisma.ApplicationNoteScalarWhereInput | Prisma.ApplicationNoteScalarWhereInput[];
};
export type ApplicationNoteUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: Prisma.XOR<Prisma.ApplicationNoteCreateWithoutApplicationInput, Prisma.ApplicationNoteUncheckedCreateWithoutApplicationInput> | Prisma.ApplicationNoteCreateWithoutApplicationInput[] | Prisma.ApplicationNoteUncheckedCreateWithoutApplicationInput[];
    connectOrCreate?: Prisma.ApplicationNoteCreateOrConnectWithoutApplicationInput | Prisma.ApplicationNoteCreateOrConnectWithoutApplicationInput[];
    upsert?: Prisma.ApplicationNoteUpsertWithWhereUniqueWithoutApplicationInput | Prisma.ApplicationNoteUpsertWithWhereUniqueWithoutApplicationInput[];
    createMany?: Prisma.ApplicationNoteCreateManyApplicationInputEnvelope;
    set?: Prisma.ApplicationNoteWhereUniqueInput | Prisma.ApplicationNoteWhereUniqueInput[];
    disconnect?: Prisma.ApplicationNoteWhereUniqueInput | Prisma.ApplicationNoteWhereUniqueInput[];
    delete?: Prisma.ApplicationNoteWhereUniqueInput | Prisma.ApplicationNoteWhereUniqueInput[];
    connect?: Prisma.ApplicationNoteWhereUniqueInput | Prisma.ApplicationNoteWhereUniqueInput[];
    update?: Prisma.ApplicationNoteUpdateWithWhereUniqueWithoutApplicationInput | Prisma.ApplicationNoteUpdateWithWhereUniqueWithoutApplicationInput[];
    updateMany?: Prisma.ApplicationNoteUpdateManyWithWhereWithoutApplicationInput | Prisma.ApplicationNoteUpdateManyWithWhereWithoutApplicationInput[];
    deleteMany?: Prisma.ApplicationNoteScalarWhereInput | Prisma.ApplicationNoteScalarWhereInput[];
};
export type ApplicationNoteCreateWithoutApplicationInput = {
    id?: string;
    authorId?: string | null;
    content: string;
    createdAt?: Date | string;
};
export type ApplicationNoteUncheckedCreateWithoutApplicationInput = {
    id?: string;
    authorId?: string | null;
    content: string;
    createdAt?: Date | string;
};
export type ApplicationNoteCreateOrConnectWithoutApplicationInput = {
    where: Prisma.ApplicationNoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApplicationNoteCreateWithoutApplicationInput, Prisma.ApplicationNoteUncheckedCreateWithoutApplicationInput>;
};
export type ApplicationNoteCreateManyApplicationInputEnvelope = {
    data: Prisma.ApplicationNoteCreateManyApplicationInput | Prisma.ApplicationNoteCreateManyApplicationInput[];
    skipDuplicates?: boolean;
};
export type ApplicationNoteUpsertWithWhereUniqueWithoutApplicationInput = {
    where: Prisma.ApplicationNoteWhereUniqueInput;
    update: Prisma.XOR<Prisma.ApplicationNoteUpdateWithoutApplicationInput, Prisma.ApplicationNoteUncheckedUpdateWithoutApplicationInput>;
    create: Prisma.XOR<Prisma.ApplicationNoteCreateWithoutApplicationInput, Prisma.ApplicationNoteUncheckedCreateWithoutApplicationInput>;
};
export type ApplicationNoteUpdateWithWhereUniqueWithoutApplicationInput = {
    where: Prisma.ApplicationNoteWhereUniqueInput;
    data: Prisma.XOR<Prisma.ApplicationNoteUpdateWithoutApplicationInput, Prisma.ApplicationNoteUncheckedUpdateWithoutApplicationInput>;
};
export type ApplicationNoteUpdateManyWithWhereWithoutApplicationInput = {
    where: Prisma.ApplicationNoteScalarWhereInput;
    data: Prisma.XOR<Prisma.ApplicationNoteUpdateManyMutationInput, Prisma.ApplicationNoteUncheckedUpdateManyWithoutApplicationInput>;
};
export type ApplicationNoteScalarWhereInput = {
    AND?: Prisma.ApplicationNoteScalarWhereInput | Prisma.ApplicationNoteScalarWhereInput[];
    OR?: Prisma.ApplicationNoteScalarWhereInput[];
    NOT?: Prisma.ApplicationNoteScalarWhereInput | Prisma.ApplicationNoteScalarWhereInput[];
    id?: Prisma.UuidFilter<"ApplicationNote"> | string;
    applicationId?: Prisma.UuidFilter<"ApplicationNote"> | string;
    authorId?: Prisma.UuidNullableFilter<"ApplicationNote"> | string | null;
    content?: Prisma.StringFilter<"ApplicationNote"> | string;
    createdAt?: Prisma.DateTimeFilter<"ApplicationNote"> | Date | string;
};
export type ApplicationNoteCreateManyApplicationInput = {
    id?: string;
    authorId?: string | null;
    content: string;
    createdAt?: Date | string;
};
export type ApplicationNoteUpdateWithoutApplicationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApplicationNoteUncheckedUpdateWithoutApplicationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApplicationNoteUncheckedUpdateManyWithoutApplicationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApplicationNoteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    applicationId?: boolean;
    authorId?: boolean;
    content?: boolean;
    createdAt?: boolean;
    application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["applicationNote"]>;
export type ApplicationNoteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    applicationId?: boolean;
    authorId?: boolean;
    content?: boolean;
    createdAt?: boolean;
    application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["applicationNote"]>;
export type ApplicationNoteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    applicationId?: boolean;
    authorId?: boolean;
    content?: boolean;
    createdAt?: boolean;
    application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["applicationNote"]>;
export type ApplicationNoteSelectScalar = {
    id?: boolean;
    applicationId?: boolean;
    authorId?: boolean;
    content?: boolean;
    createdAt?: boolean;
};
export type ApplicationNoteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "applicationId" | "authorId" | "content" | "createdAt", ExtArgs["result"]["applicationNote"]>;
export type ApplicationNoteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
};
export type ApplicationNoteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
};
export type ApplicationNoteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
};
export type $ApplicationNotePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ApplicationNote";
    objects: {
        application: Prisma.$ApplicationPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        applicationId: string;
        authorId: string | null;
        content: string;
        createdAt: Date;
    }, ExtArgs["result"]["applicationNote"]>;
    composites: {};
};
export type ApplicationNoteGetPayload<S extends boolean | null | undefined | ApplicationNoteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ApplicationNotePayload, S>;
export type ApplicationNoteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ApplicationNoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ApplicationNoteCountAggregateInputType | true;
};
export interface ApplicationNoteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ApplicationNote'];
        meta: {
            name: 'ApplicationNote';
        };
    };
    findUnique<T extends ApplicationNoteFindUniqueArgs>(args: Prisma.SelectSubset<T, ApplicationNoteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ApplicationNoteClient<runtime.Types.Result.GetResult<Prisma.$ApplicationNotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ApplicationNoteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ApplicationNoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApplicationNoteClient<runtime.Types.Result.GetResult<Prisma.$ApplicationNotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ApplicationNoteFindFirstArgs>(args?: Prisma.SelectSubset<T, ApplicationNoteFindFirstArgs<ExtArgs>>): Prisma.Prisma__ApplicationNoteClient<runtime.Types.Result.GetResult<Prisma.$ApplicationNotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ApplicationNoteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ApplicationNoteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApplicationNoteClient<runtime.Types.Result.GetResult<Prisma.$ApplicationNotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ApplicationNoteFindManyArgs>(args?: Prisma.SelectSubset<T, ApplicationNoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApplicationNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ApplicationNoteCreateArgs>(args: Prisma.SelectSubset<T, ApplicationNoteCreateArgs<ExtArgs>>): Prisma.Prisma__ApplicationNoteClient<runtime.Types.Result.GetResult<Prisma.$ApplicationNotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ApplicationNoteCreateManyArgs>(args?: Prisma.SelectSubset<T, ApplicationNoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ApplicationNoteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ApplicationNoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApplicationNotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ApplicationNoteDeleteArgs>(args: Prisma.SelectSubset<T, ApplicationNoteDeleteArgs<ExtArgs>>): Prisma.Prisma__ApplicationNoteClient<runtime.Types.Result.GetResult<Prisma.$ApplicationNotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ApplicationNoteUpdateArgs>(args: Prisma.SelectSubset<T, ApplicationNoteUpdateArgs<ExtArgs>>): Prisma.Prisma__ApplicationNoteClient<runtime.Types.Result.GetResult<Prisma.$ApplicationNotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ApplicationNoteDeleteManyArgs>(args?: Prisma.SelectSubset<T, ApplicationNoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ApplicationNoteUpdateManyArgs>(args: Prisma.SelectSubset<T, ApplicationNoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ApplicationNoteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ApplicationNoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApplicationNotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ApplicationNoteUpsertArgs>(args: Prisma.SelectSubset<T, ApplicationNoteUpsertArgs<ExtArgs>>): Prisma.Prisma__ApplicationNoteClient<runtime.Types.Result.GetResult<Prisma.$ApplicationNotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ApplicationNoteCountArgs>(args?: Prisma.Subset<T, ApplicationNoteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ApplicationNoteCountAggregateOutputType> : number>;
    aggregate<T extends ApplicationNoteAggregateArgs>(args: Prisma.Subset<T, ApplicationNoteAggregateArgs>): Prisma.PrismaPromise<GetApplicationNoteAggregateType<T>>;
    groupBy<T extends ApplicationNoteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ApplicationNoteGroupByArgs['orderBy'];
    } : {
        orderBy?: ApplicationNoteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ApplicationNoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ApplicationNoteFieldRefs;
}
export interface Prisma__ApplicationNoteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    application<T extends Prisma.ApplicationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ApplicationDefaultArgs<ExtArgs>>): Prisma.Prisma__ApplicationClient<runtime.Types.Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ApplicationNoteFieldRefs {
    readonly id: Prisma.FieldRef<"ApplicationNote", 'String'>;
    readonly applicationId: Prisma.FieldRef<"ApplicationNote", 'String'>;
    readonly authorId: Prisma.FieldRef<"ApplicationNote", 'String'>;
    readonly content: Prisma.FieldRef<"ApplicationNote", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ApplicationNote", 'DateTime'>;
}
export type ApplicationNoteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApplicationNoteSelect<ExtArgs> | null;
    omit?: Prisma.ApplicationNoteOmit<ExtArgs> | null;
    include?: Prisma.ApplicationNoteInclude<ExtArgs> | null;
    where: Prisma.ApplicationNoteWhereUniqueInput;
};
export type ApplicationNoteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApplicationNoteSelect<ExtArgs> | null;
    omit?: Prisma.ApplicationNoteOmit<ExtArgs> | null;
    include?: Prisma.ApplicationNoteInclude<ExtArgs> | null;
    where: Prisma.ApplicationNoteWhereUniqueInput;
};
export type ApplicationNoteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ApplicationNoteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ApplicationNoteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ApplicationNoteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApplicationNoteSelect<ExtArgs> | null;
    omit?: Prisma.ApplicationNoteOmit<ExtArgs> | null;
    include?: Prisma.ApplicationNoteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ApplicationNoteCreateInput, Prisma.ApplicationNoteUncheckedCreateInput>;
};
export type ApplicationNoteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ApplicationNoteCreateManyInput | Prisma.ApplicationNoteCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ApplicationNoteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApplicationNoteSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ApplicationNoteOmit<ExtArgs> | null;
    data: Prisma.ApplicationNoteCreateManyInput | Prisma.ApplicationNoteCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ApplicationNoteIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ApplicationNoteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApplicationNoteSelect<ExtArgs> | null;
    omit?: Prisma.ApplicationNoteOmit<ExtArgs> | null;
    include?: Prisma.ApplicationNoteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ApplicationNoteUpdateInput, Prisma.ApplicationNoteUncheckedUpdateInput>;
    where: Prisma.ApplicationNoteWhereUniqueInput;
};
export type ApplicationNoteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ApplicationNoteUpdateManyMutationInput, Prisma.ApplicationNoteUncheckedUpdateManyInput>;
    where?: Prisma.ApplicationNoteWhereInput;
    limit?: number;
};
export type ApplicationNoteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApplicationNoteSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ApplicationNoteOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ApplicationNoteUpdateManyMutationInput, Prisma.ApplicationNoteUncheckedUpdateManyInput>;
    where?: Prisma.ApplicationNoteWhereInput;
    limit?: number;
    include?: Prisma.ApplicationNoteIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ApplicationNoteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApplicationNoteSelect<ExtArgs> | null;
    omit?: Prisma.ApplicationNoteOmit<ExtArgs> | null;
    include?: Prisma.ApplicationNoteInclude<ExtArgs> | null;
    where: Prisma.ApplicationNoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApplicationNoteCreateInput, Prisma.ApplicationNoteUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ApplicationNoteUpdateInput, Prisma.ApplicationNoteUncheckedUpdateInput>;
};
export type ApplicationNoteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApplicationNoteSelect<ExtArgs> | null;
    omit?: Prisma.ApplicationNoteOmit<ExtArgs> | null;
    include?: Prisma.ApplicationNoteInclude<ExtArgs> | null;
    where: Prisma.ApplicationNoteWhereUniqueInput;
};
export type ApplicationNoteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApplicationNoteWhereInput;
    limit?: number;
};
export type ApplicationNoteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApplicationNoteSelect<ExtArgs> | null;
    omit?: Prisma.ApplicationNoteOmit<ExtArgs> | null;
    include?: Prisma.ApplicationNoteInclude<ExtArgs> | null;
};
