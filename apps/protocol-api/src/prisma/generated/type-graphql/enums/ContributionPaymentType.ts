import * as TypeGraphQL from "type-graphql";

export enum ContributionPaymentType {
  TIP = "TIP",
  REPORT = "REPORT"
}
TypeGraphQL.registerEnumType(ContributionPaymentType, {
  name: "ContributionPaymentType",
  description: undefined,
});
