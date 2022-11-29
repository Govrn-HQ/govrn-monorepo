import * as TypeGraphQL from 'type-graphql';

import { Context } from './types';
import { Guild } from '../generated/type-graphql/models/Guild';
import { Int } from 'type-graphql';

@TypeGraphQL.InputType('GetActiveUsersInput')
export class GetActiveUsersInput {
  @TypeGraphQL.Field(_type => Int)
  guildId: number;

  @TypeGraphQL.Field(_type => Date)
  startDate: Date;

  @TypeGraphQL.Field(_type => Int)
  windowsToLookback: number;

  @TypeGraphQL.Field(_type => Int)
  windowSizeDays: number;
}

@TypeGraphQL.ArgsType()
export class GetActiveUsersArgs {
  @TypeGraphQL.Field(_type => GetActiveUsersInput, {
    nullable: false,
  })
  where!: GetActiveUsersInput;
}

@TypeGraphQL.Resolver(_of => Guild)
export class GuildCustomResolver {
  @TypeGraphQL.Query(_returns => Int)
  async getAverageActiveGuildUsers(
    @TypeGraphQL.Ctx() { prisma }: Context,
    @TypeGraphQL.Args() args: GetActiveUsersArgs,
  ) {
    // e.g. 9w rolling avg weekly active would have windowsToLookback
    // == 9, and windowSizeDays == 7
    // 1w rolling avg daily active would have windowsToLookback == 7
    // and windowSizeDays == 1
    const guildId = args.where.guildId;
    const startDate = args.where.startDate;
    const windowsToLookback = args.where.windowsToLookback;
    const windowSizeDays = args.where.windowSizeDays;

    const totalLookbackDays = windowsToLookback * windowSizeDays;
    const lookbackDate = new Date(startDate.getDate() - totalLookbackDays);

    const result = await prisma.$queryRaw<number>`
      WITH unique_guild_contributor_daily_count as (
        SELECT
          count(distinct c.user_id) as distinct_contributors,
          EXTRACT(year from gc.createdAt) as year,
          EXTRACT(month from gc.createdAt) as month,
          trunc(EXTRACT(day from TIMESTAMP) / ${windowSizeDays}) as day_bucket
        FROM 
          "GuildContribution" gc 
        LEFT JOIN "Contribution" as c
          ON gc."contribution_id" = c.id
        WHERE (
          gc."createdAt"::date BETWEEN ${lookbackDate} AND ${startDate} 
          AND gc."guild_id" = ${guildId}
        )
        GROUP BY 
          year, month, day_bucket
      )

      SELECT
        avg(distinct_contributors)
      FROM
        unique_guild_contributor_daily_count
      `;
    return result;
  }
}
