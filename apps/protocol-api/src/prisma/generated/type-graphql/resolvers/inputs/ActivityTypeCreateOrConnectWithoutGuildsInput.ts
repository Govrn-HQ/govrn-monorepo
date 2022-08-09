import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ActivityTypeCreateWithoutGuildsInput } from '../inputs/ActivityTypeCreateWithoutGuildsInput';
import { ActivityTypeWhereUniqueInput } from '../inputs/ActivityTypeWhereUniqueInput';

@TypeGraphQL.InputType('ActivityTypeCreateOrConnectWithoutGuildsInput', {
  isAbstract: true,
})
export class ActivityTypeCreateOrConnectWithoutGuildsInput {
  @TypeGraphQL.Field(_type => ActivityTypeWhereUniqueInput, {
    nullable: false,
  })
  where!: ActivityTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActivityTypeCreateWithoutGuildsInput, {
    nullable: false,
  })
  create!: ActivityTypeCreateWithoutGuildsInput;
}
