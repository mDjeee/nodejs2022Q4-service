import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import InMemoryUsersStorage from './store/users.storage';

@Injectable()
export class UsersService {
  constructor(private storage: InMemoryUsersStorage) {}
  create(createUserDto: CreateUserDto) {
    return this.storage.create(createUserDto);
  }

  findAll() {
    return this.storage.getAll();
  }

  findOne(id: string) {
    return this.storage.findById(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.storage.update(id, updateUserDto);
  }

  remove(id: string) {
    return this.storage.delete(id);
  }
}
