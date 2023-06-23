import * as TypeGraphQL from "type-graphql";

export enum SplitPaymentScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  token_address = "token_address",
  amount = "amount",
  tx_hash = "tx_hash",
  sender_address = "sender_address",
  recipient_address = "recipient_address",
  sender_user_id = "sender_user_id",
  split_contract_id = "split_contract_id"
}
TypeGraphQL.registerEnumType(SplitPaymentScalarFieldEnum, {
  name: "SplitPaymentScalarFieldEnum",
  description: undefined,
});
