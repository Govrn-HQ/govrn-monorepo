import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ActivityTypeOrderByWithRelationInput } from '../inputs/ActivityTypeOrderByWithRelationInput';
import { GuildOrderByWithRelationInput } from '../inputs/GuildOrderByWithRelationInput';
import { SortOrder } from '../../enums/SortOrder';

@TypeGraphQL.InputType('GuildActivityTypeOrderByWithRelationInput', {
  isAbstract: true,
})
export class GuildActivityTypeOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  createdAt?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  updatedAt?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  guild_id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => GuildOrderByWithRelationInput, {
    nullable: true,
  })
  guild?: GuildOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  activity_type_id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeOrderByWithRelationInput, {
    nullable: true,
  })
  activity_type?: ActivityTypeOrderByWithRelationInput | undefined;
}
