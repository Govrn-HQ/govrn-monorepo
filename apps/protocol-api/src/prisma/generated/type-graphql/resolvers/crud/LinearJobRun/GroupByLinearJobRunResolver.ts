import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByLinearJobRunArgs } from "./args/GroupByLinearJobRunArgs";
import { LinearJobRun } from "../../../models/LinearJobRun";
import { LinearJobRunGroupBy } from "../../outputs/LinearJobRunGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LinearJobRun)
export class GroupByLinearJobRunResolver {
  @TypeGraphQL.Query(_returns => [LinearJobRunGroupBy], {
    nullable: false
  })
  async groupByLinearJobRun(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByLinearJobRunArgs): Promise<LinearJobRunGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).linearJobRun.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
