import BaseController from "../core/class/http-controller/BaseController";
import IControllerGetExtension from "../core/class/http-controller/IControllerGetExtension";
import DataBag from "../core/class/http-controller/DataBag";
import e from "express";
import Joi from "joi";
import RequestHelper from "../core/class/helpers/RequestHelper";
import {JwtUser} from "../types/JwtUser";

class UserListController extends BaseController implements IControllerGetExtension {
    async get(data: DataBag, request: e.Request, response: e.Response): Promise<void> {
        // Body schema request validation
        const schemaSendMessage = Joi.object<{user: number}>({
            user: Joi.number()
                .required(),
        })

        const joiValidation = schemaSendMessage.validate(request.params)
        RequestHelper.HandleJoiValidation(joiValidation);

        const sockets = await this.io.fetchSockets();

        // Iterate over all socket to find the right id. If not socket can be found, the user is offline
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