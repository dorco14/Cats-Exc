import { Sequelize } from "sequelize-typescript";
import { Cat } from "src/models/cat/cat.model";
import { Mouse } from "src/models/mouse/mouse.model";

export const getDbConnection = () => {
    return new Sequelize({
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });
}

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = getDbConnection();
            try {
                await sequelize.authenticate();
                console.log('Connection has been established successfully.');
            } catch (error) {
                console.log(error);
            }
            sequelize.addModels([Cat, Mouse]);
            await sequelize.sync();
            return sequelize;
        },
    },
];