import * as TypeGraphQL from "type-graphql";

export enum ChainScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  name = "name",
  chain_id = "chain_id"
}
TypeGraphQL.registerEnumType(ChainScalarFieldEnum, {
  name: "ChainScalarFieldEnum",
  description: undefined,
});
