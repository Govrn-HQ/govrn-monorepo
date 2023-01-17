import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneLinearTeamArgs } from "./args/DeleteOneLinearTeamArgs";
import { LinearTeam } from "../../../models/LinearTeam";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LinearTeam)
export class DeleteOneLinearTeamResolver {
  @TypeGraphQL.Mutation(_returns => LinearTeam, {
    nullable: true
  })
  async deleteOneLinearTeam(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneLinearTeamArgs): Promise<LinearTeam | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).linearTeam.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
