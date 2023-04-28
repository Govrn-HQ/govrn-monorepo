import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeUpdateOneRequiredWithoutGuildsNestedInput } from "../inputs/ActivityTypeUpdateOneRequiredWithoutGuildsNestedInput";
import { CanonicalGuildActivityTypeUpdateOneWithoutGuild_activity_typeNestedInput } from "../inputs/CanonicalGuildActivityTypeUpdateOneWithoutGuild_activity_typeNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { GuildUpdateOneRequiredWithoutActivity_typeNestedInput } from "../inputs/GuildUpdateOneRequiredWithoutActivity_typeNestedInput";

@TypeGraphQL.InputType("GuildActivityTypeUpdateWithoutMigrated_fromInput", {
  isAbstract: true
})
export class GuildActivityTypeUpdateWithoutMigrated_fromInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GuildUpdateOneRequiredWithoutActivity_typeNestedInput, {
    nullable: true
  })
  guild?: GuildUpdateOneRequiredWithoutActivity_typeNestedInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeUpdateOneRequiredWithoutGuildsNestedInput, {
    nullable: true
  })
  activity_type?: ActivityTypeUpdateOneRequiredWithoutGuildsNestedInput | undefined;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeUpdateOneWithoutGuild_activity_typeNestedInput, {
    nullable: true
  })
  CanonicalGuildActivityType?: CanonicalGuildActivityTypeUpdateOneWithoutGuild_activity_typeNestedInput | undefined;
}
