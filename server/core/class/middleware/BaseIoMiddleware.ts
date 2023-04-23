import BaseRequestCaller from "../http-controller/BaseRequestCaller";
import {Socket} from "socket.io";
import DataBag from "../http-controller/DataBag";

/**
 * Base Socket middleware, it will be called on every request where the middleware is registered on the router.
 */
abstract class BaseIoMiddleware extends BaseRequestCaller {
    abstract handle(dataBag: DataBag, socket: Socket): Promise<boolean>;
}

export default BaseIoMiddleware;