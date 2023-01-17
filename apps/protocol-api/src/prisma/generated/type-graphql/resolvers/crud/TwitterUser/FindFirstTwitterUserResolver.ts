import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTwitterUserArgs } from "./args/FindFirstTwitterUserArgs";
import { TwitterUser } from "../../../models/TwitterUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TwitterUser)
export class FindFirstTwitterUserResolver {
  @TypeGraphQL.Query(_returns => TwitterUser, {
    nullable: true
  })
  async findFirstTwitterUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTwitterUserArgs): Promise<TwitterUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterUser.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
