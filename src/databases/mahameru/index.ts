import { DataSource, SnakeNamingStrategy } from "mahameru/database";
import { entities } from "./entities/index.js";

const dataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'mahameru',
    connectTimeout: 10000,
    timezone: 'Z',
    entities,
    logging: false,
    synchronize: false,
    dateStrings: false,
    namingStrategy: new SnakeNamingStrategy()
});

export default dataSource
