import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserCreateWithoutContributionsInput } from '../inputs/UserCreateWithoutContributionsInput';
import { UserWhereUniqueInput } from '../inputs/UserWhereUniqueInput';

@TypeGraphQL.InputType('UserCreateOrConnectWithoutContributionsInput', {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutContributionsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false,
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutContributionsInput, {
    nullable: false,
  })
  create!: UserCreateWithoutContributionsInput;
}
