"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('app', () => ({
    env: process.env.NODE_ENV ?? 'development',
    port: parseInt(process.env.PORT ?? '4000', 10),
    apiVersion: process.env.API_VERSION ?? 'v1',
    clientUrl: process.env.CLIENT_URL ?? 'http://localhost:3000',
    throttle: {
        ttl: parseInt(process.env.THROTTLE_TTL ?? '60', 10),
        limit: parseInt(process.env.THROTTLE_LIMIT ?? '100', 10),
    },
}));
//# sourceMappingURL=app.config.js.map