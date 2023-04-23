/**
 * Used to exit a controller and throw formatted errors, with custom http error code.
 * If an error is thrown, and do not implement BaseHttpException, the default status code will be 500.
 */
abstract class BaseHttpException extends Error {
    protected abstract statusCode: number;

    public getStatusCode() : number {
        return this.statusCode;
    }

}

export default BaseHttpException;