import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CategoryActivityTypeUpdateManyWithoutActivity_typeInput } from "../inputs/CategoryActivityTypeUpdateManyWithoutActivity_typeInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { GuildActivityTypeUpdateManyWithoutActivity_typeInput } from "../inputs/GuildActivityTypeUpdateManyWithoutActivity_typeInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserActivityUpdateManyWithoutActivity_typeInput } from "../inputs/UserActivityUpdateManyWithoutActivity_typeInput";

@TypeGraphQL.InputType("ActivityTypeUpdateWithoutContributionsInput", {
  isAbstract: true
})
export class ActivityTypeUpdateWithoutContributionsInput {
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
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  active?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  default?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserActivityUpdateManyWithoutActivity_typeInput, {
    nullable: true
  })
  users?: UserActivityUpdateManyWithoutActivity_typeInput | undefined;

  @TypeGraphQL.Field(_type => CategoryActivityTypeUpdateManyWithoutActivity_typeInput, {
    nullable: true
  })
  categoryActivity?: CategoryActivityTypeUpdateManyWithoutActivity_typeInput | undefined;

  @TypeGraphQL.Field(_type => GuildActivityTypeUpdateManyWithoutActivity_typeInput, {
    nullable: true
  })
  guilds?: GuildActivityTypeUpdateManyWithoutActivity_typeInput | undefined;
}
