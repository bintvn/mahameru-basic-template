export type UserType = {
    id: string
    name: string
    username: string
    secret: string
}

export class UserService {
    private users: UserType[] = [
        { id: '1', name: 'Bintan', username: 'bintan', secret: '1234' },
        { id: '2', name: 'Her Name', username: 'hername', secret: '4321' },
    ];

    async findMany() {
        return this.users;
    }

    async findOne(id: string) {
        return this.users.find(u => u.id === id) || null;
    }

    async authenticate(username: string, secret: string): Promise<boolean> {
        const user = this.users.find(u => u.username === username) || null;

        if (!user)
            return false

        if (user.secret !== secret)
            return false

        return true
    }
}
