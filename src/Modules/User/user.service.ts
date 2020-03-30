import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserORM } from './user.entity';
import { UserRegisterArgs } from './user.args';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserORM)
    private userRepository: Repository<UserORM>,
  ) {}

  async findAll() {
    const users = this.userRepository.find();
    return users;
  }

  async register(user: UserRegisterArgs) {
    const newUser = this.userRepository.save(user);
    return newUser;
  }
}
