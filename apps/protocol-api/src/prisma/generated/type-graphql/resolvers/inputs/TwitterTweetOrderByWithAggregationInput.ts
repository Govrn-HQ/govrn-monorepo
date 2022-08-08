import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { TwitterTweetAvgOrderByAggregateInput } from '../inputs/TwitterTweetAvgOrderByAggregateInput';
import { TwitterTweetCountOrderByAggregateInput } from '../inputs/TwitterTweetCountOrderByAggregateInput';
import { TwitterTweetMaxOrderByAggregateInput } from '../inputs/TwitterTweetMaxOrderByAggregateInput';
import { TwitterTweetMinOrderByAggregateInput } from '../inputs/TwitterTweetMinOrderByAggregateInput';
import { TwitterTweetSumOrderByAggregateInput } from '../inputs/TwitterTweetSumOrderByAggregateInput';
import { SortOrder } from '../../enums/SortOrder';

@TypeGraphQL.InputType('TwitterTweetOrderByWithAggregationInput', {
  isAbstract: true,
})
export class TwitterTweetOrderByWithAggregationInput {
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
  twitter_tweet_id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  text?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  twitter_user_id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  contribution_id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: TwitterTweetCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: TwitterTweetAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: TwitterTweetMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: TwitterTweetMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: TwitterTweetSumOrderByAggregateInput | undefined;
}
