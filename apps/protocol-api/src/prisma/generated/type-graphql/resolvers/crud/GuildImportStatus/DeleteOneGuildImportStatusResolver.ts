import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneGuildImportStatusArgs } from "./args/DeleteOneGuildImportStatusArgs";
import { GuildImportStatus } from "../../../models/GuildImportStatus";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildImportStatus)
export class DeleteOneGuildImportStatusResolver {
  @TypeGraphQL.Mutation(_returns => GuildImportStatus, {
    nullable: true
  })
  async deleteOneGuildImportStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneGuildImportStatusArgs): Promise<GuildImportStatus | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildImportStatus.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
