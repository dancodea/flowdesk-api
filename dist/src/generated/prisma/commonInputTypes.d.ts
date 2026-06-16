import type * as runtime from "@prisma/client/runtime/client";
import * as $Enums from "./enums.js";
import type * as Prisma from "./internal/prismaNamespace.js";
export type UuidFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedUuidFilter<$PrismaModel> | string;
};
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type IntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type EnumPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.Plan | Prisma.EnumPlanFieldRefInput<$PrismaModel>;
    in?: $Enums.Plan[] | Prisma.ListEnumPlanFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Plan[] | Prisma.ListEnumPlanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPlanFilter<$PrismaModel> | $Enums.Plan;
};
export type EnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | Prisma.EnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SubscriptionStatus[] | Prisma.ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SubscriptionStatus[] | Prisma.ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus;
};
export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type SortOrderInput = {
    sort: Prisma.SortOrder;
    nulls?: Prisma.NullsOrder;
};
export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type EnumPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Plan | Prisma.EnumPlanFieldRefInput<$PrismaModel>;
    in?: $Enums.Plan[] | Prisma.ListEnumPlanFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Plan[] | Prisma.ListEnumPlanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPlanWithAggregatesFilter<$PrismaModel> | $Enums.Plan;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPlanFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPlanFilter<$PrismaModel>;
};
export type EnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | Prisma.EnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SubscriptionStatus[] | Prisma.ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SubscriptionStatus[] | Prisma.ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSubscriptionStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSubscriptionStatusFilter<$PrismaModel>;
};
export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedUuidNullableFilter<$PrismaModel> | string | null;
};
export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | Prisma.EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
};
export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | Prisma.EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRoleFilter<$PrismaModel>;
};
export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type EnumInvitationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | Prisma.EnumInvitationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.InvitationStatus[] | Prisma.ListEnumInvitationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InvitationStatus[] | Prisma.ListEnumInvitationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInvitationStatusFilter<$PrismaModel> | $Enums.InvitationStatus;
};
export type EnumInvitationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | Prisma.EnumInvitationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.InvitationStatus[] | Prisma.ListEnumInvitationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InvitationStatus[] | Prisma.ListEnumInvitationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInvitationStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvitationStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumInvitationStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumInvitationStatusFilter<$PrismaModel>;
};
export type DecimalFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalFilter<$PrismaModel>;
};
export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
};
export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | Prisma.EnumGenderFieldRefInput<$PrismaModel> | null;
    in?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null;
};
export type JsonNullableFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type EnumEmploymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | Prisma.EnumEmploymentTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.EmploymentType[] | Prisma.ListEnumEmploymentTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EmploymentType[] | Prisma.ListEnumEmploymentTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEmploymentTypeFilter<$PrismaModel> | $Enums.EmploymentType;
};
export type EnumEmployeeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeStatus | Prisma.EnumEmployeeStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.EmployeeStatus[] | Prisma.ListEnumEmployeeStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EmployeeStatus[] | Prisma.ListEnumEmployeeStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEmployeeStatusFilter<$PrismaModel> | $Enums.EmployeeStatus;
};
export type EnumSalaryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SalaryType | Prisma.EnumSalaryTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.SalaryType[] | Prisma.ListEnumSalaryTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SalaryType[] | Prisma.ListEnumSalaryTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSalaryTypeFilter<$PrismaModel> | $Enums.SalaryType;
};
export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | Prisma.EnumPaymentMethodFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentMethod[] | Prisma.ListEnumPaymentMethodFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentMethod[] | Prisma.ListEnumPaymentMethodFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod;
};
export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | Prisma.EnumGenderFieldRefInput<$PrismaModel> | null;
    in?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumGenderNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumGenderNullableFilter<$PrismaModel>;
};
export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedJsonNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedJsonNullableFilter<$PrismaModel>;
};
export type EnumEmploymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | Prisma.EnumEmploymentTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.EmploymentType[] | Prisma.ListEnumEmploymentTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EmploymentType[] | Prisma.ListEnumEmploymentTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEmploymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.EmploymentType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEmploymentTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEmploymentTypeFilter<$PrismaModel>;
};
export type EnumEmployeeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeStatus | Prisma.EnumEmployeeStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.EmployeeStatus[] | Prisma.ListEnumEmployeeStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EmployeeStatus[] | Prisma.ListEnumEmployeeStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEmployeeStatusWithAggregatesFilter<$PrismaModel> | $Enums.EmployeeStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEmployeeStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEmployeeStatusFilter<$PrismaModel>;
};
export type EnumSalaryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SalaryType | Prisma.EnumSalaryTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.SalaryType[] | Prisma.ListEnumSalaryTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SalaryType[] | Prisma.ListEnumSalaryTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSalaryTypeWithAggregatesFilter<$PrismaModel> | $Enums.SalaryType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSalaryTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSalaryTypeFilter<$PrismaModel>;
};
export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | Prisma.EnumPaymentMethodFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentMethod[] | Prisma.ListEnumPaymentMethodFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentMethod[] | Prisma.ListEnumPaymentMethodFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPaymentMethodFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPaymentMethodFilter<$PrismaModel>;
};
export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel> | null;
    in?: bigint[] | number[] | Prisma.ListBigIntFieldRefInput<$PrismaModel> | null;
    notIn?: bigint[] | number[] | Prisma.ListBigIntFieldRefInput<$PrismaModel> | null;
    lt?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    lte?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    gt?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    gte?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null;
};
export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel> | null;
    in?: bigint[] | number[] | Prisma.ListBigIntFieldRefInput<$PrismaModel> | null;
    notIn?: bigint[] | number[] | Prisma.ListBigIntFieldRefInput<$PrismaModel> | null;
    lt?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    lte?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    gt?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    gte?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedBigIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedBigIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedBigIntNullableFilter<$PrismaModel>;
};
export type EnumEmploymentTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | Prisma.EnumEmploymentTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.EmploymentType[] | Prisma.ListEnumEmploymentTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.EmploymentType[] | Prisma.ListEnumEmploymentTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumEmploymentTypeNullableFilter<$PrismaModel> | $Enums.EmploymentType | null;
};
export type EnumRemoteTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RemoteType | Prisma.EnumRemoteTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.RemoteType[] | Prisma.ListEnumRemoteTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.RemoteType[] | Prisma.ListEnumRemoteTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumRemoteTypeNullableFilter<$PrismaModel> | $Enums.RemoteType | null;
};
export type EnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | Prisma.EnumJobStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.JobStatus[] | Prisma.ListEnumJobStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.JobStatus[] | Prisma.ListEnumJobStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus;
};
export type EnumJobVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.JobVisibility | Prisma.EnumJobVisibilityFieldRefInput<$PrismaModel>;
    in?: $Enums.JobVisibility[] | Prisma.ListEnumJobVisibilityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.JobVisibility[] | Prisma.ListEnumJobVisibilityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumJobVisibilityFilter<$PrismaModel> | $Enums.JobVisibility;
};
export type EnumEmploymentTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | Prisma.EnumEmploymentTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.EmploymentType[] | Prisma.ListEnumEmploymentTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.EmploymentType[] | Prisma.ListEnumEmploymentTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumEmploymentTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.EmploymentType | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEmploymentTypeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEmploymentTypeNullableFilter<$PrismaModel>;
};
export type EnumRemoteTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RemoteType | Prisma.EnumRemoteTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.RemoteType[] | Prisma.ListEnumRemoteTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.RemoteType[] | Prisma.ListEnumRemoteTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumRemoteTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.RemoteType | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRemoteTypeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRemoteTypeNullableFilter<$PrismaModel>;
};
export type EnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | Prisma.EnumJobStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.JobStatus[] | Prisma.ListEnumJobStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.JobStatus[] | Prisma.ListEnumJobStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumJobStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumJobStatusFilter<$PrismaModel>;
};
export type EnumJobVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobVisibility | Prisma.EnumJobVisibilityFieldRefInput<$PrismaModel>;
    in?: $Enums.JobVisibility[] | Prisma.ListEnumJobVisibilityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.JobVisibility[] | Prisma.ListEnumJobVisibilityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumJobVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.JobVisibility;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumJobVisibilityFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumJobVisibilityFilter<$PrismaModel>;
};
export type EnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | Prisma.EnumApplicationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ApplicationStatus[] | Prisma.ListEnumApplicationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ApplicationStatus[] | Prisma.ListEnumApplicationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus;
};
export type EnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | Prisma.EnumApplicationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ApplicationStatus[] | Prisma.ListEnumApplicationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ApplicationStatus[] | Prisma.ListEnumApplicationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumApplicationStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumApplicationStatusFilter<$PrismaModel>;
};
export type EnumInterviewTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewType | Prisma.EnumInterviewTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.InterviewType[] | Prisma.ListEnumInterviewTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InterviewType[] | Prisma.ListEnumInterviewTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInterviewTypeFilter<$PrismaModel> | $Enums.InterviewType;
};
export type EnumInterviewStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewStatus | Prisma.EnumInterviewStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.InterviewStatus[] | Prisma.ListEnumInterviewStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InterviewStatus[] | Prisma.ListEnumInterviewStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInterviewStatusFilter<$PrismaModel> | $Enums.InterviewStatus;
};
export type EnumInterviewTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewType | Prisma.EnumInterviewTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.InterviewType[] | Prisma.ListEnumInterviewTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InterviewType[] | Prisma.ListEnumInterviewTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInterviewTypeWithAggregatesFilter<$PrismaModel> | $Enums.InterviewType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumInterviewTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumInterviewTypeFilter<$PrismaModel>;
};
export type EnumInterviewStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewStatus | Prisma.EnumInterviewStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.InterviewStatus[] | Prisma.ListEnumInterviewStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InterviewStatus[] | Prisma.ListEnumInterviewStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInterviewStatusWithAggregatesFilter<$PrismaModel> | $Enums.InterviewStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumInterviewStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumInterviewStatusFilter<$PrismaModel>;
};
export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type EnumInterviewRecommendationNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewRecommendation | Prisma.EnumInterviewRecommendationFieldRefInput<$PrismaModel> | null;
    in?: $Enums.InterviewRecommendation[] | Prisma.ListEnumInterviewRecommendationFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.InterviewRecommendation[] | Prisma.ListEnumInterviewRecommendationFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumInterviewRecommendationNullableFilter<$PrismaModel> | $Enums.InterviewRecommendation | null;
};
export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type EnumInterviewRecommendationNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewRecommendation | Prisma.EnumInterviewRecommendationFieldRefInput<$PrismaModel> | null;
    in?: $Enums.InterviewRecommendation[] | Prisma.ListEnumInterviewRecommendationFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.InterviewRecommendation[] | Prisma.ListEnumInterviewRecommendationFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumInterviewRecommendationNullableWithAggregatesFilter<$PrismaModel> | $Enums.InterviewRecommendation | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumInterviewRecommendationNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumInterviewRecommendationNullableFilter<$PrismaModel>;
};
export type EnumOfferStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OfferStatus | Prisma.EnumOfferStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OfferStatus[] | Prisma.ListEnumOfferStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OfferStatus[] | Prisma.ListEnumOfferStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOfferStatusFilter<$PrismaModel> | $Enums.OfferStatus;
};
export type EnumOfferStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OfferStatus | Prisma.EnumOfferStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OfferStatus[] | Prisma.ListEnumOfferStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OfferStatus[] | Prisma.ListEnumOfferStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOfferStatusWithAggregatesFilter<$PrismaModel> | $Enums.OfferStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumOfferStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumOfferStatusFilter<$PrismaModel>;
};
export type EnumOnboardingAssigneeFilter<$PrismaModel = never> = {
    equals?: $Enums.OnboardingAssignee | Prisma.EnumOnboardingAssigneeFieldRefInput<$PrismaModel>;
    in?: $Enums.OnboardingAssignee[] | Prisma.ListEnumOnboardingAssigneeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OnboardingAssignee[] | Prisma.ListEnumOnboardingAssigneeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOnboardingAssigneeFilter<$PrismaModel> | $Enums.OnboardingAssignee;
};
export type EnumOnboardingAssigneeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OnboardingAssignee | Prisma.EnumOnboardingAssigneeFieldRefInput<$PrismaModel>;
    in?: $Enums.OnboardingAssignee[] | Prisma.ListEnumOnboardingAssigneeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OnboardingAssignee[] | Prisma.ListEnumOnboardingAssigneeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOnboardingAssigneeWithAggregatesFilter<$PrismaModel> | $Enums.OnboardingAssignee;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumOnboardingAssigneeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumOnboardingAssigneeFilter<$PrismaModel>;
};
export type EnumChecklistStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ChecklistStatus | Prisma.EnumChecklistStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ChecklistStatus[] | Prisma.ListEnumChecklistStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ChecklistStatus[] | Prisma.ListEnumChecklistStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumChecklistStatusFilter<$PrismaModel> | $Enums.ChecklistStatus;
};
export type EnumChecklistStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChecklistStatus | Prisma.EnumChecklistStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ChecklistStatus[] | Prisma.ListEnumChecklistStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ChecklistStatus[] | Prisma.ListEnumChecklistStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumChecklistStatusWithAggregatesFilter<$PrismaModel> | $Enums.ChecklistStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumChecklistStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumChecklistStatusFilter<$PrismaModel>;
};
export type EnumOnboardingTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OnboardingTaskStatus | Prisma.EnumOnboardingTaskStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OnboardingTaskStatus[] | Prisma.ListEnumOnboardingTaskStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OnboardingTaskStatus[] | Prisma.ListEnumOnboardingTaskStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOnboardingTaskStatusFilter<$PrismaModel> | $Enums.OnboardingTaskStatus;
};
export type EnumOnboardingTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OnboardingTaskStatus | Prisma.EnumOnboardingTaskStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OnboardingTaskStatus[] | Prisma.ListEnumOnboardingTaskStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OnboardingTaskStatus[] | Prisma.ListEnumOnboardingTaskStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOnboardingTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.OnboardingTaskStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumOnboardingTaskStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumOnboardingTaskStatusFilter<$PrismaModel>;
};
export type EnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | Prisma.EnumAttendanceStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AttendanceStatus[] | Prisma.ListEnumAttendanceStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AttendanceStatus[] | Prisma.ListEnumAttendanceStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus;
};
export type EnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | Prisma.EnumAttendanceStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AttendanceStatus[] | Prisma.ListEnumAttendanceStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AttendanceStatus[] | Prisma.ListEnumAttendanceStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAttendanceStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAttendanceStatusFilter<$PrismaModel>;
};
export type EnumTimesheetStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TimesheetStatus | Prisma.EnumTimesheetStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TimesheetStatus[] | Prisma.ListEnumTimesheetStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TimesheetStatus[] | Prisma.ListEnumTimesheetStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTimesheetStatusFilter<$PrismaModel> | $Enums.TimesheetStatus;
};
export type EnumTimesheetStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TimesheetStatus | Prisma.EnumTimesheetStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TimesheetStatus[] | Prisma.ListEnumTimesheetStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TimesheetStatus[] | Prisma.ListEnumTimesheetStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTimesheetStatusWithAggregatesFilter<$PrismaModel> | $Enums.TimesheetStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTimesheetStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTimesheetStatusFilter<$PrismaModel>;
};
export type EnumAccrualTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccrualType | Prisma.EnumAccrualTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.AccrualType[] | Prisma.ListEnumAccrualTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AccrualType[] | Prisma.ListEnumAccrualTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAccrualTypeFilter<$PrismaModel> | $Enums.AccrualType;
};
export type EnumAccrualTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccrualType | Prisma.EnumAccrualTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.AccrualType[] | Prisma.ListEnumAccrualTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AccrualType[] | Prisma.ListEnumAccrualTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAccrualTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccrualType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAccrualTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAccrualTypeFilter<$PrismaModel>;
};
export type EnumHalfDayPeriodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.HalfDayPeriod | Prisma.EnumHalfDayPeriodFieldRefInput<$PrismaModel> | null;
    in?: $Enums.HalfDayPeriod[] | Prisma.ListEnumHalfDayPeriodFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.HalfDayPeriod[] | Prisma.ListEnumHalfDayPeriodFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumHalfDayPeriodNullableFilter<$PrismaModel> | $Enums.HalfDayPeriod | null;
};
export type EnumLeaveStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveStatus | Prisma.EnumLeaveStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.LeaveStatus[] | Prisma.ListEnumLeaveStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LeaveStatus[] | Prisma.ListEnumLeaveStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLeaveStatusFilter<$PrismaModel> | $Enums.LeaveStatus;
};
export type EnumHalfDayPeriodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HalfDayPeriod | Prisma.EnumHalfDayPeriodFieldRefInput<$PrismaModel> | null;
    in?: $Enums.HalfDayPeriod[] | Prisma.ListEnumHalfDayPeriodFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.HalfDayPeriod[] | Prisma.ListEnumHalfDayPeriodFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumHalfDayPeriodNullableWithAggregatesFilter<$PrismaModel> | $Enums.HalfDayPeriod | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumHalfDayPeriodNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumHalfDayPeriodNullableFilter<$PrismaModel>;
};
export type EnumLeaveStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveStatus | Prisma.EnumLeaveStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.LeaveStatus[] | Prisma.ListEnumLeaveStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LeaveStatus[] | Prisma.ListEnumLeaveStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLeaveStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeaveStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumLeaveStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumLeaveStatusFilter<$PrismaModel>;
};
export type EnumPayFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.PayFrequency | Prisma.EnumPayFrequencyFieldRefInput<$PrismaModel>;
    in?: $Enums.PayFrequency[] | Prisma.ListEnumPayFrequencyFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PayFrequency[] | Prisma.ListEnumPayFrequencyFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPayFrequencyFilter<$PrismaModel> | $Enums.PayFrequency;
};
export type EnumPayFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayFrequency | Prisma.EnumPayFrequencyFieldRefInput<$PrismaModel>;
    in?: $Enums.PayFrequency[] | Prisma.ListEnumPayFrequencyFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PayFrequency[] | Prisma.ListEnumPayFrequencyFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPayFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.PayFrequency;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPayFrequencyFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPayFrequencyFilter<$PrismaModel>;
};
export type EnumPayRunStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PayRunStatus | Prisma.EnumPayRunStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PayRunStatus[] | Prisma.ListEnumPayRunStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PayRunStatus[] | Prisma.ListEnumPayRunStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPayRunStatusFilter<$PrismaModel> | $Enums.PayRunStatus;
};
export type EnumPayRunStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayRunStatus | Prisma.EnumPayRunStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PayRunStatus[] | Prisma.ListEnumPayRunStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PayRunStatus[] | Prisma.ListEnumPayRunStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPayRunStatusWithAggregatesFilter<$PrismaModel> | $Enums.PayRunStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPayRunStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPayRunStatusFilter<$PrismaModel>;
};
export type EnumAdjustmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AdjustmentType | Prisma.EnumAdjustmentTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.AdjustmentType[] | Prisma.ListEnumAdjustmentTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AdjustmentType[] | Prisma.ListEnumAdjustmentTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAdjustmentTypeFilter<$PrismaModel> | $Enums.AdjustmentType;
};
export type EnumAdjustmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdjustmentType | Prisma.EnumAdjustmentTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.AdjustmentType[] | Prisma.ListEnumAdjustmentTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AdjustmentType[] | Prisma.ListEnumAdjustmentTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAdjustmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.AdjustmentType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAdjustmentTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAdjustmentTypeFilter<$PrismaModel>;
};
export type JsonFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>, Required<JsonFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>;
export type JsonFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type JsonWithAggregatesFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>, Required<JsonWithAggregatesFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>;
export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedJsonFilter<$PrismaModel>;
    _max?: Prisma.NestedJsonFilter<$PrismaModel>;
};
export type EnumDeductionValueTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DeductionValueType | Prisma.EnumDeductionValueTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.DeductionValueType[] | Prisma.ListEnumDeductionValueTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DeductionValueType[] | Prisma.ListEnumDeductionValueTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDeductionValueTypeFilter<$PrismaModel> | $Enums.DeductionValueType;
};
export type EnumDeductionValueTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeductionValueType | Prisma.EnumDeductionValueTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.DeductionValueType[] | Prisma.ListEnumDeductionValueTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DeductionValueType[] | Prisma.ListEnumDeductionValueTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDeductionValueTypeWithAggregatesFilter<$PrismaModel> | $Enums.DeductionValueType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDeductionValueTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDeductionValueTypeFilter<$PrismaModel>;
};
export type EnumPerformanceCycleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PerformanceCycleType | Prisma.EnumPerformanceCycleTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PerformanceCycleType[] | Prisma.ListEnumPerformanceCycleTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PerformanceCycleType[] | Prisma.ListEnumPerformanceCycleTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPerformanceCycleTypeFilter<$PrismaModel> | $Enums.PerformanceCycleType;
};
export type EnumReviewTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewType | Prisma.EnumReviewTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ReviewType[] | Prisma.ListEnumReviewTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ReviewType[] | Prisma.ListEnumReviewTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumReviewTypeFilter<$PrismaModel> | $Enums.ReviewType;
};
export type EnumReviewCycleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewCycleStatus | Prisma.EnumReviewCycleStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ReviewCycleStatus[] | Prisma.ListEnumReviewCycleStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ReviewCycleStatus[] | Prisma.ListEnumReviewCycleStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumReviewCycleStatusFilter<$PrismaModel> | $Enums.ReviewCycleStatus;
};
export type EnumPerformanceCycleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PerformanceCycleType | Prisma.EnumPerformanceCycleTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PerformanceCycleType[] | Prisma.ListEnumPerformanceCycleTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PerformanceCycleType[] | Prisma.ListEnumPerformanceCycleTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPerformanceCycleTypeWithAggregatesFilter<$PrismaModel> | $Enums.PerformanceCycleType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPerformanceCycleTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPerformanceCycleTypeFilter<$PrismaModel>;
};
export type EnumReviewTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewType | Prisma.EnumReviewTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ReviewType[] | Prisma.ListEnumReviewTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ReviewType[] | Prisma.ListEnumReviewTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumReviewTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReviewType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumReviewTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumReviewTypeFilter<$PrismaModel>;
};
export type EnumReviewCycleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewCycleStatus | Prisma.EnumReviewCycleStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ReviewCycleStatus[] | Prisma.ListEnumReviewCycleStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ReviewCycleStatus[] | Prisma.ListEnumReviewCycleStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumReviewCycleStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReviewCycleStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumReviewCycleStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumReviewCycleStatusFilter<$PrismaModel>;
};
export type EnumPerformanceReviewStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PerformanceReviewStatus | Prisma.EnumPerformanceReviewStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PerformanceReviewStatus[] | Prisma.ListEnumPerformanceReviewStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PerformanceReviewStatus[] | Prisma.ListEnumPerformanceReviewStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPerformanceReviewStatusFilter<$PrismaModel> | $Enums.PerformanceReviewStatus;
};
export type EnumPerformanceReviewStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PerformanceReviewStatus | Prisma.EnumPerformanceReviewStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PerformanceReviewStatus[] | Prisma.ListEnumPerformanceReviewStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PerformanceReviewStatus[] | Prisma.ListEnumPerformanceReviewStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPerformanceReviewStatusWithAggregatesFilter<$PrismaModel> | $Enums.PerformanceReviewStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPerformanceReviewStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPerformanceReviewStatusFilter<$PrismaModel>;
};
export type EnumGoalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | Prisma.EnumGoalStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.GoalStatus[] | Prisma.ListEnumGoalStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GoalStatus[] | Prisma.ListEnumGoalStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGoalStatusFilter<$PrismaModel> | $Enums.GoalStatus;
};
export type EnumGoalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | Prisma.EnumGoalStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.GoalStatus[] | Prisma.ListEnumGoalStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GoalStatus[] | Prisma.ListEnumGoalStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGoalStatusWithAggregatesFilter<$PrismaModel> | $Enums.GoalStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumGoalStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumGoalStatusFilter<$PrismaModel>;
};
export type EnumAssetStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetStatus | Prisma.EnumAssetStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AssetStatus[] | Prisma.ListEnumAssetStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AssetStatus[] | Prisma.ListEnumAssetStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAssetStatusFilter<$PrismaModel> | $Enums.AssetStatus;
};
export type EnumAssetStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetStatus | Prisma.EnumAssetStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AssetStatus[] | Prisma.ListEnumAssetStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AssetStatus[] | Prisma.ListEnumAssetStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAssetStatusWithAggregatesFilter<$PrismaModel> | $Enums.AssetStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAssetStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAssetStatusFilter<$PrismaModel>;
};
export type EnumReturnConditionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ReturnCondition | Prisma.EnumReturnConditionFieldRefInput<$PrismaModel> | null;
    in?: $Enums.ReturnCondition[] | Prisma.ListEnumReturnConditionFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.ReturnCondition[] | Prisma.ListEnumReturnConditionFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumReturnConditionNullableFilter<$PrismaModel> | $Enums.ReturnCondition | null;
};
export type EnumReturnConditionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReturnCondition | Prisma.EnumReturnConditionFieldRefInput<$PrismaModel> | null;
    in?: $Enums.ReturnCondition[] | Prisma.ListEnumReturnConditionFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.ReturnCondition[] | Prisma.ListEnumReturnConditionFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumReturnConditionNullableWithAggregatesFilter<$PrismaModel> | $Enums.ReturnCondition | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumReturnConditionNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumReturnConditionNullableFilter<$PrismaModel>;
};
export type EnumAssetRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetRequestStatus | Prisma.EnumAssetRequestStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AssetRequestStatus[] | Prisma.ListEnumAssetRequestStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AssetRequestStatus[] | Prisma.ListEnumAssetRequestStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAssetRequestStatusFilter<$PrismaModel> | $Enums.AssetRequestStatus;
};
export type EnumAssetRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetRequestStatus | Prisma.EnumAssetRequestStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AssetRequestStatus[] | Prisma.ListEnumAssetRequestStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AssetRequestStatus[] | Prisma.ListEnumAssetRequestStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAssetRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.AssetRequestStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAssetRequestStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAssetRequestStatusFilter<$PrismaModel>;
};
export type EnumAnnouncementAudienceFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnouncementAudience | Prisma.EnumAnnouncementAudienceFieldRefInput<$PrismaModel>;
    in?: $Enums.AnnouncementAudience[] | Prisma.ListEnumAnnouncementAudienceFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AnnouncementAudience[] | Prisma.ListEnumAnnouncementAudienceFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAnnouncementAudienceFilter<$PrismaModel> | $Enums.AnnouncementAudience;
};
export type EnumAnnouncementAudienceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnouncementAudience | Prisma.EnumAnnouncementAudienceFieldRefInput<$PrismaModel>;
    in?: $Enums.AnnouncementAudience[] | Prisma.ListEnumAnnouncementAudienceFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AnnouncementAudience[] | Prisma.ListEnumAnnouncementAudienceFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAnnouncementAudienceWithAggregatesFilter<$PrismaModel> | $Enums.AnnouncementAudience;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAnnouncementAudienceFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAnnouncementAudienceFilter<$PrismaModel>;
};
export type EnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | Prisma.EnumInvoiceStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.InvoiceStatus[] | Prisma.ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InvoiceStatus[] | Prisma.ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus;
};
export type EnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | Prisma.EnumInvoiceStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.InvoiceStatus[] | Prisma.ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InvoiceStatus[] | Prisma.ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumInvoiceStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumInvoiceStatusFilter<$PrismaModel>;
};
export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedUuidFilter<$PrismaModel> | string;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedEnumPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.Plan | Prisma.EnumPlanFieldRefInput<$PrismaModel>;
    in?: $Enums.Plan[] | Prisma.ListEnumPlanFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Plan[] | Prisma.ListEnumPlanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPlanFilter<$PrismaModel> | $Enums.Plan;
};
export type NestedEnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | Prisma.EnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SubscriptionStatus[] | Prisma.ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SubscriptionStatus[] | Prisma.ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus;
};
export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type NestedEnumPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Plan | Prisma.EnumPlanFieldRefInput<$PrismaModel>;
    in?: $Enums.Plan[] | Prisma.ListEnumPlanFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Plan[] | Prisma.ListEnumPlanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPlanWithAggregatesFilter<$PrismaModel> | $Enums.Plan;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPlanFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPlanFilter<$PrismaModel>;
};
export type NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | Prisma.EnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SubscriptionStatus[] | Prisma.ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SubscriptionStatus[] | Prisma.ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSubscriptionStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSubscriptionStatusFilter<$PrismaModel>;
};
export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedUuidNullableFilter<$PrismaModel> | string | null;
};
export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | Prisma.EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
};
export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | Prisma.EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRoleFilter<$PrismaModel>;
};
export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type NestedEnumInvitationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | Prisma.EnumInvitationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.InvitationStatus[] | Prisma.ListEnumInvitationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InvitationStatus[] | Prisma.ListEnumInvitationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInvitationStatusFilter<$PrismaModel> | $Enums.InvitationStatus;
};
export type NestedEnumInvitationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | Prisma.EnumInvitationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.InvitationStatus[] | Prisma.ListEnumInvitationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InvitationStatus[] | Prisma.ListEnumInvitationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInvitationStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvitationStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumInvitationStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumInvitationStatusFilter<$PrismaModel>;
};
export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalFilter<$PrismaModel>;
};
export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
};
export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | Prisma.EnumGenderFieldRefInput<$PrismaModel> | null;
    in?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null;
};
export type NestedEnumEmploymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | Prisma.EnumEmploymentTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.EmploymentType[] | Prisma.ListEnumEmploymentTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EmploymentType[] | Prisma.ListEnumEmploymentTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEmploymentTypeFilter<$PrismaModel> | $Enums.EmploymentType;
};
export type NestedEnumEmployeeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeStatus | Prisma.EnumEmployeeStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.EmployeeStatus[] | Prisma.ListEnumEmployeeStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EmployeeStatus[] | Prisma.ListEnumEmployeeStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEmployeeStatusFilter<$PrismaModel> | $Enums.EmployeeStatus;
};
export type NestedEnumSalaryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SalaryType | Prisma.EnumSalaryTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.SalaryType[] | Prisma.ListEnumSalaryTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SalaryType[] | Prisma.ListEnumSalaryTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSalaryTypeFilter<$PrismaModel> | $Enums.SalaryType;
};
export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | Prisma.EnumPaymentMethodFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentMethod[] | Prisma.ListEnumPaymentMethodFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentMethod[] | Prisma.ListEnumPaymentMethodFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod;
};
export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | Prisma.EnumGenderFieldRefInput<$PrismaModel> | null;
    in?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumGenderNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumGenderNullableFilter<$PrismaModel>;
};
export type NestedJsonNullableFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<NestedJsonNullableFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>;
export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type NestedEnumEmploymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | Prisma.EnumEmploymentTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.EmploymentType[] | Prisma.ListEnumEmploymentTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EmploymentType[] | Prisma.ListEnumEmploymentTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEmploymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.EmploymentType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEmploymentTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEmploymentTypeFilter<$PrismaModel>;
};
export type NestedEnumEmployeeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeStatus | Prisma.EnumEmployeeStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.EmployeeStatus[] | Prisma.ListEnumEmployeeStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EmployeeStatus[] | Prisma.ListEnumEmployeeStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEmployeeStatusWithAggregatesFilter<$PrismaModel> | $Enums.EmployeeStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEmployeeStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEmployeeStatusFilter<$PrismaModel>;
};
export type NestedEnumSalaryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SalaryType | Prisma.EnumSalaryTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.SalaryType[] | Prisma.ListEnumSalaryTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SalaryType[] | Prisma.ListEnumSalaryTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSalaryTypeWithAggregatesFilter<$PrismaModel> | $Enums.SalaryType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSalaryTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSalaryTypeFilter<$PrismaModel>;
};
export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | Prisma.EnumPaymentMethodFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentMethod[] | Prisma.ListEnumPaymentMethodFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PaymentMethod[] | Prisma.ListEnumPaymentMethodFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPaymentMethodFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPaymentMethodFilter<$PrismaModel>;
};
export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel> | null;
    in?: bigint[] | number[] | Prisma.ListBigIntFieldRefInput<$PrismaModel> | null;
    notIn?: bigint[] | number[] | Prisma.ListBigIntFieldRefInput<$PrismaModel> | null;
    lt?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    lte?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    gt?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    gte?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null;
};
export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel> | null;
    in?: bigint[] | number[] | Prisma.ListBigIntFieldRefInput<$PrismaModel> | null;
    notIn?: bigint[] | number[] | Prisma.ListBigIntFieldRefInput<$PrismaModel> | null;
    lt?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    lte?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    gt?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    gte?: bigint | number | Prisma.BigIntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedBigIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedBigIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedBigIntNullableFilter<$PrismaModel>;
};
export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type NestedEnumEmploymentTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | Prisma.EnumEmploymentTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.EmploymentType[] | Prisma.ListEnumEmploymentTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.EmploymentType[] | Prisma.ListEnumEmploymentTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumEmploymentTypeNullableFilter<$PrismaModel> | $Enums.EmploymentType | null;
};
export type NestedEnumRemoteTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RemoteType | Prisma.EnumRemoteTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.RemoteType[] | Prisma.ListEnumRemoteTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.RemoteType[] | Prisma.ListEnumRemoteTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumRemoteTypeNullableFilter<$PrismaModel> | $Enums.RemoteType | null;
};
export type NestedEnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | Prisma.EnumJobStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.JobStatus[] | Prisma.ListEnumJobStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.JobStatus[] | Prisma.ListEnumJobStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus;
};
export type NestedEnumJobVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.JobVisibility | Prisma.EnumJobVisibilityFieldRefInput<$PrismaModel>;
    in?: $Enums.JobVisibility[] | Prisma.ListEnumJobVisibilityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.JobVisibility[] | Prisma.ListEnumJobVisibilityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumJobVisibilityFilter<$PrismaModel> | $Enums.JobVisibility;
};
export type NestedEnumEmploymentTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | Prisma.EnumEmploymentTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.EmploymentType[] | Prisma.ListEnumEmploymentTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.EmploymentType[] | Prisma.ListEnumEmploymentTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumEmploymentTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.EmploymentType | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEmploymentTypeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEmploymentTypeNullableFilter<$PrismaModel>;
};
export type NestedEnumRemoteTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RemoteType | Prisma.EnumRemoteTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.RemoteType[] | Prisma.ListEnumRemoteTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.RemoteType[] | Prisma.ListEnumRemoteTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumRemoteTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.RemoteType | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRemoteTypeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRemoteTypeNullableFilter<$PrismaModel>;
};
export type NestedEnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | Prisma.EnumJobStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.JobStatus[] | Prisma.ListEnumJobStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.JobStatus[] | Prisma.ListEnumJobStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumJobStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumJobStatusFilter<$PrismaModel>;
};
export type NestedEnumJobVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobVisibility | Prisma.EnumJobVisibilityFieldRefInput<$PrismaModel>;
    in?: $Enums.JobVisibility[] | Prisma.ListEnumJobVisibilityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.JobVisibility[] | Prisma.ListEnumJobVisibilityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumJobVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.JobVisibility;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumJobVisibilityFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumJobVisibilityFilter<$PrismaModel>;
};
export type NestedEnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | Prisma.EnumApplicationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ApplicationStatus[] | Prisma.ListEnumApplicationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ApplicationStatus[] | Prisma.ListEnumApplicationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus;
};
export type NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | Prisma.EnumApplicationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ApplicationStatus[] | Prisma.ListEnumApplicationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ApplicationStatus[] | Prisma.ListEnumApplicationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumApplicationStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumApplicationStatusFilter<$PrismaModel>;
};
export type NestedEnumInterviewTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewType | Prisma.EnumInterviewTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.InterviewType[] | Prisma.ListEnumInterviewTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InterviewType[] | Prisma.ListEnumInterviewTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInterviewTypeFilter<$PrismaModel> | $Enums.InterviewType;
};
export type NestedEnumInterviewStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewStatus | Prisma.EnumInterviewStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.InterviewStatus[] | Prisma.ListEnumInterviewStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InterviewStatus[] | Prisma.ListEnumInterviewStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInterviewStatusFilter<$PrismaModel> | $Enums.InterviewStatus;
};
export type NestedEnumInterviewTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewType | Prisma.EnumInterviewTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.InterviewType[] | Prisma.ListEnumInterviewTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InterviewType[] | Prisma.ListEnumInterviewTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInterviewTypeWithAggregatesFilter<$PrismaModel> | $Enums.InterviewType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumInterviewTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumInterviewTypeFilter<$PrismaModel>;
};
export type NestedEnumInterviewStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewStatus | Prisma.EnumInterviewStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.InterviewStatus[] | Prisma.ListEnumInterviewStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InterviewStatus[] | Prisma.ListEnumInterviewStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInterviewStatusWithAggregatesFilter<$PrismaModel> | $Enums.InterviewStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumInterviewStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumInterviewStatusFilter<$PrismaModel>;
};
export type NestedEnumInterviewRecommendationNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewRecommendation | Prisma.EnumInterviewRecommendationFieldRefInput<$PrismaModel> | null;
    in?: $Enums.InterviewRecommendation[] | Prisma.ListEnumInterviewRecommendationFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.InterviewRecommendation[] | Prisma.ListEnumInterviewRecommendationFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumInterviewRecommendationNullableFilter<$PrismaModel> | $Enums.InterviewRecommendation | null;
};
export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type NestedEnumInterviewRecommendationNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewRecommendation | Prisma.EnumInterviewRecommendationFieldRefInput<$PrismaModel> | null;
    in?: $Enums.InterviewRecommendation[] | Prisma.ListEnumInterviewRecommendationFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.InterviewRecommendation[] | Prisma.ListEnumInterviewRecommendationFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumInterviewRecommendationNullableWithAggregatesFilter<$PrismaModel> | $Enums.InterviewRecommendation | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumInterviewRecommendationNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumInterviewRecommendationNullableFilter<$PrismaModel>;
};
export type NestedEnumOfferStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OfferStatus | Prisma.EnumOfferStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OfferStatus[] | Prisma.ListEnumOfferStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OfferStatus[] | Prisma.ListEnumOfferStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOfferStatusFilter<$PrismaModel> | $Enums.OfferStatus;
};
export type NestedEnumOfferStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OfferStatus | Prisma.EnumOfferStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OfferStatus[] | Prisma.ListEnumOfferStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OfferStatus[] | Prisma.ListEnumOfferStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOfferStatusWithAggregatesFilter<$PrismaModel> | $Enums.OfferStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumOfferStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumOfferStatusFilter<$PrismaModel>;
};
export type NestedEnumOnboardingAssigneeFilter<$PrismaModel = never> = {
    equals?: $Enums.OnboardingAssignee | Prisma.EnumOnboardingAssigneeFieldRefInput<$PrismaModel>;
    in?: $Enums.OnboardingAssignee[] | Prisma.ListEnumOnboardingAssigneeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OnboardingAssignee[] | Prisma.ListEnumOnboardingAssigneeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOnboardingAssigneeFilter<$PrismaModel> | $Enums.OnboardingAssignee;
};
export type NestedEnumOnboardingAssigneeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OnboardingAssignee | Prisma.EnumOnboardingAssigneeFieldRefInput<$PrismaModel>;
    in?: $Enums.OnboardingAssignee[] | Prisma.ListEnumOnboardingAssigneeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OnboardingAssignee[] | Prisma.ListEnumOnboardingAssigneeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOnboardingAssigneeWithAggregatesFilter<$PrismaModel> | $Enums.OnboardingAssignee;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumOnboardingAssigneeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumOnboardingAssigneeFilter<$PrismaModel>;
};
export type NestedEnumChecklistStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ChecklistStatus | Prisma.EnumChecklistStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ChecklistStatus[] | Prisma.ListEnumChecklistStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ChecklistStatus[] | Prisma.ListEnumChecklistStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumChecklistStatusFilter<$PrismaModel> | $Enums.ChecklistStatus;
};
export type NestedEnumChecklistStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChecklistStatus | Prisma.EnumChecklistStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ChecklistStatus[] | Prisma.ListEnumChecklistStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ChecklistStatus[] | Prisma.ListEnumChecklistStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumChecklistStatusWithAggregatesFilter<$PrismaModel> | $Enums.ChecklistStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumChecklistStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumChecklistStatusFilter<$PrismaModel>;
};
export type NestedEnumOnboardingTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OnboardingTaskStatus | Prisma.EnumOnboardingTaskStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OnboardingTaskStatus[] | Prisma.ListEnumOnboardingTaskStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OnboardingTaskStatus[] | Prisma.ListEnumOnboardingTaskStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOnboardingTaskStatusFilter<$PrismaModel> | $Enums.OnboardingTaskStatus;
};
export type NestedEnumOnboardingTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OnboardingTaskStatus | Prisma.EnumOnboardingTaskStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OnboardingTaskStatus[] | Prisma.ListEnumOnboardingTaskStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OnboardingTaskStatus[] | Prisma.ListEnumOnboardingTaskStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOnboardingTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.OnboardingTaskStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumOnboardingTaskStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumOnboardingTaskStatusFilter<$PrismaModel>;
};
export type NestedEnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | Prisma.EnumAttendanceStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AttendanceStatus[] | Prisma.ListEnumAttendanceStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AttendanceStatus[] | Prisma.ListEnumAttendanceStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus;
};
export type NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | Prisma.EnumAttendanceStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AttendanceStatus[] | Prisma.ListEnumAttendanceStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AttendanceStatus[] | Prisma.ListEnumAttendanceStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAttendanceStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAttendanceStatusFilter<$PrismaModel>;
};
export type NestedEnumTimesheetStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TimesheetStatus | Prisma.EnumTimesheetStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TimesheetStatus[] | Prisma.ListEnumTimesheetStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TimesheetStatus[] | Prisma.ListEnumTimesheetStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTimesheetStatusFilter<$PrismaModel> | $Enums.TimesheetStatus;
};
export type NestedEnumTimesheetStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TimesheetStatus | Prisma.EnumTimesheetStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TimesheetStatus[] | Prisma.ListEnumTimesheetStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TimesheetStatus[] | Prisma.ListEnumTimesheetStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTimesheetStatusWithAggregatesFilter<$PrismaModel> | $Enums.TimesheetStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTimesheetStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTimesheetStatusFilter<$PrismaModel>;
};
export type NestedEnumAccrualTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccrualType | Prisma.EnumAccrualTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.AccrualType[] | Prisma.ListEnumAccrualTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AccrualType[] | Prisma.ListEnumAccrualTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAccrualTypeFilter<$PrismaModel> | $Enums.AccrualType;
};
export type NestedEnumAccrualTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccrualType | Prisma.EnumAccrualTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.AccrualType[] | Prisma.ListEnumAccrualTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AccrualType[] | Prisma.ListEnumAccrualTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAccrualTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccrualType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAccrualTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAccrualTypeFilter<$PrismaModel>;
};
export type NestedEnumHalfDayPeriodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.HalfDayPeriod | Prisma.EnumHalfDayPeriodFieldRefInput<$PrismaModel> | null;
    in?: $Enums.HalfDayPeriod[] | Prisma.ListEnumHalfDayPeriodFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.HalfDayPeriod[] | Prisma.ListEnumHalfDayPeriodFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumHalfDayPeriodNullableFilter<$PrismaModel> | $Enums.HalfDayPeriod | null;
};
export type NestedEnumLeaveStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveStatus | Prisma.EnumLeaveStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.LeaveStatus[] | Prisma.ListEnumLeaveStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LeaveStatus[] | Prisma.ListEnumLeaveStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLeaveStatusFilter<$PrismaModel> | $Enums.LeaveStatus;
};
export type NestedEnumHalfDayPeriodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HalfDayPeriod | Prisma.EnumHalfDayPeriodFieldRefInput<$PrismaModel> | null;
    in?: $Enums.HalfDayPeriod[] | Prisma.ListEnumHalfDayPeriodFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.HalfDayPeriod[] | Prisma.ListEnumHalfDayPeriodFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumHalfDayPeriodNullableWithAggregatesFilter<$PrismaModel> | $Enums.HalfDayPeriod | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumHalfDayPeriodNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumHalfDayPeriodNullableFilter<$PrismaModel>;
};
export type NestedEnumLeaveStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveStatus | Prisma.EnumLeaveStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.LeaveStatus[] | Prisma.ListEnumLeaveStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LeaveStatus[] | Prisma.ListEnumLeaveStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumLeaveStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeaveStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumLeaveStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumLeaveStatusFilter<$PrismaModel>;
};
export type NestedEnumPayFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.PayFrequency | Prisma.EnumPayFrequencyFieldRefInput<$PrismaModel>;
    in?: $Enums.PayFrequency[] | Prisma.ListEnumPayFrequencyFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PayFrequency[] | Prisma.ListEnumPayFrequencyFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPayFrequencyFilter<$PrismaModel> | $Enums.PayFrequency;
};
export type NestedEnumPayFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayFrequency | Prisma.EnumPayFrequencyFieldRefInput<$PrismaModel>;
    in?: $Enums.PayFrequency[] | Prisma.ListEnumPayFrequencyFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PayFrequency[] | Prisma.ListEnumPayFrequencyFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPayFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.PayFrequency;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPayFrequencyFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPayFrequencyFilter<$PrismaModel>;
};
export type NestedEnumPayRunStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PayRunStatus | Prisma.EnumPayRunStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PayRunStatus[] | Prisma.ListEnumPayRunStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PayRunStatus[] | Prisma.ListEnumPayRunStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPayRunStatusFilter<$PrismaModel> | $Enums.PayRunStatus;
};
export type NestedEnumPayRunStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayRunStatus | Prisma.EnumPayRunStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PayRunStatus[] | Prisma.ListEnumPayRunStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PayRunStatus[] | Prisma.ListEnumPayRunStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPayRunStatusWithAggregatesFilter<$PrismaModel> | $Enums.PayRunStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPayRunStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPayRunStatusFilter<$PrismaModel>;
};
export type NestedEnumAdjustmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AdjustmentType | Prisma.EnumAdjustmentTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.AdjustmentType[] | Prisma.ListEnumAdjustmentTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AdjustmentType[] | Prisma.ListEnumAdjustmentTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAdjustmentTypeFilter<$PrismaModel> | $Enums.AdjustmentType;
};
export type NestedEnumAdjustmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdjustmentType | Prisma.EnumAdjustmentTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.AdjustmentType[] | Prisma.ListEnumAdjustmentTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AdjustmentType[] | Prisma.ListEnumAdjustmentTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAdjustmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.AdjustmentType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAdjustmentTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAdjustmentTypeFilter<$PrismaModel>;
};
export type NestedJsonFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>, Required<NestedJsonFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>;
export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type NestedEnumDeductionValueTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DeductionValueType | Prisma.EnumDeductionValueTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.DeductionValueType[] | Prisma.ListEnumDeductionValueTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DeductionValueType[] | Prisma.ListEnumDeductionValueTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDeductionValueTypeFilter<$PrismaModel> | $Enums.DeductionValueType;
};
export type NestedEnumDeductionValueTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeductionValueType | Prisma.EnumDeductionValueTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.DeductionValueType[] | Prisma.ListEnumDeductionValueTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DeductionValueType[] | Prisma.ListEnumDeductionValueTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDeductionValueTypeWithAggregatesFilter<$PrismaModel> | $Enums.DeductionValueType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDeductionValueTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDeductionValueTypeFilter<$PrismaModel>;
};
export type NestedEnumPerformanceCycleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PerformanceCycleType | Prisma.EnumPerformanceCycleTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PerformanceCycleType[] | Prisma.ListEnumPerformanceCycleTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PerformanceCycleType[] | Prisma.ListEnumPerformanceCycleTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPerformanceCycleTypeFilter<$PrismaModel> | $Enums.PerformanceCycleType;
};
export type NestedEnumReviewTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewType | Prisma.EnumReviewTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ReviewType[] | Prisma.ListEnumReviewTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ReviewType[] | Prisma.ListEnumReviewTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumReviewTypeFilter<$PrismaModel> | $Enums.ReviewType;
};
export type NestedEnumReviewCycleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewCycleStatus | Prisma.EnumReviewCycleStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ReviewCycleStatus[] | Prisma.ListEnumReviewCycleStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ReviewCycleStatus[] | Prisma.ListEnumReviewCycleStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumReviewCycleStatusFilter<$PrismaModel> | $Enums.ReviewCycleStatus;
};
export type NestedEnumPerformanceCycleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PerformanceCycleType | Prisma.EnumPerformanceCycleTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PerformanceCycleType[] | Prisma.ListEnumPerformanceCycleTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PerformanceCycleType[] | Prisma.ListEnumPerformanceCycleTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPerformanceCycleTypeWithAggregatesFilter<$PrismaModel> | $Enums.PerformanceCycleType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPerformanceCycleTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPerformanceCycleTypeFilter<$PrismaModel>;
};
export type NestedEnumReviewTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewType | Prisma.EnumReviewTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ReviewType[] | Prisma.ListEnumReviewTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ReviewType[] | Prisma.ListEnumReviewTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumReviewTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReviewType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumReviewTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumReviewTypeFilter<$PrismaModel>;
};
export type NestedEnumReviewCycleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewCycleStatus | Prisma.EnumReviewCycleStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ReviewCycleStatus[] | Prisma.ListEnumReviewCycleStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ReviewCycleStatus[] | Prisma.ListEnumReviewCycleStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumReviewCycleStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReviewCycleStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumReviewCycleStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumReviewCycleStatusFilter<$PrismaModel>;
};
export type NestedEnumPerformanceReviewStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PerformanceReviewStatus | Prisma.EnumPerformanceReviewStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PerformanceReviewStatus[] | Prisma.ListEnumPerformanceReviewStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PerformanceReviewStatus[] | Prisma.ListEnumPerformanceReviewStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPerformanceReviewStatusFilter<$PrismaModel> | $Enums.PerformanceReviewStatus;
};
export type NestedEnumPerformanceReviewStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PerformanceReviewStatus | Prisma.EnumPerformanceReviewStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PerformanceReviewStatus[] | Prisma.ListEnumPerformanceReviewStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PerformanceReviewStatus[] | Prisma.ListEnumPerformanceReviewStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPerformanceReviewStatusWithAggregatesFilter<$PrismaModel> | $Enums.PerformanceReviewStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPerformanceReviewStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPerformanceReviewStatusFilter<$PrismaModel>;
};
export type NestedEnumGoalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | Prisma.EnumGoalStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.GoalStatus[] | Prisma.ListEnumGoalStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GoalStatus[] | Prisma.ListEnumGoalStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGoalStatusFilter<$PrismaModel> | $Enums.GoalStatus;
};
export type NestedEnumGoalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | Prisma.EnumGoalStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.GoalStatus[] | Prisma.ListEnumGoalStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.GoalStatus[] | Prisma.ListEnumGoalStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGoalStatusWithAggregatesFilter<$PrismaModel> | $Enums.GoalStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumGoalStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumGoalStatusFilter<$PrismaModel>;
};
export type NestedEnumAssetStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetStatus | Prisma.EnumAssetStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AssetStatus[] | Prisma.ListEnumAssetStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AssetStatus[] | Prisma.ListEnumAssetStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAssetStatusFilter<$PrismaModel> | $Enums.AssetStatus;
};
export type NestedEnumAssetStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetStatus | Prisma.EnumAssetStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AssetStatus[] | Prisma.ListEnumAssetStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AssetStatus[] | Prisma.ListEnumAssetStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAssetStatusWithAggregatesFilter<$PrismaModel> | $Enums.AssetStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAssetStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAssetStatusFilter<$PrismaModel>;
};
export type NestedEnumReturnConditionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ReturnCondition | Prisma.EnumReturnConditionFieldRefInput<$PrismaModel> | null;
    in?: $Enums.ReturnCondition[] | Prisma.ListEnumReturnConditionFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.ReturnCondition[] | Prisma.ListEnumReturnConditionFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumReturnConditionNullableFilter<$PrismaModel> | $Enums.ReturnCondition | null;
};
export type NestedEnumReturnConditionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReturnCondition | Prisma.EnumReturnConditionFieldRefInput<$PrismaModel> | null;
    in?: $Enums.ReturnCondition[] | Prisma.ListEnumReturnConditionFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.ReturnCondition[] | Prisma.ListEnumReturnConditionFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumReturnConditionNullableWithAggregatesFilter<$PrismaModel> | $Enums.ReturnCondition | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumReturnConditionNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumReturnConditionNullableFilter<$PrismaModel>;
};
export type NestedEnumAssetRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetRequestStatus | Prisma.EnumAssetRequestStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AssetRequestStatus[] | Prisma.ListEnumAssetRequestStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AssetRequestStatus[] | Prisma.ListEnumAssetRequestStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAssetRequestStatusFilter<$PrismaModel> | $Enums.AssetRequestStatus;
};
export type NestedEnumAssetRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetRequestStatus | Prisma.EnumAssetRequestStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AssetRequestStatus[] | Prisma.ListEnumAssetRequestStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AssetRequestStatus[] | Prisma.ListEnumAssetRequestStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAssetRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.AssetRequestStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAssetRequestStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAssetRequestStatusFilter<$PrismaModel>;
};
export type NestedEnumAnnouncementAudienceFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnouncementAudience | Prisma.EnumAnnouncementAudienceFieldRefInput<$PrismaModel>;
    in?: $Enums.AnnouncementAudience[] | Prisma.ListEnumAnnouncementAudienceFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AnnouncementAudience[] | Prisma.ListEnumAnnouncementAudienceFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAnnouncementAudienceFilter<$PrismaModel> | $Enums.AnnouncementAudience;
};
export type NestedEnumAnnouncementAudienceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnouncementAudience | Prisma.EnumAnnouncementAudienceFieldRefInput<$PrismaModel>;
    in?: $Enums.AnnouncementAudience[] | Prisma.ListEnumAnnouncementAudienceFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AnnouncementAudience[] | Prisma.ListEnumAnnouncementAudienceFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAnnouncementAudienceWithAggregatesFilter<$PrismaModel> | $Enums.AnnouncementAudience;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAnnouncementAudienceFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAnnouncementAudienceFilter<$PrismaModel>;
};
export type NestedEnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | Prisma.EnumInvoiceStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.InvoiceStatus[] | Prisma.ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InvoiceStatus[] | Prisma.ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus;
};
export type NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | Prisma.EnumInvoiceStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.InvoiceStatus[] | Prisma.ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InvoiceStatus[] | Prisma.ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumInvoiceStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumInvoiceStatusFilter<$PrismaModel>;
};
