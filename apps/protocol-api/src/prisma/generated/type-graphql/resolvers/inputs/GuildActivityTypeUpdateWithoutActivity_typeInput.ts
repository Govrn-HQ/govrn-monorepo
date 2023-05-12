import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeUpdateOneWithoutMigrated_fromNestedInput } from "../inputs/ActivityTypeUpdateOneWithoutMigrated_fromNestedInput";
import { CanonicalGuildActivityTypeUpdateOneWithoutGuild_activity_typeNestedInput } from "../inputs/CanonicalGuildActivityTypeUpdateOneWithoutGuild_activity_typeNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { GuildUpdateOneRequiredWithoutActivity_typeNestedInput } from "../inputs/GuildUpdateOneRequiredWithoutActivity_typeNestedInput";

@TypeGraphQL.InputType("GuildActivityTypeUpdateWithoutActivity_typeInput", {
  isAbstract: true
})
export class GuildActivityTypeUpdateWithoutActivity_typeInput {
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

  @TypeGraphQL.Field(_type => ActivityTypeUpdateOneWithoutMigrated_fromNestedInput, {
    nullable: true
  })
  migrated_from?: ActivityTypeUpdateOneWithoutMigrated_fromNestedInput | undefined;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeUpdateOneWithoutGuild_activity_typeNestedInput, {
    nullable: true
  })
  CanonicalGuildActivityType?: CanonicalGuildActivityTypeUpdateOneWithoutGuild_activity_typeNestedInput | undefined;
}
