import * as TypeGraphQL from "type-graphql";

export enum SplitContractScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  chain_id = "chain_id",
  address = "address",
  tx_hash = "tx_hash",
  enabled = "enabled",
  user_split_contract_id = "user_split_contract_id"
}
TypeGraphQL.registerEnumType(SplitContractScalarFieldEnum, {
  name: "SplitContractScalarFieldEnum",
  description: undefined,
});
