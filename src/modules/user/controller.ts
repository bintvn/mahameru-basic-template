import { type MahameruRequest, MahameruResponse } from 'mahameru';
import type { UserService } from './service';

export class UserController {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    async getUsers(request: MahameruRequest) {
        const data = await this.userService.findMany();
        return MahameruResponse.json({ success: true, data });
    }

    async getUserById(request: MahameruRequest, id: string) {
        const user = await this.userService.findOne(id);

        return MahameruResponse.json({ success: true, data: user });
    }
}
