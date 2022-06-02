import * as TypeGraphQL from "type-graphql";

export enum JobRunScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  completedDate = "completedDate",
  startDate = "startDate",
  name = "name"
}
TypeGraphQL.registerEnumType(JobRunScalarFieldEnum, {
  name: "JobRunScalarFieldEnum",
  description: undefined,
});
