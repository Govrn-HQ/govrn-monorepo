import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueLinearTeamArgs } from "./args/FindUniqueLinearTeamArgs";
import { LinearTeam } from "../../../models/LinearTeam";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LinearTeam)
export class FindUniqueLinearTeamResolver {
  @TypeGraphQL.Query(_returns => LinearTeam, {
    nullable: true
  })
  async linearTeam(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLinearTeamArgs): Promise<LinearTeam | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).linearTeam.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
