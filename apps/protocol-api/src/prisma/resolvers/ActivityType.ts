import * as TypeGraphQL from 'type-graphql';
import { ActivityType } from '../generated/type-graphql';
import { Context } from './types';

@TypeGraphQL.InputType('ListActivityTypesByUserInput')
export class ListActivityTypesByUserInput {
  @TypeGraphQL.Field(_type => Number, {
    nullable: true,
  })
  id?: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  createdAt?: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  updatedAt?: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  name?: string;
}

@TypeGraphQL.ArgsType()
export class ListActivityTypesByUserArgs {
  @TypeGraphQL.Field(_type => ListActivityTypesByUserInput, {
    nullable: false,
  })
  where: ListActivityTypesByUserInput;
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

  @TypeGraphQL.Query(_returns => [ActivityType], {
    nullable: false,
  })
  async listActivityTypesByUser(
    @TypeGraphQL.Ctx() { prisma, req }: Context,
    @TypeGraphQL.Args() args: ListActivityTypesByUserArgs,
  ) {
    const address = req.session.siwe.data.address as string;

    const guildIds = (
      await prisma.guild.findMany({
        where: {
          users: { some: { user: { address } } },
        },
      })
    ).map(g => g.id);

    return await prisma.activityType.findMany({
      where: {
        AND: [
          {
            OR: [
              { users: { some: { user: { address } } } },
              { guilds: { some: { guild_id: { in: guildIds } } } },
            ],
          },
          { id: args.where.id },
        ],
      },
    });
  }
}
