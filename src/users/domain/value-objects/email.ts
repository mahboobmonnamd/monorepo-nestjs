export interface UserEmailProps {
  value: string;
}

export class UserEmail {
  private constructor(private props: UserEmailProps) {}

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

  private static create(email: string): UserEmail {
    if (!this.isValidEmail(email)) {
      throw new Error('Not a valid email');
    }
    return new UserEmail({ value: this.format(email) });
  }
}