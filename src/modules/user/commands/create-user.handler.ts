import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from './create-user.command';
import { UserModel } from '../user.model';
import { UserRepository } from '../user.repository';

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler
  implements ICommandHandler<CreateUserCommand>
{
  constructor(
    private userRepo: UserRepository,
    private publisher: EventPublisher,
  ) {}
  async execute({ user }: CreateUserCommand): Promise<string> {
    const UserPublisher = this.publisher.mergeClassContext(UserModel);

    const userId = await this.userRepo.create(user);

    const publisher = new UserPublisher();

    publisher.logger(userId);

    publisher.commit();

    return userId;
  }
}
