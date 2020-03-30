import {
  Controller,
  Post,
  Body,
} from '@nestjs/common';

import { UserRegisterArgs } from './user.args'
import { UserService } from './user.service';


@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async register(@Body() { name, email, password }: UserRegisterArgs) {
    const user = { name, email, password, premium_access: false };
    return this.userService.register(user);
  }
}