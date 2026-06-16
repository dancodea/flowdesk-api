import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LocationModel = runtime.Types.Result.DefaultSelection<Prisma.$LocationPayload>;
export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null;
    _min: LocationMinAggregateOutputType | null;
    _max: LocationMaxAggregateOutputType | null;
};
export type LocationMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    name: string | null;
    address: string | null;
    city: string | null;
    country: string | null;
    timezone: string | null;
    isRemote: boolean | null;
    createdAt: Date | null;
};
export type LocationMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    name: string | null;
    address: string | null;
    city: string | null;
    country: string | null;
    timezone: string | null;
    isRemote: boolean | null;
    createdAt: Date | null;
};
export type LocationCountAggregateOutputType = {
    id: number;
    organizationId: number;
    name: number;
    address: number;
    city: number;
    country: number;
    timezone: number;
    isRemote: number;
    createdAt: number;
    _all: number;
};
export type LocationMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    address?: true;
    city?: true;
    country?: true;
    timezone?: true;
    isRemote?: true;
    createdAt?: true;
};
export type LocationMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    address?: true;
    city?: true;
    country?: true;
    timezone?: true;
    isRemote?: true;
    createdAt?: true;
};
export type LocationCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    address?: true;
    city?: true;
    country?: true;
    timezone?: true;
    isRemote?: true;
    createdAt?: true;
    _all?: true;
};
export type LocationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LocationWhereInput;
    orderBy?: Prisma.LocationOrderByWithRelationInput | Prisma.LocationOrderByWithRelationInput[];
    cursor?: Prisma.LocationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LocationCountAggregateInputType;
    _min?: LocationMinAggregateInputType;
    _max?: LocationMaxAggregateInputType;
};
export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
    [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLocation[P]> : Prisma.GetScalarType<T[P], AggregateLocation[P]>;
};
export type LocationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LocationWhereInput;
    orderBy?: Prisma.LocationOrderByWithAggregationInput | Prisma.LocationOrderByWithAggregationInput[];
    by: Prisma.LocationScalarFieldEnum[] | Prisma.LocationScalarFieldEnum;
    having?: Prisma.LocationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LocationCountAggregateInputType | true;
    _min?: LocationMinAggregateInputType;
    _max?: LocationMaxAggregateInputType;
};
export type LocationGroupByOutputType = {
    id: string;
    organizationId: string;
    name: string;
    address: string | null;
    city: string | null;
    country: string | null;
    timezone: string | null;
    isRemote: boolean;
    createdAt: Date;
    _count: LocationCountAggregateOutputType | null;
    _min: LocationMinAggregateOutputType | null;
    _max: LocationMaxAggregateOutputType | null;
};
export type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LocationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LocationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LocationGroupByOutputType[P]>;
}>>;
export type LocationWhereInput = {
    AND?: Prisma.LocationWhereInput | Prisma.LocationWhereInput[];
    OR?: Prisma.LocationWhereInput[];
    NOT?: Prisma.LocationWhereInput | Prisma.LocationWhereInput[];
    id?: Prisma.UuidFilter<"Location"> | string;
    organizationId?: Prisma.UuidFilter<"Location"> | string;
    name?: Prisma.StringFilter<"Location"> | string;
    address?: Prisma.StringNullableFilter<"Location"> | string | null;
    city?: Prisma.StringNullableFilter<"Location"> | string | null;
    country?: Prisma.StringNullableFilter<"Location"> | string | null;
    timezone?: Prisma.StringNullableFilter<"Location"> | string | null;
    isRemote?: Prisma.BoolFilter<"Location"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Location"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    employees?: Prisma.EmployeeListRelationFilter;
    jobPostings?: Prisma.JobPostingListRelationFilter;
    publicHolidays?: Prisma.PublicHolidayListRelationFilter;
    assets?: Prisma.AssetListRelationFilter;
};
export type LocationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    city?: Prisma.SortOrderInput | Prisma.SortOrder;
    country?: Prisma.SortOrderInput | Prisma.SortOrder;
    timezone?: Prisma.SortOrderInput | Prisma.SortOrder;
    isRemote?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    employees?: Prisma.EmployeeOrderByRelationAggregateInput;
    jobPostings?: Prisma.JobPostingOrderByRelationAggregateInput;
    publicHolidays?: Prisma.PublicHolidayOrderByRelationAggregateInput;
    assets?: Prisma.AssetOrderByRelationAggregateInput;
};
export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.LocationWhereInput | Prisma.LocationWhereInput[];
    OR?: Prisma.LocationWhereInput[];
    NOT?: Prisma.LocationWhereInput | Prisma.LocationWhereInput[];
    organizationId?: Prisma.UuidFilter<"Location"> | string;
    name?: Prisma.StringFilter<"Location"> | string;
    address?: Prisma.StringNullableFilter<"Location"> | string | null;
    city?: Prisma.StringNullableFilter<"Location"> | string | null;
    country?: Prisma.StringNullableFilter<"Location"> | string | null;
    timezone?: Prisma.StringNullableFilter<"Location"> | string | null;
    isRemote?: Prisma.BoolFilter<"Location"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Location"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    employees?: Prisma.EmployeeListRelationFilter;
    jobPostings?: Prisma.JobPostingListRelationFilter;
    publicHolidays?: Prisma.PublicHolidayListRelationFilter;
    assets?: Prisma.AssetListRelationFilter;
}, "id">;
export type LocationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    city?: Prisma.SortOrderInput | Prisma.SortOrder;
    country?: Prisma.SortOrderInput | Prisma.SortOrder;
    timezone?: Prisma.SortOrderInput | Prisma.SortOrder;
    isRemote?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.LocationCountOrderByAggregateInput;
    _max?: Prisma.LocationMaxOrderByAggregateInput;
    _min?: Prisma.LocationMinOrderByAggregateInput;
};
export type LocationScalarWhereWithAggregatesInput = {
    AND?: Prisma.LocationScalarWhereWithAggregatesInput | Prisma.LocationScalarWhereWithAggregatesInput[];
    OR?: Prisma.LocationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LocationScalarWhereWithAggregatesInput | Prisma.LocationScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Location"> | string;
    organizationId?: Prisma.UuidWithAggregatesFilter<"Location"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Location"> | string;
    address?: Prisma.StringNullableWithAggregatesFilter<"Location"> | string | null;
    city?: Prisma.StringNullableWithAggregatesFilter<"Location"> | string | null;
    country?: Prisma.StringNullableWithAggregatesFilter<"Location"> | string | null;
    timezone?: Prisma.StringNullableWithAggregatesFilter<"Location"> | string | null;
    isRemote?: Prisma.BoolWithAggregatesFilter<"Location"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Location"> | Date | string;
};
export type LocationCreateInput = {
    id?: string;
    name: string;
    address?: string | null;
    city?: string | null;
    country?: string | null;
    timezone?: string | null;
    isRemote?: boolean;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutLocationsInput;
    employees?: Prisma.EmployeeCreateNestedManyWithoutLocationInput;
    jobPostings?: Prisma.JobPostingCreateNestedManyWithoutLocationInput;
    publicHolidays?: Prisma.PublicHolidayCreateNestedManyWithoutLocationInput;
    assets?: Prisma.AssetCreateNestedManyWithoutLocationInput;
};
export type LocationUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    name: string;
    address?: string | null;
    city?: string | null;
    country?: string | null;
    timezone?: string | null;
    isRemote?: boolean;
    createdAt?: Date | string;
    employees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutLocationInput;
    jobPostings?: Prisma.JobPostingUncheckedCreateNestedManyWithoutLocationInput;
    publicHolidays?: Prisma.PublicHolidayUncheckedCreateNestedManyWithoutLocationInput;
    assets?: Prisma.AssetUncheckedCreateNestedManyWithoutLocationInput;
};
export type LocationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isRemote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutLocationsNestedInput;
    employees?: Prisma.EmployeeUpdateManyWithoutLocationNestedInput;
    jobPostings?: Prisma.JobPostingUpdateManyWithoutLocationNestedInput;
    publicHolidays?: Prisma.PublicHolidayUpdateManyWithoutLocationNestedInput;
    assets?: Prisma.AssetUpdateManyWithoutLocationNestedInput;
};
export type LocationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isRemote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employees?: Prisma.EmployeeUncheckedUpdateManyWithoutLocationNestedInput;
    jobPostings?: Prisma.JobPostingUncheckedUpdateManyWithoutLocationNestedInput;
    publicHolidays?: Prisma.PublicHolidayUncheckedUpdateManyWithoutLocationNestedInput;
    assets?: Prisma.AssetUncheckedUpdateManyWithoutLocationNestedInput;
};
export type LocationCreateManyInput = {
    id?: string;
    organizationId: string;
    name: string;
    address?: string | null;
    city?: string | null;
    country?: string | null;
    timezone?: string | null;
    isRemote?: boolean;
    createdAt?: Date | string;
};
export type LocationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isRemote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LocationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isRemote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LocationListRelationFilter = {
    every?: Prisma.LocationWhereInput;
    some?: Prisma.LocationWhereInput;
    none?: Prisma.LocationWhereInput;
};
export type LocationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LocationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    timezone?: Prisma.SortOrder;
    isRemote?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LocationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    timezone?: Prisma.SortOrder;
    isRemote?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LocationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    timezone?: Prisma.SortOrder;
    isRemote?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LocationNullableScalarRelationFilter = {
    is?: Prisma.LocationWhereInput | null;
    isNot?: Prisma.LocationWhereInput | null;
};
export type LocationCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.LocationCreateWithoutOrganizationInput, Prisma.LocationUncheckedCreateWithoutOrganizationInput> | Prisma.LocationCreateWithoutOrganizationInput[] | Prisma.LocationUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.LocationCreateOrConnectWithoutOrganizationInput | Prisma.LocationCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.LocationCreateManyOrganizationInputEnvelope;
    connect?: Prisma.LocationWhereUniqueInput | Prisma.LocationWhereUniqueInput[];
};
export type LocationUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.LocationCreateWithoutOrganizationInput, Prisma.LocationUncheckedCreateWithoutOrganizationInput> | Prisma.LocationCreateWithoutOrganizationInput[] | Prisma.LocationUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.LocationCreateOrConnectWithoutOrganizationInput | Prisma.LocationCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.LocationCreateManyOrganizationInputEnvelope;
    connect?: Prisma.LocationWhereUniqueInput | Prisma.LocationWhereUniqueInput[];
};
export type LocationUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.LocationCreateWithoutOrganizationInput, Prisma.LocationUncheckedCreateWithoutOrganizationInput> | Prisma.LocationCreateWithoutOrganizationInput[] | Prisma.LocationUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.LocationCreateOrConnectWithoutOrganizationInput | Prisma.LocationCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.LocationUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.LocationUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.LocationCreateManyOrganizationInputEnvelope;
    set?: Prisma.LocationWhereUniqueInput | Prisma.LocationWhereUniqueInput[];
    disconnect?: Prisma.LocationWhereUniqueInput | Prisma.LocationWhereUniqueInput[];
    delete?: Prisma.LocationWhereUniqueInput | Prisma.LocationWhereUniqueInput[];
    connect?: Prisma.LocationWhereUniqueInput | Prisma.LocationWhereUniqueInput[];
    update?: Prisma.LocationUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.LocationUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.LocationUpdateManyWithWhereWithoutOrganizationInput | Prisma.LocationUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.LocationScalarWhereInput | Prisma.LocationScalarWhereInput[];
};
export type LocationUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.LocationCreateWithoutOrganizationInput, Prisma.LocationUncheckedCreateWithoutOrganizationInput> | Prisma.LocationCreateWithoutOrganizationInput[] | Prisma.LocationUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.LocationCreateOrConnectWithoutOrganizationInput | Prisma.LocationCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.LocationUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.LocationUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.LocationCreateManyOrganizationInputEnvelope;
    set?: Prisma.LocationWhereUniqueInput | Prisma.LocationWhereUniqueInput[];
    disconnect?: Prisma.LocationWhereUniqueInput | Prisma.LocationWhereUniqueInput[];
    delete?: Prisma.LocationWhereUniqueInput | Prisma.LocationWhereUniqueInput[];
    connect?: Prisma.LocationWhereUniqueInput | Prisma.LocationWhereUniqueInput[];
    update?: Prisma.LocationUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.LocationUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.LocationUpdateManyWithWhereWithoutOrganizationInput | Prisma.LocationUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.LocationScalarWhereInput | Prisma.LocationScalarWhereInput[];
};
export type LocationCreateNestedOneWithoutPublicHolidaysInput = {
    create?: Prisma.XOR<Prisma.LocationCreateWithoutPublicHolidaysInput, Prisma.LocationUncheckedCreateWithoutPublicHolidaysInput>;
    connectOrCreate?: Prisma.LocationCreateOrConnectWithoutPublicHolidaysInput;
    connect?: Prisma.LocationWhereUniqueInput;
};
export type LocationUpdateOneWithoutPublicHolidaysNestedInput = {
    create?: Prisma.XOR<Prisma.LocationCreateWithoutPublicHolidaysInput, Prisma.LocationUncheckedCreateWithoutPublicHolidaysInput>;
    connectOrCreate?: Prisma.LocationCreateOrConnectWithoutPublicHolidaysInput;
    upsert?: Prisma.LocationUpsertWithoutPublicHolidaysInput;
    disconnect?: Prisma.LocationWhereInput | boolean;
    delete?: Prisma.LocationWhereInput | boolean;
    connect?: Prisma.LocationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LocationUpdateToOneWithWhereWithoutPublicHolidaysInput, Prisma.LocationUpdateWithoutPublicHolidaysInput>, Prisma.LocationUncheckedUpdateWithoutPublicHolidaysInput>;
};
export type LocationCreateNestedOneWithoutEmployeesInput = {
    create?: Prisma.XOR<Prisma.LocationCreateWithoutEmployeesInput, Prisma.LocationUncheckedCreateWithoutEmployeesInput>;
    connectOrCreate?: Prisma.LocationCreateOrConnectWithoutEmployeesInput;
    connect?: Prisma.LocationWhereUniqueInput;
};
export type LocationUpdateOneWithoutEmployeesNestedInput = {
    create?: Prisma.XOR<Prisma.LocationCreateWithoutEmployeesInput, Prisma.LocationUncheckedCreateWithoutEmployeesInput>;
    connectOrCreate?: Prisma.LocationCreateOrConnectWithoutEmployeesInput;
    upsert?: Prisma.LocationUpsertWithoutEmployeesInput;
    disconnect?: Prisma.LocationWhereInput | boolean;
    delete?: Prisma.LocationWhereInput | boolean;
    connect?: Prisma.LocationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LocationUpdateToOneWithWhereWithoutEmployeesInput, Prisma.LocationUpdateWithoutEmployeesInput>, Prisma.LocationUncheckedUpdateWithoutEmployeesInput>;
};
export type LocationCreateNestedOneWithoutJobPostingsInput = {
    create?: Prisma.XOR<Prisma.LocationCreateWithoutJobPostingsInput, Prisma.LocationUncheckedCreateWithoutJobPostingsInput>;
    connectOrCreate?: Prisma.LocationCreateOrConnectWithoutJobPostingsInput;
    connect?: Prisma.LocationWhereUniqueInput;
};
export type LocationUpdateOneWithoutJobPostingsNestedInput = {
    create?: Prisma.XOR<Prisma.LocationCreateWithoutJobPostingsInput, Prisma.LocationUncheckedCreateWithoutJobPostingsInput>;
    connectOrCreate?: Prisma.LocationCreateOrConnectWithoutJobPostingsInput;
    upsert?: Prisma.LocationUpsertWithoutJobPostingsInput;
    disconnect?: Prisma.LocationWhereInput | boolean;
    delete?: Prisma.LocationWhereInput | boolean;
    connect?: Prisma.LocationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LocationUpdateToOneWithWhereWithoutJobPostingsInput, Prisma.LocationUpdateWithoutJobPostingsInput>, Prisma.LocationUncheckedUpdateWithoutJobPostingsInput>;
};
export type LocationCreateNestedOneWithoutAssetsInput = {
    create?: Prisma.XOR<Prisma.LocationCreateWithoutAssetsInput, Prisma.LocationUncheckedCreateWithoutAssetsInput>;
    connectOrCreate?: Prisma.LocationCreateOrConnectWithoutAssetsInput;
    connect?: Prisma.LocationWhereUniqueInput;
};
export type LocationUpdateOneWithoutAssetsNestedInput = {
    create?: Prisma.XOR<Prisma.LocationCreateWithoutAssetsInput, Prisma.LocationUncheckedCreateWithoutAssetsInput>;
    connectOrCreate?: Prisma.LocationCreateOrConnectWithoutAssetsInput;
    upsert?: Prisma.LocationUpsertWithoutAssetsInput;
    disconnect?: Prisma.LocationWhereInput | boolean;
    delete?: Prisma.LocationWhereInput | boolean;
    connect?: Prisma.LocationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LocationUpdateToOneWithWhereWithoutAssetsInput, Prisma.LocationUpdateWithoutAssetsInput>, Prisma.LocationUncheckedUpdateWithoutAssetsInput>;
};
export type LocationCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    address?: string | null;
    city?: string | null;
    country?: string | null;
    timezone?: string | null;
    isRemote?: boolean;
    createdAt?: Date | string;
    employees?: Prisma.EmployeeCreateNestedManyWithoutLocationInput;
    jobPostings?: Prisma.JobPostingCreateNestedManyWithoutLocationInput;
    publicHolidays?: Prisma.PublicHolidayCreateNestedManyWithoutLocationInput;
    assets?: Prisma.AssetCreateNestedManyWithoutLocationInput;
};
export type LocationUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    address?: string | null;
    city?: string | null;
    country?: string | null;
    timezone?: string | null;
    isRemote?: boolean;
    createdAt?: Date | string;
    employees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutLocationInput;
    jobPostings?: Prisma.JobPostingUncheckedCreateNestedManyWithoutLocationInput;
    publicHolidays?: Prisma.PublicHolidayUncheckedCreateNestedManyWithoutLocationInput;
    assets?: Prisma.AssetUncheckedCreateNestedManyWithoutLocationInput;
};
export type LocationCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.LocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.LocationCreateWithoutOrganizationInput, Prisma.LocationUncheckedCreateWithoutOrganizationInput>;
};
export type LocationCreateManyOrganizationInputEnvelope = {
    data: Prisma.LocationCreateManyOrganizationInput | Prisma.LocationCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type LocationUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.LocationWhereUniqueInput;
    update: Prisma.XOR<Prisma.LocationUpdateWithoutOrganizationInput, Prisma.LocationUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.LocationCreateWithoutOrganizationInput, Prisma.LocationUncheckedCreateWithoutOrganizationInput>;
};
export type LocationUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.LocationWhereUniqueInput;
    data: Prisma.XOR<Prisma.LocationUpdateWithoutOrganizationInput, Prisma.LocationUncheckedUpdateWithoutOrganizationInput>;
};
export type LocationUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.LocationScalarWhereInput;
    data: Prisma.XOR<Prisma.LocationUpdateManyMutationInput, Prisma.LocationUncheckedUpdateManyWithoutOrganizationInput>;
};
export type LocationScalarWhereInput = {
    AND?: Prisma.LocationScalarWhereInput | Prisma.LocationScalarWhereInput[];
    OR?: Prisma.LocationScalarWhereInput[];
    NOT?: Prisma.LocationScalarWhereInput | Prisma.LocationScalarWhereInput[];
    id?: Prisma.UuidFilter<"Location"> | string;
    organizationId?: Prisma.UuidFilter<"Location"> | string;
    name?: Prisma.StringFilter<"Location"> | string;
    address?: Prisma.StringNullableFilter<"Location"> | string | null;
    city?: Prisma.StringNullableFilter<"Location"> | string | null;
    country?: Prisma.StringNullableFilter<"Location"> | string | null;
    timezone?: Prisma.StringNullableFilter<"Location"> | string | null;
    isRemote?: Prisma.BoolFilter<"Location"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Location"> | Date | string;
};
export type LocationCreateWithoutPublicHolidaysInput = {
    id?: string;
    name: string;
    address?: string | null;
    city?: string | null;
    country?: string | null;
    timezone?: string | null;
    isRemote?: boolean;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutLocationsInput;
    employees?: Prisma.EmployeeCreateNestedManyWithoutLocationInput;
    jobPostings?: Prisma.JobPostingCreateNestedManyWithoutLocationInput;
    assets?: Prisma.AssetCreateNestedManyWithoutLocationInput;
};
export type LocationUncheckedCreateWithoutPublicHolidaysInput = {
    id?: string;
    organizationId: string;
    name: string;
    address?: string | null;
    city?: string | null;
    country?: string | null;
    timezone?: string | null;
    isRemote?: boolean;
    createdAt?: Date | string;
    employees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutLocationInput;
    jobPostings?: Prisma.JobPostingUncheckedCreateNestedManyWithoutLocationInput;
    assets?: Prisma.AssetUncheckedCreateNestedManyWithoutLocationInput;
};
export type LocationCreateOrConnectWithoutPublicHolidaysInput = {
    where: Prisma.LocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.LocationCreateWithoutPublicHolidaysInput, Prisma.LocationUncheckedCreateWithoutPublicHolidaysInput>;
};
export type LocationUpsertWithoutPublicHolidaysInput = {
    update: Prisma.XOR<Prisma.LocationUpdateWithoutPublicHolidaysInput, Prisma.LocationUncheckedUpdateWithoutPublicHolidaysInput>;
    create: Prisma.XOR<Prisma.LocationCreateWithoutPublicHolidaysInput, Prisma.LocationUncheckedCreateWithoutPublicHolidaysInput>;
    where?: Prisma.LocationWhereInput;
};
export type LocationUpdateToOneWithWhereWithoutPublicHolidaysInput = {
    where?: Prisma.LocationWhereInput;
    data: Prisma.XOR<Prisma.LocationUpdateWithoutPublicHolidaysInput, Prisma.LocationUncheckedUpdateWithoutPublicHolidaysInput>;
};
export type LocationUpdateWithoutPublicHolidaysInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isRemote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutLocationsNestedInput;
    employees?: Prisma.EmployeeUpdateManyWithoutLocationNestedInput;
    jobPostings?: Prisma.JobPostingUpdateManyWithoutLocationNestedInput;
    assets?: Prisma.AssetUpdateManyWithoutLocationNestedInput;
};
export type LocationUncheckedUpdateWithoutPublicHolidaysInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isRemote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employees?: Prisma.EmployeeUncheckedUpdateManyWithoutLocationNestedInput;
    jobPostings?: Prisma.JobPostingUncheckedUpdateManyWithoutLocationNestedInput;
    assets?: Prisma.AssetUncheckedUpdateManyWithoutLocationNestedInput;
};
export type LocationCreateWithoutEmployeesInput = {
    id?: string;
    name: string;
    address?: string | null;
    city?: string | null;
    country?: string | null;
    timezone?: string | null;
    isRemote?: boolean;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutLocationsInput;
    jobPostings?: Prisma.JobPostingCreateNestedManyWithoutLocationInput;
    publicHolidays?: Prisma.PublicHolidayCreateNestedManyWithoutLocationInput;
    assets?: Prisma.AssetCreateNestedManyWithoutLocationInput;
};
export type LocationUncheckedCreateWithoutEmployeesInput = {
    id?: string;
    organizationId: string;
    name: string;
    address?: string | null;
    city?: string | null;
    country?: string | null;
    timezone?: string | null;
    isRemote?: boolean;
    createdAt?: Date | string;
    jobPostings?: Prisma.JobPostingUncheckedCreateNestedManyWithoutLocationInput;
    publicHolidays?: Prisma.PublicHolidayUncheckedCreateNestedManyWithoutLocationInput;
    assets?: Prisma.AssetUncheckedCreateNestedManyWithoutLocationInput;
};
export type LocationCreateOrConnectWithoutEmployeesInput = {
    where: Prisma.LocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.LocationCreateWithoutEmployeesInput, Prisma.LocationUncheckedCreateWithoutEmployeesInput>;
};
export type LocationUpsertWithoutEmployeesInput = {
    update: Prisma.XOR<Prisma.LocationUpdateWithoutEmployeesInput, Prisma.LocationUncheckedUpdateWithoutEmployeesInput>;
    create: Prisma.XOR<Prisma.LocationCreateWithoutEmployeesInput, Prisma.LocationUncheckedCreateWithoutEmployeesInput>;
    where?: Prisma.LocationWhereInput;
};
export type LocationUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: Prisma.LocationWhereInput;
    data: Prisma.XOR<Prisma.LocationUpdateWithoutEmployeesInput, Prisma.LocationUncheckedUpdateWithoutEmployeesInput>;
};
export type LocationUpdateWithoutEmployeesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isRemote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutLocationsNestedInput;
    jobPostings?: Prisma.JobPostingUpdateManyWithoutLocationNestedInput;
    publicHolidays?: Prisma.PublicHolidayUpdateManyWithoutLocationNestedInput;
    assets?: Prisma.AssetUpdateManyWithoutLocationNestedInput;
};
export type LocationUncheckedUpdateWithoutEmployeesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isRemote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    jobPostings?: Prisma.JobPostingUncheckedUpdateManyWithoutLocationNestedInput;
    publicHolidays?: Prisma.PublicHolidayUncheckedUpdateManyWithoutLocationNestedInput;
    assets?: Prisma.AssetUncheckedUpdateManyWithoutLocationNestedInput;
};
export type LocationCreateWithoutJobPostingsInput = {
    id?: string;
    name: string;
    address?: string | null;
    city?: string | null;
    country?: string | null;
    timezone?: string | null;
    isRemote?: boolean;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutLocationsInput;
    employees?: Prisma.EmployeeCreateNestedManyWithoutLocationInput;
    publicHolidays?: Prisma.PublicHolidayCreateNestedManyWithoutLocationInput;
    assets?: Prisma.AssetCreateNestedManyWithoutLocationInput;
};
export type LocationUncheckedCreateWithoutJobPostingsInput = {
    id?: string;
    organizationId: string;
    name: string;
    address?: string | null;
    city?: string | null;
    country?: string | null;
    timezone?: string | null;
    isRemote?: boolean;
    createdAt?: Date | string;
    employees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutLocationInput;
    publicHolidays?: Prisma.PublicHolidayUncheckedCreateNestedManyWithoutLocationInput;
    assets?: Prisma.AssetUncheckedCreateNestedManyWithoutLocationInput;
};
export type LocationCreateOrConnectWithoutJobPostingsInput = {
    where: Prisma.LocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.LocationCreateWithoutJobPostingsInput, Prisma.LocationUncheckedCreateWithoutJobPostingsInput>;
};
export type LocationUpsertWithoutJobPostingsInput = {
    update: Prisma.XOR<Prisma.LocationUpdateWithoutJobPostingsInput, Prisma.LocationUncheckedUpdateWithoutJobPostingsInput>;
    create: Prisma.XOR<Prisma.LocationCreateWithoutJobPostingsInput, Prisma.LocationUncheckedCreateWithoutJobPostingsInput>;
    where?: Prisma.LocationWhereInput;
};
export type LocationUpdateToOneWithWhereWithoutJobPostingsInput = {
    where?: Prisma.LocationWhereInput;
    data: Prisma.XOR<Prisma.LocationUpdateWithoutJobPostingsInput, Prisma.LocationUncheckedUpdateWithoutJobPostingsInput>;
};
export type LocationUpdateWithoutJobPostingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isRemote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutLocationsNestedInput;
    employees?: Prisma.EmployeeUpdateManyWithoutLocationNestedInput;
    publicHolidays?: Prisma.PublicHolidayUpdateManyWithoutLocationNestedInput;
    assets?: Prisma.AssetUpdateManyWithoutLocationNestedInput;
};
export type LocationUncheckedUpdateWithoutJobPostingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isRemote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employees?: Prisma.EmployeeUncheckedUpdateManyWithoutLocationNestedInput;
    publicHolidays?: Prisma.PublicHolidayUncheckedUpdateManyWithoutLocationNestedInput;
    assets?: Prisma.AssetUncheckedUpdateManyWithoutLocationNestedInput;
};
export type LocationCreateWithoutAssetsInput = {
    id?: string;
    name: string;
    address?: string | null;
    city?: string | null;
    country?: string | null;
    timezone?: string | null;
    isRemote?: boolean;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutLocationsInput;
    employees?: Prisma.EmployeeCreateNestedManyWithoutLocationInput;
    jobPostings?: Prisma.JobPostingCreateNestedManyWithoutLocationInput;
    publicHolidays?: Prisma.PublicHolidayCreateNestedManyWithoutLocationInput;
};
export type LocationUncheckedCreateWithoutAssetsInput = {
    id?: string;
    organizationId: string;
    name: string;
    address?: string | null;
    city?: string | null;
    country?: string | null;
    timezone?: string | null;
    isRemote?: boolean;
    createdAt?: Date | string;
    employees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutLocationInput;
    jobPostings?: Prisma.JobPostingUncheckedCreateNestedManyWithoutLocationInput;
    publicHolidays?: Prisma.PublicHolidayUncheckedCreateNestedManyWithoutLocationInput;
};
export type LocationCreateOrConnectWithoutAssetsInput = {
    where: Prisma.LocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.LocationCreateWithoutAssetsInput, Prisma.LocationUncheckedCreateWithoutAssetsInput>;
};
export type LocationUpsertWithoutAssetsInput = {
    update: Prisma.XOR<Prisma.LocationUpdateWithoutAssetsInput, Prisma.LocationUncheckedUpdateWithoutAssetsInput>;
    create: Prisma.XOR<Prisma.LocationCreateWithoutAssetsInput, Prisma.LocationUncheckedCreateWithoutAssetsInput>;
    where?: Prisma.LocationWhereInput;
};
export type LocationUpdateToOneWithWhereWithoutAssetsInput = {
    where?: Prisma.LocationWhereInput;
    data: Prisma.XOR<Prisma.LocationUpdateWithoutAssetsInput, Prisma.LocationUncheckedUpdateWithoutAssetsInput>;
};
export type LocationUpdateWithoutAssetsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isRemote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutLocationsNestedInput;
    employees?: Prisma.EmployeeUpdateManyWithoutLocationNestedInput;
    jobPostings?: Prisma.JobPostingUpdateManyWithoutLocationNestedInput;
    publicHolidays?: Prisma.PublicHolidayUpdateManyWithoutLocationNestedInput;
};
export type LocationUncheckedUpdateWithoutAssetsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isRemote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employees?: Prisma.EmployeeUncheckedUpdateManyWithoutLocationNestedInput;
    jobPostings?: Prisma.JobPostingUncheckedUpdateManyWithoutLocationNestedInput;
    publicHolidays?: Prisma.PublicHolidayUncheckedUpdateManyWithoutLocationNestedInput;
};
export type LocationCreateManyOrganizationInput = {
    id?: string;
    name: string;
    address?: string | null;
    city?: string | null;
    country?: string | null;
    timezone?: string | null;
    isRemote?: boolean;
    createdAt?: Date | string;
};
export type LocationUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isRemote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employees?: Prisma.EmployeeUpdateManyWithoutLocationNestedInput;
    jobPostings?: Prisma.JobPostingUpdateManyWithoutLocationNestedInput;
    publicHolidays?: Prisma.PublicHolidayUpdateManyWithoutLocationNestedInput;
    assets?: Prisma.AssetUpdateManyWithoutLocationNestedInput;
};
export type LocationUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isRemote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employees?: Prisma.EmployeeUncheckedUpdateManyWithoutLocationNestedInput;
    jobPostings?: Prisma.JobPostingUncheckedUpdateManyWithoutLocationNestedInput;
    publicHolidays?: Prisma.PublicHolidayUncheckedUpdateManyWithoutLocationNestedInput;
    assets?: Prisma.AssetUncheckedUpdateManyWithoutLocationNestedInput;
};
export type LocationUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isRemote?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LocationCountOutputType = {
    employees: number;
    jobPostings: number;
    publicHolidays: number;
    assets: number;
};
export type LocationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employees?: boolean | LocationCountOutputTypeCountEmployeesArgs;
    jobPostings?: boolean | LocationCountOutputTypeCountJobPostingsArgs;
    publicHolidays?: boolean | LocationCountOutputTypeCountPublicHolidaysArgs;
    assets?: boolean | LocationCountOutputTypeCountAssetsArgs;
};
export type LocationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LocationCountOutputTypeSelect<ExtArgs> | null;
};
export type LocationCountOutputTypeCountEmployeesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeWhereInput;
};
export type LocationCountOutputTypeCountJobPostingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JobPostingWhereInput;
};
export type LocationCountOutputTypeCountPublicHolidaysArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PublicHolidayWhereInput;
};
export type LocationCountOutputTypeCountAssetsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetWhereInput;
};
export type LocationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    address?: boolean;
    city?: boolean;
    country?: boolean;
    timezone?: boolean;
    isRemote?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    employees?: boolean | Prisma.Location$employeesArgs<ExtArgs>;
    jobPostings?: boolean | Prisma.Location$jobPostingsArgs<ExtArgs>;
    publicHolidays?: boolean | Prisma.Location$publicHolidaysArgs<ExtArgs>;
    assets?: boolean | Prisma.Location$assetsArgs<ExtArgs>;
    _count?: boolean | Prisma.LocationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["location"]>;
