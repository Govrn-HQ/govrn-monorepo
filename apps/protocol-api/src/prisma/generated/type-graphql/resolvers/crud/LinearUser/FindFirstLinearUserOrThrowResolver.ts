import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstLinearUserOrThrowArgs } from "./args/FindFirstLinearUserOrThrowArgs";
import { LinearUser } from "../../../models/LinearUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LinearUser)
export class FindFirstLinearUserOrThrowResolver {
  @TypeGraphQL.Query(_returns => LinearUser, {
    nullable: true
  })
  async findFirstLinearUserOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLinearUserOrThrowArgs): Promise<LinearUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).linearUser.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
