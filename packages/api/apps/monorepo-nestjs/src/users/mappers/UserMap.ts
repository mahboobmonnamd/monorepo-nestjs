import { Result } from '@ddd/ddd';
import { User } from '../domain/entities/user';
import { UserEmail } from '../domain/value-objects/email';

export class UserMap {
  toRawUser(user: User): any {
    return {
      name: user.name,
      email: user.email.value,
    };
  }
}
