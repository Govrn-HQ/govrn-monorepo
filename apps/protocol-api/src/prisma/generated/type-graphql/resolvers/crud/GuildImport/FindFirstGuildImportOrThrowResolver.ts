import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstGuildImportOrThrowArgs } from "./args/FindFirstGuildImportOrThrowArgs";
import { GuildImport } from "../../../models/GuildImport";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildImport)
export class FindFirstGuildImportOrThrowResolver {
  @TypeGraphQL.Query(_returns => GuildImport, {
    nullable: true
  })
  async findFirstGuildImportOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstGuildImportOrThrowArgs): Promise<GuildImport | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildImport.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
