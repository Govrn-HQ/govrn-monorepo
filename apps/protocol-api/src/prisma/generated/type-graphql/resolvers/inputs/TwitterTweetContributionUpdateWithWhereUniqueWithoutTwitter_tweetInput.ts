import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterTweetContributionUpdateWithoutTwitter_tweetInput } from "../inputs/TwitterTweetContributionUpdateWithoutTwitter_tweetInput";
import { TwitterTweetContributionWhereUniqueInput } from "../inputs/TwitterTweetContributionWhereUniqueInput";

@TypeGraphQL.InputType("TwitterTweetContributionUpdateWithWhereUniqueWithoutTwitter_tweetInput", {
  isAbstract: true
})
export class TwitterTweetContributionUpdateWithWhereUniqueWithoutTwitter_tweetInput {
  @TypeGraphQL.Field(_type => TwitterTweetContributionWhereUniqueInput, {
    nullable: false
  })
  where!: TwitterTweetContributionWhereUniqueInput;

  @TypeGraphQL.Field(_type => TwitterTweetContributionUpdateWithoutTwitter_tweetInput, {
    nullable: false
  })
  data!: TwitterTweetContributionUpdateWithoutTwitter_tweetInput;
}
