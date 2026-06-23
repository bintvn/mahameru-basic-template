import { type MahameruMiddlewareContext, type MahameruNext, MahameruResponse } from 'mahameru/core';

async function middleware({ path, method, request }: MahameruMiddlewareContext, next: MahameruNext): Promise<MahameruResponse> {
    const { query } = request
    const isUserRoute = path.startsWith('/user');

    if (isUserRoute && method === 'GET') {
        const secret = '1234'

        if (query.get('secret') !== secret) {
            return MahameruResponse.json(
                { success: false, error: 'Unauthorized', message: 'Invalid secret. Please set the secret query parameter to 1234' },
                { status: 401 }
            );
        }
    }

    const response = await next();

    if (isUserRoute) {
        response.headers = {
            ...response.headers,
            'X-Protected-Route': 'true'
        };
    }

    return response;
};

export default middleware;
