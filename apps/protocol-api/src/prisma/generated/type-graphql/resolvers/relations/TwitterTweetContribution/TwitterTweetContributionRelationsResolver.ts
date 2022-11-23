import * as TypeGraphQL from "type-graphql";
import { Contribution } from "../../../models/Contribution";
import { TwitterTweet } from "../../../models/TwitterTweet";
import { TwitterTweetContribution } from "../../../models/TwitterTweetContribution";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TwitterTweetContribution)
export class TwitterTweetContributionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => TwitterTweet, {
    nullable: false
  })
  async twitter_tweet(@TypeGraphQL.Root() twitterTweetContribution: TwitterTweetContribution, @TypeGraphQL.Ctx() ctx: any): Promise<TwitterTweet> {
    return getPrismaFromContext(ctx).twitterTweetContribution.findUnique({
      where: {
        id: twitterTweetContribution.id,
      },
    }).twitter_tweet({});
  }

  @TypeGraphQL.FieldResolver(_type => Contribution, {
    nullable: false
  })
  async contribution(@TypeGraphQL.Root() twitterTweetContribution: TwitterTweetContribution, @TypeGraphQL.Ctx() ctx: any): Promise<Contribution> {
    return getPrismaFromContext(ctx).twitterTweetContribution.findUnique({
      where: {
        id: twitterTweetContribution.id,
      },
    }).contribution({});
  }
}
