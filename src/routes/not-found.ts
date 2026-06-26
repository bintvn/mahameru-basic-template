import { MahameruResponse, type RouteHandler } from 'mahameru'

export const GET: RouteHandler = (request) => {
    return MahameruResponse.json({
        success: false,
        error: 'NOT_FOUND',
        message: 'Route not found',
        path: request.path
    }, { status: 404 });
}