export type LocationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    address?: boolean;
    city?: boolean;
    country?: boolean;
    timezone?: boolean;
    isRemote?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["location"]>;
export type LocationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    address?: boolean;
    city?: boolean;
    country?: boolean;
    timezone?: boolean;
    isRemote?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["location"]>;
export type LocationSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    address?: boolean;
    city?: boolean;
    country?: boolean;
    timezone?: boolean;
    isRemote?: boolean;
    createdAt?: boolean;
};
export type LocationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "name" | "address" | "city" | "country" | "timezone" | "isRemote" | "createdAt", ExtArgs["result"]["location"]>;
export type LocationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    employees?: boolean | Prisma.Location$employeesArgs<ExtArgs>;
    jobPostings?: boolean | Prisma.Location$jobPostingsArgs<ExtArgs>;
    publicHolidays?: boolean | Prisma.Location$publicHolidaysArgs<ExtArgs>;
    assets?: boolean | Prisma.Location$assetsArgs<ExtArgs>;
    _count?: boolean | Prisma.LocationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type LocationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type LocationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type $LocationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Location";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        employees: Prisma.$EmployeePayload<ExtArgs>[];
        jobPostings: Prisma.$JobPostingPayload<ExtArgs>[];
        publicHolidays: Prisma.$PublicHolidayPayload<ExtArgs>[];
        assets: Prisma.$AssetPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        name: string;
        address: string | null;
        city: string | null;
        country: string | null;
        timezone: string | null;
        isRemote: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["location"]>;
    composites: {};
};
export type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LocationPayload, S>;
export type LocationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LocationCountAggregateInputType | true;
};
export interface LocationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Location'];
        meta: {
            name: 'Location';
        };
    };
    findUnique<T extends LocationFindUniqueArgs>(args: Prisma.SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LocationClient<runtime.Types.Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LocationClient<runtime.Types.Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LocationFindFirstArgs>(args?: Prisma.SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma.Prisma__LocationClient<runtime.Types.Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LocationClient<runtime.Types.Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LocationFindManyArgs>(args?: Prisma.SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LocationCreateArgs>(args: Prisma.SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma.Prisma__LocationClient<runtime.Types.Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LocationCreateManyArgs>(args?: Prisma.SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LocationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LocationDeleteArgs>(args: Prisma.SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma.Prisma__LocationClient<runtime.Types.Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LocationUpdateArgs>(args: Prisma.SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma.Prisma__LocationClient<runtime.Types.Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LocationDeleteManyArgs>(args?: Prisma.SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LocationUpdateManyArgs>(args: Prisma.SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LocationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LocationUpsertArgs>(args: Prisma.SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma.Prisma__LocationClient<runtime.Types.Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LocationCountArgs>(args?: Prisma.Subset<T, LocationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LocationCountAggregateOutputType> : number>;
    aggregate<T extends LocationAggregateArgs>(args: Prisma.Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>;
    groupBy<T extends LocationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LocationGroupByArgs['orderBy'];
    } : {
        orderBy?: LocationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LocationFieldRefs;
}
export interface Prisma__LocationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    employees<T extends Prisma.Location$employeesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Location$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    jobPostings<T extends Prisma.Location$jobPostingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Location$jobPostingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    publicHolidays<T extends Prisma.Location$publicHolidaysArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Location$publicHolidaysArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PublicHolidayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    assets<T extends Prisma.Location$assetsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Location$assetsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LocationFieldRefs {
    readonly id: Prisma.FieldRef<"Location", 'String'>;
    readonly organizationId: Prisma.FieldRef<"Location", 'String'>;
    readonly name: Prisma.FieldRef<"Location", 'String'>;
    readonly address: Prisma.FieldRef<"Location", 'String'>;
    readonly city: Prisma.FieldRef<"Location", 'String'>;
    readonly country: Prisma.FieldRef<"Location", 'String'>;
    readonly timezone: Prisma.FieldRef<"Location", 'String'>;
    readonly isRemote: Prisma.FieldRef<"Location", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Location", 'DateTime'>;
}
export type LocationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LocationSelect<ExtArgs> | null;
    omit?: Prisma.LocationOmit<ExtArgs> | null;
    include?: Prisma.LocationInclude<ExtArgs> | null;
    where: Prisma.LocationWhereUniqueInput;
};
export type LocationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LocationSelect<ExtArgs> | null;
    omit?: Prisma.LocationOmit<ExtArgs> | null;
    include?: Prisma.LocationInclude<ExtArgs> | null;
    where: Prisma.LocationWhereUniqueInput;
};
export type LocationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LocationSelect<ExtArgs> | null;
    omit?: Prisma.LocationOmit<ExtArgs> | null;
    include?: Prisma.LocationInclude<ExtArgs> | null;
    where?: Prisma.LocationWhereInput;
    orderBy?: Prisma.LocationOrderByWithRelationInput | Prisma.LocationOrderByWithRelationInput[];
    cursor?: Prisma.LocationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LocationScalarFieldEnum | Prisma.LocationScalarFieldEnum[];
};
export type LocationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LocationSelect<ExtArgs> | null;
    omit?: Prisma.LocationOmit<ExtArgs> | null;
    include?: Prisma.LocationInclude<ExtArgs> | null;
    where?: Prisma.LocationWhereInput;
    orderBy?: Prisma.LocationOrderByWithRelationInput | Prisma.LocationOrderByWithRelationInput[];
    cursor?: Prisma.LocationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LocationScalarFieldEnum | Prisma.LocationScalarFieldEnum[];
};
export type LocationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LocationSelect<ExtArgs> | null;
    omit?: Prisma.LocationOmit<ExtArgs> | null;
    include?: Prisma.LocationInclude<ExtArgs> | null;
    where?: Prisma.LocationWhereInput;
    orderBy?: Prisma.LocationOrderByWithRelationInput | Prisma.LocationOrderByWithRelationInput[];
    cursor?: Prisma.LocationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LocationScalarFieldEnum | Prisma.LocationScalarFieldEnum[];
};
export type LocationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LocationSelect<ExtArgs> | null;
    omit?: Prisma.LocationOmit<ExtArgs> | null;
    include?: Prisma.LocationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LocationCreateInput, Prisma.LocationUncheckedCreateInput>;
};
export type LocationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LocationCreateManyInput | Prisma.LocationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LocationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LocationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LocationOmit<ExtArgs> | null;
    data: Prisma.LocationCreateManyInput | Prisma.LocationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LocationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LocationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LocationSelect<ExtArgs> | null;
    omit?: Prisma.LocationOmit<ExtArgs> | null;
    include?: Prisma.LocationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LocationUpdateInput, Prisma.LocationUncheckedUpdateInput>;
    where: Prisma.LocationWhereUniqueInput;
};
export type LocationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LocationUpdateManyMutationInput, Prisma.LocationUncheckedUpdateManyInput>;
    where?: Prisma.LocationWhereInput;
    limit?: number;
};
export type LocationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LocationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LocationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LocationUpdateManyMutationInput, Prisma.LocationUncheckedUpdateManyInput>;
    where?: Prisma.LocationWhereInput;
    limit?: number;
    include?: Prisma.LocationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LocationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LocationSelect<ExtArgs> | null;
    omit?: Prisma.LocationOmit<ExtArgs> | null;
    include?: Prisma.LocationInclude<ExtArgs> | null;
    where: Prisma.LocationWhereUniqueInput;
    create: Prisma.XOR<Prisma.LocationCreateInput, Prisma.LocationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LocationUpdateInput, Prisma.LocationUncheckedUpdateInput>;
};
export type LocationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LocationSelect<ExtArgs> | null;
    omit?: Prisma.LocationOmit<ExtArgs> | null;
    include?: Prisma.LocationInclude<ExtArgs> | null;
    where: Prisma.LocationWhereUniqueInput;
};
export type LocationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LocationWhereInput;
    limit?: number;
};
export type Location$employeesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where?: Prisma.EmployeeWhereInput;
    orderBy?: Prisma.EmployeeOrderByWithRelationInput | Prisma.EmployeeOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeScalarFieldEnum | Prisma.EmployeeScalarFieldEnum[];
};
export type Location$jobPostingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JobPostingSelect<ExtArgs> | null;
    omit?: Prisma.JobPostingOmit<ExtArgs> | null;
    include?: Prisma.JobPostingInclude<ExtArgs> | null;
    where?: Prisma.JobPostingWhereInput;
    orderBy?: Prisma.JobPostingOrderByWithRelationInput | Prisma.JobPostingOrderByWithRelationInput[];
    cursor?: Prisma.JobPostingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.JobPostingScalarFieldEnum | Prisma.JobPostingScalarFieldEnum[];
};
export type Location$publicHolidaysArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Location$assetsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    include?: Prisma.AssetInclude<ExtArgs> | null;
    where?: Prisma.AssetWhereInput;
    orderBy?: Prisma.AssetOrderByWithRelationInput | Prisma.AssetOrderByWithRelationInput[];
    cursor?: Prisma.AssetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetScalarFieldEnum | Prisma.AssetScalarFieldEnum[];
};
export type LocationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LocationSelect<ExtArgs> | null;
    omit?: Prisma.LocationOmit<ExtArgs> | null;
    include?: Prisma.LocationInclude<ExtArgs> | null;
};
