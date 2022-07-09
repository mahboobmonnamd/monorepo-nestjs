import { Field, ObjectType } from '@nestjs/graphql';
import { GetUserDTO as dto } from '../../../usecases/get-all-users/get-user.dto';

@ObjectType()
export class GetUserDTO implements dto {
  @Field()
  userId: string;
  @Field()
  name: string;
  @Field()
  email: string;
  @Field()
  isVerified: boolean;
}
