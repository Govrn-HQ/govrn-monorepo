import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { IntegrationTypeUpdateOneRequiredWithoutGuild_importsNestedInput } from "../inputs/IntegrationTypeUpdateOneRequiredWithoutGuild_importsNestedInput";

@TypeGraphQL.InputType("GuildImportUpdateWithoutGuildInput", {
  isAbstract: true
})
export class GuildImportUpdateWithoutGuildInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  authentication_token?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationTypeUpdateOneRequiredWithoutGuild_importsNestedInput, {
    nullable: true
  })
  integration_type?: IntegrationTypeUpdateOneRequiredWithoutGuild_importsNestedInput | undefined;
}
