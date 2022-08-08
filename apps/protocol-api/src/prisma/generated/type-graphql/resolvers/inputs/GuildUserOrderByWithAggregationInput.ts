import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { GuildUserAvgOrderByAggregateInput } from '../inputs/GuildUserAvgOrderByAggregateInput';
import { GuildUserCountOrderByAggregateInput } from '../inputs/GuildUserCountOrderByAggregateInput';
import { GuildUserMaxOrderByAggregateInput } from '../inputs/GuildUserMaxOrderByAggregateInput';
import { GuildUserMinOrderByAggregateInput } from '../inputs/GuildUserMinOrderByAggregateInput';
import { GuildUserSumOrderByAggregateInput } from '../inputs/GuildUserSumOrderByAggregateInput';
import { SortOrder } from '../../enums/SortOrder';

@TypeGraphQL.InputType('GuildUserOrderByWithAggregationInput', {
  isAbstract: true,
})
export class GuildUserOrderByWithAggregationInput {
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
  user_id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  guild_id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => GuildUserCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: GuildUserCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildUserAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: GuildUserAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildUserMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: GuildUserMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildUserMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: GuildUserMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildUserSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: GuildUserSumOrderByAggregateInput | undefined;
}
