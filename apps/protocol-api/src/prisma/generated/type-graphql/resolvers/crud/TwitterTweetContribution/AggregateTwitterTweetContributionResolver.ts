import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTwitterTweetContributionArgs } from "./args/AggregateTwitterTweetContributionArgs";
import { TwitterTweetContribution } from "../../../models/TwitterTweetContribution";
import { AggregateTwitterTweetContribution } from "../../outputs/AggregateTwitterTweetContribution";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TwitterTweetContribution)
export class AggregateTwitterTweetContributionResolver {
  @TypeGraphQL.Query(_returns => AggregateTwitterTweetContribution, {
    nullable: false
  })
  async aggregateTwitterTweetContribution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTwitterTweetContributionArgs): Promise<AggregateTwitterTweetContribution> {
    return getPrismaFromContext(ctx).twitterTweetContribution.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
