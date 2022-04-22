import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateLinearJobRunArgs } from "./args/AggregateLinearJobRunArgs";
import { LinearJobRun } from "../../../models/LinearJobRun";
import { AggregateLinearJobRun } from "../../outputs/AggregateLinearJobRun";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LinearJobRun)
export class AggregateLinearJobRunResolver {
  @TypeGraphQL.Query(_returns => AggregateLinearJobRun, {
    nullable: false
  })
  async aggregateLinearJobRun(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLinearJobRunArgs): Promise<AggregateLinearJobRun> {
    return getPrismaFromContext(ctx).linearJobRun.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
