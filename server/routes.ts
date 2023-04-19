import Router from "./core/class/router/Router";
import DisconnectIfNotLogged from "./io-hooks/DisconnectIfNotLogged";
import LoginController from "./controllers/LoginController";
import RegisterController from "./controllers/RegisterController";
import SendMessageController from "./controllers/SendMessageController";
import SecurityHttpMiddleware from "./controller-middlewares/SecurityHttpMiddleware";
import PrivateMessageHistoryController from "./controllers/PrivateMessageHistoryController";
import UserListController from "./controllers/UserListController";
import UserOnlineController from "./controllers/UserOnlineController";
import PingChannel from "./channels/PingChannel";
import SecurityIoMiddleware from "./channel-middlewares/SecurityIoMiddleware";

export default function populateRoutes(router: Router) {

    // IO Hooks
    router.registerIoHook(new DisconnectIfNotLogged("connection"))

    // HTTP Routes
    router.registerController(new LoginController("/login"))
    router.registerController(new RegisterController("/register"))
    router.registerController(new SendMessageController("/private-message/:to"), [new SecurityHttpMiddleware()])
    router.registerController(new PrivateMessageHistoryController("/private-message/:id/:page"), [new SecurityHttpMiddleware()])
    router.registerController(new UserListController("/users"), [new SecurityHttpMiddleware()])
    router.registerController(new UserOnlineController("/user/:user/is-online"), [new SecurityHttpMiddleware()])

    // IO Channels
    router.registerChannel(new PingChannel("ping"), [new SecurityIoMiddleware()]);

}