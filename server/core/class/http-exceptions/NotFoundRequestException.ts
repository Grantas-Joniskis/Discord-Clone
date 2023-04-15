import BaseHttpException from "./BaseHttpException";

class NotFoundRequestException extends BaseHttpException {
    protected statusCode: number = 404;
}

export default NotFoundRequestException;