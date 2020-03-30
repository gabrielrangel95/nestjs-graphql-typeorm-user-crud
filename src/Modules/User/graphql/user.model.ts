import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class User {
  @Field(type => Int, { nullable: true })
  id?: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  password?: string;

  @Field()
  premium_access: boolean;
}
