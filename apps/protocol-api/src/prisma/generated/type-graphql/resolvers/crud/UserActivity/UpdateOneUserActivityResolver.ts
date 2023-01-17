import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneUserActivityArgs } from "./args/UpdateOneUserActivityArgs";
import { UserActivity } from "../../../models/UserActivity";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserActivity)
export class UpdateOneUserActivityResolver {
  @TypeGraphQL.Mutation(_returns => UserActivity, {
    nullable: true
  })
  async updateOneUserActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneUserActivityArgs): Promise<UserActivity | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userActivity.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
