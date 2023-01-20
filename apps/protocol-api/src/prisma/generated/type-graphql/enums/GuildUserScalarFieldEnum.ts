import * as TypeGraphQL from "type-graphql";

export enum GuildUserScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  user_id = "user_id",
  guild_id = "guild_id",
  membership_status_id = "membership_status_id",
  favorite = "favorite",
  guild_import_id = "guild_import_id"
}
TypeGraphQL.registerEnumType(GuildUserScalarFieldEnum, {
  name: "GuildUserScalarFieldEnum",
  description: undefined,
});
