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

@TypeGraphQL.Resolver(_of => ActivityType)
export class ActivityTypesCustomResolver {
  @TypeGraphQL.Query(_returns => [ActivityType], {
    nullable: false,
  })
  async listActivityTypesByUser(
    @TypeGraphQL.Ctx() { prisma, req }: Context,
    @TypeGraphQL.Args() args: GetActivityTypesPerUserAndDAOsArgs,
  ) {
    const address = req.session.siwe.data.address.toString();
    const user_id = args.where.userId;

    const guildIds = (
      await prisma.guild.findMany({
        where: {
          users: { some: { user: { id: user_id, address } } },
        },
      })
    ).map(g => g.id);

    return await prisma.activityType.findMany({
      where: {
        OR: [
          {
            users: {
              some: {
                user_id: { equals: user_id },
              },
            },
          },
          {
            guilds: {
              some: {
                guild_id: { in: guildIds },
              },
            },
          },
        ],
      },
    });
  }
}
