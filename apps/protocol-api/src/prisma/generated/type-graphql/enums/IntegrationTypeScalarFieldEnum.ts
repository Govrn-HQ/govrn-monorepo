import * as TypeGraphQL from "type-graphql";

export enum IntegrationTypeScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  name = "name"
}
TypeGraphQL.registerEnumType(IntegrationTypeScalarFieldEnum, {
  name: "IntegrationTypeScalarFieldEnum",
  description: undefined,
});
