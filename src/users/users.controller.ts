import { Controller, Get, Post, Res, HttpStatus, Body } from '@nestjs/common';
import { IUser } from './interfaces/users.interface';
import { CreateUserDTO } from './dto/users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/get-all')
  async getUsers(@Res() res): Promise<IUser[]> {
    try {
      let users = await this.usersService.getUsers();
      return res.status(HttpStatus.OK).json(users);
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'An Error Has Occurred',
        error
      });
    }
  }

  @Post('/create')
  async createUser(@Res() res, @Body() createUserDTO: CreateUserDTO[]): Promise<IUser> {
    try {
      const loopUsers = async (user: CreateUserDTO) => {
        await this.usersService.createUser(user);
      };
      createUserDTO.forEach((user: CreateUserDTO) => loopUsers(user));
      return res.status(HttpStatus.OK).json({
        message: 'User Successfully Created',
        createUserDTO
      });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'An Error Has Occurred',
        error
      });
    }
  }
}
