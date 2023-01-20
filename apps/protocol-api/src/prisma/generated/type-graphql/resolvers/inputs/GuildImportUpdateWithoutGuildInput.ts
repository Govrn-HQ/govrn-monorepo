import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { GuildImportStatusUpdateOneRequiredWithoutGuild_importsNestedInput } from "../inputs/GuildImportStatusUpdateOneRequiredWithoutGuild_importsNestedInput";
import { GuildUserUpdateManyWithoutGuild_importNestedInput } from "../inputs/GuildUserUpdateManyWithoutGuild_importNestedInput";
import { IntegrationTypeUpdateOneRequiredWithoutGuild_importsNestedInput } from "../inputs/IntegrationTypeUpdateOneRequiredWithoutGuild_importsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

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

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  authentication_token?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationTypeUpdateOneRequiredWithoutGuild_importsNestedInput, {
    nullable: true
  })
  integration_type?: IntegrationTypeUpdateOneRequiredWithoutGuild_importsNestedInput | undefined;

  @TypeGraphQL.Field(_type => GuildImportStatusUpdateOneRequiredWithoutGuild_importsNestedInput, {
    nullable: true
  })
  import_status?: GuildImportStatusUpdateOneRequiredWithoutGuild_importsNestedInput | undefined;

  @TypeGraphQL.Field(_type => GuildUserUpdateManyWithoutGuild_importNestedInput, {
    nullable: true
  })
  users?: GuildUserUpdateManyWithoutGuild_importNestedInput | undefined;
}
