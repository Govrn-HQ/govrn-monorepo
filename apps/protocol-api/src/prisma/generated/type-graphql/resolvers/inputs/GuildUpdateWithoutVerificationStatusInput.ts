import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumGuildStatusFieldUpdateOperationsInput } from "../inputs/EnumGuildStatusFieldUpdateOperationsInput";
import { GuildActivityTypeUpdateManyWithoutGuildInput } from "../inputs/GuildActivityTypeUpdateManyWithoutGuildInput";
import { GuildContributionUpdateManyWithoutGuildInput } from "../inputs/GuildContributionUpdateManyWithoutGuildInput";
import { GuildUserUpdateManyWithoutGuildInput } from "../inputs/GuildUserUpdateManyWithoutGuildInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { TwitterAccountUpdateManyWithoutGuildInput } from "../inputs/TwitterAccountUpdateManyWithoutGuildInput";

@TypeGraphQL.InputType("GuildUpdateWithoutVerificationStatusInput", {
  isAbstract: true
})
export class GuildUpdateWithoutVerificationStatusInput {
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

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  congrats_channel?: NullableStringFieldUpdateOperationsInput | undefined;

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

  @TypeGraphQL.Field(_type => TwitterAccountUpdateManyWithoutGuildInput, {
    nullable: true
  })
  twitter_accounts?: TwitterAccountUpdateManyWithoutGuildInput | undefined;

  @TypeGraphQL.Field(_type => GuildActivityTypeUpdateManyWithoutGuildInput, {
    nullable: true
  })
  activity_type?: GuildActivityTypeUpdateManyWithoutGuildInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  contribution_reporting_channel?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumGuildStatusFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: EnumGuildStatusFieldUpdateOperationsInput | undefined;
}
