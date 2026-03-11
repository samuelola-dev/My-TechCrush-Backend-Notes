import { Sequelize } from "sequelize";
import { configuration } from "./env";

export const sequelize = new Sequelize('database', 'username', 'password', {
    host: configuration.DB_HOST,
    dialet: configuration.DB_DIALET,
    logging: configuration.NODE_ENV === 'development' ? console.log : false,
    pool: {max: 10, min: 10, require: 30000, idle: 10000}
});







