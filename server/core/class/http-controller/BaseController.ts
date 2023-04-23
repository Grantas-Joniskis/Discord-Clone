import BaseRequestCaller from "./BaseRequestCaller";

/**
 * Every controller should extend this class, you should define the path of the controller inside the constructor arg
 */
abstract class BaseController extends BaseRequestCaller {
    protected path;
    constructor(path: string) {
        super();
        this.path = path;
    }

    public getPath() : string {
        return this.path;
    }

}

export default BaseController;