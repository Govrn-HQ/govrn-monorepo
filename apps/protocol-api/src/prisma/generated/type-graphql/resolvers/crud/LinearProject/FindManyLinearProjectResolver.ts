import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { FindManyLinearProjectArgs } from "./args/FindManyLinearProjectArgs";
import { LinearProject } from "../../../models/LinearProject";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LinearProject)
export class FindManyLinearProjectResolver {
  @TypeGraphQL.Query(_returns => [LinearProject], {
    nullable: false
  })
  async linearProjects(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyLinearProjectArgs): Promise<LinearProject[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).linearProject.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
