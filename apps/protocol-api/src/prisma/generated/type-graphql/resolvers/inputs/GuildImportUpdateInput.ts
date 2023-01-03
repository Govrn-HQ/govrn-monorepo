import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { GuildUpdateOneRequiredWithoutGuild_importsNestedInput } from "../inputs/GuildUpdateOneRequiredWithoutGuild_importsNestedInput";
import { IntegrationTypeUpdateOneRequiredWithoutGuild_importsNestedInput } from "../inputs/IntegrationTypeUpdateOneRequiredWithoutGuild_importsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("GuildImportUpdateInput", {
  isAbstract: true
})
export class GuildImportUpdateInput {
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
  authentication_token?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GuildUpdateOneRequiredWithoutGuild_importsNestedInput, {
    nullable: true
  })
  guild?: GuildUpdateOneRequiredWithoutGuild_importsNestedInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationTypeUpdateOneRequiredWithoutGuild_importsNestedInput, {
    nullable: true
  })
  integration_type?: IntegrationTypeUpdateOneRequiredWithoutGuild_importsNestedInput | undefined;
}
