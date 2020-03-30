import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { UserService } from '../user.service'
import { UserRegisterArgs, UserArgs } from '../user.args'
import { User } from './user.model'

@Resolver(of => UserArgs)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User])
  public async allUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Mutation(returns => User)
  async userRegister(@Args() user: UserRegisterArgs) {
    return this.userService.register(user);
  }
}