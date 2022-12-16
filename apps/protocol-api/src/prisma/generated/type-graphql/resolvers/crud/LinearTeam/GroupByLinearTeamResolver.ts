import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { GroupByLinearTeamArgs } from "./args/GroupByLinearTeamArgs";
import { LinearTeam } from "../../../models/LinearTeam";
import { LinearTeamGroupBy } from "../../outputs/LinearTeamGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LinearTeam)
export class GroupByLinearTeamResolver {
  @TypeGraphQL.Query(_returns => [LinearTeamGroupBy], {
    nullable: false
  })
  async groupByLinearTeam(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByLinearTeamArgs): Promise<LinearTeamGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).linearTeam.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
