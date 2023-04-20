import * as TypeGraphQL from "type-graphql";

export enum LinearUserScalarFieldEnum {
  id = "id",
  active = "active",
  createdAt = "createdAt",
  displayName = "displayName",
  email = "email",
  linear_id = "linear_id",
  name = "name",
  url = "url",
  access_token = "access_token",
  active_token = "active_token",
  user_id = "user_id"
}
TypeGraphQL.registerEnumType(LinearUserScalarFieldEnum, {
  name: "LinearUserScalarFieldEnum",
  description: undefined,
});
