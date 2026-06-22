import { type MahameruMiddlewareContext, type MahameruNext, MahameruResponse } from 'mahameru/core';

async function middleware({ path, method, request }: MahameruMiddlewareContext, next: MahameruNext): Promise<MahameruResponse> {
    const { query } = request

    if (path.startsWith('/user') && method === 'GET') {
        const secret = '1234'

        if (query.get('secret') !== secret) {
            return MahameruResponse.json(
                { success: false, error: 'Unauthorized' },
                { status: 401 }
            );
        }
    }

    if (path === '/' && method === 'GET') {
        return MahameruResponse.json({
            success: true,
            message: 'Intercepted by middleware'
        });
    }

    const response = await next();

    if (path.startsWith('/user')) {
        response.headers = {
            ...response.headers,
            'X-Protected-Route': 'true'
        };
    }

    return response;
};

export default middleware;
