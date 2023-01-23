import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneGuildImportStatusArgs } from "./args/UpsertOneGuildImportStatusArgs";
import { GuildImportStatus } from "../../../models/GuildImportStatus";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GuildImportStatus)
export class UpsertOneGuildImportStatusResolver {
  @TypeGraphQL.Mutation(_returns => GuildImportStatus, {
    nullable: false
  })
  async upsertOneGuildImportStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneGuildImportStatusArgs): Promise<GuildImportStatus> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).guildImportStatus.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
