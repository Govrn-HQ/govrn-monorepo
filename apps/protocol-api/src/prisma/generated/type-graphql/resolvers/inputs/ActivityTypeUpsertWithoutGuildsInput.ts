import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ActivityTypeCreateWithoutGuildsInput } from '../inputs/ActivityTypeCreateWithoutGuildsInput';
import { ActivityTypeUpdateWithoutGuildsInput } from '../inputs/ActivityTypeUpdateWithoutGuildsInput';

@TypeGraphQL.InputType('ActivityTypeUpsertWithoutGuildsInput', {
  isAbstract: true,
})
export class ActivityTypeUpsertWithoutGuildsInput {
  @TypeGraphQL.Field(_type => ActivityTypeUpdateWithoutGuildsInput, {
    nullable: false,
  })
  update!: ActivityTypeUpdateWithoutGuildsInput;

  @TypeGraphQL.Field(_type => ActivityTypeCreateWithoutGuildsInput, {
    nullable: false,
  })
  create!: ActivityTypeCreateWithoutGuildsInput;
}
