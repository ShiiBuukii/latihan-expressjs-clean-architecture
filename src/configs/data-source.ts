import { DataSource } from "typeorm";
import dotenv from "dotenv"
import { Product } from "../features/product/entities/productEntity";
import { User } from "../features/authentication/entities/userEntity";


dotenv.config()


export const AppDataSource = new DataSource({
    type:"postgres",
    host: process.env.HOST,
    port: parseInt(`${process.env.PORT}`),
    username: process.env.USER,
    password: process.env.PASS,
    database: process.env.DBNAME,
    synchronize: true,
    logging:false,
    entities: [Product, User],
    subscribers:[],
    migrations: []
})