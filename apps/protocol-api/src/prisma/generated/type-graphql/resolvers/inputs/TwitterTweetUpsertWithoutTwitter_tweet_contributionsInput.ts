import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterTweetCreateWithoutTwitter_tweet_contributionsInput } from "../inputs/TwitterTweetCreateWithoutTwitter_tweet_contributionsInput";
import { TwitterTweetUpdateWithoutTwitter_tweet_contributionsInput } from "../inputs/TwitterTweetUpdateWithoutTwitter_tweet_contributionsInput";

@TypeGraphQL.InputType("TwitterTweetUpsertWithoutTwitter_tweet_contributionsInput", {
  isAbstract: true
})
export class TwitterTweetUpsertWithoutTwitter_tweet_contributionsInput {
  @TypeGraphQL.Field(_type => TwitterTweetUpdateWithoutTwitter_tweet_contributionsInput, {
    nullable: false
  })
  update!: TwitterTweetUpdateWithoutTwitter_tweet_contributionsInput;

  @TypeGraphQL.Field(_type => TwitterTweetCreateWithoutTwitter_tweet_contributionsInput, {
    nullable: false
  })
  create!: TwitterTweetCreateWithoutTwitter_tweet_contributionsInput;
}
