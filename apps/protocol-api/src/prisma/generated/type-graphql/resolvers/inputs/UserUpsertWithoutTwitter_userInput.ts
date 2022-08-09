import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserCreateWithoutTwitter_userInput } from '../inputs/UserCreateWithoutTwitter_userInput';
import { UserUpdateWithoutTwitter_userInput } from '../inputs/UserUpdateWithoutTwitter_userInput';

@TypeGraphQL.InputType('UserUpsertWithoutTwitter_userInput', {
  isAbstract: true,
})
export class UserUpsertWithoutTwitter_userInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutTwitter_userInput, {
    nullable: false,
  })
  update!: UserUpdateWithoutTwitter_userInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutTwitter_userInput, {
    nullable: false,
  })
  create!: UserCreateWithoutTwitter_userInput;
}
