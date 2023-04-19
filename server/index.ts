import express, {Express} from 'express';
import Router from "./core/class/router/Router";
import LoginController from "./controllers/LoginController";
import dotenv from "dotenv";
import AppError from "./express-middlewares/AppError";
import {PrismaClient} from "@prisma/client";
import RegisterController from "./controllers/RegisterController";
import {Server as SocketIoServer} from "socket.io";
import http from "http";
import PingChannel from "./channels/PingChannel";
import SecurityIoMiddleware from "./channel-middlewares/SecurityIoMiddleware";
import SendMessageController from "./controllers/SendMessageController";
import SecurityHttpMiddleware from "./controller-middlewares/SecurityHttpMiddleware";
import PrivateMessageHistoryController from "./controllers/PrivateMessageHistoryController";
import DisconnectIfNotLogged from "./io-hooks/DisconnectIfNotLogged";
import cors from 'cors';
dotenv.config();

const app: Express = express();
const server = http.createServer(app);



const io = new SocketIoServer(server, {
    cors: {
        origin: "*",
        credentials: true,
    }
});

app.use(cors());
app.use(express.json({limit: "2mb"}))
app.use(AppError) // Useful for middleware error
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})

const prismaClient = new PrismaClient();
const router = new Router(app, prismaClient, io);

router.registerIoHook(new DisconnectIfNotLogged("connection"))

router.registerController(new LoginController("/login"))
router.registerController(new RegisterController("/register"))
router.registerController(new SendMessageController("/private-message/:to"), [new SecurityHttpMiddleware()])
router.registerController(new PrivateMessageHistoryController("/private-message/:id/:page"), [new SecurityHttpMiddleware()])

router.registerChannel(new PingChannel("ping"), [new SecurityIoMiddleware()]);

server.listen(process.env.HTTP_PORT);
console.log("Server running on port "+process.env.HTTP_PORT)