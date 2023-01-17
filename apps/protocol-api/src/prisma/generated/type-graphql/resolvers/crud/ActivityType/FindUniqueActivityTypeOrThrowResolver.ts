import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueActivityTypeOrThrowArgs } from "./args/FindUniqueActivityTypeOrThrowArgs";
import { ActivityType } from "../../../models/ActivityType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ActivityType)
export class FindUniqueActivityTypeOrThrowResolver {
  @TypeGraphQL.Query(_returns => ActivityType, {
    nullable: true
  })
  async getActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueActivityTypeOrThrowArgs): Promise<ActivityType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).activityType.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
