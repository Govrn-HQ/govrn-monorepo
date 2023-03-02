import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { GuildImportUpdateOneWithoutUsersNestedInput } from "../inputs/GuildImportUpdateOneWithoutUsersNestedInput";
import { GuildMembershipStatusUpdateOneRequiredWithoutGuildUsersNestedInput } from "../inputs/GuildMembershipStatusUpdateOneRequiredWithoutGuildUsersNestedInput";
import { GuildUpdateOneRequiredWithoutUsersNestedInput } from "../inputs/GuildUpdateOneRequiredWithoutUsersNestedInput";

@TypeGraphQL.InputType("GuildUserUpdateWithoutUserInput", {
  isAbstract: true
})
export class GuildUserUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GuildUpdateOneRequiredWithoutUsersNestedInput, {
    nullable: true
  })
  guild?: GuildUpdateOneRequiredWithoutUsersNestedInput | undefined;

  @TypeGraphQL.Field(_type => GuildMembershipStatusUpdateOneRequiredWithoutGuildUsersNestedInput, {
    nullable: true
  })
  membershipStatus?: GuildMembershipStatusUpdateOneRequiredWithoutGuildUsersNestedInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  favorite?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GuildImportUpdateOneWithoutUsersNestedInput, {
    nullable: true
  })
  guild_import?: GuildImportUpdateOneWithoutUsersNestedInput | undefined;
}
