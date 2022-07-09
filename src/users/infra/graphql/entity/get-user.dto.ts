import { Field, ObjectType } from '@nestjs/graphql';
import { CreateUserDTO as userDTO } from '../dto/create-user.dto';

@ObjectType()
export class GetUserDTO implements userDTO {
  @Field()
  userId: string;
  @Field()
  name: string;
  @Field()
  email: string;
  @Field()
  isVerified: boolean;
}
