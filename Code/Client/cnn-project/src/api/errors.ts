export class InternalServerError extends Error {
    statusCode: number;
    constructor() {
        super();
        Object.setPrototypeOf(this, Error.prototype)
        this.message = "The server has encountered an unexpected error. Try again later."
        this.name = "InternalServerError"
        this.statusCode = 500
    }
}