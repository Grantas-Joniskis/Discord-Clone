import express, {Express} from 'express';
import Router from "./core/class/router/Router";
import dotenv from "dotenv";
import AppError from "./express-middlewares/AppError";
import {PrismaClient} from "@prisma/client";
import {Server as SocketIoServer} from "socket.io";
import http from "http";
import populateRoutes from "./routes";
dotenv.config();

const app: Express = express();
const server = http.createServer(app);


const io = new SocketIoServer(server, {
    cors: {
        origin: "*",
        credentials: true,
    }
});

app.use(express.json({limit: "2mb"}))
app.use(AppError) // Useful for middleware error
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
})

const prismaClient = new PrismaClient();
const router = new Router(app, prismaClient, io);

populateRoutes(router);

server.listen(process.env.HTTP_PORT);
console.log("Server running on port "+process.env.HTTP_PORT)