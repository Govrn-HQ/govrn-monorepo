import * as TypeGraphQL from "type-graphql";

export enum ContributionScalarFieldEnum {
  id = "id",
  updatedAt = "updatedAt",
  name = "name",
  status_id = "status_id",
  activity_type_id = "activity_type_id",
  user_id = "user_id",
  date_of_submission = "date_of_submission",
  date_of_engagement = "date_of_engagement",
  details = "details",
  proof = "proof"
}
TypeGraphQL.registerEnumType(ContributionScalarFieldEnum, {
  name: "ContributionScalarFieldEnum",
  description: undefined,
});
