import * as TypeGraphQL from "type-graphql";

export enum TwitterUserScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  twitter_user_id = "twitter_user_id",
  name = "name",
  username = "username",
  description = "description",
  user_id = "user_id"
}
TypeGraphQL.registerEnumType(TwitterUserScalarFieldEnum, {
  name: "TwitterUserScalarFieldEnum",
  description: undefined,
});
