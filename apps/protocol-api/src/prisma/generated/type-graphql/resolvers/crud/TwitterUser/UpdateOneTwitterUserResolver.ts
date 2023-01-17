import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneTwitterUserArgs } from "./args/UpdateOneTwitterUserArgs";
import { TwitterUser } from "../../../models/TwitterUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TwitterUser)
export class UpdateOneTwitterUserResolver {
  @TypeGraphQL.Mutation(_returns => TwitterUser, {
    nullable: true
  })
  async updateOneTwitterUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneTwitterUserArgs): Promise<TwitterUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).twitterUser.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
