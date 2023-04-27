import * as TypeGraphQL from "type-graphql";

export enum GuildActivityTypeScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  guild_id = "guild_id",
  activity_type_id = "activity_type_id",
  migrated_from_id = "migrated_from_id"
}
TypeGraphQL.registerEnumType(GuildActivityTypeScalarFieldEnum, {
  name: "GuildActivityTypeScalarFieldEnum",
  description: undefined,
});
