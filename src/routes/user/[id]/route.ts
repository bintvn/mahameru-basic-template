import type { RouteHandler } from 'mahameru';
import { UserController } from '@/modules/user/controller';

export const GET: RouteHandler = async (request, container, { params }) => {
    const userController = container.get(UserController);

    return userController.getUserById(request, params.id);
};