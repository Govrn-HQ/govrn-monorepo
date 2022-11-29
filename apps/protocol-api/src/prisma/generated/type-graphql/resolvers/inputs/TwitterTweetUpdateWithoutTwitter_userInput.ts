import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TwitterTweetContributionUpdateManyWithoutTwitter_tweetInput } from "../inputs/TwitterTweetContributionUpdateManyWithoutTwitter_tweetInput";
import { TwitterTweetUpdatetwitter_tweet_contribution_idsInput } from "../inputs/TwitterTweetUpdatetwitter_tweet_contribution_idsInput";

@TypeGraphQL.InputType("TwitterTweetUpdateWithoutTwitter_userInput", {
  isAbstract: true
})
export class TwitterTweetUpdateWithoutTwitter_userInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  twitter_tweet_id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  text?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetUpdatetwitter_tweet_contribution_idsInput, {
    nullable: true
  })
  twitter_tweet_contribution_ids?: TwitterTweetUpdatetwitter_tweet_contribution_idsInput | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetContributionUpdateManyWithoutTwitter_tweetInput, {
    nullable: true
  })
  twitter_tweet_contributions?: TwitterTweetContributionUpdateManyWithoutTwitter_tweetInput | undefined;
}
