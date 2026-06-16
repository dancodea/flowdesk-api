import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AnnouncementReadModel = runtime.Types.Result.DefaultSelection<Prisma.$AnnouncementReadPayload>;
export type AggregateAnnouncementRead = {
    _count: AnnouncementReadCountAggregateOutputType | null;
    _min: AnnouncementReadMinAggregateOutputType | null;
    _max: AnnouncementReadMaxAggregateOutputType | null;
};
export type AnnouncementReadMinAggregateOutputType = {
    announcementId: string | null;
    userId: string | null;
    readAt: Date | null;
};
export type AnnouncementReadMaxAggregateOutputType = {
    announcementId: string | null;
    userId: string | null;
    readAt: Date | null;
};
export type AnnouncementReadCountAggregateOutputType = {
    announcementId: number;
    userId: number;
    readAt: number;
    _all: number;
};
export type AnnouncementReadMinAggregateInputType = {
    announcementId?: true;
    userId?: true;
    readAt?: true;
};
export type AnnouncementReadMaxAggregateInputType = {
    announcementId?: true;
    userId?: true;
    readAt?: true;
};
export type AnnouncementReadCountAggregateInputType = {
    announcementId?: true;
    userId?: true;
    readAt?: true;
    _all?: true;
};
export type AnnouncementReadAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnnouncementReadWhereInput;
    orderBy?: Prisma.AnnouncementReadOrderByWithRelationInput | Prisma.AnnouncementReadOrderByWithRelationInput[];
    cursor?: Prisma.AnnouncementReadWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AnnouncementReadCountAggregateInputType;
    _min?: AnnouncementReadMinAggregateInputType;
    _max?: AnnouncementReadMaxAggregateInputType;
};
export type GetAnnouncementReadAggregateType<T extends AnnouncementReadAggregateArgs> = {
    [P in keyof T & keyof AggregateAnnouncementRead]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAnnouncementRead[P]> : Prisma.GetScalarType<T[P], AggregateAnnouncementRead[P]>;
};
export type AnnouncementReadGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnnouncementReadWhereInput;
    orderBy?: Prisma.AnnouncementReadOrderByWithAggregationInput | Prisma.AnnouncementReadOrderByWithAggregationInput[];
    by: Prisma.AnnouncementReadScalarFieldEnum[] | Prisma.AnnouncementReadScalarFieldEnum;
    having?: Prisma.AnnouncementReadScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AnnouncementReadCountAggregateInputType | true;
    _min?: AnnouncementReadMinAggregateInputType;
    _max?: AnnouncementReadMaxAggregateInputType;
};
export type AnnouncementReadGroupByOutputType = {
    announcementId: string;
    userId: string;
    readAt: Date;
    _count: AnnouncementReadCountAggregateOutputType | null;
    _min: AnnouncementReadMinAggregateOutputType | null;
    _max: AnnouncementReadMaxAggregateOutputType | null;
};
export type GetAnnouncementReadGroupByPayload<T extends AnnouncementReadGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AnnouncementReadGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AnnouncementReadGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AnnouncementReadGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AnnouncementReadGroupByOutputType[P]>;
}>>;
export type AnnouncementReadWhereInput = {
    AND?: Prisma.AnnouncementReadWhereInput | Prisma.AnnouncementReadWhereInput[];
    OR?: Prisma.AnnouncementReadWhereInput[];
    NOT?: Prisma.AnnouncementReadWhereInput | Prisma.AnnouncementReadWhereInput[];
    announcementId?: Prisma.UuidFilter<"AnnouncementRead"> | string;
    userId?: Prisma.UuidFilter<"AnnouncementRead"> | string;
    readAt?: Prisma.DateTimeFilter<"AnnouncementRead"> | Date | string;
    announcement?: Prisma.XOR<Prisma.AnnouncementScalarRelationFilter, Prisma.AnnouncementWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type AnnouncementReadOrderByWithRelationInput = {
    announcementId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    readAt?: Prisma.SortOrder;
    announcement?: Prisma.AnnouncementOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type AnnouncementReadWhereUniqueInput = Prisma.AtLeast<{
    announcementId_userId?: Prisma.AnnouncementReadAnnouncementIdUserIdCompoundUniqueInput;
    AND?: Prisma.AnnouncementReadWhereInput | Prisma.AnnouncementReadWhereInput[];
    OR?: Prisma.AnnouncementReadWhereInput[];
    NOT?: Prisma.AnnouncementReadWhereInput | Prisma.AnnouncementReadWhereInput[];
    announcementId?: Prisma.UuidFilter<"AnnouncementRead"> | string;
    userId?: Prisma.UuidFilter<"AnnouncementRead"> | string;
    readAt?: Prisma.DateTimeFilter<"AnnouncementRead"> | Date | string;
    announcement?: Prisma.XOR<Prisma.AnnouncementScalarRelationFilter, Prisma.AnnouncementWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "announcementId_userId">;
export type AnnouncementReadOrderByWithAggregationInput = {
    announcementId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    readAt?: Prisma.SortOrder;
    _count?: Prisma.AnnouncementReadCountOrderByAggregateInput;
    _max?: Prisma.AnnouncementReadMaxOrderByAggregateInput;
    _min?: Prisma.AnnouncementReadMinOrderByAggregateInput;
};
export type AnnouncementReadScalarWhereWithAggregatesInput = {
    AND?: Prisma.AnnouncementReadScalarWhereWithAggregatesInput | Prisma.AnnouncementReadScalarWhereWithAggregatesInput[];
    OR?: Prisma.AnnouncementReadScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AnnouncementReadScalarWhereWithAggregatesInput | Prisma.AnnouncementReadScalarWhereWithAggregatesInput[];
    announcementId?: Prisma.UuidWithAggregatesFilter<"AnnouncementRead"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"AnnouncementRead"> | string;
    readAt?: Prisma.DateTimeWithAggregatesFilter<"AnnouncementRead"> | Date | string;
};
export type AnnouncementReadCreateInput = {
    readAt?: Date | string;
    announcement: Prisma.AnnouncementCreateNestedOneWithoutReadsInput;
    user: Prisma.UserCreateNestedOneWithoutAnnouncementReadsInput;
};
export type AnnouncementReadUncheckedCreateInput = {
    announcementId: string;
    userId: string;
    readAt?: Date | string;
};
export type AnnouncementReadUpdateInput = {
    readAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    announcement?: Prisma.AnnouncementUpdateOneRequiredWithoutReadsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutAnnouncementReadsNestedInput;
};
export type AnnouncementReadUncheckedUpdateInput = {
    announcementId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    readAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnnouncementReadCreateManyInput = {
    announcementId: string;
    userId: string;
    readAt?: Date | string;
};
export type AnnouncementReadUpdateManyMutationInput = {
    readAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnnouncementReadUncheckedUpdateManyInput = {
    announcementId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    readAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnnouncementReadListRelationFilter = {
    every?: Prisma.AnnouncementReadWhereInput;
    some?: Prisma.AnnouncementReadWhereInput;
    none?: Prisma.AnnouncementReadWhereInput;
};
export type AnnouncementReadOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AnnouncementReadAnnouncementIdUserIdCompoundUniqueInput = {
    announcementId: string;
    userId: string;
};
export type AnnouncementReadCountOrderByAggregateInput = {
    announcementId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    readAt?: Prisma.SortOrder;
};
export type AnnouncementReadMaxOrderByAggregateInput = {
    announcementId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    readAt?: Prisma.SortOrder;
};
export type AnnouncementReadMinOrderByAggregateInput = {
    announcementId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    readAt?: Prisma.SortOrder;
};
export type AnnouncementReadCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.AnnouncementReadCreateWithoutUserInput, Prisma.AnnouncementReadUncheckedCreateWithoutUserInput> | Prisma.AnnouncementReadCreateWithoutUserInput[] | Prisma.AnnouncementReadUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AnnouncementReadCreateOrConnectWithoutUserInput | Prisma.AnnouncementReadCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.AnnouncementReadCreateManyUserInputEnvelope;
    connect?: Prisma.AnnouncementReadWhereUniqueInput | Prisma.AnnouncementReadWhereUniqueInput[];
};
export type AnnouncementReadUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.AnnouncementReadCreateWithoutUserInput, Prisma.AnnouncementReadUncheckedCreateWithoutUserInput> | Prisma.AnnouncementReadCreateWithoutUserInput[] | Prisma.AnnouncementReadUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AnnouncementReadCreateOrConnectWithoutUserInput | Prisma.AnnouncementReadCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.AnnouncementReadCreateManyUserInputEnvelope;
    connect?: Prisma.AnnouncementReadWhereUniqueInput | Prisma.AnnouncementReadWhereUniqueInput[];
};
export type AnnouncementReadUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.AnnouncementReadCreateWithoutUserInput, Prisma.AnnouncementReadUncheckedCreateWithoutUserInput> | Prisma.AnnouncementReadCreateWithoutUserInput[] | Prisma.AnnouncementReadUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AnnouncementReadCreateOrConnectWithoutUserInput | Prisma.AnnouncementReadCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.AnnouncementReadUpsertWithWhereUniqueWithoutUserInput | Prisma.AnnouncementReadUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.AnnouncementReadCreateManyUserInputEnvelope;
    set?: Prisma.AnnouncementReadWhereUniqueInput | Prisma.AnnouncementReadWhereUniqueInput[];
    disconnect?: Prisma.AnnouncementReadWhereUniqueInput | Prisma.AnnouncementReadWhereUniqueInput[];
    delete?: Prisma.AnnouncementReadWhereUniqueInput | Prisma.AnnouncementReadWhereUniqueInput[];
    connect?: Prisma.AnnouncementReadWhereUniqueInput | Prisma.AnnouncementReadWhereUniqueInput[];
    update?: Prisma.AnnouncementReadUpdateWithWhereUniqueWithoutUserInput | Prisma.AnnouncementReadUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.AnnouncementReadUpdateManyWithWhereWithoutUserInput | Prisma.AnnouncementReadUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.AnnouncementReadScalarWhereInput | Prisma.AnnouncementReadScalarWhereInput[];
};
export type AnnouncementReadUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.AnnouncementReadCreateWithoutUserInput, Prisma.AnnouncementReadUncheckedCreateWithoutUserInput> | Prisma.AnnouncementReadCreateWithoutUserInput[] | Prisma.AnnouncementReadUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AnnouncementReadCreateOrConnectWithoutUserInput | Prisma.AnnouncementReadCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.AnnouncementReadUpsertWithWhereUniqueWithoutUserInput | Prisma.AnnouncementReadUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.AnnouncementReadCreateManyUserInputEnvelope;
    set?: Prisma.AnnouncementReadWhereUniqueInput | Prisma.AnnouncementReadWhereUniqueInput[];
    disconnect?: Prisma.AnnouncementReadWhereUniqueInput | Prisma.AnnouncementReadWhereUniqueInput[];
    delete?: Prisma.AnnouncementReadWhereUniqueInput | Prisma.AnnouncementReadWhereUniqueInput[];
    connect?: Prisma.AnnouncementReadWhereUniqueInput | Prisma.AnnouncementReadWhereUniqueInput[];
    update?: Prisma.AnnouncementReadUpdateWithWhereUniqueWithoutUserInput | Prisma.AnnouncementReadUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.AnnouncementReadUpdateManyWithWhereWithoutUserInput | Prisma.AnnouncementReadUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.AnnouncementReadScalarWhereInput | Prisma.AnnouncementReadScalarWhereInput[];
};
export type AnnouncementReadCreateNestedManyWithoutAnnouncementInput = {
    create?: Prisma.XOR<Prisma.AnnouncementReadCreateWithoutAnnouncementInput, Prisma.AnnouncementReadUncheckedCreateWithoutAnnouncementInput> | Prisma.AnnouncementReadCreateWithoutAnnouncementInput[] | Prisma.AnnouncementReadUncheckedCreateWithoutAnnouncementInput[];
    connectOrCreate?: Prisma.AnnouncementReadCreateOrConnectWithoutAnnouncementInput | Prisma.AnnouncementReadCreateOrConnectWithoutAnnouncementInput[];
    createMany?: Prisma.AnnouncementReadCreateManyAnnouncementInputEnvelope;
    connect?: Prisma.AnnouncementReadWhereUniqueInput | Prisma.AnnouncementReadWhereUniqueInput[];
};
export type AnnouncementReadUncheckedCreateNestedManyWithoutAnnouncementInput = {
    create?: Prisma.XOR<Prisma.AnnouncementReadCreateWithoutAnnouncementInput, Prisma.AnnouncementReadUncheckedCreateWithoutAnnouncementInput> | Prisma.AnnouncementReadCreateWithoutAnnouncementInput[] | Prisma.AnnouncementReadUncheckedCreateWithoutAnnouncementInput[];
    connectOrCreate?: Prisma.AnnouncementReadCreateOrConnectWithoutAnnouncementInput | Prisma.AnnouncementReadCreateOrConnectWithoutAnnouncementInput[];
    createMany?: Prisma.AnnouncementReadCreateManyAnnouncementInputEnvelope;
    connect?: Prisma.AnnouncementReadWhereUniqueInput | Prisma.AnnouncementReadWhereUniqueInput[];
};
export type AnnouncementReadUpdateManyWithoutAnnouncementNestedInput = {
    create?: Prisma.XOR<Prisma.AnnouncementReadCreateWithoutAnnouncementInput, Prisma.AnnouncementReadUncheckedCreateWithoutAnnouncementInput> | Prisma.AnnouncementReadCreateWithoutAnnouncementInput[] | Prisma.AnnouncementReadUncheckedCreateWithoutAnnouncementInput[];
    connectOrCreate?: Prisma.AnnouncementReadCreateOrConnectWithoutAnnouncementInput | Prisma.AnnouncementReadCreateOrConnectWithoutAnnouncementInput[];
    upsert?: Prisma.AnnouncementReadUpsertWithWhereUniqueWithoutAnnouncementInput | Prisma.AnnouncementReadUpsertWithWhereUniqueWithoutAnnouncementInput[];
    createMany?: Prisma.AnnouncementReadCreateManyAnnouncementInputEnvelope;
    set?: Prisma.AnnouncementReadWhereUniqueInput | Prisma.AnnouncementReadWhereUniqueInput[];
    disconnect?: Prisma.AnnouncementReadWhereUniqueInput | Prisma.AnnouncementReadWhereUniqueInput[];
    delete?: Prisma.AnnouncementReadWhereUniqueInput | Prisma.AnnouncementReadWhereUniqueInput[];
    connect?: Prisma.AnnouncementReadWhereUniqueInput | Prisma.AnnouncementReadWhereUniqueInput[];
    update?: Prisma.AnnouncementReadUpdateWithWhereUniqueWithoutAnnouncementInput | Prisma.AnnouncementReadUpdateWithWhereUniqueWithoutAnnouncementInput[];
    updateMany?: Prisma.AnnouncementReadUpdateManyWithWhereWithoutAnnouncementInput | Prisma.AnnouncementReadUpdateManyWithWhereWithoutAnnouncementInput[];
    deleteMany?: Prisma.AnnouncementReadScalarWhereInput | Prisma.AnnouncementReadScalarWhereInput[];
};
export type AnnouncementReadUncheckedUpdateManyWithoutAnnouncementNestedInput = {
    create?: Prisma.XOR<Prisma.AnnouncementReadCreateWithoutAnnouncementInput, Prisma.AnnouncementReadUncheckedCreateWithoutAnnouncementInput> | Prisma.AnnouncementReadCreateWithoutAnnouncementInput[] | Prisma.AnnouncementReadUncheckedCreateWithoutAnnouncementInput[];
    connectOrCreate?: Prisma.AnnouncementReadCreateOrConnectWithoutAnnouncementInput | Prisma.AnnouncementReadCreateOrConnectWithoutAnnouncementInput[];
    upsert?: Prisma.AnnouncementReadUpsertWithWhereUniqueWithoutAnnouncementInput | Prisma.AnnouncementReadUpsertWithWhereUniqueWithoutAnnouncementInput[];
    createMany?: Prisma.AnnouncementReadCreateManyAnnouncementInputEnvelope;
    set?: Prisma.AnnouncementReadWhereUniqueInput | Prisma.AnnouncementReadWhereUniqueInput[];
    disconnect?: Prisma.AnnouncementReadWhereUniqueInput | Prisma.AnnouncementReadWhereUniqueInput[];
    delete?: Prisma.AnnouncementReadWhereUniqueInput | Prisma.AnnouncementReadWhereUniqueInput[];
    connect?: Prisma.AnnouncementReadWhereUniqueInput | Prisma.AnnouncementReadWhereUniqueInput[];
    update?: Prisma.AnnouncementReadUpdateWithWhereUniqueWithoutAnnouncementInput | Prisma.AnnouncementReadUpdateWithWhereUniqueWithoutAnnouncementInput[];
    updateMany?: Prisma.AnnouncementReadUpdateManyWithWhereWithoutAnnouncementInput | Prisma.AnnouncementReadUpdateManyWithWhereWithoutAnnouncementInput[];
    deleteMany?: Prisma.AnnouncementReadScalarWhereInput | Prisma.AnnouncementReadScalarWhereInput[];
};
export type AnnouncementReadCreateWithoutUserInput = {
    readAt?: Date | string;
    announcement: Prisma.AnnouncementCreateNestedOneWithoutReadsInput;
};
export type AnnouncementReadUncheckedCreateWithoutUserInput = {
    announcementId: string;
    readAt?: Date | string;
};
export type AnnouncementReadCreateOrConnectWithoutUserInput = {
    where: Prisma.AnnouncementReadWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnnouncementReadCreateWithoutUserInput, Prisma.AnnouncementReadUncheckedCreateWithoutUserInput>;
};
export type AnnouncementReadCreateManyUserInputEnvelope = {
    data: Prisma.AnnouncementReadCreateManyUserInput | Prisma.AnnouncementReadCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type AnnouncementReadUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.AnnouncementReadWhereUniqueInput;
    update: Prisma.XOR<Prisma.AnnouncementReadUpdateWithoutUserInput, Prisma.AnnouncementReadUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.AnnouncementReadCreateWithoutUserInput, Prisma.AnnouncementReadUncheckedCreateWithoutUserInput>;
};
export type AnnouncementReadUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.AnnouncementReadWhereUniqueInput;
    data: Prisma.XOR<Prisma.AnnouncementReadUpdateWithoutUserInput, Prisma.AnnouncementReadUncheckedUpdateWithoutUserInput>;
};
export type AnnouncementReadUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.AnnouncementReadScalarWhereInput;
    data: Prisma.XOR<Prisma.AnnouncementReadUpdateManyMutationInput, Prisma.AnnouncementReadUncheckedUpdateManyWithoutUserInput>;
};
export type AnnouncementReadScalarWhereInput = {
    AND?: Prisma.AnnouncementReadScalarWhereInput | Prisma.AnnouncementReadScalarWhereInput[];
    OR?: Prisma.AnnouncementReadScalarWhereInput[];
    NOT?: Prisma.AnnouncementReadScalarWhereInput | Prisma.AnnouncementReadScalarWhereInput[];
    announcementId?: Prisma.UuidFilter<"AnnouncementRead"> | string;
    userId?: Prisma.UuidFilter<"AnnouncementRead"> | string;
    readAt?: Prisma.DateTimeFilter<"AnnouncementRead"> | Date | string;
};
export type AnnouncementReadCreateWithoutAnnouncementInput = {
    readAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutAnnouncementReadsInput;
};
export type AnnouncementReadUncheckedCreateWithoutAnnouncementInput = {
    userId: string;
    readAt?: Date | string;
};
export type AnnouncementReadCreateOrConnectWithoutAnnouncementInput = {
    where: Prisma.AnnouncementReadWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnnouncementReadCreateWithoutAnnouncementInput, Prisma.AnnouncementReadUncheckedCreateWithoutAnnouncementInput>;
};
export type AnnouncementReadCreateManyAnnouncementInputEnvelope = {
    data: Prisma.AnnouncementReadCreateManyAnnouncementInput | Prisma.AnnouncementReadCreateManyAnnouncementInput[];
    skipDuplicates?: boolean;
};
export type AnnouncementReadUpsertWithWhereUniqueWithoutAnnouncementInput = {
    where: Prisma.AnnouncementReadWhereUniqueInput;
    update: Prisma.XOR<Prisma.AnnouncementReadUpdateWithoutAnnouncementInput, Prisma.AnnouncementReadUncheckedUpdateWithoutAnnouncementInput>;
    create: Prisma.XOR<Prisma.AnnouncementReadCreateWithoutAnnouncementInput, Prisma.AnnouncementReadUncheckedCreateWithoutAnnouncementInput>;
};
export type AnnouncementReadUpdateWithWhereUniqueWithoutAnnouncementInput = {
    where: Prisma.AnnouncementReadWhereUniqueInput;
    data: Prisma.XOR<Prisma.AnnouncementReadUpdateWithoutAnnouncementInput, Prisma.AnnouncementReadUncheckedUpdateWithoutAnnouncementInput>;
};
export type AnnouncementReadUpdateManyWithWhereWithoutAnnouncementInput = {
    where: Prisma.AnnouncementReadScalarWhereInput;
    data: Prisma.XOR<Prisma.AnnouncementReadUpdateManyMutationInput, Prisma.AnnouncementReadUncheckedUpdateManyWithoutAnnouncementInput>;
};
export type AnnouncementReadCreateManyUserInput = {
    announcementId: string;
    readAt?: Date | string;
};
export type AnnouncementReadUpdateWithoutUserInput = {
    readAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    announcement?: Prisma.AnnouncementUpdateOneRequiredWithoutReadsNestedInput;
};
export type AnnouncementReadUncheckedUpdateWithoutUserInput = {
    announcementId?: Prisma.StringFieldUpdateOperationsInput | string;
    readAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnnouncementReadUncheckedUpdateManyWithoutUserInput = {
    announcementId?: Prisma.StringFieldUpdateOperationsInput | string;
    readAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnnouncementReadCreateManyAnnouncementInput = {
    userId: string;
    readAt?: Date | string;
};
export type AnnouncementReadUpdateWithoutAnnouncementInput = {
    readAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutAnnouncementReadsNestedInput;
};
export type AnnouncementReadUncheckedUpdateWithoutAnnouncementInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    readAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnnouncementReadUncheckedUpdateManyWithoutAnnouncementInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    readAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnnouncementReadSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    announcementId?: boolean;
    userId?: boolean;
    readAt?: boolean;
    announcement?: boolean | Prisma.AnnouncementDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["announcementRead"]>;
export type AnnouncementReadSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    announcementId?: boolean;
    userId?: boolean;
    readAt?: boolean;
    announcement?: boolean | Prisma.AnnouncementDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["announcementRead"]>;
export type AnnouncementReadSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    announcementId?: boolean;
    userId?: boolean;
    readAt?: boolean;
    announcement?: boolean | Prisma.AnnouncementDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["announcementRead"]>;
export type AnnouncementReadSelectScalar = {
    announcementId?: boolean;
    userId?: boolean;
    readAt?: boolean;
};
export type AnnouncementReadOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"announcementId" | "userId" | "readAt", ExtArgs["result"]["announcementRead"]>;
export type AnnouncementReadInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    announcement?: boolean | Prisma.AnnouncementDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type AnnouncementReadIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    announcement?: boolean | Prisma.AnnouncementDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type AnnouncementReadIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    announcement?: boolean | Prisma.AnnouncementDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $AnnouncementReadPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AnnouncementRead";
    objects: {
        announcement: Prisma.$AnnouncementPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        announcementId: string;
        userId: string;
        readAt: Date;
    }, ExtArgs["result"]["announcementRead"]>;
    composites: {};
};
export type AnnouncementReadGetPayload<S extends boolean | null | undefined | AnnouncementReadDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AnnouncementReadPayload, S>;
export type AnnouncementReadCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AnnouncementReadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AnnouncementReadCountAggregateInputType | true;
};
export interface AnnouncementReadDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AnnouncementRead'];
        meta: {
            name: 'AnnouncementRead';
        };
    };
    findUnique<T extends AnnouncementReadFindUniqueArgs>(args: Prisma.SelectSubset<T, AnnouncementReadFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AnnouncementReadClient<runtime.Types.Result.GetResult<Prisma.$AnnouncementReadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AnnouncementReadFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AnnouncementReadFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnnouncementReadClient<runtime.Types.Result.GetResult<Prisma.$AnnouncementReadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AnnouncementReadFindFirstArgs>(args?: Prisma.SelectSubset<T, AnnouncementReadFindFirstArgs<ExtArgs>>): Prisma.Prisma__AnnouncementReadClient<runtime.Types.Result.GetResult<Prisma.$AnnouncementReadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AnnouncementReadFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AnnouncementReadFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnnouncementReadClient<runtime.Types.Result.GetResult<Prisma.$AnnouncementReadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AnnouncementReadFindManyArgs>(args?: Prisma.SelectSubset<T, AnnouncementReadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnnouncementReadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AnnouncementReadCreateArgs>(args: Prisma.SelectSubset<T, AnnouncementReadCreateArgs<ExtArgs>>): Prisma.Prisma__AnnouncementReadClient<runtime.Types.Result.GetResult<Prisma.$AnnouncementReadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AnnouncementReadCreateManyArgs>(args?: Prisma.SelectSubset<T, AnnouncementReadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AnnouncementReadCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AnnouncementReadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnnouncementReadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AnnouncementReadDeleteArgs>(args: Prisma.SelectSubset<T, AnnouncementReadDeleteArgs<ExtArgs>>): Prisma.Prisma__AnnouncementReadClient<runtime.Types.Result.GetResult<Prisma.$AnnouncementReadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AnnouncementReadUpdateArgs>(args: Prisma.SelectSubset<T, AnnouncementReadUpdateArgs<ExtArgs>>): Prisma.Prisma__AnnouncementReadClient<runtime.Types.Result.GetResult<Prisma.$AnnouncementReadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AnnouncementReadDeleteManyArgs>(args?: Prisma.SelectSubset<T, AnnouncementReadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AnnouncementReadUpdateManyArgs>(args: Prisma.SelectSubset<T, AnnouncementReadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AnnouncementReadUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AnnouncementReadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnnouncementReadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AnnouncementReadUpsertArgs>(args: Prisma.SelectSubset<T, AnnouncementReadUpsertArgs<ExtArgs>>): Prisma.Prisma__AnnouncementReadClient<runtime.Types.Result.GetResult<Prisma.$AnnouncementReadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AnnouncementReadCountArgs>(args?: Prisma.Subset<T, AnnouncementReadCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AnnouncementReadCountAggregateOutputType> : number>;
    aggregate<T extends AnnouncementReadAggregateArgs>(args: Prisma.Subset<T, AnnouncementReadAggregateArgs>): Prisma.PrismaPromise<GetAnnouncementReadAggregateType<T>>;
    groupBy<T extends AnnouncementReadGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AnnouncementReadGroupByArgs['orderBy'];
    } : {
        orderBy?: AnnouncementReadGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AnnouncementReadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnouncementReadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AnnouncementReadFieldRefs;
}
export interface Prisma__AnnouncementReadClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    announcement<T extends Prisma.AnnouncementDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AnnouncementDefaultArgs<ExtArgs>>): Prisma.Prisma__AnnouncementClient<runtime.Types.Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AnnouncementReadFieldRefs {
    readonly announcementId: Prisma.FieldRef<"AnnouncementRead", 'String'>;
    readonly userId: Prisma.FieldRef<"AnnouncementRead", 'String'>;
    readonly readAt: Prisma.FieldRef<"AnnouncementRead", 'DateTime'>;
}
export type AnnouncementReadFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnnouncementReadSelect<ExtArgs> | null;
    omit?: Prisma.AnnouncementReadOmit<ExtArgs> | null;
    include?: Prisma.AnnouncementReadInclude<ExtArgs> | null;
    where: Prisma.AnnouncementReadWhereUniqueInput;
};
export type AnnouncementReadFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnnouncementReadSelect<ExtArgs> | null;
    omit?: Prisma.AnnouncementReadOmit<ExtArgs> | null;
    include?: Prisma.AnnouncementReadInclude<ExtArgs> | null;
    where: Prisma.AnnouncementReadWhereUniqueInput;
};
export type AnnouncementReadFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnnouncementReadSelect<ExtArgs> | null;
    omit?: Prisma.AnnouncementReadOmit<ExtArgs> | null;
    include?: Prisma.AnnouncementReadInclude<ExtArgs> | null;
    where?: Prisma.AnnouncementReadWhereInput;
    orderBy?: Prisma.AnnouncementReadOrderByWithRelationInput | Prisma.AnnouncementReadOrderByWithRelationInput[];
    cursor?: Prisma.AnnouncementReadWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnnouncementReadScalarFieldEnum | Prisma.AnnouncementReadScalarFieldEnum[];
};
export type AnnouncementReadFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnnouncementReadSelect<ExtArgs> | null;
    omit?: Prisma.AnnouncementReadOmit<ExtArgs> | null;
    include?: Prisma.AnnouncementReadInclude<ExtArgs> | null;
    where?: Prisma.AnnouncementReadWhereInput;
    orderBy?: Prisma.AnnouncementReadOrderByWithRelationInput | Prisma.AnnouncementReadOrderByWithRelationInput[];
    cursor?: Prisma.AnnouncementReadWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnnouncementReadScalarFieldEnum | Prisma.AnnouncementReadScalarFieldEnum[];
};
export type AnnouncementReadFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnnouncementReadSelect<ExtArgs> | null;
    omit?: Prisma.AnnouncementReadOmit<ExtArgs> | null;
    include?: Prisma.AnnouncementReadInclude<ExtArgs> | null;
    where?: Prisma.AnnouncementReadWhereInput;
    orderBy?: Prisma.AnnouncementReadOrderByWithRelationInput | Prisma.AnnouncementReadOrderByWithRelationInput[];
    cursor?: Prisma.AnnouncementReadWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnnouncementReadScalarFieldEnum | Prisma.AnnouncementReadScalarFieldEnum[];
};
export type AnnouncementReadCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnnouncementReadSelect<ExtArgs> | null;
    omit?: Prisma.AnnouncementReadOmit<ExtArgs> | null;
    include?: Prisma.AnnouncementReadInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnnouncementReadCreateInput, Prisma.AnnouncementReadUncheckedCreateInput>;
};
export type AnnouncementReadCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AnnouncementReadCreateManyInput | Prisma.AnnouncementReadCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AnnouncementReadCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnnouncementReadSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnnouncementReadOmit<ExtArgs> | null;
    data: Prisma.AnnouncementReadCreateManyInput | Prisma.AnnouncementReadCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AnnouncementReadIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AnnouncementReadUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnnouncementReadSelect<ExtArgs> | null;
    omit?: Prisma.AnnouncementReadOmit<ExtArgs> | null;
    include?: Prisma.AnnouncementReadInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnnouncementReadUpdateInput, Prisma.AnnouncementReadUncheckedUpdateInput>;
    where: Prisma.AnnouncementReadWhereUniqueInput;
};
export type AnnouncementReadUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AnnouncementReadUpdateManyMutationInput, Prisma.AnnouncementReadUncheckedUpdateManyInput>;
    where?: Prisma.AnnouncementReadWhereInput;
    limit?: number;
};
export type AnnouncementReadUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnnouncementReadSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnnouncementReadOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnnouncementReadUpdateManyMutationInput, Prisma.AnnouncementReadUncheckedUpdateManyInput>;
    where?: Prisma.AnnouncementReadWhereInput;
    limit?: number;
    include?: Prisma.AnnouncementReadIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AnnouncementReadUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnnouncementReadSelect<ExtArgs> | null;
    omit?: Prisma.AnnouncementReadOmit<ExtArgs> | null;
    include?: Prisma.AnnouncementReadInclude<ExtArgs> | null;
    where: Prisma.AnnouncementReadWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnnouncementReadCreateInput, Prisma.AnnouncementReadUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AnnouncementReadUpdateInput, Prisma.AnnouncementReadUncheckedUpdateInput>;
};
export type AnnouncementReadDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnnouncementReadSelect<ExtArgs> | null;
    omit?: Prisma.AnnouncementReadOmit<ExtArgs> | null;
    include?: Prisma.AnnouncementReadInclude<ExtArgs> | null;
    where: Prisma.AnnouncementReadWhereUniqueInput;
};
export type AnnouncementReadDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnnouncementReadWhereInput;
    limit?: number;
};
export type AnnouncementReadDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnnouncementReadSelect<ExtArgs> | null;
    omit?: Prisma.AnnouncementReadOmit<ExtArgs> | null;
    include?: Prisma.AnnouncementReadInclude<ExtArgs> | null;
};
