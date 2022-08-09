import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserCreateOrConnectWithoutDiscord_usersInput } from '../inputs/UserCreateOrConnectWithoutDiscord_usersInput';
import { UserCreateWithoutDiscord_usersInput } from '../inputs/UserCreateWithoutDiscord_usersInput';
import { UserWhereUniqueInput } from '../inputs/UserWhereUniqueInput';

@TypeGraphQL.InputType('UserCreateNestedOneWithoutDiscord_usersInput', {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutDiscord_usersInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutDiscord_usersInput, {
    nullable: true,
  })
  create?: UserCreateWithoutDiscord_usersInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutDiscord_usersInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutDiscord_usersInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;
}
