import BaseHttpMiddleware from "../core/class/middleware/BaseHttpMiddleware";
import e from "express";
import UnauthorizedRequestException from "../core/class/http-exceptions/UnauthorizedRequestException";
import jwt from "jsonwebtoken";
import DataBag from "../core/class/controller/DataBag";
import BadRequestException from "../core/class/http-exceptions/BadRequestException";
import {JwtUser} from "../types/JwtUser";
import NotFoundRequestException from "../core/class/http-exceptions/NotFoundRequestException";

class SecurityHttpMiddleware extends BaseHttpMiddleware {
    async handle(data: DataBag, request: e.Request, response: e.Response): Promise<boolean> {
        const auth = request.header("authorization")
        if (auth === undefined) {
            throw new UnauthorizedRequestException("You need to log-in to access this resource");
        }
        const token = auth.split(new RegExp("Bearer ", "i"))[1]
        if (token === undefined) {
            throw new UnauthorizedRequestException("You need to log-in to access this resource");
        }


        // Validate the token
        let jwtPayload : JwtUser;
        try {
            jwtPayload = <JwtUser>jwt.verify(token, <string>process.env.JWT_SECRET)
        }catch (err : unknown) {
            throw new BadRequestException("Error while validating json web token: "+ (<Error>err).message)
        }

        const prismaUser = await this.prismaClient.user.findUnique({where: {id: jwtPayload.id}})

        if (prismaUser === null) {
            throw new NotFoundRequestException("Error while validating json web token: User linked to that token no longer exist !")
        }


        data.user = prismaUser;

        return true;
    }
}

export default SecurityHttpMiddleware;