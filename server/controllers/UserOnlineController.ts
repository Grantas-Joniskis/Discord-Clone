import BaseController from "../core/class/http-controller/BaseController";
import IControllerGetExtension from "../core/class/http-controller/IControllerGetExtension";
import DataBag from "../core/class/http-controller/DataBag";
import e from "express";
import Joi from "joi";
import RequestHelper from "../core/class/helpers/RequestHelper";
import {JwtUser} from "../types/JwtUser";

class UserListController extends BaseController implements IControllerGetExtension {
    async get(data: DataBag, request: e.Request, response: e.Response): Promise<void> {
        const schemaSendMessage = Joi.object<{user: number}>({
            user: Joi.number()
                .required(),
        })

        const joiValidation = schemaSendMessage.validate(request.params)
        RequestHelper.HandleJoiValidation(joiValidation);

        const sockets = await this.io.fetchSockets();

        for (const socket of sockets) {
            if (socket.data.user === undefined)
                continue;

            const jwtUser = <JwtUser>socket.data.user;


            if (jwtUser.id === joiValidation.value?.user) {
                response.json({isOnline: true})
                return;
            }
        }

        response.json({isOnline: false});
    }
}

export default UserListController;