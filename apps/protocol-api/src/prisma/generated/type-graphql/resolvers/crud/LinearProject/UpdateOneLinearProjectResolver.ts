import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneLinearProjectArgs } from "./args/UpdateOneLinearProjectArgs";
import { LinearProject } from "../../../models/LinearProject";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LinearProject)
export class UpdateOneLinearProjectResolver {
  @TypeGraphQL.Mutation(_returns => LinearProject, {
    nullable: true
  })
  async updateOneLinearProject(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneLinearProjectArgs): Promise<LinearProject | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).linearProject.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
