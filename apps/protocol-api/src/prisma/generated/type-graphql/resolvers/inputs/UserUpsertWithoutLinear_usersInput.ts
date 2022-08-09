import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserCreateWithoutLinear_usersInput } from '../inputs/UserCreateWithoutLinear_usersInput';
import { UserUpdateWithoutLinear_usersInput } from '../inputs/UserUpdateWithoutLinear_usersInput';

@TypeGraphQL.InputType('UserUpsertWithoutLinear_usersInput', {
  isAbstract: true,
})
export class UserUpsertWithoutLinear_usersInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutLinear_usersInput, {
    nullable: false,
  })
  update!: UserUpdateWithoutLinear_usersInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutLinear_usersInput, {
    nullable: false,
  })
  create!: UserCreateWithoutLinear_usersInput;
}
