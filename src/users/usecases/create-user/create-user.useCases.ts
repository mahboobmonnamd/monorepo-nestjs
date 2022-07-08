import { Inject, Injectable } from '@nestjs/common';
import { UseCase, AppError, Either, Result, left, right } from '@ddd/ddd';
import { IUserRepo } from 'src/users/repo/user-repo.interface';
import { CreateUserDTO } from './user.dto';
import { UserMap } from '@app/users/mappers/UserMap';

type Response = Either<AppError.UnexpectedError | Result<any>, Result<void>>;

@Injectable()
export class CreateUserUseCases
  implements UseCase<CreateUserDTO, Promise<Response>>
{
  constructor(@Inject('UserRepo') private userRepo: IUserRepo) {}
  async execute(createUser: CreateUserDTO): Promise<Response> {
    try {
      const user = new UserMap().toUserDomain(createUser);
      console.log("🚀 ~ file: create-user.useCases.ts ~ line 17 ~ execute ~ user", user)
      // const result = await this.userRepo.createUser(user);
      return right(Result.ok<any>("result"));
    } catch (err) {
      return left(new AppError.UnexpectedError(err.message));
    }
  }
}
