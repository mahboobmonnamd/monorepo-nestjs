import { Injectable } from '@nestjs/common';
import { User } from '@app/users/domain/entities/user';
import { IUserRepo } from '../../user-repo.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserRepoService implements IUserRepo {
  createUser(user: User): Promise<any> {
    // convert domain to repo based schema.
    // TODO: is it ok to use mapper or need to have DTO for db and use mapper
    return Promise.resolve(true);
  }
  findAll(): any {
    // fetch data from db and send it
    /* 
     Database should be depended on Domain not the other way. 
     For no sql may have one document which have all data, for sql we may need multiple tables. 
    So do all the calls here.
    */
    return Promise.resolve([
      {
        name: 'test',
        email: 'test@test.com',
        id: uuidv4(),
      },
    ]);
  }
}
