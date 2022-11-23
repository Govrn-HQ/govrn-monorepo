import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TwitterTweetContributionOrderByWithAggregationInput } from "../../../inputs/TwitterTweetContributionOrderByWithAggregationInput";
import { TwitterTweetContributionScalarWhereWithAggregatesInput } from "../../../inputs/TwitterTweetContributionScalarWhereWithAggregatesInput";
import { TwitterTweetContributionWhereInput } from "../../../inputs/TwitterTweetContributionWhereInput";
import { TwitterTweetContributionScalarFieldEnum } from "../../../../enums/TwitterTweetContributionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTwitterTweetContributionArgs {
  @TypeGraphQL.Field(_type => TwitterTweetContributionWhereInput, {
    nullable: true
  })
  where?: TwitterTweetContributionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetContributionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TwitterTweetContributionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetContributionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "twitter_tweet_id" | "contribution_id">;

  @TypeGraphQL.Field(_type => TwitterTweetContributionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TwitterTweetContributionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
