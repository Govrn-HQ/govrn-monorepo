import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { TwitterUserAvgOrderByAggregateInput } from '../inputs/TwitterUserAvgOrderByAggregateInput';
import { TwitterUserCountOrderByAggregateInput } from '../inputs/TwitterUserCountOrderByAggregateInput';
import { TwitterUserMaxOrderByAggregateInput } from '../inputs/TwitterUserMaxOrderByAggregateInput';
import { TwitterUserMinOrderByAggregateInput } from '../inputs/TwitterUserMinOrderByAggregateInput';
import { TwitterUserSumOrderByAggregateInput } from '../inputs/TwitterUserSumOrderByAggregateInput';
import { SortOrder } from '../../enums/SortOrder';

@TypeGraphQL.InputType('TwitterUserOrderByWithAggregationInput', {
  isAbstract: true,
})
export class TwitterUserOrderByWithAggregationInput {
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
  twitter_user_id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  name?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  username?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  description?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  user_id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => TwitterUserCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: TwitterUserCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TwitterUserAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: TwitterUserAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TwitterUserMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: TwitterUserMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TwitterUserMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: TwitterUserMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TwitterUserSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: TwitterUserSumOrderByAggregateInput | undefined;
}
