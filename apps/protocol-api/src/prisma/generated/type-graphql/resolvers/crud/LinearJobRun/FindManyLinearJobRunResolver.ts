import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyLinearJobRunArgs } from "./args/FindManyLinearJobRunArgs";
import { LinearJobRun } from "../../../models/LinearJobRun";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LinearJobRun)
export class FindManyLinearJobRunResolver {
  @TypeGraphQL.Query(_returns => [LinearJobRun], {
    nullable: false
  })
  async linearJobRuns(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyLinearJobRunArgs): Promise<LinearJobRun[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).linearJobRun.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
