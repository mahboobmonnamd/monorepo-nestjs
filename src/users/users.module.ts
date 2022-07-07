import { Module } from '@nestjs/common';
import { UserResolver } from './infra/graphql/user/user.resolver';
import { UserRepoService } from './repo/implementations/user-repo/user-repo.service';
import { GetAllUsersUseCases } from './usecases/get-all-users/get-all-users.useCases';

@Module({
  imports: [],
  providers: [
    UserResolver,
    UserRepoService,
    GetAllUsersUseCases,
    { provide: 'UserRepo', useClass: UserRepoService },
  ],
})
export class UsersModule {}
