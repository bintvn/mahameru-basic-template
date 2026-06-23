import { type MahameruMiddlewareContext, type MahameruNext, MahameruResponse } from 'mahameru/core';
import { authValidation } from './helpers/auth-middleware.js';

const protectedRoutes = ['/user'];

export default async function middleware({ request, path, container, params }: MahameruMiddlewareContext, next: MahameruNext): Promise<MahameruResponse> {
    try {
        if (protectedRoutes.some(route => path.startsWith(route)))
            await authValidation(request, path, container, params, protectedRoutes);

        // Other middleware logic...

        return await next();
    } catch (error) {
        throw error
    }
};
