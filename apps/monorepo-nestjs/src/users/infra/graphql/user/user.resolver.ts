import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserMap } from '@app/users/mappers/UserMap';
import { GetAllUsersUseCases } from '@app/users/usecases/get-all-users/get-all-users.useCases';
import { CreateUserInput } from '../dto/create-user.dto';
import { GetUserDTO } from '../entity/get-user.dto';
import { CreateUserUseCases } from '@app/users/usecases/create-user/create-user.useCases';

@Resolver()
export class UserResolver {
  constructor(
    private readonly getUsers: GetAllUsersUseCases,
    private readonly createUserUserCase: CreateUserUseCases,
  ) {}

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
    const response = await this.createUserUserCase.execute(createUserInput);
    if (response.isRight()) {
      return true;
    }
    throw response.value.getErrorValue();
  }
}
