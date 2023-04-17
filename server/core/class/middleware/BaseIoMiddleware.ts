import BaseRequestCaller from "../http-controller/BaseRequestCaller";
import {Socket} from "socket.io";
import DataBag from "../http-controller/DataBag";

abstract class BaseIoMiddleware extends BaseRequestCaller {
    abstract handle(dataBag: DataBag, socket: Socket): Promise<boolean>;
}

export default BaseIoMiddleware;