import {Request, Response} from "express";
import DataBag from "./DataBag";

/**
 * In order for the controller to work with post method, it needs to implement this interface.
 */
interface IControllerPostExtension {
    post(data: DataBag, request: Request, response: Response): Promise<void>;
}

export default IControllerPostExtension;