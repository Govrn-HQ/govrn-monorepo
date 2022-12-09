import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { GuildUpdateOneRequiredWithoutUsersInput } from "../inputs/GuildUpdateOneRequiredWithoutUsersInput";
import { UserUpdateOneRequiredWithoutGuild_usersInput } from "../inputs/UserUpdateOneRequiredWithoutGuild_usersInput";

@TypeGraphQL.InputType("GuildUserUpdateWithoutMembershipStatusInput", {
  isAbstract: true
})
export class GuildUserUpdateWithoutMembershipStatusInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutGuild_usersInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutGuild_usersInput | undefined;

  @TypeGraphQL.Field(_type => GuildUpdateOneRequiredWithoutUsersInput, {
    nullable: true
  })
  guild?: GuildUpdateOneRequiredWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  favorite?: BoolFieldUpdateOperationsInput | undefined;
}
