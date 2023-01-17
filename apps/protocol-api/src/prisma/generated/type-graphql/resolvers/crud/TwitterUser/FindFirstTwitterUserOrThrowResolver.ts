import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTwitterUserOrThrowArgs } from "./args/FindFirstTwitterUserOrThrowArgs";
import { TwitterUser } from "../../../models/TwitterUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TwitterUser)
export class FindFirstTwitterUserOrThrowResolver {
  @TypeGraphQL.Query(_returns => TwitterUser, {
    nullable: true
  })
  async findFirstTwitterUserOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTwitterUserOrThrowArgs): Promise<TwitterUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterUser.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
