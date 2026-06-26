import { type RouteHandler, MahameruResponse } from 'mahameru'

export const GET: RouteHandler = async (request) => {
    return MahameruResponse.json({
        success: true,
        message: 'Welcome to MahameruJS!'
    });
};
