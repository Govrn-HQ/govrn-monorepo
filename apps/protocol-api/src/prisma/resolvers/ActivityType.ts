import * as TypeGraphQL from 'type-graphql';
import { ActivityType } from '../generated/type-graphql';
import { Context } from './types';

@TypeGraphQL.InputType('GetActivityTypesPerUserAndDAOs')
export class GetActivityTypesPerUserAndDAOs {
  @TypeGraphQL.Field(_type => Number)
  userId: number;
}

@TypeGraphQL.ArgsType()
export class GetActivityTypesPerUserAndDAOsArgs {
  @TypeGraphQL.Field(_type => GetActivityTypesPerUserAndDAOs, {
    nullable: false,
  })
  where: GetActivityTypesPerUserAndDAOs;
}

@TypeGraphQL.ObjectType()
export class ActivityTypesByUser {
  @TypeGraphQL.Field(_type => Number)
  id: number;

  @TypeGraphQL.Field(_type => Boolean)
  active: boolean;

  @TypeGraphQL.Field(_type => String)
  name: string;

  @TypeGraphQL.Field(_type => String)
  createdAt: string;

  @TypeGraphQL.Field(_type => String)
  updatedAt: string;
}

@TypeGraphQL.InputType('GetOrCreateActivityTypeInput', {
  isAbstract: true,
})
export class GetOrCreateActivityTypeInput {
  @TypeGraphQL.Field(_type => String)
  activityTypeName: string;

  @TypeGraphQL.Field(_type => Number, { nullable: true })
  userId?: number;
}

@TypeGraphQL.ArgsType()
export class GetOrCreateActivityTypeArgs {
  @TypeGraphQL.Field(_type => GetOrCreateActivityTypeInput, {
    nullable: false,
  })
  data!: GetOrCreateActivityTypeInput;
}

@TypeGraphQL.Resolver(_of => ActivityType)
export class ActivityTypeCustomResolver {
  @TypeGraphQL.Mutation(_returns => ActivityType, { nullable: false })
  async getOrCreateActivityType(
    @TypeGraphQL.Ctx() { prisma }: Context,
    @TypeGraphQL.Args() args: GetOrCreateActivityTypeArgs,
  ) {
    const activityType = await prisma.activityType.findUnique({
      where: {
        name: args.data.activityTypeName,
      },
    });

    // ActivityType with the provided name already exists.
    if (activityType) return activityType;

    // if no user's id provided, create only ActivityType.
    if (!args.data.userId) {
      return prisma.activityType.create({
        data: { name: args.data.activityTypeName },
      });
    }

    const userActivityType = await prisma.userActivity.create({
      data: {
        activity_type: {
          connectOrCreate: {
            create: {
              name: args.data.activityTypeName,
            },
            where: {
              name: args.data.activityTypeName,
            },
          },
        },
        user: {
          connect: {
            id: args.data.userId,
          },
        },
      },
      select: {
        id: true,
        activity_type: true,
      },
    });
    return userActivityType.activity_type;
  }

  @TypeGraphQL.Query(_returns => [ActivityTypesByUser], {
    nullable: false,
  })
  async getActivityTypesByUser(
    @TypeGraphQL.Ctx() { prisma }: Context,
    @TypeGraphQL.Args() args: GetActivityTypesPerUserAndDAOsArgs,
  ) {
    const user_id = args.where.userId;

    return await prisma.$queryRaw<ActivityTypesByUser>`
      SELECT at.*, ua.user_id, gat.guild_id
      FROM "ActivityType" at
             LEFT JOIN "UserActivity" ua
                       ON at.id = ua.activity_type_id
             LEFT JOIN "GuildActivityType" gat
                       ON at.id = gat.activity_type_id
      WHERE ua.user_id = ${user_id}
         OR (gat.guild_id IN (SELECT guild_id FROM "GuildUser" WHERE user_id = ${user_id}))
      ORDER BY at.name;`;
  }
}
