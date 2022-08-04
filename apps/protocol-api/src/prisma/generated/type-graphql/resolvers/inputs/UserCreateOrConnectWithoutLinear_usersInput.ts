import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserCreateWithoutLinear_usersInput } from '../inputs/UserCreateWithoutLinear_usersInput';
import { UserWhereUniqueInput } from '../inputs/UserWhereUniqueInput';

@TypeGraphQL.InputType('UserCreateOrConnectWithoutLinear_usersInput', {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutLinear_usersInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false,
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutLinear_usersInput, {
    nullable: false,
  })
  create!: UserCreateWithoutLinear_usersInput;
}
