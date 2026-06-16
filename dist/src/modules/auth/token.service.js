"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const argon2 = __importStar(require("argon2"));
const prisma_service_1 = require("../../prisma/prisma.service");
let TokenService = class TokenService {
    jwt;
    config;
    prisma;
    constructor(jwt, config, prisma) {
        this.jwt = jwt;
        this.config = config;
        this.prisma = prisma;
    }
    get accessSecret() {
        return this.config.get('jwt.secret') ?? process.env.JWT_SECRET;
    }
    get refreshSecret() {
        return (this.config.get('jwt.refreshSecret') ??
            process.env.REFRESH_TOKEN_SECRET);
    }
    get accessExpiresIn() {
        return (this.config.get('jwt.expiresIn') ??
            '15m');
    }
    get refreshExpiresIn() {
        return (this.config.get('jwt.refreshExpiresIn') ??
            '7d');
    }
    async issueTokens(payload, ctx = {}) {
        const accessToken = await this.jwt.signAsync(payload, {
            secret: this.accessSecret,
            expiresIn: this.accessExpiresIn,
        });
        const refreshToken = await this.createRefreshToken(payload.sub, ctx);
        const expiresIn = this.config.get('jwt.expiresIn') ?? '15m';
        return { accessToken, refreshToken, expiresIn };
    }
    async signAccessToken(payload) {
        return this.jwt.signAsync(payload, {
            secret: this.accessSecret,
            expiresIn: this.accessExpiresIn,
        });
    }
    async createRefreshToken(userId, ctx) {
        const expiresAt = this.refreshExpiryDate();
        const record = await this.prisma.refreshToken.create({
            data: {
                userId,
                tokenHash: 'pending',
                deviceInfo: ctx.deviceInfo,
                ipAddress: ctx.ipAddress,
                expiresAt,
            },
        });
        const token = await this.jwt.signAsync({ sub: userId, jti: record.id }, { secret: this.refreshSecret, expiresIn: this.refreshExpiresIn });
        await this.prisma.refreshToken.update({
            where: { id: record.id },
            data: { tokenHash: await argon2.hash(token) },
        });
        return token;
    }
    async rotate(refreshToken, payloadFor, ctx = {}) {
        const record = await this.verifyRefreshToken(refreshToken);
        await this.prisma.refreshToken.update({
            where: { id: record.id },
            data: { revokedAt: new Date() },
        });
        const payload = await payloadFor(record.userId);
        return this.issueTokens(payload, ctx);
    }
    async verifyRefreshToken(refreshToken) {
        let decoded;
        try {
            decoded = await this.jwt.verifyAsync(refreshToken, {
                secret: this.refreshSecret,
            });
        }
        catch {
            throw new common_1.UnauthorizedException('Invalid or expired refresh token');
        }
        const record = await this.prisma.refreshToken.findUnique({
            where: { id: decoded.jti },
        });
        if (!record ||
            record.userId !== decoded.sub ||
            record.revokedAt ||
            record.expiresAt < new Date()) {
            throw new common_1.UnauthorizedException('Refresh session is no longer valid');
        }
        const matches = await argon2.verify(record.tokenHash, refreshToken);
        if (!matches) {
            throw new common_1.UnauthorizedException('Refresh token mismatch');
        }
        return record;
    }
    async revokeByToken(refreshToken) {
        try {
            const record = await this.verifyRefreshToken(refreshToken);
            await this.prisma.refreshToken.update({
                where: { id: record.id },
                data: { revokedAt: new Date() },
            });
        }
        catch {
        }
    }
    async revokeSession(userId, sessionId) {
        await this.prisma.refreshToken.updateMany({
            where: { id: sessionId, userId, revokedAt: null },
            data: { revokedAt: new Date() },
        });
    }
    async revokeAllForUser(userId) {
        await this.prisma.refreshToken.updateMany({
            where: { userId, revokedAt: null },
            data: { revokedAt: new Date() },
        });
    }
    async listSessions(userId) {
        return this.prisma.refreshToken.findMany({
            where: { userId, revokedAt: null, expiresAt: { gt: new Date() } },
            select: {
                id: true,
                deviceInfo: true,
                ipAddress: true,
                createdAt: true,
                expiresAt: true,
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    refreshExpiryDate() {
        const raw = this.config.get('jwt.refreshExpiresIn') ?? '7d';
        const match = /^(\d+)([smhd])$/.exec(raw);
        const now = Date.now();
        if (!match) {
            return new Date(now + 7 * 24 * 60 * 60 * 1000);
        }
        const value = parseInt(match[1], 10);
        const unit = match[2];
        const multipliers = {
            s: 1000,
            m: 60 * 1000,
            h: 60 * 60 * 1000,
            d: 24 * 60 * 60 * 1000,
        };
        return new Date(now + value * multipliers[unit]);
    }
};
exports.TokenService = TokenService;
exports.TokenService = TokenService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        config_1.ConfigService,
        prisma_service_1.PrismaService])
], TokenService);
//# sourceMappingURL=token.service.js.map