import { MikroORM } from "@mikro-orm/postgresql";

export const dbConfig = {
    entities: ['./dist/**/*.model.js'],
    entitiesTs: ['./src/**/*.model.ts'],
    dbName: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    debug: true,
} as Parameters<typeof MikroORM.init>[0];