import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueUserActivityOrThrowArgs } from "./args/FindUniqueUserActivityOrThrowArgs";
import { UserActivity } from "../../../models/UserActivity";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserActivity)
export class FindUniqueUserActivityOrThrowResolver {
  @TypeGraphQL.Query(_returns => UserActivity, {
    nullable: true
  })
  async getUserActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueUserActivityOrThrowArgs): Promise<UserActivity | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userActivity.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
