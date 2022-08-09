import * as TypeGraphQL from 'type-graphql';
import { Contribution } from '../../../models/Contribution';
import { TwitterTweet } from '../../../models/TwitterTweet';
import { TwitterUser } from '../../../models/TwitterUser';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => TwitterTweet)
export class TwitterTweetRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => TwitterUser, {
    nullable: true,
  })
  async twitter_user(
    @TypeGraphQL.Root() twitterTweet: TwitterTweet,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<TwitterUser | null> {
    return getPrismaFromContext(ctx)
      .twitterTweet.findUnique({
        where: {
          id: twitterTweet.id,
        },
      })
      .twitter_user({});
  }

  @TypeGraphQL.FieldResolver(_type => Contribution, {
    nullable: true,
  })
  async contribution(
    @TypeGraphQL.Root() twitterTweet: TwitterTweet,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<Contribution | null> {
    return getPrismaFromContext(ctx)
      .twitterTweet.findUnique({
        where: {
          id: twitterTweet.id,
        },
      })
      .contribution({});
  }
}
