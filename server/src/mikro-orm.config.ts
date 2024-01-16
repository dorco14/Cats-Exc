import { defineConfig } from "@mikro-orm/postgresql";
import { Migrator } from "@mikro-orm/migrations";

export default defineConfig(
    {
        entities: ['./dist/**/*.model.js'],
        entitiesTs: ['./src/**/*.model.ts'],
        dbName: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        debug: true,
        extensions: [Migrator]
    })