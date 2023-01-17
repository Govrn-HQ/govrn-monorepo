import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByTwitterUserArgs } from "./args/GroupByTwitterUserArgs";
import { TwitterUser } from "../../../models/TwitterUser";
import { TwitterUserGroupBy } from "../../outputs/TwitterUserGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TwitterUser)
export class GroupByTwitterUserResolver {
  @TypeGraphQL.Query(_returns => [TwitterUserGroupBy], {
    nullable: false
  })
  async groupByTwitterUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTwitterUserArgs): Promise<TwitterUserGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterUser.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
