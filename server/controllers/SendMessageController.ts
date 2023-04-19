import BaseController from "../core/class/http-controller/BaseController";
import IControllerPostExtension from "../core/class/http-controller/IControllerPostExtension";
import DataBag from "../core/class/http-controller/DataBag";
import e from "express";
import Joi from "joi";
import RequestHelper from "../core/class/helpers/RequestHelper";
import NotFoundRequestException from "../core/class/http-exceptions/NotFoundRequestException";
import {JwtUser} from "../types/JwtUser";

class SendMessageController extends BaseController implements IControllerPostExtension {
    async post(data: DataBag, request: e.Request, response: e.Response): Promise<void> {
        const schemaSendMessage = Joi.object<{to: number, text: string}>({
            to: Joi.number()
                .required(),
            text: Joi.string()
                .max(500)
                .required(),
        })

        const joiValidation = schemaSendMessage.validate(
            {...request.body, ...request.params})
        RequestHelper.HandleJoiValidation(joiValidation);

        const schemaRequest = joiValidation.value as {to: number, text: string};


        // Check if user exist:
        const receiver = await this.prismaClient.user.findUnique({where: {id: schemaRequest.to}})

        if (receiver === null) {
            throw new NotFoundRequestException("Receiver was not found.")
        }

        // insert message in database
        const message = await this.prismaClient.privateMessage.create({
            data: {
                toId: receiver.id,
                authorId: data.user.id,
                content: schemaRequest.text
            }})

        this.io.fetchSockets().then(sockets => {
            sockets.forEach(socket => {
                if (socket.data.user === undefined) return;
                if((<JwtUser>socket.data.user).id === receiver.id) {
                    socket.emit("receive-private-message", data.user.id, schemaRequest.text)
                }
                if((<JwtUser>socket.data.user).id === data.user.id) {
                    socket.emit("sent-private-message", receiver.id, schemaRequest.text)
                }
            })
        })
        response.json(message)
    }

}

export default SendMessageController;