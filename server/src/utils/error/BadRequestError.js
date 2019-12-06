import ApplicationError from "./ApplicationError";

export default class BadRequestError extends ApplicationError{

    constructor(message){

        message = message || "Request contains incorrect syntax";

        super(message, 400);

    }

}
