import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TimesheetModel = runtime.Types.Result.DefaultSelection<Prisma.$TimesheetPayload>;
export type AggregateTimesheet = {
    _count: TimesheetCountAggregateOutputType | null;
    _avg: TimesheetAvgAggregateOutputType | null;
    _sum: TimesheetSumAggregateOutputType | null;
    _min: TimesheetMinAggregateOutputType | null;
    _max: TimesheetMaxAggregateOutputType | null;
};
export type TimesheetAvgAggregateOutputType = {
    totalHours: runtime.Decimal | null;
    overtimeHours: runtime.Decimal | null;
};
export type TimesheetSumAggregateOutputType = {
    totalHours: runtime.Decimal | null;
    overtimeHours: runtime.Decimal | null;
};
export type TimesheetMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    employeeId: string | null;
    weekStart: Date | null;
    weekEnd: Date | null;
    totalHours: runtime.Decimal | null;
    overtimeHours: runtime.Decimal | null;
    status: $Enums.TimesheetStatus | null;
    submittedAt: Date | null;
    approvedBy: string | null;
    approvedAt: Date | null;
    rejectionReason: string | null;
};
export type TimesheetMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    employeeId: string | null;
    weekStart: Date | null;
    weekEnd: Date | null;
    totalHours: runtime.Decimal | null;
    overtimeHours: runtime.Decimal | null;
    status: $Enums.TimesheetStatus | null;
    submittedAt: Date | null;
    approvedBy: string | null;
    approvedAt: Date | null;
    rejectionReason: string | null;
};
export type TimesheetCountAggregateOutputType = {
    id: number;
    organizationId: number;
    employeeId: number;
    weekStart: number;
    weekEnd: number;
    totalHours: number;
    overtimeHours: number;
    status: number;
    submittedAt: number;
    approvedBy: number;
    approvedAt: number;
    rejectionReason: number;
    _all: number;
};
export type TimesheetAvgAggregateInputType = {
    totalHours?: true;
    overtimeHours?: true;
};
export type TimesheetSumAggregateInputType = {
    totalHours?: true;
    overtimeHours?: true;
};
export type TimesheetMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    employeeId?: true;
    weekStart?: true;
    weekEnd?: true;
    totalHours?: true;
    overtimeHours?: true;
    status?: true;
    submittedAt?: true;
    approvedBy?: true;
    approvedAt?: true;
    rejectionReason?: true;
};
export type TimesheetMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    employeeId?: true;
    weekStart?: true;
    weekEnd?: true;
    totalHours?: true;
    overtimeHours?: true;
    status?: true;
    submittedAt?: true;
    approvedBy?: true;
    approvedAt?: true;
    rejectionReason?: true;
};
export type TimesheetCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    employeeId?: true;
    weekStart?: true;
    weekEnd?: true;
    totalHours?: true;
    overtimeHours?: true;
    status?: true;
    submittedAt?: true;
    approvedBy?: true;
    approvedAt?: true;
    rejectionReason?: true;
    _all?: true;
};
export type TimesheetAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TimesheetWhereInput;
    orderBy?: Prisma.TimesheetOrderByWithRelationInput | Prisma.TimesheetOrderByWithRelationInput[];
    cursor?: Prisma.TimesheetWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TimesheetCountAggregateInputType;
    _avg?: TimesheetAvgAggregateInputType;
    _sum?: TimesheetSumAggregateInputType;
    _min?: TimesheetMinAggregateInputType;
    _max?: TimesheetMaxAggregateInputType;
};
export type GetTimesheetAggregateType<T extends TimesheetAggregateArgs> = {
    [P in keyof T & keyof AggregateTimesheet]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTimesheet[P]> : Prisma.GetScalarType<T[P], AggregateTimesheet[P]>;
};
export type TimesheetGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TimesheetWhereInput;
    orderBy?: Prisma.TimesheetOrderByWithAggregationInput | Prisma.TimesheetOrderByWithAggregationInput[];
    by: Prisma.TimesheetScalarFieldEnum[] | Prisma.TimesheetScalarFieldEnum;
    having?: Prisma.TimesheetScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TimesheetCountAggregateInputType | true;
    _avg?: TimesheetAvgAggregateInputType;
    _sum?: TimesheetSumAggregateInputType;
    _min?: TimesheetMinAggregateInputType;
    _max?: TimesheetMaxAggregateInputType;
};
export type TimesheetGroupByOutputType = {
    id: string;
    organizationId: string;
    employeeId: string;
    weekStart: Date;
    weekEnd: Date;
    totalHours: runtime.Decimal | null;
    overtimeHours: runtime.Decimal;
    status: $Enums.TimesheetStatus;
    submittedAt: Date | null;
    approvedBy: string | null;
    approvedAt: Date | null;
    rejectionReason: string | null;
    _count: TimesheetCountAggregateOutputType | null;
    _avg: TimesheetAvgAggregateOutputType | null;
    _sum: TimesheetSumAggregateOutputType | null;
    _min: TimesheetMinAggregateOutputType | null;
    _max: TimesheetMaxAggregateOutputType | null;
};
export type GetTimesheetGroupByPayload<T extends TimesheetGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TimesheetGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TimesheetGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TimesheetGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TimesheetGroupByOutputType[P]>;
}>>;
export type TimesheetWhereInput = {
    AND?: Prisma.TimesheetWhereInput | Prisma.TimesheetWhereInput[];
    OR?: Prisma.TimesheetWhereInput[];
    NOT?: Prisma.TimesheetWhereInput | Prisma.TimesheetWhereInput[];
    id?: Prisma.UuidFilter<"Timesheet"> | string;
    organizationId?: Prisma.UuidFilter<"Timesheet"> | string;
    employeeId?: Prisma.UuidFilter<"Timesheet"> | string;
    weekStart?: Prisma.DateTimeFilter<"Timesheet"> | Date | string;
    weekEnd?: Prisma.DateTimeFilter<"Timesheet"> | Date | string;
    totalHours?: Prisma.DecimalNullableFilter<"Timesheet"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeHours?: Prisma.DecimalFilter<"Timesheet"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumTimesheetStatusFilter<"Timesheet"> | $Enums.TimesheetStatus;
    submittedAt?: Prisma.DateTimeNullableFilter<"Timesheet"> | Date | string | null;
    approvedBy?: Prisma.UuidNullableFilter<"Timesheet"> | string | null;
    approvedAt?: Prisma.DateTimeNullableFilter<"Timesheet"> | Date | string | null;
    rejectionReason?: Prisma.StringNullableFilter<"Timesheet"> | string | null;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
};
export type TimesheetOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    weekStart?: Prisma.SortOrder;
    weekEnd?: Prisma.SortOrder;
    totalHours?: Prisma.SortOrderInput | Prisma.SortOrder;
    overtimeHours?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    employee?: Prisma.EmployeeOrderByWithRelationInput;
};
export type TimesheetWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    employeeId_weekStart?: Prisma.TimesheetEmployeeIdWeekStartCompoundUniqueInput;
    AND?: Prisma.TimesheetWhereInput | Prisma.TimesheetWhereInput[];
    OR?: Prisma.TimesheetWhereInput[];
    NOT?: Prisma.TimesheetWhereInput | Prisma.TimesheetWhereInput[];
    organizationId?: Prisma.UuidFilter<"Timesheet"> | string;
    employeeId?: Prisma.UuidFilter<"Timesheet"> | string;
    weekStart?: Prisma.DateTimeFilter<"Timesheet"> | Date | string;
    weekEnd?: Prisma.DateTimeFilter<"Timesheet"> | Date | string;
    totalHours?: Prisma.DecimalNullableFilter<"Timesheet"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeHours?: Prisma.DecimalFilter<"Timesheet"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumTimesheetStatusFilter<"Timesheet"> | $Enums.TimesheetStatus;
    submittedAt?: Prisma.DateTimeNullableFilter<"Timesheet"> | Date | string | null;
    approvedBy?: Prisma.UuidNullableFilter<"Timesheet"> | string | null;
    approvedAt?: Prisma.DateTimeNullableFilter<"Timesheet"> | Date | string | null;
    rejectionReason?: Prisma.StringNullableFilter<"Timesheet"> | string | null;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
}, "id" | "employeeId_weekStart">;
export type TimesheetOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    weekStart?: Prisma.SortOrder;
    weekEnd?: Prisma.SortOrder;
    totalHours?: Prisma.SortOrderInput | Prisma.SortOrder;
    overtimeHours?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.TimesheetCountOrderByAggregateInput;
    _avg?: Prisma.TimesheetAvgOrderByAggregateInput;
    _max?: Prisma.TimesheetMaxOrderByAggregateInput;
    _min?: Prisma.TimesheetMinOrderByAggregateInput;
    _sum?: Prisma.TimesheetSumOrderByAggregateInput;
};
export type TimesheetScalarWhereWithAggregatesInput = {
    AND?: Prisma.TimesheetScalarWhereWithAggregatesInput | Prisma.TimesheetScalarWhereWithAggregatesInput[];
    OR?: Prisma.TimesheetScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TimesheetScalarWhereWithAggregatesInput | Prisma.TimesheetScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Timesheet"> | string;
    organizationId?: Prisma.UuidWithAggregatesFilter<"Timesheet"> | string;
    employeeId?: Prisma.UuidWithAggregatesFilter<"Timesheet"> | string;
    weekStart?: Prisma.DateTimeWithAggregatesFilter<"Timesheet"> | Date | string;
    weekEnd?: Prisma.DateTimeWithAggregatesFilter<"Timesheet"> | Date | string;
    totalHours?: Prisma.DecimalNullableWithAggregatesFilter<"Timesheet"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeHours?: Prisma.DecimalWithAggregatesFilter<"Timesheet"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumTimesheetStatusWithAggregatesFilter<"Timesheet"> | $Enums.TimesheetStatus;
    submittedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Timesheet"> | Date | string | null;
    approvedBy?: Prisma.UuidNullableWithAggregatesFilter<"Timesheet"> | string | null;
    approvedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Timesheet"> | Date | string | null;
    rejectionReason?: Prisma.StringNullableWithAggregatesFilter<"Timesheet"> | string | null;
};
export type TimesheetCreateInput = {
    id?: string;
    weekStart: Date | string;
    weekEnd: Date | string;
    totalHours?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeHours?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.TimesheetStatus;
    submittedAt?: Date | string | null;
    approvedBy?: string | null;
    approvedAt?: Date | string | null;
    rejectionReason?: string | null;
    organization: Prisma.OrganizationCreateNestedOneWithoutTimesheetsInput;
    employee: Prisma.EmployeeCreateNestedOneWithoutTimesheetsInput;
};
export type TimesheetUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    employeeId: string;
    weekStart: Date | string;
    weekEnd: Date | string;
    totalHours?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeHours?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.TimesheetStatus;
    submittedAt?: Date | string | null;
    approvedBy?: string | null;
    approvedAt?: Date | string | null;
    rejectionReason?: string | null;
};
export type TimesheetUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weekStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    weekEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalHours?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeHours?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumTimesheetStatusFieldUpdateOperationsInput | $Enums.TimesheetStatus;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    approvedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutTimesheetsNestedInput;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutTimesheetsNestedInput;
};
export type TimesheetUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    weekStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    weekEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalHours?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeHours?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumTimesheetStatusFieldUpdateOperationsInput | $Enums.TimesheetStatus;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    approvedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type TimesheetCreateManyInput = {
    id?: string;
    organizationId: string;
    employeeId: string;
    weekStart: Date | string;
    weekEnd: Date | string;
    totalHours?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeHours?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.TimesheetStatus;
    submittedAt?: Date | string | null;
    approvedBy?: string | null;
    approvedAt?: Date | string | null;
    rejectionReason?: string | null;
};
export type TimesheetUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weekStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    weekEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalHours?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeHours?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumTimesheetStatusFieldUpdateOperationsInput | $Enums.TimesheetStatus;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    approvedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type TimesheetUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    weekStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    weekEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalHours?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeHours?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumTimesheetStatusFieldUpdateOperationsInput | $Enums.TimesheetStatus;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    approvedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type TimesheetListRelationFilter = {
    every?: Prisma.TimesheetWhereInput;
    some?: Prisma.TimesheetWhereInput;
    none?: Prisma.TimesheetWhereInput;
};
export type TimesheetOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TimesheetEmployeeIdWeekStartCompoundUniqueInput = {
    employeeId: string;
    weekStart: Date | string;
};
export type TimesheetCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    weekStart?: Prisma.SortOrder;
    weekEnd?: Prisma.SortOrder;
    totalHours?: Prisma.SortOrder;
    overtimeHours?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
    approvedBy?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrder;
};
export type TimesheetAvgOrderByAggregateInput = {
    totalHours?: Prisma.SortOrder;
    overtimeHours?: Prisma.SortOrder;
};
export type TimesheetMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    weekStart?: Prisma.SortOrder;
    weekEnd?: Prisma.SortOrder;
    totalHours?: Prisma.SortOrder;
    overtimeHours?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
    approvedBy?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrder;
};
export type TimesheetMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    weekStart?: Prisma.SortOrder;
    weekEnd?: Prisma.SortOrder;
    totalHours?: Prisma.SortOrder;
    overtimeHours?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
    approvedBy?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrder;
};
export type TimesheetSumOrderByAggregateInput = {
    totalHours?: Prisma.SortOrder;
    overtimeHours?: Prisma.SortOrder;
};
export type TimesheetCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.TimesheetCreateWithoutOrganizationInput, Prisma.TimesheetUncheckedCreateWithoutOrganizationInput> | Prisma.TimesheetCreateWithoutOrganizationInput[] | Prisma.TimesheetUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.TimesheetCreateOrConnectWithoutOrganizationInput | Prisma.TimesheetCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.TimesheetCreateManyOrganizationInputEnvelope;
    connect?: Prisma.TimesheetWhereUniqueInput | Prisma.TimesheetWhereUniqueInput[];
};
export type TimesheetUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.TimesheetCreateWithoutOrganizationInput, Prisma.TimesheetUncheckedCreateWithoutOrganizationInput> | Prisma.TimesheetCreateWithoutOrganizationInput[] | Prisma.TimesheetUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.TimesheetCreateOrConnectWithoutOrganizationInput | Prisma.TimesheetCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.TimesheetCreateManyOrganizationInputEnvelope;
    connect?: Prisma.TimesheetWhereUniqueInput | Prisma.TimesheetWhereUniqueInput[];
};
export type TimesheetUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.TimesheetCreateWithoutOrganizationInput, Prisma.TimesheetUncheckedCreateWithoutOrganizationInput> | Prisma.TimesheetCreateWithoutOrganizationInput[] | Prisma.TimesheetUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.TimesheetCreateOrConnectWithoutOrganizationInput | Prisma.TimesheetCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.TimesheetUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.TimesheetUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.TimesheetCreateManyOrganizationInputEnvelope;
    set?: Prisma.TimesheetWhereUniqueInput | Prisma.TimesheetWhereUniqueInput[];
    disconnect?: Prisma.TimesheetWhereUniqueInput | Prisma.TimesheetWhereUniqueInput[];
    delete?: Prisma.TimesheetWhereUniqueInput | Prisma.TimesheetWhereUniqueInput[];
    connect?: Prisma.TimesheetWhereUniqueInput | Prisma.TimesheetWhereUniqueInput[];
    update?: Prisma.TimesheetUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.TimesheetUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.TimesheetUpdateManyWithWhereWithoutOrganizationInput | Prisma.TimesheetUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.TimesheetScalarWhereInput | Prisma.TimesheetScalarWhereInput[];
};
export type TimesheetUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.TimesheetCreateWithoutOrganizationInput, Prisma.TimesheetUncheckedCreateWithoutOrganizationInput> | Prisma.TimesheetCreateWithoutOrganizationInput[] | Prisma.TimesheetUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.TimesheetCreateOrConnectWithoutOrganizationInput | Prisma.TimesheetCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.TimesheetUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.TimesheetUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.TimesheetCreateManyOrganizationInputEnvelope;
    set?: Prisma.TimesheetWhereUniqueInput | Prisma.TimesheetWhereUniqueInput[];
    disconnect?: Prisma.TimesheetWhereUniqueInput | Prisma.TimesheetWhereUniqueInput[];
    delete?: Prisma.TimesheetWhereUniqueInput | Prisma.TimesheetWhereUniqueInput[];
    connect?: Prisma.TimesheetWhereUniqueInput | Prisma.TimesheetWhereUniqueInput[];
    update?: Prisma.TimesheetUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.TimesheetUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.TimesheetUpdateManyWithWhereWithoutOrganizationInput | Prisma.TimesheetUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.TimesheetScalarWhereInput | Prisma.TimesheetScalarWhereInput[];
};
export type TimesheetCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.TimesheetCreateWithoutEmployeeInput, Prisma.TimesheetUncheckedCreateWithoutEmployeeInput> | Prisma.TimesheetCreateWithoutEmployeeInput[] | Prisma.TimesheetUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.TimesheetCreateOrConnectWithoutEmployeeInput | Prisma.TimesheetCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.TimesheetCreateManyEmployeeInputEnvelope;
    connect?: Prisma.TimesheetWhereUniqueInput | Prisma.TimesheetWhereUniqueInput[];
};
export type TimesheetUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.TimesheetCreateWithoutEmployeeInput, Prisma.TimesheetUncheckedCreateWithoutEmployeeInput> | Prisma.TimesheetCreateWithoutEmployeeInput[] | Prisma.TimesheetUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.TimesheetCreateOrConnectWithoutEmployeeInput | Prisma.TimesheetCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.TimesheetCreateManyEmployeeInputEnvelope;
    connect?: Prisma.TimesheetWhereUniqueInput | Prisma.TimesheetWhereUniqueInput[];
};
export type TimesheetUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.TimesheetCreateWithoutEmployeeInput, Prisma.TimesheetUncheckedCreateWithoutEmployeeInput> | Prisma.TimesheetCreateWithoutEmployeeInput[] | Prisma.TimesheetUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.TimesheetCreateOrConnectWithoutEmployeeInput | Prisma.TimesheetCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.TimesheetUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.TimesheetUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.TimesheetCreateManyEmployeeInputEnvelope;
    set?: Prisma.TimesheetWhereUniqueInput | Prisma.TimesheetWhereUniqueInput[];
    disconnect?: Prisma.TimesheetWhereUniqueInput | Prisma.TimesheetWhereUniqueInput[];
    delete?: Prisma.TimesheetWhereUniqueInput | Prisma.TimesheetWhereUniqueInput[];
    connect?: Prisma.TimesheetWhereUniqueInput | Prisma.TimesheetWhereUniqueInput[];
    update?: Prisma.TimesheetUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.TimesheetUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.TimesheetUpdateManyWithWhereWithoutEmployeeInput | Prisma.TimesheetUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.TimesheetScalarWhereInput | Prisma.TimesheetScalarWhereInput[];
};
export type TimesheetUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.TimesheetCreateWithoutEmployeeInput, Prisma.TimesheetUncheckedCreateWithoutEmployeeInput> | Prisma.TimesheetCreateWithoutEmployeeInput[] | Prisma.TimesheetUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.TimesheetCreateOrConnectWithoutEmployeeInput | Prisma.TimesheetCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.TimesheetUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.TimesheetUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.TimesheetCreateManyEmployeeInputEnvelope;
    set?: Prisma.TimesheetWhereUniqueInput | Prisma.TimesheetWhereUniqueInput[];
    disconnect?: Prisma.TimesheetWhereUniqueInput | Prisma.TimesheetWhereUniqueInput[];
    delete?: Prisma.TimesheetWhereUniqueInput | Prisma.TimesheetWhereUniqueInput[];
    connect?: Prisma.TimesheetWhereUniqueInput | Prisma.TimesheetWhereUniqueInput[];
    update?: Prisma.TimesheetUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.TimesheetUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.TimesheetUpdateManyWithWhereWithoutEmployeeInput | Prisma.TimesheetUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.TimesheetScalarWhereInput | Prisma.TimesheetScalarWhereInput[];
};
export type EnumTimesheetStatusFieldUpdateOperationsInput = {
    set?: $Enums.TimesheetStatus;
};
export type TimesheetCreateWithoutOrganizationInput = {
    id?: string;
    weekStart: Date | string;
    weekEnd: Date | string;
    totalHours?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeHours?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.TimesheetStatus;
    submittedAt?: Date | string | null;
    approvedBy?: string | null;
    approvedAt?: Date | string | null;
    rejectionReason?: string | null;
    employee: Prisma.EmployeeCreateNestedOneWithoutTimesheetsInput;
};
export type TimesheetUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    employeeId: string;
    weekStart: Date | string;
    weekEnd: Date | string;
    totalHours?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeHours?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.TimesheetStatus;
    submittedAt?: Date | string | null;
    approvedBy?: string | null;
    approvedAt?: Date | string | null;
    rejectionReason?: string | null;
};
export type TimesheetCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.TimesheetWhereUniqueInput;
    create: Prisma.XOR<Prisma.TimesheetCreateWithoutOrganizationInput, Prisma.TimesheetUncheckedCreateWithoutOrganizationInput>;
};
export type TimesheetCreateManyOrganizationInputEnvelope = {
    data: Prisma.TimesheetCreateManyOrganizationInput | Prisma.TimesheetCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type TimesheetUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.TimesheetWhereUniqueInput;
    update: Prisma.XOR<Prisma.TimesheetUpdateWithoutOrganizationInput, Prisma.TimesheetUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.TimesheetCreateWithoutOrganizationInput, Prisma.TimesheetUncheckedCreateWithoutOrganizationInput>;
};
export type TimesheetUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.TimesheetWhereUniqueInput;
    data: Prisma.XOR<Prisma.TimesheetUpdateWithoutOrganizationInput, Prisma.TimesheetUncheckedUpdateWithoutOrganizationInput>;
};
export type TimesheetUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.TimesheetScalarWhereInput;
    data: Prisma.XOR<Prisma.TimesheetUpdateManyMutationInput, Prisma.TimesheetUncheckedUpdateManyWithoutOrganizationInput>;
};
export type TimesheetScalarWhereInput = {
    AND?: Prisma.TimesheetScalarWhereInput | Prisma.TimesheetScalarWhereInput[];
    OR?: Prisma.TimesheetScalarWhereInput[];
    NOT?: Prisma.TimesheetScalarWhereInput | Prisma.TimesheetScalarWhereInput[];
    id?: Prisma.UuidFilter<"Timesheet"> | string;
    organizationId?: Prisma.UuidFilter<"Timesheet"> | string;
    employeeId?: Prisma.UuidFilter<"Timesheet"> | string;
    weekStart?: Prisma.DateTimeFilter<"Timesheet"> | Date | string;
    weekEnd?: Prisma.DateTimeFilter<"Timesheet"> | Date | string;
    totalHours?: Prisma.DecimalNullableFilter<"Timesheet"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeHours?: Prisma.DecimalFilter<"Timesheet"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumTimesheetStatusFilter<"Timesheet"> | $Enums.TimesheetStatus;
    submittedAt?: Prisma.DateTimeNullableFilter<"Timesheet"> | Date | string | null;
    approvedBy?: Prisma.UuidNullableFilter<"Timesheet"> | string | null;
    approvedAt?: Prisma.DateTimeNullableFilter<"Timesheet"> | Date | string | null;
    rejectionReason?: Prisma.StringNullableFilter<"Timesheet"> | string | null;
};
export type TimesheetCreateWithoutEmployeeInput = {
    id?: string;
    weekStart: Date | string;
    weekEnd: Date | string;
    totalHours?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeHours?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.TimesheetStatus;
    submittedAt?: Date | string | null;
    approvedBy?: string | null;
    approvedAt?: Date | string | null;
    rejectionReason?: string | null;
    organization: Prisma.OrganizationCreateNestedOneWithoutTimesheetsInput;
};
export type TimesheetUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    organizationId: string;
    weekStart: Date | string;
    weekEnd: Date | string;
    totalHours?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeHours?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.TimesheetStatus;
    submittedAt?: Date | string | null;
    approvedBy?: string | null;
    approvedAt?: Date | string | null;
    rejectionReason?: string | null;
};
export type TimesheetCreateOrConnectWithoutEmployeeInput = {
    where: Prisma.TimesheetWhereUniqueInput;
    create: Prisma.XOR<Prisma.TimesheetCreateWithoutEmployeeInput, Prisma.TimesheetUncheckedCreateWithoutEmployeeInput>;
};
export type TimesheetCreateManyEmployeeInputEnvelope = {
    data: Prisma.TimesheetCreateManyEmployeeInput | Prisma.TimesheetCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
};
export type TimesheetUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.TimesheetWhereUniqueInput;
    update: Prisma.XOR<Prisma.TimesheetUpdateWithoutEmployeeInput, Prisma.TimesheetUncheckedUpdateWithoutEmployeeInput>;
    create: Prisma.XOR<Prisma.TimesheetCreateWithoutEmployeeInput, Prisma.TimesheetUncheckedCreateWithoutEmployeeInput>;
};
export type TimesheetUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.TimesheetWhereUniqueInput;
    data: Prisma.XOR<Prisma.TimesheetUpdateWithoutEmployeeInput, Prisma.TimesheetUncheckedUpdateWithoutEmployeeInput>;
};
export type TimesheetUpdateManyWithWhereWithoutEmployeeInput = {
    where: Prisma.TimesheetScalarWhereInput;
    data: Prisma.XOR<Prisma.TimesheetUpdateManyMutationInput, Prisma.TimesheetUncheckedUpdateManyWithoutEmployeeInput>;
};
export type TimesheetCreateManyOrganizationInput = {
    id?: string;
    employeeId: string;
    weekStart: Date | string;
    weekEnd: Date | string;
    totalHours?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeHours?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.TimesheetStatus;
    submittedAt?: Date | string | null;
    approvedBy?: string | null;
    approvedAt?: Date | string | null;
    rejectionReason?: string | null;
};
export type TimesheetUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weekStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    weekEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalHours?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeHours?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumTimesheetStatusFieldUpdateOperationsInput | $Enums.TimesheetStatus;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    approvedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutTimesheetsNestedInput;
};
export type TimesheetUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    weekStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    weekEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalHours?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeHours?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumTimesheetStatusFieldUpdateOperationsInput | $Enums.TimesheetStatus;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    approvedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type TimesheetUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    weekStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    weekEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalHours?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeHours?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumTimesheetStatusFieldUpdateOperationsInput | $Enums.TimesheetStatus;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    approvedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type TimesheetCreateManyEmployeeInput = {
    id?: string;
    organizationId: string;
    weekStart: Date | string;
    weekEnd: Date | string;
    totalHours?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeHours?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.TimesheetStatus;
    submittedAt?: Date | string | null;
    approvedBy?: string | null;
    approvedAt?: Date | string | null;
    rejectionReason?: string | null;
};
export type TimesheetUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    weekStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    weekEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalHours?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeHours?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumTimesheetStatusFieldUpdateOperationsInput | $Enums.TimesheetStatus;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    approvedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutTimesheetsNestedInput;
};
export type TimesheetUncheckedUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    weekStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    weekEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalHours?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeHours?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumTimesheetStatusFieldUpdateOperationsInput | $Enums.TimesheetStatus;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    approvedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type TimesheetUncheckedUpdateManyWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    weekStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    weekEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalHours?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    overtimeHours?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumTimesheetStatusFieldUpdateOperationsInput | $Enums.TimesheetStatus;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    approvedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type TimesheetSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    employeeId?: boolean;
    weekStart?: boolean;
    weekEnd?: boolean;
    totalHours?: boolean;
    overtimeHours?: boolean;
    status?: boolean;
    submittedAt?: boolean;
    approvedBy?: boolean;
    approvedAt?: boolean;
    rejectionReason?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["timesheet"]>;
