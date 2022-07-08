import { Inject, Injectable } from '@nestjs/common';
import { UseCase, AppError, Either, Result, left, right } from '@ddd/ddd';
import { IUserRepo } from 'src/users/repo/user-repo.interface';
import { CreateUserDTO } from './user.dto';
import { UserEmail } from 'src/users/domain/value-objects/email';
import { User } from 'src/users/domain/entities/user';

type Response = Either<AppError.UnexpectedError | Result<any>, Result<void>>;

@Injectable()
export class CreateUserUseCases
  implements UseCase<CreateUserDTO, Promise<Response>>
{
  constructor(@Inject('UserRepo') private userRepo: IUserRepo) {}
  async execute(createUser: CreateUserDTO): Promise<Response> {
    try {
      // create value objects here.
      const emailOrError = UserEmail.create(createUser.email);
      // check value objects are created correctly. When we have multiple objects use combine else directly check for failure
      const dtoResult = Result.combine([emailOrError]);
      if (dtoResult.isFailure) {
        return left(Result.fail<void>(dtoResult.getErrorValue()));
      }

      // Get the value of created objects
      const email = emailOrError.getValue();

      const userOrError = User.create({
        name: createUser.name,
        email,
        isVerified: false,
      });
      if (userOrError.isFailure) {
        return left(Result.fail<void>(dtoResult.getErrorValue()));
      }
      const result = await this.userRepo.createUser(userOrError.getValue());
      return right(Result.ok<any>(result));
    } catch (err) {
      return left(new AppError.UnexpectedError(err.message));
    }
  }
}
