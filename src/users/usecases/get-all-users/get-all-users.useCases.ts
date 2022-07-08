import { User } from '@app/users/domain/entities/user';
import { UserMap } from '@app/users/mappers/UserMap';
import { Either, Result, right } from '@ddd/ddd';
import { Inject, Injectable } from '@nestjs/common';
import { IUserRepo } from 'src/users/repo/user-repo.interface';

type Response = Either<Result<any> | Result<void>, Result<User[]>>;
@Injectable()
export class GetAllUsersUseCases {
  constructor(@Inject('UserRepo') private userRepo: IUserRepo) {}
  async execute(): Promise<Response> {
    const users = await this.userRepo.findAll();
    return right(Result.ok<User[]>(users));
  }
}
