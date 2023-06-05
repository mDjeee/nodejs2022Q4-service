import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { InMemoryDB } from 'src/db/db';

@Module({
  controllers: [UsersController],
  providers: [UsersService, InMemoryDB],
})
export class UsersModule {}
