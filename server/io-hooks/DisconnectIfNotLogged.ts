import BaseIoHook from "../core/class/io/BaseIoHook";
import {Socket} from "socket.io";
import {JwtUser} from "../types/JwtUser";
import jwt from "jsonwebtoken";

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