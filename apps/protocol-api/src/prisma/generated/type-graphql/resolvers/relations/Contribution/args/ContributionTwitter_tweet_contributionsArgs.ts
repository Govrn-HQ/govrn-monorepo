import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TwitterTweetContributionOrderByWithRelationInput } from "../../../inputs/TwitterTweetContributionOrderByWithRelationInput";
import { TwitterTweetContributionWhereInput } from "../../../inputs/TwitterTweetContributionWhereInput";
import { TwitterTweetContributionWhereUniqueInput } from "../../../inputs/TwitterTweetContributionWhereUniqueInput";
import { TwitterTweetContributionScalarFieldEnum } from "../../../../enums/TwitterTweetContributionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class ContributionTwitter_tweet_contributionsArgs {
  @TypeGraphQL.Field(_type => TwitterTweetContributionWhereInput, {
    nullable: true
  })
  where?: TwitterTweetContributionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetContributionOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TwitterTweetContributionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetContributionWhereUniqueInput, {
    nullable: true
  })
  cursor?: TwitterTweetContributionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetContributionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "twitter_tweet_id" | "contribution_id"> | undefined;
}
