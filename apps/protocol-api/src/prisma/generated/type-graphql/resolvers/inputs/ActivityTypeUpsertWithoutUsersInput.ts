import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ActivityTypeCreateWithoutUsersInput } from '../inputs/ActivityTypeCreateWithoutUsersInput';
import { ActivityTypeUpdateWithoutUsersInput } from '../inputs/ActivityTypeUpdateWithoutUsersInput';

@TypeGraphQL.InputType('ActivityTypeUpsertWithoutUsersInput', {
  isAbstract: true,
})
export class ActivityTypeUpsertWithoutUsersInput {
  @TypeGraphQL.Field(_type => ActivityTypeUpdateWithoutUsersInput, {
    nullable: false,
  })
  update!: ActivityTypeUpdateWithoutUsersInput;

  @TypeGraphQL.Field(_type => ActivityTypeCreateWithoutUsersInput, {
    nullable: false,
  })
  create!: ActivityTypeCreateWithoutUsersInput;
}
