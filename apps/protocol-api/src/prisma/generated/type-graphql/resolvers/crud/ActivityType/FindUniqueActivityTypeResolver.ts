import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueActivityTypeArgs } from "./args/FindUniqueActivityTypeArgs";
import { ActivityType } from "../../../models/ActivityType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ActivityType)
export class FindUniqueActivityTypeResolver {
  @TypeGraphQL.Query(_returns => ActivityType, {
    nullable: true
  })
  async activityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueActivityTypeArgs): Promise<ActivityType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).activityType.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
