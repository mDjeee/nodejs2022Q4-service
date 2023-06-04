import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { IUser } from './user.interface';

export interface UsersStore {
  create: (params: CreateUserDto) => IUser;
  update: (user: IUser, params: UpdateUserDto) => IUser;
  findById: (id: string) => IUser | undefined;
  getAll: () => IUser[] | [];
  delete: (id: string) => void;
}
