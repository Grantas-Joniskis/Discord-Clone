import {Response, Request} from "express";
import DataBag from "./DataBag";

interface IControllerGetExtension {
    get(data: DataBag, request: Request, response: Response): Promise<void>;
}

export default IControllerGetExtension;