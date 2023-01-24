import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { GuildImportStatusUpdateOneRequiredWithoutGuild_importsNestedInput } from "../inputs/GuildImportStatusUpdateOneRequiredWithoutGuild_importsNestedInput";
import { GuildUpdateOneRequiredWithoutGuild_importsNestedInput } from "../inputs/GuildUpdateOneRequiredWithoutGuild_importsNestedInput";
import { GuildUserUpdateManyWithoutGuild_importNestedInput } from "../inputs/GuildUserUpdateManyWithoutGuild_importNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("GuildImportUpdateWithoutIntegration_typeInput", {
  isAbstract: true
})
export class GuildImportUpdateWithoutIntegration_typeInput {
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

  @TypeGraphQL.Field(_type => GuildImportStatusUpdateOneRequiredWithoutGuild_importsNestedInput, {
    nullable: true
  })
  import_status?: GuildImportStatusUpdateOneRequiredWithoutGuild_importsNestedInput | undefined;

  @TypeGraphQL.Field(_type => GuildUserUpdateManyWithoutGuild_importNestedInput, {
    nullable: true
  })
  users?: GuildUserUpdateManyWithoutGuild_importNestedInput | undefined;
}
