import {Response} from "express";
import DataBag from "../http-controller/DataBag";
import BaseRequestCaller from "../http-controller/BaseRequestCaller";

abstract class BaseHttpMiddleware extends BaseRequestCaller {
    abstract handle(data: DataBag, request: DataBag, response: Response): Promise<boolean>;
}

export default BaseHttpMiddleware;