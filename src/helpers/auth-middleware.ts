import { UnauthorizedError } from "@/common/error.js";
import { UserService } from "@/modules/user/service.js";
import type { MahameruMiddlewareContext, MahameruRequest } from "mahameru/core";

type UserAuth = {
    username: string;
    secret: string;
}

export async function authValidation(request: MahameruRequest, path: string, container: MahameruMiddlewareContext['container'], params: MahameruMiddlewareContext['params'], protectedRoutes: string[]) {
    // Example login using query
    // http://localhost:3000/user?auth={"username":"bintan","secret":"1234"}

    const query = request.query
    let userAuthString: null | string | UserAuth = query.get('auth');

    if (!userAuthString)
        throw new UnauthorizedError('Unauthorized');

    try {
        userAuthString = JSON.parse(userAuthString as string) as UserAuth;
    } catch (error) {
        throw new UnauthorizedError('Unauthorized');
    }

    const { username, secret } = userAuthString;
    const userService = container.get(UserService);
    const result = await userService.authenticate(username, secret);

    if (!result)
        throw new UnauthorizedError('Unauthorized');

    return
}
