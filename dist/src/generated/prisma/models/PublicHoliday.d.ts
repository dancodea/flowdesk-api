import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PublicHolidayModel = runtime.Types.Result.DefaultSelection<Prisma.$PublicHolidayPayload>;
export type AggregatePublicHoliday = {
    _count: PublicHolidayCountAggregateOutputType | null;
    _min: PublicHolidayMinAggregateOutputType | null;
    _max: PublicHolidayMaxAggregateOutputType | null;
};
export type PublicHolidayMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    locationId: string | null;
    name: string | null;
    date: Date | null;
    isCustom: boolean | null;
    createdAt: Date | null;
};
export type PublicHolidayMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    locationId: string | null;
    name: string | null;
    date: Date | null;
    isCustom: boolean | null;
    createdAt: Date | null;
};
export type PublicHolidayCountAggregateOutputType = {
    id: number;
    organizationId: number;
    locationId: number;
    name: number;
    date: number;
    isCustom: number;
    createdAt: number;
    _all: number;
};
export type PublicHolidayMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    locationId?: true;
    name?: true;
    date?: true;
    isCustom?: true;
    createdAt?: true;
};
export type PublicHolidayMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    locationId?: true;
    name?: true;
    date?: true;
    isCustom?: true;
    createdAt?: true;
};
export type PublicHolidayCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    locationId?: true;
    name?: true;
    date?: true;
    isCustom?: true;
    createdAt?: true;
    _all?: true;
};
export type PublicHolidayAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PublicHolidayWhereInput;
    orderBy?: Prisma.PublicHolidayOrderByWithRelationInput | Prisma.PublicHolidayOrderByWithRelationInput[];
    cursor?: Prisma.PublicHolidayWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PublicHolidayCountAggregateInputType;
    _min?: PublicHolidayMinAggregateInputType;
    _max?: PublicHolidayMaxAggregateInputType;
};
export type GetPublicHolidayAggregateType<T extends PublicHolidayAggregateArgs> = {
    [P in keyof T & keyof AggregatePublicHoliday]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePublicHoliday[P]> : Prisma.GetScalarType<T[P], AggregatePublicHoliday[P]>;
};
export type PublicHolidayGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PublicHolidayWhereInput;
    orderBy?: Prisma.PublicHolidayOrderByWithAggregationInput | Prisma.PublicHolidayOrderByWithAggregationInput[];
    by: Prisma.PublicHolidayScalarFieldEnum[] | Prisma.PublicHolidayScalarFieldEnum;
    having?: Prisma.PublicHolidayScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PublicHolidayCountAggregateInputType | true;
    _min?: PublicHolidayMinAggregateInputType;
    _max?: PublicHolidayMaxAggregateInputType;
};
export type PublicHolidayGroupByOutputType = {
    id: string;
    organizationId: string;
    locationId: string | null;
    name: string;
    date: Date;
    isCustom: boolean;
    createdAt: Date;
    _count: PublicHolidayCountAggregateOutputType | null;
    _min: PublicHolidayMinAggregateOutputType | null;
    _max: PublicHolidayMaxAggregateOutputType | null;
};
export type GetPublicHolidayGroupByPayload<T extends PublicHolidayGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PublicHolidayGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PublicHolidayGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PublicHolidayGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PublicHolidayGroupByOutputType[P]>;
}>>;
export type PublicHolidayWhereInput = {
    AND?: Prisma.PublicHolidayWhereInput | Prisma.PublicHolidayWhereInput[];
    OR?: Prisma.PublicHolidayWhereInput[];
    NOT?: Prisma.PublicHolidayWhereInput | Prisma.PublicHolidayWhereInput[];
    id?: Prisma.UuidFilter<"PublicHoliday"> | string;
    organizationId?: Prisma.UuidFilter<"PublicHoliday"> | string;
    locationId?: Prisma.UuidNullableFilter<"PublicHoliday"> | string | null;
    name?: Prisma.StringFilter<"PublicHoliday"> | string;
    date?: Prisma.DateTimeFilter<"PublicHoliday"> | Date | string;
    isCustom?: Prisma.BoolFilter<"PublicHoliday"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"PublicHoliday"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    location?: Prisma.XOR<Prisma.LocationNullableScalarRelationFilter, Prisma.LocationWhereInput> | null;
};
export type PublicHolidayOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    locationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    isCustom?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    location?: Prisma.LocationOrderByWithRelationInput;
};
export type PublicHolidayWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PublicHolidayWhereInput | Prisma.PublicHolidayWhereInput[];
    OR?: Prisma.PublicHolidayWhereInput[];
    NOT?: Prisma.PublicHolidayWhereInput | Prisma.PublicHolidayWhereInput[];
    organizationId?: Prisma.UuidFilter<"PublicHoliday"> | string;
    locationId?: Prisma.UuidNullableFilter<"PublicHoliday"> | string | null;
    name?: Prisma.StringFilter<"PublicHoliday"> | string;
    date?: Prisma.DateTimeFilter<"PublicHoliday"> | Date | string;
    isCustom?: Prisma.BoolFilter<"PublicHoliday"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"PublicHoliday"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    location?: Prisma.XOR<Prisma.LocationNullableScalarRelationFilter, Prisma.LocationWhereInput> | null;
}, "id">;
export type PublicHolidayOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    locationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    isCustom?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PublicHolidayCountOrderByAggregateInput;
    _max?: Prisma.PublicHolidayMaxOrderByAggregateInput;
    _min?: Prisma.PublicHolidayMinOrderByAggregateInput;
};
export type PublicHolidayScalarWhereWithAggregatesInput = {
    AND?: Prisma.PublicHolidayScalarWhereWithAggregatesInput | Prisma.PublicHolidayScalarWhereWithAggregatesInput[];
    OR?: Prisma.PublicHolidayScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PublicHolidayScalarWhereWithAggregatesInput | Prisma.PublicHolidayScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PublicHoliday"> | string;
    organizationId?: Prisma.UuidWithAggregatesFilter<"PublicHoliday"> | string;
    locationId?: Prisma.UuidNullableWithAggregatesFilter<"PublicHoliday"> | string | null;
    name?: Prisma.StringWithAggregatesFilter<"PublicHoliday"> | string;
    date?: Prisma.DateTimeWithAggregatesFilter<"PublicHoliday"> | Date | string;
    isCustom?: Prisma.BoolWithAggregatesFilter<"PublicHoliday"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PublicHoliday"> | Date | string;
};
export type PublicHolidayCreateInput = {
    id?: string;
    name: string;
    date: Date | string;
    isCustom?: boolean;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutPublicHolidaysInput;
    location?: Prisma.LocationCreateNestedOneWithoutPublicHolidaysInput;
};
export type PublicHolidayUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    locationId?: string | null;
    name: string;
    date: Date | string;
    isCustom?: boolean;
    createdAt?: Date | string;
};
export type PublicHolidayUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isCustom?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutPublicHolidaysNestedInput;
    location?: Prisma.LocationUpdateOneWithoutPublicHolidaysNestedInput;
};
export type PublicHolidayUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    locationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isCustom?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PublicHolidayCreateManyInput = {
    id?: string;
    organizationId: string;
    locationId?: string | null;
    name: string;
    date: Date | string;
    isCustom?: boolean;
    createdAt?: Date | string;
};
export type PublicHolidayUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isCustom?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PublicHolidayUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    locationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isCustom?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PublicHolidayListRelationFilter = {
    every?: Prisma.PublicHolidayWhereInput;
    some?: Prisma.PublicHolidayWhereInput;
    none?: Prisma.PublicHolidayWhereInput;
};
export type PublicHolidayOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PublicHolidayCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    locationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    isCustom?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PublicHolidayMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    locationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    isCustom?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PublicHolidayMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    locationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    isCustom?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PublicHolidayCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.PublicHolidayCreateWithoutOrganizationInput, Prisma.PublicHolidayUncheckedCreateWithoutOrganizationInput> | Prisma.PublicHolidayCreateWithoutOrganizationInput[] | Prisma.PublicHolidayUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.PublicHolidayCreateOrConnectWithoutOrganizationInput | Prisma.PublicHolidayCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.PublicHolidayCreateManyOrganizationInputEnvelope;
    connect?: Prisma.PublicHolidayWhereUniqueInput | Prisma.PublicHolidayWhereUniqueInput[];
};
export type PublicHolidayUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.PublicHolidayCreateWithoutOrganizationInput, Prisma.PublicHolidayUncheckedCreateWithoutOrganizationInput> | Prisma.PublicHolidayCreateWithoutOrganizationInput[] | Prisma.PublicHolidayUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.PublicHolidayCreateOrConnectWithoutOrganizationInput | Prisma.PublicHolidayCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.PublicHolidayCreateManyOrganizationInputEnvelope;
    connect?: Prisma.PublicHolidayWhereUniqueInput | Prisma.PublicHolidayWhereUniqueInput[];
};
export type PublicHolidayUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.PublicHolidayCreateWithoutOrganizationInput, Prisma.PublicHolidayUncheckedCreateWithoutOrganizationInput> | Prisma.PublicHolidayCreateWithoutOrganizationInput[] | Prisma.PublicHolidayUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.PublicHolidayCreateOrConnectWithoutOrganizationInput | Prisma.PublicHolidayCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.PublicHolidayUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.PublicHolidayUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.PublicHolidayCreateManyOrganizationInputEnvelope;
    set?: Prisma.PublicHolidayWhereUniqueInput | Prisma.PublicHolidayWhereUniqueInput[];
    disconnect?: Prisma.PublicHolidayWhereUniqueInput | Prisma.PublicHolidayWhereUniqueInput[];
    delete?: Prisma.PublicHolidayWhereUniqueInput | Prisma.PublicHolidayWhereUniqueInput[];
    connect?: Prisma.PublicHolidayWhereUniqueInput | Prisma.PublicHolidayWhereUniqueInput[];
    update?: Prisma.PublicHolidayUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.PublicHolidayUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.PublicHolidayUpdateManyWithWhereWithoutOrganizationInput | Prisma.PublicHolidayUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.PublicHolidayScalarWhereInput | Prisma.PublicHolidayScalarWhereInput[];
};
export type PublicHolidayUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.PublicHolidayCreateWithoutOrganizationInput, Prisma.PublicHolidayUncheckedCreateWithoutOrganizationInput> | Prisma.PublicHolidayCreateWithoutOrganizationInput[] | Prisma.PublicHolidayUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.PublicHolidayCreateOrConnectWithoutOrganizationInput | Prisma.PublicHolidayCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.PublicHolidayUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.PublicHolidayUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.PublicHolidayCreateManyOrganizationInputEnvelope;
    set?: Prisma.PublicHolidayWhereUniqueInput | Prisma.PublicHolidayWhereUniqueInput[];
    disconnect?: Prisma.PublicHolidayWhereUniqueInput | Prisma.PublicHolidayWhereUniqueInput[];
    delete?: Prisma.PublicHolidayWhereUniqueInput | Prisma.PublicHolidayWhereUniqueInput[];
    connect?: Prisma.PublicHolidayWhereUniqueInput | Prisma.PublicHolidayWhereUniqueInput[];
    update?: Prisma.PublicHolidayUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.PublicHolidayUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.PublicHolidayUpdateManyWithWhereWithoutOrganizationInput | Prisma.PublicHolidayUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.PublicHolidayScalarWhereInput | Prisma.PublicHolidayScalarWhereInput[];
};
export type PublicHolidayCreateNestedManyWithoutLocationInput = {
    create?: Prisma.XOR<Prisma.PublicHolidayCreateWithoutLocationInput, Prisma.PublicHolidayUncheckedCreateWithoutLocationInput> | Prisma.PublicHolidayCreateWithoutLocationInput[] | Prisma.PublicHolidayUncheckedCreateWithoutLocationInput[];
    connectOrCreate?: Prisma.PublicHolidayCreateOrConnectWithoutLocationInput | Prisma.PublicHolidayCreateOrConnectWithoutLocationInput[];
    createMany?: Prisma.PublicHolidayCreateManyLocationInputEnvelope;
    connect?: Prisma.PublicHolidayWhereUniqueInput | Prisma.PublicHolidayWhereUniqueInput[];
};
export type PublicHolidayUncheckedCreateNestedManyWithoutLocationInput = {
    create?: Prisma.XOR<Prisma.PublicHolidayCreateWithoutLocationInput, Prisma.PublicHolidayUncheckedCreateWithoutLocationInput> | Prisma.PublicHolidayCreateWithoutLocationInput[] | Prisma.PublicHolidayUncheckedCreateWithoutLocationInput[];
    connectOrCreate?: Prisma.PublicHolidayCreateOrConnectWithoutLocationInput | Prisma.PublicHolidayCreateOrConnectWithoutLocationInput[];
    createMany?: Prisma.PublicHolidayCreateManyLocationInputEnvelope;
    connect?: Prisma.PublicHolidayWhereUniqueInput | Prisma.PublicHolidayWhereUniqueInput[];
};
export type PublicHolidayUpdateManyWithoutLocationNestedInput = {
    create?: Prisma.XOR<Prisma.PublicHolidayCreateWithoutLocationInput, Prisma.PublicHolidayUncheckedCreateWithoutLocationInput> | Prisma.PublicHolidayCreateWithoutLocationInput[] | Prisma.PublicHolidayUncheckedCreateWithoutLocationInput[];
    connectOrCreate?: Prisma.PublicHolidayCreateOrConnectWithoutLocationInput | Prisma.PublicHolidayCreateOrConnectWithoutLocationInput[];
    upsert?: Prisma.PublicHolidayUpsertWithWhereUniqueWithoutLocationInput | Prisma.PublicHolidayUpsertWithWhereUniqueWithoutLocationInput[];
    createMany?: Prisma.PublicHolidayCreateManyLocationInputEnvelope;
    set?: Prisma.PublicHolidayWhereUniqueInput | Prisma.PublicHolidayWhereUniqueInput[];
    disconnect?: Prisma.PublicHolidayWhereUniqueInput | Prisma.PublicHolidayWhereUniqueInput[];
    delete?: Prisma.PublicHolidayWhereUniqueInput | Prisma.PublicHolidayWhereUniqueInput[];
    connect?: Prisma.PublicHolidayWhereUniqueInput | Prisma.PublicHolidayWhereUniqueInput[];
    update?: Prisma.PublicHolidayUpdateWithWhereUniqueWithoutLocationInput | Prisma.PublicHolidayUpdateWithWhereUniqueWithoutLocationInput[];
    updateMany?: Prisma.PublicHolidayUpdateManyWithWhereWithoutLocationInput | Prisma.PublicHolidayUpdateManyWithWhereWithoutLocationInput[];
    deleteMany?: Prisma.PublicHolidayScalarWhereInput | Prisma.PublicHolidayScalarWhereInput[];
};
export type PublicHolidayUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: Prisma.XOR<Prisma.PublicHolidayCreateWithoutLocationInput, Prisma.PublicHolidayUncheckedCreateWithoutLocationInput> | Prisma.PublicHolidayCreateWithoutLocationInput[] | Prisma.PublicHolidayUncheckedCreateWithoutLocationInput[];
    connectOrCreate?: Prisma.PublicHolidayCreateOrConnectWithoutLocationInput | Prisma.PublicHolidayCreateOrConnectWithoutLocationInput[];
    upsert?: Prisma.PublicHolidayUpsertWithWhereUniqueWithoutLocationInput | Prisma.PublicHolidayUpsertWithWhereUniqueWithoutLocationInput[];
    createMany?: Prisma.PublicHolidayCreateManyLocationInputEnvelope;
    set?: Prisma.PublicHolidayWhereUniqueInput | Prisma.PublicHolidayWhereUniqueInput[];
    disconnect?: Prisma.PublicHolidayWhereUniqueInput | Prisma.PublicHolidayWhereUniqueInput[];
    delete?: Prisma.PublicHolidayWhereUniqueInput | Prisma.PublicHolidayWhereUniqueInput[];
    connect?: Prisma.PublicHolidayWhereUniqueInput | Prisma.PublicHolidayWhereUniqueInput[];
    update?: Prisma.PublicHolidayUpdateWithWhereUniqueWithoutLocationInput | Prisma.PublicHolidayUpdateWithWhereUniqueWithoutLocationInput[];
    updateMany?: Prisma.PublicHolidayUpdateManyWithWhereWithoutLocationInput | Prisma.PublicHolidayUpdateManyWithWhereWithoutLocationInput[];
    deleteMany?: Prisma.PublicHolidayScalarWhereInput | Prisma.PublicHolidayScalarWhereInput[];
};
export type PublicHolidayCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    date: Date | string;
    isCustom?: boolean;
    createdAt?: Date | string;
    location?: Prisma.LocationCreateNestedOneWithoutPublicHolidaysInput;
};
export type PublicHolidayUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    locationId?: string | null;
    name: string;
    date: Date | string;
    isCustom?: boolean;
    createdAt?: Date | string;
};
export type PublicHolidayCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.PublicHolidayWhereUniqueInput;
    create: Prisma.XOR<Prisma.PublicHolidayCreateWithoutOrganizationInput, Prisma.PublicHolidayUncheckedCreateWithoutOrganizationInput>;
};
export type PublicHolidayCreateManyOrganizationInputEnvelope = {
    data: Prisma.PublicHolidayCreateManyOrganizationInput | Prisma.PublicHolidayCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type PublicHolidayUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.PublicHolidayWhereUniqueInput;
    update: Prisma.XOR<Prisma.PublicHolidayUpdateWithoutOrganizationInput, Prisma.PublicHolidayUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.PublicHolidayCreateWithoutOrganizationInput, Prisma.PublicHolidayUncheckedCreateWithoutOrganizationInput>;
};
export type PublicHolidayUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.PublicHolidayWhereUniqueInput;
    data: Prisma.XOR<Prisma.PublicHolidayUpdateWithoutOrganizationInput, Prisma.PublicHolidayUncheckedUpdateWithoutOrganizationInput>;
};
export type PublicHolidayUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.PublicHolidayScalarWhereInput;
    data: Prisma.XOR<Prisma.PublicHolidayUpdateManyMutationInput, Prisma.PublicHolidayUncheckedUpdateManyWithoutOrganizationInput>;
};
export type PublicHolidayScalarWhereInput = {
    AND?: Prisma.PublicHolidayScalarWhereInput | Prisma.PublicHolidayScalarWhereInput[];
    OR?: Prisma.PublicHolidayScalarWhereInput[];
    NOT?: Prisma.PublicHolidayScalarWhereInput | Prisma.PublicHolidayScalarWhereInput[];
    id?: Prisma.UuidFilter<"PublicHoliday"> | string;
    organizationId?: Prisma.UuidFilter<"PublicHoliday"> | string;
    locationId?: Prisma.UuidNullableFilter<"PublicHoliday"> | string | null;
    name?: Prisma.StringFilter<"PublicHoliday"> | string;
    date?: Prisma.DateTimeFilter<"PublicHoliday"> | Date | string;
    isCustom?: Prisma.BoolFilter<"PublicHoliday"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"PublicHoliday"> | Date | string;
};
export type PublicHolidayCreateWithoutLocationInput = {
    id?: string;
    name: string;
    date: Date | string;
    isCustom?: boolean;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutPublicHolidaysInput;
};
export type PublicHolidayUncheckedCreateWithoutLocationInput = {
    id?: string;
    organizationId: string;
    name: string;
    date: Date | string;
    isCustom?: boolean;
    createdAt?: Date | string;
};
export type PublicHolidayCreateOrConnectWithoutLocationInput = {
    where: Prisma.PublicHolidayWhereUniqueInput;
    create: Prisma.XOR<Prisma.PublicHolidayCreateWithoutLocationInput, Prisma.PublicHolidayUncheckedCreateWithoutLocationInput>;
};
export type PublicHolidayCreateManyLocationInputEnvelope = {
    data: Prisma.PublicHolidayCreateManyLocationInput | Prisma.PublicHolidayCreateManyLocationInput[];
    skipDuplicates?: boolean;
};
export type PublicHolidayUpsertWithWhereUniqueWithoutLocationInput = {
    where: Prisma.PublicHolidayWhereUniqueInput;
    update: Prisma.XOR<Prisma.PublicHolidayUpdateWithoutLocationInput, Prisma.PublicHolidayUncheckedUpdateWithoutLocationInput>;
    create: Prisma.XOR<Prisma.PublicHolidayCreateWithoutLocationInput, Prisma.PublicHolidayUncheckedCreateWithoutLocationInput>;
};
export type PublicHolidayUpdateWithWhereUniqueWithoutLocationInput = {
    where: Prisma.PublicHolidayWhereUniqueInput;
    data: Prisma.XOR<Prisma.PublicHolidayUpdateWithoutLocationInput, Prisma.PublicHolidayUncheckedUpdateWithoutLocationInput>;
};
export type PublicHolidayUpdateManyWithWhereWithoutLocationInput = {
    where: Prisma.PublicHolidayScalarWhereInput;
    data: Prisma.XOR<Prisma.PublicHolidayUpdateManyMutationInput, Prisma.PublicHolidayUncheckedUpdateManyWithoutLocationInput>;
};
export type PublicHolidayCreateManyOrganizationInput = {
    id?: string;
    locationId?: string | null;
    name: string;
    date: Date | string;
    isCustom?: boolean;
    createdAt?: Date | string;
};
export type PublicHolidayUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isCustom?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    location?: Prisma.LocationUpdateOneWithoutPublicHolidaysNestedInput;
};
export type PublicHolidayUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    locationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isCustom?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PublicHolidayUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    locationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isCustom?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PublicHolidayCreateManyLocationInput = {
    id?: string;
    organizationId: string;
    name: string;
    date: Date | string;
    isCustom?: boolean;
    createdAt?: Date | string;
};
export type PublicHolidayUpdateWithoutLocationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isCustom?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutPublicHolidaysNestedInput;
};
export type PublicHolidayUncheckedUpdateWithoutLocationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isCustom?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PublicHolidayUncheckedUpdateManyWithoutLocationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isCustom?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PublicHolidaySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    locationId?: boolean;
    name?: boolean;
    date?: boolean;
    isCustom?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    location?: boolean | Prisma.PublicHoliday$locationArgs<ExtArgs>;
}, ExtArgs["result"]["publicHoliday"]>;
export type PublicHolidaySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    locationId?: boolean;
    name?: boolean;
    date?: boolean;
    isCustom?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    location?: boolean | Prisma.PublicHoliday$locationArgs<ExtArgs>;
}, ExtArgs["result"]["publicHoliday"]>;
export type PublicHolidaySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    locationId?: boolean;
    name?: boolean;
    date?: boolean;
    isCustom?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    location?: boolean | Prisma.PublicHoliday$locationArgs<ExtArgs>;
}, ExtArgs["result"]["publicHoliday"]>;
export type PublicHolidaySelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    locationId?: boolean;
    name?: boolean;
    date?: boolean;
    isCustom?: boolean;
    createdAt?: boolean;
};
export type PublicHolidayOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "locationId" | "name" | "date" | "isCustom" | "createdAt", ExtArgs["result"]["publicHoliday"]>;
export type PublicHolidayInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    location?: boolean | Prisma.PublicHoliday$locationArgs<ExtArgs>;
};
export type PublicHolidayIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    location?: boolean | Prisma.PublicHoliday$locationArgs<ExtArgs>;
};
export type PublicHolidayIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    location?: boolean | Prisma.PublicHoliday$locationArgs<ExtArgs>;
};
export type $PublicHolidayPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PublicHoliday";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        location: Prisma.$LocationPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        locationId: string | null;
        name: string;
        date: Date;
        isCustom: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["publicHoliday"]>;
    composites: {};
};
export type PublicHolidayGetPayload<S extends boolean | null | undefined | PublicHolidayDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PublicHolidayPayload, S>;
export type PublicHolidayCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PublicHolidayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PublicHolidayCountAggregateInputType | true;
};
export interface PublicHolidayDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PublicHoliday'];
        meta: {
            name: 'PublicHoliday';
        };
    };
    findUnique<T extends PublicHolidayFindUniqueArgs>(args: Prisma.SelectSubset<T, PublicHolidayFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PublicHolidayClient<runtime.Types.Result.GetResult<Prisma.$PublicHolidayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PublicHolidayFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PublicHolidayFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PublicHolidayClient<runtime.Types.Result.GetResult<Prisma.$PublicHolidayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PublicHolidayFindFirstArgs>(args?: Prisma.SelectSubset<T, PublicHolidayFindFirstArgs<ExtArgs>>): Prisma.Prisma__PublicHolidayClient<runtime.Types.Result.GetResult<Prisma.$PublicHolidayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PublicHolidayFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PublicHolidayFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PublicHolidayClient<runtime.Types.Result.GetResult<Prisma.$PublicHolidayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PublicHolidayFindManyArgs>(args?: Prisma.SelectSubset<T, PublicHolidayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PublicHolidayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PublicHolidayCreateArgs>(args: Prisma.SelectSubset<T, PublicHolidayCreateArgs<ExtArgs>>): Prisma.Prisma__PublicHolidayClient<runtime.Types.Result.GetResult<Prisma.$PublicHolidayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PublicHolidayCreateManyArgs>(args?: Prisma.SelectSubset<T, PublicHolidayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PublicHolidayCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PublicHolidayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PublicHolidayPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PublicHolidayDeleteArgs>(args: Prisma.SelectSubset<T, PublicHolidayDeleteArgs<ExtArgs>>): Prisma.Prisma__PublicHolidayClient<runtime.Types.Result.GetResult<Prisma.$PublicHolidayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PublicHolidayUpdateArgs>(args: Prisma.SelectSubset<T, PublicHolidayUpdateArgs<ExtArgs>>): Prisma.Prisma__PublicHolidayClient<runtime.Types.Result.GetResult<Prisma.$PublicHolidayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PublicHolidayDeleteManyArgs>(args?: Prisma.SelectSubset<T, PublicHolidayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PublicHolidayUpdateManyArgs>(args: Prisma.SelectSubset<T, PublicHolidayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PublicHolidayUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PublicHolidayUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PublicHolidayPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PublicHolidayUpsertArgs>(args: Prisma.SelectSubset<T, PublicHolidayUpsertArgs<ExtArgs>>): Prisma.Prisma__PublicHolidayClient<runtime.Types.Result.GetResult<Prisma.$PublicHolidayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PublicHolidayCountArgs>(args?: Prisma.Subset<T, PublicHolidayCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PublicHolidayCountAggregateOutputType> : number>;
    aggregate<T extends PublicHolidayAggregateArgs>(args: Prisma.Subset<T, PublicHolidayAggregateArgs>): Prisma.PrismaPromise<GetPublicHolidayAggregateType<T>>;
    groupBy<T extends PublicHolidayGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PublicHolidayGroupByArgs['orderBy'];
    } : {
        orderBy?: PublicHolidayGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PublicHolidayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicHolidayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PublicHolidayFieldRefs;
}
export interface Prisma__PublicHolidayClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    location<T extends Prisma.PublicHoliday$locationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PublicHoliday$locationArgs<ExtArgs>>): Prisma.Prisma__LocationClient<runtime.Types.Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PublicHolidayFieldRefs {
    readonly id: Prisma.FieldRef<"PublicHoliday", 'String'>;
    readonly organizationId: Prisma.FieldRef<"PublicHoliday", 'String'>;
    readonly locationId: Prisma.FieldRef<"PublicHoliday", 'String'>;
    readonly name: Prisma.FieldRef<"PublicHoliday", 'String'>;
    readonly date: Prisma.FieldRef<"PublicHoliday", 'DateTime'>;
    readonly isCustom: Prisma.FieldRef<"PublicHoliday", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"PublicHoliday", 'DateTime'>;
}
export type PublicHolidayFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublicHolidaySelect<ExtArgs> | null;
    omit?: Prisma.PublicHolidayOmit<ExtArgs> | null;
    include?: Prisma.PublicHolidayInclude<ExtArgs> | null;
    where: Prisma.PublicHolidayWhereUniqueInput;
};
export type PublicHolidayFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublicHolidaySelect<ExtArgs> | null;
    omit?: Prisma.PublicHolidayOmit<ExtArgs> | null;
    include?: Prisma.PublicHolidayInclude<ExtArgs> | null;
    where: Prisma.PublicHolidayWhereUniqueInput;
};
export type PublicHolidayFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublicHolidaySelect<ExtArgs> | null;
    omit?: Prisma.PublicHolidayOmit<ExtArgs> | null;
    include?: Prisma.PublicHolidayInclude<ExtArgs> | null;
    where?: Prisma.PublicHolidayWhereInput;
    orderBy?: Prisma.PublicHolidayOrderByWithRelationInput | Prisma.PublicHolidayOrderByWithRelationInput[];
    cursor?: Prisma.PublicHolidayWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PublicHolidayScalarFieldEnum | Prisma.PublicHolidayScalarFieldEnum[];
};
export type PublicHolidayFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublicHolidaySelect<ExtArgs> | null;
    omit?: Prisma.PublicHolidayOmit<ExtArgs> | null;
    include?: Prisma.PublicHolidayInclude<ExtArgs> | null;
    where?: Prisma.PublicHolidayWhereInput;
    orderBy?: Prisma.PublicHolidayOrderByWithRelationInput | Prisma.PublicHolidayOrderByWithRelationInput[];
    cursor?: Prisma.PublicHolidayWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PublicHolidayScalarFieldEnum | Prisma.PublicHolidayScalarFieldEnum[];
};
export type PublicHolidayFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublicHolidaySelect<ExtArgs> | null;
    omit?: Prisma.PublicHolidayOmit<ExtArgs> | null;
    include?: Prisma.PublicHolidayInclude<ExtArgs> | null;
    where?: Prisma.PublicHolidayWhereInput;
    orderBy?: Prisma.PublicHolidayOrderByWithRelationInput | Prisma.PublicHolidayOrderByWithRelationInput[];
    cursor?: Prisma.PublicHolidayWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PublicHolidayScalarFieldEnum | Prisma.PublicHolidayScalarFieldEnum[];
};
export type PublicHolidayCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublicHolidaySelect<ExtArgs> | null;
    omit?: Prisma.PublicHolidayOmit<ExtArgs> | null;
    include?: Prisma.PublicHolidayInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PublicHolidayCreateInput, Prisma.PublicHolidayUncheckedCreateInput>;
};
export type PublicHolidayCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PublicHolidayCreateManyInput | Prisma.PublicHolidayCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PublicHolidayCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublicHolidaySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PublicHolidayOmit<ExtArgs> | null;
    data: Prisma.PublicHolidayCreateManyInput | Prisma.PublicHolidayCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PublicHolidayIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PublicHolidayUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublicHolidaySelect<ExtArgs> | null;
    omit?: Prisma.PublicHolidayOmit<ExtArgs> | null;
    include?: Prisma.PublicHolidayInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PublicHolidayUpdateInput, Prisma.PublicHolidayUncheckedUpdateInput>;
    where: Prisma.PublicHolidayWhereUniqueInput;
};
export type PublicHolidayUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PublicHolidayUpdateManyMutationInput, Prisma.PublicHolidayUncheckedUpdateManyInput>;
    where?: Prisma.PublicHolidayWhereInput;
    limit?: number;
};
export type PublicHolidayUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublicHolidaySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PublicHolidayOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PublicHolidayUpdateManyMutationInput, Prisma.PublicHolidayUncheckedUpdateManyInput>;
    where?: Prisma.PublicHolidayWhereInput;
    limit?: number;
    include?: Prisma.PublicHolidayIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PublicHolidayUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublicHolidaySelect<ExtArgs> | null;
    omit?: Prisma.PublicHolidayOmit<ExtArgs> | null;
    include?: Prisma.PublicHolidayInclude<ExtArgs> | null;
    where: Prisma.PublicHolidayWhereUniqueInput;
    create: Prisma.XOR<Prisma.PublicHolidayCreateInput, Prisma.PublicHolidayUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PublicHolidayUpdateInput, Prisma.PublicHolidayUncheckedUpdateInput>;
};
export type PublicHolidayDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublicHolidaySelect<ExtArgs> | null;
    omit?: Prisma.PublicHolidayOmit<ExtArgs> | null;
    include?: Prisma.PublicHolidayInclude<ExtArgs> | null;
    where: Prisma.PublicHolidayWhereUniqueInput;
};
export type PublicHolidayDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PublicHolidayWhereInput;
    limit?: number;
};
export type PublicHoliday$locationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LocationSelect<ExtArgs> | null;
    omit?: Prisma.LocationOmit<ExtArgs> | null;
    include?: Prisma.LocationInclude<ExtArgs> | null;
    where?: Prisma.LocationWhereInput;
};
export type PublicHolidayDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublicHolidaySelect<ExtArgs> | null;
    omit?: Prisma.PublicHolidayOmit<ExtArgs> | null;
    include?: Prisma.PublicHolidayInclude<ExtArgs> | null;
};
