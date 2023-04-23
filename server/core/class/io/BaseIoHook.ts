import BaseRequestCaller from "../http-controller/BaseRequestCaller";
import DataBag from "../http-controller/DataBag";
import {Socket} from "socket.io";
import {ReservedOrUserEventNames} from "socket.io/dist/typed-events";

/**
 * Used to register hook from the socket connection, for example on "connection" hook, or custom hook.
 * The event name must be defined if the constructor argument.
 */
abstract class BaseIoHook extends BaseRequestCaller {
    protected event : string;

    abstract handle(socket: Socket): void;
    constructor(event: string) {
        super();
        this.event = event;
    }

    public getEventName() : string {
        return this.event;
    }
}

export default BaseIoHook;