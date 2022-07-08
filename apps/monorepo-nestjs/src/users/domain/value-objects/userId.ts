import { Result, UniqueEntityID } from '@ddd/ddd';

export class UserId extends UniqueEntityID {
  get id(): UserId {
    return this.toValue();
  }
  private constructor(_id?: UniqueEntityID) {
    super(_id);
  }
  static create(id?: UniqueEntityID): Result<UserId> {
    return Result.ok<UserId>(new UserId(id));
  }
}
