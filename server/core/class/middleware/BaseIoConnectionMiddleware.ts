import BaseIoMiddleware from "./BaseIoMiddleware";
import BaseRequestCaller from "../controller/BaseRequestCaller";
import DataBag from "../controller/DataBag";
import {Socket} from "socket.io";

abstract class BaseIoConnectionMiddleware extends BaseRequestCaller {
    abstract handle(socket: Socket): Promise<boolean>;
}

export default BaseIoConnectionMiddleware;