import * as TypeGraphQL from "type-graphql";
import { ActivityType } from "../../../models/ActivityType";
import { CategoryActivity } from "../../../models/CategoryActivity";
import { Contribution } from "../../../models/Contribution";
import { UserActivity } from "../../../models/UserActivity";
import { ActivityTypeContributionsArgs } from "./args/ActivityTypeContributionsArgs";
import { ActivityTypeUsersArgs } from "./args/ActivityTypeUsersArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ActivityType)
export class ActivityTypeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => CategoryActivity, {
    nullable: false
  })
  async category_activity(@TypeGraphQL.Root() activityType: ActivityType, @TypeGraphQL.Ctx() ctx: any): Promise<CategoryActivity> {
    return getPrismaFromContext(ctx).activityType.findUnique({
      where: {
        id: activityType.id,
      },
    }).category_activity({});
  }

  @TypeGraphQL.FieldResolver(_type => [UserActivity], {
    nullable: false
  })
  async users(@TypeGraphQL.Root() activityType: ActivityType, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ActivityTypeUsersArgs): Promise<UserActivity[]> {
    return getPrismaFromContext(ctx).activityType.findUnique({
      where: {
        id: activityType.id,
      },
    }).users(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Contribution], {
    nullable: false
  })
  async contributions(@TypeGraphQL.Root() activityType: ActivityType, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ActivityTypeContributionsArgs): Promise<Contribution[]> {
    return getPrismaFromContext(ctx).activityType.findUnique({
      where: {
        id: activityType.id,
      },
    }).contributions(args);
  }
}
