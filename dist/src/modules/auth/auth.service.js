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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const argon2 = __importStar(require("argon2"));
const otplib_1 = require("otplib");
const QRCode = __importStar(require("qrcode"));
const slugify_1 = __importDefault(require("slugify"));
const enums_1 = require("../../generated/prisma/enums");
const prisma_service_1 = require("../../prisma/prisma.service");
const auth_mail_service_1 = require("./auth-mail.service");
const token_service_1 = require("./token.service");
const token_util_1 = require("./token.util");
const EMAIL_TOKEN_TTL_MS = 24 * 60 * 60 * 1000;
const RESET_TOKEN_TTL_MS = 60 * 60 * 1000;
let AuthService = AuthService_1 = class AuthService {
    prisma;
    tokens;
    mail;
    logger = new common_1.Logger(AuthService_1.name);
    constructor(prisma, tokens, mail) {
        this.prisma = prisma;
        this.tokens = tokens;
        this.mail = mail;
    }
    payloadFor(user) {
        return {
            sub: user.id,
            email: user.email,
            role: user.role,
            organizationId: user.organizationId,
        };
    }
    async register(dto, ctx = {}) {
        const email = dto.email.toLowerCase().trim();
        const existing = await this.prisma.user.findFirst({ where: { email } });
        if (existing) {
            throw new common_1.ConflictException('An account with this email already exists');
        }
        const passwordHash = await argon2.hash(dto.password);
        const slug = await this.uniqueSlug(dto.companyName);
        const user = await this.prisma.$transaction(async (tx) => {
            const org = await tx.organization.create({
                data: { name: dto.companyName, slug },
            });
            return tx.user.create({
                data: {
                    organizationId: org.id,
                    email,
                    passwordHash,
                    fullName: dto.fullName,
                    role: enums_1.Role.ORG_ADMIN,
                },
            });
        });
        await this.issueEmailVerification(user.id, email);
        const issued = await this.tokens.issueTokens(this.payloadFor(user), ctx);
        return { user: this.sanitize(user), ...issued };
    }
    async login(dto, ctx = {}) {
        const email = dto.email.toLowerCase().trim();
        const user = await this.prisma.user.findFirst({ where: { email } });
        if (!user || !user.passwordHash) {
            throw new common_1.UnauthorizedException('Invalid email or password');
        }
        const valid = await argon2.verify(user.passwordHash, dto.password);
        if (!valid) {
            throw new common_1.UnauthorizedException('Invalid email or password');
        }
        if (!user.isActive) {
            throw new common_1.UnauthorizedException('This account has been deactivated');
        }
        if (user.twoFaEnabled) {
            if (!dto.totpCode) {
                throw new common_1.UnauthorizedException('TWO_FACTOR_REQUIRED');
            }
            if (!this.verifyTotp(dto.totpCode, user.twoFaSecret)) {
                throw new common_1.UnauthorizedException('Invalid two-factor code');
            }
        }
        await this.prisma.user.update({
            where: { id: user.id },
            data: { lastLoginAt: new Date() },
        });
        const issued = await this.tokens.issueTokens(this.payloadFor(user), ctx);
        return { user: this.sanitize(user), ...issued };
    }
    async refresh(refreshToken, ctx = {}) {
        return this.tokens.rotate(refreshToken, async (userId) => {
            const user = await this.prisma.user.findUnique({
                where: { id: userId },
            });
            if (!user || !user.isActive) {
                throw new common_1.UnauthorizedException('Account is no longer active');
            }
            return this.payloadFor(user);
        }, ctx);
    }
    async logout(refreshToken) {
        await this.tokens.revokeByToken(refreshToken);
    }
    async me(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            include: { organization: true },
        });
        if (!user)
            throw new common_1.NotFoundException('User not found');
        return this.sanitize(user);
    }
    async issueEmailVerification(userId, email) {
        const { raw, hash } = (0, token_util_1.generateOneTimeToken)();
        await this.prisma.emailVerificationToken.create({
            data: {
                userId,
                tokenHash: hash,
                expiresAt: new Date(Date.now() + EMAIL_TOKEN_TTL_MS),
            },
        });
        await this.mail.sendEmailVerification(email, raw);
    }
    async verifyEmail(token) {
        const record = await this.prisma.emailVerificationToken.findUnique({
            where: { tokenHash: (0, token_util_1.hashToken)(token) },
        });
        if (!record || record.usedAt || record.expiresAt < new Date()) {
            throw new common_1.BadRequestException('Verification link is invalid or expired');
        }
        await this.prisma.$transaction([
            this.prisma.user.update({
                where: { id: record.userId },
                data: { emailVerified: true },
            }),
            this.prisma.emailVerificationToken.update({
                where: { id: record.id },
                data: { usedAt: new Date() },
            }),
        ]);
        return { verified: true };
    }
    async forgotPassword(dto) {
        const email = dto.email.toLowerCase().trim();
        const user = await this.prisma.user.findFirst({ where: { email } });
        if (user) {
            const { raw, hash } = (0, token_util_1.generateOneTimeToken)();
            await this.prisma.passwordResetToken.create({
                data: {
                    userId: user.id,
                    tokenHash: hash,
                    expiresAt: new Date(Date.now() + RESET_TOKEN_TTL_MS),
                },
            });
            await this.mail.sendPasswordReset(email, raw);
        }
        return { message: 'If that email exists, a reset link has been sent' };
    }
    async resetPassword(dto) {
        const record = await this.prisma.passwordResetToken.findUnique({
            where: { tokenHash: (0, token_util_1.hashToken)(dto.token) },
        });
        if (!record || record.usedAt || record.expiresAt < new Date()) {
            throw new common_1.BadRequestException('Reset link is invalid or expired');
        }
        const passwordHash = await argon2.hash(dto.newPassword);
        await this.prisma.$transaction([
            this.prisma.user.update({
                where: { id: record.userId },
                data: { passwordHash },
            }),
            this.prisma.passwordResetToken.update({
                where: { id: record.id },
                data: { usedAt: new Date() },
            }),
        ]);
        await this.tokens.revokeAllForUser(record.userId);
        return { message: 'Password updated successfully' };
    }
    async acceptInvite(dto, ctx = {}) {
        const invitation = await this.prisma.invitation.findUnique({
            where: { tokenHash: (0, token_util_1.hashToken)(dto.inviteToken) },
        });
        if (!invitation ||
            invitation.status !== enums_1.InvitationStatus.PENDING ||
            invitation.expiresAt < new Date()) {
            throw new common_1.BadRequestException('Invitation is invalid or expired');
        }
        const email = invitation.email.toLowerCase().trim();
        const existing = await this.prisma.user.findFirst({
            where: { organizationId: invitation.organizationId, email },
        });
        if (existing) {
            throw new common_1.ConflictException('This invitation has already been used');
        }
        const passwordHash = await argon2.hash(dto.password);
        const user = await this.prisma.$transaction(async (tx) => {
            const created = await tx.user.create({
                data: {
                    organizationId: invitation.organizationId,
                    email,
                    passwordHash,
                    fullName: dto.fullName,
                    role: invitation.role,
                    emailVerified: true,
                },
            });
            await tx.invitation.update({
                where: { id: invitation.id },
                data: { status: enums_1.InvitationStatus.ACCEPTED, acceptedAt: new Date() },
            });
            return created;
        });
        const issued = await this.tokens.issueTokens(this.payloadFor(user), ctx);
        return { user: this.sanitize(user), ...issued };
    }
    async setupTwoFactor(user) {
        const secret = (0, otplib_1.generateSecret)();
        await this.prisma.user.update({
            where: { id: user.id },
            data: { twoFaSecret: secret, twoFaEnabled: false },
        });
        const otpauth = (0, otplib_1.generateURI)({
            issuer: 'FlowDesk',
            label: user.email,
            secret,
        });
        const qrCode = await QRCode.toDataURL(otpauth);
        return { secret, otpauthUrl: otpauth, qrCode };
    }
    async verifyTwoFactor(userId, code) {
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user?.twoFaSecret) {
            throw new common_1.BadRequestException('Two-factor setup has not been started');
        }
        if (!this.verifyTotp(code, user.twoFaSecret)) {
            throw new common_1.BadRequestException('Invalid two-factor code');
        }
        await this.prisma.user.update({
            where: { id: userId },
            data: { twoFaEnabled: true },
        });
        return { enabled: true };
    }
    async disableTwoFactor(userId, code) {
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user?.twoFaEnabled || !user.twoFaSecret) {
            throw new common_1.BadRequestException('Two-factor is not enabled');
        }
        if (!this.verifyTotp(code, user.twoFaSecret)) {
            throw new common_1.BadRequestException('Invalid two-factor code');
        }
        await this.prisma.user.update({
            where: { id: userId },
            data: { twoFaEnabled: false, twoFaSecret: null },
        });
        return { enabled: false };
    }
    async listSessions(userId) {
        return this.tokens.listSessions(userId);
    }
    async revokeSession(userId, sessionId) {
        await this.tokens.revokeSession(userId, sessionId);
        return { revoked: true };
    }
    sanitize(user) {
        const { passwordHash, twoFaSecret, ...rest } = user;
        void passwordHash;
        void twoFaSecret;
        return rest;
    }
    verifyTotp(token, secret) {
        if (!secret)
            return false;
        return (0, otplib_1.verifySync)({ token, secret, epochTolerance: 30 }).valid;
    }
    async uniqueSlug(companyName) {
        const base = (0, slugify_1.default)(companyName, { lower: true, strict: true }) || 'company';
        let candidate = base;
        let suffix = 1;
        while (await this.prisma.organization.findUnique({ where: { slug: candidate } })) {
            candidate = `${base}-${suffix++}`;
        }
        return candidate;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        token_service_1.TokenService,
        auth_mail_service_1.AuthMailService])
], AuthService);
//# sourceMappingURL=auth.service.js.map