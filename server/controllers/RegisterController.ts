import e from "express";
import BaseController from "../core/class/http-controller/BaseController";
import Joi from "joi";
import IControllerPostExtension from "../core/class/http-controller/IControllerPostExtension";
import RequestHelper from "../core/class/helpers/RequestHelper";
import bcrypt from "bcrypt";
import DataBag from "../core/class/http-controller/DataBag";
import {Prisma} from "@prisma/client";
import BadRequestException from "../core/class/http-exceptions/BadRequestException";
class LoginController extends BaseController implements IControllerPostExtension {
    async post(data: DataBag, request: e.Request, response: e.Response) {
        const schemaRegister = Joi.object({
            email: Joi.string()
                .email()
                .required(),
            password: Joi.string()
                .required().regex(new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.* ).{8,32}$")),
            username: Joi.string()
                .required()
                .max(30)
                .min(3)
        })

        const joiValidation = schemaRegister.validate(request.body)
        RequestHelper.HandleJoiValidation(joiValidation);
        const credentials = joiValidation.value;


        const hashedPassword = bcrypt.hashSync(credentials.password, parseInt(process.env.BCRYPT_ROUND as string));

        try {
            await this.prismaClient.user.create({
                data: {
                    email: credentials.email,
                    name: credentials.username,
                    password: hashedPassword,
                }
            })
        }catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                if (e.code == "P2002") {
                    if (e.meta?.target === "User_name_key") {
                        throw new BadRequestException("This username is already taken");
                    }
                    if (e.meta?.target === "User_email_key") {
                        throw new BadRequestException("This email is already taken");
                    }
                }
            }
        }


        response.json({message: "User has been created !"});
    }
}

export default LoginController;