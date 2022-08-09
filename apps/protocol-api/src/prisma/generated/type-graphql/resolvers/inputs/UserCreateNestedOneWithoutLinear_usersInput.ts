import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserCreateOrConnectWithoutLinear_usersInput } from '../inputs/UserCreateOrConnectWithoutLinear_usersInput';
import { UserCreateWithoutLinear_usersInput } from '../inputs/UserCreateWithoutLinear_usersInput';
import { UserWhereUniqueInput } from '../inputs/UserWhereUniqueInput';

@TypeGraphQL.InputType('UserCreateNestedOneWithoutLinear_usersInput', {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutLinear_usersInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutLinear_usersInput, {
    nullable: true,
  })
  create?: UserCreateWithoutLinear_usersInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutLinear_usersInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutLinear_usersInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;
}
