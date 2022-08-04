import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserCreateWithoutChain_typeInput } from '../inputs/UserCreateWithoutChain_typeInput';
import { UserUpdateWithoutChain_typeInput } from '../inputs/UserUpdateWithoutChain_typeInput';
import { UserWhereUniqueInput } from '../inputs/UserWhereUniqueInput';

@TypeGraphQL.InputType('UserUpsertWithWhereUniqueWithoutChain_typeInput', {
  isAbstract: true,
})
export class UserUpsertWithWhereUniqueWithoutChain_typeInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false,
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutChain_typeInput, {
    nullable: false,
  })
  update!: UserUpdateWithoutChain_typeInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutChain_typeInput, {
    nullable: false,
  })
  create!: UserCreateWithoutChain_typeInput;
}
