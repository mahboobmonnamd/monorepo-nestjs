import { Injectable } from '@nestjs/common';
import { User } from '@app/users/domain/entities/user';
import { IUserRepo } from '../../user-repo.interface';
import { v4 as uuidv4 } from 'uuid';
import { Result } from '@ddd/ddd';
@Injectable()
export class UserRepoService implements IUserRepo {
  createUser(user: User): Promise<any> {
    // convert domain to repo based schema.
    // TODO: is it ok to use mapper or need to have DTO for db and use mapper
    return Promise.resolve(true);
  }
  findAll(): Promise<Result<User>[]> {
    const userResponse = User.create(
      {
        name: 'test',
        email: 'test@test.com',
      },
      uuidv4(),
    );
    // const user = userResponse.value.getValue();
    return Promise.resolve([userResponse]);
  }
}
