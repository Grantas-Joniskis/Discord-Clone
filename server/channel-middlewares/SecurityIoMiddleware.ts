import BaseIoMiddleware from "../core/class/middleware/BaseIoMiddleware";
import {Socket} from "socket.io";
import jwt from "jsonwebtoken";
import {JwtUser} from "../types/JwtUser";
import DataBag from "../core/class/controller/DataBag";

class SecurityIoMiddleware extends BaseIoMiddleware {
    async handle(dataBag: DataBag, socket: Socket): Promise<boolean> {
        const jwtPayload = <JwtUser>jwt.verify(socket.handshake.auth.token, <string>process.env.JWT_SECRET)

        const userPrisma = await this.prismaClient.user.findUnique({where: {id: jwtPayload.id}});

        if (userPrisma === null) {
            throw new Error("User provided by the token no longer exist !")
        }
        dataBag.user = userPrisma;
        return true;
    }
}

export default SecurityIoMiddleware;