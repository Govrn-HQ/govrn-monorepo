import * as TypeGraphQL from 'type-graphql';
import { ActivityType } from '../../../models/ActivityType';
import { User } from '../../../models/User';
import { UserActivity } from '../../../models/UserActivity';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => UserActivity)
export class UserActivityRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false,
  })
  async user(
    @TypeGraphQL.Root() userActivity: UserActivity,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<User> {
    return getPrismaFromContext(ctx)
      .userActivity.findUnique({
        where: {
          id: userActivity.id,
        },
      })
      .user({});
  }

  @TypeGraphQL.FieldResolver(_type => ActivityType, {
    nullable: false,
  })
  async activity_type(
    @TypeGraphQL.Root() userActivity: UserActivity,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<ActivityType> {
    return getPrismaFromContext(ctx)
      .userActivity.findUnique({
        where: {
          id: userActivity.id,
        },
      })
      .activity_type({});
  }
}
