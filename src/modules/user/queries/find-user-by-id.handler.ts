import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { UserRepository } from '../user.repository';
import { FindUserByIdQuery } from './find-user-by-id.query';

@QueryHandler(FindUserByIdQuery)
export class FindUserByIdHandler implements IQueryHandler<FindUserByIdQuery> {
  constructor(private readonly userRepo: UserRepository) {}

  async execute(query: FindUserByIdQuery): Promise<any> {
    const response = await this.userRepo.findUserById(query.userId);
    return response;
  }
}
