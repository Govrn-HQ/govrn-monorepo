import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumGuildStatusFieldUpdateOperationsInput } from "../inputs/EnumGuildStatusFieldUpdateOperationsInput";
import { GuildActivityTypeUpdateManyWithoutGuildNestedInput } from "../inputs/GuildActivityTypeUpdateManyWithoutGuildNestedInput";
import { GuildContributionUpdateManyWithoutGuildNestedInput } from "../inputs/GuildContributionUpdateManyWithoutGuildNestedInput";
import { GuildImportUpdateManyWithoutGuildNestedInput } from "../inputs/GuildImportUpdateManyWithoutGuildNestedInput";
import { GuildUserUpdateManyWithoutGuildNestedInput } from "../inputs/GuildUserUpdateManyWithoutGuildNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { TwitterAccountUpdateManyWithoutGuildNestedInput } from "../inputs/TwitterAccountUpdateManyWithoutGuildNestedInput";

@TypeGraphQL.InputType("GuildUpdateInput", {
  isAbstract: true
})
export class GuildUpdateInput {
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

  @TypeGraphQL.Field(_type => EnumGuildStatusFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: EnumGuildStatusFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GuildContributionUpdateManyWithoutGuildNestedInput, {
    nullable: true
  })
  contributions?: GuildContributionUpdateManyWithoutGuildNestedInput | undefined;

  @TypeGraphQL.Field(_type => GuildUserUpdateManyWithoutGuildNestedInput, {
    nullable: true
  })
  users?: GuildUserUpdateManyWithoutGuildNestedInput | undefined;

  @TypeGraphQL.Field(_type => TwitterAccountUpdateManyWithoutGuildNestedInput, {
    nullable: true
  })
  twitter_accounts?: TwitterAccountUpdateManyWithoutGuildNestedInput | undefined;

  @TypeGraphQL.Field(_type => GuildActivityTypeUpdateManyWithoutGuildNestedInput, {
    nullable: true
  })
  activity_type?: GuildActivityTypeUpdateManyWithoutGuildNestedInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  contribution_reporting_channel?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GuildImportUpdateManyWithoutGuildNestedInput, {
    nullable: true
  })
  guild_imports?: GuildImportUpdateManyWithoutGuildNestedInput | undefined;
}
