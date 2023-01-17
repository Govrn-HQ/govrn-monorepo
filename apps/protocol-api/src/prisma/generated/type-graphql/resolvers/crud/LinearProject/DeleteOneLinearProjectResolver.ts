import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneLinearProjectArgs } from "./args/DeleteOneLinearProjectArgs";
import { LinearProject } from "../../../models/LinearProject";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LinearProject)
export class DeleteOneLinearProjectResolver {
  @TypeGraphQL.Mutation(_returns => LinearProject, {
    nullable: true
  })
  async deleteOneLinearProject(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneLinearProjectArgs): Promise<LinearProject | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).linearProject.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
