import { config } from "dotenv"

config();

const database = {
    host: process.env.APP_HOST_DATABASE,
    port: process.env.APP_PORT_DATABASE,
    username: process.env.APP_USER_DATABASE,
    password: process.env.APP_PASS_DATABASE,
    database: process.env.APP_DATABASE
}

export const USER_TABLE = 'tbUsuario'

export const globalVars = {
    database
}