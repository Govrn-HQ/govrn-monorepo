import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeUpdateOneRequiredWithoutGuildsNestedInput } from "../inputs/ActivityTypeUpdateOneRequiredWithoutGuildsNestedInput";
import { ActivityTypeUpdateOneWithoutMigrated_fromNestedInput } from "../inputs/ActivityTypeUpdateOneWithoutMigrated_fromNestedInput";
import { CanonicalGuildActivityTypeUpdateOneWithoutGuild_activity_typeNestedInput } from "../inputs/CanonicalGuildActivityTypeUpdateOneWithoutGuild_activity_typeNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("GuildActivityTypeUpdateWithoutGuildInput", {
  isAbstract: true
})
export class GuildActivityTypeUpdateWithoutGuildInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeUpdateOneRequiredWithoutGuildsNestedInput, {
    nullable: true
  })
  activity_type?: ActivityTypeUpdateOneRequiredWithoutGuildsNestedInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeUpdateOneWithoutMigrated_fromNestedInput, {
    nullable: true
  })
  migrated_from?: ActivityTypeUpdateOneWithoutMigrated_fromNestedInput | undefined;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeUpdateOneWithoutGuild_activity_typeNestedInput, {
    nullable: true
  })
  CanonicalGuildActivityType?: CanonicalGuildActivityTypeUpdateOneWithoutGuild_activity_typeNestedInput | undefined;
}
