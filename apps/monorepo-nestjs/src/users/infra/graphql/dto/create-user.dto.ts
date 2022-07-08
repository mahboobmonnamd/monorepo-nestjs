import { CreateUserDTO as createUserDTO } from '@app/users/usecases/create-user/user.dto';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput implements createUserDTO {
  @Field()
  name: string;
  @Field()
  email: string;
  @Field({ nullable: true })
  isVerified?: boolean;
}
