import { Inject, Injectable } from '@nestjs/common';
import { IUserRepo } from '@app/users/repo/user-repo.interface';

@Injectable()
export class GetAllUsersUseCases {
  constructor(@Inject('UserRepo') private userRepo: IUserRepo) {}
  execute() {
    return this.userRepo.findAll();
  }
}
