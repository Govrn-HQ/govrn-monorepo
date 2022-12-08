import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByGuildVerificationStatusArgs } from "./args/GroupByGuildVerificationStatusArgs";
import { GuildVerificationStatus } from "../../../models/GuildVerificationStatus";
import { GuildVerificationStatusGroupBy } from "../../outputs/GuildVerificationStatusGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildVerificationStatus)
export class GroupByGuildVerificationStatusResolver {
  @TypeGraphQL.Query(_returns => [GuildVerificationStatusGroupBy], {
    nullable: false
  })
  async groupByGuildVerificationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByGuildVerificationStatusArgs): Promise<GuildVerificationStatusGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).guildVerificationStatus.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
