import BaseIoHook from "../core/class/io/BaseIoHook";
import {Socket} from "socket.io";
import {JwtUser} from "../types/JwtUser";
import jwt from "jsonwebtoken";

/**
 * At the connection, the token given by the user is verified, and the user is stored inside the socket data.
 * If the token is wrong, the socket is disconnected
 */
class DisconnectIfNotLogged extends BaseIoHook {
    handle(socket: Socket): void {
        try {
            socket.data.user = <JwtUser>jwt.verify(socket.handshake.auth.token, <string>process.env.JWT_SECRET)
        }catch (e) {
            socket.disconnect()
        }
    }
}

export default DisconnectIfNotLogged;