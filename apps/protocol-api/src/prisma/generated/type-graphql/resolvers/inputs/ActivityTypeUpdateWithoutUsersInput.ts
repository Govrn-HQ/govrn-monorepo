import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CategoryActivityTypeUpdateManyWithoutActivity_typeInput } from "../inputs/CategoryActivityTypeUpdateManyWithoutActivity_typeInput";
import { ContributionUpdateManyWithoutActivity_typeInput } from "../inputs/ContributionUpdateManyWithoutActivity_typeInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { GuildActivityTypeUpdateManyWithoutActivity_typeInput } from "../inputs/GuildActivityTypeUpdateManyWithoutActivity_typeInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ActivityTypeUpdateWithoutUsersInput", {
  isAbstract: true
})
export class ActivityTypeUpdateWithoutUsersInput {
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

  @TypeGraphQL.Field(_type => ContributionUpdateManyWithoutActivity_typeInput, {
    nullable: true
  })
  contributions?: ContributionUpdateManyWithoutActivity_typeInput | undefined;

  @TypeGraphQL.Field(_type => CategoryActivityTypeUpdateManyWithoutActivity_typeInput, {
    nullable: true
  })
  categoryActivity?: CategoryActivityTypeUpdateManyWithoutActivity_typeInput | undefined;

  @TypeGraphQL.Field(_type => GuildActivityTypeUpdateManyWithoutActivity_typeInput, {
    nullable: true
  })
  guilds?: GuildActivityTypeUpdateManyWithoutActivity_typeInput | undefined;
}
