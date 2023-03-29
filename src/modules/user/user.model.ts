import { AggregateRoot } from '@nestjs/cqrs';
import { CreateUserEvent } from './events/create-user.event';

export class UserModel extends AggregateRoot {
  constructor() {
    super();
  }
  logger(id: string) {
    this.apply(new CreateUserEvent(id));
  }
}
