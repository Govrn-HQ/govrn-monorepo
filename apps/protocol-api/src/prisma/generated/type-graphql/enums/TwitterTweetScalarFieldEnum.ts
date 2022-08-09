import * as TypeGraphQL from 'type-graphql';

export enum TwitterTweetScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  twitter_tweet_id = 'twitter_tweet_id',
  text = 'text',
  twitter_user_id = 'twitter_user_id',
  contribution_id = 'contribution_id',
}
TypeGraphQL.registerEnumType(TwitterTweetScalarFieldEnum, {
  name: 'TwitterTweetScalarFieldEnum',
  description: undefined,
});