export type TimesheetSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    employeeId?: boolean;
    weekStart?: boolean;
    weekEnd?: boolean;
    totalHours?: boolean;
    overtimeHours?: boolean;
    status?: boolean;
    submittedAt?: boolean;
    approvedBy?: boolean;
    approvedAt?: boolean;
    rejectionReason?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["timesheet"]>;
export type TimesheetSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    employeeId?: boolean;
    weekStart?: boolean;
    weekEnd?: boolean;
    totalHours?: boolean;
    overtimeHours?: boolean;
    status?: boolean;
    submittedAt?: boolean;
    approvedBy?: boolean;
    approvedAt?: boolean;
    rejectionReason?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["timesheet"]>;
export type TimesheetSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    employeeId?: boolean;
    weekStart?: boolean;
    weekEnd?: boolean;
    totalHours?: boolean;
    overtimeHours?: boolean;
    status?: boolean;
    submittedAt?: boolean;
    approvedBy?: boolean;
    approvedAt?: boolean;
    rejectionReason?: boolean;
};
export type TimesheetOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "employeeId" | "weekStart" | "weekEnd" | "totalHours" | "overtimeHours" | "status" | "submittedAt" | "approvedBy" | "approvedAt" | "rejectionReason", ExtArgs["result"]["timesheet"]>;
export type TimesheetInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type TimesheetIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type TimesheetIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type $TimesheetPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Timesheet";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        employee: Prisma.$EmployeePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        employeeId: string;
        weekStart: Date;
        weekEnd: Date;
        totalHours: runtime.Decimal | null;
        overtimeHours: runtime.Decimal;
        status: $Enums.TimesheetStatus;
        submittedAt: Date | null;
        approvedBy: string | null;
        approvedAt: Date | null;
        rejectionReason: string | null;
    }, ExtArgs["result"]["timesheet"]>;
    composites: {};
};
export type TimesheetGetPayload<S extends boolean | null | undefined | TimesheetDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TimesheetPayload, S>;
export type TimesheetCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TimesheetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TimesheetCountAggregateInputType | true;
};
export interface TimesheetDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Timesheet'];
        meta: {
            name: 'Timesheet';
        };
    };
    findUnique<T extends TimesheetFindUniqueArgs>(args: Prisma.SelectSubset<T, TimesheetFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TimesheetClient<runtime.Types.Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TimesheetFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TimesheetFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TimesheetClient<runtime.Types.Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TimesheetFindFirstArgs>(args?: Prisma.SelectSubset<T, TimesheetFindFirstArgs<ExtArgs>>): Prisma.Prisma__TimesheetClient<runtime.Types.Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TimesheetFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TimesheetFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TimesheetClient<runtime.Types.Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TimesheetFindManyArgs>(args?: Prisma.SelectSubset<T, TimesheetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TimesheetCreateArgs>(args: Prisma.SelectSubset<T, TimesheetCreateArgs<ExtArgs>>): Prisma.Prisma__TimesheetClient<runtime.Types.Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TimesheetCreateManyArgs>(args?: Prisma.SelectSubset<T, TimesheetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TimesheetCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TimesheetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TimesheetDeleteArgs>(args: Prisma.SelectSubset<T, TimesheetDeleteArgs<ExtArgs>>): Prisma.Prisma__TimesheetClient<runtime.Types.Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TimesheetUpdateArgs>(args: Prisma.SelectSubset<T, TimesheetUpdateArgs<ExtArgs>>): Prisma.Prisma__TimesheetClient<runtime.Types.Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TimesheetDeleteManyArgs>(args?: Prisma.SelectSubset<T, TimesheetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TimesheetUpdateManyArgs>(args: Prisma.SelectSubset<T, TimesheetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TimesheetUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TimesheetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TimesheetUpsertArgs>(args: Prisma.SelectSubset<T, TimesheetUpsertArgs<ExtArgs>>): Prisma.Prisma__TimesheetClient<runtime.Types.Result.GetResult<Prisma.$TimesheetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TimesheetCountArgs>(args?: Prisma.Subset<T, TimesheetCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TimesheetCountAggregateOutputType> : number>;
    aggregate<T extends TimesheetAggregateArgs>(args: Prisma.Subset<T, TimesheetAggregateArgs>): Prisma.PrismaPromise<GetTimesheetAggregateType<T>>;
    groupBy<T extends TimesheetGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TimesheetGroupByArgs['orderBy'];
    } : {
        orderBy?: TimesheetGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TimesheetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimesheetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TimesheetFieldRefs;
}
export interface Prisma__TimesheetClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    employee<T extends Prisma.EmployeeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmployeeDefaultArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TimesheetFieldRefs {
    readonly id: Prisma.FieldRef<"Timesheet", 'String'>;
    readonly organizationId: Prisma.FieldRef<"Timesheet", 'String'>;
    readonly employeeId: Prisma.FieldRef<"Timesheet", 'String'>;
    readonly weekStart: Prisma.FieldRef<"Timesheet", 'DateTime'>;
    readonly weekEnd: Prisma.FieldRef<"Timesheet", 'DateTime'>;
    readonly totalHours: Prisma.FieldRef<"Timesheet", 'Decimal'>;
    readonly overtimeHours: Prisma.FieldRef<"Timesheet", 'Decimal'>;
    readonly status: Prisma.FieldRef<"Timesheet", 'TimesheetStatus'>;
    readonly submittedAt: Prisma.FieldRef<"Timesheet", 'DateTime'>;
    readonly approvedBy: Prisma.FieldRef<"Timesheet", 'String'>;
    readonly approvedAt: Prisma.FieldRef<"Timesheet", 'DateTime'>;
    readonly rejectionReason: Prisma.FieldRef<"Timesheet", 'String'>;
}
export type TimesheetFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimesheetSelect<ExtArgs> | null;
    omit?: Prisma.TimesheetOmit<ExtArgs> | null;
    include?: Prisma.TimesheetInclude<ExtArgs> | null;
    where: Prisma.TimesheetWhereUniqueInput;
};
export type TimesheetFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimesheetSelect<ExtArgs> | null;
    omit?: Prisma.TimesheetOmit<ExtArgs> | null;
    include?: Prisma.TimesheetInclude<ExtArgs> | null;
    where: Prisma.TimesheetWhereUniqueInput;
};
export type TimesheetFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimesheetSelect<ExtArgs> | null;
    omit?: Prisma.TimesheetOmit<ExtArgs> | null;
    include?: Prisma.TimesheetInclude<ExtArgs> | null;
    where?: Prisma.TimesheetWhereInput;
    orderBy?: Prisma.TimesheetOrderByWithRelationInput | Prisma.TimesheetOrderByWithRelationInput[];
    cursor?: Prisma.TimesheetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TimesheetScalarFieldEnum | Prisma.TimesheetScalarFieldEnum[];
};
export type TimesheetFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimesheetSelect<ExtArgs> | null;
    omit?: Prisma.TimesheetOmit<ExtArgs> | null;
    include?: Prisma.TimesheetInclude<ExtArgs> | null;
    where?: Prisma.TimesheetWhereInput;
    orderBy?: Prisma.TimesheetOrderByWithRelationInput | Prisma.TimesheetOrderByWithRelationInput[];
    cursor?: Prisma.TimesheetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TimesheetScalarFieldEnum | Prisma.TimesheetScalarFieldEnum[];
};
export type TimesheetFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimesheetSelect<ExtArgs> | null;
    omit?: Prisma.TimesheetOmit<ExtArgs> | null;
    include?: Prisma.TimesheetInclude<ExtArgs> | null;
    where?: Prisma.TimesheetWhereInput;
    orderBy?: Prisma.TimesheetOrderByWithRelationInput | Prisma.TimesheetOrderByWithRelationInput[];
    cursor?: Prisma.TimesheetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TimesheetScalarFieldEnum | Prisma.TimesheetScalarFieldEnum[];
};
export type TimesheetCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimesheetSelect<ExtArgs> | null;
    omit?: Prisma.TimesheetOmit<ExtArgs> | null;
    include?: Prisma.TimesheetInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TimesheetCreateInput, Prisma.TimesheetUncheckedCreateInput>;
};
export type TimesheetCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TimesheetCreateManyInput | Prisma.TimesheetCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TimesheetCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimesheetSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TimesheetOmit<ExtArgs> | null;
    data: Prisma.TimesheetCreateManyInput | Prisma.TimesheetCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TimesheetIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TimesheetUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimesheetSelect<ExtArgs> | null;
    omit?: Prisma.TimesheetOmit<ExtArgs> | null;
    include?: Prisma.TimesheetInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TimesheetUpdateInput, Prisma.TimesheetUncheckedUpdateInput>;
    where: Prisma.TimesheetWhereUniqueInput;
};
export type TimesheetUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TimesheetUpdateManyMutationInput, Prisma.TimesheetUncheckedUpdateManyInput>;
    where?: Prisma.TimesheetWhereInput;
    limit?: number;
};
export type TimesheetUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimesheetSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TimesheetOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TimesheetUpdateManyMutationInput, Prisma.TimesheetUncheckedUpdateManyInput>;
    where?: Prisma.TimesheetWhereInput;
    limit?: number;
    include?: Prisma.TimesheetIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TimesheetUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimesheetSelect<ExtArgs> | null;
    omit?: Prisma.TimesheetOmit<ExtArgs> | null;
    include?: Prisma.TimesheetInclude<ExtArgs> | null;
    where: Prisma.TimesheetWhereUniqueInput;
    create: Prisma.XOR<Prisma.TimesheetCreateInput, Prisma.TimesheetUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TimesheetUpdateInput, Prisma.TimesheetUncheckedUpdateInput>;
};
export type TimesheetDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimesheetSelect<ExtArgs> | null;
    omit?: Prisma.TimesheetOmit<ExtArgs> | null;
    include?: Prisma.TimesheetInclude<ExtArgs> | null;
    where: Prisma.TimesheetWhereUniqueInput;
};
export type TimesheetDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TimesheetWhereInput;
    limit?: number;
};
export type TimesheetDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimesheetSelect<ExtArgs> | null;
    omit?: Prisma.TimesheetOmit<ExtArgs> | null;
    include?: Prisma.TimesheetInclude<ExtArgs> | null;
};
