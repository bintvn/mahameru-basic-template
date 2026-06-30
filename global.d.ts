import type { User } from "@/databases/database1/entities";

declare module 'mahameru' {
    interface MahameruRequest {
        user: User | null;
    }
}

export { }; 
