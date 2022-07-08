import uuid from 'uuid';
import { Identifier } from './Identifier';

export class UniqueEntityID extends Identifier<any> {
  constructor(id?: UniqueEntityID) {
    super(id ? id : uuid());
  }
}
