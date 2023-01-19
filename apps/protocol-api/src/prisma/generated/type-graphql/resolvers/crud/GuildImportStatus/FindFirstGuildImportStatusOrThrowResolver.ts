import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstGuildImportStatusOrThrowArgs } from "./args/FindFirstGuildImportStatusOrThrowArgs";
import { GuildImportStatus } from "../../../models/GuildImportStatus";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildImportStatus)
export class FindFirstGuildImportStatusOrThrowResolver {
  @TypeGraphQL.Query(_returns => GuildImportStatus, {
    nullable: true
  })
  async findFirstGuildImportStatusOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstGuildImportStatusOrThrowArgs): Promise<GuildImportStatus | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildImportStatus.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
