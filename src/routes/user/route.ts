import type { RouteHandler } from 'mahameru/core'
import { UserController } from '@/modules/user/user.controller.js';

export const GET: RouteHandler = async (request, container, { params }) => {
    const userController = container.get(UserController);

    return userController.getUsers(request);
};
