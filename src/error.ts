import { type MahameruErrorHandler, MahameruResponse } from "mahameru";
import { NotFoundError, UnauthorizedError } from "./common/error";

const errorHandler: MahameruErrorHandler = async ({ error }) => {
    if (error instanceof UnauthorizedError || error instanceof NotFoundError)
        return MahameruResponse.json({
            success: false,
            error: error.code,
            message: error.message
        }, { status: error.statusCode });

    console.error(error);

    return MahameruResponse.json({
        success: false,
        error: 'Internal Server Error'
    }, { status: 500 });
}

export default errorHandler
