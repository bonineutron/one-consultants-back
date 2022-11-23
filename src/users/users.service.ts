import { IUser } from './interfaces/users.interface';
import { CreateUserDTO } from './dto/users.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('Users') private readonly usersModel: Model<IUser>) {}

  async createUser(createUsertDTO: CreateUserDTO): Promise<IUser> {
    let user = new this.usersModel(createUsertDTO);
    return await user.save();
  }

  async getUsers(): Promise<IUser[]> {
    let users = await this.usersModel.find({}, { _id: 0, __v: 0 });
    return users;
  }
}
