import * as TypeGraphQL from "type-graphql";

export enum ActivityTypeScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  name = "name",
  active = "active",
  "default" = "default"
}
TypeGraphQL.registerEnumType(ActivityTypeScalarFieldEnum, {
  name: "ActivityTypeScalarFieldEnum",
  description: undefined,
});
