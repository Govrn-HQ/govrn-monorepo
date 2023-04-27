import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { GuildActivityTypeUpdateOneRequiredWithoutCanonicalGuildActivityTypeNestedInput } from "../inputs/GuildActivityTypeUpdateOneRequiredWithoutCanonicalGuildActivityTypeNestedInput";
import { GuildUpdateOneRequiredWithoutCanonical_guild_activity_typeNestedInput } from "../inputs/GuildUpdateOneRequiredWithoutCanonical_guild_activity_typeNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CanonicalGuildActivityTypeUpdateInput", {
  isAbstract: true
})
export class CanonicalGuildActivityTypeUpdateInput {
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

  @TypeGraphQL.Field(_type => GuildUpdateOneRequiredWithoutCanonical_guild_activity_typeNestedInput, {
    nullable: true
  })
  guild?: GuildUpdateOneRequiredWithoutCanonical_guild_activity_typeNestedInput | undefined;

  @TypeGraphQL.Field(_type => GuildActivityTypeUpdateOneRequiredWithoutCanonicalGuildActivityTypeNestedInput, {
    nullable: true
  })
  guild_activity_type?: GuildActivityTypeUpdateOneRequiredWithoutCanonicalGuildActivityTypeNestedInput | undefined;
}
