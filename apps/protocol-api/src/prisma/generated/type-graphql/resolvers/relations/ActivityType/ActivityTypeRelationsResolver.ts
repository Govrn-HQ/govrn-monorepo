import * as TypeGraphQL from "type-graphql";
import { ActivityType } from "../../../models/ActivityType";
import { CategoryActivityType } from "../../../models/CategoryActivityType";
import { Contribution } from "../../../models/Contribution";
import { GuildActivityType } from "../../../models/GuildActivityType";
import { UserActivity } from "../../../models/UserActivity";
import { ActivityTypeCategoryActivityArgs } from "./args/ActivityTypeCategoryActivityArgs";
import { ActivityTypeContributionsArgs } from "./args/ActivityTypeContributionsArgs";
import { ActivityTypeGuildsArgs } from "./args/ActivityTypeGuildsArgs";
import { ActivityTypeUsersArgs } from "./args/ActivityTypeUsersArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ActivityType)
export class ActivityTypeRelationsResolver {
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

  @TypeGraphQL.FieldResolver(_type => [CategoryActivityType], {
    nullable: false
  })
  async categoryActivity(@TypeGraphQL.Root() activityType: ActivityType, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ActivityTypeCategoryActivityArgs): Promise<CategoryActivityType[]> {
    return getPrismaFromContext(ctx).activityType.findUnique({
      where: {
        id: activityType.id,
      },
    }).categoryActivity(args);
  }

  @TypeGraphQL.FieldResolver(_type => [GuildActivityType], {
    nullable: false
  })
  async guilds(@TypeGraphQL.Root() activityType: ActivityType, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ActivityTypeGuildsArgs): Promise<GuildActivityType[]> {
    return getPrismaFromContext(ctx).activityType.findUnique({
      where: {
        id: activityType.id,
      },
    }).guilds(args);
  }
}
