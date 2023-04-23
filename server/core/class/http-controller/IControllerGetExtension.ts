import {Response, Request} from "express";
import DataBag from "./DataBag";

/**
 * In order for the controller to work with get method, it needs to implement this interface.
 */
interface IControllerGetExtension {
    get(data: DataBag, request: Request, response: Response): Promise<void>;
}

export default IControllerGetExtension;