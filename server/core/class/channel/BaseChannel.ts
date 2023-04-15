import BaseRequestCaller from "../controller/BaseRequestCaller";
import {Socket} from "socket.io";
import DataBag from "../controller/DataBag";

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