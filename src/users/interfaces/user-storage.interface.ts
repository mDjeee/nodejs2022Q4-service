import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { IUser } from '../interfaces/user.interface';

export interface UsersStore {
  create: (params: CreateUserDto) => Omit<IUser, 'password'>;
  update: (id: string, params: UpdateUserDto) => Omit<IUser, 'password'>;
  findById: (id: string) => Omit<IUser, 'password'> | undefined;
  getAll: () => Omit<IUser, 'password'>[] | [];
  delete: (id: string) => void;
}
