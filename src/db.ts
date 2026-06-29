import { DataSource } from "typeorm";

import { configDotenv } from "dotenv";
import { Pozoriste } from "./entities/Pozoriste";
import { Predstava } from "./entities/Predstava";
import { User } from "./entities/User";
import { Rezervacija } from "./entities/Rezervacija";

configDotenv()
export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [
        Pozoriste, Predstava, User, Rezervacija
    ],
    synchronize: true,
    logging: true
})