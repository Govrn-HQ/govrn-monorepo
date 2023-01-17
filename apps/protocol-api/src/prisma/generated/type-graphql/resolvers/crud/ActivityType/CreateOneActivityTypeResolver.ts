import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneActivityTypeArgs } from "./args/CreateOneActivityTypeArgs";
import { ActivityType } from "../../../models/ActivityType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ActivityType)
export class CreateOneActivityTypeResolver {
  @TypeGraphQL.Mutation(_returns => ActivityType, {
    nullable: false
  })
  async createOneActivityType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneActivityTypeArgs): Promise<ActivityType> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).activityType.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
