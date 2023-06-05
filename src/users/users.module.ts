import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { InMemoryUsersStore } from './store/user.storage';

@Module({
  controllers: [UsersController],
  providers: [UsersService, InMemoryUsersStore],
})
export class UsersModule {}
