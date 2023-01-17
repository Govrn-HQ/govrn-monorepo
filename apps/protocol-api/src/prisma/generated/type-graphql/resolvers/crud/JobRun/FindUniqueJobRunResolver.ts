import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueJobRunArgs } from "./args/FindUniqueJobRunArgs";
import { JobRun } from "../../../models/JobRun";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => JobRun)
export class FindUniqueJobRunResolver {
  @TypeGraphQL.Query(_returns => JobRun, {
    nullable: true
  })
  async jobRun(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueJobRunArgs): Promise<JobRun | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).jobRun.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
