import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeUpdateOneRequiredWithoutGuildsNestedInput } from "../inputs/ActivityTypeUpdateOneRequiredWithoutGuildsNestedInput";
import { ActivityTypeUpdateOneWithoutMigrated_fromNestedInput } from "../inputs/ActivityTypeUpdateOneWithoutMigrated_fromNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { GuildUpdateOneRequiredWithoutActivity_typeNestedInput } from "../inputs/GuildUpdateOneRequiredWithoutActivity_typeNestedInput";

@TypeGraphQL.InputType("GuildActivityTypeUpdateWithoutCanonicalGuildActivityTypeInput", {
  isAbstract: true
})
export class GuildActivityTypeUpdateWithoutCanonicalGuildActivityTypeInput {
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

  @TypeGraphQL.Field(_type => ActivityTypeUpdateOneWithoutMigrated_fromNestedInput, {
    nullable: true
  })
  migrated_from?: ActivityTypeUpdateOneWithoutMigrated_fromNestedInput | undefined;
}
