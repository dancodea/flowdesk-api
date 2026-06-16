import { Role } from '../../../generated/prisma/enums';
export declare class CreateInvitationDto {
    email: string;
    role: Role;
    departmentId?: string;
}
