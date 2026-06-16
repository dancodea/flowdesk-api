import { ConfigService } from '@nestjs/config';
import { DeleteUploadDto, SignUploadDto } from './dto';
export declare class UploadsService {
    private readonly config;
    private readonly cfg;
    constructor(config: ConfigService);
    private assertConfigured;
    sign(organizationId: string | null, dto: SignUploadDto): {
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
