import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserCreateWithoutActivitiesInput } from '../inputs/UserCreateWithoutActivitiesInput';
import { UserUpdateWithoutActivitiesInput } from '../inputs/UserUpdateWithoutActivitiesInput';

@TypeGraphQL.InputType('UserUpsertWithoutActivitiesInput', {
  isAbstract: true,
})
export class UserUpsertWithoutActivitiesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutActivitiesInput, {
    nullable: false,
  })
  update!: UserUpdateWithoutActivitiesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutActivitiesInput, {
    nullable: false,
  })
  create!: UserCreateWithoutActivitiesInput;
}
