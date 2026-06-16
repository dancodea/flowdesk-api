import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BreakEntryModel = runtime.Types.Result.DefaultSelection<Prisma.$BreakEntryPayload>;
export type AggregateBreakEntry = {
    _count: BreakEntryCountAggregateOutputType | null;
    _avg: BreakEntryAvgAggregateOutputType | null;
    _sum: BreakEntrySumAggregateOutputType | null;
    _min: BreakEntryMinAggregateOutputType | null;
    _max: BreakEntryMaxAggregateOutputType | null;
};
export type BreakEntryAvgAggregateOutputType = {
    durationMinutes: number | null;
};
export type BreakEntrySumAggregateOutputType = {
    durationMinutes: number | null;
};
export type BreakEntryMinAggregateOutputType = {
    id: string | null;
    attendanceEntryId: string | null;
    startTime: Date | null;
    endTime: Date | null;
    durationMinutes: number | null;
};
export type BreakEntryMaxAggregateOutputType = {
    id: string | null;
    attendanceEntryId: string | null;
    startTime: Date | null;
    endTime: Date | null;
    durationMinutes: number | null;
};
export type BreakEntryCountAggregateOutputType = {
    id: number;
    attendanceEntryId: number;
    startTime: number;
    endTime: number;
    durationMinutes: number;
    _all: number;
};
export type BreakEntryAvgAggregateInputType = {
    durationMinutes?: true;
};
export type BreakEntrySumAggregateInputType = {
    durationMinutes?: true;
};
export type BreakEntryMinAggregateInputType = {
    id?: true;
    attendanceEntryId?: true;
    startTime?: true;
    endTime?: true;
    durationMinutes?: true;
};
export type BreakEntryMaxAggregateInputType = {
    id?: true;
    attendanceEntryId?: true;
    startTime?: true;
    endTime?: true;
    durationMinutes?: true;
};
export type BreakEntryCountAggregateInputType = {
    id?: true;
    attendanceEntryId?: true;
    startTime?: true;
    endTime?: true;
    durationMinutes?: true;
    _all?: true;
};
export type BreakEntryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BreakEntryWhereInput;
    orderBy?: Prisma.BreakEntryOrderByWithRelationInput | Prisma.BreakEntryOrderByWithRelationInput[];
    cursor?: Prisma.BreakEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BreakEntryCountAggregateInputType;
    _avg?: BreakEntryAvgAggregateInputType;
    _sum?: BreakEntrySumAggregateInputType;
    _min?: BreakEntryMinAggregateInputType;
    _max?: BreakEntryMaxAggregateInputType;
};
export type GetBreakEntryAggregateType<T extends BreakEntryAggregateArgs> = {
    [P in keyof T & keyof AggregateBreakEntry]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBreakEntry[P]> : Prisma.GetScalarType<T[P], AggregateBreakEntry[P]>;
};
export type BreakEntryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BreakEntryWhereInput;
    orderBy?: Prisma.BreakEntryOrderByWithAggregationInput | Prisma.BreakEntryOrderByWithAggregationInput[];
    by: Prisma.BreakEntryScalarFieldEnum[] | Prisma.BreakEntryScalarFieldEnum;
    having?: Prisma.BreakEntryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BreakEntryCountAggregateInputType | true;
    _avg?: BreakEntryAvgAggregateInputType;
    _sum?: BreakEntrySumAggregateInputType;
    _min?: BreakEntryMinAggregateInputType;
    _max?: BreakEntryMaxAggregateInputType;
};
export type BreakEntryGroupByOutputType = {
    id: string;
    attendanceEntryId: string;
    startTime: Date;
    endTime: Date | null;
    durationMinutes: number | null;
    _count: BreakEntryCountAggregateOutputType | null;
    _avg: BreakEntryAvgAggregateOutputType | null;
    _sum: BreakEntrySumAggregateOutputType | null;
    _min: BreakEntryMinAggregateOutputType | null;
    _max: BreakEntryMaxAggregateOutputType | null;
};
export type GetBreakEntryGroupByPayload<T extends BreakEntryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BreakEntryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BreakEntryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BreakEntryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BreakEntryGroupByOutputType[P]>;
}>>;
export type BreakEntryWhereInput = {
    AND?: Prisma.BreakEntryWhereInput | Prisma.BreakEntryWhereInput[];
    OR?: Prisma.BreakEntryWhereInput[];
    NOT?: Prisma.BreakEntryWhereInput | Prisma.BreakEntryWhereInput[];
    id?: Prisma.UuidFilter<"BreakEntry"> | string;
    attendanceEntryId?: Prisma.UuidFilter<"BreakEntry"> | string;
    startTime?: Prisma.DateTimeFilter<"BreakEntry"> | Date | string;
    endTime?: Prisma.DateTimeNullableFilter<"BreakEntry"> | Date | string | null;
    durationMinutes?: Prisma.IntNullableFilter<"BreakEntry"> | number | null;
    attendanceEntry?: Prisma.XOR<Prisma.AttendanceEntryScalarRelationFilter, Prisma.AttendanceEntryWhereInput>;
};
export type BreakEntryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    attendanceEntryId?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    durationMinutes?: Prisma.SortOrderInput | Prisma.SortOrder;
    attendanceEntry?: Prisma.AttendanceEntryOrderByWithRelationInput;
};
export type BreakEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BreakEntryWhereInput | Prisma.BreakEntryWhereInput[];
    OR?: Prisma.BreakEntryWhereInput[];
    NOT?: Prisma.BreakEntryWhereInput | Prisma.BreakEntryWhereInput[];
    attendanceEntryId?: Prisma.UuidFilter<"BreakEntry"> | string;
    startTime?: Prisma.DateTimeFilter<"BreakEntry"> | Date | string;
    endTime?: Prisma.DateTimeNullableFilter<"BreakEntry"> | Date | string | null;
    durationMinutes?: Prisma.IntNullableFilter<"BreakEntry"> | number | null;
    attendanceEntry?: Prisma.XOR<Prisma.AttendanceEntryScalarRelationFilter, Prisma.AttendanceEntryWhereInput>;
}, "id">;
export type BreakEntryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    attendanceEntryId?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    durationMinutes?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.BreakEntryCountOrderByAggregateInput;
    _avg?: Prisma.BreakEntryAvgOrderByAggregateInput;
    _max?: Prisma.BreakEntryMaxOrderByAggregateInput;
    _min?: Prisma.BreakEntryMinOrderByAggregateInput;
    _sum?: Prisma.BreakEntrySumOrderByAggregateInput;
};
export type BreakEntryScalarWhereWithAggregatesInput = {
    AND?: Prisma.BreakEntryScalarWhereWithAggregatesInput | Prisma.BreakEntryScalarWhereWithAggregatesInput[];
    OR?: Prisma.BreakEntryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BreakEntryScalarWhereWithAggregatesInput | Prisma.BreakEntryScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"BreakEntry"> | string;
    attendanceEntryId?: Prisma.UuidWithAggregatesFilter<"BreakEntry"> | string;
    startTime?: Prisma.DateTimeWithAggregatesFilter<"BreakEntry"> | Date | string;
    endTime?: Prisma.DateTimeNullableWithAggregatesFilter<"BreakEntry"> | Date | string | null;
    durationMinutes?: Prisma.IntNullableWithAggregatesFilter<"BreakEntry"> | number | null;
};
export type BreakEntryCreateInput = {
    id?: string;
    startTime: Date | string;
    endTime?: Date | string | null;
    durationMinutes?: number | null;
    attendanceEntry: Prisma.AttendanceEntryCreateNestedOneWithoutBreaksInput;
};
export type BreakEntryUncheckedCreateInput = {
    id?: string;
    attendanceEntryId: string;
    startTime: Date | string;
    endTime?: Date | string | null;
    durationMinutes?: number | null;
};
export type BreakEntryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    attendanceEntry?: Prisma.AttendanceEntryUpdateOneRequiredWithoutBreaksNestedInput;
};
export type BreakEntryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attendanceEntryId?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type BreakEntryCreateManyInput = {
    id?: string;
    attendanceEntryId: string;
    startTime: Date | string;
    endTime?: Date | string | null;
    durationMinutes?: number | null;
};
export type BreakEntryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type BreakEntryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attendanceEntryId?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type BreakEntryListRelationFilter = {
    every?: Prisma.BreakEntryWhereInput;
    some?: Prisma.BreakEntryWhereInput;
    none?: Prisma.BreakEntryWhereInput;
};
export type BreakEntryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BreakEntryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    attendanceEntryId?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    durationMinutes?: Prisma.SortOrder;
};
export type BreakEntryAvgOrderByAggregateInput = {
    durationMinutes?: Prisma.SortOrder;
};
export type BreakEntryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    attendanceEntryId?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    durationMinutes?: Prisma.SortOrder;
};
export type BreakEntryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    attendanceEntryId?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    durationMinutes?: Prisma.SortOrder;
};
export type BreakEntrySumOrderByAggregateInput = {
    durationMinutes?: Prisma.SortOrder;
};
export type BreakEntryCreateNestedManyWithoutAttendanceEntryInput = {
    create?: Prisma.XOR<Prisma.BreakEntryCreateWithoutAttendanceEntryInput, Prisma.BreakEntryUncheckedCreateWithoutAttendanceEntryInput> | Prisma.BreakEntryCreateWithoutAttendanceEntryInput[] | Prisma.BreakEntryUncheckedCreateWithoutAttendanceEntryInput[];
    connectOrCreate?: Prisma.BreakEntryCreateOrConnectWithoutAttendanceEntryInput | Prisma.BreakEntryCreateOrConnectWithoutAttendanceEntryInput[];
    createMany?: Prisma.BreakEntryCreateManyAttendanceEntryInputEnvelope;
    connect?: Prisma.BreakEntryWhereUniqueInput | Prisma.BreakEntryWhereUniqueInput[];
};
export type BreakEntryUncheckedCreateNestedManyWithoutAttendanceEntryInput = {
    create?: Prisma.XOR<Prisma.BreakEntryCreateWithoutAttendanceEntryInput, Prisma.BreakEntryUncheckedCreateWithoutAttendanceEntryInput> | Prisma.BreakEntryCreateWithoutAttendanceEntryInput[] | Prisma.BreakEntryUncheckedCreateWithoutAttendanceEntryInput[];
    connectOrCreate?: Prisma.BreakEntryCreateOrConnectWithoutAttendanceEntryInput | Prisma.BreakEntryCreateOrConnectWithoutAttendanceEntryInput[];
    createMany?: Prisma.BreakEntryCreateManyAttendanceEntryInputEnvelope;
    connect?: Prisma.BreakEntryWhereUniqueInput | Prisma.BreakEntryWhereUniqueInput[];
};
export type BreakEntryUpdateManyWithoutAttendanceEntryNestedInput = {
    create?: Prisma.XOR<Prisma.BreakEntryCreateWithoutAttendanceEntryInput, Prisma.BreakEntryUncheckedCreateWithoutAttendanceEntryInput> | Prisma.BreakEntryCreateWithoutAttendanceEntryInput[] | Prisma.BreakEntryUncheckedCreateWithoutAttendanceEntryInput[];
    connectOrCreate?: Prisma.BreakEntryCreateOrConnectWithoutAttendanceEntryInput | Prisma.BreakEntryCreateOrConnectWithoutAttendanceEntryInput[];
    upsert?: Prisma.BreakEntryUpsertWithWhereUniqueWithoutAttendanceEntryInput | Prisma.BreakEntryUpsertWithWhereUniqueWithoutAttendanceEntryInput[];
    createMany?: Prisma.BreakEntryCreateManyAttendanceEntryInputEnvelope;
    set?: Prisma.BreakEntryWhereUniqueInput | Prisma.BreakEntryWhereUniqueInput[];
    disconnect?: Prisma.BreakEntryWhereUniqueInput | Prisma.BreakEntryWhereUniqueInput[];
    delete?: Prisma.BreakEntryWhereUniqueInput | Prisma.BreakEntryWhereUniqueInput[];
    connect?: Prisma.BreakEntryWhereUniqueInput | Prisma.BreakEntryWhereUniqueInput[];
    update?: Prisma.BreakEntryUpdateWithWhereUniqueWithoutAttendanceEntryInput | Prisma.BreakEntryUpdateWithWhereUniqueWithoutAttendanceEntryInput[];
    updateMany?: Prisma.BreakEntryUpdateManyWithWhereWithoutAttendanceEntryInput | Prisma.BreakEntryUpdateManyWithWhereWithoutAttendanceEntryInput[];
    deleteMany?: Prisma.BreakEntryScalarWhereInput | Prisma.BreakEntryScalarWhereInput[];
};
export type BreakEntryUncheckedUpdateManyWithoutAttendanceEntryNestedInput = {
    create?: Prisma.XOR<Prisma.BreakEntryCreateWithoutAttendanceEntryInput, Prisma.BreakEntryUncheckedCreateWithoutAttendanceEntryInput> | Prisma.BreakEntryCreateWithoutAttendanceEntryInput[] | Prisma.BreakEntryUncheckedCreateWithoutAttendanceEntryInput[];
    connectOrCreate?: Prisma.BreakEntryCreateOrConnectWithoutAttendanceEntryInput | Prisma.BreakEntryCreateOrConnectWithoutAttendanceEntryInput[];
    upsert?: Prisma.BreakEntryUpsertWithWhereUniqueWithoutAttendanceEntryInput | Prisma.BreakEntryUpsertWithWhereUniqueWithoutAttendanceEntryInput[];
    createMany?: Prisma.BreakEntryCreateManyAttendanceEntryInputEnvelope;
    set?: Prisma.BreakEntryWhereUniqueInput | Prisma.BreakEntryWhereUniqueInput[];
    disconnect?: Prisma.BreakEntryWhereUniqueInput | Prisma.BreakEntryWhereUniqueInput[];
    delete?: Prisma.BreakEntryWhereUniqueInput | Prisma.BreakEntryWhereUniqueInput[];
    connect?: Prisma.BreakEntryWhereUniqueInput | Prisma.BreakEntryWhereUniqueInput[];
    update?: Prisma.BreakEntryUpdateWithWhereUniqueWithoutAttendanceEntryInput | Prisma.BreakEntryUpdateWithWhereUniqueWithoutAttendanceEntryInput[];
    updateMany?: Prisma.BreakEntryUpdateManyWithWhereWithoutAttendanceEntryInput | Prisma.BreakEntryUpdateManyWithWhereWithoutAttendanceEntryInput[];
    deleteMany?: Prisma.BreakEntryScalarWhereInput | Prisma.BreakEntryScalarWhereInput[];
};
export type BreakEntryCreateWithoutAttendanceEntryInput = {
    id?: string;
    startTime: Date | string;
    endTime?: Date | string | null;
    durationMinutes?: number | null;
};
export type BreakEntryUncheckedCreateWithoutAttendanceEntryInput = {
    id?: string;
    startTime: Date | string;
    endTime?: Date | string | null;
    durationMinutes?: number | null;
};
export type BreakEntryCreateOrConnectWithoutAttendanceEntryInput = {
    where: Prisma.BreakEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.BreakEntryCreateWithoutAttendanceEntryInput, Prisma.BreakEntryUncheckedCreateWithoutAttendanceEntryInput>;
};
export type BreakEntryCreateManyAttendanceEntryInputEnvelope = {
    data: Prisma.BreakEntryCreateManyAttendanceEntryInput | Prisma.BreakEntryCreateManyAttendanceEntryInput[];
    skipDuplicates?: boolean;
};
export type BreakEntryUpsertWithWhereUniqueWithoutAttendanceEntryInput = {
    where: Prisma.BreakEntryWhereUniqueInput;
    update: Prisma.XOR<Prisma.BreakEntryUpdateWithoutAttendanceEntryInput, Prisma.BreakEntryUncheckedUpdateWithoutAttendanceEntryInput>;
    create: Prisma.XOR<Prisma.BreakEntryCreateWithoutAttendanceEntryInput, Prisma.BreakEntryUncheckedCreateWithoutAttendanceEntryInput>;
};
export type BreakEntryUpdateWithWhereUniqueWithoutAttendanceEntryInput = {
    where: Prisma.BreakEntryWhereUniqueInput;
    data: Prisma.XOR<Prisma.BreakEntryUpdateWithoutAttendanceEntryInput, Prisma.BreakEntryUncheckedUpdateWithoutAttendanceEntryInput>;
};
export type BreakEntryUpdateManyWithWhereWithoutAttendanceEntryInput = {
    where: Prisma.BreakEntryScalarWhereInput;
    data: Prisma.XOR<Prisma.BreakEntryUpdateManyMutationInput, Prisma.BreakEntryUncheckedUpdateManyWithoutAttendanceEntryInput>;
};
export type BreakEntryScalarWhereInput = {
    AND?: Prisma.BreakEntryScalarWhereInput | Prisma.BreakEntryScalarWhereInput[];
    OR?: Prisma.BreakEntryScalarWhereInput[];
    NOT?: Prisma.BreakEntryScalarWhereInput | Prisma.BreakEntryScalarWhereInput[];
    id?: Prisma.UuidFilter<"BreakEntry"> | string;
    attendanceEntryId?: Prisma.UuidFilter<"BreakEntry"> | string;
    startTime?: Prisma.DateTimeFilter<"BreakEntry"> | Date | string;
    endTime?: Prisma.DateTimeNullableFilter<"BreakEntry"> | Date | string | null;
    durationMinutes?: Prisma.IntNullableFilter<"BreakEntry"> | number | null;
};
export type BreakEntryCreateManyAttendanceEntryInput = {
    id?: string;
    startTime: Date | string;
    endTime?: Date | string | null;
    durationMinutes?: number | null;
};
export type BreakEntryUpdateWithoutAttendanceEntryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type BreakEntryUncheckedUpdateWithoutAttendanceEntryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type BreakEntryUncheckedUpdateManyWithoutAttendanceEntryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    durationMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type BreakEntrySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    attendanceEntryId?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    durationMinutes?: boolean;
    attendanceEntry?: boolean | Prisma.AttendanceEntryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["breakEntry"]>;
