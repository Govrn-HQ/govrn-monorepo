import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstLinearTeamArgs } from "./args/FindFirstLinearTeamArgs";
import { LinearTeam } from "../../../models/LinearTeam";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LinearTeam)
export class FindFirstLinearTeamResolver {
  @TypeGraphQL.Query(_returns => LinearTeam, {
    nullable: true
  })
  async findFirstLinearTeam(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLinearTeamArgs): Promise<LinearTeam | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).linearTeam.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
