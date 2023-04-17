import BaseChannel from "../core/class/io/BaseChannel";
import {Socket} from "socket.io";
import DataBag from "../core/class/http-controller/DataBag";

class PingChannel extends BaseChannel {
    handle(dataBag: DataBag, socket: Socket, message: string): void {
        console.log("Receive ping channel from " + dataBag.user.name + " payload: " + message)
        socket.emit("pong", message);
    }
}

export default PingChannel;