import { Query, Resolver } from '@nestjs/graphql';
import { UserMap } from 'src/users/mappers/UserMap';
import { UserRepoService } from 'src/users/repo/implementations/user-repo/user-repo.service';
import { GetUserDTO } from '../entity/get-user.dto';

@Resolver()
export class UserResolver {
  constructor(private getUsers: UserRepoService) {}

  @Query(() => GetUserDTO)
  async getAllUsers(): Promise<GetUserDTO> {
    const response = await this.getUsers.findAll();
    const result = await new UserMap().toRawUser(response[0]);
    return result;
  }
}
