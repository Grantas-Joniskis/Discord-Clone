import {PrismaClient} from "@prisma/client";
import {Server as SocketIoServer} from "socket.io";

abstract class BaseRequestCaller {
    // @ts-ignore
    protected prismaClient: PrismaClient;
    // @ts-ignore
    protected io: SocketIoServer;


    public setPrismaClient(prismaClient: PrismaClient) {
        this.prismaClient = prismaClient;
    }

    public setIoServer(io: SocketIoServer) {
        this.io = io;
    }
}

export default BaseRequestCaller;