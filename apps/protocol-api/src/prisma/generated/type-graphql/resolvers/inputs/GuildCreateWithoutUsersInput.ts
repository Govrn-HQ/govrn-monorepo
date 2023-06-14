import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CanonicalGuildActivityTypeCreateNestedManyWithoutGuildInput } from "../inputs/CanonicalGuildActivityTypeCreateNestedManyWithoutGuildInput";
import { GuildActivityTypeCreateNestedManyWithoutGuildInput } from "../inputs/GuildActivityTypeCreateNestedManyWithoutGuildInput";
import { GuildContributionCreateNestedManyWithoutGuildInput } from "../inputs/GuildContributionCreateNestedManyWithoutGuildInput";
import { GuildImportCreateNestedManyWithoutGuildInput } from "../inputs/GuildImportCreateNestedManyWithoutGuildInput";
import { GuildTwitterIntegrationCreateNestedOneWithoutGuildInput } from "../inputs/GuildTwitterIntegrationCreateNestedOneWithoutGuildInput";
import { TwitterAccountCreateNestedManyWithoutGuildInput } from "../inputs/TwitterAccountCreateNestedManyWithoutGuildInput";
import { VerificationSettingCreateNestedOneWithoutGuildsInput } from "../inputs/VerificationSettingCreateNestedOneWithoutGuildsInput";
import { GuildStatus } from "../../enums/GuildStatus";

@TypeGraphQL.InputType("GuildCreateWithoutUsersInput", {
  isAbstract: true
})
export class GuildCreateWithoutUsersInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  discord_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  congrats_channel?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  logo?: string | undefined;

  @TypeGraphQL.Field(_type => GuildStatus, {
    nullable: true
  })
  status?: "INPUTTED" | "VALIDATED" | "ONBOARDED" | undefined;

  @TypeGraphQL.Field(_type => GuildContributionCreateNestedManyWithoutGuildInput, {
    nullable: true
  })
  contributions?: GuildContributionCreateNestedManyWithoutGuildInput | undefined;

  @TypeGraphQL.Field(_type => TwitterAccountCreateNestedManyWithoutGuildInput, {
    nullable: true
  })
  twitter_accounts?: TwitterAccountCreateNestedManyWithoutGuildInput | undefined;

  @TypeGraphQL.Field(_type => GuildActivityTypeCreateNestedManyWithoutGuildInput, {
    nullable: true
  })
  activity_type?: GuildActivityTypeCreateNestedManyWithoutGuildInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contribution_reporting_channel?: string | undefined;

  @TypeGraphQL.Field(_type => GuildImportCreateNestedManyWithoutGuildInput, {
    nullable: true
  })
  guild_imports?: GuildImportCreateNestedManyWithoutGuildInput | undefined;

  @TypeGraphQL.Field(_type => VerificationSettingCreateNestedOneWithoutGuildsInput, {
    nullable: true
  })
  verification_setting?: VerificationSettingCreateNestedOneWithoutGuildsInput | undefined;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeCreateNestedManyWithoutGuildInput, {
    nullable: true
  })
  canonical_guild_activity_type?: CanonicalGuildActivityTypeCreateNestedManyWithoutGuildInput | undefined;

  @TypeGraphQL.Field(_type => GuildTwitterIntegrationCreateNestedOneWithoutGuildInput, {
    nullable: true
  })
  twitter_integration?: GuildTwitterIntegrationCreateNestedOneWithoutGuildInput | undefined;
}
