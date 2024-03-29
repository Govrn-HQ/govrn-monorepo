import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { AggregateLinearProjectArgs } from "./args/AggregateLinearProjectArgs";
import { LinearProject } from "../../../models/LinearProject";
import { AggregateLinearProject } from "../../outputs/AggregateLinearProject";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LinearProject)
export class AggregateLinearProjectResolver {
  @TypeGraphQL.Query(_returns => AggregateLinearProject, {
    nullable: false
  })
  async aggregateLinearProject(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLinearProjectArgs): Promise<AggregateLinearProject> {
    return getPrismaFromContext(ctx).linearProject.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
