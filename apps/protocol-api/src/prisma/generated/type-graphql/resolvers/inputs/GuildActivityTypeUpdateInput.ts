import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeUpdateOneRequiredWithoutGuildsNestedInput } from "../inputs/ActivityTypeUpdateOneRequiredWithoutGuildsNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { GuildUpdateOneRequiredWithoutActivity_typeNestedInput } from "../inputs/GuildUpdateOneRequiredWithoutActivity_typeNestedInput";

@TypeGraphQL.InputType("GuildActivityTypeUpdateInput", {
  isAbstract: true
})
export class GuildActivityTypeUpdateInput {
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
}
