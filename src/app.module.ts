import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { databaseConfig } from './config/database.config';
import { UserRoleModule } from './user-role/user-role.module';
@Module({
  imports: [UsersModule, TypeOrmModule.forRoot(databaseConfig), UserRoleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
