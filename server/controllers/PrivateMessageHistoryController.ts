import BaseController from "../core/class/http-controller/BaseController";
import DataBag from "../core/class/http-controller/DataBag";
import e from "express";
import {User} from "@prisma/client";
import IControllerGetExtension from "../core/class/http-controller/IControllerGetExtension";
import RequestHelper from "../core/class/helpers/RequestHelper";
import Joi from "joi";

/**
 * Controller to get privates messages history
 */
class PrivateMessageHistoryController extends BaseController implements IControllerGetExtension {
    async get(data: DataBag, request: e.Request, response: e.Response): Promise<void> {
        // http body parameters validation

        const schema = Joi.object<{id: number, page: number}>({
            id: Joi.number()
                .required(),
            page: Joi.number()
                .min(1)
                .required(),
        })
        const joiValidation = schema.validate(request.params)
        // Throw an 403 error if the validation is not successful
        RequestHelper.HandleJoiValidation(joiValidation);

        const params = joiValidation.value as {id: number, page: number};

        // Fetch the database, and order them by date
        const messages = await this.prismaClient.privateMessage.findMany(
            {
                where: {
                    OR: [
                        {
                            toId: params.id,
                            authorId: (<User>data.user).id
                        },
                        {
                            authorId: params.id,
                            toId: (<User>data.user).id
                        },
                    ],
                },
                orderBy: {
                    date: "desc"
                },
                take: 30,
                skip: (params.page - 1) * 30,
            }
        )


        response.json(messages)
    }

}

export default PrivateMessageHistoryController;