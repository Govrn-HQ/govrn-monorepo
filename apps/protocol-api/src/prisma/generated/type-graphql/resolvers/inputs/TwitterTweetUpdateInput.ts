import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionUpdateOneWithoutTweetInput } from "../inputs/ContributionUpdateOneWithoutTweetInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TwitterUserUpdateOneWithoutTweetsInput } from "../inputs/TwitterUserUpdateOneWithoutTweetsInput";

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

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  twitter_tweet_id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  text?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TwitterUserUpdateOneWithoutTweetsInput, {
    nullable: true
  })
  twitter_user?: TwitterUserUpdateOneWithoutTweetsInput | undefined;

  @TypeGraphQL.Field(_type => ContributionUpdateOneWithoutTweetInput, {
    nullable: true
  })
  contribution?: ContributionUpdateOneWithoutTweetInput | undefined;
}
