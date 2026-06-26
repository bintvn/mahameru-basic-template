import type { RouteHandler } from 'mahameru'
import { UserController } from '@/modules/user/controller';

export const GET: RouteHandler = async (request, container) => {
    const userController = container.get(UserController);

    return userController.getUsers(request);
};
