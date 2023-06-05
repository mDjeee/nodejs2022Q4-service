/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { UsersStore } from '../interfaces/user-storage.interface';
import { CreateUserDto } from '../dto/create-user.dto';
import { v4 as uuid } from 'uuid';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';
import { IUser } from '../interfaces/user.interface';

@Injectable()
export class InMemoryUsersStore implements UsersStore {
  private users: User[] = [];

  getAll() {
    return this.users.map(({ password, ...rest }) => rest);
  }

  findById(id: string) {
    const user = this.users.find((user) => user.id === id);
    if (user) {
      const { password, ...rest } = user; // Exclude user password from the result
      return rest;
    }
    return undefined;
  }

  create(params: CreateUserDto) {
    const now = Date.now();
    const newUser: IUser = {
      ...params,
      id: uuid(),
      version: 1,
      createdAt: now,
      updatedAt: now,
    };

    this.users.push(newUser);

    return newUser;
  }

  delete(id: string) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
      return true;
    }
    return false;
  }

  update(id: string, params: UpdateUserDto) {
    const user: IUser = this.users.find((user) => user.id === id);
    if (user) {
      user.password = params.newPassword;
      user.version += 1;
      user.updatedAt = Date.now();
      const { password, ...rest } = user;
      return rest;
    }
    return undefined;
  }
}
