import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneGuildImportArgs } from "./args/DeleteOneGuildImportArgs";
import { GuildImport } from "../../../models/GuildImport";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildImport)
export class DeleteOneGuildImportResolver {
  @TypeGraphQL.Mutation(_returns => GuildImport, {
    nullable: true
  })
  async deleteOneGuildImport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneGuildImportArgs): Promise<GuildImport | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildImport.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
