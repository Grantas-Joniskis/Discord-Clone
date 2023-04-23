import BaseRequestCaller from "../http-controller/BaseRequestCaller";
import {Socket} from "socket.io";
import DataBag from "../http-controller/DataBag";

/**
 * Base controller for socket connection, the channel name must be defined in the constructor argument.
 */
abstract class BaseChannel extends BaseRequestCaller {
    protected channel : string;

    abstract handle(dataBag: DataBag, socket: Socket, ...args: any[]): void;
    constructor(channel: string) {
        super();
        this.channel = channel;
    }

    public getChannel() : string {
        return this.channel;
    }
}

export default BaseChannel;