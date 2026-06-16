"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var EventsGateway_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const socket_io_1 = require("socket.io");
let EventsGateway = EventsGateway_1 = class EventsGateway {
    jwtService;
    server;
    logger = new common_1.Logger(EventsGateway_1.name);
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    handleConnection(client) {
        const token = this.extractToken(client);
        const payload = this.verify(token);
        if (!payload) {
            this.logger.warn(`Rejected unauthenticated socket ${client.id}`);
            client.disconnect(true);
            return;
        }
        const data = client.data;
        data.userId = payload.sub;
        data.organizationId = payload.organizationId;
        void client.join(`user:${payload.sub}`);
        if (payload.organizationId) {
            void client.join(`org:${payload.organizationId}`);
        }
        this.logger.log(`Client connected: ${client.id} (user ${payload.sub})`);
    }
    handleDisconnect(client) {
        this.logger.log(`Client disconnected: ${client.id}`);
    }
    handleDeptSubscribe(client, body) {
        if (body?.departmentId) {
            void client.join(`dept:${body.departmentId}`);
        }
        return { subscribed: !!body?.departmentId };
    }
    handlePing() {
        return { pong: true };
    }
    emitToUser(userId, event, payload) {
        this.server.to(`user:${userId}`).emit(event, payload);
    }
    emitToOrg(organizationId, event, payload) {
        this.server.to(`org:${organizationId}`).emit(event, payload);
    }
    emitToDepartment(departmentId, event, payload) {
        this.server.to(`dept:${departmentId}`).emit(event, payload);
    }
    extractToken(client) {
        const authToken = client.handshake.auth?.token;
        if (authToken)
            return authToken.replace(/^Bearer\s+/i, '');
        const header = client.handshake.headers.authorization;
        if (header)
            return header.replace(/^Bearer\s+/i, '');
        const queryToken = client.handshake.query?.token;
        if (typeof queryToken === 'string')
            return queryToken;
        return undefined;
    }
    verify(token) {
        if (!token)
            return null;
        try {
            return this.jwtService.verify(token);
        }
        catch {
            return null;
        }
    }
};
exports.EventsGateway = EventsGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], EventsGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('subscribe:department'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], EventsGateway.prototype, "handleDeptSubscribe", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('ping'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EventsGateway.prototype, "handlePing", null);
exports.EventsGateway = EventsGateway = EventsGateway_1 = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: { origin: '*' } }),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], EventsGateway);
//# sourceMappingURL=events.gateway.js.map