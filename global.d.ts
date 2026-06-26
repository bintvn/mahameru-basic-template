import type { User } from './src/modules/user/service';

declare module 'mahameru' {
    interface MahameruRequest {
        user: User | null;
    }
}

export { }; 
