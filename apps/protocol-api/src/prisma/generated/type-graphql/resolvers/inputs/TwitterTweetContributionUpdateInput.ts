import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionUpdateOneRequiredWithoutTwitter_tweet_contributionsInput } from "../inputs/ContributionUpdateOneRequiredWithoutTwitter_tweet_contributionsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { TwitterTweetUpdateOneRequiredWithoutTwitter_tweet_contributionsInput } from "../inputs/TwitterTweetUpdateOneRequiredWithoutTwitter_tweet_contributionsInput";

@TypeGraphQL.InputType("TwitterTweetContributionUpdateInput", {
  isAbstract: true
})
export class TwitterTweetContributionUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetUpdateOneRequiredWithoutTwitter_tweet_contributionsInput, {
    nullable: true
  })
  twitter_tweet?: TwitterTweetUpdateOneRequiredWithoutTwitter_tweet_contributionsInput | undefined;

  @TypeGraphQL.Field(_type => ContributionUpdateOneRequiredWithoutTwitter_tweet_contributionsInput, {
    nullable: true
  })
  contribution?: ContributionUpdateOneRequiredWithoutTwitter_tweet_contributionsInput | undefined;
}
