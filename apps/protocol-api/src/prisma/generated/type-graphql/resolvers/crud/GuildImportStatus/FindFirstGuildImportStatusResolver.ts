import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstGuildImportStatusArgs } from "./args/FindFirstGuildImportStatusArgs";
import { GuildImportStatus } from "../../../models/GuildImportStatus";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildImportStatus)
export class FindFirstGuildImportStatusResolver {
  @TypeGraphQL.Query(_returns => GuildImportStatus, {
    nullable: true
  })
  async findFirstGuildImportStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstGuildImportStatusArgs): Promise<GuildImportStatus | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildImportStatus.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
