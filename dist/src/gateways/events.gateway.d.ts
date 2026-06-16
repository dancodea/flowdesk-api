import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { JwtService } from '@nestjs/jwt';
import { Server, Socket } from 'socket.io';
export declare class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private readonly jwtService;
    server: Server;
    private readonly logger;
    constructor(jwtService: JwtService);
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
    handleDeptSubscribe(client: Socket, body: {
        departmentId?: string;
    }): {
        subscribed: boolean;
    };
    handlePing(): {
        pong: boolean;
    };
    emitToUser(userId: string, event: string, payload: unknown): void;
    emitToOrg(organizationId: string, event: string, payload: unknown): void;
    emitToDepartment(departmentId: string, event: string, payload: unknown): void;
    private extractToken;
    private verify;
}
