import { Controller, Get } from '@nestjs/common';
import { UserMap } from '@app/users/mappers/UserMap';
import { GetAllUsersUseCases } from '@app/users/usecases/get-all-users/get-all-users.useCases';
import { GetUserDTO } from '../../graphql/entity/get-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly getUsers: GetAllUsersUseCases) {}

  @Get()
  async getAllUsers(): Promise<GetUserDTO> {
    const response = await this.getUsers.execute();
    const result = await new UserMap().toRawUser(response[0]);
    return result;
  }
}
