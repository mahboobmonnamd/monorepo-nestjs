import { User } from '../domain/entities/user';

export interface IUserRepo {
  createUser(user: User): Promise<any>;
  findAll(): Promise<User[]>;
}
