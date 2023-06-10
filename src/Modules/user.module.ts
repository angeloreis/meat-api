import { Module } from '@nestjs/common';
import { UserController } from '../Controllers/user.controller';
import { UserService } from '../Services/user.service';
import { DatabaseModule } from './database.module';
import { userProviders } from '../Providers/users.providers';

@Module({
  imports: [DatabaseModule],
  providers: [UserService, ...userProviders],
  controllers: [UserController]
})
export class UserModule {}
