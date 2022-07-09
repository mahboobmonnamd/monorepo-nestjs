import { User } from '../domain/entities/user';

export class UserMap {
  toDomain(raw: any): User {
    return User.create(raw);
  }

  toRawUser(user: User): any {
    return {
      name: user.name,
      email: user.email,
    };
  }
}
