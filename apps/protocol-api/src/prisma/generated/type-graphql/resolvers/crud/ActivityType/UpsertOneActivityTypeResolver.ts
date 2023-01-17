import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneActivityTypeArgs } from "./args/UpsertOneActivityTypeArgs";
import { ActivityType } from "../../../models/ActivityType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ActivityType)
export class UpsertOneActivityTypeResolver {
  @TypeGraphQL.Mutation(_returns => ActivityType, {
    nullable: false
  })
  async upsertOneActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneActivityTypeArgs): Promise<ActivityType> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).activityType.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
