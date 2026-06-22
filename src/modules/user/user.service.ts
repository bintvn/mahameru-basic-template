export class UserService {
    private users = [
        { id: '1', name: 'Bintan' },
        { id: '2', name: 'John Doe' }
    ];

    async findMany() {
        return this.users;
    }

    async findOne(id: string) {
        return this.users.find(u => u.id === id) || null;
    }
}
