import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { GuildUpdateManyWithoutVerification_settingNestedInput } from "../inputs/GuildUpdateManyWithoutVerification_settingNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";

@TypeGraphQL.InputType("VerificationSettingUpdateInput", {
  isAbstract: true
})
export class VerificationSettingUpdateInput {
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
  num_of_attestations?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GuildUpdateManyWithoutVerification_settingNestedInput, {
    nullable: true
  })
  guilds?: GuildUpdateManyWithoutVerification_settingNestedInput | undefined;
}
