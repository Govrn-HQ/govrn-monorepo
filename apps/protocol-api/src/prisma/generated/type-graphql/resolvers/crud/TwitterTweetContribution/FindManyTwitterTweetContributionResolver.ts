import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyTwitterTweetContributionArgs } from "./args/FindManyTwitterTweetContributionArgs";
import { TwitterTweetContribution } from "../../../models/TwitterTweetContribution";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TwitterTweetContribution)
export class FindManyTwitterTweetContributionResolver {
  @TypeGraphQL.Query(_returns => [TwitterTweetContribution], {
    nullable: false
  })
  async twitterTweetContributions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyTwitterTweetContributionArgs): Promise<TwitterTweetContribution[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterTweetContribution.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
