import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneJobRunArgs } from "./args/UpdateOneJobRunArgs";
import { JobRun } from "../../../models/JobRun";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => JobRun)
export class UpdateOneJobRunResolver {
  @TypeGraphQL.Mutation(_returns => JobRun, {
    nullable: true
  })
  async updateOneJobRun(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneJobRunArgs): Promise<JobRun | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).jobRun.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
