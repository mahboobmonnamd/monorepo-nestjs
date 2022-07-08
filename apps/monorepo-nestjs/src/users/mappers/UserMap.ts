import { Result } from '@ddd/ddd';
import { User } from '../domain/entities/user';
import { UserEmail } from '../domain/value-objects/email';

export class UserMap {
  toUserDomain(raw: any): User {
    // create value objects here.
    const emailOrError = UserEmail.create(raw.email);
    // check value objects are created correctly. When we have multiple objects use combine else directly check for failure
    const dtoResult = Result.combine([emailOrError]);
    // if (dtoResult.isFailure) {
    //   return left(Result.fail<void>(dtoResult.getErrorValue()));
    // }

    // Get the value of created objects
    const email = emailOrError.getValue();

    const userOrError = User.create(
      {
        name: raw.name,
        email,
        isVerified: false,
      },
      raw.id,
    );
    return userOrError.getValue();
    // if (userOrError.isFailure) {
    //   return left(Result.fail<void>(dtoResult.getErrorValue()));
    // }
    // return right(Result.ok<User>(userOrError.getValue()));
  }

  toRawUser(user: User): any {
    return {
      name: user.name,
      email: user.email.value,
    };
  }
}
