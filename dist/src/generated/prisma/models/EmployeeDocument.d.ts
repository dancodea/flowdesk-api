import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EmployeeDocumentModel = runtime.Types.Result.DefaultSelection<Prisma.$EmployeeDocumentPayload>;
export type AggregateEmployeeDocument = {
    _count: EmployeeDocumentCountAggregateOutputType | null;
    _avg: EmployeeDocumentAvgAggregateOutputType | null;
    _sum: EmployeeDocumentSumAggregateOutputType | null;
    _min: EmployeeDocumentMinAggregateOutputType | null;
    _max: EmployeeDocumentMaxAggregateOutputType | null;
};
export type EmployeeDocumentAvgAggregateOutputType = {
    fileSize: number | null;
};
export type EmployeeDocumentSumAggregateOutputType = {
    fileSize: bigint | null;
};
export type EmployeeDocumentMinAggregateOutputType = {
    id: string | null;
    employeeId: string | null;
    name: string | null;
    type: string | null;
    cloudinaryPublicId: string | null;
    secureUrl: string | null;
    fileSize: bigint | null;
    mimeType: string | null;
    expiryDate: Date | null;
    signedAt: Date | null;
    uploadedBy: string | null;
    createdAt: Date | null;
};
export type EmployeeDocumentMaxAggregateOutputType = {
    id: string | null;
    employeeId: string | null;
    name: string | null;
    type: string | null;
    cloudinaryPublicId: string | null;
    secureUrl: string | null;
    fileSize: bigint | null;
    mimeType: string | null;
    expiryDate: Date | null;
    signedAt: Date | null;
    uploadedBy: string | null;
    createdAt: Date | null;
};
export type EmployeeDocumentCountAggregateOutputType = {
    id: number;
    employeeId: number;
    name: number;
    type: number;
    cloudinaryPublicId: number;
    secureUrl: number;
    fileSize: number;
    mimeType: number;
    expiryDate: number;
    signedAt: number;
    uploadedBy: number;
    createdAt: number;
    _all: number;
};
export type EmployeeDocumentAvgAggregateInputType = {
    fileSize?: true;
};
export type EmployeeDocumentSumAggregateInputType = {
    fileSize?: true;
};
export type EmployeeDocumentMinAggregateInputType = {
    id?: true;
    employeeId?: true;
    name?: true;
    type?: true;
    cloudinaryPublicId?: true;
    secureUrl?: true;
    fileSize?: true;
    mimeType?: true;
    expiryDate?: true;
    signedAt?: true;
    uploadedBy?: true;
    createdAt?: true;
};
export type EmployeeDocumentMaxAggregateInputType = {
    id?: true;
    employeeId?: true;
    name?: true;
    type?: true;
    cloudinaryPublicId?: true;
    secureUrl?: true;
    fileSize?: true;
    mimeType?: true;
    expiryDate?: true;
    signedAt?: true;
    uploadedBy?: true;
    createdAt?: true;
};
export type EmployeeDocumentCountAggregateInputType = {
    id?: true;
    employeeId?: true;
    name?: true;
    type?: true;
    cloudinaryPublicId?: true;
    secureUrl?: true;
    fileSize?: true;
    mimeType?: true;
    expiryDate?: true;
    signedAt?: true;
    uploadedBy?: true;
    createdAt?: true;
    _all?: true;
};
export type EmployeeDocumentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeDocumentWhereInput;
    orderBy?: Prisma.EmployeeDocumentOrderByWithRelationInput | Prisma.EmployeeDocumentOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EmployeeDocumentCountAggregateInputType;
    _avg?: EmployeeDocumentAvgAggregateInputType;
    _sum?: EmployeeDocumentSumAggregateInputType;
    _min?: EmployeeDocumentMinAggregateInputType;
    _max?: EmployeeDocumentMaxAggregateInputType;
};
export type GetEmployeeDocumentAggregateType<T extends EmployeeDocumentAggregateArgs> = {
    [P in keyof T & keyof AggregateEmployeeDocument]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEmployeeDocument[P]> : Prisma.GetScalarType<T[P], AggregateEmployeeDocument[P]>;
};
export type EmployeeDocumentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeDocumentWhereInput;
    orderBy?: Prisma.EmployeeDocumentOrderByWithAggregationInput | Prisma.EmployeeDocumentOrderByWithAggregationInput[];
    by: Prisma.EmployeeDocumentScalarFieldEnum[] | Prisma.EmployeeDocumentScalarFieldEnum;
    having?: Prisma.EmployeeDocumentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EmployeeDocumentCountAggregateInputType | true;
    _avg?: EmployeeDocumentAvgAggregateInputType;
    _sum?: EmployeeDocumentSumAggregateInputType;
    _min?: EmployeeDocumentMinAggregateInputType;
    _max?: EmployeeDocumentMaxAggregateInputType;
};
export type EmployeeDocumentGroupByOutputType = {
    id: string;
    employeeId: string;
    name: string;
    type: string | null;
    cloudinaryPublicId: string;
    secureUrl: string | null;
    fileSize: bigint | null;
    mimeType: string | null;
    expiryDate: Date | null;
    signedAt: Date | null;
    uploadedBy: string | null;
    createdAt: Date;
    _count: EmployeeDocumentCountAggregateOutputType | null;
    _avg: EmployeeDocumentAvgAggregateOutputType | null;
    _sum: EmployeeDocumentSumAggregateOutputType | null;
    _min: EmployeeDocumentMinAggregateOutputType | null;
    _max: EmployeeDocumentMaxAggregateOutputType | null;
};
export type GetEmployeeDocumentGroupByPayload<T extends EmployeeDocumentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EmployeeDocumentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EmployeeDocumentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EmployeeDocumentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EmployeeDocumentGroupByOutputType[P]>;
}>>;
export type EmployeeDocumentWhereInput = {
    AND?: Prisma.EmployeeDocumentWhereInput | Prisma.EmployeeDocumentWhereInput[];
    OR?: Prisma.EmployeeDocumentWhereInput[];
    NOT?: Prisma.EmployeeDocumentWhereInput | Prisma.EmployeeDocumentWhereInput[];
    id?: Prisma.UuidFilter<"EmployeeDocument"> | string;
    employeeId?: Prisma.UuidFilter<"EmployeeDocument"> | string;
    name?: Prisma.StringFilter<"EmployeeDocument"> | string;
    type?: Prisma.StringNullableFilter<"EmployeeDocument"> | string | null;
    cloudinaryPublicId?: Prisma.StringFilter<"EmployeeDocument"> | string;
    secureUrl?: Prisma.StringNullableFilter<"EmployeeDocument"> | string | null;
    fileSize?: Prisma.BigIntNullableFilter<"EmployeeDocument"> | bigint | number | null;
    mimeType?: Prisma.StringNullableFilter<"EmployeeDocument"> | string | null;
    expiryDate?: Prisma.DateTimeNullableFilter<"EmployeeDocument"> | Date | string | null;
    signedAt?: Prisma.DateTimeNullableFilter<"EmployeeDocument"> | Date | string | null;
    uploadedBy?: Prisma.UuidNullableFilter<"EmployeeDocument"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"EmployeeDocument"> | Date | string;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
};
export type EmployeeDocumentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrderInput | Prisma.SortOrder;
    cloudinaryPublicId?: Prisma.SortOrder;
    secureUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    fileSize?: Prisma.SortOrderInput | Prisma.SortOrder;
    mimeType?: Prisma.SortOrderInput | Prisma.SortOrder;
    expiryDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    signedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    uploadedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    employee?: Prisma.EmployeeOrderByWithRelationInput;
};
export type EmployeeDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.EmployeeDocumentWhereInput | Prisma.EmployeeDocumentWhereInput[];
    OR?: Prisma.EmployeeDocumentWhereInput[];
    NOT?: Prisma.EmployeeDocumentWhereInput | Prisma.EmployeeDocumentWhereInput[];
    employeeId?: Prisma.UuidFilter<"EmployeeDocument"> | string;
    name?: Prisma.StringFilter<"EmployeeDocument"> | string;
    type?: Prisma.StringNullableFilter<"EmployeeDocument"> | string | null;
    cloudinaryPublicId?: Prisma.StringFilter<"EmployeeDocument"> | string;
    secureUrl?: Prisma.StringNullableFilter<"EmployeeDocument"> | string | null;
    fileSize?: Prisma.BigIntNullableFilter<"EmployeeDocument"> | bigint | number | null;
    mimeType?: Prisma.StringNullableFilter<"EmployeeDocument"> | string | null;
    expiryDate?: Prisma.DateTimeNullableFilter<"EmployeeDocument"> | Date | string | null;
    signedAt?: Prisma.DateTimeNullableFilter<"EmployeeDocument"> | Date | string | null;
    uploadedBy?: Prisma.UuidNullableFilter<"EmployeeDocument"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"EmployeeDocument"> | Date | string;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
}, "id">;
export type EmployeeDocumentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrderInput | Prisma.SortOrder;
    cloudinaryPublicId?: Prisma.SortOrder;
    secureUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    fileSize?: Prisma.SortOrderInput | Prisma.SortOrder;
    mimeType?: Prisma.SortOrderInput | Prisma.SortOrder;
    expiryDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    signedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    uploadedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.EmployeeDocumentCountOrderByAggregateInput;
    _avg?: Prisma.EmployeeDocumentAvgOrderByAggregateInput;
    _max?: Prisma.EmployeeDocumentMaxOrderByAggregateInput;
    _min?: Prisma.EmployeeDocumentMinOrderByAggregateInput;
    _sum?: Prisma.EmployeeDocumentSumOrderByAggregateInput;
};
export type EmployeeDocumentScalarWhereWithAggregatesInput = {
    AND?: Prisma.EmployeeDocumentScalarWhereWithAggregatesInput | Prisma.EmployeeDocumentScalarWhereWithAggregatesInput[];
    OR?: Prisma.EmployeeDocumentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EmployeeDocumentScalarWhereWithAggregatesInput | Prisma.EmployeeDocumentScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"EmployeeDocument"> | string;
    employeeId?: Prisma.UuidWithAggregatesFilter<"EmployeeDocument"> | string;
    name?: Prisma.StringWithAggregatesFilter<"EmployeeDocument"> | string;
    type?: Prisma.StringNullableWithAggregatesFilter<"EmployeeDocument"> | string | null;
    cloudinaryPublicId?: Prisma.StringWithAggregatesFilter<"EmployeeDocument"> | string;
    secureUrl?: Prisma.StringNullableWithAggregatesFilter<"EmployeeDocument"> | string | null;
    fileSize?: Prisma.BigIntNullableWithAggregatesFilter<"EmployeeDocument"> | bigint | number | null;
    mimeType?: Prisma.StringNullableWithAggregatesFilter<"EmployeeDocument"> | string | null;
    expiryDate?: Prisma.DateTimeNullableWithAggregatesFilter<"EmployeeDocument"> | Date | string | null;
    signedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"EmployeeDocument"> | Date | string | null;
    uploadedBy?: Prisma.UuidNullableWithAggregatesFilter<"EmployeeDocument"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"EmployeeDocument"> | Date | string;
};
export type EmployeeDocumentCreateInput = {
    id?: string;
    name: string;
    type?: string | null;
    cloudinaryPublicId: string;
    secureUrl?: string | null;
    fileSize?: bigint | number | null;
    mimeType?: string | null;
    expiryDate?: Date | string | null;
    signedAt?: Date | string | null;
    uploadedBy?: string | null;
    createdAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutDocumentsInput;
};
export type EmployeeDocumentUncheckedCreateInput = {
    id?: string;
    employeeId: string;
    name: string;
    type?: string | null;
    cloudinaryPublicId: string;
    secureUrl?: string | null;
    fileSize?: bigint | number | null;
    mimeType?: string | null;
    expiryDate?: Date | string | null;
    signedAt?: Date | string | null;
    uploadedBy?: string | null;
    createdAt?: Date | string;
};
export type EmployeeDocumentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cloudinaryPublicId?: Prisma.StringFieldUpdateOperationsInput | string;
    secureUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileSize?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiryDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    signedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    uploadedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutDocumentsNestedInput;
};
export type EmployeeDocumentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cloudinaryPublicId?: Prisma.StringFieldUpdateOperationsInput | string;
    secureUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileSize?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiryDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    signedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    uploadedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeDocumentCreateManyInput = {
    id?: string;
    employeeId: string;
    name: string;
    type?: string | null;
    cloudinaryPublicId: string;
    secureUrl?: string | null;
    fileSize?: bigint | number | null;
    mimeType?: string | null;
    expiryDate?: Date | string | null;
    signedAt?: Date | string | null;
    uploadedBy?: string | null;
    createdAt?: Date | string;
};
export type EmployeeDocumentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cloudinaryPublicId?: Prisma.StringFieldUpdateOperationsInput | string;
    secureUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileSize?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiryDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    signedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    uploadedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeDocumentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cloudinaryPublicId?: Prisma.StringFieldUpdateOperationsInput | string;
    secureUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileSize?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiryDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    signedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    uploadedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeDocumentListRelationFilter = {
    every?: Prisma.EmployeeDocumentWhereInput;
    some?: Prisma.EmployeeDocumentWhereInput;
    none?: Prisma.EmployeeDocumentWhereInput;
};
export type EmployeeDocumentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EmployeeDocumentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    cloudinaryPublicId?: Prisma.SortOrder;
    secureUrl?: Prisma.SortOrder;
    fileSize?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    expiryDate?: Prisma.SortOrder;
    signedAt?: Prisma.SortOrder;
    uploadedBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EmployeeDocumentAvgOrderByAggregateInput = {
    fileSize?: Prisma.SortOrder;
};
export type EmployeeDocumentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    cloudinaryPublicId?: Prisma.SortOrder;
    secureUrl?: Prisma.SortOrder;
    fileSize?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    expiryDate?: Prisma.SortOrder;
    signedAt?: Prisma.SortOrder;
    uploadedBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EmployeeDocumentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    cloudinaryPublicId?: Prisma.SortOrder;
    secureUrl?: Prisma.SortOrder;
    fileSize?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    expiryDate?: Prisma.SortOrder;
    signedAt?: Prisma.SortOrder;
    uploadedBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EmployeeDocumentSumOrderByAggregateInput = {
    fileSize?: Prisma.SortOrder;
};
export type EmployeeDocumentCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.EmployeeDocumentCreateWithoutEmployeeInput, Prisma.EmployeeDocumentUncheckedCreateWithoutEmployeeInput> | Prisma.EmployeeDocumentCreateWithoutEmployeeInput[] | Prisma.EmployeeDocumentUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.EmployeeDocumentCreateOrConnectWithoutEmployeeInput | Prisma.EmployeeDocumentCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.EmployeeDocumentCreateManyEmployeeInputEnvelope;
    connect?: Prisma.EmployeeDocumentWhereUniqueInput | Prisma.EmployeeDocumentWhereUniqueInput[];
};
export type EmployeeDocumentUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.EmployeeDocumentCreateWithoutEmployeeInput, Prisma.EmployeeDocumentUncheckedCreateWithoutEmployeeInput> | Prisma.EmployeeDocumentCreateWithoutEmployeeInput[] | Prisma.EmployeeDocumentUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.EmployeeDocumentCreateOrConnectWithoutEmployeeInput | Prisma.EmployeeDocumentCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.EmployeeDocumentCreateManyEmployeeInputEnvelope;
    connect?: Prisma.EmployeeDocumentWhereUniqueInput | Prisma.EmployeeDocumentWhereUniqueInput[];
};
export type EmployeeDocumentUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeDocumentCreateWithoutEmployeeInput, Prisma.EmployeeDocumentUncheckedCreateWithoutEmployeeInput> | Prisma.EmployeeDocumentCreateWithoutEmployeeInput[] | Prisma.EmployeeDocumentUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.EmployeeDocumentCreateOrConnectWithoutEmployeeInput | Prisma.EmployeeDocumentCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.EmployeeDocumentUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.EmployeeDocumentUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.EmployeeDocumentCreateManyEmployeeInputEnvelope;
    set?: Prisma.EmployeeDocumentWhereUniqueInput | Prisma.EmployeeDocumentWhereUniqueInput[];
    disconnect?: Prisma.EmployeeDocumentWhereUniqueInput | Prisma.EmployeeDocumentWhereUniqueInput[];
    delete?: Prisma.EmployeeDocumentWhereUniqueInput | Prisma.EmployeeDocumentWhereUniqueInput[];
    connect?: Prisma.EmployeeDocumentWhereUniqueInput | Prisma.EmployeeDocumentWhereUniqueInput[];
    update?: Prisma.EmployeeDocumentUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.EmployeeDocumentUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.EmployeeDocumentUpdateManyWithWhereWithoutEmployeeInput | Prisma.EmployeeDocumentUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.EmployeeDocumentScalarWhereInput | Prisma.EmployeeDocumentScalarWhereInput[];
};
export type EmployeeDocumentUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeDocumentCreateWithoutEmployeeInput, Prisma.EmployeeDocumentUncheckedCreateWithoutEmployeeInput> | Prisma.EmployeeDocumentCreateWithoutEmployeeInput[] | Prisma.EmployeeDocumentUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.EmployeeDocumentCreateOrConnectWithoutEmployeeInput | Prisma.EmployeeDocumentCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.EmployeeDocumentUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.EmployeeDocumentUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.EmployeeDocumentCreateManyEmployeeInputEnvelope;
    set?: Prisma.EmployeeDocumentWhereUniqueInput | Prisma.EmployeeDocumentWhereUniqueInput[];
    disconnect?: Prisma.EmployeeDocumentWhereUniqueInput | Prisma.EmployeeDocumentWhereUniqueInput[];
    delete?: Prisma.EmployeeDocumentWhereUniqueInput | Prisma.EmployeeDocumentWhereUniqueInput[];
    connect?: Prisma.EmployeeDocumentWhereUniqueInput | Prisma.EmployeeDocumentWhereUniqueInput[];
    update?: Prisma.EmployeeDocumentUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.EmployeeDocumentUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.EmployeeDocumentUpdateManyWithWhereWithoutEmployeeInput | Prisma.EmployeeDocumentUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.EmployeeDocumentScalarWhereInput | Prisma.EmployeeDocumentScalarWhereInput[];
};
export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null;
    increment?: bigint | number;
    decrement?: bigint | number;
    multiply?: bigint | number;
    divide?: bigint | number;
};
export type EmployeeDocumentCreateWithoutEmployeeInput = {
    id?: string;
    name: string;
    type?: string | null;
    cloudinaryPublicId: string;
    secureUrl?: string | null;
    fileSize?: bigint | number | null;
    mimeType?: string | null;
    expiryDate?: Date | string | null;
    signedAt?: Date | string | null;
    uploadedBy?: string | null;
    createdAt?: Date | string;
};
export type EmployeeDocumentUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    name: string;
    type?: string | null;
    cloudinaryPublicId: string;
    secureUrl?: string | null;
    fileSize?: bigint | number | null;
    mimeType?: string | null;
    expiryDate?: Date | string | null;
    signedAt?: Date | string | null;
    uploadedBy?: string | null;
    createdAt?: Date | string;
};
export type EmployeeDocumentCreateOrConnectWithoutEmployeeInput = {
    where: Prisma.EmployeeDocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeeDocumentCreateWithoutEmployeeInput, Prisma.EmployeeDocumentUncheckedCreateWithoutEmployeeInput>;
};
export type EmployeeDocumentCreateManyEmployeeInputEnvelope = {
    data: Prisma.EmployeeDocumentCreateManyEmployeeInput | Prisma.EmployeeDocumentCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
};
export type EmployeeDocumentUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.EmployeeDocumentWhereUniqueInput;
    update: Prisma.XOR<Prisma.EmployeeDocumentUpdateWithoutEmployeeInput, Prisma.EmployeeDocumentUncheckedUpdateWithoutEmployeeInput>;
    create: Prisma.XOR<Prisma.EmployeeDocumentCreateWithoutEmployeeInput, Prisma.EmployeeDocumentUncheckedCreateWithoutEmployeeInput>;
};
export type EmployeeDocumentUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.EmployeeDocumentWhereUniqueInput;
    data: Prisma.XOR<Prisma.EmployeeDocumentUpdateWithoutEmployeeInput, Prisma.EmployeeDocumentUncheckedUpdateWithoutEmployeeInput>;
};
export type EmployeeDocumentUpdateManyWithWhereWithoutEmployeeInput = {
    where: Prisma.EmployeeDocumentScalarWhereInput;
    data: Prisma.XOR<Prisma.EmployeeDocumentUpdateManyMutationInput, Prisma.EmployeeDocumentUncheckedUpdateManyWithoutEmployeeInput>;
};
export type EmployeeDocumentScalarWhereInput = {
    AND?: Prisma.EmployeeDocumentScalarWhereInput | Prisma.EmployeeDocumentScalarWhereInput[];
    OR?: Prisma.EmployeeDocumentScalarWhereInput[];
    NOT?: Prisma.EmployeeDocumentScalarWhereInput | Prisma.EmployeeDocumentScalarWhereInput[];
    id?: Prisma.UuidFilter<"EmployeeDocument"> | string;
    employeeId?: Prisma.UuidFilter<"EmployeeDocument"> | string;
    name?: Prisma.StringFilter<"EmployeeDocument"> | string;
    type?: Prisma.StringNullableFilter<"EmployeeDocument"> | string | null;
    cloudinaryPublicId?: Prisma.StringFilter<"EmployeeDocument"> | string;
    secureUrl?: Prisma.StringNullableFilter<"EmployeeDocument"> | string | null;
    fileSize?: Prisma.BigIntNullableFilter<"EmployeeDocument"> | bigint | number | null;
    mimeType?: Prisma.StringNullableFilter<"EmployeeDocument"> | string | null;
    expiryDate?: Prisma.DateTimeNullableFilter<"EmployeeDocument"> | Date | string | null;
    signedAt?: Prisma.DateTimeNullableFilter<"EmployeeDocument"> | Date | string | null;
    uploadedBy?: Prisma.UuidNullableFilter<"EmployeeDocument"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"EmployeeDocument"> | Date | string;
};
export type EmployeeDocumentCreateManyEmployeeInput = {
    id?: string;
    name: string;
    type?: string | null;
    cloudinaryPublicId: string;
    secureUrl?: string | null;
    fileSize?: bigint | number | null;
    mimeType?: string | null;
    expiryDate?: Date | string | null;
    signedAt?: Date | string | null;
    uploadedBy?: string | null;
    createdAt?: Date | string;
};
export type EmployeeDocumentUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cloudinaryPublicId?: Prisma.StringFieldUpdateOperationsInput | string;
    secureUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileSize?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiryDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    signedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    uploadedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeDocumentUncheckedUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cloudinaryPublicId?: Prisma.StringFieldUpdateOperationsInput | string;
    secureUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileSize?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiryDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    signedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    uploadedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeDocumentUncheckedUpdateManyWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cloudinaryPublicId?: Prisma.StringFieldUpdateOperationsInput | string;
    secureUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileSize?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiryDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    signedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    uploadedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeDocumentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    name?: boolean;
    type?: boolean;
    cloudinaryPublicId?: boolean;
    secureUrl?: boolean;
    fileSize?: boolean;
    mimeType?: boolean;
    expiryDate?: boolean;
    signedAt?: boolean;
    uploadedBy?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["employeeDocument"]>;
