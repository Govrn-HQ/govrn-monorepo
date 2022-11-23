import * as TypeGraphQL from "type-graphql";
import { TwitterTweet } from "../../../models/TwitterTweet";
import { TwitterTweetContribution } from "../../../models/TwitterTweetContribution";
import { TwitterUser } from "../../../models/TwitterUser";
import { TwitterTweetTwitter_tweet_contributionsArgs } from "./args/TwitterTweetTwitter_tweet_contributionsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TwitterTweet)
export class TwitterTweetRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => TwitterUser, {
    nullable: true
  })
  async twitter_user(@TypeGraphQL.Root() twitterTweet: TwitterTweet, @TypeGraphQL.Ctx() ctx: any): Promise<TwitterUser | null> {
    return getPrismaFromContext(ctx).twitterTweet.findUnique({
      where: {
        id: twitterTweet.id,
      },
    }).twitter_user({});
  }

  @TypeGraphQL.FieldResolver(_type => [TwitterTweetContribution], {
    nullable: false
  })
  async twitter_tweet_contributions(@TypeGraphQL.Root() twitterTweet: TwitterTweet, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TwitterTweetTwitter_tweet_contributionsArgs): Promise<TwitterTweetContribution[]> {
    return getPrismaFromContext(ctx).twitterTweet.findUnique({
      where: {
        id: twitterTweet.id,
      },
    }).twitter_tweet_contributions(args);
  }
}
