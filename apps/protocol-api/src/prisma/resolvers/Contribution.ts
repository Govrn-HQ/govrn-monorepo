import { Prisma } from '@prisma/client';
import * as TypeGraphQL from 'type-graphql';
import { Context } from './types';
import { Contribution } from '../generated/type-graphql/models/Contribution';

@TypeGraphQL.InputType('UserContributionCreateInput', {
  isAbstract: true,
})
export class UserContributionCreateInput {
  @TypeGraphQL.Field(_type => String)
  address: string;

  @TypeGraphQL.Field(_type => String)
  chainName: string;

  @TypeGraphQL.Field(_type => Number)
  userId: number;

  @TypeGraphQL.Field(_type => String)
  name: string;

  @TypeGraphQL.Field(_type => String)
  details: string;

  @TypeGraphQL.Field(_type => String)
  proof: string;

  @TypeGraphQL.Field(_type => String)
  activityTypeName: string;

  @TypeGraphQL.Field(_type => Date)
  dateOfEngagement: Date;

  @TypeGraphQL.Field(_type => String)
  status: string;

  @TypeGraphQL.Field(_type => Number, { nullable: true })
  guildId?: number;
}

@TypeGraphQL.ArgsType()
export class CreateUserContributionArgs {
  @TypeGraphQL.Field(_type => UserContributionCreateInput, {
    nullable: false,
  })
  data!: UserContributionCreateInput;
}

@TypeGraphQL.InputType('UserOnChainContributionCreateInput', {
  isAbstract: true,
})
export class UserOnChainContributionCreateInput {
  @TypeGraphQL.Field(_type => Number)
  activityTypeId: number;

  @TypeGraphQL.Field(_type => String)
  name: string;

  @TypeGraphQL.Field(_type => String)
  details: string;

  @TypeGraphQL.Field(_type => Date)
  dateOfSubmission: Date;

  @TypeGraphQL.Field(_type => Date)
  dateOfEngagement: Date;

  @TypeGraphQL.Field(_type => String)
  proof: string;

  @TypeGraphQL.Field(_type => String)
  status: string;

  @TypeGraphQL.Field(_type => Number)
  userId: number;

  @TypeGraphQL.Field(_type => Number)
  onChainId: number;

  @TypeGraphQL.Field(_type => String)
  txHash: string;
}

@TypeGraphQL.ArgsType()
export class CreateUserOnChainContributionArgs {
  @TypeGraphQL.Field(_type => UserOnChainContributionCreateInput, {
    nullable: false,
  })
  data!: UserOnChainContributionCreateInput;
}

@TypeGraphQL.InputType('UserContributionUpdateInput', {
  isAbstract: true,
})
export class UserContributionUpdateInput {
  @TypeGraphQL.Field(_type => String)
  address: string;

  @TypeGraphQL.Field(_type => String)
  chainName: string;

  @TypeGraphQL.Field(_type => Number)
  userId: number;

  @TypeGraphQL.Field(_type => String)
  name: string;

  @TypeGraphQL.Field(_type => String, { nullable: true })
  details?: string;

  @TypeGraphQL.Field(_type => String, { nullable: true })
  proof?: string | undefined;

  @TypeGraphQL.Field(_type => String)
  activityTypeName: string;

  @TypeGraphQL.Field(_type => Date)
  dateOfEngagement: Date;

  @TypeGraphQL.Field(_type => String)
  status: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int)
  contributionId: number;

  @TypeGraphQL.Field(_type => Number, { nullable: true })
  guildId: number;

  @TypeGraphQL.Field(_type => Number, { nullable: true })
  currentGuildId?: number;

  @TypeGraphQL.Field(_type => String, { nullable: true })
  contributionUserAddress?: string;
}

@TypeGraphQL.ArgsType()
export class UpdateUserContributionArgs {
  @TypeGraphQL.Field(_type => UserContributionUpdateInput, {
    nullable: false,
  })
  data!: UserContributionUpdateInput;
}

@TypeGraphQL.InputType('UserOnChainContributionUpdateInput', {
  isAbstract: true,
})
export class UserOnChainContributionUpdateInput {
  @TypeGraphQL.Field(_type => String)
  name: string;

  @TypeGraphQL.Field(_type => String)
  details: string;

  @TypeGraphQL.Field(_type => Date)
  dateOfEngagement: Date;