export type BreakEntrySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    attendanceEntryId?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    durationMinutes?: boolean;
    attendanceEntry?: boolean | Prisma.AttendanceEntryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["breakEntry"]>;
export type BreakEntrySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    attendanceEntryId?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    durationMinutes?: boolean;
    attendanceEntry?: boolean | Prisma.AttendanceEntryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["breakEntry"]>;
export type BreakEntrySelectScalar = {
    id?: boolean;
    attendanceEntryId?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    durationMinutes?: boolean;
};
export type BreakEntryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "attendanceEntryId" | "startTime" | "endTime" | "durationMinutes", ExtArgs["result"]["breakEntry"]>;
export type BreakEntryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    attendanceEntry?: boolean | Prisma.AttendanceEntryDefaultArgs<ExtArgs>;
};
export type BreakEntryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    attendanceEntry?: boolean | Prisma.AttendanceEntryDefaultArgs<ExtArgs>;
};
export type BreakEntryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    attendanceEntry?: boolean | Prisma.AttendanceEntryDefaultArgs<ExtArgs>;
};
export type $BreakEntryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BreakEntry";
    objects: {
        attendanceEntry: Prisma.$AttendanceEntryPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        attendanceEntryId: string;
        startTime: Date;
        endTime: Date | null;
        durationMinutes: number | null;
    }, ExtArgs["result"]["breakEntry"]>;
    composites: {};
};
export type BreakEntryGetPayload<S extends boolean | null | undefined | BreakEntryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BreakEntryPayload, S>;
export type BreakEntryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BreakEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BreakEntryCountAggregateInputType | true;
};
export interface BreakEntryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BreakEntry'];
        meta: {
            name: 'BreakEntry';
        };
    };
    findUnique<T extends BreakEntryFindUniqueArgs>(args: Prisma.SelectSubset<T, BreakEntryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BreakEntryClient<runtime.Types.Result.GetResult<Prisma.$BreakEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BreakEntryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BreakEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BreakEntryClient<runtime.Types.Result.GetResult<Prisma.$BreakEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BreakEntryFindFirstArgs>(args?: Prisma.SelectSubset<T, BreakEntryFindFirstArgs<ExtArgs>>): Prisma.Prisma__BreakEntryClient<runtime.Types.Result.GetResult<Prisma.$BreakEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BreakEntryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BreakEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BreakEntryClient<runtime.Types.Result.GetResult<Prisma.$BreakEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BreakEntryFindManyArgs>(args?: Prisma.SelectSubset<T, BreakEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BreakEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BreakEntryCreateArgs>(args: Prisma.SelectSubset<T, BreakEntryCreateArgs<ExtArgs>>): Prisma.Prisma__BreakEntryClient<runtime.Types.Result.GetResult<Prisma.$BreakEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BreakEntryCreateManyArgs>(args?: Prisma.SelectSubset<T, BreakEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BreakEntryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BreakEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BreakEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BreakEntryDeleteArgs>(args: Prisma.SelectSubset<T, BreakEntryDeleteArgs<ExtArgs>>): Prisma.Prisma__BreakEntryClient<runtime.Types.Result.GetResult<Prisma.$BreakEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BreakEntryUpdateArgs>(args: Prisma.SelectSubset<T, BreakEntryUpdateArgs<ExtArgs>>): Prisma.Prisma__BreakEntryClient<runtime.Types.Result.GetResult<Prisma.$BreakEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BreakEntryDeleteManyArgs>(args?: Prisma.SelectSubset<T, BreakEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BreakEntryUpdateManyArgs>(args: Prisma.SelectSubset<T, BreakEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BreakEntryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BreakEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BreakEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BreakEntryUpsertArgs>(args: Prisma.SelectSubset<T, BreakEntryUpsertArgs<ExtArgs>>): Prisma.Prisma__BreakEntryClient<runtime.Types.Result.GetResult<Prisma.$BreakEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BreakEntryCountArgs>(args?: Prisma.Subset<T, BreakEntryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BreakEntryCountAggregateOutputType> : number>;
    aggregate<T extends BreakEntryAggregateArgs>(args: Prisma.Subset<T, BreakEntryAggregateArgs>): Prisma.PrismaPromise<GetBreakEntryAggregateType<T>>;
    groupBy<T extends BreakEntryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BreakEntryGroupByArgs['orderBy'];
    } : {
        orderBy?: BreakEntryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BreakEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBreakEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BreakEntryFieldRefs;
}
export interface Prisma__BreakEntryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    attendanceEntry<T extends Prisma.AttendanceEntryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AttendanceEntryDefaultArgs<ExtArgs>>): Prisma.Prisma__AttendanceEntryClient<runtime.Types.Result.GetResult<Prisma.$AttendanceEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BreakEntryFieldRefs {
    readonly id: Prisma.FieldRef<"BreakEntry", 'String'>;
    readonly attendanceEntryId: Prisma.FieldRef<"BreakEntry", 'String'>;
    readonly startTime: Prisma.FieldRef<"BreakEntry", 'DateTime'>;
    readonly endTime: Prisma.FieldRef<"BreakEntry", 'DateTime'>;
    readonly durationMinutes: Prisma.FieldRef<"BreakEntry", 'Int'>;
}
export type BreakEntryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BreakEntrySelect<ExtArgs> | null;
    omit?: Prisma.BreakEntryOmit<ExtArgs> | null;
    include?: Prisma.BreakEntryInclude<ExtArgs> | null;
    where: Prisma.BreakEntryWhereUniqueInput;
};
export type BreakEntryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BreakEntrySelect<ExtArgs> | null;
    omit?: Prisma.BreakEntryOmit<ExtArgs> | null;
    include?: Prisma.BreakEntryInclude<ExtArgs> | null;
    where: Prisma.BreakEntryWhereUniqueInput;
};
export type BreakEntryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BreakEntrySelect<ExtArgs> | null;
    omit?: Prisma.BreakEntryOmit<ExtArgs> | null;
    include?: Prisma.BreakEntryInclude<ExtArgs> | null;
    where?: Prisma.BreakEntryWhereInput;
    orderBy?: Prisma.BreakEntryOrderByWithRelationInput | Prisma.BreakEntryOrderByWithRelationInput[];
    cursor?: Prisma.BreakEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BreakEntryScalarFieldEnum | Prisma.BreakEntryScalarFieldEnum[];
};
export type BreakEntryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BreakEntrySelect<ExtArgs> | null;
    omit?: Prisma.BreakEntryOmit<ExtArgs> | null;
    include?: Prisma.BreakEntryInclude<ExtArgs> | null;
    where?: Prisma.BreakEntryWhereInput;
    orderBy?: Prisma.BreakEntryOrderByWithRelationInput | Prisma.BreakEntryOrderByWithRelationInput[];
    cursor?: Prisma.BreakEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BreakEntryScalarFieldEnum | Prisma.BreakEntryScalarFieldEnum[];
};
export type BreakEntryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BreakEntrySelect<ExtArgs> | null;
    omit?: Prisma.BreakEntryOmit<ExtArgs> | null;
    include?: Prisma.BreakEntryInclude<ExtArgs> | null;
    where?: Prisma.BreakEntryWhereInput;
    orderBy?: Prisma.BreakEntryOrderByWithRelationInput | Prisma.BreakEntryOrderByWithRelationInput[];
    cursor?: Prisma.BreakEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BreakEntryScalarFieldEnum | Prisma.BreakEntryScalarFieldEnum[];
};
export type BreakEntryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BreakEntrySelect<ExtArgs> | null;
    omit?: Prisma.BreakEntryOmit<ExtArgs> | null;
    include?: Prisma.BreakEntryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BreakEntryCreateInput, Prisma.BreakEntryUncheckedCreateInput>;
};
export type BreakEntryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BreakEntryCreateManyInput | Prisma.BreakEntryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BreakEntryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BreakEntrySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BreakEntryOmit<ExtArgs> | null;
    data: Prisma.BreakEntryCreateManyInput | Prisma.BreakEntryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BreakEntryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BreakEntryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BreakEntrySelect<ExtArgs> | null;
    omit?: Prisma.BreakEntryOmit<ExtArgs> | null;
    include?: Prisma.BreakEntryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BreakEntryUpdateInput, Prisma.BreakEntryUncheckedUpdateInput>;
    where: Prisma.BreakEntryWhereUniqueInput;
};
export type BreakEntryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BreakEntryUpdateManyMutationInput, Prisma.BreakEntryUncheckedUpdateManyInput>;
    where?: Prisma.BreakEntryWhereInput;
    limit?: number;
};
export type BreakEntryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BreakEntrySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BreakEntryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BreakEntryUpdateManyMutationInput, Prisma.BreakEntryUncheckedUpdateManyInput>;
    where?: Prisma.BreakEntryWhereInput;
    limit?: number;
    include?: Prisma.BreakEntryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BreakEntryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BreakEntrySelect<ExtArgs> | null;
    omit?: Prisma.BreakEntryOmit<ExtArgs> | null;
    include?: Prisma.BreakEntryInclude<ExtArgs> | null;
    where: Prisma.BreakEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.BreakEntryCreateInput, Prisma.BreakEntryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BreakEntryUpdateInput, Prisma.BreakEntryUncheckedUpdateInput>;
};
export type BreakEntryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BreakEntrySelect<ExtArgs> | null;
    omit?: Prisma.BreakEntryOmit<ExtArgs> | null;
    include?: Prisma.BreakEntryInclude<ExtArgs> | null;
    where: Prisma.BreakEntryWhereUniqueInput;
};
export type BreakEntryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BreakEntryWhereInput;
    limit?: number;
};
export type BreakEntryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BreakEntrySelect<ExtArgs> | null;
    omit?: Prisma.BreakEntryOmit<ExtArgs> | null;
    include?: Prisma.BreakEntryInclude<ExtArgs> | null;
};
