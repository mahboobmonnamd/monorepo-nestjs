import { Entity, Result, UniqueEntityID } from '@ddd/ddd/domain';
import { UserEmail } from '../value-objects/email';

interface UserProps {
  name: string;
  email: UserEmail;
  isVerified?: boolean;
}

export class User extends Entity<UserProps> {
  private constructor(private props: UserProps, private id?: string) {
    super(props);
  }

  get name(): string {
    return this.props.name;
  }

  get email(): UserEmail {
    return this.props.email;
  }

  get userId(): string {
    return this.id;
  }

  get isVerified(): boolean {
    return this.props.isVerified || false;
  }

  public verifyUser(): void {
    this.props.isVerified = true;
  }

  public static create(props: UserProps, id?: UniqueEntityID): Result<User> {
    return Result.ok<User>(new User(props, id));
  }
}
