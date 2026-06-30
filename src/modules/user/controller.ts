import { type MahameruRequest, MahameruResponse } from 'mahameru';
import type { UserService } from './service';

export class UserController {
    constructor(private readonly userService: UserService) { }

    async getUsers(request: MahameruRequest) {
        const data = await this.userService.findMany();

        return MahameruResponse.json({ success: true, data });
    }

    async getUserById(request: MahameruRequest, id: string) {
        const data = await this.userService.findOne(id);

        return MahameruResponse.json({ success: true, data });
    }
}
