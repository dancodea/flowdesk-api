import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Server, Socket } from 'socket.io';
import type { JwtPayload } from '../modules/auth/auth.types';

/**
 * Socket.IO gateway. Clients authenticate during the handshake (token in
 * `auth.token`, the `Authorization` header, or a `token` query param). On a
 * valid token the socket joins its personal `user:{id}` room and its tenant
 * `org:{organizationId}` room, so the API can target a single user or a whole
 * organization.
 */
@WebSocketGateway({ cors: { origin: '*' } })
export class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private readonly logger = new Logger(EventsGateway.name);

  constructor(private readonly jwtService: JwtService) {}

  handleConnection(client: Socket) {
    const token = this.extractToken(client);
    const payload = this.verify(token);

    if (!payload) {
      this.logger.warn(`Rejected unauthenticated socket ${client.id}`);
      client.disconnect(true);
      return;
    }

    const data = client.data as {
      userId?: string;
      organizationId?: string | null;
    };
    data.userId = payload.sub;
    data.organizationId = payload.organizationId;

    void client.join(`user:${payload.sub}`);
    if (payload.organizationId) {
      void client.join(`org:${payload.organizationId}`);
    }
    this.logger.log(`Client connected: ${client.id} (user ${payload.sub})`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  /** Optional explicit dept subscription (spec: `subscribe:department`). */
  @SubscribeMessage('subscribe:department')
  handleDeptSubscribe(
    @ConnectedSocket() client: Socket,
    @MessageBody() body: { departmentId?: string },
  ) {
    if (body?.departmentId) {
      void client.join(`dept:${body.departmentId}`);
    }
    return { subscribed: !!body?.departmentId };
  }

  @SubscribeMessage('ping')
  handlePing() {
    return { pong: true };
  }

  emitToUser(userId: string, event: string, payload: unknown) {
    this.server.to(`user:${userId}`).emit(event, payload);
  }

  emitToOrg(organizationId: string, event: string, payload: unknown) {
    this.server.to(`org:${organizationId}`).emit(event, payload);
  }

  emitToDepartment(departmentId: string, event: string, payload: unknown) {
    this.server.to(`dept:${departmentId}`).emit(event, payload);
  }

  private extractToken(client: Socket): string | undefined {
    const authToken = client.handshake.auth?.token as string | undefined;
    if (authToken) return authToken.replace(/^Bearer\s+/i, '');

    const header = client.handshake.headers.authorization;
    if (header) return header.replace(/^Bearer\s+/i, '');

    const queryToken = client.handshake.query?.token;
    if (typeof queryToken === 'string') return queryToken;

    return undefined;
  }

  private verify(token: string | undefined): JwtPayload | null {
    if (!token) return null;
    try {
      return this.jwtService.verify<JwtPayload>(token);
    } catch {
      return null;
    }
  }
}
