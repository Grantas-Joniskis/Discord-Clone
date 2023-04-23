import {Application, Request, Response} from "express";
import InterfaceHelper from "../helpers/InterfaceHelper";
import IControllerGetExtension from "../http-controller/IControllerGetExtension";
import BaseController from "../http-controller/BaseController";
import IControllerPostExtension from "../http-controller/IControllerPostExtension";
import {PrismaClient} from "@prisma/client";
import RequestHelper from "../helpers/RequestHelper";
import BaseHttpMiddleware from "../middleware/BaseHttpMiddleware";
import BaseHttpException from "../http-exceptions/BaseHttpException";
import DataBag from "../http-controller/DataBag";
import {Server as SocketIoServer, Socket} from "socket.io";
import BaseChannel from "../io/BaseChannel";
import BaseIoMiddleware from "../middleware/BaseIoMiddleware";
import BaseRequestCaller from "../http-controller/BaseRequestCaller";
import BaseIoHook from "../io/BaseIoHook";

/**
 * The router is used to register all the controllers, middlewares and io channels and io middlewares.
 */
class Router {
    private readonly _app : Application;
    private readonly _prismaClient : PrismaClient;
    private readonly _io : SocketIoServer;
    constructor(app: Application, prismaClient: PrismaClient, io: SocketIoServer) {
        this._app = app;
        this._prismaClient = prismaClient;
        this._io = io;
    }

    private initCallerMember(caller: BaseRequestCaller) {
        caller.setPrismaClient(this._prismaClient);
        caller.setIoServer(this._io);
    }

    private handleControllerException(err: Error, _: Request, response: Response) {
        console.log(err)
        if (err instanceof BaseHttpException) {
            response.status(err.getStatusCode());
        }
        else {
            response.status(500);
        }
        response.json(RequestHelper.CreateErrorResponse(err.message));
    }

    private async handleControllerCall(request: Request, response: Response, middlewares: Array<BaseHttpMiddleware>, controllerFunction: (data: DataBag, ...args: [Request, Response]) => Promise<void>) {
        const localDataRequest = new DataBag();
        localDataRequest.localData = {};
        for (const middleware of middlewares) {
            const internalMiddlewarePass = await middleware.handle(localDataRequest, request, response).catch(err => this.handleControllerException(err, request, response));
            if (!internalMiddlewarePass)
                return;
        }

        controllerFunction(localDataRequest, request, response).catch(err => this.handleControllerException(err, request, response))
    }

    public registerController(controller: BaseController, middlewares: Array<BaseHttpMiddleware> = new Array<BaseHttpMiddleware>()){
        console.log("Register controller at path " + controller.getPath());
        this.initCallerMember(controller);
        middlewares.forEach(middleware => this.initCallerMember(middleware))
        if (InterfaceHelper.implementsTKeys<IControllerGetExtension>(controller, ["get"])) {
            this._app.get(controller.getPath(), (request: Request, response: Response) =>
                this.handleControllerCall(
                    request,
                    response,
                    middlewares,
                    (data: DataBag, request: Request, response: Response) => controller.get(data, request, response)
                )
            )
        }
        if (InterfaceHelper.implementsTKeys<IControllerPostExtension>(controller, ["post"])) {
            this._app.post(controller.getPath(), (request: Request, response: Response) =>
                this.handleControllerCall(
                    request,
                    response,
                    middlewares,
                    (data: DataBag, request: Request, response: Response) => controller.post(data, request, response)
                )
            )
        }
    }

    private handleIoChannelException(err: Error, socket: Socket) {
        console.log(err);
        socket.emit("server-error", err.message);
    }

    public registerIoHook(ioHook: BaseIoHook) {
        this.initCallerMember(ioHook);
        this._io.on(ioHook.getEventName(), socket => {
            ioHook.handle(socket)
        })
    }
    public registerChannel(channel: BaseChannel, middlewares: Array<BaseIoMiddleware> = new Array<BaseIoMiddleware>()) {
        console.log("Register channel : " + channel.getChannel());
        this.initCallerMember(channel);
        middlewares.forEach(middleware => this.initCallerMember(middleware));
        const dataBag = new DataBag();
        this._io.on("connection", (socket) => {
            socket.on(channel.getChannel(), async (...args) => {
                for (const middleware of middlewares) {
                    if (!await middleware.handle(dataBag, socket).catch((err) => this.handleIoChannelException(err, socket))) {
                        return;
                    }
                }
                channel.handle(dataBag, socket, ...args);
            })
        })
    }
}

export default Router;