import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterTweetContributionOrderByRelationAggregateInput } from "../inputs/TwitterTweetContributionOrderByRelationAggregateInput";
import { TwitterUserOrderByWithRelationInput } from "../inputs/TwitterUserOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TwitterTweetOrderByWithRelationInput", {
  isAbstract: true
})
export class TwitterTweetOrderByWithRelationInput {
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
  text?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  twitter_user_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TwitterUserOrderByWithRelationInput, {
    nullable: true
  })
  twitter_user?: TwitterUserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  twitter_tweet_contribution_ids?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetContributionOrderByRelationAggregateInput, {
    nullable: true
  })
  twitter_tweet_contributions?: TwitterTweetContributionOrderByRelationAggregateInput | undefined;
}
