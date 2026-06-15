import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v2 as cloudinary } from 'cloudinary';
import { DeleteUploadDto, SignUploadDto } from './dto';

interface CloudinaryConfig {
  cloudName?: string;
  apiKey?: string;
  apiSecret?: string;
  uploadFolder: string;
}

@Injectable()
export class UploadsService {
  private readonly cfg: CloudinaryConfig;

  constructor(private readonly config: ConfigService) {
    this.cfg = this.config.get<CloudinaryConfig>('cloudinary') ?? {
      uploadFolder: 'flowdesk',
    };
  }

  private assertConfigured() {
    if (!this.cfg.cloudName || !this.cfg.apiKey || !this.cfg.apiSecret) {
      throw new InternalServerErrorException('Cloudinary is not configured');
    }
  }

  /**
   * Returns the signed params the client needs to upload directly to Cloudinary.
   * Files are foldered per organization + context so tenants stay isolated.
   */
  sign(organizationId: string | null, dto: SignUploadDto) {
    if (!organizationId) {
      throw new BadRequestException('No organization context on this account');
    }
    this.assertConfigured();

    const timestamp = Math.round(Date.now() / 1000);
    const folder = `${this.cfg.uploadFolder}/${organizationId}/${dto.context}`;

    const signature = cloudinary.utils.api_sign_request(
      { timestamp, folder },
      this.cfg.apiSecret!,
    );

    return {
      signature,
      timestamp,
      folder,
      apiKey: this.cfg.apiKey,
      cloudName: this.cfg.cloudName,
    };
  }

  async remove(dto: DeleteUploadDto) {
    this.assertConfigured();
    cloudinary.config({
      cloud_name: this.cfg.cloudName,
      api_key: this.cfg.apiKey,
      api_secret: this.cfg.apiSecret,
    });
    const result = (await cloudinary.uploader.destroy(dto.publicId)) as {
      result: string;
    };
    return { result: result.result };
  }
}
