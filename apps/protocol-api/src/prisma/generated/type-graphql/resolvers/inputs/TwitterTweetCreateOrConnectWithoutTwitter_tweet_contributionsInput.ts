import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterTweetCreateWithoutTwitter_tweet_contributionsInput } from "../inputs/TwitterTweetCreateWithoutTwitter_tweet_contributionsInput";
import { TwitterTweetWhereUniqueInput } from "../inputs/TwitterTweetWhereUniqueInput";

@TypeGraphQL.InputType("TwitterTweetCreateOrConnectWithoutTwitter_tweet_contributionsInput", {
  isAbstract: true
})
export class TwitterTweetCreateOrConnectWithoutTwitter_tweet_contributionsInput {
  @TypeGraphQL.Field(_type => TwitterTweetWhereUniqueInput, {
    nullable: false
  })
  where!: TwitterTweetWhereUniqueInput;

  @TypeGraphQL.Field(_type => TwitterTweetCreateWithoutTwitter_tweet_contributionsInput, {
    nullable: false
  })
  create!: TwitterTweetCreateWithoutTwitter_tweet_contributionsInput;
}
