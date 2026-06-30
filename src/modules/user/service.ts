import { NotFoundError } from "@/common/error"
import { User } from "@/databases/database1/entities";
import { DataSources } from "mahameru";
import { type Repository } from "typeorm";

export class UserService {
    private userRepository: Repository<User>

    constructor({ database1 }: DataSources) {
        this.userRepository = database1.getRepository(User);
    }

    async findMany(page: number = 1, limit: number = 10) {
        const skip = (page - 1) * limit;

        const [data, total] = await this.userRepository.findAndCount({
            skip: skip,
            take: limit,
            order: {
                id: 'DESC',
            },
        });

        const totalPages = Math.ceil(total / limit);

        return {
            data,
            meta: {
                totalItems: total,
                itemCount: data.length,
                itemsPerPage: limit,
                totalPages: totalPages,
                currentPage: page,
            },
        };
    }

    async findOne(id: string) {
        const user = await this.userRepository.findOneBy({ id });

        if (!user)
            throw new NotFoundError(`User with id ${id} not found`);

        return user
    }

    async authenticate(username: string, secret: string): Promise<User | null> {
        const user = await this.userRepository.findOneBy({ username });

        if (!user)
            return null

        if (user.secret !== secret)
            return null

        return user
    }
}
