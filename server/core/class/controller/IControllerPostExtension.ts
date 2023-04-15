import {Request, Response} from "express";
import DataBag from "./DataBag";

interface IControllerPostExtension {
    post(data: DataBag, request: Request, response: Response): Promise<void>;
}

export default IControllerPostExtension;