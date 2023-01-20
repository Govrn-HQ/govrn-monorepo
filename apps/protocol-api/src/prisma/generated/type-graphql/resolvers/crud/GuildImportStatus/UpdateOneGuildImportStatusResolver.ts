import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneGuildImportStatusArgs } from "./args/UpdateOneGuildImportStatusArgs";
import { GuildImportStatus } from "../../../models/GuildImportStatus";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildImportStatus)
export class UpdateOneGuildImportStatusResolver {
  @TypeGraphQL.Mutation(_returns => GuildImportStatus, {
    nullable: true
  })
  async updateOneGuildImportStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneGuildImportStatusArgs): Promise<GuildImportStatus | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildImportStatus.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
