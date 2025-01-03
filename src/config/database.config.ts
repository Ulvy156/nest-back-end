// database.config.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'mysql', // Database type
  host: 'localhost', // Host
  port: 3306, // Port
  username: 'root', // Username
  password: '', // Password
  database: 'nest', // Database name
  entities: [__dirname + '/../**/*.entity{.ts,.js}'], // Entities
  autoLoadEntities: true, // Automatically load entities
  synchronize: true, // Synchronize schema (use only in dev)
};
