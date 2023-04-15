import {Response} from "express";
import DataBag from "../controller/DataBag";
import BaseRequestCaller from "../controller/BaseRequestCaller";

abstract class BaseHttpMiddleware extends BaseRequestCaller {
    abstract handle(data: DataBag, request: DataBag, response: Response): Promise<boolean>;
}

export default BaseHttpMiddleware;