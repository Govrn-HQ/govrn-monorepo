import * as TypeGraphQL from "type-graphql";

export enum CanonicalGuildActivityTypeScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  name = "name",
  guild_id = "guild_id",
  guild_activity_type_id = "guild_activity_type_id"
}
TypeGraphQL.registerEnumType(CanonicalGuildActivityTypeScalarFieldEnum, {
  name: "CanonicalGuildActivityTypeScalarFieldEnum",
  description: undefined,
});
