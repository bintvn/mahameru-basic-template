import type { MahameruMiddleware, ProtectedRoute } from 'mahameru';
import { authValidation } from './helpers/auth-middleware';

export const protectedRoutes: ProtectedRoute = [
    '/user',
    '/me'
];

const middleware: MahameruMiddleware = async (context, isProtectedRoute, next) => {
    try {
        const { request, container } = context;

        // Example login using query
        // http://localhost:3000/user?auth={"username":"bintan","secret":"1234"}
        if (isProtectedRoute)
            await authValidation(request, container);

        // Other middleware logic...

        return await next();
    } catch (error) {
        throw error;
    }
};

export default middleware;
