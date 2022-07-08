import { v6 as uuidV6 } from 'uuid';
import { Identifier } from './Identifier';

export class UniqueEntityID extends Identifier<any> {
  constructor(id?: UniqueEntityID) {
    super(id ? id : uuidV6());
  }
}
