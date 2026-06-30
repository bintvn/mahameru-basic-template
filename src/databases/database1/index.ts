import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { entities } from './entities';

const dataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT!),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectTimeout: 10000,
    timezone: 'Z',
    entities,
    logging: false,
    synchronize: true,
    dateStrings: false
});

export default dataSource;
