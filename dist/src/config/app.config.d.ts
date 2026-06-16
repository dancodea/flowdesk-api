declare const _default: (() => {
    env: string;
    port: number;
    apiVersion: string;
    clientUrl: string;
    throttle: {
        ttl: number;
        limit: number;
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    env: string;
    port: number;
    apiVersion: string;
    clientUrl: string;
    throttle: {
        ttl: number;
        limit: number;
    };
}>;
export default _default;
