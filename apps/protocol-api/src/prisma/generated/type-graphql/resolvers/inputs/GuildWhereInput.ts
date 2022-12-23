import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumGuildStatusFilter } from "../inputs/EnumGuildStatusFilter";
import { GuildActivityTypeListRelationFilter } from "../inputs/GuildActivityTypeListRelationFilter";
import { GuildContributionListRelationFilter } from "../inputs/GuildContributionListRelationFilter";
import { GuildImportListRelationFilter } from "../inputs/GuildImportListRelationFilter";
import { GuildUserListRelationFilter } from "../inputs/GuildUserListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TwitterAccountListRelationFilter } from "../inputs/TwitterAccountListRelationFilter";

@TypeGraphQL.InputType("GuildWhereInput", {
  isAbstract: true
})
export class GuildWhereInput {
  @TypeGraphQL.Field(_type => [GuildWhereInput], {
    nullable: true
  })
  AND?: GuildWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildWhereInput], {
    nullable: true
  })
  OR?: GuildWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildWhereInput], {
    nullable: true
  })
  NOT?: GuildWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  discord_id?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  congrats_channel?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  logo?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumGuildStatusFilter, {
    nullable: true
  })
  status?: EnumGuildStatusFilter | undefined;

  @TypeGraphQL.Field(_type => GuildContributionListRelationFilter, {
    nullable: true
  })
  contributions?: GuildContributionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => GuildUserListRelationFilter, {
    nullable: true
  })
  users?: GuildUserListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TwitterAccountListRelationFilter, {
    nullable: true
  })
  twitter_accounts?: TwitterAccountListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => GuildActivityTypeListRelationFilter, {
    nullable: true
  })
  activity_type?: GuildActivityTypeListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  contribution_reporting_channel?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => GuildImportListRelationFilter, {
    nullable: true
  })
  guild_imports?: GuildImportListRelationFilter | undefined;
}
