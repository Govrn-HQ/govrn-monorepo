import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTwitterTweetContributionArgs } from "./args/FindUniqueTwitterTweetContributionArgs";
import { TwitterTweetContribution } from "../../../models/TwitterTweetContribution";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TwitterTweetContribution)
export class FindUniqueTwitterTweetContributionResolver {
  @TypeGraphQL.Query(_returns => TwitterTweetContribution, {
    nullable: true
  })
  async twitterTweetContribution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTwitterTweetContributionArgs): Promise<TwitterTweetContribution | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterTweetContribution.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
