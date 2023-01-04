import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUserActivityArgs } from "./args/AggregateUserActivityArgs";
import { UserActivity } from "../../../models/UserActivity";
import { AggregateUserActivity } from "../../outputs/AggregateUserActivity";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserActivity)
export class AggregateUserActivityResolver {
  @TypeGraphQL.Query(_returns => AggregateUserActivity, {
    nullable: false
  })
  async aggregateUserActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUserActivityArgs): Promise<AggregateUserActivity> {
    return getPrismaFromContext(ctx).userActivity.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
