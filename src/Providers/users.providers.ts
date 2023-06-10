import { User } from "../Entities/user.entity";
import { DataSource } from "typeorm";

export const userProviders = [
    {
        provide: 'USERS_REPOSITORY',
        useFactory: (datasource: DataSource) => datasource.getRepository(User),
        inject: ['DATA_SOURCE']
    }
]