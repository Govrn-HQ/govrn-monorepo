import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { GroupByGuildImportStatusArgs } from "./args/GroupByGuildImportStatusArgs";
import { GuildImportStatus } from "../../../models/GuildImportStatus";
import { GuildImportStatusGroupBy } from "../../outputs/GuildImportStatusGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildImportStatus)
export class GroupByGuildImportStatusResolver {
  @TypeGraphQL.Query(_returns => [GuildImportStatusGroupBy], {
    nullable: false
  })
  async groupByGuildImportStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByGuildImportStatusArgs): Promise<GuildImportStatusGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildImportStatus.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
