import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TwitterTweetUpdateManyWithoutTwitter_userNestedInput } from "../inputs/TwitterTweetUpdateManyWithoutTwitter_userNestedInput";
import { UserUpdateOneWithoutTwitter_userNestedInput } from "../inputs/UserUpdateOneWithoutTwitter_userNestedInput";

@TypeGraphQL.InputType("TwitterUserUpdateInput", {
  isAbstract: true
})
export class TwitterUserUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  twitter_user_id?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  username?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutTwitter_userNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneWithoutTwitter_userNestedInput | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetUpdateManyWithoutTwitter_userNestedInput, {
    nullable: true
  })
  tweets?: TwitterTweetUpdateManyWithoutTwitter_userNestedInput | undefined;
}
