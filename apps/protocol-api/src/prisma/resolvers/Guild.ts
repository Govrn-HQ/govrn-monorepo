import * as TypeGraphQL from 'type-graphql';

import { Context } from './types';
import { Guild } from "../generated/type-graphql";
import { Int } from 'type-graphql';

@TypeGraphQL.InputType('GetActiveUsersInput')
export class GetActiveUsersInput {
  @TypeGraphQL.Field(_type => Int)
  guildId: number;

  @TypeGraphQL.Field(_type => Date)
  startDate: Date;

  @TypeGraphQL.Field(_type => Int)
  numWindows: number;

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
  @TypeGraphQL.Query(_returns => Number)
  async getActiveGuildUsersAverage(
    @TypeGraphQL.Ctx() { prisma }: Context,
    @TypeGraphQL.Args() args: GetActiveUsersArgs,
  ) {
    // e.g. 9w rolling avg weekly active would have numWindows
    // == 9, and windowSizeDays == 7
    // 1w rolling avg daily active would have numWindows == 7
    // and windowSizeDays == 1
    const guildId = args.where.guildId;
    const startDate = args.where.startDate;
    const numWindows = args.where.numWindows;
    const windowSizeDays = args.where.windowSizeDays;

    const totalLookbackDays = numWindows * windowSizeDays;
    const lookbackDate = new Date(startDate);
    lookbackDate.setDate(lookbackDate.getDate() - totalLookbackDays);

    const result = await prisma.$queryRaw<number>`
      WITH unique_contributor_buckets as (
        SELECT
          coalesce(count(distinct c.user_id), 0) as distinct_contributor_count,
          extract(year from d.dt) as year,
          extract(month from d.dt) as month,
          trunc(EXTRACT(day from d.dt) / ${windowSizeDays}) as day_bucket
        FROM (
          SELECT dt::date
          FROM generate_series(${lookbackDate}, ${startDate}, '1 day'::interval) dt
        ) d
        LEFT JOIN "Contribution" as c
          ON c.date_of_engagement::date = d.dt::date
        LEFT JOIN "GuildContribution" as gc
          ON gc."contribution_id" = c.id
        WHERE (
          gc."guild_id" IS NULL OR gc."guild_id" = ${guildId}
        )
        GROUP BY
          year, month, day_bucket
      )

      SELECT
        avg(distinct_contributor_count)
      FROM
        unique_contributor_buckets
      `;
    return result[0].avg;
  }
}
