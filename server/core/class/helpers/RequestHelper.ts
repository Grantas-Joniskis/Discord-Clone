import Joi from "joi";
import BadRequestException from "../http-exceptions/BadRequestException";

class RequestHelper {
    /**
     * Base response format for errors
     * @param message
     * @constructor
     */
    public static CreateErrorResponse(message: string) {
        return {
            message,
        }
    }

    /**
     * Throw an error if the schema body from joi lib is not validated, and display its error
     * @param joiValidation
     * @constructor
     */
    public static HandleJoiValidation(joiValidation: Joi.ValidationResult) {
        if (joiValidation.error !== undefined) {
            throw new BadRequestException(joiValidation.error.message);
        }
    }
}

export default RequestHelper;