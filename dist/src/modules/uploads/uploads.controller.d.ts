import type { AuthUser } from '../auth/auth.types';
import { DeleteUploadDto, SignUploadDto } from './dto';
import { UploadsService } from './uploads.service';
export declare class UploadsController {
    private readonly uploads;
    constructor(uploads: UploadsService);
    sign(user: AuthUser, dto: SignUploadDto): {
        signature: string;
        timestamp: number;
        folder: string;
        apiKey: string | undefined;
        cloudName: string | undefined;
    };
    remove(dto: DeleteUploadDto): Promise<{
        result: string;
    }>;
}
