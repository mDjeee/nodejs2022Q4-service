import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import InMemoryUsersStorage from './store/users.storage';

@Module({
  controllers: [UsersController],
  providers: [UsersService, InMemoryUsersStorage],
})
export class UsersModule {}
