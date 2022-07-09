import { Inject, Injectable } from '@nestjs/common';
import { UseCase, AppError, Either, Result, left, right } from '@ddd/ddd';
import { IUserRepo } from '@app/users/repo/user-repo.interface';
import { CreateUserDTO } from './user.dto';
import { User } from '@app/users/domain/entities/user';

type Response = Either<AppError.UnexpectedError | Result<any>, Result<void>>;

@Injectable()
export class CreateUserUseCases
  implements UseCase<CreateUserDTO, Promise<Response>>
{
  constructor(@Inject('UserRepo') private userRepo: IUserRepo) {}
  async execute(createUser: CreateUserDTO): Promise<Response> {
    try {
      const user = User.create(createUser);
      console.log(
        '🚀 ~ file: create-user.useCases.ts ~ line 17 ~ execute ~ user',
        user,
      );
      if (user.isFailure) {
        return left(user);
      }
      const result = await this.userRepo.createUser(user.getValue());
      return right(Result.ok<any>(result));
    } catch (err) {
      return left(new AppError.UnexpectedError(err.message));
    }
  }
}
