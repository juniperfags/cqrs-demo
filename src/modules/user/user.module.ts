import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.schema';
import { UserService } from './user.service';
import { CqrsModule } from '@nestjs/cqrs';
import { UserRepository } from './user.repository';
import { CreateUserCommandHandler } from './commands/create-user.handler';
import { CreateUserEventHandler } from './events/create-user.handler';
import { UserController } from './user.controller';
import { FindUserByIdHandler } from './queries/find-user-by-id.handler';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [
    UserService,
    UserRepository,
    CreateUserCommandHandler,
    CreateUserEventHandler,
    FindUserByIdHandler,
  ],
  controllers: [UserController],
})
export class UserModule {}
