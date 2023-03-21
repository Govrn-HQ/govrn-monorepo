import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { GuildUpdateOneWithoutVerificationSettingsNestedInput } from "../inputs/GuildUpdateOneWithoutVerificationSettingsNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";

@TypeGraphQL.InputType("VerificationSettingUpdateInput", {
  isAbstract: true
})
export class VerificationSettingUpdateInput {
  @TypeGraphQL.Field(_type => GuildUpdateOneWithoutVerificationSettingsNestedInput, {
    nullable: true
  })
  guild?: GuildUpdateOneWithoutVerificationSettingsNestedInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  num_of_attestations?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
