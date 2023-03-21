import * as TypeGraphQL from "type-graphql";

export enum VerificationSettingScalarFieldEnum {
  id = "id",
  guild_id = "guild_id",
  num_of_attestations = "num_of_attestations",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(VerificationSettingScalarFieldEnum, {
  name: "VerificationSettingScalarFieldEnum",
  description: undefined,
});
