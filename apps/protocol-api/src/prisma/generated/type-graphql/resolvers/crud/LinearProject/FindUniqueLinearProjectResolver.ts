import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueLinearProjectArgs } from "./args/FindUniqueLinearProjectArgs";
import { LinearProject } from "../../../models/LinearProject";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LinearProject)
export class FindUniqueLinearProjectResolver {
  @TypeGraphQL.Query(_returns => LinearProject, {
    nullable: true
  })
  async linearProject(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLinearProjectArgs): Promise<LinearProject | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).linearProject.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
