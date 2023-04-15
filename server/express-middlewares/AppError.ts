import e from "express";
import RequestHelper from "../core/class/helpers/RequestHelper";

export default function AppError(err: Error, request: e.Request, response: e.Response, next: e.NextFunction) {
    if (err) {
        response.status(400).json(RequestHelper.CreateErrorResponse(err.message))
        return;
    }
    next();
}