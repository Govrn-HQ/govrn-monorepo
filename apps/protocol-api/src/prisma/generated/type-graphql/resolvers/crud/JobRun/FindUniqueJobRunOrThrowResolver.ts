import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueJobRunOrThrowArgs } from "./args/FindUniqueJobRunOrThrowArgs";
import { JobRun } from "../../../models/JobRun";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => JobRun)
export class FindUniqueJobRunOrThrowResolver {
  @TypeGraphQL.Query(_returns => JobRun, {
    nullable: true
  })
  async getJobRun(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueJobRunOrThrowArgs): Promise<JobRun | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).jobRun.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
