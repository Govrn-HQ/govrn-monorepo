import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TwitterTweetUpdatetwitter_tweet_contribution_idsInput } from "../inputs/TwitterTweetUpdatetwitter_tweet_contribution_idsInput";
import { TwitterUserUpdateOneWithoutTweetsNestedInput } from "../inputs/TwitterUserUpdateOneWithoutTweetsNestedInput";

@TypeGraphQL.InputType("TwitterTweetUpdateWithoutTwitter_tweet_contributionsInput", {
  isAbstract: true
})
export class TwitterTweetUpdateWithoutTwitter_tweet_contributionsInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  twitter_tweet_url?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  text?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TwitterUserUpdateOneWithoutTweetsNestedInput, {
    nullable: true
  })
  twitter_user?: TwitterUserUpdateOneWithoutTweetsNestedInput | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetUpdatetwitter_tweet_contribution_idsInput, {
    nullable: true
  })
  twitter_tweet_contribution_ids?: TwitterTweetUpdatetwitter_tweet_contribution_idsInput | undefined;
}
