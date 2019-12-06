import ApplicationError from "./ApplicationError";

export default class ResourceNotFoundError extends ApplicationError{

    constructor(message, resource = '') {

        message = message || `Resource ${resource} was not found`;
        super(message, 404);

    }


}

