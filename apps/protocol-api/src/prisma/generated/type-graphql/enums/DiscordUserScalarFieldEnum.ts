import * as TypeGraphQL from "type-graphql";

export enum DiscordUserScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  display_name = "display_name",
  discord_id = "discord_id",
  user_id = "user_id"
}
TypeGraphQL.registerEnumType(DiscordUserScalarFieldEnum, {
  name: "DiscordUserScalarFieldEnum",
  description: undefined,
});
