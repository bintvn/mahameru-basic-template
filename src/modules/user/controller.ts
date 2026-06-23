import { MahameruRequest, MahameruResponse } from 'mahameru/core';
import { UserService } from './service.js';

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

        if (!user)
            return MahameruResponse.json({ success: false, error: 'User tidak ditemukan' }, { status: 404 });

        return MahameruResponse.json({ success: true, data: user });
    }
}
