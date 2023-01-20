import * as TypeGraphQL from "type-graphql";

export enum GuildImportScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  authentication_token = "authentication_token",
  guild_id = "guild_id",
  integration_type_id = "integration_type_id",
  import_status_id = "import_status_id"
}
TypeGraphQL.registerEnumType(GuildImportScalarFieldEnum, {
  name: "GuildImportScalarFieldEnum",
  description: undefined,
});
