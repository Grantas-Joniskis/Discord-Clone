import BaseHttpException from "./BaseHttpException";

class UnauthorizedRequestException extends BaseHttpException {
    protected statusCode: number = 403;
}

export default UnauthorizedRequestException;