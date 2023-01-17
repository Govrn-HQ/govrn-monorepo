import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByGuildImportArgs } from "./args/GroupByGuildImportArgs";
import { GuildImport } from "../../../models/GuildImport";
import { GuildImportGroupBy } from "../../outputs/GuildImportGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildImport)
export class GroupByGuildImportResolver {
  @TypeGraphQL.Query(_returns => [GuildImportGroupBy], {
    nullable: false
  })
  async groupByGuildImport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByGuildImportArgs): Promise<GuildImportGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildImport.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
