import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://oneconsultants:PLk6VcmeLhs0f2zi@db-one-consultants.oov5fdd.mongodb.net/db?retryWrites=true&w=majority'
    ),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
