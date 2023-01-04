import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { GroupByLinearProjectArgs } from "./args/GroupByLinearProjectArgs";
import { LinearProject } from "../../../models/LinearProject";
import { LinearProjectGroupBy } from "../../outputs/LinearProjectGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LinearProject)
export class GroupByLinearProjectResolver {
  @TypeGraphQL.Query(_returns => [LinearProjectGroupBy], {
    nullable: false
  })
  async groupByLinearProject(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByLinearProjectArgs): Promise<LinearProjectGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).linearProject.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
