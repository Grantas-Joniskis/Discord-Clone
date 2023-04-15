import BaseHttpException from "./BaseHttpException";

class BadRequestException extends BaseHttpException {
    protected statusCode: number = 400;
}

export default BadRequestException;