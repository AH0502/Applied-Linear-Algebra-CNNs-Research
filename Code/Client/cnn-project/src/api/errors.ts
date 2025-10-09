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

export class UnsupportedMediaType extends Error {
    statusCode: number;
    constructor() {
        super();
        Object.setPrototypeOf(this, Error.prototype)
        this.message = `Unacceptable file type. Accepted file types:\n
                        JPEG, JPG, PNG`
        this.name = "UnsupportedMediaType"
        this.statusCode = 415
    }
}

export class UnprocessableEntity extends Error {
    statusCode: number;
    constructor() {
        super();
        Object.setPrototypeOf(this, Error.prototype)
        this.message = `Malformed data. Image must be n x n.`
        this.name = "UnprocessableEntity"
        this.statusCode = 422
    }
}