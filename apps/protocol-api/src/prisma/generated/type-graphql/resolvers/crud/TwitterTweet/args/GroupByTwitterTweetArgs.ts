import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TwitterTweetOrderByWithAggregationInput } from "../../../inputs/TwitterTweetOrderByWithAggregationInput";
import { TwitterTweetScalarWhereWithAggregatesInput } from "../../../inputs/TwitterTweetScalarWhereWithAggregatesInput";
import { TwitterTweetWhereInput } from "../../../inputs/TwitterTweetWhereInput";
import { TwitterTweetScalarFieldEnum } from "../../../../enums/TwitterTweetScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTwitterTweetArgs {
  @TypeGraphQL.Field(_type => TwitterTweetWhereInput, {
    nullable: true
  })
  where?: TwitterTweetWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TwitterTweetOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "twitter_tweet_url" | "text" | "twitter_user_id" | "twitter_tweet_contribution_ids">;

  @TypeGraphQL.Field(_type => TwitterTweetScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TwitterTweetScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
