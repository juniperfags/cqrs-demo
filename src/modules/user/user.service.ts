import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserDto, FindUserResponseDto } from './dtos/user.dto';
import { CreateUserCommand } from './commands/create-user.command';
import { FindUserByIdQuery } from './queries/find-user-by-id.query';

@Injectable()
export class UserService {
  constructor(private commandBus: CommandBus, private queryBus: QueryBus) {}

  async createUser(createUser: CreateUserDto) {
    const response = await this.commandBus.execute<CreateUserCommand, string>(
      new CreateUserCommand(createUser),
    );
    return { message: 'New user created', response };
  }
  async findUserById(userId: string) {
    const response = await this.queryBus.execute<
      FindUserByIdQuery,
      FindUserResponseDto
    >(new FindUserByIdQuery(userId));
    return response;
  }
}
