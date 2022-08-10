import * as TypeGraphQL from "type-graphql";

export enum ChainTypeScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  name = "name"
}
TypeGraphQL.registerEnumType(ChainTypeScalarFieldEnum, {
  name: "ChainTypeScalarFieldEnum",
  description: undefined,
});
