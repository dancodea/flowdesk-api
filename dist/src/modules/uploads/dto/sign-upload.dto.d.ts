export declare const UPLOAD_CONTEXTS: readonly ["avatar", "document", "org-logo", "asset", "recruitment"];
export type UploadContext = (typeof UPLOAD_CONTEXTS)[number];
export declare class SignUploadDto {
    filename: string;
    contentType?: string;
    context: UploadContext;
}
