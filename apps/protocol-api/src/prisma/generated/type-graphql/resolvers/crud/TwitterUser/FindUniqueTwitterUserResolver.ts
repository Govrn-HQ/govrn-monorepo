import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTwitterUserArgs } from "./args/FindUniqueTwitterUserArgs";
import { TwitterUser } from "../../../models/TwitterUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TwitterUser)
export class FindUniqueTwitterUserResolver {
  @TypeGraphQL.Query(_returns => TwitterUser, {
    nullable: true
  })
  async twitterUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTwitterUserArgs): Promise<TwitterUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterUser.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
