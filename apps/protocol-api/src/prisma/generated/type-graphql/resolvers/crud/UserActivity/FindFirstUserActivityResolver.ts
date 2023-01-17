import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstUserActivityArgs } from "./args/FindFirstUserActivityArgs";
import { UserActivity } from "../../../models/UserActivity";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserActivity)
export class FindFirstUserActivityResolver {
  @TypeGraphQL.Query(_returns => UserActivity, {
    nullable: true
  })
  async findFirstUserActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUserActivityArgs): Promise<UserActivity | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userActivity.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
