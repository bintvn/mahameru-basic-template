import { NotFoundError } from "@/common/error"

export type User = {
    id: string
    name: string
    username: string
    secret: string
}

export class UserService {
    private users: User[] = [
        { id: '1', name: 'Bintan', username: 'bintan', secret: '1234' },
        { id: '2', name: 'Her Name', username: 'hername', secret: '4321' },
    ];

    async findMany() {
        return this.users;
    }

    async findOne(id: string) {
        const user = this.users.find(u => u.id === id) || null;

        if (!user)
            throw new NotFoundError(`User with id ${id} not found`);

        return user
    }

    async authenticate(username: string, secret: string): Promise<User | null> {
        const user = this.users.find(u => u.username === username) || null;

        if (!user)
            return null

        if (user.secret !== secret)
            return null

        return user
    }
}
