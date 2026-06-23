import { MahameruError, MahameruHttpServerError, MahameruResponse, type MahameruErrorHandlerContext } from "mahameru/core";
import { UnauthorizedError } from "./common/error.js";

export default async function errorHandler({ error }: MahameruErrorHandlerContext) {
    if (error instanceof UnauthorizedError)
        return MahameruResponse.json({ success: false, error: error.name, message: error.message }, { status: error.statusCode });

    if (error instanceof Error)
        return MahameruResponse.json({ success: false, error: error.name, message: error.message }, { status: 400 });

    console.error(error);

    if (error instanceof MahameruHttpServerError || error instanceof MahameruError)
        return MahameruResponse.json({ success: false, error: error.name, message: error.message }, { status: 500 });

    return MahameruResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
}
