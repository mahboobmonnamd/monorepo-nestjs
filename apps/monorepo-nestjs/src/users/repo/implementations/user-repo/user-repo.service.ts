import { Injectable } from '@nestjs/common';
import { User } from '@app/users/domain/entities/user';
import { UserMap } from '@app/users/mappers/UserMap';
import { IUserRepo } from '../../user-repo.interface';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class UserRepoService implements IUserRepo {
  createUser(user: User): Promise<any> {
    // Call mapper to convert domain to repo based schema.
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<User[]> {
    const userResponse = new UserMap().toUserDomain({
      id: uuidv4(),
      name: 'test',
      email: 'test@test.com',
    });
    // const user = userResponse.value.getValue();
    return Promise.resolve([userResponse]);
  }
}
