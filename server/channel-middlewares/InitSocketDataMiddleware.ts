import {Socket} from "socket.io";
import BaseIoConnectionMiddleware from "../core/class/middleware/BaseIoConnectionMiddleware";
import {JwtUser} from "../types/JwtUser";
import jwt from "jsonwebtoken";

class InitSocketDataMiddleware extends BaseIoConnectionMiddleware {
    async handle(socket: Socket): Promise<boolean> {
        try {
            socket.data.user = <JwtUser>jwt.verify(socket.handshake.auth.token, <string>process.env.JWT_SECRET)
        } catch (e) {
            return false;
        }

        return true;
    }
}

export default InitSocketDataMiddleware;