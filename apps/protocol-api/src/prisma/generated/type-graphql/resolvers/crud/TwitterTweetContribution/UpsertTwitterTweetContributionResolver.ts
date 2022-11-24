import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertTwitterTweetContributionArgs } from "./args/UpsertTwitterTweetContributionArgs";
import { TwitterTweetContribution } from "../../../models/TwitterTweetContribution";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TwitterTweetContribution)
export class UpsertTwitterTweetContributionResolver {
  @TypeGraphQL.Mutation(_returns => TwitterTweetContribution, {
    nullable: false
  })
  async upsertTwitterTweetContribution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertTwitterTweetContributionArgs): Promise<TwitterTweetContribution> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).twitterTweetContribution.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
