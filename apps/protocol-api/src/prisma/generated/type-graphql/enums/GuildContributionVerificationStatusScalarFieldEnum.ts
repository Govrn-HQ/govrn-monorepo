import * as TypeGraphQL from "type-graphql";

export enum GuildContributionVerificationStatusScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  name = "name",
  verified = "verified",
  attestationThreshold = "attestationThreshold"
}
TypeGraphQL.registerEnumType(GuildContributionVerificationStatusScalarFieldEnum, {
  name: "GuildContributionVerificationStatusScalarFieldEnum",
  description: undefined,
});
