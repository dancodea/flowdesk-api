import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AttendanceEntryModel = runtime.Types.Result.DefaultSelection<Prisma.$AttendanceEntryPayload>;
export type AggregateAttendanceEntry = {
    _count: AttendanceEntryCountAggregateOutputType | null;
    _avg: AttendanceEntryAvgAggregateOutputType | null;
    _sum: AttendanceEntrySumAggregateOutputType | null;
    _min: AttendanceEntryMinAggregateOutputType | null;
    _max: AttendanceEntryMaxAggregateOutputType | null;
};
export type AttendanceEntryAvgAggregateOutputType = {
    totalMinutes: number | null;
    overtimeMinutes: number | null;
    locationLat: runtime.Decimal | null;
    locationLng: runtime.Decimal | null;
};
export type AttendanceEntrySumAggregateOutputType = {
    totalMinutes: number | null;
    overtimeMinutes: number | null;
    locationLat: runtime.Decimal | null;
    locationLng: runtime.Decimal | null;
};
export type AttendanceEntryMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    employeeId: string | null;
    date: Date | null;
    clockIn: Date | null;
    clockOut: Date | null;
    totalMinutes: number | null;
    overtimeMinutes: number | null;
    isManual: boolean | null;
    manualReason: string | null;
    status: $Enums.AttendanceStatus | null;
    locationLat: runtime.Decimal | null;
    locationLng: runtime.Decimal | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AttendanceEntryMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    employeeId: string | null;
    date: Date | null;
    clockIn: Date | null;
    clockOut: Date | null;
    totalMinutes: number | null;
    overtimeMinutes: number | null;
    isManual: boolean | null;
    manualReason: string | null;
    status: $Enums.AttendanceStatus | null;
    locationLat: runtime.Decimal | null;
    locationLng: runtime.Decimal | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AttendanceEntryCountAggregateOutputType = {
    id: number;
    organizationId: number;
    employeeId: number;
    date: number;
    clockIn: number;
    clockOut: number;
    totalMinutes: number;
    overtimeMinutes: number;
    isManual: number;
    manualReason: number;
    status: number;
    locationLat: number;
    locationLng: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AttendanceEntryAvgAggregateInputType = {
    totalMinutes?: true;
    overtimeMinutes?: true;
    locationLat?: true;
    locationLng?: true;
};
export type AttendanceEntrySumAggregateInputType = {
    totalMinutes?: true;
    overtimeMinutes?: true;
    locationLat?: true;
    locationLng?: true;
};
export type AttendanceEntryMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    employeeId?: true;
    date?: true;
    clockIn?: true;
    clockOut?: true;
    totalMinutes?: true;
    overtimeMinutes?: true;
    isManual?: true;
    manualReason?: true;
    status?: true;
    locationLat?: true;
    locationLng?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AttendanceEntryMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    employeeId?: true;
    date?: true;
    clockIn?: true;
    clockOut?: true;
    totalMinutes?: true;
    overtimeMinutes?: true;
    isManual?: true;
    manualReason?: true;
    status?: true;
    locationLat?: true;
    locationLng?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AttendanceEntryCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    employeeId?: true;
    date?: true;
    clockIn?: true;
    clockOut?: true;
    totalMinutes?: true;
    overtimeMinutes?: true;
    isManual?: true;
    manualReason?: true;
    status?: true;
    locationLat?: true;
    locationLng?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AttendanceEntryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceEntryWhereInput;
    orderBy?: Prisma.AttendanceEntryOrderByWithRelationInput | Prisma.AttendanceEntryOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AttendanceEntryCountAggregateInputType;
    _avg?: AttendanceEntryAvgAggregateInputType;
    _sum?: AttendanceEntrySumAggregateInputType;
    _min?: AttendanceEntryMinAggregateInputType;
    _max?: AttendanceEntryMaxAggregateInputType;
};
export type GetAttendanceEntryAggregateType<T extends AttendanceEntryAggregateArgs> = {
    [P in keyof T & keyof AggregateAttendanceEntry]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAttendanceEntry[P]> : Prisma.GetScalarType<T[P], AggregateAttendanceEntry[P]>;
};
export type AttendanceEntryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceEntryWhereInput;
    orderBy?: Prisma.AttendanceEntryOrderByWithAggregationInput | Prisma.AttendanceEntryOrderByWithAggregationInput[];
    by: Prisma.AttendanceEntryScalarFieldEnum[] | Prisma.AttendanceEntryScalarFieldEnum;
    having?: Prisma.AttendanceEntryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AttendanceEntryCountAggregateInputType | true;
    _avg?: AttendanceEntryAvgAggregateInputType;
    _sum?: AttendanceEntrySumAggregateInputType;
    _min?: AttendanceEntryMinAggregateInputType;
    _max?: AttendanceEntryMaxAggregateInputType;
};
export type AttendanceEntryGroupByOutputType = {
    id: string;
    organizationId: string;
    employeeId: string;
    date: Date;
    clockIn: Date | null;
    clockOut: Date | null;
    totalMinutes: number | null;
    overtimeMinutes: number;
    isManual: boolean;
    manualReason: string | null;
    status: $Enums.AttendanceStatus;
    locationLat: runtime.Decimal | null;
    locationLng: runtime.Decimal | null;
    createdAt: Date;
    updatedAt: Date;
    _count: AttendanceEntryCountAggregateOutputType | null;
    _avg: AttendanceEntryAvgAggregateOutputType | null;
    _sum: AttendanceEntrySumAggregateOutputType | null;
    _min: AttendanceEntryMinAggregateOutputType | null;
    _max: AttendanceEntryMaxAggregateOutputType | null;
};
export type GetAttendanceEntryGroupByPayload<T extends AttendanceEntryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AttendanceEntryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AttendanceEntryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AttendanceEntryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AttendanceEntryGroupByOutputType[P]>;
}>>;
export type AttendanceEntryWhereInput = {
    AND?: Prisma.AttendanceEntryWhereInput | Prisma.AttendanceEntryWhereInput[];
    OR?: Prisma.AttendanceEntryWhereInput[];
    NOT?: Prisma.AttendanceEntryWhereInput | Prisma.AttendanceEntryWhereInput[];
    id?: Prisma.UuidFilter<"AttendanceEntry"> | string;
    organizationId?: Prisma.UuidFilter<"AttendanceEntry"> | string;
    employeeId?: Prisma.UuidFilter<"AttendanceEntry"> | string;
    date?: Prisma.DateTimeFilter<"AttendanceEntry"> | Date | string;
    clockIn?: Prisma.DateTimeNullableFilter<"AttendanceEntry"> | Date | string | null;
    clockOut?: Prisma.DateTimeNullableFilter<"AttendanceEntry"> | Date | string | null;
    totalMinutes?: Prisma.IntNullableFilter<"AttendanceEntry"> | number | null;
    overtimeMinutes?: Prisma.IntFilter<"AttendanceEntry"> | number;
    isManual?: Prisma.BoolFilter<"AttendanceEntry"> | boolean;
    manualReason?: Prisma.StringNullableFilter<"AttendanceEntry"> | string | null;
    status?: Prisma.EnumAttendanceStatusFilter<"AttendanceEntry"> | $Enums.AttendanceStatus;
    locationLat?: Prisma.DecimalNullableFilter<"AttendanceEntry"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    locationLng?: Prisma.DecimalNullableFilter<"AttendanceEntry"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFilter<"AttendanceEntry"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AttendanceEntry"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
    breaks?: Prisma.BreakEntryListRelationFilter;
};
export type AttendanceEntryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    clockIn?: Prisma.SortOrderInput | Prisma.SortOrder;
    clockOut?: Prisma.SortOrderInput | Prisma.SortOrder;
    totalMinutes?: Prisma.SortOrderInput | Prisma.SortOrder;
    overtimeMinutes?: Prisma.SortOrder;
    isManual?: Prisma.SortOrder;
    manualReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    locationLat?: Prisma.SortOrderInput | Prisma.SortOrder;
    locationLng?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    employee?: Prisma.EmployeeOrderByWithRelationInput;
    breaks?: Prisma.BreakEntryOrderByRelationAggregateInput;
};
export type AttendanceEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AttendanceEntryWhereInput | Prisma.AttendanceEntryWhereInput[];
    OR?: Prisma.AttendanceEntryWhereInput[];
    NOT?: Prisma.AttendanceEntryWhereInput | Prisma.AttendanceEntryWhereInput[];
    organizationId?: Prisma.UuidFilter<"AttendanceEntry"> | string;
    employeeId?: Prisma.UuidFilter<"AttendanceEntry"> | string;
    date?: Prisma.DateTimeFilter<"AttendanceEntry"> | Date | string;
    clockIn?: Prisma.DateTimeNullableFilter<"AttendanceEntry"> | Date | string | null;
    clockOut?: Prisma.DateTimeNullableFilter<"AttendanceEntry"> | Date | string | null;
    totalMinutes?: Prisma.IntNullableFilter<"AttendanceEntry"> | number | null;
    overtimeMinutes?: Prisma.IntFilter<"AttendanceEntry"> | number;
    isManual?: Prisma.BoolFilter<"AttendanceEntry"> | boolean;
    manualReason?: Prisma.StringNullableFilter<"AttendanceEntry"> | string | null;
    status?: Prisma.EnumAttendanceStatusFilter<"AttendanceEntry"> | $Enums.AttendanceStatus;
    locationLat?: Prisma.DecimalNullableFilter<"AttendanceEntry"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    locationLng?: Prisma.DecimalNullableFilter<"AttendanceEntry"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFilter<"AttendanceEntry"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AttendanceEntry"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
    breaks?: Prisma.BreakEntryListRelationFilter;
}, "id">;
export type AttendanceEntryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    clockIn?: Prisma.SortOrderInput | Prisma.SortOrder;
    clockOut?: Prisma.SortOrderInput | Prisma.SortOrder;
    totalMinutes?: Prisma.SortOrderInput | Prisma.SortOrder;
    overtimeMinutes?: Prisma.SortOrder;
    isManual?: Prisma.SortOrder;
    manualReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    locationLat?: Prisma.SortOrderInput | Prisma.SortOrder;
    locationLng?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AttendanceEntryCountOrderByAggregateInput;
    _avg?: Prisma.AttendanceEntryAvgOrderByAggregateInput;
    _max?: Prisma.AttendanceEntryMaxOrderByAggregateInput;
    _min?: Prisma.AttendanceEntryMinOrderByAggregateInput;
    _sum?: Prisma.AttendanceEntrySumOrderByAggregateInput;
};
export type AttendanceEntryScalarWhereWithAggregatesInput = {
    AND?: Prisma.AttendanceEntryScalarWhereWithAggregatesInput | Prisma.AttendanceEntryScalarWhereWithAggregatesInput[];
    OR?: Prisma.AttendanceEntryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AttendanceEntryScalarWhereWithAggregatesInput | Prisma.AttendanceEntryScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"AttendanceEntry"> | string;
    organizationId?: Prisma.UuidWithAggregatesFilter<"AttendanceEntry"> | string;
    employeeId?: Prisma.UuidWithAggregatesFilter<"AttendanceEntry"> | string;
    date?: Prisma.DateTimeWithAggregatesFilter<"AttendanceEntry"> | Date | string;
    clockIn?: Prisma.DateTimeNullableWithAggregatesFilter<"AttendanceEntry"> | Date | string | null;
    clockOut?: Prisma.DateTimeNullableWithAggregatesFilter<"AttendanceEntry"> | Date | string | null;
    totalMinutes?: Prisma.IntNullableWithAggregatesFilter<"AttendanceEntry"> | number | null;
    overtimeMinutes?: Prisma.IntWithAggregatesFilter<"AttendanceEntry"> | number;
    isManual?: Prisma.BoolWithAggregatesFilter<"AttendanceEntry"> | boolean;
    manualReason?: Prisma.StringNullableWithAggregatesFilter<"AttendanceEntry"> | string | null;
    status?: Prisma.EnumAttendanceStatusWithAggregatesFilter<"AttendanceEntry"> | $Enums.AttendanceStatus;
    locationLat?: Prisma.DecimalNullableWithAggregatesFilter<"AttendanceEntry"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    locationLng?: Prisma.DecimalNullableWithAggregatesFilter<"AttendanceEntry"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AttendanceEntry"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"AttendanceEntry"> | Date | string;
};
export type AttendanceEntryCreateInput = {
    id?: string;
    date: Date | string;
    clockIn?: Date | string | null;
    clockOut?: Date | string | null;
    totalMinutes?: number | null;
    overtimeMinutes?: number;
    isManual?: boolean;
    manualReason?: string | null;
    status?: $Enums.AttendanceStatus;
    locationLat?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    locationLng?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutAttendanceEntriesInput;
    employee: Prisma.EmployeeCreateNestedOneWithoutAttendanceEntriesInput;
    breaks?: Prisma.BreakEntryCreateNestedManyWithoutAttendanceEntryInput;
};
export type AttendanceEntryUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    employeeId: string;
    date: Date | string;
    clockIn?: Date | string | null;
    clockOut?: Date | string | null;
    totalMinutes?: number | null;
    overtimeMinutes?: number;
    isManual?: boolean;
    manualReason?: string | null;
    status?: $Enums.AttendanceStatus;
    locationLat?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    locationLng?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    breaks?: Prisma.BreakEntryUncheckedCreateNestedManyWithoutAttendanceEntryInput;
};
export type AttendanceEntryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockIn?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    clockOut?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    totalMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    overtimeMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    isManual?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    manualReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    locationLat?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    locationLng?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutAttendanceEntriesNestedInput;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutAttendanceEntriesNestedInput;
    breaks?: Prisma.BreakEntryUpdateManyWithoutAttendanceEntryNestedInput;
};
export type AttendanceEntryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockIn?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    clockOut?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    totalMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    overtimeMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    isManual?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    manualReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    locationLat?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    locationLng?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    breaks?: Prisma.BreakEntryUncheckedUpdateManyWithoutAttendanceEntryNestedInput;
};
export type AttendanceEntryCreateManyInput = {
    id?: string;
    organizationId: string;
    employeeId: string;
    date: Date | string;
    clockIn?: Date | string | null;
    clockOut?: Date | string | null;
    totalMinutes?: number | null;
    overtimeMinutes?: number;
    isManual?: boolean;
    manualReason?: string | null;
    status?: $Enums.AttendanceStatus;
    locationLat?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    locationLng?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AttendanceEntryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockIn?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    clockOut?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    totalMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    overtimeMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    isManual?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    manualReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    locationLat?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    locationLng?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceEntryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockIn?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    clockOut?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    totalMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    overtimeMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    isManual?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    manualReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    locationLat?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    locationLng?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceEntryListRelationFilter = {
    every?: Prisma.AttendanceEntryWhereInput;
    some?: Prisma.AttendanceEntryWhereInput;
    none?: Prisma.AttendanceEntryWhereInput;
};
export type AttendanceEntryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AttendanceEntryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    clockIn?: Prisma.SortOrder;
    clockOut?: Prisma.SortOrder;
    totalMinutes?: Prisma.SortOrder;
    overtimeMinutes?: Prisma.SortOrder;
    isManual?: Prisma.SortOrder;
    manualReason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    locationLat?: Prisma.SortOrder;
    locationLng?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AttendanceEntryAvgOrderByAggregateInput = {
    totalMinutes?: Prisma.SortOrder;
    overtimeMinutes?: Prisma.SortOrder;
    locationLat?: Prisma.SortOrder;
    locationLng?: Prisma.SortOrder;
};
export type AttendanceEntryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    clockIn?: Prisma.SortOrder;
    clockOut?: Prisma.SortOrder;
    totalMinutes?: Prisma.SortOrder;
    overtimeMinutes?: Prisma.SortOrder;
    isManual?: Prisma.SortOrder;
    manualReason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    locationLat?: Prisma.SortOrder;
    locationLng?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AttendanceEntryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    clockIn?: Prisma.SortOrder;
    clockOut?: Prisma.SortOrder;
    totalMinutes?: Prisma.SortOrder;
    overtimeMinutes?: Prisma.SortOrder;
    isManual?: Prisma.SortOrder;
    manualReason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    locationLat?: Prisma.SortOrder;
    locationLng?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AttendanceEntrySumOrderByAggregateInput = {
    totalMinutes?: Prisma.SortOrder;
    overtimeMinutes?: Prisma.SortOrder;
    locationLat?: Prisma.SortOrder;
    locationLng?: Prisma.SortOrder;
};
export type AttendanceEntryScalarRelationFilter = {
    is?: Prisma.AttendanceEntryWhereInput;
    isNot?: Prisma.AttendanceEntryWhereInput;
};
export type AttendanceEntryCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.AttendanceEntryCreateWithoutOrganizationInput, Prisma.AttendanceEntryUncheckedCreateWithoutOrganizationInput> | Prisma.AttendanceEntryCreateWithoutOrganizationInput[] | Prisma.AttendanceEntryUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.AttendanceEntryCreateOrConnectWithoutOrganizationInput | Prisma.AttendanceEntryCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.AttendanceEntryCreateManyOrganizationInputEnvelope;
    connect?: Prisma.AttendanceEntryWhereUniqueInput | Prisma.AttendanceEntryWhereUniqueInput[];
};
export type AttendanceEntryUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.AttendanceEntryCreateWithoutOrganizationInput, Prisma.AttendanceEntryUncheckedCreateWithoutOrganizationInput> | Prisma.AttendanceEntryCreateWithoutOrganizationInput[] | Prisma.AttendanceEntryUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.AttendanceEntryCreateOrConnectWithoutOrganizationInput | Prisma.AttendanceEntryCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.AttendanceEntryCreateManyOrganizationInputEnvelope;
    connect?: Prisma.AttendanceEntryWhereUniqueInput | Prisma.AttendanceEntryWhereUniqueInput[];
};
export type AttendanceEntryUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceEntryCreateWithoutOrganizationInput, Prisma.AttendanceEntryUncheckedCreateWithoutOrganizationInput> | Prisma.AttendanceEntryCreateWithoutOrganizationInput[] | Prisma.AttendanceEntryUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.AttendanceEntryCreateOrConnectWithoutOrganizationInput | Prisma.AttendanceEntryCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.AttendanceEntryUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.AttendanceEntryUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.AttendanceEntryCreateManyOrganizationInputEnvelope;
    set?: Prisma.AttendanceEntryWhereUniqueInput | Prisma.AttendanceEntryWhereUniqueInput[];
    disconnect?: Prisma.AttendanceEntryWhereUniqueInput | Prisma.AttendanceEntryWhereUniqueInput[];
    delete?: Prisma.AttendanceEntryWhereUniqueInput | Prisma.AttendanceEntryWhereUniqueInput[];
    connect?: Prisma.AttendanceEntryWhereUniqueInput | Prisma.AttendanceEntryWhereUniqueInput[];
    update?: Prisma.AttendanceEntryUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.AttendanceEntryUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.AttendanceEntryUpdateManyWithWhereWithoutOrganizationInput | Prisma.AttendanceEntryUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.AttendanceEntryScalarWhereInput | Prisma.AttendanceEntryScalarWhereInput[];
};
export type AttendanceEntryUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceEntryCreateWithoutOrganizationInput, Prisma.AttendanceEntryUncheckedCreateWithoutOrganizationInput> | Prisma.AttendanceEntryCreateWithoutOrganizationInput[] | Prisma.AttendanceEntryUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.AttendanceEntryCreateOrConnectWithoutOrganizationInput | Prisma.AttendanceEntryCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.AttendanceEntryUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.AttendanceEntryUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.AttendanceEntryCreateManyOrganizationInputEnvelope;
    set?: Prisma.AttendanceEntryWhereUniqueInput | Prisma.AttendanceEntryWhereUniqueInput[];
    disconnect?: Prisma.AttendanceEntryWhereUniqueInput | Prisma.AttendanceEntryWhereUniqueInput[];
    delete?: Prisma.AttendanceEntryWhereUniqueInput | Prisma.AttendanceEntryWhereUniqueInput[];
    connect?: Prisma.AttendanceEntryWhereUniqueInput | Prisma.AttendanceEntryWhereUniqueInput[];
    update?: Prisma.AttendanceEntryUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.AttendanceEntryUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.AttendanceEntryUpdateManyWithWhereWithoutOrganizationInput | Prisma.AttendanceEntryUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.AttendanceEntryScalarWhereInput | Prisma.AttendanceEntryScalarWhereInput[];
};
export type AttendanceEntryCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.AttendanceEntryCreateWithoutEmployeeInput, Prisma.AttendanceEntryUncheckedCreateWithoutEmployeeInput> | Prisma.AttendanceEntryCreateWithoutEmployeeInput[] | Prisma.AttendanceEntryUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.AttendanceEntryCreateOrConnectWithoutEmployeeInput | Prisma.AttendanceEntryCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.AttendanceEntryCreateManyEmployeeInputEnvelope;
    connect?: Prisma.AttendanceEntryWhereUniqueInput | Prisma.AttendanceEntryWhereUniqueInput[];
};
export type AttendanceEntryUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.AttendanceEntryCreateWithoutEmployeeInput, Prisma.AttendanceEntryUncheckedCreateWithoutEmployeeInput> | Prisma.AttendanceEntryCreateWithoutEmployeeInput[] | Prisma.AttendanceEntryUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.AttendanceEntryCreateOrConnectWithoutEmployeeInput | Prisma.AttendanceEntryCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.AttendanceEntryCreateManyEmployeeInputEnvelope;
    connect?: Prisma.AttendanceEntryWhereUniqueInput | Prisma.AttendanceEntryWhereUniqueInput[];
};
export type AttendanceEntryUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceEntryCreateWithoutEmployeeInput, Prisma.AttendanceEntryUncheckedCreateWithoutEmployeeInput> | Prisma.AttendanceEntryCreateWithoutEmployeeInput[] | Prisma.AttendanceEntryUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.AttendanceEntryCreateOrConnectWithoutEmployeeInput | Prisma.AttendanceEntryCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.AttendanceEntryUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.AttendanceEntryUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.AttendanceEntryCreateManyEmployeeInputEnvelope;
    set?: Prisma.AttendanceEntryWhereUniqueInput | Prisma.AttendanceEntryWhereUniqueInput[];
    disconnect?: Prisma.AttendanceEntryWhereUniqueInput | Prisma.AttendanceEntryWhereUniqueInput[];
    delete?: Prisma.AttendanceEntryWhereUniqueInput | Prisma.AttendanceEntryWhereUniqueInput[];
    connect?: Prisma.AttendanceEntryWhereUniqueInput | Prisma.AttendanceEntryWhereUniqueInput[];
    update?: Prisma.AttendanceEntryUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.AttendanceEntryUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.AttendanceEntryUpdateManyWithWhereWithoutEmployeeInput | Prisma.AttendanceEntryUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.AttendanceEntryScalarWhereInput | Prisma.AttendanceEntryScalarWhereInput[];
};
export type AttendanceEntryUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceEntryCreateWithoutEmployeeInput, Prisma.AttendanceEntryUncheckedCreateWithoutEmployeeInput> | Prisma.AttendanceEntryCreateWithoutEmployeeInput[] | Prisma.AttendanceEntryUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.AttendanceEntryCreateOrConnectWithoutEmployeeInput | Prisma.AttendanceEntryCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.AttendanceEntryUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.AttendanceEntryUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.AttendanceEntryCreateManyEmployeeInputEnvelope;
    set?: Prisma.AttendanceEntryWhereUniqueInput | Prisma.AttendanceEntryWhereUniqueInput[];
    disconnect?: Prisma.AttendanceEntryWhereUniqueInput | Prisma.AttendanceEntryWhereUniqueInput[];
    delete?: Prisma.AttendanceEntryWhereUniqueInput | Prisma.AttendanceEntryWhereUniqueInput[];
    connect?: Prisma.AttendanceEntryWhereUniqueInput | Prisma.AttendanceEntryWhereUniqueInput[];
    update?: Prisma.AttendanceEntryUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.AttendanceEntryUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.AttendanceEntryUpdateManyWithWhereWithoutEmployeeInput | Prisma.AttendanceEntryUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.AttendanceEntryScalarWhereInput | Prisma.AttendanceEntryScalarWhereInput[];
};
export type EnumAttendanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.AttendanceStatus;
};
export type AttendanceEntryCreateNestedOneWithoutBreaksInput = {
    create?: Prisma.XOR<Prisma.AttendanceEntryCreateWithoutBreaksInput, Prisma.AttendanceEntryUncheckedCreateWithoutBreaksInput>;
    connectOrCreate?: Prisma.AttendanceEntryCreateOrConnectWithoutBreaksInput;
    connect?: Prisma.AttendanceEntryWhereUniqueInput;
};
export type AttendanceEntryUpdateOneRequiredWithoutBreaksNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceEntryCreateWithoutBreaksInput, Prisma.AttendanceEntryUncheckedCreateWithoutBreaksInput>;
    connectOrCreate?: Prisma.AttendanceEntryCreateOrConnectWithoutBreaksInput;
    upsert?: Prisma.AttendanceEntryUpsertWithoutBreaksInput;
    connect?: Prisma.AttendanceEntryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AttendanceEntryUpdateToOneWithWhereWithoutBreaksInput, Prisma.AttendanceEntryUpdateWithoutBreaksInput>, Prisma.AttendanceEntryUncheckedUpdateWithoutBreaksInput>;
};
export type AttendanceEntryCreateWithoutOrganizationInput = {
    id?: string;
    date: Date | string;
    clockIn?: Date | string | null;
    clockOut?: Date | string | null;
    totalMinutes?: number | null;
    overtimeMinutes?: number;
    isManual?: boolean;
    manualReason?: string | null;
    status?: $Enums.AttendanceStatus;
    locationLat?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    locationLng?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutAttendanceEntriesInput;
    breaks?: Prisma.BreakEntryCreateNestedManyWithoutAttendanceEntryInput;
};
export type AttendanceEntryUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    employeeId: string;
    date: Date | string;
    clockIn?: Date | string | null;
    clockOut?: Date | string | null;
    totalMinutes?: number | null;
    overtimeMinutes?: number;
    isManual?: boolean;
    manualReason?: string | null;
    status?: $Enums.AttendanceStatus;
    locationLat?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    locationLng?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    breaks?: Prisma.BreakEntryUncheckedCreateNestedManyWithoutAttendanceEntryInput;
};
export type AttendanceEntryCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.AttendanceEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceEntryCreateWithoutOrganizationInput, Prisma.AttendanceEntryUncheckedCreateWithoutOrganizationInput>;
};
export type AttendanceEntryCreateManyOrganizationInputEnvelope = {
    data: Prisma.AttendanceEntryCreateManyOrganizationInput | Prisma.AttendanceEntryCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type AttendanceEntryUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.AttendanceEntryWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttendanceEntryUpdateWithoutOrganizationInput, Prisma.AttendanceEntryUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.AttendanceEntryCreateWithoutOrganizationInput, Prisma.AttendanceEntryUncheckedCreateWithoutOrganizationInput>;
};
export type AttendanceEntryUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.AttendanceEntryWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttendanceEntryUpdateWithoutOrganizationInput, Prisma.AttendanceEntryUncheckedUpdateWithoutOrganizationInput>;
};
export type AttendanceEntryUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.AttendanceEntryScalarWhereInput;
    data: Prisma.XOR<Prisma.AttendanceEntryUpdateManyMutationInput, Prisma.AttendanceEntryUncheckedUpdateManyWithoutOrganizationInput>;
};
export type AttendanceEntryScalarWhereInput = {
    AND?: Prisma.AttendanceEntryScalarWhereInput | Prisma.AttendanceEntryScalarWhereInput[];
    OR?: Prisma.AttendanceEntryScalarWhereInput[];
    NOT?: Prisma.AttendanceEntryScalarWhereInput | Prisma.AttendanceEntryScalarWhereInput[];
    id?: Prisma.UuidFilter<"AttendanceEntry"> | string;
    organizationId?: Prisma.UuidFilter<"AttendanceEntry"> | string;
    employeeId?: Prisma.UuidFilter<"AttendanceEntry"> | string;
    date?: Prisma.DateTimeFilter<"AttendanceEntry"> | Date | string;
    clockIn?: Prisma.DateTimeNullableFilter<"AttendanceEntry"> | Date | string | null;
    clockOut?: Prisma.DateTimeNullableFilter<"AttendanceEntry"> | Date | string | null;
    totalMinutes?: Prisma.IntNullableFilter<"AttendanceEntry"> | number | null;
    overtimeMinutes?: Prisma.IntFilter<"AttendanceEntry"> | number;
    isManual?: Prisma.BoolFilter<"AttendanceEntry"> | boolean;
    manualReason?: Prisma.StringNullableFilter<"AttendanceEntry"> | string | null;
    status?: Prisma.EnumAttendanceStatusFilter<"AttendanceEntry"> | $Enums.AttendanceStatus;
    locationLat?: Prisma.DecimalNullableFilter<"AttendanceEntry"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    locationLng?: Prisma.DecimalNullableFilter<"AttendanceEntry"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFilter<"AttendanceEntry"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AttendanceEntry"> | Date | string;
};
export type AttendanceEntryCreateWithoutEmployeeInput = {
    id?: string;
    date: Date | string;
    clockIn?: Date | string | null;
    clockOut?: Date | string | null;
    totalMinutes?: number | null;
    overtimeMinutes?: number;
    isManual?: boolean;
    manualReason?: string | null;
    status?: $Enums.AttendanceStatus;
    locationLat?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    locationLng?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutAttendanceEntriesInput;
    breaks?: Prisma.BreakEntryCreateNestedManyWithoutAttendanceEntryInput;
};
export type AttendanceEntryUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    organizationId: string;
    date: Date | string;
    clockIn?: Date | string | null;
    clockOut?: Date | string | null;
    totalMinutes?: number | null;
    overtimeMinutes?: number;
    isManual?: boolean;
    manualReason?: string | null;
    status?: $Enums.AttendanceStatus;
    locationLat?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    locationLng?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    breaks?: Prisma.BreakEntryUncheckedCreateNestedManyWithoutAttendanceEntryInput;
};
export type AttendanceEntryCreateOrConnectWithoutEmployeeInput = {
    where: Prisma.AttendanceEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceEntryCreateWithoutEmployeeInput, Prisma.AttendanceEntryUncheckedCreateWithoutEmployeeInput>;
};
export type AttendanceEntryCreateManyEmployeeInputEnvelope = {
    data: Prisma.AttendanceEntryCreateManyEmployeeInput | Prisma.AttendanceEntryCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
};
export type AttendanceEntryUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.AttendanceEntryWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttendanceEntryUpdateWithoutEmployeeInput, Prisma.AttendanceEntryUncheckedUpdateWithoutEmployeeInput>;
    create: Prisma.XOR<Prisma.AttendanceEntryCreateWithoutEmployeeInput, Prisma.AttendanceEntryUncheckedCreateWithoutEmployeeInput>;
};
export type AttendanceEntryUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.AttendanceEntryWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttendanceEntryUpdateWithoutEmployeeInput, Prisma.AttendanceEntryUncheckedUpdateWithoutEmployeeInput>;
};
export type AttendanceEntryUpdateManyWithWhereWithoutEmployeeInput = {
    where: Prisma.AttendanceEntryScalarWhereInput;
    data: Prisma.XOR<Prisma.AttendanceEntryUpdateManyMutationInput, Prisma.AttendanceEntryUncheckedUpdateManyWithoutEmployeeInput>;
};
export type AttendanceEntryCreateWithoutBreaksInput = {
    id?: string;
    date: Date | string;
    clockIn?: Date | string | null;
    clockOut?: Date | string | null;
    totalMinutes?: number | null;
    overtimeMinutes?: number;
    isManual?: boolean;
    manualReason?: string | null;
    status?: $Enums.AttendanceStatus;
    locationLat?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    locationLng?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutAttendanceEntriesInput;
    employee: Prisma.EmployeeCreateNestedOneWithoutAttendanceEntriesInput;
};
export type AttendanceEntryUncheckedCreateWithoutBreaksInput = {
    id?: string;
    organizationId: string;
    employeeId: string;
    date: Date | string;
    clockIn?: Date | string | null;
    clockOut?: Date | string | null;
    totalMinutes?: number | null;
    overtimeMinutes?: number;
    isManual?: boolean;
    manualReason?: string | null;
    status?: $Enums.AttendanceStatus;
    locationLat?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    locationLng?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AttendanceEntryCreateOrConnectWithoutBreaksInput = {
    where: Prisma.AttendanceEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceEntryCreateWithoutBreaksInput, Prisma.AttendanceEntryUncheckedCreateWithoutBreaksInput>;
};
export type AttendanceEntryUpsertWithoutBreaksInput = {
    update: Prisma.XOR<Prisma.AttendanceEntryUpdateWithoutBreaksInput, Prisma.AttendanceEntryUncheckedUpdateWithoutBreaksInput>;
    create: Prisma.XOR<Prisma.AttendanceEntryCreateWithoutBreaksInput, Prisma.AttendanceEntryUncheckedCreateWithoutBreaksInput>;
    where?: Prisma.AttendanceEntryWhereInput;
};
export type AttendanceEntryUpdateToOneWithWhereWithoutBreaksInput = {
    where?: Prisma.AttendanceEntryWhereInput;
    data: Prisma.XOR<Prisma.AttendanceEntryUpdateWithoutBreaksInput, Prisma.AttendanceEntryUncheckedUpdateWithoutBreaksInput>;
};
export type AttendanceEntryUpdateWithoutBreaksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockIn?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    clockOut?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    totalMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    overtimeMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    isManual?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    manualReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    locationLat?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    locationLng?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutAttendanceEntriesNestedInput;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutAttendanceEntriesNestedInput;
};
export type AttendanceEntryUncheckedUpdateWithoutBreaksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockIn?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    clockOut?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    totalMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    overtimeMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    isManual?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    manualReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    locationLat?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    locationLng?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceEntryCreateManyOrganizationInput = {
    id?: string;
    employeeId: string;
    date: Date | string;
    clockIn?: Date | string | null;
    clockOut?: Date | string | null;
    totalMinutes?: number | null;
    overtimeMinutes?: number;
    isManual?: boolean;
    manualReason?: string | null;
    status?: $Enums.AttendanceStatus;
    locationLat?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    locationLng?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AttendanceEntryUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockIn?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    clockOut?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    totalMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    overtimeMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    isManual?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    manualReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    locationLat?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    locationLng?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutAttendanceEntriesNestedInput;
    breaks?: Prisma.BreakEntryUpdateManyWithoutAttendanceEntryNestedInput;
};
export type AttendanceEntryUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockIn?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    clockOut?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    totalMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    overtimeMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    isManual?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    manualReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    locationLat?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    locationLng?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    breaks?: Prisma.BreakEntryUncheckedUpdateManyWithoutAttendanceEntryNestedInput;
};
export type AttendanceEntryUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockIn?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    clockOut?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    totalMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    overtimeMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    isManual?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    manualReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    locationLat?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    locationLng?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceEntryCreateManyEmployeeInput = {
    id?: string;
    organizationId: string;
    date: Date | string;
    clockIn?: Date | string | null;
    clockOut?: Date | string | null;
    totalMinutes?: number | null;
    overtimeMinutes?: number;
    isManual?: boolean;
    manualReason?: string | null;
    status?: $Enums.AttendanceStatus;
    locationLat?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    locationLng?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AttendanceEntryUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockIn?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    clockOut?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    totalMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    overtimeMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    isManual?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    manualReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    locationLat?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    locationLng?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutAttendanceEntriesNestedInput;
    breaks?: Prisma.BreakEntryUpdateManyWithoutAttendanceEntryNestedInput;
};
export type AttendanceEntryUncheckedUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockIn?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    clockOut?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    totalMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    overtimeMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    isManual?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    manualReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    locationLat?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    locationLng?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    breaks?: Prisma.BreakEntryUncheckedUpdateManyWithoutAttendanceEntryNestedInput;
};
export type AttendanceEntryUncheckedUpdateManyWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clockIn?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    clockOut?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    totalMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    overtimeMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    isManual?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    manualReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus;
    locationLat?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    locationLng?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceEntryCountOutputType = {
    breaks: number;
};
export type AttendanceEntryCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    breaks?: boolean | AttendanceEntryCountOutputTypeCountBreaksArgs;
};
export type AttendanceEntryCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceEntryCountOutputTypeSelect<ExtArgs> | null;
};
export type AttendanceEntryCountOutputTypeCountBreaksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BreakEntryWhereInput;
};
export type AttendanceEntrySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    employeeId?: boolean;
    date?: boolean;
    clockIn?: boolean;
    clockOut?: boolean;
    totalMinutes?: boolean;
    overtimeMinutes?: boolean;
    isManual?: boolean;
    manualReason?: boolean;
    status?: boolean;
    locationLat?: boolean;
    locationLng?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    breaks?: boolean | Prisma.AttendanceEntry$breaksArgs<ExtArgs>;
    _count?: boolean | Prisma.AttendanceEntryCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attendanceEntry"]>;
