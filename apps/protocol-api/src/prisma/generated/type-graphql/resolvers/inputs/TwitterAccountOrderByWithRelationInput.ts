import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { GuildOrderByWithRelationInput } from '../inputs/GuildOrderByWithRelationInput';
import { SortOrder } from '../../enums/SortOrder';

@TypeGraphQL.InputType('TwitterAccountOrderByWithRelationInput', {
  isAbstract: true,
})
export class TwitterAccountOrderByWithRelationInput {
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
  account_name?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  guild_id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => GuildOrderByWithRelationInput, {
    nullable: true,
  })
  guild?: GuildOrderByWithRelationInput | undefined;
}
