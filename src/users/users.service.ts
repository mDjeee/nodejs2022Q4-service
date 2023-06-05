import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InMemoryDB } from 'src/db/db';

@Injectable()
export class UsersService {
  constructor(private storage: InMemoryDB) {}

  create(createUserDto: CreateUserDto) {
    return this.storage.create(createUserDto);
  }

  findAll() {
    return this.storage.getAllUsers();
  }

  findOne(id: string) {
    return this.storage.findUserById(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.storage.updateUser(id, updateUserDto);
  }

  remove(id: string) {
    return this.storage.deleteUser(id);
  }
}
