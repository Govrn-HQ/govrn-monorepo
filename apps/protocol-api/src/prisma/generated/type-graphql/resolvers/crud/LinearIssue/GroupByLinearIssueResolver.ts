import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { GroupByLinearIssueArgs } from "./args/GroupByLinearIssueArgs";
import { LinearIssue } from "../../../models/LinearIssue";
import { LinearIssueGroupBy } from "../../outputs/LinearIssueGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LinearIssue)
export class GroupByLinearIssueResolver {
  @TypeGraphQL.Query(_returns => [LinearIssueGroupBy], {
    nullable: false
  })
  async groupByLinearIssue(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByLinearIssueArgs): Promise<LinearIssueGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).linearIssue.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
