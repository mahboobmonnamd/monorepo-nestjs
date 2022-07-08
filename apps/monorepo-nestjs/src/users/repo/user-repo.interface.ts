import { Result } from '@ddd/ddd';
import { User } from '../domain/entities/user';

export interface IUserRepo {
  createUser(user: User): Promise<any>;
  findAll(): any;
}
