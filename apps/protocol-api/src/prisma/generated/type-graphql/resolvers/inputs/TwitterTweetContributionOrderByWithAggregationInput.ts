import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterTweetContributionAvgOrderByAggregateInput } from "../inputs/TwitterTweetContributionAvgOrderByAggregateInput";
import { TwitterTweetContributionCountOrderByAggregateInput } from "../inputs/TwitterTweetContributionCountOrderByAggregateInput";
import { TwitterTweetContributionMaxOrderByAggregateInput } from "../inputs/TwitterTweetContributionMaxOrderByAggregateInput";
import { TwitterTweetContributionMinOrderByAggregateInput } from "../inputs/TwitterTweetContributionMinOrderByAggregateInput";
import { TwitterTweetContributionSumOrderByAggregateInput } from "../inputs/TwitterTweetContributionSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TwitterTweetContributionOrderByWithAggregationInput", {
  isAbstract: true
})
export class TwitterTweetContributionOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  twitter_tweet_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  contribution_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetContributionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TwitterTweetContributionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetContributionAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TwitterTweetContributionAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetContributionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TwitterTweetContributionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetContributionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TwitterTweetContributionMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetContributionSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TwitterTweetContributionSumOrderByAggregateInput | undefined;
}
