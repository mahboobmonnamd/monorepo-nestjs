import { User } from '@app/users/domain/entities/user';
import { Either, left, Result, right } from '@ddd/ddd';
import { Inject, Injectable } from '@nestjs/common';
import { IUserRepo } from '@app/users/repo/user-repo.interface';
import { GetUserDTO } from './get-user.dto';
import { UserMap } from '@app/users/mappers/UserMap';

type Response = Either<Result<any> | Result<void>, Result<GetUserDTO[]>>;
@Injectable()
export class GetAllUsersUseCases {
  constructor(@Inject('UserRepo') private userRepo: IUserRepo) {}
  async execute(): Promise<Response> {
    const users = await this.userRepo.findAll();
    // To ensure we have the right domain model, we can create the domain model here.
    // TODO: Check do we need domain model creation here. then send to mapper.
    const userModel = User.create(users[0]);
    if (userModel.isFailure) {
      return left(Result.fail('Domain model creation failed'));
    }
    const response = new UserMap().toRawUser(userModel.getValue());
    return right(Result.ok<GetUserDTO[]>(response));
  }
}
