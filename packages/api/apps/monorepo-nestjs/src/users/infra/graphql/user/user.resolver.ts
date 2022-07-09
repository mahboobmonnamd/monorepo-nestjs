import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
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
    if (response.isRight) {
      return response.value.getValue();
    }
    throw response.value.getErrorValue();
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
