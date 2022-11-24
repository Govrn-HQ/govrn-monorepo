import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterTweetContributionCreateManyTwitter_tweetInput } from "../inputs/TwitterTweetContributionCreateManyTwitter_tweetInput";

@TypeGraphQL.InputType("TwitterTweetContributionCreateManyTwitter_tweetInputEnvelope", {
  isAbstract: true
})
export class TwitterTweetContributionCreateManyTwitter_tweetInputEnvelope {
  @TypeGraphQL.Field(_type => [TwitterTweetContributionCreateManyTwitter_tweetInput], {
    nullable: false
  })
  data!: TwitterTweetContributionCreateManyTwitter_tweetInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