export type AttendanceEntrySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    employeeId?: boolean;
    date?: boolean;
    clockIn?: boolean;
    clockOut?: boolean;
    totalMinutes?: boolean;
    overtimeMinutes?: boolean;
    isManual?: boolean;
    manualReason?: boolean;
    status?: boolean;
    locationLat?: boolean;
    locationLng?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attendanceEntry"]>;
export type AttendanceEntrySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    employeeId?: boolean;
    date?: boolean;
    clockIn?: boolean;
    clockOut?: boolean;
    totalMinutes?: boolean;
    overtimeMinutes?: boolean;
    isManual?: boolean;
    manualReason?: boolean;
    status?: boolean;
    locationLat?: boolean;
    locationLng?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attendanceEntry"]>;
export type AttendanceEntrySelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    employeeId?: boolean;
    date?: boolean;
    clockIn?: boolean;
    clockOut?: boolean;
    totalMinutes?: boolean;
    overtimeMinutes?: boolean;
    isManual?: boolean;
    manualReason?: boolean;
    status?: boolean;
    locationLat?: boolean;
    locationLng?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AttendanceEntryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "employeeId" | "date" | "clockIn" | "clockOut" | "totalMinutes" | "overtimeMinutes" | "isManual" | "manualReason" | "status" | "locationLat" | "locationLng" | "createdAt" | "updatedAt", ExtArgs["result"]["attendanceEntry"]>;
