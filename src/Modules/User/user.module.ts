import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserORM } from './user.entity';
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { UserResolver } from './graphql/user.resolver'

@Module({
  imports: [TypeOrmModule.forFeature([UserORM])],
  providers: [UserService, UserResolver],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
