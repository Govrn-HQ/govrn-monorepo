import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TwitterTweetUpdatetwitter_tweet_contribution_idsInput } from "../inputs/TwitterTweetUpdatetwitter_tweet_contribution_idsInput";

@TypeGraphQL.InputType("TwitterTweetUpdateManyMutationInput", {
  isAbstract: true
})
export class TwitterTweetUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BigIntFieldUpdateOperationsInput, {
    nullable: true
  })
  twitter_tweet_id?: BigIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  text?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetUpdatetwitter_tweet_contribution_idsInput, {
    nullable: true
  })
  twitter_tweet_contribution_ids?: TwitterTweetUpdatetwitter_tweet_contribution_idsInput | undefined;
}
