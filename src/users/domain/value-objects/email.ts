import { ValueObject, Result } from '@ddd/ddd/domain';

export interface UserEmailProps {
  value: string;
}

export class UserEmail extends ValueObject<UserEmailProps> {
  private constructor(private props: UserEmailProps) {
    super(props);
  }

  get value(): string {
    return this.props.value;
  }

  private static isValidEmail(email: string) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  private static format(email: string): string {
    return email.trim().toLowerCase();
  }

  static create(email: string): Result<UserEmail> {
    if (!this.isValidEmail(email)) {
      return Result.fail<UserEmail>('Not a valid email');
    }
    return Result.ok<UserEmail>(new UserEmail({ value: this.format(email) }));
  }
}
