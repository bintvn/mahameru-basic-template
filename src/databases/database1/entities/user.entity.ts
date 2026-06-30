import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')

export class User {
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column({
        type: 'varchar',
        length: 100
    })
    name!: string

    @Column({
        type: 'varchar',
        length: 100
    })
    username!: string

    @Column({
        type: 'text',
        nullable: true
    })
    passwordHash!: string | null

    @Column({
        type: 'text',
        nullable: true
    })
    secret!: string | null
}
