import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { Model } from 'mongoose';
import { ICreateUser } from './commands/create-user.command';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name) private userDocument: Model<UserDocument>,
  ) {}

  async create(user: ICreateUser): Promise<string> {
    const createdUser = await new this.userDocument(user).save();

    return createdUser.id;
  }
  async findUserById(userId: string) {
    const user = await this.userDocument.findById(userId);

    return user;
  }
}
