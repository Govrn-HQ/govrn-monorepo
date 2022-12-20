import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterTweetCreateOrConnectWithoutTwitter_tweet_contributionsInput } from "../inputs/TwitterTweetCreateOrConnectWithoutTwitter_tweet_contributionsInput";
import { TwitterTweetCreateWithoutTwitter_tweet_contributionsInput } from "../inputs/TwitterTweetCreateWithoutTwitter_tweet_contributionsInput";
import { TwitterTweetUpdateWithoutTwitter_tweet_contributionsInput } from "../inputs/TwitterTweetUpdateWithoutTwitter_tweet_contributionsInput";
import { TwitterTweetUpsertWithoutTwitter_tweet_contributionsInput } from "../inputs/TwitterTweetUpsertWithoutTwitter_tweet_contributionsInput";
import { TwitterTweetWhereUniqueInput } from "../inputs/TwitterTweetWhereUniqueInput";

@TypeGraphQL.InputType("TwitterTweetUpdateOneRequiredWithoutTwitter_tweet_contributionsNestedInput", {
  isAbstract: true
})
export class TwitterTweetUpdateOneRequiredWithoutTwitter_tweet_contributionsNestedInput {
  @TypeGraphQL.Field(_type => TwitterTweetCreateWithoutTwitter_tweet_contributionsInput, {
    nullable: true
  })
  create?: TwitterTweetCreateWithoutTwitter_tweet_contributionsInput | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetCreateOrConnectWithoutTwitter_tweet_contributionsInput, {
    nullable: true
  })
  connectOrCreate?: TwitterTweetCreateOrConnectWithoutTwitter_tweet_contributionsInput | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetUpsertWithoutTwitter_tweet_contributionsInput, {
    nullable: true
  })
  upsert?: TwitterTweetUpsertWithoutTwitter_tweet_contributionsInput | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetWhereUniqueInput, {
    nullable: true
  })
  connect?: TwitterTweetWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetUpdateWithoutTwitter_tweet_contributionsInput, {
    nullable: true
  })
  update?: TwitterTweetUpdateWithoutTwitter_tweet_contributionsInput | undefined;
}
