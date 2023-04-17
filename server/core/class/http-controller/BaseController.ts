import BaseRequestCaller from "./BaseRequestCaller";

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