export type EmployeeDocumentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    name?: boolean;
    type?: boolean;
    cloudinaryPublicId?: boolean;
    secureUrl?: boolean;
    fileSize?: boolean;
    mimeType?: boolean;
    expiryDate?: boolean;
    signedAt?: boolean;
    uploadedBy?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["employeeDocument"]>;
export type EmployeeDocumentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    name?: boolean;
    type?: boolean;
    cloudinaryPublicId?: boolean;
    secureUrl?: boolean;
    fileSize?: boolean;
    mimeType?: boolean;
    expiryDate?: boolean;
    signedAt?: boolean;
    uploadedBy?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["employeeDocument"]>;
export type EmployeeDocumentSelectScalar = {
    id?: boolean;
    employeeId?: boolean;
    name?: boolean;
    type?: boolean;
    cloudinaryPublicId?: boolean;
    secureUrl?: boolean;
    fileSize?: boolean;
    mimeType?: boolean;
    expiryDate?: boolean;
    signedAt?: boolean;
    uploadedBy?: boolean;
    createdAt?: boolean;
};
export type EmployeeDocumentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "employeeId" | "name" | "type" | "cloudinaryPublicId" | "secureUrl" | "fileSize" | "mimeType" | "expiryDate" | "signedAt" | "uploadedBy" | "createdAt", ExtArgs["result"]["employeeDocument"]>;
export type EmployeeDocumentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type EmployeeDocumentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type EmployeeDocumentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type $EmployeeDocumentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EmployeeDocument";
    objects: {
        employee: Prisma.$EmployeePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        employeeId: string;
        name: string;
        type: string | null;
        cloudinaryPublicId: string;
        secureUrl: string | null;
        fileSize: bigint | null;
        mimeType: string | null;
        expiryDate: Date | null;
        signedAt: Date | null;
        uploadedBy: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["employeeDocument"]>;
    composites: {};
};
export type EmployeeDocumentGetPayload<S extends boolean | null | undefined | EmployeeDocumentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EmployeeDocumentPayload, S>;
export type EmployeeDocumentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EmployeeDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EmployeeDocumentCountAggregateInputType | true;
};
export interface EmployeeDocumentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EmployeeDocument'];
        meta: {
            name: 'EmployeeDocument';
        };
    };
    findUnique<T extends EmployeeDocumentFindUniqueArgs>(args: Prisma.SelectSubset<T, EmployeeDocumentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EmployeeDocumentClient<runtime.Types.Result.GetResult<Prisma.$EmployeeDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EmployeeDocumentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EmployeeDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmployeeDocumentClient<runtime.Types.Result.GetResult<Prisma.$EmployeeDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EmployeeDocumentFindFirstArgs>(args?: Prisma.SelectSubset<T, EmployeeDocumentFindFirstArgs<ExtArgs>>): Prisma.Prisma__EmployeeDocumentClient<runtime.Types.Result.GetResult<Prisma.$EmployeeDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EmployeeDocumentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EmployeeDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmployeeDocumentClient<runtime.Types.Result.GetResult<Prisma.$EmployeeDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EmployeeDocumentFindManyArgs>(args?: Prisma.SelectSubset<T, EmployeeDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeeDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EmployeeDocumentCreateArgs>(args: Prisma.SelectSubset<T, EmployeeDocumentCreateArgs<ExtArgs>>): Prisma.Prisma__EmployeeDocumentClient<runtime.Types.Result.GetResult<Prisma.$EmployeeDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EmployeeDocumentCreateManyArgs>(args?: Prisma.SelectSubset<T, EmployeeDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EmployeeDocumentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EmployeeDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeeDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EmployeeDocumentDeleteArgs>(args: Prisma.SelectSubset<T, EmployeeDocumentDeleteArgs<ExtArgs>>): Prisma.Prisma__EmployeeDocumentClient<runtime.Types.Result.GetResult<Prisma.$EmployeeDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EmployeeDocumentUpdateArgs>(args: Prisma.SelectSubset<T, EmployeeDocumentUpdateArgs<ExtArgs>>): Prisma.Prisma__EmployeeDocumentClient<runtime.Types.Result.GetResult<Prisma.$EmployeeDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EmployeeDocumentDeleteManyArgs>(args?: Prisma.SelectSubset<T, EmployeeDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EmployeeDocumentUpdateManyArgs>(args: Prisma.SelectSubset<T, EmployeeDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EmployeeDocumentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EmployeeDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeeDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EmployeeDocumentUpsertArgs>(args: Prisma.SelectSubset<T, EmployeeDocumentUpsertArgs<ExtArgs>>): Prisma.Prisma__EmployeeDocumentClient<runtime.Types.Result.GetResult<Prisma.$EmployeeDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EmployeeDocumentCountArgs>(args?: Prisma.Subset<T, EmployeeDocumentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EmployeeDocumentCountAggregateOutputType> : number>;
    aggregate<T extends EmployeeDocumentAggregateArgs>(args: Prisma.Subset<T, EmployeeDocumentAggregateArgs>): Prisma.PrismaPromise<GetEmployeeDocumentAggregateType<T>>;
    groupBy<T extends EmployeeDocumentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EmployeeDocumentGroupByArgs['orderBy'];
    } : {
        orderBy?: EmployeeDocumentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EmployeeDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EmployeeDocumentFieldRefs;
}
export interface Prisma__EmployeeDocumentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    employee<T extends Prisma.EmployeeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmployeeDefaultArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EmployeeDocumentFieldRefs {
    readonly id: Prisma.FieldRef<"EmployeeDocument", 'String'>;
    readonly employeeId: Prisma.FieldRef<"EmployeeDocument", 'String'>;
    readonly name: Prisma.FieldRef<"EmployeeDocument", 'String'>;
    readonly type: Prisma.FieldRef<"EmployeeDocument", 'String'>;
    readonly cloudinaryPublicId: Prisma.FieldRef<"EmployeeDocument", 'String'>;
    readonly secureUrl: Prisma.FieldRef<"EmployeeDocument", 'String'>;
    readonly fileSize: Prisma.FieldRef<"EmployeeDocument", 'BigInt'>;
    readonly mimeType: Prisma.FieldRef<"EmployeeDocument", 'String'>;
    readonly expiryDate: Prisma.FieldRef<"EmployeeDocument", 'DateTime'>;
    readonly signedAt: Prisma.FieldRef<"EmployeeDocument", 'DateTime'>;
    readonly uploadedBy: Prisma.FieldRef<"EmployeeDocument", 'String'>;
    readonly createdAt: Prisma.FieldRef<"EmployeeDocument", 'DateTime'>;
}
export type EmployeeDocumentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeDocumentSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeDocumentOmit<ExtArgs> | null;
    include?: Prisma.EmployeeDocumentInclude<ExtArgs> | null;
    where: Prisma.EmployeeDocumentWhereUniqueInput;
};
export type EmployeeDocumentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeDocumentSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeDocumentOmit<ExtArgs> | null;
    include?: Prisma.EmployeeDocumentInclude<ExtArgs> | null;
    where: Prisma.EmployeeDocumentWhereUniqueInput;
};
export type EmployeeDocumentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeDocumentSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeDocumentOmit<ExtArgs> | null;
    include?: Prisma.EmployeeDocumentInclude<ExtArgs> | null;
    where?: Prisma.EmployeeDocumentWhereInput;
    orderBy?: Prisma.EmployeeDocumentOrderByWithRelationInput | Prisma.EmployeeDocumentOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeDocumentScalarFieldEnum | Prisma.EmployeeDocumentScalarFieldEnum[];
};
export type EmployeeDocumentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeDocumentSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeDocumentOmit<ExtArgs> | null;
    include?: Prisma.EmployeeDocumentInclude<ExtArgs> | null;
    where?: Prisma.EmployeeDocumentWhereInput;
    orderBy?: Prisma.EmployeeDocumentOrderByWithRelationInput | Prisma.EmployeeDocumentOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeDocumentScalarFieldEnum | Prisma.EmployeeDocumentScalarFieldEnum[];
};
export type EmployeeDocumentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeDocumentSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeDocumentOmit<ExtArgs> | null;
    include?: Prisma.EmployeeDocumentInclude<ExtArgs> | null;
    where?: Prisma.EmployeeDocumentWhereInput;
    orderBy?: Prisma.EmployeeDocumentOrderByWithRelationInput | Prisma.EmployeeDocumentOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeDocumentScalarFieldEnum | Prisma.EmployeeDocumentScalarFieldEnum[];
};
export type EmployeeDocumentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeDocumentSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeDocumentOmit<ExtArgs> | null;
    include?: Prisma.EmployeeDocumentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeeDocumentCreateInput, Prisma.EmployeeDocumentUncheckedCreateInput>;
};
export type EmployeeDocumentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EmployeeDocumentCreateManyInput | Prisma.EmployeeDocumentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EmployeeDocumentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeDocumentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EmployeeDocumentOmit<ExtArgs> | null;
    data: Prisma.EmployeeDocumentCreateManyInput | Prisma.EmployeeDocumentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EmployeeDocumentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EmployeeDocumentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeDocumentSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeDocumentOmit<ExtArgs> | null;
    include?: Prisma.EmployeeDocumentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeeDocumentUpdateInput, Prisma.EmployeeDocumentUncheckedUpdateInput>;
    where: Prisma.EmployeeDocumentWhereUniqueInput;
};
export type EmployeeDocumentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EmployeeDocumentUpdateManyMutationInput, Prisma.EmployeeDocumentUncheckedUpdateManyInput>;
    where?: Prisma.EmployeeDocumentWhereInput;
    limit?: number;
};
export type EmployeeDocumentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeDocumentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EmployeeDocumentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeeDocumentUpdateManyMutationInput, Prisma.EmployeeDocumentUncheckedUpdateManyInput>;
    where?: Prisma.EmployeeDocumentWhereInput;
    limit?: number;
    include?: Prisma.EmployeeDocumentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EmployeeDocumentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeDocumentSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeDocumentOmit<ExtArgs> | null;
    include?: Prisma.EmployeeDocumentInclude<ExtArgs> | null;
    where: Prisma.EmployeeDocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeeDocumentCreateInput, Prisma.EmployeeDocumentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EmployeeDocumentUpdateInput, Prisma.EmployeeDocumentUncheckedUpdateInput>;
};
export type EmployeeDocumentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeDocumentSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeDocumentOmit<ExtArgs> | null;
    include?: Prisma.EmployeeDocumentInclude<ExtArgs> | null;
    where: Prisma.EmployeeDocumentWhereUniqueInput;
};
export type EmployeeDocumentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeDocumentWhereInput;
    limit?: number;
};
export type EmployeeDocumentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeDocumentSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeDocumentOmit<ExtArgs> | null;
    include?: Prisma.EmployeeDocumentInclude<ExtArgs> | null;
};