export type AttendanceEntryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    breaks?: boolean | Prisma.AttendanceEntry$breaksArgs<ExtArgs>;
    _count?: boolean | Prisma.AttendanceEntryCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AttendanceEntryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type AttendanceEntryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type $AttendanceEntryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AttendanceEntry";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        employee: Prisma.$EmployeePayload<ExtArgs>;
        breaks: Prisma.$BreakEntryPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        employeeId: string;
        date: Date;
        clockIn: Date | null;
        clockOut: Date | null;
        totalMinutes: number | null;
        overtimeMinutes: number;
        isManual: boolean;
        manualReason: string | null;
        status: $Enums.AttendanceStatus;
        locationLat: runtime.Decimal | null;
        locationLng: runtime.Decimal | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["attendanceEntry"]>;
    composites: {};
};
export type AttendanceEntryGetPayload<S extends boolean | null | undefined | AttendanceEntryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AttendanceEntryPayload, S>;
export type AttendanceEntryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AttendanceEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AttendanceEntryCountAggregateInputType | true;
};
export interface AttendanceEntryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AttendanceEntry'];
        meta: {
            name: 'AttendanceEntry';
        };
    };
    findUnique<T extends AttendanceEntryFindUniqueArgs>(args: Prisma.SelectSubset<T, AttendanceEntryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AttendanceEntryClient<runtime.Types.Result.GetResult<Prisma.$AttendanceEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AttendanceEntryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AttendanceEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttendanceEntryClient<runtime.Types.Result.GetResult<Prisma.$AttendanceEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AttendanceEntryFindFirstArgs>(args?: Prisma.SelectSubset<T, AttendanceEntryFindFirstArgs<ExtArgs>>): Prisma.Prisma__AttendanceEntryClient<runtime.Types.Result.GetResult<Prisma.$AttendanceEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AttendanceEntryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AttendanceEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttendanceEntryClient<runtime.Types.Result.GetResult<Prisma.$AttendanceEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AttendanceEntryFindManyArgs>(args?: Prisma.SelectSubset<T, AttendanceEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AttendanceEntryCreateArgs>(args: Prisma.SelectSubset<T, AttendanceEntryCreateArgs<ExtArgs>>): Prisma.Prisma__AttendanceEntryClient<runtime.Types.Result.GetResult<Prisma.$AttendanceEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AttendanceEntryCreateManyArgs>(args?: Prisma.SelectSubset<T, AttendanceEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AttendanceEntryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AttendanceEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AttendanceEntryDeleteArgs>(args: Prisma.SelectSubset<T, AttendanceEntryDeleteArgs<ExtArgs>>): Prisma.Prisma__AttendanceEntryClient<runtime.Types.Result.GetResult<Prisma.$AttendanceEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AttendanceEntryUpdateArgs>(args: Prisma.SelectSubset<T, AttendanceEntryUpdateArgs<ExtArgs>>): Prisma.Prisma__AttendanceEntryClient<runtime.Types.Result.GetResult<Prisma.$AttendanceEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AttendanceEntryDeleteManyArgs>(args?: Prisma.SelectSubset<T, AttendanceEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AttendanceEntryUpdateManyArgs>(args: Prisma.SelectSubset<T, AttendanceEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AttendanceEntryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AttendanceEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AttendanceEntryUpsertArgs>(args: Prisma.SelectSubset<T, AttendanceEntryUpsertArgs<ExtArgs>>): Prisma.Prisma__AttendanceEntryClient<runtime.Types.Result.GetResult<Prisma.$AttendanceEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AttendanceEntryCountArgs>(args?: Prisma.Subset<T, AttendanceEntryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AttendanceEntryCountAggregateOutputType> : number>;
    aggregate<T extends AttendanceEntryAggregateArgs>(args: Prisma.Subset<T, AttendanceEntryAggregateArgs>): Prisma.PrismaPromise<GetAttendanceEntryAggregateType<T>>;
    groupBy<T extends AttendanceEntryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AttendanceEntryGroupByArgs['orderBy'];
    } : {
        orderBy?: AttendanceEntryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AttendanceEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AttendanceEntryFieldRefs;
}
export interface Prisma__AttendanceEntryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    employee<T extends Prisma.EmployeeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmployeeDefaultArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    breaks<T extends Prisma.AttendanceEntry$breaksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AttendanceEntry$breaksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BreakEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AttendanceEntryFieldRefs {
    readonly id: Prisma.FieldRef<"AttendanceEntry", 'String'>;
    readonly organizationId: Prisma.FieldRef<"AttendanceEntry", 'String'>;
    readonly employeeId: Prisma.FieldRef<"AttendanceEntry", 'String'>;
    readonly date: Prisma.FieldRef<"AttendanceEntry", 'DateTime'>;
    readonly clockIn: Prisma.FieldRef<"AttendanceEntry", 'DateTime'>;
    readonly clockOut: Prisma.FieldRef<"AttendanceEntry", 'DateTime'>;
    readonly totalMinutes: Prisma.FieldRef<"AttendanceEntry", 'Int'>;
    readonly overtimeMinutes: Prisma.FieldRef<"AttendanceEntry", 'Int'>;
    readonly isManual: Prisma.FieldRef<"AttendanceEntry", 'Boolean'>;
    readonly manualReason: Prisma.FieldRef<"AttendanceEntry", 'String'>;
    readonly status: Prisma.FieldRef<"AttendanceEntry", 'AttendanceStatus'>;
    readonly locationLat: Prisma.FieldRef<"AttendanceEntry", 'Decimal'>;
    readonly locationLng: Prisma.FieldRef<"AttendanceEntry", 'Decimal'>;
    readonly createdAt: Prisma.FieldRef<"AttendanceEntry", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"AttendanceEntry", 'DateTime'>;
}
export type AttendanceEntryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceEntrySelect<ExtArgs> | null;
    omit?: Prisma.AttendanceEntryOmit<ExtArgs> | null;
    include?: Prisma.AttendanceEntryInclude<ExtArgs> | null;
    where: Prisma.AttendanceEntryWhereUniqueInput;
};
export type AttendanceEntryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceEntrySelect<ExtArgs> | null;
    omit?: Prisma.AttendanceEntryOmit<ExtArgs> | null;
    include?: Prisma.AttendanceEntryInclude<ExtArgs> | null;
    where: Prisma.AttendanceEntryWhereUniqueInput;
};
export type AttendanceEntryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceEntrySelect<ExtArgs> | null;
    omit?: Prisma.AttendanceEntryOmit<ExtArgs> | null;
    include?: Prisma.AttendanceEntryInclude<ExtArgs> | null;
    where?: Prisma.AttendanceEntryWhereInput;
    orderBy?: Prisma.AttendanceEntryOrderByWithRelationInput | Prisma.AttendanceEntryOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttendanceEntryScalarFieldEnum | Prisma.AttendanceEntryScalarFieldEnum[];
};
export type AttendanceEntryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceEntrySelect<ExtArgs> | null;
    omit?: Prisma.AttendanceEntryOmit<ExtArgs> | null;
    include?: Prisma.AttendanceEntryInclude<ExtArgs> | null;
    where?: Prisma.AttendanceEntryWhereInput;
    orderBy?: Prisma.AttendanceEntryOrderByWithRelationInput | Prisma.AttendanceEntryOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttendanceEntryScalarFieldEnum | Prisma.AttendanceEntryScalarFieldEnum[];
};
export type AttendanceEntryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceEntrySelect<ExtArgs> | null;
    omit?: Prisma.AttendanceEntryOmit<ExtArgs> | null;
    include?: Prisma.AttendanceEntryInclude<ExtArgs> | null;
    where?: Prisma.AttendanceEntryWhereInput;
    orderBy?: Prisma.AttendanceEntryOrderByWithRelationInput | Prisma.AttendanceEntryOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttendanceEntryScalarFieldEnum | Prisma.AttendanceEntryScalarFieldEnum[];
};
export type AttendanceEntryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceEntrySelect<ExtArgs> | null;
    omit?: Prisma.AttendanceEntryOmit<ExtArgs> | null;
    include?: Prisma.AttendanceEntryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendanceEntryCreateInput, Prisma.AttendanceEntryUncheckedCreateInput>;
};
export type AttendanceEntryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AttendanceEntryCreateManyInput | Prisma.AttendanceEntryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AttendanceEntryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceEntrySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AttendanceEntryOmit<ExtArgs> | null;
    data: Prisma.AttendanceEntryCreateManyInput | Prisma.AttendanceEntryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AttendanceEntryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AttendanceEntryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceEntrySelect<ExtArgs> | null;
    omit?: Prisma.AttendanceEntryOmit<ExtArgs> | null;
    include?: Prisma.AttendanceEntryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendanceEntryUpdateInput, Prisma.AttendanceEntryUncheckedUpdateInput>;
    where: Prisma.AttendanceEntryWhereUniqueInput;
};
export type AttendanceEntryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AttendanceEntryUpdateManyMutationInput, Prisma.AttendanceEntryUncheckedUpdateManyInput>;
    where?: Prisma.AttendanceEntryWhereInput;
    limit?: number;
};
export type AttendanceEntryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceEntrySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AttendanceEntryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendanceEntryUpdateManyMutationInput, Prisma.AttendanceEntryUncheckedUpdateManyInput>;
    where?: Prisma.AttendanceEntryWhereInput;
    limit?: number;
    include?: Prisma.AttendanceEntryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AttendanceEntryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceEntrySelect<ExtArgs> | null;
    omit?: Prisma.AttendanceEntryOmit<ExtArgs> | null;
    include?: Prisma.AttendanceEntryInclude<ExtArgs> | null;
    where: Prisma.AttendanceEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceEntryCreateInput, Prisma.AttendanceEntryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AttendanceEntryUpdateInput, Prisma.AttendanceEntryUncheckedUpdateInput>;
};
export type AttendanceEntryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceEntrySelect<ExtArgs> | null;
    omit?: Prisma.AttendanceEntryOmit<ExtArgs> | null;
    include?: Prisma.AttendanceEntryInclude<ExtArgs> | null;
    where: Prisma.AttendanceEntryWhereUniqueInput;
};
export type AttendanceEntryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceEntryWhereInput;
    limit?: number;
};
export type AttendanceEntry$breaksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AttendanceEntryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceEntrySelect<ExtArgs> | null;
    omit?: Prisma.AttendanceEntryOmit<ExtArgs> | null;
    include?: Prisma.AttendanceEntryInclude<ExtArgs> | null;
};
