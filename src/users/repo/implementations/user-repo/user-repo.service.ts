import { Injectable } from '@nestjs/common';
import { User } from 'src/users/domain/entities/user';
import { UserMap } from 'src/users/mappers/UserMap';
import { IUserRepo } from '../../user-repo.interface';

@Injectable()
export class UserRepoService implements IUserRepo {
  createUser(user: User): Promise<any> {
    // Call mapper to convert domain to repo based schema.
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<User[]> {
    const user = new UserMap().toDomain({
      name: 'test',
      email: 'test@test.com',
    });
    return Promise.resolve([user]);
  }
}
