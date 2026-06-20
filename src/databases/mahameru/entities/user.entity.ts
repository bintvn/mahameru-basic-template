import { BaseEntity } from "mahameru";
import { Column } from "mahameru/database/column";

export class User extends BaseEntity {
    @Column({
        type: 'varchar',
        length: 100
    })
    name: string

    @Column({
        type: 'varchar',
        length: 100
    })
    email: string
}
