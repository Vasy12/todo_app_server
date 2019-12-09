export default class ApplicationError extends Error{

    constructor(message) {
            super(message);
            this.status = status;
            this.name = this.constructor.name;
            Error.captureStackTrace(this, this.constructor);
    }

}