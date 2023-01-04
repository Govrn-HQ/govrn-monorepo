import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { AggregateJobRunArgs } from "./args/AggregateJobRunArgs";
import { JobRun } from "../../../models/JobRun";
import { AggregateJobRun } from "../../outputs/AggregateJobRun";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => JobRun)
export class AggregateJobRunResolver {
  @TypeGraphQL.Query(_returns => AggregateJobRun, {
    nullable: false
  })
  async aggregateJobRun(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateJobRunArgs): Promise<AggregateJobRun> {
    return getPrismaFromContext(ctx).jobRun.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
