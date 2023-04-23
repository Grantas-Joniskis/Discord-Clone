import {Response} from "express";
import DataBag from "../http-controller/DataBag";
import BaseRequestCaller from "../http-controller/BaseRequestCaller";

/**
 * Base HTTP middleware, it will be called on every request where the middleware is registered on the router.
 */
abstract class BaseHttpMiddleware extends BaseRequestCaller {
    abstract handle(data: DataBag, request: DataBag, response: Response): Promise<boolean>;
}

export default BaseHttpMiddleware;