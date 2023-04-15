abstract class BaseHttpException extends Error {
    protected abstract statusCode: number;

    public getStatusCode() : number {
        return this.statusCode;
    }

}

export default BaseHttpException;