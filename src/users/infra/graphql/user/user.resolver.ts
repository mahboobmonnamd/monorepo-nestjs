import { Query, Resolver } from '@nestjs/graphql';
import { UserMap } from 'src/users/mappers/UserMap';
import { GetAllUsersUseCases } from 'src/users/usecases/get-all-users/get-all-users.useCases';
import { GetUserDTO } from '../entity/get-user.dto';

@Resolver()
export class UserResolver {
  constructor(private readonly getUsers: GetAllUsersUseCases) {}

  @Query(() => GetUserDTO)
  async getAllUsers(): Promise<GetUserDTO> {
    const response = await this.getUsers.execute();
    const result = await new UserMap().toRawUser(response[0]);
    return result;
  }
}
