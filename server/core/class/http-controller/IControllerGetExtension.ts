import {Response} from "express";
import DataBag from "./DataBag";

interface IControllerGetExtension {
    get(data: DataBag, request: DataBag, response: Response): Promise<void>;
}

export default IControllerGetExtension;