  @TypeGraphQL.Field(_type => Date)
  dateOfSubmission: Date;

  @TypeGraphQL.Field(_type => String)
  proof: string;

  @TypeGraphQL.Field(_type => String)
  status: string;

  @TypeGraphQL.Field(_type => Number)
  onChainId: number;

  @TypeGraphQL.Field(_type => String)
  txHash: string;

  @TypeGraphQL.Field(_type => Number)
  userId: number;

  @TypeGraphQL.Field(_type => Number)
  id: number;
}

@TypeGraphQL.ArgsType()
export class UpdateUserOnChainContributionArgs {
  @TypeGraphQL.Field(_type => UserOnChainContributionUpdateInput, {
    nullable: false,
  })
  data!: UserOnChainContributionUpdateInput;
}

@TypeGraphQL.InputType('UserContributionDeleteInput', {
  isAbstract: true,
})
export class UserContributionDeleteInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int)
  contributionId: number;
}

@TypeGraphQL.ArgsType()
export class DeleteUserContributionArgs {
  @TypeGraphQL.Field(_type => UserContributionDeleteInput, {
    nullable: false,
  })
  where!: UserContributionDeleteInput;
}

@TypeGraphQL.InputType('GetUserContributionCountInput')
export class GetContributionCountForUser {
  @TypeGraphQL.Field(_type => Number)
  id: number;

  @TypeGraphQL.Field(_type => Date)
  startDate: Date;

  @TypeGraphQL.Field(_type => Date)
  endDate: Date;

  @TypeGraphQL.Field(_type => [Number], { nullable: true })
  guildIds?: number[];

  @TypeGraphQL.Field(_type => Boolean, { nullable: true })
  excludeUnassigned?: boolean;
}

@TypeGraphQL.ArgsType()
export class GetUserContributionCountArgs {
  @TypeGraphQL.Field(_type => GetContributionCountForUser, {
    nullable: false,
  })
  where!: GetContributionCountForUser;
}

@TypeGraphQL.InputType('GetDaoContributionCountInput')
export class GetDaoContributionCount {
  @TypeGraphQL.Field(_type => Number)
  daoId: number;

  @TypeGraphQL.Field(_type => Date)
  startDate: Date;

  @TypeGraphQL.Field(_type => Date)
  endDate: Date;
}

@TypeGraphQL.ArgsType()
export class GetDaoContributionCountArgs {
  @TypeGraphQL.Field(_type => GetDaoContributionCount, {
    nullable: false
  })
  where!: GetDaoContributionCount
}

@TypeGraphQL.ObjectType('ContributionCountByDate', { isAbstract: true })
export class ContributionCountByDate {
  @TypeGraphQL.Field(_type => Number)
  count: number;

  @TypeGraphQL.Field(_type => String)
  date: string;

  @TypeGraphQL.Field(_type => Number, {
    nullable: true,
  })
  guild_id?: number;

  @TypeGraphQL.Field(_type => String)
  name: string;
}

@TypeGraphQL.ObjectType('ContributionCountByActivityType', { isAbstract: true })
export class ContributionCountByActivityType {
  @TypeGraphQL.Field(_type => Number)
  count: number;

  @TypeGraphQL.Field(_type => String)
  activity_name: string;

  @TypeGraphQL.Field(_type => Number)
  activity_id: number;
}

@TypeGraphQL.Resolver(_of => Contribution)
export class ContributionCustomResolver {
  @TypeGraphQL.Mutation(_returns => Contribution, { nullable: false })
  async createUserContribution(
    @TypeGraphQL.Ctx() { prisma }: Context,
    @TypeGraphQL.Args() args: CreateUserContributionArgs,
  ) {
    return await prisma.contribution.create({
      data: {
        user: {
          connectOrCreate: {
            create: {
              address: args.data.address,
              chain_type: {
                create: {
                  name: args.data.chainName, //unsure about this -- TODO: check
                },
              },
            },
            where: {
              id: args.data.userId,
            },
          },
        },
        name: args.data.name,
        details: args.data.details,
        proof: args.data.proof,
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
        date_of_engagement: new Date(args.data.dateOfEngagement).toISOString(),
        status: {
          connectOrCreate: {
            create: {
              name: args.data.status,
            },
            where: {
              name: args.data.status,
            },
          },
        },
        ...(args.data.guildId !== undefined && {
          guilds: {
            create: [
              {
                guild: {
                  connect: {
                    id: args.data.guildId,
                  },
                },
              },
            ],
          },
        }),
      },
    });
  }

