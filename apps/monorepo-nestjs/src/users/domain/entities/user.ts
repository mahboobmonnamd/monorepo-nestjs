import { Entity, Result, UniqueEntityID } from '@ddd/ddd';
import { UserEmail } from '../value-objects/email';
import { UserId } from '../value-objects/userId';

interface UserProps {
  name: string;
  email: UserEmail;
  isVerified?: boolean;
}

export class User extends Entity<UserProps> {
  private constructor(props: UserProps, id?: UniqueEntityID) {
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
      return Result.ok<User>(new User(props, id));
    } catch (error) {
      Result.fail<User>('User creation error');
    }
  }
}
