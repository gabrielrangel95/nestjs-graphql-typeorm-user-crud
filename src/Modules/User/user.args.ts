import { Field, ArgsType, Int } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

@ArgsType()
export class UserArgs {
  @Field(type => Int)
  id: number;

  @IsNotEmpty()
  @Field()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @Field()
  email: string;

  @IsNotEmpty()
  @Field()
  password: string;
  
  @Field()
  premium_access: boolean;
}


@ArgsType()
export class UserRegisterArgs {
  @IsNotEmpty()
  @Field()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @Field()
  email: string;

  @IsNotEmpty()
  @Field()
  password: string;
}