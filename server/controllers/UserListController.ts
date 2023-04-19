import BaseController from "../core/class/http-controller/BaseController";
import IControllerGetExtension from "../core/class/http-controller/IControllerGetExtension";
import DataBag from "../core/class/http-controller/DataBag";
import e from "express";
import {User} from "@prisma/client";

class UserListController extends BaseController implements IControllerGetExtension {
    async get(data: DataBag, request: e.Request, response: e.Response): Promise<void> {
        const users = await this.prismaClient.user.findMany({
            select: {id: true, name: true},
            where: {
                NOT: {
                    id: (<User>data.user).id
                }
            },
            take: 100,
        })
        response.json(users);
    }
}

export default UserListController;