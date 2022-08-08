import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserCreateWithoutChain_typeInput } from '../inputs/UserCreateWithoutChain_typeInput';
import { UserWhereUniqueInput } from '../inputs/UserWhereUniqueInput';

@TypeGraphQL.InputType('UserCreateOrConnectWithoutChain_typeInput', {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutChain_typeInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false,
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutChain_typeInput, {
    nullable: false,
  })
  create!: UserCreateWithoutChain_typeInput;
}
