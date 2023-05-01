import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { GuildActivityTypeUpdateOneRequiredWithoutCanonicalGuildActivityTypeNestedInput } from "../inputs/GuildActivityTypeUpdateOneRequiredWithoutCanonicalGuildActivityTypeNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CanonicalGuildActivityTypeUpdateWithoutGuildInput", {
  isAbstract: true
})
export class CanonicalGuildActivityTypeUpdateWithoutGuildInput {
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

  @TypeGraphQL.Field(_type => GuildActivityTypeUpdateOneRequiredWithoutCanonicalGuildActivityTypeNestedInput, {
    nullable: true
  })
  guild_activity_type?: GuildActivityTypeUpdateOneRequiredWithoutCanonicalGuildActivityTypeNestedInput | undefined;
}
