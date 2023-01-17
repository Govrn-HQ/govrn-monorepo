import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByUserActivityArgs } from "./args/GroupByUserActivityArgs";
import { UserActivity } from "../../../models/UserActivity";
import { UserActivityGroupBy } from "../../outputs/UserActivityGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserActivity)
export class GroupByUserActivityResolver {
  @TypeGraphQL.Query(_returns => [UserActivityGroupBy], {
    nullable: false
  })
  async groupByUserActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByUserActivityArgs): Promise<UserActivityGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userActivity.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
