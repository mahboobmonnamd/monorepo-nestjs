import { UserEmail } from '../value-objects/email';

interface UserProps {
  name: string;
  email: UserEmail;
  isVerified?: boolean;
}

export class User {
  private constructor(private props: UserProps, private id?: string) {}

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

  public static create(props: UserProps, id?: string): User {
    return new User(props, id);
  }
}
