import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserCreateWithoutDiscord_usersInput } from '../inputs/UserCreateWithoutDiscord_usersInput';
import { UserWhereUniqueInput } from '../inputs/UserWhereUniqueInput';

@TypeGraphQL.InputType('UserCreateOrConnectWithoutDiscord_usersInput', {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutDiscord_usersInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false,
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutDiscord_usersInput, {
    nullable: false,
  })
  create!: UserCreateWithoutDiscord_usersInput;
}
