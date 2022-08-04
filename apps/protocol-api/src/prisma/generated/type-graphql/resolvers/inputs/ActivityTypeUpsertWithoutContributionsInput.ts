import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ActivityTypeCreateWithoutContributionsInput } from '../inputs/ActivityTypeCreateWithoutContributionsInput';
import { ActivityTypeUpdateWithoutContributionsInput } from '../inputs/ActivityTypeUpdateWithoutContributionsInput';

@TypeGraphQL.InputType('ActivityTypeUpsertWithoutContributionsInput', {
  isAbstract: true,
})
export class ActivityTypeUpsertWithoutContributionsInput {
  @TypeGraphQL.Field(_type => ActivityTypeUpdateWithoutContributionsInput, {
    nullable: false,
  })
  update!: ActivityTypeUpdateWithoutContributionsInput;

  @TypeGraphQL.Field(_type => ActivityTypeCreateWithoutContributionsInput, {
    nullable: false,
  })
  create!: ActivityTypeCreateWithoutContributionsInput;
}
