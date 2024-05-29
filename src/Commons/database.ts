import { DataSource, DataSourceOptions } from 'typeorm';
import { globalVars } from './SetupVariable';
import { UserCreation1686425518834 } from '../Migrations/1686425518834-userCreation';

console.log([__dirname + '/**/*.entity.js']);

export const DatabaseConfig: DataSourceOptions = {
  type: 'mysql',
  host: globalVars.database.host || 'localhost',
  port: Number(globalVars.database.port) || 3306,
  username: globalVars.database.username || 'root',
  password: globalVars.database.password || 'root',
  entities: [__dirname + '/**/*.entity.js'],
  synchronize: false,
  migrations: [],
};

export const DatabaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const database = new DataSource({
        type: 'mysql',
        host: globalVars.database.host || 'localhost',
        port: Number(globalVars.database.port) || 3306,
        username: globalVars.database.username || 'root',
        password: globalVars.database.password || 'root',
        entities: [__dirname + '/**/*.entity.js'],
        synchronize: false,
      });

      return database.initialize();
    },
  },
];

export const datasource = new DataSource({
  type: 'mysql',
  host: globalVars.database.host || 'localhost',
  port: Number(globalVars.database.port) || 3306,
  username: globalVars.database.username || 'root',
  password: globalVars.database.password || 'root',
  database: globalVars.database.database,
  entities: [__dirname + '/**/*.entity.js'],
  synchronize: false,
  migrations: [UserCreation1686425518834],
});
