import { Module } from '@nestjs/common';
import { UserResolver } from './infra/graphql/user/user.resolver';
import { UserRepoService } from './repo/implementations/user-repo/user-repo.service';
import { GetAllUsersUseCases } from './usecases/get-all-users/get-all-users.useCases';
import { UserController } from './infra/rest/user/user.controller';
import { CreateUserUseCases } from './usecases/create-user/create-user.useCases';

@Module({
  imports: [],
  providers: [
    UserResolver,
    UserRepoService,
    GetAllUsersUseCases,
    CreateUserUseCases,
    { provide: 'UserRepo', useClass: UserRepoService },
  ],
  controllers: [UserController],
})
export class UsersModule {}
