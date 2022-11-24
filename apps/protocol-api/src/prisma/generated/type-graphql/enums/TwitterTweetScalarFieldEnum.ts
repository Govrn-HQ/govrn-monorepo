import * as TypeGraphQL from "type-graphql";

export enum TwitterTweetScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  twitter_tweet_id = "twitter_tweet_id",
  text = "text",
  twitter_user_id = "twitter_user_id",
  twitter_tweet_contribution_ids = "twitter_tweet_contribution_ids"
}
TypeGraphQL.registerEnumType(TwitterTweetScalarFieldEnum, {
  name: "TwitterTweetScalarFieldEnum",
  description: undefined,
});
