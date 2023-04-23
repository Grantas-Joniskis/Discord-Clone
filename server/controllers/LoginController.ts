import e from "express";
import BaseController from "../core/class/http-controller/BaseController";
import Joi from "joi";
import IControllerPostExtension from "../core/class/http-controller/IControllerPostExtension";
import RequestHelper from "../core/class/helpers/RequestHelper";
import NotFoundException from "../core/class/http-exceptions/NotFoundRequestException";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {JwtUser} from "../types/JwtUser";
import DataBag from "../core/class/http-controller/DataBag";

/**
 * Login controller, used when user wants to log in, provide a bearer jwt token, valid for 3 hours.
 */
class LoginController extends BaseController implements IControllerPostExtension {
    async post(data: DataBag, request: e.Request, response: e.Response) {
        // http body parameters validation
        const schemaLogin = Joi.object({
            email: Joi.string()
                .email()
                .required(),
            password: Joi.string()
                .required(),
        })
        const joiValidation = schemaLogin.validate(request.body)
        // Throw an 403 error if the validation is not successful
        RequestHelper.HandleJoiValidation(joiValidation);

        const credentials = joiValidation.value;

        // Fetch the user from the database
        const user = await this.prismaClient.user.findUnique({where: {email: credentials.email}})
        if (user == null) {
            throw new NotFoundException("User was not found !");
        }


        // check the password:
        const bcryptResult = await bcrypt.compare(credentials.password, user.password);
        if (!bcryptResult) {
            throw new NotFoundException("User was not found !");
        }

        const jwtUser : JwtUser = {
            id: user.id
        }
        // Create and sign the token
        const token = jwt.sign(jwtUser, <string>process.env.JWT_SECRET, { expiresIn: 60*60*24*30 }) // Expire in 30 days

        response.json({
            bearer: token,
            user: {
                id: user.id,
                email: user.email,
                username: user.username,
            }
        })
    }
}

export default LoginController;