import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ActivityTypeRelationFilter } from '../inputs/ActivityTypeRelationFilter';
import { DateTimeFilter } from '../inputs/DateTimeFilter';
import { GuildRelationFilter } from '../inputs/GuildRelationFilter';
import { IntFilter } from '../inputs/IntFilter';

@TypeGraphQL.InputType('GuildActivityTypeWhereInput', {
  isAbstract: true,
})
export class GuildActivityTypeWhereInput {
  @TypeGraphQL.Field(_type => [GuildActivityTypeWhereInput], {
    nullable: true,
  })
  AND?: GuildActivityTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildActivityTypeWhereInput], {
    nullable: true,
  })
  OR?: GuildActivityTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildActivityTypeWhereInput], {
    nullable: true,
  })
  NOT?: GuildActivityTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
  })
  guild_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => GuildRelationFilter, {
    nullable: true,
  })
  guild?: GuildRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
  })
  activity_type_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeRelationFilter, {
    nullable: true,
  })
  activity_type?: ActivityTypeRelationFilter | undefined;
}