  @TypeGraphQL.Mutation(_returns => Contribution, { nullable: false })
  async createOnChainUserContribution(
    @TypeGraphQL.Ctx() { prisma }: Context,
    @TypeGraphQL.Args() args: CreateUserOnChainContributionArgs,
  ) {
    return await prisma.contribution.create({
      data: {
        activity_type: {
          connect: { id: args.data.activityTypeId },
        },
        name: args.data.name,
        details: args.data.details,
        proof: args.data.proof,
        date_of_engagement: new Date(args.data.dateOfEngagement).toISOString(),
        status: {
          connect: { name: 'minted' },
        },
        tx_hash: args.data.txHash,
        user: {
          connect: { id: args.data.userId },
        },
        on_chain_id: args.data.onChainId,
      },
    });
  }

  @TypeGraphQL.Mutation(_returns => Contribution, { nullable: false })
  async updateUserContribution(
    @TypeGraphQL.Ctx() { prisma, req }: Context,
    @TypeGraphQL.Args() args: UpdateUserContributionArgs,
  ) {
    const address = req.session.siwe.data.address;

    if (args.data.contributionUserAddress !== address) {
      throw new Error('You can only edit your own Contributions.');
    }

    if (args.data.status !== 'staging') {
      throw new Error('You can only edit Contributions with a Staging status.');
    }

    const res = await prisma.contribution.updateMany({
      data: {
        name: {
          set: args.data.name,
        },
        details: {
          set: args.data?.details,
        },
        proof: {
          set: args.data?.proof,
        },
        date_of_engagement: {
          set: args.data.dateOfEngagement,
        },
      },
      where: {
        AND: [
          {
            id: { equals: args.data.contributionId },
          },
          { user: { is: { address: { equals: address } } } },
        ],
      },
    });
    if (res.count !== 1) {
      throw `Wrong number of rows updated ${res.count} updateUserContribution`;
    }

    if (args.data.currentGuildId !== undefined) {
      await prisma.contribution.update({
        data: {
          ...(args.data.currentGuildId && {
            guilds: {
              delete: [
                {
                  guild_id_contribution_id: {
                    contribution_id: args.data.contributionId,
                    guild_id: args.data.currentGuildId,
                  },
                },
              ],
            },
          }),
        },
        where: {
          id: args.data.contributionId,
        },
      });
    }

    return await prisma.contribution.update({
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
          connectOrCreate: {
            create: {
              address: args.data.address,
              chain_type: {
                create: {
                  name: args.data.chainName, //unsure about this -- TODO: check
                },
              },
            },
            where: {
              id: args.data.userId,
            },
          },
        },
        status: {
          connect: {
            name: args.data.status,
          },
        },
        ...(args.data.guildId !== null && {
          guilds: {
            create: [
              {
                guild: {
                  connect: {
                    id: args.data.guildId,
                  },
                },
              },
            ],
          },
        }),
      },
      where: {
        id: args.data.contributionId,
      },
    });
  }

  @TypeGraphQL.Mutation(_returns => Contribution, { nullable: false })
  async updateUserOnChainContribution(
    @TypeGraphQL.Ctx() { prisma, req }: Context,
    @TypeGraphQL.Args() args: UpdateUserOnChainContributionArgs,
  ) {
    const address = req.session.siwe.data.address;
    const update = await prisma.contribution.updateMany({
      data: {
        name: {
          set: args.data.name,
        },
        details: {
          set: args.data.details,
        },
        proof: {
          set: args.data.proof,
        },
        date_of_engagement: {
          set: args.data.dateOfEngagement,
        },
        date_of_submission: {
          set: args.data.dateOfSubmission,
        },
        on_chain_id: {
          set: args.data.onChainId,
        },
        tx_hash: {
          set: args.data.txHash,
        },
      },
      where: {
        AND: [
          {
            id: { equals: args.data.id },
          },
          { user: { is: { address: { equals: address } } } },
        ],
      },
    });
    if (update.count !== 1) {
      throw `Wrong number of rows updated ${update.count} updateUserOnChainContribution`;
    }
    return await prisma.contribution.update({
      data: {
        status: {
          connect: {
            name: args.data.status,
          },
        },
      },
      where: {
        id: args.data.id,
      },
    });
  }

  @TypeGraphQL.Mutation(_returns => Contribution, { nullable: false })
  async deleteUserContribution(
    @TypeGraphQL.Ctx() { prisma, req }: Context,
    @TypeGraphQL.Args() args: DeleteUserContributionArgs,
  ) {
    const contributionId = args.where.contributionId;
    const address = req.session.siwe.data.address;
    const query = await prisma.contribution.findMany({
      include: { user: true },
      where: {
        id: { equals: contributionId },
      },
    });

    if (query.length === 0) {
      throw Error("Contribution doesn't exist.");
    }

    const contribution = query[0];
    if (address !== contribution.user.address) {
      throw Error("User doesn't own this contribution.");
    }

    return await prisma.contribution.delete({
      where: { id: contributionId },
    });
  }

  @TypeGraphQL.Query(_returns => [ContributionCountByDate], {
    nullable: false,
  })
  async getContributionCountByDateForUserInRange(
    @TypeGraphQL.Ctx() { prisma }: Context,
    @TypeGraphQL.Args() args: GetUserContributionCountArgs,
  ) {
    // grouping by a derived field not yet supported in prisma
    // would need to group by date, not the datetime as is stored in postg*/
    // YYY-MM-DD hh:mm:ss.sss
    const user_id = args.where.id;
    const start = args.where.startDate;
    const end = args.where.endDate;

    let guildWhere = Prisma.sql`gc."guild_id" is NULL`;
    const guildIds = [...args.where?.guildIds];
    if (guildIds.length > 0 && !args.where?.excludeUnassigned) {
      guildWhere = Prisma.sql`(gc."guild_id" in (${Prisma.join(
        guildIds,
      )})  OR gc."guild_id" is NULL)`;
    } else if (guildIds.length > 0 && args.where?.excludeUnassigned) {
      guildWhere = Prisma.sql`(gc."guild_id" in (${Prisma.join(guildIds)}))`;
    }

    return await prisma.$queryRaw<ContributionCountByDate>`
      WITH guild_contributions AS (
          SELECT 
      	    c.id,
      	    c.date_of_engagement,
      	    c.user_id,
      	    g.name,
      	    gc.guild_id
          FROM
              "Contribution" c
      	  LEFT JOIN "GuildContribution" as gc
      	    ON gc."contribution_id" = c."id"
      	  LEFT JOIN "Guild" as g
      	    ON g."id" = gc."guild_id"
      	  WHERE ${guildWhere}
      )


      SELECT gc.guild_id,
             coalesce(gc.name, 'Unassigned') as name,
             d.dt                            as date,
             count(gc.date_of_engagement)    as count
      FROM (
        SELECT dt::date
        FROM generate_series(${start}, ${end}, '1 day'::interval) dt
    ) d
		      LEFT JOIN guild_contributions as gc
					  ON gc.date_of_engagement::date = d.dt::date
      WHERE (d.dt BETWEEN ${start} AND ${end})
        AND (gc."user_id" = ${user_id} OR gc."user_id" is null)
      GROUP BY gc.guild_id, gc.name, d.dt
      ORDER BY d.dt;`;
  }

  @TypeGraphQL.Query(_returns => [ContributionCountByActivityType], {
    nullable: false,
  })
  async getContributionCountForDaoByActivityTypeInRange(
    @TypeGraphQL.Ctx() { prisma }: Context,
    @TypeGraphQL.Args() args: GetDaoContributionCountArgs,
  ) {
    const daoId = args.where.daoId;
    const start = args.where.startDate;
    const end = args.where.endDate;

    // grouping on nested fields not yet supported in prisma 
    // need to group on the activity id and name, which are 
    // in a separate table than guild contributions
    // N.B. the guild contribution created date is used for the range,
    // not the contribution created date
    return await prisma.$queryRaw<ContributionCountByActivityType>`
      SELECT c.activity_type_id as activity_id,
             a.name as activity_name,
             count(c.id) as count
      FROM
        "GuildContribution" gc 
        LEFT JOIN "Contribution" as c 
          ON gc."contribution_id" = c."id"
        LEFT JOIN "ActivityType" as a
          ON a."id" = c."activity_type_id"
      WHERE (
        gc."createdAt"::date BETWEEN ${start} AND ${end} 
        AND gc."guild_id" = ${daoId}
      ) GROUP BY a.name, c.activity_type_id
      ORDER BY count;`;
  }
}
