import * as TypeGraphQL from "type-graphql";
import { GuildImport } from "../../../models/GuildImport";
import { GuildImportStatus } from "../../../models/GuildImportStatus";
import { GuildImportStatusGuild_importsArgs } from "./args/GuildImportStatusGuild_importsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildImportStatus)
export class GuildImportStatusRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [GuildImport], {
    nullable: false
  })
  async guild_imports(@TypeGraphQL.Root() guildImportStatus: GuildImportStatus, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: GuildImportStatusGuild_importsArgs): Promise<GuildImport[]> {
    return getPrismaFromContext(ctx).guildImportStatus.findUnique({
      where: {
        id: guildImportStatus.id,
      },
    }).guild_imports(args);
  }
}
