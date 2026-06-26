export class UnauthorizedError extends Error {
    statusCode: number
    code: string

    constructor(message: string) {
        super(message);
        this.name = 'UnauthorizedError';
        this.code = 'UNAUTHORIZED';
        this.statusCode = 401;

        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }
}

export class NotFoundError extends Error {
    statusCode: number
    code: string

    constructor(message: string) {
        super(message);
        this.name = 'NotFoundError';
        this.code = 'NOT_FOUND';
        this.statusCode = 404;

        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}
