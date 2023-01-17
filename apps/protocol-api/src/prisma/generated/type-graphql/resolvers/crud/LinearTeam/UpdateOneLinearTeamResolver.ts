import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneLinearTeamArgs } from "./args/UpdateOneLinearTeamArgs";
import { LinearTeam } from "../../../models/LinearTeam";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LinearTeam)
export class UpdateOneLinearTeamResolver {
  @TypeGraphQL.Mutation(_returns => LinearTeam, {
    nullable: true
  })
  async updateOneLinearTeam(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneLinearTeamArgs): Promise<LinearTeam | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).linearTeam.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
