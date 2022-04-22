import * as TypeGraphQL from "type-graphql";

export enum ActivityTypeScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  name = "name",
  active = "active",
  category_activity_id = "category_activity_id"
}
TypeGraphQL.registerEnumType(ActivityTypeScalarFieldEnum, {
  name: "ActivityTypeScalarFieldEnum",
  description: undefined,
});
