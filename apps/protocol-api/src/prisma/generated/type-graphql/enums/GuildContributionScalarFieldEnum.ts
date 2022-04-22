import * as TypeGraphQL from "type-graphql";

export enum GuildContributionScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  guild_id = "guild_id",
  contribution_id = "contribution_id"
}
TypeGraphQL.registerEnumType(GuildContributionScalarFieldEnum, {
  name: "GuildContributionScalarFieldEnum",
  description: undefined,
});
