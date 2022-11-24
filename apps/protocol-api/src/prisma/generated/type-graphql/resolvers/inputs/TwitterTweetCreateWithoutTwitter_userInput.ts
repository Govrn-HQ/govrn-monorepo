import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterTweetContributionCreateNestedManyWithoutTwitter_tweetInput } from "../inputs/TwitterTweetContributionCreateNestedManyWithoutTwitter_tweetInput";
import { TwitterTweetCreatetwitter_tweet_contribution_idsInput } from "../inputs/TwitterTweetCreatetwitter_tweet_contribution_idsInput";

@TypeGraphQL.InputType("TwitterTweetCreateWithoutTwitter_userInput", {
  isAbstract: true
})
export class TwitterTweetCreateWithoutTwitter_userInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  twitter_tweet_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  text!: string;

  @TypeGraphQL.Field(_type => TwitterTweetCreatetwitter_tweet_contribution_idsInput, {
    nullable: true
  })
  twitter_tweet_contribution_ids?: TwitterTweetCreatetwitter_tweet_contribution_idsInput | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetContributionCreateNestedManyWithoutTwitter_tweetInput, {
    nullable: true
  })
  twitter_tweet_contributions?: TwitterTweetContributionCreateNestedManyWithoutTwitter_tweetInput | undefined;
}
