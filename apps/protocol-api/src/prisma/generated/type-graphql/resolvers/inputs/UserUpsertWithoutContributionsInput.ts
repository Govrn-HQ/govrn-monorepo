import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserCreateWithoutContributionsInput } from '../inputs/UserCreateWithoutContributionsInput';
import { UserUpdateWithoutContributionsInput } from '../inputs/UserUpdateWithoutContributionsInput';

@TypeGraphQL.InputType('UserUpsertWithoutContributionsInput', {
  isAbstract: true,
})
export class UserUpsertWithoutContributionsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutContributionsInput, {
    nullable: false,
  })
  update!: UserUpdateWithoutContributionsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutContributionsInput, {
    nullable: false,
  })
  create!: UserCreateWithoutContributionsInput;
}
