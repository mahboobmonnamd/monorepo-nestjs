import { Module } from '@nestjs/common';
import { UserResolver } from './infra/graphql/user/user.resolver';
import { UserRepoService } from './repo/implementations/user-repo/user-repo.service';

@Module({
  imports: [],
  providers: [UserResolver, UserRepoService],
})
export class UsersModule {}
