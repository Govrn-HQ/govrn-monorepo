import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { GuildActivityTypeUpdateManyWithoutGuildInput } from "../inputs/GuildActivityTypeUpdateManyWithoutGuildInput";
import { GuildContributionUpdateManyWithoutGuildInput } from "../inputs/GuildContributionUpdateManyWithoutGuildInput";
import { GuildUserUpdateManyWithoutGuildInput } from "../inputs/GuildUserUpdateManyWithoutGuildInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("GuildUpdateWithoutTwitter_accountInput", {
  isAbstract: true
})
export class GuildUpdateWithoutTwitter_accountInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  discord_id?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  congrats_channel?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  logo?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GuildContributionUpdateManyWithoutGuildInput, {
    nullable: true
  })
  contributions?: GuildContributionUpdateManyWithoutGuildInput | undefined;

  @TypeGraphQL.Field(_type => GuildUserUpdateManyWithoutGuildInput, {
    nullable: true
  })
  users?: GuildUserUpdateManyWithoutGuildInput | undefined;

  @TypeGraphQL.Field(_type => GuildActivityTypeUpdateManyWithoutGuildInput, {
    nullable: true
  })
  activity_type?: GuildActivityTypeUpdateManyWithoutGuildInput | undefined;
}
