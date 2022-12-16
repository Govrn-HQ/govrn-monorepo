import * as TypeGraphQL from "type-graphql";
import { LinearIssue } from "../../../models/LinearIssue";
import { LinearProject } from "../../../models/LinearProject";
import { LinearProjectIssuesArgs } from "./args/LinearProjectIssuesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LinearProject)
export class LinearProjectRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [LinearIssue], {
    nullable: false
  })
  async issues(@TypeGraphQL.Root() linearProject: LinearProject, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: LinearProjectIssuesArgs): Promise<LinearIssue[]> {
    return getPrismaFromContext(ctx).linearProject.findUnique({
      where: {
        id: linearProject.id,
      },
    }).issues(args);
  }
}
