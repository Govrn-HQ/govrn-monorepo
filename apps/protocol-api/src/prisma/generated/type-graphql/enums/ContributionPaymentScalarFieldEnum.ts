import * as TypeGraphQL from "type-graphql";

export enum ContributionPaymentScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  contribution_id = "contribution_id",
  split_payment_id = "split_payment_id",
  type = "type"
}
TypeGraphQL.registerEnumType(ContributionPaymentScalarFieldEnum, {
  name: "ContributionPaymentScalarFieldEnum",
  description: undefined,
});
