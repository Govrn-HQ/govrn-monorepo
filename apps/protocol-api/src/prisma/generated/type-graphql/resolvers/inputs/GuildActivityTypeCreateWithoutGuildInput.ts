import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ActivityTypeCreateNestedOneWithoutGuildsInput } from '../inputs/ActivityTypeCreateNestedOneWithoutGuildsInput';

@TypeGraphQL.InputType('GuildActivityTypeCreateWithoutGuildInput', {
  isAbstract: true,
})
export class GuildActivityTypeCreateWithoutGuildInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeCreateNestedOneWithoutGuildsInput, {
    nullable: false,
  })
  activity_type!: ActivityTypeCreateNestedOneWithoutGuildsInput;
}
