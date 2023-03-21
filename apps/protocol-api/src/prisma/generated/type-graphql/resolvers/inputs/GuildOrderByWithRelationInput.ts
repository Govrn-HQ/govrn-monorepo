import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildActivityTypeOrderByRelationAggregateInput } from "../inputs/GuildActivityTypeOrderByRelationAggregateInput";
import { GuildContributionOrderByRelationAggregateInput } from "../inputs/GuildContributionOrderByRelationAggregateInput";
import { GuildImportOrderByRelationAggregateInput } from "../inputs/GuildImportOrderByRelationAggregateInput";
import { GuildUserOrderByRelationAggregateInput } from "../inputs/GuildUserOrderByRelationAggregateInput";
import { TwitterAccountOrderByRelationAggregateInput } from "../inputs/TwitterAccountOrderByRelationAggregateInput";
import { VerificationSettingOrderByRelationAggregateInput } from "../inputs/VerificationSettingOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GuildOrderByWithRelationInput", {
  isAbstract: true
})
export class GuildOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  discord_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  congrats_channel?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  logo?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GuildContributionOrderByRelationAggregateInput, {
    nullable: true
  })
  contributions?: GuildContributionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildUserOrderByRelationAggregateInput, {
    nullable: true
  })
  users?: GuildUserOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TwitterAccountOrderByRelationAggregateInput, {
    nullable: true
  })
  twitter_accounts?: TwitterAccountOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildActivityTypeOrderByRelationAggregateInput, {
    nullable: true
  })
  activity_type?: GuildActivityTypeOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  contribution_reporting_channel?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GuildImportOrderByRelationAggregateInput, {
    nullable: true
  })
  guild_imports?: GuildImportOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VerificationSettingOrderByRelationAggregateInput, {
    nullable: true
  })
  verificationSettings?: VerificationSettingOrderByRelationAggregateInput | undefined;
}
