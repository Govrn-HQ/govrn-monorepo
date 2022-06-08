import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { GuildUpdateOneRequiredWithoutActivity_typeInput } from "../inputs/GuildUpdateOneRequiredWithoutActivity_typeInput";

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

  @TypeGraphQL.Field(_type => GuildUpdateOneRequiredWithoutActivity_typeInput, {
    nullable: true
  })
  guild?: GuildUpdateOneRequiredWithoutActivity_typeInput | undefined;
}
