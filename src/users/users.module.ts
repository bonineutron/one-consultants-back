import { UsersController } from './users.controller';
import { UserSchema } from './schemas/users.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Users', schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
