import * as TypeGraphQL from "type-graphql";
import { LinearIssue } from "../../../models/LinearIssue";
import { LinearTeam } from "../../../models/LinearTeam";
import { LinearTeamIssuesArgs } from "./args/LinearTeamIssuesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LinearTeam)
export class LinearTeamRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [LinearIssue], {
    nullable: false
  })
  async issues(@TypeGraphQL.Root() linearTeam: LinearTeam, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: LinearTeamIssuesArgs): Promise<LinearIssue[]> {
    return getPrismaFromContext(ctx).linearTeam.findUnique({
      where: {
        id: linearTeam.id,
      },
    }).issues(args);
  }
}
