import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserMap } from 'src/users/mappers/UserMap';
import { GetAllUsersUseCases } from 'src/users/usecases/get-all-users/get-all-users.useCases';
import { CreateUserInput } from '../dto/create-user.dto';
import { GetUserDTO } from '../entity/get-user.dto';

@Resolver()
export class UserResolver {
  constructor(private readonly getUsers: GetAllUsersUseCases) {}

  @Query(() => GetUserDTO)
  async getAllUsers(): Promise<GetUserDTO> {
    const response = await this.getUsers.execute();
    const user = await new UserMap().toRawUser(response.value.getValue()[0]);
    return user;
  }

  @Mutation(() => Boolean)
  async createUser(
    @Args('createUserData') createUserInput: CreateUserInput,
  ): Promise<boolean> {
    return true;
  }
}
