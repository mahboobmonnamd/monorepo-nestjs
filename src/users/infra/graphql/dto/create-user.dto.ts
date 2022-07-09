import { CreateUserDTO as createUserDTO } from 'src/users/usecases/create-user/user.dto';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserDTO implements createUserDTO {
  @Field()
  userId: string;
  @Field()
  name: string;
  @Field()
  email: string;
  @Field()
  isVerified: boolean;
}
