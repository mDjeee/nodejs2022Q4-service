import { Injectable } from '@nestjs/common';
import { UsersStore } from '../interfaces/users-storage.interface';
import { IUser } from '../interfaces/user.interface';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
class InMemoryUsersStorage implements UsersStore {
  private users: IUser[] = [];

  create(params: CreateUserDto) {
    const date = Date.now();

    const newUser: IUser = {
      ...params,
      id: uuid(),
      version: 1,
      createdAt: date,
      updatedAt: date,
    };

    this.users.push(newUser);

    return newUser;
  }

  getAll() {
    return this.users;
  }

  findById(id: string) {
    return this.users.find((user) => user.id === id);
  }

  update(id: string, params: UpdateUserDto) {
    const updatedAt = Date.now();
    const password = params.newPassword;
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return Object.assign(user, {
          password,
          updatedAt,
          version: user.version + 1,
        });
      }
      return user;
    });
    return this.findById(id);
  }

  delete(id: string) {
    console.log(this.users);
    this.users = this.users.filter((user) => user.id === id);
    console.log(this.users);
  }
}

export default InMemoryUsersStorage;
