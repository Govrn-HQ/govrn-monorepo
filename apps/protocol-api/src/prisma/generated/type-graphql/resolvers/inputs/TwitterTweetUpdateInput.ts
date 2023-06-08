import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TwitterTweetContributionUpdateManyWithoutTwitter_tweetNestedInput } from "../inputs/TwitterTweetContributionUpdateManyWithoutTwitter_tweetNestedInput";
import { TwitterTweetUpdatetwitter_tweet_contribution_idsInput } from "../inputs/TwitterTweetUpdatetwitter_tweet_contribution_idsInput";
import { TwitterUserUpdateOneWithoutTweetsNestedInput } from "../inputs/TwitterUserUpdateOneWithoutTweetsNestedInput";

@TypeGraphQL.InputType("TwitterTweetUpdateInput", {
  isAbstract: true
})
export class TwitterTweetUpdateInput {
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

  @TypeGraphQL.Field(_type => TwitterTweetContributionUpdateManyWithoutTwitter_tweetNestedInput, {
    nullable: true
  })
  twitter_tweet_contributions?: TwitterTweetContributionUpdateManyWithoutTwitter_tweetNestedInput | undefined;
}
