import { Entity, Result, UniqueEntityID } from '@ddd/ddd';
import { UserEmail } from '../value-objects/email';
import { UserId } from '../value-objects/userId';

interface UserDomainProps {
  name: string;
  email: UserEmail;
  isVerified?: boolean;
}

interface UserProps {
  name: string;
  email: string;
  isVerified?: boolean;
}

export class User extends Entity<UserDomainProps> {
  private constructor(props: UserDomainProps, id?: UniqueEntityID) {
    super(props, id);
  }

  get name(): string {
    return this.props.name;
  }

  get email(): UserEmail {
    return this.props.email;
  }

  get userId(): UserId {
    return UserId.create(this._id).getValue();
  }

  get isVerified(): boolean {
    return this.props.isVerified || false;
  }

  public verifyUser(): void {
    this.props.isVerified = true;
  }

  public static create(props: UserProps, id?: UniqueEntityID): Result<User> {
    try {
      const emailOrError = UserEmail.create(props.email);
      // check value objects are created correctly. When we have multiple objects use combine else directly check for failure
      const dtoResult = Result.combine([emailOrError]);
      if (dtoResult.isFailure) {
        return Result.fail<User>(dtoResult.getErrorValue());
      }

      // Get the value of created objects
      const email = emailOrError.getValue();

      return Result.ok<User>(
        new User(
          {
            name: props.name,
            email,
            isVerified: false,
          },
          id,
        ),
      );
    } catch (error) {
      console.log('🚀 ~ file: user.ts ~ line 72 ~ User ~ error', error);
      return Result.fail<User>('User creation error');
    }
  }
}
