import Joi from "joi";
import BadRequestException from "../http-exceptions/BadRequestException";

class RequestHelper {
    public static CreateErrorResponse(message: string) {
        return {
            message,
        }
    }
    public static HandleJoiValidation(joiValidation: Joi.ValidationResult) {
        if (joiValidation.error !== undefined) {
            throw new BadRequestException(joiValidation.error.message);
        }
    }
}

export default RequestHelper;