import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ActivityTypeCreateWithoutCategoryActivityInput } from '../inputs/ActivityTypeCreateWithoutCategoryActivityInput';
import { ActivityTypeUpdateWithoutCategoryActivityInput } from '../inputs/ActivityTypeUpdateWithoutCategoryActivityInput';

@TypeGraphQL.InputType('ActivityTypeUpsertWithoutCategoryActivityInput', {
  isAbstract: true,
})
export class ActivityTypeUpsertWithoutCategoryActivityInput {
  @TypeGraphQL.Field(_type => ActivityTypeUpdateWithoutCategoryActivityInput, {
    nullable: false,
  })
  update!: ActivityTypeUpdateWithoutCategoryActivityInput;

  @TypeGraphQL.Field(_type => ActivityTypeCreateWithoutCategoryActivityInput, {
    nullable: false,
  })
  create!: ActivityTypeCreateWithoutCategoryActivityInput;
}
