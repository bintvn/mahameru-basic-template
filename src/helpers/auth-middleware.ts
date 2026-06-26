import { UnauthorizedError } from "@/common/error";
import { UserService } from "@/modules/user/service";
import type { MahameruMiddlewareContext, MahameruRequest } from "mahameru";

type UserAuth = {
    username: string;
    secret: string;
}

export async function authValidation(request: MahameruRequest, container: MahameruMiddlewareContext['container']) {
    // Example login using query
    // http://localhost:3000/user?auth={"username":"bintan","secret":"1234"}

    const query = request.query
    let userAuthString: null | string | UserAuth = query.get('auth');

    if (!userAuthString)
        throw new UnauthorizedError('Invalid credentials');

    try {
        userAuthString = JSON.parse(userAuthString as string) as UserAuth;
    } catch (error) {
        throw new UnauthorizedError('Invalid credentials');
    }

    const { username, secret } = userAuthString;
    const userService = container.get(UserService);
    const user = await userService.authenticate(username, secret);

    if (!user)
        throw new UnauthorizedError('Invalid credentials');

    request.user = user;

    return
}
