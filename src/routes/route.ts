import { type RouteHandler, MahameruResponse } from 'mahameru/core'

export const GET: RouteHandler = async (request) => {
    return MahameruResponse.json({
        success: true,
        message: 'Welcome to MahameruJS!'
    });
};
